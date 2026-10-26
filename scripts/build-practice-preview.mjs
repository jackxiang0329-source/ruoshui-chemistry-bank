#!/usr/bin/env node
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { previewFromVendor } from '../src/chemistry/catalog-node.mjs';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const flags = Object.fromEntries(process.argv.slice(2).map(arg => {
  const match = /^--([a-z-]+)=(.*)$/.exec(arg);
  if (!match) throw new Error('Invalid argument: ' + arg);
  return [match[1], match[2]];
}));
const track = flags.discipline ?? 'organic';
const mode = flags.mode ?? 'name_to_formula';
const count = flags.count === undefined ? 5 : Number(flags.count);
const optionCount = flags.options === undefined ? 4 : Number(flags.options);
const seed = flags.seed === undefined ? 20261026 : Number(flags.seed);
const output = flags.out ? resolve(flags.out) : join(root, '.tmp', 'chemistry-practice');
try {
  const built = previewFromVendor({ track, mode, count, optionCount, seed });
  mkdirSync(output, { recursive: true });
  const studentFile = join(output, 'student.json');
  const answerFile = join(output, 'teacher-private.json');
  const reportFile = join(output, 'audit-report.json');
  writeFileSync(studentFile, JSON.stringify(built.student, null, 2) + '\n');
  writeFileSync(answerFile, JSON.stringify(built.teacher, null, 2) + '\n', { mode: 0o600 });
  writeFileSync(reportFile, JSON.stringify(built.report, null, 2) + '\n');
  process.stdout.write(JSON.stringify({
    status: 'UNREVIEWED_DO_NOT_PUBLISH', student: studentFile,
    private_answers: answerFile, audit: reportFile,
    questions: built.student.question_count, ...built.report
  }, null, 2) + '\n');
} catch (error) {
  console.error(error.code || 'BUILD_FAILED', error.message);
  process.exitCode = 1;
}
