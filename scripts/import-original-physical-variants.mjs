#!/usr/bin/env node
// 72 ORIGINAL undergraduate physical chemistry computational variants.
// Standard scientific equations (not copies of third-party problem sets).
// All outputs require expert review and are NOT automatically publishable.
import {readFileSync,writeFileSync,existsSync,mkdirSync,appendFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const R=8.31446261815324, F=96485.33212, H=6.62607015e-34;
const ME=9.1093837139e-31, EV=1.602176634e-19, ROS=0.082057366080960;
const OWNER='jackxiang0329-source/ruoshui-chemistry-bank';
const KINDS=['nernst_cell','vant_hoff_shift','clausius_clapeyron','osmotic_pressure',
 'freezing_point_depression','particle_box_transition'];
const f=(x,n=4)=>Number(x).toFixed(n);
export const questionId=q=>createHash('sha256').update(String(q).normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase()).digest('hex');
function params(kind,j){
 const n=j+1;
 switch(kind){
 case 'nernst_cell':return {e0_v:1.2,n_electrons:2,Q:0.1+0.17*n,T_kelvin:298.15};
 case 'vant_hoff_shift':return {K1:1.4+0.75*n,T1_kelvin:298.15,T2_kelvin:313.15+0.8*n,delta_h_j_per_mol:13500+650*n};
 case 'clausius_clapeyron':return {p1_kpa:2.4+0.25*n,T1_kelvin:298.15,T2_kelvin:312.15+0.7*n,delta_h_j_per_mol:30000+500*n};
 case 'osmotic_pressure':return {c_mol_per_l:0.008+0.0035*n,T_kelvin:298.15+1.5*n};
 case 'freezing_point_depression':return {Kf_kelvin_kg_per_mol:1.86,solute_mass_g:3+0.45*n,solute_molar_mass_g_per_mol:180.16,solvent_mass_kg:0.095+0.006*n,vant_hoff_factor:1};
 case 'particle_box_transition':return {box_length_nm:0.75+0.065*n,n_initial:1,n_final:2};
 default:throw Error('Unsupported physical chemistry computation');
 }
}
export function derive(kind,p){
 let value;
 switch(kind){
 case 'nernst_cell':value=p.e0_v-(R*p.T_kelvin/(p.n_electrons*F))*Math.log(p.Q);break;
 case 'vant_hoff_shift':value=p.K1*Math.exp((p.delta_h_j_per_mol/R)*(1/p.T1_kelvin-1/p.T2_kelvin));break;
 case 'clausius_clapeyron':value=p.p1_kpa*Math.exp((p.delta_h_j_per_mol/R)*(1/p.T1_kelvin-1/p.T2_kelvin));break;
 case 'osmotic_pressure':value=p.c_mol_per_l*ROS*p.T_kelvin;break;
 case 'freezing_point_depression':value=p.vant_hoff_factor*p.Kf_kelvin_kg_per_mol*(p.solute_mass_g/p.solute_molar_mass_g_per_mol)/p.solvent_mass_kg;break;
 case 'particle_box_transition':{
  const length=p.box_length_nm*1e-9;
  value=(p.n_final**2-p.n_initial**2)*H*H/(8*ME*length*length)/EV;break;}
 default:throw Error('Unsupported physical method '+kind);
 }
 if(!Number.isFinite(value)||value<=0)throw Error('Nonphysical physical chemistry result '+kind);
 return value;
}
export function checkInverse(kind,p,v){
 if(!Number.isFinite(v)||v<=0)throw Error('Invalid result');
 let lhs,rhs;
 switch(kind){
 case 'nernst_cell':
  lhs=Math.log(p.Q);rhs=(p.e0_v-v)*p.n_electrons*F/(R*p.T_kelvin);break;
 case 'vant_hoff_shift':
  lhs=Math.log(v/p.K1);rhs=(p.delta_h_j_per_mol/R)*(1/p.T1_kelvin-1/p.T2_kelvin);break;
 case 'clausius_clapeyron':
  lhs=Math.log(v/p.p1_kpa);rhs=(p.delta_h_j_per_mol/R)*(1/p.T1_kelvin-1/p.T2_kelvin);break;
 case 'osmotic_pressure':
  lhs=v/ROS/p.T_kelvin;rhs=p.c_mol_per_l;break;
 case 'freezing_point_depression':
  lhs=v*p.solvent_mass_kg/p.Kf_kelvin_kg_per_mol;
  rhs=p.vant_hoff_factor*p.solute_mass_g/p.solute_molar_mass_g_per_mol;break;
 case 'particle_box_transition':
  lhs=v*(8*ME*(p.box_length_nm*1e-9)**2)*EV/H**2;
  rhs=p.n_final**2-p.n_initial**2;break;
 default:throw Error('Unsupported verification model');
 }
 if(Math.abs(lhs-rhs)>1e-11*Math.max(1,Math.abs(rhs),Math.abs(lhs)))
  throw Error('Physical chemistry inverse-residual mismatch: '+kind);
 return true;
}
function makeText(kind,p,val){
 let question,answer,explanation,topic,unit;
 switch(kind){
 case 'nernst_cell':
  topic='nernst_equation';unit='V';
  question='物理化学·能斯特方程：298.15 K 下某电池反应转移 '+p.n_electrons+' mol 电子/mol 反应，标准电池电动势 E°='+f(p.e0_v,3)+' V，按活度定义的无量纲反应商 Q='+f(p.Q,4)+'。用能斯特方程求该状态下可逆电池电动势 E（V）。';
  explanation='E=E°−(RT/nF)ln Q；取 R=8.31446261815324 J/(mol·K)，F=96485.33212 C/mol；Q 为无量纲。';
  answer='E = '+f(p.e0_v,3)+' − [R×298.15/(2F)] ln('+f(p.Q,4)+') = '+f(val,5)+' V。';break;
 case 'vant_hoff_shift':
  topic='vant_hoff_equilibrium_temperature';unit='dimensionless';
  question='物理化学·范特霍夫方程：某反应在 '+f(p.T1_kelvin,2)+' K 时无量纲平衡常数 K₁='+f(p.K1,4)+'，假设标准反应焓 ΔrH°='+f(p.delta_h_j_per_mol/1000,3)+' kJ/mol 在温区内不变。求 '+f(p.T2_kelvin,2)+' K 时的 K₂（无量纲）。';
  explanation='积分范特霍夫方程 ln(K₂/K₁)=(ΔrH°/R)(1/T₁−1/T₂)，焓须从 kJ/mol 化为 J/mol，K 为无量纲热力学常数。';
  answer='K₂ = '+f(p.K1,4)+'×exp[('+f(p.delta_h_j_per_mol,1)+'/R)(1/'+f(p.T1_kelvin,2)+'−1/'+f(p.T2_kelvin,2)+')] = '+f(val,5)+'（无量纲）。';break;
 case 'clausius_clapeyron':
  topic='vapor_pressure_temperature';unit='kPa';
  question='物理化学·克劳修斯—克拉佩龙方程：纯物质在 '+f(p.T1_kelvin,2)+' K 的平衡蒸气压为 '+f(p.p1_kpa,3)+' kPa，蒸发焓近似恒定为 '+f(p.delta_h_j_per_mol/1000,3)+' kJ/mol。假设蒸气近似理想气体、液体体积可忽略，求 '+f(p.T2_kelvin,2)+' K 时的蒸气压（kPa）。';
  explanation='ln(p₂/p₁)=(ΔHvap/R)(1/T₁−1/T₂)，两温度用 K，焓以 J/mol 计。';
  answer='p₂ = '+f(p.p1_kpa,3)+'×exp[('+f(p.delta_h_j_per_mol,1)+'/R)(1/'+f(p.T1_kelvin,2)+'−1/'+f(p.T2_kelvin,2)+')] = '+f(val,5)+' kPa。';break;
 case 'osmotic_pressure':
  topic='dilute_solution_osmotic_pressure';unit='atm';
  question='物理化学·稀溶液渗透压：某理想稀非电解质溶液浓度 c='+f(p.c_mol_per_l,5)+' mol/L，温度 T='+f(p.T_kelvin,2)+' K。假设溶质不解离，求渗透压 π（atm）；取 R=0.082057366 L·atm/(mol·K)。';
  explanation='范特霍夫渗透压公式 π=cRT；因 c 用 mol/L，配套 R 应使用 L·atm/(mol·K)。';
  answer='π = '+f(p.c_mol_per_l,5)+'×0.082057366×'+f(p.T_kelvin,2)+' = '+f(val,5)+' atm。';break;
 case 'freezing_point_depression':
  topic='dilute_solution_freezing_point';unit='K';
  question='物理化学·凝固点下降：某不挥发且不电离溶质 '+f(p.solute_mass_g,3)+' g（M='+f(p.solute_molar_mass_g_per_mol,2)+' g/mol）溶于 '+f(p.solvent_mass_kg,4)+' kg 的水中。假设理想稀溶液，Kf=1.86 K·kg/mol，求凝固点降低量 ΔTf（K）。';
  explanation='质量摩尔浓度 b=(m/M)/m溶剂(kg)；不电离溶质 i=1，所以 ΔTf=iKf b。';
  answer='ΔTf = 1×1.86×('+f(p.solute_mass_g,3)+'/180.16)/'+f(p.solvent_mass_kg,4)+' = '+f(val,5)+' K。';break;
 case 'particle_box_transition':
  topic='quantum_particle_in_box';unit='eV';
  question='物理化学·一维无限深势阱：设自由电子质量 mₑ=9.1093837139×10⁻³¹ kg，处于长度 L='+f(p.box_length_nm,3)+' nm 的一维无限深势阱。电子从量子数 n=1 跃迁到 n=2，求吸收能量 ΔE（eV）。取 h=6.62607015×10⁻³⁴ J·s，1 eV=1.602176634×10⁻¹⁹ J。';
  explanation='能级 E_n=n²h²/(8mₑL²)，故 ΔE=(4−1)h²/(8mₑL²)，L 先由 nm 换为 m，再由 J 换算 eV。';
  answer='ΔE = 3h²/[8mₑ('+f(p.box_length_nm,3)+'×10⁻⁹)²] ÷ (1.602176634×10⁻¹⁹) = '+f(val,5)+' eV。';break;
 default:throw Error('Unsupported');
 }
 return {question,answer,explanation,topic,unit};
}
export function generate(){
 const out=[],ids=new Set();
 for(const kind of KINDS)for(let i=0;i<12;i++){
  const p=params(kind,i),val=derive(kind,p);
  checkInverse(kind,p,val);
  const x=makeText(kind,p,val),id=questionId(x.question);
  if(ids.has(id))throw Error('Duplicate independent physical chemistry question ID');
  ids.add(id);
  out.push({schema_version:1,id,subject:'physical',topic:x.topic,
   question_type:'original_parametric_physical_calculation',
   resource_type:'original_solved_exercise_not_upstream_question',level:'undergraduate',
   question:x.question,answer:x.answer,explanation:x.explanation,
   numeric_answers:[val],parameters:p,units:x.unit,
   quality_status:'awaiting_expert_review',publishable:false,
   semantic_duplicate_review_pending:true,
   source:{repository:OWNER,file:'scripts/import-original-physical-variants.mjs',
    license:'CC0-1.0',license_evidence:'https://github.com/'+OWNER+'/blob/main/LICENSE-ORIGINAL-QUESTIONS.md',
    content_rights_verified:true,original_exam_question:false,third_party_question_text_copied:false,
    origin:'original_deterministic_generation',
    changes:'Independent Chinese numerical questions based on standard physical chemistry equations; no upstream questions, charts or data copied.'}});
 }
 if(out.length!==72)throw Error('Expected 72 original physical chemistry variants');
 return out;
}
export function run(){
 const rows=generate(),dest=join(ROOT,'data/candidates');
 for(const x of rows){
  const path=join(dest,x.id+'.json');if(!existsSync(path))continue;
  const old=JSON.parse(readFileSync(path,'utf8'));
  if(old.question!==x.question||old.answer!==x.answer||old.publishable!==false||
   old.quality_status!=='awaiting_expert_review')throw Error('Existing question conflict '+x.id);
 }
 mkdirSync(dest,{recursive:true});let added=0,existing=0;
 for(const x of rows){
  const path=join(dest,x.id+'.json');
  if(existsSync(path)){existing++;continue;}
  writeFileSync(path,JSON.stringify(x,null,2)+'\n');added++;
 }
 const reportPath=join(ROOT,'harvest/import_reports/original_physical_variants.json');
 mkdirSync(dirname(reportPath),{recursive:true});
 const report={schema_version:1,generator:'original-physical-chemistry-extended-v2',
  originally_authored:72,upstream_exam_problems_copied:0,
  methods:6,variants_per_method:12,source_license:'CC0-1.0',
  first_run_added:added,already_present:existing,
  science_validation:'independent inverse-identity checks for all 72 numerical solutions',
  expert_approved:0,publishable:false,quality_status:'awaiting_expert_review',
  note:'New original undergraduate practice variants, not imported third-party problems. Requires expert chemistry review and template-level duplicate review.'};
 if(!existsSync(reportPath))writeFileSync(reportPath,JSON.stringify(report,null,2)+'\n');
 else if(JSON.parse(readFileSync(reportPath,'utf8')).originally_authored!==72)
  throw Error('Prior original physical report conflict');
 const msg='Original physical chemistry v2: 72 generated, newly_added='+added+
  ', previously_present='+existing+', expert_approved=0';
 console.log(msg);
 if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,msg+'\n');
 return {added,existing};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
