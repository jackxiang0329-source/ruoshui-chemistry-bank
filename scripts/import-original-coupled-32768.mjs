#!/usr/bin/env node
/**
 * Four genuinely dependent chemistry calculation pathways, eight named
 * chemical systems per pathway, 1,024 parameter cases per system.
 * 32,768 candidates != 32,768 independent concepts.
 * Mechanical checking and provenance replay are NOT expert approval.
 */
import {createHash} from 'node:crypto';
import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const REPO='jackxiang0329-source/ruoshui-chemistry-bank';
const R=8.314462618; // L kPa mol-1 K-1, or J mol-1 K-1
const AVOGADRO=6.02214076e23;
export const CASES_PER_SYSTEM=1024;
export const SYSTEMS=[
 ...[
 ['CaCO₃',100.09],['MgCO₃',84.31],['ZnCO₃',125.39],['MnCO₃',114.95],
 ['FeCO₃',115.85],['SrCO₃',147.63],['BaCO₃',197.34],['CoCO₃',118.94]
 ].map(([name,M])=>({subject:'inorganic',pathway:'carbonate_gas_capture',id:'carbonate_'+name,
  name,M,archetype:'stoichiometric_CO2_ideal_gas_sodium_hydroxide_capture'})),
 ...[
 ['Ca²⁺',40.078],['Mg²⁺',24.305],['Zn²⁺',65.38],['Cu²⁺',63.546],
 ['Mn²⁺',54.938],['Ni²⁺',58.693],['Co²⁺',58.933],['Fe²⁺',55.845]
 ].map(([name,M])=>({subject:'analytical',pathway:'metal_digest_edta_optical',
  id:'metal_'+name,name,M,archetype:'sample_aliquot_EDTA_and_ligand_absorbance'})),
 ...[
 ['乙酸甲酯',74.079,82.034,32.042],
 ['乙酸乙酯',88.106,82.034,46.069],
 ['丙酸甲酯',88.106,96.06,32.042],
 ['丙酸乙酯',102.133,96.06,46.069],
 ['丁酸甲酯',102.133,110.09,32.042],
 ['丁酸乙酯',116.16,110.09,46.069],
 ['苯甲酸甲酯',136.15,144.11,32.042],
 ['苯甲酸乙酯',150.18,144.11,46.069]
 ].map(([name,M,Msalt,Malcohol])=>({subject:'organic',pathway:'ester_hydrolysis_back_titration',
  id:'ester_'+name,name,M,Msalt,Malcohol,
  archetype:'ester_conversion_salt_alcohol_back_titration'})),
 ...[
 ['He',4.0026],['H₂',2.01588],['N₂',28.014],['O₂',31.998],
 ['CO₂',44.01],['Ne',20.180],['CH₄',16.043],['NH₃',17.031]
 ].map(([name,M])=>({subject:'physical',pathway:'ideal_gas_transport_energy',
  id:'ideal_gas_'+name,name,M,archetype:'gas_mass_partial_pressure_rms_kinetic_energy'}))
];
const show=x=>String(Number(x.toPrecision(10)));
const precision=x=>Number(x).toPrecision(9);
export const idFor=q=>createHash('sha256').update(q.normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase()).digest('hex');
const rel=(x,y)=>Math.abs(x-y)/Math.max(Math.abs(y),1e-25);
const names={inorganic:'无机化学',analytical:'分析化学',organic:'有机化学',physical:'物理化学'};
const validity=(cond,msg)=>{if(!cond)throw Error('Scientific premise violation: '+msg)};
export function compute(f,i){
 validity(Number.isInteger(i)&&i>=0&&i<CASES_PER_SYSTEM,'index out of range');
 const a=Number(([1.2,0.040,0.010,0.20][['inorganic','analytical','organic','physical'].indexOf(f.subject)]+
  [.001,.00002,.000005,.0003][['inorganic','analytical','organic','physical'].indexOf(f.subject)]*i).toPrecision(10));
 const b=Number(([.55,.40,.45,295][['inorganic','analytical','organic','physical'].indexOf(f.subject)]+
  [.0003,.0004,.0003,.05][['inorganic','analytical','organic','physical'].indexOf(f.subject)]*i).toPrecision(10));
 let q,method,ans,units,inverse,checks,modelConditions;
 if(f.subject==='inorganic'){
  validity(b>0&&b<1,'carbonate mass fraction');
  const n=a*b/f.M; // original carbonate amount => CO2 mol
  const mass=n*44.01,volume=n*R*298.15/101.325;
  const vNaOH=n*2/.2000*1000; // mL, fully converted to CO3^2-
  const mNa2CO3=n*105.99;
  ans=[n,mass,volume,vNaOH,mNa2CO3];
  units=['mol CO₂','g CO₂','L CO₂ (298.15 K, 101.325 kPa)','mL 0.2000 M NaOH','g Na₂CO₃'];
  q='某样品总质量为 '+show(a)+' g，含纯 '+f.name+' 的质量分数为 '+show(b)+
   '；其余物质均不与盐酸释放气体。已知 M('+f.name+')='+f.M+
   ' g/mol，其碳酸根在足量强酸中全部变为 CO₂，收集效率100%，且无其它气体。'+
   '将 CO₂ 视作理想气体，298.15 K、101.325 kPa，R=8.314462618 L·kPa/(mol·K)。'+
   '随后将所得 CO₂ 定量吸收入过量 NaOH，按 CO₂+2NaOH→Na₂CO₃+H₂O 定量完成并且不生成碳酸氢盐，NaOH 浓度为 0.2000 mol/L，M(Na₂CO₃)=105.99 g/mol。'+
   '依次求气体 mol 数、气体质量、气体体积、消耗 NaOH 溶液体积以及生成碳酸钠质量。';
  method='第1步：碳酸盐净质量 m=样品质量×纯度='+show(a)+'×'+show(b)+
   ' g，由 n=m/M('+f.name+') 得 CO₂ mol 数；第2步：用 M(CO₂)=44.01 g/mol 换算质量；'+
   '第3步：用 PV=nRT 求 298.15K 的气体体积；第4步：按每mol CO₂消耗2mol NaOH，'+
   '用 V=nNaOH/0.2000 换算为 mL；第5步：由 CO₂ 与 Na₂CO₃ 的 1:1 计量求盐质量。';
  checks=[rel(n*f.M,a*b),rel(mass/44.01,n),
   rel(volume*101.325/(R*298.15),n),rel(vNaOH*.2000/1000,2*n),
   rel(mNa2CO3/105.99,n)];
  modelConditions={temperature_K:298.15,pressure_kPa:101.325,hydroxide_M:.2,gas_collection_fraction:1};
 }else if(f.subject==='analytical'){
  validity(b>0&&b<1,'metal purity');
  const n=a*b/f.M, c=n/.5000, vEDTA=c*.1000/.01000*1000;
  const epsilon=400; // stated hypothetical metal-ligand chromophore
  const absorbance=epsilon*1*c;
  ans=[n,c,vEDTA,absorbance];
  units=['mol metal in original sample','mol/L metal in 0.5000 L digest','mL 0.01000 M EDTA','absorbance A'];
  q='某固体样品质量 '+show(a)+' g，金属离子 '+f.name+' 对应元素的质量分数为 '+show(b)+
   '，其余物质惰性且不会干扰分析；金属原子摩尔质量 '+f.M+
   ' g/mol。将其完全溶解、控制金属价态与配位环境并定容至 0.5000 L。'+
   '取其中 100.0 mL 用 0.01000 mol/L EDTA 定量滴定，按金属:EDTA=1:1 且无竞争络合。'+
   '对另一份同浓度试液加入足量显色配体，假设唯一显色络合物对每mol金属贡献一个发色单元、反应完全，'+
   '其在指定测量波长的摩尔吸光系数经单独实测为 ε=400 L/(mol·cm)，光程为1.00cm，空白已扣除且处于线性范围。'+
   '依次求原样金属物质的量、消解液浓度、EDTA 耗量和显色吸光度。';
  method='第1步：原始金属质量 m='+show(a)+'×'+show(b)+' g，除以金属的摩尔质量得到 n；'+
   '第2步：将 n 分配到0.5000L得分析浓度 c；第3步：100.0mL等分试样需要的 EDTA mol数为 c×0.1000，'+
   '除以0.01000 mol/L并换为mL；第4步：另一份等浓度测量液完全显色，按 Beer–Lambert 式 A=εlc 计算。';
  checks=[rel(n*f.M,a*b),rel(c*.5000,n),rel(vEDTA*.01000/1000,c*.1000),
   rel(absorbance/400,c)];
  modelConditions={digest_L:.5,aliquot_L:.1,edta_M:.01,molar_absorptivity:400,cell_cm:1};
 }else if(f.subject==='organic'){
  validity(b>0&&b<1,'ester conversion fraction');
  const reacted=a*b,mSalt=reacted*f.Msalt,mAlcohol=reacted*f.Malcohol;
  const remainderEster=a-reacted,base0=.0200,baseRemaining=base0-reacted;
  validity(baseRemaining>0,'sufficient initial sodium hydroxide');
  const vBack=baseRemaining/.2000*1000;
  ans=[reacted,mSalt,mAlcohol,vBack,remainderEster];
  units=['mol ester hydrolyzed','g sodium carboxylate','g alcohol','mL 0.2000 M HCl','mol ester unreacted'];
  q='一种纯 '+f.name+' 的初始物质的量为 '+show(a)+' mol。'+
   '与0.02000mol NaOH 在密闭恒温体系中反应，转化分数为 '+show(b)+
   '，仅发生1:1的碱性酯水解生成相应羧酸钠与醇，无其它耗碱反应；'+
   '初始碱在所有参数情境下均足量。已知 M('+f.name+')='+f.M+
   ' g/mol，生成羧酸钠 M='+f.Msalt+' g/mol，生成醇 M='+f.Malcohol+
   ' g/mol。终止反应后，将剩余OH⁻用0.2000mol/L HCl 定量回滴，忽略终点及CO₂干扰。'+
   '依次计算已水解酯mol数、羧酸钠质量、醇质量、HCl回滴体积和未反应酯mol数。';
  method='第1步：由给定转化率 X='+show(b)+' 计算反应进度 ξ=n₀X；'+
   '第2步：碱性水解每mol酯生成1mol羧酸钠和1mol醇，分别乘已给定的产物摩尔质量；'+
   '第3步：NaOH初始为0.02000mol，剩余OH⁻=0.02000−ξ，0.2000M HCl回滴体积为剩余mol数除以酸浓度；'+
   '第4步：未反应酯 n₀−ξ。需明确给定转化率并非自动由平衡常数计算。';
  checks=[rel(reacted/a,b),rel(mSalt/f.Msalt,reacted),rel(mAlcohol/f.Malcohol,reacted),
    rel(vBack*.2/1000+reacted,base0),rel(remainderEster+reacted,a)];
  modelConditions={naoh_initial_mol:.0200,back_titrant_M:.2};
 }else if(f.subject==='physical'){
  const n=a/f.M,T=b,V=10.00,argon=.1000;
  const partial=n*R*T/V,ptotal=(n+argon)*R*T/V;
  const rms=Math.sqrt(3*R*T/(f.M/1000));
  const translational=1.5*n*R*T;
  const moleFraction=n/(n+argon);
  ans=[n,partial,ptotal,rms,translational,moleFraction];
  units=['mol sample gas','kPa gas partial pressure','kPa total pressure','m/s v_rms','J translational energy','mole fraction of sample gas'];
  q='某非反应性理想混合气体模型中，气体 '+f.name+' 质量为 '+show(a)+
   ' g，摩尔质量 M='+f.M+' g/mol，温度为 '+show(T)+
   ' K，体积10.00L，另含惰性 Ar 0.1000mol；两气体不反应，混合均匀，忽略非理想性。'+
   '取 R=8.314462618 L·kPa/(mol·K)=8.314462618 J/(mol·K)，'+
   '速度模型中气体摩尔质量必须换为kg/mol。'+
   '先由质量求样品气体mol数，再计算气体分压、混合总压、该气体的均方根速率、'+
   '样品气体整体平移平均动能以及它在混合气体中的摩尔分数。';
  method='第1步：n=m/M='+show(a)+'/'+f.M+' mol；第2步：分压 p=nRT/V，总压 P=(n+0.1000)RT/V；'+
   '第3步：由 Maxwell 理想气体均方根速率 v_rms=√(3RT/M_kg)，注意M单位转换；'+
   '第4步：样品整体平移平均动能 E=3nRT/2；'+
   '第5步：样品气体摩尔分数 x=n/(n+0.1000)，须满足 p=xP。';
  checks=[rel(n*f.M,a),rel(partial*V/(R*T),n),rel(ptotal*V/(R*T),n+argon),
   rel(rms*rms*(f.M/1000)/(3*R),T),rel(translational/(1.5*R*T),n),
   rel(moleFraction*ptotal,partial)];
  modelConditions={T_K:T,V_L:10,carrier_mol:.1};
 }else throw Error('Unrecognized chemistry subject '+f.subject);
 if(ans.length!==checks.length||ans.length!==units.length||checks.some(v=>!Number.isFinite(v)||v>1e-8))
  throw Error('Dependency, dimensional or inverse-equation check failed: '+f.id+' #'+i);
 if(q.length<160||method.length<100)throw Error('Incomplete scientific conditions or derivation '+f.id);
 return {a,b,question:q,method,answers:ans,units,checks,modelConditions};
}
export function generate(){
 if(SYSTEMS.length!==32||new Set(SYSTEMS.map(f=>f.id)).size!==32)throw Error('Expected 32 distinct chemical systems');
 const rows=[],ids=new Set(),counts={inorganic:0,analytical:0,organic:0,physical:0};
 for(const f of SYSTEMS){
  for(let i=0;i<CASES_PER_SYSTEM;i++){
   const c=compute(f,i),id=idFor(c.question);
   if(ids.has(id))throw Error('Identical normalized scenario '+f.id);
   ids.add(id);counts[f.subject]++;
   const values=c.answers.map((x,j)=>'('+String(j+1)+') '+precision(x)+' '+c.units[j]).join('；');
   const steps=[
    '步骤一｜读题建模：研究对象 '+f.name+'，原创实验情境 '+f.pathway+'。核对模型限定、分析体积、温度、化学计量和单位，参数 a='+show(c.a)+'，b='+show(c.b)+'。',
    '步骤二｜建立真正依赖的计算链：'+c.method,
    '步骤三｜带单位给出各阶段结果：'+values+'。',
    '步骤四｜检查每一级计算的独立关系：'+c.checks.map((x,j)=>'残差'+(j+1)+'='+precision(x)).join('；')+'。残差只保证题设模型内的代数一致，不证明现实实验误差与化学模型的全部正确性。'
   ];
   rows.push({schema_version:1,id,subject:f.subject,
    topic:f.pathway+'_'+f.id+'_case'+String(i+1).padStart(4,'0'),
    topic_family:f.id,parameter_case:i+1,level:'undergraduate',
    difficulty:'intermediate_to_advanced',
    question_type:'original_coupled_multistage_dependency',
    resource_type:'original_solved_exercise_not_upstream_question',
    independent_method_archetype:f.archetype,
    question:c.question,answer:values+'。',
    explanation:steps.join('\n\n'),solution_steps:steps,
    numeric_answers:c.answers,numeric_answer_units:c.units,units:c.units,
    independent_inverse_residuals:c.checks,independent_inverse_count:c.checks.length,
    model_conditions:c.modelConditions,
    generation_note:'4 distinct chained method archetypes, 32 chemical systems (8 per subject), each has 1024 parameter cases; not 32768 independent knowledge topics.',
    requires_human_chemistry_review:true,human_expert_reviewed:false,
    semantic_duplicate_review_pending:true,quality_status:'awaiting_expert_review',publishable:false,
    source:{repository:REPO,file:'scripts/import-original-coupled-32768.mjs',
     license:'CC0-1.0',
     license_evidence:'https://github.com/'+REPO+'/blob/main/LICENSE-ORIGINAL-QUESTIONS.md',
     content_rights_verified:true,origin:'original_dependent_multistage_science_chain',
     original_exam_question:false,third_party_question_text_copied:false,
     changes:'Original parametric chemical system with sequentially dependent equations; not an upstream exam or published textbook transcription.'}});
  }
 }
 if(rows.length!==32768||ids.size!==32768||
    ['inorganic','analytical','organic','physical'].some(s=>counts[s]!==8192))
  throw Error('Missing 32768 independent stored scenarios over 4 chemical pathways');
 return rows;
}
export function run(){
 const rows=generate(),dir=join(ROOT,'data/candidates');let added=0;
 for(const q of rows){const path=join(dir,q.id+'.json');
  if(existsSync(path)&&JSON.stringify(JSON.parse(readFileSync(path,'utf8')))!==JSON.stringify(q))
   throw Error('Original science source, calculation or rights drift '+q.id);}
 mkdirSync(dir,{recursive:true});
 for(const q of rows){const path=join(dir,q.id+'.json');if(existsSync(path))continue;
  writeFileSync(path,JSON.stringify(q,null,2)+'\n');added++;}
 const report={schema_version:1,generated:32768,
  independent_chained_method_archetypes:4,concrete_distinct_chemical_systems:32,
  parameter_variants_per_system:1024,subject_counts:{inorganic:8192,analytical:8192,organic:8192,physical:8192},
  stored_replayed_count:32768,source_rights_license:'CC0-1.0',
  expert_approved:0,publishable:false,
  numerical_inverse_checks:32768*(5+4+5+6)/4,
  notes:'32768 parameter cases across 32 chemical species/systems, but only FOUR linked-method archetypes. Machine algebra does not establish independent expert science validation.'};
 const path=join(ROOT,'harvest/import_reports/original_coupled_32768.json');
 mkdirSync(dirname(path),{recursive:true});const body=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(path)||readFileSync(path,'utf8')!==body)writeFileSync(path,body);
 console.log('Coupled science '+added+' newly persisted, '+(32768-added)+' existing, 4 dependent archetypes / 32 systems / 163840 equation checks; expert=0');
 return {added,existing:32768-added};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
