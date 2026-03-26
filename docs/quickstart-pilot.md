# quickstart: CRO command agent pilot

## goal
Run the pilot from a portable folder on a Raspberry Pi 5 (or equivalent Linux host), with explicit policy and auth setup.

## scope note
This repo currently supports a **mock-ready scaffold**. You can run full policy-gated flow and artifacts without live Slack, email, CRM, or Supabase credentials.

## prerequisites
- Node.js 22.16+ (24 recommended)
- OpenClaw installed and reachable
- Git installed
- `jq` installed
- OAuth/app credentials for connectors you enable (only needed for future live wiring)

## 1) get the repo on device
```bash
git clone https://github.com/kevinwtz404/edge-agent.git
cd edge-agent
```

## 2) create local runtime dirs
```bash
mkdir -p logs cache state config/policy
```

## 3) create env and policy files from examples
```bash
cp .env.example .env
cp config/policy/users.allowlist.example.json config/policy/users.allowlist.json
cp config/policy/channels.allowlist.example.json config/policy/channels.allowlist.json
cp config/policy/recipients.allowlist.example.json config/policy/recipients.allowlist.json
cp config/policy/data-deny-zones.example.yaml config/policy/data-deny-zones.yaml
cp config/policy/approval-rules.example.yaml config/policy/approval-rules.yaml
```

## 4) fill required configuration
- set CRO Slack user id(s)
- set allowed channels and recipients
- configure deny-zones
- configure approval thresholds/rules

## 5) run preflight checks
```bash
bash scripts/doctor.sh
```

## 6) run pilot bootstrap
```bash
bash scripts/bootstrap.sh
```

## 7) run pilot smoke test
```bash
npm run pilot:smoke
```

## 8) run pilot session
```bash
bash scripts/run-pilot.sh
```

## test prompts
- "What are the top 5 risks to this quarter's number?"
- "Which high-value deals have had no activity in 14 days?"
- "Draft a leadership summary for this week" (should require approval before send)

## expected pilot behaviour
- answers include headline, numbers, risks, actions, confidence, and sources
- non-allowlisted sends are blocked with policy reason
- leadership-target comms require explicit approval
- run artifacts are written to `state/last-run.json` and `logs/audit.log`

## troubleshooting
- if policy files missing -> rerun file copy step
- if check fails -> inspect policy structure and required fields
- if smoke fails -> inspect `state/last-run.json` and `logs/audit.log`
- if send is blocked -> inspect policy allowlists and approval rules
