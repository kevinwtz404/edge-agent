# cro command agent: pilot spec (v1)

## objective
Build a policy-gated OpenClaw agent that helps a CRO answer revenue questions quickly, surface risks early, and communicate actions safely.

This is a full agent runtime with constrained execution:
- broad read intelligence
- tightly controlled write actions
- auditable behaviour by default

## pilot question
Can a secure CRO command agent reduce decision latency and improve pipeline attention without granting CRM write access?

## target user
- primary: CRO (non-technical, time-poor)
- secondary recipients: RevOps, sales managers, deal owners

## core jobs to be done
1. Answer CRO questions on demand (pipeline risk, drift, follow-up gaps, stuck deals)
2. Push proactive attention digests (daily/weekly)
3. Draft internal comms from CRO intent (Slack/email), with policy gates
4. Keep all recommendations traceable to source data and assumptions

## non-goals (v1)
- no autonomous CRM writes
- no external customer comms
- no cross-functional domains outside revenue scope (HR/legal/medical/payroll)

## mvp capabilities

### 1) question answering
- free-form CRO questions allowed
- responses include:
  - headline answer
  - supporting numbers
  - top risks
  - recommended actions
  - confidence + assumptions

### 2) proactive attention layer
- daily digest: top 5 issues requiring CRO attention
- weekly briefing: what changed, what slipped, what to escalate
- threshold alerts: stage ageing spikes, no-activity risk, forecast drift

### 3) communication drafting
- draft Slack nudges to owners/managers
- draft internal emails to approved recipients
- leadership distribution requires explicit CRO approval before send

### 4) evidence + audit
- each answer includes source references and timestamp window
- full audit log for every query, policy check, and outbound comms action

## success metrics (pilot)
- median response time to CRO questions
- % of answers with complete evidence trail
- reduction in stale high-value opportunities
- weekly forecast meeting prep time reduction
- approval-to-send ratio for drafted communications
- zero policy violations

## architecture stance
- OpenClaw runtime as control plane
- deterministic checks for metrics/risk scoring
- LLM for summarisation/explanation/drafting only
- model-agnostic routing by sensitivity policy

## phased delivery (2-week pilot)

### phase 1: secure foundation
- identity lock (CRO Slack identity for privileged commands)
- read-only connectors and policy deny-zones
- baseline deterministic risk checks

### phase 2: answers + digests
- support open Q&A with reliable core templates
- generate daily attention digest
- provide evidence/confidence formatting

### phase 3: comms workflows
- draft-only comms with recipient allowlists
- mandatory approval for leadership sends
- final audit/report pack for pilot review
