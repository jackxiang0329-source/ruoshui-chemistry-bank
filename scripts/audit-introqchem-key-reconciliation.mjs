#!/usr/bin/env node
// Source-locked independent reconciliation notes for the 2021 CHEM 3PA3
// student and answer notebooks. NO automatic source-rights clearance.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {CASES,generate,verifyPhysics,validateSource} from './import-introqchem-2021.mjs';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const manifestPath=join(ROOT,'harvest/pinned_introqchem_2021.json');
const out=join(ROOT,'harvest/import_reports');
const DISPUTE_TYPES={
 photon_radiation_pressure_force:'source_question_unit_or_formula_error',
 gamma_radiation_molar_energy:'source_notebook_variable_or_condition_typo',
 hydrogen_ground_state_first_absorption:'source_notebook_variable_or_condition_typo',
 complex_conjugate_tdse:'source_question_unit_or_formula_error',
 complex_conjugation_nonnegative_norm:'logical_options_or_wording_interpretation',
 momentum_vs_kinetic_operator_eigenstates:'logical_options_or_wording_interpretation',
 wavefunction_probability_density_nonnegative:'logical_options_or_wording_interpretation',
 vacuum_light_speed_dispersion:'source_assumption_or_outdated_terminology',
 photon_energy_doubling_relations:'source_assumption_or_outdated_terminology',
 photon_particle_evidence:'scientific_evidence_interpretation',
 photon_particles_vs_matter_waves:'scientific_evidence_interpretation'
};
const EVIDENCE={
 photon_radiation_pressure_force:{
  location:'学生题本第 25 个单元；答案本第 25 个单元',
  observation:'原学生题把“动量每秒”的结果要求写成 kg·m/s；答案本实际计算光子动量乘光子每秒个数，即力 P/c。',
  reconciliation:'应将学生问题的单位改为 N=kg·m/s²。答案数值 F≈3.33564×10⁻¹⁰ N 不应被标注为答案键数值错误。'},
 gamma_radiation_molar_energy:{
  location:'学生题本第 28 个单元；答案本第 28 个单元',
  observation:'答案本的预期变量名和最终计算变量名少一个字符，实际公式仍为 λ=N_Ahc/E_m。',
  reconciliation:'标为源代码变量命名错误；不是计算理论错误。'},
 hydrogen_ground_state_first_absorption:{
  location:'学生题本第 38 个单元；答案本第 42 个单元',
  observation:'学生文本的能级不等式排除了 n₁=1，却同时明确写基态 n₁=1；答案本使用 1→2 跃迁。',
  reconciliation:'修正不等式起点为 n₁≥1，最小吸收频率为 3cR_H/4。'},
 complex_conjugate_tdse:{
  location:'学生题本第 57 个单元；答案本第 64 个单元',
  observation:'答案本的动能项系数写成 ℏ/(2m)，正确应为 ℏ²/(2m)，且势 V 应假设实值。',
  reconciliation:'保留已验证的数学系数错误；共轭左端的 i 必须变为 −i。'},
 complex_conjugation_nonnegative_norm:{
  location:'学生题本第 66 个单元；答案本第 73 个单元',
  observation:'对于复数 z，zz*=|z|²=a²+b²≥0；源选项包括“复数”和“非负实数”，答案本同时选两项。',
  reconciliation:'说明实数可视为复数，数学结论正确；非零实数不总成立（z=0）。属多选解释问题，不是错误证明。'},
 momentum_vs_kinetic_operator_eigenstates:{
  location:'学生题本第 71 个单元；答案本第 78 个单元',
  observation:'学生命题含“反之亦然”，答案本布尔值为真，忽略了动能简并子空间中动量不唯一。',
  reconciliation:'明确题干双向命题为假：cos(kx) 是自由粒子动能本征函数却不是动量本征函数。'},
 wavefunction_probability_density_nonnegative:{
  location:'学生题本第 63 个单元；答案本第 70 个单元',
  observation:'学生版问“永远不为负”应答真；答案本变量名则改问“可否为负”并赋假。',
  reconciliation:'两种逻辑表述的结论等价但真假字面反向，不能直接把答案本布尔值作为学生题答案。'},
 vacuum_light_speed_dispersion:{
  location:'学生题本第 16 个单元；答案本第 16 个单元',
  observation:'学生断言波长翻倍则传播速度减半，答案本判断为假；该判断需要真空或非色散环境语境。',
  reconciliation:'真空中速度始终为 c，波长变化使频率调整；若处于色散介质则需定义折射率。'},
 photon_energy_doubling_relations:{
  location:'学生题本第 22 个单元；答案本第 22 个单元',
  observation:'原多选含“有效相对论质量”与波数，答案本选择与能量成比例的选项。',
  reconciliation:'现代授课优先使用 E=hν=pc=ℏck；光子静止质量为零，避免把 E/c² 误称为静止质量。'},
 photon_particle_evidence:{
  location:'学生题本第 5 个单元；答案本第 5 个单元',
  observation:'原多选答案包含黑体辐射、康普顿散射和光电效应；黑体量子化是历史相关证据但非直接单光子碰撞测量。',
  reconciliation:'区分能量量子化的历史证据与直接光子动量散射实验；不武断地把源答案全盘判错。'},
 photon_particles_vs_matter_waves:{
  location:'学生题本第 45 个单元；答案本第 49 个单元',
  observation:'答案本包含黑体辐射、光电效应和康普顿散射；混合了量子化历史证据与光子碰撞现象。',
  reconciliation:'在科学讲解中分层表述证据强度，电子衍射体现电子波动性而非光子的粒子性。'}
};
const CORRECTED_FALSE_POSITIVES=[
 {topic:'complex_exponential_wavefunction',student_cell:69,key_cell:76,
  original_assessment:'错误地把答案键标为仅支持实参数',
  verified_note:'原键已明确接受 A、a、b、k、ω 等可能为复数时的整体共轭表达式。',
  current_status:'source_answer_confirmed'},
 {topic:'electron_waves_vs_atomic_lines',student_cell:42,key_cell:46,
  original_assessment:'错误地声称答案本接受原子谱线作为电子波的直接证据',
  verified_note:'原答案本只选 E（电子晶体散射），并没有选择 B（氢原子谱线）。',
  current_status:'source_answer_confirmed'}
];
export function verifyIndependentIdentities(){
 const c=299792458,h=6.62607015e-34,pi=Math.PI,bolts=[];
 for(const lambda of [532e-9,632.8e-9,1e-6]){
  const photonMomentum=h/lambda, photonEnergy=h*c/lambda,
   flux=0.1/photonEnergy,force=photonMomentum*flux;
  if(Math.abs(force*c/0.1-1)>1e-12)throw Error('Force is photon rate-of-momentum incorrect');
  bolts.push({wavelength_m:lambda,force_N:force});
 }
 for(let a=-4;a<=4;a++)for(let b=-4;b<=4;b++){
  const norm=a*a+b*b;
  if(norm<0||(norm===0)!==(a===0&&b===0))throw Error('Complex norm algebra contradiction');
 }
 // Free particle cos(kx): kinetic eigenvalue k²/2m; not momentum eigen.
 for(const k of [.7,1.3,2.2]){
  const x0=0,x1=pi/(2*k),phi0=Math.cos(k*x0),phi1=Math.cos(k*x1),
   momentumDerivativeAt0=-k*Math.sin(k*x0),
   momentumDerivativeAt1=-k*Math.sin(k*x1);
  if(Math.abs(phi0-1)>1e-12||Math.abs(momentumDerivativeAt0)>1e-12||
   Math.abs(phi1)>1e-12||Math.abs(momentumDerivativeAt1)<.1)
   throw Error('Kinetic eigenfunction counterexample failed');
 }
 // Hydrogen ground state min 1 -> 2 energy, compare n=3 and ionization.
 const ryd=1.0974e7,nu2=c*ryd*(1-1/4),
  nu3=c*ryd*(1-1/9),limit=c*ryd;
 if(!(nu2<nu3&&nu3<limit))throw Error('Rydberg ordering failed');
 return {radiation_pressure_examples:bolts,complex_modulus_proof:'(a+bi)(a−bi)=a²+b²≥0，等号当且仅当 a=b=0',
  kinetic_counterexample:'φ(x)=cos(kx) 满足 Tφ=ℏ²k²/(2m)φ，但 pφ=iℏk sin(kx) 与 φ 不成比例',
  complex_tdse_correct_formula:'−iℏ∂Ψ*/∂t = −ℏ²/(2m)∂²Ψ*/∂x² + VΨ*（V为实势）',
  lowest_hydrogen_absorption_hz:nu2};
}
export function audit(cases,rows,pin){
 validateSource(pin);
 if(cases.length!==21||rows.length!==21||
  cases.some((x,i)=>x.topic!==rows[i].topic||x.question_cell!==rows[i].source_question_cell_index||
   x.key_cell!==rows[i].source_key_cell_index||x.issue!==rows[i].source_key_issue||
   rows[i].source.content_rights_verified!==false||
   rows[i].source.item_level_rights_review_pending!==true||
   rows[i].quality_status!=='awaiting_expert_review'||
   rows[i].publishable!==false))throw Error('Source-locked candidate changed; no promotion allowed');
 const disputed=cases.filter(x=>x.issue!=='source_answer_confirmed'),
  normal=cases.filter(x=>x.issue==='source_answer_confirmed');
 if(disputed.length!==11||normal.length!==10||
  Object.keys(DISPUTE_TYPES).length!==11||
  Object.keys(EVIDENCE).length!==11||
  disputed.some(x=>!DISPUTE_TYPES[x.topic]||!EVIDENCE[x.topic]))
  throw Error('Expected eleven genuine unresolved source discrepancies after false-positive correction');
 for(const record of CORRECTED_FALSE_POSITIVES){
  const c=cases.find(x=>x.topic===record.topic);
  if(!c||c.issue!=='source_answer_confirmed'||
   c.question_cell!==record.student_cell||c.key_cell!==record.key_cell)
   throw Error('Previously misstated source answer was not corrected: '+record.topic);
 }
 const proofs=verifyIndependentIdentities();
 const issues=disputed.map(x=>{
  const row=rows.find(y=>y.topic===x.topic),e=EVIDENCE[x.topic];
  verifyPhysics(x,x.values);
  return {topic:x.topic,candidate_id:row.id,
   category:DISPUTE_TYPES[x.topic],source_issue_code:x.issue,
   student_cell_index:x.question_cell,key_cell_index:x.key_cell,
   source_student_notebook_url:row.source.url,
   source_key_notebook_url:'https://github.com/'+pin.repository+'/blob/'+pin.commit+'/'+pin.key_notebook,
   source_evidence_summary:e.observation,
   scientific_reconciliation:e.reconciliation,
   numerical_results_independently_recomputed:x.values,
   scientific_or_legal_human_review_completed:false,
   content_rights_verified:false,formally_approved:false};
 });
 const byType={};
 for(const x of issues)byType[x.category]=(byType[x.category]||0)+1;
 return {schema_version:1,source_repository:pin.repository,source_commit:pin.commit,
  student_notebook_sha:pin.question_notebook_blob_sha,
  answer_notebook_sha:pin.key_notebook_blob_sha,
  all_fixed_course_exercises:21,
  previously_flagged_disputes:13,
  false_positive_dispute_labels_corrected:2,
  remaining_source_answer_or_question_issues:issues.length,
  source_issue_types:byType,
  issues,confirmed_or_no_known_dispute:normal.map(x=>({
   topic:x.topic,source_student_cell_index:x.question_cell,source_key_cell_index:x.key_cell})),
  corrected_false_positive_evidence:CORRECTED_FALSE_POSITIVES,
  student_prompt_unit_issue_attribution_corrected:true,
  independently_checked_physics_witnesses:proofs,
  source_rights_confirmed:0,expert_review_approved:0,released_for_exams:0,
  note:'Separate source-provenance discrepancy audit. A source-key issue is NOT necessarily a mathematically incorrect answer. Notebook specific rights include third-party exceptions; never auto promote.'};
}
export function markdown(report){
 const rows=['# 2021 量子化学课程题：学生本与答案本交叉核验','',
 '固定来源：'+report.source_repository+' @ '+report.source_commit,'',
 '本报告不是新的教材题本；只保留校验序号、独立科学证据、原文链接与审核分类。**21 道仍未解除逐题版权审核与专家审批。**','',
 '历史上标记 13 项争议，其中 2 项经原答案本复核确认是误报；当前真正需要人工处理的来源问题为 **11 项**。另 1 项从“答案键错误”修正归因为“学生题单位问题”。','',
 '| 主题 | 问题类别 | 学生本单元 | 答案本单元 | 审核状态 |',
 '|---|---|---:|---:|---|'];
 for(const i of report.issues){
  rows.push('| '+i.topic+' | '+i.category+' | '+i.student_cell_index+' | '+i.key_cell_index+' | 待专家与版权审核 |');
 }
 rows.push('','## 源证据和科学对照','');
 for(const i of report.issues){
  rows.push('### '+i.topic,'','- [学生题本]('+i.source_student_notebook_url+')、[答案本]('+i.source_key_notebook_url+')','- 来源核对：'+i.source_evidence_summary,'- 独立说明：'+i.scientific_reconciliation,'');
 }
 rows.push('## 两项误报修正','');
 for(const i of report.corrected_false_positive_evidence){
  rows.push('- **'+i.topic+'**：'+i.verified_note+'（学生本单元 '+i.student_cell+'，答案本单元 '+i.key_cell+'）');
 }
 rows.push('','## 数学与物理证明见证','',
 '- 复数模：'+report.independently_checked_physics_witnesses.complex_modulus_proof,
 '- 动量与动能：'+report.independently_checked_physics_witnesses.kinetic_counterexample,
 '- 波函数共轭：'+report.independently_checked_physics_witnesses.complex_tdse_correct_formula,
 '- 氢基态首次吸收频率：'+report.independently_checked_physics_witnesses.lowest_hydrogen_absorption_hz.toPrecision(8)+' Hz',
 '','**科学专家批准：0；逐题版权确认：0；正式可组卷：0。**','');
 return rows.join('\n');
}
export function run(){
 const pinned=JSON.parse(readFileSync(manifestPath,'utf8'));
 const result=audit(CASES,generate(),pinned);
 mkdirSync(out,{recursive:true});
 const targets=[
 [join(out,'introqchem_2021_key_reconciliation.json'),JSON.stringify(result,null,2)+'\n'],
 [join(out,'introqchem_2021_key_reconciliation.md'),markdown(result)]];
 for(const [path,content] of targets)
  if(!existsSync(path)||readFileSync(path,'utf8')!==content)writeFileSync(path,content);
 console.log('CHEM 3PA3 21 exercises: 11 open source discrepancies, 2 mistaken labels repaired, copyright approved=0');
 return result;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
