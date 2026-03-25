import fs from 'node:fs';
import path from 'node:path';
import { env } from './config.js';
import { loadPolicy } from './policy.js';
import { runQuestionFlow } from './runtime.js';

function runChecks() {
  const policy = loadPolicy();
  console.log('[check] policy loaded');
  console.log(`[check] cro users: ${(policy.users.croUsers || []).length}`);
  console.log(`[check] inbound channels: ${(policy.channels.inbound || []).length}`);
  console.log(`[check] model routing: default=${env.defaultModel}, sensitive=${env.sensitiveRouting}`);
}

function main() {
  const isCheck = process.argv.includes('--check');
  if (isCheck) return runChecks();

  loadPolicy();
  const scoreFile = path.join(process.cwd(), 'examples/qualify-input.example.json');
  const qualifyScores = fs.existsSync(scoreFile)
    ? JSON.parse(fs.readFileSync(scoreFile, 'utf8'))
    : {};
  const result = runQuestionFlow('What are the top 5 risks to this quarter number?', qualifyScores);
  console.log('[pilot] runtime scaffold active');
  console.log(JSON.stringify(result, null, 2));
  console.log('[pilot] next: wire OpenClaw session handlers + connector adapters');
}

main();
