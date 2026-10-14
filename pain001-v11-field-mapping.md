# SDPPayload to pain.001.001.11: field mapping

Story ENTPMTS-144060, analysis of converting the existing payment object to a pain.001.001.11 message. This document is the field-to-field mapping for the new ISO 20022 mapping library that turns the PayX payment object (`SDPPayload`) into a `pain.001.001.11` Customer Credit Transfer Initiation for outbound GPN and corporate wires to FIS OPF (XML first, then JSON over the FIS API).


## 1. Scope and sources

| Source | What it is | How it is used here |
|---|---|---|
| `com.capitalone.commercial:payx-payload` | The PayX payment object library. `SDPPayload` and its nested classes (`Account`, `Bank`, `Address`, `PaymentType`, `Agent`, `ExchangeRate`, `RemitterInfo`, `SupplementaryData`, `OptionalHeaderInfo`) are generated from `src/main/schema/SDPPayload.json`. Current library version 2.54-SNAPSHOT; the reference converter below is built against 2.16-beta. | Source side of every row. The schema declares no required fields, no lengths and no enumerations, so every ISO constraint is the mapper's job. |
| `PmtInfrEngn-wire-ii-intg` (package `com.capitalone.wirerail.wireiiintg`), branch `master` | The existing Wire II integration service for PIE. Its `converter.painv9` package maps `SDPPayload` to `pain.001.001.09`. | Reference for the mapping rules. The new library does not extend it; every rule it applies is a candidate to carry over, and every defect it carries is a decision to make. |
| `pain.001.001.11.xsd` (ISO 20022 Standards Editor build R1.6.16, 2021-02-16) | The target schema. | Target side of every row: element path, type, cardinality, rules. |

Facts about the reference converter that matter for the new library:

- The pain.001 V09 classes it uses (`GroupHeader85`, `PaymentInstruction30`, `CreditTransferTransaction34`, `CashAccount38`, and so on) are not a published ISO DTO library. They are generated at build time by `cxf-codegen-plugin` (`wsdl2java`, CXF 4.0.2) from the Fiserv PIE SOAP contract `src/wsdl/PaymentInitiationService-v2.0.wsdl` with the binding file `JAXBBindingsPaymentInitiation.xml`, into `target/generated-sources/xjc`. The Dovetail `ClientData` supplementary-data classes come from the same WSDL. The new library therefore cannot reuse those classes; it needs its own JAXB (or Jackson) model generated from `pain.001.001.11.xsd`.
- Build: Maven, `com.capitalone.asvwireii:wire-ii-intg:0.0.1-SNAPSHOT`, Java 21, Spring Boot with Capital One chassis starters. The `payx-payload` dependency is `2.16-beta` with `jackson-databind` excluded.
- The service also contains an older, non-V9 converter with its own local model (`model.Account`, `model.Bank`, `model.Address` with `addressLine1..4` and `bic`). The V9 path does not use that model; it reads the `payx-payload` classes directly. Only two local enums (`model.AccountIdType`, `model.PaymentTypeCode`) are shared.


## 2. How the V9 converter is organised

### 2.1 Call chain

```
SDPPayload
  |
  +-- GroupHeaderConversionUtilV9.setGroupHeader(payload)          -> GroupHeader85 (GrpHdr)
  |       setInitiatingParty(payload)                               -> PartyIdentification135 (InitgPty)
  |       setBankIdentifierCode(payload)                            -> Party38Choice with AnyBIC = wire entity id
  |
  +-- PaymentInfoUtilV9.setPaymentInfo(payload)                     -> PaymentInstruction30 (PmtInf)
          setTransactionSettlementDate(payload)                     -> ReqdExctnDt/Dt
          new Debtor(payload, aceConvertAddressService)             -> Dbtr, DbtrAcct, DbtrAgt, DbtrAgtAcct
              Debtor.setDbtr            (payer, ACE standardisation when applicable)
              Debtor.setDebtorAgent     (reads onBehalfOfPayer, not payerBank)
              PaymentInfoUtilV9.setCashAccount38 / setCashAccount38ID
          setCreditTransferTransactionInformation(payload)          -> one CreditTransferTransaction34 (CdtTrfTxInf)
              setPaymentTypeInfo                                    -> PmtTpInf
              setAmount / setDomAmount / isValidAmount              -> Amt, XchgRateInf
              new Creditor(payload, blankStructuredAddressEnabled)  -> Cdtr, CdtrAcct, CdtrAgt
                  Creditor.setCdtr, Creditor.setCreditorAgent
              new UltimateDebtor(payload), new UltimateCreditor(payload)
              setIntermediaryAgents  -> setBankAgent, createCashAccountForBank
              createCashAccountForBank(payeeBank.bankAccountNumber) -> CdtrAgtAcct
              setRemittanceInformation                              -> RmtInf
              setBankToBankInstructions -> sanitizeBankToBankForTmobs, addStarSeperators -> InstrForCdtrAgt[]
              getSupplementaryData                                  -> SplmtryData (Dovetail ClientData envelope)
```

The class that assembles the `Document` / `CustomerCreditTransferInitiationV09` from the two results was not part of this review (it is the non-V9 `InitiatePaymentsConverter` family); the two component entry points above are the whole mapping.

Shared static helpers in `PaymentInfoUtilV9`, used by every party and agent builder:

| Helper | Builds | Used for |
|---|---|---|
| `setPostalAddress24(Address)` | `PostalAddress24` from the payload `Address` | every `PstlAdr` |
| `applyStructuredAddressPolicy(PostalAddress24, boolean)` | blanks the structured fields and keeps only `AdrLine` when the flag is on | agent addresses only (`CdtrAgt`, `IntrmyAgt1`, `IntrmyAgt2`) |
| `setIdentificationNumber(PartyIdentification135, Account)` | `Id/OrgId` and `Id/PrvtId` | `InitgPty`, `Dbtr`, `Cdtr`, `UltmtDbtr`, `UltmtCdtr` |
| `setCashAccount38(String ccy, Account)` | `CashAccount38` keyed on `accountNumber` | `DbtrAcct`, `CdtrAcct`, `DbtrAgtAcct` |
| `setCashAccount38ID(String ccy, Account)` | `CashAccount38` keyed on an identification number | `DbtrAgtAcct` when the on-behalf-of party has no account number |
| `setBankAgent(Bank)` | `BranchAndFinancialInstitutionIdentification6` | intermediary agents |
| `createCashAccountForBank(String)` | `CashAccount38` with `Othr/Id` only | agent accounts |

### 2.2 The address service

`ACEConvertAddressService.convertAddress(Address)` calls the Capital One ACE address standardisation API (`ace.api.convert.address`, an `api-it.cloud.capitalone.com/private/1157326/convert-address` endpoint in dev) with an OAuth bearer token from `OAuthServiceImpl`, through `RestTemplate`. `ISOAddressConverter.convertAddressToACERequest` turns the payload address lines into the request: `addressLine1` is the street line, the last populated line of `addressLine2`/`addressLine3` must read `City State PostalCode Country` and is tokenised from the right (country, postal code, state, the rest is the city), with a repair step for lines that an upstream 35-character re-split has fragmented. `ISOAddressConverter.convertStructuredAddressToAddress` copies the structured result back into a payload `Address` (building, street, floor, room, town into both `townName` and `city`, postal box, postal code, department, sub-department, district, country sub-division into `stateCode`, country). Any failure raises `WireIntitiationException` (HTTP 500); there is no fall-back to the raw address.

The service is called in exactly one place: `Debtor.setDbtr`, for the payer address, when all of these hold: `optionalHeaderInfo.senderMemberId` is `EaseWeb` or `EaseAdmin` (case-insensitive), `paymentTypeCode` is `CTRC`, and `onBehalfOfPayer` is present.


### 2.3 Constants and feature flags read by the V9 path

| Name | Value | Where it is used |
|---|---|---|
| `Constants.NUMBER_OF_TXN` | `"1"` | `PmtInf/NbOfTxs` |
| `Constants.DATE_FORMAT` | `yyyy-MM-dd` | parsing `valueDate` |
| `Constants.SPLMNTRY_CODE_FX_DEBIT_CURRENCY` | `Channel_FX_Debit_Currency` | supplementary data property name |
| `Constants.SPLMNTRY_CODE_FX_DEBIT_AMOUNT` | `Channel_FX_Debit_Amount` | supplementary data property name |
| `Constants.SPLMNTRY_CODE_SOURCE_INITIATOR` | `Source_Initiator` | supplementary data property name |
| `Constants.SPLMNTRY_CODE_SOURCE_APPROVER` | `Source_Approver` | supplementary data property name |
| `Constants.SENDER_MEMBER_TMOBS`, `SENDER_MEMBER_TMOBSDOM`, `SENDER_MEMBER_OBS` | `TMOBS`, `TMOBSDOM`, `OBS` | bank-to-bank slash clean-up |
| `Constants.SOURCE_CHANNEL_ID_EASEWEB`, `SOURCE_CHANNEL_ID_EASEADMIN` | `EaseWeb`, `EaseAdmin` | ACE address condition |
| `Constants.USABA`, `Constants.TAX_PAYMENT_ABA_NUMBER` | `USABA`, a nine-digit ABA (see section 9) | commented-out tax-payment check |
| `Constants.SVCLVL_SDVA`, `SVCLVL_BKTR` | `SDVA`, `BKTR` | defined, never used by V9 (no `SvcLvl` is emitted) |
| `WireRequestConstants.SEPERATOR` | `*` | bank-to-bank chunk separator |
| `wire.entity.id` (`GroupHeaderConversionUtilV9.wireEntityId`) | `HIBKUS44XXX` in dev | `InitgPty/Id/OrgId/AnyBIC` when the payer is used as initiating party |
| `feature.blank.structured.address.enabled` (`PaymentInfoUtilV9.blankStructuredAddressEnabled`) | `true` in dev and qa, `false` in prod (per the Javadoc) | agent address blanking |
| `ace.api.convert.address` (`ACEConvertAddressService.convertAddressURL`) | dev endpoint | ACE call |
| `enable.iso.paymenttype` | `true` in dev | present in configuration; no reader in the V9 classes reviewed |

The dev profile also carries `payment.initiation.rest.service.url` ending in `initiations.pain.001.001.05`, the PIE publisher topic `PIE_TO_WIRE_RAIL_QA`, Fiserv session settings and the caller allow-lists; none of these affect the mapping.


## 3. Mapping matrix

Paths are relative to `Document/CstmrCdtTrfInitn`. Cardinality is from the V11 XSD. "Rule as implemented in V9" states what the reference code does, including its defects. "V11 change" compares the V09 type the code uses with the V11 type in the XSD. "Decision needed" is yes when the new library must choose rather than copy.

### 3.1 Group Header (`GrpHdr`, V11 type `GroupHeader95`)

| V11 element | Card. | SDPPayload source | Rule as implemented in V9 | V11 change | Decision needed |
|---|---|---|---|---|---|
| `GrpHdr/MsgId` | 1..1 | `clientTransactionId` | copy (`GroupHeaderConversionUtilV9.setGroupHeader`); no 35-character check. Test fixtures carry values like `DOM52320586001`. | unchanged (Max35Text) | yes: message id strategy for OPF (same value is also `PmtInfId` and `InstrId`) |
| `GrpHdr/CreDtTm` | 1..1 | none | generated: `new Date()` at build time, JVM time zone | unchanged | no |
| `GrpHdr/Authstn` | 0..2 | none | not set | unchanged | no |
| `GrpHdr/NbOfTxs` | 1..1 | none | constant `"1"` | unchanged | no |
| `GrpHdr/CtrlSum` | 0..1 | none | not set at group level (set on `PmtInf`) | unchanged | no |
| `GrpHdr/InitgPty` | 1..1 | `initiatingParty`, else `payer` | conditional (`GroupHeaderConversionUtilV9.setInitiatingParty`): branch A when `initiatingParty.accountName` is non-blank; branch B when `payer` is non-null; otherwise an empty party | unchanged (PartyIdentification135) | yes: what to send when both are absent |
| `GrpHdr/InitgPty/Nm` | 0..1 | branch A `initiatingParty.accountName`; branch B `payer.accountName` | copy, no 140-character check | unchanged | no |
| `GrpHdr/InitgPty/PstlAdr` | 0..1 | branch A `initiatingParty.address`; branch B `payer.address` | `setPostalAddress24`, no blanking policy | unchanged | yes: structured versus address lines (section 5.1) |
| `GrpHdr/InitgPty/Id/OrgId/AnyBIC` | 0..1 | none (constant) | branch B only: `wireEntityId` from `wire.entity.id` (`HIBKUS44XXX` in dev). In branch A the same call is commented out. | unchanged | yes: which BIC identifies Capital One towards OPF |
| `GrpHdr/InitgPty/Id` (OrgId/Othr, PrvtId/Othr, OrgId/LEI, OrgId/AnyBIC) | 0..1 | branch A: `initiatingParty` identification fields | `setIdentificationNumber` (section 4.4) | unchanged | no |
| `GrpHdr/InitgPty/CtryOfRes`, `CtctDtls` | 0..1 | none | not set | unchanged | no |
| `GrpHdr/FwdgAgt` | 0..1 | none | not set | unchanged | no |
| `GrpHdr/InitnSrc` (`Nm` 1..1, `Prvdr`, `Vrsn`) | 0..1 | none (candidate `paymentSourceChannelId`) | not set | new optional element in V11 | yes: whether FIS wants the channel here |


### 3.2 Payment Information, debtor side (`PmtInf`, V11 type `PaymentInstruction40`)

| V11 element | Card. | SDPPayload source | Rule as implemented in V9 | V11 change | Decision needed |
|---|---|---|---|---|---|
| `PmtInf` | 1..n | whole payload | exactly one `PmtInf` with exactly one `CdtTrfTxInf` (`PaymentInfoUtilV9.setPaymentInfo`) | PaymentInstruction30 to PaymentInstruction40 | no |
| `PmtInf/PmtInfId` | 1..1 | `clientTransactionId` | copy; the code comments "check with Kaushik if this is correct" | unchanged | yes: same as `MsgId` or distinct |
| `PmtInf/PmtMtd` | 1..1 | none | constant `TRF` | unchanged (PaymentMethod3Code) | no |
| `PmtInf/ReqdAdvcTp` | 0..1 | none | not set | new optional element in V11 | no |
| `PmtInf/BtchBookg` | 0..1 | none | constant `false` | unchanged | no |
| `PmtInf/NbOfTxs` | 0..1 | none | constant `"1"` (`Constants.NUMBER_OF_TXN`) | unchanged | no |
| `PmtInf/CtrlSum` | 0..1 | `transactionAmount` | copy as `BigDecimal`; null (element omitted) when the payment carries only `exchangeRate.instructedAmount` | unchanged | yes: must equal the transaction amount actually sent in `Amt` |
| `PmtInf/PmtTpInf` | 0..1 | none | not set at this level (set on the transaction) | unchanged | no |
| `PmtInf/ReqdExctnDt/Dt` | 1..1 (choice) | `valueDate` | format: parse with `SimpleDateFormat("yyyy-MM-dd")`, wrap in `XMLGregorianCalendar` (carries JVM time and zone), set `Dt` (`PaymentInfoUtilV9.setTransactionSettlementDate`). On `ParseException` or `DatatypeConfigurationException` the method logs and returns null, so the mandatory element is missing. | unchanged (DateAndDateTime2Choice) | yes: reject invalid dates instead of emitting an invalid message; serialise as a date only |
| `PmtInf/ReqdExctnDt/DtTm` | 1..1 (choice) | none | not set | unchanged | no |
| `PmtInf/PoolgAdjstmntDt` | 0..1 | none | not set | unchanged | no |
| `PmtInf/Dbtr` | 1..1 | `payer` | `Debtor.setDbtr`; returns null when `payer` is null (mandatory element missing) | unchanged | yes: reject when `payer` is absent |
| `PmtInf/Dbtr/Nm` | 0..1 | `payer.accountName` | copy; no 140-character truncation; the name parts (`accountFirstName` and so on) are ignored | unchanged | yes: name composition and truncation |
| `PmtInf/Dbtr/PstlAdr` | 0..1 | `payer.address` | `setPostalAddress24` on the raw address, or on the ACE-standardised address when `senderMemberId` is `EaseWeb`/`EaseAdmin`, `paymentTypeCode` is `CTRC` and `onBehalfOfPayer` is present (section 2.2). No blanking policy on parties. | unchanged (PostalAddress24) | yes: keep the ACE call for OPF |
| `PmtInf/Dbtr/Id/OrgId/Othr/Id`, `.../SchmeNm/Cd` | 0..1 | `payer.organizationIdentificationNumber`, `payer.organizationIdentificationNumberType` | conditional: both non-blank; `Cd` is the raw type string | unchanged | yes: the type must be an ISO external organisation identification code |
| `PmtInf/Dbtr/Id/PrvtId/Othr/Id`, `.../SchmeNm/Cd` | 0..1 | `payer.identificationNumber`, `payer.identificationNumberType` | conditional: both non-blank. `OrgId` and `PrvtId` can both be set on the same party, which violates the `Party38Choice` choice. | unchanged | yes: one of OrgId or PrvtId, and a code list for the type |
| `PmtInf/Dbtr/Id/OrgId/LEI` | 0..1 | `payer.legalEntityIdentifier` | conditional non-blank | unchanged | no |
| `PmtInf/Dbtr/Id/OrgId/AnyBIC` | 0..1 | `payer.bankIdentifierCode` | conditional non-blank | unchanged | no |
| `PmtInf/Dbtr/CtryOfRes` | 0..1 | none (`payer.countryOfResidence` exists) | not set | unchanged | no (propose include) |
| `PmtInf/Dbtr/CtctDtls` | 0..1 | none | not set | unchanged | no |
| `PmtInf/DbtrAcct` | 1..1 | `payer` | `setCashAccount38(currencyCode, payer)`; null (mandatory element missing) when `payer` is null or `payer.accountNumber` is blank | CashAccount38 to CashAccount40 (`Id` is now 0..1) | yes: reject when the account number is blank |
| `PmtInf/DbtrAcct/Id/IBAN` | 1..1 (choice) | `payer.accountNumber` | conditional: `payer.accountIdType` equals `IBAN` (case-insensitive) | unchanged | no |
| `PmtInf/DbtrAcct/Id/Othr/Id` | 1..1 (choice) | `payer.accountNumber` | otherwise; no `SchmeNm`, no 34-character check | unchanged (Max34Text) | yes: whether OPF needs `SchmeNm/Cd` (for example `BBAN`) |
| `PmtInf/DbtrAcct/Tp/Prtry` | 1..1 (choice) | `payer.accountIdType` | copy of the raw value (`DDA`, `ABA`, ...) into the proprietary slot | unchanged | yes: `Tp/Cd` external code (for example `CACC`) versus `Prtry` |
| `PmtInf/DbtrAcct/Ccy` | 0..1 | `currencyCode` (the payment currency) | copy when non-blank; `payer.currencyCode` (the account currency) is not read | unchanged | yes: account currency versus payment currency |
| `PmtInf/DbtrAcct/Nm` | 0..1 | none | commented out (`accountName`) | unchanged | no |
| `PmtInf/DbtrAcct/Prxy` | 0..1 | none | not set | unchanged | no |
| `PmtInf/DbtrAgt` | 1..1 | `onBehalfOfPayer` (not `payerBank`) | conditional (`Debtor.setDebtorAgent`): when `onBehalfOfPayer` is null, an agent with an empty `FinInstnId` is emitted; otherwise `FinInstnId` is filled from the on-behalf-of party as if it were a bank. `payerBank` is never read anywhere in V9. | unchanged (BranchAndFinancialInstitutionIdentification6) | yes: build `DbtrAgt` from `payerBank` or a Capital One constant; an empty `FinInstnId` is valid XML but useless to OPF |
| `PmtInf/DbtrAgt/FinInstnId/BICFI` | 0..1 | `onBehalfOfPayer.bankIdentifierCode` | copy (may be null) | unchanged | yes |
| `PmtInf/DbtrAgt/FinInstnId/ClrSysMmbId` | 0..1 | none (`payerBank.bankSystemIdentifier`, `payerBank.bankCode` unused) | not set | unchanged | yes |
| `PmtInf/DbtrAgt/FinInstnId/LEI` | 0..1 | `onBehalfOfPayer.legalEntityIdentifier` | copy | unchanged | no |
| `PmtInf/DbtrAgt/FinInstnId/Nm` | 0..1 | `onBehalfOfPayer.accountName` | copy | unchanged | yes |
| `PmtInf/DbtrAgt/FinInstnId/PstlAdr` | 0..1 | `onBehalfOfPayer.address` | `setPostalAddress24`, no blanking policy | unchanged | yes |
| `PmtInf/DbtrAgt/FinInstnId/Othr`, `DbtrAgt/BrnchId` | 0..1 | none | not set | unchanged | no |
| `PmtInf/DbtrAgtAcct` | 0..1 | `onBehalfOfPayer` | only when `onBehalfOfPayer` is present: `setCashAccount38(currencyCode, onBehalfOfPayer)` when its `accountNumber` is non-blank, else `setCashAccount38ID` (`Othr/Id` = `organizationIdentificationNumber` with `SchmeNm/Cd` = its type, else `identificationNumber` with its type; null when both blank). `debtorAgentAccount` (the `agent` object) is never read. | CashAccount38 to CashAccount40 | yes: drop, or map `debtorAgentAccount.account` |
| `PmtInf/InstrForDbtrAgt` | 0..1 | none | not set | unchanged (Max140Text at this level) | no |
| `PmtInf/UltmtDbtr` | 0..1 | none | not set here (set on the transaction) | unchanged | no |
| `PmtInf/ChrgBr` | 0..1 | none | not set here (set on the transaction) | unchanged | no |
| `PmtInf/ChrgsAcct`, `ChrgsAcctAgt` | 0..1 | none | not set | unchanged | no |


### 3.3 Credit Transfer Transaction Information, creditor side (`PmtInf/CdtTrfTxInf`, V11 type `CreditTransferTransaction54`)

| V11 element | Card. | SDPPayload source | Rule as implemented in V9 | V11 change | Decision needed |
|---|---|---|---|---|---|
| `CdtTrfTxInf` | 1..n | whole payload | exactly one (`PaymentInfoUtilV9.setCreditTransferTransactionInformation`) | CreditTransferTransaction34 to CreditTransferTransaction54 | no |
| `PmtId/InstrId` | 0..1 | `clientTransactionId` | copy | unchanged | yes: `instructionId` exists in the payload and is not used |
| `PmtId/EndToEndId` | 1..1 | `domesticPayment.relatedReference` when `domesticPayment` is non-null, else `clientTransactionId` | conditional; `payload.endToEndId` is never read (the code comments "or should we use payload.getEndToEndId()?"). When `domesticPayment` exists with a null `relatedReference` the mandatory element is missing. | unchanged | yes: use `endToEndId` |
| `PmtId/UETR` | 0..1 | none (`swiftEndToEndTransactionReference` exists) | not set | unchanged | yes: GPN wires need a UETR |
| `PmtTpInf/InstrPrty` | 0..1 | none | constant `HIGH` (`PaymentInfoUtilV9.setPaymentTypeInfo`) | unchanged | yes |
| `PmtTpInf/SvcLvl/Cd` | 0..n | none (`serviceLevelCd` exists; constants `SDVA`, `BKTR` defined) | not set | unchanged | yes: service level per wire type |
| `PmtTpInf/LclInstrm/Cd` | 1..1 (choice) | `paymentTypeCode` | copy of the raw code (`BTR`, `CTR`, `BKP`, `NOS`, `BTRC`, `CTRC`) into `Cd`; a `NullPointerException` is caught and logged, leaving an empty `LclInstrm` (invalid choice). `localInstrumentCode` is not read. | unchanged | yes: ISO external local instrument code versus `Prtry`; which field drives it |
| `PmtTpInf/CtgyPurp` | 0..1 | none (`categoryPurpose` exists) | not set | unchanged | yes |
| `Amt` | 1..1 | `transactionAmount`, `currencyCode`, `exchangeRate.*` | conditional: `exchangeRate` null gives `setDomAmount`; otherwise `setAmount` (rows below). `setAmount` returns null when `isValidAmount` is false (mandatory element missing), and an empty `Amt` when `transactionAmount` is non-zero but one of the two currencies is blank. | unchanged (AmountType4Choice) | yes: validate before building |
| `Amt/InstdAmt` (+ `@Ccy`) | 1..1 (choice) | no FX: `transactionAmount`, `currencyCode`. FX with `transactionAmount` null or zero: `exchangeRate.instructedAmount`, `exchangeRate.foreignExchangeCurrencyCode` | copy; `BigDecimal` passed through with its scale (XSD allows 5 fraction digits, 18 digits) | unchanged | yes: rounding to the currency's minor unit |
| `Amt/EqvtAmt/Amt` (+ `@Ccy`) | 1..1 (choice) | `transactionAmount`, `currencyCode` | FX with `transactionAmount` non-zero and both `currencyCode` and `exchangeRate.foreignExchangeCurrencyCode` non-blank | unchanged | yes: confirm OPF accepts `EqvtAmt` |
| `Amt/EqvtAmt/CcyOfTrf` | 1..1 | `exchangeRate.foreignExchangeCurrencyCode` | same condition | unchanged | no |
| `XchgRateInf/XchgRate` | 0..1 | `exchangeRate.exchangeRate` | format: `new BigDecimal(string)`; throws (uncaught) when null or not numeric | unchanged (BaseOneRate, 10 fraction digits) | yes: tolerate a missing rate |
| `XchgRateInf/RateTp` | 0..1 | `exchangeRate.foreignExchangeTrade` | lookup: `ExchangeRateType1Code.fromValue`, exact `SPOT`, `SALE` or `AGRD`; throws otherwise. Test data uses `SPOT` and `AGRD`. | unchanged | yes: code table for Discover values |
| `XchgRateInf/CtrctId` | 0..1 | `exchangeRate.contractId` | copy (test value `ACBSFX`) | unchanged | no |
| `XchgRateInf/UnitCcy` | 0..1 | none | not set | unchanged | no |
| `ChrgBr` | 0..1 | `chargedTo` | default `SHAR` when null; otherwise `ChargeBearerType1Code.fromValue`, exact `DEBT`, `CRED`, `SHAR` or `SLEV`; throws otherwise | unchanged | yes: code table for Discover values; OPF default |
| `MndtRltdInf` | 0..1 | none | not set | MandateRelatedInformation14 to CreditTransferMandateData1 | no |
| `ChqInstr` | 0..1 | none | not set | unchanged (Cheque11) | no |
| `UltmtDbtr` | 0..1 | `ultimateDebtor` | `UltimateDebtor.setUltimateDebtor`: `Nm` = `accountName`, `PstlAdr` = `setPostalAddress24(address)`, `Id` per section 4.4; null when absent. `onBehalfOfPayer` is not used here (it feeds `DbtrAgt`). | unchanged | yes: precedence between `ultimateDebtor` and `onBehalfOfPayer` |
| `IntrmyAgt1` | 0..1 | `firstIntermediaryBank` | `setBankAgent`: `BICFI` = `swiftBankIdentifierCode` when non-blank; `ClrSysMmbId` (`ClrSysId/Cd` = `bankSystemIdentifier`, `MmbId` = `bankCode`) when `bankCode` non-blank; `Nm` = `bankName`; `PstlAdr` with blanking policy; no `LEI` | unchanged | no |
| `IntrmyAgt1Acct/Id/Othr/Id` | 0..1 | `firstIntermediaryBank.bankAccountNumber` | `createCashAccountForBank`: `Othr/Id` only, when non-blank | CashAccount38 to CashAccount40 | no |
| `IntrmyAgt2`, `IntrmyAgt2Acct` | 0..1 | `secondaryIntermediaryBank` | same as agent 1 | same | no |
| `IntrmyAgt3`, `IntrmyAgt3Acct` | 0..1 | none (`tertiaryIntermediaryBank` exists) | not set | same | yes: add the third intermediary |
| `CdtrAgt` | 0..1 | `payeeBank` | `Creditor.setCreditorAgent`: `ClrSysMmbId` when `bankSystemIdentifier` and `bankCode` both non-blank; `BICFI` when `swiftBankIdentifierCode` non-blank; `LEI` = `legalEntityIdentifier` unconditionally; `Nm` = `bankName`; `PstlAdr` with blanking policy. A null `payeeBank` throws inside the `Creditor` constructor; the exception is caught and logged, and `Cdtr`, `CdtrAcct` and `CdtrAgt` are all left unset. | unchanged | yes: reject when `payeeBank` is absent |
| `CdtrAgtAcct/Id/Othr/Id` | 0..1 | `payeeBank.bankAccountNumber` | `createCashAccountForBank` when non-blank; `creditorAgentAccount` (the `agent` object) is never read | CashAccount38 to CashAccount40 | yes: which field is the creditor agent account |
| `Cdtr` | 0..1 | `payee` | `Creditor.setCdtr`: `Nm` = `accountName`, `PstlAdr` = `setPostalAddress24(address)` without blanking policy, `Id` per section 4.4. A null `payee` throws (same catch as above). | unchanged | yes: reject when `payee` is absent; name composition |
| `CdtrAcct` | 0..1 | `payee` | `setCashAccount38(currencyCode, payee)`: `IBAN` when `accountIdType` is `IBAN`, else `Othr/Id` = `accountNumber`; `Tp/Prtry` = `accountIdType`; `Ccy` = payment currency; null when `accountNumber` is blank | CashAccount38 to CashAccount40 | yes: as for `DbtrAcct` |
| `CdtrAcct/Prxy` | 0..1 | none (`payee.address.proxyAccountIdentification` exists) | not set | unchanged | no |
| `UltmtCdtr` | 0..1 | `ultimateCreditor` | `UltimateCreditor.setUltimateCreditor`: same party rule as `UltmtDbtr` | unchanged | no |
| `InstrForCdtrAgt/InstrInf` | 0..n | `bankToBank`, `optionalHeaderInfo.senderMemberId` | derived (section 5.2): slash clean-up for TMOBS, TMOBSDOM and OBS senders, then split into 140-character chunks, one `InstrForCdtrAgt` per chunk; `Cd` never set; only when `payeeBank` is non-null | InstructionForCreditorAgent1 to InstructionForCreditorAgent3 (`Cd` is now an external code, `InstrInf` unchanged) | yes: whether OPF reads free-text bank-to-bank here |
| `InstrForDbtrAgt` (`Cd`, `InstrInf`) | 0..1 | none | not set | new structured element in V11 (was Max140Text) | no |
| `Purp` | 0..1 | none (`transactionReasonCd` is the closest) | not set | unchanged | yes |
| `RgltryRptg` | 0..10 | none | not set | unchanged | yes: ask FIS whether GPN wires need it |
| `Tax` | 0..1 | none | not set | TaxInformation8 to TaxInformation10 | no |
| `RltdRmtInf` | 0..10 | none (`relatedRemitterInfo` exists) | not set | unchanged (RemittanceLocation7) | no |
| `RmtInf/Ustrd` | 0..n | `remitterInfo.unstructuredInfo` | one `Ustrd` when non-blank, only when `payeeBank` is non-null; no 140-character truncation or split | RemittanceInformation16 to RemittanceInformation21 | yes: truncate, split or reject over 140 |
| `RmtInf/Strd` | 0..n | none (`remitterInfo` structured fields exist) | not set | StructuredRemittanceInformation16 to StructuredRemittanceInformation17 | no |
| `SplmtryData/Envlp` | 0..n | `supplementaryData.contractedCurrencyCode`, `contractedDebitAmount`, `initiatorId`, `approverId` | derived (section 5.5): a Dovetail (PIE) `ClientData` XML element with `ClientProperty` name/value pairs `Channel_FX_Debit_Currency`, `Channel_FX_Debit_Amount`, `Source_Initiator`, `Source_Approver`, each only when non-blank; built whenever `supplementaryData` is non-null; `PlcAndNm` not set | unchanged (SupplementaryData1) | yes: PIE-specific, OPF will not read it |
| `CstmrCdtTrfInitn/SplmtryData` | 0..n | none | not set | unchanged | no |


### 3.4 Remaining optional V11 elements the V9 code never sets

| V11 element | Proposed | Why |
|---|---|---|
| `GrpHdr/Authstn`, `GrpHdr/FwdgAgt` | omit | no source, no OPF need known |
| `GrpHdr/CtrlSum` | include | cheap integrity check; equals the one transaction amount |
| `GrpHdr/InitnSrc` | ask FIS | natural home for the originating channel (`paymentSourceChannelId`) |
| `PmtInf/ReqdAdvcTp`, `PoolgAdjstmntDt`, `ChrgsAcct`, `ChrgsAcctAgt` | omit | no source |
| `PmtInf/PmtTpInf` | omit | keep payment type on the transaction as V9 does, unless FIS prefers it at `PmtInf` level |
| `PmtInf/UltmtDbtr`, `PmtInf/ChrgBr` | omit | set on the transaction |
| `PmtInf/InstrForDbtrAgt`, `CdtTrfTxInf/InstrForDbtrAgt` | ask FIS | candidate home for part of `bankToBank` if OPF treats it as a debtor-side instruction |
| `*/PstlAdr/AdrTp` | omit | no source |
| `*/CtctDtls` | omit | no source |
| `*/CtryOfRes` | include | `account.countryOfResidence` exists; useful for GPN screening |
| `*/Id/PrvtId/DtAndPlcOfBirth` | include when `customerPersonalInfo` is populated | `dateOfBirth`, `cityOfBirth`, `countryOfBirth` exist; `CityOfBirth` and `CtryOfBirth` are mandatory inside it |
| `*/Id/.../Othr/Issr` | include when `account.issuer` is populated | direct source |
| `*Acct/Nm`, `*Acct/Prxy`, `*Acct/Tp/Cd` | decide with FIS | `accountName` and `proxyAccountIdentification` exist |
| `*Agt/FinInstnId/Othr`, `*Agt/BrnchId` | omit | no source |
| `PmtId/UETR` | include | `swiftEndToEndTransactionReference` exists; required for GPN tracking |
| `PmtTpInf/SvcLvl`, `CtgyPurp` | include when populated | `serviceLevelCd`, `categoryPurpose` exist; need code tables |
| `XchgRateInf/UnitCcy` | omit | `currencyCode` already carries the unit |
| `MndtRltdInf`, `ChqInstr`, `Tax` | omit | not wires |
| `IntrmyAgt3`, `IntrmyAgt3Acct` | include | `tertiaryIntermediaryBank` exists |
| `Purp` | include when a code is available | needs a code table from `transactionReasonCd` |
| `RgltryRptg` | ask FIS | no source today |
| `RltdRmtInf` | omit for now | `relatedRemitterInfo` exists but `methodOfRequest` needs a code table |
| `RmtInf/Strd` | omit for now | partial source only (`invoicerIdentification`, `invoiceeIdentification`, `documentCode`) |
| `CstmrCdtTrfInitn/SplmtryData`, `CdtTrfTxInf/SplmtryData` | omit | PIE-specific envelope; ask FIS whether OPF accepts any supplementary data |


## 4. Code tables, exactly as the V9 code translates them

### 4.1 `paymentTypeCode` (local enum `PaymentTypeCode`)

| Payload value | V9 behaviour | ISO target |
|---|---|---|
| `BTR`, `CTR`, `BKP`, `NOS`, `BTRC`, `CTRC` | the raw string is written to `PmtTpInf/LclInstrm/Cd`; no translation | `LclInstrm/Cd` is an ISO external code (`ExternalLocalInstrument1Code`); these values are proprietary and belong in `LclInstrm/Prtry` unless FIS publishes a code table |
| `CTRC` | additionally enables the ACE address standardisation of the payer address (with the Ease channel and `onBehalfOfPayer` conditions) | n/a |

The enum values are never validated against the payload; any other string is written as is.

### 4.2 `accountIdType` (local enum `AccountIdType`)

| Payload value | `*Acct/Id` | `*Acct/Tp` |
|---|---|---|
| `IBAN` (case-insensitive) | `Id/IBAN` = `accountNumber` | `Tp/Prtry` = `IBAN` |
| `BIC`, `DDA`, `ABA`, `TIN`, `OTHR`, anything else, null | `Id/Othr/Id` = `accountNumber`, no `SchmeNm` | `Tp/Prtry` = the raw value (null allowed, which yields an empty `Tp`) |

The enum source comments the legacy single-letter codes `I` (IBAN), `B` (BIC), `D` (DDA), `F` (ABA), `9` (Other) that the payload schema prose also mentions. The V9 code does not decode them: a payload carrying `I` would go to `Othr`, not `IBAN`.

### 4.3 `chargedTo` and `foreignExchangeTrade`

| Field | Payload value | V9 result |
|---|---|---|
| `chargedTo` | null | `ChrgBr` = `SHAR` |
| `chargedTo` | `DEBT`, `CRED`, `SHAR`, `SLEV` (exact case) | `ChrgBr` = same value |
| `chargedTo` | anything else | `IllegalArgumentException` from `ChargeBearerType1Code.fromValue`, not caught: the whole conversion fails |
| `exchangeRate.foreignExchangeTrade` | `SPOT`, `SALE`, `AGRD` (exact case) | `XchgRateInf/RateTp` = same value |
| `exchangeRate.foreignExchangeTrade` | anything else, including null | `IllegalArgumentException` or `NullPointerException`, not caught |

### 4.4 Party identification (`PaymentInfoUtilV9.setIdentificationNumber`)

Applied to `InitgPty` (initiating-party branch), `Dbtr`, `Cdtr`, `UltmtDbtr`, `UltmtCdtr`.

| Payload fields (`account`) | Condition | V11 target |
|---|---|---|
| `organizationIdentificationNumber`, `organizationIdentificationNumberType` | both non-blank | `Id/OrgId/Othr/Id`, `Id/OrgId/Othr/SchmeNm/Cd` (raw type as the code) |
| `identificationNumber`, `identificationNumberType` | both non-blank | `Id/PrvtId/Othr/Id`, `Id/PrvtId/Othr/SchmeNm/Cd` (raw type as the code) |
| `legalEntityIdentifier` | non-blank | `Id/OrgId/LEI` |
| `bankIdentifierCode` | non-blank | `Id/OrgId/AnyBIC` |
| `otherIdentifier`, `otherIdentifierType`, `issuer`, `customerPersonalInfo`, `countryOfResidence` | n/a | not read |

`Id` is a choice between `OrgId` and `PrvtId`; the code can populate both.

### 4.5 Bank identifiers (`Bank` to `FinInstnId`)

| Payload field (`bank`) | Creditor agent (`Creditor.setCreditorAgent`) | Intermediary agents (`PaymentInfoUtilV9.setBankAgent`) |
|---|---|---|
| `swiftBankIdentifierCode` | `BICFI` when non-blank | `BICFI` when non-blank |
| `bankSystemIdentifier` | `ClrSysMmbId/ClrSysId/Cd`, only together with a non-blank `bankCode` | `ClrSysMmbId/ClrSysId/Cd` whenever `bankCode` is non-blank (an empty `Cd` is possible) |
| `bankCode` | `ClrSysMmbId/MmbId` | `ClrSysMmbId/MmbId` |
| `legalEntityIdentifier` | `LEI`, always (null allowed) | not set |
| `bankName` | `Nm` | `Nm` when non-blank |
| `address` | `PstlAdr` through `setPostalAddress24` then `applyStructuredAddressPolicy` | same |
| `bankAccountNumber` | `CdtrAgtAcct/Id/Othr/Id` | `IntrmyAgtNAcct/Id/Othr/Id` |
| `accountIdType` | not read | not read |

`bankSystemIdentifier` is passed as is (`USABA` is the only value the code names). V11 `ClrSysId/Cd` is `ExternalClearingSystemIdentification1Code`, max 5 characters.

### 4.6 Sender member id (`optionalHeaderInfo.senderMemberId`)

| Value (case-insensitive) | Effect |
|---|---|
| `TMOBS`, `TMOBSDOM`, `OBS` | bank-to-bank text with more than one `/` has every `/` replaced by a space |
| `EaseWeb`, `EaseAdmin` | payer address goes through ACE when `paymentTypeCode` is `CTRC` and `onBehalfOfPayer` is present |
| `ACBSAPI` (`Constants.ACBS_SOURCE`) | security gating elsewhere in the service; no mapping effect |
| any other, or `optionalHeaderInfo` null | no effect |

### 4.7 Constants written into the message

| Element | Value |
|---|---|
| `GrpHdr/NbOfTxs`, `PmtInf/NbOfTxs` | `1` |
| `PmtInf/PmtMtd` | `TRF` |
| `PmtInf/BtchBookg` | `false` |
| `CdtTrfTxInf/PmtTpInf/InstrPrty` | `HIGH` |
| `CdtTrfTxInf/ChrgBr` default | `SHAR` |
| `GrpHdr/InitgPty/Id/OrgId/AnyBIC` (payer branch) | `wire.entity.id`, `HIBKUS44XXX` in dev |
| Supplementary property names | `Channel_FX_Debit_Currency`, `Channel_FX_Debit_Amount`, `Source_Initiator`, `Source_Approver` |


## 5. Behaviours to carry over (or consciously drop)

### 5.1 Structured versus unstructured address

- `PaymentInfoUtilV9.setPostalAddress24` copies the payload `Address` field by field: `department` to `Dept`, `subDepartment` to `SubDept`, `streetName` to `StrtNm`, `buildingNumber` to `BldgNb`, `buildingName` to `BldgNm`, `floor` to `Flr`, `postalBox` to `PstBx`, `room` to `Room`, `postalCode` to `PstCd`, `city` to `TwnNm`, `townLocationName` to `TwnLctnNm`, `districtName` to `DstrctNm`, `stateCode` to `CtrySubDvsn`, `countryCode` to `Ctry`, and `addressLine1`, `addressLine2`, `addressLine3` to `AdrLine` when non-blank. It never reads `townName`, `stateProvince`, `countryName`, `addressLine4` or `proxyAccountIdentification`. A null `Address` yields an empty `PostalAddress24` rather than no element. No field is truncated (`AdrLine` is Max70Text, `TwnNm` Max35Text). `AdrTp` is never set.
- Structured and unstructured fields are emitted together when both exist. CBPR+ and Fedwire ISO rules restrict that combination; FIS must say what OPF accepts.
- `applyStructuredAddressPolicy` exists to work around a PIE defect: when `feature.blank.structured.address.enabled` is on (dev and qa), every structured field of an agent address is nulled and the address is dropped entirely when no `AdrLine` remains. It is applied to `CdtrAgt`, `IntrmyAgt1` and `IntrmyAgt2` only, never to parties or to `DbtrAgt`. This is PIE-specific; do not carry it to OPF unless FIS reports the same defect.
- ACE standardisation (section 2.2) converts a three-line US address into structured fields for the payer only, on the Ease CTRC on-behalf-of path. A failure is fatal to the payment. Decide whether OPF needs structured debtor addresses for GPN (CBPR+ requires structured or hybrid addresses from November 2026) and, if so, whether ACE stays the tool.

### 5.2 Bank-to-bank instruction chunking

`PaymentInfoUtilV9.setBankToBankInstructions`, when `bankToBank` is non-blank and `payeeBank` is non-null:

1. `sanitizeBankToBankForTmobs`: if `optionalHeaderInfo.senderMemberId` is `TMOBS`, `TMOBSDOM` or `OBS` (case-insensitive) and the text contains more than one `/`, every `/` becomes a space (so `/BNF/SOME INFO` becomes ` BNF SOME INFO`, while `/BNF` is kept).
2. `addStarSeperators`: the text is cut into fixed 140-character pieces joined with `*`.
3. The joined string is split on `*`, so any `*` already present in the text also splits it.
4. Each piece becomes one `InstrForCdtrAgt` with `InstrInf` only.

The `else` branch (`setBankToBankInfo`, a single untruncated `InstrInf`) is unreachable because it runs only when `bankToBank` is blank and then returns null.

### 5.3 Text clean-ups and validation

- No field is trimmed, upper-cased or truncated anywhere in the V9 path; the only text transformations are the slash replacement above and the 140-character chunking. Lengths are left to XSD validation downstream.
- `valueDate` must already be `yyyy-MM-dd`.
- `exchangeRate.exchangeRate` must be a numeric string.
- `chargedTo` and `foreignExchangeTrade` must be exact ISO enum names.
- Amounts are passed as `BigDecimal` without rescaling.

### 5.4 Defaults

- `ChrgBr` defaults to `SHAR`.
- `InstrPrty` is always `HIGH`.
- `PmtMtd` is always `TRF`; `BtchBookg` false; `NbOfTxs` 1 at both levels.
- `CreDtTm` is the build time.
- `InitgPty` falls back from `initiatingParty` to `payer` plus the wire entity BIC.
- `DbtrAgt` is emitted even when there is nothing to put in it.
- `*Acct/Ccy` is the payment `currencyCode`, applied to the debtor, creditor and debtor agent accounts alike.

### 5.5 Conditional on payment type, channel or presence

| Condition | Effect |
|---|---|
| `exchangeRate` present | `XchgRateInf` built; amount through `setAmount` (`EqvtAmt` or `InstdAmt` from the FX leg) instead of `setDomAmount` |
| `transactionAmount` null or zero with FX | `InstdAmt` from `exchangeRate.instructedAmount` in `foreignExchangeCurrencyCode` |
| `domesticPayment` present | `EndToEndId` from `domesticPayment.relatedReference` |
| `onBehalfOfPayer` present | `DbtrAgt` filled from it; `DbtrAgtAcct` built; enables the ACE condition |
| `senderMemberId` Ease and `paymentTypeCode` CTRC and `onBehalfOfPayer` | payer address standardised by ACE |
| `senderMemberId` TMOBS, TMOBSDOM, OBS | bank-to-bank slashes replaced |
| `payeeBank` null | creditor block skipped (logged), remittance and bank-to-bank skipped |
| `payer` null | `Dbtr` and `DbtrAcct` null |
| `supplementaryData` present | PIE `ClientData` envelope added under `CdtTrfTxInf/SplmtryData` |
| `initiatingParty.accountName` blank | `InitgPty` taken from the payer with the wire entity BIC |
| `firstIntermediaryBank`, `secondaryIntermediaryBank` present | `IntrmyAgt1`, `IntrmyAgt2` (+ accounts) |

The supplementary-data envelope is a `dovetailsystems.com` `ClientData` document (`ClientProperty` `Name`/`Value` pairs) marshalled with JAXB and parsed into a DOM element. It is a PIE contract, not ISO content.


## 6. Gaps

### 6.1 V11 mandatory elements with no SDPPayload source, or that V9 can leave empty

| Element | Situation |
|---|---|
| `GrpHdr/CreDtTm` | no payload field; generated at build time (acceptable; consider the envelope `timestamp` instead) |
| `GrpHdr/InitgPty` | emitted empty when `initiatingParty.accountName` is blank and `payer` is null |
| `PmtInf/ReqdExctnDt` | missing when `valueDate` is absent or not `yyyy-MM-dd` |
| `PmtInf/Dbtr` | missing when `payer` is null |
| `PmtInf/DbtrAcct` | missing when `payer.accountNumber` is blank; note `Id` is optional in `CashAccount40` so an account without an id would validate but mean nothing |
| `PmtInf/DbtrAgt/FinInstnId` | present but empty whenever `onBehalfOfPayer` is null, which is the normal case; `payerBank` is not used |
| `CdtTrfTxInf/PmtId/EndToEndId` | missing when `domesticPayment` exists without `relatedReference` |
| `CdtTrfTxInf/Amt` | missing when neither `transactionAmount` nor `exchangeRate.instructedAmount` is non-zero; empty when FX is present with `transactionAmount` non-zero but a blank currency |

### 6.2 SDPPayload wire fields with no V11 target in V9

Core or wire-optional fields the reference code never reads: `payerBank` (all fields), `debtorAgentAccount`, `creditorAgentAccount`, `tertiaryIntermediaryBank`, `senderCorrespondentBank`, `receiverCorrespondentBank`, `instructingAgent`, `instructedAgent`, `previousInstructingAgent1..3`, `endToEndId`, `swiftEndToEndTransactionReference`, `instructionId`, `messageTransmissionId`, `transactionId`, `paymentType`, `clearingSystem`, `clearingSystemReferenceNumber`, `messageFormat`, `transactionDirectionName`, `paymentSourceChannelId`, `serviceLevelCd`, `localInstrumentCode`, `categoryPurpose`, `transactionReasonCd`, `internationalPayment`, `relatedRemitterInfo`, the structured `remitterInfo` fields, `additionalInfoByChannel` (fees, applied rate), `optionalHeaderInfo` except `senderMemberId`, and on every `account`: the name parts, `countryOfResidence`, `customerPersonalInfo`, `otherIdentifier`, `otherIdentifierType`, `issuer`, `currencyCode`, `postingType`; on every `address`: `addressLine4`, `townName`, `stateProvince`, `countryName`, `proxyAccountIdentification`; on every `bank`: `accountIdType`.

Fields with no pain.001 home at all (they belong to pacs.008 or to the clearing leg): `senderCorrespondentBank`, `receiverCorrespondentBank`, `instructingAgent`, `instructedAgent`, `previousInstructingAgent1..3`, `clearingSystemReferenceNumber`, `clearingSystemOutputReferenceNumber`, `messageFormat`, `additionalInfoByChannel.feeAmount`.

### 6.3 Mismatches between the code and the schema

| Where | What |
|---|---|
| `AccountIdType` | the code tests for the word `IBAN`; the payload schema prose describes one-letter codes (`D`, `F`, `B`, `9`/`O`, and `I` by extension). One side is wrong. |
| `PaymentType.currency` | the V9 tests set `currency` on `internationalPayment` through `setAdditionalProperty`, which proves `currency` is not a declared property of the payload `paymentType` (only `relatedReference` is). The older local model has a `currency` field. The V9 code does not read it. |
| `Party38Choice` | the code may populate `OrgId` and `PrvtId` together; the schema allows one. |
| `LclInstrm/Cd`, `*Acct/Tp/Prtry`, `SchmeNm/Cd` | proprietary payload codes written into external-code slots (or the reverse). |
| `exchangeRate.exchangeRate` | string in the schema, numeric in the message; no validation. |
| `AmountType4Choice` | can be emitted empty. |
| `PostalAddress24` | emitted empty when the payload address is null. |
| `bankSystemIdentifier` | passed as is into a 5-character external code. |
| Lengths | `Max35Text` ids, `Max140Text` names and remittance, `Max70Text` address lines, `Max34Text` account ids are never enforced. |


## 7. V9 to V11 delta that matters for the mapper

Type renames, V09 (as used by the reference code) to V11 (from the XSD):

| Element | V09 type in the reference code | V11 type | Confirmed from |
|---|---|---|---|
| `Document/CstmrCdtTrfInitn` | `CustomerCreditTransferInitiationV09` | `CustomerCreditTransferInitiationV11` | message name |
| `GrpHdr` | `GroupHeader85` | `GroupHeader95` | code and XSD |
| `PmtInf` | `PaymentInstruction30` | `PaymentInstruction40` | code and XSD |
| `CdtTrfTxInf` | `CreditTransferTransaction34` | `CreditTransferTransaction54` | code and XSD |
| `DbtrAcct`, `CdtrAcct`, `*AgtAcct` | `CashAccount38` | `CashAccount40` (`Id` becomes optional) | code and XSD |
| `RmtInf` | `RemittanceInformation16` | `RemittanceInformation21` | code and XSD |
| `RmtInf/Strd` | `StructuredRemittanceInformation16` | `StructuredRemittanceInformation17` | XSD (V09 side from the standard) |
| `InstrForCdtrAgt` | `InstructionForCreditorAgent1` (`Cd` enum `Instruction3Code`) | `InstructionForCreditorAgent3` (`Cd` external `ExternalCreditorAgentInstruction1Code`) | code and XSD |
| `CdtTrfTxInf/InstrForDbtrAgt` | `Max140Text` | `InstructionForDebtorAgent1` (`Cd`, `InstrInf`) | XSD (V09 side from the standard) |
| `MndtRltdInf` | `MandateRelatedInformation14` | `CreditTransferMandateData1` | XSD (V09 side from the standard) |
| `Tax` | `TaxInformation8` | `TaxInformation10` | XSD (V09 side from the standard) |

Unchanged types that the code already uses and that can be mapped one-to-one: `PartyIdentification135`, `PostalAddress24`, `Party38Choice`, `OrganisationIdentification29`, `PersonIdentification13`, `GenericOrganisationIdentification1`, `GenericPersonIdentification1`, `BranchAndFinancialInstitutionIdentification6`, `FinancialInstitutionIdentification18`, `ClearingSystemMemberIdentification2`, `ClearingSystemIdentification2Choice`, `AccountIdentification4Choice`, `GenericAccountIdentification1`, `CashAccountType2Choice`, `PaymentIdentification6`, `PaymentTypeInformation26`, `LocalInstrument2Choice`, `AmountType4Choice`, `EquivalentAmount2`, `ActiveOrHistoricCurrencyAndAmount`, `ExchangeRate1`, `DateAndDateTime2Choice`, `SupplementaryData1`, `SupplementaryDataEnvelope1`, and the codes `PaymentMethod3Code`, `Priority2Code`, `ChargeBearerType1Code`, `ExchangeRateType1Code`.

New optional elements in V11 that V09 did not have:

- `GrpHdr/InitnSrc` (`Nm` mandatory inside, `Prvdr`, `Vrsn`): the initiating software or channel.
- `PmtInf/ReqdAdvcTp` (`CdtAdvc`, `DbtAdvc` with `Cd` `ADWD`/`ADND` or `Prtry`): advice requests.
- `CdtTrfTxInf/InstrForDbtrAgt` as a structured `Cd` plus `InstrInf`.
- `CdtTrfTxInf/InstrForCdtrAgt/Cd` as an external code list instead of a four-value enum.
- Richer mandate data (`MndtRltdInf/Tp`, `DtOfVrfctn`, `ElctrncSgntr`, `FrstPmtDt`, `FnlPmtDt`, `Frqcy`, `Rsn`): not relevant to wires.
- `CashAccount40` makes `Id` optional, so an account with only `Tp`, `Ccy`, `Nm` or `Prxy` is now schema-valid.


## 8. Open questions

For the tech lead:

1. `DbtrAgt`: V9 builds it from `onBehalfOfPayer` and never reads `payerBank`. For OPF, should `DbtrAgt` be `payerBank`, a fixed Capital One agent (BIC or ABA), or both?
2. Identifiers: V9 uses `clientTransactionId` for `MsgId`, `PmtInfId` and `InstrId`, and `domesticPayment.relatedReference` or `clientTransactionId` for `EndToEndId`. Which payload fields should carry each of `MsgId`, `PmtInfId`, `InstrId`, `EndToEndId` and `UETR` for GPN and corporate wires, and who generates them?
3. Payment type: should `paymentTypeCode` (`BTR`, `CTR`, `BKP`, `NOS`, `BTRC`, `CTRC`) go to `LclInstrm/Prtry`, be translated to ISO codes, or be replaced by `localInstrumentCode`, `serviceLevelCd` and `categoryPurpose`?
4. Amounts: confirm the FX rules in V9 (`EqvtAmt` when the debit amount is known, `InstdAmt` in the foreign currency when only the instructed amount is known) and the rounding policy.
5. Charge bearer and rate type: what values do Discover channels actually send in `chargedTo` and `foreignExchangeTrade`, and should an unknown value fail the payment or default?
6. Address: keep the ACE standardisation (and its Ease, CTRC, on-behalf-of trigger), extend it to every party, or drop it? Confirm that the PIE address-blanking workaround is not carried over.
7. Ultimate parties: precedence between `ultimateDebtor` and `onBehalfOfPayer`.
8. Failure policy: V9 swallows parse errors and null parties and emits an invalid message. Should the new library validate against the XSD and reject before calling FIS?
9. Account id type: are the payload codes the words (`IBAN`, `DDA`, `ABA`) or the letters (`I`, `D`, `F`)?
10. Name composition and truncation for `Nm` (Max140Text) when only name parts are present.
11. Which `ultimateCreditor`, `creditorAgentAccount`, `debtorAgentAccount`, `tertiaryIntermediaryBank` and `relatedRemitterInfo` fields the Discover channels populate, so the mapper does not carry dead rows.

For FIS:

12. Does OPF accept `EqvtAmt`, or only `InstdAmt`?
13. Which address form does OPF require per rail (structured, hybrid, address lines) for debtor, creditor and agents, and does it reject combined structured plus `AdrLine`?
14. Is `InstrForCdtrAgt/InstrInf` the right carrier for Fedwire bank-to-bank and beneficiary information, and what chunking does OPF expect (140-character pieces, line markers such as `/BNF/`)?
15. Which `ClrSysId/Cd` values does OPF accept (`USABA`, others) and does it require `BICFI` for GPN agents?
16. Does OPF require `SvcLvl`, `CtgyPurp`, `Purp` or `RgltryRptg` for GPN wires, and which code lists?
17. Does OPF read `SplmtryData` or `InitnSrc`, and is any PIE-style client data expected?
18. Required precision of `ReqdExctnDt` (date only) and the handling of forward value dates for FX wires.
19. Does the FIS API take `pain.001.001.11` JSON exactly as the XSD structure, and which JSON conventions (element names, `Ccy` attribute, arrays) apply?

For the new library's configuration:

20. The reference converter externalises the address-blanking flag, the entity BIC and the ACE address service URL as properties. Confirm which of these the new library needs at all, and keep every environment-specific value out of code.
