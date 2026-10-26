import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const categories = ['nmr_elucidation','counting_carbon','counting_ring','shortest_path',
  'atom_mapping','smiles_to_iupac','sar','reaction'];
export const normalized = x => String(x ?? '').normalize('NFKC').toLowerCase().replace(/\s+/g, ' ').trim();
function jsonFile(p) { return JSON.parse(readFileSync(join(ROOT, p), 'utf8')); }
function jsonLines(p) { return readFileSync(join(ROOT, p), 'utf8').trim().split('\n').filter(Boolean).map(x => JSON.parse(x)); }
export function auditImports() {
  const errors = [], warnings = [];
  const cqReport = jsonFile('imports/chemquiz/dedup-report.json');
  const iqReport = jsonFile('imports/chemiq/dedup-report.json');
  const records = jsonLines('imports/chemquiz/name-to-formula.jsonl');
  const chemquizKeys = new Set();
  for (const q of records) {
    const key = normalized(q.name_en) + '|' + normalized(q.answer);
    if (chemquizKeys.has(key)) errors.push('Duplicate chemquiz name/formula ' + q.external_id);
    chemquizKeys.add(key);
    if (q.review_status !== 'external_quarantine') errors.push('Non-quarantined chemquiz candidate: ' + q.external_id);
    if (q.source?.repo !== 'bem130/chemquiz' || q.source?.license !== 'MIT' ||
        !/^[0-9a-f]{40}$/.test(q.source?.blob_sha ?? '') || !q.source.row) errors.push('Invalid chemquiz provenance ' + q.external_id);
  }
  const iqKeys = new Set(), uuids = new Set(), categoryCounts = {};
  let iqCount = 0;
  for (const category of categories) {
    const path = 'imports/chemiq/' + category + '.jsonl';
    if (!existsSync(join(ROOT, path))) { errors.push('Missing ChemIQ file ' + category); continue; }
    const questions = jsonLines(path);
    categoryCounts[category] = questions.length;
    for (const q of questions) {
      iqCount++;
      if (q.question_category !== category) errors.push('Wrong category: ' + q.uuid);
      const key = normalized(category) + '|' + normalized(q.prompt);
      if (iqKeys.has(key)) errors.push('Duplicate ChemIQ prompt: ' + q.uuid);
      iqKeys.add(key);
      if (uuids.has(q.uuid)) errors.push('Duplicate ChemIQ UUID: ' + q.uuid);
      uuids.add(q.uuid);
      if (q.import_status !== 'benchmark_quarantine') errors.push('Non-quarantined ChemIQ question: ' + q.uuid);
      if (q.source_record?.repo !== 'oxpig/ChemIQ' ||
          q.source_record?.license !== 'BSD-3-Clause' ||
          !/^[0-9a-f]{40}$/.test(q.source_record?.blob_sha ?? '') ||
          !q.source_record?.row) errors.push('Invalid ChemIQ provenance: ' + q.uuid);
      if (!q.prompt || q.answer === undefined) errors.push('Incomplete ChemIQ prompt/answer: ' + q.uuid);
    }
  }
  if (records.length !== cqReport.unique || cqReport.raw - cqReport.unique !== cqReport.removed ||
      cqReport.duplicates.length !== cqReport.removed) errors.push('chemquiz dedup report mismatch');
  if (iqCount !== iqReport.deduped || iqReport.raw_questions - iqReport.deduped !== iqReport.duplicates_removed ||
      iqReport.duplicates.length !== iqReport.duplicates_removed) errors.push('ChemIQ dedup report mismatch');
  for (const cat of categories) if (categoryCounts[cat] !== iqReport.counts[cat]) errors.push('Category count mismatch: ' + cat);
  if (!readFileSync(join(ROOT, 'imports/licenses/ChemIQ-BSD-3-Clause.txt'), 'utf8').includes('BSD 3-Clause'))
    errors.push('Missing BSD attribution');
  if (!readFileSync(join(ROOT, 'imports/licenses/chemquiz-MIT.txt'), 'utf8').includes('MIT License'))
    errors.push('Missing MIT attribution');
  warnings.push('Lexical dedup does not detect semantic equivalents, chemical synonyms, isomeric SMILES or translation duplicates.');
  warnings.push('Benchmark quarantine records are not independent blind tests if used during model development.');
  warnings.push('Upstream project licenses do not independently certify embedded third-party media or exam contents.');
  return { imported_quarantined_count: records.length + iqCount, chemquiz_count: records.length,
    chemiq_count: iqCount, categoryCounts, removed_duplicates: cqReport.removed + iqReport.duplicates_removed,
    raw_record_count: cqReport.raw + iqReport.raw_questions, published_count: 0, warnings, errors };
}
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const r = auditImports();
  console.log(JSON.stringify(r, null, 2));
  if (r.errors.length) process.exitCode = 1;
}
