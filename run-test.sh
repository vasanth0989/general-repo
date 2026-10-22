#!/usr/bin/env bash
# Same test for Git Bash / macOS. Usage:  FIS_TOKEN='<token>' ./run-test.sh
set -euo pipefail
: "${FIS_TOKEN:?set FIS_TOKEN to the Bearer access token}"
uuid=$(python -c "import uuid;print(uuid.uuid4())"); idem=$(python -c "import uuid;print(uuid.uuid4())")
echo "uuid: $uuid"; echo "idempotency-key: $idem"
curl -sS -i -X POST "https://api-gw-uat.fisglobal.com/api/enterprise-payments/pom/v1/customer-credit-transfer-initiations" \
  -H "accept: */*" -H "Content-Type: application/json" -H "Authorization: Bearer $FIS_TOKEN" \
  -H "uuid: $uuid" -H "idempotency-key: $idem" -H "organization-id: 8203" -H "environment: 2" \
  --data-binary @fis-example-request-UC01.json -o response.txt -w "\nHTTP %{http_code}  (%{time_total}s)\n"
echo "---- response ----"; cat response.txt
