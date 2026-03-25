#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

echo "[bootstrap] creating runtime directories"
mkdir -p logs cache state config/policy

echo "[bootstrap] checking required files"
required=(
  ".env"
  "config/policy/users.allowlist.json"
  "config/policy/channels.allowlist.json"
  "config/policy/recipients.allowlist.json"
  "config/policy/data-deny-zones.yaml"
  "config/policy/approval-rules.yaml"
)

missing=0
for f in "${required[@]}"; do
  if [[ ! -f "$f" ]]; then
    echo "[bootstrap] missing: $f"
    missing=1
  fi
done

if [[ "$missing" -ne 0 ]]; then
  echo "[bootstrap] missing required config files. Copy from *.example and fill values."
  exit 1
fi

echo "[bootstrap] validating node and openclaw binaries"
command -v node >/dev/null || { echo "node not found"; exit 1; }
command -v npm >/dev/null || { echo "npm not found"; exit 1; }
command -v openclaw >/dev/null || { echo "openclaw not found"; exit 1; }

echo "[bootstrap] installing runtime dependencies"
npm install

echo "[bootstrap] done"
