#!/usr/bin/env node
// Fail-closed persisted source replay for 268 pinned ChemTrain Daily text MCQs.
// Reuses the importer that checks exact upstream Git blob hashes, content license,
// source indices and option selection before reading 268 data/candidates/*.json.
import {readFileSync,readdirSync,existsSync,writeFileSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {run as fetchAndRegenerate} from './import-chemtrain-daily-text.mjs';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const SOURCE='ChemTrain/chemtrain-daily';
const PIN='327eb915764dbcdf7bce4974a0542f3b3d626554';
const HTML_SHA='d0b152ff845f18a5ff5743c1e44a43b81f87584e';
const LIC_SHA='c1459875927c2a1bbbff1b6bf103efd0b0da44e8';
const sha256=str=>createHash('sha256').update(str).digest('hex');
export function auditPersistedDaily(generated,rows,expectedCount=268){
 if(!Array.isArray(generated)||generated.length!==expectedCount||
    !Number.isInteger(expectedCount)||expectedCount<1||
    !Array.isArray(rows))throw Error('Wrong ChemTrain Daily source record count');
 const bank=new Map(),owned=new Map(),upstream=new Set(),byKind={};
 for(const saved of rows){
  if(bank.has(saved.id))throw Error('Duplicate stored candidate id '+saved.id);
  bank.set(saved.id,saved);
  if(saved.source?.repository===SOURCE)owned.set(saved.id,saved);
 }
 for(const ref of generated){
  const source=ref.source;
  if(!ref.id||!Number.isInteger(source?.source_question_index)||source.source_question_index<0||
   source.repository!==SOURCE||source.commit!==PIN||source.git_blob_sha!==HTML_SHA||
   source.license_git_blob_sha!==LIC_SHA||source.license!=='CC BY 4.0'||
   source.content_rights_verified!==true||
   ref.publishable!==false||ref.quality_status!=='awaiting_expert_review'||
   ref.question_type!=='licensed_text_only_multiple_choice'||
   ref.resource_type!=='CC_BY_4_0_study_problem_not_exam_question'||
   !Array.isArray(ref.options)||ref.options.length<2||
   ref.answer_option?.length!==1||
   ref.answer!==ref.options[ref.answer_option.charCodeAt(0)-65])
   throw Error('Pinned MCQ source/options rights or answer index invalid '+ref.id);
  const fromSource=source.source_question_index;
  if(upstream.has(fromSource))throw Error('Source question index assigned twice '+fromSource);
  upstream.add(fromSource);
  const actual=bank.get(ref.id);
  if(!actual)throw Error('Missing stored ChemTrain Daily candidate '+ref.id);
  if(JSON.stringify(actual)!==JSON.stringify(ref)){
   const keys=new Set([...Object.keys(actual),...Object.keys(ref)]);
   const modified=[...keys].filter(key=>JSON.stringify(actual[key])!==JSON.stringify(ref[key]));
   throw Error('Persisted ChemTrain Daily source options/answer changed: '+
    ref.id+' fields='+modified.join(','));
  }
  byKind[source.source_card_kind]=(byKind[source.source_card_kind]||0)+1;
 }
 const ids=new Set(generated.map(x=>x.id));
 if(ids.size!==expectedCount||owned.size!==expectedCount||
    [...owned.keys()].some(x=>!ids.has(x)))
  throw Error('Unexpected orphan or duplicate ChemTrain Daily stored source candidates');
 if(expectedCount===268){
  const valid=['tmc/Geometry','tmc/Ligand electrons','tmc/Ligand class','pg/Removed by'];
  if(Object.keys(byKind).sort().join(',')!==valid.sort().join(','))
   throw Error('Text-only source topical coverage changed');
 }
 return {schema_version:1,source_repository:SOURCE,source_commit:PIN,
  source_html_git_blob_sha:HTML_SHA,content_license_git_blob_sha:LIC_SHA,
  source_license:'CC BY 4.0',stored_text_only_mcq_candidates_replayed:expectedCount,
  distinct_persisted_candidate_ids:ids.size,
  distinct_source_question_indexes:upstream.size,
  by_kind:Object.fromEntries(Object.entries(byKind).sort(([a],[b])=>a.localeCompare(b))),
  candidate_id_set_sha256:sha256([...ids].sort().join('\n')),
  integrity_checked:['question','answer','answer_option','options','explanation',
   'source_index','source_commit_and_git_blob','content_rights_evidence','publication_status'],
  source_license_confirmed_by_human_in_this_run:false,
  expert_chemistry_approved:0,formally_exam_ready:0,
  original_exam_questions_claimed:0,
  note:'268 existing author-licensed text-only study MCQs. Pinned source concordance and selected option do not prove chemical truth; no third-party measured data or molecular drawings are imported.'};
}
export async function run(){
 const regenerated=await fetchAndRegenerate(true);
 const rows=readdirSync(join(ROOT,'data/candidates')).filter(x=>x.endsWith('.json')).sort()
  .map(x=>JSON.parse(readFileSync(join(ROOT,'data/candidates',x),'utf8')));
 const result=auditPersistedDaily(regenerated.records,rows);
 const path=join(ROOT,'harvest/main_daily_mcq_stored_replay.json'),
  out=JSON.stringify(result,null,2)+'\n';
 if(!existsSync(path)||readFileSync(path,'utf8')!==out)writeFileSync(path,out);
 console.log('Pinned ChemTrain Daily MCQs: '+result.stored_text_only_mcq_candidates_replayed+
  ' source->saved checked, chemistry expert-approved 0');
 return result;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 run().catch(e=>{console.error(e.stack);process.exitCode=1;});
}
