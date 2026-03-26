import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateDecision } from '../src/decision.js';

test('returns NOT_YET when gate threshold is not met', () => {
  const result = evaluateDecision({
    businessImpact: 5,
    frequency: 5,
    baselineMeasurability: 2,
    dataReadiness: 5,
    boundaryClarity: 2,
    pilotability: 5
  });

  assert.equal(result.decision, 'NOT_YET');
});

test('returns GO for high weighted score with gates satisfied', () => {
  const result = evaluateDecision({
    businessImpact: 5,
    frequency: 5,
    baselineMeasurability: 4,
    dataReadiness: 4,
    boundaryClarity: 4,
    pilotability: 4
  });

  assert.equal(result.decision, 'GO');
});

test('returns NO_GO for low weighted score', () => {
  const result = evaluateDecision({
    businessImpact: 1,
    frequency: 1,
    baselineMeasurability: 3,
    dataReadiness: 1,
    boundaryClarity: 3,
    pilotability: 1
  });

  assert.equal(result.decision, 'NO_GO');
});
