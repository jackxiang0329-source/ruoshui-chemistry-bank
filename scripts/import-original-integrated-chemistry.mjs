#!/usr/bin/env node
import {createHash} from 'node:crypto';
import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {join,dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=dirname(dirname(fileURLToPath(import.meta.url))),OWN='jackxiang0329-source/ruoshui-chemistry-bank';
export const ITEMS=[
 [
  "inorganic",
  "spin_only_magnetic_moment_d5",
  "高自旋 Mn²⁺ 为 3d⁵，假定轨道贡献被猝灭，按 μ/μB=√[n(n+2)] 求自旋磁矩并指出局限。",
  "未成对电子 n=5，μ=√35 μB≈5.916 μB。",
  "Mn²⁺ 为 3d⁵，高自旋五个电子分别单占 d 轨道，套入自旋-only 磁矩式；该近似忽略轨道贡献及自旋轨道耦合。",
  5.916079783099616
 ],
 [
  "inorganic",
  "octahedral_d9_jahn_teller",
  "比较理想八面体 Cu²⁺(d⁹) 与 Zn²⁺(d¹⁰) 的 Jahn–Teller 畸变驱动力；哪一个更强，常见的畸变形式是什么？",
  "Cu²⁺ 的一阶 Jahn–Teller 驱动力更强，常见轴向拉长；Zn²⁺ 的 d¹⁰ 无同类一阶轨道简并驱动。",
  "八面体 Cu²⁺ 的 e_g 电子占据引起基态简并，可通过降低对称性获得稳定化；具体压缩或拉长仍取决于配体和晶体环境。",
  null
 ],
 [
  "inorganic",
  "fcc_packing_efficiency",
  "对等径硬球面心立方 FCC 晶格，求常规晶胞中的原子数、边长 a 与球半径 r 的关系，以及球的体积填充率。",
  "4 个原子；a=2√2r；填充率 η=π/(3√2)≈0.740。",
  "八个角贡献 1 个、六个面心贡献 3 个，合计 4；球沿面对角线接触，4r=√2a；将四球总体积除以 a³。",
  0.7404804896930609
 ],
 [
  "inorganic",
  "magnetite_mixed_oxidation_state",
  "Fe₃O₄ 中若 O 全是 −2 价，求 Fe 平均氧化态；若采用 Fe²⁺/Fe³⁺ 两种价态模型，求每化学式单位的两类 Fe 数量。",
  "铁平均价态 +8/3；经典模型为 1 个 Fe²⁺ 与 2 个 Fe³⁺。",
  "由电荷守恒三铁合计 +8；方程 x+y=3、2x+3y=8 给出 x=1,y=2。平均价态本身不足以唯一证明微观电子分布。",
  2.6666666666666665
 ],
 [
  "inorganic",
  "agcl_common_ion_molar_solubility",
  "AgCl 的 Ksp=1.80×10⁻¹⁰，置于含 0.100 mol/L NaCl 的理想水溶液中。忽略络合和活度修正，求 AgCl 摩尔溶解度 s 并验证近似。",
  "s≈Ksp/0.100=1.80×10⁻⁹ mol/L，满足 s≪0.100 mol/L。",
  "准确关系是 s(0.100+s)=Ksp；由于共同离子 Cl⁻ 远多于溶解贡献，分母可近似为 0.100。真实溶液须另考虑活度。",
  1.8e-9
 ],
 [
  "analytical",
  "acetate_buffer_after_strong_acid",
  "乙酸缓冲液初含乙酸 0.0500 mol、乙酸根 0.0800 mol，加入 HCl 0.0100 mol，忽略体积变化，pKa=4.750。求最终 pH。",
  "乙酸根剩 0.0700 mol，乙酸增至 0.0600 mol；pH=4.750+log₁₀(7/6)≈4.817。",
  "先用乙酸根定量中和强酸，再应用 Henderson–Hasselbalch 方程；须假定浓度比近似活动度比且未耗尽缓冲组分。",
  4.816946789630613
 ],
 [
  "analytical",
  "analytical_detection_quantitation_limits",
  "校准斜率 m=0.200 A/(mmol/L)，空白响应标准差 σ=0.0060 A，题设 LOD=3σ/m，LOQ=10σ/m。分别计算两限值。",
  "LOD=0.090 mmol/L；LOQ=0.300 mmol/L。",
  "检测响应噪声除以校准斜率换算为浓度，再分别乘系数 3 和 10；实际 LOD 定义及基质效应须另外确认。",
  0.09
 ],
 [
  "analytical",
  "two_point_external_calibration",
  "两个标准 (c,A) 分别为 (0.200 mmol/L,0.150) 与 (0.600 mmol/L,0.470)。若 A=mc+b，未知样品 A=0.310，求浓度。",
  "m=0.800 L/mmol、b=−0.010，c样=(0.310+0.010)/0.800=0.400 mmol/L。",
  "以两点求斜率和截距，不能把截距当零；通过 c=(A−b)/m 反算，两个点本身不能提供精度评估。",
  0.4
 ],
 [
  "analytical",
  "dichromate_fe2_titration_6_to_1",
  "用 0.01000 mol/L 重铬酸钾 12.00 mL 滴定酸性 25.00 mL Fe²⁺ 溶液，设 Cr₂O₇²⁻ 接受 6e⁻、Fe²⁺ 失去 1e⁻。求 Fe²⁺ 浓度。",
  "n(Fe²⁺)=6×0.01000×0.01200=0.0007200 mol，浓度为 0.02880 mol/L。",
  "酸性介质中一个重铬酸根对应六个亚铁离子；先计算滴定剂物质的量，再按 6:1 系数换算待测液。",
  0.0288
 ],
 [
  "analytical",
  "serial_dilution_reconstruction",
  "原水样先取 5.00 mL 定容到 100.0 mL，再取所得溶液 10.00 mL 定容至 50.00 mL，最终浓度 0.0500 mg/L。求原液浓度。",
  "总稀释倍数 20×5=100，原液为 5.00 mg/L。",
  "连续定量稀释的浓度倍率相乘，不能只乘最后一步；假设转移无损失且测量在相同分析物定义下进行。",
  5
 ],
 [
  "organic",
  "reductive_ozonolysis_methylbutene",
  "(CH₃)₂C=CHCH₃ 即 2-甲基-2-丁烯经 O₃ 臭氧化再用 Me₂S 还原后处理，不继续氧化醛。两个有机羰基产物为何？",
  "生成丙酮 CH₃COCH₃ 和乙醛 CH₃CHO。",
  "将烯烃双键两端各转为羰基：带两个甲基的一端给酮，带 H 的另一端给醛；还原性后处理不使醛成为羧酸。",
  null
 ],
 [
  "organic",
  "grignard_ethylmagnesium_acetone",
  "乙基溴化镁 CH₃CH₂MgBr 与无水丙酮加成，后经酸性水解。假设反应完全且无副反应，给出产物结构和醇的级数。",
  "产物 (CH₃)₂C(OH)CH₂CH₃，即 2-甲基-2-丁醇，属于三级醇。",
  "乙基亲核加至酮羰基碳生成三级烷氧基镁盐，水解得三级醇；若先遇水，格氏试剂会被淬灭。",
  null
 ],
 [
  "organic",
  "basic_epoxide_methoxide_opening",
  "1,2-环氧丙烷在碱性条件下被甲氧负离子 CH₃O⁻ 开环并质子化，假设 SN2 区域选择性主导。写出主产物并说明进攻位点。",
  "主产物 CH₃CH(OH)CH₂OCH₃，即 1-甲氧基丙-2-醇。",
  "碱性亲核条件下甲氧负离子优先进攻较少取代的末端环氧 CH₂，生成另一侧氧负离子后再质子化；酸催化规则不同。",
  null
 ],
 [
  "organic",
  "benzoic_acid_meta_directing_nitration",
  "苯甲酸在常规控制的亲电芳香单硝化条件下，—COOH 对取代速率和定位有何作用？主要产物名称是什么？",
  "—COOH 使芳环失活且间位定位，主要生成 3-硝基苯甲酸（间硝基苯甲酸）。",
  "羧基通过诱导和共振吸电子降低电子密度；邻、对位 σ-络合物较不稳定。具体副产物与异构体比例还依赖反应条件。",
  null
 ],
 [
  "organic",
  "ethyl_acetate_1h_nmr_groups",
  "忽略远程弱耦合，乙酸乙酯 CH₃COOCH₂CH₃ 的一维 ¹H NMR 有几组信号？给出主要积分和裂分。",
  "三组：CH₃CO 单峰 3H，OCH₂ 四重峰 2H，末端 CH₃ 三重峰 3H。",
  "乙酰甲基邻近羰基无可耦合 H；CH₂ 与相邻 3H 耦合呈四重峰；末端甲基与相邻 2H 耦合呈三重峰。",
  null
 ],
 [
  "physical",
  "cu2_concentration_cell",
  "25°C 的 Cu²⁺/Cu 浓差电池两侧 Cu²⁺ 活度分别为 1.00 与 0.0100，忽略液接电势，取 2.303RT/F=0.05916 V。求正电动势及阳极所在侧。",
  "E=0.05916/2×log₁₀(100)=0.05916 V；低活度侧为阳极。",
  "浓差电池 E°=0；低 Cu²⁺ 活度侧氧化铜金属补充离子，高活度侧 Cu²⁺ 还原，正电压由 Nernst 式给出。",
  0.05916
 ],
 [
  "physical",
  "cell_gibbs_from_standard_emf",
  "某标准原电池反应的转移电子数 n=2，E°=1.100 V，F=96485.33212 C/mol。求 ΔrG°，单位 kJ/mol。",
  "ΔrG°=−nFE°≈−212.268 kJ/mol。",
  "一个反应式单位转移两摩尔电子，1 V·C=1 J，所以 ΔrG°=−2×96485.33212×1.100/1000，负值说明标准态有正向热力学驱动力。",
  -212.26773066400003
 ],
 [
  "physical",
  "A_to_2B_equilibrium_extent",
  "理想混合物 A(g) ⇌ 2B(g)，初始 [A]=1 mol/L、[B]=0，温度下无量纲 K=1，参考标准浓度 c°=1 mol/L。求平衡正向进度 x（mol/L）。",
  "令 [A]=1−x、[B]=2x，则 4x²/(1−x)=1；正根 x=(√17−1)/8≈0.390388 mol/L。",
  "用反应进度写物质守恒，代入标准浓度归一化的无量纲平衡常数，舍去超出 0≤x≤1 的另一个根。",
  0.3903882032022076
 ],
 [
  "physical",
  "nitrogen_rms_speed_maxwell",
  "N₂ 在 300.0 K 可视作理想气体，M=0.0280134 kg/mol、R=8.314462618 J/(mol·K)。用 Maxwell–Boltzmann 分布求方均根速率。",
  "v_rms=√(3RT/M)≈516.84 m/s。",
  "由理想气体每分子平动平均动能 (3/2)kBT 推出 v_rms²=3RT/M；摩尔质量必须用 kg/mol，不能用 g/mol。",
  516.8391885639508
 ],
 [
  "physical",
  "two_level_boltzmann_degeneracy",
  "一个两能级体系 g₀=1、g₁=2，能隙 ΔE=5.000 kJ/mol，T=300.0 K，R=8.314462618 J/(mol·K)。求激发与基态数目之比 N₁/N₀。",
  "N₁/N₀=2exp[−5000/(8.314462618×300)]≈0.26944。",
  "两能级配分因子之比是简并度之比乘玻尔兹曼因子；答案是激发态与基态的比值，而非激发态占全部的分数。",
  0.2694447092431697
 ]
];

const R=8.314462618,F=96485.33212;
export const idFor=q=>createHash('sha256').update(q.normalize('NFKC').replace(/\s+/g,' ').trim().toLowerCase()).digest('hex');
export function verifyNumeric(topic,x){
 const checks={
 spin_only_magnetic_moment_d5:()=>Math.abs(x*x-35)<1e-10,
 fcc_packing_efficiency:()=>Math.abs(x-4*(4*Math.PI/3)/(2*Math.SQRT2)**3)<1e-10,
 magnetite_mixed_oxidation_state:()=>Math.abs(3*x-8)<1e-10,
 agcl_common_ion_molar_solubility:()=>Math.abs(x*(.1+x)/1.8e-10-1)<1e-6,
 acetate_buffer_after_strong_acid:()=>Math.abs(10**(x-4.75)-7/6)<1e-10,
 analytical_detection_quantitation_limits:()=>Math.abs(x*.2-3*.006)<1e-10,
 two_point_external_calibration:()=>Math.abs(.8*x-.01-.31)<1e-10,
 dichromate_fe2_titration_6_to_1:()=>Math.abs(.025*x-6*.01*.012)<1e-10,
 serial_dilution_reconstruction:()=>Math.abs(x*.05-.25)<1e-10,
 cu2_concentration_cell:()=>Math.abs(x-.05916)<1e-10,
 cell_gibbs_from_standard_emf:()=>Math.abs(x*1000+2*F*1.1)<1e-8,
 A_to_2B_equilibrium_extent:()=>Math.abs(4*x*x/(1-x)-1)<1e-10,
 nitrogen_rms_speed_maxwell:()=>Math.abs(x*x*.0280134-3*R*300)<1e-7,
 two_level_boltzmann_degeneracy:()=>Math.abs(x*Math.exp(5000/(R*300))-2)<1e-10
 };
 if(!Number.isFinite(x)||!checks[topic]||!checks[topic]())throw Error('Invalid numeric chemistry witness: '+topic);
 return true;
}
export function generate(){
 const seen=new Set(),topics=new Set(),out=[];
 for(const [subject,topic,question,answer,explanation,numeric] of ITEMS){
  if(!['inorganic','analytical','organic','physical'].includes(subject)||!question||!answer||!explanation)
   throw Error('Incomplete authored problem');
  if(numeric!==null)verifyNumeric(topic,numeric);
  const id=idFor(question);
  if(seen.has(id)||topics.has(topic))throw Error('Duplicate authored chemistry case');
  seen.add(id);topics.add(topic);
  out.push({schema_version:1,id,subject,topic,level:'undergraduate',difficulty:'intermediate',
   question_type:'original_integrated_chemistry_exercise',
   resource_type:'original_solved_exercise_not_upstream_question',question,answer,explanation,
   ...(numeric===null?{}:{numeric_answers:[numeric]}),
   model_inverse_crosscheck:numeric===null?'conceptual_requires_expert':'numeric_witness_checked',
   scientifically_machine_checked:numeric!==null,scientific_human_approval:false,
   semantic_duplicate_review_pending:true,quality_status:'awaiting_expert_review',publishable:false,
   source:{repository:OWN,file:'scripts/import-original-integrated-chemistry.mjs',
    license:'CC0-1.0',license_evidence:'https://github.com/'+OWN+'/blob/main/LICENSE-ORIGINAL-QUESTIONS.md',
    content_rights_verified:true,origin:'original_deterministic_generation',original_exam_question:false,
    third_party_question_text_copied:false,changes:'Independently authored hypothetical university chemistry exercise and solution, not copied from any exam or textbook.'}});
 }
 if(out.length!==20||ITEMS.filter(q=>q[5]!==null).length!==14)throw Error('Unexpected integrated chemistry count');
 for(const subject of ['inorganic','analytical','organic','physical'])
  if(out.filter(q=>q.subject===subject).length!==5)throw Error('Incomplete subject '+subject);
 return out;
}
export function run(){
 const rows=generate(),dir=join(ROOT,'data/candidates');let added=0;
 for(const q of rows){const p=join(dir,q.id+'.json');if(!existsSync(p))continue;
  if(JSON.stringify(JSON.parse(readFileSync(p,'utf8')))!==JSON.stringify(q))
   throw Error('Stored answer or publication flag differs from original: '+q.id);}
 mkdirSync(dir,{recursive:true});
 for(const q of rows){const p=join(dir,q.id+'.json');if(existsSync(p))continue;
  writeFileSync(p,JSON.stringify(q,null,2)+'\n');added++;}
 const report={schema_version:1,generated:20,unique_concepts:20,
  by_subject:{inorganic:5,analytical:5,organic:5,physical:5},
  numeric_model_witnesses:14,conceptual_human_review_required:6,
  records_exactly_replayed:20,source_license:'CC0-1.0',
  original_exam_questions:0,third_party_question_text_copied:0,human_expert_approved:0,
  publishable:false,note:'20 distinct original topics; 14 independent numerical checks and six conceptual-only answers. No item has expert approval.'};
 const dest=join(ROOT,'harvest/import_reports/original_integrated_chemistry.json');
 mkdirSync(dirname(dest),{recursive:true});
 const body=JSON.stringify(report,null,2)+'\n';
 if(!existsSync(dest)||readFileSync(dest,'utf8')!==body)writeFileSync(dest,body);
 console.log('Original 20 integrated chemistry topics: new='+added+' existing='+(20-added)+' exam_ready=0');
 return {added,existing:20-added};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{run();}catch(e){console.error(e.stack);process.exitCode=1;}
}
