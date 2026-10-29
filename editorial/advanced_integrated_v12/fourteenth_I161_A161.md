# 第十二辑 I161 / A161 大学化学综合题

未通过人类专家审核的编辑候选，禁止正式发布。

## UC-ADV12-I161 FeO–CO/CO2氧化还原平衡与Ellingham氧逸度的双循环反演

### 完整中文题干
某假想还原炉在1000.0 K保持恒温恒容，进行FeO(s)+CO(g)⇌Fe(s)+CO₂(g)反应。假设纯固体活度1、气体理想、无其它铁氧化态或副反应，反应标准ΔH°=−15.00 kJ/mol、ΔS°=−10.00 J/(mol K)，温度范围内常量；初始FeO(s)=0.01200 mol、CO=0.02000 mol、CO₂=0.005000 mol、Fe(s)=0，R=8.314462618 J/(mol K)。求ΔG°、K、平衡反应程度、残余FeO与CO、生成Fe与CO₂、FeO转化率，并证明两种固体确实共存且平衡根唯一。另给同温度FeO(s)→Fe(s)+½O₂(g)标准ΔG°=+150.0 kJ/mol，构造Fe/FeO缓冲的等效氧逸度并由CO+½O₂→CO₂自由能独立反算CO₂/CO比；核对Fe/C/O元素库存、电子转移数和恒温移热量，说明何时纯固体活度模型失效。

### 严格逐步解析
1. 假定FeO(s)+CO(g)⇌Fe(s)+CO₂(g)在1000 K理想恒温恒容密闭容器中达到平衡，两种纯固体活度视为1，气体按理想混合且无水煤气变换。

2. 标准反应焓ΔH°=−15.00 kJ/mol、熵ΔS°=−10.00 J/(mol K)，均视为温度不变，故ΔG°=ΔH°−TΔS°。

3. 在T=1000 K得ΔG°=-5.00000000000 kJ/mol，平衡常数K=exp[−ΔG°/(RT)]=1.82460180689。

4. 由于反应两侧气体分子摩尔数各为1，且同一温度体积，总压因子抵消；若FeO与Fe共存，K=p_CO2/p_CO=n_CO2/n_CO。

5. 设反应程度ξ，以起始CO 0.02000 mol、CO₂ 0.005000 mol、FeO 0.01200 mol，得到n_CO=0.02000−ξ、n_CO2=0.005000+ξ、n_FeO=0.01200−ξ。

6. 共存固体时求(0.005000+ξ)/(0.02000−ξ)=K，得到唯一线性根ξ=[K n_CO,0−n_CO2,0]/(1+K)。

7. 数值ξ=0.0111491949276 mol，介于0与FeO初值0.01200 mol之间，故Fe与FeO确实能共存，未到端点耗尽情形。

8. CO剩余0.00885080507241 mol，CO₂生成后总量0.0161491949276 mol，FeO剩余0.000850805072411 mol，金属Fe产量0.0111491949276 mol。

9. FeO转化率ξ/n_FeO,0=0.929099577299，CO₂/CO比=1.82460180689；重新代入得化学平衡常数，与独立热力学K相符。

10. 以另一个假想标准反应FeO(s)→Fe(s)+½O₂(g)在1000 K的ΔG°_decomp=+150.0 kJ/mol构建独立氧势参照。

11. Fe/FeO平衡缓冲给p_O2/p°=exp[−2ΔG°_decomp/(RT)]=2.13753858777e-16，这是氧化学势的等效氧逸度，不必意味着容器里存在可观的游离氧气。

12. Hess自由能关系使CO+½O₂→CO₂的标准Gibbs能为ΔG°_CO=ΔG°_rxn−ΔG°_decomp=−155.0 kJ/mol。

13. 由K_CO=exp[−ΔG°_CO/(RT)]与其反应商Q_CO=(p_CO2/p_CO)/(p_O2/p°)^(1/2)，回代预测CO₂/CO=K_CO√(p_O2/p°)=1.82460180689。

14. 逐元素盘点：气相总碳=CO+CO₂=0.0250000000000 mol；氧原子初始0.0420000000000 mol、末态0.0420000000000 mol；Fe在FeO与Fe中合计不变。

15. Fe²⁺→Fe⁰消耗2ξ mol电子，CO中的C(+II)→CO₂中C(+IV)释放2ξ mol电子；若绝热以外条件放热总量ΔH ξ=-167.237923914 J须由恒温装置移走。

16. 仅在FeO和Fe固体仍同时存在时，上述纯固体活度条件成立；若氧气气相、固溶体、Fe₃O₄或非理想气体显著，需要加入其它平衡与物料约束。

### 数值答案与单位
- standard_reaction_G_kJ_mol: -5 kJ/mol
- reaction_equilibrium_constant: 1.8246018068940215 dimensionless
- solid_reaction_extent_mol: 0.011149194927588604 mol
- remaining_CO_mol: 0.008850805072411396 mol
- final_CO2_mol: 0.016149194927588605 mol
- remaining_FeO_mol: 0.0008508050724113959 mol
- formed_Fe_mol: 0.011149194927588604 mol
- FeO_reduced_fraction: 0.9290995772990503 fraction
- final_CO2_CO_ratio: 1.8246018068940217 ratio
- total_gas_carbon_mol: 0.025 mol
- initial_oxygen_atom_mol: 0.042 mol
- final_oxygen_atom_mol: 0.042 mol
- FeO_Fe_buffer_oxygen_fugacity_bar_over_standard: 2.1375385877661222e-16 pO2/pstandard
- CO_oxidation_equilibrium_constant: 124799003.85867761 ratio
- CO_ratio_reconstructed_from_O2_fugacity: 1.8246018068940213 ratio
- total_reaction_enthalpy_J: -167.23792391382906 J
- threshold_CO2_CO_ratio_at_FeO_exhaustion: 2.125 ratio
- electron_transfer_mol: 0.02229838985517721 mol electrons

假设：仅在FeO和Fe固体仍同时存在时，上述纯固体活度条件成立；若氧气气相、固溶体、Fe₃O₄或非理想气体显著，需要加入其它平衡与物料约束。

审核状态：publishable=false、exclude_from_official_bank=true、awaiting_expert_review、pending_cross_series_model_review。

## UC-ADV12-A161 Van Deemter塔板高度三点反演与最优流速、分离度联合优化

### 完整中文题干
某液相色谱分析柱长L=20.00 cm，在恒定溶剂与温度下假设Van Deemter塔板高度H(u)=A+B/u+Cu，u为流动相线速度(cm/s)，未知A、B、C均为正。三组已校正测量为u₁=0.01000 cm/s时H₁=0.005500 cm、u₂=0.02000 cm/s时H₂=0.004000 cm、u₃=0.05000 cm/s时H₃=0.004300 cm。求A、B、C（含完整单位），推导唯一最佳线速度及最低塔板高度，并求最大理论塔板数。若第二分析物保留因子k₂=3.000、选择性α_sel=k₂/k₁=1.100，采用近似分离度R_s≈√N/4×[(α_sel−1)/α_sel]×[k₂/(1+k₂)]，计算最优线速度下死时间、第二峰保留时间、Gaussian时间标准差及预计分离度。核对三点数据回算、最优处纵向扩散与传质项相等及两倍最优流速下H的上升，并解释理想色谱近似。

### 严格逐步解析
1. 按色谱柱流动相线速度u的简化Van Deemter式H(u)=A+B/u+Cu描述理论塔板高度，A为涡流扩散常数、B/u为纵向分子扩散项、Cu为传质滞后项。

2. 塔板高度H和A单位均为cm，若u用cm/s，则B必须取cm²/s、C必须取s，避免将流量或体积流速误当线速度。

3. 给定三次流动相线速度u=0.01000、0.02000、0.05000 cm/s和对应塔板高度数据，用同一模型构建线性未知量(A,B,C)三元方程。

4. 观测三点H分别为0.00550000000000、0.00400000000000、0.00430000000000 cm；三点不同且设计矩阵满秩，可唯一识别全部三个系数。

5. 两式相减消去A，得到ΔH_12=B(1/u1−1/u2)+C(u1−u2)，ΔH_23=B(1/u2−1/u3)+C(u2−u3)，解2×2线性系统。

6. 得到B=0.0000400000000000 cm²/s、C=0.0500000000000 s，再回代A=0.00100000000000 cm，三者均正。

7. 对u>0求dH/du=−B/u²+C；当B,C>0时唯一驻点u*=√(B/C)，二阶导数2B/u³>0，故为全局最小塔板高度。

8. 最优线速度u*=0.0282842712475 cm/s，最低塔板高度Hmin=A+2√(BC)=0.00382842712475 cm。

9. 长度L=20 cm的柱在最优流速下理论塔板数N=L/Hmin=5224.07749927，是无量纲数且不能拿有效柱长单位误代为mm。

10. 理想移动相死时间t0=L/u*，保持容量因子k₂=3.000不随u变化则第二组分保留时间t_R,2=t0(1+k₂)。

11. 算得t0=707.106781187 s、t_R,2=2828.42712475 s，标准高斯峰时间尺度σ_t=t_R,2/√N=39.1327337391 s。

12. 设相邻两组分选择性α_sel=k₂/k₁=1.100、k₂=3.000，采用近似基础分离度公式R_s≈(√N/4)[(α_sel−1)/α_sel][k₂/(1+k₂)]。

13. 由该近似求R_s=1.23200761571；此值需与实际目标分离度（通常1.5附近作为基线分离经验标准）比较，不能将纯塔板数变大等同于实际分离。

14. 在u*处B/u*=Cu*=0.00141421356237 cm，说明扩散/传质贡献相等；两倍最优流速塔板高度之比=1.18469903126，作为非极小值检查。

15. 题设只使用常系数Van Deemter近似和高斯峰分离度，现实中溶质扩散系数与保留系数会随溶剂、温度、流速和柱填充改变，三点拟合须另做实验误差分析。

### 数值答案与单位
- H_plate_0p01_cm: 0.0055 cm
- H_plate_0p02_cm: 0.004 cm
- H_plate_0p05_cm: 0.0043 cm
- fitted_A_cm: 0.0010000000000000015 cm
- fitted_B_cm2_s: 0.00003999999999999998 cm2/s
- fitted_C_s: 0.04999999999999998 s
- optimal_linear_velocity_cm_s: 0.0282842712474619 cm/s
- minimum_plate_height_cm: 0.0038284271247461905 cm
- optimal_theoretical_plate_number: 5224.077499274828 plates
- void_time_at_optimum_s: 707.1067811865476 s
- second_peak_retention_time_s: 2828.42712474619 s
- approximate_resolution_Rs: 1.232007615705374 dimensionless
- second_peak_time_standard_deviation_s: 39.13273373914064 s
- longitudinal_diffusion_term_at_opt_cm: 0.0014142135623730944 cm
- mass_transfer_term_at_opt_cm: 0.0014142135623730946 cm
- plate_height_backcheck_cm: 0.0038284271247461905 cm
- sum_of_flow_dependent_optimal_terms_cm: 0.0028284271247461888 cm
- twice_optimum_velocity_H_ratio: 1.1846990312590646 ratio

假设：题设只使用常系数Van Deemter近似和高斯峰分离度，现实中溶质扩散系数与保留系数会随溶剂、温度、流速和柱填充改变，三点拟合须另做实验误差分析。

审核状态：publishable=false、exclude_from_official_bank=true、awaiting_expert_review、pending_cross_series_model_review。

