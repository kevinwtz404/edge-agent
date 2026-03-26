import fs from 'node:fs';
import yaml from 'js-yaml';
import { requireFile } from './config.js';

function resolvePolicyPath(relPath) {
  try {
    return requireFile(relPath);
  } catch {
    const ext = relPath.endsWith('.yaml') ? '.yaml' : '.json';
    const examplePath = relPath.replace(ext, `.example${ext}`);
    return requireFile(examplePath);
  }
}

function readJson(relPath) {
  return JSON.parse(fs.readFileSync(resolvePolicyPath(relPath), 'utf8'));
}

function readYaml(relPath) {
  return yaml.load(fs.readFileSync(resolvePolicyPath(relPath), 'utf8'));
}

function assertArray(value, pathLabel) {
  if (!Array.isArray(value)) {
    throw new Error(`Invalid policy: expected array at ${pathLabel}`);
  }
}

function validatePolicy(policy) {
  assertArray(policy.users?.croUsers, 'users.croUsers');
  assertArray(policy.channels?.inbound, 'channels.inbound');
  assertArray(policy.channels?.outbound, 'channels.outbound');
  assertArray(policy.recipients?.slack, 'recipients.slack');
  assertArray(policy.recipients?.email, 'recipients.email');
  assertArray(policy.recipients?.leadershipEmail, 'recipients.leadershipEmail');
  assertArray(policy.denyZones?.denyZones?.schemas, 'denyZones.denyZones.schemas');
  assertArray(policy.denyZones?.denyZones?.connectors, 'denyZones.denyZones.connectors');
  assertArray(policy.denyZones?.denyZones?.fields, 'denyZones.denyZones.fields');

  if (typeof policy.approvalRules?.approvalRules?.leadershipComms?.requireApproval !== 'boolean') {
    throw new Error('Invalid policy: approvalRules.approvalRules.leadershipComms.requireApproval must be boolean');
  }
}

export function loadPolicy() {
  const policy = {
    users: readJson('config/policy/users.allowlist.json'),
    channels: readJson('config/policy/channels.allowlist.json'),
    recipients: readJson('config/policy/recipients.allowlist.json'),
    denyZones: readYaml('config/policy/data-deny-zones.yaml'),
    approvalRules: readYaml('config/policy/approval-rules.yaml')
  };

  validatePolicy(policy);
  return policy;
}

export function isPrivilegedUser(policy, channel, userId) {
  return (policy.users.croUsers || []).some(u => u.channel === channel && u.userId === userId);
}

export function requiresLeadershipApproval(policy, recipient) {
  const leadership = policy.recipients.leadershipEmail || [];
  return leadership.includes(recipient) && policy.approvalRules?.approvalRules?.leadershipComms?.requireApproval === true;
}
