export function evaluateDecision(scores) {
  const {
    businessImpact = 0,
    frequency = 0,
    baselineMeasurability = 0,
    dataReadiness = 0,
    boundaryClarity = 0,
    pilotability = 0
  } = scores;

  const gateThreshold = 3;
  if (baselineMeasurability < gateThreshold || boundaryClarity < gateThreshold) {
    return { decision: 'NOT_YET', reason: 'Gate threshold not met (measurability or boundary clarity).' };
  }

  const weighted =
    businessImpact * 0.25 +
    frequency * 0.2 +
    dataReadiness * 0.2 +
    pilotability * 0.2 +
    baselineMeasurability * 0.075 +
    boundaryClarity * 0.075;

  if (weighted >= 4.1) return { decision: 'GO', reason: 'High weighted score with gates satisfied.' };
  if (weighted >= 3.2) return { decision: 'NOT_YET', reason: 'Moderate weighted score; revise and retest.' };
  return { decision: 'NO_GO', reason: 'Low weighted score.' };
}
