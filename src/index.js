import fs from 'node:fs';
import path from 'node:path';
import { env } from './config.js';
import { loadPolicy } from './policy.js';
import { runQuestionFlow } from './runtime.js';
import { createConnectors } from './connectors/index.js';

function ensureDir(relPath) {
  fs.mkdirSync(path.join(process.cwd(), relPath), { recursive: true });
}

function writeArtifacts(result) {
  ensureDir('logs');
  ensureDir('state');

  const runPath = path.join(process.cwd(), 'state/last-run.json');
  fs.writeFileSync(runPath, JSON.stringify(result, null, 2));

  const auditPath = path.join(process.cwd(), 'logs/audit.log');
  const line = JSON.stringify({
    ts: new Date().toISOString(),
    event: 'pilot_run_completed',
    decision: result?.decision?.decision || 'UNKNOWN'
  });
  fs.appendFileSync(auditPath, `${line}\n`);
}

function runChecks() {
  const policy = loadPolicy();
  console.log('[check] policy loaded + validated');
  console.log(`[check] cro users: ${(policy.users.croUsers || []).length}`);
  console.log(`[check] inbound channels: ${(policy.channels.inbound || []).length}`);
  console.log(`[check] model routing: default=${env.defaultModel}, sensitive=${env.sensitiveRouting}`);
}

async function main() {
  const isCheck = process.argv.includes('--check');
  if (isCheck) return runChecks();

  loadPolicy();
  const connectors = createConnectors();

  const scoreFile = path.join(process.cwd(), 'examples/qualify-input.example.json');
  const qualifyScores = fs.existsSync(scoreFile)
    ? JSON.parse(fs.readFileSync(scoreFile, 'utf8'))
    : {};

  const result = await runQuestionFlow({
    question: 'What are the top 5 risks to this quarter number?',
    qualifyScores,
    connectors
  });

  writeArtifacts(result);

  console.log('[pilot] runtime scaffold active (mock adapters)');
  console.log(JSON.stringify(result, null, 2));
  console.log('[pilot] artifacts written: state/last-run.json, logs/audit.log');
}

main();
