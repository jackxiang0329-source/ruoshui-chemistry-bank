# 第十一辑第100题完成组 A150 / O147 / P147

编辑草稿100/100题，仍需跨辑方程相似性和实验可用性专家审核。

## UC-ADV11-A150 静态光散射Zimm四点设计对Mw、Rg与第二维里系数的满秩反演

### 中文题干
在静态光散射分析中，一假想高分子低角度、低浓度体系服从Zimm展开Y(q,c)=K_opt c/R_θ=(1/M_w)[1+q²R_g²/3]+2A₂c。规定q的单位为nm⁻¹，c为g/mL，Y为mol/g，M_w为g/mol，R_g为nm，A₂为mL·mol/g²。选择q₁=0.02000与q₂=0.05000 nm⁻¹，以及c₁=0.002000与c₂=0.006000 g/mL，测得四个约化散射量Y₁₁=0.0000116333333333333，Y₂₁=0.0000160083333333333，Y₁₂=0.0000132333333333333，Y₂₂=0.0000176083333333333 mol/g。通过两个角度差分、两个浓度差分及零浓度零角度外推，唯一反演M_w、R_g、A₂，并检查第四数据点的交互残差、所有量纲及低角度低浓度假设的适用性。

### 严格中文分步推导
1. 对于假想分散良好的单分散高分子溶液，采用有限低角度、低浓度静态光散射的Zimm线性近似Y(q,c)=K_opt c/R_θ=1/M_w[1+q²R_g²/3]+2A₂c。

2. 约定散射波矢q以nm⁻¹计，质量浓度c以g/mL计，约化散射量Y以mol/g计，M_w以g/mol计，第二维里系数A₂以mL·mol/g²计。

3. 两角度分别q₁=0.02000、q₂=0.05000 nm⁻¹，两个浓度分别c₁=0.002000、c₂=0.006000 g/mL；四组实验值构成矩形设计。

4. 当q=q₁、c=c₁时Y₁₁=0.0000116333333333 mol/g；q₂、c₁时Y₂₁=0.0000160083333333 mol/g。

5. 当q=q₁、c=c₂时Y₁₂=0.0000132333333333 mol/g；q₂、c₂时Y₂₂=0.0000176083333333 mol/g。

6. 写为Y=b₀+b_q q²+b_c c，系数分别b₀=1/M_w、b_q=R_g²/(3M_w)、b_c=2A₂。

7. 不同q²下Y₂₁−Y₁₁给斜率b_q=0.00208333333333 (mol/g)·nm²。

8. 不同浓度下Y₁₂−Y₁₁给斜率b_c=0.000400000000000 mL·mol/g²。

9. 减去角度和浓度贡献后截距b₀=0.0000100000000000 mol/g，故M_w=1/b₀=100000.000000 g/mol。

10. 由R_g=√(3M_w b_q)求R_g=25.0000000000 nm；A₂=b_c/2=0.000200000000000 mL·mol/g²。

11. 对四角数据的超定约束检验Y₂₂−Y₂₁−Y₁₂+Y₁₁=0；它独立检测角度–浓度交叉非线性，而非随意增加一个拟合参数。

12. 零浓度与零角度截距的物理解要求M_w>0，且R_g²>0；A₂的正号表示该题设条件下溶剂质量相对于θ溶剂更好。

13. 如qR_g不够小、聚集、多分散、浑浊、内滤效应或高浓度高阶维里项显著，一阶Zimm展开不能替代更完整的Debye或光散射模型。

### 独立数值向量
- Zimm_Y_q0p02_c0p002: 0.000011633333333333334 mol/g
- Zimm_Y_q0p05_c0p002: 0.000016008333333333337 mol/g
- Zimm_Y_q0p02_c0p006: 0.000013233333333333334 mol/g
- Zimm_Y_q0p05_c0p006: 0.000017608333333333336 mol/g
- Zimm_q_squared_slope: 0.0020833333333333346 mol nm2/g
- Zimm_concentration_slope: 0.00039999999999999996 mL mol/g2
- Zimm_zero_q_zero_c_intercept: 0.000009999999999999999 mol/g
- weight_average_Mw_g_mol: 100000.00000000001 g/mol
- radius_of_gyration_nm: 25.00000000000001 nm
- second_virial_A2_mL_mol_g2: 0.00019999999999999998 mL mol/g2
- largest_smallest_scattering_ratio: 1.5136103151862466 ratio
- angular_response_difference: 0.000004375000000000003 mol/g
- concentration_response_difference: 0.0000016 mol/g
- concentration_response_reconstruction: 0.0000016000000000000001 mol/g
- Zimm_q_coefficient_times_Mw_nm2: 208.33333333333334 nm2

`publishable=false`; `exclude_from_official_bank=true`; `quality_status=awaiting_expert_review`; `novelty_review_status=pending_cross_series_model_review`。

## UC-ADV11-O147 活性ROMP随机链增长的Poisson链长、端基校正分子量与分散度

### 中文题干
一个理想活性开环复分解聚合（ROMP）体系中，环烯单体初始浓度[M]₀=0.5000 mol/L、金属卡宾催化剂浓度[C]₀=0.005000 mol/L，只有80.00%催化剂瞬时有效引发一条活性链，随后链数恒定、无终止转移或二次引发。单体与链端的二级传播常数k_p=20.00 L/(mol·s)，体系等体积，达到60.00%单体转化时停止。每条链的端基摩尔质量为100.0 g/mol，每开环纳入一个单体净增加150.0 g/mol；理想随机增长意味着每链纳入单体数n服从均值λ的Poisson分布。求达到该转化率的时间、活性链浓度、消耗单体浓度、平均聚合度与方差、数均和重均摩尔质量及Đ，并验证端基/单体守恒、初始和结束的单体消耗速率及模型局限。

### 严格中文分步推导
1. 假设一种理想活性ROMP有机聚合，环烯单体M由有效活性金属卡宾链端逐个开环，所有活性链瞬时引发、无终止及链转移，并在等体积体系中生长。

2. 初始单体浓度[M]₀=0.5000 mol/L，催化剂总量0.005000 mol/L，活性引发效率f_i=0.8000，故活性链浓度C_a=0.004000 mol/L。

3. 链增长的二级速率常数k_p=20.00 L/(mol·s)，所有链端速率均相同且链浓度不变，单体消耗满足d[M]/dt=−k_p C_a[M]。

4. 积分得到[M](t)=[M]₀exp(−k_pC_a t)，单体转化率X=1−exp(−k_pC_a t)，对0<X<1的时刻唯一。

5. 当转化率X=0.6000时，时间t=−ln(0.4)/(k_p C_a)=11.4536341484 s。

6. 未反应单体浓度=0.200000000000 mol/L，已纳入聚合物的单体单元浓度=0.300000000000 mol/L。

7. 活性链始终有同样的瞬时增长速率，单个链增长次数服从均值λ=消耗单体数/活性链数的Poisson分布（在题设理想随机过程下）。

8. 得到λ=75.0000000000个单元/链，平均DP_n=λ，Poisson方差也等于λ，标准差√λ=8.66025403784。

9. 设每条活性聚合链的引发端基质量100.0 g/mol，每增加一个环开单体单元净增150.0 g/mol，无其它小分子离去，则单链质量M_chain=100+150n。

10. 数均摩尔质量M_n=100+150λ=11350.0000000 g/mol，不能误将端基质量乘平均DP。

11. Poisson分布使单链质量方差Var(M)=150²λ=1687500.00000 (g/mol)²，重均M_w=E[M²]/E[M]=M_n+Var(M)/M_n=11498.6784141 g/mol。

12. 分散度Đ=M_w/M_n=1.01309941974≥1，所有引发端基总量与已消耗单体摩尔数分别独立守恒。

13. 本模型采用即时引发、完全活性和相同链端反应性。实际ROMP若引发与传播同时发生、催化剂失活、链转移或存在多种开环异构结构，真实链长分布不再严格Poisson。

### 独立数值向量
- active_chain_molar_concentration: 0.004 mol/L
- time_to_60pct_conversion_s: 11.453634148426938 s
- unreacted_monomer_M: 0.2 mol/L
- converted_monomer_M: 0.3 mol/L
- Poisson_mean_DPn: 75 units/chain
- number_average_mass_g_mol: 11350 g/mol
- weight_average_mass_g_mol: 11498.678414096916 g/mol
- dispersity: 1.0130994197442216 ratio
- Poisson_DPn_sd: 8.660254037844387 units/chain
- chain_mass_sd_g_mol: 1299.038105676658 g/mol
- initial_consumption_rate_M_s: 0.04 mol/(L s)
- ending_consumption_rate_M_s: 0.016 mol/(L s)
- initiator_endgroup_mass_g_L: 0.4 g/L
- incorporated_monomer_mass_g_L: 45 g/L
- polymerized_monomer_unit_balance_M: 0.3 mol/L

`publishable=false`; `exclude_from_official_bank=true`; `quality_status=awaiting_expert_review`; `novelty_review_status=pending_cross_series_model_review`。

## UC-ADV11-P147 热电半导体Seebeck发电器最大功率负载与冷热能流严格守恒

### 中文题干
一理想恒参数热电半导体发电模块热端T_h=400.0 K、冷端T_c=300.0 K，Seebeck系数S=200.0 μV/K、电内阻R_i=2.000 Ω，热导K=1.000×10⁻⁴ W/K。外接可调纯电阻R_L，开路电压V_oc=SΔT、负载电流I=V_oc/(R_i+R_L)、输出功率P=I²R_L。按对称Joule热分流近似，热端输入Q_h=S T_h I−(1/2)I²R_i+KΔT、冷端Q_c=S T_c I+(1/2)I²R_i+KΔT。求唯一最大功率匹配负载、该负载时电流、功率、冷热热流、第一定律热差、热转电效率及平均温度ZT=S²T̄/(R_iK)，并同Carnot上限比较，检查极端负载和恒参数近似。

### 严格中文分步推导
1. 理想化单个热电半导体发生器的冷热结温度固定T_h=400.0 K、T_c=300.0 K，Seebeck系数S=200.0 μV/K、电内阻R_i=2.000 Ω、导热系数K=1.000×10⁻⁴ W/K。

2. 规定热电压V_oc=S(T_h−T_c)，串联纯电阻负载R_L时电流I=V_oc/(R_i+R_L)，符号按由热端驱动电功输出为正。

3. 温差ΔT=100 K，开路热电压V_oc=0.0200000000000 V；短路极限I_sc=V_oc/R_i=0.0100000000000 A。

4. 输出负载电功率P_L=I²R_L=V_oc² R_L/(R_i+R_L)²。

5. 对正负载R_L求导得到dP_L/dR_L∝(R_i−R_L)/(R_i+R_L)³，唯一最大功率匹配点为R_L=R_i。

6. 当R_L=2 Ω时I=0.00500000000000 A，输出P_L=0.0500000000000 mW。

7. 采用恒系数热电方程Q_h=S T_h I−½I²R_i+KΔT，Q_c=S T_c I+½I²R_i+KΔT，其中对称分配Joule热。

8. 计算热端吸热Q_h=0.0103750000000 W，冷端放热Q_c=0.0103250000000 W，均应为正。

9. 差值Q_h−Q_c=0.0000500000000000 W，恰等于负载电功率P_L，体现稳态第一定律且不需要额外能源项。

10. 匹配负载点的热电效率η=P_L/Q_h=0.00481927710843，不可混同于最大效率负载，也不应超过Carnot极限0.250000000000。

11. 平均温度T̄=350 K，材料组合优值ZT̄=S²T̄/(R_i K)=0.0700000000000，它是无量纲。

12. 检验R_L→0时P_L→0，R_L→∞时I→0且P_L→0；本模型假定S、R_i、K与温度无关，忽略接触热阻、Thomson热、温差受载改变和材料老化。

### 独立数值向量
- open_circuit_voltage_V: 0.02 V
- matched_load_current_A: 0.005 A
- maximum_output_power_mW: 0.05 mW
- hot_side_heat_W: 0.010375 W
- cold_side_heat_W: 0.010325 W
- heat_balance_net_work_W: 0.0000499999999999997 W
- conversion_efficiency: 0.0048192771084337345 fraction
- average_ZT: 0.06999999999999999 dimensionless
- short_circuit_current_A: 0.01 A
- load_to_internal_resistance_ratio: 1 ratio
- hot_Peltier_heat_W: 0.0004 W
- half_Joule_heat_W: 0.000025 W
- conductive_heat_W: 0.01 W
- thermal_electric_resistance_product_V_per_K_ohm: 0.0004 ohm V/K
- Carnot_temperature_ratio_minus_one: 0.33333333333333326 ratio
- Carnot_efficiency: 0.25 fraction

`publishable=false`; `exclude_from_official_bank=true`; `quality_status=awaiting_expert_review`; `novelty_review_status=pending_cross_series_model_review`。

