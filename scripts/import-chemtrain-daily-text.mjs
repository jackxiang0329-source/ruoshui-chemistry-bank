#!/usr/bin/env node
// ChemTrain Daily text-only chemistry MCQs. Rights-gated, pinned, image-free and idempotent.
// All generated records remain unpublished pending chemistry expert review.
import {readFileSync,writeFileSync,existsSync,mkdirSync,appendFileSync,readdirSync} from 'node:fs';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';

const root=dirname(dirname(fileURLToPath(import.meta.url)));
const SOURCE='ChemTrain/chemtrain-daily';
const PIN='327eb915764dbcdf7bce4974a0542f3b3d626554';
const HTML_SHA='d0b152ff845f18a5ff5743c1e44a43b81f87584e';
const LICENSE_SHA='c1459875927c2a1bbbff1b6bf103efd0b0da44e8';
const BASE='https://raw.githubusercontent.com/'+SOURCE+'/'+PIN+'/';
const KINDS=[
 {s:'tmc',k:'Geometry',subject:'inorganic',topic:'coordination_geometry',label:'无机化学·配位化学：请判断下列配合物的几何构型'},
 {s:'tmc',k:'Ligand electrons',subject:'inorganic',topic:'ligand_electron_donation',label:'无机化学·配体电子计数：中性共价计数法中，下列配体贡献多少电子'},
 {s:'tmc',k:'Ligand class',subject:'inorganic',topic:'ligand_lx_classification',label:'无机化学·配体分类：下列配体属于哪一种 L/X 类型'},
 {s:'pg',k:'Removed by',subject:'organic',topic:'protecting_group_deprotection',label:'有机化学·保护基化学：下列哪组反应条件能够脱除所示保护基'}
];
const norm=x=>String(x).normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase();
export const questionId=text=>createHash('sha256').update(norm(text)).digest('hex');
export const gitBlob=buf=>{
 const bytes=Buffer.isBuffer(buf)?buf:Buffer.from(buf);
 return createHash('sha1').update('blob '+bytes.length+'\0').update(bytes).digest('hex');
};
const goodText=(v,min=1,max=550)=>typeof v==='string'&&v.trim().length>=min&&v.length<=max&&
 !/<\s*(?:script|svg|img|iframe|object|a)[\s>]/i.test(v)&&!/\u0000/.test(v);
export function parseData(html){
 const m=html.match(/<script>window\.CTD_DATA\s*=\s*(\{[\s\S]*?\});<\/script>/);
 if(!m)throw Error('Pinned CTD_DATA not found; source layout changed');
 const value=JSON.parse(m[1]);
 if(!Array.isArray(value.bank)||value.bank.length!==2892||!Array.isArray(value.mols)||value.mols.length!==2971)
  throw Error('Pinned ChemTrain Daily bank/molecules count changed; review required');
 return value;
}
export function buildQuestions(bank){
 if(!Array.isArray(bank))throw Error('Expected question bank array');
 const records=[],excluded={},seenTarget=new Set(),seenQuestion=new Set(),byKind={};
 const skip=reason=>{excluded[reason]=(excluded[reason]||0)+1;};
 for(let sourceIndex=0;sourceIndex<bank.length;sourceIndex++){
  const q=bank[sourceIndex],kind=KINDS.find(k=>q.s===k.s&&q.k===k.k);
  if(!kind)continue;
  const key=q.s+'/'+q.k;byKind[key]??={seen:0,accepted:0};byKind[key].seen++;
  if(!goodText(q.t,3,250)||!goodText(q.f,1,200)||!goodText(q.ex,12,2500)||
   !Array.isArray(q.o)||q.o.length<2||q.o.length>6||!q.o.every(o=>goodText(o.x,1,220))){
    skip('incomplete_text_or_answer');continue;
  }
  const answerIndex=q.y===undefined?0:q.y;
  if(!Number.isInteger(answerIndex)||answerIndex<0||answerIndex>=q.o.length){
   skip('invalid_correct_option_index');continue;
  }
  const choices=q.o.map(o=>o.x.trim());
  if(new Set(choices.map(norm)).size!==choices.length){
   skip('identical_answer_options');continue;
  }
  if(Object.keys(q).some(k=>['img','html','third_party_question'].includes(k))){
   skip('unexpected_source_payload');continue;
  }
  // Each group, canonical displayed name and formula uniquely identifies its MCQ target.
  const targetKey=norm(key+'|'+q.t+'|'+q.f);
  if(seenTarget.has(targetKey)){skip('duplicate_card_target');continue;}seenTarget.add(targetKey);
  const stem=kind.label+'：'+q.t+'（'+q.f+'）？';
  const question=stem+'\n'+choices.map((c,i)=>String.fromCharCode(65+i)+'. '+c).join('\n');
  if(question.length>1700){skip('question_too_long');continue;}
  const id=questionId(question);
  if(seenQuestion.has(id)){skip('duplicate_normalized_question');continue;}seenQuestion.add(id);
  const originalApp=kind.s==='tmc'?'ChemTrain/tmc-learn':'ChemTrain/pg-learn';
  records.push({
   schema_version:1,id,subject:kind.subject,topic:kind.topic,level:'undergraduate',
   question_type:'licensed_text_only_multiple_choice',resource_type:'CC_BY_4_0_study_problem_not_exam_question',
   question,answer:choices[answerIndex],answer_option:String.fromCharCode(65+answerIndex),
   explanation:q.ex,options:choices,quality_status:'awaiting_expert_review',publishable:false,
   semantic_duplicate_review_pending:true,structure_geometry_review_pending:kind.k==='Geometry',
   source:{
    repository:SOURCE,commit:PIN,file:'chemtrain_daily.html',git_blob_sha:HTML_SHA,
    original_app:originalApp,source_question_index:sourceIndex,
    source_card_kind:key,source_card_name:q.t,source_formula:q.f,
    license:'CC BY 4.0',license_git_blob_sha:LICENSE_SHA,
    license_evidence:'https://github.com/'+SOURCE+'/blob/'+PIN+'/LICENSE-CONTENT.md',
    url:'https://github.com/'+SOURCE+'/blob/'+PIN+'/chemtrain_daily.html',
    attribution:'ChemTrain Daily by Quentin Bindschaedler (2026), adapted from '+
     (kind.s==='tmc'?'TMC Learn by Francesco Sala':'PG Learn by Quentin Bindschaedler')+
     ' (ChemTrain), CC BY 4.0. https://github.com/'+SOURCE,
    original_exam_question:false,content_rights_verified:true,
    changes:'Original CC BY 4.0 question and alternatives rephrased into Chinese without molecular SVGs or logos; explanation retained, full author attribution; never copies third-party measured values.'
   }
  });byKind[key].accepted++;
 }
 return {records,excluded,byKind};
}
async function fetchChecked(path,sha){
 const response=await fetch(BASE+path,{signal:AbortSignal.timeout(90000)});
 if(!response.ok)throw Error('Source fetch failed: '+path+' HTTP '+response.status);
 const data=Buffer.from(await response.arrayBuffer());
 const actual=gitBlob(data);if(actual!==sha)throw Error('Pinned source/rights hash mismatch '+path+': '+actual);
 return data.toString('utf8');
}
export async function run(dryRun=false){
 const [html,license]=await Promise.all([
  fetchChecked('chemtrain_daily.html',HTML_SHA),
  fetchChecked('LICENSE-CONTENT.md',LICENSE_SHA)]);
 if(!license.includes('CC BY 4.0')||!license.includes('TMC Learn')||
    !license.includes('PG Learn')||!license.includes('questions, explanations')||
    !license.includes('Values measured by others')){
  throw Error('Text rights versus third-party measurement exclusions not verified');
 }
 const {bank}=parseData(html);
 const {records,excluded,byKind}=buildQuestions(bank);
 // Strict source type counts protect silent content rewrites.
 const expected={'tmc/Geometry':133,'tmc/Ligand electrons':47,'tmc/Ligand class':47,'pg/Removed by':41};
 for(const [kind,n] of Object.entries(expected))if(byKind[kind]?.seen!==n)
  throw Error('Pinned source question category drift '+kind);
 if(records.length<200||records.length>268)throw Error('Not enough eligible image-free chemistry study problems: '+records.length);
 // Index file IDs for idempotence; do not merge or overwrite earlier records.
 const dest=join(root,'data','candidates');
 for(const r of records){
  const path=join(dest,r.id+'.json');
  if(!existsSync(path))continue;
  const old=JSON.parse(readFileSync(path,'utf8'));
  if(old.question!==r.question||old.answer!==r.answer||old.source?.repository!==SOURCE||
    old.source?.commit!==PIN||old.publishable!==false)
   throw Error('Candidate hash collision or conflicting source rights '+r.id);
 }
 if(dryRun){
  console.log('ChemTrain Daily dry-run '+JSON.stringify({source_total:bank.length,eligible:records.length,byKind,excluded,
   sample_questions:records.filter(x=>x.source.source_card_name).filter((x,i,a)=>a.findIndex(y=>y.source.source_card_kind===x.source.source_card_kind)===i).map(x=>({kind:x.source.source_card_kind,q:x.question.slice(0,380),answer:x.answer,option:x.answer_option}))}));
  return {records,excluded};
 }
 mkdirSync(dest,{recursive:true});let added=0,previouslyImported=0;
 for(const r of records){
  const path=join(dest,r.id+'.json');
  if(existsSync(path)){previouslyImported++;continue;}
  writeFileSync(path,JSON.stringify(r,null,2)+'\n');added++;
 }
 const reportPath=join(root,'harvest','import_reports','chemtrain_daily_text_mcq.json');
 const report={schema_version:1,source:SOURCE,pin:PIN,source_blob_sha:HTML_SHA,
  source_license:'CC BY 4.0',license_blob_sha:LICENSE_SHA,
  source_bank_entries:bank.length,eligible:records.length,byKind,excluded,
  initial_import_new:added,initial_import_already_present:previouslyImported,
  copied_molecule_drawings:0,copied_third_party_measurement_qa:0,
  quality_status:'awaiting_expert_review',publishable:false,expert_approved:0,
  note:'Text-only CC BY 4.0 author-created MCQs (coordination geometry and ligand classification, PG deprotection). Existing concepts may overlap other sources; require expert semantic review.'};
 mkdirSync(dirname(reportPath),{recursive:true});
 if(existsSync(reportPath)){
  const old=JSON.parse(readFileSync(reportPath,'utf8'));
  if(old.pin!==PIN||old.eligible!==records.length)throw Error('Source report conflicts; manual review required');
 }else writeFileSync(reportPath,JSON.stringify(report,null,2)+'\n');
 const summary='Licensed ChemTrain Daily MCQs: eligible='+records.length+'; added='+added+
  '; previously_imported='+previouslyImported+'; expert_approved=0';
 console.log(summary);
 if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,'### Pinned licensed text-only chemistry MCQs\n'+summary+'\n');
 return {added,previouslyImported,eligible:records.length};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 run(process.argv.includes('--dry-run')).catch(e=>{console.error(e.stack);process.exitCode=1;});
}
