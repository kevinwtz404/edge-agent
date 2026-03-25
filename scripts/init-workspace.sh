#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

mkdir -p workspace-templates

cp templates/openclaw/SOUL.md.template workspace-templates/SOUL.md
cp templates/openclaw/AGENTS.md.template workspace-templates/AGENTS.md
cp templates/openclaw/HEARTBEAT.md.template workspace-templates/HEARTBEAT.md
cp templates/openclaw/TASKS.md.template workspace-templates/TASKS.md

echo "[init] OpenClaw template files prepared in workspace-templates/."
echo "[init] copy and customise these files in your target OpenClaw workspace."
