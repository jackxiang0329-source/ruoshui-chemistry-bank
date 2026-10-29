# 第十二辑第三批：I153 A153 O150 P150

本组机器答案不等于专家批准，禁止纳入正式发布题库。

## UC-ADV12-I153 理想自旋二态顺磁盐绝热退磁的配分函数、磁熵及能量守恒

### 题干
一个假想稀疏无机顺磁盐由每摩尔一摩尔等价、不相互作用的有效自旋1/2中心组成，每中心只有沿场磁矩±μ_B，μ_B=9.2740100783×10⁻²⁴ J/T。初始温度T₁=5.000 K、磁场B₁=5.000 T，进行理想可逆绝热退磁至B₂=1.000 T，假定晶格热容、磁相互作用与其他熵完全可以忽略。给定kB=1.380649×10⁻²³ J/K、N_A=6.02214076×10²³ mol⁻¹、R=8.314462618 J/(mol·K)。由自旋配分函数Z=2cosh(μ_B B/kBT)严格推导两态平均磁矩、熵、磁能和热容，计算初态磁化、熵及热容、最终温度、终态磁能和不变的极化，并检查磁熵守恒、两态概率正性、低高场极限及晶格热漏限制。

### 完整中文分步解析
1. 把一摩尔等价且不相互作用的自旋1/2无机磁中心看作理想两态顺磁体，沿外磁场的磁矩为±μ_B，忽略晶格热容和磁相互作用。

2. 单中心Zeeman能级E_±=∓μ_B B，能量差ΔE=2μ_BB，配分函数Z=2cosh x，其中x=μ_BB/(kBT)。

3. 两态平衡平均磁矩〈m〉=μ_B tanh x；每摩尔磁化矩M=N_A μ_B tanh x，磁能U=−N_A μ_BB tanh x。

4. 配分函数热力学得到摩尔磁性熵S=R[ln(2cosh x)−x tanh x]，固定B的热容C_B=R x² sech²x。

5. 本题初始状态B₁=5.000 T、T₁=5.000 K，μ_B=9.2740100783×10⁻²⁴ J/T、kB=1.380649×10⁻²³ J/K。

6. 计算x₁=0.671713815626，磁自旋极化tanh(x₁)=0.586106098104，介于0与1之间。

7. 初始摩尔磁性熵S₁=4.23940659381 J/(mol·K)，小于零场极限Rln2=5.76314632154。

8. 在理想可逆绝热退磁中只有磁子系统承载熵，S保持常数；由于S对正x严格单调，绝热过程要求x₂=x₁，即B₂/T₂=B₁/T₁。

9. 终场B₂=1.000 T得到T₂=T₁ B₂/B₁=1.00000000000 K；若包含晶格热容，这个等比例温降不再精确。

10. 在初始状态摩尔磁能U₁=-16.3668352291 J/mol、固定场热容C_B=2.46277087746 J/(mol·K)。

11. 终态摩尔磁能U₂=-3.27336704581 J/mol，虽然磁矩极化保持不变，磁能随B降低而改变，场源作功应计入。

12. 当B→0且T固定，磁化→0、磁熵→Rln2；当x→∞时S→0。磁相互作用、Schottky杂质、晶格热漏和真实基态简并限制绝热退磁最低温。

### 主要答案向量
- Zeeman_x_initial: 0.6717138156258398 dimensionless
- adiabatic_final_temperature_K: 1 K
- spin_polarization: 0.5861060981043831 fraction
- spin_entropy_J_molK: 4.239406593807768 J/(mol K)
- spin_entropy_over_Rln2: 0.7356062742957706 ratio
- molar_magnetization_Am2_mol: 3.2733670458137274 A m2/mol
- molar_magnetic_energy_initial_J_mol: -16.366835229068638 J/mol
- magnetic_heat_capacity_J_molK: 2.4627708774571437 J/(mol K)
- molar_magnetic_energy_final_J_mol: -3.2733670458137274 J/mol
- mean_moment_per_center_Am2: 5.435553860773137e-24 A m2
- initial_Zeeman_gap_as_K: 6.717138156258398 K
- final_Zeeman_x: 0.6717138156258398 dimensionless
- entropy_change_from_zero_field: -1.5237397277299936 J/(mol K)
- magnetic_field_over_temperature_T_K: 1 T/K

状态：publishable=false、exclude_from_official_bank=true、quality_status=awaiting_expert_review、novelty_review_status=pending_cross_series_model_review。

## UC-ADV12-A153 计时库仑Anson直线的扩散/表面吸附分离与第三时点核验

### 题干
一种分析化学电极采用理想Anson计时库仑：Q(t)=2n F A C√(Dt/π)+Q_dl+nFAΓ，其中单电子转移n=1、F=96485.33212 C/mol、电极面积A=1.000 cm²、体相分析物浓度C=1.000 μmol/L，扩散系数D未知，吸附活性表面过量Γ未知，Q_dl=0.05000 μC为独立测得的双电层电荷。实验t=1.000、4.000、9.000 s的积分电量分别0.490768947900603、0.835052563681206、1.17933617946181 μC。另知单层最大表面过量Γ_max=2.000×10⁻⁸ mol/m²，假定Langmuir θ=K_ads c/(1+K_ads c)。根据前两电量唯一反演D、Γ、Anson直线斜率和截距，预测第三时刻电量，推算覆盖率和K_ads，检查法拉第电荷、表面积、体积浓度单位、正性、时间依赖及理想模型局限。

### 完整中文分步解析
1. 按理想单电子电极还原分析模型，扩散可用半无限平板电极Cottrell规律，计时库仑Anson积分关系Q(t)=2nFA C√(Dt/π)+Q_dl+nFAΓ。

2. 定义电极几何面积A=1.000 cm²=1.000×10⁻⁴ m²，待测物体相浓度C=1.000 μmol/L=0.001000 mol/m³，电子数n=1。

3. 法拉第常数F=96485.33212 C/mol，双层电荷Q_dl=0.05000 μC，吸附的还原活性表面过量Γ未知。

4. 以x=√t、y=Q(t)画Anson直线，则斜率m=2nFA C√(D/π)，截距b=Q_dl+nFAΓ。

5. 实验t=1.000、4.000、9.000 s所得电量分别为0.490768947901、0.835052563681、1.17933617946 μC。

6. 前两个时间√t不同，计算斜率m=0.344283615781 μC/√s、截距b=0.146485332120 μC。

7. 由斜率反演D=π[m/(2nFAC)]²=1.00000000000e-9 m²/s，必须使用C=mol/m³而非误取mol/L。

8. 扣除已校准双电层电荷后，吸附电荷Q_ads=b−Q_dl=0.0964853321200 μC。

9. 吸附过量Γ=Q_ads/(nFA)=1.00000000000e-8 mol/m²，正值且低于题设单层最大表面过量Γ_max=2.000×10⁻⁸ mol/m²。

10. 覆盖率θ=Γ/Γ_max=0.500000000000；如果吸附服从独立位点Langmuir θ=K_ads c/(1+K_ads c)，给c=1.000 μmol/L，反推K_ads=1000000.00000 L/mol。

11. 用独立第三时间点验证Q(9s)=1.17933617946 μC，未用于斜率拟合，检验电量与√t成线性。

12. 一电子电荷、化学物料与单位核验：扩散电量∝C√Dt而吸附电量与t无关；如反应有混合电子数、表面重排、对流、双层随时间充放电或有限扩散层，Anson线性模型失效。

### 主要答案向量
- charge_1s_uC: 0.49076894790060316 uC
- charge_4s_uC: 0.8350525636812064 uC
- charge_9s_uC: 1.1793361794618096 uC
- Anson_slope_uC_per_sqrt_s: 0.34428361578060324 uC/sqrt(s)
- Anson_intercept_uC: 0.14648533211999995 uC
- diffusion_coefficient_m2_s: 1.0000000000000005e-9 m2/s
- adsorbed_surface_excess_mol_m2: 9.999999999999994e-9 mol/m2
- adsorption_charge_uC: 0.09648533212 uC
- double_layer_charge_uC: 0.049999999999999996 uC
- Langmuir_fractional_coverage: 0.49999999999999967 fraction
- Langmuir_equilibrium_M_inv: 999999.9999999987 L/mol
- diffusion_charge_9s_uC: 1.0328508473418097 uC
- charge_ratio_9s_1s: 2.4030374874097857 ratio
- Faraday_area_concentration: 0.009648533212 C mol/(m5)
- intercept_minus_double_layer_C: 9.648533211999995e-8 C

状态：publishable=false、exclude_from_official_bank=true、quality_status=awaiting_expert_review、novelty_review_status=pending_cross_series_model_review。

## UC-ADV12-O150 三异构体一级串联Bateman方程的中间体峰时与完整骨架通量审计

### 题干
某假想含相同元素组成与相同分子式的有机异构体A、B、C在恒定催化剂条件下按唯一串联路径A→B→C不可逆转化，两步一级速率常数k₁=0.1000 s⁻¹、k₂=0.02500 s⁻¹，初始[A]₀=0.01000 mol/L、[B]₀=[C]₀=0。等体积且无旁路或小分子生成。推导A、B、C的完整Bateman浓度解，求20.00 s三组分浓度、分数及瞬时两步通量；求中间体B唯一峰时刻及峰时三种组分，验证峰时通量相等、所有骨架原子守恒、长时间极限，并指出k₁→k₂时表达式的连续极限与实验模型失效条件。

### 完整中文分步解析
1. 设三种分子式完全相同、原子骨架不变的有机异构体A、B、C，在恒定催化剂作用下仅发生不可逆串联A→B→C，不考虑并行路径与反向异构化。

2. 两个步骤为独立一级反应，速率常数k₁=0.1000 s⁻¹、k₂=0.02500 s⁻¹，初始只有A，浓度C₀=0.01000 mol/L。

3. 微分方程dA/dt=−k₁A、dB/dt=k₁A−k₂B、dC/dt=k₂B，三者相加严格为0。

4. 第一个方程独立积分得到A(t)=C₀e^(−k₁t)，随后对B的线性受迫方程采用积分因子。

5. 在k₁≠k₂条件下中间体B(t)=C₀k₁/(k₁−k₂)[e^(−k₂t)−e^(−k₁t)]，且C(t)=C₀−A(t)−B(t)。

6. 在t=20 s，A浓度=0.00135335283237、B=0.00628260501968、C=0.00236404214795 mol/L。

7. 三者之和=0.0100000000000 mol/L，等于C₀，且每一项非负，确保异构体骨架和原子数严格守恒。

8. 中间体B先增加后减少，极大值条件dB/dt=0等价于k₁A=k₂B；由于指数的严格单调关系，只存在唯一正极大时刻。

9. 代入Bateman解得t_peak=ln(k₁/k₂)/(k₁−k₂)=18.4839248149 s。

10. 在峰时B_peak=0.00629960524947 mol/L，A=0.00157490131237、C=0.00212549343816 mol/L；同时满足k₁A_peak=k₂B_peak。

11. 在20.00 s的A→B瞬时通量=0.000135335283237、B→C通量=0.000157065125492 mol/(L·s)；它们不必相等，因为不一定恰好在峰时。

12. 当t→∞时A、B均趋0而C→C₀；若k₁=k₂应取Bateman表达式的连续极限B=C₀ k₁t e^(−k₁t)，避免0/0问题。

13. 本题仅适用于三异构体同元素同式量及指定单向一级机理；真实多步反应可能有逆反应、短寿命中间体、副产物或溶剂催化改变速率常数。

### 主要答案向量
- A_at_20s_M: 0.0013533528323661271 mol/L
- B_at_20s_M: 0.006282605019680276 mol/L
- C_at_20s_M: 0.0023640421479535966 mol/L
- B_peak_time_s: 18.48392481493187 s
- B_peak_concentration_M: 0.006299605249474365 mol/L
- A_at_B_peak_M: 0.001574901312368592 mol/L
- C_at_B_peak_M: 0.0021254934381570436 mol/L
- B_fraction_at_20s: 0.6282605019680275 fraction
- C_fraction_at_20s: 0.23640421479535967 fraction
- A_to_B_flux_20s_M_s: 0.00013533528323661273 mol/(L s)
- B_to_C_flux_20s_M_s: 0.0001570651254920069 mol/(L s)
- rate_constant_ratio: 4 ratio
- total_isomer_skeleton_M: 0.009999999999999998 mol/L
- first_exponential_at_peak: 0.1574901312368592 ratio
- second_exponential_at_peak: 0.6299605249474366 ratio

状态：publishable=false、exclude_from_official_bank=true、quality_status=awaiting_expert_review、novelty_review_status=pending_cross_series_model_review。

## UC-ADV12-P150 van der Waals气体超临界体积唯一根、Joule–Thomson导数与残余焓

### 题干
一假想单一真实气体服从van der Waals状态方程p=RT/(V_m−b)−a/V_m²，参数a=0.3640 Pa·m⁶/mol²、b=4.270×10⁻⁵ m³/mol，R=8.314462618 J/(mol·K)。在T=350.0 K、p=5.000 MPa时，给定摩尔定压热容C_p=40.00 J/(mol·K)用于局部Joule–Thomson估算。由临界条件推导T_c、p_c、V_c，证明指定超临界温度下V_m>b的物理根唯一，数值解出摩尔体积、Z、等温压强体积导数与体积模量、恒压体积热导数，计算μ_JT=[T(∂V_m/∂T)_p−V_m]/C_p以及残余焓H^R=−a/V_m+pV_m−RT。检查两个压力项回代、量纲和不同温区模型局限。

### 完整中文分步解析
1. 对一种假想单组分真实气体采用van der Waals状态方程p=RT/(V_m−b)−a/V_m²，其中a=0.3640 Pa·m⁶/mol²、b=4.270×10⁻⁵ m³/mol。

2. 要求摩尔体积V_m>b，选择温度T=350.0 K、压力p=5.000 MPa，给定理想气体常数R=8.314462618 J/(mol·K)。

3. van der Waals临界条件(∂p/∂V)_T=(∂²p/∂V²)_T=0导出V_c=3b、T_c=8a/(27Rb)、p_c=a/(27b²)。

4. 计算临界温度T_c=303.784454758 K、临界压力p_c=7.39404125591 MPa，指定350 K在临界温度以上。

5. 当T>T_c时van der Waals等温曲线在V>b区间严格单调降低；在V→b⁺压强趋∞，V→∞压强趋0，故正压力有唯一物理摩尔体积。

6. 用严格包围二分法求V_m=0.000488782364228 m³/mol，亦即488.782364228 cm³/mol。

7. 计算压缩因子Z=pV_m/(RT)=0.839814372145；此处Z不等于分配函数而是偏离理想气体的无量纲量。

8. 等温体积导数p_V=−RT/(V_m−b)²+2a/V_m³，稳定单相分支要求p_V<0。

9. 给出p_V=-8389941774.12 Pa·mol/m³、等温体积模量−V_m p_V=4.10085557609 MPa。

10. 对固定压力隐式微分状态方程得(∂V/∂T)_p=−p_T/p_V，其中p_T=R/(V_m−b)，结果必为正。

11. 由热力学Joule–Thomson式μ_JT=[T(∂V/∂T)_p−V]/C_p，取给定C_p=40 J/(mol·K)，得到μ_JT=0.00000721918655294 K/Pa，即0.721918655294 K/bar。

12. van der Waals气体残余摩尔内能U^R=−a/V_m，与理想气比较残余焓H^R=−a/V_m+pV_m−RT；该式可独立检查热力学量纲。

13. 回代状态方程验证斥力与引力压强项之差等于5.000 MPa；低于临界温度时可能出现多数学根与相变，不能复用超临界唯一根论证。

### 主要答案向量
- vdW_critical_T_K: 303.78445475832524 K
- vdW_critical_pressure_MPa: 7.394041255906345 MPa
- vdW_critical_molar_volume_m3_mol: 0.0001281 m3/mol
- molar_volume_350K_5MPa_m3_mol: 0.0004887823642283043 m3/mol
- molar_volume_cm3_mol: 488.7823642283043 cm3/mol
- compressibility_factor_Z: 0.8398143721453304 dimensionless
- isothermal_pressure_volume_derivative: -8389941774.116933 Pa mol/m3
- isothermal_bulk_modulus_MPa: 4.100855576090688 MPa
- dV_dT_at_fixed_P_m3_molK: 0.0000022215709324164286 m3/(mol K)
- Joule_Thomson_coefficient_K_Pa: 0.0000072191865529361414 K/Pa
- Joule_Thomson_K_bar: 0.7219186552936141 K/bar
- residual_enthalpy_J_mol: -1210.8578150752714 J/mol
- repulsive_pressure_term_Pa: 6523597.769515575 Pa
- attractive_pressure_term_Pa: 1523597.7695155735 Pa
- reconstructed_pressure_Pa: 5000000.000000002 Pa

状态：publishable=false、exclude_from_official_bank=true、quality_status=awaiting_expert_review、novelty_review_status=pending_cross_series_model_review。

