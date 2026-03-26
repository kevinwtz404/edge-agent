#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

echo "[doctor] checking binaries"
for bin in node npm git openclaw; do
  if ! command -v "$bin" >/dev/null; then
    echo "[doctor] missing binary: $bin"
    exit 1
  fi
done

if ! command -v jq >/dev/null; then
  echo "[doctor] warning: jq not found (optional for scaffold mode)"
fi

echo "[doctor] checking core files"
checks=(
  "docs/cro-command-agent-pilot.md"
  "docs/security-policy.md"
  "docs/hardware-and-model-routing.md"
  ".env"
)
for f in "${checks[@]}"; do
  [[ -f "$f" ]] || { echo "[doctor] missing file: $f"; exit 1; }
done

echo "[doctor] basic checks passed"
