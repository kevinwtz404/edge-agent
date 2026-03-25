# tooling and scope matrix

## purpose
Specify what tools/sources the CRO Command Agent can use, under what permissions, and where approvals are mandatory.

## scope matrix (v1)

| Tool / Source | Access | Allowed usage | Denied usage | Approval needed |
|---|---|---|---|---|
| CRM API (Salesforce/HubSpot/etc.) | Read-only | Pipeline metrics, stage ageing, owner activity, loss analysis | Record mutation, workflow automation writes | N/A (read only) |
| Supabase mirror / warehouse | Read-only (scoped schemas) | Analytics queries, trend comparison, digest generation | HR/payroll/legal schemas and non-allowlisted tables | N/A (read only) |
| Google Sheets/Excel (approved files) | Read-only default | Supplementary reporting, mapping exceptions, target lists | Editing sheets unless explicitly approved in future phases | N/A (read only) |
| Calendar (approved account) | Read metadata | Meeting density and coverage insights | Access to private non-revenue calendars | N/A (read only) |
| Email metadata (approved mailbox) | Read metadata | Follow-up lag detection and communication coverage stats | Reading non-approved mailboxes or confidential folders | N/A (read only) |
| Slack | Read/write (restricted) | Receive CRO instructions, send approved internal nudges | Non-allowlisted channels, non-internal recipients | Required for leadership messages |
| Email send | Write (restricted) | Internal summaries and action drafts to allowlisted recipients | External sends, non-allowlisted recipients | Required for leadership distribution |
| LLM provider API | Process-only | Summaries, explanation, draft comms, deck narrative | Source-of-truth metric generation | N/A |
| Local LLM (Ollama) | Process-only | Sensitive summarisation where external API disallowed | Bypassing policy checks | N/A |

## deny-zones (hard)
- HR systems/tables
- Payroll and compensation data
- Legal privileged repositories
- Health/sensitive personal records
- Any schema or connector not explicitly allowlisted

## instruction source policy
- privileged commands accepted only from allowlisted CRO Slack user ID(s)
- all other users: query-only or denied based on policy

## communication policy summary
- internal comms only in v1
- recipient allowlist required
- leadership-facing comms require explicit approval
- blocked actions return reason and log entry

## deterministic vs model responsibilities
- deterministic: metrics, thresholds, flags, routing decisions
- model-generated: narrative summaries, explanations, draft copy
- model output must cite deterministic values where numbers are used
