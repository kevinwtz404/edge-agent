# edge-agent

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
For a CRO, this reduces time-to-insight and improves operational follow-through.
For a CFO (or finance stakeholder), this improves decision quality because each recommendation is traceable, constrained by policy, and easier to audit.

The value is not "more AI output". The value is faster, better-governed commercial decisions with clear accountability.

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
