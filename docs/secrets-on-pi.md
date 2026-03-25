# secrets on Pi: storage policy

## baseline rule
Never commit secrets to Git.

## recommended options
1. `.env` file with strict file permissions (`chmod 600`)
2. OS keyring/secret manager (preferred for production)

## minimum local hardening
- store `.env` only on device
- owner-only read permissions
- no secret values in logs
- rotate tokens on operator handover

## required secret classes
- Slack bot/app tokens
- email OAuth client + refresh tokens
- CRM/Supabase credentials
- model provider API keys (if used)

## rotation guidance
- define rotation interval per connector
- rotate immediately on suspected exposure
- keep revocation checklist in internal ops notes
