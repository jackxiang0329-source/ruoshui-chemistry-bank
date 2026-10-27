#!/usr/bin/env node
// Original undergraduate physical chemistry exercises: 8 distinct methods x 6 parameter sets.
// Hypothetical numerical inputs; no upstream exam questions, measurements or graphics are copied.
import {readFileSync,writeFileSync,existsSync,mkdirSync,appendFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const OWN='jackxiang0329-source/ruoshui-chemistry-bank';
const R=8.31446261815324; // J mol^-1 K^-1
const H=6.62607015e-34; // J s (exact)
const KB=1.380649e-23; // J K^-1 (exact)
const NA=6.02214076e23; // mol^-1 (exact)
const LIGHT=299792458; // m s^-1 (exact)
const EV=1.602176634e-19; // J (exact)
export const METHODS=[
 'binary_raoult_vle','arrhenius_two_temperature','ideal_gas_isothermal_entropy',
 'debye_huckel_monovalent','langmuir_adsorption','harmonic_vibration_energy',
 'photon_energy_wavelength','eyring_transition_state'
];
const f=(v,n=4)=>Number(v).toFixed(n);
export const questionId=q=>createHash('sha256').update(String(q).normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase()).digest('hex');
export function parameters(method,index){
 if(!METHODS.includes(method)||!Number.isInteger(index)||index<0||index>=6)
  throw Error('Unsafe physical chemistry method or parameter grid');
 const i=index+1;
 switch(method){
 case 'binary_raoult_vle':return {xA:f(0.28+0.065*i,3)*1,pA_kPa:80+4*i,pB_kPa:42+2*i};
 case 'arrhenius_two_temperature':{
  const T1=295+2*i,T2=325+3*i,k1=0.025+0.008*i,Ea_J_mol=35000+1200*i;
  const k2=Number(f(k1*Math.exp((Ea_J_mol/R)*(1/T1-1/T2)),7));
  return {T1_K:T1,T2_K:T2,k1_s_1:k1,k2_s_1:k2};
 }
 case 'ideal_gas_isothermal_entropy':{
  const n_mol=0.4+0.1*i,V1_L=2+i,V2_L=V1_L*(1.6+0.2*i);
  return {n_mol,V1_L,V2_L};
 }
 case 'debye_huckel_monovalent':return {ionic_strength_mol_L:0.001+0.0007*i,A:0.509};
 case 'langmuir_adsorption':return {K_per_bar:0.65+0.2*i,pressure_bar:0.35+0.08*i};
 case 'harmonic_vibration_energy':return {wavenumber_cm_1:700+125*i};
 case 'photon_energy_wavelength':return {photon_energy_eV:1.2+0.2*i};
 case 'eyring_transition_state':return {T_K:293.15+3*i,k_s_1:0.06+0.03*i};
 default:throw Error('Unknown physical chemistry method');
 }
}
export function calculate(method,p){
 let values;
 switch(method){
 case 'binary_raoult_vle':{
  const P=p.xA*p.pA_kPa+(1-p.xA)*p.pB_kPa;
  values=[P,p.xA*p.pA_kPa/P];break;
 }
 case 'arrhenius_two_temperature':
  values=[R*Math.log(p.k2_s_1/p.k1_s_1)/(1/p.T1_K-1/p.T2_K)/1000];break;
 case 'ideal_gas_isothermal_entropy':
  values=[p.n_mol*R*Math.log(p.V2_L/p.V1_L)];break;
 case 'debye_huckel_monovalent':
  values=[10**(-p.A*Math.sqrt(p.ionic_strength_mol_L))];break;
 case 'langmuir_adsorption':
  values=[(p.K_per_bar*p.pressure_bar)/(1+p.K_per_bar*p.pressure_bar)];break;
 case 'harmonic_vibration_energy':
  values=[NA*H*LIGHT*100*p.wavenumber_cm_1/1000];break;
 case 'photon_energy_wavelength':
  values=[H*LIGHT/(p.photon_energy_eV*EV)*1e9];break;
 case 'eyring_transition_state':
  values=[R*p.T_K*Math.log((KB*p.T_K)/(H*p.k_s_1))/1000];break;
 default:throw Error('Unverified chemistry calculation');
 }
 if(values.some(v=>!Number.isFinite(v)||v<=0))throw Error('Nonphysical calculated answer');
 return values;
}
// Independent inverse checks against original thermodynamic, kinetic or spectroscopic observations.
export function verifyInverse(method,p,values){
 if(!Array.isArray(values)||values.length!==(method==='binary_raoult_vle'?2:1)||
  values.some(v=>!Number.isFinite(v)||v<=0))throw Error('Invalid claimed answers');
 let actual,expected;
 switch(method){
 case 'binary_raoult_vle':
  if(values[1]>=1)throw Error('Impossible vapor fraction');
  actual=[values[0]*values[1],values[0]*(1-values[1])];
  expected=[p.xA*p.pA_kPa,(1-p.xA)*p.pB_kPa];break;
 case 'arrhenius_two_temperature':
  actual=[p.k1_s_1*Math.exp((values[0]*1000/R)*(1/p.T1_K-1/p.T2_K))];
  expected=[p.k2_s_1];break;
 case 'ideal_gas_isothermal_entropy':
  actual=[p.V1_L*Math.exp(values[0]/(p.n_mol*R))];expected=[p.V2_L];break;
 case 'debye_huckel_monovalent':
  actual=[(Math.log10(values[0])/-p.A)**2];expected=[p.ionic_strength_mol_L];break;
 case 'langmuir_adsorption':
  if(values[0]>=1)throw Error('Impossible adsorption coverage');
  actual=[values[0]/(p.K_per_bar*(1-values[0]))];expected=[p.pressure_bar];break;
 case 'harmonic_vibration_energy':
  actual=[values[0]*1000/(NA*H*LIGHT*100)];expected=[p.wavenumber_cm_1];break;
 case 'photon_energy_wavelength':
  actual=[H*LIGHT/(values[0]*1e-9)/EV];expected=[p.photon_energy_eV];break;
 case 'eyring_transition_state':
  actual=[(KB*p.T_K/H)*Math.exp(-values[0]*1000/(R*p.T_K))];
  expected=[p.k_s_1];break;
 default:throw Error('Missing independent inverse chemical check');
 }
 for(let i=0;i<actual.length;i++)
  if(Math.abs(actual[i]-expected[i])>1e-9*Math.max(1e-12,Math.abs(expected[i])))
   throw Error('Inverse physics check mismatch: '+method);
 return true;
}
function textFor(method,p,v){
 let topic,question,answer,explanation,units;
 switch(method){
 case 'binary_raoult_vle':
  topic='ideal_binary_vle_raoult';units='kPa;dimensionless';
  question='物理化学·理想二元气液平衡：温度固定时，理想溶液中液相 A 的摩尔分数 xA='+f(p.xA,3)+'，纯 A、B 饱和蒸气压分别为 '+f(p.pA_kPa,2)+' kPa、'+f(p.pB_kPa,2)+' kPa。假设理想气相且服从拉乌尔定律，求总压 P（kPa）及气相摩尔分数 yA。';
  answer='P=xA·PA*+(1−xA)·PB*='+f(v[0],4)+' kPa；yA=xA·PA*/P='+f(v[1],6)+'。';
  explanation='各组分分压由拉乌尔定律给出，相加为总压；气相摩尔分数由道尔顿分压关系求得。';break;
 case 'arrhenius_two_temperature':
  topic='arrhenius_activation_energy_two_temperatures';units='kJ/mol';
  question='物理化学·阿伦尼乌斯活化能：在 '+f(p.T1_K,2)+' K 和 '+f(p.T2_K,2)+' K 测得同一基元反应的速率常数 k₁='+f(p.k1_s_1,5)+' s⁻¹、k₂='+f(p.k2_s_1,7)+' s⁻¹。假设前因子 A 与活化能在温区近似不变，求活化能 Ea（kJ/mol）；请使用题目给定的数值计算。';
  answer='Ea=R ln(k₂/k₁)/(1/T₁−1/T₂)='+f(v[0],4)+' kJ/mol。';
  explanation='两温度阿伦尼乌斯方程相减消去前因子；分母单位为 K⁻¹，气体常数取 J/(mol·K)，最终除以 1000。';break;
 case 'ideal_gas_isothermal_entropy':
  topic='isothermal_ideal_gas_entropy';units='J/K';
  question='物理化学·理想气体等温熵变：'+f(p.n_mol,2)+' mol 理想气体在恒温下由 '+f(p.V1_L,3)+' L 可逆等温膨胀至 '+f(p.V2_L,3)+' L。求系统熵变 ΔS（J/K）。';
  answer='ΔS=nR ln(V₂/V₁)='+f(v[0],5)+' J/K。';
  explanation='熵是状态函数，理想气体等温时内能只与温度有关；沿可逆等温路径积分 δqrev/T=nR dV/V。';break;
 case 'debye_huckel_monovalent':
  topic='debye_huckel_mean_activity_coefficient';units='dimensionless';
  question='物理化学·德拜—休克尔极限定律：298.15 K 稀水溶液中单价 1:1 电解质的离子强度 I='+f(p.ionic_strength_mol_L,6)+' mol/L。仅在足够稀、可使用极限定律的近似下，取 log₁₀γ±=−0.509√(I/(mol/L))，求平均离子活度系数 γ±（无量纲）。';
  answer='γ±=10^(−0.509√(I/(mol/L)))='+f(v[0],6)+'。';
  explanation='将以 mol/L 表示的离子强度先除以 1 mol/L 得到无量纲比值，再代入经验常数；该极限定律不宜外推至较高离子强度。';break;
 case 'langmuir_adsorption':
  topic='langmuir_surface_coverage';units='dimensionless';
  question='物理化学·朗缪尔单层吸附：假定表面均匀、无相互作用、单层平衡吸附，平衡常数 K='+f(p.K_per_bar,4)+' bar⁻¹，气相压力 p='+f(p.pressure_bar,3)+' bar。求表面覆盖度 θ。';
  answer='θ=('+f(p.K_per_bar,4)+'×'+f(p.pressure_bar,3)+')/[1+'+f(p.K_per_bar,4)+'×'+f(p.pressure_bar,3)+']='+f(v[0],6)+'。';
  explanation='吸附占据率等于吸附项 Kp 与总配分项 1+Kp 之比，结果应满足 0<θ<1。';break;
 case 'harmonic_vibration_energy':
  topic='harmonic_oscillator_vibrational_spacing';units='kJ/mol';
  question='物理化学·谐振子振动光谱：某双原子分子在谐振子近似下，振动波数 ṽ='+f(p.wavenumber_cm_1,2)+' cm⁻¹。用 ΔEmol=Nₐ h c ṽ 求相邻振动能级的摩尔能量间隔（kJ/mol）。取 h=6.62607015×10⁻³⁴ J·s、c=2.99792458×10¹⁰ cm/s、Nₐ=6.02214076×10²³ mol⁻¹。';
  answer='ΔEmol=Nₐhcṽ='+f(v[0],6)+' kJ/mol。';
  explanation='光速在该式中用 cm/s 与波数 cm⁻¹ 匹配，相乘得到单分子 J，再乘阿伏伽德罗常数并除以 1000。';break;
 case 'photon_energy_wavelength':
  topic='molecular_electronic_transition_photon';units='nm';
  question='物理化学·分子电子跃迁：某分子允许跃迁所吸收的单光子能量为 '+f(p.photon_energy_eV,3)+' eV。假定真空传播，按 E=hc/λ 求光子波长 λ（nm）；取 h=6.62607015×10⁻³⁴ J·s、c=299792458 m/s、1 eV=1.602176634×10⁻¹⁹ J。';
  answer='λ=(6.62607015×10⁻³⁴×299792458)/('+f(p.photon_energy_eV,3)+'×1.602176634×10⁻¹⁹)×10⁹='+f(v[0],5)+' nm。';
  explanation='将 eV 转换为 J，计算得到波长 m 后乘 10⁹ 转 nm；忽略介质折射率。';break;
 case 'eyring_transition_state':
  topic='eyring_activation_free_energy';units='kJ/mol';
  question='物理化学·过渡态理论：某一级反应在 '+f(p.T_K,2)+' K 时的速率常数为 '+f(p.k_s_1,5)+' s⁻¹。假设传输系数 κ=1，采用 Eyring 关系 k=(kBT/h)exp(−ΔG‡/RT)，求该温度的标准活化吉布斯自由能 ΔG‡（kJ/mol）。取 kB=1.380649×10⁻²³ J/K、h=6.62607015×10⁻³⁴ J·s、R=8.314462618 J/(mol·K)。';
  answer='ΔG‡=RT ln[(kBT/h)/k]='+f(v[0],5)+' kJ/mol。';
  explanation='标准态及传输系数按题设处理，kBT/h 和 k 单位均为 s⁻¹，比值无量纲；最后将 J/mol 化为 kJ/mol。';break;
 default:throw Error('Missing authored physical prompt');
 }
 return {topic,question,answer,explanation,units};
}
export function generate(){
 const out=[],seen=new Set();
 for(const method of METHODS)for(let i=0;i<6;i++){
  const p=parameters(method,i),value=calculate(method,p);
  verifyInverse(method,p,value);
  const t=textFor(method,p,value),id=questionId(t.question);
  if(seen.has(id))throw Error('Duplicate generated physical chemistry question '+method);
  seen.add(id);
  out.push({schema_version:1,id,subject:'physical',topic:t.topic,
   question_type:'original_advanced_physical_calculation',
   resource_type:'original_solved_exercise_not_upstream_question',
   level:'undergraduate',difficulty:'intermediate',
   question:t.question,answer:t.answer,explanation:t.explanation,
   numeric_answers:value,parameters:p,units:t.units,
   quality_status:'awaiting_expert_review',publishable:false,
   semantic_duplicate_review_pending:true,original_chemistry_experiment:false,
   source:{repository:OWN,file:'scripts/import-original-advanced-physical.mjs',
    license:'CC0-1.0',license_evidence:'https://github.com/'+OWN+'/blob/main/LICENSE-ORIGINAL-QUESTIONS.md',
    content_rights_verified:true,origin:'original_deterministic_generation',
    original_exam_question:false,third_party_question_text_copied:false,
    changes:'Independently authored hypothetical numerical practice; no third-party question wording, measurements or media copied.'}});
 }
 if(out.length!==48)throw Error('Expected 48 independent physical chemistry practice variants');
 return out;
}
export function run(){
 const rows=generate(),dir=join(ROOT,'data/candidates');
 for(const x of rows){
  const file=join(dir,x.id+'.json');if(!existsSync(file))continue;
  const prior=JSON.parse(readFileSync(file,'utf8'));
  if(prior.id!==x.id||prior.question!==x.question||prior.answer!==x.answer||
   prior.publishable!==false||prior.quality_status!=='awaiting_expert_review'||
   prior.source?.repository!==OWN||prior.source?.origin!=='original_deterministic_generation')
   throw Error('Candidate collision or review status drift: '+x.id);
 }
 mkdirSync(dir,{recursive:true});
 let added=0;
 for(const x of rows){
  const file=join(dir,x.id+'.json');
  if(existsSync(file))continue;
  writeFileSync(file,JSON.stringify(x,null,2)+'\n');added++;
 }
 const reportFile=join(ROOT,'harvest/import_reports/original_advanced_physical.json');
 const report={schema_version:1,original_exercises_generated:48,method_families:8,
  variants_per_method:6,source_license:'CC0-1.0',upstream_exam_questions_copied:0,
  inverse_physical_crosschecks:48,by_subject:{physical:48},
  quality_status:'awaiting_expert_review',publishable:false,expert_approved:0,
  note:'8 physics/chemistry methods, 6 numerical variants each, no third-party questions copied; human scientific and template-duplication review required.'};
 mkdirSync(dirname(reportFile),{recursive:true});
 const data=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(reportFile)||readFileSync(reportFile,'utf8')!==data)writeFileSync(reportFile,data);
 const msg='Advanced physical chemistry: generated=48 newly_added='+added+
  ' already_present='+(48-added)+' expert_approved=0';
 console.log(msg);
 if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,msg+'\n');
 return {added,already_present:48-added};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
