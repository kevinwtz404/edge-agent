import test from 'node:test';
import assert from 'node:assert/strict';
import { loadPolicy, isPrivilegedUser, requiresLeadershipApproval } from '../src/policy.js';

test('loadPolicy loads and validates policy config', () => {
  const policy = loadPolicy();
  assert.ok(policy.users);
  assert.ok(Array.isArray(policy.users.croUsers));
});

test('isPrivilegedUser recognises allowlisted CRO user', () => {
  const policy = loadPolicy();
  assert.equal(isPrivilegedUser(policy, 'slack', 'U12345678'), true);
  assert.equal(isPrivilegedUser(policy, 'slack', 'U_NOT_ALLOWED'), false);
});

test('requiresLeadershipApproval gates leadership recipient', () => {
  const policy = loadPolicy();
  assert.equal(requiresLeadershipApproval(policy, 'leadership@company.com'), true);
  assert.equal(requiresLeadershipApproval(policy, 'revops@company.com'), false);
});
