#!/usr/bin/env node
// Independently authored EIS exercises based on Apache-2.0 PyEIS reference equations.
// Does not copy upstream figures, experimental data, or exam questions.
import {readFileSync,writeFileSync,mkdirSync,existsSync,appendFileSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
const root=dirname(dirname(fileURLToPath(import.meta.url)));
const repo='kbknudsen/PyEIS',ref='14724e978a089d9184285cec1b72cb57941d58a1';
const licenseSha='261eeb9e9f8b2b4b0d119366dda99c6fd7d35c64';
const codeSha='78b4832687a56ff1c47ead7befb301d89f8c478f';
const types=['angular_frequency','ideal_capacitor','series_rc','parallel_rc','parallel_rc_peak',
'randles_simple','cpe_phase','semi_infinite_warburg'];
const norm=s=>String(s).normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase();
export const questionId=s=>createHash('sha256').update(norm(s)).digest('hex');
const positive=(n,name)=>{if(!Number.isFinite(n)||n<=0)throw Error('Nonpositive EIS value '+name);return n;};
export function computeIndependent(type,p){
 const f=()=>positive(p.frequency_hz,'frequency_hz'),omega=()=>2*Math.PI*f();
 const C=()=>positive(p.capacitance_f,'capacitance_f'),Rs=()=>positive(p.series_resistance_ohm,'series_resistance_ohm');
 let x,v;
 switch(type){
 case 'angular_frequency':v=[omega()];break;
 case 'ideal_capacitor':v=[-1/(omega()*C())];break;
 case 'series_rc':{const im=-1/(omega()*C()),re=Rs();v=[re,im,Math.hypot(re,im)];break;}
 case 'parallel_rc':{
  const R=positive(p.resistance_ohm,'resistance_ohm');x=omega()*R*C();
  v=[R/(1+x*x),-R*x/(1+x*x)];break;}
 case 'parallel_rc_peak':{
  const R=positive(p.resistance_ohm,'resistance_ohm');v=[1/(2*Math.PI*R*C()),R/2];break;}
 case 'randles_simple':{
  const R=positive(p.charge_transfer_resistance_ohm,'charge_transfer_resistance_ohm');
  const Cd=positive(p.double_layer_capacitance_f,'double_layer_capacitance_f');
  x=omega()*R*Cd;v=[Rs()+R/(1+x*x),-R*x/(1+x*x)];break;}
 case 'cpe_phase':{
  const q=positive(p.q_units_s_n_per_ohm,'q_units_s_n_per_ohm'),n=positive(p.exponent_n,'exponent_n');
  if(n>1)throw Error('Invalid CPE exponent n');v=[1/(q*omega()**n),-90*n];break;}
 case 'semi_infinite_warburg':{
  x=positive(p.warburg_sigma_ohm_sqrt_rad_per_s,'sigma')/Math.sqrt(omega());v=[x,-x];break;}
 default:throw Error('Unreviewed EIS method '+type);
 }
 if(v.some(x=>!Number.isFinite(x)))throw Error('Nonfinite EIS calculation');
 return v;
}
export function makeQuestions(manifest){
 if(manifest?.schema_version!==1||manifest.resource_type!=='independently_authored_education_practice_not_upstream_question_copy'||
 manifest.source_repository!==repo||manifest.source_commit!==ref||manifest.source_license!=='Apache-2.0'||
 manifest.source_license_blob_sha!==licenseSha||manifest.source_code_blob_sha!==codeSha||
 manifest.source_code_file!=='PyEIS/PyEIS.py'||manifest.original_author!=='Kristian B. Knudsen'||
 manifest.original_question_count_imported!==0||!manifest.license_scope_note?.includes('independently written')||
 !Array.isArray(manifest.items)||manifest.items.length!==8)throw Error('Pinned source/license scope invalid');
 const ids=new Set();
 return manifest.items.map((item,i)=>{
  const type=types[i];
  if(item.key!==type||!item.topic?.startsWith('electrochemical_impedance_')||
    !item.question?.startsWith('物理化学·')||item.question.length>900||
    !item.answer?.trim()||!item.explanation?.trim()||
    !Array.isArray(item.expected)||item.expected.length<1||item.expected.length>3)
    throw Error('Invalid source exercise '+type);
  const recomputed=computeIndependent(type,item.params);
  if(recomputed.length!==item.expected.length)throw Error('Numerical answer dimensions inconsistent '+type);
  for(let k=0;k<recomputed.length;k++){
   const v=item.expected[k];
   if(!Number.isFinite(v)||Math.abs(recomputed[k]-v)>1e-9*Math.max(1,Math.abs(v)))
    throw Error('Independently recomputed EIS answer mismatch '+type);
  }
  const id=questionId(item.question);
  if(ids.has(id))throw Error('Duplicate question hash');ids.add(id);
  return {schema_version:1,id,subject:'physical',topic:item.topic,level:'undergraduate',
   question_type:'original_electrochemical_impedance_exercise',
   resource_type:'new_exercise_based_on_Apache_2_0_reference_code',
   question:item.question,answer:item.answer,explanation:item.explanation,numeric_answers:recomputed,
   quality_status:'awaiting_expert_review',publishable:false,semantic_duplicate_review_pending:true,
   source:{repository:repo,commit:ref,file:'PyEIS/PyEIS.py',git_blob_sha:codeSha,
    original_author:manifest.original_author,reference_method:type,license:'Apache-2.0',
    license_git_blob_sha:licenseSha,
    license_evidence:'https://github.com/'+repo+'/blob/'+ref+'/LICENSE',
    url:'https://github.com/'+repo+'/blob/'+ref+'/PyEIS/PyEIS.py',
    attribution:'Kristian B. Knudsen, PyEIS, Apache-2.0. New exercise independently authored by Ruoshui.',
    original_upstream_question:false,original_exam_question:false,content_rights_verified:true,
    changes:'New parameterized Chinese numerical exercise and independent solution based on generic circuit equations, without copying third-party papers, images, code or experiments.'}};
 });
}
export function run(){
 const manifest=JSON.parse(readFileSync(join(root,'harvest','pinned_pyeis_original_eis.json'),'utf8'));
 const questions=makeQuestions(manifest),dest=join(root,'data','candidates');
 for(const q of questions){
  const path=join(dest,q.id+'.json');
  if(!existsSync(path))continue;
  const old=JSON.parse(readFileSync(path,'utf8'));
  if(old.question!==q.question||old.answer!==q.answer||old.source?.repository!==repo||
   old.source?.commit!==ref||old.quality_status!=='awaiting_expert_review'||old.publishable!==false)
   throw Error('Existing candidate question/answer/source conflict '+q.id);
 }
 mkdirSync(dest,{recursive:true});
 let added=0,alreadyPresent=0;
 for(const q of questions){
  const p=join(dest,q.id+'.json');if(existsSync(p)){alreadyPresent++;continue;}
  writeFileSync(p,JSON.stringify(q,null,2)+'\n');added++;
 }
 const reportPath=join(root,'harvest','import_reports','original_pyeis_eis.json');
 const report={schema_version:1,source:repo,source_commit:ref,license:'Apache-2.0',
   license_blob:licenseSha,source_code_blob:codeSha,original_upstream_questions_imported:0,
   new_original_practice:8,initial_import_added:added,initial_import_already_present:alreadyPresent,
   distinct_topics:8,subject:'physical',independent_numeric_validation:true,
   quality_status:'awaiting_expert_review',publishable:false,expert_approved:0,
   note:'These 8 new numerical EIS teaching exercises are not copied from upstream or expert approved.'};
 mkdirSync(dirname(reportPath),{recursive:true});
 if(existsSync(reportPath)){
  const old=JSON.parse(readFileSync(reportPath,'utf8'));
  if(old.source_commit!==ref||old.new_original_practice!==8)throw Error('Existing EIS import report conflict');
 }else writeFileSync(reportPath,JSON.stringify(report,null,2)+'\n');
 const summary='Original EIS chemistry: source_methods=8, new='+added+', already_present='+alreadyPresent+', expert_approved=0';
 console.log(summary);
 if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,summary+'\n');
 return {added,alreadyPresent};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
