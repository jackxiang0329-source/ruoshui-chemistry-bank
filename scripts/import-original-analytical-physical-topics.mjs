#!/usr/bin/env node
// Twenty original analytical/physical chemistry solved cases (no upstream exam text).
// Stored output and rights flags must match deterministic authored source exactly.
import {createHash} from 'node:crypto';
import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const OWN='jackxiang0329-source/ruoshui-chemistry-bank';
export const CASES=[["analytical","internal_standard_response_factor","气相色谱定量使用内标法。在相同进样中分析物峰面积 Aₐ=600、内标面积 Aᵢ=400，校正系数 F 定义为 (Aₐ/Aᵢ)/(cₐ/cᵢ)=1.20，内标浓度 cᵢ=0.0500 mol/L。假定峰响应线性且无共洗脱，求分析物浓度。","分析物浓度","mol/L","由 F=(Aₐ/Aᵢ)/(cₐ/cᵢ) 得 cₐ=(Aₐ/Aᵢ)cᵢ/F=(600/400)×0.0500/1.20。内标法仍需确认仪器响应处于线性范围，并不能单凭峰面积排除共洗脱误差。",(600/400)*.05/1.2,(x)=>(x/.05)*(400/600)*1.2-1],
["analytical","stern_volmer_quenching_constant","在温度固定的荧光猝灭实验中，未加猝灭剂时荧光强度 F₀=1000，加入浓度 [Q]=0.00500 mol/L 的猝灭剂后 F=800。若仅用 Stern–Volmer 形式 F₀/F=1+KSV[Q] 拟合该点，求 KSV，并说明为何单一数据点无法判别静态与动态猝灭。","Stern–Volmer 系数 KSV","L/mol","F₀/F=1000/800=1.25，因此 KSV=(1.25−1)/0.00500。静态和动态猝灭均可能导致稳态强度下降，通常还需要寿命测量等证据鉴别机理。",(1000/800-1)/.005,(x)=>1+x*.005-1000/800],
["analytical","electrogravimetric_copper_assay","将 100.0 mL 未知 Cu²⁺ 水溶液中的铜完全电沉积到已称量电极上，电极质量增加 0.1271 g。假设沉积物全为 Cu 且回收率 100%，取 M(Cu)=63.546 g/mol，求原试液的 Cu²⁺ 物质的量浓度。","铜离子浓度","mol/L","n(Cu)=0.1271/63.546 mol，溶液体积为 0.1000 L，故 c=n/V。若有其他金属共同析出、电极干燥不足或沉积不完全，重量换算均会产生偏差。",.1271/63.546/.1000,(x)=>x*.1000*63.546/.1271-1],
["analytical","sulfate_baso4_gravimetry","取质量为 0.2000 g 的固体试样，将其中 SO₄²⁻ 完全转化为经恒重的纯 BaSO₄ 沉淀 0.2334 g。取 M(SO₄²⁻)=96.06 g/mol、M(BaSO₄)=233.39 g/mol，假设其他离子不形成该沉淀，求试样中硫酸根的质量百分数。","硫酸根质量分数","%","每摩尔 BaSO₄ 对应一摩尔 SO₄²⁻，m(SO₄²⁻)=0.2334×96.06/233.39 g，再除以 0.2000 g 并乘 100%。共沉淀和洗涤损失均会破坏该换算前提。",100*.2334*96.06/233.39/.2000,(x)=>(x/100)*.2*(233.39/96.06)/.2334-1],
["analytical","two_step_partition_extraction_efficiency","某中性溶质在互不相溶的有机相和水相间的分配系数 D=c有机/c水=4.00。将 100 mL 水样依次用两份新的 25.0 mL 有机溶剂萃取，每次充分平衡并彻底分层，忽略体积变化。求两次萃取后溶质留在水相中的百分数，并与一次使用 50.0 mL 的效果对比。","两次萃取后水相残留","%","单次萃取残留份额 q=V水/(V水+D V有机)=100/(100+4×25)=1/2，两次独立萃取 q²=1/4；一次用 50.0 mL 时残留 100/(100+4×50)=1/3，可见分次萃取更充分。",100*(100/(100+4*25))**2,(x)=>(x/100)*((100+4*25)/100)**2-1],
["analytical","carbonate_bicarbonate_distribution_pH","在忽略 H₂CO₃ 和其他碳酸形态、仅考虑 HCO₃⁻ 与 CO₃²⁻ 的理想稀溶液中，已知第二级酸解离 pKa₂=10.33、pH=9.33。求 CO₃²⁻ 占这两种形态总量的百分比。","碳酸根两态分布份额","%","由 Henderson–Hasselbalch 关系 [CO₃²⁻]/[HCO₃⁻]=10^(pH−pKa₂)=0.1，故 CO₃²⁻ 占比为 0.1/(1+0.1)×100%。若纳入 H₂CO₃、活度修正或气相交换，完整分布会变化。",100*.1/(1+.1),(x)=>((x/100)/(1-x/100))/.1-1],
["analytical","edta_conditional_complex_fraction","某金属 M 与 Y⁴⁻ 形成 1:1 EDTA 络合物，固有 Kf=1.00×10¹⁰。在指定 pH 下游离（未络合）EDTA 诸形态中 Y⁴⁻ 的摩尔分数 α=0.0100；游离 EDTA 总浓度为 1.00×10⁻⁶ mol/L。忽略其他金属络合及水解，求金属在 M 与 MY 两种形态中的络合百分比。","金属的 EDTA 络合份额","%","条件形成常数 Kf′=αKf=1.00×10⁸，络合比 [MY]/[M]=Kf′[Y]游离总=100，所以络合比例为 100/(1+100)×100%。这里并未假设总 EDTA 浓度等于游离浓度。",100*100/(1+100),(x)=>((x/100)/(1-x/100))/100-1],
["analytical","faradaic_iron_coulometric_assay","用恒电流库仑法将 100.0 mL Fe²⁺ 试液中的 Fe²⁺ 全部氧化成 Fe³⁺，电流为 0.500 A，通电 600 s。假设电流效率 100% 且每 Fe²⁺ 放出 1 个电子，取 F=96485.33212 C/mol，求原试液 Fe²⁺ 浓度。","Fe²⁺ 浓度","mol/L","通过电量 Q=It=300 C，一摩尔 Fe²⁺ 对应一摩尔电子，故 n=Q/F，再除以 0.1000 L。氧气析出、其它氧化还原物质等副反应会降低对 Fe²⁺ 的电流效率。",(.5*600)/96485.33212/.1000,(x)=>x*.1*96485.33212/300-1],
["analytical","chromatography_baseline_resolution","色谱两相邻峰的保留时间分别为 tR1=6.10 min 和 tR2=7.40 min，按基线法测得峰宽分别为 w1=0.80 min 与 w2=0.80 min。按 Rs=2(tR2−tR1)/(w1+w2) 计算分离度，并解释 Rs 与色谱保留因子不是同一个量。","基线分离度 Rs","无量纲","Rs=2(7.40−6.10)/(0.80+0.80)。它将峰中心距离与峰宽同时纳入，不能仅凭保留时间差评价分离；通常 Rs≈1.5 被用作经验基线分离尺度，但不保证任何峰形都理想。",2*(7.4-6.1)/(.8+.8),(x)=>x*(.8+.8)/(2*(7.4-6.1))-1],
["analytical","standard_addition_constant_final_volume","某样品采用等终体积标准加入法，横坐标为最终测量液中加入的标准浓度 x（mg/L），x=0、2.00、4.00 时吸光度分别为 0.240、0.400、0.560。假定样品贡献与加入标准响应系数一致、基质恒定且空白已校正，求样品在最终测量体系中的等效浓度（不要误认它必然等于稀释前原样浓度）。","最终测量体系中的样品等效浓度","mg/L","以 A=m(x+cx) 拟合，斜率 m=(0.400−0.240)/2.00=0.0800 A/(mg/L)，横轴负截距 x₀=−A(0)/m=−3.00 mg/L，故 cx=3.00 mg/L。若原样经过预稀释，应另乘相应稀释因子。",.240/((.400-.240)/2),(x)=>x*(.400-.240)/(2*.240)-1],
["physical","integrated_clausius_clapeyron","某假想纯液体在 T₁=300.0 K 时的饱和蒸气压 P₁=20.0 kPa。假设蒸气近似理想气体、液体摩尔体积可忽略、汽化焓 ΔHvap=40.0 kJ/mol 在 300—330 K 内不变，求 T₂=330.0 K 时的饱和蒸气压。","升温后的饱和蒸气压","kPa","积分 Clausius–Clapeyron 方程为 ln(P₂/P₁)=−ΔHvap/R(1/T₂−1/T₁)，代入 ΔHvap=40000 J/mol。该近似不能无条件外推至临界点附近。",20*Math.exp(-40000/8.31446261815324*(1/330-1/300)),(x)=>Math.log(x/20)+40000/8.31446261815324*(1/330-1/300)],
["physical","vant_hoff_temperature_equilibrium_shift","某反应在 T₁=300.0 K 的无量纲平衡常数 K₁=10.0，标准反应焓 ΔrH°=+20.0 kJ/mol，在 300—330 K 范围内可近似不变。按积分 van't Hoff 方程求 T₂=330.0 K 的 K₂，并判断升温对吸热反应平衡的影响。","升温后的平衡常数 K₂","无量纲","ln(K₂/K₁)=−ΔrH°/R(1/T₂−1/T₁)，吸热时 ΔrH°>0，T₂>T₁ 导致 K₂>K₁。这里的 K 为按相同标准状态定义的无量纲活度平衡常数。",10*Math.exp(-20000/8.31446261815324*(1/330-1/300)),(x)=>Math.log(x/10)+20000/8.31446261815324*(1/330-1/300)],
["physical","debye_huckel_limit_divalent_activity","25°C 极稀水溶液的离子强度 I=0.00100 mol/L，某二价离子 z=+2。采用 Debye–Hückel 极限定律 log₁₀γ=−0.509z²√(I/1 mol·L⁻¹)，求该离子活度系数 γ。说明浓溶液不应直接套用极限式。","二价离子活度系数 γ","无量纲","代入 z²=4，log₁₀γ=−0.509×4×√0.00100。该式把离子强度按给定标准浓度无量纲化，是稀溶液近似，无法可靠描述高盐度及离子尺寸效应。",10**(-.509*4*Math.sqrt(.001)),(x)=>Math.log10(x)+.509*4*Math.sqrt(.001)],
["physical","consecutive_first_order_intermediate","恒容体系中发生连续不可逆一级反应 A→B→C，k₁=0.100 s⁻¹、k₂=0.200 s⁻¹，初始仅有 A，且 B、C 初始为零。求 t=10.0 s 时中间体 B 的浓度与 A 初浓度之比。","10 秒时中间体 B 的相对浓度","无量纲","连续一级反应中 [B]/[A]₀=k₁/(k₂−k₁)(e^(−k₁t)−e^(−k₂t))，此处 k₁/(k₂−k₁)=1，故等于 e⁻¹−e⁻²。此结果不是最终产物选择性。",Math.exp(-1)-Math.exp(-2),(x)=>x/(Math.exp(-1)-Math.exp(-2))-1],
["physical","integrated_second_order_consumption","一反应按已定义的速率律 −d[A]/dt=k[A]² 进行，k=0.200 L/(mol·min)，起始 [A]₀=0.500 mol/L。若 k 恒定且无逆反应，求 10.0 min 后的 [A] 并说明为何半衰期依赖初始浓度。","10 分钟后的反应物浓度","mol/L","二级积分式 1/[A]−1/[A]₀=kt，得 [A]=1/(1/0.500+0.200×10)。二级反应 t₁/₂=1/(k[A]₀)，与一级反应半衰期不同。",1/(1/.5+.2*10),(x)=>1/x-(1/.5+.2*10)],
["physical","sucrose_osmotic_pressure","298.15 K 时 0.100 mol/L 蔗糖理想稀水溶液可看作不解离、半透膜仅透过水。以 R=0.082057 L·atm/(mol·K) 计算渗透压 π，并说明为什么不能把蔗糖的 van't Hoff 因子当作 2。","理想渗透压 π","atm","蔗糖作为非电解质，理想 van't Hoff 因子 i≈1，π=i cRT=0.100×0.082057×298.15。浓溶液与膜透过性问题需用更完整模型。",.1*.082057*298.15,(x)=>x/(.1*.082057*298.15)-1],
["physical","ideal_gas_isothermal_expansion_entropy","一摩尔理想气体在同一温度下可逆等温膨胀，末体积恰好为初体积的三倍。假设无混合或化学反应，求气体系统的熵变 ΔS，取 R=8.31446261815324 J/(mol·K)，并说明等温不代表系统熵不变。","理想气体熵变 ΔS","J/K","可逆等温理想气体 ΔS=nR ln(V₂/V₁)=Rln3，正值说明体系熵上升。可逆过程中热量与功相互转换，温度保持恒定并不要求熵守恒。",8.31446261815324*Math.log(3),(x)=>Math.exp(x/8.31446261815324)/3-1],
["physical","freezing_point_depression_effective_factor","水的凝固点降低常数 Kf=1.86 K·kg/mol，溶液含 NaCl 的质量摩尔浓度 b=0.100 mol/kg，实验条件给定有效 van't Hoff 因子 i=1.90。忽略非理想温度变化，求凝固点降低 ΔTf，并估计相对于纯水 0.00°C 的凝固温度。","凝固点降低 ΔTf","K","依数性近似 ΔTf=iKfb=1.90×1.86×0.100=0.3534 K，因此溶液凝固点约为 −0.3534°C。i=1.90 是题设有效因子，不能机械取 NaCl 完全理想解离值 2。",1.86*.1*1.9,(x)=>x/(1.86*.1*1.9)-1],
["physical","maxwell_entropy_volume_ideal_gas","理想气体 n=2.000 mol，体积 V=0.0500 m³，处于某给定温度。利用 Helmholtz 自由能的 Maxwell 关系 (∂S/∂V)T=(∂P/∂T)V 与 PV=nRT，计算 (∂S/∂V)T，取 R=8.31446261815324 J/(mol·K)，写出 SI 单位。","定温熵对体积偏导数","J/(K·m³)","Maxwell 关系来自 dA=−S dT−P dV；理想气体 P=nRT/V，所以 (∂P/∂T)V=nR/V，等于 2×8.31446261815324/0.0500。该偏导是强度条件固定下的平衡态导数，而不是任意非平衡路径。",2*8.31446261815324/.05,(x)=>x*.05/(2*8.31446261815324)-1],
["physical","single_photon_planck_energy","一束单色光在真空中的波长 λ=500.0 nm，取 h=6.62607015×10⁻³⁴ J·s、c=299792458 m/s。求单个光子的能量 E，并说明波长增加时单光子能量趋势。","500 nm 单光子能量 E","J","由 E=hc/λ，换算 λ=500.0×10⁻⁹ m；能量与波长成反比，波长增大则能量减小。此处使用的 c 是真空光速，未涉及介质中的波长变化。",6.62607015e-34*299792458/(500e-9),(x)=>x*(500e-9)/(6.62607015e-34*299792458)-1]];
export const digest=q=>createHash('sha256').update(q.normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase()).digest('hex');
export function validateNumeric(topic,value){
 const entry=CASES.find(q=>q[1]===topic);
 if(!entry||!Number.isFinite(value)||value<=0||!Number.isFinite(entry[7](value))||
    Math.abs(entry[7](value))>1e-9)throw Error('Chemistry inverse check failed: '+topic);
 return true;
}
export function generate(){
 const ids=new Set(),topics=new Set(),out=[];
 for(const [subject,topic,question,prefix,unit,explanation,numeric,inverse] of CASES){
  if(!['analytical','physical'].includes(subject)||question.length<50||
     prefix.length<4||explanation.length<45||!Number.isFinite(numeric))
     throw Error('Malformed original chemistry case '+topic);
  validateNumeric(topic,numeric);
  const id=digest(question);
  if(ids.has(id)||topics.has(topic))throw Error('Repeat topic or normalized question '+topic);
  ids.add(id);topics.add(topic);
  const formatted=Number(numeric).toPrecision(5);
  out.push({schema_version:1,id,subject,topic,level:'undergraduate',
   difficulty:'intermediate_to_advanced',question_type:'original_applied_calculation_with_conditions',
   resource_type:'original_solved_exercise_not_upstream_question',
   question,answer:prefix+' = '+formatted+' '+unit+'。',explanation,
   numeric_answers:[numeric],units:unit,numerical_inverse_crosschecked:true,
   mathematical_identity_check_only_not_science_peer_review:true,
   semantic_duplicate_review_pending:true,quality_status:'awaiting_expert_review',publishable:false,
   source:{repository:OWN,file:'scripts/import-original-analytical-physical-topics.mjs',
    license:'CC0-1.0',license_evidence:'https://github.com/'+OWN+'/blob/main/LICENSE-ORIGINAL-QUESTIONS.md',
    content_rights_verified:true,origin:'independently_authored_original_examples',
    original_exam_question:false,third_party_question_text_copied:false,
    changes:'Independently authored applied quantitative chemistry case and explanation; no external exam question copied.'}});
 }
 if(out.length!==20||out.filter(q=>q.subject==='analytical').length!==10||
    out.filter(q=>q.subject==='physical').length!==10)
    throw Error('Expected ten complete cases in each chemistry subdiscipline');
 return out;
}
export function run(){
 const out=generate(),dir=join(ROOT,'data/candidates');let added=0;
 for(const q of out){
  const p=join(dir,q.id+'.json');if(!existsSync(p))continue;
  if(JSON.stringify(JSON.parse(readFileSync(p,'utf8')))!==JSON.stringify(q))
   throw Error('Stored candidate changed including source, answer or review gate: '+q.id);
 }
 mkdirSync(dir,{recursive:true});
 for(const q of out){const p=join(dir,q.id+'.json');if(existsSync(p))continue;
  writeFileSync(p,JSON.stringify(q,null,2)+'\n');added++;}
 const report={schema_version:1,generated:20,topic_families:20,
  by_subject:{analytical:10,physical:10},numeric_inverse_verified:20,
  stored_source_verified:20,original_exam_questions:0,third_party_question_text_copied:0,
  source_license:'CC0-1.0',expert_approved:0,publishable:false,
  caveat:'Inverse checks establish mathematical consistency with authored parameters only. Chemistry expert review and semantic duplicate review remain pending.'};
 const dest=join(ROOT,'harvest/import_reports/original_analytical_physical_topics.json');
 mkdirSync(dirname(dest),{recursive:true});
 const body=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(dest)||readFileSync(dest,'utf8')!==body)writeFileSync(dest,body);
 console.log('Original 20 analytical/physical methods: added='+added+' existing='+(20-added)+' approved=0');
 return {added,existing:20-added};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
