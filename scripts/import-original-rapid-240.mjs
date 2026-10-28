#!/usr/bin/env node
// 48 independently authored quantitative chemistry families × 5 parameter sets.
// All examples are hypothetical and withheld from publication until expert review.
import {createHash} from 'node:crypto';
import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const OWN='jackxiang0329-source/ruoshui-chemistry-bank';
const rel=(x,y)=>Math.abs(x-y)/Math.max(Math.abs(y),1e-35);
export const FAMILIES=[{subject:"inorganic",family:"d_electron_formal_count",unit:"电子",a:6,da:1,b:2,db:0,question:"第一过渡系金属的族序数为 {a}，形式氧化数为 +{b}。依据先移去 4s 电子的本科常规规则，求形式 d 电子数；假设无特殊电子组态重排。",explanation:"以族序数减形式氧化数，d 电子数 = group−oxidation。该结果是形式配置计数，并不等于离子实际电荷分布。",calc:(a,b)=>a-b,inverse:(a,b,x)=>rel(x+b,a)},
{subject:"inorganic",family:"chlorido_complex_charge_balance",unit:"形式价态",a:3,da:1,b:-1,db:0,question:"某假想氯配离子含 {a} 个一价 Cl⁻ 配体，配离子整体电荷为 {b}（代数符号），除此无其它配体。求中心金属形式氧化数；不据此断言配离子能稳定存在。",explanation:"令中心金属形式氧化数为 z，由 z−nCl=q 可求 z=q+nCl；此过程是配离子电荷守恒。",calc:(a,b)=>a+b,inverse:(a,b,x)=>Math.abs(x-a-b)/Math.max(1,Math.abs(b))},
{subject:"inorganic",family:"ammonia_synthesis_limiting",unit:"mol",a:2,da:1,b:3,db:2,question:"理想封闭体系中按 N₂+3H₂→2NH₃ 完全反应，开始有 N₂ {a} mol 与 H₂ {b} mol，忽略副反应。求理论可得的 NH₃ 最大物质的量。",explanation:"根据 1:3:2 的反应计量关系，反应进度为 min(nN2,nH2/3)，氨产量是进度的两倍。",calc:(a,b)=>2*Math.min(a,b/3),inverse:(a,b,x)=>rel(x/2,Math.min(a,b/3))},
{subject:"inorganic",family:"bcc_cubic_cell_edge",unit:"nm",a:0.12,da:0.012,b:0,db:0,question:"某等径硬球体心立方晶体中原子沿体对角线接触，原子半径 r={a} nm。求立方晶胞边长并给出理论几何关系；不考虑热振动、点缺陷和原子非球形引起的模型误差。",explanation:"体心立方结构的体对角线为 4r，故 √3a_cell=4r，须分清半径与晶胞边长。",calc:(a,b)=>4*a/Math.sqrt(3),inverse:(a,b,x)=>rel(x*Math.sqrt(3),4*a)},
{subject:"inorganic",family:"bragg_lattice_spacing",unit:"nm",a:0.154,da:0.006,b:12,db:2,question:"某晶面一阶 Bragg 衍射的 X 射线波长 λ={a} nm，Bragg 角 θ={b}°（已经给的是 θ，不是 2θ）。求晶面间距 d。",explanation:"用 nλ=2d sinθ，令 n=1，角度换算为弧度；衍射峰角不能再次折半。",calc:(a,b)=>a/(2*Math.sin(b*Math.PI/180)),inverse:(a,b,x)=>rel(x*2*Math.sin(b*Math.PI/180),a)},
{subject:"inorganic",family:"fcc_ideal_metal_density",unit:"g/cm³",a:55.8,da:12,b:350,db:10,question:"某单质金属为面心立方晶体，每晶胞含 4 个原子，摩尔质量 M={a} g/mol，边长 {b} pm。取 NA=6.02214076×10²³ mol⁻¹，求理想密度，忽略晶格缺陷。",explanation:"ρ=(4M/NA)/a_cell³；注意将 1 pm=10⁻¹⁰ cm，体积转换必须立方。",calc:(a,b)=>4*a/(6.02214076e23*(b*1e-10)**3),inverse:(a,b,x)=>rel(x*6.02214076e23*(b*1e-10)**3,4*a)},
{subject:"inorganic",family:"salt_mixture_ionic_strength",unit:"mol/L",a:0.001,da:0.001,b:0.002,db:0.0005,question:"假定盐 MCl₂ 和 NaCl 均完全电离且不存在其它离子；浓度依次为 {a} mol/L 和 {b} mol/L。计算离子强度 I=1/2Σcᵢzᵢ²，区别于活度系数。",explanation:"MCl₂ 提供 M²⁺ 与两个 Cl⁻，其离子强度贡献为 3c；NaCl 的贡献为 c，所以 I=3a+b。",calc:(a,b)=>3*a+b,inverse:(a,b,x)=>rel(x-b,3*a)},
{subject:"inorganic",family:"hydrated_salt_hydration_mass",unit:"%",a:120,da:10,b:2,db:1,question:"某假想无水盐的摩尔质量为 {a} g/mol，其晶体化学式为盐·{b}H₂O。取水的摩尔质量为 18.015 g/mol，且无游离吸附水，求结晶水理论质量百分数。",explanation:"水合物质量为 M盐+n×18.015，结晶水质量为 n×18.015，所以水质量分数等于两者之比乘百分数。",calc:(a,b)=>100*b*18.015/(a+b*18.015),inverse:(a,b,x)=>rel(x*(a+b*18.015)/100,b*18.015)},
{subject:"inorganic",family:"isotopic_number_average",unit:"u",a:10,da:12,b:11,db:12,question:"某假想元素仅含两种同位素，核素质量分别为 {a} u 和 {b} u，其中前者的数目丰度为 25.0%，后者为 75.0%。求平均原子质量，不使用简单算术平均。",explanation:"原子量按数目丰度加权：A=0.25m1+0.75m2。质谱测得的数目丰度不等于质量分数。",calc:(a,b)=>.25*a+.75*b,inverse:(a,b,x)=>rel((x-.25*a)/.75,b)},
{subject:"inorganic",family:"preparation_molar_mass_salt",unit:"g",a:0.1,da:0.02,b:100,db:50,question:"某无水单价盐的摩尔质量为 120.0 g/mol，欲配成体积 {b} mL、形式浓度 {a} mol/L 的均匀水溶液，假定完全溶解。计算需称取纯盐质量。",explanation:"n=cV，须先将 b mL 转换成 L；m=n×120.0 g/mol，不以最终水的质量代替溶液体积。",calc:(a,b)=>a*b/1000*120,inverse:(a,b,x)=>rel(x/120,a*b/1000)},
{subject:"inorganic",family:"oxoanion_formal_oxidation_number",unit:"价态",a:3,da:1,b:-2,db:0,question:"某假想含氧阴离子 XO_m 中含 {a} 个 O，各 O 的形式氧化数取 −2，离子总电荷数为 {b}（带符号）；求中心元素 X 的形式氧化数。请勿将形式价态等同实际局部电子电荷。",explanation:"按氧化数总和等于离子总电荷，z−2a=b，故 z=b+2a；题设不保证所有假想组成都稳定。",calc:(a,b)=>2*a+b,inverse:(a,b,x)=>Math.abs(x-2*a-b)},
{subject:"inorganic",family:"calcium_carbonate_co2_release",unit:"g",a:5,da:2,b:50,db:7,question:"某固体样品总质量 {a} g，其中 CaCO₃ 的质量分数为 {b}%。假定 CaCO₃ 经酸完全反应，一摩尔生成一摩尔 CO₂，M(CaCO₃)=100.09 g/mol、M(CO₂)=44.01 g/mol，求理论释放 CO₂ 的克数。",explanation:"样品中碳酸钙质量为 a×b/100 g，按碳酸钙和 CO₂ 的 1:1 物质的量关系换算产气质量。",calc:(a,b)=>a*b/100/100.09*44.01,inverse:(a,b,x)=>rel(x*100.09*100/(a*44.01),b)},
{subject:"analytical",family:"khp_naoh_standardization",unit:"mol/L",a:0.51,da:0.05,b:25,db:2,question:"称取纯邻苯二甲酸氢钾 KHP {a} g，取 M=204.22 g/mol，和 NaOH 按一比一中和，终点耗待标定 NaOH {b} mL。计算 NaOH 浓度 mol/L。",explanation:"KHP 是一元酸，消耗 NaOH 的物质的量为 m/204.22；滴定体积单位从 mL 换为 L。",calc:(a,b)=>a/204.22/(b/1000),inverse:(a,b,x)=>rel(x*(b/1000)*204.22,a)},
{subject:"analytical",family:"chloride_gravimetric_agcl",unit:"%",a:0.15,da:0.03,b:0.3,db:0.04,question:"固体试样质量 {b} g，全部氯以纯净干燥 AgCl 沉淀称量得到 {a} g；M(AgCl)=143.32 g/mol，M(Cl)=35.45 g/mol。无共沉淀，求试样的氯质量百分数。",explanation:"每摩尔 AgCl 含一摩尔氯；将 AgCl 质量乘 35.45/143.32，再除以原试样质量并乘 100%。",calc:(a,b)=>100*a*35.45/(143.32*b),inverse:(a,b,x)=>rel(x*b*143.32/100,a*35.45)},
{subject:"analytical",family:"acid_back_titration_analyte",unit:"mol/L",a:35,da:3,b:10,db:1,question:"取 25.00 mL 仅含一元碱性分析物的水样，加 0.1000 mol/L HCl {a} mL，剩余酸用 0.1000 mol/L NaOH 回滴，耗 {b} mL；反应定量且无干扰。求原样分析物浓度。",explanation:"分析物消耗的酸等于加入酸减去回滴测得余酸，依一比一化学计量并按原样 25.00 mL 换算。",calc:(a,b)=>.1*(a-b)/25,inverse:(a,b,x)=>rel(x*25/.1,a-b)},
{subject:"analytical",family:"iodometric_copper_thiosulfate",unit:"mol/L",a:12,da:2,b:25,db:5,question:"将体积 {b} mL 的含 Cu²⁺ 溶液与足量 I⁻ 反应生成 CuI 与 I₂，按 Cu²⁺ 与 Na₂S₂O₃ 的总体摩尔比 1:1 处理；0.01000 mol/L 硫代硫酸钠消耗 {a} mL。求铜离子浓度，忽略副反应。",explanation:"由 2Cu²⁺→I₂ 和 I₂ 消耗 2S₂O₃²⁻ 的两步计量，Cu²⁺ 与硫代硫酸根最终等摩尔。",calc:(a,b)=>.01*a/b,inverse:(a,b,x)=>rel(x*b/.01,a)},
{subject:"analytical",family:"hydrogen_activity_pH_ratio",unit:"倍",a:3,da:0.5,b:4,db:0.65,question:"两份水溶液的 pH 依次为 {a} 和 {b}，pH=−log₁₀a(H⁺)。若比较的是活度而非溶质分析浓度，求第一份的氢离子活度除以第二份的活度。",explanation:"根据负对数定义，活度之比=10^(pH₂−pH₁)；它不是未经活度系数校正的浓度比。",calc:(a,b)=>10**(b-a),inverse:(a,b,x)=>Math.abs(Math.log10(x)-(b-a))},
{subject:"analytical",family:"theoretical_plate_number_baseline",unit:"无量纲",a:8,da:0.7,b:0.8,db:0.06,question:"色谱峰保留时间为 {a} min，基线全峰宽为 {b} min。假设峰近似对称且按 N=16(tR/w)² 定义理论塔板数，求 N。不要改用半峰宽计算式。",explanation:"保留时间与基线峰宽均取 min，先求比值再平方并乘 16，属于峰形理论塔板数估计。",calc:(a,b)=>16*(a/b)**2,inverse:(a,b,x)=>rel(b*Math.sqrt(x/16),a)},
{subject:"analytical",family:"extraction_remaining_fraction",unit:"%",a:2,da:0.5,b:20,db:5,question:"一分析物在有机/水相分配系数 D=c有机/c水={a}；100.0 mL 水样以 {b} mL 新鲜有机相萃取一次，忽略体积变化且两相平衡。求留在水相的物质的量百分数。",explanation:"分配关系与总量守恒给出水中剩余比例 V水/(V水+D V有机)，再乘 100%。",calc:(a,b)=>100*100/(100+a*b),inverse:(a,b,x)=>rel(x*(100+a*b)/100,100)},
{subject:"analytical",family:"weak_acid_neutral_species_pct",unit:"%",a:5,da:0.2,b:4.5,db:0.1,question:"只考虑 HA/A⁻ 两种形态的一元弱酸，溶液 pH={a}，pKa={b}，忽略活度修正和其它复杂酸碱副平衡。求未电离 HA 在两形态总浓度中的百分数，并指出适用近似。",explanation:"Henderson–Hasselbalch 给出 [A⁻]/[HA]=10^(pH−pKa)，故 HA 占比=100/(1+10^(pH−pKa))。",calc:(a,b)=>100/(1+10**(a-b)),inverse:(a,b,x)=>rel(100/x-1,10**(a-b))},
{subject:"analytical",family:"glass_electrode_calibrated_ph",unit:"pH",a:100,da:15,b:400,db:0,question:"25°C 某玻璃电极在适用范围内服从 E=E₀−59.16 mV×pH，校准截距 E₀={b} mV，样品读数 E={a} mV；忽略液接电位变化。求样品 pH。",explanation:"代数移项得 pH=(E₀−E)/59.16 mV；需在相同的电位单位下相减。",calc:(a,b)=>(b-a)/59.16,inverse:(a,b,x)=>rel(a+59.16*x,b)},
{subject:"analytical",family:"diffusive_flux_fick_first_law",unit:"mol/(m²·s)",a:1.2,da:0.25,b:0.5,db:0.1,question:"某分析物跨界面的扩散系数 D={a}×10⁻⁹ m²/s，浓度梯度绝对值 |dc/dx|={b} mol/m⁴。若无对流且服从一维 Fick 第一定律，求扩散通量的绝对值。",explanation:"Fick 定律 J=−D dc/dx，通量量纲为 (m²/s)(mol/m⁴)=mol/(m²·s)，这里只求绝对值。",calc:(a,b)=>a*b*1e-9,inverse:(a,b,x)=>rel(x/(a*1e-9),b)},
{subject:"analytical",family:"blank_corrected_absorbance",unit:"mg/L",a:0.28,da:0.035,b:0.02,db:0.004,question:"在某分析方法的有效线性范围内 A=0.0500×c(mg/L)+A空白，测得样品 A={a}，同基质空白 A空白={b}。假设无交叉干扰，求分析物浓度 mg/L。",explanation:"先扣除同基质空白吸光度，再除以浓度响应斜率 0.0500，不应直接用样品原始吸光度代入。",calc:(a,b)=>(a-b)/.05,inverse:(a,b,x)=>rel(.05*x+b,a)},
{subject:"analytical",family:"differential_two_channel_calibration",unit:"mg/L",a:0.3,da:0.07,b:0.25,db:0.05,question:"双组分的线性响应为 A₁=0.080cX+0.020cY={a}，A₂=0.010cX+0.060cY={b}，浓度用 mg/L。假设两组分信号可加且无基线偏差，求 cX，先判断系数矩阵是否可逆。",explanation:"双通道方程消元，cX=(0.060A1−0.020A2)/(0.080×0.060−0.020×0.010)，行列式不为 0。",calc:(a,b)=>(.06*a-.02*b)/(.08*.06-.02*.01),inverse:(a,b,x)=>rel((.08*.06-.02*.01)*x+.02*b,.06*a)},
{subject:"organic",family:"hydrocarbon_dbe",unit:"不饱和度",a:5,da:1,b:10,db:0,question:"一中性、闭壳层、只含 C/H 的有机分子化学式为 C_{a}H_{b}，按 DBE=(2C+2−H)/2 估计总不饱和度。求 DBE；它不唯一决定是环还是双键。",explanation:"对仅由碳氢组成的中性闭壳层分子，氢亏缺与环和多重键当量关系为 (2C+2−H)/2。",calc:(a,b)=>(2*a+2-b)/2,inverse:(a,b,x)=>rel(2*x+b,2*a+2)},
{subject:"organic",family:"combustion_carbon_balance",unit:"mmol",a:1.5,da:0.3,b:4,db:1,question:"有 {a} mmol 的饱和烃 C_{b}H₂ₙ₊₂（其中 n={b} 个碳原子），在足量氧中完全燃烧，只生成 CO₂ 和 H₂O。求理论 CO₂ 产量 mmol。",explanation:"元素守恒要求每个烃分子中的全部 n 个碳各形成一个 CO₂，产量为烃物质的量乘碳数。",calc:(a,b)=>a*b,inverse:(a,b,x)=>rel(x/a,b)},
{subject:"organic",family:"diene_hydrogenation_stoichiometry",unit:"mmol",a:1.2,da:0.3,b:1,db:1,question:"某假想烯烃样品含 {a} mmol 分子，每个分子含 {b} 个可独立完全加氢的 C=C，且无其它可还原基团。按每个双键消耗一分子 H₂，求 H₂ 理论消耗量。",explanation:"一个 C=C 的催化氢化消耗 1 mol H₂，摩尔数按可加氢双键数乘烯烃分子摩尔数计算。",calc:(a,b)=>a*b,inverse:(a,b,x)=>rel(x/a,b)},
{subject:"organic",family:"isolated_product_yield_pct",unit:"%",a:15,da:5,b:12,db:3,question:"假想有机合成的理论纯产物质量为 {a} g，分离得到经纯度确认的产物 {b} g，同一化合物且无残留溶剂。求产物分离百分收率，并说明这个数值与原子经济性、反应转化率并不是同一个评价指标。",explanation:"分离收率=实际纯产物质量/理论纯产物质量×100%，不能以粗产物含溶剂的质量计算。",calc:(a,b)=>100*b/a,inverse:(a,b,x)=>rel(x*a/100,b)},
{subject:"organic",family:"enantiomeric_excess_mass_basis",unit:"%",a:7,da:1,b:3,db:0,question:"某手性物质的两种对映体具有相同摩尔质量，混合物中主要对映体有 {a} mg，次要对映体有 {b} mg，且无其它组分。求对映体过量 ee 的正百分数。",explanation:"对映体质量可代替等分子量的物质的量，ee=(m多−m少)/(m多+m少)×100%。",calc:(a,b)=>100*(a-b)/(a+b),inverse:(a,b,x)=>rel(x*(a+b)/100,a-b)},
{subject:"organic",family:"major_enantiomer_mass",unit:"g",a:20,da:10,b:5,db:1,question:"某二组分对映体混合物无其它杂质，总质量为 {b} g，正的对映体过量值 ee={a}%。求主要对映体的质量 g；假定两对映体摩尔质量相同。",explanation:"主要对映体摩尔/质量分数=(1+ee/100)/2，再乘样品总质量，区分 ee 与主组分质量百分数。",calc:(a,b)=>b*(100+a)/200,inverse:(a,b,x)=>rel(x*200/b,100+a)},
{subject:"organic",family:"atom_economy_two_products",unit:"%",a:88,da:10,b:18,db:5,question:"某理想配平有机反应仅形成目标产物及不可利用小分子副产物；单反应式单位的两者理论质量分别为 {a} g 和 {b} g。求目标产物的原子经济性百分数，不等同于实验分离收率。",explanation:"原子经济性按配平化学计量质量，目标产物质量/(目标产物质量+副产物质量)×100%。",calc:(a,b)=>100*a/(a+b),inverse:(a,b,x)=>rel(x*(a+b)/100,a)},
{subject:"organic",family:"esterification_limiting_ethyl_acetate",unit:"mg",a:3,da:1,b:5,db:-0.5,question:"乙酸和乙醇按 1:1 完全反应生成乙酸乙酯，初始乙酸为 {a} mmol、乙醇为 {b} mmol，无副反应。取乙酸乙酯 M=88.106 g/mol，求理论酯质量 mg。",explanation:"物质的量由限制试剂 min(a,b) 决定，一 mmol 酯对应 88.106 mg；理想完全转化不考虑真实酯化平衡。",calc:(a,b)=>88.106*Math.min(a,b),inverse:(a,b,x)=>rel(x/88.106,Math.min(a,b))},
{subject:"organic",family:"polymer_number_average_degree",unit:"重复单元数",a:50,da:10,b:100,db:10,question:"某理想线性聚合物的数均摩尔质量 Mn={a} kg/mol，每个重复单元的摩尔质量为 {b} g/mol。忽略链端基并假定该 Mn 已经是数均值，估计数均聚合度。",explanation:"数均聚合度 DPn=Mn/M重复单元，须先将 Mn 的 kg/mol 换算成 g/mol，结果只是平均而非每一条链。",calc:(a,b)=>1000*a/b,inverse:(a,b,x)=>rel(x*b/1000,a)},
{subject:"organic",family:"ir_wavenumber_wavelength",unit:"μm",a:1700,da:100,b:0,db:0,question:"某有机样品吸收峰的真空波数为 {a} cm⁻¹，计算对应的真空光波长（μm），写出波数单位与波长单位的转换关系；假定无介质折射率换算需要。",explanation:"波数 ṽ=1/λ（λ 以 cm 表示），而 1 cm=10⁴ μm，所以 λ(μm)=10000/ṽ。",calc:(a,b)=>10000/a,inverse:(a,b,x)=>rel(a*x,10000)},
{subject:"organic",family:"grignard_total_product_carbon_count",unit:"碳原子",a:3,da:1,b:2,db:1,question:"某无环酮底物含 {a} 个碳原子，亲核试剂 R–MgBr 的烷基 R 含 {b} 个碳原子。经无水加成及酸性后处理，不断碳链也不重排，求生成醇的碳原子数。",explanation:"格氏试剂的 R 基与原羰基碳成键，不丢失酮原来的碳骨架，产物总碳数是两者之和。",calc:(a,b)=>a+b,inverse:(a,b,x)=>rel(x-a,b)},
{subject:"organic",family:"hydrocarbon_complete_combustion_o2",unit:"mol",a:3,da:1,b:6,db:2,question:"1 mol 仅含 C/H 的中性化合物分子式为 C_{a}H_{b}，完全燃烧生成 CO₂ 与 H₂O。求按配平反应每 mol 该化合物需要消耗多少 mol O₂。",explanation:"碳守恒生成 a mol CO₂、氢守恒生成 b/2 mol 水，氧元素计数给出 O₂ 消耗 a+b/4 mol。",calc:(a,b)=>a+b/4,inverse:(a,b,x)=>rel(x-a,b/4)},
{subject:"physical",family:"ideal_gas_molar_volume",unit:"L/mol",a:100,da:10,b:300,db:10,question:"理想气体的绝对压力为 {a} kPa、绝对温度 {b} K，使用 R=8.314462618 L·kPa/(mol·K)。在 PV=nRT 且无凝结的假设下，求摩尔体积 Vm（L/mol）。",explanation:"一摩尔理想气体满足 PVm=RT，故 Vm=RT/P；kPa 与 L 在给定 R 单位下互相配套。",calc:(a,b)=>8.314462618*b/a,inverse:(a,b,x)=>rel(x*a/8.314462618,b)},
{subject:"physical",family:"van_der_waals_molar_gas_pressure",unit:"atm",a:0.25,da:0.03,b:300,db:10,question:"某假想气体在摩尔体积 Vm={a} L/mol、温度 T={b} K 下，满足 (P+A/Vm²)(Vm−B)=RT，常数 A=1.36 L²·atm/mol²、B=0.03183 L/mol，R=0.082057 L·atm/(mol·K)。求模型压力 atm。",explanation:"范德华气压 P=RT/(Vm−B)−A/Vm²，务必将题中的摩尔体积参数与常数 A/B 区分开。",calc:(a,b)=>.082057*b/(a-.03183)-1.36/a**2,inverse:(a,b,x)=>rel((x+1.36/a**2)*(a-.03183),.082057*b)},
{subject:"physical",family:"reversible_isothermal_gas_work",unit:"kJ",a:1,da:0.25,b:300,db:10,question:"有 {a} mol 理想气体在温度 T={b} K 下可逆等温膨胀为初体积两倍，取 R=8.314462618 J/(mol·K)。采用 w 表示对系统作功的化学符号约定，求 w（kJ）。",explanation:"可逆等温膨胀功 w=−nRTln(V₂/V₁)，体积比为 2，负号表征系统向外做功，且 J 要转为 kJ。",calc:(a,b)=>-a*8.314462618*b*Math.log(2)/1000,inverse:(a,b,x)=>rel(-x*1000/(a*8.314462618*b),Math.log(2))},
{subject:"physical",family:"isobaric_heat_capacity_transfer",unit:"kJ",a:1,da:0.5,b:30,db:5,question:"有 {a} mol 的理想气体在恒压条件下升温 ΔT={b} K，温区内 Cp=29.1 J/(mol·K) 视作常数，无相变。求吸热量 qp，结果单位 kJ。",explanation:"恒压且 Cp 不变时 qp=nCpΔT，按 J/1000 换算 kJ，此过程忽略相变和额外化学反应。",calc:(a,b)=>a*29.1*b/1000,inverse:(a,b,x)=>rel(x*1000/(a*b),29.1)},
{subject:"physical",family:"adiabatic_pressure_temperature",unit:"K",a:400,da:20,b:0.5,db:0.05,question:"理想双原子气体可逆绝热膨胀，初温 T1={a} K，末态压强比 P2/P1={b}，绝热指数 γ=1.40 在全过程恒定。求末温 T2，忽略转动振动比热变化。",explanation:"理想气体可逆绝热关系 T2/T1=(P2/P1)^((γ−1)/γ)，由压强比求末温，不能用等温公式。",calc:(a,b)=>a*b**(.4/1.4),inverse:(a,b,x)=>rel((x/a)**(1.4/.4),b)},
{subject:"physical",family:"binary_ideal_gas_entropy_mixing",unit:"J/K",a:1,da:1,b:2,db:1,question:"两种化学上不同的理想气体初始温度与压力相同，分别为 {a} mol 和 {b} mol，移去隔板后理想混合且不反应。取 R=8.314462618 J/(mol·K)，求系统混合熵变。",explanation:"ΔSmix=−R[nA ln xA+nB ln xB]；不同物种混合熵为正，同种气体无该经典混合熵。",calc:(a,b)=>-8.314462618*(a*Math.log(a/(a+b))+b*Math.log(b/(a+b))),inverse:(a,b,x)=>rel(x,-8.314462618*(a*Math.log(a/(a+b))+b*Math.log(b/(a+b))))},
{subject:"physical",family:"kirchhoff_reaction_enthalpy",unit:"kJ/mol",a:-50,da:-5,b:10,db:5,question:"某反应在 298.15 K 的 ΔrH°={a} kJ/mol，温度增加 50.0 K 内标准反应定压热容差 ΔrCp°={b} J/(mol·K) 可看作常数。求 348.15 K 下的标准反应焓。",explanation:"Kirchhoff 定律 ΔrH°(T2)=ΔrH°(T1)+ΔrCp°ΔT，热容积分项用 J/mol 计算后须转换为 kJ/mol。",calc:(a,b)=>a+b*50/1000,inverse:(a,b,x)=>rel((x-a)*1000/50,b)},
{subject:"physical",family:"equilibrium_k_standard_gibbs",unit:"kJ/mol",a:2,da:1,b:300,db:10,question:"反应在温度 {b} K 的无量纲活度平衡常数为 K={a}，各标准态定义一致。取 R=8.314462618 J/(mol·K)，求标准反应 Gibbs 能 ΔrG°（kJ/mol）。",explanation:"热力学关系 ΔrG°=−RTlnK，K 必须是无量纲常数，且最终结果将 J/mol 换成 kJ/mol。",calc:(a,b)=>-8.314462618*b*Math.log(a)/1000,inverse:(a,b,x)=>rel(Math.exp(-x*1000/(8.314462618*b)),a)},
{subject:"physical",family:"arrhenius_ea_from_two_rates",unit:"kJ/mol",a:0.1,da:0.02,b:0.3,db:0.035,question:"某反应在 T1=300.0 K 的速率常数 k1={a} s⁻¹，在 T2=320.0 K 为 k2={b} s⁻¹。假设同一 Arrhenius 参数可用于两温度，R=8.314462618 J/(mol·K)，求活化能 Ea（kJ/mol）。",explanation:"两点 Arrhenius 关系 ln(k2/k1)=Ea/R(1/T1−1/T2)，将计算的 Ea 从 J/mol 换为 kJ/mol。",calc:(a,b)=>8.314462618*Math.log(b/a)/(1/300-1/320)/1000,inverse:(a,b,x)=>rel(Math.exp(x*1000*(1/300-1/320)/8.314462618),b/a)},
{subject:"physical",family:"raoult_ideal_partial_pressure",unit:"kPa",a:0.2,da:0.1,b:50,db:5,question:"理想二元液体溶液中组分 A 的摩尔分数 xA={a}，同温纯 A 饱和蒸气压为 {b} kPa。假设遵守 Raoult 定律，求 A 的气相分压 kPa，而不是混合蒸气总压。",explanation:"Raoult 定律给出 pA=xA pA*，仅能求该组分的分压；组分 B 的总压贡献并未给出。",calc:(a,b)=>a*b,inverse:(a,b,x)=>rel(x/b,a)},
{subject:"physical",family:"photoelectric_max_energy",unit:"eV",a:300,da:20,b:2,db:-0.1,question:"金属表面光电效应的真空入射光波长为 {a} nm、逸出功为 {b} eV，取 hc=1239.84198 eV·nm。假定入射能量高于阈值、忽略接触势，求光电子最大动能 eV。",explanation:"Einstein 光电方程 Kmax=hc/λ−Φ，题设所有波长均在可逸出范围；不能用光子总能量代替动能。",calc:(a,b)=>1239.84198/a-b,inverse:(a,b,x)=>rel((x+b)*a,1239.84198)},
{subject:"physical",family:"one_dimensional_diffusion_transit_time",unit:"s",a:10,da:5,b:2,db:0.3,question:"在无对流的一维扩散模型中，扩散系数为 D={b}×10⁻¹⁰ m²/s，所考虑的均方根位移尺度为 L={a} μm。用 ⟨x²⟩=2Dt 估算达到尺度 L 的时间 t，单位 s。",explanation:"一维扩散尺度 t=L²/(2D)，须把 μm 换为 m，再平方；不要混用三维的 6Dt。",calc:(a,b)=>(a*1e-6)**2/(2*b*1e-10),inverse:(a,b,x)=>rel(2*x*b*1e-10,(a*1e-6)**2)}];
const fmt=x=>String(Number(x.toPrecision(9)));
const fill=(q,a,b)=>q.replaceAll('{a}',fmt(a)).replaceAll('{b}',fmt(b));
export const candidateId=q=>createHash('sha256').update(q.normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase()).digest('hex');
export function verifySet(f,a,b,value){
 if(!Number.isFinite(value)||!Number.isFinite(f.inverse(a,b,value))||f.inverse(a,b,value)>1e-8)
  throw Error('Independent physical or chemical conservation check failed: '+f.family);
 return true;
}
export function generate(){
 const out=[],seen=new Set(),keys=new Set(),topics=new Set();
 for(const f of FAMILIES){
  if(topics.has(f.family)||!['inorganic','analytical','organic','physical'].includes(f.subject))
   throw Error('Repeated or unknown chemistry topic family '+f.family);
  topics.add(f.family);
  for(let i=0;i<5;i++){
   const a=Number((f.a+i*f.da).toPrecision(9));
   const b=Number((f.b+i*f.db).toPrecision(9));
   const q=fill(f.question,a,b),method=fill(f.explanation,a,b);
   const value=f.calc(a,b);
   verifySet(f,a,b,value);
   if(q.length<65||method.length<35||!q.includes(fmt(a)))
    throw Error('Incomplete undergraduate problem, premises or solution '+f.family);
   const id=candidateId(q),key=f.family+'_'+(i+1);
   if(seen.has(id)||keys.has(key))throw Error('Duplicate generated chemistry problem');
   seen.add(id);keys.add(key);
   out.push({schema_version:1,id,subject:f.subject,topic:key,topic_family:f.family,
    level:'undergraduate',difficulty:'intermediate',question_type:'original_quantitative_with_assumptions',
    resource_type:'original_solved_exercise_not_upstream_question',question:q,
    answer:'计算结果 = '+Number(value).toPrecision(7)+' '+f.unit+'。',
    explanation:method+' 代入本题数值求得 '+Number(value).toPrecision(7)+' '+f.unit+'；须同时满足题设的模型及单位假定。',
    numeric_answers:[value],units:f.unit,
    computation_method:'explicit_formula_and_inverse_conservation',
    parameter_case:i+1,model_inverse_crosschecked:true,
    human_expert_reviewed:false,requires_human_chemistry_review:true,
    semantic_duplicate_review_pending:true,quality_status:'awaiting_expert_review',publishable:false,
    source:{repository:OWN,file:'scripts/import-original-rapid-240.mjs',
      license:'CC0-1.0',license_evidence:'https://github.com/'+OWN+'/blob/main/LICENSE-ORIGINAL-QUESTIONS.md',
      content_rights_verified:true,origin:'independently_authored_parametric_family',
      original_exam_question:false,third_party_question_text_copied:false,
      changes:'Authored original theoretical teaching example; not an outside course exam or textbook reproduction.'}});
  }
 }
 if(out.length!==240||topics.size!==48)throw Error('Expected 240 problems in 48 families');
 for(const subject of ['inorganic','analytical','organic','physical'])
  if(out.filter(q=>q.subject===subject).length!==60)throw Error('Unbalanced subject coverage');
 return out;
}
export function run(){
 const rows=generate(),dir=join(ROOT,'data/candidates');let added=0;
 for(const q of rows){
  const path=join(dir,q.id+'.json');
  if(existsSync(path)&&JSON.stringify(JSON.parse(readFileSync(path,'utf8')))!==JSON.stringify(q))
   throw Error('Source, solution or rights drift for existing candidate '+q.id);
 }
 mkdirSync(dir,{recursive:true});
 for(const q of rows){
  const p=join(dir,q.id+'.json');if(existsSync(p))continue;
  writeFileSync(p,JSON.stringify(q,null,2)+'\n');added++;
 }
 const report={schema_version:1,generated:240,distinct_topic_families:48,
  independently_checked_numerical_cases:240,cases_per_family:5,
  by_subject:{inorganic:60,analytical:60,organic:60,physical:60},
  source_license:'CC0-1.0',copied_exam_questions:0,
  full_stored_record_replay:240,expert_approved:0,publishable:false,
  caveat:'Inverse equations are mechanical consistency checks, not expert chemistry validation. 48 families, 5 variants each, NOT 240 unique topics.'};
 const path=join(ROOT,'harvest/import_reports/original_rapid_240.json');
 mkdirSync(dirname(path),{recursive:true});
 const body=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(path)||readFileSync(path,'utf8')!==body)writeFileSync(path,body);
 console.log('Rapid 240 chemistry cases: '+added+' new; 48 distinct topics; 0 official approvals');
 return {added,existing:240-added};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
