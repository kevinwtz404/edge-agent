# connector setup: email OAuth

## goal
Enable internal email draft/send workflows with approval gating.

## steps
1. Register OAuth app with your email provider.
2. Grant minimum scopes required for send/draft operations.
3. Store credentials securely (see secrets guide).
4. Restrict recipients using `config/policy/recipients.allowlist.json`.
5. Confirm leadership recipients trigger approval policy.

## security checks
- no plaintext credentials in tracked files
- no external recipient sends in v1
- explicit audit log entry for each send attempt
