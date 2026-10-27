#!/usr/bin/env node
// Independently authored CC0 undergraduate instrumental-analysis calculations.
// No third-party question banks, exam text, graphics or measured data copied.
import {readFileSync,writeFileSync,existsSync,mkdirSync,appendFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const OWN='jackxiang0329-source/ruoshui-chemistry-bank';
export const FAMILIES=['beer_lambert','single_standard_addition','chromatographic_resolution',
 'chromatographic_plate_number','controlled_current_coulometry','conductivity_cell_constant',
 'silver_chloride_gravimetry','stern_volmer_quenching'];
const fmt=(x,n=4)=>Number(x).toFixed(n);
export const questionId=q=>createHash('sha256').update(String(q).normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase()).digest('hex');

export function parameters(kind,i){
 if(!FAMILIES.includes(kind)||!Number.isInteger(i)||i<0||i>=8)throw Error('Unsafe parameter grid');
 const j=i+1;
 switch(kind){
 case 'beer_lambert':{
  const epsilon=7200+450*j;
  return {epsilon,path_cm:1,absorbance:Number(fmt(epsilon*(28+3*j)/1e6,6))};
 }
 case 'single_standard_addition':{
  const Vx_ml=20,Vs_ml=Number(fmt(1.2+0.2*j,2)),Cstd_mM=Number(fmt(2.2+0.12*j,3)),
   target_mM=Number(fmt(0.24+0.03*j,3)),A_before=Number(fmt(0.25+0.015*j,5));
  const A_after=Number(fmt(A_before*(Vx_ml+Cstd_mM*Vs_ml/target_mM)/(Vx_ml+Vs_ml),7));
  return {Vx_ml,Vs_ml,Cstd_mM,A_before,A_after};
 }
 case 'chromatographic_resolution':
  return {t1_min:Number(fmt(4.5+0.22*j,2)),t2_min:Number(fmt(4.9+0.28*j,2)),
   w1_min:Number(fmt(0.27+0.009*j,3)),w2_min:Number(fmt(0.31+0.007*j,3))};
 case 'chromatographic_plate_number':
  return {tR_min:Number(fmt(7.5+0.43*j,2)),wb_min:Number(fmt(0.35+0.012*j,3))};
 case 'controlled_current_coulometry':
  return {I_amp:Number(fmt(0.31+0.045*j,3)),t_s:420+35*j,
   electrons:2,Cu_molar_mass:63.546,faraday:96485.33212};
 case 'conductivity_cell_constant':
  return {Kcell_per_cm:Number(fmt(0.76+0.045*j,3)),resistance_ohm:550+48*j};
 case 'silver_chloride_gravimetry':
  return {sample_g:Number(fmt(0.7+0.04*j,3)),AgCl_g:Number(fmt(0.135+0.013*j,3)),
   M_Cl:35.453,M_AgCl:143.321};
 case 'stern_volmer_quenching':
  return {I0_over_I:Number(fmt(1.20+0.045*j,3)),Ksv_L_per_mol:80+7*j};
 default:throw Error('Unsupported chemistry method');
 }
}

export function solve(kind,p){
 let x;
 switch(kind){
 case 'beer_lambert':x=1e6*p.absorbance/(p.epsilon*p.path_cm);break;
 case 'single_standard_addition':{
  const denominator=p.A_after*(p.Vx_ml+p.Vs_ml)-p.A_before*p.Vx_ml;
  if(denominator<=0)throw Error('Invalid standard-addition calibration');
  x=p.Cstd_mM*p.Vs_ml*p.A_before/denominator;break;
 }
 case 'chromatographic_resolution':x=2*(p.t2_min-p.t1_min)/(p.w1_min+p.w2_min);break;
 case 'chromatographic_plate_number':x=16*(p.tR_min/p.wb_min)**2;break;
 case 'controlled_current_coulometry':x=1000*p.I_amp*p.t_s*p.Cu_molar_mass/(p.electrons*p.faraday);break;
 case 'conductivity_cell_constant':x=1000*p.Kcell_per_cm/p.resistance_ohm;break;
 case 'silver_chloride_gravimetry':x=100*p.AgCl_g*p.M_Cl/(p.M_AgCl*p.sample_g);break;
 case 'stern_volmer_quenching':x=1000*(p.I0_over_I-1)/p.Ksv_L_per_mol;break;
 default:throw Error('No validated solver for '+kind);
 }
 if(!Number.isFinite(x)||x<=0)throw Error('Invalid physical measurement for '+kind);
 return x;
}
// Independently check each answer by reconstructing the measured observable,
// rather than accepting only the forward algebraic formula.
export function verifyMeasurement(kind,p,x){
 if(!Number.isFinite(x)||x<=0)throw Error('Bad numerical answer');
 let observed,expected;
 switch(kind){
 case 'beer_lambert':
  observed=p.epsilon*p.path_cm*(x/1e6);expected=p.absorbance;break;
 case 'single_standard_addition':
  observed=p.A_before*(p.Vx_ml+p.Cstd_mM*p.Vs_ml/x)/(p.Vx_ml+p.Vs_ml);
  expected=p.A_after;break;
 case 'chromatographic_resolution':
  observed=x*(p.w1_min+p.w2_min)/2;expected=p.t2_min-p.t1_min;break;
 case 'chromatographic_plate_number':
  observed=4*p.tR_min/Math.sqrt(x);expected=p.wb_min;break;
 case 'controlled_current_coulometry':
  observed=(x/1000)/p.Cu_molar_mass*p.electrons*p.faraday;
  expected=p.I_amp*p.t_s;break;
 case 'conductivity_cell_constant':
  observed=1000*p.Kcell_per_cm/x;expected=p.resistance_ohm;break;
 case 'silver_chloride_gravimetry':
  observed=(x/100)*p.sample_g*p.M_AgCl/p.M_Cl;expected=p.AgCl_g;break;
 case 'stern_volmer_quenching':
  observed=1+p.Ksv_L_per_mol*x/1000;expected=p.I0_over_I;break;
 default:throw Error('No independent inverse verification');
 }
 if(Math.abs(observed-expected)>1e-9*Math.max(1,Math.abs(expected)))
  throw Error('Instrumental chemistry measurement mismatch: '+kind);
 return true;
}
function render(kind,p,x){
 let topic,question,answer,explanation,units;
 switch(kind){
 case 'beer_lambert':
  topic='uv_vis_beer_lambert';units='μmol/L';
  question='分析化学·紫外可见吸收测定：单组分标准样品在波长固定、无散射的线性范围内，摩尔吸光系数 ε = '+p.epsilon+' L/(mol·cm)，光程 '+fmt(p.path_cm,2)+' cm，实测吸光度 A = '+fmt(p.absorbance,6)+'。按 A=εlc 求样品浓度，单位 μmol/L。';
  answer='c = 10⁶×A/(εl) = '+fmt(x,4)+' μmol/L。';
  explanation='Beer–Lambert 定律中浓度先以 mol/L 求出，再乘 10⁶ 转为 μmol/L；假定空白已扣除。';break;
 case 'single_standard_addition':
  topic='single_point_standard_addition';units='mmol/L';
  question='分析化学·单点标准加入法：取原试液 '+fmt(p.Vx_ml,2)+' mL，测吸光度 A₀='+fmt(p.A_before,5)+'；加入 '+fmt(p.Vs_ml,2)+' mL、'+fmt(p.Cstd_mM,3)+' mmol/L 的同一分析物标准液后，测得 A₁='+fmt(p.A_after,7)+'。两次灵敏度相同、加样体积不可忽略，求原试液浓度（mmol/L）。';
  answer='cₓ = CₛVₛA₀ / [A₁(Vₓ+Vₛ)−A₀Vₓ] = '+fmt(x,5)+' mmol/L。';
  explanation='标准加入前后吸光度与混合液分析物浓度成正比；特别保留 Vₓ+Vₛ 的稀释项，不可直接忽略加样体积。';break;
 case 'chromatographic_resolution':
  topic='chromatographic_baseline_resolution';units='dimensionless';
  question='分析化学·色谱峰分离度：某色谱图中相邻两峰保留时间 t₁='+fmt(p.t1_min,2)+' min、t₂='+fmt(p.t2_min,2)+' min，对应基线峰宽 w₁='+fmt(p.w1_min,3)+' min、w₂='+fmt(p.w2_min,3)+' min。求基线峰宽定义下的分离度 Rₛ。';
  answer='Rₛ = 2(t₂−t₁)/(w₁+w₂) = '+fmt(x,4)+'（无量纲）。';
  explanation='两峰峰宽必须采用相同的基线宽度定义；先求峰保留时间差，再除以总基线峰宽。';break;
 case 'chromatographic_plate_number':
  topic='chromatographic_theoretical_plates';units='plates';
  question='分析化学·柱效评价：假设色谱峰近似高斯对称，保留时间 tR='+fmt(p.tR_min,2)+' min、基线峰宽 wb='+fmt(p.wb_min,3)+' min。按基线峰宽法 N=16(tR/wb)² 计算理论塔板数。';
  answer='N = 16('+fmt(p.tR_min,2)+'/'+fmt(p.wb_min,3)+')² = '+fmt(x,2)+'（无量纲）。';
  explanation='基线宽度法系数为 16；若改用半峰宽法，系数不同，因此不能混用。';break;
 case 'controlled_current_coulometry':
  topic='coulometric_copper_deposition';units='mg';
  question='分析化学·恒电流库仑分析：Cu²⁺ + 2e⁻ → Cu，电解电流 '+fmt(p.I_amp,3)+' A，通电 '+p.t_s+' s，假设电流效率 100%、无副反应。取 F=96485.33212 C/mol、M(Cu)=63.546 g/mol。求沉积铜的质量（mg）。';
  answer='m(Cu) = 1000×ItM/(2F) = '+fmt(x,4)+' mg。';
  explanation='电量 Q=It，电子物质的量 Q/F；每摩尔 Cu²⁺ 消耗两摩尔电子，再换算为 mg。';break;
 case 'conductivity_cell_constant':
  topic='conductivity_cell_calibration';units='mS/cm';
  question='分析化学·电导池常数：某溶液测得电阻 R='+fmt(p.resistance_ohm,0)+' Ω，已标定电导池常数 Kcell='+fmt(p.Kcell_per_cm,3)+' cm⁻¹，忽略电极极化和温度漂移。求电导率 κ（mS/cm）。';
  answer='κ = 1000×Kcell/R = '+fmt(x,5)+' mS/cm。';
  explanation='电导 G=1/R，电导率 κ=Kcell·G（S/cm）；乘 1000 转成 mS/cm。';break;
 case 'silver_chloride_gravimetry':
  topic='gravimetric_chloride_silver';units='%';
  question='分析化学·沉淀重量法：取含氯样品 '+fmt(p.sample_g,3)+' g，使其中全部 Cl⁻ 定量沉淀为纯净、干燥 AgCl '+fmt(p.AgCl_g,3)+' g。已知 M(Cl)=35.453 g/mol，M(AgCl)=143.321 g/mol；假定无共沉淀，求样品中氯的质量分数（%）。';
  answer='w(Cl) = 100%×m(AgCl)×M(Cl)/[M(AgCl)×m(样)] = '+fmt(x,4)+'%。';
  explanation='按每摩尔 AgCl 对应一摩尔 Cl⁻ 的计量关系换算氯质量，再除以样品质量。';break;
 case 'stern_volmer_quenching':
  topic='fluorescence_stern_volmer';units='mmol/L';
  question='分析化学·荧光猝灭：某体系满足理想 Stern–Volmer 关系 I₀/I = 1 + KSV[Q]，测得荧光强度比 I₀/I='+fmt(p.I0_over_I,3)+'，KSV='+fmt(p.Ksv_L_per_mol,0)+' L/mol。忽略内滤效应与静态偏离，计算猝灭剂浓度 [Q]（mmol/L）。';
  answer='[Q] = 1000×(I₀/I−1)/KSV = '+fmt(x,5)+' mmol/L。';
  explanation='先由强度比减去 1 求 KSV[Q]，再除以常数求 mol/L，乘 1000 换算 mmol/L。';break;
 default:throw Error('No authored prompt for '+kind);
 }
 return {topic,question,answer,explanation,units};
}
export function generate(){
 const rows=[],seen=new Set();
 for(const kind of FAMILIES)for(let i=0;i<8;i++){
  const p=parameters(kind,i),value=solve(kind,p);
  verifyMeasurement(kind,p,value);
  const q=render(kind,p,value),id=questionId(q.question);
  if(seen.has(id))throw Error('Repeated instrumental chemistry question: '+kind+':'+i);
  seen.add(id);
  rows.push({schema_version:1,id,subject:'analytical',topic:q.topic,
   level:'undergraduate',difficulty:'introductory_to_intermediate',
   question_type:'original_instrumental_analytical_calculation',
   resource_type:'original_problem_variant_not_upstream_question',
   question:q.question,answer:q.answer,explanation:q.explanation,
   numeric_answers:[value],units:q.units,parameters:p,
   quality_status:'awaiting_expert_review',publishable:false,
   semantic_duplicate_review_pending:true,original_chemistry_experiment:false,
   source:{repository:OWN,file:'scripts/import-original-instrumental-analytical.mjs',
    license:'CC0-1.0',license_evidence:'https://github.com/'+OWN+'/blob/main/LICENSE-ORIGINAL-QUESTIONS.md',
    origin:'original_deterministic_generation',content_rights_verified:true,
    original_exam_question:false,third_party_question_text_copied:false,
    changes:'Independently authored hypothetical instrument calculations; no external question, dataset or experimental measurement reproduced.'}});
 }
 if(rows.length!==64)throw Error('Expected 64 authored instrumental analytical variants');
 return rows;
}
export function run(){
 const rows=generate(),dest=join(ROOT,'data/candidates');
 // Fail closed: check the entire batch before writing any new file.
 for(const row of rows){
  const file=join(dest,row.id+'.json');if(!existsSync(file))continue;
  const old=JSON.parse(readFileSync(file,'utf8'));
  if(old.id!==row.id||old.question!==row.question||old.answer!==row.answer||
    old.quality_status!=='awaiting_expert_review'||old.publishable!==false||
    old.source?.repository!==OWN||old.source?.origin!=='original_deterministic_generation')
   throw Error('ID collision or publication/rights drift: '+row.id);
 }
 mkdirSync(dest,{recursive:true});
 let added=0;
 for(const row of rows){
  const file=join(dest,row.id+'.json');if(existsSync(file))continue;
  writeFileSync(file,JSON.stringify(row,null,2)+'\n');added++;
 }
 const path=join(ROOT,'harvest/import_reports/original_instrumental_analytical.json');
 const report={schema_version:1,original_exercises_generated:64,method_families:8,
  variants_per_method:8,by_subject:{analytical:64},source_license:'CC0-1.0',
  upstream_exam_questions_copied:0,independent_inverse_measurement_check:true,
  quality_status:'awaiting_expert_review',publishable:false,expert_approved:0,
  note:'64 hypothetical newly authored parameter variants; not 64 independently sourced university exam questions. Human chemistry review and semantic dedup required.'};
 mkdirSync(dirname(path),{recursive:true});
 const content=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(path)||readFileSync(path,'utf8')!==content)writeFileSync(path,content);
 const msg='New instrumental analytical exercises: new='+added+
  '; already_present='+(64-added)+'; human_approved=0';
 console.log(msg);
 if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,msg+'\n');
 return {added,already_present:64-added};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
