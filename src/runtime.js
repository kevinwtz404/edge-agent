import { evaluateDecision } from './decision.js';

export function buildAnswer({ question, metrics = [], risks = [], actions = [], confidence = 'medium', assumptions = [], sources = [], qualifyScores = {} }) {
  const decision = evaluateDecision(qualifyScores);
  return {
    headline: `Answer for: ${question}`,
    decision,
    keyNumbers: metrics,
    whatChanged: 'No historical delta wired yet (runtime scaffold).',
    topRisks: risks,
    recommendedActions: actions,
    confidence,
    assumptions,
    sources
  };
}

export async function runQuestionFlow({ question, qualifyScores = {}, connectors }) {
  const signals = connectors
    ? await connectors.getSignals()
    : {
        metrics: [],
        risks: ['No connector data returned.'],
        actions: ['Check connector initialisation.'],
        assumptions: ['Fallback runtime path used.'],
        sources: []
      };

  return buildAnswer({
    question,
    qualifyScores,
    metrics: signals.metrics,
    risks: signals.risks,
    actions: signals.actions,
    assumptions: signals.assumptions,
    sources: signals.sources
  });
}
