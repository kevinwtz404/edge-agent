import fs from 'node:fs';
import yaml from 'js-yaml';
import { requireFile } from './config.js';

function readJson(relPath) {
  return JSON.parse(fs.readFileSync(requireFile(relPath), 'utf8'));
}

function readYaml(relPath) {
  return yaml.load(fs.readFileSync(requireFile(relPath), 'utf8'));
}

export function loadPolicy() {
  return {
    users: readJson('config/policy/users.allowlist.json'),
    channels: readJson('config/policy/channels.allowlist.json'),
    recipients: readJson('config/policy/recipients.allowlist.json'),
    denyZones: readYaml('config/policy/data-deny-zones.yaml'),
    approvalRules: readYaml('config/policy/approval-rules.yaml')
  };
}

export function isPrivilegedUser(policy, channel, userId) {
  return (policy.users.croUsers || []).some(u => u.channel === channel && u.userId === userId);
}

export function requiresLeadershipApproval(policy, recipient) {
  const leadership = policy.recipients.leadershipEmail || [];
  return leadership.includes(recipient) && policy.approvalRules?.approvalRules?.leadershipComms?.requireApproval === true;
}
