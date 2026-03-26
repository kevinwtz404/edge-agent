#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

mkdir -p logs state

npm run pilot:check >/tmp/edge-agent-smoke-check.log
npm run pilot:start >/tmp/edge-agent-smoke-start.log

[[ -f state/last-run.json ]] || { echo "[smoke] missing state/last-run.json"; exit 1; }
[[ -f logs/audit.log ]] || { echo "[smoke] missing logs/audit.log"; exit 1; }

grep -q '"decision"' state/last-run.json || { echo "[smoke] run artifact missing decision"; exit 1; }
grep -q 'pilot_run_completed' logs/audit.log || { echo "[smoke] audit log missing completion event"; exit 1; }

echo "[smoke] passed"
