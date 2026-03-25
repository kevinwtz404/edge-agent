import fs from 'node:fs';
import path from 'node:path';
import dotenv from 'dotenv';

dotenv.config();

export const rootDir = process.cwd();

export function requireFile(relPath) {
  const full = path.join(rootDir, relPath);
  if (!fs.existsSync(full)) {
    throw new Error(`Missing required file: ${relPath}`);
  }
  return full;
}

export const env = {
  gatewayUrl: process.env.OPENCLAW_GATEWAY_URL || 'http://127.0.0.1:18789',
  accountId: process.env.OPENCLAW_ACCOUNT_ID || 'default',
  croSlackUserIds: (process.env.CRO_SLACK_USER_IDS || '').split(',').map(v => v.trim()).filter(Boolean),
  defaultModel: process.env.DEFAULT_MODEL || 'anthropic',
  sensitiveRouting: process.env.SENSITIVE_MODEL_ROUTING || 'local'
};
