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

export function runQuestionFlow(question, qualifyScores = {}) {
  return buildAnswer({
    question,
    qualifyScores,
    metrics: [
      { name: 'atRiskOpportunities', value: 'TBD' },
      { name: 'noActivity14d', value: 'TBD' }
    ],
    risks: ['Data connectors not wired yet.'],
    actions: ['Connect primary data source', 'Run baseline risk scan'],
    assumptions: ['Using runtime scaffold output contract v1'],
    sources: ['config/policy/*', '.env']
  });
}
