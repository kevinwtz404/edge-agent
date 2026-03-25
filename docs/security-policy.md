# security and policy contract (v1)

## principles
1. least privilege always
2. read-first by default
3. explicit approval for high-impact communications
4. deterministic guardrails before model output is actioned
5. full traceability

## identity and instruction controls
- privileged instructions accepted only from approved CRO Slack user ID(s)
- all other users treated as unprivileged query-only unless explicitly allowlisted
- no instruction acceptance from email content

## data access model

### allowed by default
- CRM opportunity/account/contact data (scoped)
- activity metadata (calls, meetings, notes metadata)
- approved sheets/tables used for revenue operations

### denied by default
- HR systems and payroll datasets
- health/sensitive personal datasets
- legal privileged repositories
- any non-approved table/schema paths

## communication policy
- writes allowed only for internal Slack/email drafts and sends
- recipient allowlist enforced before send
- leadership emails require explicit approval step
- external recipient sends disabled in v1

## model safety split
- deterministic: metrics, thresholds, risk flags, routing decisions
- LLM: summaries, natural-language explanations, draft comms, briefing narrative
- no LLM-only numeric claims without deterministic backing

## policy gates
1. source scope check
2. field-level sensitivity check
3. recipient/channel allowlist check
4. approval requirement check
5. logging check

Any failed gate returns a blocked action with reason.

## logging and audit
- log query text, tool access, data sources, policy decisions, output type, recipient targets, and approval record
- immutable audit entries retained per retention policy
- include redaction markers when sensitive fields were masked

## incident handling
- automatic block on policy breach attempt
- alert CRO/admin channel with concise reason
- retain structured incident record for review
