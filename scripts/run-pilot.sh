#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

if [[ ! -f .env ]]; then
  echo "[run] .env missing. Copy .env.example to .env and fill values first."
  exit 1
fi

set -a
source ./.env
set +a

echo "[run] CRO command agent pilot starting"
echo "[run] gateway: ${OPENCLAW_GATEWAY_URL:-unset}"
echo "[run] model routing: default=${DEFAULT_MODEL:-unset}, sensitive=${SENSITIVE_MODEL_ROUTING:-unset}"

echo "[run] this scaffold currently validates startup posture and config readiness."
echo "[run] next implementation step: bind runtime handlers to OpenClaw sessions and policy engine."
