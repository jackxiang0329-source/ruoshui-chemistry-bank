import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const load = path => JSON.parse(readFileSync(join(ROOT,path),'utf8'));
const jsonl = path => readFileSync(join(ROOT,path),'utf8').trim().split('\n').filter(Boolean).map(JSON.parse);
const norm = x => String(x ?? '').normalize('NFKC').toLowerCase().replace(/\s+/g,' ').trim();

export function analyzeStructures() {
  const candidates = jsonl('imports/chemquiz/name-to-formula.jsonl');
  const holds = load('imports/review-holds.json');
  const map = new Map();
  for (const entry of candidates) {
    const smiles = String(entry.smiles || '').trim();
    if (!smiles) continue;
    if (!map.has(smiles)) map.set(smiles,[]);
    map.get(smiles).push(entry);
  }
  const identicalSmilesGroups = [...map.entries()]
    .filter(([,g]) => g.length > 1)
    .map(([smiles,g])=>({
      smiles, ids:g.map(x=>x.external_id),
      names:g.map(x=>x.name_en),
      formulae:[...new Set(g.map(x=>norm(x.answer)))],
      action: 'manual_review_no_automatic_merge'
    })).sort((a,b)=>a.smiles.localeCompare(b.smiles));
  const critical = identicalSmilesGroups.filter(g =>
    g.formulae.length > 1 ||
    g.names.some(n=>/graphite|diamond/i.test(n)) ||
    (g.formulae.includes('c12h22o11') && g.names.length > 1));
  const required = new Set(critical.flatMap(g=>g.ids));
  const onHold = new Set(holds.entries.map(x=>x.external_id));
  const errors = [];
  for (const id of required) if (!onHold.has(id)) errors.push('Unheld severe structural conflict: '+id);
  for (const id of onHold) if (!candidates.some(x=>x.external_id===id)) errors.push('Unknown hold ID: '+id);
  const iupac = jsonl('imports/chemiq/smiles_to_iupac.jsonl');
  const encodedAnswers=iupac.filter(q=>q.answer_format==='iupac' && q.verification_method==='opsin' &&
      q.answer===q.meta_data?.smiles);
  if (encodedAnswers.length!==iupac.length)
    errors.push('ChemIQ IUPAC grader reference format has changed: revalidate display');
  return {
    catalog_records:candidates.length, catalog_with_smiles:candidates.filter(x=>x.smiles).length,
    identical_raw_smiles_groups:identicalSmilesGroups.length,
    raw_smiles_groups:identicalSmilesGroups,
    critical_groups:critical,
    critical_record_count:required.size,
    review_holds:holds.entries.length,
    chemiq_iupac_prompt_count:iupac.length,
    chemiq_iupac_reference_is_smiles:encodedAnswers.length,
    warnings:[
      'Exact SMILES duplication does not prove two chemistry exercises are equivalent.',
      'Crystalline carbon allotropes cannot be modeled as the methane SMILES C.',
      'Three named disaccharides share one SMILES; do not identify them as synonyms without chemical review.',
      'ChemIQ IUPAC answer field stores a molecular SMILES for OPSIN grading, not the display name.',
      'Only a separate RDKit canonicalization audit can detect non-identical SMILES representing one molecular graph.'
    ],
    errors
  };
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
  const result=analyzeStructures();
  console.log(JSON.stringify(result,null,2));
  if(result.errors.length) process.exitCode=1;
}
