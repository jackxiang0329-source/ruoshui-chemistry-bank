#!/usr/bin/env node
// 278 already-stored, author-licensed Reaction Learn FLASHCARDS; NOT exam questions.
// Regenerates from SHA-pinned HTML and licenses, compares exact persisted JSON.
// No diagrams, upstream third-party articles or measured datasets are fetched.
import {readFileSync,readdirSync,existsSync,writeFileSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {parseCards,createCandidates,gitBlobSha} from './import-chemtrain-reaction-learn.mjs';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const SOURCE='ChemTrain/reaction-learn';
const PIN='7563032ec79ed429336966fb42136d2815cd7e42';
const HTML_SHA='3bf4278bb72f625b5abee37da72300f4ba901187';
const CONTENT_SHA='ab6bfb5c75085c6e2b05b5c2c9d2b936f611ba6a';
const CODE_SHA='f12f837df6513709d7d6e8234f9d9427d81d1627';
const hash=x=>createHash('sha256').update(x).digest('hex');
export function auditReactionCards(regenerated,rows,total=278){
 if(!Array.isArray(regenerated)||regenerated.length!==total||!Array.isArray(rows))
  throw Error('Expected exact source-approved Reaction Learn study card count');
 const saved=new Map(),owned=new Set(),ids=new Set(),names=new Set(),kinds={};
 for(const x of rows){
  if(saved.has(x.id))throw Error('Duplicate persisted record '+x.id);
  saved.set(x.id,x);
  if(x.source?.repository===SOURCE)owned.add(x.id);
 }
 for(const x of regenerated){
  const s=x.source||{};
  if(ids.has(x.id)||names.has(s.source_card_name?.normalize('NFKC').toLowerCase())||
   x.schema_version!==1||x.subject!=='organic'||
   x.question_type!=='open_ended_study_flashcard'||
   x.resource_type!=='licensed_reaction_study_card_not_exam_question'||
   x.quality_status!=='awaiting_expert_review'||x.publishable!==false||
   s.repository!==SOURCE||s.commit!==PIN||s.file!=='reaction_learn.html'||
   s.git_blob_sha!==HTML_SHA||s.content_license_git_blob_sha!==CONTENT_SHA||
   s.code_license_git_blob_sha!==CODE_SHA||
   s.license!=='CC BY 4.0'||s.code_license!=='MIT'||
   s.content_rights_verified!==true||s.original_exam_question!==false||
   !['reaction','reagent'].includes(s.source_kind))
    throw Error('Reaction Learn source rights, source record or flashcard status changed '+x.id);
  ids.add(x.id);names.add(s.source_card_name.normalize('NFKC').toLowerCase());
  const stored=saved.get(x.id);
  if(!stored)throw Error('Missing persisted Reaction Learn card '+x.id);
  if(JSON.stringify(stored)!==JSON.stringify(x)){
   const keys=[...new Set([...Object.keys(stored),...Object.keys(x)])];
   const changed=keys.filter(k=>JSON.stringify(stored[k])!==JSON.stringify(x[k]));
   throw Error('Persisted Reaction Learn card changed: '+x.id+' fields='+changed.join(','));
  }
  kinds[s.source_kind]=(kinds[s.source_kind]||0)+1;
 }
 if(ids.size!==total||owned.size!==total||[...owned].some(x=>!ids.has(x)))
  throw Error('Untracked Reaction Learn orphan or duplicate persisted records');
 if(total===278&&(kinds.reaction!==231||kinds.reagent!==47))
  throw Error('Unexpected named reaction / reagent card distribution');
 return {schema_version:1,source_repository:SOURCE,source_commit:PIN,
  html_git_blob_sha:HTML_SHA,content_license_blob_sha:CONTENT_SHA,
  code_license_blob_sha:CODE_SHA,source_content_license:'CC BY 4.0',
  matched_stored_study_cards:total,source_named_reaction_cards:kinds.reaction||0,
  source_reagent_function_cards:kinds.reagent||0,
  distinct_source_card_names:names.size,checked_id_hash_sha256:hash([...ids].sort().join('\n')),
  cards_are_not_exam_questions:true,source_independent_chemical_truth_verified:false,
  human_chemistry_approved:0,publication_approved:0,formal_exam_ready:0,
  source_rights_newly_confirmed:0,
  note:'All 278 existing CC BY 4.0 Reaction Learn text cards match the original SHA-pinned author content, source terms and attribution. This is provenance/answer concordance, not chemistry expert approval or 278 original examination problems.'};
}
async function fetchPinned(path,sha){
 const url='https://raw.githubusercontent.com/'+SOURCE+'/'+PIN+'/'+path;
 const response=await fetch(url,{signal:AbortSignal.timeout(90000)});
 if(!response.ok)throw Error('Pinned Reaction Learn source unavailable '+path+' '+response.status);
 const data=Buffer.from(await response.arrayBuffer());
 if(gitBlobSha(data)!==sha)throw Error('Pinned Reaction Learn source changed '+path);
 return data.toString('utf8');
}
export async function run(){
 const [html,license,codeLicense]=await Promise.all([
  fetchPinned('reaction_learn.html',HTML_SHA),
  fetchPinned('LICENSE-CONTENT.md',CONTENT_SHA),
  fetchPinned('LICENSE',CODE_SHA)
 ]);
 if(!license.includes('CC BY 4.0')||!license.includes('cards')||
   !codeLicense.includes('MIT License')||!codeLicense.includes('Quentin Bindschaedler'))
  throw Error('Reaction Learn source license scope no longer verified');
 const raw=parseCards(html),{rows:regenerated,skipped}=createCandidates(raw);
 if(raw.length!==278||skipped.length!==0)throw Error('Unexpected Reaction Learn source parsing or skip set');
 const rows=readdirSync(join(ROOT,'data/candidates')).filter(x=>x.endsWith('.json')).sort()
  .map(x=>JSON.parse(readFileSync(join(ROOT,'data/candidates',x),'utf8')));
 const result=auditReactionCards(regenerated,rows);
 const out=join(ROOT,'harvest/main_reaction_card_stored_replay.json'),
  data=JSON.stringify(result,null,2)+'\n';
 if(!existsSync(out)||readFileSync(out,'utf8')!==data)writeFileSync(out,data);
 console.log('278 pinned Reaction Learn study cards persisted (231 reactions + 47 reagents), 0 exam questions approved');
 return result;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 run().catch(e=>{console.error(e.stack);process.exitCode=1;});
}
