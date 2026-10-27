#!/usr/bin/env node
// Nine fixed CHEM 3PA3 quantum-chemistry exercises linked to the CC0 (+ third-party exception)
// author source. All remain unpublished pending item-rights and expert review.
import {readFileSync,writeFileSync,existsSync,mkdirSync,appendFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const REF=new URL('../harvest/pinned_introqchem_2021.json',import.meta.url);
const OWN='PaulWAyers/IntroQChemProblems',COMMIT='0491272e0b8e71059e601537b196181ab6b367cd';
const SOURCE_SHA='1f21cc7c7850e29d265e8e6c619e52c397fbad8b';
const KEY_SHA='8dd5ad17f6ee0659c599e17826d776c8aeb47d79';
const LICENSE_SHA='657f1ed2aefefde5d2aa65b66bc3a85f46ceeb3b';
const README_SHA='e3b12b3b510392bf42ddd3c6dec476fc483e8a45';
const H=6.62607015e-34,C=299792458,NA=6.02214076e23,HBAR=H/(2*Math.PI);
export const questionId=s=>createHash('sha256').update(String(s).normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase()).digest('hex');
const exp=x=>x.toExponential(6);
export function validateSource(m){
 if(m?.schema_version!==1||m.repository!==OWN||m.commit!==COMMIT||m.license!=='CC0-1.0'||
  m.license_blob_sha!==LICENSE_SHA||m.readme_blob_sha!==README_SHA||
  m.question_notebook_blob_sha!==SOURCE_SHA||m.key_notebook_blob_sha!==KEY_SHA||
  m.third_party_exceptions_explicit!==true||m.item_level_rights_cleared!==false)
  throw Error('Pinned author rights or quantum notebook metadata changed');
 return true;
}
export const CASES=[
 {topic:'photon_radiation_pressure_force',question_cell:25,key_cell:25,
  issue:'key_confuses_force_unit_with_momentum_unit',
  question:'量子化学·辐射压：532 nm、平均功率 100 mW 的单色光垂直照射完全吸收且不反射的表面，求平均光压力作用下的力（N），并明确其单位。',
  explanation:'单光子动量为 h/λ；每秒的光子数为 P/(hc/λ)。单位时间动量转移是力 F=P/c，单位 N，而不是 kg·m/s。参考键把动量每秒误标为动量单位。',
  values:[0.1/C]},
 {topic:'gamma_radiation_molar_energy',question_cell:28,key_cell:28,
  issue:'key_has_inconsistent_python_variable',
  question:'量子化学·辐射摩尔能量：已知一摩尔相同光子的能量为 1.29×10¹¹ J/mol。假设光子在真空中传播，求单光子的波长（m）。',
  explanation:'单光子能量 E=E_m/N_A，而 E=hc/λ；因此 λ=N_A hc/E_m。原答案代码中 Co60 的波长变量名出现不一致。',
  values:[NA*H*C/1.29e11]},
 {topic:'hydrogen_ground_state_first_absorption',question_cell:38,key_cell:42,
  issue:'source_n1_inequality_typo',
  question:'量子化学·氢原子里德伯公式：一个基态氢原子（n=1）吸收光子跃迁到更高能级。求所需最小光频率（Hz），取 R_H=1.0974×10⁷ m⁻¹。',
  explanation:'允许吸收的最小能级差来自 n=1 → n=2，因此 ν=cR_H(1−1/4)=3cR_H/4。原笔记不等式把 n=1 错误排除，与题述基态冲突。',
  values:[C*1.0974e7*3/4]},
 {topic:'photon_angular_wavenumber',question_cell:49,key_cell:56,
  issue:'source_answer_confirmed',
  question:'量子化学·光子角波数：某真空光子的角波数 k=1.00×10⁷ rad/m。求光子动量（kg·m/s）和能量（J），注意角波数与普通波数的区别。',
  explanation:'角波数满足 k=2π/λ，故 p=ℏk、E=cp=ℏck，不能误用 p=hk。',
  values:[HBAR*1e7,HBAR*1e7*C]},
 {topic:'complex_conjugate_tdse',question_cell:57,key_cell:64,
  issue:'reference_answer_missing_hbar_squared',
  question:'量子化学·波函数共轭方程：实数势 V(x,t) 下，已知 iℏ∂Ψ/∂t=−(ℏ²/2m)∂²Ψ/∂x²+VΨ。写出 Ψ* 满足的时间依赖方程。',
  explanation:'对方程逐项取复共轭，利用 i*=−i、V*=V，得 −iℏ∂Ψ*/∂t=−(ℏ²/2m)∂²Ψ*/∂x²+VΨ*。原答案键动能算符系数缺少 ℏ 的平方。',
  values:[]},
 {topic:'hamiltonian_total_energy',question_cell:59,key_cell:66,
  issue:'source_answer_confirmed',
  question:'量子化学·哈密顿算符：在通常的非相对论量子力学中，H 对应系统的总能量还是仅仅对应动能？解释其一般构成。',
  explanation:'H 是总能量算符，通常可写为 H=T+V，包含动能和势能，不应将其与单独的动能算符混淆。',
  values:[]},
 {topic:'complex_conjugation_nonnegative_norm',question_cell:66,key_cell:73,
  issue:'source_option_set_interpretation_caveat',
  question:'量子化学数学基础：给定复数 z=a+bi，a、b 为实数。证明 zz* 恒为非负实数，并指出它何时等于 0。',
  explanation:'zz*=(a+bi)(a−bi)=a²+b²≥0；当且仅当 a=b=0 时等于零。因此“必为非零实数”的断言错误。',
  values:[]},
 {topic:'complex_exponential_wavefunction',question_cell:69,key_cell:76,
  issue:'key_assumes_real_parameters',
  question:'量子化学数学基础：设 Ψ(x,t)=A exp[(a+bi)(kx−ωt)]，其中 A,a,b,k,ω,x,t 均为实数。写出 Ψ*(x,t)，并指出若 A 为复数须作的修改。',
  explanation:'实系数情形 Ψ*=A exp[(a−bi)(kx−ωt)]。若 A 本身是复数，前系数需写成 A*，再共轭其余复因子。',
  values:[]},
 {topic:'momentum_vs_kinetic_operator_eigenstates',question_cell:71,key_cell:78,
  issue:'student_problem_is_biconditional_but_key_one_way',
  question:'量子化学·算符本征态：判断“动量算符的每个本征函数必是动能算符的本征函数，反之也成立”是否正确。以一维自由粒子 p̂=−iℏ∂/∂x、T̂=p̂²/(2m) 给出证明或反例。',
  explanation:'双向结论为假：p̂φ=pφ 蕴含 T̂φ=p²φ/(2m)，但 cos(kx) 是 T̂ 的本征函数却不是 p̂ 的本征函数。原题保留双向说法，答案键只回答单向命题，必须标注版本差异。',
  values:[]}
];
export function verifyPhysics(item,vals){
 if(vals.length!==item.values.length||vals.some(x=>!Number.isFinite(x)||x<=0))
  throw Error('Invalid independently computed physical answer');
 const close=(a,b)=>Math.abs(a-b)<=1e-10*Math.max(Math.abs(b),1e-36);
 switch(item.topic){
  case 'photon_radiation_pressure_force':
   if(!close(vals[0]*C,0.1))throw Error('Photon-force inverse mismatch');break;
  case 'gamma_radiation_molar_energy':
   if(!close(NA*H*C/vals[0],1.29e11))throw Error('Gamma wavelength inverse mismatch');break;
  case 'hydrogen_ground_state_first_absorption':
   if(!close(vals[0]/(C*1.0974e7),0.75))throw Error('Hydrogen Rydberg inverse mismatch');break;
  case 'photon_angular_wavenumber':
   if(!close(vals[0]/HBAR,1e7)||!close(vals[1]/vals[0],C))
    throw Error('Angular wavenumber inverse mismatch');break;
 }
 return true;
}
export function generate(){
 validateSource(JSON.parse(readFileSync(REF,'utf8')));
 const out=[],ids=new Set();
 for(const item of CASES){
  const vals=item.values;verifyPhysics(item,vals);
  const answer=item.explanation+(vals.length?'\n精确常数计算：'+vals.map(exp).join('；')+'（依题目单位依次对应）。':'');
  const id=questionId(item.question);
  if(ids.has(id))throw Error('Duplicate source-linked course exercise');ids.add(id);
  out.push({schema_version:1,id,subject:'physical',topic:item.topic,level:'undergraduate',
   difficulty:'introductory_to_intermediate',question_type:'source_linked_quantum_course_exercise',
   resource_type:'translated_fixed_course_exercise_not_parametric',
   question:item.question,answer,explanation:item.explanation,numeric_answers:vals,
   source_key_issue:item.issue,source_question_cell_index:item.question_cell,
   source_key_cell_index:item.key_cell,
   quality_status:'awaiting_expert_review',publishable:false,semantic_duplicate_review_pending:true,
   scientifically_machine_checked:true,source:{
    repository:OWN,commit:COMMIT,file:'ipynb/IntroQM2021.ipynb',
    key_notebook:'ipynb/IntroQMkey.ipynb',
    license:'CC0-1.0',content_rights_verified:false,item_level_rights_review_pending:true,
    license_evidence:{license:'https://github.com/'+OWN+'/blob/'+COMMIT+'/LICENSE',
      readme:'https://github.com/'+OWN+'/blob/'+COMMIT+'/README.md',
      exception:'Third-party content retains third-party rights; no human item-level determination yet.'},
    source_git_blobs:{notebook:SOURCE_SHA,key:KEY_SHA,license:LICENSE_SHA,readme:README_SHA},
    url:'https://github.com/'+OWN+'/blob/'+COMMIT+'/ipynb/IntroQM2021.ipynb',
    attribution:'CHEM 3PA3 course by Paul Ayers, McMaster University; adapted and corrected Chinese explanations.',
    source_fixed_2021_exercise:true,question_rights_await_human_confirmation:true,
    changes:'Source-linked Chinese adaptation. Distinct original fixed exercise, not numeric variant. Errors and mismatches disclosed.'}});
 }
 if(out.length!==9)throw Error('Expected exactly nine source-linked exercises');
 return out;
}
export function run(){
 const rows=generate(),dest=join(ROOT,'data/candidates');
 for(const q of rows){
  const path=join(dest,q.id+'.json');if(!existsSync(path))continue;
  const old=JSON.parse(readFileSync(path,'utf8'));
  if(old.question!==q.question||old.answer!==q.answer||old.publishable!==false||
   old.source?.commit!==COMMIT)throw Error('Imported candidate hash or rights state collision');
 }
 mkdirSync(dest,{recursive:true});let added=0;
 for(const q of rows){
  const path=join(dest,q.id+'.json');if(existsSync(path))continue;
  writeFileSync(path,JSON.stringify(q,null,2)+'\n');added++;
 }
 const reportFile=join(ROOT,'harvest/import_reports/introqchem_2021_source_exercises.json');
 const report={schema_version:1,repository:OWN,commit:COMMIT,
  fixed_course_exercises:9,newly_added:added,already_present:9-added,
  source_key_issue_counts:Object.fromEntries(CASES.map(x=>[x.topic,x.issue])),
  source_license:'CC0-1.0',third_party_exception_retained:true,
  item_rights_confirmed:0,science_expert_approved:0,publication_approved:0,
  note:'Nine fixed course exercise adaptations with pinned question and answer notebooks, source corrections and independent numeric crosschecks. Item rights and expert approval remain pending.'};
 mkdirSync(dirname(reportFile),{recursive:true});
 const serialized=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(reportFile)||readFileSync(reportFile,'utf8')!==serialized)writeFileSync(reportFile,serialized);
 const msg='CHEM 3PA3 quantum exercise adaptations: new='+added+' existing='+(9-added)+' approved=0';
 console.log(msg);
 if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,msg+'\n');
 return {added};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
