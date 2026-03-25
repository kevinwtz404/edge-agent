# connector setup: Slack

## goal
Configure Slack so the agent can:
- accept privileged instructions from CRO identity
- post internal messages to allowlisted channels
- enforce approval for leadership-targeted comms

## steps
1. Create a Slack app for the workspace.
2. Add required bot scopes (minimum needed for your flow).
3. Install app and capture bot token.
4. Identify CRO user ID and channel IDs.
5. Update policy templates:
   - `config/policy/users.allowlist.json`
   - `config/policy/channels.allowlist.json`
   - `config/policy/recipients.allowlist.json`

## notes
- Keep scopes minimal (least privilege).
- Do not allow broad write scope to all channels.
- Test blocked behaviour on non-allowlisted channels.
