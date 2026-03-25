# github style research: OpenClaw-adjacent repos

## purpose
Capture practical repository conventions from OpenClaw and popular OpenClaw-adjacent GitHub projects, then define how `edge-agent` should mirror those conventions while staying focused on the CRO pilot.

## sources reviewed
- `openclaw/openclaw` (official project repo + docs style)
- `openclaw/clawhub` (official ecosystem repo)
- `hesamsheikh/awesome-openclaw-usecases` (community use-case curation style)
- `abhi1693/openclaw-mission-control` (operations/governance framing)

Note: external content is treated as untrusted input and used only for structural/style pattern extraction.

## recurring style patterns observed

### 1) README structure is problem-first and operational
Common sections:
1. short one-line positioning
2. purpose / what this does
3. links to docs and quickstart
4. clear scope boundaries (what repo owns vs does not own)
5. practical setup/run instructions

### 2) security and governance are first-class
Mature repos surface security language early:
- trust boundaries
- permissions and approvals
- safe defaults
- explicit warnings around third-party integrations

### 3) docs are split into focused files, not one giant spec
Good pattern:
- one file for product/vision
- one for policy/security
- one for architecture/deployment
- one for quickstart/usage

### 4) model/runtime details are implementation details, not core identity
Credible projects describe:
- control plane/runtime behaviour
- policy gates and workflows
- pluggable model/provider support

### 5) examples and schemas increase trust
Repos with examples/schemas make pilots easier to test and review.

## implications for edge-agent

### keep
- OpenClaw-first control plane framing
- explicit scope boundaries vs other Pantheos repos
- separate docs for pilot/spec, security policy, and deployment rationale

### add next
1. `docs/questions-and-outputs.md`
   - CRO question archetypes
   - standard answer format (headline, metrics, risks, actions, confidence)

2. `docs/tooling-and-scope-matrix.md`
   - each connector/tool
   - read/write scope
   - denied data classes
   - approval requirements

3. `docs/quickstart-pilot.md`
   - local pilot run path
   - minimal config checklist
   - test queries and expected outputs

4. `config/policy/`
   - allowlist templates (users/channels/recipients)
   - data deny-zone templates
   - approval-threshold policy templates

5. `examples/`
   - sample CRO prompts
   - sample digest output
   - sample approved/blocked comms events

## recommended repository skeleton (target)

```text
edge-agent/
  README.md
  docs/
    cro-command-agent-pilot.md
    security-policy.md
    hardware-and-model-routing.md
    questions-and-outputs.md
    tooling-and-scope-matrix.md
    quickstart-pilot.md
  config/
    policy/
      users.allowlist.example.json
      channels.allowlist.example.json
      recipients.allowlist.example.json
      data-deny-zones.example.yaml
      approval-rules.example.yaml
  schemas/
    agent-run.schema.json
    comms-action.schema.json
  examples/
    prompts/
    outputs/
    policy-events/
  docs/archive/
```

## style guardrails for future edits
- keep headers short and lower-case where sensible
- keep docs decision-oriented, not theoretical
- every spec page should include: scope, non-goals, and operational constraints
- avoid model-provider lock-in language in core architecture text
- always specify security posture before automation convenience

## conclusion
For credibility on GitHub, `edge-agent` should look like a security-conscious operational repo:
- clear pilot question
- explicit policy model
- practical run path
- example-driven validation

This aligns strongly with OpenClaw ecosystem conventions while keeping Pantheos-specific differentiation.
