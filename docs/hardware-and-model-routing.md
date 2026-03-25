# hardware and model routing (pilot)

## baseline hardware
- Raspberry Pi 5
- 8GB RAM
- 256GB NVMe storage

## why this setup
- low-cost, low-power, always-on edge node suitable for pilot operations
- enough compute for orchestration, policy checks, connectors, scheduling, and logging
- NVMe chosen over SD card for reliability, endurance, and I/O performance
- 256GB provides headroom for:
  - local logs/audit retention
  - cached snapshots
  - lightweight indexes/embeddings
  - update and rollback buffers

## role of the edge node
The edge node runs the control plane:
- OpenClaw agent runtime
- policy engine
- scheduler/heartbeat jobs
- connector adapters
- audit logging

It is not intended for heavy local model training.

## model routing policy

### default mode
- API-hosted model(s) for high-quality summaries and drafting

### sensitive mode
- route selected workloads to company-hosted local inference (for example, Ollama)
- used when data classification disallows external model calls

### deterministic core
- risk/metric calculations remain deterministic regardless of model route

## data classification example
- green: sanitised/aggregated summaries -> API model allowed
- amber: internal operational data -> API allowed with masking/policy checks
- red: restricted sensitive fields -> local inference only or blocked

## failover posture
- if model endpoint unavailable, return deterministic result with degraded narrative
- never bypass policy checks to preserve functionality
