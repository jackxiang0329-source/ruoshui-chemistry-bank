# 40 道原创大学化学题：独立复算与人工审校队列

范围：20 道分析/物理专题计算题与 20 道四科综合题。自动复算 **34** 个数值答案；**6** 道纯概念题需要人工审定。
全部候选 **未获专家批准，不可正式组卷发布**。自动验算不能替代化学事实核查或语义去重。

## 优先处理的两项科学条件

- **agcl_common_ion_molar_solubility**：0.1 M NaCl 物理上可能明显非理想；题目规定忽略活度、络合并以近似式求 s。
- **A_to_2B_equilibrium_extent**：题设需明确恒容和所用浓度型无量纲平衡常数，不能未说明就将理想气体标准压力 Kp 视为 Kc。

## 逐题复核表

| 来源 | 科目 | 专题 | 独立数值复算 | 待人工确认条件 |
|---|---|---|---|---|
| analytical_physical | analytical | internal_standard_response_factor | 0.0625000 mol/L | 内标响应系数定义、共洗脱排除与浓度比单位 |
| analytical_physical | analytical | stern_volmer_quenching_constant | 50.0000 L/mol | 单点 Stern–Volmer 斜率不能区分静态与动态猝灭 |
| analytical_physical | analytical | electrogravimetric_copper_assay | 0.0200013 mol/L | 电极质量增加应仅来自定量沉积的金属铜 |
| analytical_physical | analytical | sulfate_baso4_gravimetry | 48.0321 % | BaSO₄ 纯度、恒重、共沉淀及洗涤损失 |
| analytical_physical | analytical | two_step_partition_extraction_efficiency | 25.0000 % | 两次使用新鲜等体积有机相且分层完全 |
| analytical_physical | analytical | carbonate_bicarbonate_distribution_pH | 9.09091 % | 只按 HCO₃⁻ 和 CO₃²⁻ 两形态归一化 |
| analytical_physical | analytical | edta_conditional_complex_fraction | 99.0099 % | 条件稳定常数使用游离总 EDTA，且金属无水解 |
| analytical_physical | analytical | faradaic_iron_coulometric_assay | 0.0310928 mol/L | 一电子氧化、100% 电流效率及体积单位 |
| analytical_physical | analytical | chromatography_baseline_resolution | 1.62500 无量纲 | 使用基线峰宽定义而非半峰宽 |
| analytical_physical | analytical | standard_addition_constant_final_volume | 3.00000 mg/L | 结果是最终测量体系的等效浓度，不是必然的原样浓度 |
| analytical_physical | physical | integrated_clausius_clapeyron | 85.9340 kPa | 汽化焓恒定、理想蒸气和忽略液相体积 |
| analytical_physical | physical | vant_hoff_temperature_equilibrium_shift | 20.7285 无量纲 | 跨温度 K 需保持标准态一致，反应焓近似恒定 |
| analytical_physical | physical | debye_huckel_limit_divalent_activity | 0.862216 无量纲 | 极限定律适用于极稀溶液且活度系数无量纲 |
| analytical_physical | physical | consecutive_first_order_intermediate | 0.232544 无量纲 | A→B→C 依一级动力学且两速率常数不相等 |
| analytical_physical | physical | integrated_second_order_consumption | 0.250000 mol/L | 题设明确为 −dc/dt=kc²，速率常数单位需核验 |
| analytical_physical | physical | sucrose_osmotic_pressure | 2.44653 atm | 蔗糖不电离且稀溶液近似理想 |
| analytical_physical | physical | ideal_gas_isothermal_expansion_entropy | 9.13437 J/K | 可逆等温理想气体熵变及体积比的对数 |
| analytical_physical | physical | freezing_point_depression_effective_factor | 0.353400 K | 有效 van't Hoff 因子是题设值，不可机械视为 2 |
| analytical_physical | physical | maxwell_entropy_volume_ideal_gas | 332.579 J/(K·m³) | 偏导保持温度不变，体积必须为 SI m³ |
| analytical_physical | physical | single_photon_planck_energy | 3.97289e-19 J | 真空波长 nm→m，单光子能量不是每摩尔能量 |
| integrated_four_subject | inorganic | spin_only_magnetic_moment_d5 | 5.91608  | 高自旋 d⁵ 的自旋-only 磁矩不包含轨道角动量 |
| integrated_four_subject | inorganic | octahedral_d9_jahn_teller | 概念题：需人工复核 | 典型 Cu(II) 轴向拉长是常见而非绝对唯一结构 |
| integrated_four_subject | inorganic | fcc_packing_efficiency | 0.740480  | 等径硬球 FCC 堆积，需核验四个晶胞原子与面接触关系 |
| integrated_four_subject | inorganic | magnetite_mixed_oxidation_state | 2.66667  | 氧化数平均值不等同于唯一的微观电子定位 |
| integrated_four_subject | inorganic | agcl_common_ion_molar_solubility | 1.80000e-9  | 0.1 M NaCl 物理上可能明显非理想；题目规定忽略活度、络合并以近似式求 s |
| integrated_four_subject | analytical | acetate_buffer_after_strong_acid | 4.81695  | Henderson–Hasselbalch 近似忽略非理想活度及体积变化 |
| integrated_four_subject | analytical | analytical_detection_quantitation_limits | 0.0900000  | 检测限与定量限采用题设 3σ/m 与 10σ/m，需在文字答案中同时体现 |
| integrated_four_subject | analytical | two_point_external_calibration | 0.400000  | 两点拟合需保留非零截距，不能据两点验证拟合精度 |
| integrated_four_subject | analytical | dichromate_fe2_titration_6_to_1 | 0.0288000  | 酸性重铬酸根 6e⁻ 与 Fe²⁺ 1e⁻ 的计量 |
| integrated_four_subject | analytical | serial_dilution_reconstruction | 5.00000  | 连续定容倍数相乘，忽略移液回收损失 |
| integrated_four_subject | organic | reductive_ozonolysis_methylbutene | 概念题：需人工复核 | 还原后处理裂解 2-甲基-2-丁烯为丙酮和乙醛 |
| integrated_four_subject | organic | grignard_ethylmagnesium_acetone | 概念题：需人工复核 | Grignard 反应必须先保持无水再酸性后处理 |
| integrated_four_subject | organic | basic_epoxide_methoxide_opening | 概念题：需人工复核 | 碱性开环时进攻空间阻力较小的环氧碳 |
| integrated_four_subject | organic | benzoic_acid_meta_directing_nitration | 概念题：需人工复核 | —COOH 是失活间位定位基；不保证单一异构体 |
| integrated_four_subject | organic | ethyl_acetate_1h_nmr_groups | 概念题：需人工复核 | 乙酸乙酯三组 ¹H、3:2:3 积分、单四三重裂分 |
| integrated_four_subject | physical | cu2_concentration_cell | 0.0591600  | 高浓度电池阴极和低浓度阳极；液接电位忽略 |
| integrated_four_subject | physical | cell_gibbs_from_standard_emf | -212.268  | Gibbs 能用 −nFE° 换算且 kJ/J 单位一致 |
| integrated_four_subject | physical | A_to_2B_equilibrium_extent | 0.390388  | 题设需明确恒容和所用浓度型无量纲平衡常数，不能未说明就将理想气体标准压力 Kp 视为 Kc |
| integrated_four_subject | physical | nitrogen_rms_speed_maxwell | 516.839  | 摩尔质量使用 kg/mol，方均根速率与平均速率不同 |
| integrated_four_subject | physical | two_level_boltzmann_degeneracy | 0.269445  | 计算 N1/N0 而非激发态占比，包含二重简并度 |

- JSON 报告同时保留题目 ID、来源类别与正式审核门槛。
