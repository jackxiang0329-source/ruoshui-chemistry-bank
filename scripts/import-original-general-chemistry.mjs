#!/usr/bin/env node
// Original CC0 solved undergraduate practice: no upstream problems, experiments, or measurements copied.
import {readFileSync,writeFileSync,existsSync,mkdirSync,appendFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const OWNER='jackxiang0329-source/ruoshui-chemistry-bank';
export const METHODS=['mixed_electrolyte_ionic_strength','rocksalt_crystal_density',
 'hypothetical_born_haber_cycle','binary_hydroxide_solubility',
 'hydroxide_precipitation_threshold','metal_ligand_bound_fraction',
 'fischer_esterification_equilibrium','specific_rotation_enantiomeric_excess',
 'number_average_polymerization_degree','single_stage_partition_extraction'];
const f=(x,n=5)=>Number(x).toFixed(n);
export const qid=q=>createHash('sha256').update(q.normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase()).digest('hex');
export function parameters(method,i){
 if(!METHODS.includes(method)||!Number.isInteger(i)||i<0||i>=12)throw Error('Invalid chemistry method/variant index');
 const j=i+1;
 switch(method){
 case 'mixed_electrolyte_ionic_strength':return {NaCl_M:0.008+0.001*j,CaCl2_M:0.002+0.0002*j};
 case 'rocksalt_crystal_density':return {cell_edge_A:5.50+0.014*j,Z:4,molar_mass_g_mol:58.44,NA:6.02214076e23};
 case 'hypothetical_born_haber_cycle':return {sublimation:100+2*j,half_dissociation:115+j,ionization:480+3*j,electron_attachment:-340+2*j,formation:-420+2*j};
 case 'binary_hydroxide_solubility':return {Ksp:1e-11*(2+j)};
 case 'hydroxide_precipitation_threshold':return {Ksp:1e-12*(1+0.3*j),metal_M:0.001+0.0004*j,pKw:14};
 case 'metal_ligand_bound_fraction':return {beta_M_inv:1000+70*j,free_ligand_M:0.001+0.00012*j};
 case 'fischer_esterification_equilibrium':return {K:1.8+0.28*j,initial_moles:0.1+0.01*j};
 case 'specific_rotation_enantiomeric_excess':return {pure_rotation:28+0.9*j,observed_rotation:8+0.85*j};
 case 'number_average_polymerization_degree':return {Mn_g_mol:11000+810*j,repeat_g_mol:96+3*j};
 case 'single_stage_partition_extraction':return {D:2+0.24*j,Vorganic_mL:20+2*j,Vaqueous_mL:60+3*j};
 }
}
export function calculate(method,p){
 switch(method){
 case 'mixed_electrolyte_ionic_strength':return p.NaCl_M+3*p.CaCl2_M;
 case 'rocksalt_crystal_density':return p.Z*p.molar_mass_g_mol/(p.NA*(p.cell_edge_A*1e-8)**3);
 case 'hypothetical_born_haber_cycle':return p.sublimation+p.half_dissociation+p.ionization+p.electron_attachment-p.formation;
 case 'binary_hydroxide_solubility':return Math.cbrt(p.Ksp/4);
 case 'hydroxide_precipitation_threshold':return p.pKw+Math.log10(Math.sqrt(p.Ksp/p.metal_M));
 case 'metal_ligand_bound_fraction':return p.beta_M_inv*p.free_ligand_M/(1+p.beta_M_inv*p.free_ligand_M);
 case 'fischer_esterification_equilibrium':return Math.sqrt(p.K)/(1+Math.sqrt(p.K));
 case 'specific_rotation_enantiomeric_excess':return p.observed_rotation/p.pure_rotation*100;
 case 'number_average_polymerization_degree':return p.Mn_g_mol/p.repeat_g_mol;
 case 'single_stage_partition_extraction':return 100*p.D*p.Vorganic_mL/(p.D*p.Vorganic_mL+p.Vaqueous_mL);
 default:throw Error('Unsupported chemical mechanism');
 }
}
// Inverse reconstruction of the given observable, not merely matching a printed answer.
export function verifyInverse(method,p,x){
 if(!Number.isFinite(x)||x<=0)throw Error('Nonphysical answer');
 let observed,expected;
 switch(method){
 case 'mixed_electrolyte_ionic_strength':observed=(x-p.NaCl_M)/3;expected=p.CaCl2_M;break;
 case 'rocksalt_crystal_density':observed=(p.Z*p.molar_mass_g_mol/(p.NA*x))**(1/3)/1e-8;expected=p.cell_edge_A;break;
 case 'hypothetical_born_haber_cycle':observed=p.sublimation+p.half_dissociation+p.ionization+p.electron_attachment-x;expected=p.formation;break;
 case 'binary_hydroxide_solubility':observed=4*x**3;expected=p.Ksp;break;
 case 'hydroxide_precipitation_threshold':observed=p.metal_M*(10**(x-p.pKw))**2;expected=p.Ksp;break;
 case 'metal_ligand_bound_fraction':observed=x/(1-x)/p.beta_M_inv;expected=p.free_ligand_M;break;
 case 'fischer_esterification_equilibrium':observed=(x/(1-x))**2;expected=p.K;break;
 case 'specific_rotation_enantiomeric_excess':observed=x/100*p.pure_rotation;expected=p.observed_rotation;break;
 case 'number_average_polymerization_degree':observed=x*p.repeat_g_mol;expected=p.Mn_g_mol;break;
 case 'single_stage_partition_extraction':observed=(x/100)/(1-x/100)*p.Vaqueous_mL/p.Vorganic_mL;expected=p.D;break;
 default:throw Error('Missing independent inverse model');
 }
 const scale=Math.max(Math.abs(expected),1e-18);
 if(!Number.isFinite(observed)||Math.abs(observed-expected)/scale>1e-8)throw Error('Independent chemistry reconstruction mismatch: '+method);
 return true;
}
function render(method,p,x){
 let subject,topic,question,answer,explanation,units;
 switch(method){
 case 'mixed_electrolyte_ionic_strength':
  subject='inorganic';topic='mixed_salt_ionic_strength';units='mol/L';
  question='无机化学·离子强度：25 °C 将 NaCl '+f(p.NaCl_M,4)+' mol/L 与 CaCl₂ '+f(p.CaCl2_M,4)+' mol/L 完全溶解并混合至最终所列浓度。假设两盐完全解离，忽略其他离子，按 I=1/2 Σcᵢzᵢ² 求离子强度（mol/L）。';
  answer='I=c(NaCl)+3c(CaCl₂)='+f(x,6)+' mol/L。';
  explanation='Na⁺ 浓度为 c₁、Ca²⁺ 浓度为 c₂、Cl⁻ 浓度为 c₁+2c₂；代入 I=0.5[c₁+4c₂+c₁+2c₂]。';break;
 case 'rocksalt_crystal_density':
  subject='inorganic';topic='ionic_crystal_density';units='g/cm³';
  question='无机化学·晶体密度：假想理想岩盐型 NaCl 晶体，晶胞为立方体，棱长 a='+f(p.cell_edge_A,3)+' Å，每晶胞含 Z=4 个 NaCl 化学式单位。取 M=58.44 g/mol、Nₐ=6.02214076×10²³ mol⁻¹，忽略缺陷，求密度（g/cm³）。';
  answer='ρ=4×58.44/[Nₐ(a×10⁻⁸ cm)³]='+f(x,5)+' g/cm³。';
  explanation='1 Å=10⁻⁸ cm；一个晶胞的质量为 ZM/Nₐ，体积为 a³；所用晶胞棱长为题设的假想取值。';break;
 case 'hypothetical_born_haber_cycle':
  subject='inorganic';topic='born_haber_lattice_energy';units='kJ/mol';
  question='无机化学·玻恩—哈伯循环：对假想一价离子晶体 MX，已知 M(s)→M(g) 的升华焓 '+f(p.sublimation,1)+'，1/2 X₂(g)→X(g) 的焓 '+f(p.half_dissociation,1)+'，M(g) 电离能 '+f(p.ionization,1)+'，X(g) 得电子的焓变 '+f(p.electron_attachment,1)+'，MX(s) 标准生成焓 '+f(p.formation,1)+'，单位均为 kJ/mol。求 M⁺(g)+X⁻(g)→MX(s) 所释放晶格焓的正值 U。';
  answer='U=ΔH升华+1/2D+IE+ΔH得电子−ΔH生成='+f(x,3)+' kJ/mol；晶格形成焓为 −'+f(x,3)+' kJ/mol。';
  explanation='按盖斯定律，ΔHf=升华+解离+电离+得电子−U。得电子焓已用带符号的负值代入；此题为假设模型，不是实测材料数据。';break;
 case 'binary_hydroxide_solubility':
  subject='inorganic';topic='hydroxide_salt_molar_solubility';units='mol/L';
  question='无机化学·溶度积：25 °C 时某假想 M(OH)₂(s) ⇌ M²⁺+2OH⁻ 的 Ksp='+p.Ksp.toExponential(3)+'（以 1 mol/L 为标准浓度写成的数值）。在纯水中忽略水的自电离、配位和离子活度修正，求摩尔溶解度 s（mol/L）。';
  answer='Ksp=(s)(2s)²=4s³，因此 s=(Ksp/4)^(1/3)='+x.toExponential(6)+' mol/L。';
  explanation='每溶解 1 mol M(OH)₂ 产生 1 mol M²⁺ 和 2 mol OH⁻；题设近似下 [OH⁻]=2s。';break;
 case 'hydroxide_precipitation_threshold':
  subject='inorganic';topic='hydroxide_precipitation_onset_ph';units='pH';
  question='无机化学·选择性沉淀：25 °C 某二价金属离子起始自由浓度 [M²⁺]='+f(p.metal_M,5)+' mol/L，其 M(OH)₂ 的 Ksp='+p.Ksp.toExponential(3)+'。忽略络合、水解和活度修正，取 pKw=14，假定开始沉淀前金属离子浓度不变，求刚开始析出沉淀时的 pH。';
  answer='[OH⁻]=√(Ksp/[M²⁺])，pH=14+log₁₀[OH⁻]='+f(x,5)+'。';
  explanation='沉淀出现临界条件为离子积 [M²⁺][OH⁻]²=Ksp；pOH=−log₁₀([OH⁻]/1 mol/L)，并用 pH+pOH=14。';break;
 case 'metal_ligand_bound_fraction':
  subject='inorganic';topic='metal_ligand_conditional_complexation';units='fraction';
  question='无机化学·配合物形成：M²⁺+L ⇌ ML，给定条件形成常数 β='+f(p.beta_M_inv,0)+' L/mol，缓冲体系维持自由配体 [L]='+f(p.free_ligand_M,5)+' mol/L 恒定，金属仅以 M²⁺ 和 ML 两种形态存在。求已配位金属占总溶解金属的比例 α。';
  answer='α=β[L]/(1+β[L])='+f(x,6)+'（即 '+f(100*x,3)+'%）。';
  explanation='β=[ML]/([M²⁺][L])，由 [M]总=[M²⁺]+[ML] 消去游离金属即可；需满足自由配体被缓冲体系固定的前提。';break;
 case 'fischer_esterification_equilibrium':
  subject='organic';topic='esterification_equilibrium_conversion';units='fraction';
  question='有机化学·酯化平衡：理想溶液中 RCOOH+R′OH ⇌ RCOOR′+H₂O，初始酸与醇各 '+f(p.initial_moles,3)+' mol，初始酯与水均为零，恒定体积且无副反应。给定无量纲平衡常数 K='+f(p.K,4)+'，假设各物种活度可由浓度比近似，求平衡时酸的转化分数。';
  answer='K=[x/(n₀−x)]²；转化分数 x/n₀=√K/(1+√K)='+f(x,6)+'（'+f(100*x,3)+'%）。';
  explanation='四种物质化学计量比均为 1:1；反应进度为 x 时两反应物各剩 n₀−x，酯和水各为 x，体积相同而相消。';break;
 case 'specific_rotation_enantiomeric_excess':
  subject='organic';topic='specific_rotation_enantiomeric_excess';units='%';
  question='有机化学·旋光纯度：已扣除溶剂空白、在相同波长、温度和浓度归一化条件下，某纯对映体的比旋光度为 +'+f(p.pure_rotation,3)+'°，其混合物比旋光度为 +'+f(p.observed_rotation,3)+'°。假设仅含该两种对映体且比旋光度可线性叠加，求对映体过量值 ee（%）。';
  answer='ee=100×α混合/α纯='+f(x,4)+'%；主对映体摩尔分数 (1+ee/100)/2='+f((1+x/100)/2,5)+'。';
  explanation='两对映体旋光方向相反、绝对值相同，故混合物净比旋光度与两者分数之差成正比；ee 不等于主对映体含量。';break;
 case 'number_average_polymerization_degree':
  subject='organic';topic='polymer_number_average_degree';units='repeat units';
  question='有机化学·高分子平均聚合度：某假想线性均聚物经绝对分子量测定，数均摩尔质量 Mₙ='+f(p.Mn_g_mol,0)+' g/mol，重复结构单元摩尔质量 M₀='+f(p.repeat_g_mol,0)+' g/mol。假设端基质量可以忽略，求数均聚合度 DPₙ。';
  answer='DPₙ=Mₙ/M₀='+f(x,4)+'（平均重复单元数，无量纲）。';
  explanation='数均聚合度可为非整数，反映链长分布；不能把它直接当作每条高分子链的精确整数链长。';break;
 case 'single_stage_partition_extraction':
  subject='organic';topic='organic_aqueous_extraction_recovery';units='%';
  question='有机化学·液液萃取：某中性有机物在给定 pH 与温度下的分配比 D=C有机/C水='+f(p.D,3)+'。一次平衡萃取使用有机相 '+f(p.Vorganic_mL,1)+' mL、水相 '+f(p.Vaqueous_mL,1)+' mL，无乳化、反应与体积变化。求溶质最终进入有机相的百分率。';
  answer='回收率=100×D V有机/(D V有机+V水)='+f(x,4)+'%。';
  explanation='平衡时 C有机=D C水；总溶质量按 C有机V有机+C水V水 守恒。该式仅适用于一次平衡萃取。';break;
 default:throw Error('No authored problem for '+method);
 }
 return {subject,topic,question,answer,explanation,units};
}
export function generate(){
 const out=[],ids=new Set();
 for(const method of METHODS)for(let i=0;i<12;i++){
  const p=parameters(method,i),x=calculate(method,p);
  verifyInverse(method,p,x);
  const t=render(method,p,x),id=qid(t.question);
  if(ids.has(id))throw Error('Duplicate authored question: '+method);
  ids.add(id);
  out.push({schema_version:1,id,subject:t.subject,topic:t.topic,
   question_type:'original_general_chemistry_calculation',
   resource_type:'original_solved_exercise_not_upstream_question',
   level:'undergraduate',difficulty:'intermediate',
   question:t.question,answer:t.answer,explanation:t.explanation,
   numeric_answers:[x],parameters:p,units:t.units,
   quality_status:'awaiting_expert_review',publishable:false,
   semantic_duplicate_review_pending:true,original_chemistry_experiment:false,
   source:{repository:OWNER,file:'scripts/import-original-general-chemistry.mjs',
    license:'CC0-1.0',license_evidence:'https://github.com/'+OWNER+'/blob/main/LICENSE-ORIGINAL-QUESTIONS.md',
    content_rights_verified:true,origin:'original_deterministic_generation',
    original_exam_question:false,third_party_question_text_copied:false,
    changes:'New Chinese hypothetical numerical cases; no textbook, exams, measured data or third-party question text copied.'}});
 }
 if(out.length!==120)throw Error('Expected 120 original chemistry variants');
 return out;
}
export function run(){
 const rows=generate(),directory=join(ROOT,'data/candidates');
 for(const q of rows){
  const path=join(directory,q.id+'.json');
  if(!existsSync(path))continue;
  const previous=JSON.parse(readFileSync(path,'utf8'));
  if(previous.id!==q.id||previous.question!==q.question||previous.answer!==q.answer||
     previous.publishable!==false||previous.quality_status!=='awaiting_expert_review'||
     previous.source?.file!=='scripts/import-original-general-chemistry.mjs')
   throw Error('Candidate collision or unauthorized publication change: '+q.id);
 }
 mkdirSync(directory,{recursive:true});let added=0;
 for(const q of rows){
  const path=join(directory,q.id+'.json');
  if(existsSync(path))continue;
  writeFileSync(path,JSON.stringify(q,null,2)+'\n');added++;
 }
 const report={schema_version:1,generated:120,newly_added:added,already_present:120-added,
  method_families:10,variants_per_family:12,by_subject:{inorganic:72,organic:48},
  independently_inverse_checked:120,source_license:'CC0-1.0',
  original_exam_questions_claimed:0,third_party_question_text_copied:0,
  quality_status:'awaiting_expert_review',publishable:false,expert_approved:0,
  note:'120 numerical practice variants built from 10 distinct original question templates; not 120 original exam questions or 120 independent teaching concepts.'};
 const reportPath=join(ROOT,'harvest/import_reports/original_general_chemistry.json');
 mkdirSync(dirname(reportPath),{recursive:true});
 const body=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(reportPath)||readFileSync(reportPath,'utf8')!==body)writeFileSync(reportPath,body);
 const log='Original general chemistry generated=120, newly_added='+added+', existing='+(120-added)+', human_approved=0';
 console.log(log);if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,log+'\n');
 return {added,already_present:120-added};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
