import { readdirSync, readFileSync } from 'node:fs';
import { join, resolve, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
export const QUESTIONS = join(ROOT, 'questions');
const disciplinePrefix = { inorganic: 'INORG', analytical: 'ANAL', physical: 'PHYS', organic: 'ORG' };
const qualityKeys = ['chemistry', 'calculation', 'structure', 'rights', 'latex'];
const allowed = new Set(['pending', 'passed', 'failed', 'not_applicable']);

export function validateBank(dir = QUESTIONS) {
  const errors = [];
  const ids = new Set();
  const paths = readdirSync(dir, { withFileTypes: true }).filter(x => x.isDirectory());
  for (const entry of paths) {
    const where = join(dir, entry.name);
    let item, problem, solution;
    try {
      item = JSON.parse(readFileSync(join(where, 'metadata.json'), 'utf8'));
      problem = readFileSync(join(where, 'problem.tex'), 'utf8');
      solution = readFileSync(join(where, 'solution.tex'), 'utf8');
    } catch (e) { errors.push(entry.name + ': missing/bad file: ' + e.message); continue; }
    const add = msg => errors.push(entry.name + ': ' + msg);
    if (item.schema_version !== '1.0') add('schema_version must be 1.0');
    if (!/^CHEM-(INORG|ANAL|PHYS|ORG)-\d{4}$/.test(item.id || '') || entry.name !== item.id) add('invalid ID or folder mismatch');
    if (ids.has(item.id)) add('duplicate ID');
    ids.add(item.id);
    const prefix = disciplinePrefix[item.discipline];
    if (!prefix || !String(item.id || '').startsWith('CHEM-' + prefix + '-')) add('discipline/ID mismatch');
    if (!String(item.knowledge_code || '').startsWith(prefix + '.')) add('knowledge code prefix mismatch');
    if (!['calculation','explanation','structure','mechanism'].includes(item.type)) add('invalid type');
    if (!Number.isInteger(item.difficulty) || item.difficulty < 1 || item.difficulty > 5) add('difficulty must be 1..5');
    if (!Number.isInteger(item.points) || item.points < 1 || item.points > 40) add('points must be 1..40');
    if (!['draft','review','published','archived'].includes(item.status)) add('invalid status');
    if (!['original','licensed','metadata_only'].includes(item.rights)) add('invalid rights');
    if (!item.source || typeof item.source.reference !== 'string' || typeof item.source.license !== 'string') add('missing provenance');
    if (item.source?.kind === 'external' && !item.source?.permission_evidence && item.rights !== 'metadata_only') add('external question lacks permission proof');
    if (!item.quality) add('missing quality statuses');
    else for (const key of qualityKeys) if (!allowed.has(item.quality[key])) add('missing/invalid quality ' + key);
    if (item.status === 'published' && (item.rights === 'metadata_only' || qualityKeys.some(k => item.quality?.[k] !== 'passed' && !(k === 'structure' && item.quality?.[k] === 'not_applicable') && !(k === 'calculation' && item.quality?.[k] === 'not_applicable')))) add('cannot publish without all applicable reviews');
    if (item.discipline === 'organic' && (!item.structures?.reactant_smiles || !item.structures?.product_smiles)) add('organic exemplar needs SMILES');
    for (const [kind, content] of [['problem',problem],['solution',solution]]) {
      if (content.trim().length < 30) add(kind + '.tex is too short');
      if (/\\(documentclass|write18|openout|read|include)\b/.test(content)) add(kind + '.tex contains forbidden TeX command');
    }
  }
  return { total: paths.length, ids: [...ids].sort(), errors };
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const r = validateBank();
  console.log(JSON.stringify(r, null, 2));
  if (r.errors.length) process.exitCode = 1;
}
