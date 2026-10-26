import { readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
const root = new URL('../', import.meta.url);
const lock = JSON.parse(readFileSync(new URL('third_party/NEW_CHEMISTRY_LOCK.json', root), 'utf8'));
const gitmodules = readFileSync(new URL('.gitmodules', root), 'utf8');
const errors = [];
let refsVerified = 0, checkedOut = 0;
for (const source of lock.sources) {
  if (!gitmodules.includes('path = ' + source.path)) { errors.push(source.repo + ': .gitmodules missing'); continue; }
  const ls = execFileSync('git', ['ls-tree', 'HEAD', source.path], { cwd: root, encoding: 'utf8' }).trim();
  if (!ls.startsWith('160000 commit ' + source.commit + '\\t')) { errors.push(source.repo + ': HEAD gitlink hash mismatch: ' + ls); continue; }
  refsVerified++;
  const path = new URL(source.path + '/', root);
  if (!existsSync(new URL('.git', path))) continue;
  const actual = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: path, encoding: 'utf8' }).trim();
  if (actual !== source.commit) errors.push(source.repo + ': checkout hash mismatch');
  else checkedOut++;
}
const result = { gitlinks_expected: lock.sources.length, gitlinks_verified: refsVerified, actual_checked_out: checkedOut, published_questions: 0, errors };
console.log(JSON.stringify(result, null, 2));
if (errors.length) process.exitCode = 1;
