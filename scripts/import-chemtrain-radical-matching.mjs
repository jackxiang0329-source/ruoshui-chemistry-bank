#!/usr/bin/env node
// 12 actual author-licensed text-only radical polarity-matching questions.
// Source: pinned ChemTrain Radical Learn CC BY 4.0. No molecular drawings copied.
// We preserve the upstream favorable-first answer key; chemical expert review pending.
import {readFileSync,writeFileSync,existsSync,mkdirSync,appendFileSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {readPinned,parseEmbeddedJSON} from './import-chemtrain-radical.mjs';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const SOURCE='ChemTrain/radical-learn';
const PIN='a1c6d4cb567db370fec10a2f258048f7e89f466c';
const HTML_BLOB='7a81ac8756d00a0bd2f759f08b5c217e136e7937';
const LICENSE_BLOB='dcc63233d386b460db6aefe60c1086fc15c865e9';
const ATTR='Radical Learn by Quentin Bindschaedler (ChemTrain), https://github.com/ChemTrain/radical-learn, licensed under CC BY 4.0.';
const EXPECTED=[
 ['NHC–boryl radical','methyl acrylate','ethyl vinyl ether'],
 ['tert-Butyl radical','acrylonitrile','ethyl vinyl ether'],
 ['Diethyl malonyl radical','ethyl vinyl ether','methyl acrylate'],
 ['Tetrahydrofuran-2-yl radical','methyl acrylate','1-hexene'],
 ['Butanethiyl radical','ethyl vinyl ether','methyl acrylate'],
 ['Trifluoromethyl radical','N-methylpyrrole','pyridine'],
 ['Acetyl radical','acrylonitrile','ethyl vinyl ether'],
 ['Tris(trimethylsilyl)silyl radical','methyl acrylate','1-hexene'],
 ['Piperidinium radical cation','anisole','methyl benzoate'],
 ['Cyanomethyl radical','ethyl vinyl ether','acrylonitrile'],
 ['Bromine atom','1-hexene','acrylonitrile'],
 ['N-Boc-pyrrolidin-2-yl radical','4-methylquinolinium (in acid)','anisole']
];
const norm=x=>String(x).normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase();
export const questionId=s=>createHash('sha256').update(norm(s)).digest('hex');
export function makeMatchingQuestions(data){
 if(!Array.isArray(data?.radicals)||data.radicals.length!==3)throw Error('Pinned source deck shape mismatch');
 const deck=data.radicals.find(x=>x.id==='match');
 const cards=deck?.questions;
 if(!Array.isArray(cards)||cards.length!==12)throw Error('Expected 12 source polarity-match questions');
 const seen=new Set(),out=[];
 for(let idx=0;idx<cards.length;idx++){
  const q=cards[idx],pair=EXPECTED[idx];
  if(q.type!=='partner'||q.name!==pair[0]||!Array.isArray(q.labels)||q.labels.length!==2||
   q.labels[0]!==pair[1]||q.labels[1]!==pair[2]||!Array.isArray(q.options)||q.options.length!==2||
   q.options[0]===q.options[1]||!q.options.every(n=>Number.isInteger(n)&&n>=0&&n<(data.mols?.length||0))||
   typeof q.note!=='string'||q.note.length<28||q.note.length>1800||
   !Array.isArray(q.src)||!q.src.includes('Parsaee et al., Nat. Rev. Chem. 2021'))
   throw Error('Pinned content schema or expected favorable partner changed: '+idx);
  const question='有机化学·自由基极性匹配：按照 Radical Learn 题库采用的典型反应条件，'+q.name+
   ' 与下列哪一种反应伙伴通常匹配得更好（反应加成更有利或速度更快）？\n'+
   'A. '+q.labels[0]+'\nB. '+q.labels[1];
  const id=questionId(question);
  if(seen.has(id))throw Error('Duplicate source matching question');
  seen.add(id);
  out.push({schema_version:1,id,subject:'organic',topic:'radical_partner_polarity_matching',
   level:'upper_undergraduate',question_type:'licensed_radical_matching_mcq',
   resource_type:'CC_BY_4_0_author_licensed_exercise',question,
   options:[...q.labels],answer:q.labels[0],answer_option:'A',
   explanation:q.note,reference_urls:q.src.filter(x=>typeof x==='string'&&x.startsWith('https://')),
   hard:Boolean(q.hard),quality_status:'awaiting_expert_review',publishable:false,
   semantic_duplicate_review_pending:true,independent_chemistry_expert_approved:false,
   source:{repository:SOURCE,commit:PIN,file:'radical_learn.html',
    git_blob_sha:HTML_BLOB,source_deck_id:'match',source_question_index:idx,
    source_question_type:'partner',original_name:q.name,
    license:'CC BY 4.0',license_git_blob_sha:LICENSE_BLOB,
    license_evidence:'https://github.com/'+SOURCE+'/blob/'+PIN+'/LICENSE-CONTENT.md',
    attribution:ATTR,url:'https://github.com/'+SOURCE+'/blob/'+PIN+'/radical_learn.html',
    content_rights_verified:true,original_exam_question:false,
    changes:'Text-only self-contained Chinese wording with author-licensed original option labels and author explanation; no structural diagrams, external paper text or measured data imported.'}});
 }
 return out;
}
export function generate(){
 const locked=readPinned();
 if(!locked['LICENSE-CONTENT.md'].includes('questions, their explanations')||
   !locked['LICENSE-CONTENT.md'].includes('CC BY 4.0'))
  throw Error('Question reuse license missing');
 return makeMatchingQuestions(parseEmbeddedJSON(locked['radical_learn.html']));
}
export function run(){
 const rows=generate(),dest=join(ROOT,'data/candidates');
 for(const q of rows){
  const path=join(dest,q.id+'.json');
  if(!existsSync(path))continue;
  const v=JSON.parse(readFileSync(path,'utf8'));
  if(v.question!==q.question||v.answer!==q.answer||v.publishable!==false||
   v.source?.repository!==SOURCE||v.source?.source_deck_id!=='match'||
   v.source?.source_question_index!==q.source.source_question_index)
   throw Error('Existing question hash collision: '+q.id);
 }
 mkdirSync(dest,{recursive:true});let added=0,already=0;
 for(const q of rows){
  const path=join(dest,q.id+'.json');
  if(existsSync(path)){already++;continue;}
  writeFileSync(path,JSON.stringify(q,null,2)+'\n');added++;
 }
 const reportPath=join(ROOT,'harvest','import_reports','chemtrain_radical_partner_matching.json');
 const report={schema_version:1,source:SOURCE,source_commit:PIN,source_blob:HTML_BLOB,
  content_license:'CC BY 4.0',content_license_blob:LICENSE_BLOB,
  upstream_matching_cards:12,eligible_text_only_questions:12,
  first_run_added:added,already_imported:already,excluded_molecular_diagrams:12,
  other_third_party_paper_text_copied:0,expert_approved:0,publishable:false,
  note:'12 genuine author-licensed text-only organic radical partner multiple-choice exercises. Correct label follows pinned author-favorable answer; not independently expert validated or official examination originals.'};
 mkdirSync(dirname(reportPath),{recursive:true});
 if(existsSync(reportPath)){
  const old=JSON.parse(readFileSync(reportPath,'utf8'));
  if(old.source_commit!==PIN||old.eligible_text_only_questions!==12)throw Error('Report source drift');
 }else writeFileSync(reportPath,JSON.stringify(report,null,2)+'\n');
 const msg='ChemTrain radical polarity matching: eligible=12; added='+added+
  '; already_imported='+already+'; expert_approved=0';
 console.log(msg);
 if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,msg+'\n');
 return {added,already};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
