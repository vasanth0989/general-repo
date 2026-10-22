// FIS UEAPI connectivity test, Chrome DevTools Snippet.
// HOW TO RUN WITHOUT A CORS ERROR:
//   1. Open a NEW TAB at  https://api-gw-uat.fisglobal.com/   (any page there, a 404 or Akamai error page is fine).
//   2. Press F12 on THAT tab, go to Sources > Snippets, paste this, Ctrl+Enter.
//   The page origin is then the same as the API, so the browser applies no CORS check.
//   Running it from a codeconnect.fisglobal.com tab will fail with CORS again; nothing in the code can change that.
// Paste a fresh token below (mint it on the Code Connect application page or in Postman). Tokens last 1 to 2 hours.

const TOKEN = "PASTE_ACCESS_TOKEN_HERE";

const url = "https://api-gw-uat.fisglobal.com/api/enterprise-payments/pom/v1/customer-credit-transfer-initiations";
const uuid = crypto.randomUUID();
const idempotencyKey = crypto.randomUUID();     // reuse the same value only to test the 422 case

const payload = {
  "businessApplicationHeader": {
    "characterSet": "UTF-8",
    "from": {
      "organisationIdentification": {
        "identification": {
          "organisationIdentification": {
            "other": [
              {
                "identification": "POMBULK_CT",
                "schemeName": {
                  "proprietary": "paymentSystemId"
                }
              },
              {
                "identification": "custCBI_01",
                "schemeName": {
                  "proprietary": "coreBankIdentifier"
                }
              }
            ]
          }
        }
      }
    },
    "to": {
      "organisationIdentification": {
        "identification": {
          "organisationIdentification": {
            "other": [
              {
                "identification": "XCT",
                "schemeName": {
                  "proprietary": "paymentSystemId"
                }
              },
              {
                "identification": "custCBI_01",
                "schemeName": {
                  "proprietary": "coreBankIdentifier"
                }
              },
              {
                "identification": "EC_CUSTCBI_01_POM_INCOMING",
                "schemeName": {
                  "proprietary": "endPointName"
                }
              }
            ]
          }
        }
      }
    },
    "businessMessageIdentifier": "6e8bc4309c3a11d996690800200c9a66",
    "messageDefinitionIdentifier": "pain.001.001.11",
    "marketPractice": {
      "registry": "FIS EP Universal Execution",
      "identification": "{#:2022 Edition 3}"
    },
    "creationDate": "2025-12-12T12:12:12.545000Z"
  },
  "businessDocument": {
    "customerCreditTransferInitiation": {
      "groupHeader": {
        "messageIdentification": "f3a05c2b7f6541b3ba3c4641d0abfc67",
        "creationDateTime": "2025-12-12T12:12:12.545000Z",
        "authorisation": [
          {
            "code": "FDET"
          }
        ],
        "numberOfTransactions": "1",
        "initiatingParty": {
          "name": "Juan Lopez",
          "postalAddress": {
            "addressType": {
              "code": "ADDR"
            },
            "department": "A",
            "streetName": "Vista de Mar",
            "buildingNumber": "4",
            "floor": "4",
            "postCode": "08001",
            "townName": "Barcelona",
            "townLocationName": "Barcelona",
            "countrySubDivision": "Catalonia",
            "country": "ES",
            "addressLine": [
              "Calle Vista del Mar 22"
            ]
          },
          "identification": {
            "privateIdentification": {
              "dateAndPlaceOfBirth": {
                "birthDate": "2025-12-12",
                "provinceOfBirth": "Barcelona",
                "cityOfBirth": "Barcelona",
                "countryOfBirth": "ES"
              },
              "other": [
                {
                  "identification": "123456789Z",
                  "schemeName": {
                    "code": "CUST"
                  }
                }
              ]
            }
          },
          "countryOfResidence": "ES"
        }
      },
      "paymentInformation": [
        {
          "paymentInformationIdentification": "paymentInformationIdentification",
          "paymentMethod": "TRF",
          "numberOfTransactions": "1",
          "paymentTypeInformation": {
            "categoryPurpose": {
              "code": "CASH"
            }
          },
          "requestedExecutionDate": {
            "dateTime": "2025-12-12T12:12:12+01:00"
          },
          "debtor": {
            "name": "Juan Lopez",
            "postalAddress": {
              "addressType": {
                "code": "ADDR"
              },
              "department": "A",
              "streetName": "Vista de Mar",
              "buildingNumber": "4",
              "floor": "4",
              "postCode": "08001",
              "townName": "Barcelona",
              "townLocationName": "Barcelona",
              "countrySubDivision": "Catalonia",
              "country": "ES",
              "addressLine": [
                "Calle Vista del Mar 22"
              ]
            },
            "identification": {
              "privateIdentification": {
                "dateAndPlaceOfBirth": {
                  "birthDate": "2025-12-12",
                  "provinceOfBirth": "Barcelona",
                  "cityOfBirth": "Barcelona",
                  "countryOfBirth": "ES"
                },
                "other": [
                  {
                    "identification": "123456789Z",
                    "schemeName": {
                      "code": "CUST"
                    }
                  }
                ]
              }
            },
            "countryOfResidence": "ES"
          },
          "debtorAccount": {
            "identification": {
              "IBAN": "ES6120807657195821936984"
            },
            "type": {
              "code": "CACC"
            },
            "currency": "EUR"
          },
          "debtorAgent": {
            "financialInstitutionIdentification": {
              "BICFI": "JSDZAAXX"
            }
          },
          "creditTransferTransactionInformation": [
            {
              "paymentIdentification": {
                "instructionIdentification": "5ec3247534cb4979aad778118e30029a",
                "endToEndIdentification": "CUST/20251212/0001",
                "UETR": "af2a7a45-647c-418a-ad96-6094fe5777d7"
              },
              "paymentTypeInformation": {
                "categoryPurpose": {
                  "code": "CASH"
                }
              },
              "amount": {
                "instructedAmount": {
                  "amount": "100.99",
                  "currency": "EUR"
                }
              },
              "creditorAgent": {
                "financialInstitutionIdentification": {
                  "BICFI": "DSJZAAXX"
                }
              },
              "creditor": {
                "name": "Francisco Gonzalez",
                "postalAddress": {
                  "addressType": {
                    "code": "ADDR"
                  },
                  "department": "B",
                  "streetName": "Rue del percebe",
                  "buildingNumber": "2",
                  "floor": "2",
                  "postCode": "08001",
                  "townName": "Madrid",
                  "townLocationName": "Madrid",
                  "countrySubDivision": "Madrid",
                  "country": "ES",
                  "addressLine": [
                    "Calle Rue del percebe 2"
                  ]
                },
                "identification": {
                  "privateIdentification": {
                    "dateAndPlaceOfBirth": {
                      "birthDate": "2025-12-12",
                      "provinceOfBirth": "Madrid",
                      "cityOfBirth": "Madrid",
                      "countryOfBirth": "ES"
                    },
                    "other": [
                      {
                        "identification": "987654321Z",
                        "schemeName": {
                          "code": "CUST"
                        }
                      }
                    ]
                  }
                },
                "countryOfResidence": "ES"
              },
              "creditorAccount": {
                "identification": {
                  "IBAN": "ES3320805817428785789544"
                },
                "type": {
                  "code": "CACC"
                },
                "currency": "EUR"
              },
              "supplementaryData": [
                {
                  "envelope": {
                    "schema": "urn:fis:ep:supplement:pain.001.001.11:txinf:universal:1",
                    "transactionInformationSupplement": {
                      "extension": {
                        "schema": "urn:customer_schema_name",
                        "myCustomerAttribute1Name": "myCustomerAttribute1Value"
                      }
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "supplementaryData": [
        {
          "placeAndName": "$.businessDocument.customerCreditTransferInitiation.groupHeader",
          "envelope": {
            "schema": "urn:fis:ep:supplement:pain.001.001.11:msg:universal:1",
            "messageSupplement": {
              "channel": "Mobile Application",
              "channelType": "IMOB"
            }
          }
        },
        {
          "placeAndName": "$.businessDocument.customerCreditTransferInitiation.paymentInformation[0]",
          "envelope": {
            "schema": "urn:fis:ep:supplement:pain.001.001.11:pmtinf:universal:1",
            "paymentInformationSupplement": {
              "forceFunds": false,
              "originatingBankTransactionCode": {
                "domain": {
                  "code": "PMNT",
                  "family": {
                    "code": "ICDT",
                    "subFamilyCode": "ESCT"
                  }
                },
                "proprietary": {
                  "code": "myCustBTCprtryCode"
                }
              },
              "originatingRequestedValueDate": {
                "dateTime": "2025-12-12T12:12:12+01:00"
              },
              "qualificationType": {
                "code": "TSFR"
              },
              "qualityOfService": {
                "clearingApplicationTypes": [
                  {
                    "code": "MPNS"
                  }
                ],
                "clearingInteractions": [
                  {
                    "code": "OFLN"
                  }
                ]
              }
            }
          }
        }
      ]
    }
  }
};

console.log("uuid:", uuid, "| idempotency-key:", idempotencyKey);
const started = performance.now();
fetch(url, {
  method: "POST",
  headers: {
    "accept": "*/*",
    "content-type": "application/json",
    "authorization": "Bearer " + TOKEN,
    "uuid": uuid,
    "idempotency-key": idempotencyKey,
    "organization-id": "8203"
    // "environment": "2"   // optional; absent means the primary endpoint
  },
  body: JSON.stringify(payload)
}).then(async r => {
  console.log("HTTP", r.status, r.statusText, "in", Math.round(performance.now() - started), "ms");
  const h = {}; r.headers.forEach((v, k) => h[k] = v);
  console.log("response headers:", h);
  const text = await r.text();
  try { console.log("body:", JSON.parse(text)); } catch (e) { console.log("body:", text); }
}).catch(e => console.error("fetch failed:", e));
