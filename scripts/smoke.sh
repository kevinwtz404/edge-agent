#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

mkdir -p logs state config/policy

# Ensure bootstrap/doctor prerequisites exist for mock-mode smoke runs.
[[ -f .env ]] || cp .env.example .env
[[ -f config/policy/users.allowlist.json ]] || cp config/policy/users.allowlist.example.json config/policy/users.allowlist.json
[[ -f config/policy/channels.allowlist.json ]] || cp config/policy/channels.allowlist.example.json config/policy/channels.allowlist.json
[[ -f config/policy/recipients.allowlist.json ]] || cp config/policy/recipients.allowlist.example.json config/policy/recipients.allowlist.json
[[ -f config/policy/data-deny-zones.yaml ]] || cp config/policy/data-deny-zones.example.yaml config/policy/data-deny-zones.yaml
[[ -f config/policy/approval-rules.yaml ]] || cp config/policy/approval-rules.example.yaml config/policy/approval-rules.yaml

bash scripts/doctor.sh >/tmp/edge-agent-smoke-doctor.log
bash scripts/bootstrap.sh >/tmp/edge-agent-smoke-bootstrap.log
npm run pilot:check >/tmp/edge-agent-smoke-check.log
npm run pilot:start >/tmp/edge-agent-smoke-start.log

[[ -f state/last-run.json ]] || { echo "[smoke] missing state/last-run.json"; exit 1; }
[[ -f logs/audit.log ]] || { echo "[smoke] missing logs/audit.log"; exit 1; }

grep -q '"decision"' state/last-run.json || { echo "[smoke] run artifact missing decision"; exit 1; }
grep -q '"headline"' state/last-run.json || { echo "[smoke] run artifact missing headline"; exit 1; }
grep -q 'pilot_run_completed' logs/audit.log || { echo "[smoke] audit log missing completion event"; exit 1; }

echo "[smoke] passed"
