#!/usr/bin/env node
// Original, reproducible physical chemistry exercises. No third-party questions or datasets copied.
// All generated items are candidates ONLY; no automatic expert approval or publication.
import {readFileSync,writeFileSync,existsSync,mkdirSync,appendFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const R=8.31446261815324; // J mol^-1 K^-1 (defined physical constant)
const repo='jackxiang0329-source/ruoshui-chemistry-bank';
const origin='scripts/import-original-physical.mjs';
const norm=s=>String(s).normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase();
export const questionId=s=>createHash('sha256').update(norm(s)).digest('hex');
export const round3=x=>Number(x.toFixed(3));
const row=(topic,type,question,value,unit,explanation,parameters)=>({
 subject:'physical',topic,question_type:type,level:'introductory_undergraduate',
 question,answer:round3(value).toFixed(3)+' '+unit,
 explanation,parameters});
export function generate(){
 const out=[];
 // Dimensionless thermodynamic equilibrium constants; activities referred to standard states.
 for(const K of [0.1,0.5,2,10,100,1000]){
  const T=298.15,value=-R*T*Math.log(K)/1000;
  out.push(row('chemical_equilibrium','standard_gibbs_from_K',
   '物理化学（化学平衡）：在 T = 298.15 K 时，某反应的无量纲热力学平衡常数 K° = '+K+'。求标准反应吉布斯自由能 ΔrG°（kJ·mol⁻¹），保留三位小数。',
   value,'kJ/mol','ΔrG° = -RT ln K°；取 R = 8.31446261815324 J·mol⁻¹·K⁻¹，并将 J 换算为 kJ。',
   {T_K:T,K_dimensionless:K}));
 }
 // Integrated Arrhenius equation with constant activation energy.
 for(const ratio of [2,3,4,5,6,8]){
  const T1=300,T2=320;
  const value=R*Math.log(ratio)/(1/T1-1/T2)/1000;
  out.push(row('chemical_kinetics','arrhenius_activation_energy',
   '物理化学（阿伦尼乌斯方程）：某反应在 300 K 与 320 K 的速率常数之比 k(320 K)/k(300 K) = '+ratio+'。假设此温度范围内活化能恒定，求 Ea（kJ·mol⁻¹），保留三位小数。',
   value,'kJ/mol','ln(k₂/k₁) = (Ea/R)(1/T₁ - 1/T₂)；代入温度（K）与速率常数之比求 Ea。',
   {T1_K:T1,T2_K:T2,rate_constant_ratio:ratio}));
 }
 // First-order kinetics with explicit rate constant unit and half-life unit.
 for(const k of [0.01,0.02,0.05,0.1,0.2,0.5]){
  const value=Math.log(2)/k;
  out.push(row('chemical_kinetics','first_order_half_life',
   '物理化学（一级反应）：某一级反应的速率常数 k = '+k+' min⁻¹。求其半衰期 t₁/₂（min），保留三位小数。',
   value,'min','一级反应的积分速率方程给出 t₁/₂ = ln 2 / k。',
   {k_per_min:k}));
 }
 // Reversible isothermal expansion of ideal gas, chemistry sign convention: work on system.
 for(const vRatio of [1.5,2,3,4,5,10]){
  const n=1,T=300;
  const value=-n*R*T*Math.log(vRatio)/1000;
  out.push(row('chemical_thermodynamics','reversible_isothermal_expansion_work',
   '物理化学（理想气体可逆等温膨胀）：1.000 mol 理想气体在 300 K 下可逆等温膨胀，末态与初态体积之比 V₂/V₁ = '+vRatio+'。采用化学热力学约定（体系对外做功时 w < 0），求体系所受功 w（kJ），保留三位小数。',
   value,'kJ','可逆等温理想气体体积功 w = -nRT ln(V₂/V₁)，负号表示体系对外做功。',
   {n_mol:n,T_K:T,volume_ratio:vRatio}));
 }
 if(out.length!==24)throw Error('Unexpected generator count');
 const seen=new Set();
 for(const q of out){
  q.id=questionId(q.question);
  if(!Number.isFinite(Number(q.answer.split(' ')[0]))||seen.has(q.id))throw Error('Non-finite or duplicate generated question');
  seen.add(q.id);
 }
 return out;
}
export function verifyNumerics(q){
 const p=q.parameters;
 let expected;
 switch(q.question_type){
  case 'standard_gibbs_from_K': expected=-R*p.T_K*Math.log(p.K_dimensionless)/1000;break;
  case 'arrhenius_activation_energy':expected=R*Math.log(p.rate_constant_ratio)/(1/p.T1_K-1/p.T2_K)/1000;break;
  case 'first_order_half_life':expected=Math.log(2)/p.k_per_min;break;
  case 'reversible_isothermal_expansion_work':expected=-p.n_mol*R*p.T_K*Math.log(p.volume_ratio)/1000;break;
  default:throw Error('Unexpected question type');
 }
 if(Math.abs(Number(q.answer.split(' ')[0])-expected)>0.000501)throw Error('Numeric mismatch: '+q.id);
 return true;
}
export function run(){
 const questions=generate(),dest=join(ROOT,'data/candidates');
 // Fail closed before writing anything if a previously created record conflicts.
 for(const q of questions){
  verifyNumerics(q);
  const file=join(dest,q.id+'.json');
  if(!existsSync(file))continue;
  const old=JSON.parse(readFileSync(file,'utf8'));
  if(old.id!==q.id||norm(old.question)!==norm(q.question)||
    old.answer!==q.answer||old.subject!=='physical'||old.publishable!==false)
    throw Error('Existing candidate collision/conflict: '+q.id);
 }
 mkdirSync(dest,{recursive:true});
 let added=0,skipped=0;
 for(const q of questions){
  const file=join(dest,q.id+'.json');
  if(existsSync(file)){skipped++;continue;}
  const entry={schema_version:1,id:q.id,subject:q.subject,topic:q.topic,level:q.level,
   question_type:q.question_type,question:q.question,answer:q.answer,explanation:q.explanation,
   parameters:q.parameters,quality_status:'awaiting_expert_review',publishable:false,
   source:{repository:repo,file:origin,license:'CC0-1.0',
    license_evidence:'https://github.com/'+repo+'/blob/main/LICENSE-ORIGINAL-QUESTIONS.md',
    content_rights_verified:true,origin:'original_deterministic_generation',
    third_party_question_text_copied:false,original_exam_question:false,
    changes:'New numerical exercises derived solely from standard thermodynamic/kinetic equations.'}};
  writeFileSync(file,JSON.stringify(entry,null,2)+'\n');added++;
 }
 const report={schema_version:1,generator:'original-physical-chemistry-v1',
  source_repository:repo,source_file:origin,source_license:'CC0-1.0',
  original_not_imported_from_upstream:true,generated_unique_variants:questions.length,
  by_topic:{chemical_equilibrium:6,chemical_kinetics:12,chemical_thermodynamics:6},
  review_status:'awaiting_expert_review',publishable:false,
  note:'24 original deterministic numerical exercises; no third-party question bank newly licensed/imported. Expert review and semantic dedup remain pending.'};
 const reportPath=join(ROOT,'harvest/import_reports/original_physical_v1.json');
 mkdirSync(dirname(reportPath),{recursive:true});
 const content=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(reportPath)||readFileSync(reportPath,'utf8')!==content)writeFileSync(reportPath,content);
 const message='Original physical chemistry: generated='+questions.length+'; added='+added+'; already_present='+skipped+'; awaiting expert review.';
 console.log(message);
 if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,'### Original physical chemistry\n- '+message+'\n');
 return {generated:questions.length,added,skipped};
}
if(process.argv[1]===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e);process.exitCode=1;}
}
