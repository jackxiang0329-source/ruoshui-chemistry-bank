#!/usr/bin/env node
// 32 independently authored undergraduate reasoning problems. No third-party exams copied.
// Re-running exactly reproduces every question, answer, provenance and review flag.
import {readFileSync,writeFileSync,existsSync,mkdirSync,appendFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url)));
const OWN='jackxiang0329-source/ruoshui-chemistry-bank';
export const qid=q=>createHash('sha256').update(q.normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase()).digest('hex');
// subject, unique topic, independently authored question, answer, worked explanation.
export const ITEMS=[
 ['inorganic','octahedral_high_spin_d6',
 '某八面体 Fe²⁺ 配合物的配体场较弱，Δo 小于电子成对所需能量。请写出 d 轨道占据、未成对电子数以及以 Δo 表示的晶体场稳定化能（暂不计成对能）。',
 'Fe²⁺ 为 d⁶，高自旋占据 t₂g⁴e_g²，未成对电子数为 4，CFSE=−0.4Δo。',
 '八面体场中每个 t₂g 电子贡献 −0.4Δo，每个 e_g 电子贡献 +0.6Δo，故 4(−0.4)+2(0.6)=−0.4；高自旋 d⁶ 有四个单占轨道。'],
 ['inorganic','octahedral_low_spin_d6',
 '某八面体 Fe²⁺ 配合物具有足够强的配体场，电子优先在 t₂g 中成对。求其自旋态、未成对电子数及不计成对能的 CFSE。',
 '低自旋 d⁶：t₂g⁶e_g⁰，未成对电子 0 个，S=0，CFSE=−2.4Δo。',
 'Fe²⁺ 的 d 电子数是 6；强场下六电子填满低能的三个 t₂g 轨道，各轨道成对，因而为抗磁性。计算 CFSE=6(−0.4Δo)。'],
 ['inorganic','octahedral_d3_cfse',
 'Cr³⁺ 在八面体晶体场中有多少个 d 电子？请确定 t₂g/e_g 排布、未成对电子数及 CFSE，并说明高低自旋争议是否存在。',
 'Cr³⁺ 为 d³，排布 t₂g³e_g⁰，3 个未成对电子，CFSE=−1.2Δo；不存在不同的高低自旋排布。',
 '三个电子按照洪特规则分别占据三个简并的低能 t₂g 轨道，无须为降低能量而成对；能量贡献为 3×(−0.4Δo)。'],
 ['inorganic','square_planar_pt_geometric_isomerism',
 '将 [Pt(NH₃)₂Cl₂] 视为典型平方平面 Pt(II) 配合物。忽略其他配位方式，仅问配位平面上两只 Cl 的相对位置：有几种几何异构体？逐一描述。',
 '共有 2 种：cis-[Pt(NH₃)₂Cl₂]，两只 Cl 相邻；trans-[Pt(NH₃)₂Cl₂]，两只 Cl 相对。',
 '在平方平面四个配位位点上，两只相同 Cl 占据相邻位点或对位点形成两类不等价排布；通过平面内旋转不能将顺式变为反式。'],
 ['inorganic','coordination_sphere_counterions',
 '对于盐 [Co(NH₃)₅Cl]Cl₂，计算 Co 的氧化态、配位数及每个化学式单位中位于配位球外的 Cl⁻ 个数。假定溶解时配位球内的 Co—Cl 键不发生立即交换。',
 'Co 为 +3 价；配位数为 6；配位球外可直接解离的 Cl⁻ 为 2 个。',
 '两个外界氯离子给出阴离子总电荷 −2，故配合阳离子带 +2；配位 NH₃ 电荷为 0、内界 Cl 为 −1，设 Co 氧化态 x，x−1=+2，得 x=+3。'],
 ['inorganic','tris_en_optical_isomers',
 '八面体 [Co(en)₃]³⁺ 中 en 是对称二齿乙二胺。三个相同的 en 螯合环是否导致顺反异构？它还能具有哪一类立体异构？',
 '不存在由三种相同 en 引起的 cis/trans 几何异构；但存在 Δ 与 Λ 两种互为对映体的光学异构体。',
 '三个双齿配体构成具有左、右螺旋手性的八面体螯合排布，镜像一般不能仅通过旋转重合；配体全同不消除螺旋手性。'],
 ['inorganic','tetraammine_copper_charge',
 '写出四氨合铜(II)离子 [Cu(NH₃)₄] 的正确电荷，并确定 Cu 的氧化态、配位数以及 NH₃ 在该配位键形成中的电子对角色。',
 '[Cu(NH₃)₄]²⁺，Cu 氧化态为 +2，配位数为 4；NH₃ 通过 N 的孤对电子作单齿中性配体。',
 'NH₃ 每个净电荷为零，四个 N 原子各提供一个配位原子与金属形成配位键；因此络离子总电荷保持 Cu²⁺ 的 +2。'],
 ['inorganic','chromate_dichromate_acid_equilibrium',
 '对于水溶液平衡 2CrO₄²⁻+2H⁺ ⇌ Cr₂O₇²⁻+H₂O，检验原子及电荷守恒，并解释提高酸度时的平衡移动方向（忽略其他 Cr(VI) 形态）。',
 '反应式原子与电荷均守恒；提高 H⁺ 活度使平衡向右移动，二铬酸根比例上升。',
 '左侧 Cr=2、O=8、H=2，电荷 −4+2=−2；右侧对应 Cr=2、O=8、H=2，电荷 −2。增大反应物 H⁺ 的活度按平衡原理促进向右反应。'],
 ['analytical','edta_one_to_one_metal_stoichiometry',
 '用 EDTA 标准溶液滴定 25.00 mL 含 Ca²⁺ 试液，消耗 12.50 mL、0.02000 mol/L EDTA。假设 pH 足以保证反应定量、无其他金属干扰，求试液 Ca²⁺ 的物质的量浓度，并解释为何与 Ca 的价态无关。',
 'c(Ca²⁺)=0.02000×12.50/25.00=0.01000 mol/L；金属与 EDTA 配位计量比为 1:1。',
 'EDTA 一个分子提供一个多齿螯合配体包围一个 Ca²⁺，不是以 2:1 中和二价电荷。终点 n(Ca²⁺)=n(EDTA)，所以按体积比求浓度。'],
 ['analytical','spectrophotometric_path_length_conversion',
 '某物质在 500 nm 的摩尔吸光系数为 5.00×10³ L/(mol·cm)，实测 A=0.250，所用微量比色皿光程只有 1.00 mm。假设线性且空白已扣除，计算浓度并指出把 1 mm 误当 1 cm 的后果。',
 'c=0.250/(5000×0.100)=5.00×10⁻⁴ mol/L；误取 1 cm 会把浓度低估 10 倍。',
 '朗伯—比尔定律 A=εlc 使用 cm 表示光程；1.00 mm=0.100 cm，因此必须先做长度单位换算。'],
 ['analytical','buret_reading_uncertainty',
 '滴定管初读数和终读数由相互独立且标准不确定度均为 0.020 mL 的测量得到，滴定体积为 20.00 mL。忽略其他误差，求交付体积的合成标准不确定度及相对标准不确定度。',
 'u(V)=√(0.020²+0.020²)=0.0283 mL；uᵣ(V)=0.0283/20.00=0.00141，约 0.141%。',
 '交付体积为两次独立读数之差，随机标准不确定度按方差之和传播，而不是直接相加；此题没有涉及系统误差。'],
 ['analytical','chromatographic_retention_and_selectivity',
 '色谱流动相死时间 tM=2.00 min，两组分保留时间分别 tR,1=6.00 min 和 tR,2=10.00 min。计算两组分保留因子 k₁、k₂ 以及选择性因子 α（后出峰/先出峰）。',
 'k₁=(6−2)/2=2.00，k₂=(10−2)/2=4.00，α=k₂/k₁=2.00。',
 '保留因子依据扣除死时间后的净保留时间定义；选择性因子是较后组分 k 除以较前组分 k，不能简单用两保留时间直接相除。'],
 ['analytical','divalent_ion_selective_nernst_slope',
 '25 °C 的理想二价阳离子选择电极，按 E=常数+(RT/2F)ln a_M²⁺ 工作。若离子活度提高 100 倍，电位应如何变化？取 2.303RT/F=59.16 mV。',
 'ΔE=(59.16/2)log₁₀(100)=+59.16 mV。',
 '二价阳离子每十倍活度对应约 +29.58 mV；提高两个十倍即加 59.16 mV。符号依据题设电极的正号 Nernst 约定。'],
 ['analytical','carbonate_back_titration_purity',
 '将 0.2000 g 含 CaCO₃ 的粉末与 40.00 mL 0.1000 mol/L HCl 充分反应，过量酸再用 10.00 mL 0.1000 mol/L NaOH 回滴。假设杂质不消耗酸，取 M(CaCO₃)=100.09 g/mol，求碳酸钙质量分数。',
 '耗酸 4.000−1.000=3.000 mmol；n(CaCO₃)=1.500 mmol；质量 0.150135 g；质量分数为 75.07%。',
 'CaCO₃+2HCl→CaCl₂+CO₂+H₂O，故用于 CaCO₃ 的 HCl 物质的量除以 2；用剩余 NaOH 的量扣除初始盐酸。'],
 ['analytical','analytical_spike_recovery',
 '样品某分析物经相同流程测得 1.00 mg；另取等量样品加入 2.00 mg 标准物，重新完整处理后测得 2.88 mg。假设原样均匀，求加标回收率，并说明它不直接证明哪一类误差已消失。',
 '加标回收率=(2.88−1.00)/2.00×100%=94.0%；不能据此断言全部系统误差或选择性干扰已消除。',
 '回收率使用加标组与未加标组结果之差，仅反映在当前基质与实验条件下新增分析物的响应；仍可能存在共存组分干扰和校准偏差。'],
 ['analytical','uv_vis_blank_correction',
 '在 1.00 cm 比色皿中，同一批次的试样测得 A样=0.800，基质空白测得 A空=0.150，已知 ε=1.00×10⁴ L/(mol·cm)。假定吸光度可加且分析物在空白中不存在，求校正浓度。',
 'A净=0.800−0.150=0.650；c=0.650/(10⁴×1.00)=6.50×10⁻⁵ mol/L。',
 '只有校正后的净吸光度对应分析物；若误将总吸光度直接换算，会使浓度高估。前提是空白背景在试样与空白之间保持相同。'],
 ['organic','sn2_stereochemical_inversion',
 '将光学纯 (R)-2-溴丁烷在理想条件下仅经单步背面进攻 SN2 被 OH⁻ 取代，暂不考虑 E2、外消旋化或其他副反应。描述反应中心的构型变化及按常用 CIP 优先级标记的 2-丁醇构型。',
 '反应中心发生 Walden 构型反转；在本取代中产物为 (S)-2-丁醇。',
 'SN2 亲核试剂从离去基团背面进攻，手性中心几何翻转。该例 Br 与生成的 OH 均是其相应结构中的最高 CIP 优先级，故 R/S 字母也发生对换。'],
 ['organic','nabh4_aldehyde_over_ester',
 '某分子同时含有芳环上的醛基 —CHO 与乙酯基 —CO₂Et。仅在通常温和 NaBH₄/醇溶剂条件下反应并后处理，预测哪类羰基优先被还原以及保留什么官能团。',
 '醛基通常被还原成 —CH₂OH；乙酯基在这些温和条件下通常保留。',
 'NaBH₄ 对醛、酮有效而通常不足以直接还原普通羧酸酯；题设排除更强还原剂、特殊添加剂或其他改变选择性的条件。'],
 ['organic','pcc_primary_alcohol_partial_oxidation',
 '1-丁醇在无水惰性溶剂、常规 PCC 氧化条件下，假设反应按通常选择性完成。写出主要有机产物，并解释为何不按此条件直接断言得到丁酸。',
 '主要产物为丁醛 CH₃CH₂CH₂CHO；不能把常规无水 PCC 氧化等同于强氧化剂的深度氧化。',
 '伯醇氧化首先形成醛，常规无水 PCC 条件限制了经水合醛继续过氧化为羧酸的路径；实际副反应及收率仍需具体实验条件。'],
 ['organic','anisole_eas_directing_effect',
 '甲氧基苯（苯甲醚）进行常规受控的亲电芳香取代，忽略极端条件下的特殊副反应。与苯相比反应活性如何？新取代基优先进入相对于 —OCH₃ 的什么位置？解释电子效应。',
 '甲氧基通常活化芳环并使新取代主要导向邻位与对位，不能仅凭导向规则断言单一产物。',
 'O 原子的孤对电子通过共振向芳环供电子，稳定邻、对位进攻产生的 σ-络合物；邻对比例还受空间位阻和具体试剂影响。'],
 ['organic','michael_conjugate_addition',
 '在合适碱下生成的稳定丙二酸二乙酯碳亲核试剂，与甲基乙烯基酮 CH₂=CH—CO—CH₃ 反应。若条件选择共轭加成，指明新 C—C 键形成的碳位置及净加成类型。',
 '碳亲核试剂进攻 α,β-不饱和酮的 β-碳（末端 CH₂），主要发生 1,4-共轭加成。',
 'Michael 反应形成碳—碳键后烯醇负离子经质子化恢复羰基。该题已限定选择共轭路径，不能把未经限定的所有亲核试剂都说成只发生 1,4-加成。'],
 ['organic','crossed_aldol_selectivity',
 '在适当碱催化和控制的交叉羟醛加成中，以乙醛 CH₃CHO 为烯醇盐来源、苯甲醛 PhCHO 为受体。苯甲醛无 α-H。请写出加成后的 β-羟基醛骨架，并说明若进一步脱水会形成什么共轭骨架。',
 '羟醛加成产物为 Ph—CH(OH)—CH₂—CHO；脱水可给 Ph—CH=CH—CHO（肉桂醛骨架）。',
 '乙醛去 α-H 后其 α-碳进攻苯甲醛羰基碳，质子化生成 β-羟基醛；后续消除 H₂O 后形成与醛基共轭的 C=C。控制条件旨在抑制乙醛自身缩合。'],
 ['organic','base_promoted_ester_saponification',
 '乙酸甲酯 CH₃COOCH₃ 与足量 NaOH 水溶液充分反应，最后不做酸化后处理。写出主要有机产物与离子形态，并解释为何不能直接把产物写为乙酸。',
 '主要得到 CH₃COO⁻Na⁺（乙酸钠）和 CH₃OH（甲醇）；未酸化时不能把羧酸盐写成游离乙酸。',
 '碱促进酯的亲核酰基取代，生成的羧酸在碱性条件下去质子化，羧酸盐不易逆向发生简单酯化，因而使该皂化过程在实际条件下趋向完成。'],
 ['organic','diels_alder_s_cis_and_stereospecificity',
 '1,3-丁二烯与顺丁烯二酸酐在经典 Diels–Alder 条件下反应。对共轭二烯构象有什么要求？原亲双烯体上两个取代基的相对顺式关系是否保留？',
 '二烯须能够采取 s-cis 构象；环加成保持亲双烯体上的相对立体关系，原顺式取代基在产物中仍呈顺式。',
 '协同 [4+2] 环加成在两端形成 σ 键，属于同面参与的立体专一过程。反应的 endo/exo 比例另外依赖条件，不能仅由本题前提断言绝对单一构型。'],
 ['physical','gibbs_phase_rule_one_component',
 '仅考虑纯水的液相与蒸气相共存，且体系已达热力学平衡，无额外约束。按 Gibbs 相律 F=C−P+2 求自由度；如果进一步固定温度，压力是否还能独立任意指定？',
 'C=1、P=2，因此 F=1；在规定的共存温度下，压力由饱和蒸气压决定，不能再独立选择。',
 '两相平衡要求两相化学势相等。未固定外参时只有一个独立强度变量；固定 T 后共存 P 即随之确定，变化的只是两相物质的量。'],
 ['physical','clapeyron_equation_phase_boundary',
 '写出一阶相变的 Clapeyron 方程。若蒸发过程中 ΔH_vap>0、蒸气摩尔体积大于液体摩尔体积，判定液汽共存曲线 dP/dT 的符号并解释。',
 'dP/dT=ΔH/(TΔV)；因为 T>0、ΔH_vap>0、ΔV>0，故 dP/dT>0。',
 'Clapeyron 方程来自共存两相化学势随 T、P 的微分相等。温度提高时，液汽共存饱和压力上升；不可将其当作任意非平衡路径的斜率。'],
 ['physical','reaction_quotient_vs_equilibrium',
 '某反应在给定 T、P 下标准状态一致，热力学反应商 Q=0.10，平衡常数 K=10。写出 ΔrG 与 Q、K 的关系，判定按当前反应式的正向过程是否自发。',
 'ΔrG=RT ln(Q/K)=RT ln(0.01)<0，因此按所写反应方向的微小正向推进在当前状态下有热力学驱动力。',
 '由 ΔrG=ΔrG°+RT lnQ 和 ΔrG°=−RT lnK 合并得到该式；它说明热力学趋向，不保证反应在有限时间内快速发生。'],
 ['physical','arrhenius_plot_activation_energy',
 '假设反应符合 k=A exp(−Ea/RT)，且在研究温区内 A、Ea 近似恒定。以 ln k 为纵轴、1/T 为横轴作图，斜率和截距为何？如果 Ea>0，温度升高 k 如何变化？',
 '斜率 m=−Ea/R，截距 b=ln A；Ea>0 时随 T 增大，k 增大。',
 '取自然对数得 ln k=lnA−(Ea/R)(1/T)，斜率为负。反应速率常数的温度效应并不意味着温度翻倍、k 必定翻倍。'],
 ['physical','ideal_gas_mixing_gibbs',
 '在同温同压下将 1 mol 理想气体 A 与 1 mol 不同种理想气体 B 可逆混合成理想混合物。求混合吉布斯自由能 ΔG_mix，写成 R、T 的表达式，并判断符号。',
 'ΔG_mix=RT[1 ln(1/2)+1 ln(1/2)]=−2RT ln2<0。',
 '理想气体混合的化学势改变为 RT ln x_i；各气体最终摩尔分数均为 1/2，混合熵增加，固定 T、P 下混合自由能降低。'],
 ['physical','kirchhoff_reaction_enthalpy',
 '某反应在 298 K 时标准反应焓 ΔrH°=−100 kJ/mol，在 298—398 K 内反应物和生成物的定压热容差 ΔrCp° 近似为 +20 J/(mol·K)。求 398 K 的标准反应焓。',
 'ΔrH°(398)=−100+20×(398−298)/1000=−98.0 kJ/mol。',
 'Kirchhoff 定律 d(ΔrH°)/dT=ΔrCp°。热容差正值使升温时反应焓变得较不负；计算注意 J 与 kJ 的换算。'],
 ['physical','first_order_half_life',
 '某单一反应服从一级速率律 −dc/dt=kc，k=0.0200 min⁻¹。求半衰期，并说明改变初浓度但保持同样温度与机制时，半衰期如何变化。',
 't₁/₂=ln2/k=34.66 min；在一级速率律和相同 k 的前提下半衰期与初浓度无关。',
 '积分得 c/c₀=e^(−kt)；令 c/c₀=1/2 可解出 t₁/₂。若反应实际偏离一级动力学，结论不可直接沿用。'],
 ['physical','parallel_first_order_branching',
 '某反应物 A 同时发生两条互不干扰的平行一级反应 A→B 与 A→C，速率常数 kB=0.030 min⁻¹、kC=0.020 min⁻¹，两个产物均稳定且不再反应。完全转化时 B、C 的产物摩尔分率各为多少？',
 'B 的分率为 kB/(kB+kC)=0.60，C 的分率为 0.40。',
 '任意时刻生成 B 与 C 的速率分别为 kB[A]、kC[A]，二者比恒为 3:2；积分到 A 完全消耗后总产物量也按相同比例分配。'],
 ['physical','reversible_adiabatic_relation',
 '理想气体在定热容比 γ>1 的条件下作可逆绝热膨胀，体积从 V₁ 增大到 V₂。写出 T、V 的关系，并判断末温与初温的大小，解释绝热与等温的差别。',
 'TV^(γ−1)=常数，T₂=T₁(V₁/V₂)^(γ−1)<T₁。',
 '可逆绝热过程 δq=0，气体对外做功导致内能降低；理想气体内能仅随温度变化。可逆绝热不等于温度保持不变。']
];
export function generate(){
 const ids=new Set(),topics=new Set(),out=[];
 for(const [subject,topic,question,answer,explanation] of ITEMS){
  if(!['inorganic','analytical','organic','physical'].includes(subject))throw Error('Invalid subject');
  if(topics.has(topic)||question.length<55||answer.length<20||explanation.length<45)
   throw Error('Too short or repeated reasoning item '+topic);
  const id=qid(question);
  if(ids.has(id))throw Error('Duplicate reasoning prompt');
  ids.add(id);topics.add(topic);
  out.push({schema_version:1,id,subject,topic,
   question_type:'original_multi_step_chemistry_reasoning',
   resource_type:'original_solved_exercise_not_upstream_question',
   level:'undergraduate',difficulty:'intermediate',
   question,answer,explanation,
   conditions_and_limitations_in_prompt:true,
   requires_human_chemistry_review:true,semantic_duplicate_review_pending:true,
   quality_status:'awaiting_expert_review',publishable:false,
   source:{repository:OWN,file:'scripts/import-original-reasoning-chemistry.mjs',
    license:'CC0-1.0',license_evidence:'https://github.com/'+OWN+'/blob/main/LICENSE-ORIGINAL-QUESTIONS.md',
    content_rights_verified:true,origin:'original_deterministic_generation',
    original_exam_question:false,third_party_question_text_copied:false,
    changes:'Independently authored Chinese reasoning question and worked model explanation; not a past paper or copied university assessment.'}});
 }
 if(out.length!==32||Object.values(Object.groupBy(out,q=>q.subject)).some(v=>v.length!==8))
  throw Error('Expected eight independently authored reasoning cases in each subject');
 return out;
}
export function run(){
 const out=generate(),dir=join(ROOT,'data/candidates');let added=0;
 for(const q of out){const p=join(dir,q.id+'.json');if(!existsSync(p))continue;
  const prev=JSON.parse(readFileSync(p,'utf8'));
  if(JSON.stringify(prev)!==JSON.stringify(q))throw Error('Reasoning item content/review drift: '+q.id);
 }
 mkdirSync(dir,{recursive:true});
 for(const q of out){const p=join(dir,q.id+'.json');if(existsSync(p))continue;
  writeFileSync(p,JSON.stringify(q,null,2)+'\n');added++;}
 const report={schema_version:1,generated:32,topic_families:32,
  by_subject:{inorganic:8,analytical:8,organic:8,physical:8},
  records_exactly_replayed:32,source_license:'CC0-1.0',
  original_exam_questions:0,third_party_question_text_copied:0,
  expert_approved:0,publishable:false,quality_status:'awaiting_expert_review',
  caveat:'Deterministic source/answer comparison and author consistency checks only; chemistry expert fact-check, semantic deduplication and publication permission remain pending.'};
 const dest=join(ROOT,'harvest/import_reports/original_reasoning_chemistry.json');
 mkdirSync(dirname(dest),{recursive:true});
 const body=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(dest)||readFileSync(dest,'utf8')!==body)writeFileSync(dest,body);
 const msg='Original 32 distinct reasoning topics: stored_new='+added+' already_present='+(32-added)+' expert_approved=0';
 console.log(msg);if(process.env.GITHUB_STEP_SUMMARY)appendFileSync(process.env.GITHUB_STEP_SUMMARY,msg+'\n');
 return {added,existing:32-added};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
