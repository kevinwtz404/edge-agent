# cmd-agent

OpenClaw runtime blueprint for controlled operational agents.

## why this exists
This repository demonstrates an AI architecture pattern for high-trust operational use cases:
- explicit permissions before autonomy
- deterministic controls for risk and gating
- model use for summarisation/drafting, not hidden decision logic
- auditable behaviour as a first-class requirement

The aim is practical: build agent systems that can be reviewed, governed, and deployed without guesswork.

## context
This implementation was suggested by `adoption-eval` as a pilot candidate.
Current instance: **CRO Command Agent**.

It is built as a pilot-ready scaffold: runnable in mock mode today, and structured for live connector wiring later (for example your own CRM mirror, database, Slack, and email stack).

## what this agent does
In this pilot pattern, the agent helps revenue leadership with three concrete jobs:

1. **answer high-value commercial questions quickly**
   - which opportunities are at risk right now
   - where activity has stalled
   - what is likely to slip and why

2. **produce structured leadership-ready outputs**
   - concise headline
   - supporting numbers
   - top risks
   - recommended actions
   - confidence and assumptions

3. **support controlled communication workflows**
   - draft internal Slack/email updates
   - enforce recipient and approval rules before sends
   - retain an evidence trail for review

## why this is valuable
This pattern reduces time-to-insight on revenue risk and pipeline drift, while improving execution discipline after decisions are made.

It is designed so leadership can work from familiar channels instead of tooling dashboards or code:
- key issues are surfaced proactively in Slack/email
- complex data questions can be asked directly in natural language
- decision-ready outputs are returned in a clear, structured format

It also supports meeting preparation by turning operational data into concise executive-ready updates (for example summary briefings and slide-ready content delivered to Slack or email).

Each recommendation is tied to explicit assumptions, source evidence, and policy controls, so outputs can be reviewed and trusted rather than treated as black-box suggestions.

The value is not "more AI output". The value is faster decisions, cleaner follow-through, and clearer accountability.

## architectural stance
- **policy-gated runtime**: allowlists, deny-zones, approval rules
- **deterministic control layer**: explicit checks and predictable outcomes
- **connector abstraction**: interfaces first, live integrations later
- **artifacted execution**: each run produces inspectable outputs and audit events

## what is implemented
- strict policy loading and validation
- connector interface layer with mock adapters
- runtime output contract for CRO-style question flow
- run artifacts:
  - `state/last-run.json`
  - `logs/audit.log`
- core tests for decision and policy behaviour
- smoke chain for preflight/bootstrap/run validation

## evaluation approach
This pilot is evaluated over a two-week window using explicit criteria (response quality, control adherence, audit completeness, and operational usefulness).

## run locally (mock mode)
```bash
bash scripts/doctor.sh
bash scripts/bootstrap.sh
npm test
npm run pilot:smoke
bash scripts/run-pilot.sh
```

## key docs
- pilot spec: `docs/cro-command-agent-pilot.md`
- quickstart: `docs/quickstart-pilot.md`
- readiness gates: `docs/readiness-checklist.md`
- security and policy contract: `docs/security-policy.md`
- connector setup guides: `docs/connectors/`
