#!/usr/bin/env node
// Source-replay and full JSON equality for 185 existing exercises.
// Source agreement is not an independent chemistry adjudication or exam approval.
import {readFileSync,readdirSync,existsSync,writeFileSync} from 'node:fs';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {verifySources as verifyC,makeQuestions as inorganic} from './import-chemquiz-reference.mjs';
import {verifyPinnedSources as verifyO,makeQuestions as organic} from './import-chemquiz-organic.mjs';
import {extract as radicalClassification} from './import-chemtrain-radical.mjs';
import {generate as radicalMatch} from './import-chemtrain-radical-matching.mjs';
import {makeQuestions as pg} from './import-chemtrain-pg-learn.mjs';
import {makeQuestions as pka} from './import-chemtrain-pka-qualitative.mjs';
import {makeQuestions as reactive} from './import-chemtrain-reactivity.mjs';
import {makeQuestions as photoredox} from './import-chemtrain-photoredox.mjs';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const repo='bem130/chemquiz',rev='10b81d4c1b02847e3d9b64e8d44a960d10559ea3';
const SHAS={
 'dataset/metal_ions_and_colors.json':'51116f705badf81a99c4e08acd184cc5731c538e',
 'dataset/inorganic_polyatomic_ions.json':'1bb52d9f9399f1d1e47bb81be2b8d39ac05353a2',
 'dataset/organic_functional_groups.json':'472a029b37ff7a61b559a42bf93872d41b8f5ac3',
 'dataset/organic_homologous_series.json':'be553206c8b47c11f63ab12750c97388a0d47149'};
const url='https://github.com/'+repo+'/blob/'+rev+'/';
const load=name=>JSON.parse(readFileSync(join(ROOT,'harvest',name),'utf8'));
const sha=str=>createHash('sha256').update(str).digest('hex');
function chemquizRecord(x,organic){
 const source={repository:repo,commit:rev,file:x.source_file,
 git_blob_sha:SHAS[x.source_file],original_id:x.original_id,license:'MIT',
 attribution:'Copyright (c) 2025 べむ; chemquiz ('+repo+'), MIT License',
 content_rights_verified:true,license_evidence:url+'LICENSE',
 url:url+x.source_file,changes:organic?
 'Derived Chinese introductory question with independently whitelisted answer; excludes source images, notes and third-party measurements.':
 'Chinese teaching prompt generated from MIT-licensed chemistry reference fields; no upstream notes or images copied.'};
 if(organic)source.original_exam_question=false;
 return {schema_version:1,id:x.id,subject:organic?'organic':x.subject,topic:x.topic,
 level:'introductory_undergraduate',question_type:x.question_type,
 question:x.question,answer:x.answer,quality_status:'awaiting_expert_review',
 publishable:false,source};
}
export function chemquizQuestions(){
 const {metal,ions}=verifyC(),{groups,series}=verifyO();
 const a=inorganic(metal,ions),b=organic(groups,series);
 if(a.length!==42||b.length!==25)throw Error('Pinned chemquiz method count drift');
 return [...a.map(q=>chemquizRecord(q,false)),...b.map(q=>chemquizRecord(q,true))];
}
export const FAMILIES=[
 {repo,expected:67,build:chemquizQuestions},
 {repo:'ChemTrain/radical-learn',expected:38,
  build:()=>[...radicalClassification().rows.map(q=>({schema_version:1,...q})),...radicalMatch()]},
 {repo:'ChemTrain/pg-learn',expected:22,build:()=>pg(load('pinned_pg_learn_deprotection.json'))},
 {repo:'ChemTrain/pka-learn',expected:20,build:()=>pka(load('pinned_pka_qualitative_sites.json'))},
 {repo:'ChemTrain/reactivity-learn',expected:20,build:()=>reactive(load('pinned_reactivity_regioselectivity.json'))},
 {repo:'ChemTrain/photoredox-learn',expected:18,build:()=>photoredox(load('pinned_photoredox_quenching.json'))}
];
const canonical=x=>Array.isArray(x)?'['+x.map(canonical).join(',')+']':
 (x&&typeof x==='object')?'{'+Object.keys(x).sort().map(k=>JSON.stringify(k)+':'+canonical(x[k])).join(',')+'}':
 JSON.stringify(x);
export function checkStored(ref,saved,family){
 if(!ref||!saved||ref.source?.repository!==family.repo||
  saved.publishable!==false||saved.quality_status!=='awaiting_expert_review'||
  saved.source?.content_rights_verified!==true||
  saved.source?.original_exam_question===true)
  throw Error('Unsafe chemistry rights or review status: '+ref?.id);
 if(canonical(ref)!==canonical(saved)){
  const fields=[...new Set([...Object.keys(ref),...Object.keys(saved)])]
   .filter(k=>canonical(ref[k])!==canonical(saved[k]));
  throw Error('Source-answer provenance drift '+family.repo+' '+ref.id+' '+fields.join(','));
 }
 return true;
}
export function audit(rows,qa){
 if(!Array.isArray(rows)||rows.length<1715||qa?.total_candidates!==rows.length||
 qa?.by_publishable?.false!==rows.length||qa?.expert_approved_publishable_count!==0)
  throw Error('Main corpus or publication rights changed');
 const map=new Map();
 for(const x of rows){if(map.has(x.id))throw Error('Duplicate main candidate');map.set(x.id,x);}
 const all=new Set(),groups=[];
 for(const f of FAMILIES){
  const generated=f.build();
  if(generated.length!==f.expected||qa.source_counts?.[f.repo]!==f.expected)
   throw Error('Source candidate cardinality changed: '+f.repo);
  const generatedIds=new Set();
  for(const x of generated){
   if(all.has(x.id)||generatedIds.has(x.id))throw Error('Duplicate cross source candidate '+x.id);
   generatedIds.add(x.id);all.add(x.id);
   const saved=map.get(x.id);
   if(!saved)throw Error('Missing stored source-backed candidate: '+x.id);
   checkStored(x,saved,f);
  }
  const storedRows=rows.filter(x=>x.source?.repository===f.repo);
  if(storedRows.length!==f.expected||storedRows.some(x=>!generatedIds.has(x.id)))
   throw Error('Unmatched source-backed candidate records: '+f.repo);
  groups.push({source:f.repo,expected:f.expected,source_and_stored_answers_identical:true,
   independent_chemistry_human_confirmation:false,formally_approved:0});
 }
 if(all.size!==185)throw Error('Expected exactly 185 newly replayed records');
 return {schema_version:1,main_total:rows.length,previously_replayed:1525,
  additional_source_replayed:185,main_coverage_after_addition:1710,
  remaining_unreplayed:rows.length-1710,chemquiz_mit_reference:67,
  chemtrain_CC_BY4_source_exercises:118,
  sources:groups,source_locked_hash_of_ids:sha([...all].sort().join('\n')),
  expert_approved:0,exam_ready:0,
  caveat:'Full saved JSON matched pinned generated source text, source option keys and provenance; license source scopes remain subject to third-party exceptions and scientific content is not independently expert-validated.'};
}
export function run(){
 const rows=readdirSync(join(ROOT,'data/candidates')).filter(x=>x.endsWith('.json')).sort()
  .map(x=>JSON.parse(readFileSync(join(ROOT,'data/candidates',x),'utf8')));
 const result=audit(rows,load('quality_audit.json'));
 const file=join(ROOT,'harvest/main_additional_185_source_replay.json'),body=JSON.stringify(result,null,2)+'\n';
 if(!existsSync(file)||readFileSync(file,'utf8')!==body)writeFileSync(file,body);
 console.log('185 historic source-matched records; historic replay=1710, new records tracked separately; total='+rows.length+'; approved=0');
 return result;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
