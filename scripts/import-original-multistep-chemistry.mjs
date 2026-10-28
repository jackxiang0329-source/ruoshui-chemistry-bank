#!/usr/bin/env node
// CC0 original university chemistry extended solutions; preserve sources and review gate.
// These are authored model cases, NOT reproduced course exams or expert-reviewed problems.
import {createHash} from 'node:crypto';
import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const OWN='jackxiang0329-source/ruoshui-chemistry-bank';
export const CASES=[
 [
  "analytical",
  "carbonate_bicarbonate_dual_endpoint",
  "取仅含 Na₂CO₃ 与 NaHCO₃ 的 50.00 mL 样品，以 0.1000 mol/L HCl 滴定。酚酞终点耗酸 10.00 mL，甲基橙终点累计耗酸 35.00 mL。假定终点对应 CO₃²⁻→HCO₃⁻ 与 HCO₃⁻→H₂CO₃，求样品原始 [CO₃²⁻] 和 [HCO₃⁻]（mol/L），并检验两段耗酸计量。",
  [
   "酚酞终点前每摩尔 CO₃²⁻ 消耗一摩尔 H⁺，故 n(CO₃²⁻)=0.1000×0.01000=0.001000 mol。",
   "甲基橙终点累计酸量 0.1000×0.03500=0.003500 mol，等于 2n(CO₃²⁻)+n(HCO₃⁻)。",
   "所以 n(HCO₃⁻)=0.003500−2×0.001000=0.001500 mol，分别除以 0.05000 L。"
  ],
  "c(CO₃²⁻)",
  0.02,
  "mol/L",
  "c(HCO₃⁻)",
  0.03,
  "mol/L"
 ],
 [
  "analytical",
  "calcium_magnesium_differential_edta",
  "两份各 25.00 mL 的同一试液分别用 0.01000 mol/L EDTA 滴定。测总 Ca²⁺+Mg²⁺ 时耗 EDTA 20.00 mL；选取使 Mg²⁺ 不参与滴定的条件测 Ca²⁺ 时耗 12.00 mL。假定无其他金属、EDTA 与金属配位 1:1 且终点准确。求两种离子的浓度。",
  [
   "总金属物质的量为 0.01000×0.02000=0.0002000 mol；钙为 0.01000×0.01200=0.0001200 mol。",
   "镁的物质的量是两次滴定消耗量之差 0.0000800 mol；该差值表示相同体积两份试液中镁离子的物质的量。",
   "两份试液均为 0.02500 L，因此分别除以 0.02500 L；要避免将两个滴定体积误认为同一份样品上连续相加。"
  ],
  "c(Ca²⁺)",
  0.0048,
  "mol/L",
  "c(Mg²⁺)",
  0.0032,
  "mol/L"
 ],
 [
  "analytical",
  "dual_wavelength_spectrophotometric_inversion",
  "两种互不反应的组分 X、Y 在 1.00 cm 比色皿内吸光度满足 A₅₀₀=10000cX+5000cY、A₆₀₀=2000cX+8000cY，浓度单位 mol/L；观察 A₅₀₀=0.500、A₆₀₀=0.400。已扣除基质空白，且两波长响应可加。求 cX 与 cY，并代回验证两条吸光度等式。",
  [
   "写成矩阵线性方程，系数行列式 D=10000×8000−5000×2000=70000000，非零故有唯一解。",
   "消元得 cX=(0.500×8000−0.400×5000)/D=2000/70000000 mol/L。",
   "同理 cY=(10000×0.400−2000×0.500)/D=3000/70000000 mol/L，代入两个波长均须恢复原始 A。"
  ],
  "c(X)",
  0.00002857142857142857,
  "mol/L",
  "c(Y)",
  0.000042857142857142856,
  "mol/L"
 ],
 [
  "analytical",
  "weak_acid_titration_half_and_equivalence_ph",
  "100.0 mL 0.1000 mol/L 一元弱酸 HA（Ka=1.80×10⁻⁵，25°C）用 0.1000 mol/L NaOH 滴定。理想稀溶液，Kw=1.00×10⁻¹⁴。求半当量点的近似 pH 与化学计量当量点由 A⁻ 水解决定的 pH。允许忽略水的自解离对电荷平衡的微小贡献，但当量点应用二次方程而非将 OH⁻ 浓度误写成 [A⁻]。",
  [
   "半当量点等量 HA 与 A⁻，按 Henderson–Hasselbalch 近似 pH≈pKa=−log₁₀(1.80×10⁻⁵)。",
   "当量点总弱酸物质的量为 0.0100 mol，体积变为 0.2000 L，形式浓度 C=0.0500 mol/L。",
   "当量点 Kb=Kw/Ka=5.5556×10⁻¹⁰，若 [OH⁻]=x，则 x²/(C−x)=Kb，取正根 x=(−Kb+√(Kb²+4KbC))/2。最后 pH=14+log₁₀x。"
  ],
  "半当量点 pH",
  4.7447274948966935,
  "",
  "当量点 pH",
  8.7218258602874,
  ""
 ],
 [
  "analytical",
  "concentration_uncertainty_propagation",
  "某浓度计算式 c=m/(MV) 中的质量 m 与定容体积 V 的相对标准不确定度分别为 0.100% 与 0.200%，相互独立；摩尔质量 M 的不确定度忽略。测得 c=0.05000 mol/L。求 c 的合成相对标准不确定度（用百分数）以及合成绝对标准不确定度（mol/L），不计算扩展不确定度。",
  [
   "从 ln c=ln m−ln V−ln M 得相对方差传播 uᵣ(c)²=uᵣ(m)²+uᵣ(V)²（独立输入）。",
   "uᵣ(c)=√[(0.100%)²+(0.200%)²]；这里必须采用平方和开根，不能直接把两个误差相加。",
   "绝对标准不确定度 u(c)=0.05000 mol/L×uᵣ(c)/100。"
  ],
  "合成相对标准不确定度",
  0.223606797749979,
  "%",
  "合成绝对标准不确定度",
  0.0001118033988749895,
  "mol/L"
 ],
 [
  "analytical",
  "acidic_permanganate_iron_mass_and_molarity",
  "25.00 mL Fe²⁺ 水样在足量酸性介质中用 0.02000 mol/L KMnO₄ 滴定，终点耗 10.00 mL。假定 MnO₄⁻ 最终还原为 Mn²⁺、无氧化还原干扰且五摩尔 Fe²⁺ 对一摩尔 MnO₄⁻。取 M(Fe)=55.845 g/mol。求 Fe²⁺ 浓度（mol/L）和铁元素质量浓度（mg/L）。",
  [
   "酸性条件下 MnO₄⁻+8H⁺+5Fe²⁺→Mn²⁺+4H₂O+5Fe³⁺，计量系数为 1:5。",
   "n(MnO₄⁻)=0.02000×0.01000=0.0002000 mol，n(Fe²⁺)=5×该值=0.001000 mol。",
   "c(Fe²⁺)=0.001000/0.02500 mol/L；铁元素 mg/L 再乘 55.845 g/mol 和 1000 mg/g。"
  ],
  "c(Fe²⁺)",
  0.04,
  "mol/L",
  "铁元素质量浓度",
  2233.8,
  "mg/L"
 ],
 [
  "physical",
  "coupled_equilibria_free_energy",
  "同温 298.15 K 下，反应 A⇌B 的无量纲平衡常数 K₁=3.00，反应 B⇌C 的无量纲平衡常数 K₂=4.00，假设标准状态一致且两反应式系数均为一。求净反应 A⇌C 的平衡常数 K 及其 ΔrG°（kJ/mol），取 R=8.314462618 J/(mol·K)。说明为什么能把 Gibbs 能相加但不能把平衡常数直接相加。",
  [
   "将两条反应式相加时中间体 B 抵消，标准 Gibbs 能可加：ΔrG°=ΔrG₁°+ΔrG₂°。",
   "因 ΔrG°=−RTlnK，得 lnK=lnK₁+lnK₂，即 K=K₁K₂=12.00。",
   "用无量纲 K=12.00 计算 ΔrG°=−RTln12；使用一致标准状态是乘法规则成立的前提，两反应也必须对应同一个温度，不可将不同温度下的平衡常数随意相乘。"
  ],
  "K",
  12,
  "",
  "ΔrG°",
  -6.159976807284153,
  "kJ/mol"
 ],
 [
  "physical",
  "adiabatic_neutralization_calorimetry",
  "两个初始温度均为 25.00°C 的水溶液在绝热杯内完全中和，反应进度 0.1000 mol，摩尔中和反应焓 ΔH=−57.00 kJ/mol。两液合计质量 200.0 g，比热容均可看作 4.180 J/(g·K)，忽略量热计热容、蒸发和溶液体积变化。求升温 ΔT（K）和最终温度（°C）。",
  [
   "化学反应放出的热量幅值 q=0.1000 mol×57000 J/mol=5700 J。",
   "绝热条件下放热全部被 200.0 g 溶液吸收：5700=(200.0×4.180)ΔT，故 ΔT=5700/836。",
   "两份溶液初温相同，末温 T末=25.00°C+ΔT。若量热计吸热或蒸发则结果需要修正。"
  ],
  "升温 ΔT",
  6.818181818181818,
  "K",
  "最终温度",
  31.81818181818182,
  "°C"
 ],
 [
  "physical",
  "hydrogen_oxygen_fuel_cell_work_and_efficiency",
  "在 298.15 K 标准条件下，H₂(g)+1/2O₂(g)→H₂O(l) 的标准反应焓 ΔrH°=−285.83 kJ/mol，标准 Gibbs 能 ΔrG°=−237.13 kJ/mol，每反应 1 mol H₂ 转移 2 mol 电子。取 F=96485.33212 C/mol。求理想可逆电池标准电动势 E°（V）与最大可逆电功相对于燃烧焓放热的比值（百分数），并解释不能把 ΔH 直接代入电动势公式。",
  [
   "最大非膨胀功幅值为 −ΔrG°=237130 J/mol；反应电子数 n=2，故 E°=237130/(2F)。",
   "题目定义的能量转化比为 (−ΔG°)/(−ΔH°)×100%=237.13/285.83×100%。",
   "ΔH° 与 ΔG° 的差值 TΔS° 体现热力学熵项，因此电池理论电动势必须使用 Gibbs 能而非直接使用反应焓。"
  ],
  "标准电动势 E°",
  1.228839631836881,
  "V",
  "定义下的理论电功比例",
  82.96190043032571,
  "%"
 ],
 [
  "physical",
  "magnesium_chloride_mean_activity_coefficient",
  "25°C 下理想完全解离的稀 MgCl₂ 溶液其分析浓度为 0.00100 mol/L，忽略背景电解质。用 I=1/2Σcᵢzᵢ² 与 Debye–Hückel 极限定律 log₁₀γᵢ=−0.509zᵢ²√(I/(1 mol/L))，求 I（mol/L）和按 γ±=(γMg²⁺γCl⁻²)^(1/3) 定义的平均离子活度系数。说明此模型只用于很稀溶液。",
  [
   "MgCl₂ 完全解离时 [Mg²⁺]=0.00100 mol/L、[Cl⁻]=0.00200 mol/L，所以 I=1/2(0.00100×4+0.00200×1)=0.00300 mol/L。",
   "用极限式得 log₁₀γMg²⁺=−0.509×4√0.003，log₁₀γCl⁻=−0.509√0.003。",
   "组合化学计量指数：log₁₀γ±=[log₁₀γMg²⁺+2log₁₀γCl⁻]/3；该式不适合不加限制地外推到高浓度电解质。"
  ],
  "离子强度 I",
  0.003,
  "mol/L",
  "平均离子活度系数 γ±",
  0.8795121505267486,
  ""
 ],
 [
  "physical",
  "binary_phase_diagram_lever_rule",
  "某二元合金在给定温度下平衡共存液相 L 与固相 S，组分 B 的摩尔分数分别为 xL=0.300、xS=0.900，整体成分 x₀=0.500。假设各相质量摩尔差异可忽略且题目所报两相比例按物质的量计；若总量为 150.0 mol，求固相物质的量分率与固相的 mol 数。注意杠杆规则不能在未给定相图的情况下外推共存组成。",
  [
   "设固相摩尔分率 fS，液相 fL=1−fS。组分 B 平衡物料衡算 x₀=fS xS+(1−fS)xL。",
   "代入 0.500=0.900fS+0.300(1−fS)，解 fS=(0.500−0.300)/(0.900−0.300)=1/3。",
   "固相物质的量 nS=150.0×fS=50.0 mol；液相为 100.0 mol。两相成分是假设已由平衡相图提供。"
  ],
  "固相摩尔分率",
  0.3333333333333333,
  "",
  "固相物质的量",
  50,
  "mol"
 ],
 [
  "physical",
  "carnot_engine_work_and_entropy_balance",
  "一个在热源 Th=500.0 K 和冷源 Tc=300.0 K 间运行的理想可逆 Carnot 热机，单循环从热源吸收 Qh=1500 J。求热效率 η 与输出净功 W（J）。再给出向冷源排热量及冷热源总熵变，并解释此模型不能代表真实发动机摩擦和不可逆损失。",
  [
   "可逆热机的 Carnot 热效率 η=1−Tc/Th=1−300/500=0.400。",
   "净输出功 W=ηQh=0.400×1500=600 J；向冷源排出的热量 Qc=Qh−W=900 J。",
   "热源熵变 ΔSh=−Qh/Th=−3 J/K、冷源熵变 ΔSc=Qc/Tc=+3 J/K，两热源净熵变为 0；此为可逆热机上限。"
  ],
  "Carnot 热效率",
  0.4,
  "",
  "净输出功 W",
  600,
  "J"
 ]
];
const CONSTRAINTS={carbonate_bicarbonate_dual_endpoint:(p,s)=> [p*.05-.1000*.01, (2*p+s)*.05-.1000*.035],
calcium_magnesium_differential_edta:(p,s)=>[p*.025-.01000*.012,(p+s)*.025-.01000*.020],
dual_wavelength_spectrophotometric_inversion:(p,s)=>[10000*p+5000*s-.500,2000*p+8000*s-.400],
weak_acid_titration_half_and_equivalence_ph:(p,s)=>[10**(-p)/1.8e-5-1, ((10**(s-14))**2/(.05-10**(s-14)))/(1e-14/1.8e-5)-1],
concentration_uncertainty_propagation:(p,s)=>[p*p-.1*.1-.2*.2,s-.05*p/100],
acidic_permanganate_iron_mass_and_molarity:(p,s)=>[p*.025-5*.02*.01,s-p*55.845*1000],
coupled_equilibria_free_energy:(p,s)=>[p-3*4,s*1000+8.314462618*298.15*Math.log(p)],
adiabatic_neutralization_calorimetry:(p,s)=>[200*4.18*p-5700,s-(25+p)],
hydrogen_oxygen_fuel_cell_work_and_efficiency:(p,s)=>[p*2*96485.33212-237130,s*285.83/100-237.13],
magnesium_chloride_mean_activity_coefficient:(p,s)=>[2*p-(.001*4+.002),Math.log10(s)+.509*2*Math.sqrt(p)],
binary_phase_diagram_lever_rule:(p,s)=>[.9*p+.3*(1-p)-.5,s-150*p],
carnot_engine_work_and_entropy_balance:(p,s)=>[p-(1-300/500),s-1500*p]};
export const qid=q=>createHash('sha256').update(q.normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase()).digest('hex');
export function validateBalances(topic,p,s){
 const fn=CONSTRAINTS[topic];
 if(!fn||!Number.isFinite(p)||!Number.isFinite(s))throw Error('Uncheckable model balances '+topic);
 const residuals=fn(p,s);
 if(residuals.length!==2||residuals.some(x=>!Number.isFinite(x)||Math.abs(x)>1e-7))
  throw Error('Independent balance verification failed: '+topic+' '+JSON.stringify(residuals));
 return true;
}
export function generate(){
 const ids=new Set(),topics=new Set(),rows=[];
 for(const [subject,topic,question,steps,firstName,first,firstUnit,secondName,second,secondUnit] of CASES){
  if(!['analytical','physical'].includes(subject)||question.length<80||
     !Array.isArray(steps)||steps.length!==3||steps.some(s=>s.length<35))
   throw Error('Incomplete multistep chemical derivation '+topic);
  validateBalances(topic,first,second);
  const id=qid(question);
  if(ids.has(id)||topics.has(topic))throw Error('Duplicated multistep chemistry question '+topic);
  ids.add(id);topics.add(topic);
  const result=(v,u)=>Number(v).toPrecision(6)+(u?' '+u:'');
  rows.push({schema_version:1,id,subject,topic,level:'undergraduate',
   difficulty:'intermediate_to_advanced',
   question_type:'original_multistep_stoichiometry_and_thermodynamics',
   resource_type:'original_solved_exercise_not_upstream_question',
   question,answer:firstName+' = '+result(first,firstUnit)+'；'+secondName+' = '+result(second,secondUnit)+'。',
   explanation:steps.map((s,i)=>(i+1)+'．'+s).join('\n'),
   solution_steps:steps,
   numeric_answers:[first,second],numeric_answer_units:[firstUnit,secondUnit],
   constraint_equations_independently_checked:true,
   mathematical_balance_checks_only_not_chemistry_peer_review:true,
   requires_human_chemistry_review:true,semantic_duplicate_review_pending:true,
   quality_status:'awaiting_expert_review',publishable:false,
   source:{repository:OWN,file:'scripts/import-original-multistep-chemistry.mjs',
    license:'CC0-1.0',
    license_evidence:'https://github.com/'+OWN+'/blob/main/LICENSE-ORIGINAL-QUESTIONS.md',
    content_rights_verified:true,origin:'original_independently_authored_multistep_cases',
    original_exam_question:false,third_party_question_text_copied:false,
    changes:'Independently authored Chinese undergraduate multistep exercises and worked derivations; no third-party assessment text copied.'}});
 }
 if(rows.length!==12||rows.filter(x=>x.subject==='analytical').length!==6||
    rows.filter(x=>x.subject==='physical').length!==6)
  throw Error('Incomplete 12-case analytical/physical corpus');
 return rows;
}
export function run(){
 const out=generate(),dir=join(ROOT,'data/candidates');let added=0;
 for(const x of out){const p=join(dir,x.id+'.json');if(!existsSync(p))continue;
  if(JSON.stringify(JSON.parse(readFileSync(p,'utf8')))!==JSON.stringify(x))
   throw Error('Source or rights drift in previously stored case '+x.id);}
 mkdirSync(dir,{recursive:true});
 for(const x of out){const p=join(dir,x.id+'.json');if(existsSync(p))continue;
  writeFileSync(p,JSON.stringify(x,null,2)+'\n');added++;}
 const report={schema_version:1,generated:12,distinct_multistep_topics:12,
  detailed_solution_steps:36,by_subject:{analytical:6,physical:6},
  inverse_mass_charge_energy_balance_checks:24,
  stored_candidate_full_json_comparisons:12,source_license:'CC0-1.0',
  copied_exam_questions:0,expert_approved:0,publishable:false,
  caveat:'Models satisfy separate algebraic balance constraints; physical conditions, completeness, question overlap and science require human expert review.'};
 const path=join(ROOT,'harvest/import_reports/original_multistep_chemistry.json');
 mkdirSync(dirname(path),{recursive:true});
 const body=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(path)||readFileSync(path,'utf8')!==body)writeFileSync(path,body);
 console.log('Original 12 multistep chemistry cases: added='+added+' existing='+(12-added)+' checked=24 publication=blocked');
 return {added,existing:12-added};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
