# PayX payment object (SDPPayload) field inventory

Story: ENTPMTS-144060, analysis of converting the existing payment object to a pain.001.001.11 message for outbound GPN and corporate wires to FIS OPF.

Source: repository `PaymentExchange-payx-payload` (branch `main`), file `src/main/schema/SDPPayload.json`, library version 2.54-SNAPSHOT (1551 lines). The README example JSON and `pom.xml` of the same version were used for the envelope description and the build facts. Where the README and the schema differ, the schema wins, because the schema is what the class is generated from.

## 1. What SDPPayload is

- **Envelope.** PayX produces an `SDPEnterpriseMessage` (`timestamp`, `domainPayload`). The `DomainPayload` carries the saga state (`exchangeObjectId`, `paymentLifecycleId`, `paymentBatchId`, `configVersion`, `sagaType`, `sagaStageCompletedName`, `sagaStartTimestamp`, `sagaStageCompletedTimestamp`, `paymentReplayCount`, `paymentReplayTimestamp`) plus `paymentObject` and `addendum`. `paymentObject` is the `SDPPayload`: the payment itself. `addendum` is an `AddendaContainer` of key/value `Addenda` pairs written by shared services. The README states the four complex objects are `SDPEnterpriseMessage`, `DomainPayload`, `SDPPayload` and `Addendum`.
- **Library.** Maven `com.capitalone.commercial:payx-payload:2.54-SNAPSHOT`, packaging jar, Java 17 (`maven-compiler-plugin` release 17). Runtime dependencies: `jackson-databind` (managed 2.22.3) and `commons-lang3` 3.18.0. Published to Capital One Artifactory (`maven-internalfacing`).
- **How the class is generated.** `jsonschema2pojo-maven-plugin` 1.0.2 reads `src/main/schema` (`SDPPayload.json`, `AddendaContainer.json`) and generates package `com.capitalone.commercial.payx.sdp.payload.model` with `useBigDecimals=true`. Consequences for the mapper: JSON `number` becomes `BigDecimal`, `integer` becomes `Integer`, `boolean` becomes `Boolean`, `string` becomes `String`, every `$ref` definition becomes its own class (`Address`, `CustomerPersonalInfo`, `Account`, `Bank`, `PaymentType`, `Agent`), every inline object becomes a nested class, and `fundsAvailability` becomes a `List`. The schema files are also packaged into the jar under `schema/`. `SDPPayloadTest` (JUnit 5, Jackson round trip) shows that null fields are omitted on serialisation and fields absent from the JSON deserialise as null.
- **Schema style.** JSON Schema draft-04. Every field is typed and most carry a `description`; apart from three nested `required` lists (see below) the schema declares no `required`, `pattern`, `enum`, `maxLength` or `format` keywords. Length and regex rules exist only as prose inside descriptions and are therefore not enforced by the generated class. Dates are strings.
- **Top-level required fields: none.** The top-level `SDPPayload` object has `title`, `description`, `type` and `properties` only; there is no top-level `required` list. The only `required` lists in the file are nested: `eventNotification` requires `eventCd`, `messageRejectNotification` requires `messageRefId`, `signOffRequestNotification` requires `eventCd`. Every pain.001 mandatory element must therefore be enforced by the mapper, not by the payload class.

## 2. Reusable definitions (`#/definitions`)

Six definitions. None declares a `required` list or any constraint keyword. "Required" is therefore "no" throughout and the column is kept for completeness.

### 2.1 `address`

Used by `account.address` and `bank.address`. 22 string fields.

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| addressLine1 | string | none | no | Address line 1 |
| addressLine2 | string | none | no | Address line 2 |
| addressLine3 | string | none | no | Address line 3 |
| addressLine4 | string | none | no | Address line 4 |
| buildingName | string | none | no | Building name |
| city | string | none | no | City |
| countryCode | string | none | no | Country code |
| countryName | string | none | no | Country name |
| districtName | string | none | no | District name |
| floor | string | none | no | Floor |
| postalBox | string | none | no | Postal box |
| proxyAccountIdentification | string | none | no | Proxy account identification (sits inside address, not inside account) |
| streetName | string | none | no | Street name |
| buildingNumber | string | none | no | Building number |
| postalCode | string | none | no | Postal code |
| room | string | none | no | Room |
| townName | string | none | no | Town name |
| stateProvince | string | none | no | State or province |
| stateCode | string | none | no | State code |
| department | string | none | no | Department name |
| subDepartment | string | none | no | Sub-department name |
| townLocationName | string | none | no | Town location name |

### 2.2 `customerPersonalInfo`

Used by `account.customerPersonalInfo`. No descriptions in the schema.

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| dateOfBirth | string | none | no | Date of birth (no format given) |
| cityOfBirth | string | none | no | City of birth |
| countryOfBirth | string | none | no | Country of birth |

### 2.3 `account`

Used by `payer`, `payee`, `initiatingParty`, `onBehalfOfPayer`, `ultimateCreditor`, `ultimateDebtor`. 29 fields. This is the party object: name, identification, account and address together.

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| accountNumber | string | none | no | Actual ID of the checking, savings or GL account in the transaction settlement |
| accountIdType | string | IBAN, BIC, DDA, ABA, TIN, OTHR; legacy single-letter codes I, B, D, F, 9 | no | Type of the account number |
| identificationNumber | string | none | no | Identification number |
| identificationNumberType | string | none | no | Identification number type |
| accountName | string | none | no | Account holder's name |
| accountSuffixName | string | none | no | Account holder's suffix |
| accountFirstName | string | none | no | Account holder's first name |
| accountMiddleName | string | none | no | Account holder's middle name |
| accountLastName | string | none | no | Account holder's last name |
| accountPrefixName | string | none | no | Account holder's prefix |
| alsoKnownAsName | string | none | no | Account holder's alias |
| bankIdentifierCode | string | none | no | Bank identifier code (not in README example) |
| currencyCode | string | none | no | Currency code of the account (not in README example) |
| legalEntityIdentifier | string | none | no | Legal entity identifier (not in README example) |
| organizationIdentificationNumber | string | none | no | Organisation identification number (not in README example) |
| organizationIdentificationNumberType | string | none | no | Organisation identification number type (not in README example) |
| otherIdentifier | string | none | no | Other identifier |
| postingType | string | none | no | Type of payee or payer: Internal, ACH, etc. |
| otherIdentifierType | string | none | no | Other identifier type |
| address | `address` | none | no | Address information |
| customerPersonalInfo | `customerPersonalInfo` | none | no | Customer's personal information |
| sorId | string | none | no | (empty description) system-of-record id (not in README example) |
| customerId | string | none | no | An id tied to the customer (not in README example) |
| issuer | string | none | no | Entity that assigns the identification |
| countryOfResidence | string | none | no | Country of residence |
| dateOfDeath | string | YYYY-MM-DD (prose) | no | Date of death |
| displayAccountNumber | string | none | no | Last four digits of the external account number |
| lastFourAccountDigits | string | none | no | Last four digits of the account number |
| sorMinusOneAccountNumber | string | none | no | SOR-minus-one account number |

### 2.4 `bank`

Used by `payeeBank`, `payerBank`, `firstIntermediaryBank`, `secondaryIntermediaryBank`, `tertiaryIntermediaryBank`, `senderCorrespondentBank`, `receiverCorrespondentBank`, `instructingAgent`, `instructedAgent`. 8 fields.

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| accountIdType | string | none | no | Account ID type |
| bankAccountNumber | string | none | no | Bank account number (not in README example) |
| bankName | string | none | no | Name of the financial institution (originating, intermediary or beneficiary FI) |
| bankSystemIdentifier | string | examples in prose: USABA, INFSC, AUBSB; passed as is | no | Clearing system identifier for the bank's country |
| bankCode | string | none | no | Member id within that clearing system; ABA number in the USA; also used for foreign bank identification codes on international wires |
| legalEntityIdentifier | string | none | no | Legal entity identifier (not in README example) |
| swiftBankIdentifierCode | string | none | no | SWIFT BIC; must be populated when routing via SWIFT |
| address | `address` | none | no | Bank address (no description) |

### 2.5 `paymentType`

Used by `domesticPayment` and `internationalPayment`. One field; the description is a copy-paste artefact.

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| relatedReference | string | none | no | Schema says "A response header contain the common information to all the response"; real meaning unknown |

### 2.6 `agent`

Used by `creditorAgentAccount`, `debtorAgentAccount`, `previousInstructingAgent1..3`. Note that `account` here is a plain string, not the `account` definition.

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| id | string | none | no | Agent identifier (BIC, ABA number or other FI identifier) |
| account | string | none | no | Account information for the agent |

## 3. Top-level properties of SDPPayload

84 properties in schema order. Required is "no" for every one (no top-level `required` list). Wire relevance values: **core wire** (needed to build a basic outbound wire), **wire optional** (used by wires when present), **ACH**, **card**, **return or notification**, **other** (PayX internal state, enrichment, checks, letters, RTP-only or unclear). Nested objects that are not shared definitions have their own sub-table in section 4.

| # | Field | Type | Constraint | Required | Description | Wire relevance |
|---|---|---|---|---|---|---|
| 1 | transactionAmount | number (BigDecimal) | none | no | Actual transaction amount of the payment | core wire |
| 2 | traceNumber | string | none | no | Trace number for the transaction (ACH trace) | ACH |
| 3 | parNumber | string | none | no | PAR (Payment Assigned Reference) number generated for the FED file | other |
| 4 | discountAppliedAmount | number | none | no | Discount amount applied to the payment | other |
| 5 | returnAmount | number | none | no | Amount returned when the receiving bank cannot post or a recall is accepted | return or notification |
| 6 | currencyCode | string | ISO alpha-3 (prose) | no | Currency in which the wire request is initiated | core wire |
| 7 | paymentTypeCode | string | none | no | Type of request: customer-to-customer, bank-to-bank, FedWire or Swift | core wire |
| 8 | chargedTo | string | none | no | Who bears the wire fees: beneficiary, shared, or (international) in addition | core wire |
| 9 | valueDate | string | none (date as string) | no | Date the transaction settles; for FX wires usually in the future | core wire |
| 10 | bankToBank | string | none | no | Free-form bank-to-bank text for intermediary or beneficiary bank | wire optional |
| 11 | instructionId | string | none | no | Id per instruction; one payment per instruction for wires and RTP | core wire |
| 12 | messageTransmissionId | string | none | no | Message-level identifier created by the sender of the file | core wire |
| 13 | recordType | string | none | no | The record type | other |
| 14 | transactionId | string | none | no | Unique id assigned to the transaction, retained on the return leg | core wire |
| 15 | endToEndId | string | none | no | End-to-end id provided by the originating customer, flows to all parties | core wire |
| 16 | representmentDate | string | YYYY-MM-DD (prose); only on ACH-OUTBOUNDREPRESENTMENT | no | Date an ACH representment is sent | ACH |
| 17 | representmentCount | integer | 1 or 2 (prose, Nacha limit) | no | ACH representment attempt number | ACH |
| 18 | sequenceId | string | prose regex `^(?:[\x20-\x7E])+$`, length 1 to 9 | no | Sequence id | other |
| 19 | swiftEndToEndTransactionReference | string | none | no | Swift end-to-end transaction reference (UETR) | core wire |
| 20 | batchId | string | none | no | Batch id | other |
| 21 | clientTransactionId | string | none | no | Client transaction id, also known as sender's reference | core wire |
| 22 | checkNumber | string | none | no | Number printed on a check | other |
| 23 | paymentSourceChannelId | string | none | no | Id of the initiating system or channel | wire optional |
| 24 | paymentSourceChannelDescription | string | none | no | Business description of the source channel | other |
| 25 | paymentStatus | string | none | no | Current status stage of the transaction | other |
| 26 | previousPaymentStatus | string | none | no | Previous status stage | other |
| 27 | transactionDirectionName | string | none | no | Incoming, outgoing, or within the same institution | wire optional |
| 28 | messageFormat | string | examples in prose: PACS08, PACS02, CAMT26, CAMT28, CAMT29, CAMT35, CAMT56, 1000, 1002, 1008, 1600 | no | Message format for domestic and international wires sent to or received from the clearing system | wire optional |
| 29 | paymentType | string | none | no | Detailed payment type: ACH Credit, ACH Debit, Wire, RTP Credit Push, RTP Request for Pay, etc. | core wire |
| 30 | standardEntryCode | string | none | no | ACH SEC code (three letters) | ACH |
| 31 | clearingSystem | string | examples in prose: SWIFT, FederalReserveBank, TheClearingHouse, Zelle | no | Clearing system that fulfils the transaction | core wire |
| 32 | clearingSystemReferenceNumber | string | none | no | Unique id sent to or assigned by the clearing system | wire optional |
| 33 | previousClearingSystemReferenceNumber | string | none | no | Original clearing system reference carried in a return or reject | return or notification |
| 34 | clearingSystemOutputReferenceNumber | string | none | no | Reference the clearing system assigns before transmitting to the receiving bank | wire optional |
| 35 | newPaymentTypeCode | string | none | no | New payment type when the original type changes and continues as a new type | other |
| 36 | serviceLevelCd | string | none | no | Service level: Same Day, Urgent, Book, etc. | wire optional |
| 37 | transactionReasonCd | string | none | no | Reason for the request (optional) | wire optional |
| 38 | localInstrumentCode | string | none | no | Local instrument code | wire optional |
| 39 | categoryPurpose | string | none | no | Specific reason for the payment: tax, dividend, etc. | wire optional |
| 40 | isSameDay | boolean | none | no | Same-day flag | ACH |
| 41 | exchangeRate | object (section 4.1) | none | no | FX details when currency conversion is involved; USD:FX rate | wire optional |
| 42 | domesticPayment | `paymentType` | none | no | Fields specific to Fedwire processing via the domestic network | wire optional |
| 43 | internationalPayment | `paymentType` | none | no | Swift-network specific fields | wire optional |
| 44 | isDecisionMade | boolean | none | no | Duplicate-payment decision already made | other |
| 45 | decisionReasonCode | string | none | no | Reason code for DUPL payment messages | other |
| 46 | letterDetail | object (section 4.2) | none | no | Letter data (generator-style schema with examples) | other |
| 47 | payer | `account` | none | no | Originator of the payment: name, account number, address of the customer sending | core wire |
| 48 | payee | `account` | none | no | Beneficiary of the wire: individual, business, bank or other legal entity | core wire |
| 49 | initiatingParty | `account` | none | no | Party providing the original instructions; optional; may differ from debit and credit parties | wire optional |
| 50 | payeeBank | `bank` | none | no | Beneficiary bank's ABA or BIC; clearing system id for international | core wire |
| 51 | creditorAgentAccount | `agent` | none | no | Creditor agent account (CdtrAgtAcct) | wire optional |
| 52 | payerBank | `bank` | none | no | Debtor's bank (schema description is a copy of payeeBank's text) | core wire |
| 53 | debtorAgentAccount | `agent` | none | no | Debtor agent account (DbtrAgtAcct) | wire optional |
| 54 | firstIntermediaryBank | `bank` | none | no | Intermediary bank accepting funds on behalf of the payee bank | wire optional |
| 55 | secondaryIntermediaryBank | `bank` | none | no | Second intermediary bank | wire optional |
| 56 | tertiaryIntermediaryBank | `bank` | none | no | Third intermediary bank | wire optional |
| 57 | senderCorrespondentBank | `bank` | none | no | Sender's correspondent | wire optional |
| 58 | receiverCorrespondentBank | `bank` | none | no | Receiver's correspondent | wire optional |
| 59 | instructingAgent | `bank` | none | no | FI from where the message is initiated and that provides the instructions | wire optional |
| 60 | originalMessageInfo | object (section 4.3) | none | no | Original message details, populated when a return request is received or sent | return or notification |
| 61 | returnSpecificInfo | object (section 4.4) | none | no | New information sent in a request to return funds | return or notification |
| 62 | isReturnAdjustmentRequired | boolean | none | no | Whether a return adjustment is required | return or notification |
| 63 | acknowledgementSpecific | object (section 4.5) | none | no | Later acknowledgement that credit has been applied | return or notification |
| 64 | relatedRemitterInfo | object (section 4.6) | none | no | Remitter id and electronic contact method | other |
| 65 | remitterInfo | object (section 4.7) | none | no | Unstructured and structured remittance information | wire optional |
| 66 | instructedAgent | `bank` | none | no | FI expected to act on the message sent by the instructing agent | wire optional |
| 67 | previousInstructingAgent1 | `agent` | none | no | Previous instructing agent 1 in the payment chain | wire optional |
| 68 | previousInstructingAgent2 | `agent` | none | no | Previous instructing agent 2 | wire optional |
| 69 | previousInstructingAgent3 | `agent` | none | no | Previous instructing agent 3 | wire optional |
| 70 | enrichedDataInExchange | object (section 4.8) | none | no | Enrichment from the system of record: account status, type, analysis, business unit, cost centre (not in README example) | other |
| 71 | supplementaryData | object (section 4.9) | none | no | Extra data from the initiating source that does not travel with the wire | other (mixed wire optional and ACH) |
| 72 | internationalTransactionDetails | object (section 4.10) | none | no | International ACH (IAT) transaction details | ACH |
| 73 | onBehalfOfPayer | `account` | none | no | By-order-of payment: the original payer when the debited account is a different one on Capital One books | wire optional |
| 74 | ultimateCreditor | `account` | none | no | Ultimate creditor | wire optional |
| 75 | ultimateDebtor | `account` | none | no | Ultimate debtor (not in README example) | wire optional |
| 76 | optionalHeaderInfo | object (section 4.11) | none | no | Swift-network header fields: member and branch ids, business message id and service | wire optional |
| 77 | eventNotification | object (section 4.12) | nested required: eventCd | no | System notification events (prefund balance 993/994 events) | return or notification |
| 78 | messageRejectNotification | object (section 4.13) | nested required: messageRefId | no | Message reject notification | return or notification |
| 79 | signOffRequestNotification | object (section 4.14) | nested required: eventCd | no | Sign-off request notification | return or notification |
| 80 | additionalInfoByChannel | object (section 4.15) | none | no | Additional information for payments introduced via external channels | other |
| 81 | cardSpecificInfo | object (section 4.16) | none | no | Card payment details (no description) | card |
| 82 | relatedReference | string | none | no | Related reference (not in README example) | other |
| 83 | transactionEventType | string | none | no | Type of event that triggered the transaction | other |
| 84 | fundsAvailability | array of object (section 4.17) | none | no | When specific amounts become available | other |

## 4. Nested objects that are not shared definitions

### 4.1 `exchangeRate`, wire optional

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| exchangeRate | string | none | no | USD vs FX currency rate, indicative or agreed |
| foreignExchangeTrade | string | none | no | Rate type: Spot, Agreed, etc. |
| foreignExchangeCurrencyCode | string | none | no | Foreign currency code (schema description is a copy of the previous field's text) |
| contractId | string | none | no | Contract id showing the rate is agreed and cannot change |
| instructedAmount | number | none | no | Agreed amount in foreign currency |

### 4.2 `letterDetail`, other

Generator-style schema (`$id`, `title`, `default`, `examples`); descriptions are placeholders.

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| letterId | string | none | no | Letter id |
| letterData | array of string | none | no | Letter lines |
| letterTabularData | array of array of string | none | no | Tabular letter rows; examples show date, order number, amount |

### 4.3 `originalMessageInfo`, return or notification

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| originalMessageTransmissionId | string | none | no | Message-level id of the original file |
| originalInstructionId | string | none | no | Instruction id of the original transaction |
| originalTransactionId | string | none | no | Transaction id of the original transaction |
| originalEndToEndId | string | none | no | End-to-end id of the original transaction |
| originalTraceNumber | string | none | no | Original trace number for the return |
| originalMessageType | string | none | no | Original message type when settled as a different message (CTR to CTP example) |
| originalCreateDtTime | string | none | no | Create date time of the original message |
| originalSettlementDate | string | none | no | Original settlement date (README lists it twice; schema once) |
| originalSwiftEndToEndTransactionReference | string | none | no | Original cross-border end-to-end reference |

### 4.4 `returnSpecificInfo`, return or notification

ACH return and notification-of-change fields. The README example uses older names (`newAccountName`, `newAccountNumber`, `newRoutingNumber`, `newTransactionCode`, `oldTransactionCode`); the schema names below are authoritative.

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| originalPaymentType | string | none | no | Payment type code originally requested |
| reasonCode | string | none | no | Return or reject reason code |
| additionalInfo | string | none | no | Any additional information sent |
| returnReceivedDate | string | YYYY-MM-DD (prose) | no | Date the return file was received or the NOC occurred |
| notificationOfChangeNewAccountName | string | none | no | Corrected account name from the receiver FI |
| notificationOfChangeOldAccountName | string | none | no | Original account name |
| notificationOfChangeNewAccountNumberTokenized | string | none | no | Corrected account number (tokenized) |
| notificationOfChangeOldAccountNumberTokenized | string | none | no | Original account number (tokenized) |
| notificationOfChangeNewRoutingNumber | string | none | no | Corrected routing number |
| notificationOfChangeOldRoutingNumber | string | none | no | Original routing number |
| traceNumber | string | none | no | Record trace number from the paperless entry system |
| contestedTraceNumber | string | none | no | Contested trace number from the return files |
| notificationOfChangeNewTransactionCode | string | none | no | New transaction code from the receiver FI |
| notificationOfChangeOldTransactionCode | string | none | no | Old transaction code |
| returnReasonDescription | string | none | no | Reason description for the return |
| returnedReceivedDate | string | none | no | Date the return was received |
| returnSettlementDate | string | none | no | Return settlement date |
| addendaInformation | string | none | no | Addenda information for the return |
| refusedChangeCode | string | none | no | Refused change code |
| contestedReturnCode | string | none | no | Contested return code |
| originalReceivingDfiIdentification | string | none | no | Original receiving DFI identification |
| dishonoredReturnTraceNumber | string | none | no | Dishonored return trace number |
| dishonoredReturnSettlementDate | string | none | no | Dishonored return settlement date |
| dishonoredReturnReasonCode | string | none | no | Dishonored return reason code |
| badBankCountryCode | string | none | no | Bad bank country code |
| badBankSource | string | none | no | Bad bank source |
| confirmationCode | string | none | no | Confirmation code from the clearing system |
| dateOriginalEntryReturned | string | none | no | Date the original entry was returned |

### 4.5 `acknowledgementSpecific`, return or notification

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| ackType | string | none | no | Type of clearing-system acknowledgement: ack or nack |
| ackDescription | string | none | no | Description of the ack type |

### 4.6 `relatedRemitterInfo`, other

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| remiterId | string | none | no | Remitter id (account number or other identification); spelled with one t in the schema |
| methodOfRequest | string | none | no | Method of request, e.g. Email or text |
| electronicValue | string | none | no | The contact value, e.g. an email address |

### 4.7 `remitterInfo`, wire optional

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| unstructuredInfo | string | none | no | Free-form message from originator to beneficiary |
| remitterId | string | none | no | Id of the originator (remitter) |
| relatedDate | string | none | no | Date the separate remitter message was sent |
| relatedTime | string | none | no | Time the separate remitter message was sent |
| invoicerIdentification | string | none | no | Invoicer identification |
| invoiceeIdentification | string | none | no | Invoicee identification |
| rtpRemitterId | string | none | no | Remitter id, RTP-specific |
| rtpRelatedDate | string | none | no | Related date, RTP-specific |
| documentCode | string | none | no | Document code |
| documentProprietary | string | none | no | Document proprietary |

### 4.8 `enrichedDataInExchange`, other

Not in the README example. Enrichment from the system of record.

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| office | string | none | no | Sub-office the account belongs to within Capital One |
| region | string | none | no | Business unit the account resides in |
| costCenter | string | none | no | Cost centre assigned to the account |
| productCode | string | none | no | Capital One product code of the account |
| analysisIndicator | string | none | no | Whether the account is analysed for monthly charges |
| customerType | string | none | no | Consumer, small business or commercial |
| accountStatus | string | none | no | Account status at enrichment time: normal, open, frozen, etc. |
| restrictionCode | string | none | no | Any restriction on the account |
| paymentProfileType | string | none | no | (no description) |

### 4.9 `supplementaryData`, other (mixed)

Data from the initiating source that does not travel with the wire. The first four fields are wire-related; the rest are ACH or NACHA file fields.

| Field | Type | Constraint | Required | Description | Relevance |
|---|---|---|---|---|---|
| contractedCurrencyCode | string | ISO alpha-3 (prose) | no | Currency of the contracted debit; requires contractedDebitAmount | wire optional |
| contractedDebitAmount | string | none | no | Debit amount already withdrawn before the wire instruction; requires contractedCurrencyCode | wire optional |
| initiatorId | string | none | no | User id at the initiating source who initiated the wire | wire optional |
| approverId | string | none | no | User id who approved the request | wire optional |
| achSenderName | string | none | no | ACH sender name (schema description is a copy of approverId's text) | ACH |
| achCompanyName | string | none | no | ACH company name (copied description) | ACH |
| achCompanyId | string | none | no | ACH company id (copied description) | ACH |
| achcompanyEntryDescription | string | none | no | ACH company entry description (lower-case c in the name; copied description) | ACH |
| achCompanyDescriptiveNotes | string | prose regex `^(?:[\x20-\x7E]|)+$`, length <= 6 | no | ACH company descriptive notes | ACH |
| achCompanyDescriptiveDate | string | YYMMDD (prose) | no | Date the originator wants shown to the receiver | ACH |
| achCompanyDiscretionaryNotes | string | none | no | Originator/ODFI codes for specialised batch handling | ACH |
| achClientBackendIndicator | string | prose regex `^[A-Z_]*$`; enum CARD, BANK (CARD -> EF, BANK -> PE) | no | Client back-end indicator | ACH |
| immediateDestination | string | none | no | FI receiving the payment file | ACH |
| immediateDestinationName | string | none | no | Name of the FI receiving the file | ACH |
| immediateOrigin | string | none | no | Nine-digit routing number of the originating institution, preceded by a blank | ACH |
| immediateOriginName | string | none | no | Name of the FI sending the file | ACH |
| originatorStatusCode | string | none | no | Code of the ODFI initiating the entry | ACH |
| originatorCompanyIdentifier | string | none | no | Originator identifier assigned by the ODFI | ACH |
| settlementCode | string | Julian DDD (prose) | no | Settlement code inserted by the ACH operator | ACH |
| achCustomerId | string | prose regex `^[0-9]{1,11}$` | no | ACH customer id | ACH |
| discretionaryNotes | string | none | no | ODFI codes for specialised entry handling | ACH |
| achDebitCredit | string | none | no | ACH debit or ACH credit | ACH |
| isBusiness | boolean | none | no | ACH file is for business | ACH |
| isPriority | boolean | none | no | ACH file is a priority | ACH |
| isFunded | boolean | none | no | ACH file is funded | ACH |
| ingestionFileReceivedDateTime | string | none | no | Inbound ACH file arrival date time | ACH |
| ingestionFileCreatedDateTime | string | none | no | Inbound ACH file creation date time | ACH |
| customerSSN | string | none | no | Tokenized social security number | other |

### 4.10 `internationalTransactionDetails`, ACH (IAT)

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| internationalTransactionIndicator | string | prose regex `^(?:[\x20-\x7E]|)+$`, length <= 16; name has a trailing space in the schema | no | International transaction indicator |
| foreignExchangeIndicator | string | prose regex `^[A-Z_]*$` | no | FX indicator |
| foreignExchangeReferenceIndicator | string | prose regex `^[A-Z_]*$` | no | FX reference indicator |
| foreignExchangeReference | string | prose regex `^(?:[\x20-\x7E]|)+$`, length <= 15 | no | FX reference |
| destinationCountryCode | string | prose regex `^[a-zA-Z0-9]{2}$` | no | Destination country code |
| originatingCurrencyCode | string | prose regex `^[a-zA-Z0-9]{0,3}$` | no | Originating currency code |
| destinationCurrencyCode | string | prose regex `^[a-zA-Z0-9]{0,3}$` | no | Destination currency code |
| traceNumber | string | none | no | IAT trace number |
| originatorDateOfBirth | string | none | no | Optional DoB for natural-person originators in IAT (not in README example) |
| receiverDateOfBirth | string | none | no | Optional DoB for natural-person receivers in IAT (not in README example) |

### 4.11 `optionalHeaderInfo`, wire optional

Swift-network header fields (business application header material).

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| senderMemberId | string | none | no | FROM: client or participant id in the clearing system; network address for TCH |
| receiverMemberId | string | none | no | TO: client or participant id in the clearing system |
| senderBranchId | string | none | no | FROM: branch id; TCH participant id |
| receiverBranchId | string | none | no | TO: branch id; TCH participant id |
| businessMsgId | string | none | no | Business message header id, built with the sender's id |
| fromClearingSystemMemberId | string | none | no | FROM: clearing system member id |
| toClearingSystemMemberId | string | none | no | TO: clearing system member id |
| businessService | string | none | no | Business service agreed between the two messaging endpoints |

### 4.12 `eventNotification`, return or notification

Required: `eventCd`.

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| eventCd | string | none | yes | Event code |
| eventDesc | string | none | no | Event description |
| eventParam | array (items untyped) | none | no | Event parameters |
| eventParam993 | object | none | no | Event param object for 993 (see below) |
| eventParam994 | object | none | no | Event param object for 994 (see below) |
| eventTime | string | none | no | Event time |

`eventParam993`:

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| messageIdentification | string | none | no | Message identification |
| messageClass | string | none | no | Message class |
| memberIdentification | string | none | no | Member identification |
| name | string | none | no | Name |
| currency | string | none | no | Currency |
| availablePrefundBalanceStatus | string | none | no | Available prefund balance status |
| openingPrefundedBalance | string | none | no | Opening prefunded balance; name has a trailing space in the schema |
| lowWatermarkValue | string | none | no | Low watermark (schema description says "High Watermark Value") |
| highWatermarkValue | string | none | no | High watermark (schema description says "Low Watermark Value") |
| availablePrefundBalance | string | none | no | Available prefund balance |

`eventParam994`:

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| messageIdentification | string | none | no | Message identification |
| messageClass | string | none | no | Message class |
| memberIdentification | string | none | no | Member identification |
| name | string | none | no | Name |
| currency | string | none | no | Currency |
| prefundedBalanceBreachStatus | string | none | no | Prefunded balance breach status |
| prefundedBalance | string | none | no | Prefunded balance; name has a trailing space in the schema |
| netPosition | string | none | no | Net position |
| instructionId | string | none | no | Instruction id |
| paymentAmount | string | none | no | Payment amount |
| residualPrefundedBalancePosition | string | none | no | Residual prefunded balance position |

### 4.13 `messageRejectNotification`, return or notification

Required: `messageRefId`.

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| messageRefId | string | none | yes | Message reference id |
| rejectingPartyReason | string | none | no | Rejecting party reason code |
| additionalData | string | none | no | Additional data |

### 4.14 `signOffRequestNotification`, return or notification

Required: `eventCd`.

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| eventCd | string | none | yes | Event code |
| statusReasonPartyResponse | string | none | no | Reason party response |
| originalInstructionId | string | none | no | Original instruction id |

### 4.15 `additionalInfoByChannel`, other

Information for payments introduced via external channels. All descriptions are empty except `feeCurrency`.

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| sorId | string | none | no | (empty) |
| bankId | string | none | no | (empty) |
| office | string | none | no | (empty) |
| region | string | none | no | (empty) |
| costCenter | string | none | no | (empty) |
| productCode | string | none | no | (empty) |
| analysisIndicator | string | none | no | (empty) |
| customerType | string | none | no | (empty) |
| accountStatus | string | none | no | (empty) |
| restrictionCode | string | none | no | (empty) |
| upfrontFraudResponse | string | none | no | (empty) |
| upfrontOfacResponse | string | none | no | (empty) |
| upfrontFundPostingResponse | string | none | no | (empty) |
| appliedExchangeRate | string | none | no | (empty) |
| feeAmount | number | none | no | (empty) (not in README example) |
| feeCurrency | string | none | no | Currency code for the fee amount (not in README example) |
| destinationType | string | none | no | (empty) (not in README example) |

### 4.16 `cardSpecificInfo`, card

All descriptions empty unless stated.

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| orderReferenceId | string | none | no | (empty) |
| processingType | string | none | no | (empty) |
| isVelocityCheckBypassed | boolean | none | no | (empty) |
| reportGroupIdentification | object | none | no | reportGroup, customerId, merchantId (all string, empty descriptions) |
| debitCardInformation | object | none | no | cardType, tokenizedCardNumber, expirationDate (string, empty); debitVaultId (string: id used to retrieve the CVV from the debit vault) |
| pointOfSale | object | none | no | capability, entryMode, cardHolderIdentificationMethod, terminalId, cardholderActivatedTerminalLevel (empty); terminalLocation, terminalCity, terminalState (described) |
| filterInformation | object | none | no | isPrepaid, isInternational, isFraudFilterOverride (boolean, empty) |
| merchantData | object | none | no | affiliate, campaign, merchantGroupingId (string, empty) |

### 4.17 `fundsAvailability` items, other

| Field | Type | Constraint | Required | Description |
|---|---|---|---|---|
| availableDate | string | YYYY-MM-DD (prose) | no | Date the amount becomes available |
| amount | string | none | no | Amount that becomes available on that date |

## 5. Fields that will matter for pain.001.001.11

Candidate sources in SDPPayload for each pain.001 area. "Gap" marks areas where the schema offers no obvious source or where a rule has to be decided.

| pain.001 area | Candidate SDPPayload source | Notes and gaps |
|---|---|---|
| GrpHdr/MsgId | messageTransmissionId; optionalHeaderInfo.businessMsgId for a BAH BizMsgIdr | Max35Text in pain.001; no length limit in the schema. Decide whether PayX generates a fresh id per pain.001. |
| GrpHdr/CreDtTm | none in SDPPayload | **Gap.** Use SDPEnterpriseMessage.timestamp or generate at build time. |
| GrpHdr/InitgPty | initiatingParty (account): accountName, identification fields, address | Optional in the payload; pain.001 requires InitgPty. **Gap:** define a default (Capital One or the channel from paymentSourceChannelId). |
| PmtInf/PmtInfId, PmtMtd, BtchBookg, NbOfTxs, CtrlSum | instructionId; PmtMtd constant TRF; counts derived | One payment per instruction for wires, so NbOfTxs is 1. |
| PmtInf/PmtTpInf (SvcLvl, LclInstrm, CtgyPurp, ClrChanl) | serviceLevelCd, localInstrumentCode, categoryPurpose, clearingSystem | Values are free text in the schema; a code table to ISO external code sets (for example URGP, RTGS, TAXS) is needed. |
| ReqdExctnDt | valueDate | String with no format; needs parsing and the FX forward-date rule from the description. |
| CdtTrfTxInf/PmtId (InstrId, EndToEndId, UETR) | instructionId or clientTransactionId; endToEndId; swiftEndToEndTransactionReference | transactionId is PayX internal and has no pain.001 home. endToEndId may be a client-passed value or an internal pattern (the test uses "ii-layer-123+REP1"); confirm which is sent to FIS. |
| Amt (InstdAmt or EqvtAmt) and Ccy | transactionAmount + currencyCode; exchangeRate.instructedAmount + exchangeRate.foreignExchangeCurrencyCode for the foreign leg | **Decision needed:** which amount is instructed when FX is involved; currency of transfer (CcyOfTrf) when EqvtAmt is used. |
| XchgRateInf (XchgRate, RateTp, CtrctId) | exchangeRate.exchangeRate, exchangeRate.foreignExchangeTrade, exchangeRate.contractId | RateTp needs mapping of Spot/Agreed to SPOT/AGRD; additionalInfoByChannel.appliedExchangeRate is a second, undescribed candidate. |
| ChrgBr | chargedTo | Free text; needs mapping to DEBT, CRED, SHAR, SLEV. |
| Dbtr (Nm, PstlAdr, Id, CtryOfRes, CtctDtls) | payer: accountName or the name parts; address; identificationNumber/Type, organizationIdentificationNumber/Type, legalEntityIdentifier, otherIdentifier/Type, issuer; countryOfResidence; customerPersonalInfo for PrvtId/DtAndPlcOfBirth | Name is Max140Text; both single name and name parts exist. **Gap:** rule for which identification field feeds OrgId vs PrvtId and which scheme codes apply. |
| DbtrAcct (Id, Tp, Ccy, Nm) | payer.accountNumber + accountIdType (IBAN vs Othr); payer.currencyCode | accountIdType must be decoded; the reference converter's `AccountIdType` enum gives IBAN, BIC, DDA, ABA, TIN, OTHR and the legacy codes I, B, D, F, 9. |
| DbtrAgt | payerBank: swiftBankIdentifierCode (BICFI), bankSystemIdentifier (ClrSysId code such as USABA) + bankCode (MmbId), bankName, legalEntityIdentifier, address | bankSystemIdentifier values are "passed as is"; confirm they are ISO external clearing system codes. |
| DbtrAgtAcct | debtorAgentAccount (agent: id, account) | agent.account is a plain string. |
| Cdtr | payee (same fields as Dbtr) | |
| CdtrAcct | payee.accountNumber + accountIdType; payee.address.proxyAccountIdentification for Prxy | proxyAccountIdentification lives inside address, an odd place; confirm intent. |
| CdtrAgt | payeeBank (same fields as DbtrAgt) | |
| CdtrAgtAcct | creditorAgentAccount (agent) | |
| IntrmyAgt1/2/3 and accounts | firstIntermediaryBank, secondaryIntermediaryBank, tertiaryIntermediaryBank (bank); bank.bankAccountNumber for IntrmyAgtAcct | |
| Correspondent banks | senderCorrespondentBank, receiverCorrespondentBank, previousInstructingAgent1..3 | **Gap.** pain.001 has no correspondent or previous-instructing-agent elements (they belong to pacs.008). Decide whether to drop, fold into IntrmyAgt, or carry via InstrForDbtrAgt. |
| Instructing and instructed agents | instructingAgent, instructedAgent (bank) | Not elements of pain.001; pacs.008 only. Likely dropped for the outbound pain.001. |
| UltmtDbtr | ultimateDebtor; onBehalfOfPayer (by-order-of) | **Decision needed:** precedence when both are present. |
| UltmtCdtr | ultimateCreditor | |
| Purp | transactionReasonCd (closest); categoryPurpose is CtgyPurp, not Purp | **Gap.** No dedicated purpose code field; external purpose code list required. |
| RgltryRptg | none | **Gap.** internationalTransactionDetails is ACH IAT, not wire regulatory reporting. |
| RmtInf/Ustrd | remitterInfo.unstructuredInfo; bankToBank is not remittance | Max140Text; no length limit in the schema. |
| RmtInf/Strd | remitterInfo.invoicerIdentification, invoiceeIdentification, documentCode, documentProprietary, relatedDate, remitterId | Partial structured remittance only; no amounts or references. |
| RltdRmtInf | relatedRemitterInfo: remiterId (RmtId), methodOfRequest (RmtLctnDtls/Mtd), electronicValue (ElctrncAdr) | Method values need mapping to EMAL, FAXI, etc. |
| InstrForDbtrAgt, InstrForCdtrAgt | bankToBank (free text) | **Gap.** pain.001 has no InstrForNxtAgt; Fedwire BBI/FI-to-FI content has to be split between InstrForCdtrAgt (InstrInf) and InstrForDbtrAgt, or carried otherwise. |
| Charges amounts | additionalInfoByChannel.feeAmount, feeCurrency | pain.001 carries no charges amount (pacs.008 ChrgsInf). Information only. |
| Routing and message selection | paymentTypeCode, paymentType, clearingSystem, transactionDirectionName, messageFormat, domesticPayment/internationalPayment (relatedReference) | Decide the pain.001 variant (GPN vs corporate wire) from these; relatedReference meaning is unknown (copy-paste description). |
| Business application header (if FIS requires head.001) | optionalHeaderInfo (senderMemberId, receiverMemberId, businessMsgId, businessService) | |

Cross-cutting gaps:

1. No `required` list and no length or pattern keywords in the schema, so every pain.001 mandatory element and every Max35/70/140 limit must be validated by the mapper.
2. Address: both `addressLine1..4` and structured fields exist, with `city` and `townName`, and `stateProvince` and `stateCode`, as duplicates. CBPR+ and Fedwire ISO rules on structured versus unstructured postal addresses need a precedence rule.
3. Name: `accountName` versus first/middle/last/prefix/suffix parts; need a concatenation rule and Max140 truncation policy.
4. Date and amount types: dates are untyped strings; amounts are BigDecimal with no scale; currency minor-unit rounding is the mapper's job.
5. README drift: the README example omits `enrichedDataInExchange`, `ultimateDebtor`, `relatedReference`, the fee fields, `paymentProfileType`, the IAT date-of-birth fields and several `account`/`bank` fields, and uses older `returnSpecificInfo` names. Treat the schema, not the README, as the contract.
