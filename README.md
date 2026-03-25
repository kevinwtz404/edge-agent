# edge-agent

OpenClaw-native implementation patterns for secure operational agents.

## context
This repo is a practical pilot implementation track linked to `adoption-eval` outputs.
When `adoption-eval` surfaces a viable, guardrailed pilot opportunity, `edge-agent` turns that into an executable operational agent pattern.

Current practical use case: **CRO Command Agent** pilot (read-first intelligence, controlled comms, strong security gates).

## purpose
Design and ship practical policy-gated agents that can operate in real business workflows with auditable controls.

## this repo owns
- OpenClaw-first agent runtime patterns for operational use cases
- policy, permission, and communication gate design
- runtime, hardware, and deployment specs (including edge/on-device options)
- observability, auditability, and incident handling patterns

## this repo does not own
- organisation readiness diagnostics (`ai-readiness`)
- workflow-level could/should/must-stay-human evaluation (`adoption-eval`)
- generic RAG reference architecture (`hybrid-rag`)

## pilot docs
- `docs/cro-command-agent-pilot.md`
- `docs/security-policy.md`
- `docs/hardware-and-model-routing.md`

## archived docs
Legacy planning and draft evaluation notes are kept in `docs/archive/`.
