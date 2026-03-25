# edge-agent

A practical OpenClaw implementation track for secure operational agents.

Most teams do not fail at pilot ideas. They fail at turning approved pilots into controlled, real-world execution. `edge-agent` exists to close that gap.

## relationship to adoption-eval
`adoption-eval` determines whether a workflow pilot should run and under what boundaries.
`edge-agent` implements that approved pilot as an operational agent pattern.

Current practical use case: **CRO Command Agent** (read-first intelligence, controlled communications, strong policy gates).

## what this is for
Use this repo to:
- implement OpenClaw-native pilot agents from approved `adoption-eval` outputs
- enforce permission and communication controls in runtime, not just policy docs
- route deterministic checks and model-based summarisation safely
- ship auditable operational patterns that are production-realistic

## who this is for
- RevOps and GTM operations teams running controlled pilots
- technical teams implementing policy-gated agent runtimes
- security-conscious operators who need auditability before autonomy

## what this repo owns
- OpenClaw-first runtime patterns for operational pilots
- policy, permission, recipient, and approval gate design
- deployment profile and hardware rationale for edge execution
- observability, audit logging, and incident handling patterns

## what this repo does not own
- organisation readiness diagnostics and roadmap framing (`ai-readiness`)
- workflow-level qualification and pilot decision logic (`adoption-eval`)
- generic RAG architecture reference work (`hybrid-rag`)

## start here
- pilot spec: `docs/cro-command-agent-pilot.md`
- security and policy contract: `docs/security-policy.md`
- hardware and model routing: `docs/hardware-and-model-routing.md`
- questions and output contract: `docs/questions-and-outputs.md`
- tooling and scope matrix: `docs/tooling-and-scope-matrix.md`
- quickstart runbook: `docs/quickstart-pilot.md`
- repo style research: `docs/repo-style-research.md`

## portable setup
This repo is structured to run as a portable pilot folder on a prepared Pi/Linux host.
Use:
- `.env.example` for environment bootstrapping
- `config/policy/*.example.*` for policy allowlists and deny-zones
- `scripts/doctor.sh`, `scripts/bootstrap.sh`, and `scripts/run-pilot.sh` for setup and execution flow

## current state
This repo is in active pilot-build mode. The current focus is shipping a coherent CRO Command Agent spec and implementation scaffold aligned with the updated `adoption-eval` direction.

## archived docs
Legacy planning and draft evaluation notes are kept in `docs/archive/`.
