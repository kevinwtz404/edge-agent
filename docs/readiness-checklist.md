# readiness checklist: pilot-ready scaffold

Use this checklist to decide when the current phase is complete.

## pass criteria

- [ ] `bash scripts/doctor.sh` passes on a clean setup
- [ ] `bash scripts/bootstrap.sh` passes with local config copied from examples
- [ ] `npm test` passes
- [ ] `npm run pilot:smoke` passes
- [ ] `bash scripts/run-pilot.sh` writes both:
  - `state/last-run.json`
  - `logs/audit.log`
- [ ] runtime loads and validates policy files with fail-fast errors for invalid config
- [ ] runtime uses connector interface (`src/connectors/*`) instead of hardcoded inline data
- [ ] quickstart docs are coherent and free of duplicate/conflicting steps
- [ ] docs explicitly separate **mock scaffold mode** (current) from **live connector mode** (later phase)

## done-enough definition

When all pass criteria above are checked, this repo is complete for the current phase:

**pilot-ready scaffold (credential injection pending)**

This means it is ready to plug into real Slack/email/CRM/Supabase later, but live integration and production hardening are out of scope for this phase.
