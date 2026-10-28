#!/usr/bin/env node
// 48 original teaching families × 24 numeric cases: no sourced exam text.
// Mechanical conservation checks, NOT scientific peer review.
import {createHash} from 'node:crypto';
import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const OWN='jackxiang0329-source/ruoshui-chemistry-bank';
const err=(x,y)=>Math.abs(x-y)/Math.max(Math.abs(y),1e-27);
export const FAMILIES=[{subject:"inorganic",family:"octa_d3_lfse",unit:"kJ/mol",a:80,da:1.2,b:0,db:0,question:"八面体高自旋 d³ 离子的晶场分裂 Δo={a} kJ/mol，电子组态 t₂g³，忽略配对能。求相对重心的晶场稳定化能 LFSE（kJ/mol）。",explanation:"每个 t₂g 电子贡献 −0.4Δo，三个电子共贡献 −1.2Δo；它不是实际化学键的全部能量。",calc:(a,b)=>-1.2*a,inverse:(a,b,x)=>err(-x/1.2,a)},
{subject:"inorganic",family:"octa_d2_lfse",unit:"kJ/mol",a:60,da:1.3,b:0,db:0,question:"八面体 d² 金属离子有两个电子位于 t₂g，晶场分裂 Δo={a} kJ/mol。忽略配对和自旋轨道项，求其晶场稳定化能 LFSE。",explanation:"t₂g 每个电子位于相对重心 −0.4Δo，故两个电子的 LFSE=−0.8Δo。",calc:(a,b)=>-.8*a,inverse:(a,b,x)=>err(-x/.8,a)},
{subject:"inorganic",family:"tetra_octa_field_ratio",unit:"kJ/mol",a:78,da:1.4,b:0,db:0,question:"同一金属和近似同样配体条件下，题目假设四面体晶场分裂 Δt=(4/9)Δo。已知 Δo={a} kJ/mol，求 Δt 的理想近似值（kJ/mol）。",explanation:"四面体与八面体分裂的 4/9 比例只是题设经验近似，直接代入 Δt=(4/9)Δo；配位场能量也受键长、结构和配体强度影响。",calc:(a,b)=>4*a/9,inverse:(a,b,x)=>err(9*x/4,a)},
{subject:"inorganic",family:"agcl_exact_common_solubility",unit:"mol/L",a:0.008,da:0.0006,b:0,db:0,question:"理想 AgCl 饱和水溶液的 Ksp=1.80×10⁻¹⁰，已有 NaCl 背景浓度为 {a} mol/L。忽略络合与活度，求保留溶解贡献 s 后的 AgCl 精确摩尔溶解度。",explanation:"电荷与物料平衡给出 [Ag⁺]=s、[Cl⁻]=c+s，所以 s(c+s)=Ksp；取二次方程正根并使用有理化表达。",calc:(a,b)=>3.6e-10/(Math.sqrt(a*a+7.2e-10)+a),inverse:(a,b,x)=>err(x*(a+x),1.8e-10)},
{subject:"inorganic",family:"born_haber_lattice_heat",unit:"kJ/mol",a:410,da:2,b:330,db:1.4,question:"假想离子晶体 MX 的标准生成焓为 −{a} kJ/mol，升华、第一电离与非金属半键解离焓依次为 105、500、120 kJ/mol，电子亲合步骤焓 −{b} kJ/mol。求晶格形成焓。",explanation:"Hess 过程有 −a=105+500+120−b+Uform，所以 Uform=−a−725+b；形成焓采用负值约定。",calc:(a,b)=>-a-725+b,inverse:(a,b,x)=>err(x+a+725,b)},
{subject:"inorganic",family:"bcc_lattice_mass_density",unit:"g/cm³",a:52,da:1.4,b:290,db:3,question:"某单质金属为体心立方 BCC，每晶胞含 2 原子，M={a} g/mol，晶胞边长 {b} pm。取 NA=6.02214076×10²³ mol⁻¹，求理论密度 g/cm³。",explanation:"晶胞质量为 2M/NA；晶胞体积由 a(pm)×10⁻¹⁰ cm/pm 再立方，密度为二者之比。",calc:(a,b)=>2*a/(6.02214076e23*(b*1e-10)**3),inverse:(a,b,x)=>err(x*6.02214076e23*(b*1e-10)**3/2,a)},
{subject:"inorganic",family:"vegard_solid_solution_a",unit:"Å",a:3.5,da:0.011,b:4,db:0.013,question:"某理想 A₁₋ₓBₓ 固溶体符合 Vegard 定律，端元晶格常数分别为 {a} Å 和 {b} Å，且 x=0.35。忽略应变及有序化，求固溶体晶格常数。",explanation:"题给线性固溶模型 a=(1−x)aA+xaB=0.65aA+0.35aB；真实体系不一定严格线性。",calc:(a,b)=>.65*a+.35*b,inverse:(a,b,x)=>err((x-.65*a)/.35,b)},
{subject:"inorganic",family:"solution_electroneutrality_na",unit:"mol/L",a:0.01,da:0.0004,b:0.05,db:0.0013,question:"稀水溶液仅含 Ca²⁺、Na⁺、Cl⁻，其中 [Ca²⁺]={a} mol/L、[Cl⁻]={b} mol/L，全部离子电离完全。利用电中性确定钠离子浓度。",explanation:"根据 2[Ca²⁺]+[Na⁺]=[Cl⁻]，钠离子浓度为 b−2a；题给范围保证此值非负。",calc:(a,b)=>b-2*a,inverse:(a,b,x)=>err(x+2*a,b)},
{subject:"inorganic",family:"aluminium_electrolysis_faraday",unit:"kC",a:0.2,da:0.015,b:0,db:0,question:"理想铝电解只发生 Al³⁺+3e⁻→Al，欲沉积金属铝 {a} mol，电流效率取 100%。F=96485.33212 C/mol，求所需电量 kC。",explanation:"每摩尔 Al 消耗三摩尔电子，Q=3nF，将 C 除以 1000 转 kC；不包括实际效率损失。",calc:(a,b)=>3*a*96485.33212/1000,inverse:(a,b,x)=>err(x*1000/(3*96485.33212),a)},
{subject:"inorganic",family:"iron_fe2o3_mass_gain",unit:"g",a:5,da:0.35,b:0,db:0,question:"纯 Fe 质量 {a} g 在供氧充分时完全氧化为纯 Fe₂O₃。取 M(Fe)=55.845 g/mol，M(Fe₂O₃)=159.69 g/mol，求氧化物最终理论质量。",explanation:"2 mol Fe 生成 1 mol Fe₂O₃，产物质量为 mFe×159.69/(2×55.845)；不含 FeO 等混合产物。",calc:(a,b)=>a*159.69/(2*55.845),inverse:(a,b,x)=>err(x*(2*55.845)/159.69,a)},
{subject:"inorganic",family:"aliovalent_dopant_vacancy_fraction",unit:"位点分数",a:0.02,da:0.0015,b:0,db:0,question:"某二价氧化物 MO 中三价离子 M'³⁺ 占原金属位点分数 {a}，只通过含两个负有效电荷的金属位点空位补偿。求所需空位位点分数。",explanation:"每个三价替位比正常二价位点多一个有效正电荷，一个金属空位抵消两个正有效电荷，所以 fvac=a/2。",calc:(a,b)=>a/2,inverse:(a,b,x)=>err(2*x,a)},
{subject:"inorganic",family:"oxide_x2o3_oxygen_percentage",unit:"%",a:40,da:1.2,b:0,db:0,question:"某纯假想氧化物 X₂O₃ 中元素 X 的原子量为 {a} g/mol，氧原子量取 16.00 g/mol。忽略缺氧、结晶水，计算氧元素理论质量百分数。",explanation:"每摩尔 X₂O₃ 含 48 g 氧、总质量为 2M_X+48，所以氧百分数=4800/(2M_X+48)。",calc:(a,b)=>4800/(2*a+48),inverse:(a,b,x)=>err(4800/x-48,2*a)},
{subject:"analytical",family:"lod_three_sigma_slope",unit:"mg/L",a:0.004,da:0.00013,b:0.08,db:0.001,question:"某线性分析的空白响应标准差 σ={a} A，校准斜率 m={b} A/(mg/L)。若检出限定义为 LOD=3σ/m，求 LOD（mg/L），不将其当作通用法规阈值。",explanation:"按给定方法定义 LOD=3σ/m；单位为 A/[A/(mg/L)]=mg/L。",calc:(a,b)=>3*a/b,inverse:(a,b,x)=>err(x*b/3,a)},
{subject:"analytical",family:"loq_ten_sigma_slope",unit:"mg/L",a:0.003,da:0.0001,b:0.06,db:0.0015,question:"某仪器定量方法的空白标准差 σ={a} A，响应斜率 m={b} A/(mg/L)。采用题设定量限 LOQ=10σ/m，计算 LOQ，区分定量限与检出限。",explanation:"按题设系数 10 而非 3 计算 LOQ=10σ/m；需保持响应与浓度单位一致。",calc:(a,b)=>10*a/b,inverse:(a,b,x)=>err(x*b/10,a)},
{subject:"analytical",family:"beer_lambert_epsilon",unit:"mol/L",a:0.4,da:0.009,b:8500,db:40,question:"单组分稀溶液在光程 1.00 cm 的比色皿中吸光度 A={a}，摩尔吸光系数 ε={b} L/(mol·cm)。已做空白校正且满足 Beer–Lambert 定律，求分析物浓度。",explanation:"A=εlc 且 l=1.00 cm，故 c=A/ε；若响应失去线性则需要另建标定模型。",calc:(a,b)=>a/b,inverse:(a,b,x)=>err(x*b,a)},
{subject:"analytical",family:"constant_volume_standard_addition",unit:"mg/L",a:0.25,da:0.008,b:0.1,db:0.001,question:"某恒定最终体积标准加入分析：未加标信号 A0={a}；增加分析物等效浓度 {b} mg/L 后，仪器信号恰好增加 0.150，假设响应斜率不变。求未加标的测量液等效浓度。",explanation:"由 ΔA=kΔc 得 k=.150/b，因此初始浓度 c0=A0/k；若原液另经稀释，需要单独修正。",calc:(a,b)=>a*b/.15,inverse:(a,b,x)=>err(x*.15/b,a)},
{subject:"analytical",family:"chromatographic_retention_factor",unit:"无量纲",a:7,da:0.12,b:1,db:0.015,question:"某色谱峰的保留时间 tR={a} min，死时间 t0={b} min，且 tR>t0>0。按 k'=(tR−t0)/t0，求保留因子，不要把它与保留时间混淆。",explanation:"保留因子 k'=tR/t0−1，属于无量纲保留参数；时间单位必须一致。",calc:(a,b)=>(a-b)/b,inverse:(a,b,x)=>err((x+1)*b,a)},
{subject:"analytical",family:"chromatographic_selectivity",unit:"无量纲",a:3,da:0.12,b:5,db:0.17,question:"在同一色谱柱中两个峰的保留因子分别为 k1'={a}、k2'={b}（k2'>k1'>0）。求选择性 α=k2'/k1'；本题不提供峰宽和柱效。",explanation:"保留因子之比 α=k2'/k1'；只有给出柱效、峰宽及保留程度信息，才能进一步分析两个色谱峰的分辨率。",calc:(a,b)=>b/a,inverse:(a,b,x)=>err(x*a,b)},
{subject:"analytical",family:"edta_metal_mmol",unit:"mmol",a:0.012,da:0.0003,b:12,db:0.2,question:"用 {a} mol/L 的 EDTA 在适当缓冲条件下滴定样品金属 M²⁺，耗 EDTA {b} mL，假设一比一配位完全、无其它金属干扰。求样品中金属物质的量 mmol。",explanation:"一摩尔 M²⁺ 与一摩尔 EDTA 配位，n(M)=cEDTA VEDTA；单位 mol/L×mL 对应 mmol。",calc:(a,b)=>a*b,inverse:(a,b,x)=>err(x/a,b)},
{subject:"analytical",family:"cu_deposition_charge_to_mass",unit:"g",a:75,da:2.3,b:0,db:0,question:"某电解液只发生 Cu²⁺+2e⁻→Cu，电流效率 100%，通电量 Q={a} C，铜摩尔质量 63.546 g/mol，F=96485.33212 C/mol。求沉积铜理论质量。",explanation:"每摩尔铜需要 2F 电量，m=QM(Cu)/(2F)；若含副反应则这一换算不成立。",calc:(a,b)=>a*63.546/(2*96485.33212),inverse:(a,b,x)=>err(x*2*96485.33212/63.546,a)},
{subject:"analytical",family:"relative_combined_measurement_uncertainty",unit:"%",a:0.001,da:0.00004,b:0.002,db:0.00005,question:"某浓度由 c=m/V 计算，质量与体积的相对标准不确定度分别为 {a}、{b}（无量纲），两者独立且摩尔质量误差可忽略。求 c 的合成相对标准不确定度百分数。",explanation:"乘除法相对不确定度按方差合成，u_r(c)=√(u_r(m)²+u_r(V)²)，乘 100 得百分数。",calc:(a,b)=>100*Math.hypot(a,b),inverse:(a,b,x)=>err((x/100)**2,a*a+b*b)},
{subject:"analytical",family:"conductivity_molar_lambda",unit:"S·cm²/mol",a:0.001,da:0.00004,b:0.012,db:0.0002,question:"电解质溶液的比电导率 κ={a} S/cm，浓度 c={b} mol/L，已减去溶剂背景。以 Λm=1000κ/c 定义摩尔电导率，计算 Λm（S·cm²/mol）。",explanation:"mol/L 与 S/cm 组合需乘 1000，故 Λm=1000κ/c；并非无限稀释极限摩尔电导。",calc:(a,b)=>1000*a/b,inverse:(a,b,x)=>err(x*b/1000,a)},
{subject:"analytical",family:"phosphate_species_concentration_ratio",unit:"无量纲",a:7,da:0.012,b:7.2,db:0.009,question:"在只考虑 H₂PO₄⁻ 与 HPO₄²⁻ 两态的稀磷酸缓冲液中，pH={a}、pKa₂={b}，忽略活度系数差异。求 [HPO₄²⁻]/[H₂PO₄⁻]。",explanation:"Henderson–Hasselbalch 关系 pH=pKa₂+log10(碱式/酸式)，比值为 10^(pH−pKa₂)。",calc:(a,b)=>10**(a-b),inverse:(a,b,x)=>err(Math.log10(x)+b,a)},
{subject:"analytical",family:"reverse_dilution_original_mgL",unit:"mg/L",a:0.8,da:0.02,b:50,db:0.5,question:"取原样 10.00 mL，定容至 {b} mL，稀释液仪器测得目标物浓度 {a} mg/L。假设溶质完全保留、无吸附或基质效应，求原水样浓度（mg/L）。",explanation:"稀释前后分析物质量守恒，c0×10.00=cdil×Vfinal，得 c0=cdil×Vfinal/10.00。",calc:(a,b)=>a*b/10,inverse:(a,b,x)=>err(x*10/b,a)},
{subject:"organic",family:"carothers_polymerization_dp",unit:"重复单元",a:0.9,da:0.003,b:0,db:0,question:"理想等当量二官能团逐步聚合转化率为 p={a}（小于 1），忽略环化及单官能终止。利用 Carothers 式 DPn=1/(1−p) 估算数均聚合度。",explanation:"在理想双官能等摩尔聚合中 DPn=(1−p)⁻¹。接近完全转化时结果对 p 十分敏感。",calc:(a,b)=>1/(1-a),inverse:(a,b,x)=>err(1-1/x,a)},
{subject:"organic",family:"polymer_weight_average_dp",unit:"重复单元",a:20000,da:200,b:104,db:0.5,question:"某聚合物的重均摩尔质量 Mw={a} g/mol、重复单元摩尔质量 {b} g/mol。忽略链端与交联，估算重均聚合度 DPw，区别于数均 DPn。",explanation:"理想链统计下 DPw=Mw/Mrepeat；若分散度大，不能将其直接等同于数均聚合度。",calc:(a,b)=>a/b,inverse:(a,b,x)=>err(x*b,a)},
{subject:"organic",family:"copolymer_repeat_unit_mass_percent",unit:"%",a:0.35,da:0.007,b:80,db:0.8,question:"二元共聚物中 A 单元摩尔分数为 {a}，其摩尔质量 MA={b} g/mol，B 单元摩尔质量为 100.0 g/mol。忽略端基和组成漂移，求 A 单元的质量百分数。",explanation:"wA=xAMA/(xAMA+(1−xA)MB)，乘 100% 即得答案。摩尔分数不是质量百分数。",calc:(a,b)=>100*a*b/(a*b+(1-a)*100),inverse:(a,b,x)=>err(x*(a*b+(1-a)*100)/100,a*b)},
{subject:"organic",family:"quantitative_nmr_mole_ratio",unit:"倍",a:3,da:0.08,b:2,db:0.05,question:"定量¹H NMR 中组分 X 的目标峰积分 {a}（每分子含 3 个对应质子），Y 峰积分 {b}（每分子含 2 个对应质子），假设积分完全定量。求 X/Y 的分子数比例。",explanation:"定量核磁积分与被计数的质子个数成正比，故 NX/NY=(IX/3)/(IY/2)，不是 IX/IY。",calc:(a,b)=>(a/3)/(b/2),inverse:(a,b,x)=>err(x*3*b/2,a)},
{subject:"organic",family:"alkene_br2_addition_product_mass",unit:"g",a:0.3,da:0.012,b:160,db:1.2,question:"某仅含一个 C=C 的烯烃摩尔质量为 {b} g/mol、物质的量 {a} mol，和 Br₂ 发生完全 1:1 加成而无副产物。M(Br₂)=159.808 g/mol，求二溴加成产物总质量。",explanation:"加成反应无离去小分子，产物摩尔质量等于烯烃和 Br₂ 摩尔质量之和，m=n(Malkene+159.808)。",calc:(a,b)=>a*(b+159.808),inverse:(a,b,x)=>err(x/a-b,159.808)},
{subject:"organic",family:"saponification_naoh_stoichiometry",unit:"g",a:0.12,da:0.007,b:0,db:0,question:"某酯只发生定量一比一碱性皂化，酯总物质的量为 {a} mol，每摩尔酯恰消耗一摩尔 NaOH。取 M(NaOH)=39.997 g/mol，求理论最低 NaOH 质量。",explanation:"1:1 反应计量 nNaOH=nester，故 mNaOH=39.997n g；实际工艺过量不在题设内。",calc:(a,b)=>39.997*a,inverse:(a,b,x)=>err(x/39.997,a)},
{subject:"organic",family:"elemental_oxygen_difference_pct",unit:"%",a:0.55,da:0.005,b:0.11,db:0.001,question:"某纯有机物只含 C、H、O 三元素，其中碳的质量分数 wC={a}、氢的质量分数 wH={b}。根据元素质量守恒求氧的质量百分数。",explanation:"三个元素总质量分数为 1，所以 wO=1−wC−wH，再乘 100 得氧的质量百分率。",calc:(a,b)=>100*(1-a-b),inverse:(a,b,x)=>err(x/100+a+b,1)},
{subject:"organic",family:"acid_value_koh_consumption",unit:"mg KOH/g",a:3,da:0.07,b:2,db:0.06,question:"油脂试样质量为 {a} g，经空白校正后被 0.1000 mol/L KOH 滴定，消耗 {b} mL，酸性组分定量反应。M(KOH)=56.11 g/mol，求酸值（mg KOH/g）。",explanation:"KOH 质量为 0.1000×b(mL)×56.11 mg；除以试样质量 a(g)，得酸值。",calc:(a,b)=>.1*b*56.11/a,inverse:(a,b,x)=>err(x*a/(.1*56.11),b)},
{subject:"organic",family:"iodine_value_single_alkene",unit:"g I₂/100g",a:0.25,da:0.009,b:2,db:0.07,question:"某有机样品只含一种可与 I₂ 定量 1:1 加成的烯烃，样品质量为 {b} g，所含双键总量为 {a} mmol。取 M(I₂)=253.81 g/mol，计算碘值（g I₂/100g）。",explanation:"每 mmol 双键需要 0.25381 g I₂，质量除以样品质量再乘 100，得到题设碘值。",calc:(a,b)=>100*a*.25381/b,inverse:(a,b,x)=>err(x*b/(100*.25381),a)},
{subject:"organic",family:"ester_equilibrium_conversion_extent",unit:"无量纲",a:4,da:0.15,b:0,db:0,question:"理想恒容可逆反应 A+B⇌C+D 初始 A、B 各 1 mol、产物均为零，活度可按同标准浓度归一化。若平衡常数 K={a}，求平衡转化分数 x。",explanation:"平衡时 nA=nB=1−x、nC=nD=x，故 K=x²/(1−x)²，解得 x=√K/(1+√K)。",calc:(a,b)=>Math.sqrt(a)/(1+Math.sqrt(a)),inverse:(a,b,x)=>err((x/(1-x))**2,a)},
{subject:"organic",family:"monoalkene_hydrogenation_percent",unit:"%",a:0.8,da:0.006,b:0.2,db:0.004,question:"某单烯烃初始有 {a} mol，氢化实验实际吸收 {b} mol H₂，每个已反应分子只消耗一分子氢气，没有其它耗氢反应。求 C=C 氢化转化百分率。",explanation:"反应的单烯烃 mol 数等于吸收的氢气 mol 数，转化率=100n(H₂)/n0。",calc:(a,b)=>100*b/a,inverse:(a,b,x)=>err(x*a/100,b)},
{subject:"organic",family:"tripeptide_condensation_water_g",unit:"g",a:0.01,da:0.0003,b:0,db:0,question:"理想三肽合成中三个氨基酸单元形成两条肽键、每条键脱去一分子水。若生成三肽 {a} mol，没有副反应或肽链环化，M(H₂O)=18.015 g/mol，求缩合水理论质量。",explanation:"每 mol 三肽产生 2 mol 水，故水质量 m=2n(三肽)×18.015 g。",calc:(a,b)=>2*a*18.015,inverse:(a,b,x)=>err(x/(2*18.015),a)},
{subject:"physical",family:"langmuir_single_layer_coverage",unit:"无量纲",a:0.5,da:0.03,b:2,db:0.08,question:"理想单层 Langmuir 吸附过程的平衡常数 K={a} L/mol、体相浓度 c={b} mol/L，表面位点均匀且无侧向作用。求覆盖度 θ（0<θ<1）。",explanation:"Langmuir 方程 θ=Kc/(1+Kc)；Kc 为无量纲组合，模型不含多层吸附。",calc:(a,b)=>a*b/(1+a*b),inverse:(a,b,x)=>err(x/(1-x),a*b)},
{subject:"physical",family:"first_order_decay_half_life",unit:"min",a:0.04,da:0.0013,b:0,db:0,question:"某一级反应严格满足 −d[A]/dt=k[A]，速率常数 k={a} min⁻¹，温度不变且无逆反应。计算反应物降至初始浓度一半所需的半衰期。",explanation:"积分式 [A]=[A]0e^(−kt)，在 [A]/[A]0=1/2 时 t1/2=ln2/k，与初浓度无关。",calc:(a,b)=>Math.LN2/a,inverse:(a,b,x)=>err(x*a,Math.LN2)},
{subject:"physical",family:"first_order_90pct_conversion_time",unit:"s",a:0.05,da:0.002,b:0,db:0,question:"某单一一级反应的速率常数为 k={a} s⁻¹，过程无逆反应、温度恒定。计算底物达到 90.0% 转化（剩余 10.0%）所需时间（秒）。",explanation:"按 exp(−kt)=0.10，解得 t=ln10/k；这是一级反应的固定比例时间。",calc:(a,b)=>Math.LN10/a,inverse:(a,b,x)=>err(Math.exp(-x*a),.1)},
{subject:"physical",family:"second_order_decay_half_life",unit:"min",a:0.1,da:0.003,b:0.2,db:0.004,question:"二级反应速率律为 −dc/dt=kc²，k={a} L/(mol·min)，初始浓度 c0={b} mol/L，设反应单一且无逆过程。求半衰期 t1/2（min）。",explanation:"积分关系 1/c−1/c0=kt，令 c=c0/2 则 t1/2=1/(kc0)，区别于一级半衰期。",calc:(a,b)=>1/(a*b),inverse:(a,b,x)=>err(x*a*b,1)},
{subject:"physical",family:"parallel_first_order_branch_yield",unit:"%",a:0.2,da:0.006,b:0.15,db:0.004,question:"反应 A 经平行一级途径 A→B（kB={a} s⁻¹）与 A→C（kC={b} s⁻¹）消耗，没有其它反应。求最终形成 B 的分支百分数，假定两常数不随时间变。",explanation:"两个平行一级消耗过程的分支比是 kB/(kB+kC)，乘 100% 得到 B 的最终份额。",calc:(a,b)=>100*a/(a+b),inverse:(a,b,x)=>err(x*(a+b)/100,a)},
{subject:"physical",family:"stokes_einstein_diffusion_sphere",unit:"m²/s",a:1,da:0.025,b:300,db:2,question:"半径为 {a} nm 的球形颗粒在 T={b} K 的 Newtonian 液体中运动，动力黏度 η=0.00100 Pa·s，kB=1.380649×10⁻²³ J/K。假设无滑移边界、流体连续，求 Stokes–Einstein 扩散系数。",explanation:"D=kBT/(6πηr)，使用 r(nm)×10⁻⁹ m；接近分子尺度时实际可能偏离连续介质。",calc:(a,b)=>1.380649e-23*b/(6*Math.PI*.001*a*1e-9),inverse:(a,b,x)=>err(x*6*Math.PI*.001*a*1e-9,1.380649e-23*b)},
{subject:"physical",family:"nernst_einstein_mobility_abs",unit:"m²/(V·s)",a:1,da:0.04,b:300,db:2,question:"一价稀溶液离子的扩散系数 D={a}×10⁻⁹ m²/s，温度 T={b} K，满足 |μ|=D|q|/(kBT)。取 |q|=1.602176634×10⁻¹⁹ C、kB=1.380649×10⁻²³ J/K，求迁移率幅值。",explanation:"按 Nernst–Einstein 关系 μ=Dq/(kBT) 换算，题目给出的是 D 的 10⁻⁹ 倍数，需先转换。",calc:(a,b)=>a*1e-9*1.602176634e-19/(1.380649e-23*b),inverse:(a,b,x)=>err(x*(1.380649e-23*b)/1.602176634e-19,a*1e-9)},
{subject:"physical",family:"jurin_capillary_rise",unit:"cm",a:0.5,da:0.015,b:0.072,db:0.0006,question:"理想圆毛细管内半径 r={a} mm、液体表面张力 γ={b} N/m，接触角 cosθ=1，密度 ρ=1000 kg/m³、g=9.81 m/s²。按 Jurin 公式估计液柱上升高度（cm）。",explanation:"h=2γcosθ/(ρgr)，半径先换算为 m，高度最后由 m 转为 cm，忽略接触角滞后。",calc:(a,b)=>100*2*b/(1000*9.81*a*1e-3),inverse:(a,b,x)=>err(x/100*1000*9.81*a*1e-3/2,b)},
{subject:"physical",family:"clapeyron_phase_slope",unit:"Pa/K",a:3500,da:100,b:300,db:2,question:"某相变的摩尔焓 ΔH={a} J/mol，温度 T={b} K，高温相减低温相摩尔体积差 ΔV=2.00×10⁻⁶ m³/mol。根据 Clapeyron 关系求相边界斜率 dP/dT（Pa/K）。",explanation:"Clapeyron 式 dP/dT=ΔH/(TΔV)，给定 ΔV>0，结果正号，单位直接为 Pa/K。",calc:(a,b)=>a/(b*2e-6),inverse:(a,b,x)=>err(x*b*2e-6,a)},
{subject:"physical",family:"molar_photon_energy_wavelength",unit:"kJ/mol",a:350,da:4,b:0,db:0,question:"真空光波长 λ={a} nm，取 h=6.62607015×10⁻³⁴ J·s、c=299792458 m/s 和 NA=6.02214076×10²³ mol⁻¹。求每摩尔光子的能量（kJ/mol），注意不是每个光子的能量。",explanation:"E_molar=NAhc/λ，λ 由 nm 换成 m，最后 J/mol 除以 1000 成 kJ/mol。",calc:(a,b)=>6.62607015e-34*299792458*6.02214076e23/(a*1e-9)/1000,inverse:(a,b,x)=>err(x*a,6.62607015e-34*299792458*6.02214076e23/(1e-9)/1000)},
{subject:"physical",family:"boltzmann_two_level_excited_probability",unit:"无量纲",a:300,da:2,b:4500,db:50,question:"理想二能级分子体系的基态简并度 g0=1、激发态简并度 g1=2，能隙 ΔE={b} J/mol、温度 T={a} K。假设达到热平衡，求激发态占总数的概率 p1。",explanation:"激发态统计权重 w1=2exp(−ΔE/RT)、基态 w0=1，故 p1=w1/(1+w1)，不是激发与基态的比值。",calc:(a,b)=>2*Math.exp(-b/(8.314462618*a))/(1+2*Math.exp(-b/(8.314462618*a))),inverse:(a,b,x)=>err(Math.log(2*(1-x)/x)*8.314462618*a,b)},
{subject:"physical",family:"ideal_osmotic_pressure_kpa",unit:"kPa",a:0.05,da:0.003,b:300,db:2,question:"某非电解质的理想稀溶液浓度为 c={a} mol/L、绝对温度 T={b} K，渗透系数取 1。用 R=8.314462618 L·kPa/(mol·K) 和 van't Hoff 定律求渗透压 kPa。",explanation:"理想稀溶液满足 π=cRT，题目浓度是 mol/L 而非质量摩尔浓度，高浓度非理想项不在模型内。",calc:(a,b)=>a*8.314462618*b,inverse:(a,b,x)=>err(x/(8.314462618*b),a)}];
export const qid=q=>createHash('sha256').update(q.normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase()).digest('hex');
const format=x=>String(Number(x.toPrecision(10)));
const subst=(t,a,b)=>t.replaceAll('{a}',format(a)).replaceAll('{b}',format(b));
export function validate(f,a,b,x){
 const residual=f.inverse(a,b,x);
 if(!Number.isFinite(x)||!Number.isFinite(residual)||residual>1e-7)
  throw Error('Independent scientific formula conservation check failed: '+f.family);
 return true;
}
export function generate(){
 const rows=[],families=new Set(),ids=new Set();
 for(const f of FAMILIES){
  if(families.has(f.family))throw Error('Duplicated original topic family');
  families.add(f.family);
  for(let i=0;i<24;i++){
   const a=+(f.a+i*f.da).toPrecision(10),b=+(f.b+i*f.db).toPrecision(10);
   const question=subst(f.question,a,b),explanation=subst(f.explanation,a,b);
   const numeric=f.calc(a,b);validate(f,a,b,numeric);
   if(question.length<45||explanation.length<35||!question.includes(format(a)))
    throw Error('Incomplete original chemistry problem or solution: '+f.family);
   const id=qid(question);
   if(ids.has(id))throw Error('Duplicate original normalized question');
   ids.add(id);
   rows.push({schema_version:1,id,subject:f.subject,topic:f.family+'_v'+String(i+1).padStart(2,'0'),
    topic_family:f.family,parameter_case:i+1,level:'undergraduate',difficulty:'intermediate',
    question_type:'original_parametric_quantitative_chemistry',
    resource_type:'original_solved_exercise_not_upstream_question',
    question,answer:'答案 = '+Number(numeric).toPrecision(8)+' '+f.unit+'。',
    explanation:explanation+' 本题代入 a='+format(a)+'、b='+format(b)+'，得到 '+Number(numeric).toPrecision(8)+' '+f.unit+'。模型假设已列于题干。',
    numeric_answers:[numeric],units:f.unit,independent_model_inverse_checked:true,
    mathematical_check_only_not_chemistry_peer_review:true,
    requires_human_chemistry_review:true,semantic_duplicate_review_pending:true,
    quality_status:'awaiting_expert_review',publishable:false,
    source:{repository:OWN,file:'scripts/import-original-chapter-1152.mjs',
     license:'CC0-1.0',license_evidence:'https://github.com/'+OWN+'/blob/main/LICENSE-ORIGINAL-QUESTIONS.md',
     content_rights_verified:true,origin:'original_48_topic_families_24_parameter_cases',
     original_exam_question:false,third_party_question_text_copied:false,
     changes:'Independently authored hypothetical chemical calculations, never copied from exams.'}});
  }
 }
 if(rows.length!==1152||families.size!==48||['inorganic','analytical','organic','physical'].some(s=>rows.filter(q=>q.subject===s).length!==288))
  throw Error('Missing four-discipline 1152 chemistry candidates');
 return rows;
}
export function run(){
 const rows=generate(),dir=join(ROOT,'data/candidates');let added=0;
 for(const r of rows){const p=join(dir,r.id+'.json');if(existsSync(p)&&JSON.stringify(JSON.parse(readFileSync(p,'utf8')))!==JSON.stringify(r))
  throw Error('Stored candidate drift including answer or rights gate: '+r.id);}
 mkdirSync(dir,{recursive:true});
 for(const r of rows){const p=join(dir,r.id+'.json');if(existsSync(p))continue;writeFileSync(p,JSON.stringify(r,null,2)+'\n');added++;}
 const report={schema_version:1,generated:1152,distinct_topic_families:48,cases_per_family:24,
  by_subject:{inorganic:288,analytical:288,organic:288,physical:288},
  independent_numeric_inverse_checks:1152,full_source_replays:1152,
  source_license:'CC0-1.0',copied_exam_questions:0,expert_approved:0,publishable:false,
  caveat:'1152 are distinct numeric instances of 48 authored subject families, NOT 1152 distinct science topics. Source replay and inverse algebra do not establish independent chemical correctness.'};
 const path=join(ROOT,'harvest/import_reports/original_chapter_1152.json');mkdirSync(dirname(path),{recursive:true});
 const body=JSON.stringify(report,null,2)+'\n';if(!existsSync(path)||readFileSync(path,'utf8')!==body)writeFileSync(path,body);
 console.log('Chapter 1152: new='+added+' old='+(1152-added)+' independent topic families=48 approvals=0');
 return {added,old:1152-added};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
