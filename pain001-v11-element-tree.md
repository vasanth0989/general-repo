# pain.001.001.11 element tree

Generated from the ISO 20022 schema pain.001.001.11.xsd (Standards Editor build R1.6.16, 2021-02-16), namespace urn:iso:std:iso:20022:tech:xsd:pain.001.001.11. Paths are relative to Document/CstmrCdtTrfInitn. Cardinality 1..1 means mandatory. Depth is limited to seven levels and repeated complex types below the third level are listed once; see the XSD for the full nesting.

| Element path | Type | Rules | Cardinality |
|---|---|---|---|
| CstmrCdtTrfInitn/GrpHdr | GroupHeader95 |  | 1..1 |
| &nbsp;&nbsp;MsgId | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;CreDtTm | ISODateTime | dateTime | 1..1 |
| &nbsp;&nbsp;Authstn | Authorisation1Choice |  | 0..2 |
| &nbsp;&nbsp;&nbsp;&nbsp;Cd | Authorisation1Code | string; enum AUTH/FDET/FSUM/ILEV | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max128Text | string; min 1; max 128 | 1..1 |
| &nbsp;&nbsp;NbOfTxs | Max15NumericText | string; pattern [0-9]{1,15} | 1..1 |
| &nbsp;&nbsp;CtrlSum | DecimalNumber | decimal; frac 17; digits 18 | 0..1 |
| &nbsp;&nbsp;InitgPty | PartyIdentification135 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Exact4AlphaNumericText | string; pattern [a-zA-Z0-9]{4} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;Id | Party38Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OrgId | OrganisationIdentification29 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AnyBIC | AnyBICDec2014Identifier | string; pattern [A-Z0-9]{4,4}[A-Z]{2,2}[A-Z0-9]{2,2}(... | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEI | LEIIdentifier | string; pattern [A-Z0-9]{18,18}[0-9]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericOrganisationIdentification1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | OrganisationIdentificationSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalOrganisationIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrvtId | PersonIdentification13 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DtAndPlcOfBirth | DateAndPlaceOfBirth1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BirthDt | ISODate | date | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrvcOfBirth | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CityOfBirth | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtryOfBirth | CountryCode | string; pattern [A-Z]{2,2} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericPersonIdentification1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | PersonIdentificationSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalPersonIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;CtryOfRes | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;CtctDtls | Contact4 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NmPrfx | NamePrefix2Code | string; enum DOCT/MADM/MISS/MIST/MIKS | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PhneNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MobNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FaxNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailAdr | Max2048Text | string; min 1; max 2048 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailPurp | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JobTitl | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rspnsblty | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | OtherContact1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ChanlTp | Max4Text | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max128Text | string; min 1; max 128 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrefrdMtd | PreferredContactMethod1Code | string; enum LETT/MAIL/PHON/FAXX/CELL | 0..1 |
| &nbsp;&nbsp;FwdgAgt | BranchAndFinancialInstitutionIdentification6 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;FinInstnId | FinancialInstitutionIdentification18 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BICFI | BICFIDec2014Identifier | string; pattern [A-Z0-9]{4,4}[A-Z]{2,2}[A-Z0-9]{2,2}(... | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ClrSysMmbId | ClearingSystemMemberIdentification2 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ClrSysId | ClearingSystemIdentification2Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalClearingSystemIdentification1Code | string; min 1; max 5 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MmbId | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEI | LEIIdentifier | string; pattern [A-Z0-9]{18,18}[0-9]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Exact4AlphaNumericText | string; pattern [a-zA-Z0-9]{4} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericFinancialIdentification1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | FinancialIdentificationSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalFinancialInstitutionIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;BrnchId | BranchData3 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEI | LEIIdentifier | string; pattern [A-Z0-9]{18,18}[0-9]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Exact4AlphaNumericText | string; pattern [a-zA-Z0-9]{4} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;InitnSrc | PaymentInitiationSource1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Prvdr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Vrsn | Max35Text | string; min 1; max 35 | 0..1 |
| CstmrCdtTrfInitn/PmtInf | PaymentInstruction40 |  | 1..n |
| &nbsp;&nbsp;PmtInfId | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;PmtMtd | PaymentMethod3Code | string; enum CHK/TRF/TRA | 1..1 |
| &nbsp;&nbsp;ReqdAdvcTp | AdviceType1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;CdtAdvc | AdviceType1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AdviceType1Code | string; enum ADWD/ADND | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;DbtAdvc | AdviceType1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AdviceType1Code | string; enum ADWD/ADND | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;BtchBookg | BatchBookingIndicator | boolean | 0..1 |
| &nbsp;&nbsp;NbOfTxs | Max15NumericText | string; pattern [0-9]{1,15} | 0..1 |
| &nbsp;&nbsp;CtrlSum | DecimalNumber | decimal; frac 17; digits 18 | 0..1 |
| &nbsp;&nbsp;PmtTpInf | PaymentTypeInformation26 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;InstrPrty | Priority2Code | string; enum HIGH/NORM | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;SvcLvl | ServiceLevel8Choice |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalServiceLevel1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;LclInstrm | LocalInstrument2Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalLocalInstrument1Code | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;CtgyPurp | CategoryPurpose1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalCategoryPurpose1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;ReqdExctnDt | DateAndDateTime2Choice |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Dt | ISODate | date | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;DtTm | ISODateTime | dateTime | 1..1 |
| &nbsp;&nbsp;PoolgAdjstmntDt | ISODate | date | 0..1 |
| &nbsp;&nbsp;Dbtr | PartyIdentification135 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Exact4AlphaNumericText | string; pattern [a-zA-Z0-9]{4} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;Id | Party38Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OrgId | OrganisationIdentification29 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AnyBIC | AnyBICDec2014Identifier | string; pattern [A-Z0-9]{4,4}[A-Z]{2,2}[A-Z0-9]{2,2}(... | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEI | LEIIdentifier | string; pattern [A-Z0-9]{18,18}[0-9]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericOrganisationIdentification1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | OrganisationIdentificationSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalOrganisationIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrvtId | PersonIdentification13 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DtAndPlcOfBirth | DateAndPlaceOfBirth1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BirthDt | ISODate | date | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrvcOfBirth | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CityOfBirth | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtryOfBirth | CountryCode | string; pattern [A-Z]{2,2} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericPersonIdentification1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | PersonIdentificationSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalPersonIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;CtryOfRes | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;CtctDtls | Contact4 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NmPrfx | NamePrefix2Code | string; enum DOCT/MADM/MISS/MIST/MIKS | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PhneNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MobNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FaxNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailAdr | Max2048Text | string; min 1; max 2048 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailPurp | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JobTitl | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rspnsblty | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | OtherContact1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ChanlTp | Max4Text | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max128Text | string; min 1; max 128 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrefrdMtd | PreferredContactMethod1Code | string; enum LETT/MAIL/PHON/FAXX/CELL | 0..1 |
| &nbsp;&nbsp;DbtrAcct | CashAccount40 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Id | AccountIdentification4Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IBAN | IBAN2007Identifier | string; pattern [A-Z]{2,2}[0-9]{2,2}[a-zA-Z0-9]{1,30} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericAccountIdentification1 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max34Text | string; min 1; max 34 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | AccountSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalAccountIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Tp | CashAccountType2Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalCashAccountType1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Ccy | ActiveOrHistoricCurrencyCode | string; pattern [A-Z]{3,3} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Nm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Prxy | ProxyAccountIdentification1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | ProxyAccountType1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalProxyAccountType1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max2048Text | string; min 1; max 2048 | 1..1 |
| &nbsp;&nbsp;DbtrAgt | BranchAndFinancialInstitutionIdentification6 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;FinInstnId | FinancialInstitutionIdentification18 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BICFI | BICFIDec2014Identifier | string; pattern [A-Z0-9]{4,4}[A-Z]{2,2}[A-Z0-9]{2,2}(... | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ClrSysMmbId | ClearingSystemMemberIdentification2 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ClrSysId | ClearingSystemIdentification2Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalClearingSystemIdentification1Code | string; min 1; max 5 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MmbId | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEI | LEIIdentifier | string; pattern [A-Z0-9]{18,18}[0-9]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Exact4AlphaNumericText | string; pattern [a-zA-Z0-9]{4} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericFinancialIdentification1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | FinancialIdentificationSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalFinancialInstitutionIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;BrnchId | BranchData3 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEI | LEIIdentifier | string; pattern [A-Z0-9]{18,18}[0-9]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Exact4AlphaNumericText | string; pattern [a-zA-Z0-9]{4} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;DbtrAgtAcct | CashAccount40 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Id | AccountIdentification4Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IBAN | IBAN2007Identifier | string; pattern [A-Z]{2,2}[0-9]{2,2}[a-zA-Z0-9]{1,30} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericAccountIdentification1 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max34Text | string; min 1; max 34 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | AccountSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalAccountIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Tp | CashAccountType2Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalCashAccountType1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Ccy | ActiveOrHistoricCurrencyCode | string; pattern [A-Z]{3,3} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Nm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Prxy | ProxyAccountIdentification1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | ProxyAccountType1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalProxyAccountType1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max2048Text | string; min 1; max 2048 | 1..1 |
| &nbsp;&nbsp;InstrForDbtrAgt | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;UltmtDbtr | PartyIdentification135 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Exact4AlphaNumericText | string; pattern [a-zA-Z0-9]{4} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;Id | Party38Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OrgId | OrganisationIdentification29 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AnyBIC | AnyBICDec2014Identifier | string; pattern [A-Z0-9]{4,4}[A-Z]{2,2}[A-Z0-9]{2,2}(... | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEI | LEIIdentifier | string; pattern [A-Z0-9]{18,18}[0-9]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericOrganisationIdentification1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | OrganisationIdentificationSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalOrganisationIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrvtId | PersonIdentification13 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DtAndPlcOfBirth | DateAndPlaceOfBirth1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BirthDt | ISODate | date | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrvcOfBirth | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CityOfBirth | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtryOfBirth | CountryCode | string; pattern [A-Z]{2,2} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericPersonIdentification1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | PersonIdentificationSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalPersonIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;CtryOfRes | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;CtctDtls | Contact4 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NmPrfx | NamePrefix2Code | string; enum DOCT/MADM/MISS/MIST/MIKS | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PhneNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MobNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FaxNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailAdr | Max2048Text | string; min 1; max 2048 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailPurp | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JobTitl | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rspnsblty | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | OtherContact1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ChanlTp | Max4Text | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max128Text | string; min 1; max 128 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrefrdMtd | PreferredContactMethod1Code | string; enum LETT/MAIL/PHON/FAXX/CELL | 0..1 |
| &nbsp;&nbsp;ChrgBr | ChargeBearerType1Code | string; enum DEBT/CRED/SHAR/SLEV | 0..1 |
| &nbsp;&nbsp;ChrgsAcct | CashAccount40 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Id | AccountIdentification4Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IBAN | IBAN2007Identifier | string; pattern [A-Z]{2,2}[0-9]{2,2}[a-zA-Z0-9]{1,30} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericAccountIdentification1 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max34Text | string; min 1; max 34 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | AccountSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalAccountIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Tp | CashAccountType2Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalCashAccountType1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Ccy | ActiveOrHistoricCurrencyCode | string; pattern [A-Z]{3,3} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Nm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Prxy | ProxyAccountIdentification1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | ProxyAccountType1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalProxyAccountType1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max2048Text | string; min 1; max 2048 | 1..1 |
| &nbsp;&nbsp;ChrgsAcctAgt | BranchAndFinancialInstitutionIdentification6 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;FinInstnId | FinancialInstitutionIdentification18 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BICFI | BICFIDec2014Identifier | string; pattern [A-Z0-9]{4,4}[A-Z]{2,2}[A-Z0-9]{2,2}(... | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ClrSysMmbId | ClearingSystemMemberIdentification2 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ClrSysId | ClearingSystemIdentification2Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalClearingSystemIdentification1Code | string; min 1; max 5 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MmbId | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEI | LEIIdentifier | string; pattern [A-Z0-9]{18,18}[0-9]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Exact4AlphaNumericText | string; pattern [a-zA-Z0-9]{4} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericFinancialIdentification1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | FinancialIdentificationSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalFinancialInstitutionIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;BrnchId | BranchData3 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEI | LEIIdentifier | string; pattern [A-Z0-9]{18,18}[0-9]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Exact4AlphaNumericText | string; pattern [a-zA-Z0-9]{4} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;CdtTrfTxInf | CreditTransferTransaction54 |  | 1..n |
| &nbsp;&nbsp;&nbsp;&nbsp;PmtId | PaymentIdentification6 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InstrId | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EndToEndId | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UETR | UUIDv4Identifier | string; pattern [a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-... | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;PmtTpInf | PaymentTypeInformation26 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InstrPrty | Priority2Code | string; enum HIGH/NORM | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SvcLvl | ServiceLevel8Choice |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalServiceLevel1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LclInstrm | LocalInstrument2Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalLocalInstrument1Code | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtgyPurp | CategoryPurpose1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalCategoryPurpose1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Amt | AmountType4Choice |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InstdAmt | ActiveOrHistoricCurrencyAndAmount |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InstdAmt | (value) | decimal; frac 5; digits 18; min 0 @Ccy:ActiveOrHistoricCurrencyCode |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EqvtAmt | EquivalentAmount2 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amt | ActiveOrHistoricCurrencyAndAmount |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amt | (value) | decimal; frac 5; digits 18; min 0 @Ccy:ActiveOrHistoricCurrencyCode |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CcyOfTrf | ActiveOrHistoricCurrencyCode | string; pattern [A-Z]{3,3} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;XchgRateInf | ExchangeRate1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UnitCcy | ActiveOrHistoricCurrencyCode | string; pattern [A-Z]{3,3} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;XchgRate | BaseOneRate | decimal; frac 10; digits 11 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RateTp | ExchangeRateType1Code | string; enum SPOT/SALE/AGRD | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrctId | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;ChrgBr | ChargeBearerType1Code | string; enum DEBT/CRED/SHAR/SLEV | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;MndtRltdInf | CreditTransferMandateData1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MndtId | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | MandateTypeInformation2 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SvcLvl | ServiceLevel8Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalServiceLevel1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LclInstrm | LocalInstrument2Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalLocalInstrument1Code | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtgyPurp | CategoryPurpose1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalCategoryPurpose1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clssfctn | MandateClassification1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | MandateClassification1Code | string; enum FIXE/USGB/VARI | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DtOfSgntr | ISODate | date | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DtOfVrfctn | ISODateTime | dateTime | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ElctrncSgntr | Max10KBinary | base64Binary; min 1; max 10240 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FrstPmtDt | ISODate | date | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FnlPmtDt | ISODate | date | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Frqcy | Frequency36Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | Frequency6Code | string; enum YEAR/MNTH/QURT/MIAN/WEEK/DAIL/ADHO/INDA... | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prd | FrequencyPeriod1 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | Frequency6Code | string; enum YEAR/MNTH/QURT/MIAN/WEEK/DAIL/ADHO/INDA... | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CntPerPrd | DecimalNumber | decimal; frac 17; digits 18 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PtInTm | FrequencyAndMoment1 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | Frequency6Code | string; enum YEAR/MNTH/QURT/MIAN/WEEK/DAIL/ADHO/INDA... | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PtInTm | Exact2NumericText | string; pattern [0-9]{2} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rsn | MandateSetupReason1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalMandateSetupReason1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max70Text | string; min 1; max 70 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;ChqInstr | Cheque11 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ChqTp | ChequeType2Code | string; enum CCHQ/CCCH/BCHQ/DRFT/ELDR | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ChqNb | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ChqFr | NameAndAddress16 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Adr | PostalAddress24 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Exact4AlphaNumericText | string; pattern [a-zA-Z0-9]{4} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DlvryMtd | ChequeDeliveryMethod1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ChequeDelivery1Code | string; enum MLDB/MLCD/MLFA/CRDB/CRCD/CRFA/PUDB/PUCD... | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DlvrTo | NameAndAddress16 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Adr | PostalAddress24 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Exact4AlphaNumericText | string; pattern [a-zA-Z0-9]{4} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InstrPrty | Priority2Code | string; enum HIGH/NORM | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ChqMtrtyDt | ISODate | date | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FrmsCd | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MemoFld | Max35Text | string; min 1; max 35 | 0..2 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RgnlClrZone | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrtLctn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sgntr | Max70Text | string; min 1; max 70 | 0..5 |
| &nbsp;&nbsp;&nbsp;&nbsp;UltmtDbtr | PartyIdentification135 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Exact4AlphaNumericText | string; pattern [a-zA-Z0-9]{4} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Party38Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OrgId | OrganisationIdentification29 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AnyBIC | AnyBICDec2014Identifier | string; pattern [A-Z0-9]{4,4}[A-Z]{2,2}[A-Z0-9]{2,2}(... | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEI | LEIIdentifier | string; pattern [A-Z0-9]{18,18}[0-9]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericOrganisationIdentification1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | OrganisationIdentificationSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalOrganisationIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrvtId | PersonIdentification13 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DtAndPlcOfBirth | DateAndPlaceOfBirth1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BirthDt | ISODate | date | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrvcOfBirth | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CityOfBirth | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtryOfBirth | CountryCode | string; pattern [A-Z]{2,2} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericPersonIdentification1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | PersonIdentificationSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalPersonIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtryOfRes | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtctDtls | Contact4 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NmPrfx | NamePrefix2Code | string; enum DOCT/MADM/MISS/MIST/MIKS | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PhneNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MobNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FaxNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailAdr | Max2048Text | string; min 1; max 2048 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailPurp | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JobTitl | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rspnsblty | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | OtherContact1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ChanlTp | Max4Text | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max128Text | string; min 1; max 128 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrefrdMtd | PreferredContactMethod1Code | string; enum LETT/MAIL/PHON/FAXX/CELL | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;IntrmyAgt1 | BranchAndFinancialInstitutionIdentification6 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FinInstnId | FinancialInstitutionIdentification18 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BICFI | BICFIDec2014Identifier | string; pattern [A-Z0-9]{4,4}[A-Z]{2,2}[A-Z0-9]{2,2}(... | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ClrSysMmbId | ClearingSystemMemberIdentification2 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ClrSysId | ClearingSystemIdentification2Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalClearingSystemIdentification1Code | string; min 1; max 5 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MmbId | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEI | LEIIdentifier | string; pattern [A-Z0-9]{18,18}[0-9]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Exact4AlphaNumericText | string; pattern [a-zA-Z0-9]{4} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericFinancialIdentification1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | FinancialIdentificationSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalFinancialInstitutionIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BrnchId | BranchData3 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEI | LEIIdentifier | string; pattern [A-Z0-9]{18,18}[0-9]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Exact4AlphaNumericText | string; pattern [a-zA-Z0-9]{4} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;IntrmyAgt1Acct | CashAccount40 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | AccountIdentification4Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IBAN | IBAN2007Identifier | string; pattern [A-Z]{2,2}[0-9]{2,2}[a-zA-Z0-9]{1,30} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericAccountIdentification1 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max34Text | string; min 1; max 34 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | AccountSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalAccountIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | CashAccountType2Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalCashAccountType1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ccy | ActiveOrHistoricCurrencyCode | string; pattern [A-Z]{3,3} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prxy | ProxyAccountIdentification1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | ProxyAccountType1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalProxyAccountType1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max2048Text | string; min 1; max 2048 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;IntrmyAgt2 | BranchAndFinancialInstitutionIdentification6 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FinInstnId | FinancialInstitutionIdentification18 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BICFI | BICFIDec2014Identifier | string; pattern [A-Z0-9]{4,4}[A-Z]{2,2}[A-Z0-9]{2,2}(... | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ClrSysMmbId | ClearingSystemMemberIdentification2 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ClrSysId | ClearingSystemIdentification2Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalClearingSystemIdentification1Code | string; min 1; max 5 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MmbId | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEI | LEIIdentifier | string; pattern [A-Z0-9]{18,18}[0-9]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Exact4AlphaNumericText | string; pattern [a-zA-Z0-9]{4} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericFinancialIdentification1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | FinancialIdentificationSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalFinancialInstitutionIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BrnchId | BranchData3 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEI | LEIIdentifier | string; pattern [A-Z0-9]{18,18}[0-9]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Exact4AlphaNumericText | string; pattern [a-zA-Z0-9]{4} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;IntrmyAgt2Acct | CashAccount40 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | AccountIdentification4Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IBAN | IBAN2007Identifier | string; pattern [A-Z]{2,2}[0-9]{2,2}[a-zA-Z0-9]{1,30} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericAccountIdentification1 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max34Text | string; min 1; max 34 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | AccountSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalAccountIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | CashAccountType2Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalCashAccountType1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ccy | ActiveOrHistoricCurrencyCode | string; pattern [A-Z]{3,3} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prxy | ProxyAccountIdentification1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | ProxyAccountType1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalProxyAccountType1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max2048Text | string; min 1; max 2048 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;IntrmyAgt3 | BranchAndFinancialInstitutionIdentification6 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FinInstnId | FinancialInstitutionIdentification18 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BICFI | BICFIDec2014Identifier | string; pattern [A-Z0-9]{4,4}[A-Z]{2,2}[A-Z0-9]{2,2}(... | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ClrSysMmbId | ClearingSystemMemberIdentification2 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ClrSysId | ClearingSystemIdentification2Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalClearingSystemIdentification1Code | string; min 1; max 5 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MmbId | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEI | LEIIdentifier | string; pattern [A-Z0-9]{18,18}[0-9]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Exact4AlphaNumericText | string; pattern [a-zA-Z0-9]{4} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericFinancialIdentification1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | FinancialIdentificationSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalFinancialInstitutionIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BrnchId | BranchData3 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEI | LEIIdentifier | string; pattern [A-Z0-9]{18,18}[0-9]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Exact4AlphaNumericText | string; pattern [a-zA-Z0-9]{4} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;IntrmyAgt3Acct | CashAccount40 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | AccountIdentification4Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IBAN | IBAN2007Identifier | string; pattern [A-Z]{2,2}[0-9]{2,2}[a-zA-Z0-9]{1,30} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericAccountIdentification1 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max34Text | string; min 1; max 34 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | AccountSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalAccountIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | CashAccountType2Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalCashAccountType1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ccy | ActiveOrHistoricCurrencyCode | string; pattern [A-Z]{3,3} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prxy | ProxyAccountIdentification1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | ProxyAccountType1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalProxyAccountType1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max2048Text | string; min 1; max 2048 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;CdtrAgt | BranchAndFinancialInstitutionIdentification6 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FinInstnId | FinancialInstitutionIdentification18 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BICFI | BICFIDec2014Identifier | string; pattern [A-Z0-9]{4,4}[A-Z]{2,2}[A-Z0-9]{2,2}(... | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ClrSysMmbId | ClearingSystemMemberIdentification2 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ClrSysId | ClearingSystemIdentification2Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalClearingSystemIdentification1Code | string; min 1; max 5 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MmbId | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEI | LEIIdentifier | string; pattern [A-Z0-9]{18,18}[0-9]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Exact4AlphaNumericText | string; pattern [a-zA-Z0-9]{4} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericFinancialIdentification1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | FinancialIdentificationSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalFinancialInstitutionIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BrnchId | BranchData3 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEI | LEIIdentifier | string; pattern [A-Z0-9]{18,18}[0-9]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Exact4AlphaNumericText | string; pattern [a-zA-Z0-9]{4} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;CdtrAgtAcct | CashAccount40 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | AccountIdentification4Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IBAN | IBAN2007Identifier | string; pattern [A-Z]{2,2}[0-9]{2,2}[a-zA-Z0-9]{1,30} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericAccountIdentification1 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max34Text | string; min 1; max 34 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | AccountSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalAccountIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | CashAccountType2Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalCashAccountType1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ccy | ActiveOrHistoricCurrencyCode | string; pattern [A-Z]{3,3} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prxy | ProxyAccountIdentification1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | ProxyAccountType1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalProxyAccountType1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max2048Text | string; min 1; max 2048 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Cdtr | PartyIdentification135 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Exact4AlphaNumericText | string; pattern [a-zA-Z0-9]{4} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Party38Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OrgId | OrganisationIdentification29 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AnyBIC | AnyBICDec2014Identifier | string; pattern [A-Z0-9]{4,4}[A-Z]{2,2}[A-Z0-9]{2,2}(... | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEI | LEIIdentifier | string; pattern [A-Z0-9]{18,18}[0-9]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericOrganisationIdentification1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | OrganisationIdentificationSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalOrganisationIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrvtId | PersonIdentification13 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DtAndPlcOfBirth | DateAndPlaceOfBirth1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BirthDt | ISODate | date | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrvcOfBirth | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CityOfBirth | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtryOfBirth | CountryCode | string; pattern [A-Z]{2,2} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericPersonIdentification1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | PersonIdentificationSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalPersonIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtryOfRes | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtctDtls | Contact4 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NmPrfx | NamePrefix2Code | string; enum DOCT/MADM/MISS/MIST/MIKS | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PhneNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MobNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FaxNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailAdr | Max2048Text | string; min 1; max 2048 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailPurp | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JobTitl | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rspnsblty | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | OtherContact1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ChanlTp | Max4Text | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max128Text | string; min 1; max 128 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrefrdMtd | PreferredContactMethod1Code | string; enum LETT/MAIL/PHON/FAXX/CELL | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;CdtrAcct | CashAccount40 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | AccountIdentification4Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IBAN | IBAN2007Identifier | string; pattern [A-Z]{2,2}[0-9]{2,2}[a-zA-Z0-9]{1,30} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericAccountIdentification1 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max34Text | string; min 1; max 34 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | AccountSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalAccountIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | CashAccountType2Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalCashAccountType1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ccy | ActiveOrHistoricCurrencyCode | string; pattern [A-Z]{3,3} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prxy | ProxyAccountIdentification1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | ProxyAccountType1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalProxyAccountType1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max2048Text | string; min 1; max 2048 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;UltmtCdtr | PartyIdentification135 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Exact4AlphaNumericText | string; pattern [a-zA-Z0-9]{4} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Party38Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OrgId | OrganisationIdentification29 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AnyBIC | AnyBICDec2014Identifier | string; pattern [A-Z0-9]{4,4}[A-Z]{2,2}[A-Z0-9]{2,2}(... | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEI | LEIIdentifier | string; pattern [A-Z0-9]{18,18}[0-9]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericOrganisationIdentification1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | OrganisationIdentificationSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalOrganisationIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrvtId | PersonIdentification13 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DtAndPlcOfBirth | DateAndPlaceOfBirth1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BirthDt | ISODate | date | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrvcOfBirth | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CityOfBirth | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtryOfBirth | CountryCode | string; pattern [A-Z]{2,2} | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericPersonIdentification1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SchmeNm | PersonIdentificationSchemeName1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalPersonIdentification1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtryOfRes | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtctDtls | Contact4 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NmPrfx | NamePrefix2Code | string; enum DOCT/MADM/MISS/MIST/MIKS | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PhneNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MobNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FaxNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailAdr | Max2048Text | string; min 1; max 2048 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailPurp | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JobTitl | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rspnsblty | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | OtherContact1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ChanlTp | Max4Text | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max128Text | string; min 1; max 128 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrefrdMtd | PreferredContactMethod1Code | string; enum LETT/MAIL/PHON/FAXX/CELL | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;InstrForCdtrAgt | InstructionForCreditorAgent3 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalCreditorAgentInstruction1Code | string; min 1; max 4 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InstrInf | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;InstrForDbtrAgt | InstructionForDebtorAgent1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalDebtorAgentInstruction1Code | string; min 1; max 4 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;InstrInf | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;Purp | Purpose2Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalPurpose1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;RgltryRptg | RegulatoryReporting3 |  | 0..10 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DbtCdtRptgInd | RegulatoryReportingType1Code | string; enum CRED/DEBT/BOTH | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Authrty | RegulatoryAuthority2 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dtls | StructuredRegulatoryReporting3 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dt | ISODate | date | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | Max10Text | string; min 1; max 10 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amt | ActiveOrHistoricCurrencyAndAmount |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amt | (value) | decimal; frac 5; digits 18; min 0 @Ccy:ActiveOrHistoricCurrencyCode |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inf | Max35Text | string; min 1; max 35 | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;Tax | TaxInformation10 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cdtr | TaxParty1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TaxId | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RegnId | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TaxTp | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dbtr | TaxParty2 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TaxId | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RegnId | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TaxTp | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Authstn | TaxAuthorisation1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Titl | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdmstnZone | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RefNb | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mtd | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TtlTaxblBaseAmt | ActiveOrHistoricCurrencyAndAmount |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TtlTaxblBaseAmt | (value) | decimal; frac 5; digits 18; min 0 @Ccy:ActiveOrHistoricCurrencyCode |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TtlTaxAmt | ActiveOrHistoricCurrencyAndAmount |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TtlTaxAmt | (value) | decimal; frac 5; digits 18; min 0 @Ccy:ActiveOrHistoricCurrencyCode |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dt | ISODate | date | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SeqNb | Number | decimal; frac 0; digits 18 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rcrd | TaxRecord3 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctgy | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtgyDtls | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DbtrSts | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CertId | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FrmsCd | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prd | TaxPeriod3 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yr | ISOYear | gYear | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | TaxRecordPeriod1Code | string; enum MM01/MM02/MM03/MM04/MM05/MM06/MM07/MM08... | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FrToDt | DatePeriod2 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FrDt | ISODate | date | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ToDt | ISODate | date | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TaxAmt | TaxAmount3 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rate | PercentageRate | decimal; frac 10; digits 11 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TaxblBaseAmt | ActiveOrHistoricCurrencyAndAmount |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TaxblBaseAmt | (value) | decimal; frac 5; digits 18; min 0 @Ccy:ActiveOrHistoricCurrencyCode |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TtlAmt | ActiveOrHistoricCurrencyAndAmount |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TtlAmt | (value) | decimal; frac 5; digits 18; min 0 @Ccy:ActiveOrHistoricCurrencyCode |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dtls | TaxRecordDetails3 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prd | TaxPeriod3 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yr | ISOYear | gYear | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | TaxRecordPeriod1Code | string; enum MM01/MM02/MM03/MM04/MM05/MM06/MM07/MM08... | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FrToDt | DatePeriod2 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amt | ActiveOrHistoricCurrencyAndAmount |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amt | (value) | decimal; frac 5; digits 18; min 0 @Ccy:ActiveOrHistoricCurrencyCode |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AddtlInf | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;RltdRmtInf | RemittanceLocation7 |  | 0..10 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RmtId | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RmtLctnDtls | RemittanceLocationData1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mtd | RemittanceLocationMethod2Code | string; enum FAXI/EDIC/URID/EMAL/POST/SMSM | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ElctrncAdr | Max2048Text | string; min 1; max 2048 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | NameAndAddress16 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Adr | PostalAddress24 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;RmtInf | RemittanceInformation21 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ustrd | Max140Text | string; min 1; max 140 | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Strd | StructuredRemittanceInformation17 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RfrdDocInf | ReferredDocumentInformation7 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | ReferredDocumentType4 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CdOrPrtry | ReferredDocumentType3Choice |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | DocumentType6Code | string; enum MSIN/CNFA/DNFA/CINV/CREN/DEBN/HIRI/SBIN... | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nb | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RltdDt | ISODate | date | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LineDtls | DocumentLineInformation1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | DocumentLineIdentification1 |  | 1..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | DocumentLineType1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nb | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RltdDt | ISODate | date | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Desc | Max2048Text | string; min 1; max 2048 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amt | RemittanceAmount3 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DuePyblAmt | ActiveOrHistoricCurrencyAndAmount |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DscntApldAmt | DiscountAmountAndType1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CdtNoteAmt | ActiveOrHistoricCurrencyAndAmount |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TaxAmt | TaxAmountAndType1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdjstmntAmtAndRsn | DocumentAdjustment1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RmtdAmt | ActiveOrHistoricCurrencyAndAmount |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RfrdDocAmt | RemittanceAmount2 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DuePyblAmt | ActiveOrHistoricCurrencyAndAmount |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DuePyblAmt | (value) | decimal; frac 5; digits 18; min 0 @Ccy:ActiveOrHistoricCurrencyCode |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DscntApldAmt | DiscountAmountAndType1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | DiscountAmountType1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalDiscountAmountType1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amt | ActiveOrHistoricCurrencyAndAmount |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amt | (value) | decimal; frac 5; digits 18; min 0 @Ccy:ActiveOrHistoricCurrencyCode |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CdtNoteAmt | ActiveOrHistoricCurrencyAndAmount |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CdtNoteAmt | (value) | decimal; frac 5; digits 18; min 0 @Ccy:ActiveOrHistoricCurrencyCode |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TaxAmt | TaxAmountAndType1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | TaxAmountType1Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalTaxAmountType1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amt | ActiveOrHistoricCurrencyAndAmount |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amt | (value) | decimal; frac 5; digits 18; min 0 @Ccy:ActiveOrHistoricCurrencyCode |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdjstmntAmtAndRsn | DocumentAdjustment1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amt | ActiveOrHistoricCurrencyAndAmount |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amt | (value) | decimal; frac 5; digits 18; min 0 @Ccy:ActiveOrHistoricCurrencyCode |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CdtDbtInd | CreditDebitCode | string; enum CRDT/DBIT | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rsn | Max4Text | string; min 1; max 4 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AddtlInf | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RmtdAmt | ActiveOrHistoricCurrencyAndAmount |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RmtdAmt | (value) | decimal; frac 5; digits 18; min 0 @Ccy:ActiveOrHistoricCurrencyCode |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CdtrRefInf | CreditorReferenceInformation2 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | CreditorReferenceType2 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CdOrPrtry | CreditorReferenceType1Choice |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | DocumentType3Code | string; enum RADM/RPIN/FXDR/DISP/PUOR/SCOR | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ref | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Invcr | PartyIdentification135 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Party38Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OrgId | OrganisationIdentification29 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AnyBIC | AnyBICDec2014Identifier | string; pattern [A-Z0-9]{4,4}[A-Z]{2,2}[A-Z0-9]{2,2}(... | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEI | LEIIdentifier | string; pattern [A-Z0-9]{18,18}[0-9]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericOrganisationIdentification1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrvtId | PersonIdentification13 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DtAndPlcOfBirth | DateAndPlaceOfBirth1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericPersonIdentification1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtryOfRes | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtctDtls | Contact4 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NmPrfx | NamePrefix2Code | string; enum DOCT/MADM/MISS/MIST/MIKS | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PhneNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MobNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FaxNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailAdr | Max2048Text | string; min 1; max 2048 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailPurp | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JobTitl | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rspnsblty | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | OtherContact1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ChanlTp | Max4Text | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max128Text | string; min 1; max 128 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrefrdMtd | PreferredContactMethod1Code | string; enum LETT/MAIL/PHON/FAXX/CELL | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Invcee | PartyIdentification135 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | AddressType2Code | string; enum ADDR/PBOX/HOME/BIZZ/MLTO/DLVY | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | GenericIdentification30 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Party38Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OrgId | OrganisationIdentification29 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AnyBIC | AnyBICDec2014Identifier | string; pattern [A-Z0-9]{4,4}[A-Z]{2,2}[A-Z0-9]{2,2}(... | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEI | LEIIdentifier | string; pattern [A-Z0-9]{18,18}[0-9]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericOrganisationIdentification1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrvtId | PersonIdentification13 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DtAndPlcOfBirth | DateAndPlaceOfBirth1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | GenericPersonIdentification1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtryOfRes | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtctDtls | Contact4 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NmPrfx | NamePrefix2Code | string; enum DOCT/MADM/MISS/MIST/MIKS | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PhneNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MobNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FaxNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailAdr | Max2048Text | string; min 1; max 2048 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailPurp | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JobTitl | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rspnsblty | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | OtherContact1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ChanlTp | Max4Text | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Max128Text | string; min 1; max 128 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrefrdMtd | PreferredContactMethod1Code | string; enum LETT/MAIL/PHON/FAXX/CELL | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TaxRmt | TaxData1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cdtr | TaxParty1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TaxId | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RegnId | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TaxTp | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dbtr | TaxParty2 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TaxId | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RegnId | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TaxTp | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Authstn | TaxAuthorisation1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Titl | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UltmtDbtr | TaxParty2 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TaxId | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RegnId | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TaxTp | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Authstn | TaxAuthorisation1 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Titl | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdmstnZone | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RefNb | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mtd | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TtlTaxblBaseAmt | ActiveOrHistoricCurrencyAndAmount |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TtlTaxblBaseAmt | (value) | decimal; frac 5; digits 18; min 0 @Ccy:ActiveOrHistoricCurrencyCode |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TtlTaxAmt | ActiveOrHistoricCurrencyAndAmount |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TtlTaxAmt | (value) | decimal; frac 5; digits 18; min 0 @Ccy:ActiveOrHistoricCurrencyCode |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dt | ISODate | date | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SeqNb | Number | decimal; frac 0; digits 18 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rcrd | TaxRecord3 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctgy | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtgyDtls | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DbtrSts | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CertId | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FrmsCd | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prd | TaxPeriod3 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yr | ISOYear | gYear | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | TaxRecordPeriod1Code | string; enum MM01/MM02/MM03/MM04/MM05/MM06/MM07/MM08... | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FrToDt | DatePeriod2 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TaxAmt | TaxAmount3 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rate | PercentageRate | decimal; frac 10; digits 11 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TaxblBaseAmt | ActiveOrHistoricCurrencyAndAmount |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TtlAmt | ActiveOrHistoricCurrencyAndAmount |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dtls | TaxRecordDetails3 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AddtlInf | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GrnshmtRmt | Garnishment3 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tp | GarnishmentType1 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CdOrPrtry | GarnishmentType1Choice |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cd | ExternalGarnishmentType1Code | string; min 1; max 4 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prtry | Max35Text | string; min 1; max 35 | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issr | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Grnshee | PartyIdentification135 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Party38Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OrgId | OrganisationIdentification29 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrvtId | PersonIdentification13 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtryOfRes | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtctDtls | Contact4 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NmPrfx | NamePrefix2Code | string; enum DOCT/MADM/MISS/MIST/MIKS | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PhneNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MobNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FaxNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailAdr | Max2048Text | string; min 1; max 2048 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailPurp | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JobTitl | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rspnsblty | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | OtherContact1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrefrdMtd | PreferredContactMethod1Code | string; enum LETT/MAIL/PHON/FAXX/CELL | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GrnshmtAdmstr | PartyIdentification135 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstlAdr | PostalAddress24 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrTp | AddressType3Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SubDept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StrtNm | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNb | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BldgNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flr | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstBx | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Room | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PstCd | Max16Text | string; min 1; max 16 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TwnLctnNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DstrctNm | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtrySubDvsn | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctry | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AdrLine | Max70Text | string; min 1; max 70 | 0..7 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id | Party38Choice |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OrgId | OrganisationIdentification29 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrvtId | PersonIdentification13 |  | 1..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtryOfRes | CountryCode | string; pattern [A-Z]{2,2} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CtctDtls | Contact4 |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NmPrfx | NamePrefix2Code | string; enum DOCT/MADM/MISS/MIST/MIKS | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nm | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PhneNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MobNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FaxNb | PhoneNumber | string; pattern \+[0-9]{1,3}-[0-9()+\-]{1,30} | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailAdr | Max2048Text | string; min 1; max 2048 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EmailPurp | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JobTitl | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rspnsblty | Max35Text | string; min 1; max 35 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dept | Max70Text | string; min 1; max 70 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Othr | OtherContact1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PrefrdMtd | PreferredContactMethod1Code | string; enum LETT/MAIL/PHON/FAXX/CELL | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RefNb | Max140Text | string; min 1; max 140 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dt | ISODate | date | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RmtdAmt | ActiveOrHistoricCurrencyAndAmount |  | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RmtdAmt | (value) | decimal; frac 5; digits 18; min 0 @Ccy:ActiveOrHistoricCurrencyCode |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FmlyMdclInsrncInd | TrueFalseIndicator | boolean | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MplyeeTermntnInd | TrueFalseIndicator | boolean | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AddtlRmtInf | Max140Text | string; min 1; max 140 | 0..3 |
| &nbsp;&nbsp;&nbsp;&nbsp;SplmtryData | SupplementaryData1 |  | 0..n |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PlcAndNm | Max350Text | string; min 1; max 350 | 0..1 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Envlp | SupplementaryDataEnvelope1 |  | 1..1 |
| CstmrCdtTrfInitn/SplmtryData | SupplementaryData1 |  | 0..n |
| &nbsp;&nbsp;PlcAndNm | Max350Text | string; min 1; max 350 | 0..1 |
| &nbsp;&nbsp;Envlp | SupplementaryDataEnvelope1 |  | 1..1 |

## Mandatory elements (minOccurs 1 along a mandatory path)

- CstmrCdtTrfInitn/GrpHdr
- CstmrCdtTrfInitn/GrpHdr/MsgId
- CstmrCdtTrfInitn/GrpHdr/CreDtTm
- CstmrCdtTrfInitn/GrpHdr/NbOfTxs
- CstmrCdtTrfInitn/GrpHdr/InitgPty
- CstmrCdtTrfInitn/PmtInf
- CstmrCdtTrfInitn/PmtInf/PmtInfId
- CstmrCdtTrfInitn/PmtInf/PmtMtd
- CstmrCdtTrfInitn/PmtInf/ReqdExctnDt
- CstmrCdtTrfInitn/PmtInf/Dbtr
- CstmrCdtTrfInitn/PmtInf/DbtrAcct
- CstmrCdtTrfInitn/PmtInf/DbtrAgt
- CstmrCdtTrfInitn/PmtInf/DbtrAgt/FinInstnId
- CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf
- CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/PmtId
- CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/PmtId/EndToEndId
- CstmrCdtTrfInitn/PmtInf/CdtTrfTxInf/Amt
