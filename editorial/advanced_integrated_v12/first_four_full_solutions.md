# 第十二辑第一批四题完整解答

以下均为未经人类专家审核、须跨辑模型复核的高阶编辑草稿。

## UC-ADV12-I151 MgO纳米晶双Bragg峰的Williamson–Hall粒径/微应变和晶胞密度反演

### 题干
假想岩盐型面心立方MgO纳米晶的常规晶胞含4个MgO式量，X射线波长λ=0.15406 nm，测量(111)与(200)峰的衍射半角分别为19.4843691066438°及22.6530527604466°；仪器宽度校正后的两峰FWHM角宽β分别为0.00435678057244933 rad与0.00467428224881121 rad。采用立方Bragg关系d_hkl=a/√(h²+k²+l²)、2d_hkl sinθ=λ，Williamson–Hall方程βcosθ=Kλ/D+4εsinθ，其中K=0.9000、晶粒尺度D单位nm、微应变ε无量纲。求由双峰位置得到的a、双峰峰宽的ε和D、晶胞体积及密度（Mg/O原子量24.305/15.999 g/mol，N_A=6.02214076×10²³ mol⁻¹），检查波长、角度、尺寸、密度、价态及两方程满秩条件，讨论实际宽度模型局限。

### 完整中文逐步解析
1. 假想面心立方MgO纳米晶具有立方常规晶胞中4个MgO式量，晶格常数a未知，XRD波长λ=0.15406 nm。

2. 立方晶系的面间距d_hkl=a/√(h²+k²+l²)，一级Bragg条件2d_hkl sinθ_hkl=λ，因此由(111)、(200)两个反射可独立回算a。

3. 在题设真实晶格a=0.4 nm下，(111)和(200)对应衍射半角θ分别19.4843691066、22.6530527604°，XRD图峰位2θ是它们的两倍。

4. 假定峰宽已消去仪器贡献，且尺寸展宽与各向同性微应变展宽按Williamson–Hall线性加和：β cosθ=Kλ/D+4ε sinθ。

5. 这里β是角宽(FWHM)的弧度而非度；Scherrer常数K=0.9000，D是相干衍射晶粒尺度，ε是无量纲微应变。

6. 对两峰β分别得到0.00435678057245、0.00467428224881 rad，乘以cosθ得到两条线性响应Y=βcosθ。

7. 令横坐标X=4sinθ，则Y=b₀+εX，截距b₀=Kλ/D，所选两个峰的sinθ不同，斜率和截距可唯一反演。

8. 由差商求ε=0.00100000000000，由截距b₀=0.00277308000000反推D=50.0000000000 nm。

9. 由两峰位置分别反演立方晶格参数a111=0.400000000000、a200=0.400000000000 nm，数值一致，验证晶面索引与X射线波长。

10. 晶胞体积a³=0.0640000000000 nm³；由每胞4个MgO式量、相对式量40.304 g/mol，算理想晶体密度ρ=4182.89791021 kg/m³。

11. Mg²⁺和O²⁻每式量电荷总和为零，晶胞4个式量仍电中性；峰宽不改变XRD所计量的晶体离子数。

12. 两峰仅足以识别在各向同性和指定K下的D、ε，真实晶格位错、各向异性形变、非洛伦兹谱线、织构及仪器峰宽误差需多峰拟合评估。

### 独立数值答案向量
- Bragg_theta_111_deg: 19.484369106643793 degree
- Bragg_theta_200_deg: 22.653052760446553 degree
- instrument_corrected_beta111_rad: 0.004356780572449332 rad
- instrument_corrected_beta200_rad: 0.004674282248811214 rad
- WH_four_sin_theta111: 1.3341987370703061 ratio
- WH_four_sin_theta200: 1.5406 ratio
- microstrain_eps: 0.0009999999999999998 fraction
- size_intercept: 0.0027730800000000007 dimensionless
- crystallite_size_nm: 49.999999999999986 nm
- lattice_a_from_111_nm: 0.4 nm
- lattice_a_from_200_nm: 0.4 nm
- cubic_cell_volume_nm3: 0.06400000000000002 nm3
- ideal_MgO_density_kg_m3: 4182.897910210918 kg/m3
- independent_strain_slope: 0.0009999999999999998 fraction
- formal_charge_cell_residual: 0 charge

`publishable=false`；`exclude_from_official_bank=true`；`quality_status=awaiting_expert_review`；`novelty_review_status=pending_cross_series_model_review`。

## UC-ADV12-A151 核磁DOSY的Stejskal–Tanner多梯度扩散反演与水动力尺度回核

### 题干
某稀溶液用核磁DOSY的PGSE方案测得同一扩散组分在梯度g₁=0.1000、g₂=0.2500、g₃=0.4000 T/m下自旋回波强度分别为S₁=913.857700835422、S₂=569.496552266813、S₃=236.623140431027任意共同单位。梯度脉冲宽度δ=2.000 ms、扩散时间间隔Δ=40.00 ms，旋磁比γ=2.6752218744×10⁸ rad/(s·T)。假定单组分自由布朗扩散S(g)=S₀exp[−γ²g²δ²(Δ−δ/3)D]。温度T=298.15 K、溶剂黏度η=0.8900 mPa·s、kB=1.380649×10⁻²³ J/K。由前两梯度信号唯一反演D及零梯度强度S₀、预测第三梯度回波；由Stokes–Einstein关系求水动力半径，计算Δ内一维布朗扩散均方根位移，并检查梯度和旋磁比的SI单位、所有信号物理约束及第三测量的独立一致性。

### 完整中文逐步解析
1. 考虑稀溶液单组分核磁DOSY/脉冲场梯度自旋回波(PGSE)，假设梯度脉冲为矩形且无背景信号漂移。

2. Stejskal–Tanner自旋回波衰减式S(g)=S₀ exp(−b(g)D)，b(g)=γ²g²δ²(Δ−δ/3)，其中梯度g单位T/m。

3. 核磁旋磁比γ=2.6752218744×10⁸ rad/(s·T)，脉冲宽度δ=2.000 ms、扩散时间间隔Δ=40.00 ms，必须换为s后求b。

4. 第一梯度g=0.1000 T/m给b₁=112600510.016 s/m²，第二梯度0.2500 T/m给b₂=703753187.598 s/m²。

5. 所测两个回波强度S₁=913.857700835和S₂=569.496552267任意相同单位，S₂<S₁符合扩散去相干。

6. 对两个梯度的信号取比消去未知S₀，得到D=−ln(S₂/S₁)/(b₂−b₁)，只要b₂≠b₁即唯一。

7. 由差分反演D=8.00000000000e-10 m²/s，并回代S₀=S₁exp(b₁D)=1000.00000000。

8. 第三独立梯度g=0.4000 T/m预测b₃=1801608160.25 s/m²、回波强度S₃=236.623140431；可校验单指数假设。

9. 根据独立的溶剂温度T=298.15 K、动力学黏度η=0.8900 mPa·s和Stokes–Einstein关系D=kBT/(6πηr_H)反推水动力半径。

10. 得到r_H=0.306716386931 nm，满足D越高水动力半径越小的物理趋势。

11. 单方向布朗位移在Δ内均方根√(2DΔ)=8.00000000000 μm，提供同扩散系数的空间尺度检查。

12. 实验中γ若按Hz/T而非rad/(s·T)输入须补2π因子；高浓度相互作用、受限扩散、对流、涡流梯度、化学交换和T₂衰减变化均可使DOSY模型失效。

### 独立数值答案向量
- b_gradient0p10_s_m2: 112600510.01568715 s/m2
- b_gradient0p25_s_m2: 703753187.5980445 s/m2
- b_gradient0p40_s_m2: 1801608160.2509944 s/m2
- signal_gradient0p10: 913.8577008354216 signal
- signal_gradient0p25: 569.4965522668128 signal
- signal_gradient0p40: 236.62314043102702 signal
- diffusion_D_m2_s: 8e-10 m2/s
- extrapolated_zero_gradient_signal: 1000 signal
- Stokes_Einstein_radius_nm: 0.30671638693056474 nm
- one_dimensional_displacement_rms_um: 8 um
- signal_ratio_grad2_over1: 0.6231785886863961 ratio
- log_signal_attenuation_ratio: 0.472922142065886 dimensionless
- third_signal_fraction: 0.23662314043102703 fraction
- inverse_displacement_rms_m: 125000 m^-1
- attenuation_coefficient_per_g2: 9.00804080125497 m2/T2

`publishable=false`；`exclude_from_official_bank=true`；`quality_status=awaiting_expert_review`；`novelty_review_status=pending_cross_series_model_review`。

## UC-ADV12-O148 有机酶水解竞争抑制的三初速度满秩反演与批式底物积分

### 题干
一假想有机底物S被单一酶催化水解为P，抑制剂I为可逆竞争抑制，模型为v=Vmax S/[K_m(1+I/K_i)+S]。初速度实验在(S,I)分别为(2.000 mM,0)、(2.000 mM,2.000 mM)、(0.5000 mM,2.000 mM)时得到v₁=0.00000333333333333333、v₂=0.00000250000000000000、v₃=0.00000100000000000000 mol/(L·s)。酶总浓度E_T=0.1000 μmol/L。反演Vmax、K_m、竞争抑制常数K_i和kcat，给出速率抑制比及表观K_m放大倍数，检查三实验独立性及逆解唯一性。恒定I=2.000 mM的批式反应从S₀=2.000 mM水解至S=1.000 mM，假设所有酶参数不变、没有产物反馈，求所需时间和形成P浓度，核查底物和产物物料守恒及稳态近似的局限。

### 完整中文逐步解析
1. 考虑一假想水解酶催化有机底物S→P，抑制剂I仅与游离酶结合，单底物准稳态酶动力学服从可逆竞争抑制形式v=Vmax S/[K_m(1+I/K_i)+S]。

2. 假设无产物反馈、酶与抑制剂总浓度变化可忽略，测量初速度时S和I视为固定；总酶浓度E_T=0.1000 μmol/L。

3. 第一条件S=2.000 mmol/L、I=0时观测速率v₁，第二条件相同S但I=2.000 mmol/L速率v₂。

4. 第三条件S=0.5000 mmol/L、I=2.000 mmol/L速率v₃，三个条件选择使非线性参数Vmax、K_m、K_i可识别。

5. 观测初速度v₁=0.00000333333333333、v₂=0.00000250000000000、v₃=0.00000100000000000 mol/(L·s)。

6. 固定抑制剂下把式子写为1/v=(1/Vmax)+(K_m(1+I/K_i)/(Vmax))(1/S)，利用两种S测量反算Vmax和表观K_m。

7. 由第2和3条件求Vmax=0.00000500000000000 mol/(L·s)、表观K_m^{app}=0.00200000000000 mol/L。

8. 再利用无抑制的第1条件，按v₁=Vmax S/(K_m+S)反推出K_m，并由K_m^{app}/K_m−1=I/K_i识别K_i。

9. 得到K_m=0.00100000000000、K_i=0.00200000000000 mol/L，均为正，回代三个速率完全一致。

10. 由于Vmax=kcat E_T，kcat=50.0000000000 s⁻¹；这不是催化效率kcat/K_m。

11. 在恒定I=2.000 mmol/L、无抑制剂消耗且底物初始2.000 mmol/L的批式反应中，dS/dt=−Vmax S/(K_m^{app}+S)。

12. 积分至S=1.000 mmol/L给t=[S₀−S+K_m^{app} ln(S₀/S)]/Vmax=477.258872224 s，产物形成1.000 mmol/L。

13. 第一性物料平衡要求S+P=S₀，三条初速度回代和批式积分可分别检查；真实底物消耗若改变酶、抑制剂结合活度或导致产物抑制，则该积分模型失效。

### 独立数值答案向量
- initial_rate_S2mM_noI_M_s: 0.0000033333333333333333 mol/(L s)
- initial_rate_S2mM_I2mM_M_s: 0.0000025 mol/(L s)
- initial_rate_S0p5mM_I2mM_M_s: 0.000001 mol/(L s)
- inferred_Vmax_M_s: 0.000005 mol/(L s)
- Michaelis_Km_M: 0.001 mol/L
- competitive_Ki_M: 0.002 mol/L
- enzyme_kcat_s: 50.00000000000001 s^-1
- inhibition_velocity_ratio: 0.7500000000000001 ratio
- apparent_Km_enlargement: 2 ratio
- time_S_from2to1mM_s: 477.25887222397813 s
- target_substrate_M: 0.001 mol/L
- product_formed_M: 0.001 mol/L
- enzyme_kcat_consistency_M_s: 0.000005 mol/(L s)
- apparent_low_S_slope_s_inv: 0.0025 s^-1
- inverse_uninhibited_v_over_Vmax: 1.5 ratio

`publishable=false`；`exclude_from_official_bank=true`；`quality_status=awaiting_expert_review`；`novelty_review_status=pending_cross_series_model_review`。

## UC-ADV12-P148 Semenov放热反应器热平衡双根、稳定性与点火临界条件

### 题干
某均匀搅拌的小型放热反应器用集中热容C_th=500.0 J/K表示，环境温度T_a=300.0 K，线性移热Q_out=h(T−T_a)，h=5.000 W/K；在指定温区用近似指数热源Q_gen=Q₀ exp[(T−T_a)/T_s]，其中Q₀=20.00 W、T_s=20.00 K，暂忽略反应物耗尽。热平衡为C_th dT/dt=Q_gen−Q_out。以θ=(T−T_a)/T_s无量纲化，求Semenov热生成参数γ、稳态方程的两个正根及温度与各自热功率，利用线性特征值判定两平衡的稳定性和衰减/增长时间，求两平衡合并的临界Q₀、热容量时间常数。证明临界与唯一极大条件，逐项核验W与J/K量纲，并说明指数近似高温外推和反应物耗尽的局限。

### 完整中文逐步解析
1. 将假想小型均匀放热化学反应器看作集中参数热容C_th=500.0 J/K的体系，环境温度T_a=300.0 K。

2. 温度偏离的特征尺度T_s=20.00 K，定义θ=(T−T_a)/T_s；题设热生成近似Q_gen=Q₀e^θ，Q₀=20.00 W。

3. 外界移热按Newton冷却Q_out=h(T−T_a)，其中h=5.000 W/K，能量平衡C_th dT/dt=Q_gen−Q_out。

4. 将方程无量纲化：dθ/dt=(γe^θ−θ)/τ，其中γ=Q₀/(hT_s)、τ=C_th/h。

5. 得到γ=0.200000000000、τ=100.000000000 s，且γ<1/e，为热平衡双根区域。

6. 平衡方程θ=γe^θ等价于θe^(−θ)=γ；函数θe^(−θ)在θ=1达到唯一最大值1/e。

7. 故0<γ<1/e时存在一个0<θ<1的低温平衡和一个θ>1的高温平衡，临界γ=1/e处两根合并，高于临界无有限稳态。

8. 用两个分离包围区间作二分法，得到低温根θ₁=0.259171101819，高温根θ₂=2.54264135777。

9. 恢复温度T₁=305.183422036 K、T₂=350.852827155 K，并按hT_sθ回代两平衡的发热与移热功率25.9171101819、254.264135777 W。

10. 在平衡点线性化，特征指数λ=[γe^θ−1]/τ=(θ−1)/τ；低温分支θ₁<1稳定，高温分支θ₂>1不稳定。

11. 两分支特征指数分别-0.00740828898181与0.0154264135777 s⁻¹；相应线性衰减时间134.983935218 s与扰动增长时间64.8238811284 s。

12. 临界发热基准Q₀,crit=hT_s/e=36.7879441171 W，若基准发热越过该值，不存在这一简化模型的热稳态。

13. 使用指数型发热是对Arrhenius速率在有限温区的简化，不可在高温根远离参考温度时任意外推；反应物耗尽、热传递随温变化和物理相变可能破坏双平衡结论。

### 独立数值答案向量
- Semenov_gamma: 0.2 dimensionless
- stable_temperature_reduced: 0.25917110181907377 dimensionless
- unstable_temperature_reduced: 2.542641357773526 dimensionless
- stable_temperature_K: 305.1834220363815 K
- unstable_temperature_K: 350.85282715547055 K
- heat_generation_stable_W: 25.917110181907375 W
- heat_generation_unstable_W: 254.2641357773526 W
- stable_linear_eigenvalue_s_inv: -0.007408288981809262 s^-1
- unstable_linear_eigenvalue_s_inv: 0.01542641357773526 s^-1
- stable_decay_time_s: 134.98393521843673 s
- unstable_growth_time_s: 64.82388112835811 s
- critical_heat_source_W: 36.787944117144235 W
- thermal_capacity_timescale_s: 100 s
- critical_dimensionless_gamma: 0.36787944117144233 dimensionless
- stable_balance_reconstruction: 0.25917110181907377 dimensionless

`publishable=false`；`exclude_from_official_bank=true`；`quality_status=awaiting_expert_review`；`novelty_review_status=pending_cross_series_model_review`。

