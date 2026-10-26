import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateBank } from './validate.mjs';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const QDIR = join(ROOT, 'questions');
export function buildManifest() {
  const report = validateBank();
  if (report.errors.length) throw new Error('Invalid source bank: ' + report.errors.join('; '));
  const questions = [];
  let drafts = 0;
  for (const id of readdirSync(QDIR).sort()) {
    const folder = join(QDIR, id);
    const metadata = JSON.parse(readFileSync(join(folder, 'metadata.json'), 'utf8'));
    if (metadata.status !== 'published') { drafts += 1; continue; }
    if (metadata.rights === 'metadata_only' ||
        ['chemistry','rights','latex'].some(k => metadata.quality[k] !== 'passed') ||
        ['calculation','structure'].some(k => !['passed','not_applicable'].includes(metadata.quality[k]))) {
      throw new Error('Incomplete certification: ' + id);
    }
    const hash = createHash('sha256');
    for (const name of ['metadata.json','problem.tex','solution.tex']) {
      hash.update(name); hash.update('\0');
      hash.update(readFileSync(join(folder, name))); hash.update('\0');
    }
    questions.push({ id, discipline: metadata.discipline,
      knowledge_code: metadata.knowledge_code, points: metadata.points,
      difficulty: metadata.difficulty, source: metadata.source.reference,
      content_sha256: hash.digest('hex') });
  }
  return { schema_version: '1.0', publication_status: 'approved_only',
    published_count: questions.length, draft_count: drafts, questions };
}
if (process.argv[1] === fileURLToPath(import.meta.url))
  process.stdout.write(JSON.stringify(buildManifest(), null, 2) + '\n');
