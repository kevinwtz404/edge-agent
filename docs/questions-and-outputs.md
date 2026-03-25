# CRO questions and output contract

## purpose
Define the standard question classes the CRO Command Agent must handle, plus a consistent response format that stays readable for non-technical operators.

## response format (default)
Every answer should use this structure:
1. **headline**: one-sentence answer
2. **key numbers**: 3-7 deterministic metrics
3. **what changed**: trend delta vs prior period
4. **top risks**: highest-impact items
5. **recommended actions**: 3 concrete next steps
6. **confidence**: high / medium / low
7. **assumptions and limits**: what may affect correctness
8. **sources**: systems/tables/time window used

## core question archetypes (v1 reliability set)

### q1: pipeline risk now
- Example: "What are the top 5 risks to this quarter's number?"
- Required outputs: risk list, weighted impact, owner, next action.

### q2: forecast drift
- Example: "How has forecast confidence changed since last Friday?"
- Required outputs: delta by segment/stage, key drivers, confidence trend.

### q3: stale opportunities
- Example: "Which high-value deals have gone cold?"
- Required outputs: no-activity list by threshold, owner, age, escalation suggestion.

### q4: follow-up coverage
- Example: "Where are we failing to follow up on time?"
- Required outputs: SLA miss rates, team breakdown, priority interventions.

### q5: stage progression blockers
- Example: "Where are deals getting stuck right now?"
- Required outputs: stage ageing distribution, outliers, likely blockers.

### q6: loss patterns
- Example: "Why are we losing more in this segment?"
- Required outputs: loss reason frequencies, trend shifts, evidence quality.

### q7: owner/manager attention
- Example: "Who needs intervention this week and why?"
- Required outputs: people list, evidence, suggested CRO nudge copy.

### q8: weekly exec briefing
- Example: "Draft my weekly pipeline summary for leadership."
- Required outputs: concise summary, changes, risks, asks, confidence notes.

### q9: account concentration risk
- Example: "Are we over-dependent on a few accounts?"
- Required outputs: concentration metrics, scenario risk notes.

### q10: next 48-hour actions
- Example: "What should I do in the next 48 hours?"
- Required outputs: prioritised checklist with expected impact.

## open-ended questions policy
The agent can answer outside the archetypes if data is in-scope.
For open-ended prompts, still enforce the same response format and include:
- confidence level
- assumptions
- explicit note when evidence is incomplete

## communication draft contract
When asked to draft Slack/email messages, include:
- purpose
- audience
- message body draft
- why now
- approval requirement status

## do not do
- no fabricated numbers
- no unreferenced confidence claims
- no sending leadership-facing comms without approval gate
