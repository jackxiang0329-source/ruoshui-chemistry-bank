#!/usr/bin/env node
// Rights-gated Reaction Learn study-card importer. No SVG, Wikipedia or external datasets.
import {readFileSync,writeFileSync,mkdirSync,existsSync,appendFileSync} from 'node:fs';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';

const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const REPO='ChemTrain/reaction-learn';
const COMMIT='7563032ec79ed429336966fb42136d2815cd7e42';
const HTML_BLOB='3bf4278bb72f625b5abee37da72300f4ba901187';
const CONTENT_BLOB='ab6bfb5c75085c6e2b05b5c2c9d2b936f611ba6a';
const CODE_BLOB='f12f837df6513709d7d6e8234f9d9427d81d1627';
const ATTRIBUTION='Reaction Learn by Quentin Bindschaedler (ChemTrain), https://github.com/ChemTrain/reaction-learn, licensed under CC BY 4.0. Adapted into bilingual text-only chemistry study prompts; chemical accuracy not expert-verified.';
const RAW='https://raw.githubusercontent.com/'+REPO+'/'+COMMIT+'/';
const norm=s=>String(s).normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase();
export const questionId=s=>createHash('sha256').update(norm(s)).digest('hex');
export const gitBlobSha=contents=>{
 const b=Buffer.isBuffer(contents)?contents:Buffer.from(contents);
 return createHash('sha1').update('blob '+b.length+'\0').update(b).digest('hex');
};
export function parseCards(html){
 const matched=html.match(/<script>window\.RXN_DATA\s*=\s*(\{[\s\S]*?\});<\/script>/);
 if(!matched)throw Error('Expected standalone pinned RXN_DATA literal');
 const data=JSON.parse(matched[1]);
 if(!data||!Array.isArray(data.sets)||data.sets.length!==20||
    !Array.isArray(data.mols)||!Number.isInteger(data.mols.length))
   throw Error('Reaction Learn source set or molecule structure changed');
 const cards=data.sets.flatMap(s=>{
   if(typeof s.id!=='string'||!Array.isArray(s.cards)||!s.cards.length)throw Error('Malformed reaction set');
   return s.cards.map(c=>({...c,source_set_id:s.id,source_set_name:s.name}));
 });
 if(cards.length!==278 || cards.filter(c=>c.kind==='reaction').length!==231||
    cards.filter(c=>c.kind==='reagent').length!==47)
    throw Error('Reaction Learn source-card quantities changed; manual audit required');
 return cards;
}
const isText=s=>typeof s==='string'&&s.trim().length>=2&&s.length<=700
  &&!/<[a-z!/]/i.test(s)&&!/\u0000/.test(s);
export function createCandidates(cards){
 const out=[],skipped=[],names=new Set(),ids=new Set();
 for(const c of cards){
   if(!['reaction','reagent'].includes(c.kind)||!isText(c.name)||
      !isText(c.does)||c.does.trim().length<24 ||
      !Array.isArray(c.cond)||c.cond.length>6 ||
      c.cond.some(v=>typeof v!=='string'||v.length>150||/<[a-z!/]/i.test(v))){
     skipped.push({name:String(c.name||'').slice(0,70),reason:'incomplete_or_image_dependent_text'});continue;
   }
   const key=norm(c.name);
   if(names.has(key)){skipped.push({name:c.name,reason:'duplicate_named_reaction_or_reagent'});continue;}
   names.add(key);
   const isReaction=c.kind==='reaction';
   const conditions=c.cond.map(x=>x.trim()).filter(Boolean);
   const heading=isReaction?'命名反应':'有机试剂';
   const intro=isReaction?'请用文字概述该反应的主要转化':'请用文字概述该试剂在有机合成中的典型作用';
   const question='有机化学·Reaction Learn '+heading+'学习卡：'+intro+'：'+c.name+'。'+
      (conditions.length?' 来源卡片给出的代表性条件：'+conditions.join('；')+'。':'');
   const answer=c.does.trim();
   if(question.length>1500||answer.length>700) {
     skipped.push({name:c.name,reason:'text_length_limit'});continue;
   }
   const id=questionId(question);
   if(ids.has(id))throw Error('Duplicate generated question hash');
   ids.add(id);
   out.push({
     schema_version:1,id,subject:'organic',
     topic:isReaction?'named_reactions':'reagent_functions',
     level:'undergraduate',question_type:'open_ended_study_flashcard',
     resource_type:'licensed_reaction_study_card_not_exam_question',
     question,answer,
     explanation:isText(c.note)?'来源补充说明（未专家审核）：'+c.note.trim():undefined,
     quality_status:'awaiting_expert_review',publishable:false,
     semantic_duplicate_review_pending:true,
     source:{
       repository:REPO,commit:COMMIT,file:'reaction_learn.html',
       git_blob_sha:HTML_BLOB,
       source_set_id:c.source_set_id,source_set_name:c.source_set_name,
       source_card_name:c.name,source_kind:c.kind,
       license:'CC BY 4.0',code_license:'MIT',content_license_git_blob_sha:CONTENT_BLOB,
       code_license_git_blob_sha:CODE_BLOB,
       attribution:ATTRIBUTION,
       license_evidence:'https://github.com/'+REPO+'/blob/'+COMMIT+'/LICENSE-CONTENT.md',
       url:'https://github.com/'+REPO+'/blob/'+COMMIT+'/reaction_learn.html',
       content_rights_verified:true,original_exam_question:false,
       changes:'Adapted the author-licensed named-reaction/reagent description into a Chinese open-ended flashcard; source conditions retained, English answer unchanged; diagrams, molecule SVGs, linked Wikipedia material and logo omitted.'
     }
   });
 }
 if(out.length<200)throw Error('Unexpectedly few standalone text study cards: '+out.length);
 return {rows:out,skipped};
}
async function checkedFetch(name,sha){
 const url=RAW+name;
 const res=await fetch(url,{signal:AbortSignal.timeout(90000)});
 if(!res.ok)throw Error('Pinned source fetch failed: '+name+' HTTP '+res.status);
 const buf=Buffer.from(await res.arrayBuffer());
 const got=gitBlobSha(buf);
 if(got!==sha)throw Error('Pinned source or license Git Blob SHA changed: '+name+' '+got);
 return buf.toString('utf8');
}
export async function run(){
 // Verify content and code LICENSE files separately, not merely repository SPDX metadata.
 const [html,license,codeLicense]=await Promise.all([
   checkedFetch('reaction_learn.html',HTML_BLOB),
   checkedFetch('LICENSE-CONTENT.md',CONTENT_BLOB),
   checkedFetch('LICENSE',CODE_BLOB)]);
 if(!license.includes('CC BY 4.0')||!license.includes('cards')||
    !codeLicense.includes('MIT License')||!codeLicense.includes('Quentin Bindschaedler'))
   throw Error('License scope no longer matches reviewed evidence');
 const cards=parseCards(html);
 const {rows,skipped}=createCandidates(cards);
 const path=join(ROOT,'data','candidates');
 // Collision check is all-or-nothing and never silently overwrites prior candidate solutions.
 for(const row of rows){
   const p=join(path,row.id+'.json');
   if(!existsSync(p))continue;
   const existing=JSON.parse(readFileSync(p,'utf8'));
   if(existing.question!==row.question||existing.answer!==row.answer||
      existing.source?.repository!==REPO||existing.source?.commit!==COMMIT||
      existing.quality_status!=='awaiting_expert_review'||existing.publishable!==false)
      throw Error('Candidate ID collision or source/answer conflict: '+row.id);
 }
 mkdirSync(path,{recursive:true});
 let added=0,present=0;
 for(const row of rows){
   const p=join(path,row.id+'.json');
   if(existsSync(p)){present++;continue;}
   writeFileSync(p,JSON.stringify(row,null,2)+'\n');added++;
 }
 const report={
  schema_version:1,source_repository:REPO,source_commit:COMMIT,
  source_file:'reaction_learn.html',source_html_git_blob_sha:HTML_BLOB,
  source_content_license_git_blob_sha:CONTENT_BLOB,source_code_license_git_blob_sha:CODE_BLOB,
  source_card_total:278,source_reactions:231,source_reagents:47,
  extracted_study_cards:rows.length,excluded_text_or_duplicate_cards:skipped.length,
  excluded_reasons:skipped,
  current_run_new_candidates:added,current_run_already_present:present,
  source_content_license:'CC BY 4.0',code_license:'MIT',
  image_svg_and_external_wikipedia_copies:0,
  candidate_quality_status:'awaiting_expert_review',publishable:false,
  semantic_duplicate_review_pending:true,
  note:'Study flashcards are not independent original exam problems and may be unsuitable for formal assessment; expert and semantic-duplicate reviews remain outstanding.'
 };
 const rp=join(ROOT,'harvest','import_reports','chemtrain_reaction_learn.json');
 mkdirSync(dirname(rp),{recursive:true});
 // Stable report across reruns: preserve actual initial import numbers and avoid meaningless commits.
 if(existsSync(rp)){
   const prior=JSON.parse(readFileSync(rp,'utf8'));
   if(prior.source_commit!==COMMIT||prior.extracted_study_cards!==rows.length)
    throw Error('Prior import report contradicts pinned source');
 }else writeFileSync(rp,JSON.stringify(report,null,2)+'\n');
 const summary='Reaction Learn: source=278, eligible='+rows.length+', newly_added='+added+
  ', already_present='+present+', excluded='+skipped.length+', expert_approved=0';
 console.log(summary);
 if(process.env.GITHUB_STEP_SUMMARY)
  appendFileSync(process.env.GITHUB_STEP_SUMMARY,'### Licensed Reaction Learn study flashcards\n- '+summary+
  '\n- No structures, third-party data or linked articles copied. All candidates publishable=false.\n');
 return {added,present,eligible:rows.length,skipped:skipped.length};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  run().catch(e=>{console.error('Reaction Learn import blocked:',e.stack);process.exitCode=1;});
}
