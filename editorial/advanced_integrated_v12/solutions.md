# 第十二辑 · 100 道题与解答

各批题目与解答按原录入顺序合订。本辑均待专家审校。

| 批次 | 题号 |
|---|---|
| [第十二辑第一批四题完整解答](#batch-01) | I151、A151、O148、P148 |
| [第十二辑第二批四道综合题](#batch-02) | I152、A152、O149、P149 |
| [第十二辑第三批：I153 A153 O150 P150](#batch-03) | I153、A153、O150、P150 |
| [第十二辑第四批 I154 A154 O151 P151](#batch-04) | I154、A154、O151、P151 |
| [第十二辑第五批四道大学化学高难度综合题](#batch-05) | I155、A155、O152、P152 |
| [第十二辑第六批四题完整中文解析](#batch-06) | I156、A156、O153、P153 |
| [第十二辑 I157、A157 题干与解答（专家待审）](#batch-07) | I157、A157 |
| [第十二辑 I158、O154](#batch-08) | I158、O154 |
| [第十二辑 A158 与 P154 完整中文解答](#batch-09) | A158、P154 |
| [第十二辑 I159 / A159 完整中文解析](#batch-10) | I159、A159 |
| [第十二辑 O155/P155 中文完整题解](#batch-11) | O155、P155 |
| [第十二辑 I160 / A160 大学化学高阶综合题](#batch-12) | I160、A160 |
| [第十二辑 O156 / P156 严格中文解答](#batch-13) | O156、P156 |
| [第十二辑 I161 / A161 大学化学综合题](#batch-14) | I161、A161 |
| [第十二辑 O157 / P157 完整中文题干与解析](#batch-15) | O157、P157 |
| [第十二辑 I162 / A162 解析](#batch-16) | I162、A162 |
| [第十二辑 O158 / P158 高阶综合题](#batch-17) | O158、P158 |
| [第十二辑 I163 / A163 题干与逐步解答](#batch-18) | I163、A163 |
| [第十二辑 O159 / P159 严格题目与解析](#batch-19) | O159、P159 |
| [第十二辑 I164 / A164 中文解答](#batch-20) | I164、A164 |
| [第十二辑 O160 / P160 完整题目与推导](#batch-21) | O160、P160 |
| [第十二辑 I165/A165 完整题干与逐步解析](#batch-22) | I165、A165 |
| [第十二辑 O161 / P161 完整中文题解](#batch-23) | O161、P161 |
| [第十二辑 A166/P162 完整解答](#batch-24) | A166、P162 |
| [第十二辑 I166/O162 完整中文解析](#batch-25) | I166、O162 |
| [第十二辑第二十六批：I167 / A167 / O163 / P163 完整中文解析](#batch-26) | I167、A167、O163、P163 |
| [第十二辑第二十七批 · I168 / A168 / O164 / P164](#batch-27) | I168、A168、O164、P164 |
| [第十二辑第二十八批 · I169/A169/O165/P165](#batch-28) | I169、A169、O165、P165 |
| [第十二辑第29批 · I170/A170/O166/P166](#batch-29) | I170、A170、O166、P166 |
| [第十二辑第三十批 · I171/A171/O167/P167](#batch-30) | I171、A171、O167、P167 |
| [第十二辑第三十一批 · I172/A172/O168/P168](#batch-31) | I172、A172、O168、P168 |
| [第十二辑第三十二批 · I173/A173/O169/P169](#batch-32) | I173、A173、O169、P169 |
| [第十二辑第三十三批 · I174/A174/O170/P170](#batch-33) | I174、A174、O170、P170 |
| [第十二辑收官六题 · 严格题目、逐步演算、机器复核](#batch-34) | I175、A175、O171、O172、P171、P172 |

<a id="batch-01"></a>

## 第十二辑第一批四题完整解答

以下均为未经人类专家审核、须跨辑模型复核的高阶编辑草稿。

### UC-ADV12-I151 MgO纳米晶双Bragg峰的Williamson–Hall粒径/微应变和晶胞密度反演

#### 题干
假想岩盐型面心立方MgO纳米晶的常规晶胞含4个MgO式量，X射线波长λ=0.15406 nm，测量(111)与(200)峰的衍射半角分别为19.4843691066438°及22.6530527604466°；仪器宽度校正后的两峰FWHM角宽β分别为0.00435678057244933 rad与0.00467428224881121 rad。采用立方Bragg关系d_hkl=a/√(h²+k²+l²)、2d_hkl sinθ=λ，Williamson–Hall方程βcosθ=Kλ/D+4εsinθ，其中K=0.9000、晶粒尺度D单位nm、微应变ε无量纲。求由双峰位置得到的a、双峰峰宽的ε和D、晶胞体积及密度（Mg/O原子量24.305/15.999 g/mol，N_A=6.02214076×10²³ mol⁻¹），检查波长、角度、尺寸、密度、价态及两方程满秩条件，讨论实际宽度模型局限。

#### 完整中文逐步解析
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

#### 独立数值答案向量
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

### UC-ADV12-A151 核磁DOSY的Stejskal–Tanner多梯度扩散反演与水动力尺度回核

#### 题干
某稀溶液用核磁DOSY的PGSE方案测得同一扩散组分在梯度g₁=0.1000、g₂=0.2500、g₃=0.4000 T/m下自旋回波强度分别为S₁=913.857700835422、S₂=569.496552266813、S₃=236.623140431027任意共同单位。梯度脉冲宽度δ=2.000 ms、扩散时间间隔Δ=40.00 ms，旋磁比γ=2.6752218744×10⁸ rad/(s·T)。假定单组分自由布朗扩散S(g)=S₀exp[−γ²g²δ²(Δ−δ/3)D]。温度T=298.15 K、溶剂黏度η=0.8900 mPa·s、kB=1.380649×10⁻²³ J/K。由前两梯度信号唯一反演D及零梯度强度S₀、预测第三梯度回波；由Stokes–Einstein关系求水动力半径，计算Δ内一维布朗扩散均方根位移，并检查梯度和旋磁比的SI单位、所有信号物理约束及第三测量的独立一致性。

#### 完整中文逐步解析
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

#### 独立数值答案向量
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

### UC-ADV12-O148 有机酶水解竞争抑制的三初速度满秩反演与批式底物积分

#### 题干
一假想有机底物S被单一酶催化水解为P，抑制剂I为可逆竞争抑制，模型为v=Vmax S/[K_m(1+I/K_i)+S]。初速度实验在(S,I)分别为(2.000 mM,0)、(2.000 mM,2.000 mM)、(0.5000 mM,2.000 mM)时得到v₁=0.00000333333333333333、v₂=0.00000250000000000000、v₃=0.00000100000000000000 mol/(L·s)。酶总浓度E_T=0.1000 μmol/L。反演Vmax、K_m、竞争抑制常数K_i和kcat，给出速率抑制比及表观K_m放大倍数，检查三实验独立性及逆解唯一性。恒定I=2.000 mM的批式反应从S₀=2.000 mM水解至S=1.000 mM，假设所有酶参数不变、没有产物反馈，求所需时间和形成P浓度，核查底物和产物物料守恒及稳态近似的局限。

#### 完整中文逐步解析
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

#### 独立数值答案向量
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

### UC-ADV12-P148 Semenov放热反应器热平衡双根、稳定性与点火临界条件

#### 题干
某均匀搅拌的小型放热反应器用集中热容C_th=500.0 J/K表示，环境温度T_a=300.0 K，线性移热Q_out=h(T−T_a)，h=5.000 W/K；在指定温区用近似指数热源Q_gen=Q₀ exp[(T−T_a)/T_s]，其中Q₀=20.00 W、T_s=20.00 K，暂忽略反应物耗尽。热平衡为C_th dT/dt=Q_gen−Q_out。以θ=(T−T_a)/T_s无量纲化，求Semenov热生成参数γ、稳态方程的两个正根及温度与各自热功率，利用线性特征值判定两平衡的稳定性和衰减/增长时间，求两平衡合并的临界Q₀、热容量时间常数。证明临界与唯一极大条件，逐项核验W与J/K量纲，并说明指数近似高温外推和反应物耗尽的局限。

#### 完整中文逐步解析
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

#### 独立数值答案向量
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

<a id="batch-02"></a>

## 第十二辑第二批四道综合题

本卷均为待审草稿，没有取得专家原创性证明或正式发布许可。

### UC-ADV12-I152 AgCl–氨配位溶解平衡的游离配体耗竭与多物料唯一根反演

#### 中文题干
在一种理想水溶液中AgCl(s)与总分析氨浓度A_T=0.1000 mol/L平衡，银只以Ag⁺和[Ag(NH₃)₂]⁺存在，所有Cl⁻仅来自AgCl晶体溶解，忽略NH₄⁺和其他配合物。已知AgCl溶度积K_sp=[Ag⁺][Cl⁻]=1.800×10⁻¹⁰ (mol/L)²，二氨合银总生成常数β₂=[[Ag(NH₃)₂]⁺]/([Ag⁺][NH₃]²)=1.600×10⁷ (mol/L)⁻²。建立总银=总氯与总氨两个物料衡算，推导可唯一反演的游离氨一元方程，求游离NH₃、总溶解银、游离Ag⁺、[Ag(NH₃)₂]⁺、Cl⁻及配合分数；比较忽略配位消耗NH₃的近似溶解度误差，并回算溶度积、配位平衡、各物料与电荷守恒，说明酸碱电离等局限。

#### 完整逐步解答
1. 假设固体AgCl(s)在含NH₃的均匀理想水溶液中溶解，银只存在Ag⁺和二氨合银(I)配离子[Ag(NH₃)₂]⁺，无其它银配合物与沉淀。

2. 难溶盐的饱和条件[Ag⁺][Cl⁻]=K_sp，题设K_sp=1.800×10⁻¹⁰ (mol/L)²。

3. 配位平衡β₂=[[Ag(NH₃)₂]⁺]/([Ag⁺][NH₃]²)=1.600×10⁷ (mol/L)⁻²；必须区分游离和总氨。

4. 假设初始NH₃总浓度A_T=0.1000 mol/L，没有外来Cl⁻和Ag⁺，由AgCl溶解给出总银浓度s=[Ag⁺]+[Ag(NH₃)₂]⁺=[Cl⁻]。

5. 游离氨浓度f由氨物料衡算A_T=f+2[Ag(NH₃)₂]⁺决定，配合物每分子消耗两个NH₃。

6. 消去游离银：s²=K_sp(1+β₂f²)，配合物浓度c=s β₂f²/(1+β₂f²)，得到唯一标量方程f+2c(f)=A_T。

7. 函数f+2c(f)在f≥0严格增加，f=0时低于A_T，f=A_T时高于A_T，所以唯一正物理解存在于(0,A_T)。

8. 二分法求游离NH₃ f=0.0903072463403 mol/L，总AgCl溶解度s=0.00484641397073 mol/L。

9. 自由Ag⁺浓度=3.71408635513e-8 mol/L，配合态银=0.00484637682987 mol/L；配合态占总银分数0.999992336424。

10. 游离氯离子浓度=[Cl⁻]=0.00484641397073 mol/L，总氨消耗2c=0.00969275365973 mol/L。

11. 如果错误地把游离氨固定为0.1000 mol/L，预测溶解度0.00536657991648 mol/L，比守恒求解值高10.7330068973%。

12. 回代检验K_sp=[Ag⁺][Cl⁻]、β₂配位式、总银s、氨衡算f+2c=A_T，以及[Ag⁺]+[Ag(NH₃)₂]⁺=[Cl⁻]的整体电中性。

13. 本题忽略NH₃/NH₄⁺酸碱电离、活度系数、Ag(NH₃)⁺中间配合物及配位阴离子；在真实实验中应同时解氢离子和电解质活度平衡。

#### 主要答案
- free_ammonia_M: 0.0903072463402651 mol/L
- total_dissolved_silver_M: 0.004846413970731 mol/L
- free_Ag_plus_M: 3.714086355129297e-8 mol/L
- Ag_NH3_2_plus_M: 0.0048463768298674485 mol/L
- free_chloride_M: 0.004846413970731 mol/L
- complexed_silver_fraction: 0.999992336423637 fraction
- bound_ammonia_M: 0.009692753659734897 mol/L
- free_ammonia_from_balance_M: 0.0903072463402651 mol/L
- naive_constant_ammonia_solubility_M: 0.005366579916483123 mol/L
- relative_naive_solubility_error: 0.10733006897338249 ratio
- ionic_product_Ag_Cl_M2: 1.8000000000019216e-10 M2
- complexation_reconstructed_M: 0.0048463768298726215 mol/L
- silver_balance_M: 0.004846413970731 mol/L
- ammonia_balance_M: 0.1 mol/L
- charge_balance_residual_M: 0 mol/L

状态：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

### UC-ADV12-A152 稳定同位素稀释质谱的后加示踪剂、操作空白与回收率联立质量守恒

#### 中文题干
一个理想化两稳定同位素元素的IDMS分析中，自然来源元素的重同位素原子分数h_s=0.2500，富集同位素示踪剂的重同位素分数h_p=0.9500。原始样品经历前处理，元素质量回收率为0.8000；提取液的自然同位素组成操作空白元素质量为0.02000 mg（计入提取液），之后才向提取液加入已知示踪元素质量m_p=0.2500 mg，因此示踪剂不受回收率影响。混合后测得重同位素分数h_m=0.6000，假设两同位素原子质量差对质量等比例换算可忽略且无谱学干扰。用同位素质量当量守恒推导自然来源混合质量、扣空白后回收质量、原始样品质量，计算混合物重/轻同位素各自当量和比率，逐项检查同位素、空白、回收率与示踪加入次序，并说明何时本模型失效。

#### 完整逐步解答
1. 按理想两稳定同位素元素的同位素稀释质谱(IDMS)问题，规定同位素原子分数h为重同位素占比；自然样品h_s=0.2500、富集示踪同位素h_p=0.9500。

2. 向处理过的样品提取液加入已知元素示踪总质量m_p=0.2500 mg，示踪在样品回收处理之后加入，因而不受前处理回收率损失。

3. 混合物实测重同位素分数h_m=0.6000，规定同位素质量差对质量比转换可忽略，可把各同位素原子数与元素总质量等比例相联系。

4. 假设原样提取液中所有非示踪元素均为自然同位素组成，包含样品真实回收部分m_r及独立化学操作空白m_b=0.02000 mg。

5. 混合物重同位素质量当量守恒：h_m(m_n+m_p)=h_s m_n+h_p m_p，其中m_n=m_r+m_b为自然成分总质量。

6. 移项得到m_n=m_p(h_p−h_m)/(h_m−h_s)，h_s<h_m<h_p且两端不同，反演唯一且两成分均为正。

7. 求m_n=0.250000000000 mg、回收样品部分m_r=m_n−m_b=0.230000000000 mg。

8. 题设前处理回收率r=0.8，原始样品分析元素的质量m_original=m_r/r=0.287500000000 mg。

9. 换算为μg得m_original=287.500000000 μg，不能错误把回收率作用于后加的示踪剂或空白。

10. 混合元素总质量m_n+m_p=0.500000000000 mg，重同位素当量=0.300000000000 mg、轻同位素当量=0.200000000000 mg。

11. 从两同位素质量当量算出重轻比R=heavy/light=1.50000000000，与由h_m/(1−h_m)所得比率相同。

12. 回代验证：样品回收质量与操作空白之和恰为自然同位素成分，混合前后重、轻同位素数均守恒；若实际质量差不可忽略必须用原子量与摩尔数代替质量近似。

13. 真实IDMS还须考虑质谱质量歧视、同位素纯度、同位素交换、示踪加入先后及回收率标定不确定性；若示踪在前处理之前加入并完全平衡，回收率可能在比值中抵消，不能使用本题公式。

#### 主要答案
- blend_heavy_isotope_fraction: 0.6000000000000001 fraction
- measured_heavy_light_ratio: 1.5 ratio
- natural_abundance_analyte_in_blend_g: 0.00025 g
- recovered_sample_analyte_mass_g: 0.00023 g
- original_sample_analyte_mass_g: 0.0002875 g
- original_sample_analyte_ug: 287.5 ug
- total_blend_element_mass_g: 0.0005 g
- blend_heavy_isotope_mass_equivalent_g: 0.00030000000000000003 g
- blend_light_isotope_mass_equivalent_g: 0.0002 g
- natural_spike_mass_ratio: 1 ratio
- blank_fraction_of_natural_component: 0.08 fraction
- original_after_recovery_g: 0.00023 g
- blank_mass_balance_residual_g: 0 g
- measured_isotope_ratio: 1.4999999999999998 ratio

状态：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

### UC-ADV12-O149 分子内环化与二分子二聚竞争的Riccati积分、骨架守恒及有效摩尔浓度

#### 中文题干
一假想有机双烯底物S在均相催化剂下竞争进行不可逆分子内环化S→P（k₁=0.05000 s⁻¹）和分子间二聚2S→D（k₂=2.000 L/(mol·s)），初始S₀=0.02000 mol/L，P和D均为0。假设无其他产物和溶剂体积变化，因此dS/dt=−k₁S−2k₂S²、dP/dt=k₁S、dD/dt=k₂S²。求严格非线性浓度积分解以及20.00 s时剩余S、环化P、二聚D、已耗骨架和环化选择率，计算瞬时两路径速率、有效摩尔浓度EM=k₁/k₂，以及底物半消耗的唯一时间。按S+P+2D=S₀进行骨架质量审计，特别解释二聚消耗两个分子为何不能使用两伪一级竞争公式。

#### 完整逐步解答
1. 假设一种双官能二烯有机分子S在恒定催化剂作用下沿两种不可逆路径反应：分子内环化S→P（速率常数k₁，s⁻¹），和两个S分子相互二聚2S→D（常数k₂，L/(mol·s)）。

2. 二聚反应发生一次消耗两个S骨架而只产生一个D分子，因此动力学方程dS/dt=−k₁S−2k₂S²。

3. 同时有dP/dt=k₁S、dD/dt=k₂S²，初始P=D=0；每个S和P含一个骨架，D含两个骨架。

4. 令b=2k₂S₀/k₁，为无量纲初始二聚竞争参数，分离变量或以1/S代换求解Riccati型基元反应方程。

5. 严格的剩余浓度S(t)=S₀e^(−k₁t)/[1+b(1−e^(−k₁t))]，与简单两条伪一级独立分流不同。

6. 题设S₀=0.02 mol/L、k₁=0.05 s⁻¹、k₂=2 L/(mol·s)，得b=1.60000000000。

7. 在t=20 s时S=0.00365795705300 mol/L，消耗骨架S₀−S=0.0163420429470 mol/L。

8. 对dP/dt=k₁S(t)积分得到P(t)=[k₁/(2k₂)]ln[1+b(1−e^(−k₁t))]，不可以把瞬时选择性当作时间积分选择性。

9. 求环化产物P=0.00873534330277 mol/L；由骨架守恒S+P+2D=S₀反推二聚体D=0.00380334982211 mol/L。

10. 环化在已耗底物骨架中的选择率P/(S₀−S)=0.534531902229，应在0与1之间。

11. 在t=20 s的瞬时环化与二聚生成速率分别0.000182897852650和0.0000267612996032 mol/(L·s)，二聚对应底物骨架消耗率要乘2。

12. 分子内与分子间反应比较的有效摩尔浓度EM=k₁/k₂，单位mol/L，题设EM=0.02500 mol/L；当浓度低于该量级时分子内反应相对有利。

13. 令S(t_half)=S₀/2，解得e^(−k₁t_half)=(1+b)/(2+b)，t_half=6.50844800869 s；剩余S单调递减确保时间唯一。

14. 如二聚机理含中间体、发生交叉聚合、催化剂失活或分子内反应会回转，二阶Riccati模型与简单骨架守恒仍需扩展。

#### 主要答案
- nonlinear_competition_parameter: 1.5999999999999999 dimensionless
- remaining_diene_M: 0.003657957053003822 mol/L
- intramolecular_ring_product_M: 0.008735343302772624 mol/L
- intermolecular_dimer_M: 0.0038033498221117764 mol/L
- diene_consumed_M: 0.016342042946996177 mol/L
- cyclized_fraction_of_consumed_skeleton: 0.5345319022294127 fraction
- instantaneous_cyclization_rate_M_s: 0.00018289785265019113 mol/(L s)
- instantaneous_dimer_formation_rate_M_s: 0.000026761299603240813 mol/(L s)
- skeleton_in_products_M: 0.016342042946996177 mol/L
- total_skeleton_balance_M: 0.019999999999999997 mol/L
- effective_molarity_M: 0.025 mol/L
- half_substrate_time_s: 6.50844800869256 s
- target_half_substrate_M: 0.01 mol/L
- ring_to_dimer_molecule_ratio: 2.296749894523876 ratio
- integrated_log_factor: 0.69882746422181 dimensionless

状态：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

### UC-ADV12-P149 Kelvin–Laplace纳米液滴曲率蒸气压、化学势与分子数反演

#### 中文题干
两滴理想化球形液态水纳米液滴与水蒸气平衡，半径分别r₁=10.00 nm、r₂=20.00 nm，液体表面张力γ=0.07200 N/m，水的摩尔液体体积V_m=18.00×10⁻⁶ m³/mol，T=298.15 K、平面液体的饱和蒸气压p_sat=3167 Pa、R=8.314462618 J/(mol·K)、N_A=6.02214076×10²³ mol⁻¹。忽略曲率对γ的修正、蒸气非理想性及重力，采用Young–Laplace ΔP=2γ/r和Kelvin关系ln[p(r)/p_sat]=2γV_m/(rRT)。求两个液滴的Laplace压力与摩尔曲率化学势、对应蒸气压与比值；求蒸气压高于平面值10.00%所对应唯一半径，并计算半径10 nm液滴的物质的量与水分子个数。严格核验气液化学势、SI单位、两极端半径和模型适用界限。

#### 完整逐步解答
1. 把假想纳米液态水滴近似为球形、各向同性界面，表面张力γ=0.07200 N/m，摩尔液体体积V_m=18.00×10⁻⁶ m³/mol。

2. 球形液滴内外压力差为Young–Laplace形式ΔP=2γ/r，半径越小内部压力越高。

3. 在近似液体不可压缩、蒸气理想及表面张力与半径无关的条件下，化学势差Δμ=V_m ΔP=2γV_m/r。

4. 把化学势差同理想蒸气RT ln[p(r)/p_sat]相等，得到Kelvin方程ln[p(r)/p_sat]=2γV_m/(rRT)。

5. 取T=298.15 K、平面饱和蒸气压p_sat=3167 Pa，研究半径r₁=10.00 nm和r₂=20.00 nm两液滴。

6. Kelvin无量纲指数分别为0.104560102055、0.0522800510274，各大于零，且r越小指数越大。

7. 两个平衡蒸气压分别p₁=3516.07344926、p₂=3336.97536908 Pa，其比值=1.05367078278。

8. Laplace压力差分别为14.4000000000与7.20000000000 MPa，半径加倍使压力差减半。

9. 对应曲率引起的液体摩尔化学势增加分别为259.200000000与129.600000000 J/mol，符号与蒸气压上升一致。

10. 若目标蒸气压为平面饱和蒸气压的1.100倍，则半径r*=2γV_m/[RT ln(1.100)]，正解唯一，因为p(r)随r单调递减。

11. 计算r*=10.9705072710 nm；半径10.00 nm液滴的体积为4πr³/3，所含水分子数N=(4πr³/3V_m)N_A=140141.579041。

12. 检查当r→∞时ΔP、Δμ及ln(p/p_sat)均趋零；有限分子数和强曲率可使宏观常数γ失效，电解质、表面活性剂、蒸发冷却与非球形接触角也需单独建模。

13. 本题仅是热力学平衡曲率效应，不包含两液滴之间由扩散控制的Ostwald熟化时间率；不能从蒸气压差直接得到真实熟化动力学。

#### 主要答案
- Kelvin_exponent_10nm: 0.10456010205483533 dimensionless
- Kelvin_exponent_20nm: 0.052280051027417666 dimensionless
- equilibrium_vapor_pressure_10nm_Pa: 3516.0734492632077 Pa
- equilibrium_vapor_pressure_20nm_Pa: 3336.975369075502 Pa
- vapor_pressure_ratio: 1.0536707827835494 ratio
- Laplace_pressure_10nm_MPa: 14.399999999999999 MPa
- Laplace_pressure_20nm_MPa: 7.199999999999999 MPa
- surface_chemical_potential_10nm_J_mol: 259.2 J/mol
- surface_chemical_potential_20nm_J_mol: 129.6 J/mol
- droplet_radius_for_10pct_vapor_increase_nm: 10.970507271049199 nm
- molecules_in_10nm_droplet: 140141.5790407382 molecules
- moles_in_10nm_droplet: 2.3271056693257733e-19 mol
- vapor_pressure_excess_10nm_Pa: 349.07344926320775 Pa
- Laplace_pressure_ratio: 2 ratio
- Kelvin_length_m: 1.0456010205483533e-9 m

状态：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

<a id="batch-03"></a>

## 第十二辑第三批：I153 A153 O150 P150

本组机器答案不等于专家批准，禁止纳入正式发布题库。

### UC-ADV12-I153 理想自旋二态顺磁盐绝热退磁的配分函数、磁熵及能量守恒

#### 题干
一个假想稀疏无机顺磁盐由每摩尔一摩尔等价、不相互作用的有效自旋1/2中心组成，每中心只有沿场磁矩±μ_B，μ_B=9.2740100783×10⁻²⁴ J/T。初始温度T₁=5.000 K、磁场B₁=5.000 T，进行理想可逆绝热退磁至B₂=1.000 T，假定晶格热容、磁相互作用与其他熵完全可以忽略。给定kB=1.380649×10⁻²³ J/K、N_A=6.02214076×10²³ mol⁻¹、R=8.314462618 J/(mol·K)。由自旋配分函数Z=2cosh(μ_B B/kBT)严格推导两态平均磁矩、熵、磁能和热容，计算初态磁化、熵及热容、最终温度、终态磁能和不变的极化，并检查磁熵守恒、两态概率正性、低高场极限及晶格热漏限制。

#### 完整中文分步解析
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

#### 主要答案向量
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

### UC-ADV12-A153 计时库仑Anson直线的扩散/表面吸附分离与第三时点核验

#### 题干
一种分析化学电极采用理想Anson计时库仑：Q(t)=2n F A C√(Dt/π)+Q_dl+nFAΓ，其中单电子转移n=1、F=96485.33212 C/mol、电极面积A=1.000 cm²、体相分析物浓度C=1.000 μmol/L，扩散系数D未知，吸附活性表面过量Γ未知，Q_dl=0.05000 μC为独立测得的双电层电荷。实验t=1.000、4.000、9.000 s的积分电量分别0.490768947900603、0.835052563681206、1.17933617946181 μC。另知单层最大表面过量Γ_max=2.000×10⁻⁸ mol/m²，假定Langmuir θ=K_ads c/(1+K_ads c)。根据前两电量唯一反演D、Γ、Anson直线斜率和截距，预测第三时刻电量，推算覆盖率和K_ads，检查法拉第电荷、表面积、体积浓度单位、正性、时间依赖及理想模型局限。

#### 完整中文分步解析
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

#### 主要答案向量
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

### UC-ADV12-O150 三异构体一级串联Bateman方程的中间体峰时与完整骨架通量审计

#### 题干
某假想含相同元素组成与相同分子式的有机异构体A、B、C在恒定催化剂条件下按唯一串联路径A→B→C不可逆转化，两步一级速率常数k₁=0.1000 s⁻¹、k₂=0.02500 s⁻¹，初始[A]₀=0.01000 mol/L、[B]₀=[C]₀=0。等体积且无旁路或小分子生成。推导A、B、C的完整Bateman浓度解，求20.00 s三组分浓度、分数及瞬时两步通量；求中间体B唯一峰时刻及峰时三种组分，验证峰时通量相等、所有骨架原子守恒、长时间极限，并指出k₁→k₂时表达式的连续极限与实验模型失效条件。

#### 完整中文分步解析
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

#### 主要答案向量
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

### UC-ADV12-P150 van der Waals气体超临界体积唯一根、Joule–Thomson导数与残余焓

#### 题干
一假想单一真实气体服从van der Waals状态方程p=RT/(V_m−b)−a/V_m²，参数a=0.3640 Pa·m⁶/mol²、b=4.270×10⁻⁵ m³/mol，R=8.314462618 J/(mol·K)。在T=350.0 K、p=5.000 MPa时，给定摩尔定压热容C_p=40.00 J/(mol·K)用于局部Joule–Thomson估算。由临界条件推导T_c、p_c、V_c，证明指定超临界温度下V_m>b的物理根唯一，数值解出摩尔体积、Z、等温压强体积导数与体积模量、恒压体积热导数，计算μ_JT=[T(∂V_m/∂T)_p−V_m]/C_p以及残余焓H^R=−a/V_m+pV_m−RT。检查两个压力项回代、量纲和不同温区模型局限。

#### 完整中文分步解析
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

#### 主要答案向量
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

<a id="batch-04"></a>

## 第十二辑第四批 I154 A154 O151 P151

全部保持专家审核待审，不计作正式批准或原创性认证。

### UC-ADV12-I154 全钒液流电池VO2+/VO2+与V3+/V2+质子耦合Nernst电压及容量界限

#### 完整题干
一假想全钒液流电池正极放电半反应VO₂⁺+2H⁺+e⁻→VO²⁺+H₂O，E₊°=+1.000 V，负极对应还原偶V³⁺+e⁻→V²⁺，E₋°=−0.2600 V。T=298.15 K、R=8.314462618 J/(mol·K)、F=96485.33212 C/mol，采用相对1 M的理想离子活度。正极电解液0.2500 L：[VO₂⁺]=0.08000 M、[VO²⁺]=0.02000 M、[H⁺]=1.000 M；负极电解液0.2500 L：[V²⁺]=0.07000 M、[V³⁺]=0.03000 M。求两极的单电子Nernst还原电势、初始可逆电池电压，以及限制放电的活性价态、最大理论电子摩尔数、法拉第电量、恒2.000 A理想放电时间、正极质子消耗和恒体积无质子补充后的形式余量，并检验V原子、O/H、电子和电荷守恒及电势变化的实际限制。

#### 分步解析
1. 假想全钒液流电池正极半反应为VO₂⁺(V(V))+2H⁺+e⁻⇌VO²⁺(V(IV))+H₂O，标准还原电势E₊°=+1.000 V。

2. 负极还原半反应V³⁺+e⁻⇌V²⁺，标准电势E₋°=−0.2600 V；放电时负极实际上反向进行V²⁺→V³⁺+e⁻。

3. 两个半反应都转移1电子；正极物料和电荷：左端+1+2−1=+2，右端VO²⁺为+2，水分子负责氧氢原子守恒。

4. 在初始正极槽0.2500 L中V(V)以VO₂⁺计浓度0.08000 mol/L，V(IV)以VO²⁺计0.02000 mol/L，质子浓度1.000 mol/L。

5. 负极槽同样0.2500 L，V²⁺浓度0.07000 mol/L、V³⁺浓度0.03000 mol/L，两个槽中其他电解质/膜迁移维持宏观电中性。

6. 应用单电子Nernst：E₊=E₊°−(RT/F)ln([VO²⁺]/([VO₂⁺][H⁺]²))，活动度由相对于1 mol/L的无量纲浓度代表。

7. 负极采用还原电势E₋=E₋°−(RT/F)ln([V²⁺]/[V³⁺])，放电电池初始可逆电压E_cell=E₊−E₋。

8. T=298.15 K时求E₊=1.03561747756 V、E₋=-0.281769267317 V、初始E_cell=1.31738674488 V。

9. 正极可被还原的V(V)为0.0200000000000 mol，负极可氧化V²⁺为0.0175000000000 mol，限制物是负极V²⁺。

10. 最大理想电子物质的量=0.0175000000000 mol，法拉第电量Q=1688.49331210 C；若放电电流恒定2.000 A，对应理想时间t=844.246656050 s。

11. 正极按每电子消耗2H⁺，对应消耗0.0350000000000 mol，在无外部质子补充且液体体积恒定的封闭正极槽内剩余形式质子浓度=0.860000000000 mol/L。

12. 初始瞬间2A下的理想可逆电功率为I E_cell，实际存在欧姆、极化和泵送损失；随着放电组成变化电压也变化，不能用初始E_cell乘总Q冒充全过程准确可提取能量。

13. 真实全钒电池受到浓硫酸活度、电荷跨膜迁移、物料交叉渗透及VO₂⁺/VO²⁺配位状态影响；这里仅在指定理想初态作Nernst和计量检查。

#### 独立数值向量
- positive_redox_potential_V: 1.0356174775587534 V
- negative_redox_potential_V: -0.2817692673174706 V
- initial_reversible_cell_voltage_V: 1.317386744876224 V
- positive_Nernst_quotient: 0.25 ratio
- negative_Nernst_quotient: 2.3333333333333335 ratio
- positive_VV_mol: 0.02 mol
- negative_VII_mol: 0.0175 mol
- limiting_electron_mol: 0.0175 mol
- maximum_stoichiometric_charge_C: 1688.4933121000004 C
- ideal_discharge_time_at_2A_s: 844.2466560500002 s
- protons_consumed_mol: 0.035 mol
- remaining_positive_H_M: 0.86 mol/L
- initial_electrical_power_W: 2.634773489752448 W
- total_positive_vanadium_M: 0.1 mol/L
- total_negative_vanadium_M: 0.1 mol/L
- electron_charge_reaction_balance: 0 charge

`publishable=false`、`exclude_from_official_bank=true`、`quality_status=awaiting_expert_review`、`novelty_review_status=pending_cross_series_model_review`。

### UC-ADV12-A154 Cu(II)四线EPR超精细场谱、响应校正积分及绝对自旋定量

#### 完整题干
某理想稀Cu(II)配合物EPR实验中电子自旋S=1/2、铜核自旋I=3/2，一阶各向同性超精细作用使B(m_I)=B₀−m_Ia_B，m_I=+3/2,+1/2,−1/2,−3/2，超精细间隔a_B=7.000 mT。微波频率ν=9.500 GHz，真实电子g=2.1000，h=6.62607015×10⁻³⁴ J·s、μ_B=9.2740100783×10⁻²⁴ J/T。四条实验线双积分原始面积分别为2000、2100、1900、2000，仪器响应因子为1.000、1.050、0.950、1.000。同温标准品含3.000 nmol有效S=1/2中心，响应校正后的积分总面积为6000，未知样品体积100.0 μL，T=298.15 K、kB=1.380649×10⁻²³ J/K。由四线计算中心场、线位置、邻线间距与g、校正面积、样品中心摩尔量和浓度、总粒子数以及Zeeman热布居差，说明仪器响应与功率饱和条件。

#### 分步解析
1. 考虑假想Cu(II)单电子顺磁配合物，电子自旋S=1/2，与一个核自旋I=3/2的铜核发生一级各向同性超精细分裂；假设分子快速转动使粉末各向异性完全平均。

2. 测量X波段EPR微波频率ν=9.500 GHz，给定h=6.62607015×10⁻³⁴ J·s、μ_B=9.2740100783×10⁻²⁴ J/T。

3. 忽略二阶超精细作用，中心电子Zeeman共振条件hν=g μ_B B₀，且以题设定义每条超精细线B(m_I)=B₀−m_I a_B。

4. 核磁量子数m_I=+3/2,+1/2,−1/2,−3/2，因此一阶EPR有4条等统计强度线，邻线磁场间隔a_B=7.000 mT。

5. 由给定电子g因子2.1000算中心共振场B₀=0.323215944310 T。

6. 四条线场分别0.312715944310、0.319715944310、0.326715944310、0.333715944310 T，线间距0.007000 T，首末间距0.02100 T。

7. 反过来以四线平均场当B₀，再通过g=hν/(μ_BB₀)独立重构g，减轻超精细分裂对中心位置的影响。

8. 四条线原始双积分面积为2000、2100、1900、2000，响应因子分别1.000、1.050、0.950、1.000，须先校正仪器不同线位的响应。

9. 经响应因子校正后四线均为2000，合计面积=8000，满足核量子态4重的理想相对强度。

10. 同温标准品包含3.00000000000 nmol单电子中心，响应校正总面积6000，因此未知样品中心量=4.00000000000 nmol。

11. 未知样品实际体积100.0 μL，中心浓度=0.0000400000000000 mol/L；颗粒总数为nN_A=2.40885630400e+15。

12. 单一Zeeman双能级在T=298.15 K的热布居差为tanh(hν/(2kBT))=0.000764595007754，仅约千分级，说明信号强度还依赖温度与饱和条件。

13. 若自旋交换、超精细各向异性、核四极分裂、功率饱和或线形叠加存在，四线等面积和标准样的EPR定量不能直接套用；本模型仅在低功率且同温标定下有效。

#### 独立数值向量
- central_resonance_field_T: 0.32321594431019496 T
- line_B_mIplus3over2_T: 0.31271594431019495 T
- line_B_mIplus1over2_T: 0.31971594431019495 T
- line_B_mIminus1over2_T: 0.32671594431019496 T
- line_B_mIminus3over2_T: 0.33371594431019497 T
- adjacent_hyperfine_spacing_T: 0.007 T
- inferred_electron_g: 2.1 dimensionless
- response_corrected_integrated_area: 8000 area
- sample_spin_amount_mol: 4e-9 mol
- sample_spin_concentration_M: 0.00004 mol/L
- Zeeman_population_difference: 0.0007645950077540665 fraction
- spin_particle_number: 2408856304000000 centers
- hyperfine_three_intervals_normalization: 1.0000000000000009 ratio
- outer_hyperfine_span_mT: 21.000000000000018 mT
- reconstructed_mean_center_field_T: 0.32321594431019496 T
- uncorrected_area_sum: 8000 area

`publishable=false`、`exclude_from_official_bank=true`、`quality_status=awaiting_expert_review`、`novelty_review_status=pending_cross_series_model_review`。

### UC-ADV12-O151 双吸附有机表面反应Langmuir–Hinshelwood覆盖率、过量反应物抑制与选择最优

#### 完整题干
一假想有机异相催化表面遵循竞争Langmuir吸附A+*⇌A*、B+*⇌B*，仅吸附A*与邻近B*发生生成P+2*的理想Langmuir–Hinshelwood反应。吸附常数K_A=100.0 L/mol、K_B=50.00 L/mol，初始液相C_A=0.02000、C_B=0.01000 mol/L；活性位点量Γ=1.000×10⁻⁶ mol/m²、等效邻位反应频率k_s=2.000 s⁻¹、催化表面积0.1000 m²、液相体积1.000 L。在60.00 s的短时近似中忽略液相浓度变化对表面覆盖率的反馈。求空位、A/B吸附分数、单位面积产物生成速率、60 s产物量及液相A/B剩余量；在固定C_B下求唯一最佳C_A及最大速率、过量A对速率的抑制，检查活性位点和A/B骨架守恒及近似适用范围。

#### 分步解析
1. 设一种假想有机异相催化表面有等价位点*，A与B均可竞争吸附，吸附平衡常数K_A=100.0 L/mol、K_B=50.00 L/mol。

2. 反应机理A+*⇌A*、B+*⇌B*，随后邻近A*与B*反应生成可迅速离开的有机产物P和两个空位，忽略其它吸附分子。

3. 均匀平均场位点分数满足θ_*=1/[1+K_A C_A+K_B C_B]、θ_A=K_A C_A θ_*、θ_B=K_B C_B θ_*。

4. 在C_A=0.02000、C_B=0.01000 mol/L时定义吸附活动度x=K_A C_A=2.000、y=K_B C_B=0.5000。

5. 计算分母1+x+y=3.50000000000，空位分数θ_*=0.285714285714，θ_A=0.571428571429、θ_B=0.142857142857。

6. 反应按理想双吸附位点Langmuir–Hinshelwood式r=k_s Γ θ_A θ_B计，Γ=1.000×10⁻⁶ mol位点/m²、k_s=2.000 s⁻¹。

7. 得到面积速率r=1.63265306122e-7 mol/(m²·s)，量纲由Γ和k_s共同给出。

8. 总催化表面积A_s=0.1000 m²，若浴液体积1.000 L且60.00 s内浓度近似恒定，则产物摩尔量n_P=9.79591836735e-7 mol。

9. 对于固定C_B，反应速率随x的函数为r∝x y/(1+x+y)²；求导可得唯一最大值发生在x_opt=1+y。

10. 故最佳A浓度C_A,opt=(1+K_B C_B)/K_A=0.0150000000000 mol/L，对应r_max=1.66666666667e-7 mol/(m²·s)。

11. 初态C_A=0.02000 mol/L高于最优0.01500 mol/L，过量A占据位点会抑制B吸附，速率相对最优偏低2.08333333333%。

12. 各位点分数θ_*+θ_A+θ_B=1；按P每分子消耗一个A、一个B，60 s后A/B各减少n_P/1L，二者均保留正浓度。

13. 真实邻位关联、表面扩散、强吸附阻塞、多个位点族、放热与批式浓度变化会使平均场θ_Aθ_B公式失效；若反应时间增长不能继续用恒浓度近似。

#### 独立数值向量
- A_adsorption_activity: 2 ratio
- B_adsorption_activity: 0.5 ratio
- theta_A: 0.5714285714285714 fraction
- theta_B: 0.14285714285714285 fraction
- theta_empty: 0.2857142857142857 fraction
- surface_product_rate_mol_m2_s: 1.6326530612244896e-7 mol/(m2 s)
- product_amount_60s_mol: 9.795918367346939e-7 mol
- optimal_A_concentration_M: 0.015 mol/L
- maximum_surface_rate_mol_m2_s: 1.6666666666666665e-7 mol/(m2 s)
- rate_deficit_from_optimum_ratio: 0.02083333333333326 fraction
- bulk_product_concentration_change_M: 9.795918367346939e-7 mol/L
- remaining_bulk_A_M: 0.019999020408163266 mol/L
- remaining_bulk_B_M: 0.009999020408163266 mol/L
- site_fraction_sum: 0.9999999999999999 ratio
- surface_turnover_capacity_mol_m2_s: 0.000002 mol/(m2 s)

`publishable=false`、`exclude_from_official_bank=true`、`quality_status=awaiting_expert_review`、`novelty_review_status=pending_cross_series_model_review`。

### UC-ADV12-P151 Brusselator开放化学反应网络的定点Jacobian、Hopf阈值与振荡模态

#### 完整题干
一个假想开放化学振荡器按经典Brusselator无量纲动力学运行：dx/dt=A−(B+1)x+x²y，dy/dt=Bx−x²y，其中外界供给参数A=2.000，时间单位s，待比较B=4.800、B=5.000和B=5.200。推导唯一正稳态、2×2线性Jacobian、特征方程及稳定性判据，计算B=4.800时的稳态浓度、复特征值实虚部、线性振荡周期和衰减时间；求临界B_c和频率、周期，再计算B=5.200时复特征值及增长时间。严格检查平衡物料流率、迹与行列式、特征值和模型范围，说明线性局部失稳不能自动证明实际稳定极限环。

#### 分步解析
1. 考虑经典无量纲Brusselator开放化学反应网络，两个中间组分x与y遵从dx/dt=A−(B+1)x+x²y，dy/dt=Bx−x²y。

2. 题设外部维持A=2.000的恒定输入，反应物和产物库维持B参数固定，x、y是无量纲浓度，时间单位秒。

3. 稳态由dy/dt=0得y=B/x（若x>0），代入dx/dt=0得到x*=A、y*=B/A；对正A、B唯一且为正。

4. 在稳态处对右端计算Jacobian：J=[[B−1,A²],[-B,−A²]]。

5. 其迹Tr J=B−1−A²，行列式det J=A²>0；特征方程λ²−(Tr J)λ+det J=0。

6. 当Tr J<0时平衡线性稳定；Tr J>0时线性不稳定；在判别式小于零情况下是共轭复特征根。

7. 给定B=4.800时x*=2.000、y*=2.40000000000，迹=-0.200000000000、行列式=4。

8. 这时两个特征值的实部=-0.100000000000 s⁻¹，虚部的绝对值=1.99749843554 rad/s，说明扰动以衰减振荡方式恢复。

9. 对应线性振荡周期=3.14552702289 s、包络衰减时间=10.0000000000 s。

10. Hopf线性临界条件Tr J=0给B_c=1+A²=5，临界角频率ω_c=√det=A=2 rad/s。

11. Hopf线性临界周期T_c=2π/ω_c=3.14159265359 s，临界稳态y*=B_c/A=2.5。

12. 当B=5.200时特征值实部=0.100000000000 s⁻¹、虚部绝对值=1.99749843554 rad/s，扰动按指数放大，线性增长时间10.0000000000 s。

13. 线性Hopf条件只证明定点的局部稳定性改变和频率；有限幅度极限环存在性与稳定性还需非线性中心流形及Lyapunov系数分析，不应仅凭正实部直接断言稳定周期轨道。

#### 独立数值向量
- stable_fixed_x: 2 fraction
- stable_fixed_y: 2.4 fraction
- stable_trace: -0.20000000000000018 s^-1
- jacobian_determinant: 4 s^-2
- stable_real_eigenvalue: -0.10000000000000009 s^-1
- stable_oscillation_frequency_rad_s: 1.997498435543818 rad/s
- stable_linear_period_s: 3.1455270228880017 s
- Hopf_threshold_B: 5 dimensionless
- critical_fixed_y: 2.5 fraction
- unstable_real_eigenvalue: 0.10000000000000009 s^-1
- unstable_oscillation_frequency_rad_s: 1.997498435543818 rad/s
- unstable_linear_period_s: 3.1455270228880017 s
- critical_angular_frequency: 2 rad/s
- Hopf_period_s: 3.141592653589793 s
- stable_envelope_decay_s: 9.999999999999991 s
- unstable_growth_time_s: 9.999999999999991 s
- distance_to_Hopf_threshold: 0.20000000000000018 dimensionless

`publishable=false`、`exclude_from_official_bank=true`、`quality_status=awaiting_expert_review`、`novelty_review_status=pending_cross_series_model_review`。

<a id="batch-05"></a>

## 第十二辑第五批四道大学化学高难度综合题

以下为编辑稿，不等于专家通过、原创性确认或正式出版许可。

### UC-ADV12-I155 Ni3Al低温电子—Debye声子热容分离、德拜温度与熵能积分

#### 完整题干
一种假想金属间无机化合物Ni₃Al的低温摩尔热容（每摩尔化学式）由电子与Debye声子贡献C(T)=γT+βT³构成，测得T₁=5.000 K时C₁=0.0225000000000000 J/(mol·K)、T₂=10.00 K时C₂=0.120000000000000 J/(mol·K)。Ni₃Al每化学式含4原子，低温Debye系数β=(12π⁴nR)/(5Θ_D³)，n=4，R=8.314462618 J/(mol·K)。给定Ni/Al摩尔原子量58.6934/26.9815 g/mol。将C/T对T²线性化，唯一求电子Sommerfeld γ、声子β与Debye温度Θ_D；计算10 K的电子/声子贡献、电子分数和0–10 K的熵增加与内能增加，并逐项回代热容、原子数、低温T≪Θ_D、量纲和可能磁性Schottky项的失效情形。

#### 中文分步解析
1. 假想金属间化合物Ni₃Al的低温等压与定容热容差可以忽略，在题设温度范围应用Sommerfeld电子热容与Debye声子T³律。

2. 每摩尔Ni₃Al式量含4个原子，低温热容写作C(T)=γT+βT³，其中γ单位J/(mol·K²)、β单位J/(mol·K⁴)。

3. 实验在5.000 K与10.00 K测得C₅与C₁₀，先对每组除以T得到C/T=γ+βT²，避免直接解高度尺度不均的线性方程。

4. 两点数据分别C₅=0.0225000000000、C₁₀=0.120000000000 J/(mol·K)，对应C/T严格为T²的直线。

5. 由斜率β=[C₁₀/T₂−C₅/T₁]/(T₂²−T₁²)=0.000100000000000 J/(mol·K⁴)。

6. 由截距求γ=0.00200000000000 J/(mol·K²)，γ与β均正，保证所选温度范围热容为正。

7. 低温Debye理论β=(12π⁴ n R)/(5 Θ_D³)，其中n=4为每式量原子数而非Ni数量。

8. 反算Debye温度Θ_D=426.810376786 K，远大于10.00 K，支持T³低温近似。

9. 在10 K电子热容γT=0.0200000000000、晶格热容βT³=0.100000000000 J/(mol·K)，电子分数=0.166666666667。

10. 通过可逆加热积分，低温摩尔熵S(T)−S(0)=∫₀ᵀ C(T')/T' dT'=γT+(β/3)T³，题设取S(0)=0。

11. 故10 K热激发熵=0.0533333333333 J/(mol·K)，相对于0 K的热激发内能U(T)−U(0)=∫₀ᵀ C(T')dT'=0.350000000000 J/mol。

12. Ni₃Al式量M=3×58.6934+26.9815=203.061700000 g/mol，换算每克热容时应按式量而不是每原子摩尔。

13. 真实金属间化合物可能有磁性热容、电子关联、Schottky中心及声子非Debye项；由两点低温拟合得到的Θ_D只是指定近似的等效参数。

#### 主要答案向量
- heat_capacity_5K_J_molK: 0.0225 J/(mol K)
- heat_capacity_10K_J_molK: 0.12000000000000001 J/(mol K)
- electronic_gamma_J_molK2: 0.0019999999999999996 J/(mol K2)
- Debye_beta_J_molK4: 0.0001 J/(mol K4)
- Debye_temperature_K: 426.810376786438 K
- electronic_heat_10K_J_molK: 0.019999999999999997 J/(mol K)
- phonon_heat_10K_J_molK: 0.1 J/(mol K)
- electronic_fraction_10K: 0.16666666666666666 fraction
- lowT_entropy_10K_J_molK: 0.05333333333333333 J/(mol K)
- lowT_internal_energy_10K_J_mol: 0.35 J/mol
- Ni3Al_formula_mass_g_mol: 203.0617 g/mol
- phonon_over_electron_heat_10K: 5.000000000000001 ratio
- heat_capacity_div_T_10K: 0.012 J/(mol K2)
- Debye_beta_backcalculated: 0.0001000000000000001 J/(mol K4)

审核：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

### UC-ADV12-A155 双通道单分子FRET串色校正、距离与寿命双反演及光子不确定度

#### 完整题干
一种假想单分子有机荧光染料FRET实验，在固定激发功率下得到供体通道计数I_D=400、受体原始通道计数I_A,raw=700。受体信号中来自供体光谱串色的比例α=0.1000 I_D，受体直接激发背景独立测为60个光子；受体/供体亮度校正因子γ=0.7500，采用E=I_A,corr/(I_A,corr+γI_D)。Förster距离R₀=5.000 nm，距离式E=1/[1+(r/R₀)⁶]。供体单独寿命τ_D0=4.000 ns，假设配对后唯有FRET新增淬灭，τ_DA=τ_D0(1−E)。计算校正受体与总计数、E、r、τ_DA、能量转移率k_ET，并以题设有效加权光子数N_eff=I_A,corr+γI_D采用理想二项近似估算σ_E、距离的一阶传播标准差σ_r。核查背景、分数、寿命和几何唯一性以及实际染料标定局限。

#### 中文分步解析
1. 对假想单分子有机荧光供体–受体染料对进行smFRET分析，光子统计采用指定光学检出近似，供体检测通道I_D=400个光子。

2. 受体检测通道原始计数I_A,raw=700，其中供体串色为αI_D、α=0.1000，受体被供体激发激光直接激发的背景独立测定为60个光子。

3. 先扣两类受体伪计数，校正受体计数I_A,corr=I_A,raw−α I_D−I_direct；不能把串色误当作有效能量转移光子。

4. 计算I_A,corr=600.000000000、串色=40、直接激发=60个光子。

5. 检测效率和量子产率差异由题设γ=0.7500校正，采用E=I_A,corr/(I_A,corr+γI_D)。

6. 校正总有效权重=900.000000000，FRET效率E=0.666666666667，非转移分率1−E=0.333333333333。

7. Förster距离规律E=1/[1+(r/R₀)⁶]，已知R₀=5.000 nm，故r=R₀[(1/E)−1]^(1/6)。

8. 求染料有效距离r=4.45449359070 nm，在0<E<1时正根唯一；实际距离还会受到染料取向κ²的影响。

9. 假设只有FRET额外非辐射通道改变供体寿命，供体单独寿命τ_D0=4.000 ns，配对后寿命τ_DA=τ_D0(1−E)。

10. 预测τ_DA=1.33333333333 ns，能量转移速率k_ET=1/τ_DA−1/τ_D0=0.500000000000 ns⁻¹。

11. 为了估计理想光子计数不确定度，采用题设有效加权光子数N_eff=I_A,corr+γI_D，近似二项标准差σ_E≈√[E(1−E)/N_eff]。

12. 得到σ_E=0.0157134840264，一阶误差传播|dr/dE|=r/[6E(1−E)]，距离标准不确定度σ_r=0.0524967104123 nm。

13. 加权N_eff只是近似有效计数，实际不确定度应计入串色/γ/直接激发标定误差、暗计数、染料闪烁和光子时间相关；此题不证明实际单分子距离真实精度。

#### 主要答案向量
- corrected_acceptor_photons: 600 photons
- gamma_corrected_total_count: 900 effective_photons
- FRET_efficiency: 0.6666666666666666 fraction
- donor_inefficiency_fraction: 0.33333333333333337 fraction
- interdye_distance_nm: 4.454493590701697 nm
- predicted_donor_lifetime_ns: 1.3333333333333335 ns
- energy_transfer_rate_ns_inv: 0.4999999999999999 ns^-1
- effective_photon_count: 900 photons
- ideal_shotnoise_sigma_E: 0.015713484026367724 fraction
- propagated_distance_sigma_nm: 0.05249671041228638 nm
- corrected_acceptor_to_donor_ratio: 2 ratio
- total_acceptor_correction_photons: 100 photons
- donor_leakage_photons: 40 photons
- direct_acceptor_excitation_photons: 60 photons
- FRET_geometric_backcheck: 0.6666666666666665 fraction

审核：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

### UC-ADV12-O152 AA–BB失配逐步聚加成Carothers链数、端基统计与质量守恒

#### 完整题干
一种假想理想双官能有机逐步聚加成以AA和BB单体反应生成线性A–B共聚链，初始AA分子浓度N_A=0.1000 mol/L、BB分子浓度N_B=0.08000 mol/L，每单体各有两个同类官能团，AA与BB的官能团形成新键时不放出小分子。反应结束时限量B官能团的转化率p_B=0.7500。严格假定所有反应都是两个不同链之间的加成，无环化、支化、链断裂或体积变化。给定AA单体摩尔质量200.0 g/mol、BB单体150.0 g/mol。求形成的键摩尔量、反应后独立链浓度、数均聚合度与Carothers式、A基团转化率、残余A/B端基浓度与端基分数、数均链式量、每链两种单体数、限量基团完全消耗时的最大聚合度，并以分子数、端基数和总质量守恒独立复核。

#### 中文分步解析
1. 研究一种假想理想双官能AA型和BB型有机单体的逐步聚加成，AA和BB之间每形成一条键都把两个原来的分子链连成一条，不产生小分子。

2. 初始AA单体浓度N_A=0.1000 mol/L，每分子有两个A反应基团，初始A官能团总量0.2000 mol/L。

3. 初始BB单体N_B=0.08000 mol/L，每分子有两个B反应基团，初始B官能团总量0.1600 mol/L，B官能团为限量官能团。

4. 在题设反应结束时B官能团转化率p_B=0.7500，无环化、无支化和链断裂，形成的A–B键浓度等于2N_B p_B。

5. 算得新键总浓度bonds=0.120000000000 mol/L，每条键连接两个组分而不消耗或新增任何单体骨架。

6. 若没有闭环，每形成一条新键使独立分子链总数减少1，因此链浓度N_chain=N_A+N_B−bonds。

7. 此时链浓度N_chain=0.0600000000000 mol/L，平均每链包含单体数DP_n=(N_A+N_B)/N_chain=3.00000000000。

8. 以初始单体计量比r=N_B/N_A=0.8000，Carothers失配公式DP_n=(1+r)/(1+r−2rp_B)也给相同数值。

9. A基团已反应分数p_A=bonds/(2N_A)=0.600000000000；反应后未消耗A、B端基浓度分别0.0800000000000与0.0400000000000 mol/L。

10. 每条线性聚合物平均保留两个端基，故剩余官能团总量unA+unB=2N_chain；A端基分数unA/(2N_chain)，B端基分数unB/(2N_chain)。

11. 求端基分数A=0.666666666667、B=0.333333333333，两者和为1，体现非化学计量导致的A富集。

12. 题设AA单体式量200.0 g/mol、BB单体式量150.0 g/mol，聚加成不释放质量，骨架质量浓度M_tot=200N_A+150N_B。

13. 总聚合骨架质量=32.0000000000 g/L，数均链式量M_n=M_tot/N_chain=533.333333333 g/mol。

14. 即使B基团全部消耗，最大理论DP_n=(N_A+N_B)/(N_A−N_B)，仍有限；一旦出现分子内环化、支化或缩聚放出小分子，链计数与式量公式需重新推导。

#### 主要答案向量
- formed_AB_bonds_M: 0.12 mol/L
- polymer_chain_concentration_M: 0.06 mol/L
- number_average_degree_of_polymerization: 3 monomers/chain
- initial_B_over_A_monomer_ratio: 0.7999999999999999 ratio
- A_functional_conversion: 0.6 fraction
- unreacted_A_end_groups_M: 0.08000000000000002 mol/L
- unreacted_B_end_groups_M: 0.04000000000000001 mol/L
- A_terminus_fraction: 0.6666666666666669 fraction
- B_terminus_fraction: 0.3333333333333334 fraction
- polymer_skeleton_mass_g_L: 32 g/L
- number_average_chain_mass_g_mol: 533.3333333333334 g/mol
- mean_A2_units_per_chain: 1.6666666666666667 units/chain
- mean_B2_units_per_chain: 1.3333333333333335 units/chain
- maximum_stoichiometric_DPn: 8.999999999999998 monomers/chain
- molecule_count_reconstruction_M: 0.18 mol/L
- total_unreacted_functional_end_groups_M: 0.12000000000000002 mol/L

审核：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

### UC-ADV12-P152 Nernst–Planck双离子开路扩散电势与双极性扩散守恒

#### 完整题干
理想稀二元1:1电解质M⁺A⁻在厚度L=1.000 mm的液层中沿x方向扩散，左右端浓度分别c_L=0.2000 mol/L、c_R=0.1000 mol/L，两端储液池保持固定浓度。温度298.15 K，阳离子、阴离子自由扩散系数D_+=2.000×10⁻⁹、D_−=1.000×10⁻⁹ m²/s。局部电中性c_+=c_−=c，电极开路无净离子电流，对两种离子分别采用Nernst–Planck式J_i=−D_i dc/dx−z_i D_iFc/(RT) dφ/dx，z_+=+1、z_−=−1；R=8.314462618 J/(mol·K)、F=96485.33212 C/mol。推导零电流电场、双极性扩散系数、相等阳/阴离子通量、左右扩散电势差、输运分数和两离子电流抵消、固定端点的最长线性扩散模态时间，严格核验浓度SI单位、势差符号、浓度和电荷守恒与模型边界。

#### 中文分步解析
1. 考虑一价盐M⁺A⁻在一维液层中无外部电路电流的扩散，局部电中性给c_+=c_-=c(x)，两种离子扩散系数D_+=2.000×10⁻⁹、D_−=1.000×10⁻⁹ m²/s。

2. 在稀理想溶液、恒温条件下，用Nernst–Planck式J_+=−D_+ dc/dx−(D_+F/RT)c dφ/dx。

3. 阴离子荷数−1，对应J_−=−D_− dc/dx+(D_−F/RT)c dφ/dx，注意电迁移项符号反向。

4. 开放电路零净电流条件j=F(J_+−J_−)=0，推得dφ/dx=(RT/F)[(D_−−D_+)/(D_++D_−)] dln c/dx。

5. 代入任一通道得到盐的共同粒子通量J_s=J_+=J_−=−D_amb dc/dx，其中D_amb=2D_+D_−/(D_++D_−)。

6. 计算D_amb=1.33333333333e-9 m²/s，介于两种离子扩散系数之间，反映快离子被扩散电场约束。

7. 两端固定浓度左c_L=0.2000 mol/L、右c_R=0.1000 mol/L；转成SI浓度分别200与100 mol/m³。

8. 液层厚度L=0.001 m，梯度dc/dx=-100000.000000 mol/m⁴，故盐通量J_s=0.000133333333333 mol/(m²·s)，从左向右为正。

9. 将电势导数沿层厚积分得Δφ=φ_R−φ_L=(RT/F)[(D_−−D_+)/(D_++D_−)]ln(c_R/c_L)。

10. 计算Δφ=5.93624625979 mV；由于阳离子扩散更快，向右的扩散电势为正，以抵消额外的阳离子通量。

11. 理想离子输运分数t_+=D_+/(D_++D_−)=0.666666666667、t_−=0.333333333333；两者相加为1。

12. 在零电流条件下两种离子的通量相等且各自电流密度的绝对值FJ_s=12.8647109493 A/m²，正负符号抵消，净电流为零。

13. 若两端浓度固定、层内参数均匀，线性扰动最慢衰减时间为L²/(π² D_amb)，这是含Dirichlet端点的扩散模态估算。

14. 得到时间尺度75.9908877318 s，不能将其误解释成离子单独的漂移穿越时间。

15. 模型需局部电中性、无限稀活度、无对流、浓差边界固定且无显著Debye层；多价离子、浓电解质非理想、膜固定电荷或外加电流时须解更完整Poisson–Nernst–Planck方程。

#### 主要答案向量
- ambipolar_diffusivity_m2_s: 1.3333333333333333e-9 m2/s
- concentration_gradient_mol_m4: -100000 mol/m4
- salt_flux_mol_m2_s: 0.00013333333333333334 mol/(m2 s)
- diffusion_potential_right_minus_left_mV: 5.93624625979223 mV
- cation_transference_fraction: 0.6666666666666666 fraction
- anion_transference_fraction: 0.3333333333333333 fraction
- each_ion_charge_current_magnitude_A_m2: 12.864710949333334 A/m2
- net_electric_current_A_m2: 0 A/m2
- slab_longest_mode_time_s: 75.99088773175333 s
- log_right_left_activity_ratio: -0.6931471805599453 dimensionless
- left_electrolyte_M: 0.2 mol/L
- right_electrolyte_M: 0.1 mol/L
- diffusion_coefficient_ratio: 2 ratio
- dimensionless_potential: 0.23104906018664842 dimensionless
- relative_ambipolar_diffusivity: 0.44444444444444436 ratio

审核：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

<a id="batch-06"></a>

## 第十二辑第六批四题完整中文解析

全部仍为待专家审核的编辑草稿。

### UC-ADV12-I156 立方NiO Christoffel声子传播、弹性各向异性与Hill平均模量

#### 题干
假想岩盐型立方NiO无机单晶，晶胞参数a=4.180 Å、每常规晶胞有4个NiO式量，Ni/O原子量分别58.6934/15.999 g/mol、N_A=6.02214076×10²³ mol⁻¹。其晶体弹性常数C₁₁=300.0 GPa、C₁₂=100.0 GPa、C₄₄=80.00 GPa，忽略磁弹耦合与晶体缺陷。求式量、晶胞体积、密度、体积模量与四方剪切模量、Zener各向异性比；通过立方晶体Christoffel刚度求[100]的纵/横声速和[110]的纵波及面内[1̄10]横波速度。另计算Voigt、Reuss及Hill多晶平均剪切模量和泊松比，逐项检验Born稳定性、Ni²⁺/O²⁻电中性、弹性模量/密度SI换算及模型边界。

#### 中文分步推导
1. 把假想岩盐型NiO无机单晶看作立方晶系，室温弹性刚度矩阵由三个独立常数C₁₁、C₁₂、C₄₄表征。

2. 常规岩盐晶胞中有4个NiO式量；给定a=4.180 Å、Ni/O摩尔原子质量58.6934/15.999 g/mol，用质量除以晶胞体积得到理想密度。

3. 得到式量M=74.6924000000 g/mol、体积a³=7.30346320000e-29 m³、密度ρ=6792.92247114 kg/m³。

4. 给C₁₁=300.0 GPa、C₁₂=100.0 GPa、C₄₄=80.00 GPa，立方晶体Born弹性稳定条件为C₁₁−C₁₂>0、C₁₁+2C₁₂>0、C₄₄>0。

5. 体积模量K=(C₁₁+2C₁₂)/3=166.666666667 GPa，四方剪切常数C'=(C₁₁−C₁₂)/2=100.000000000 GPa。

6. Zener弹性各向异性比A_Z=2C₄₄/(C₁₁−C₁₂)=0.800000000000，与各向同性理想值1不同。

7. 沿[100]方向，Christoffel弹性波本征值为C₁₁（纵波）和C₄₄（两个横波），声速取v=√(λ/ρ)。

8. 故[100]纵波速度=6645.57094045 m/s，横波速度=3431.75807712 m/s。

9. 沿[110]方向，纵波刚度(C₁₁+C₁₂+2C₄₄)/2，面内横波[1̄10]刚度(C₁₁−C₁₂)/2，另一横波[001]刚度C₄₄。

10. 由此计算[110]纵波速度6420.23147944、面内横波速度3836.82217139 m/s，与[100]声速差反映各向异性。

11. Voigt多晶均匀应变剪切模量G_V=(C₁₁−C₁₂+3C₄₄)/5，Reuss均匀应力剪切模量G_R=5(C₁₁−C₁₂)C₄₄/[4C₄₄+3(C₁₁−C₁₂)]。

12. 得到G_V=88.0000000000、G_R=86.9565217391 GPa，Hill平均G_H=87.4782608696 GPa。

13. 多晶等效泊松比ν=(3K−2G_H)/[2(3K+G_H)]=0.276642984014，满足通常稳定各向同性材料的−1<ν<0.5。

14. Ni²⁺与O²⁻每式量形式电中性；真实NiO存在反铁磁有序与磁弹耦合、缺陷及温度相关弹性模量，理想单晶与随机多晶平均不可混同。

#### 主要数值答案向量
- NiO_formula_mass_g_mol: 74.69239999999999 g/mol
- unit_cell_volume_m3: 7.3034632e-29 m3
- crystal_density_kg_m3: 6792.922471135383 kg/m3
- bulk_modulus_GPa: 166.66666666666666 GPa
- tetragonal_shear_modulus_GPa: 100 GPa
- Zener_anisotropy: 0.8 ratio
- longitudinal_100_velocity_m_s: 6645.570940446578 m/s
- transverse_100_velocity_m_s: 3431.7580771186076 m/s
- longitudinal_110_velocity_m_s: 6420.231479435988 m/s
- transverse_1minus10_velocity_m_s: 3836.8221713855864 m/s
- Voigt_shear_GPa: 88 GPa
- Reuss_shear_GPa: 86.95652173913044 GPa
- Hill_shear_GPa: 87.47826086956522 GPa
- Hill_Poisson_ratio: 0.2766429840142096 fraction
- Born_C11_minus_C12_Pa: 200000000000 Pa
- Born_C11_plus2C12_Pa: 500000000000 Pa
- Born_C44_Pa: 80000000000 Pa

待审状态：publishable=false；exclude_from_official_bank=true；quality_status=awaiting_expert_review；novelty_review_status=pending_cross_series_model_review。

### UC-ADV12-A156 BET氮气多层吸附双压线性反演、单层容量与比表面积

#### 题干
一种假想多孔无机样品在77.00 K的N₂吸附实验遵循BET模型v=v_m Cx/[(1−x)(1+(C−1)x)]，x=p/p_sat，v的单位cm³(STP)/g，v_m为单层容量，C为吸附热常数。两相对压力x₁=0.1000与x₂=0.3000下分别测得v₁=18.832391713748和v₂=27.297543221110 cm³(STP)/g。N₂分子横截面积为0.1620 nm²，标准状态摩尔气体体积22414 cm³/mol、N_A=6.02214076×10²³ mol⁻¹、R=8.314462618 J/(mol·K)。对BET方程作直线变换Y=x/[v(1−x)]，由两点反推v_m、C，预测第三压力x=0.2000的吸附量，计算BET比表面积和在C≈exp[(E₁−E_L)/RT]假设下的吸附能差，检查正性、单位及模型边界。

#### 中文分步推导
1. 在77.00 K的理想氮气吸附分析中，采用BET多层吸附模型v=v_m C x/[(1−x)(1+(C−1)x)]，x=p/p_sat。

2. 题设比表面积计算使用氮分子横截面积a_N2=0.1620 nm²/分子，标准状态摩尔气体体积V_STP=22414 cm³/mol。

3. 将BET等温式线性化：Y=x/[v(1−x)]=1/(v_m C)+[(C−1)/(v_m C)]x。

4. 两相对压力x₁=0.1000与x₂=0.3000均在题设BET近似适用的低压范围，且对应氮吸附量v以cm³(STP)/g计。

5. 两观测吸附量v₁=18.8323917137、v₂=27.2975432211 cm³(STP)/g。

6. 经BET变换Y₁=0.00590000000000、Y₂=0.0157000000000 (g/cm³ STP)。

7. 两不同压力使直线斜率s=(Y₂−Y₁)/(x₂−x₁)、截距b=Y₁−s x₁唯一。

8. 数值结果s=0.0490000000000、b=0.00100000000000，均为正，符合题设C>1的吸附热参数。

9. 从s+b=1/v_m和s/b=C−1得到v_m=1/(s+b)、C=1+s/b。

10. 反演单层容量v_m=20.0000000000 cm³(STP)/g、BET常数C=50.0000000000。

11. 在第三压力x=0.2000时预测v=23.1481481481 cm³(STP)/g，可作非拟合点的独立检验。

12. 单位质量比表面积S_BET=(v_m/V_STP)N_A a_N2，须把0.162 nm²换成0.162×10⁻¹⁸ m²。

13. 计算S_BET=87.0515573409 m²/g；若将C≈exp[(E₁−E_L)/(RT)]视为近似，则一层与液化焓差ΔE=RT lnC=2.50453041603 kJ/mol。

14. 高压出现毛细凝聚、微孔填充、吸附层结构偏离、孔径与气体截面积不均、样品不完全脱气时，BET常数与计算面积不再可简单解释为真实全部几何面积。

#### 主要数值答案向量
- uptake_p_over_psat0p1_cm3_STP_g: 18.832391713747644 cm3/g
- uptake_p_over_psat0p3_cm3_STP_g: 27.297543221110104 cm3/g
- BET_transformed_Y1: 0.005900000000000002 g/cm3
- BET_transformed_Y2: 0.0157 g/cm3
- BET_slope: 0.04899999999999999 g/cm3
- BET_intercept: 0.0010000000000000026 g/cm3
- monolayer_capacity_cm3_STP_g: 20.000000000000004 cm3/g
- BET_C_constant: 49.99999999999986 dimensionless
- predicted_uptake_0p2_cm3_STP_g: 23.148148148148145 cm3/g
- N2_specific_surface_area_m2_g: 87.05155734094764 m2/g
- first_layer_energy_excess_kJ_mol: 2.5045304160329014 kJ/mol
- BET_slope_fraction_ratio: 0.98 ratio
- first_point_transformed_reconstruction: 0.005900000000000002 g/cm3
- direct_BET_intercept: 0.001 g/cm3

待审状态：publishable=false；exclude_from_official_bank=true；quality_status=awaiting_expert_review；novelty_review_status=pending_cross_series_model_review。

### UC-ADV12-O153 对位取代SNAr的Hammett线性自由能反演、动力学转化与活化自由能差

#### 题干
某假想三种对位取代芳香底物在恒定过量亲核试剂作用下发生同一SNAr限速步骤，采用Hammett经验关系log₁₀(k_X/k_H)=ρσ_p。三种取代基的σ_p分别为给电子基−0.2700、母体0、吸电子基+0.7800，在T=298.15 K下测得伪一级速率分别0.00211348903983665、0.0100000000000000、0.891250938133746 s⁻¹。给定R=8.314462618 J/(mol·K)，且实验中无机理切换。由两端速率和σ反演ρ、母体速率k_H，求两个极端反应的速率比；吸电子底物在60.00 s内反应不可逆且亲核试剂保持过量，求转化率与半衰期。假定不同取代基Eyring指前因子相同，估算吸电子相对于母体的过渡态活化自由能差；检查log底数、概率、反应骨架守恒及Hammett适用的机理边界。

#### 中文分步推导
1. 假设三种对位取代芳香化合物在相同亲核试剂浓度和溶剂温度下发生同一限速步骤的亲核芳香取代SNAr，均呈伪一级底物消耗。

2. 以Hammett经验方程log₁₀(k_X/k_H)=ρσ_p描述取代基效应，题设三取代基常数σ_p分别−0.2700、0、+0.7800。

3. 正ρ表示对位吸电子基团稳定题设限速过渡态相对于底物并加快反应；模型只适用于无机理改变的同源取代基系列。

4. 给定基准未取代母体速率k_H=0.01000 s⁻¹、Hammett系数ρ=+2.500。

5. 三种实测速率分别0.00211348903984、0.0100000000000、0.891250938134 s⁻¹，吸电子取代基的速率最高。

6. 对两个不同σ取差：log₁₀(k_EWG/k_EDG)=ρ(σ_EWG−σ_EDG)，直接消去母体速率k_H。

7. 由两端数据反演ρ=2.50000000000，再由σ=0的中间取代基恢复k_H=0.0100000000000 s⁻¹。

8. 吸电子与给电子两端速率之比k_EWG/k_EDG=421.696503429，体现取代基常数差而非反应物绝对浓度差。

9. 对于最强吸电子的体系，假设亲核试剂恒定、反应不可逆，剩余底物分数exp(−kt)，产物转化率1−exp(−kt)。

10. 反应60.00 s后的转换率X=1.00000000000，剩余底物分数=0.00000000000。

11. 该体系伪一级半衰期t₁/₂=ln2/k=0.777723928136 s，适用时间尺度应与核磁/色谱监测采样间隔相匹配。

12. 在相同温度及Eyring指前因子近似相同的假设下，过渡态活化自由能差ΔΔG‡=−RT ln(k_EWG/k_H)。

13. 计算ΔΔG‡=-11.1306185297 kJ/mol，为负，符合吸电子基团加速的符号预期；不应将经验ρ误写为绝对反应活化焓。

14. 若强取代基改变亲核进攻位点、形成不同Meisenheimer中间体、溶剂化或多限速步骤，线性Hammett关系与外推速率不再成立。

#### 主要数值答案向量
- rate_EDG_sigma_minus0p27_s_inv: 0.0021134890398366466 s^-1
- rate_parent_sigma_zero_s_inv: 0.01 s^-1
- rate_EWG_sigma_plus0p78_s_inv: 0.8912509381337459 s^-1
- Hammett_rho_true: 2.5 dimensionless
- Hammett_rho_inferred: 2.5 dimensionless
- parent_rate_k0_s_inv: 0.01 s^-1
- EWG_to_EDG_rate_ratio: 421.69650342858245 ratio
- EWG_substrate_conversion_60s: 1 fraction
- EWG_unreacted_fraction: 0 fraction
- EWG_minus_parent_activation_G_kJmol: -11.130618529738612 kJ/mol
- EWG_half_life_s: 0.7777239281356334 s
- log_rate_ratio_extremes: 2.625 dimensionless
- exposure_k_t: 53.47505628802475 dimensionless
- EWG_to_parent_rate_ratio: 89.12509381337459 ratio
- sigma_difference_extremes: 1.05 dimensionless

待审状态：publishable=false；exclude_from_official_bank=true；quality_status=awaiting_expert_review；novelty_review_status=pending_cross_series_model_review。

### UC-ADV12-P153 球形多孔催化剂Thiele模数的反应—扩散边值解与有效因子

#### 题干
一个球形多孔催化剂颗粒半径R_p=1.000 mm，内部反应物A发生一级不可逆反应k=0.01000 s⁻¹、有效扩散系数D_eff=1.000×10⁻⁹ m²/s，外部液体足够搅拌使球面浓度固定c_s=1.000 mol/m³，忽略颗粒温度梯度、外部膜阻力及孔结构变形。稳态球对称反应扩散方程D_eff(r⁻²)d/dr(r²dc/dr)−kc=0，中心要求有限。推导解析浓度分布、Thiele模数φ、中心浓度、球形有效因子η=3(φcothφ−1)/φ²，计算球体积、表面积、体积反应速率与表面扩散通量并独立比对二者总摩尔数，检查扩散长度、φ→0与φ→∞两端极限及实验模型范围。

#### 中文分步推导
1. 考虑半径R_p=1.000 mm的球形多孔催化剂颗粒，颗粒内部有单一反应物A发生一级不可逆反应，体积有效常数k=0.01000 s⁻¹。

2. 有效分子扩散系数D_eff=1.000×10⁻⁹ m²/s，颗粒外部膜阻力忽略，球外表面浓度固定c_s=1.000 mol/m³。

3. 稳态球对称质量守恒为D_eff(1/r²)d/dr(r²dc/dr)−kc=0，边界r=R_p处c=c_s、中心r=0的浓度与通量有限。

4. 引入Thiele模数φ=R_p√(k/D_eff)，无量纲；固有扩散反应长度l=√(D_eff/k)。

5. 对常系数径向方程可得c(r)/c_s=[R_p/r]sinh(φr/R_p)/sinhφ；中心极限用sinhz/z→1。

6. 本题φ=3.16227766017，中心表面浓度比c(0)/c_s=φ/sinhφ=0.268194031271。

7. 颗粒有效因子η定义实际总反应速率与若整个颗粒浓度均为c_s时的理想体积反应速率之比。

8. 对球体积积分∫k c(r)dV，得η=(3/φ²)(φ cothφ−1)，可由球面扩散通量独立推出。

9. 数值η=0.652089031266，在0与1之间，表明内部扩散造成有效反应速率下降。

10. 球体积V_p=4.18879020479e-9 m³、表面积A_p=0.0000125663706144 m²，因此实际转化总速率=2.73146414682e-11 mol/s。

11. 外表面向内的物质通量大小J_s=D_eff c_s(φcothφ−1)/R_p=0.00000217363010422 mol/(m²·s)。

12. 表面积乘通量=2.73146414682e-11 mol/s，与体积积分总反应速率完全一致，实现稳态扩散–反应质量守恒。

13. 当φ→0时由双曲函数级数η→1、中心浓度趋c_s；φ≫1时η≈3/φ，反应集中于外表薄壳。

14. 本模型以球形、恒定有效扩散、单相等温、一级表观动力学和外部膜传质可忽略为前提；真实多孔载体的孔径扩散、放热、非一级表面覆盖与毒化会改变边界值解。

#### 主要数值答案向量
- Thiele_modulus: 3.1622776601683795 dimensionless
- spherical_effectiveness_factor: 0.6520890312659064 fraction
- center_surface_concentration_ratio: 0.26819403127115227 fraction
- center_concentration_mol_m3: 0.26819403127115227 mol/m3
- pellet_volume_m3: 4.188790204786391e-9 m3
- pellet_area_m2: 0.000012566370614359172 m2
- total_reaction_rate_mol_s: 2.7314641468152756e-11 mol/s
- surface_molar_flux_mol_m2_s: 0.0000021736301042196888 mol/(m2 s)
- surface_flux_times_area_mol_s: 2.731464146815276e-11 mol/s
- actual_intrinsic_rate_ratio: 0.6520890312659064 ratio
- dimensionless_surface_gradient: 2.1736301042196886 dimensionless
- intrinsic_over_actual_rate_ratio: 1.533532925801084 ratio
- hyperbolic_effectiveness_alternate: 0.6520890312659064 ratio
- diffusion_reaction_length_m: 0.00031622776601683794 m

待审状态：publishable=false；exclude_from_official_bank=true；quality_status=awaiting_expert_review；novelty_review_status=pending_cross_series_model_review。

<a id="batch-07"></a>

## 第十二辑 I157、A157 题干与解答（专家待审）

### UC-ADV12-I157 Fe(II)两态自旋交叉的配分简并、半人口温度及磁矩涨落

假想八面体Fe(II) d⁶配合物存在S=0低自旋(LS)和S=2高自旋(HS)两热平衡宏态。相对LS，高自旋态的非自旋简并焓差ΔH=+18.00 kJ/mol、振动等附加熵差ΔS=+65.00 J/(mol K)，自旋简并度g_HS/g_LS=5。按独立中心、两态平衡模型K=[HS]/[LS]=5 exp(ΔS/R−ΔH/(RT))，R=8.314462618 J/(mol K)。在T=300.0和350.0 K求高自旋分数；反演高低自旋各占一半的温度；求300 K相对激发能与Schottky涨落热容。若高自旋纯态有效磁矩4.900 μB、低自旋近零，求根均方磁矩、两态概率和并核对分配函数及物理正性、零/高温趋势、化学形式价Fe(II)始终不变的条件。

#### 逐步解答
1. 假设八面体Fe(II) d⁶只存在低自旋S=0和高自旋S=2两宏态，低自旋能量及熵为参照零点。

2. 高自旋相对低自旋的非自旋简并焓差ΔH=18.00 kJ/mol，振动/其它熵差ΔS=65.00 J/(mol K)；高自旋自旋简并度2S+1=5。

3. 将自旋简并与ΔS分别记入，配分比K=5 exp(ΔS/R−ΔH/(RT))；不能再重复计算5倍简并。

4. 在300 K下K=9.12300903447，故高自旋分数p=K/(1+K)=0.901215142988，低自旋比例0.0987848570119。

5. 350 K下同一参数给p_HS=0.962373918177，升温促进高自旋态。

6. 半人口条件K(T½)=1，整理出T½=ΔH/[ΔS+R ln5]，该式物理正根唯一。

7. 计算T½=229.645699902 K，且低于300 K，和p_HS(300 K)>1/2一致。

8. 以两能级相对能量0、ΔH计算摩尔平均激发能U=16221.8725738 J/mol。

9. 温度无关能隙下能量涨落热容C=ΔH²p(1−p)/(RT²)=38.5466971539 J/(mol K)，非负。

10. 假设高自旋纯态有效磁矩4.900 μB、低自旋为0，则平均平方磁矩〈μ²〉=p(4.900)²。

11. 得到均方根磁矩4.65168524119 μB；对无序快速平衡体系，直接对磁矩算术平均不符合Curie磁化率加权。

12. 模型仅适用于无配体交换、固定宏态热力学参数及无磁交换相互作用的独立Fe(II)中心；真实自旋交叉可能有弹性协同、热滞后和多重振动谱。

#### 数值结果
- high_spin_low_spin_partition_ratio: 9.123009034470115 ratio
- high_spin_fraction_300K: 0.9012151429881299 fraction
- low_spin_fraction_300K: 0.09878485701187012 fraction
- high_spin_fraction_350K: 0.9623739181766685 fraction
- half_population_temperature_K: 229.64569990242165 K
- spin_excitation_energy_J_mol: 16221.872573786337 J/mol
- Schottky_heat_capacity_J_molK: 38.54669715387397 J/(mol K)
- squared_effective_moment_muB2: 21.638175583145003 muB2
- root_mean_square_moment_muB: 4.651685241194314 muB
- state_mixing_entropy_J_molK: 73.31931773308598 J/(mol K)
- partition_probability_backcheck: 0.9012151429881299 fraction
- total_population: 1 fraction
- effective_spin_Gibbs_difference_J_mol: -5514.483407677584 J/mol

### UC-ADV12-A157 双点标准加入吸收定量的基线识别与浓度唯一反演

某假想无机微量分析物通过吸光度标准加入法测定，所有测量均已统一体积及稀释因子。已知独立空白测得背景吸光度A_blank=0.1000，另以同一原样依次加入标准使等效浓度分别增加0.5000及2.5000 mmol/L，实测吸光度分别为0.2500和0.5500。假设A=A_blank+m(C_x+C_spike)，其中m单位为吸光度/(mmol/L)，C_x为原样分析物浓度，标准加入不改变分析物形态，测量范围内线性且无时间漂移。求标定斜率、初始待测浓度（mol/L与μmol/L）、两点扣空白信号、原始吸光度比、未扣空白时的错误浓度估计、在4.000 mL中的分析物微摩尔量；用两点独立反解检验唯一性、质量单位和信号差，并说明为什么未知空白时两点不足以同时确定三个参数。

#### 逐步解答
1. 将吸收信号视作两次标准加入的线性关系A_j=A_blank+εℓ(C_x+C_added,j)，其中εℓ及基线在两次测量中均保持不变。

2. 假设样品以固定体积进样，加入标准液后已进行等体积稀释校正；两次标准加入的等效浓度分别0.500与2.500 mmol/L。

3. 观测两次吸光度分别0.2500和0.5500，标准浓度间隔2.000 mmol/L，故斜率为ΔA/ΔC=0.1500 吸光度每mmol/L。

4. 本题仪器响应实际写成A=A_blank+m(C_spike+C_x)，且空白吸光度已由独立空白测量得A_blank=0.1000。

5. 以已知基线扣除，在第一点求初始待测浓度C_x=(0.25−0.10)/0.150000000000−0.5000=0.500000000000 mmol/L。

6. 第二点同样反算C_x=(0.55−0.10)/0.15−2.5000=0.5000 mmol/L，两次交叉检查一致。

7. 斜率由双点差值决定，已知空白则初始浓度唯一；仅有两次信号而无基线或独立标准条件时，不能同时识别全部三个自由参数。

8. 把0.5000 mmol/L转换为0.0005000 mol/L；总试样体积4.000 mL时待测物总量为2.000 μmol。

9. 吸光度是无量纲光学量，斜率单位L/mmol；不应把信号比值误当作组分浓度比。

10. 标准加入必须处于线性吸收区且不改变试样物种形态、pH和离子强度，否则标准斜率不代表内源待测组分。

11. 加入标定需显式处理稀释与体积差，本题已给等效浓度作为稀释校正后的输入。

12. 模型限制包括背景漂移、杂散光、矩阵化学效应、散射及标准纯度问题，单一双点标定并不能替代实验重复性统计。

#### 数值结果
- standard_addition_slope_per_mM: 0.15 A/mM
- blank_absorbance: 0.1 dimensionless
- sample_concentration_M: 0.0005 mol/L
- sample_concentration_uM: 500 umol/L
- corrected_initial_absorbance: 0.15 dimensionless
- first_background_corrected_absorbance: 0.15 dimensionless
- second_background_corrected_absorbance: 0.45000000000000007 dimensionless
- raw_signal_ratio: 2.2 ratio
- sample_over_1mM_standard: 0.5 ratio
- uncorrected_signal_to_slope_low_mM: 1.6666666666666667 mM
- uncorrected_signal_to_slope_high_mM: 3.666666666666667 mM
- measured_signal_delta: 0.3 dimensionless
- sample_amount_umol: 2 umol

<a id="batch-08"></a>

## 第十二辑 I158、O154

均为待专家审核稿，独立数值核对不证明原创性或批准发表。

### UC-ADV12-I158 CeO2氧空位与Ce3极化子缺陷热力学的氧压指数及化学膨胀反演

#### 中文题干
某假想非化学计量萤石型无机氧化物CeO₂₋δ的缺陷形成反应为O_Oˣ+2Ce_Ceˣ⇌V_O••+2Ce_Ce′+½O₂(g)，其唯一带电缺陷为双正氧空位与单负Ce³⁺电子极化子，电子局域在Ce格点，氧子晶格原有2个位置/化学式。假设稀缺陷经验常数K_eff=(δ/2)(2δ)²√(p_O2/p°)=2.000×10⁻⁶，p°=1 bar。给低氧压p₁=0.001000 bar、高氧压p₂=0.1000 bar；化学膨胀规律a=a₀(1+βδ)，a₀=5.410 Å、β=0.1000，萤石常规晶胞含4个化学式单位。电子极化子迁移率固定μ=0.05000 cm²/(V s)，e=1.602176634×10⁻¹⁹ C，N_A=6.02214076×10²³ mol⁻¹，Ce/O原子量140.116/15.999 g/mol。求两压力下δ、Ce³⁺及氧空位位点分数、晶格常数、低压下Ce格点和缺陷数密度及电导率、两压力理论密度、δ对氧压的对数斜率；严格核对电荷、氧原子与晶胞数目守恒并说明稀缺陷模型限制。

#### 逐步解析
1. 将理想化萤石型CeO₂₋δ写为每式量单位1个Ce和2−δ个O，缺失的氧空位数为δ，氧空位占全部氧子晶格位点的比例为δ/2。

2. 使用Kröger–Vink表示式O_Oˣ+2Ce_Ceˣ⇌V_O••+2Ce_Ce′+½O₂(g)，每生成一个双正有效电荷的氧空位，必须生成两个各带一负有效电荷的Ce³⁺小极化子。

3. 在没有其它缺陷或自由带电载流子的近似下，电中性要求Ce³⁺占Ce总数分数x_Ce3=2δ，且0<δ<0.5。

4. 题设稀缺陷近似下定义无量纲经验平衡常数K_eff=(δ/2)(2δ)²(p_O2/p°)^(1/2)=2δ³√(p_O2/p°)，并忽略未缺陷晶格位点的活度修正。

5. 在低氧压p₁=0.001 bar（p°=1 bar）时，δ₁=[K_eff/(2√p₁)]^(1/3)=0.0316227766017，氧空位位点分数δ₁/2=0.0158113883008。

6. 在高氧压p₂=0.1 bar时δ₂=0.0146779926762，因p₂>p₁故氧空位减少，δ₂/δ₁=0.464158883361。

7. 两压力相除给δ∝p_O2^(−1/6)，因此对数斜率dlnδ/dlnp_O2=−1/6，是无补偿、稀缺陷极限的可检验预测。

8. 题设化学膨胀a(δ)=a₀(1+βδ)，其中a₀=5.410 Å、β=0.1，所以两压力晶格常数分别5.42710792214与5.41794079404 Å。

9. 萤石常规立方晶胞含4个CeO₂式量，Ce格点数密度N_Ce=4/a³（a以cm计），空位密度δN_Ce，电子极化子密度2δN_Ce。

10. 低氧压时N_Ce=2.50238781994e+22 cm⁻³、N_V=7.91324510006e+20 cm⁻³、N_Ce3=1.58264902001e+21 cm⁻³，满足2N_V=N_Ce3。

11. 取小极化子有效迁移率μ=0.05 cm²/(V s)，σ=e μN_Ce3=12.6784163984 S/cm，须承认该迁移率为题设固定值。

12. 按Ce原子量140.116和O原子量15.999 g/mol，质量密度ρ=4[M_Ce+(2−δ)M_O]/(N_A a³)，低/高氧压分别7.13085187263、7.17843155952 g/cm³。

13. 归一检查：同式量的Ce数始终为1，氧从2降到2−δ，电荷由+4的Ce与−2的O组成净零；具体说(1−2δ)×4+(2δ)×3−2(2−δ)=0。

14. 本模型限定δ远小于1、无Ce空位/间隙、缺陷相互作用弱且K_eff不含其它活度项；实际CeO₂₋δ的位点熵、载流子迁移率和晶格常数会依温度与氧压改变。

#### 数值答案向量
- oxygen_deficiency_at_low_pO2 = 0.03162277660168379 formula
- oxygen_deficiency_at_high_pO2 = 0.014677992676220695 formula
- deficiency_ratio = 0.4641588833612779 ratio
- oxygen_vacancy_site_fraction = 0.015811388300841896 fraction
- Ce3_cation_fraction = 0.06324555320336758 fraction
- low_pressure_lattice_A = 5.42710792214151 Angstrom
- high_pressure_lattice_A = 5.417940794037835 Angstrom
- low_pressure_Ce_site_density_cm3 = 2.502387819936682e+22 cm^-3
- oxygen_vacancy_density_cm3 = 791324510006322300000 cm^-3
- Ce3_hopping_carrier_density_cm3 = 1.5826490200126445e+21 cm^-3
- electron_hopping_conductivity_S_cm = 12.678416398436287 S/cm
- low_pressure_density_g_cm3 = 7.130851872632466 g/cm3
- high_pressure_density_g_cm3 = 7.178431559515135 g/cm3
- log_delta_log_pressure_slope = -0.16666666666666663 dimensionless
- reconstructed_reduction_equilibrium_constant = 0.0000019999999999999995 dimensionless

待审状态：publishable=false，exclude_from_official_bank=true。

### UC-ADV12-O154 Curtin–Hammett快速构象平衡的双立体通道与Eyring选择性

#### 中文题干
某假想有机底物以两种互变构象A⇌B存在，构象B比A的标准自由能高3.000 kJ/mol，构象间互变远快于产物生成。A与B分别沿不同构型专一不可逆过渡态生成P_A、P_B，两条路径相对于各自构象的Eyring活化自由能ΔG‡_A=83.00 kJ/mol、ΔG‡_B=78.00 kJ/mol，产物不互变。T=320.0 K，h=6.62607015×10⁻³⁴ J s、kB=1.380649×10⁻²³ J/K、R=8.314462618 J/(mol K)。起始总底物0.01000 mol，恒温反应2.000 s，物料体积恒定。求构象平衡和两构象分数、各自Eyring速率、对总底物有效的两条消耗通道、总体一级速率及寿命、立体产物比；独立用Curtin–Hammett过渡态自由能差反算选择性；给出2 s后两产物及剩余底物摩尔数并检查分子守恒、快速构象平衡与反应选择性。

#### 逐步解析
1. 考虑有机底物存在两种快速互变构象A⇌B，构象内自由能G_B−G_A=+3.000 kJ/mol，因此B虽为较少构象，仍可能具有更快的产物生成途径。

2. 假设A、B互变远快于两产物形成，整个反应期间底物保持构象Boltzmann平衡，且不可逆生成的不同立体产物P_A、P_B不发生互变。

3. 定义K_conf=[B]/[A]=exp[−(G_B−G_A)/(RT)]；构象占有率p_A=1/(1+K_conf)、p_B=K_conf/(1+K_conf)，两者和为1。

4. 在T=320 K，K_conf=0.323824580329，p_A=0.755387091960、p_B=0.244612908040。

5. 两路径各自相对于其起始构象的活化自由能分别ΔG‡_A=83.00、ΔG‡_B=78.00 kJ/mol，Eyring速率k_i=(kBT/h)exp[−ΔG‡_i/(RT)]。

6. 利用kB=1.380649e-23 J/K、h=6.62607015e-34 J s，计算k_A=0.188747849653、k_B=1.23603943528 s⁻¹。

7. 构象快速平衡下对总体底物的消耗通道为a=p_Ak_A=0.142577689263、b=p_Bk_B=0.302351200716 s⁻¹，而非单用k_B/k_A作为产物比。

8. 总消耗常数k_eff=a+b=0.444928889979 s⁻¹，B/A产物通量比b/a=2.12060668313。

9. Curtin–Hammett关系将B路径的过渡态能量换算到构象A基准：ΔΔG‡_TS=ΔG_BA+ΔG‡_B−ΔG‡_A=−2.000 kJ/mol。

10. 因此理论产物比P_B/P_A=exp[−ΔΔG‡_TS/(RT)]=2.12060668313，与两构象分支计算一致。

11. t=2 s内底物总转化率X=1−exp(−k_eff t)=0.589285839616，平均等待时间1/k_eff=2.24755016481 s。

12. 初始0.01 mol，产物P_A=0.00188836947252 mol、P_B=0.00400448892364 mol、剩余底物=0.00410714160384 mol，总和回归初始投料。

13. Curtin–Hammett选择性反映过渡态相对自由能，而不等于单纯最稳定构象选择性；某构象少但其过渡态更低时可以成为主要产物。

14. 所有温度和自由能均以题设固定标准状态为前提，忽略溶剂粘度、构象互变速率有限、产物可逆和隧穿；若构象交换不够快，单一指数消耗模型需改为耦合常微分方程。

#### 数值答案向量
- B_to_A_conformer_equilibrium = 0.3238245803293799 ratio
- A_conformer_fraction = 0.7553870919598659 fraction
- B_conformer_fraction = 0.24461290804013425 fraction
- Eyring_rate_from_A_s = 0.18874784965314276 s^-1
- Eyring_rate_from_B_s = 1.236039435280408 s^-1
- effective_A_product_channel_s = 0.1425776892631655 s^-1
- effective_B_product_channel_s = 0.3023512007162259 s^-1
- total_consumption_s = 0.4449288899793914 s^-1
- B_over_A_product_ratio = 2.1206066831266663 ratio
- Curtin_Hammett_product_ratio = 2.120606683126666 ratio
- substrate_conversion_2s = 0.5892858396163025 fraction
- product_A_mol = 0.0018883694725215176 mol
- product_B_mol = 0.004004488923641508 mol
- remaining_substrate_mol = 0.004107141603836974 mol
- mean_substrate_lifetime_s = 2.2475501648057037 s
- TS_B_minus_TS_A_from_A_kJ_mol = -2 kJ/mol
- molecular_balance_mol = 0.01 mol

待审状态：publishable=false，exclude_from_official_bank=true。

<a id="batch-09"></a>

## 第十二辑 A158 与 P154 完整中文解答

专家待审，不允许进入正式发布。

### UC-ADV12-A158 IRMS Rayleigh碳同位素分馏的双点反演与重轻原子库存闭合

#### 题干
某假想有机溶剂挥发过程由稳定碳同位素比质谱(IRMS)监测，初始碳总库存为1.000 mol，初始重轻同位素比R₀=N(¹³C)/N(¹²C)=0.01120，报告δ¹³C使用同位素标准比R_std=0.01118。体系为完全混合储库，瞬时气相移除产物比R_inst=αR_res，常数动力学分馏因子α=0.9800，无外源碳交换、无未收集挥发物。轻同位素剩余比例f=N₁₂/N₁₂,0，测得两阶段f₁=0.4000和f₂=0.7000。推导Rayleigh分馏精确公式，求两个阶段剩余库同位素比和δ¹³C并由这两个比值反演α；在f₁阶段分别计算剩余¹²C与¹³C、累计产物的同位素摩尔数及平均比与δ、当时瞬时产物的比与δ。核验双同位素原子库存守恒、瞬时与累计差别和δ单位，讨论分馏常数失效条件。

#### 严密解答
1. 定义IRMS重轻同位素比R=N(¹³C)/N(¹²C)，初始总碳1.000 mol及R₀=0.01120唯一决定两同位素初始物质的量N₁₂,0=1/(1+R₀)、N₁₃,0=R₀/(1+R₀)。

2. 分馏因子α=R_inst/R_res=0.9800，使瞬时逸出产物相对贫¹³C；剩余库则逐渐富集¹³C。

3. 严格令f=N₁₂/N₁₂,0为剩余轻同位素比例，而非剩余总碳比例，避免有限R下的近似误差。

4. 两同位素的微分库存方程dN₁₃/dN₁₂=αN₁₃/N₁₂积分，得到N₁₃=N₁₃,0f^α及Rayleigh残余比R_res=R₀f^(α−1)。

5. 对f₁=0.4000求R_res=0.0114071413438；对f₂=0.7000求0.0112801808324，因α<1且f₁<f₂，前者更高。

6. 用两观测反演α=1+ln(R₁/R₂)/ln(f₁/f₂)=0.980000000000，这要求f₁和f₂不同、测量同一原始均匀库。

7. 同位素δ记号δ¹³C=1000(R/R_std−1)‰，本题参考比R_std=0.01118；不能用原子丰度直接代替R。

8. 初始和两个剩余阶段的δ依次为1.78890876565、20.3167570474、8.96071845879‰。

9. f₁处残余¹²C=0.395569620253 mol、¹³C=0.00451231856954 mol，由初始库存减去剩余量，分别得到累计去除¹²C=0.593354430380及¹³C=0.00656363079755 mol。

10. 累计产物R_cum=0.0110619057708、δ_cum=-10.5629900888‰，为全过程平均，不能与当前微分产物混淆。

11. f₁时瞬时产物比R_inst=αR_res=0.0111789985169、δ_inst=-0.0895780935837‰，其比值体现此刻的分馏而非累积总量。

12. 以¹²C和¹³C分别检查：残余原子摩尔数+累计产物原子摩尔数恰等于各自初始库存，这比只检查总碳更严格。

13. 本模型要求封闭进料、单一充分混合库、常数α和同位素定量测量；温度依赖、重新混合或反应机理变化会破坏Rayleigh指数规律。

#### 答案向量
- initial_12C_mol = 0.9889240506329113 mol
- initial_13C_mol = 0.011075949367088606 mol
- residual_R_f04 = 0.011407141343789525 ratio
- residual_R_f07 = 0.01128018083236926 ratio
- reconstructed_alpha = 0.9800000000000002 dimensionless
- initial_delta13C_permil = 1.7889087656528524 permil
- residual_delta_f04_permil = 20.316757047363467 permil
- residual_delta_f07_permil = 8.960718458788763 permil
- remaining_12C_f04_mol = 0.39556962025316456 mol
- remaining_13C_f04_mol = 0.004512318569536996 mol
- cumulative_product_12C_mol = 0.5933544303797468 mol
- cumulative_product_13C_mol = 0.00656363079755161 mol
- cumulative_product_isotope_ratio = 0.011061905770806981 ratio
- cumulative_product_delta13C_permil = -10.562990088821111 permil
- instantaneous_product_isotope_ratio = 0.011178998516913735 ratio
- instantaneous_product_delta13C_permil = -0.08957809358367541 permil
- total_12C_inventory_mol = 0.9889240506329113 mol
- total_13C_inventory_mol = 0.011075949367088606 mol

审查状态：awaiting_expert_review，pending_cross_series_model_review，publishable=false。

### UC-ADV12-P154 Soret热扩散封闭槽的零物质通量、指数浓度剖面及熵产生

#### 题干
某封闭一维溶剂槽长度L=1.000 mm，左、右端分别维持300.0 K及340.0 K，初始溶质均匀平均浓度c̄=10.00 mol/m³。溶质不带电，不发生反应、对流或蒸发，且给定Fick扩散系数D=1.000×10⁻⁹ m²/s及Soret热扩散系数S_T=+0.03000 K⁻¹，温度沿长度线性分布。稳态通量J=−D[dc/dx+c S_T dT/dx]=0。求完整指数浓度剖面、冷/热端与中点浓度、富集比、归一库存、在中点分别由浓度梯度和温度梯度驱动的通量及其抵消。热导率κ=0.6000 W/(m K)，R=8.314462618 J/(mol K)，计算Fourier热流、温度中点传热熵产生率κ(∇T)²/T²、两端理想渗透压及L²/D扩散时间尺度，核验量纲、熵产生正性与真实大温差体系局限。

#### 严密解答
1. 建立无对流一维封闭槽x∈[0,L]，端温T₀=300 K、T₁=340 K，溶剂与溶质保持均匀定容，温度梯度ΔT/L恒定。

2. 给定恒定Fick扩散系数D和Soret系数S_T，溶质通量J=−D(dc/dx+cS_TdT/dx)，封闭两端要求稳态J=0。

3. 约去正D，分离变量得到dlnc/dx=−S_TΔT/L，积分得c(x)=c(0)exp(−Ax/L)，其中A=S_TΔT。

4. 以S_T=0.03 K⁻¹、ΔT=40.00 K求A=1.20000000000，热端与冷端浓度比c(L)/c(0)=e^(−A)=0.301194211912。

5. 由初始均匀平均浓度c̄=10.00 mol/m³和无物料出入，稳态必须满足∫₀ᴸ c(x)dx=c̄L。

6. 对指数剖面积分求c(0)=c̄A/(1−e^(−A))=17.1721531283 mol/m³，确保归一后与初始库存完全相等。

7. 计算热端c(L)=5.17215312832 mol/m³，中点c(L/2)=9.42427745361 mol/m³；正Soret系数造成热端溶质贫化。

8. 中点梯度dc/dx=−Ac_mid/L=-11309.1329443 mol/m⁴。

9. 中点Fick通量J_F=−D dc/dx=0.0000113091329443 mol/(m²s)，符号指向热端。

10. 中点热扩散通量J_T=−DS_Tc_midΔT/L=-0.0000113091329443 mol/(m²s)，与J_F正好相消，J总量为零。

11. 给定导热率κ=0.6000 W/(m K)，Fourier热流q=−κΔT/L=-24000.0000000 W/m²，热由高温端流向低温端。

12. 中点传热熵产生率σ=κ(∇T)²/T_mid²=9375.00000000 W/(m³K)，为正；物种无净流不代表热过程可逆。

13. 以局部理想渗透压π=cRT求冷、热端分别42833.1675768与14621.2491056 Pa，温度必须取开尔文。

14. 该常系数稀溶液Soret模型忽略溶剂密度、热-物质流的Onsager反作用、温度依赖输运系数和盐的电扩散；若有对流不能继续采用纯指数稳态。

#### 答案向量
- dimensionless_Soret_exponent = 1.2 dimensionless
- hot_over_cold_ratio = 0.30119421191220214 ratio
- cold_concentration_mol_m3 = 17.17215312832 mol/m3
- hot_concentration_mol_m3 = 5.17215312832 mol/m3
- midpoint_concentration_mol_m3 = 9.424277453610456 mol/m3
- cold_hot_concentration_enrichment = 3.320116922736547 ratio
- midpoint_concentration_gradient_mol_m4 = -11309.132944332547 mol/m4
- midpoint_Fick_flux = 0.000011309132944332548 mol/(m2s)
- midpoint_Soret_flux = -0.000011309132944332548 mol/(m2s)
- midpoint_net_molar_flux = 0 mol/(m2s)
- conduction_heat_flux_W_m2 = -24000 W/m2
- midpoint_entropy_production_W_m3K = 9375 W/(m3K)
- given_inventory_mol_m2 = 0.01 mol/m2
- reconstructed_inventory_mol_m2 = 0.010000000000000002 mol/m2
- diffusive_time_s = 999.9999999999999 s
- cold_osmotic_pressure_Pa = 42833.16757679652 Pa
- hot_osmotic_pressure_Pa = 14621.249105596055 Pa

审查状态：awaiting_expert_review，pending_cross_series_model_review，publishable=false。

<a id="batch-10"></a>

## 第十二辑 I159 / A159 完整中文解析

所有稿件均为待专家审批候选，非正式发布。

### UC-ADV12-I159 MgO Born–Haber循环的二次电子亲和、晶格焓和假想水合路径审计

#### 中文题干
以假想标准状态的MgO(s) Born–Haber热化学循环作严格无机化学推导。已知Mg(s)+½O₂(g)→MgO(s)标准生成焓ΔH_f=−602 kJ/mol；Mg(s)→Mg(g)升华焓+148 kJ/mol，Mg(g)第一次、第二次电离焓分别+738及+1451 kJ/mol，½O₂(g)→O(g)解离焓+249 kJ/mol，氧原子第一次电子加合焓−141 kJ/mol、第二次电子加合焓+744 kJ/mol。定义晶格形成焓L为Mg²⁺(g)+O²⁻(g)→MgO(s)，求所有气相离子制备焓、L、正号晶格解离焓及Hess残差。另给假想且不发生水解的气态离子水合焓Mg²⁺ −1921、O²⁻ −1300 kJ/mol，求形式离子溶解焓，检查Mg/O/电子数与电荷守恒。必须解释O²⁻在真实水中会迅速质子化，故形式溶解路径不等同于真实MgO水化实验。

#### 解答过程
1. Born–Haber循环以Mg(s)+½O₂(g)→MgO(s)的标准生成焓ΔH_f=−602 kJ/mol为热力学终点；反应每生成一个MgO式量消耗一个Mg原子及半个氧气分子。

2. 按气相路径依次使Mg固体升华为Mg(g)、Mg(g)失去两电子形成Mg²⁺(g)、半摩尔氧气裂解为O(g)、氧气原子接收两电子形成O²⁻(g)。

3. 镁升华+148、第一电离+738、第二电离+1451 kJ/mol，合并镁离子气相制备能+2337 kJ/mol。

4. ½O₂解离为O(g)的吸热为+249 kJ/mol，题设把氧第一次电子亲和放热−141 kJ/mol、第二次电子加合吸热+744 kJ/mol。

5. 因此氧两次电子加合的净焓为603.000000000 kJ/mol，全部气相离子制备焓Σ=3189.00000000 kJ/mol。

6. 气相Mg²⁺+O²⁻形成固体MgO的晶格形成焓L必须带负号，Hess定律给ΔH_f=Σ+L。

7. 唯一反演L=ΔH_f−Σ=-3791.00000000 kJ/mol，对应固体解离为两气相离子的焓为3791.00000000 kJ/mol。

8. 若人为定义Mg²⁺(g)→Mg²⁺(aq)焓−1921 kJ/mol、O²⁻(g)→O²⁻(aq)焓−1300 kJ/mol，且禁止水解，则该假想单纯离子水合路径的总焓为−3221 kJ/mol。

9. 按晶格解离再水合的Hess循环，形式溶解焓ΔH_sol=−L+ΔH_hyd(Mg²⁺)+ΔH_hyd(O²⁻)=570.000000000 kJ/mol，是吸热值。

10. 严格检查气相离子电荷+2+(−2)=0，氧气半摩尔经单个氧原子接收两个电子；电子来自镁的两次电离，电子数守恒。

11. 回代−602−[Σ+L]=0.00000000000 kJ/mol，作为独立Hess残差；晶格形成放热的绝对值明显大于氧的第二电子加合吸热。

12. 上述O²⁻(aq)是为热化学循环而引入的假想标准状态，真实氧化物离子在水中迅速发生质子转移，MgO实际与水生成Mg(OH)₂；形式溶解焓绝不可当真实水溶液实验测定值。

13. 电子亲和能和晶格焓的定义、各物种温度及相态必须一致；若引入真实水解、非理想离子溶液和不同固相，需追加相应反应焓与活度项。

#### 答案向量
- Mg_atomization_plus_two_ionizations_kJ_mol = 2337 kJ/mol
- half_O2_dissociation_kJ_mol = 249 kJ/mol
- oxygen_two_electron_attachment_sum_kJ_mol = 603 kJ/mol
- gas_ions_pre_lattice_enthalpy_kJ_mol = 3189 kJ/mol
- lattice_formation_enthalpy_kJ_mol = -3791 kJ/mol
- lattice_dissociation_enthalpy_kJ_mol = 3791 kJ/mol
- sum_hydration_enthalpies_kJ_mol = -3221 kJ/mol
- hypothetical_ionic_dissolution_enthalpy_kJ_mol = 570 kJ/mol
- Born_Haber_Hess_residual_kJ_mol = 0 kJ/mol
- charge_balance_residual = 0 charge
- lattice_cohesion_to_preparation_ratio = 1.1887739103167136 ratio
- ionic_dissolution_MJ_mol = 0.57 MJ/mol
- dissolution_heat_over_RT = 0.2299354096113277 dimensionless
- idealized_reaction_equilibrium_proxy = 0.7945849233949333 dimensionless
- dimensionless_log10_heat_scale = 0.09985967958836355 dimensionless

### UC-ADV12-A159 拉曼Stokes/反Stokes四次频率修正的晶格温度及光子计数误差反演

#### 中文题干
用假想无机晶体的一阶拉曼Stokes与反Stokes信号反演局部温度。入射激光真空波数ν̃₀=20000.0 cm⁻¹，晶格拉曼模式波数ν̃_v=1000.0 cm⁻¹，两支谱线的探测响应已完成校准，并假定非共振拉曼张量相同、晶格热平衡。给定强度比I_AS/I_S=[(ν̃₀+ν̃_v)/(ν̃₀−ν̃_v)]⁴ exp[−(hc/kB)ν̃_v/T]，hc/kB=1.438776877 K·cm。实测强度比为0.0244663336559430，环境温度298.15 K。求Stokes及反Stokes波数和真空波长、光学频率四次修正因子、由比值唯一反演的温度及升温量、声子占有数。若Stokes光子计数的期望为1.000×10⁶，反Stokes计数按该比值预测且两个计数独立Poisson，求反Stokes计数期望、比值和温度的一阶标准不确定度；验证光子能量差、Boltzmann极限、噪声单位与共振/背景局限。

#### 解答过程
1. 一阶自发拉曼散射中，入射光波数ν̃₀=20000 cm⁻¹、振动模波数ν̃_v=1000 cm⁻¹，Stokes光子失去声子能量、反Stokes光子从已激发声子获得能量。

2. 由能量守恒ν̃_S=ν̃₀−ν̃_v=19000 cm⁻¹、ν̃_AS=ν̃₀+ν̃_v=21000 cm⁻¹，正反Stokes谱线并非相同波长。

3. 将波数变换为真空波长λ=10⁷/ν̃ nm，分别得λ_S=526.315789474、λ_AS=476.190476190 nm。

4. 同一振动模谐振近似下，Stokes强度∝ν̃_S⁴(n+1)，反Stokes强度∝ν̃_AS⁴n，且n/(n+1)=exp[−hcν̃_v/(kBT)]。

5. 假定仪器相对光谱响应已校准、两散射通道的拉曼张量相同，得I_AS/I_S=[(ν̃₀+ν̃_v)/(ν̃₀−ν̃_v)]⁴ exp[−(hc/kB)ν̃_v/T]。

6. 四次光学频率修正因子F=1.49232280293，明显不等于1，不能直接从原始反/正Stokes强度比取−ln求温度。

7. 给定(hc/kB)=1.438776877 K·cm，T=350 K时声子Boltzmann因子=0.0163947998436，理论强度比=0.0244663336559。

8. 从两强度反演T=(hc/kB)ν̃_v/ln[F/(I_AS/I_S)]；F/R>1确保温度正且唯一。

9. 代入已校准强度比得到T_inv=350.000000000 K，较环境温度298.15 K上升51.8500000000 K。

10. 声子平均占据数n=1/(e^{hcν̃_v/(kBT)}−1)=0.0166680695069，Stokes统计因子n+1=1.01666806951。

11. 若Stokes计数预期为N_S=1000000 photons，反Stokes预期计数N_AS=R N_S=24466.3336559 photons，两个独立Poisson计数构成光子计数噪声。

12. 计数比标准相对误差√(1/N_AS+1/N_S)，对应比值绝对不确定度0.000158319092779，经解析导数传播得温度标准误差0.550943467031 K。

13. 温度反演使用的是散射模的有效振动态分布温度，假设局域热平衡、弱激光激发和光学薄样品；非共振拉曼近似失效、荧光背景、强共振激发或探测器波长响应不均会造成系统误差。

#### 答案向量
- Stokes_wavenumber_cm_inv = 19000 cm^-1
- antiStokes_wavenumber_cm_inv = 21000 cm^-1
- Stokes_wavelength_nm = 526.3157894736842 nm
- antiStokes_wavelength_nm = 476.1904761904762 nm
- optical_frequency_fourth_power_factor = 1.4923228029250855 ratio
- phonon_Boltzmann_factor = 0.01639479984356385 ratio
- antiStokes_over_Stokes_intensity = 0.024466333655942956 ratio
- reconstructed_lattice_temperature_K = 350 K
- phonon_occupation_number = 0.016668069506908217 phonons
- Stokes_occupation_plus_one = 1.0166680695069081 dimensionless
- expected_antiStokes_photon_count = 24466.333655942955 photons
- counting_ratio_standard_uncertainty = 0.00015831909277944615 ratio
- temperature_standard_uncertainty_K = 0.5509434670313842 K
- laser_overambient_temperature_K = 51.85000000000002 K
- inversion_logarithm = 4.110791077142857 dimensionless
- count_ratio_backcheck = 0.024466333655942956 ratio

<a id="batch-11"></a>

## 第十二辑 O155/P155 中文完整题解

以下题目属于待人工审核的非正式编辑草稿。

### UC-ADV12-O155 六半胱氨酸二硫键完全匹配拓扑的Boltzmann权重与氧化还原守恒

#### 题目
某假想有机多肽含6个可氧化半胱氨酸–SH侧链，依序标号1至6。在完全氧化条件下只生成分子内二硫键，全部6个–SH以不重叠的3对组成完全匹配，且不存在残留自由巯基或分子间交联。指定天然连接拓扑为(1,2)、(3,4)、(5,6)，它的标准自由能比其它所有完全匹配拓扑各低6.000 kJ/mol，其余错误拓扑彼此等能且简并度各1。温度298.15 K、R=8.314462618 J/(mol·K)，总蛋白浓度0.002000 mol/L，氧化剂为H₂O₂，二硫键反应按2RSH+H₂O₂→RSSR+2H₂O计量。求全部不同拓扑数、按恰好含0、1、3条天然键分类的简并数与Boltzmann概率、天然拓扑概率、正确天然键数均值及方差、天然拓扑与14个错误拓扑总权重的宏态自由能差、天然蛋白浓度、总二硫键及巯基/H₂O₂/H₂O和电子转移当量，检查组合计数、拓扑分布归一与氧化还原原子守恒。

#### 严密解析
1. 把单条假想含6个自由半胱氨酸巯基的蛋白质链标号为1至6，氧化后全部六个巯基形成3条分子内二硫键，不存在分子间交联与游离巯基。

2. 完全配对的无序拓扑数为(6−1)!!=5×3×1=15；每个拓扑代表三个互不共享顶点的二硫键，而不是三条独立任取边。

3. 指定天然拓扑为(1,2)(3,4)(5,6)，其自由能低于其它14个拓扑6.000 kJ/mol；其它14个视作等能，且无溶剂/构象其它简并度。

4. 以普通错误拓扑单态权重1为标准，天然态权重w=exp[6000/(RT)]，配分函数Z=w+14。

5. 在T=298.15 K，w=11.2500517962、Z=25.2500517962，天然拓扑概率P_nat=w/Z=0.445545691828，其余概率合计14/Z。

6. 对于任意固定的一条天然二硫键，剩余四顶点共有3种完全配对，其中只有一种会同时包括其余两条天然键。

7. 因此恰好含一条天然键的非天然拓扑有3×(3−1)=6种；恰好含两条天然键的非天然拓扑不存在，因为第三条必然由余下两顶点配成。

8. 既无天然键的错误拓扑数为14−6=8，分类简并数为1（全对）、6（仅一对）、8（零对），总计15。

9. 一对天然键拓扑总概率6/Z=0.237623274931，零对拓扑概率8/Z=0.316831033241，三种分类概率求和为1。

10. 天然拓扑与其余错误拓扑整个宏态的统计权重比w/14=0.803575128303，对应宏态自由能差−RTln(w/14)=0.542109718653 kJ/mol。

11. 每分子天然键数的平均值〈N〉=(3w+1×6)/Z=1.57426035041，二阶矩〈N²〉=(9w+6)/Z=4.24753450138，方差=1.76923885049≥0。

12. 蛋白质初始浓度0.002 mol/L，因此天然拓扑浓度=0.000891091383656 mol/L；无论拓扑，每分子都形成三条S−S键，总键浓度=0.00600000000000 mol/L。

13. 每条键净氧化反应2RSH+H₂O₂→RSSR+2H₂O，H₂O₂浓度需求等于二硫键数，水生成数为其两倍，转移电子数为其两倍。

14. 总消耗巯基=0.0120000000000 mol/L、H₂O₂=0.00600000000000、产水=0.0120000000000、电子转移当量=0.0120000000000 mol/L，逐元素与氧化还原电荷平衡。

15. 该完全配对模型不代表真实蛋白折叠自由能仅由一个拓扑常数决定；巯基pKa、二硫键交换、分子间交联、溶剂与蛋白构象耦合会改变能量景观。

#### 完整主答案向量
- number_of_complete_disulfide_matchings = 15 matchings
- native_Boltzmann_weight = 11.25005179624861 dimensionless
- topology_partition_sum = 25.25005179624861 dimensionless
- native_topology_probability = 0.44554569182784903 fraction
- one_native_bond_topology_probability = 0.23762327493092184 fraction
- zero_native_bond_topology_probability = 0.31683103324122913 fraction
- native_to_all_other_weight_ratio = 0.8035751283034721 ratio
- native_vs_others_macrostate_G_kJ_mol = 0.5421097186528787 kJ/mol
- mean_native_bonds_per_molecule = 1.5742603504144688 bonds
- second_moment_native_bond_count = 4.247534501381564 bonds2
- variance_native_bond_count = 1.7692388504944776 bonds2
- native_topology_mol_L = 0.0008910913836556981 mol/L
- total_disulfide_bonds_mol_L = 0.006 mol/L
- required_H2O2_mol_L = 0.006 mol/L
- produced_water_mol_L = 0.012 mol/L
- consumed_thiol_groups_mol_L = 0.012 mol/L
- transferred_electrons_mol_L = 0.012 mol/L
- uniform_topology_native_baseline = 0.06666666666666667 fraction

待审：`quality_status=awaiting_expert_review`, `novelty_review_status=pending_cross_series_model_review`, `publishable=false`。

### UC-ADV12-P155 Gouy–Chapman电双层Grahame电荷、微分电容与渗透压力校验

#### 题目
某假想电极浸入298.15 K水溶液中的理想对称1:1电解质，体相阳离子和阴离子各10.00 mol/m³。溶剂介电常数ε_r=78.50、真空ε₀=8.8541878128×10⁻¹² F/m，kB=1.380649×10⁻²³ J/K、e=1.602176634×10⁻¹⁹ C、N_A=6.02214076×10²³ mol⁻¹、R=8.314462618 J/(mol K)。均匀平板电极相对体相电势ψ₀=+0.05000 V，仅存在Gouy–Chapman扩散层，离子视作点电荷且活度理想。采用λ_D=√[εkBT/(2e²N_Ac∞)]、表面离子浓度c±(0)=c∞exp(∓eψ₀/kBT)、Grahame表面电荷σ=√(8εRTc∞)sinh[eψ₀/(2kBT)]。求热电压、德拜长度与波数、σ及微分电容、表面阳/阴离子浓度、渗透压增量与Maxwell应力、可逆充电功∫σdψ；检查电荷符号、热力学正性、相等压力恒等式、零电势极限和理想模型适用范围。

#### 严密解析
1. 把电极前方1:1对称理想电解质近似为无限平板、恒介电常数的Gouy–Chapman扩散双电层，忽略特异吸附、Stern层及有限离子尺寸。

2. 体相单一阳离子与单一阴离子浓度各为c∞=10.00 mol/m³（0.01000 mol/L），溶剂ε=ε₀ε_r，ε_r=78.50，温度298.15 K。

3. Poisson–Boltzmann分布为c₊(ψ)=c∞exp[−eψ/(kBT)]、c₋(ψ)=c∞exp[+eψ/(kBT)]，正表面势排斥阳离子、吸引阴离子。

4. 双电层热电压V_T=kBT/e，德拜长度λ_D=√[εkBT/(2e²N_Ac∞)]，其中浓度以mol/m³表示。

5. 计算V_T=0.0256925791211 V，λ_D=3.04205736023 nm，屏蔽波数κ=1/λ_D=328724899.495 m⁻¹。

6. 在电极表面势ψ₀=0.05 V时，定义x=eψ₀/(2kBT)=0.973043612406，不是用摄氏温度求指数。

7. 一维Poisson–Boltzmann方程的第一积分给Grahame关系σ=√(8εRTc∞)sinh(x)，σ为电极正表面电荷密度。

8. 前因子σ*=√(8εRTc∞)=0.0117405565895 C/m²，表面电荷σ=0.0133141114568 C/m²，正号与ψ₀一致。

9. 求微分电容C_diff=dσ/dψ₀=σ*/(2V_T)cosh(x)=0.345454455675 F/m²；零电势电容0.228481471910 F/m²。

10. 表面阳离子浓度=1.42831848560、阴离子浓度=70.0123964004 mol/m³，阴离子富集因子c₋/c₊=49.0173564973。

11. 近表面理想渗透压相对体相增加ΔΠ=RT(c₊+c₋−2c∞)=127519.321772 Pa。

12. 由Grahame第一积分，Maxwell电场压力σ²/(2ε)=127519.321772 Pa，与ΔΠ一致（所给R≈N_AkB）。

13. 由可逆充电功密度W/A=∫₀^{ψ₀}σ(ψ)dψ=2V_Tσ*[cosh(x)−1]=0.000308859500448 J/m²，非负。

14. 当ψ₀→0时σ≈(ε/λ_D)ψ₀、C_diff→ε/λ_D；较高电势及较高盐浓度下有限离子大小、Stern层、介电饱和和相关效应会使理想PB失效。

#### 完整主答案向量
- thermal_voltage_V = 0.02569257912108585 V
- half_surface_potential_dimensionless = 0.9730436124056752 dimensionless
- Debye_length_nm = 3.0420573602277585 nm
- inverse_Debye_length_m_inv = 328724899.4953633 m^-1
- Grahame_charge_prefactor_C_m2 = 0.011740556589481206 C/m2
- surface_charge_C_m2 = 0.013314111456754521 C/m2
- differential_capacitance_F_m2 = 0.3454544556748442 F/m2
- zero_potential_capacitance_F_m2 = 0.2284814719096409 F/m2
- capacitance_nonlinearity_ratio = 1.5119582904799533 ratio
- cation_surface_mol_m3 = 1.4283184856013562 mol/m3
- anion_surface_mol_m3 = 70.01239640044119 mol/m3
- anion_cation_enrichment = 49.0173564973251 ratio
- osmotic_excess_pressure_Pa = 127519.32177217714 Pa
- Maxwell_stress_Pa = 127519.32177217712 Pa
- charging_work_J_m2 = 0.00030885950044796245 J/m2
- surface_anion_charge_density_C_m3 = 6617357.535984293 C/m3
- dimensionless_surface_potential = 1.9460872248113503 dimensionless

待审：`quality_status=awaiting_expert_review`, `novelty_review_status=pending_cross_series_model_review`, `publishable=false`。

<a id="batch-12"></a>

## 第十二辑 I160 / A160 大学化学高阶综合题

两题仅为待审编辑草稿，独立计算不是人类专家审核或原创性证明。

### UC-ADV12-I160 反铁磁自旋1/2二聚体的三重态统计、Schottky热容与有限场磁化率

#### 完整中文题干
某假想无机双核磁性配合物每分子含两个S=1/2自旋，满足各向同性反铁磁Heisenberg交换H=J S₁·S₂（J>0），相对于S=0单态，S=1三重态能隙按每摩尔二聚体计Δ_m=650.0 J/mol。忽略晶间相互作用，温度T=30.00 K，各中心磁谱因子g=2.100，外磁场B=5.000 T，R=8.314462618 J/(mol K)、k_B=1.380649×10⁻²³ J/K、μ_B=9.2740100783×10⁻²⁴ J/T、N_A=6.02214076×10²³ mol⁻¹。以单态为零能基准，求零场配分函数、单态/三重态占据分数、等概率温度、相对内能、Schottky热容和自旋熵；引入三重态m=−1,0,+1的Zeeman分裂，求B=5 T的配分函数、磁化强度、有限场M/B以及严格B→0摩尔磁化率，检查自旋简并、概率归一及低高温与低场极限。

#### 逐步详细解析
1. 设两自旋1/2无机磁性中心只受各向同性Heisenberg交换H=J S₁·S₂，J>0，单态自旋总量S=0的本征能为−3J/4，三重态S=1的本征能为J/4。

2. 将单态能量选作零点，则三重态高出能隙Δ=J，包含m_S=−1、0、+1共3个微观态，不能把三重态当作单简并态。

3. 题设交换间隙按每摩尔自旋二聚体计Δ_m=650.0 J/mol，与玻尔兹曼因子相容的无量纲变量x=Δ_m/(RT)。

4. 在T=30 K时x=2.60590102597，单个三重微态的相对权重u=e^(−x)=0.0738365785414，整个零场配分函数Z=1+3u=1.22150973562。

5. 单态概率p_S=1/Z=0.818659050219，三重态宏观概率p_T=3u/Z=0.181340949781，两者严格相加为1。

6. p_T=p_S要求3e^(−Δ_m/RT*)=1，故T*=Δ_m/[Rln3]=71.1598000365 K，正根唯一。

7. 零场相对于单态的平均能量U_m=Δ_m p_T=117.871617357 J/mol，温度无关Δ_m使Schottky热容C_m=R x² p_T(1−p_T)=8.38202539166 J/(mol K)。

8. 由S_m=R[lnZ+x p_T]计算自旋统计熵S_m=5.59267463198 J/(mol K)；低温趋0，高温趋Rln4。

9. 磁场B沿z轴时三重态Zeeman能为Δ_m−m gμ_B B N_A，单态磁矩为0；以单分子变量y=gμ_B B/(k_BT)构造Z_B=1+u[1+2cosh(y)]。

10. g=2.1、μ_B=9.2740100783e-24 J/T、B=5 T给y=0.235099835469与Z_B=1.22560965817。

11. 对lnZ_B按磁场微分，摩尔磁化强度M_m=N_A gμ_B[2u sinh(y)/Z_B]=0.335299450426 A·m²/mol，符号为正。

12. 由B→0取极限，低场摩尔磁化率χ_m=(N_A(gμ_B)²/(k_BT))[2u/(1+3u)]=0.0666691178178 J/(mol·T²)；有限场M_m/B=0.0670598900852与低场有非线性差别。

13. 三重态受场分裂后的总概率为u[1+2cosh(y)]/Z_B，检查在0与1之间；自旋相关磁响应不等于二个独立Curie自由自旋的简单相加。

14. 模型假设互不作用的同质二聚体、各向同性交换、g张量各向同性和忽略晶场与磁各向异性；真实无机双核磁体的晶间交换或激发多重态可能改变磁化率和热容。

#### 独立主要答案向量
- triplet_gap_over_RT: 2.605901025973759 dimensionless
- triplet_single_microstate_weight: 0.07383657854144061 dimensionless
- zero_field_partition_function: 1.2215097356243219 dimensionless
- singlet_population: 0.8186590502194346 fraction
- triplet_population: 0.1813409497805654 fraction
- equal_macro_population_temperature_K: 71.15980003645308 K
- relative_spin_energy_J_mol: 117.8716173573675 J/mol
- spin_heat_capacity_J_molK: 8.382025391656223 J/(mol K)
- spin_entropy_J_molK: 5.592674631982236 J/(mol K)
- zero_field_molar_susceptibility_J_per_mol_T2: 0.06666911781776629 J/(mol T2)
- field_Zeeman_argument: 0.2350998354690439 dimensionless
- field_partition_function: 1.2256096581657419 dimensionless
- field_molar_magnetization_A_m2_mol: 0.3352994504259987 A m2/mol
- finite_field_M_over_B: 0.06705989008519973 J/(mol T2)
- field_triplet_probability: 0.18407953679427685 fraction
- population_normalization: 1 fraction
- characteristic_gap_temperature_K: 78.17703077921277 K

适用条件：模型假设互不作用的同质二聚体、各向同性交换、g张量各向同性和忽略晶场与磁各向异性；真实无机双核磁体的晶间交换或激发多重态可能改变磁化率和热容。

审核：publishable=false；exclude_from_official_bank=true；awaiting_expert_review；pending_cross_series_model_review。

### UC-ADV12-A160 EQCM铜沉积电荷与Sauerbrey质量双反演及滞留水计量审计

#### 完整中文题干
某假想酸性铜电沉积电极配合电化学石英晶体微天平(EQCM)研究Cu²⁺+2e→Cu(s)反应，唯一副反应为2H⁺+2e→H₂。恒流沉积60.00 s积分总电荷Q=0.1200 C，由独立气体收集法确认Cu沉积法拉第效率90.00%；F=96485.33212 C/mol。铜相对摩尔质量63.546 g/mol，水18.01528 g/mol，铜致密层密度8.960 g/cm³，电极面积1.000 cm²。EQCM基频与电极校准后的Sauerbrey质量灵敏度C_f=56.60 Hz/(μg cm⁻²)，测得相对沉积前频率下降2500.0 Hz。假设附着质量仅包括沉积Cu及被刚性耦合的界面滞留水，H₂逸出且水不参与净电荷反应。求两反应电子电荷分配、Cu生成摩尔数及质量、总EQCM质量、滞留水质量与mol数及每Cu水分子比、析氢摩尔数、干铜等效厚度、平均沉积速率和电流；检查Faraday电荷、铜质量、反应原子计量与水质量守恒及刚性EQCM局限。

#### 逐步详细解析
1. 在酸性Cu²⁺电沉积中令目标反应为Cu²⁺+2e⁻→Cu(s)，唯一副反应为2H⁺+2e⁻→H₂(g)，所以两路径每摩尔产物均需2摩尔电子。

2. 题设总积分电荷Q=0.1200 C、Cu沉积法拉第效率η_F=0.9000，因此分配到Cu与析氢的电荷分别Q_Cu=η_FQ和Q_H=(1−η_F)Q。

3. 得到Q_Cu=0.108000000000 C、Q_H=0.0120000000000 C，二者和回归总Q。

4. 按Faraday常数F=96485.33212 C/mol，沉积Cu摩尔数n_Cu=Q_Cu/(2F)=5.59670561457e-7 mol。

5. Cu原子量63.546 g/mol，因此金属铜质量m_Cu=35.5648254984 μg。

6. 电化学石英晶体微天平EQCM的题设刚性薄膜Sauerbrey标定为Δf=−C_f Δm/A，其中C_f=56.6 Hz/(μg cm⁻²)，电极面积A=1.000 cm²。

7. 测得频移Δf=-2500 Hz，反演总耦合质量Δm=−Δf A/C_f=44.1696113074 μg，包含金属及残留的界面水，而不只Cu。

8. 扣除已由电荷单独确定的金属质量，剩余随晶体振动的滞留水质量m_w=8.60478580905 μg；其为正说明总EQCM质量大于Faraday沉积质量。

9. 按水摩尔质量18.01528 g/mol，水摩尔数n_w=4.77638194302e-7 mol，表观每个Cu对应水分子比n_w/n_Cu=0.853427403897。

10. 副反应析氢摩尔数n_H2=Q_H/(2F)=6.21856179397e-8 mol；该析出气体不计入EQCM刚性附着质量。

11. 若铜层干燥后密度取8.960 g/cm³，真实金属Cu的等效致密层厚d=m_Cu/(ρA)=39.6928856009 nm，绝不能将含水EQCM总质量直接代入Cu密度。

12. 沉积60.00 s平均铜生成速率n_Cu/t=9.32784269096e-9 mol/s，总平均电流Q/t=0.00200000000000 A。

13. 独立核对电子守恒：2F(n_Cu+n_H2)=Q，Cu²⁺与H⁺还原保持电荷守恒；水的滞留并非由析氢反应额外生成。

14. 模型假设仅有Cu沉积与H₂副反应、法拉第效率独立可靠、频移全部属于刚性无耗散质量加载且无溶液黏弹负载；实际EQCM必须检查耗散、溶剂层及表面粗糙度。

#### 独立主要答案向量
- copper_deposition_charge_C: 0.108 C
- hydrogen_side_reaction_charge_C: 0.011999999999999997 C
- deposited_Cu_mol: 5.596705614573574e-7 mol
- deposited_Cu_mass_ug: 35.56482549836923 ug
- EQCM_total_mass_ug: 44.169611307420496 ug
- entrained_water_mass_ug: 8.604785809051265 ug
- entrained_water_mol: 4.776381943023513e-7 mol
- evolved_H2_mol: 6.218561793970636e-8 mol
- entrained_water_per_Cu_ratio: 0.8534274038973974 ratio
- dry_copper_thickness_nm: 39.6928856008585 nm
- copper_current_efficiency_percent: 90 percent
- Cu_deposition_rate_mol_s: 9.327842690955957e-9 mol/s
- mean_total_current_A: 0.002 A
- deposited_Cu_atoms: 337041490032443700 atoms
- charge_balance_C: 0.12 C
- copper_faradaic_fraction_check: 0.9000000000000001 fraction

适用条件：模型假设仅有Cu沉积与H₂副反应、法拉第效率独立可靠、频移全部属于刚性无耗散质量加载且无溶液黏弹负载；实际EQCM必须检查耗散、溶剂层及表面粗糙度。

审核：publishable=false；exclude_from_official_bank=true；awaiting_expert_review；pending_cross_series_model_review。

<a id="batch-13"></a>

## 第十二辑 O156 / P156 严格中文解答

以下均为编辑待审稿（publishable=false），模型独立性需要人类跨辑专家复核。

### UC-ADV12-O156 A3–B2硫醇–烯逐步聚合的Flory–Stockmayer凝胶阈值与分支消灭概率

#### 完整题干
一种假想有机聚合物以三官能巯基单体A₃（每分子3个–SH，摩尔质量300.0 g/mol）与双官能烯烃单体B₂（每分子2个C=C，摩尔质量200.0 g/mol）发生理想硫醇–烯逐步点击加成，不产生小分子副产物。投入A₃=2.000 mmol、B₂=3.000 mmol，恰好有相同数目的官能团，各类官能团转化率p=0.8000。采用无环、无凝聚体损失、随机等反应性并以无限大均匀网络处理的Flory–Stockmayer树状分支理论。设从一条A型官能团无法延伸到无限凝胶的概率u_A=1−p+p u_B，从B型官能团失败的概率u_B=1−p+p u_A²。求凝胶临界转化率、分支方程最小物理解、A₃与B₂分子各自进入凝胶的概率、凝胶及溶胶质量和凝胶质量分数、凝胶中两单体的物质的量、已形成C–S连接键数及剩余两种官能团浓度或总摩尔数。检查各分支正根唯一性、节点质量及官能团守恒并讨论环化对凝胶点的影响。

#### 逐步求解
1. 将三巯基单体A₃和二烯烃单体B₂以硫醇–烯点击加成聚合，不发生水或其它小分子消除，每成一条C–S连接键消耗一个–SH与一个烯键。

2. 投入A₃=2.000 mmol、B₂=3.000 mmol，初始反应官能团数均为6.000 mmol；同一转化率p_A=p_B=p=0.8000满足官能团计量而不是分子数量相等。

3. 假定随机、各官能团等反应活性、无环化和无限大体系的树状Flory–Stockmayer模型，A₃、B₂在二分交替网络中有各自不同的分支消灭概率。

4. 沿一条随机A反应臂无法通达无限大凝胶的概率u_A=1−p+p u_B^(2−1)；沿一条B反应臂的概率u_B=1−p+p u_A^(3−1)。

5. 在无凝胶解u_A=u_B=1附近线性化，正反馈因子(f_A−1)(f_B−1)p²=2p²；超过1便发生凝胶，临界转化率p_c=1/√2。

6. 计算p_c=0.707106781187、p/p_c=1.13137084990，本题p>p_c，非平凡最小不动点为物理解。

7. 代入u_B=1−p+p u_A²到u_A=1−p+p u_B，得到u_A=1−p²+p²u_A²；除去平凡解u_A=1，另一根u_A=(1−p²)/p²。

8. 取物理较小根u_A=0.562500000000，由第二方程反算u_B=0.453125000000，两者都在[0,1]。

9. A₃分子所有3条独立分支都失败才不在凝胶，因此凝胶A分数G_A=1−u_A³；B₂对应G_B=1−u_B²。

10. 得到G_A=0.822021484375、G_B=0.794677734375；两者因功能度不同而不相等。

11. A₃摩尔质量300.0 g/mol，B₂摩尔质量200.0 g/mol，两种单体投入质量均为0.600000000000 g，总聚合物质量1.200 g。

12. 凝胶质量=0.970019531250 g、溶胶质量=0.229980468750 g、凝胶质量分数=0.808349609375，两相质量和严格回归投入。

13. 已形成的硫醇–烯连接键为3n_Ap=0.00480000000000 mol，残留–SH与未反应烯键各0.00120000000000、0.00120000000000 mol，连接键生成不脱去原子。

14. 有限聚合体系的含环、笼状结构、官能团不等活性、扩散受限和反应后网络收缩会改变真正凝胶阈值；本题结果属于理想随机网络的热力学极限。

#### 主要数值答案
- gel_point_conversion: 0.7071067811865475 fraction
- conversion_relative_to_gel_point: 1.1313708498984762 ratio
- A_branch_extinction_probability: 0.5624999999999997 fraction
- B_branch_extinction_probability: 0.45312499999999967 fraction
- A3_molecule_gel_fraction: 0.8220214843750003 fraction
- B2_molecule_gel_fraction: 0.7946777343750003 fraction
- A3_total_mass_g: 0.6 g
- B2_total_mass_g: 0.6 g
- gel_mass_g: 0.9700195312500004 g
- sol_mass_g: 0.22998046874999956 g
- gel_mass_fraction: 0.8083496093750003 fraction
- formed_thiol_ene_links_mol: 0.0048000000000000004 mol
- remaining_thiol_groups_mol: 0.0011999999999999997 mol
- remaining_alkene_groups_mol: 0.0011999999999999997 mol
- A3_gel_mol: 0.0016440429687500006 mol
- B2_gel_mol: 0.002384033203125001 mol
- A_branch_consistency_residual: 0 dimensionless
- B_branch_consistency_residual: 0 dimensionless

适用条件：有限聚合体系的含环、笼状结构、官能团不等活性、扩散受限和反应后网络收缩会改变真正凝胶阈值；本题结果属于理想随机网络的热力学极限。

待审标记：publishable=false；exclude_from_official_bank=true；awaiting_expert_review；pending_cross_series_model_review。

### UC-ADV12-P156 Collins–Kimball部分吸收反应球的扩散与表面阻力、二级动力学联立反演

#### 完整题干
某假想液相偶联反应A+B→AB在298 K水溶液中进行，两种中性反应粒子以扩散控制相遇，相对接触半径a=0.5000 nm，D_A=8.000×10⁻¹⁰和D_B=6.000×10⁻¹⁰ m²/s。碰撞接触后不保证立即反应，而采用Collins–Kimball局域辐射边界条件D_rel dc/dr|_{a}=κ c(a)，κ=0.2000 m/s，远场浓度c∞固定。N_A=6.02214076×10²³ mol⁻¹，水溶液体积不变；起始[A]=[B]=1.000×10⁻⁶ mol/L。请推导扩散场c(r)、Smoluchowski扩散控制上限k_diff=4πa(D_A+D_B)N_A×1000和有限反应边界k_eff=k_diff/[1+D_rel/(κa)]，给出表面Damköhler数、等效反应半径和反应概率。再以二级反应速率方程积分求半衰期、t=0.01000 s时[A]、[B]及[AB]、当时与初始生成速率，并检查粒子与反应物物料守恒、反应阻力与准稳态扩散时间极限。

#### 逐步求解
1. 把水中两种中性小分子A和B简化为球形布朗运动粒子，彼此首次中心距离达到a=0.5000 nm时视作接触，不考虑静电长程力、对流或多体效应。

2. 两物种自扩散系数分别D_A=8.000×10⁻¹⁰、D_B=6.000×10⁻¹⁰ m²/s，相对坐标扩散系数D_rel=D_A+D_B。

3. 在孤立反应球外，准稳态球对称扩散方程∇²c=0给c(r)=c∞[1−a_eff/r]，远场保持体相c∞。

4. 采用Collins–Kimball辐射边界条件D_rel (dc/dr)|_{r=a}=κ c(a)，局部表面反应速度κ=0.2000 m/s。

5. 代入浓度剖面得到a_eff=a/[1+D_rel/(κa)]，于是扩散与有限表面反应的两种串联阻力满足k_eff=4πD_rel a_eff N_A×1000。

6. 相对扩散D_rel=1.40000000000e-9 m²/s，表面Damköhler数Da_s=κa/D_rel=0.0714285714286。

7. 若接触必定反应，Smoluchowski扩散上限k_diff=4πaD_rel N_A×1000=5297351687.74 L/(mol s)。

8. 有限表面反应后k_eff=k_diff Da_s/(1+Da_s)=353156779.183 L/(mol s)，有效反应概率因子=0.0666666666667。

9. 对应等效反应半径a_eff=0.0333333333333 nm，小于几何接触半径a，是部分反应边界的直观解释。

10. 反应计量A+B→AB且起始[A]₀=[B]₀=1.000 μmol/L，无其它损失，在全部时刻[A]=[B]=c；方程dc/dt=−k_eff c²。

11. 积分得到1/c−1/c₀=k_eff t，故c(t)=c₀/(1+k_eff c₀t)，半衰期t½=1/(k_eff c₀)。

12. 计算t½=0.00283160357933 s，t=10.00 ms时未反应c=2.20674178549e-7 mol/L，产物浓度p=c₀−c=7.79325821451e-7 mol/L。

13. 该时刻产物生成率k_eff c²=0.0000171977085471 mol/(L s)，最初生成率k_eff c₀²=0.000353156779183 mol/(L s)。

14. 接触扩散弛豫时间尺度a²/D_rel=1.78571428571e-10 s远短于整体半衰期，支撑准稳态扩散近似。

15. 检查A/B分别的分子数库存：c+[AB]=c₀；κ→∞恢复Smoluchowski极限，κ→0则k_eff→0。模型不含溶剂化定向、反应复合体扩散、离子静电势或聚集。

#### 主要数值答案
- relative_diffusion_m2_s: 1.4000000000000001e-9 m2/s
- surface_Damkohler_number: 0.07142857142857144 dimensionless
- Smoluchowski_diffusion_limited_M_inv_s: 5297351687.739903 L/(mol s)
- Collins_Kimball_effective_rate_M_inv_s: 353156779.1826603 L/(mol s)
- reaction_probability_per_encounter: 0.06666666666666668 fraction
- effective_reactive_radius_nm: 0.03333333333333334 nm
- equal_reactant_half_life_s: 0.0028316035793348837 s
- reactant_concentration_after_10ms_M: 2.2067417854890257e-7 mol/L
- product_concentration_after_10ms_M: 7.793258214510974e-7 mol/L
- instantaneous_product_rate_M_s: 0.00001719770854706696 mol/(L s)
- initial_reaction_rate_M_s: 0.00035315677918266027 mol/(L s)
- encounter_diffusion_relaxation_s: 1.7857142857142858e-10 s
- surface_to_diffusion_resistance_ratio: 13.999999999999996 ratio
- A_species_inventory_M: 0.000001 mol/L
- inverse_concentration_growth_M_inv: 3531567.791826603 L/mol
- inverse_concentration_time_slope: 3531567.791826603 L/mol
- integrated_pseudo_time: 3.531567791826603 dimensionless

适用条件：检查A/B分别的分子数库存：c+[AB]=c₀；κ→∞恢复Smoluchowski极限，κ→0则k_eff→0。模型不含溶剂化定向、反应复合体扩散、离子静电势或聚集。

待审标记：publishable=false；exclude_from_official_bank=true；awaiting_expert_review；pending_cross_series_model_review。

<a id="batch-14"></a>

## 第十二辑 I161 / A161 大学化学综合题

未通过人类专家审核的编辑候选，禁止正式发布。

### UC-ADV12-I161 FeO–CO/CO2氧化还原平衡与Ellingham氧逸度的双循环反演

#### 完整中文题干
某假想还原炉在1000.0 K保持恒温恒容，进行FeO(s)+CO(g)⇌Fe(s)+CO₂(g)反应。假设纯固体活度1、气体理想、无其它铁氧化态或副反应，反应标准ΔH°=−15.00 kJ/mol、ΔS°=−10.00 J/(mol K)，温度范围内常量；初始FeO(s)=0.01200 mol、CO=0.02000 mol、CO₂=0.005000 mol、Fe(s)=0，R=8.314462618 J/(mol K)。求ΔG°、K、平衡反应程度、残余FeO与CO、生成Fe与CO₂、FeO转化率，并证明两种固体确实共存且平衡根唯一。另给同温度FeO(s)→Fe(s)+½O₂(g)标准ΔG°=+150.0 kJ/mol，构造Fe/FeO缓冲的等效氧逸度并由CO+½O₂→CO₂自由能独立反算CO₂/CO比；核对Fe/C/O元素库存、电子转移数和恒温移热量，说明何时纯固体活度模型失效。

#### 严格逐步解析
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

#### 数值答案与单位
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

### UC-ADV12-A161 Van Deemter塔板高度三点反演与最优流速、分离度联合优化

#### 完整中文题干
某液相色谱分析柱长L=20.00 cm，在恒定溶剂与温度下假设Van Deemter塔板高度H(u)=A+B/u+Cu，u为流动相线速度(cm/s)，未知A、B、C均为正。三组已校正测量为u₁=0.01000 cm/s时H₁=0.005500 cm、u₂=0.02000 cm/s时H₂=0.004000 cm、u₃=0.05000 cm/s时H₃=0.004300 cm。求A、B、C（含完整单位），推导唯一最佳线速度及最低塔板高度，并求最大理论塔板数。若第二分析物保留因子k₂=3.000、选择性α_sel=k₂/k₁=1.100，采用近似分离度R_s≈√N/4×[(α_sel−1)/α_sel]×[k₂/(1+k₂)]，计算最优线速度下死时间、第二峰保留时间、Gaussian时间标准差及预计分离度。核对三点数据回算、最优处纵向扩散与传质项相等及两倍最优流速下H的上升，并解释理想色谱近似。

#### 严格逐步解析
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

#### 数值答案与单位
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

<a id="batch-15"></a>

## 第十二辑 O157 / P157 完整中文题干与解析

数学计算需通过独立QA；专家审核、跨辑原创性审核尚未完成，禁止正式发布。

### UC-ADV12-O157 C4H4四π Hückel共振交替与Peierls畸变、前线轨道简并

#### 中文题干
某假想中性四元有机π环C₄H₄采用仅含最近邻耦合的Hückel近似：四个碳p_z轨道库仑积分α统一取0 eV，四个相邻碳–碳π共振积分按强弱强弱交替，其绝对值t_s=2.800 eV和t_w=1.600 eV；每个碳贡献一名π电子，共4个。忽略轨道重叠、σ键弹性与显式电子关联。构造4×4环Hamiltonian并求四个单电子本征能，遵从Pauli占据求矩形态π电子总能。对比各键共振积分绝对值取t_avg=(t_s+t_w)/2=2.200 eV的正方形等边环，求正方形能级、总电子能量、畸变电子稳定化（eV/分子与kJ/mol）、两形状HOMO-LUMO能隙、畸变能隙对应的自由光子波长；给定hc=1239.841984 eV·nm，F=96485.33212 C/mol。检查轨道迹、总π电子数、正方形零能级简并，解释电子稳定化不等于真实结构预测。

#### 逐步解答
1. 把假想四元C₄H₄碳环的四个p_z轨道作为Hückel正交基，统一库仑积分α=0 eV，沿环交替强、弱键共振积分分别为−2.800与−1.600 eV。

2. 构造4×4实对称环Hamiltonian，最近邻的4个非零非对角元按强弱交替分布；忽略电子–电子关联、σ骨架弹性能及重叠积分。

3. 利用二原胞Bloch基分解为k=0、π两个2×2问题，解得本征能E=±(t_s+t_w)、±(t_s−t_w)，两种t均取正的共振积分绝对值。

4. 矩形四级本征能依次为-4.4、-1.1999999999999997、1.1999999999999997、4.4 eV，能级迹为0，体现二分环Hamiltonian的能谱对称。

5. 四个碳原子各贡献一个p电子，4π电子按Pauli原理填满最低两个空间轨道各2个电子，剩余两级空置。

6. 矩形总π电子能量E_rect=2(E₁+E₂)=-11.2000000000 eV/分子；不可把全部四级能量直接求和。

7. 为了比较交替共振的电子贡献，正方形四条键统一用平均跃迁t_avg=(t_s+t_w)/2=2.200 eV，不单独加入σ键应变能。

8. 正方形能级为-4.4、0、0、4.4 eV，零能附近双重简并；基态4电子在最低级占2电子、零能简并级合占2电子，总能E_square=-8.80000000000 eV。

9. 电子稳定化E_square−E_rect=2.40000000000 eV/分子，按1 eV/分子对应F/1000 kJ/mol得到231.564797088 kJ/mol。

10. 矩形HOMO–LUMO间隔为2(t_s−t_w)=2.40000000000 eV，正方形零能简并使Hückel前线间隙为0。

11. 对应能量差的真空自由光子波长λ=1239.841984 eV nm/ΔE=516.600826667 nm，但跃迁是否光学允许不能仅凭能隙断言。

12. 该四π体系的电子能降低与Peierls畸变/反芳香性失稳相容；真实平衡几何由π电子、σ骨架弹性、电子关联与振动零点能共同决定。

13. 模型固定中性碳氢化学计量与四个π电子，不涉及溶液酸碱或氧化还原；Hückel单电子能之和只是定性比较工具，不等于完整分子的实验形成焓。

#### 独立答案向量
- sum_strong_weak_resonance_eV: 4.4 eV
- difference_strong_weak_resonance_eV: 1.1999999999999997 eV
- rectangular_occupied_low_eV: -4.4 eV
- rectangular_occupied_high_eV: -1.1999999999999997 eV
- rectangular_LUMO_eV: 1.1999999999999997 eV
- rectangular_highest_level_eV: 4.4 eV
- square_lowest_level_eV: -4.4 eV
- square_second_level_eV: 0 eV
- square_third_level_eV: 0 eV
- square_highest_level_eV: 4.4 eV
- rectangular_pi_electron_energy_eV: -11.2 eV
- square_pi_electron_energy_eV: -8.8 eV
- Peierls_electronic_energy_stabilization_eV: 2.3999999999999986 eV
- rectangular_frontier_energy_gap_eV: 2.3999999999999995 eV
- square_frontier_energy_gap_eV: 0 eV
- equivalent_gap_wavelength_nm: 516.6008266666668 nm
- molar_electronic_stabilization_kJ_mol: 231.56479708799986 kJ/mol
- orbital_trace_eV: 0 eV
- number_of_pi_electrons: 4 electrons

审核：publishable=false；exclude_from_official_bank=true；awaiting_expert_review；pending_cross_series_model_review。

### UC-ADV12-P157 荧光Stern–Volmer静态/动态猝灭的寿命强度双通道反演

#### 中文题干
某假想荧光有机探针F在298.15 K被溶液中的猝灭剂Q以静态基态复合及动态激发态碰撞两方式猝灭，F很稀、自由Q浓度约等于标称浓度，静态复合物FQ完全不发荧光。无Q时寿命τ₀=4.000 ns，两个自由猝灭剂浓度[Q]₁=0.001000 mol/L、[Q]₂=0.004000 mol/L下，测得寿命比τ₀/τ分别为1.02000与1.08000；积分光强比I₀/I分别为1.17300与1.72800。假定无内滤效应、同一激发波长和量子产率标定，模型为τ₀/τ=1+K_D[Q]、I₀/I=(1+K_D[Q])(1+K_S[Q])。由两点寿命与强度反演动态K_D和静态K_S，求双分子碰撞速率常数k_q、Q₂下自由探针寿命、暗复合物分数和自由探针分数、动态相对量子产率及实际剩余强度、静态结合自由能（标准浓度1 mol/L、R=8.314462618 J/(mol K)），并检验两次数据反算一致、概率与单位，以及光谱内滤和非简单结合的模型限制。

#### 逐步解答
1. 设同一种有机荧光探针F被猝灭剂Q以碰撞动态猝灭与基态静态结合两条物理机制共同猝灭，静态复合物FQ不发光且不进入自由分子的荧光寿命拟合。

2. 自由探针在无Q时寿命τ₀=4.000 ns，动态碰撞伪一级速率为k_q[Q]，故τ₀/τ=1+K_D[Q]，其中K_D=k_qτ₀。

3. 静态F+Q⇌FQ的平衡常数K_S=[FQ]/([F][Q])，假设探针浓度足够低、Q自由浓度近似给定总浓度，静态未结合比例为1/(1+K_S[Q])。

4. 当激发、检测与吸收截面不变时积分光强由静态未结合比例与动态量子产率之积决定，I₀/I=(1+K_S[Q])(1+K_D[Q])。

5. 在Q₁=0.001 mol/L和Q₂=0.004 mol/L，给定两次荧光寿命比τ₀/τ=1.02000000000和1.08000000000。

6. 寿命比随[Q]线性变化，其斜率反算K_D=(L₂−L₁)/(Q₂−Q₁)=20.0000000000 L/mol，外推[Q]=0时截距应为1。

7. 对应积分光强比I₀/I在两浓度分别为1.17300000000、1.72800000000，均高于只存在动态猝灭时的寿命比。

8. 分别计算K_S=[(I₀/I)/(τ₀/τ)−1]/[Q]，独立得到150.000000000和150.000000000 L/mol，显示单一静态常数满足两次数据。

9. 动态双分子速率k_q=K_D/τ₀=5000000000.00 L/(mol s)，Q₂时新增动态伪一级失活速率k_qQ₂=20000000.0000 s⁻¹。

10. Q₂时自由分子荧光寿命τ=τ₀/(1+K_DQ₂)=3.70370370370 ns；静态复合物只降低可发光自由分子数而不缩短其寿命。

11. Q₂下静态暗复合物分数θ=K_SQ₂/(1+K_SQ₂)=0.375000000000，剩余自由探针分数=0.625000000000。

12. 动态的荧光量子产率相对因子1/(1+K_DQ₂)=0.925925925926，两者乘积得剩余强度I/I₀=0.578703703704。

13. 按1 mol/L标准浓度定义无量纲结合常数K_Sc°=150，标准结合Gibbs能ΔG°=−RTln(K_Sc°)=-12.4211495848 kJ/mol，不能直接对带单位常数取对数。

14. 两次寿命与强度反演的静态结合常数相同，且0<各发光/结合分数<1；若存在激发态复合、光谱重叠内滤效应、不同寿命荧光物种或Q明显耗尽，必须改用更完整模型。

#### 独立答案向量
- lifetime_ratio_q1: 1.02 ratio
- lifetime_ratio_q2: 1.08 ratio
- intensity_ratio_q1: 1.1729999999999998 ratio
- intensity_ratio_q2: 1.7280000000000002 ratio
- dynamic_Stern_Volmer_constant_L_mol: 20.000000000000018 L/mol
- static_binding_constant_from_q1_L_mol: 149.99999999999991 L/mol
- static_binding_constant_from_q2_L_mol: 150.00000000000003 L/mol
- bimolecular_dynamic_quenching_L_mol_s: 5000000000.000004 L/(mol s)
- quenched_free_molecule_lifetime_ns: 3.7037037037037037 ns
- dark_complex_fraction_at_q2: 0.37499999999999994 fraction
- free_fluorophore_fraction_at_q2: 0.625 fraction
- dynamic_luminescence_yield_at_q2: 0.9259259259259258 fraction
- observed_intensity_retained_at_q2: 0.5787037037037036 fraction
- static_binding_standard_G_kJ_mol: -12.421149584844816 kJ/mol
- static_intensity_factor_at_q2: 1.6 ratio
- pseudo_firstorder_dynamic_rate_at_q2_s: 20000000.000000015 s^-1
- q1_ratio_reverse_check: 1 ratio
- q2_free_times_dynamic_factor: 0.5787037037037037 fraction

审核：publishable=false；exclude_from_official_bank=true；awaiting_expert_review；pending_cross_series_model_review。

<a id="batch-16"></a>

## 第十二辑 I162 / A162 解析

全部为专家待审编辑草稿，禁止发布，机器验证不代替人工科学性和新颖性审定。

### UC-ADV12-I162 两性Al(OH)3溶解平衡的络合物种分布与唯一溶解度极小值

#### 中文题目
某假想Al(OH)₃无机固体的两性溶解平衡在298.15 K理想稀溶液中研究。体系由足量缓冲储液池维持pH且固相始终存在，简化模型只允许自由Al³⁺和[Al(OH)₄]⁻两种含Al溶解物种，忽略AlOH²⁺、Al(OH)₂⁺及多核络合。定义K_sp=[Al³⁺][OH⁻]³=1.000×10⁻³³和β₄=[Al(OH)₄⁻]/([Al³⁺][OH⁻]⁴)=1.000×10³³，两常数均以1 mol/L标准浓度定义为相应数值，水pK_w=14.000。求总溶解度S(pH)函数，严格证明其在正自由OH浓度范围内存在唯一极小值并求极小pH、最小总溶解度、该点自由Al³⁺与铝酸根比例；分别在pH 5、7、9求总溶解度及pH7两溶质物种浓度。回代检查导数与物种计量和电荷平衡，说明固相和缓冲液假设及未包含水解中间物种的限制。

#### 逐步解析
1. 选取假想两性氢氧化铝固相Al(OH)₃(s)，在298.15 K固定pH、理想稀溶液的缓冲储液池中达到固液平衡；铝始终为形式氧化态+III。

2. 溶解产物只考虑自由Al³⁺与铝酸根[Al(OH)₄]⁻，刻意忽略AlOH²⁺、Al(OH)₂⁺、多核羟基络合物与铝酸聚合。

3. 以无量纲活度近似浓度比计算，设K_sp=[Al³⁺][OH⁻]³=10⁻³³，整体络合常数β₄=[Al(OH)₄⁻]/([Al³⁺][OH⁻]⁴)=10³³（均按1 mol/L标准浓度）。

4. 在给定自由[OH⁻]=o时，由K_sp求[Al³⁺]=K_sp/o³，代入β₄求[Al(OH)₄⁻]=β₄K_sp o；总铝溶解度S(o)=K_sp/o³+β₄K_sp o。

5. 在纯水常用pK_w=14的温度近似下o=10^(pH−14) mol/L，酸性侧自由Al³⁺项以o^−3增大，碱性侧铝酸根项以o正一次增大。

6. 求导S'(o)=−3K_sp/o⁴+β₄K_sp；在o>0的唯一极小处满足o⁴=3/β₄，且S''=12K_sp/o⁵>0。

7. 由此得到o*=7.40082804492e-9 mol/L，pOH*=8.13071968632，pH*=5.86928031368。

8. 极小点自由Al³⁺浓度=2.46694268164e-9、铝酸根浓度=7.40082804492e-9 mol/L，总溶解度S_min=9.86777072656e-9 mol/L。

9. 一阶条件给[Al(OH)₄⁻]=3[Al³⁺]，故极小处75%溶解铝为铝酸根，25%为自由Al³⁺，不要误以为两物种必须相等。

10. 分别在pH=5、7、9求总溶解度0.00000100100000000、1.00001000000e-7、0.0000100000000000 mol/L，显示两侧上升趋势。

11. pH 7自由Al³⁺=1.00000000000e-12、铝酸根=1.00000000000e-7 mol/L，总和严格等于该pH总铝。

12. 化学计量检查：Al(OH)₃(s)+OH⁻⇌[Al(OH)₄]⁻，反应前后各有1个Al、4个O、4个H，净电荷都为−1，形式Al(III)不变。

13. 最小溶解度推导假设始终有未溶解固相以维持K_sp并有外部缓冲容量固定pH；若总Al库存不足、pH由溶解自身改变或中间羟基络合物显著，计算不再成立。

#### 主答案向量
- minimum_solubility_OH_M: 7.4008280449228524e-9 mol/L
- minimum_solubility_pOH: 8.130719686320084 pOH
- minimum_solubility_pH: 5.869280313679916 pH
- minimum_Al3_concentration_M: 2.466942681640951e-9 mol/L
- minimum_AlOH4_concentration_M: 7.4008280449228524e-9 mol/L
- minimum_total_Al_solubility_M: 9.867770726563804e-9 mol/L
- fraction_aluminate_at_minimum: 0.7499999999999999 fraction
- three_Al3_over_AlOH4_ratio_at_minimum: 1.0000000000000002 ratio
- total_solubility_pH5_M: 0.0000010009999999999998 mol/L
- total_solubility_pH7_M: 1.00001e-7 mol/L
- total_solubility_pH9_M: 0.000010000000000001 mol/L
- free_Al3_pH7_M: 1.0000000000000002e-12 mol/L
- aluminate_pH7_M: 1e-7 mol/L
- alkaline_branch_linear_coefficient: 1 dimensionless
- solubility_derivative_at_minimum: 0 slope
- triple_Al3_amount_M: 7.400828044922853e-9 mol/L
- aluminate_fraction_reverse_check: 0.7499999999999999 fraction

标记：publishable=false；exclude_from_official_bank=true；awaiting_expert_review；pending_cross_series_model_review。

### UC-ADV12-A162 吸附富集伏安信号的三倍时间双点反演、唯一根及动态检测限

#### 中文题目
某假想痕量配合物采用吸附富集型溶出伏安法测量，固定电极和缓冲溶液条件下，富集t秒后的峰高电流I(t)符合I(t)=I_blank+kC[1−exp(−t/τ)]，空白I_blank=0.1000 nA、灵敏度k=1.000×10⁸ nA/(mol/L)，未知样品浓度C与累积动力学时间常数τ均待求。两个时间点t₁=10.00 s、t₃=30.00 s分别测得I₁=${I1.toPrecision(15)} nA和I₃=${I3.toPrecision(15)} nA；独立空白标准差σ_blank=0.02000 nA。由两个扣空白信号的比值推导一元二次方程，求其唯一指数物理解、τ和C，预测t=20.00 s时信号和半平台时间、两测量时点富集分数、无限时间及10和30秒的3σ浓度检测限。要求给出反演根区间、排除负根、信号与单位一致性及简化吸附模型失效条件。

#### 逐步解析
1. 将假想痕量金属有机络合物在电极上的吸附富集型溶出峰电流换算为nA峰高信号I(t)，假设电极表面未饱和且定量响应随累积时间趋于指数平台。

2. 测量模型为I(t)=I_blank+kC[1−exp(−t/τ)]，空白I_blank=0.1000 nA、浓度灵敏度k=1.000×10⁸ nA/(mol/L)，τ为未知累积时间常数。

3. 分别在t₁=10.00 s和t₃=30.00 s同一样本独立测量，固定缓冲条件、峰电位和无电极记忆污染。

4. 给定I₁=1.67387736115 nA、I₃=3.20747935941 nA，减去空白得y₁=1.57387736115、y₃=3.10747935941 nA。

5. 以x=exp(−10/τ)记正数小于1的指数因子，t₃=3t₁时y₃/y₁=(1−x³)/(1−x)=1+x+x²，消除了未知浓度与灵敏度。

6. 观测比r=y₃/y₁=1.97441010088，对x解x²+x+(1−r)=0，唯一物理根x=[−1+√(4r−3)]/2=0.606530659713。

7. 在τ>0时要求1<r<3（累积时间比3），本次数值满足；另一个二次根为负，不是指数动力学的物理解。

8. 取自然对数反演τ=−10/lnx=20.0000000000 s；将此τ代回两次数据独立求浓度。

9. 由C=y₁/[k(1−x)]得到C=4.00000000000e-8 mol/L=40.0000000000 nmol/L，回代第二时点也得到同值。

10. 第三校验时点t₂=20.00 s预测I₂=2.62848223531 nA，所需时间达到半平台为t½=τln2=13.8629436112 s。

11. 10与30 s各自表面累积分数1−e^(−t/τ)分别为0.393469340287、0.776869839852，均在0到1之间。

12. 空白一倍标准差σ_blank=0.02000 nA，若按3σ/k作信号判据，无限累积时间的平台检测限LOD∞=3σ_blank/k；有限t时LOD(t)=LOD∞/[1−exp(−t/τ)]。

13. 求LOD∞=6.00000000000e-10 mol/L，10与30 s检测限分别1.52489644952e-9、7.72330150073e-10 mol/L；较长累积时间改善灵敏度，但不能去除空白系统偏差。

14. 假设峰电流与吸附物量线性，平台来自固定一级吸附动力学，不考虑浓度改变τ、竞争表面吸附、传质边界层及去吸附记忆；真实伏安分析需要独立标定k及空白噪声分布。

#### 主答案向量
- signal_at_10s_nA: 1.6738773611494664 nA
- signal_at_30s_nA: 3.207479359406281 nA
- blank_corrected_10s_nA: 1.5738773611494663 nA
- blank_corrected_30s_nA: 3.107479359406281 nA
- signal_ratio30_10: 1.9744101008840758 ratio
- ten_second_uptake_decay_factor: 0.6065306597126334 dimensionless
- inferred_accumulation_tau_s: 20 s
- inferred_analyte_concentration_M: 4e-8 mol/L
- inferred_concentration_nM: 40 nmol/L
- predicted_20s_signal_nA: 2.6284822353142308 nA
- uptake_half_time_s: 13.862943611198906 s
- infinite_time_LOD_M: 6e-10 mol/L
- 10s_LOD_M: 1.524896449522079e-9 mol/L
- 30s_LOD_M: 7.723301500733209e-10 mol/L
- surface_fraction_at_10s: 0.3934693402873666 fraction
- surface_fraction_at_30s: 0.7768698398515702 fraction
- plateau_signal_above_blank_nA: 4 nA
- mean_signal_slope_10_to_30_nA_s: 0.07668009991284072 nA/s

标记：publishable=false；exclude_from_official_bank=true；awaiting_expert_review；pending_cross_series_model_review。

<a id="batch-17"></a>

## 第十二辑 O158 / P158 高阶综合题

当前仅为未经过专家批准的编辑草稿，禁止正式发布。

### UC-ADV12-O158 自由基链转移与失活竞争的几何链长分布、Mayo反演及分散度

#### 中文题干
一假想有机单体M的自由基链聚合在恒温、恒单体及链转移剂浓度下进行。每条被观测的活性链起始时已有1个重复单元，其后以独立指数事件继续增长或停止：每次增长速率k_p[M]，链转移剂引起原链终止速率k_tr[T]，本征不可逆去活化速率k_d；各事件互相独立且相对浓度始终恒定。数据为k_p=300.0 L/(mol s)、[M]=0.5000 mol/L、k_tr=50.00 L/(mol s)、[T]=0.1000 mol/L、k_d=1.000 s⁻¹，重复单元摩尔质量100.0 g/mol且忽略端基质量。求增长与两种死亡危险率、链长的完整几何分布、数均及重均DP、分散度、数均和重均摩尔质量、DP=1/2及DP≤5概率、平均寿命和按死亡通道分配的终止分数；若将[T]减半求新DP_n并用两次DP反演k_tr，核验概率归一及Mayo型倒数关系，说明链转移再引发为何会改变真实链数计量。

#### 逐步解析
1. 假设有机单体M的自由基链已由引发步骤固定获得第一个重复单元，随后每个活链可继续增长、被链转移剂终止该链或固有失活；各事件按独立指数等待且所有浓度固定。

2. 增长事件速率a=k_p[M]，每次增长使重复单元数n加1；链转移导致原生长链终止（转移生成的自由基不纳入当前单链寿命），本征失活事件也终止该链。

3. 总失活率b=k_tr[T]+k_d，两种终止机制互斥且指数记忆无关；每轮下一事件先增长的概率p=a/(a+b)，先终止的概率q=b/(a+b)。

4. 题设k_p=300 L/(mol s)、[M]=0.5 mol/L、k_tr=50 L/(mol s)、[T]=0.1 mol/L、k_d=1 s⁻¹，得a=150 s⁻¹、总链死亡b=6 s⁻¹。

5. 事件概率p=0.961538461538、q=0.0384615384615，故额外增长事件数N服从P(N=j)=q p^j (j=0,1,2,...)，归一和q/(1−p)=1。

6. 实际链长DP=1+N。几何分布给〈N〉=p/q=a/b，Var(N)=p/q²，E[(1+N)²]=(1+m)(1+2m)。

7. 平均额外增长m=25.0000000000，数均链长DP_n=1+m=26.0000000000。

8. 按定义DP_w=〈DP²〉/〈DP〉=1+2m=51.0000000000，分散度Đ=DP_w/DP_n=1.96153846154，长链极限接近2而非1。

9. 单体重复单元相对摩尔质量100.0 g/mol，不计端基则数均Mn=2600.00000000、重均Mw=5100.00000000 g/mol。

10. 单链仅含1个重复单元的概率P(DP=1)=q=0.0384615384615；仅含2个为qp=0.0369822485207；DP≤5的累计概率1−p⁵=0.178072893241。

11. 平均单链活性寿命τ=1/b=0.166666666667 s；最终死亡为链转移的概率k_tr[T]/b=0.833333333333，其余为本征失活。

12. Mayo型倒数关系严格写为1/(DP_n−1)=k_d/(k_p[M])+(k_tr/(k_p[M]))[T]，因为本题引发已先加入一个重复单元，不能不经说明将DP_n−1误写为DP_n。

13. 将[T]降到0.05000 mol/L，预测DP_n=43.8571428571，由两浓度的1/(DP_n−1)差值反求k_tr=50.0000000000 L/(mol s)，与输入一致。

14. 此为等浓度、独立常数危险率及链转移只决定原链停止的统计模型；实际自由基再引发、链–链偶合/歧化、扩散胶效应和活链浓度变化会改变分子量分布与Mayo关系。

#### 主要答案向量
- propagation_event_rate_s: 150 s^-1
- chain_transfer_hazard_s: 5 s^-1
- total_chain_death_rate_s: 6 s^-1
- probability_propagate_before_death: 0.9615384615384616 fraction
- probability_die_before_propagation: 0.038461538461538436 fraction
- average_active_chain_lifetime_s: 0.16666666666666666 s
- mean_additional_propagations: 25 monomers
- number_average_degree_of_polymerization: 26 monomers
- weight_average_degree_of_polymerization: 51 monomers
- dispersity_Mw_over_Mn: 1.9615384615384615 ratio
- number_average_molar_mass_g_mol: 2600 g/mol
- weight_average_molar_mass_g_mol: 5100 g/mol
- probability_exactly_one_unit: 0.038461538461538436 fraction
- probability_exactly_two_units: 0.03698224852071003 fraction
- probability_DP_at_most_five: 0.17807289324064812 fraction
- fraction_death_by_transfer: 0.8333333333333334 fraction
- fraction_death_by_intrinsic_deactivation: 0.16666666666666666 fraction
- degree_DPn_at_half_transfer_agent: 43.857142857142854 monomers
- reconstructed_chain_transfer_rate_constant_L_mol_s: 50 L/(mol s)
- Mayo_inverse_additional_DP: 0.04 dimensionless

状态：publishable=false，exclude_from_official_bank=true，awaiting_expert_review，pending_cross_series_model_review。

### UC-ADV12-P158 Gibbs–Langmuir非离子表面吸附的表面张力、分子占据和毛细压力

#### 中文题干
某假想非离子有机表面活性剂在298.15 K水–空气界面形成均匀Langmuir单分子吸附层，最大表面过剩Γ_max=3.000×10⁻⁶ mol/m²，平衡吸附常数K=2000 L/mol，所有实验浓度低于CMC。假设体相活动度近似浓度、无其它溶质且表面平衡，覆盖率θ=Kc/(1+Kc)，Γ=Γ_maxθ，Gibbs吸附积分为γ=γ₀−RTΓ_max ln(1+Kc)，纯水γ₀=0.07200 N/m、R=8.314462618 J/(mol K)、N_A=6.02214076×10²³ mol⁻¹。计算c=0.1000 mmol/L和1.000 mmol/L的覆盖率、Γ与表面张力和降幅，求dγ/dlnc并与−RTΓ逐点核验，推导饱和分子平均表面积与高浓度表面分子数密度。若高浓度溶液形成半径10.00 μm的球形液滴，求Laplace压强；另在洁净玻璃半径0.2500 mm、接触角0°的毛细管中求毛细上升高度，与纯水比较（ρ=1000 kg/m³、g=9.810 m/s²）。检查面积、表面张力、吸附热力学以及CMC模型限制。

#### 逐步解析
1. 假设理想非离子表面活性剂在水–空气界面形成单分子Langmuir吸附层，浓度低于临界胶束浓度，体相活度近似c/c°，无离子屏蔽或多层吸附。

2. Langmuir表面覆盖率θ(c)=Kc/(1+Kc)，最大表面过剩Γ_max=3.000×10⁻⁶ mol/m²，故Γ(c)=Γ_maxθ(c)。

3. Gibbs单溶质表面吸附等温式在固定温度下dγ=−RTΓ dlnc，将Langmuir式积分，并以纯水γ₀=0.07200 N/m作c→0参考。

4. 得到γ(c)=γ₀−RTΓ_max ln(1+Kc)，其中K=2000 L/mol与c以mol/L相乘为无量纲。

5. c₁=0.0001000 mol/L、c₂=0.001000 mol/L时覆盖率θ分别0.166666666667与0.666666666667。

6. 表面过剩Γ₁=5.00000000000e-7、Γ₂=0.00000200000000000 mol/m²，随c增加但不超过Γ_max。

7. 表面张力γ₁=0.0706440980854、γ₂=0.0638297620327 N/m，均小于纯水γ₀并保持正值。

8. 两浓度各自的表面张力下降量γ₀−γ分别0.00135590191456、0.00817023796725 N/m。

9. 由γ的解析导数核验dγ/dlnc=−RTΓ(c)，在两浓度分别为-0.00123947851478、-0.00495791405911 N/m，严格满足Gibbs吸附式。

10. 在最大单层覆盖时，每个表面活性剂分子的平均面积a=1/(Γ_max N_A)=0.553513022391 nm²/分子。

11. c₂时吸附分子面密度N_s=Γ₂N_A=1.20442815200e+18 molecules/m²，验证它小于饱和面密度Γ_maxN_A。

12. 当c=c₂且半径为10.00 μm的球形液滴界面各处张力均匀时，Laplace附加压Δp=2γ/r=12765.9524065 Pa，低于同尺寸洁净水液滴的14400.0000000 Pa。

13. 若清洁玻璃毛细管半径0.2500 mm、接触角为0°、液体密度1000 kg/m³和g=9.810 m/s²，毛细升高h=2γ/(ρgr)=5.20528130746 cm，纯水为5.87155963303 cm。

14. 表面吸附等温式需要单一非离子表面活性剂的理想吸附且没有表面相变；若接近CMC、出现盐/共溶剂变化、接触角不恒定或动力学吸附未平衡，张力和毛细高度需另测。

#### 主要答案向量
- surface_tension_c0p1mM_N_m: 0.07064409808543771 N/m
- surface_tension_c1mM_N_m: 0.06382976203274644 N/m
- surface_tension_drop_c0p1mM_N_m: 0.0013559019145622797 N/m
- surface_tension_drop_c1mM_N_m: 0.008170237967253552 N/m
- surface_coverage_c0p1mM: 0.16666666666666669 fraction
- surface_coverage_c1mM: 0.6666666666666666 fraction
- surface_excess_c0p1mM_mol_m2: 5.000000000000001e-7 mol/m2
- surface_excess_c1mM_mol_m2: 0.000002 mol/m2
- Gibbs_derivative_c0p1mM_N_m: -0.0012394785147783502 N/m
- Gibbs_derivative_c1mM_N_m: -0.0049579140591134 N/m
- saturated_molecular_footprint_nm2: 0.5535130223912822 nm2/molecule
- surface_number_density_c1mM_molecules_m2: 1204428152000000000 molecules/m2
- droplet_Laplace_pressure_c1mM_Pa: 12765.952406549288 Pa
- clean_water_Laplace_pressure_Pa: 14399.999999999998 Pa
- capillary_rise_c1mM_cm: 5.205281307461483 cm
- clean_water_capillary_rise_cm: 5.8715596330275215 cm
- surface_tension_relative_to_clean: 0.886524472677034 ratio
- Gibbs_slope_saturation_N_m: -0.0074368710886701 N/m

状态：publishable=false，exclude_from_official_bank=true，awaiting_expert_review，pending_cross_series_model_review。

<a id="batch-18"></a>

## 第十二辑 I163 / A163 题干与逐步解答

本批为专家待审编辑稿，机器复算不能证明科学性或跨辑原创性。

### UC-ADV12-I163 Davies活度修正下BaSO4共离子溶解的正根反演与饱和指数

#### 中文题干
某假想BaSO₄(s)溶解实验在25°C进行，热力学溶度积K_sp=a_Ba²⁺a_SO₄²⁻=1.100×10⁻¹⁰（所有活度以1 mol/L标准状态无量纲化）。溶液预先加入BaCl₂，总初始Ba²⁺=2.000×10⁻⁵ mol/L；NaNO₃作为大量惰性背景电解质使两次实验离子强度分别控制为0.01000和0.1000 mol/L。忽略BaSO₄中性离子对、HSO₄⁻和水解、假设固相始终存在。用Davies公式log₁₀γ_i=−0.51z_i²[√I/(1+√I)−0.30I]（I以mol/L对1 mol/L标准化），并对Ba²⁺、SO₄²⁻同时取z²=4。推导共离子平衡的唯一正根溶解度s，分别给出两离子强度下活度系数、s、自由Ba²⁺浓度、浓度离子积和最终热力学活度积。以测试溶解量s_test=5.000×10⁻⁶ mol/L分别计算试算离子积与SI=log₁₀(Q/K_sp)，判断欠饱和或过饱和。核对Ba与SO₄物质的量和电荷平衡，估计该溶解引入的离子强度，讨论Davies有效范围。

#### 分步解析
1. 考虑BaSO₄(s)⇌Ba²⁺+SO₄²⁻。以1 mol/L为标准浓度，热力学溶度积K_sp=a_Ba a_SO4=1.100×10⁻¹⁰，不能把它直接等同于摩尔浓度的乘积。

2. 体系额外加入BaCl₂使尚未溶解固体前总Ba²⁺分析浓度c₀=2.000×10⁻⁵ mol/L，固体溶解s产生等量Ba²⁺、SO₄²⁻；忽略所有离子对与水解。

3. 大量1:1惰性NaNO₃电解质缓冲使离子强度在两次实验中分别固定为I₁=0.01000 mol/L和I₂=0.1000 mol/L，以小浓度盐引入的离子强度增量作为误差估计。

4. 将Davies经验式log₁₀γ_i=−0.51z_i²[√I/(1+√I)−0.30I]用于|z|=2的Ba²⁺与SO₄²⁻，故两者活度系数相同；I以mol/L相对1 mol/L标准浓度表达。

5. 代入I₁、I₂得到γ_±=0.661706581924、0.372463508913，盐浓度越高双电荷离子的γ越小。

6. 质量守恒给[Ba²⁺]=c₀+s、[SO₄²⁻]=s，而固液平衡要求γ²(c₀+s)s=K_sp。

7. 将该式化为s²+c₀s−K_sp/γ²=0。两个代数根一正一负，负根不符合非负物质的量，故物理解唯一。

8. 为避免在c₀远大于溶度时二次求根的消减误差，采用稳定表达式s=[2K_sp/γ²]/[√(c₀²+4K_sp/γ²)+c₀]。

9. 由此两离子强度下溶解度分别s₁=0.00000874098118918、s₂=0.0000198816402999 mol/L；后者为前者2.27453187114倍。

10. 低盐溶液自由Ba²⁺浓度=0.0000287409811892 mol/L，高盐溶液=0.0000398816402999 mol/L。

11. 将两正根逐一回代γ²(c₀+s)s，得1.10000000000e-10和1.10000000000e-10，均应等于K_sp。

12. 在尚未达到饱和的统一试算s_test=5.000×10⁻⁶ mol/L下，计算两背景的反应商Q=γ²(c₀+s_test)s_test，并用SI=log₁₀(Q/K_sp)判断相对饱和状态。

13. 试算Q₁=5.47319500702e-11、Q₂=1.73411331840e-11；SI₁=-0.303151763059、SI₂=-0.802315211427，负SI代表相对固相欠饱和。

14. 每个Ba²⁺带2单位正电、每个SO₄²⁻带2单位负电；BaCl₂带来的2c₀个Cl⁻当量与溶解的SO₄²⁻阴离子当量共同抵消阳离子电荷。

15. 忽略背景盐自身时，新增BaCl₂和BaSO₄造成离子强度增量ΔI=3c₀+4s，因此两次溶解对应额外4s分别为0.0000349639247567和0.0000795265611995 mol/L；本题已把背景离子强度视为受控参数。

16. Davies活度公式仅为中低离子强度经验近似，并非大浓度精确理论；真实硫酸盐可产生离子缔合、硫酸氢根与硫酸钡晶格表面效应，故本计算不是实测溶解度的替代。

#### 数值见证
- Davies_mean_divalent_activity_coefficient_I001 = 0.6617065819240074 fraction
- Davies_mean_divalent_activity_coefficient_I01 = 0.37246350891277114 fraction
- BaSO4_solubility_I001_M = 0.000008740981189184137 mol/L
- BaSO4_solubility_I01_M = 0.000019881640299865217 mol/L
- salting_in_solubility_ratio = 2.27453187114351 ratio
- free_Ba_concentration_I001_M = 0.00002874098118918414 mol/L
- free_Ba_concentration_I01_M = 0.00003988164029986522 mol/L
- ionic_activity_product_equilibrium_I001 = 1.1e-10 dimensionless
- ionic_activity_product_equilibrium_I01 = 1.1e-10 dimensionless
- concentration_product_I001_M2 = 2.5122437593335373e-10 M2
- concentration_product_I01_M2 = 7.92912427010529e-10 M2
- ion_activity_product_trial_I001 = 5.473195007019415e-11 dimensionless
- ion_activity_product_trial_I01 = 1.7341133183951746e-11 dimensionless
- trial_saturation_index_I001 = -0.30315176305925945 ratio
- trial_saturation_index_I01 = -0.8023152114265004 ratio
- charge_cation_anion_dissolved_equivalents_I001_M = 0.00007496392475673655 ratio
- ionic_strength_increase_from_dissolution_I001_M = 0.00003496392475673655 mol/L
- ionic_strength_increase_from_dissolution_I01_M = 0.00007952656119946087 mol/L
- quadratic_numerator_I001_M = 0.000017481962378368275 mol/L

审核标记：publishable=false, exclude_from_official_bank=true, quality_status=awaiting_expert_review, novelty_review_status=pending_cross_series_model_review。

### UC-ADV12-A163 双波长Beer–Lambert混合物矩阵反演与浓度估计协方差

#### 中文题干
某假想分析实验同时测量两种有色离子X、Y的摩尔浓度。1.000 cm比色皿在两个波长λ₁、λ₂处具有摩尔吸光系数矩阵E=[[15000,4000],[3000,12000]] L/(mol cm)，列顺序X、Y，行顺序λ₁、λ₂。光谱无重叠反应或吸附，符合Beer–Lambert线性叠加。独立空白基线分别b₁=0.01000、b₂=0.02000，样品测得吸光度A₁=0.15000、A₂=0.10400。空白扣除后两通道噪声互相独立，其标准差σ_A1=0.002000、σ_A2=0.003000（无量纲），背景基线值本身视作已准确测定。求唯一反演的c_X、c_Y，给出浓度比、各组分对吸光度的贡献、矩阵行列式与回代信号；建立Σ_c=(lE)⁻¹ diag(σ_A1²,σ_A2²)(lE)⁻ᵀ，计算浓度标准差、方差、协方差、相关系数及基于3σ的两物种浓度检测限，并检验波长数、噪声相关性、正浓度与反问题病态极限。

#### 分步解析
1. 用两波长透射光度法同时测定两种不发生相互转化的吸收物种X与Y，假定理想Beer–Lambert线性叠加且光程l=1.000 cm。

2. λ₁与λ₂两列摩尔吸光系数依次为X:(15000,3000)、Y:(4000,12000) L/(mol cm)，背景空白吸光度分别为b₁=0.01000、b₂=0.02000。

3. 将空白扣除的吸光度列向量y=(A₁−b₁,A₂−b₂)写成y=l E c，E为2×2响应矩阵，c为待测两浓度。

4. 本题实测A₁=0.150000000000、A₂=0.104000000000，扣空白后y₁=0.140000000000、y₂=0.0840000000000。

5. 响应矩阵行列式det E=ε_X1 ε_Y2−ε_Y1 ε_X2=168000000.000，不为零，因而两物种浓度能唯一识别。

6. 明确写出代数反演c_X=(ε_Y2 y₁−ε_Y1 y₂)/(l det E)，c_Y=(ε_X1 y₂−ε_X2 y₁)/(l det E)。

7. 计算得c_X=0.00000800000000000 mol/L（8.00000000000 μmol/L），c_Y=0.00000500000000000 mol/L，浓度均非负。

8. 重建两波长吸光度b+l Ec得到A₁=0.150000000000、A₂=0.104000000000，与观测完全相符；X:Y浓度比为1.60000000000。

9. 设两波长扣空白后的测量噪声独立、均值零且标准差σ_A1=0.002000、σ_A2=0.003000吸光度；背景数值本身由独立空白校准准确给定，不计额外不确定度。

10. 线性误差传播给Σ_c=(lE)⁻¹ diag(σ₁²,σ₂²)[(lE)⁻¹]ᵀ，与单独把两波长噪声简单相加不同。

11. 具体Var(c_X)=[ε_Y2²σ₁²+ε_Y1²σ₂²]/(l det E)²=2.55102040816e-14 (mol/L)²，故σ_X=1.59719141250e-7 mol/L。

12. Var(c_Y)=[ε_X2²σ₁²+ε_X1²σ₂²]/(l det E)²=7.30229591837e-14 (mol/L)²，故σ_Y=2.70227606258e-7 mol/L。

13. 两浓度估计协方差cov(c_X,c_Y)=−[ε_Y2 ε_X2σ₁²+ε_Y1 ε_X1σ₂²]/(l det E)²=-2.42346938776e-14 (mol/L)²，相关系数=-0.561501418337。

14. 在仅考虑给定高斯空白噪声的三倍标准差近似下，X和Y的检测限为4.79157423750e-7和8.10682818773e-7 mol/L；这些是模型推导的联合反演标准差，不等于完整实验方法检出限。

15. 量纲核对：E单位L/(mol cm)，乘l cm与c mol/L得到无量纲吸光度；协方差矩阵应半正定且两种不确定度不能被视为独立。

16. 当两吸收物种的相对光谱形状几乎相同时det E趋0，反问题会严重放大噪声；真实样品的散射、漂移、非线性吸收和基线不确定性需要额外波长及校准。

#### 数值见证
- measured_absorbance_lambda1 = 0.15 absorbance
- measured_absorbance_lambda2 = 0.10400000000000001 absorbance
- baseline_corrected_lambda1 = 0.13999999999999999 absorbance
- baseline_corrected_lambda2 = 0.084 absorbance
- spectral_matrix_determinant = 168000000 (L/(mol cm))^2
- reconstructed_species_X_M = 0.000007999999999999998 mol/L
- reconstructed_species_Y_M = 0.000005 mol/L
- species_X_uM = 7.999999999999998 umol/L
- species_Y_uM = 5 umol/L
- species_X_to_Y_concentration_ratio = 1.5999999999999999 ratio
- species_X_one_sigma_M = 1.5971914124998498e-7 mol/L
- species_Y_one_sigma_M = 2.7022760625752777e-7 mol/L
- species_X_variance_M2 = 2.5510204081632653e-14 (mol/L)^2
- species_Y_variance_M2 = 7.302295918367347e-14 (mol/L)^2
- species_XY_covariance_M2 = -2.423469387755102e-14 (mol/L)^2
- estimated_concentration_correlation = -0.5615014183372646 dimensionless
- species_X_three_sigma_concentration_LOD_M = 4.79157423749955e-7 mol/L
- species_Y_three_sigma_concentration_LOD_M = 8.106828187725833e-7 mol/L
- predicted_lambda1_absorbance = 0.14999999999999997 absorbance
- predicted_lambda2_absorbance = 0.104 absorbance
- X_lambda1_absorbance_contribution = 0.11999999999999997 absorbance
- Y_lambda1_absorbance_contribution = 0.02 absorbance

审核标记：publishable=false, exclude_from_official_bank=true, quality_status=awaiting_expert_review, novelty_review_status=pending_cross_series_model_review。

<a id="batch-19"></a>

## 第十二辑 O159 / P159 严格题目与解析

两题为专家待审编辑稿，不能将机器QA等同人类审定或原创性结论。

### UC-ADV12-O159 2D EXSY两态可逆构象交换的传播矩阵反演与详细平衡

#### 中文题干
假想一种有机分子在298.15 K下只有两个NMR可辨构象A⇌B，平衡一维积分给[B]/[A]=2/3；分子以一级速率k_AB、k_BA进行马尔可夫互变，且无化学降解，总浓度0.01000 mol/L。2D EXSY实验对A构象进行理想选择性标记，校正所有T₁弛豫、NOE和接收灵敏度后，起始标签的条件概率为P_A(0)=1、P_B(0)=0。混合时间t₁=0.5000 s时观测归一B交叉峰概率0.252848223531423，t₂=1.000 s时观测0.345865886705355。推导两态速率方程与传播矩阵（或本征值），由两个时点分别推导总交换速率kΣ以及两个单向速率，给出EXSY A对角概率、到平衡的松弛时间和半衰趋近平衡时间；计算ΔG°_B−A=−RTln([B]/[A])、平衡两构象物质的量浓度和正逆微观通量，核验概率归一、详细平衡以及交换与自旋弛豫的实验限制。

#### 逐步求解
1. 设有机分子仅存在两个可分辨的构象A、B，并以一阶速率A→B为k_AB、B→A为k_BA进行可逆化学交换；两构象的分子骨架及总体浓度守恒。

2. 假定2D EXSY选择性标记A态的核磁自旋，在混合时间t内标记不因T₁/T₂弛豫丢失、无额外交叉弛豫和NOE，交叉峰强度经校正后可按分子从A转至B的条件概率解释。

3. 主方程为dP_A/dt=−k_ABP_A+k_BAP_B、dP_B/dt=k_ABP_A−k_BAP_B，且P_A+P_B=1。

4. 稳态要求详细平衡π_Ak_AB=π_Bk_BA，设总交换速率kΣ=k_AB+k_BA，即π_A=k_BA/kΣ、π_B=k_AB/kΣ。

5. 独立一维NMR积分给平衡构象比[B]/[A]=2/3，故π_A=0.600000000000、π_B=0.400000000000。

6. 选择性激发的初始条件P_A(0)=1、P_B(0)=0。对2×2速率生成矩阵对角化，非零松弛本征值为−kΣ。

7. 随时间的EXSY概率严格为P_B(t)=π_B[1−exp(−kΣt)]，P_A(t)=π_A+π_Bexp(−kΣt)，两者任何时刻都归一。

8. 测得混合时间t₁=0.5s、t₂=1s处归一交叉峰P_B分别0.252848223531和0.345865886705；同时A态对角概率分别0.747151776469和0.654134113295。

9. 由任一时点解kΣ=−(1/t)ln[1−P_B(t)/π_B]，需满足0<P_B(t)<π_B；两个时间点均可独立求出。

10. 得到kΣ(0.5s)=2.00000000000 s⁻¹、kΣ(1s)=2.00000000000 s⁻¹，两次结果一致。

11. 详细平衡再给k_AB=kΣπ_B=0.800000000000、k_BA=kΣπ_A=1.20000000000 s⁻¹，不可将kΣ误认为单向速率。

12. 指数恢复时间τ=1/kΣ=0.500000000000 s，达到平衡差值一半的时间t₁/₂=ln2/kΣ=0.346573590280 s。

13. 对平衡构象比K=[B]/[A]=2/3，按1 mol/L标准状态计算ΔG°_B−A=−RTlnK=1.00513057998 kJ/mol，B的标准自由能较高。

14. 若总有机分子浓度0.01 mol/L，平衡[A]=0.00600000000000、[B]=0.00400000000000 mol/L，前后总浓度严格不变。

15. 正向和逆向的每分子总库归一化稳态交换通量同为0.480000000000 s⁻¹，两者差为0；交换仍持续，平衡不代表无微观交换事件。

16. 本模型只包含两态马尔可夫交换，真实2D EXSY必须校正交叉弛豫、NOE、T₁损失、非理想选择激发及多个中间构象；若这些效应显著不能直接将交叉峰视作条件概率。

#### 独立数值答案
- equilibrium_A_fraction = 0.6 fraction
- equilibrium_B_fraction = 0.4 fraction
- equilibrium_B_over_A = 0.6666666666666667 ratio
- normalized_EXSY_B_crosspeak_t0p5 = 0.25284822353142306 fraction
- normalized_EXSY_B_crosspeak_t1 = 0.34586588670535495 fraction
- normalized_EXSY_A_diagonal_t0p5 = 0.7471517764685769 fraction
- normalized_EXSY_A_diagonal_t1 = 0.654134113294645 fraction
- total_exchange_rate_from_0p5_s = 1.9999999999999993 s^-1
- total_exchange_rate_from_1s_s = 2 s^-1
- forward_A_to_B_rate_s = 0.7999999999999998 s^-1
- reverse_B_to_A_rate_s = 1.1999999999999995 s^-1
- exchange_relaxation_time_s = 0.5 s
- exchange_half_approach_time_s = 0.34657359027997264 s
- G_B_minus_A_kJ_mol = 1.0051305799847012 kJ/mol
- equilibrium_A_concentration_M = 0.006 mol/L
- equilibrium_B_concentration_M = 0.004 mol/L
- equilibrium_forward_flux_per_total_s = 0.48 s^-1
- detailed_balance_flux_residual_s = 0 s^-1
- crosspeak_ratio_1_to_0p5 = 1.3678794411714426 ratio
- unrelaxed_excited_label_fraction_t1 = 0.1353352832366127 fraction

审核标记：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

### UC-ADV12-P159 Lindemann–Hinshelwood碰撞活化反应的压力降落、倒数反演与极限识别

#### 中文题干
一种假想气相活化分解A→P在350.0 K下采用Lindemann–Hinshelwood模型：A+M⇌A*+M，正向活化常数k₁、碰撞去活化常数k₋₁均以L/(mol s)为单位，A*→P为一级常数k₂（s⁻¹）。热浴M的浓度远大于A而恒定，激发态A*满足准稳态且[A*]≪[A]。两个独立实验固定[M]₁=0.02000 mol/L与[M]₂=0.5000 mol/L，测得有效一阶常数k_obs,1=0.0352941176470588 s⁻¹、k_obs,2=0.230769230769231 s⁻¹。以速率方程推导k_obs=k₁[M]k₂/[k₋₁[M]+k₂]及低/高压常数k₀、k∞，使用1/k_obs对1/[M]双点反演k₀、k∞及转折碰撞浓度；说明为什么两点不足以分开k₂和k₋₁。在两个[M]下计算激发态的反应/回落竞争概率、[A*]/[A]准稳态比值。若起始A₀=0.01000 mol/L、反应持续5.000 s且[A*]可忽略，求转化分数与产物浓度；将[M]视作理想气体并用R=8.314462618 J/(mol K)换算热浴分压，检查低高压极限、准稳态与物料近似。

#### 逐步求解
1. 采用Lindemann–Hinshelwood的独立热浴M碰撞活化模型：A+M → A*+M（速率常数k₁），A*+M → A+M（k₋₁），A*→P（k₂），假设产物P不逆反应。

2. 热浴碰撞物M的大量浓度[M]由实验固定，活化/失活分子反应的k₁和k₋₁单位均为L/(mol s)，单分子反应k₂单位s⁻¹。

3. 对低浓度中间态A*采用准稳态d[A*]/dt≈k₁[M][A]−(k₋₁[M]+k₂)[A*]=0。

4. 因此[A*]/[A]=k₁[M]/(k₋₁[M]+k₂)，产物形成速率v=k₂[A*]=k_obs[A]，其中k_obs=k₁[M]k₂/(k₋₁[M]+k₂)。

5. 定义低压极限常数k₀=k₁及高压一级极限k∞=k₁k₂/k₋₁，并取转折热浴浓度[M]*=k₂/k₋₁=k∞/k₀。

6. 两点测量用[M]₁=0.02000 M和[M]₂=0.5000 M，给定真实模型常数k₁=2.000、k₋₁=800.0 L/(mol s)，k₂=120.0 s⁻¹；在反演时将它们视为未知。

7. 按这些输入生成有效速率常数k_obs,1=0.0352941176471、k_obs,2=0.230769230769 s⁻¹。

8. 倒数变换1/k_obs=1/(k₀[M])+1/k∞，在横坐标x=1/[M]、纵坐标y=1/k_obs的图上为直线，斜率为1/k₀、截距为1/k∞。

9. 由双点线性解得到k₀=2.00000000000 L/(mol s)，k∞=0.300000000000 s⁻¹，唯一确定转折浓度[M]*=0.150000000000 mol/L。

10. 注意单凭两点k_obs只能识别k₁和k₂/k₋₁的组合，不能在没有第三类动力学信息时单独确定k₂与k₋₁。

11. 已活化A*进一步生成P而非回到A的条件概率为k₂/(k₋₁[M]+k₂)：低/高碰撞浓度分别0.882352941176、0.230769230769。

12. 准稳态激发态与基态浓度比分别0.000294117647059、0.00192307692308，均低于0.002，支持忽略A*库存的近似。

13. 在中间态库存可忽略且热浴常量的约化一级模型下，近似积分得到[A](t)=A₀exp(−k_obst)、[P](t)=A₀[1−exp(−k_obst)]。

14. 初始A₀=0.01000 mol/L、t=5.000 s时，两条件转化分数分别0.161776567577、0.684578725361，产物P浓度分别0.00161776567577和0.00684578725361 mol/L。

15. 若温度恒为350 K、气态M理想且[A]与[M]在同一体积中，热浴压力p=[M]×1000RT，两测试对应58201.2383260与1455030.95815 Pa。

16. M→0时k_obs≈k₀[M]呈二级碰撞依赖；M→∞时k_obs→k∞为纯一级极限。若A*不可忽略、能量随机游走、多能态或非理想碰撞显著，需要采用全主方程或Troe/RRKM更精细动力学模型。

#### 独立数值答案
- low_pressure_bimolecular_rate_constant_M_inv_s = 2 L/(mol s)
- high_pressure_unimolecular_limit_s_inv = 0.3 s^-1
- half_falloff_collision_concentration_M = 0.15 mol/L
- effective_rate_low_collision_s = 0.03529411764705882 s^-1
- effective_rate_high_collision_s = 0.23076923076923078 s^-1
- high_low_rate_ratio = 6.538461538461539 ratio
- reciprocal_plot_slope_M_s = 0.5 mol s/L
- reciprocal_plot_intercept_s = 3.333333333333332 s
- recovered_low_pressure_constant_M_inv_s = 2 L/(mol s)
- recovered_high_pressure_constant_s_inv = 0.3000000000000001 s^-1
- reaction_probability_after_excitation_low = 0.8823529411764706 fraction
- reaction_probability_after_excitation_high = 0.23076923076923078 fraction
- excited_state_to_ground_ratio_low = 0.00029411764705882356 fraction
- excited_state_to_ground_ratio_high = 0.0019230769230769232 fraction
- converted_fraction_low_after5s = 0.1617765675770001 fraction
- converted_fraction_high_after5s = 0.6845787253610525 fraction
- product_low_after5s_M = 0.001617765675770001 mol/L
- product_high_after5s_M = 0.006845787253610525 mol/L
- unexcited_substrate_low_after5s_M = 0.00838223432423 mol/L
- unexcited_substrate_high_after5s_M = 0.0031542127463894754 mol/L
- low_bath_gas_partial_pressure_Pa = 58201.238326 Pa
- high_bath_gas_partial_pressure_Pa = 1455030.9581499998 Pa
- low_pressure_time_constant_s = 28.333333333333332 s
- high_pressure_time_constant_s = 4.333333333333333 s

审核标记：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

<a id="batch-20"></a>

## 第十二辑 I164 / A164 中文解答

本辑全部题目仍为专家待审编辑草稿，未完成独创性审查。

### UC-ADV12-I164 B2合金Bragg–Williams有序–无序相变和超结构XRD反演

#### 中文题目
某假想等化学计量AB合金形成B2两个等量子晶格，定义η使α位点A占位率(1+η)/2、β位点A占位率(1−η)/2。采用Bragg–Williams平均场自由能ΔG(η,T)=−Jη²/2+(RT/2)[(1+η)ln(1+η)+(1−η)ln(1−η)]（每摩尔AB式量），J=5000.0 J/mol、R=8.314462618 J/(mol K)，η∈[0,1]。求临界温度并说明无序解的稳定性，计算400、550、700 K平衡有序参量、正确/错误子晶格占位概率，400 K的排序内能、熵和自由能与曲率，550 K自由能及曲率。对散射因子f_A=26、f_B=28，已校正所有反射的其它因子的理想超结构与基本衍射比I_100/I_110=[η(f_A−f_B)/(f_A+f_B)]²，求两低温的强度比及温度比；验证原子数守恒、熵号和相变极限。

#### 逐步解析
1. 假定等原子A/B合金形成两个相等B2子晶格α和β。定义有序度η∈[0,1]，α的A占据率(1+η)/2、β的A占据率(1−η)/2，因此整体仍是1:1化学计量。

2. 题设每摩尔AB式量的Bragg–Williams相对自由能ΔG=−Jη²/2+(RT/2)[(1+η)ln(1+η)+(1−η)ln(1−η)]，J=5000 J/mol，零有序态G(0)=0。

3. 对η求导得到G′=−Jη+RT atanhη，非零平衡参量满足η=tanh(Jη/RT)；二阶导数为G″=−J+RT/(1−η²)。

4. 无序态附近泰勒展开ΔG≈(RT−J)η²/2+RTη⁴/12，故平均场临界温度T_c=J/R；700 K超过临界点，唯一稳定对称解η=0。

5. 求T_c=601.361775225 K；400和550 K低于T_c，η=0在这两温度下不稳定，需取唯一正的非零极小根。

6. 使用区间二分求得η(400 K)=0.859821443020、η(550 K)=0.488637617313，有序度随温度升高降低且两值均严格在(0,1)中。

7. 400 K的正确占位概率0.929910721510、反位概率0.0700892784900；每AB式量含两个子晶格位，平均反位原子数1−η=0.140178556980。

8. 定义排序能量ΔU=−Jη²/2及配置熵差ΔS=−(R/2)[(1+η)ln(1+η)+(1−η)ln(1−η)]，400 K分别得-1848.23228469 J/mol和-3.65235518129 J/(mol K)。

9. 平衡有序自由能在400 K为-387.290212178 J/mol、550 K为-26.8694529279 J/mol，均小于无序态的0。

10. 二阶曲率分别7756.78807453与1007.29706172 J/mol，均正，表明计算根是稳定有序态。

11. 理想XRD超结构(100)反射强度∝η²(f_A−f_B)²，而基本(110)反射∝(f_A+f_B)²；题设已校正几何、消光、温度和角度因子。

12. 给f_A=26、f_B=28，则400 K强度比I_100/I_110=0.00101411922343、550 K为0.000327526366329，高温较弱；计算二比之比=0.322966332521。

13. 有序与无序相化学式仍为AB，变化只是子晶格占位和自由能。真实合金的局部短程有序、畴结构、声子及反射几何条件会改变平均场相变和实际衍射强度。

#### 主要数值答案
- mean_field_critical_temperature_K: 601.3617752247136 K
- reduced_coupling_400K: 1.5034044380617841 dimensionless
- order_parameter_400K: 0.8598214430199647 fraction
- order_parameter_550K: 0.4886376173134186 fraction
- order_parameter_700K: 0 fraction
- correct_sublattice_fraction_400K: 0.9299107215099823 fraction
- antisite_fraction_400K: 0.07008927849001767 fraction
- correct_sublattice_fraction_550K: 0.7443188086567093 fraction
- antisite_fraction_550K: 0.2556811913432907 fraction
- ordering_internal_energy_400K_J_mol: -1848.232284692336 J/mol
- ordering_entropy_400K_J_molK: -3.6523551812864246 J/(mol K)
- ordering_G_400K_J_mol: -387.2902121777661 J/mol
- ordering_G_550K_J_mol: -26.869452927929274 J/mol
- free_energy_curvature_400K_J_mol: 7756.788074529271 J/mol
- free_energy_curvature_550K_J_mol: 1007.2970617234441 J/mol
- B2_superlattice_ratio_400K: 0.0010141192234251499 ratio
- B2_superlattice_ratio_550K: 0.0003275263663288544 ratio
- ratio_of_peak_ratios_550_400: 0.32296633252118656 ratio
- wrong_site_atom_count_per_formula_400K: 0.14017855698003534 atoms/formula
- AB_stoichiometry_residual: 0 atoms

待审：publishable=false, exclude_from_official_bank=true, awaiting_expert_review, pending_cross_series_model_review。

### UC-ADV12-A164 氟离子选择电极双pH测量的HF解离与氯选择性系数反演

#### 中文题目
某假想氟离子选择电极在298.15 K下满足同价阴离子响应E=E₀−(RT/F)ln(a_F−+K_sel a_Cl−)，其中E₀=0.2000 V，F=96485.33212 C/mol，R=8.314462618 J/(mol K)，a_i=γ_i c_i/(1 mol/L)。氟以HF⇌H⁺+F⁻平衡存在，条件浓度K_a=6.800×10⁻⁴，游离F⁻分数f=K_a/(K_a+[H⁺])。两次将同一样品缓冲在pH=2.500和4.500，总氟不变，Cl⁻浓度0.01000 mol/L不变，F与Cl活度系数均为0.8000；测得电势E_low=0.475355073617360 V、E_high=0.440981238050443 V。求由两电位同时唯一反演的总氟浓度C_T与氯离子选择系数K_sel，并计算两pH下自由氟、HF、氯干扰贡献分数及氯干扰等效总氟浓度。检查电极电位负斜率、酸碱与总氟原子守恒、有效活度正性以及真实样品的选择性限制。

#### 逐步解析
1. 把电极对同价负离子F⁻与Cl⁻的Nikolsky–Eisenman近似写成E=E₀−(RT/F)ln(a_F+K_sel a_Cl)，活度均以1 mol/L标准浓度无量纲化。

2. 由于HF⇌H⁺+F⁻且题设条件酸常数K_a=6.800×10⁻⁴，固定pH下自由F⁻占总氟分数f=K_a/(K_a+10^(−pH))。

3. 样品两次缓冲pH分别2.500、4.500，总氟浓度C_T相同，氯分析浓度固定0.01000 mol/L，γ_F=γ_Cl=0.8000，且E₀=0.2000 V。

4. 写成对两条件共同成立的z=γ_F(C_T/c°)f(pH)+K_selγ_Cl(C_Cl/c°)，由阴离子的Nernst负斜率E=E₀−V_Tlnz给出有效响应。

5. 得到两个自由氟分数f₁=0.176978360270、f₂=0.955562444540，高pH端游离F⁻显著增多。

6. T=298.15 K时V_T=RT/F=0.0256925791215 V；两次测得电位E₁=0.475355073617 V、E₂=0.440981238050 V，E₂低于E₁。

7. 用z_i=exp[(E₀−E_i)/V_T]逐点反算，得z₁=0.0000221582688216、z₂=0.0000844449955632，它们均为正的无量纲活度响应。

8. 用两电位差消除同一个氯干扰项，得到C_T=(z₂−z₁)/(γ_F(f₂−f₁))（浓度以mol/L输入）；f₂≠f₁使反问题唯一。

9. 求得C_T=0.000100000000000 mol/L，再由K_sel=[z₁−γ_F C_T f₁]/(γ_Cl C_Cl)=0.00100000000000，系数为无量纲。

10. 两次自由F⁻浓度分别0.0000176978360270、0.0000955562444540 mol/L，HF分别0.0000823021639730、0.00000444375554598 mol/L，各自相加为C_T。

11. 氯干扰的有效响应为z_Cl=0.00000800000000000，占低、高pH总响应的比例0.361039035333、0.0947362238182，酸端影响更明显。

12. 把氯的有效响应等同于游离F信号，得到两个pH下等效总氟浓度分别0.0000565040832378、0.0000104650408324 mol/L。

13. 验证：若忽略HF而直接把总氟代入电极方程，会误判氟浓度和K_sel。若出现HF₂⁻、AlF络合、液接电位变动、活度系数或氯活度变化，双条件方程不能直接使用。

#### 主要数值答案
- Nernst_voltage_V: 0.025692579121493725 V
- fluoride_ionized_fraction_pH2p5: 0.17697836027035083 fraction
- fluoride_ionized_fraction_pH4p5: 0.9555624445402146 fraction
- effective_activity_pH2p5: 0.00002215826882162807 activity
- effective_activity_pH4p5: 0.00008444499556321717 activity
- electrode_E_pH2p5_V: 0.47535507361736046 V
- electrode_E_pH4p5_V: 0.44098123805044287 V
- potential_shift_V: 0.03437383556691759 V
- reconstructed_total_fluoride_M: 0.00010000000000000013 mol/L
- reconstructed_chloride_selectivity: 0.0009999999999999994 ratio
- free_fluoride_pH2p5_M: 0.000017697836027035107 mol/L
- free_fluoride_pH4p5_M: 0.00009555624445402158 mol/L
- HF_pH2p5_M: 0.00008230216397296502 mol/L
- HF_pH4p5_M: 0.000004443755545978551 mol/L
- chloride_interference_activity: 0.000007999999999999995 activity
- interference_fraction_pH2p5: 0.36103903533255344 fraction
- interference_fraction_pH4p5: 0.09473622381815437 fraction
- equivalent_fluoride_interference_pH2p5_M: 0.00005650408323777024 mol/L
- equivalent_fluoride_interference_pH4p5_M: 0.000010465040832377697 mol/L
- inverted_activity_pH2p5: 0.000022158268821628078 activity
- inverted_activity_pH4p5: 0.00008444499556321727 activity
- fluoride_ionization_ratio: 5.399317990518753 ratio

待审：publishable=false, exclude_from_official_bank=true, awaiting_expert_review, pending_cross_series_model_review。

<a id="batch-21"></a>

## 第十二辑 O160 / P160 完整题目与推导

全为专家待审编辑候选，机器QA不等于人工科学和独创性审定。

### UC-ADV12-O160 外消旋底物动力学拆分的双一级轨迹与底物/产物ee守恒

#### 中文题干
某假想手性酰化反应将外消旋有机底物分为快反应对映体F与慢反应对映体S，在固定催化剂和酰化剂活度条件下，各对映体不可逆一级转化为保持构型的产物P_F、P_S。起始总底物浓度C₀=0.01000 mol/L，F、S各占一半且无消旋，速率常数k_F=0.2000 s⁻¹、k_S=0.04000 s⁻¹，反应时间5.000 s。求两个底物剩余量、两个产物量、总转化率c、剩余底物和产品各自的ee及富集符号，验证各对映体的单独质量平衡与关系c ee_P=(1−c)ee_S。由底物剩余量独立反演k_F、k_S及选择性s=k_F/k_S，给定T=298.15 K和R=8.314462618 J/(mol K)，若两通道Eyring指前因子相同，求活化自由能差、两支半衰期和t→0时初始产物ee极限；解释为什么完全反应后累积产物不能保持高ee及动态动力学拆分的区别。

#### 分步解答
1. 考虑假想外消旋的两个有机对映体F（快反应）和S（慢反应），各自只发生一级不可逆酰化生成构型保留的产物P_F和P_S，产物不互变、底物也不消旋。

2. 初始F、S各占总底物C₀=0.01000 mol/L的一半，固定手性催化剂与酰化剂活度下，两支通道分别有k_F=0.2000 s⁻¹、k_S=0.04000 s⁻¹。

3. 两个独立物料平衡微分方程为d[F]/dt=−k_F[F]、d[S]/dt=−k_S[S]，解得[F](t)=C₀exp(−k_Ft)/2、[S](t)=C₀exp(−k_St)/2。

4. 在t=5 s时剩余快、慢对映体浓度分别0.00183939720586和0.00409365376539 mol/L，因快支消耗更多，剩余底物富集慢构型。

5. 对应产物P_F=C₀/2−[F]=0.00316060279414、P_S=C₀/2−[S]=0.000906346234610 mol/L，两支分别满足底物+产物=初始0.005 mol/L。

6. 总剩余底物S_total=0.00593305097125、生成产物P_total=0.00406694902875 mol/L，总转化率c=P_total/C₀=0.406694902875。

7. 定义剩余底物的对映体过量ee_S=([S]−[F])/([S]+[F])，产物的对映体过量ee_P=([P_F]−[P_S])/([P_F]+[P_S])，二者的富集方向相反。

8. 代入得到ee_S=0.379948962255、ee_P=0.554286897523，两个绝对值均小于1。

9. 由于初始外消旋的F−S净差为0，严格质量平衡还给c ee_P=(1−c)ee_S，左右两侧均为0.225425655953。

10. 每条底物衰减曲线可独立反演速率常数k_i=−ln([i](t)/[i]₀)/t；它们的比值s=k_F/k_S为动力学拆分选择性因子。

11. 反算k_F=0.200000000000、k_S=0.0400000000000 s⁻¹，选择性因子s=5.00000000000。

12. 设Eyring两个通道指前因子相同，活化自由能差ΔG‡_F−ΔG‡_S=−RTln(k_F/k_S)=-3.98972742666 kJ/mol，快反应过渡态更低。

13. 两支底物各自半衰期ln2/k分别3.46573590280、17.3286795140 s；t→0时瞬时产物ee趋向(k_F−k_S)/(k_F+k_S)=0.666666666667，而完全转化后累计产物趋于外消旋。

14. 此理想动力学拆分不考虑可逆反应、产物消旋、动态动力学拆分与对映体互相转化；不借助消旋再生时，对于严格单一目标构型的传统拆分理论最高产率不超过初始底物一半。

#### 主答案向量
- remaining_fast_enantiomer_M: 0.0018393972058572117 mol/L
- remaining_slow_enantiomer_M: 0.0040936537653899095 mol/L
- fast_product_M: 0.003160602794142788 mol/L
- slow_product_M: 0.0009063462346100906 mol/L
- remaining_total_substrate_M: 0.005933050971247121 mol/L
- total_product_M: 0.004066949028752879 mol/L
- overall_conversion: 0.40669490287528787 fraction
- remaining_substrate_ee_slow: 0.37994896225522484 ee
- product_ee_fast: 0.5542868975232671 ee
- kinetic_selectivity_factor: 5 ratio
- activation_G_fast_minus_slow_kJ_mol: -3.9897274266635736 kJ/mol
- fast_enantiomer_half_life_s: 3.465735902799726 s
- slow_enantiomer_half_life_s: 17.328679513998633 s
- reconstructed_fast_rate_s: 0.2 s^-1
- reconstructed_slow_rate_s: 0.03999999999999998 s^-1
- substrate_ee_mass_weight: 0.22542565595326977 fraction
- product_ee_mass_weight: 0.22542565595326974 fraction
- fast_enantiomer_inventory_M: 0.005 mol/L
- slow_enantiomer_inventory_M: 0.005 mol/L
- instantaneous_initial_product_ee_limit: 0.6666666666666666 fraction
- remaining_substrate_fraction: 0.5933050971247121 fraction

审核：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

### UC-ADV12-P160 带固定负电水凝胶的Donnan平衡、电化学势与盐依赖渗透压力

#### 中文题干
某假想带固定负电基团的水凝胶在298.15 K隔膜内与一价NaCl外液达到Donnan平衡。凝胶每升水相有不可移动的单价负电基团X=0.05000 mol/L，外液NaCl浓度分别实验设为c_s=0.1000和0.2000 mol/L，假设两条件下凝胶体积及固定电荷浓度均不变，理想点离子，无离子配对，膜可自由交换Na⁺/Cl⁻但固定负基团不可透过。内液电中性c_+−c_−=X，电化学平衡c_+c_−=c_s²，ψ_in−ψ_out=(RT/F)ln(c_s/c_+)。求两个外盐条件下凝胶内Na⁺、Cl⁻浓度、Donnan电位、阳/阴离子富集或排斥倍数和理想移动离子相对外液的渗透压差ΔΠ=RT×1000(c_++c_−−2c_s)。若凝胶内独立有效网络链段浓度0.02000 mol/L，再计算其理想渗透贡献和低盐时的总超额渗透压；R=8.314462618 J/(mol K)、F=96485.33212 C/mol。分别检查电中性、Donnan乘积、Na⁺和Cl⁻电化学势残差，并说明真实凝胶体积变化会使本题固定X近似失效。

#### 分步解答
1. 考虑含不可移动一价负电荷基团的均匀有机凝胶，固定电荷密度X=0.05000 mol/L（以凝胶水相体积计）；与理想1:1 NaCl外液隔膜接触，隔膜可通Na⁺、Cl⁻而不可通固定基团。

2. 设理想溶液、没有离子配对、体积保持固定、膜两侧温度T=298.15 K相同；外液Na⁺与Cl⁻浓度均为c_s，内液允许与外液发生Donnan电位差ψ=ψ_in−ψ_out。

3. 电化学势平衡给RTln(c_+/c_s)+Fψ=0、RTln(c_-/c_s)−Fψ=0，两式相加得Donnan乘积c_+c_-=c_s²。

4. 凝胶水相宏观电中性要求c_+−c_−=X，联立乘积与差值得唯一正解c_±=[√(X²+4c_s²)±X]/2。

5. c_s=0.1000 mol/L时，凝胶内部Na⁺浓度=0.128077640640、Cl⁻浓度=0.0780776406404 mol/L；Na⁺相对富集、Cl⁻相对排斥。

6. 两离子乘积=0.0100000000000 (mol/L)²，等于外侧c_s²；差值=0.0500000000000 mol/L，与固定负电X恰抵消。

7. 由Na⁺平衡求ψ=(RT/F)ln(c_s/c_+)=-6.35805164322 mV，负号表示凝胶内部电势相对外液更低。

8. 用Cl⁻电化学势反算应得到同一ψ；逐离子残差RTln(c_i/c_s)+z_iFψ应分别趋于零，而非只满足总体电中性。

9. 由于凝胶内部移动离子数高于外液，理想离子渗透压差ΔΠ_ion=RT×1000(c_++c_−−2c_s)，浓度必须由mol/L转为mol/m³。

10. 在0.1000 M盐外液时ΔΠ_ion=15258.6778001 Pa，正值对应凝胶由固定电荷吸引额外反离子导致的渗透作用。

11. 如果聚合物网络内独立的有效链段摩尔浓度给定c_chain=0.02 mol/L，理想链平动渗透贡献Π_chain=RT×1000 c_chain=49579.1405911 Pa。

12. 这两个贡献相加的模型总超额渗透压Π_total=64837.8183913 Pa；此处不含弹性反压，因此不能直接推出凝胶实际体积变化。

13. 把外盐升到0.2000 M而凝胶固定电荷浓度暂定不变，新内Na⁺、Cl⁻浓度分别0.226556443707、0.176556443707 mol/L，Donnan电位-3.20326718489 mV。

14. 高盐ΔΠ_ion=7716.71413945 Pa，小于低盐结果；由此解释增加背景盐会屏蔽固定电荷引起的Donnan渗透压力。

15. 本题的X按凝胶体积给定且保持固定，若发生真实膨胀收缩则X会稀释并与网络弹性、Flory–Huggins聚合物混合项耦合，真实Donnan模型还需活动度、离子尺寸及多价离子效应。

#### 主答案向量
- gel_cation_concentration_0p1M: 0.12807764064044153 mol/L
- gel_anion_concentration_0p1M: 0.07807764064044154 mol/L
- Donnan_salt_product_M2: 0.010000000000000004 M2
- gel_ion_charge_difference_M: 0.04999999999999999 mol/L
- Donnan_potential_0p1M_mV: -6.35805164321915 mV
- ionic_osmotic_pressure_difference_0p1M_Pa: 15258.677800143809 Pa
- polymer_chain_osmotic_pressure_Pa: 49579.140591134004 Pa
- total_excess_osmotic_pressure_Pa: 64837.81839127781 Pa
- coion_exclusion_ratio_0p1M: 0.7807764064044154 ratio
- mobile_ion_excess_total_0p1M_M: 0.0061552812808830515 mol/L
- cation_electrochemical_potential_residual_J_mol: 0 J/mol
- anion_electrochemical_potential_residual_J_mol: 0 J/mol
- gel_cation_concentration_0p2M: 0.22655644370746375 mol/L
- gel_anion_concentration_0p2M: 0.17655644370746376 mol/L
- Donnan_potential_0p2M_mV: -3.2032671848896155 mV
- ionic_osmotic_pressure_0p2M_Pa: 7716.714139453085 Pa
- coion_exclusion_ratio_0p2M: 0.8827822185373188 ratio
- low_high_osmotic_pressure_ratio: 1.9773542889364115 ratio
- cation_enrichment_factor_0p1M: 1.2807764064044151 ratio
- anion_exclusion_factor_0p1M: 0.7807764064044154 ratio

审核：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

<a id="batch-22"></a>

## 第十二辑 I165/A165 完整题干与逐步解析

本批仍为未经化学专家与跨辑模型认证的待审草稿。

### UC-ADV12-I165 57Fe Mössbauer双峰异构位移、四极分裂与自由核反冲审计

#### 题干
某假想无机铁配合物进行⁵⁷Fe Mössbauer谱学，核γ基准跃迁能量Eγ=14.4125 keV。相对同一参考源，轴对称电场梯度下观测四极双峰的多普勒速度分别v₋=−0.3500、v₊=+1.2500 mm/s；定义正速度给正能量移。⁵⁷Fe核质量采用56.9354 u、1u=1.66053906660×10⁻²⁷ kg；c=299792458 m/s、h=4.135667696×10⁻¹⁵ eV·s、1eV=1.602176634×10⁻¹⁹ J、k_B=1.380649×10⁻²³ J/K。求双峰异构位移速度和四极速度间距、每峰与中心的能移、四极超精细能量间距（eV和neV）、对应频率与温标、γ光子波长，以及自由核单次反冲能和反冲与四极能量的数量级比。逐一核查谱线中心、能量差、速度单位和无反冲吸收与自由核反冲的区别；说明四极分裂无法仅由双峰唯一反推电场梯度张量。

#### 严格解答
1. 取假想⁵⁷Fe Mössbauer核γ跃迁基准能量Eγ=14.4125 keV，两个未受磁场分裂的吸收峰观测速度v₋=−0.3500、v₊=+1.2500 mm/s；速度正方向定义为γ能量增大的多普勒正号。

2. 非相对论低速线性近似ΔE=Eγ(v/c)中必须将mm/s乘10⁻³换成m/s；本题|v|/c仅约10⁻¹²。

3. 假定双线来自轴对称电场梯度造成的激发核态I_e=3/2四极分裂，基态I_g=1/2保持简并，且吸收双峰分别对应两个等权谱线。

4. 谱线中心速度δ=(v₋+v₊)/2=0.450000000000 mm/s，为本题相对参比的异构位移。

5. 双峰速度间隔Δv=v₊−v₋=1.60000000000 mm/s；它是两谱线的全间距，不能再误乘2。

6. 两线相对参比的能移分别-1.682622382715e-8和6.009365652554e-8 eV，中心能移2.163371634920e-8 eV。

7. 四极能量间隔ΔE_Q=EγΔv/c=7.691988035269e-8 eV，即76.9198803527 neV。

8. 利用E=hν和h=4.135667696e-15 eV s，频率ν_Q=18599144.3237 Hz；用k_B=1.380649×10⁻²³ J/K得温度等效0.000892618145460 K。

9. ⁵⁷Fe原子核质量按56.9354 u，1u=1.66053906660×10⁻²⁷ kg，计算自由核吸收或发射光子时的单次动量反冲E_R=Eγ²/(2Mc²)，其中能量在SI中计算。

10. 得到自由核单次反冲E_R=0.00195833127260 eV（1.95833127260 meV）；它远大于核四极超精细能量。

11. 自由核发射与吸收各存在反冲而导致谱线中心错位，固体Mössbauer无反冲事件由整个晶格吸收动量；反冲能与无反冲比例不是同一物理量。

12. 中心检查E₋+E₊−2E_center≈6.6174e-24 eV，线差检查E₊−E₋−ΔE_Q≈1.3235e-23 eV。

13. 如果另有磁超精细场，谱线会出现多重分裂；真实四极分裂的绝对符号及电场梯度不对称参数不能只靠两峰位置判定，需增加样品几何与核矩数据。

#### 答案与单位
- isomer_shift_velocity_mm_s: 0.45 mm/s
- quadrupole_velocity_splitting_mm_s: 1.6 mm/s
- lower_line_energy_shift_eV: -1.6826223827151783e-8 eV
- upper_line_energy_shift_eV: 6.009365652554209e-8 eV
- isomer_shift_energy_eV: 2.163371634919515e-8 eV
- quadrupole_energy_splitting_eV: 7.691988035269386e-8 eV
- quadrupole_energy_neV: 76.91988035269385 neV
- quadrupole_frequency_Hz: 18599144.323682107 Hz
- quadrupole_thermal_equivalent_K: 0.0008926181454602999 K
- free_nucleus_recoil_energy_eV: 0.001958331272601192 eV
- free_nucleus_recoil_energy_meV: 1.9583312726011919 meV
- recoil_to_quadrupole_energy_ratio: 25459.364518273174 ratio
- gamma_wavelength_nm: 0.08602546289679097 nm
- line_center_residual_eV: 6.617444900424222e-24 eV
- line_splitting_residual_eV: 1.3234889800848443e-23 eV
- twice_quadrupole_splitting_eV: 1.538397607053877e-7 eV
- two_recoil_energy_eV: 0.003916662545202384 eV

### UC-ADV12-A165 强酸电导滴定的离子物料、稀释修正与分段斜率交点反演

#### 题干
某分析化学电导滴定将20.00 mL未知HCl水样（另含0.005000 mol/L不反应NaCl背景盐）以0.02000 mol/L NaOH滴定，假设等温、完全中和、离子摩尔电导率保持常数，真实待测HCl浓度0.01000 mol/L用于生成独立模拟读数。298 K时λ(H⁺)=0.03496、λ(Na⁺)=0.005011、λ(Cl⁻)=0.007635、λ(OH⁻)=0.01985 S·m²/mol，所有体积可加，κ=Σλc且c必须转成mol/m³。求滴定体积V=0、5、10、15、20 mL各点原始电导率及按初始体积校正后的电导率κ_corr=κ(V)(V_i+V)/V_i，计算等当量前后两条严格线性支的斜率和交点，并由交点独立反求HCl浓度；列明每段四种离子的物质的量，逐一检查反应物当量、溶液总正负电荷、稀释和等当量处非零最低电导率，解释现实离子迁移率并非严格常数。

#### 严格解答
1. 20.00 mL样品含HCl及0.005000 mol/L惰性NaCl，滴定剂NaOH浓度0.02000 mol/L。反应H⁺+OH⁻→H₂O瞬时定量，忽略酸碱活度偏差与温度改变。

2. 各离子电导率按κ=Σλ_i c_i求和，λ以S m²/mol、各离子c以mol/m³表示，因此以mol/L计的物质浓度需乘1000。

3. 初始HCl=0.01000 mol/L、初始NaCl=0.005000 mol/L，初始Cl⁻总量=(C_HCl+C_NaCl)V_i，而NaCl提供的Na⁺始终保留在溶液中。

4. 当滴定剂体积V小于等当量V_e，游离H⁺物质的量n_H=C_HCl V_i−C_bV，OH⁻为0；当V大于V_e则H⁺为0、n_OH=C_bV−C_HClV_i。

5. 所有V时，n_Na=C_NaCl V_i+C_bV，n_Cl=(C_NaCl+C_HCl)V_i，溶液总体积为V_i+V，逐段检查正负电荷总当量相等。

6. 等当量由酸碱摩尔守恒得V_e=C_HClV_i/C_b=10.0000000000 mL。

7. 按照λ_H=0.03496、λ_Na=0.005011、λ_Cl=0.007635、λ_OH=0.01985 S m²/mol，分别求V=0、5、10、15、20 mL原始κ=0.489180000000、0.271548000000、0.126460000000、0.179425714286、0.219150000000 S/m。

8. 由于滴定过程总体积增加，原始κ(V)的两段不是严格直线；要先对体积稀释做校正κ_corr=κ(V)(V_i+V)/V_i。

9. 校正后的五点κ_corr=0.489180000000、0.339435000000、0.189690000000、0.313995000000、0.438300000000 S/m，在等当量前、后严格分段线性。

10. 以校正数据得前段斜率-29.9490000000 (S/m)/L、后段24.8610000000 (S/m)/L，前段因高迁移率H⁺被Na⁺置换而下降，后段因OH⁻过量而上升。

11. 两段直线交点即等当量体积，斜率求交不会受起始惰性盐贡献的共同基线影响，但仍依赖题设理想稀溶液与常数摩尔电导率。

12. 反算等当量V=10.0000000000 mL，再求待测酸浓度C_HCl=C_bV_e/V_i=0.0100000000000 mol/L。

13. 当V=V_e所有H⁺和OH⁻均被消耗，κ最小值=0.126460000000 S/m，溶液仍含Na⁺和Cl⁻，不应把电导率误认为零。

14. 本题是理想强酸—强碱反应，若考虑弱酸电离、溶液离子强度导致的摩尔电导率变化、液接电位和电极极化，必须重新建模，不能用同一分段线性公式盲目拟合。

#### 答案与单位
- equivalence_volume_L: 0.01 L
- raw_conductivity_0L_S_m: 0.48918 S/m
- raw_conductivity_5mL_S_m: 0.27154799999999996 S/m
- raw_conductivity_10mL_S_m: 0.12646000000000002 S/m
- raw_conductivity_15mL_S_m: 0.17942571428571424 S/m
- raw_conductivity_20mL_S_m: 0.21915000000000004 S/m
- dilution_corrected_0L_S_m: 0.48918 S/m
- dilution_corrected_5mL_S_m: 0.33943499999999993 S/m
- dilution_corrected_10mL_S_m: 0.18969000000000003 S/m
- dilution_corrected_15mL_S_m: 0.3139949999999999 S/m
- dilution_corrected_20mL_S_m: 0.4383000000000001 S/m
- pre_equivalence_slope_S_m_per_L: -29.949000000000012 (S/m)/L
- post_equivalence_slope_S_m_per_L: 24.860999999999976 (S/m)/L
- intersection_volume_L: 0.009999999999999997 L
- recovered_HCl_M: 0.009999999999999997 mol/L
- initial_HCl_mol: 0.0002 mol
- NaOH_at_equivalence_mol: 0.0002 mol
- minimum_conductivity_at_equivalence_S_m: 0.12646000000000002 S/m
- positive_charge_equivalents_equivalence_mol: 0.00030000000000000003 mol
- initial_negative_chloride_equivalents_mol: 0.0003 mol
- corrected_drop_to_equivalence_S_m: -0.29949 S/m
- raw_15mL_over_5mL_ratio: 0.6607513746583082 ratio

<a id="batch-23"></a>

## 第十二辑 O161 / P161 完整中文题解

以下均为等待化学专家、跨辑原创性审查的编辑候选。

### UC-ADV12-O161 Karplus核磁偶合的三构象Boltzmann简并统计与双温度焓熵反演

#### 题目
某假想有机化合物RCH₂–CH₂R绕中间C–C键只有三个快速互变构象：一个anti（φ=180°）和两个镜像gauche（φ=±60°）。其³J_HH满足实验标定的Karplus式J(φ)=8cos²φ−2cosφ+2 Hz。相对单个anti构象，每一个gauche具有固定焓差ΔH=+4500.0 J/mol及内禀熵差ΔS=+8.000 J/(mol K)，注意两个gauche属于两个微态。温度分别为T₁=298.15 K、T₂=350.0 K，R=8.314462618 J/(mol K)。快交换NMR测得两温度偶合J_obs₁=7.85913006659821 Hz、J_obs₂=7.25506617762009 Hz。由Karplus、三态配分函数和Boltzmann分布求anti、每个及总gauche概率、两个J值，并只根据两温度J_obs独立反演单个gauche权重及ΔH、ΔS；进一步求构象概率混合熵及两态能隙模型的构象热容，核验简并度只计一次、概率归一、反演唯一性、升温人口趋势和物理适用条件。

#### 逐步解答
1. 研究假想有机柔性乙烷片段RCH₂–CH₂R绕C–C键的三个快速交换构象：一个anti二面角180°及两个对称gauche二面角±60°。

2. 给定标定的Karplus式³J(φ)=8cos²φ−2cosφ+2 Hz，角度以度定义并在计算三角函数时换成弧度。

3. anti时cosφ=−1，得到J_a=12 Hz；每个gauche时cosφ=+1/2，得到J_g=3 Hz。两gauche构象各自为独立统计微态。

4. 设每个gauche相对anti的焓差ΔH=+4500 J/mol、内禀熵差ΔS=+8.000 J/(mol K)，且在298.15–350 K温区均不变。

5. 每个gauche相对于单个anti微态的权重w(T)=exp(ΔS/R−ΔH/(RT))；配分权重总和Z=1+2w，不能把两个gauche简并度重复算入单微态ΔS。

6. T₁=298.15 K时w=0.426091695082，T₂=350 K时w=0.557562870272。

7. 两温度anti占据率分别p_a=0.539903340733和0.472785130847；每个gauche占据率分别0.230048329633和0.263607434577。

8. 总gauche概率分别为0.460096659267和0.527214869153，逐温度检查p_anti+2p_gauche=1。

9. 若核磁构象交换快于偶合常数分辨时间尺度，则观测J_obs=J_a p_anti+2J_g p_gauche=(J_a+2w J_g)/(1+2w)。

10. 因此两个温度观测J分别为7.85913006660、7.25506617762 Hz，升温使高焓gauche人口增加而观测J降低。

11. 由观测偶合反推单微态权重w=(J_a−J_obs)/[2(J_obs−J_g)]，两温度各有正根，前提J_g<J_obs<J_a。

12. 分别得到反推w₁=0.426091695082、w₂=0.557562870272，与正向统计权重独立对照。

13. 对lnw=ΔS/R−ΔH/(RT)做两温度差分，反演ΔH=−R(lnw₂−lnw₁)/(1/T₂−1/T₁)，再由ΔS=Rlnw₁+ΔH/T₁反演内禀熵差。

14. 得到ΔH=4500.00000000 J/mol、ΔS=8.00000000000 J/(mol K)，注意不另加Rln2至单微态熵差。

15. 按三态概率定义混合构象熵S_mix=−R[p_a ln p_a+2p_g ln p_g]，两温度分别为8.38824466382与8.78924046826 J/(mol K)。

16. 在内禀焓差不随温度变化的理想模型中，构象平均激发焓U=ΔH×P_gauche，产生正热容C=ΔH² P_gauche(1−P_gauche)/(RT²)，两温度为6.80591169235和4.95571375734 J/(mol K)。

17. 此模型未包含其它扭转最低点、溶剂氢键、核磁自旋多阶耦合、交换区间和非Karplus电子效应；真实构象势能曲线会改变拟合结果。

#### 独立数值结果
- Karplus_anti_J_Hz: 12 Hz
- Karplus_each_gauche_J_Hz: 3 Hz
- one_gauche_Boltzmann_weight_298K: 0.4260916950820318 fraction
- one_gauche_Boltzmann_weight_350K: 0.5575628702717152 fraction
- anti_population_298K: 0.5399033407331342 fraction
- anti_population_350K: 0.47278513084667684 fraction
- each_gauche_population_298K: 0.23004832963343294 fraction
- each_gauche_population_350K: 0.2636074345766616 fraction
- total_gauche_population_298K: 0.4600966592668659 fraction
- total_gauche_population_350K: 0.5272148691533232 fraction
- observed_fast_exchange_J_298K_Hz: 7.859130066598208 Hz
- observed_fast_exchange_J_350K_Hz: 7.255066177620091 Hz
- inverted_weight_298K: 0.42609169508203165 fraction
- inverted_weight_350K: 0.5575628702717152 fraction
- reconstructed_gauche_minus_anti_enthalpy_J_mol: 4500.000000000002 J/mol
- reconstructed_intrinsic_entropy_J_molK: 8.000000000000004 J/(mol K)
- gauche_minus_anti_Gibbs_298K_kJ_mol: 2.1148000000000002 kJ/mol
- gauche_minus_anti_Gibbs_350K_kJ_mol: 1.7 kJ/mol
- conformational_mixing_entropy_298K_J_molK: 8.388244663822345 J/(mol K)
- conformational_mixing_entropy_350K_J_molK: 8.789240468259308 J/(mol K)
- conformational_heat_capacity_298K_J_molK: 6.805911692347408 J/(mol K)
- conformational_heat_capacity_350K_J_molK: 4.955713757341867 J/(mol K)
- population_sum_298K: 1 fraction
- population_sum_350K: 1 fraction

### UC-ADV12-P161 12CO/13CO谐振子同位素频移与量子振动配分热容、熵及零点能

#### 题目
以理想一维量子谐振子模拟¹²C¹⁶O和¹³C¹⁶O分子的同一个伸缩振动模，假设同位素替换不改变电子势能曲率，谐振子波数随约化质量的平方根倒数变化。原子质量m(¹²C)=12.000000 u、m(¹³C)=13.003355 u、m(¹⁶O)=15.994915 u，已知¹²CO振动波数ν̃₁₂=2143.000 cm⁻¹。给定hc/k_B=1.438776877 K·cm、R=8.314462618 J/(mol K)，温度T=800.0 K。求两分子的约化质量、¹³CO振动波数与同位素红移；用振动配分函数q=1/(1−e^(−x))及x=(hc/k_B)ν̃/T求平均振动声子数、v=0和v=1的概率、零点能与含零点能的摩尔振动内能、摩尔振动热容C_V和振动熵，比较两同位素。核验振动概率归一、低温第三定律极限、高温C_V→R，并说明谐振子单模热容不是CO全部热容。

#### 逐步解答
1. 将¹²C¹⁶O与¹³C¹⁶O近似为拥有相同Born–Oppenheimer势能曲率的双原子一维谐振子，忽略转动、电子跃迁、非谐性及同位素影响键力常数的次级效应。

2. 两个同位素分子的约化质量为μ=m_Cm_O/(m_C+m_O)，其中m(¹²C)=12.000000 u、m(¹³C)=13.003355 u、m(¹⁶O)=15.994915 u。

3. 由此得μ₁₂=6.85620870790 u、μ₁₃=7.17241262806 u，较重同位素使约化质量增大。

4. 谐振子频率ν̃∝μ^(−1/2)，以¹²CO振动波数ν̃₁₂=2143.000 cm⁻¹为参照，预测ν̃₁₃=ν̃₁₂√(μ₁₂/μ₁₃)。

5. 算得¹³CO波数2095.22926989 cm⁻¹，相对于¹²CO红移47.7707301087 cm⁻¹，位移不等于两个同位素的质量百分比差。

6. 温度T=800.0 K，定义θ_v=(hc/k_B)ν̃、x=θ_v/T，给定hc/k_B=1.438776877 K·cm。

7. 两个同位素x分别3.85412355926、3.76820928192，反映较重¹³CO热激发更容易。

8. 相对于零点能的振动配分函数q_v=Σ_{v=0}∞exp(−xv)=1/(1−exp(−x))，其态概率P_v=(1−e^(−x))e^(−vx)。

9. ¹²CO基振动态占据P₀=0.978807831147、第一激发态P₁=0.0207430608325，¹³CO两者分别0.976906619984、0.0225600758155。

10. 平均声子数n̄=1/(e^x−1)；两个同位素分别为n̄₁₂和n̄₁₃，且n̄₁₃>n̄₁₂。

11. 含零点能的摩尔振动内能U_v=Rθ_v(1/2+n̄)，各同位素零点能E_ZP=Rθ_v/2。

12. ¹²CO与¹³CO零点能分别12817.9865035和12532.2540845 J/mol，差值285.732418943 J/mol。

13. 含零点能的摩尔振动内能分别13373.0309682和13124.7612907 J/mol，差异仅来自谐振子频率变化。

14. 从配分函数对温度求导，得C_{V,v}=R x² n̄(n̄+1)；仅温度升高后的激发能贡献热容，零点能本身不产生热容。

15. 摩尔振动热容分别2.73190747937、2.85683798750 J/(mol K)，热力学高温极限均为R。

16. 摩尔振动熵S_v=R[x n̄−ln(1−e^(−x))]，两同位素分别求得并检查S_v≥0及T→0的零熵极限。

17. 实际CO振动非谐性、同位素电子振动修正及真实分子多自由度会改变精细谱线位置；此处数值是单模谐振子的理想预测，不可解释为分子全部热容或总熵。

#### 独立数值结果
- 12CO_reduced_mass_u: 6.856208707902847 u
- 13CO_reduced_mass_u: 7.17241262805764 u
- 12CO_vibrational_wavenumber_cm_inv: 2143 cm^-1
- 13CO_vibrational_wavenumber_cm_inv: 2095.229269891266 cm^-1
- isotope_wavenumber_shift_cm_inv: 47.770730108733915 cm^-1
- isotope_frequency_ratio: 0.977708478717343 ratio
- 12CO_oscillator_x: 3.85412355926375 dimensionless
- 13CO_oscillator_x: 3.7682092819164326 dimensionless
- 12CO_mean_phonon_number: 0.021651000511890138 fraction
- 13CO_mean_phonon_number: 0.023639291149919472 fraction
- 12CO_ground_vib_population: 0.9788078311467986 fraction
- 13CO_ground_vib_population: 0.9769066199839165 fraction
- 12CO_first_excited_population: 0.020743060832498814 fraction
- 13CO_first_excited_population: 0.0225600758155163 fraction
- 12CO_zero_point_energy_J_mol: 12817.986503460625 J/mol
- 13CO_zero_point_energy_J_mol: 12532.254084517921 J/mol
- zero_point_energy_12_minus_13_J_mol: 285.7324189427036 J/mol
- 12CO_vibrational_U_J_mol: 13373.03096815628 J/mol
- 13CO_vibrational_U_J_mol: 13124.761290655295 J/mol
- 12CO_vibrational_CV_J_molK: 2.73190747937225 J/(mol K)
- 13CO_vibrational_CV_J_molK: 2.8568379875012795 J/(mol K)
- 12CO_vibrational_S_J_molK: 0.8719009268420366 J/(mol K)
- 13CO_vibrational_S_J_molK: 0.9348948568577617 J/(mol K)
- 12CO_thermal_partition_relative_ground: 1.0216510005118902 dimensionless
- 13CO_thermal_partition_relative_ground: 1.0236392911499195 dimensionless
- 12CO_two_lowest_population_sum: 0.9995508919792974 fraction
- 12_minus_13_total_vib_energy_J_mol: 248.26967750098447 J/mol

<a id="batch-24"></a>

## 第十二辑 A166/P162 完整解答

此处仅为待专家审核稿件。

### UC-ADV12-A166 Karl Fischer库仑水分的空白漂移、法拉第效率与回收不确定度

#### 完整题干
某实验用电生碘Karl Fischer库仑法测定溶剂微量水，每1 mol水消耗1 mol I₂，2I⁻→I₂+2e⁻，有效法拉第效率η=0.9750。样品质量0.5000 g，模拟真实水375.0 μg，电解150.0 s，恒定空白水漂移0.2000 μg/s；F=96485.33212 C/mol，M(H₂O)=18.01528 g/mol。样品实测电量4.44939213522333 C。之后加入200.0 μg水标准，另积分80.0 s测得加标电量2.37300913878578 C。求空白电量、净样品水质量、样品水ppm、有效电生碘摩尔数、平均电流、加标水回收率。假定电量标准不确定度0.01000 C、空白漂移速率不确定度0.01000 μg/s且独立，计算样品水质量与ppm的合成标准不确定度；审核电子/碘/水计量、空白水衡算及实验局限。

#### 分步解答
1. 电极反应2I⁻→I₂+2e⁻，每摩尔水参与Karl Fischer反应需一摩尔I₂；故两摩尔电子对应一摩尔有效反应水。

2. 已校准有效电生碘法拉第效率η=0.9750，总水当量为m_eq=η Q M_H₂O/(2F)，F=96485.33212 C/mol、水摩尔质量18.01528 g/mol。

3. 假想样品0.5000 g含375.0 μg水，积分150.0 s，仪器以恒定背景湿气漂移0.2000 μg/s；原始电量必须包含样品水与漂移。

4. 样品测得积分电量4.44939213522 C，其中漂移等效电量0.329584602609 C。

5. 未经漂移扣除总水当量为405.000000000 μg，空白水为30.0000000000 μg。

6. 净样品水质量m_sample=ηQ M/(2F)−drift×time=375.000000000 μg。

7. 除以0.5000 g样品质量得到质量分数ppm=750.000000000 mg/kg，平均电生电流Q/t=0.0296626142348 A。

8. 用200.0 μg独立水标准作后加标，在80.0 s内积分增量电量，期间同样发生空白水漂移。

9. 得到加标电量2.37300913879 C，80 s空白水16.0000000000 μg。

10. 经效率和漂移修正标准水回收200.000000000 μg，回收率100.000000000%。

11. 假设电量的独立标准不确定度σ_Q=0.01000 C，漂移速率独立标准不确定度σ_d=0.01000 μg/s，称重与效率不确定度暂忽略。

12. 按一阶误差传播，σ_m²=[η M σ_Q/(2F)]²+(tσ_d)²，不能把两个标准差直接算术相加。

13. 合成标准不确定度σ_m=1.75457426296 μg，浓度标准不确定度3.50914852591 ppm。

14. 本模型假设氧化副反应与电子利用效率可独立校准，真实水分测试还可能受样品副反应、阳极膜、反应终点不稳定、湿气速率漂移等影响。

#### 结果与单位
- sample_total_charge_C: 4.44939213522333 C
- blank_drift_charge_C: 0.3295846026091356 C
- sample_blank_corrected_charge_C: 4.119807532614194 C
- effective_iodine_mol: 0.000022480916200025754 mol
- uncorrected_water_ug: 405 ug
- sample_blank_water_ug: 29.999999999999996 ug
- corrected_sample_water_ug: 375 ug
- sample_water_mass_ppm: 750 ppm
- average_current_A: 0.0296626142348222 A
- standard_spike_charge_C: 2.3730091387857764 C
- standard_period_blank_water_ug: 16 ug
- recovered_spike_water_ug: 200 ug
- standard_recovery_percent: 100 percent
- water_mass_combined_uncertainty_ug: 1.754574262956273 ug
- water_ppm_combined_uncertainty: 3.509148525912546 ppm
- sample_water_fraction: 0.00075 fraction
- total_electron_equivalent_mol: 0.00004496183240005151 mol
- blank_electrolysis_fraction: 0.07407407407407408 fraction

### UC-ADV12-P162 Bell–Evans动态力谱的断裂概率分布与加载速率效应

#### 完整题干
单分子动力学实验在298.15 K用匀速加载f(t)=rt拉断某化学键，零力解离速率k₀=0.1000 s⁻¹、过渡态距离x‡=0.5000 nm，受力Bell速率k(f)=k₀exp(fx‡/(kBT))，kB=1.380649×10⁻²³ J/K、1 pN·nm=10⁻²¹ J。两种加载速率r₁=10.00、r₂=40.00 pN/s。推导随力的生存概率S(f)、断裂力概率密度p(f)及归一，给出各加载速度下最可能断裂力及中位断裂力；在10 pN/s下计算15和30 pN时的生存与累计断裂概率，以及峰位处解离速率和瞬时平均寿命。验证四倍加载速率使最可能断裂力增加(kBT/x‡)ln4，判断峰位从内部退化到f=0的条件，并区分瞬时化学反应速率、概率密度和累计概率。

#### 分步解答
1. 单分子不可逆键解离采用Bell–Evans模型，载荷f=rt从0匀速增加，零力解离常数k₀=0.1000 s⁻¹，过渡态距离x‡=0.5000 nm。

2. 给定k_B=1.380649×10⁻²³ J/K及T=298.15 K，用1 pN nm=10⁻²¹ J把热能kBT换算为pN nm。

3. 受力依赖速率k(f)=k₀exp[fx‡/(kBT)]，定义α=x‡/(kBT)和a=k₀/(rα)，分别为力倒数和无量纲量。

4. 计算kBT=4.11640499350 pN nm、特征力kBT/x‡=8.23280998700 pN，r=10 pN/s时a=0.0823280998700。

5. 令S(f)表示加载至力f仍保持结合的生存概率，因df/dt=r，满足dS/df=−[k(f)/r]S。

6. 积分并用初始条件S(0)=1得到S(f)=exp[−a(exp(αf)−1)]，对应断裂力概率密度p(f)=k(f)S(f)/r。

7. 对f≥0，积分∫p(f)df=S(0)−S(∞)=1，生存概率与累计断裂概率之和严格等于1。

8. 求p(f)峰值条件dlnp/df=α−k(f)/r=0，得到f*=(1/α)ln(rα/k₀)，仅rα>k₀时是正的内点极大值。

9. r=10 pN/s时最可能断裂力f*=20.5576788802 pN，峰值处解离率k(f*)=1.21465210734 s⁻¹。

10. 中位断裂力由S(f50)=1/2给出f50=(1/α)ln[1+(ln2)/a]，不等于最可能断裂力。

11. r=10 pN/s时中位力=18.4642467691 pN，15 pN时生存概率0.652597052242、30 pN时生存概率0.0466010524788。

12. 将加载速度升为40 pN/s，最可能力增至31.9707769413 pN，位移11.4130980611 pN，等于(kBT/x‡)ln4。

13. 相应新中位力为29.1942481681 pN；S(0)=1且断裂力概率密度的单位为pN⁻¹而非s⁻¹。

14. 当rα≤k₀时概率密度峰位于f=0边界；真实多势垒、反复再结合、反应坐标强制改变及非恒定载荷需重新建模。

#### 结果与单位
- thermal_energy_pN_nm: 4.116404993500001 pN nm
- Bell_force_scale_pN: 8.232809987000001 pN
- dimensionless_ramp_factor: 0.08232809987000002 ratio
- most_probable_force_10pN_per_s: 20.557678880191624 pN
- median_force_10pN_per_s: 18.464246769116432 pN
- most_probable_force_40pN_per_s: 31.970776941341246 pN
- median_force_40pN_per_s: 29.19424816810783 pN
- mode_shift_pN: 11.413098061149622 pN
- hazard_rate_at_first_mode_s: 1.2146521073352203 s^-1
- hazard_lifetime_at_mode_s: 0.8232809987000002 s
- bond_survival_at_15pN: 0.6525970522421276 fraction
- rupture_cdf_at_15pN: 0.3474029477578724 fraction
- bond_survival_at_30pN: 0.046601052478810516 fraction
- rupture_cdf_at_30pN: 0.9533989475211895 fraction
- survival_at_mode: 0.39944791404722274 fraction
- rupture_density_at_zero_force_pN_inv: 0.01 pN^-1
- rupture_density_at_mode_pN_inv: 0.0485190250568117 pN^-1
- factor_four_loading_analytical_shift_pN: 11.413098061149622 pN
- force_zero_rupture_cdf: 0 fraction

<a id="batch-25"></a>

## 第十二辑 I166/O162 完整中文解析

自动机器复核不代替专家科学性及原创性审核，所有记录禁止发表。

### UC-ADV12-I166 高压NiII氨配体取代的活化体积、反应体积和详细平衡

#### 题目
某假想无机配合物在水中只发生可逆单氨配体取代Ni(H₂O)₆²⁺+NH₃⇌Ni(H₂O)₅(NH₃)²⁺+H₂O。温度298.15 K，NH₃自由浓度由储液池固定在0.1000 mol/L，Ni总浓度0.01000 mol/L。参考压力下速率常数k_f0=2.000 L/(mol s)、k_r0=0.08000 s⁻¹；升压ΔP=100.0 MPa时正向、逆向活化体积分别ΔV‡_f=+10.00、ΔV‡_r=+4.000 cm³/mol，假设在该压力范围内恒定，速率压力依赖k_i(P)=k_i(P₀)exp[−ΔV‡_iΔP/(RT)]，R=8.314462618 J/(mol K)。求两速率压力比、高压速率、两个压力下结合常数K=k_f/k_r、反应体积与标准反应自由能及其压力差。用热力学dlnK/dP=−ΔV_rxn/(RT)独立核验详细平衡；从全部Ni初始为水合态的条件，求各压力平衡结合分数、结合态浓度、弛豫时间及0.5000 s时结合态浓度。核验Ni原子数、配体计量、电荷守恒及固定NH₃浓度近似。

#### 分步解析
1. 考虑假想八面体Ni(II)水合配合物Ni(H₂O)₆²⁺+NH₃⇌Ni(H₂O)₅(NH₃)²⁺+H₂O，在水中只有这两个Ni物种，Ni形式价始终+II。

2. 以自由NH₃浓度c_L=0.1000 mol/L为恒定缓冲储库，Ni总分析浓度0.01000 mol/L，假设溶液体积与离子活度系数在比较压力下不变。

3. 298.15 K、参考压力P₀时正向二级速率k_f0=2.000 L/(mol s)、逆向一级速率k_r0=0.08000 s⁻¹，因此条件结合常数K₀=k_f0/k_r0。

4. 压力从P₀升高ΔP=100.0 MPa，Eyring活化体积ΔV‡_f=+10.00 cm³/mol、ΔV‡_r=+4.000 cm³/mol，取常数。

5. 压力速率关系k_i(P)/k_i(P₀)=exp[−ΔV‡_iΔP/(RT)]；cm³/mol要换成10⁻⁶ m³/mol才能和Pa相乘得到J/mol。

6. 算得正向速率比0.668047863906，逆向速率比0.850987208056；高压速率分别1.33609572781 L/(mol s)与0.0680789766445 s⁻¹。

7. 参考及高压结合常数分别K₀=25.0000000000、K₁=19.6256729121 L/mol，两者比值0.785026916482。

8. 正逆过渡态的活化体积差给反应体积ΔV_rxn=ΔV‡_f−ΔV‡_r=+6.000 cm³/mol，不应把正逆活化体积直接相加。

9. 热力学压力响应dlnK/dP=−ΔV_rxn/(RT)，积分给K₁/K₀=exp[−ΔV_rxn ΔP/(RT)]，须与k_f/k_r逐点一致。

10. 标准反应自由能G°=−RT ln(K c°)，c°=1 mol/L，参考与高压分别-7.97945485333及-7.37945485333 kJ/mol；差600.000000000 J/mol。

11. 在任意压力下把结合视为一阶正向a=k_f c_L及一阶逆向b=k_r，平衡结合分数θ=a/(a+b)=Kc_L/(1+Kc_L)。

12. 两压力下平衡结合分数0.714285714286、0.662454924495，相应结合态Ni浓度0.00714285714286、0.00662454924495 mol/L。

13. 若初始Ni全部是水合态，结合态时间演化为[B](t)=N_total θ[1−exp(−(a+b)t)]，总Ni无流失。

14. t=0.5s时两压力结合态浓度分别0.000933155461437和0.000635467775643 mol/L，弛豫时间分别3.57142857143和4.95813968045 s。

15. 逐点核对K=a/(bc_L)=k_f/k_r，Ni总浓度[水合态]+[结合态]不变；前后配体NH₃与水交换，金属电荷保持+2且不发生电子转移。

16. 固定NH₃储库及常活化体积是理想化约束，实际高压下介电常数、溶剂化、自由NH₃酸碱平衡、活度及扩散速率均可能改变，不能把此结果直接当作真实Ni(II)实验速率。

#### 数值结果
- high_pressure_forward_rate_ratio: 0.6680478639060341 ratio
- high_pressure_reverse_rate_ratio: 0.8509872080559372 ratio
- high_pressure_forward_rate_L_mol_s: 1.3360957278120682 L/(mol s)
- high_pressure_reverse_rate_s: 0.06807897664447497 s^-1
- ambient_binding_K_L_mol: 25 L/mol
- high_pressure_binding_K_L_mol: 19.625672912057507 L/mol
- binding_constant_pressure_ratio: 0.7850269164823003 ratio
- reaction_volume_cm3_mol: 6.000000000000001 cm3/mol
- standard_binding_G_at_reference_kJ_mol: -7.979454853327147 kJ/mol
- standard_binding_G_high_pressure_kJ_mol: -7.3794548533271485 kJ/mol
- pressure_induced_standard_G_change_J_mol: 599.9999999999991 J/mol
- ambient_equilibrium_bound_fraction: 0.7142857142857143 fraction
- high_pressure_equilibrium_bound_fraction: 0.6624549244945572 fraction
- ambient_equilibrium_bound_Ni_M: 0.0071428571428571435 mol/L
- high_pressure_equilibrium_bound_Ni_M: 0.006624549244945572 mol/L
- ambient_bound_Ni_after_0p5s_M: 0.0009331554614371015 mol/L
- high_pressure_bound_Ni_after_0p5s_M: 0.0006354677756434706 mol/L
- ambient_relaxation_time_s: 3.571428571428571 s
- high_pressure_relaxation_time_s: 4.958139680450624 s
- ambient_detailed_balance_K_check: 25 L/mol
- high_pressure_detailed_balance_K_check: 19.6256729120575 L/mol
- ambient_Ni_inventory_check_M: 0.01 mol/L
- high_pressure_Ni_inventory_check_M: 0.01 mol/L

### UC-ADV12-O162 半胱氨酸S/N竞争烷基化的酸碱物种分数、化学选择性与pH反演

#### 题目
在一假想有机半胱氨酸衍生物中同时存在一个硫醇SH（条件pK_a=8.300）和一个铵型氨基NH₃⁺（条件pK_a=9.500），活性亲核体分别为RS⁻与RNH₂。缓冲pH分别固定为8.500和10.000，忽略两个酸碱位点的耦合，且半胱氨酸衍生物总浓度0.01000 mol/L在反应中维持不变。加入0.001000 mol/L单官能烷基化试剂E后，反应只能生成互斥的S-烷基化或N-烷基化产物，二级速率常数k_S=100.0、k_N=20.00 L/(mol s)，反应时间t=2.000 s。求两pH下RS⁻和游离RNH₂活性分数、竞争伪一级速率、E转化率、两产物浓度及S/N比。反过来求使S/N表观选择性恰好等于20的唯一pH，并检查每个pH下E物料守恒、酸碱物种分布、目标pH区间和忽略二次烷基化的适用边界。

#### 分步解析
1. 假设有机半胱氨酸样底物具有一个硫醇RSH与一个氨基RNH₃⁺，两者分别可去质子化为亲核硫负离子RS⁻和中性胺RNH₂。

2. 题设条件pK_a(SH)=8.300、pK_a(NH₃⁺)=9.500，且酸碱位点之间的耦合已忽略；缓冲pH不因少量反应发生变化。

3. 各反应活性分数为f_S=1/[1+10^(pK_a,S−pH)]、f_N=1/[1+10^(pK_a,N−pH)]，而非全部含硫或氨基底物都处于活性形态。

4. 两种活性位点对同一种单官能烷基化试剂E竞争生成互斥的单次S-烷基化或N-烷基化产物，不发生双烷基化或产物重排。

5. 半胱氨酸样底物总浓度C_Nu=0.01000 M维持恒定远大于E初始0.001000 M，二级速率常数k_S=100.0、k_N=20.00 L/(mol s)。

6. 所以对E的两条平行伪一级速率a_S=k_SC_Nu f_S、a_N=k_NC_Nu f_N，E的总消失速率常数λ=a_S+a_N。

7. pH=8.5时硫负离子分数0.613136820153、游离胺分数0.0909090909091，对应速率a_S=0.613136820153和a_N=0.0181818181818 s⁻¹。

8. pH=8.5时产物比S/N=a_S/a_N=33.7225251084，即使k_S/k_N固定为5，酸碱物种分布也显著改变表观选择性。

9. 积分平行通道得[E](t)=E₀e^(−λt)，[P_S]=E₀(1−e^(−λt))a_S/λ、[P_N]=E₀(1−e^(−λt))a_N/λ。

10. 反应t=2s后，pH8.5消耗分数0.717093062074，S/N产物分别0.000696440962037和0.0000206521000369 mol/L，剩余E=0.000282906937926 mol/L。

11. 在pH=10时，硫负离子分数0.980437696127、中性胺分数0.759746926648，S/N竞争比降至6.45239659246。

12. pH10时2秒后S/N两产物浓度为0.000775897074509和0.000120249439629 mol/L，剩余E=0.000103853485861 mol/L。

13. 对目标选择性S/N=20，设y=10^(−pH)、r=20/(k_S/k_N)=4，利用r=(1+10^pKaN y)/(1+10^pKaS y)唯一反演y=(r−1)/(10^pKaN−r×10^pKaS)。

14. 得到pH*=8.89655794962，回代S/N=20.0000000000，位于两个测试pH之间。

15. 任意pH下检查[P_S]+[P_N]+[E]=E₀以及两种产物比等于两速率之比；真实半胱氨酸常存在电荷和构象耦合、二次烷基化、硫醇氧化及水解竞争，需要改用完整物种动力学。

#### 数值结果
- thiolate_fraction_pH8p5: 0.6131368201531427 fraction
- neutral_amine_fraction_pH8p5: 0.09090909090909091 fraction
- S_path_pseudo_firstorder_rate_pH8p5: 0.6131368201531427 s^-1
- N_path_pseudo_firstorder_rate_pH8p5: 0.018181818181818184 s^-1
- electrophile_disappearance_rate_pH8p5: 0.6313186383349609 s^-1
- S_over_N_product_ratio_pH8p5: 33.72252510842284 ratio
- electrophile_conversion_pH8p5: 0.7170930620739996 fraction
- S_alkylated_product_pH8p5_M: 0.0006964409620370686 mol/L
- N_alkylated_product_pH8p5_M: 0.000020652100036931075 mol/L
- remaining_electrophile_pH8p5_M: 0.0002829069379260004 mol/L
- thiolate_fraction_pH10: 0.9804376961274204 fraction
- neutral_amine_fraction_pH10: 0.7597469266479578 fraction
- electrophile_disappearance_rate_pH10: 1.1323870814570118 s^-1
- S_over_N_product_ratio_pH10: 6.45239659246245 ratio
- electrophile_conversion_pH10: 0.8961465141387763 fraction
- S_alkylated_product_pH10_M: 0.000775897074509495 mol/L
- N_alkylated_product_pH10_M: 0.00012024943962928149 mol/L
- remaining_electrophile_pH10_M: 0.00010385348586122367 mol/L
- inverse_pH_for_selectivity20: 8.896557949621954 pH
- selectivity_ratio_at_inverse_pH: 20 ratio
- electrophile_inventory_pH8p5_M: 0.001 mol/L
- electrophile_inventory_pH10_M: 0.0010000000000000002 mol/L
- product_ratio_consistency_pH8p5: 33.72252510842285 ratio
- product_ratio_consistency_pH10: 6.452396592462451 ratio

<a id="batch-26"></a>

## 第十二辑第二十六批：I167 / A167 / O163 / P163 完整中文解析

四科各新增一道高阶综合待审题。独立机器答案见 `scripts/check-advanced-authored-v12.mjs`；化学科学性、模型原创性和正式发稿均等待专家审批。

### UC-ADV12-I167 双步配位平衡的配体耗竭、统计方差与温度耦合反演

#### 题目
一假想二价八面体金属配合物M(H₂O)₆²⁺可依次被中性单齿配体L取代，只有M、ML、ML₂三种状态，逐步平衡M+L⇌ML、ML+L⇌ML₂（所省略的配位水以水活度1处理），且不存在更高配位数、沉淀与水解。金属总分析浓度C_M=0.01000 mol/L，配体总分析浓度C_L=0.03000 mol/L。在T₀=298.15 K，浓度型逐步形成常数K₁=100.0 L/mol、K₂=25.00 L/mol，条件反应焓ΔH₁=−20.00 kJ/mol、ΔH₂=−10.00 kJ/mol；忽略热容变化，Kᵢ(T)=Kᵢ(T₀)exp{−ΔHᵢ/R(1/T−1/T₀)}，R=8.314462618 J/(mol K)。分别在298.15 K和323.15 K求自由L、各金属物种浓度、占据分数、平均结合配体数、金属和配体双重守恒。进一步求基准温度每金属的结合数方差，以及配体结合量对自由配体浓度的导数；说明非线性物料方程唯一正根的理由和升温的影响。

#### 分步解析
1. 明确三种金属中心的形式氧化态皆为+II；每结合一个中性L便取代一个配位水，金属、配体和电荷的计量由题设反应维持。

2. 令自由配体浓度x=[L]，自由金属浓度m=[M]；按逐步形成常数[ML]=K₁mx、[ML₂]=K₁K₂mx²，不能将K₂误作总体β₂。

3. 由金属守恒C_M=m(1+K₁x+K₁K₂x²)，定义单中心配位配分函数Z=1+K₁x+K₁K₂x²。

4. 于是p₀=1/Z、p₁=K₁x/Z、p₂=K₁K₂x²/Z，三个占据分数之和严格为1。

5. 配体守恒必须包含游离及两种结合态：C_L=x+C_M(p₁+2p₂)，其中ML₂贡献两份L。

6. 将x限制在0<x<C_L，设F(x)=x+C_M⟨n⟩−C_L；F(0)=−C_L<0，F(C_L)>0。

7. 在x>0有d⟨n⟩/dx=Var(n)/x≥0，故F'(x)=1+C_M Var(n)/x>0，正根唯一；使用保界二分法而非选取任意三次方程根。

8. 在298.15 K求得自由配体x=0.020000000000 mol/L，配分函数计算的三金属物种依次为0.0025000000000、0.0050000000000、0.0025000000000 mol/L。

9. 三金属占据分数p₀,p₁,p₂依次为0.25000000000、0.50000000000、0.25000000000，平均结合数⟨n⟩=1.0000000000。

10. 基准温度结合配体浓度C_M⟨n⟩=0.010000000000 mol/L，自由加结合总量为0.030000000000 mol/L；三金属之和为0.010000000000 mol/L。

11. 平均结合数的统计方差为Var(n)=p₁+4p₂−(p₁+2p₂)²，物理上量化单金属占据数的涨落。

12. 方差为0.50000000000，响应斜率d(C_M⟨n⟩)/dx=C_M Var(n)/x=0.25000000000（浓度比，无量纲）。

13. 通过范特霍夫关系更新两个逐步常数；对放热形成反应，升温后的K₁与K₂均降低，不得保持298 K的常数不变。

14. 在323.15 K：K₁=53.571053456、K₂=18.298062305 L/mol，重新解配体耗竭方程得x=0.021984616252 mol/L。

15. 升温后的M、ML、ML₂浓度依次为0.0037714286963、0.0044417588591、0.0017868124446 mol/L，平均配位数0.80153837482，束缚L=0.0080153837482 mol/L。

16. 升温后总配体回代0.030000000000 mol/L、总金属0.010000000000 mol/L；ML₂占据分数比0.71472497782，随放热结合受抑而降低。

17. 模型以浓度常数、理想稀溶液与固定反应焓为条件；真实体系的配体质子化、金属水解、活度及氧化态改变均需另建平衡方程。

#### 结果与单位
- K1_298_L_mol: 100 L/mol
- K2_298_L_mol: 25 L/mol
- free_L_298_M: 0.020000000000000004 mol/L
- free_M_298_M: 0.0024999999999999996 mol/L
- ML_298_M: 0.005 mol/L
- ML2_298_M: 0.0025000000000000005 mol/L
- fraction_M_298: 0.24999999999999994 fraction
- fraction_ML_298: 0.5 fraction
- fraction_ML2_298: 0.25000000000000006 fraction
- mean_occupancy_298: 1 ratio
- bound_L_298_M: 0.01 mol/L
- total_L_inventory_298_M: 0.030000000000000006 mol/L
- occupancy_variance_298: 0.5000000000000002 variance
- d_bound_L_d_free_L_298: 0.2500000000000001 ratio
- K1_323_L_mol: 53.57105345631589 L/mol
- K2_323_L_mol: 18.29806230457133 L/mol
- free_L_323_M: 0.021984616251757245 mol/L
- free_M_323_M: 0.003771428696310645 mol/L
- ML_323_M: 0.004441758859135956 mol/L
- ML2_323_M: 0.001786812444553399 mol/L
- mean_occupancy_323: 0.8015383748242754 ratio
- bound_L_323_M: 0.008015383748242753 mol/L
- total_L_inventory_323_M: 0.03 mol/L
- relative_ML2_fraction_323_over_298: 0.7147249778213595 ratio
- reaction_enthalpy1_kJ_mol: -20 kJ/mol
- reaction_enthalpy2_kJ_mol: -10 kJ/mol
- metal_inventory_298_M: 0.01 mol/L
- metal_inventory_323_M: 0.01 mol/L

### UC-ADV12-A167 铜稳定同位素稀释质谱的探测器死时间与质量歧视联合反演

#### 题目
用同位素稀释质谱(IDMS)测定10.00 mL未知铜溶液中的铜含量。样品中⁶³Cu与⁶⁵Cu原子分数分别0.6915、0.3085；加入2.000 μmol富集⁶⁵Cu同位素稀释剂，其⁶³Cu与⁶⁵Cu原子分数分别0.0500、0.9500。单同位素离子计数器为非延长型死时间模型r_obs=r_true/(1+τ r_true)，τ=50.0 ns；在完成死时间修正后，仪器对⁶⁵Cu/⁶³Cu的质量歧视系数α=1.0200，即测得真实计数比H_true/L_true=αR_mix。混合物两质量通道原始计数速率分别L_obs=392156.862745098 s⁻¹、H_obs=516456.806790183 s⁻¹，已扣除背景和同量异位素干扰。取Cu平均摩尔质量63.546 g/mol。求两通道死时间修正计数率、原始及校正同位素比、样品铜物质的量与mg/L。若两通道速率标准不确定度分别300 s⁻¹，α标准不确定度0.0020，三者独立且τ等其余参数准确，求一阶传播的同位素比、铜物质的量与浓度标准不确定度。证明同位素质量守恒，并检查富集剂和样品比例合理性。

#### 分步解析
1. 设样品铜量n、加入的富集剂n_s=2.000 μmol，样品两同位素分数(f₆₃,f₆₅)=(0.6915,0.3085)，稀释剂为(g₆₃,g₆₅)=(0.0500,0.9500)。

2. 元素总摩尔数及两同位素摩尔数均守恒；混合真实丰度比R=(nf₆₅+n_sg₆₅)/(nf₆₃+n_sg₆₃)，不能直接把观测计数比当作R。

3. 非延长型死时间计数模型r_obs=r_true/(1+τr_true)，严格反演为r_true=r_obs/(1−τr_obs)，必须确认τr_obs<1。

4. 这里τ=50 ns且观测计数速率分别392156.862745098与516456.806790183 s⁻¹；两者的τr_obs均低于0.03，逆变换没有极点。

5. 死时间校正后⁶³Cu计数率400000.00000 s⁻¹、⁶⁵Cu计数率530146.70039 s⁻¹；对应修正倍数1.0200000000、1.0265073350。

6. 未校正的原始计数比H_obs/L_obs=1.3169648573，先死时间再以质量歧视α=1.0200校正，真实R=1.2993791676。

7. 令D=R f₆₃−f₆₅，代数移项解得n=n_s(g₆₅−R g₆₃)/D；若D≤0或n<0，表明测量或模型假设不成立。

8. 反演得到样品铜n=3.0000000000 μmol，换算铜质量m=n×63.546 g/mol=0.19063800000 mg。

9. 样品体积为10.00 mL，因此浓度c=19.063800000 mg/L 或0.00030000000000 mol/L，不得将稀释剂加入量算入原样品浓度。

10. 分别从原样品及富集剂重构混合物总⁶³Cu=2.1745000000 μmol、⁶⁵Cu=2.8255000000 μmol，二者之比1.2993791676，与校正R一致。

11. 对H_obs、L_obs、α分别求偏导：∂R/∂H_obs=[αL_true(1−τH_obs)²]⁻¹、∂R/∂L_obs=−H_true/[αL_true²(1−τL_obs)²]、∂R/∂α=−R/α。

12. 三项独立的一阶标准不确定度平方和为u(R)²=(∂R/∂H_obs·300)²+(∂R/∂L_obs·300)²+(∂R/∂α·0.0020)²。

13. 据此同位素比标准不确定度u(R)=0.0028494918597；不能将两个计数通道简单相减，也不可忽略质量歧视的贡献。

14. 由逆式微分得dn/dR=n_s(g₆₃f₆₅−g₆₅f₆₃)/(Rf₆₃−f₆₅)²，u(n)=|dn/dR|u(R)。

15. 求得u(n)=0.010501699529 μmol、u(c)=0.066734099830 mg/L；该值只覆盖题设三个独立的不确定度来源。

16. 核查n+n_s等于两铜同位素物质的量之和，两个通道响应总量的比例可任意缩放而不改变丰度反演；真实分析仍需校正化学回收、空白、同量异位素及非线性死时间模型偏差。

#### 结果与单位
- low_mass_observed_rate_s: 392156.862745098 s^-1
- high_mass_observed_rate_s: 516456.806790183 s^-1
- low_mass_corrected_rate_s: 400000 s^-1
- high_mass_corrected_rate_s: 530146.7003908947 s^-1
- uncorrected_count_ratio: 1.3169648573149668 ratio
- corrected_isotope_ratio: 1.299379167624742 ratio
- sample_copper_umol: 2.9999999999999973 umol
- sample_copper_mg: 0.19063799999999984 mg
- sample_copper_mg_L: 19.063799999999983 mg/L
- sample_copper_mol_L: 0.00029999999999999976 mol/L
- mixture_63Cu_umol: 2.174499999999998 umol
- mixture_65Cu_umol: 2.825499999999999 umol
- reconstructed_isotope_ratio: 1.2993791676247421 ratio
- ratio_standard_uncertainty: 0.0028494918596719473 ratio
- sample_amount_standard_uncertainty_umol: 0.010501699529414469 umol
- sample_concentration_standard_uncertainty_mg_L: 0.06673409982961719 mg/L
- low_mass_deadtime_correction_factor: 1.02 ratio
- high_mass_deadtime_correction_factor: 1.0265073350195446 ratio
- mixture_65Cu_fraction: 0.5651000000000002 fraction
- total_copper_mol: 0.000004999999999999998 mol

### UC-ADV12-O163 E/Z光致异构与暗反应竞争的光稳态、量子产率和关灯动力学

#### 题目
某假想有机偶氮衍生物仅有E、Z两种互变异构体，溶液足够稀，忽略内滤效应、光漂白与副反应。波长固定且光通量Φ=1.000×10¹⁷ photons/(cm² s)，E、Z的单分子有效吸收截面分别σ_E=5.000×10⁻¹⁸、σ_Z=2.000×10⁻¹⁸ cm²，光异构化量子产率分别φ_E→Z=0.4000、φ_Z→E=0.2500。独立测得黑暗中E→Z热速率k_EZ,d=0.01000 s⁻¹、Z→E热速率k_ZE,d=0.04000 s⁻¹。总异构体浓度C=0.002000 mol/L，起初全为E。照光10.00 s后关灯，再黑暗放置20.00 s。求各方向光速率与照光时总速率、光照下Z稳态分数和时间常数、照光终点E/Z浓度、关灯后Z分数和浓度、黑暗稳态与半衰弛豫时间。若仅知道照光稳态Z分数及光照弛豫时间和暗反应率，反推出两量子产率。分别检查E/Z物料守恒、单位与关灯瞬间状态连续性。

#### 分步解析
1. 溶液只存在E与Z，定义Z分数z(t)=[Z]/C，E分数恒为1−z；C=0.002000 mol/L始终守恒。

2. 在光学薄层和均匀光通量近似下，每个分子的光致跃迁一阶速率是k_photo=Φσφ，吸收截面cm²与光通量photons/(cm² s)相消。

3. 带入数据得光致E→Z速率0.20000000000 s⁻¹、Z→E速率0.050000000000 s⁻¹，两个量子产率均不超过1。

4. 照光时还应叠加热跃迁而非把暗反应忽略；总正向a=k_photo,E→Z+k_EZ,d，总反向b=k_photo,Z→E+k_ZE,d。

5. 得到a=0.21000000000 s⁻¹、b=0.090000000000 s⁻¹，λ=a+b=0.30000000000 s⁻¹。

6. 由dz/dt=a(1−z)−bz=a−λz得到光稳态z*=a/λ，且1−z*=b/λ。

7. 光稳态Z分数z*=0.70000000000，对应E分数0.30000000000；弛豫时间τ=1/λ=3.3333333333 s。

8. 初始z(0)=0，照光时显式解z(t)=z*[1−exp(−λt)]，不应误用不可逆光转化的一阶式。

9. 照光10.00 s后z=0.66514905214、E分数0.33485094786，Z浓度0.0013302981043 mol/L、E浓度0.00066970189572 mol/L。

10. 关灯时光激发的两速率立即归零，但Z的分数连续；黑暗中仍有a_d=0.01000、b_d=0.04000 s⁻¹。

11. 黑暗稳态z_d*=a_d/(a_d+b_d)=0.20000000000，与光稳态不同。

12. 以关灯瞬间的z(10 s)作为新的初始条件，暗期解z_d(t)=z_d*+[z(10)−z_d*]exp[−(a_d+b_d)t]。

13. 再放置20.00 s得到z=0.37111877336、E分数0.62888122664，Z浓度=0.00074223754673 mol/L。

14. 黑暗弛豫半衰时间为ln2/(a_d+b_d)=13.862943611 s，既不是照光半衰时间2.3104906019 s，也不是Z的转化半寿命。

15. 若实测光稳态z*及光照λ，先反演a=λz*、b=λ(1−z*)，再从两者分别减去暗反应率得到纯光速率。

16. 反推出φ_E→Z=0.40000000000、φ_Z→E=0.25000000000，重建题设量子产率。

17. 初始Z分数的变化率就是a；任意时刻E+Z=C，关灯瞬间连续但导数改变；真实体系若有波长依赖吸收、非均匀照射、光疲劳和构象杂化，需进一步建模。

#### 结果与单位
- photo_forward_rate_s: 0.2 s^-1
- photo_reverse_rate_s: 0.05 s^-1
- light_total_forward_rate_s: 0.21000000000000002 s^-1
- light_total_reverse_rate_s: 0.09 s^-1
- light_relaxation_rate_s: 0.30000000000000004 s^-1
- light_Z_stationary_fraction: 0.7 fraction
- light_E_stationary_fraction: 0.30000000000000004 fraction
- light_relaxation_time_s: 3.333333333333333 s
- light_half_relaxation_time_s: 2.310490601866484 s
- Z_fraction_after_10s_light: 0.6651490521424952 fraction
- E_fraction_after_10s_light: 0.3348509478575048 fraction
- Z_concentration_after_10s_M: 0.0013302981042849905 mol/L
- E_concentration_after_10s_M: 0.0006697018957150096 mol/L
- dark_Z_stationary_fraction: 0.19999999999999998 fraction
- Z_fraction_after_20s_dark: 0.3711187733636072 fraction
- E_fraction_after_20s_dark: 0.6288812266363928 fraction
- Z_concentration_after_20s_dark_M: 0.0007422375467272145 mol/L
- dark_half_relaxation_time_s: 13.862943611198904 s
- inferred_forward_quantum_yield: 0.4 fraction
- inferred_reverse_quantum_yield: 0.2500000000000001 fraction
- initial_Z_fraction_rate_s: 0.21000000000000002 s^-1
- final_EZ_total_concentration_M: 0.002 mol/L

### UC-ADV12-P163 Randles型电化学阻抗的复平面反演、Nyquist峰值与交流电流

#### 题目
某假想电极在小振幅线性交流扰动下可用无扩散Warburg项的简化Randles网络描述：串联溶液电阻R_s与并联的电荷转移电阻R_ct、双电层电容C_dl。高频实轴截距独立测得R_s=10.00 Ω，10.00 Hz时测得复阻抗Z₁≈(81.695680032490−45.047724336839i) Ω，100.0 Hz时另测得Z₂≈(12.470452303186−15.522309613465i) Ω。以10.00 Hz施加10.00 mV RMS正弦电压。假定理想电容、R_ct与频率无关，且无感抗和浓差极化。利用Z(ω)=R_s+R_ct/(1+iωR_ctC_dl)从Z₁严格逆解R_ct、C_dl、时间常数，独立预测Z₂以复核。求Nyquist圆峰值频率、峰处实部与虚部、10 Hz阻抗模长与RMS电流、相位、零频和无限频实轴截距。说明电容引起负虚部的原因与频率边界。

#### 分步解析
1. 在线性小扰动条件下Z=R_s+1/(1/R_ct+iωC_dl)=R_s+R_ct/(1+iωτ)，定义τ=R_ctC_dl和ω=2πf。

2. 令x=ωτ，分离实虚部：ReZ=R_s+R_ct/(1+x²)，ImZ=−R_ctx/(1+x²)；后者由于理想电容而为负。

3. 已知高频截距R_s=10.00 Ω；以10 Hz读数定义u=ReZ₁−R_s>0与v=−ImZ₁>0。

4. 两式相除给v/u=ωτ，可直接求τ=(v/u)/(2πf)，避免将ImZ的负号误代入。

5. 10 Hz时ReZ=81.695680032 Ω、ImZ=-45.047724337 Ω，故维持正时间常数τ=0.010000000000 s。

6. 从u=R_ct/(1+x²)反推R_ct=u[1+(v/u)²]，随即C_dl=τ/R_ct。

7. 反演得到R_ct=100.00000000 Ω、C_dl=100.00000000 μF；独立的R_ct C_dl=0.010000000000 s与时间常数一致。

8. 代回在100 Hz的公式，必须同时重建实部和虚部，而不能只比较阻抗模长。

9. 预测100 Hz的Z₂=(12.470452303−15.522309613i) Ω，与第二次测量吻合。

10. Nyquist图在峰值条件x=ωτ=1处取虚部极小值，峰频f*=1/(2πτ)。

11. 据此f*=15.915494309 Hz，峰处ReZ=60.000000000 Ω、ImZ=-50.000000000 Ω。

12. 10 Hz的阻抗模长|Z|=93.292452020 Ω，10.00 mV RMS电压驱动的RMS电流I=107.18980779 μA。

13. 电流超前电压相位θ=−arg(Z)=28.872732697°；这是整串并网络的相位，不等于纯电容的90°。

14. ω→0时电容开路，阻抗实部R_s+R_ct=110.00000000 Ω；ω→∞时电容短路，实部R_s=10.000000000 Ω。

15. 电流在无限频形式极限为V/R_s，但不能把该理论上限当作10 Hz测量电流；此模型不包括扩散Warburg、常相位元件或电极非线性。

16. 通过正的R_ct、C_dl与两个频率下的负虚部检查电路物理可实现性；测量数据为有限小数精度，回代误差按给定小数精度判定。

#### 结果与单位
- Z10_real_ohm: 81.69568003248978 ohm
- Z10_imag_ohm: -45.04772433683886 ohm
- Z100_real_ohm: 12.470452303185764 ohm
- Z100_imag_ohm: -15.522309613464763 ohm
- inferred_RC_time_s: 0.010000000000000002 s
- inferred_Rct_ohm: 100 ohm
- inferred_Cdl_uF: 100.00000000000001 uF
- Nyquist_peak_frequency_Hz: 15.915494309189533 Hz
- Nyquist_peak_real_ohm: 60 ohm
- Nyquist_peak_imag_ohm: -50 ohm
- Z10_magnitude_ohm: 93.29245201997196 ohm
- current_10Hz_microamp_rms: 107.18980778701379 uA
- current_lead_phase_deg: 28.872732697461682 degree
- high_frequency_ideal_current_A: 0.001 A
- zero_frequency_real_intercept_ohm: 110 ohm
- high_frequency_real_intercept_ohm: 10 ohm
- dimensionless_frequency_10Hz: 0.6283185307179587 ratio
- Z10_polarization_real_ohm: 71.69568003248978 ohm
- Z10_polarization_loss_ohm: 45.04772433683886 ohm
- independent_RC_product_s: 0.01 s

<a id="batch-27"></a>

## 第十二辑第二十七批 · I168 / A168 / O164 / P164

本批均为新创高阶综合待审稿，已设置独立数值复算；跨辑核心模型原创性与化学科学性仍待专家逐题审核。

### UC-ADV12-I168 尖晶石阳离子反位的构型熵、自由能凸性与温度响应

#### 完整题目
理想立方尖晶石MgAl₂O₄在每化学式单位具有1个四面体A位和2个八面体B位；反位度x定义为(Mg₁₋ₓAlₓ)[MgₓAl₂₋ₓ]O₄，0≤x≤1，括号为A位、方括号为B位。设相对于完全正尖晶石x=0的非构型能为U(x)=Δx+(w/2)x²，Δ=17.00 kJ/mol、w=4.000 kJ/mol（每mol化学式单位）。A、B两子晶格上的阳离子分别理想随机混合，构型熵仅计此两子晶格，R=8.314462618 J/(mol K)；不考虑晶格热容、磁性、氧空位和价态变化。求1100.0 K及1450.0 K下平衡反位度、A/B两子晶格的Mg/Al占位分数、构型熵、非构型能与相对Gibbs自由能。证明两温度下平衡反位度在(0,1)唯一，计算1100 K下自由能二阶导数与dx/dT及1450 K下dx/dT，并核对Mg/Al计量、电荷与温升对反位的影响。以x=0为相对能零点，不把有限温度的负混合自由能误认为负的绝对晶格能。

#### 解题过程

1. 分清每化学式单位的1个A位与2个B位：A位Mg₁₋ₓAlₓ；B位MgₓAl₂₋ₓ，因而B位Mg与Al占位分数分别x/2和1−x/2。

2. 每mol化学式单位的理想混合熵为S/R=−[(1−x)ln(1−x)+xlnx+xln(x/2)+(2−x)ln((2−x)/2)]，取ylny在y→0时的连续极限0。

3. 定义Δ=17000 J/mol、w=4000 J/mol，能量U=Δx+(w/2)x²；相对自由能G(x,T)=U−TS，并使G(0,T)=0。

4. 按x求导得到G_x=Δ+wx+RT ln[x²/((1−x)(2−x))]。对x∈(0,1)其两端分别趋于−∞和+∞。

5. 二阶导数G_xx=w+RT[2/x+1/(1−x)+1/(2−x)]>0，故驻点唯一，且是严格全局自由能极小值。

6. 利用保界二分法分别求两温度根，避免在x=0或1处直接计算ln0；高温时不能沿用1100 K的分数。

7. 1100 K平衡x=0.3693132770，1450 K平衡x=0.4332787376，对应比值1.173201086。

8. 在1100 K，A位Mg和Al占位分别0.6306867230、0.3693132770；B位Mg和Al占位分别0.1846566385、0.8153433615。

9. 1100 K构型熵=13.43078701 J/(mol K)，非构型能=6.551110302 kJ/mol，相对G=-8.222755412 kJ/mol。

10. 1450 K构型熵=14.37953137 J/(mol K)，非构型能=7.741199468 kJ/mol，相对G=-13.10912102 kJ/mol。

11. 由G_x(x,T)=0隐式求导，得到dx/dT=[R ln((1−x)(2−x)/x²)]/[w+RT(2/x+1/(1−x)+1/(2−x))]。

12. 故1100 K下G_xx=73639.40465 J/mol、dx/dT=0.0002281048157 K⁻¹，1450 K下对应dx/dT=0.0001457871262 K⁻¹及G_xx=88618.17884 J/mol。

13. 各温度总Mg数=(1−x)+x=1.000000000，Al数=x+(2−x)=2.000000000，阳离子总形式电荷8.000000000与四个O²⁻抵消。

14. Δ、w均为正，温度升高使熵驱动反位增大；平衡G相对x=0为负表示混合后更稳定，不是负的绝对成晶能。

15. 模型忽略非理想位点相互作用、短程有序、阳离子价态变化和晶格振动；实际反位度需实验衍射或谱学约束。

#### 独立数值结果

- inversion_1100: 0.369313277006146 fraction
- inversion_1450: 0.433278737609947 fraction
- A_Mg_fraction_1100: 0.630686722993854 fraction
- A_Al_fraction_1100: 0.369313277006146 fraction
- B_Mg_fraction_1100: 0.184656638503073 fraction
- B_Al_fraction_1100: 0.815343361496927 fraction
- config_entropy_1100_J_mol_K: 13.4307870125103 J/(mol K)
- energy_1100_kJ_mol: 6.55111030225052 kJ/mol
- relative_G_1100_kJ_mol: -8.22275541151086 kJ/mol
- config_entropy_1450_J_mol_K: 14.3795313713465 J/(mol K)
- energy_1450_kJ_mol: 7.74119946829883 kJ/mol
- relative_G_1450_kJ_mol: -13.1091210201535 kJ/mol
- high_over_low_inversion: 1.17320108587035 ratio
- inversion_temperature_derivative_1100_per_K: 0.000228104815692790 K^-1
- curvature_G_1100_J_mol: 73639.4046502711 J/mol
- entropy_slope_1100_J_mol_K: 16.7975028254769 J/(mol K)
- Mg_inventory_per_formula: 1.00000000000000 count
- Al_inventory_per_formula: 2.00000000000000 count
- positive_charge_per_formula: 8.00000000000000 elementary_charge
- entropy_increase_1450_minus_1100_J_mol_K: 0.948744358836109 J/(mol K)
- G_difference_high_minus_low_kJ_mol: -4.88636560864267 kJ/mol
- inversion_temperature_derivative_1450_per_K: 0.000145787126191675 K^-1
- curvature_G_1450_J_mol: 88618.1788370468 J/mol
- normal_spinel_relative_G_kJ_mol: 0.00000000000000 kJ/mol

### UC-ADV12-A168 耦合TGA–逸出气计量反演混合盐的未知水合数与不确定度

#### 完整题目
120.000 mg的干燥粉体由未知水合数x（1≤x≤7）的CuSO₄·xH₂O、CaCO₃与惰性SiO₂组成，三者之外没有其他组分。理想阶梯式热重分析(TGA)依次定量释放：(Ⅰ)全部水合水；(Ⅱ)CuSO₄→CuO+SO₃；(Ⅲ)CaCO₃→CaO+CO₂；无氧气吸收、样品飞溅或其他挥发，所述SO₃代表含硫挥发物的等效总质量。三个台阶的质量损失分别为21.618336、19.214880、8.801800 mg；假设每个台阶独立，水台阶与SO₃台阶质量损失的标准不确定度分别0.0200 mg和0.0150 mg，其余参数视为准确。摩尔质量按H₂O=18.01528、Cu=63.546、S=32.065、O=15.999、Ca=40.078、C=12.011 g/mol计算。求水合数x及标准不确定度、两可分解盐的物质的量、原样各组分质量与质量分数、残渣质量（分别由总损失和CuO+CaO+SiO₂两路计算）、逸出SO₃/CO₂摩尔比与分析误差边界。核验所有元素与总质量计量，并判断x是否唯一地识别为整数5。

#### 解题过程

1. 把CuSO₄·xH₂O中的CuSO₄视为不挥发中间盐；按题设先失xH₂O，再经CuSO₄→CuO+SO₃释放SO₃等效质量，CaCO₃→CaO+CO₂是第三台阶。

2. 计算M(SO₃)=80.06200000 g/mol和M(CO₂)=44.00900000 g/mol，三台阶损失分别为21.61833600、19.21488000、8.801800000 mg。

3. 第二台阶严格给出n_CuSO4=Δm_SO3/M_SO3；第三台阶n_CaCO3=Δm_CO2/M_CO2；mg换g时必须乘10⁻³。

4. 反演n_CuSO4=240.0000000 μmol、n_CaCO3=200.0000000 μmol。

5. 由第一台阶Δm_H2O=x n_CuSO4 M_H2O解x=Δm_H2O M_SO3/(Δm_SO3 M_H2O)，不需要预先假定水合数是5。

6. 得到x=5.000000000，再用CuSO₄本体及水合水之和求原样CuSO₄·xH₂O的质量59.92401600 mg。

7. CaCO₃初始质量=20.01720000 mg，SiO₂差减得40.05878400 mg，非负且总和120.000 mg。

8. 对应三种原样质量百分数49.93668000%、16.68100000%、33.38232000%，加和应为100%。

9. 最终残渣仅为CuO、CaO及SiO₂，不可把释放SO₃后的铜盐仍当作CuSO₄计入残渣。

10. 由n_CuSO4 M(CuO)+n_CaCO3 M(CaO)+m(SiO₂)求残渣=70.36498400 mg。

11. 从独立总质量损失求120−Δm_H2O−Δm_SO3−Δm_CO2=70.36498400 mg，二者吻合。

12. SO₃/CO₂气体物质的量比=1.200000000；实验真正逸出气体是否完全保持SO₃分子形态不影响本题等效质量假设。

13. 因x∝Δm_H2O/Δm_SO3，独立质量损失的一阶相对方差为[u(x)/x]²=[u(Δm_H2O)/Δm_H2O]²+[u(Δm_SO3)/Δm_SO3]²。

14. 所以u(x)=0.006052461724，它远小于相邻整数水合数间距0.5；且第二台阶对应n(CuSO₄)的不确定度0.1873548000 μmol。

15. 总失重占比41.36251333%，残渣的CuO、CaO质量依次19.09080000、11.21540000 mg；SiO₂占原样质量分数0.3338232000。

16. 在理想模型内x唯一且接近5；真实实验需审查吸附水、阶段重叠、铜硫酸盐中间氧化物及气氛依赖，不能把理论阶梯设定替代真实温控TGA验证。

#### 独立数值结果

- SO3_molar_mass_g_mol: 80.0620000000000 g/mol
- CO2_molar_mass_g_mol: 44.0090000000000 g/mol
- water_loss_mg: 21.6183360000000 mg
- SO3_loss_mg: 19.2148800000000 mg
- CO2_loss_mg: 8.80180000000000 mg
- copper_sulfate_amount_umol: 240.000000000000 umol
- calcium_carbonate_amount_umol: 200.000000000000 umol
- inferred_hydration_number: 5.00000000000000 count
- initial_hydrated_copper_sulfate_mg: 59.9240160000000 mg
- initial_calcium_carbonate_mg: 20.0172000000000 mg
- initial_silica_mg: 40.0587840000000 mg
- hydrated_sulfate_mass_percent: 49.9366800000000 percent
- carbonate_mass_percent: 16.6810000000000 percent
- silica_mass_percent: 33.3823200000000 percent
- oxide_residue_direct_mg: 70.3649840000000 mg
- residue_from_total_losses_mg: 70.3649840000000 mg
- SO3_to_CO2_molar_ratio: 1.20000000000000 ratio
- hydration_number_standard_uncertainty: 0.00605246172448842 count
- copper_amount_standard_uncertainty_umol: 0.187354800029977 umol
- total_loss_percent: 41.3625133333333 percent
- CuO_residue_mg: 19.0908000000000 mg
- CaO_residue_mg: 11.2154000000000 mg
- silica_mass_fraction: 0.333823200000000 fraction

### UC-ADV12-O164 芳基取代溴代烷SN1/E2平行反应的Hammett双通道与β-D同位素反演

#### 完整题目
某假想对位取代芳基溴代烷在恒温、固定溶剂中只有互斥的SN1溶剂解（产物S）和E2消除（产物E），产物不再互变。假设两条一阶通道均满足Hammett形式k_j(σ)=k_{j,0}10^(ρ_jσ)，不同取代基的σ分别−0.30、0.00、+0.50。三种未氘代底物实测总消失速率k_obs及在完全转化时S产物摩尔分数f_S如下：(σ=−0.30: k_obs=0.1060745301 s⁻¹, f_S=0.9382722933；σ=0: k_obs=0.04000000000 s⁻¹, f_S=0.6250000000；σ=+0.50: k_obs=0.06221607558 s⁻¹, f_S=0.04018254087)。以下三组观测值按理想化高精度测量处理，两个通道的基准速率和Hammett斜率均未知，必须由给出的观测数据反演。现有一未知取代基σ=+0.250，起始浓度0.01000 mol/L，反应20.00 s；β-H换为β-D后，同一取代基的通道同位素效应分别k_S,H/k_S,D=1.050、k_E,H/k_E,D=3.000。由三组总速率及S支化分数而非直接假定两个ρ，反演各通道基准速率、两Hammett斜率和选择性斜率；预测σ=+0.250时H/D两种底物的通道常数、总速率、表观总KIE、转化率、两产物与剩余底物浓度及同位素引起的S分支变化，验证反应物与产物计量。

#### 解题过程

1. 对每个取代基有k_obs=k_S+k_E与f_S=k_S/k_obs，故独立复原两个通道为k_S=f_S k_obs，k_E=(1−f_S)k_obs。

2. 三种σ依次−0.30、0、+0.50，测得k_obs分别0.1060745301、0.04000000000、0.06221607558 s⁻¹，f_S分别0.9382722933、0.6250000000、0.04018254087。

3. 用σ=0的数据立即得到k_S0与k_E0；端点的log10 k_j对σ之斜率就是ρ_j，可用第三个点检验直线模型的内部一致性。

4. 求得k_S0=0.02500000000 s⁻¹、k_E0=0.01500000000 s⁻¹，ρ_S=-2.000000000、ρ_E=1.200000000。

5. 因为log10(k_S/k_E)=log10(k_S0/k_E0)+(ρ_S−ρ_E)σ，选择性Hammett斜率为-3.200000000。

6. 反应只包含两条不可逆的一阶并行路径，底物浓度C(t)=C₀exp(−(k_S+k_E)t)；两产物是消耗总量乘通道速率比。

7. 代入σ=+0.250，未氘代k_S=0.007905694150、k_E=0.02992893472、总k=0.03783462887 s⁻¹。

8. β位氘取代只按题设改变各通道的速率：k_S,D=k_S,H/1.050，而k_E,D=k_E,H/3.000；不可把3.000直接作为总速率KIE。

9. 得到氘代k_S=0.007529232524、k_E=0.009976311575、总k=0.01750554410 s⁻¹，表观总速率H/D比2.161294083。

10. 转化率分别X_H=1−exp(−k_Ht)、X_D=1−exp(−k_Dt)，按各自总速率积分，不能共用同一转化率。

11. 20 s后X_H=0.5307842418、X_D=0.2953900432。

12. H底物给S=0.001109094499 mol/L、E=0.004198747919 mol/L，未反应=0.004692157582 mol/L。

13. β-D底物给S=0.001270489113 mol/L、E=0.001683411318 mol/L，未反应=0.007046099568 mol/L。

14. H和D各自的S产品支化分数分别0.2089539236、0.4301055986；D/H支化比2.058375317，因E2的一级β同位素效应更强而相对偏向SN1。

15. 分别回代[S]+[E]+[未反应]=0.01000 mol/L，并核对正速率、正浓度及0≤转化率≤1。

16. 本题以假想Hammett线性、互斥SN1/E2与给定路径KIE为边界；实际底物的消除几何约束、离子对、溶剂化和竞争SN2可能破坏简化模型。

#### 独立数值结果

- observed_k_sigma_minus0p30_s: 0.106074530121977 s^-1
- observed_k_sigma_zero_s: 0.0400000000000000 s^-1
- observed_k_sigma_plus0p50_s: 0.0622160755830246 s^-1
- SN1_fraction_sigma_minus0p30: 0.938272293301011 fraction
- SN1_fraction_sigma_zero: 0.625000000000000 fraction
- SN1_fraction_sigma_plus0p50: 0.0401825408718340 fraction
- inferred_SN1_k0_s: 0.0250000000000000 s^-1
- inferred_E2_k0_s: 0.0150000000000000 s^-1
- SN1_Hammett_rho: -2.00000000000000 rho
- E2_Hammett_rho: 1.20000000000000 rho
- log_selectivity_Hammett_slope: -3.20000000000000 rho
- H_SN1_k_sigma0p25_s: 0.00790569415042095 s^-1
- H_E2_k_sigma0p25_s: 0.0299289347245332 s^-1
- H_total_k_s: 0.0378346288749541 s^-1
- D_SN1_k_s: 0.00752923252421043 s^-1
- D_E2_k_s: 0.00997631157484440 s^-1
- D_total_k_s: 0.0175055440990548 s^-1
- overall_H_over_D_KIE: 2.16129408265562 ratio
- H_conversion_at20s: 0.530784241792392 fraction
- D_conversion_at20s: 0.295390043160885 fraction
- H_S_product_M: 0.00110909449894236 mol/L
- H_E_product_M: 0.00419874791898156 mol/L
- H_remaining_M: 0.00469215758207608 mol/L
- D_S_product_M: 0.00127048911345460 mol/L
- D_E_product_M: 0.00168341131815425 mol/L
- D_remaining_M: 0.00704609956839115 mol/L
- H_S_branch_fraction: 0.208953923574876 fraction
- D_S_branch_fraction: 0.430105598638145 fraction
- D_over_H_S_branch_ratio: 2.05837531681487 ratio

### UC-ADV12-P164 热扩散与化学势耦合的Onsager矩阵、阻塞边界与逆势物质通量

#### 完整题目
一假想一维非反应性稀溶质传输膜在近平衡恒温附近（T≈300 K）存在粒子通量J_N（mol m⁻² s⁻¹）与总能量通量J_E（W m⁻²）。选取共轭热力学力X₁=−d(μ/T)/dx，单位J mol⁻¹ K⁻¹ m⁻¹；X₂=d(1/T)/dx，单位K⁻¹ m⁻¹。给定线性Onsager关系(J_N,J_E)^T=L(X₁,X₂)^T，其中L₁₁=2.000×10⁻⁸ mol² K/(J m s)，L₁₂=L₂₁=3.000×10⁻⁴ mol K/(m s)，L₂₂=10.00 J K/(m s)，基准驱动力X₁=+1.000 J/(mol K m)、X₂=+1.000×10⁻⁴ (K m)⁻¹。计算耦合矩阵行列式、无量纲耦合系数、两通量及总局域熵产率σ=J_N X₁+J_E X₂；分别求不透溶质边界J_N=0时需建立的X₁、有效能量输运系数、能量通量与熵产率，以及绝热边界J_E=0时所需X₂、有效粒子输运系数、J_N与熵产率。最后令X₁=−1.000而保持原X₂，判断粒子通量是否可与自身驱动力反向、能量通道是否补偿负局部贡献，并核对Onsager正定性、能量与熵的单位。

#### 解题过程

1. 定义粒子通量与总能量通量的共轭热力学力；此处使用总能量通量J_E，而非未经化学势修正的纯热流，才能与给出的−d(μ/T)/dx直接配对。

2. Onsager互易性L₁₂=L₂₁确保矩阵对称；局域熵产生σ=J_NX₁+J_EX₂，单位W/(K m³)。

3. 先核验L₁₁L₂₂−L₁₂²=1.100000000e-7>0，L₁₁>0，故对任意非零力向量都有σ>0；归一耦合系数r=0.6708203932，严格小于1。

4. 对于基准驱动X₁=1、X₂=10⁻⁴，计算J_N=L₁₁X₁+L₁₂X₂，J_E=L₁₂X₁+L₂₂X₂。

5. 基准J_N=5.000000000e-8 mol/(m²s)、J_E=0.001300000000 W/m²，总熵产率σ=1.800000000e-7 W/(K m³)。

6. 粒子通道、能量通道的熵产生贡献分别5.000000000e-8和1.300000000e-7 W/(K m³)，总和等于σ。

7. 当膜不透溶质时必须施加J_N=0，而非错误地把X₁置零；代数解X₁=−(L₁₂/L₁₁)X₂。

8. 不透溶质边界下X₁=-1.500000000 J/(mol K m)，有效能量系数L₂₂,eff=L₂₂−L₁₂²/L₁₁=5.500000000 J K/(m s)。

9. 此时J_E=0.0005500000000 W/m²、σ=5.500000000e-8 W/(K m³)，不会因为J_N=0而使σ归零。

10. 绝热边界J_E=0时反而由X₂=−(L₁₂/L₂₂)X₁给出响应，等效粒子系数L₁₁,eff=L₁₁−L₁₂²/L₂₂。

11. 求得X₂=-0.00003000000000 (K m)⁻¹、J_N=1.100000000e-8 mol/(m²s)、σ=1.100000000e-8 W/(K m³)，有效系数1.100000000e-8。

12. 以X₁=−1.000、X₂=10⁻⁴再次代入相同正定矩阵，X₁与X₂并不必同号，单一通道的熵贡献也不必各自为正。

13. 重新得到J_N=1.000000000e-8 mol/(m²s)>0，故J_NX₁=-1.000000000e-8<0，确实出现由温度驱动的逆化学势物质输运。

14. 同时J_E=0.0007000000000 W/m²，其熵产生贡献7.000000000e-8>0，二者总和σ=6.000000000e-8>0，严格满足第二定律。

15. 所有流量和熵产是局域线性响应，不代表可以无功永动；强非线性驱动、温度变化明显或物质化学反应时Onsager常数不可直接沿用。

16. 量纲检查L₁₂X₂与L₁₁X₁同为mol/(m²s)，L₂₁X₁与L₂₂X₂同为W/m²；确保熵产生各项单位相同。

#### 独立数值结果

- Onsager_determinant: 1.10000000000000e-7 L11*L22
- dimensionless_coupling: 0.670820393249937 ratio
- baseline_particle_flux_mol_m2_s: 5.00000000000000e-8 mol/(m2 s)
- baseline_energy_flux_W_m2: 0.00130000000000000 W/m2
- baseline_entropy_production_W_K_m3: 1.80000000000000e-7 W/(K m3)
- particle_entropy_contribution: 5.00000000000000e-8 W/(K m3)
- energy_entropy_contribution: 1.30000000000000e-7 W/(K m3)
- particle_blocked_X1: -1.50000000000000 J/(mol K m)
- particle_blocked_energy_flux_W_m2: 0.000550000000000000 W/m2
- particle_blocked_entropy_production: 5.50000000000000e-8 W/(K m3)
- particle_blocked_effective_L22: 5.50000000000000 J K/(m s)
- adiabatic_X2: -0.0000300000000000000 1/(K m)
- adiabatic_particle_flux_mol_m2_s: 1.10000000000000e-8 mol/(m2 s)
- adiabatic_entropy_production: 1.10000000000000e-8 W/(K m3)
- adiabatic_effective_L11: 1.10000000000000e-8 mol2 K/(J m s)
- uphill_particle_flux: 1.00000000000000e-8 mol/(m2 s)
- uphill_energy_flux: 0.000700000000000000 W/m2
- uphill_total_entropy_production: 6.00000000000000e-8 W/(K m3)
- uphill_particle_entropy_contribution: -1.00000000000000e-8 W/(K m3)
- uphill_energy_entropy_contribution: 7.00000000000000e-8 W/(K m3)
- force_product_X1_X2: 0.000100000000000000 X1*X2
- square_root_determinant: 0.000331662479035540 sqrt(L11*L22)
- normalized_coupling_squared: 0.450000000000000 ratio

<a id="batch-28"></a>

## 第十二辑第二十八批 · I169/A169/O165/P165

四科各新增1道完整原创待审题。题目独立数值计算与自动测试均不代替跨辑数学同构、化学科学性及人工出版审核。

### UC-ADV12-I169 CeO₂₋δ缺氧平衡的电荷补偿、非稀缺陷分数与氧分压指数

#### 题目
在1000 K时，将无掺杂萤石型CeO₂₋δ视为均匀单相，允许0<δ<0.5。每化学式单位有1个Ce位（Ce³⁺或Ce⁴⁺）及2个氧位（O²⁻或空位V_O^{••}）。仅考虑O_O^×+2Ce_Ce^×⇌V_O^{••}+2Ce_Ce′+(1/2)O₂(g)，假设Ce³⁺是局域化小极化子且不发生其他反应。理想位点分数下，平衡常数定义为K=[δ/(2−δ)]·[2δ/(1−2δ)]²·(p_O₂/p°)^{1/2}=1.000×10⁻⁶，其中p°=1 bar。求氧分压0.01000 bar和1.000×10⁻⁶ bar下唯一的δ、Ce³⁺/Ce⁴⁺占位、氧空位和氧占据位点分数、平均Ce价态以及每mol化学式单位相对CeO₂的失氧质量。对各条件计算dlnδ/dln p_O₂并与稀缺陷近似δ≈[K/(2√(p/p°))]^{1/3}对比。核验每化学式单位的Ce守恒、O占位、形式电中性和K回代，说明低氧分压为何有偏离理想−1/6幂律的效应。

#### 逐步解析

1. 按每化学式单位定义δ为空缺氧原子数，2δ个Ce⁴⁺各获得1个电子还原成Ce³⁺，所以Ce³⁺分数2δ，Ce⁴⁺分数1−2δ；氧位空缺分数δ/2。

2. 氧位和Ce位应分别归一，氧占据分数1−δ/2；Ce总数为1，氧总数2−δ，不能把空位分数δ/2误用成空位原子数δ。

3. 由O_O^×+2Ce_Ce^×⇌V_O^{••}+2Ce_Ce′+1/2O₂构造理想位点活度：a_V/a_O=δ/(2−δ)，a_CeIII/a_CeIV=2δ/(1−2δ)。

4. 故K=(δ/(2−δ)) [2δ/(1−2δ)]² √(p/p°)，采用p°=1 bar使根号的量纲无量纲。

5. 在δ∈(0,0.5)内三个占据比均严格随δ增加，K的左端从0严格递增至+∞，故每一个正压强存在唯一物理根。

6. 使用保界二分法而不是对稀缺陷三次方程直接取根，分别对p/p°=0.01000与10⁻⁶求δ。

7. p=0.01000 bar得到δ=0.016670944059；p=10⁻⁶ bar得到δ=0.070828909427；后者与前者之比4.2486441786。

8. 较高氧压时Ce³⁺、Ce⁴⁺分数分别0.033341888118、0.96665811188，氧空位、占据分数0.0083354720294、0.99166452797。

9. 较低氧压时Ce³⁺、Ce⁴⁺分数分别0.14165781885、0.85834218115，氧空位、占据分数0.035414454714、0.96458554529。

10. 平均Ce价态为4−2δ，分别3.9666581119和3.8583421811，失氧质量δ×15.999 g/mol分别为0.26671843400、1.1331917219。

11. 求局域斜率时在固定K下对lnδ、lnp隐式微分，得到dlnK/dlnδ=3+δ/(2−δ)+4δ/(1−2δ)，故dlnδ/dlnp=−1/{2[3+δ/(2−δ)+4δ/(1−2δ)]}。

12. 在两个压强下相应斜率-0.16247537798、-0.14850951011，与仅在δ趋0时成立的−1/6有差别。

13. δ≪1时第一比值δ/(2−δ)≈δ/2，CeIII/CeIV≈2δ，故K≈2δ³√(p/p°)。

14. 稀缺陷估值依次0.017099759467、0.079370052598；精确与近似之比分别0.97492272282、0.89238833929。

15. 独立回代K=0.0000010000000000、0.0000010000000000，电荷差2δ−[CeIII]=0.0000000000与0.0000000000，均在机器精度内归零。

16. 空位浓度不是电子导电率本身；此题未给电子迁移率，不能由Ce³⁺含量直接编造电导率。Ce空位、间隙氧、弹性相互作用和非理想活度均可能在真实体系中重要。

#### 数值结果

- conditional_equilibrium_K: 0.00000100000000000000 dimensionless
- delta_p0p01: 0.0166709440588520 fraction
- delta_p1eMinus6: 0.0708289094272917 fraction
- vacancy_ratio_high_over_low: 4.24864417859304 ratio
- CeIII_fraction_p0p01: 0.0333418881177040 fraction
- CeIV_fraction_p0p01: 0.966658111882296 fraction
- oxygen_vacancy_site_fraction_p0p01: 0.00833547202942599 fraction
- oxygen_filled_site_fraction_p0p01: 0.991664527970574 fraction
- CeIII_fraction_p1eMinus6: 0.141657818854583 fraction
- CeIV_fraction_p1eMinus6: 0.858342181145417 fraction
- oxygen_vacancy_site_fraction_p1eMinus6: 0.0354144547136458 fraction
- oxygen_filled_site_fraction_p1eMinus6: 0.964585545286354 fraction
- mean_Ce_oxidation_p0p01: 3.96665811188230 oxidation_state
- mean_Ce_oxidation_p1eMinus6: 3.85834218114542 oxidation_state
- oxygen_mass_loss_g_per_mol_p0p01: 0.266718433997573 g/mol
- oxygen_mass_loss_g_per_mol_p1eMinus6: 1.13319172192724 g/mol
- reconstructed_K_p0p01: 0.00000100000000000000 dimensionless
- reconstructed_K_p1eMinus6: 0.00000100000000000000 dimensionless
- logdelta_logoxygenpressure_slope_p0p01: -0.162475377975281 slope
- logdelta_logoxygenpressure_slope_p1eMinus6: -0.148509510114747 slope
- dilute_delta_prediction_p0p01: 0.0170997594667670 fraction
- dilute_delta_prediction_p1eMinus6: 0.0793700525984100 fraction
- actual_over_dilute_p0p01: 0.974922722816752 ratio
- actual_over_dilute_p1eMinus6: 0.892388339285422 ratio
- charge_neutrality_residual_p0p01: 0.00000000000000 charge
- charge_neutrality_residual_p1eMinus6: 0.00000000000000 charge
- Ce_inventory_p0p01: 1.00000000000000 count
- Ce_inventory_p1eMinus6: 1.00000000000000 count
- oxygen_inventory_p0p01: 1.98332905594115 count
- oxygen_inventory_p1eMinus6: 1.92917109057271 count

### UC-ADV12-A169 定量核磁双延迟反演T₁、饱和校正与浓度不确定度

#### 题目
在无交换和无化学反应的理想定量¹H NMR实验中，待测物A和内标S各有一个互不重叠、贡献1个质子的信号，接受同一接收增益、线形积分标定与90°脉冲，脉冲间纵向磁化完全去相位，忽略NOE。两者的纵向弛豫T₁未知，内标浓度C_S=0.01000 mol/L。对于重复延迟TR，一质子的积分信号I_i(TR)=k C_i [1−exp(−TR/T₁,i)]，同一未知仪器系数k对两种物质相同。在TR=1.000 s和2.000 s分别记录：A积分I_A1、I_A2以及S积分I_S1、I_S2，实际积分读数分别为I_A1=983.6733507184165、I_A2=1580.301397071394、I_S1=7134.952031398098、I_S2=9179.150013761011（仪器积分单位）。请仅根据这些模拟测量值和已知内标浓度进行反演，不能预先假定任何T₁、待测浓度或仪器k。另假设四次积分的标准不确定度各为2.000积分单位，相互独立，C_S无不确定度。求两个T₁、饱和校正的无限延迟积分、仪器k、C_A及g/L和mg/L（A的摩尔质量100.0 g/mol），不校正的浓度偏差，以及四次信号测量传播出的C_A标准不确定度。使用I(2TR)/I(TR)=1+exp(−TR/T₁)并检查量纲、信号饱和与标准溶液一致性。

#### 逐步解析

1. 90°脉冲使可积分信号正比于前一延迟后的恢复磁化，I_i(TR)=k C_i(1−e^{−TR/T₁,i})；题中两个谱峰均只对应一个质子，不能额外乘质子数。

2. 在TR=1.000 s，实测模拟积分A=983.673350718、S=7134.95203140；TR=2.000 s，A=1580.30139707、S=9179.15001376，这些读数就是题设提供的逆问题数据。

3. 令r_i=I_i(2TR)/I_i(TR)，使用1−z²=(1−z)(1+z)可消去未知k和C，得到r_i=1+z_i，z_i=exp(−TR/T₁,i)。

4. 两信号比r_A=1.6065306597、r_S=1.2865047969，满足1<r_i<2，故由T₁=−TR/ln(r_i−1)反演。

5. 计算T₁,A=2.0000000000 s，T₁,S=0.80000000000 s；不是用原设定T₁代入回答。

6. 无限延迟完整恢复积分I_∞=I(TR)/(1−z)=I(TR)²/[2I(TR)−I(2TR)]，必须检查分母为正。

7. A的2I₁−I₂=387.04530437，S的分母5090.7540490；校正后I_A∞=2500.0000000、I_S∞=10000.000000。

8. 内标浓度已知，故k=I_S∞/C_S，进而C_A=C_S(I_A∞/I_S∞)，这是独立基于内标的定量核磁标定。

9. 由此k=1000000.0000，样品与内标浓度比=0.25000000000，C_A=0.0025000000000 mol/L。

10. A摩尔质量100.0 g/mol，正确质量浓度为0.25000000000 g/L，即250.00000000 mg/L；若误以TR=1 s的未校正强度比即浓度比，会得到0.0013786684849 mol/L。

11. 未经饱和校正的浓度/真实浓度比0.55146739397，显示不同T₁引起的系统偏差。

12. 将Q(I₁,I₂)=I₁²/(2I₁−I₂)代入C_A=C_S Q_A/Q_S；对Q作全微分，dlnQ/dI₁=2/I₁−2/(2I₁−I₂)，dlnQ/dI₂=1/(2I₁−I₂)。

13. 四个积分不确定度均为2.000且彼此独立，对四个对数灵敏度系数的乘积逐项平方求和，得到u(C_A)/C_A。

14. 计算相对标准不确定度0.0081362378334、C_A标准不确定度0.000020340594584 mol/L；质量浓度标准不确定度为0.0020340594584 g/L，即2.0340594584 mg/L。

15. 回代无限恢复信号与仪器常数得到规范化比1.0000000000和1.0000000000，即各自校准前后浓度一致。

16. 本实验是理想模拟；实际定量核磁还应校正基线、磁化转移、峰重叠、脉冲宽度、化学交换和内标称量不确定度。

#### 数值结果

- analyte_integral_TR1: 983.673350718416 integral
- analyte_integral_TR2: 1580.30139707139 integral
- standard_integral_TR1: 7134.95203139810 integral
- standard_integral_TR2: 9179.15001376101 integral
- analyte_double_to_single_integral_ratio: 1.60653065971263 ratio
- standard_double_to_single_integral_ratio: 1.28650479686019 ratio
- analyte_denominator_2I1_minus_I2: 387.045304365439 integral
- standard_denominator_2I1_minus_I2: 5090.75404903519 integral
- reconstructed_analyte_T1_s: 2.00000000000000 s
- reconstructed_standard_T1_s: 0.800000000000000 s
- analyte_infinite_TR_integral: 2500.00000000000 integral
- standard_infinite_TR_integral: 10000.0000000000 integral
- instrument_proportionality_constant: 1000000.00000000 integral/(mol/L)
- analyte_to_standard_concentration_ratio: 0.250000000000000 ratio
- analyte_molarity_M: 0.00250000000000000 mol/L
- analyte_mass_concentration_g_L: 0.250000000000000 g/L
- analyte_to_standard_ratio_reconstructed: 0.250000000000000 ratio
- naive_analyte_molarity_M: 0.00137866848493117 mol/L
- naive_to_corrected_concentration_ratio: 0.551467393972467 ratio
- analyte_concentration_relative_uncertainty: 0.00813623783341959 fraction
- analyte_concentration_standard_uncertainty_M: 0.0000203405945835490 mol/L
- analyte_mass_concentration_standard_uncertainty_g_L: 0.00203405945835490 g/L
- normalized_analyte_infinite_TR_response: 1.00000000000000 ratio
- normalized_standard_infinite_TR_response: 1.00000000000000 ratio
- analyte_TR1_saturation_fraction: 0.393469340287367 fraction
- standard_TR1_saturation_fraction: 0.713495203139810 fraction
- positive_signal_check_analyte: 1.00000000000000 flag
- positive_signal_check_standard: 1.00000000000000 flag
- analyte_mass_concentration_mg_L: 250.000000000000 mg/L
- analyte_mass_concentration_standard_uncertainty_mg_L: 2.03405945835490 mg/L

### UC-ADV12-O165 环氧中间体的串联开环和竞争消除：解析浓度、峰时与终产率

#### 题目
某假想含邻位卤代醇的有机底物A在碱过量、固定溶剂与温度下发生两条互斥的拟一级反应：A→B（环氧中间体，k₁=0.1200 s⁻¹）与A→D（不可逆消除副产物，k₃=0.03000 s⁻¹）；环氧中间体进一步不可逆被溶剂开环B→C（k₂=0.04000 s⁻¹）。B、C、D均不返回A，D也不再转化；外加碱和溶剂是过量储库，四种产物按A、B、C、D骨架物质的量1:1计量。初始[A]₀=0.01000 mol/L而[B]₀=[C]₀=[D]₀=0。推导A、B、C、D随时间的解析解；求8.000 s与20.00 s各组分浓度、A转化率和瞬时中间体B的最大浓度及峰值时刻，核验峰处dB/dt=0和两条路径对终产物的分支极限。推导[ABCD]守恒、B短时增长斜率、总A半衰期及长期C/D比。特别说明B可能先升后降而C和D持续积累，不能把B当作最终总产率。

#### 逐步解析

1. 把反应写成A→B→C并联A→D；由溶剂/碱过量，两条从A出发的拟一级反应叠加成a=k₁+k₃。

2. ODE为dA/dt=−aA，dB/dt=k₁A−k₂B，dD/dt=k₃A，dC/dt=k₂B；对四式相加得d(A+B+C+D)/dt=0。

3. 由初始A₀=0.01000 mol/L可得A(t)=A₀e^{−at}；这里a=0.1500 s⁻¹，不应误用k₁。

4. 以积分因子e^{k₂t}解B方程，得到B(t)=A₀ k₁ [e^{−k₂t}−e^{−at}]/(a−k₂)，仅对a≠k₂使用此表达式。

5. 由D'=k₃A得D(t)=A₀(k₃/a)(1−e^{−at})；利用质量守恒C=A₀−A−B−D，等价于对k₂B积分。

6. 8 s得到A=0.0030119421191、B=0.0046358708199、C=0.00095457548476、D=0.0013976115762 mol/L。

7. 8 s总浓度0.010000000000 mol/L，A的转化率0.69880578809；B占初始骨架总量比0.46358708199。

8. 由dB/dt=k₁A−k₂B=0并代入解析解，得到e^{(a−k₂)t*}=a/k₂，故t*=ln(a/k₂)/(a−k₂)。

9. 得B的峰时t*=12.015962182 s，峰浓度B*=0.0049471074607 mol/L。

10. 峰时A=0.0016490358202、C=0.0017336638831、D=0.0016701928360 mol/L，且B生成、消耗通量同为0.00019788429843 mol/(L s)。

11. 计算t=20.00 s时分布并检查中间体是否已开始回落；与t=8 s的初始增长段区分。

12. 20 s时A=0.00049787068368、B=0.0043586388627、C=0.0032430645903、D=0.0019004258633 mol/L。

13. 在t→∞时A和B均消失，A→B的初始分支比例k₁/a最终全部进入C，而A→D分支k₃/a最终全部进入D。

14. 因此终态C∞=0.0080000000000 mol/L，D∞=0.0020000000000 mol/L，最终分支比例0.80000000000:0.20000000000。

15. A的半衰时间ln2/a=4.6209812037 s；D∞/C∞=k₃/k₁=0.25000000000，不是k₃/k₂。

16. 短时B'(0)=k₁A₀=0.001200 mol/(L s)，D'(0)=k₃A₀=0.0003000 mol/(L s)，C'(0)=0，符合串联延迟产生机理。

17. 本题中环氧化、开环和消除全用理想拟一级模型；真实化学合成时还须核查立体化学、酸碱催化、多步消除及中间体的副反应。

#### 数值结果

- A_to_B_rate_constant_s: 0.120000000000000 s^-1
- B_to_C_rate_constant_s: 0.0400000000000000 s^-1
- A_to_D_rate_constant_s: 0.0300000000000000 s^-1
- A_disappearance_rate_constant_s: 0.150000000000000 s^-1
- A_concentration_t8_M: 0.00301194211912202 mol/L
- B_concentration_t8_M: 0.00463587081994351 mol/L
- C_concentration_t8_M: 0.000954575484758869 mol/L
- D_concentration_t8_M: 0.00139761157617560 mol/L
- total_concentration_t8_M: 0.0100000000000000 mol/L
- A_conversion_t8: 0.698805788087798 fraction
- B_peak_time_s: 12.0159621816575 s
- B_peak_concentration_M: 0.00494710746073207 mol/L
- A_concentration_at_B_peak_M: 0.00164903582024402 mol/L
- C_concentration_at_B_peak_M: 0.00173366388307272 mol/L
- D_concentration_at_B_peak_M: 0.00167019283595120 mol/L
- B_formation_flux_at_peak_M_s: 0.000197884298429283 mol/(L s)
- B_consumption_flux_at_peak_M_s: 0.000197884298429283 mol/(L s)
- A_concentration_t20_M: 0.000497870683678640 mol/L
- B_concentration_t20_M: 0.00435863886272026 mol/L
- C_concentration_t20_M: 0.00324306459033682 mol/L
- D_concentration_t20_M: 0.00190042586326427 mol/L
- final_C_concentration_M: 0.00800000000000000 mol/L
- final_D_concentration_M: 0.00200000000000000 mol/L
- eventual_C_fraction: 0.800000000000000 fraction
- eventual_D_fraction: 0.200000000000000 fraction
- A_half_life_s: 4.62098120373297 s
- final_D_over_C_ratio: 0.250000000000000 ratio
- B_fraction_t8: 0.463587081994351 fraction
- B_fraction_t20: 0.435863886272026 fraction
- C_fraction_t20: 0.324306459033682 fraction

### UC-ADV12-P165 对称正规溶液的双相共存、旋节线、杠杆定则与自由能驱动力

#### 题目
某假想二元分子液体A/B在常压下混合，可近似视为对称正规溶液。摩尔混合Gibbs自由能g(x,T)=RT[xlnx+(1−x)ln(1−x)]+Ωx(1−x)，其中x为B摩尔分数，Ω=10000 J/mol、R=8.314462618 J/(mol K)；每个端点纯液的混合g取0，0ln0按0处理。T=400.0 K，总体x̄=0.3000。求临界温度、两旋节组成、通过共同切线确定的两个双相共存组成、两个相的摩尔分率、各相组成与总体物料守恒。核验g''(x̄)的符号、共存两端的化学势平衡，以及不发生相分离与完全双相分离时的混合自由能差；求x=0.500时混合自由能、相对两相的自由能峰差，并判断T=650 K时x=0.5是否局部稳定。说明为什么总体x̄=0.3在旋节区内时不存在经典成核能垒，且正规溶液模型只用于给定温压与Ω的理想化比较。

#### 逐步解析

1. 由g(x)=RT[xlnx+(1−x)ln(1−x)]+Ωx(1−x)，一阶导数g'=RT ln[x/(1−x)]+Ω(1−2x)，二阶导数g''=RT/[x(1−x)]−2Ω。

2. 临界点满足g''(0.5,T_c)=0，故T_c=Ω/(2R)，温度400 K低于T_c才可能出现不互溶。

3. 计算T_c=601.36177522 K，400 K下RT=3325.7850472 J/mol。

4. 旋节组成是g''=0的两根x_s±=[1±√(1−2RT/Ω)]/2；只有当T<T_c时根为实数。

5. 旋节下界0.21067190313，上界0.78932809687，不等于真正的双相共存组成。

6. 对称性g(x)=g(1−x)导致两共存相分别x_b与1−x_b，共同切线是水平线；故由g'(x_b)=0且0<x_b<x_s−求较小根。

7. 在保界二分法中排除平凡驻点x=0.5，否则会把自由能极大值误当共存相。

8. 求得共存两相B摩尔分数x_b=0.070089278490、x_r=0.92991072151，两端导数g'分别0.0000000000、0.0000000000 J/mol。

9. 两端自由能-192.54874079、-192.54874079 J/mol相等；共同切线斜率0意味着两组分化学势在两相中分别相等。

10. 总体B比例x̄=0.3介于共存组成之间；按杠杆定则φ_r=(x̄−x_b)/(x_r−x_b)，φ_b=1−φ_r。

11. 富B相所占摩尔分率0.26739356569，贫B相0.73260643431，两相加权B比例0.30000000000，回到0.3000。

12. 均匀相g(x̄)=68.396638358 J/mol，完全分离后的双相自由能-192.54874079 J/mol，降低量260.94537915 J/mol。

13. g''(x̄)=-4162.9283467 J/mol <0，故在理想连续极限下小幅组成涨落可以自发放大，属于旋节分解而非跨越经典成核能垒。

14. 在x=0.5，g=194.74147138 J/mol，相对共存两相的自由能峰差387.29021218 J/mol；并非真正的界面成核能垒。

15. 当升至650 K时g''(0.5)=1617.6028068 J/mol>0，且650 K高于临界温度，局部均匀相稳定。

16. 过剩混合焓Ωx(1−x)和理想构型项RT[xlnx+(1−x)ln(1−x)]在x̄=0.3各自为正和负，不能只用混合焓判断相分离。

17. 忽略了界面能、有限粒径、组成依赖Ω、非对称组分和高阶涨落，故结果仅适用于题设正规溶液热力学模型。

#### 数值结果

- critical_temperature_K: 601.361775224714 K
- RT_at_400_J_mol: 3325.78504720000 J/mol
- spinodal_discriminant: 0.578656193745474 ratio
- spinodal_B_lower: 0.210671903127263 fraction
- spinodal_B_upper: 0.789328096872737 fraction
- binodal_B_lower: 0.0700892784900177 fraction
- binodal_B_upper: 0.929910721509982 fraction
- gprime_at_binodal_lower_J_mol: 0.00000000000000 J/mol
- gprime_at_binodal_upper_J_mol: 0.00000000000000 J/mol
- mixed_g_at_binodal_lower_J_mol: -192.548740792871 J/mol
- mixed_g_at_binodal_upper_J_mol: -192.548740792871 J/mol
- homogeneous_g_at_x0p3_J_mol: 68.3966383575710 J/mol
- free_energy_gain_from_separation_J_mol: 260.945379150442 J/mol
- high_B_phase_molar_fraction: 0.267393565694830 fraction
- low_B_phase_molar_fraction: 0.732606434305170 fraction
- reconstructed_overall_B_fraction: 0.300000000000000 fraction
- gsecond_at_binodal_lower_J_mol: 31027.1522981171 J/mol
- gsecond_at_x0p3_J_mol: -4162.92834666667 J/mol
- gsecond_at_x0p5_J_mol: -6696.85981120000 J/mol
- mixed_g_at_x0p5_J_mol: 194.741471384895 J/mol
- center_to_coexistence_barrier_J_mol: 387.290212177766 J/mol
- excess_enthalpy_at_x0p3_J_mol: 2100.00000000000 J/mol
- ideal_entropy_g_component_at_x0p3_J_mol: -2031.60336164243 J/mol
- gsecond_at_x0p5_T650_J_mol: 1617.60280680000 J/mol
- temperature_below_critical_K: 201.361775224714 K
- spinodal_discriminant_nonnegative: 0.334842990560000 ratio
- gprime_at_x0p5_J_mol: 0.00000000000000 J/mol
- gain_over_RT: 0.0784612882212979 ratio
- overall_minus_binodal_lower: 0.229910721509982 fraction
- spinodal_upper_minus_overall: 0.489328096872737 fraction

<a id="batch-29"></a>

## 第十二辑第29批 · I170/A170/O166/P166

本批四道高阶综合原创待审稿，分别覆盖无机配位氧化还原、分析计时安培、有机缩聚计量与物理多层吸附。独立数值复算并非专家科学性或跨辑原创性认证，全部publishable=false。

### UC-ADV12-I170 氯配位稳定Cu(I)对歧化平衡、Nernst电位与固相物料的耦合

#### 完整题干

在298.15 K的假想Cu–Cl理想稀溶液中，只允许可逆歧化2Cu⁺⇌Cu²⁺+Cu(s)，以及Cu⁺+Cl⁻⇌CuCl(aq)、Cu²⁺+Cl⁻⇌CuCl⁺(aq)两种可溶一氯络合。自由[Cl⁻]由外部储液池恒定保持0.05000 mol/L；β_I=100.0、β_II=10.00 L/mol。原有Cu(I)的总浓度0.01000 mol/L、样品体积0.1000 L，容许形成纯Cu固相。标准还原电位E°(Cu⁺/Cu)=0.3500 V、E°(Cu²⁺/Cu⁺)=0.2500 V。F=96485.33212 C/mol，R=8.314462618 J/(mol K)，标准态c°=1 mol/L、活度系数取1；忽略氧化、水解、多氯络合和CuCl沉淀。求自由离子歧化平衡常数、各氧化态配位分配因子、条件平衡常数与其自由能、平衡各铜物种和铜沉积质量；用两个Nernst电位独立复核详细平衡并核验铜物料、总反应电荷、外部Cl储库假设。说明配位如何改变歧化方向。

#### 逐步解析

1. 将Cu⁺+e⁻→Cu(s)与Cu⁺→Cu²⁺+e⁻相加，得2Cu⁺→Cu²⁺+Cu(s)，净反应电子数n=1。

2. 自由离子标准电池电势E°cell=0.3500−0.2500=0.1000 V，所以ΔG°free=−FE°cell，lnKfree=FE°cell/(RT)。

3. 298.15 K下自由离子平衡常数Kfree=49.0173564943，标准自由能变化-9.64853321200 kJ/mol。

4. 由固定自由Cl⁻与一氯络合平衡，总Cu(I)=αI[Cu⁺]、总Cu(II)=αII[Cu²⁺]，其中αI=1+βI[Cl⁻]、αII=1+βII[Cl⁻]。

5. 配位分配因子αI=6.00000000000、αII=1.50000000000，故条件歧化常数Kcond=Kfree αII/(αI²)=2.04238985393。

6. 设x=[CuII]total，金属Cu固体的摩尔浓度当量也为x，余下Cu(I)总浓度CI=C0−2x，物理范围为0<x<C0/2。

7. 浓度标准态c°=1 mol/L，Kcond=x c°/(C0−2x)²；左端严格递增，故唯一正根可用保界二分求出。

8. 数值根为x=0.000189083758908 mol/L，溶解Cu(I)总量0.00962183248218 mol/L。

9. 由络合配分计算[Cu⁺]=0.00160363874703、[CuCl(aq)]=0.00801819373515、[Cu²⁺]=0.000126055839272、[CuCl⁺]=0.0000630279196360，单位均mol/L。

10. 在0.1000 L样品中沉积Cu=0.0000189083758908 mol，即1.20155165436 mg；不能把金属Cu算进溶解总铜。

11. 第一个半电池的Nernst式为E1=E°1+(RT/F)ln([Cu⁺]/c°)；第二个为E2=E°2+(RT/F)ln([Cu²⁺]/[Cu⁺])。

12. 数值上E1=0.184655920531 V，E2=0.184655920531 V，差-2.77555756156e-17 V，说明平衡时铜(I)歧化与两半电池等势。

13. 回代自由离子反应商Qfree=49.0173564943，条件总浓度反应商Qcond=2.04238985393，分别恢复两种平衡常数。

14. Cu(I)配位程度更高，因此Kcond/Kfree=0.0416666666667，条件标准反应自由能-1.77027432895 kJ/mol。

15. 铜原子数以每升溶液计为CI+x+x=C0，且Cu(I)在氧化和还原半反应中各出1 mol，净反应不创造电荷。

16. 溶解铜物种所带的正电荷当量[Cu⁺]+2[Cu²⁺]+[CuCl⁺]=0.00191877834521 mol charge/L，但整体电中性还需要Cl⁻、旁观阴离子及外部缓冲储液池共同承担。

17. 真实Cu(I)氯络合有更丰富的平衡和可能的CuCl沉淀；本题是明确删去其他物种的条件热力学模型，不应直接作为实际Cu–Cl相图。

#### 数值结果与单位

- Kfree: 49.0173564942963 dimensionless
- alphaI: 6.00000000000000 ratio
- alphaII: 1.50000000000000 ratio
- Kconditional: 2.04238985392901 dimensionless
- CuII_total_M: 0.000189083758907983 mol/L
- CuI_total_M: 0.00962183248218403 mol/L
- CuI_free_M: 0.00160363874703067 mol/L
- CuCl_aq_M: 0.00801819373515336 mol/L
- CuII_free_M: 0.000126055839271989 mol/L
- CuCl_plus_M: 0.0000630279196359944 mol/L
- deposited_Cu_mol: 0.0000189083758907983 mol
- deposited_Cu_mg: 1.20155165435667 mg
- E_CuI_Cu_V: 0.184655920530865 V
- E_CuII_CuI_V: 0.184655920530865 V
- Nernst_residual_V: -2.77555756156289e-17 V
- Cu_mass_equiv_inventory_M: 0.0100000000000000 mol/L
- dissolved_Cu_total_M: 0.00981091624109202 mol/L
- solid_Cu_equiv_M: 0.000189083758907983 mol/L
- CuI_complexed_fraction: 0.833333333333333 fraction
- CuII_complexed_fraction: 0.333333333333333 fraction
- free_ion_reaction_quotient: 49.0173564942963 dimensionless
- conditional_reaction_quotient: 2.04238985392901 dimensionless
- Kcond_over_Kfree: 0.0416666666666667 ratio
- DeltaG_free_kJ_mol: -9.64853321200000 kJ/mol
- DeltaG_conditional_kJ_mol: -1.77027432894936 kJ/mol
- dissolved_positive_Cu_charge_M: 0.00191877834521064 mol_charge/L
- charge_balancing_redox_equiv_M: 0.00000000000000 charge_equiv/L
- CuII_fraction_of_maximum: 0.0378167517815966 fraction
- Cu_total_aqueous_plus_solid_M: 0.00981091624109202 mol/L
- initial_Cu_total_M: 0.0100000000000000 mol/L

### UC-ADV12-A170 计时安培Cottrell扩散与双电层充电的双时刻反演、积分及误差传播

#### 完整题干

某假想1电子可逆电极在298.15 K受扩散控制，电极面积A=0.07000 cm²，体相浓度c*=1.000 mmol/L，n=1、F=96485.33212 C/mol。法拉第限流满足iF(t)=nFAc*sqrt[D/(πt)]，同时有独立一阶双电层充电电流idl(t)=B exp(−t/τ)，τ=2.000 s由另一阻抗实验确定。实测理想模拟总电流i(1.000 s)=14.1860782497 μA，i(4.000 s)=5.74959875191 μA；独立验证点i(9.000 s)=3.20014962965 μA。不得预先假定扩散系数D或初始充电电流B。由前两点严格反演a=nFAc*sqrt(D/π)及B与D，再用第三点验算。假设两测量电流的标准不确定度均为0.1000 μA且相互独立，其余参数确定，求D的一阶合成标准不确定度。求0—9 s的法拉第电量、充电电量、总电量、总电解摩尔数（只用法拉第电量），以及圆盘半径与扩散长度sqrt(Dt)之比；核验SI单位与半无限平面近似的条件。

#### 逐步解析

1. SI单位转换：面积0.07000 cm²=7.000×10⁻⁶ m²，浓度1.000 mmol/L=1.000 mol/m³，二者必须先转换再用F和D计算。

2. 定义a=n F A c*sqrt(D/π)，a的单位为A sqrt(s)，总电流按i(t)=a/√t+B e^(−t/τ)拆成扩散和电容项。

3. 题设实测i(1 s)=14.1860782497 μA、i(4 s)=5.74959875191 μA，9 s另有实测3.20014962965 μA用于独立验证。

4. 对t1=1、t2=4，定义qj=1/√tj、ej=e^(−tj/τ)，则(i1,i2)ᵀ=[[q1,e1],[q2,e2]](a,B)ᵀ。

5. 行列式d=q1 e2−q2 e1=-0.167930046620≠0，故参数在给定τ时唯一可辨识。

6. 用克拉默法则，a=(i1 e2−i2 e1)/d，B=(q1 i2−q2 i1)/d；不同于将第二个电流简单乘2。

7. 反演得到a=9.33383297203 μA sqrt(s)与B=8.00000000000 μA，均为正。

8. 反求D=π[a/(nFAc*)]²，注意a应以A sqrt(s)计，不能把微安值原样代入。

9. 得到D=6.00000000000e-10 m²/s，即6.00000000000×10⁻¹⁰ m²/s。

10. 回代9 s得iF=3.11127765734 μA、idl=0.0888719723059 μA，总电流3.20014962965 μA，与第三个读数一致。

11. 给定独立电流噪声u_i=0.1000 μA，a对(i1,i2)的偏导分别为e2/d与−e1/d；u_a=u_i sqrt(e1²+e2²)/|d|。

12. 由此u_a=0.370062398952 μA sqrt(s)，D正比a²，故u_D=2D u_a/a=4.75769043729e-11 m²/s（相对值0.0792948406215）。

13. 对Cottrell电流积分QF(t)=2a√t；对指数电流积分Qdl(t)=Bτ[1−e^(−t/τ)]。

14. 前9 s得到QF=56.0029978322 μC，Qdl=15.8222560554 μC，Qtotal=71.8252538876 μC，法拉第比例0.779711797745。

15. 化学电子计量仅计QF，电解摩尔数为QF/F=5.80430171112e-10 mol；双电层电量不代表产生相同数量的氧化还原产物。

16. 圆盘半径r=1.49270533036 mm，9 s扩散长度sqrt(Dt)=0.0734846922835 mm，比例0.0492292020326，较小而支持平面半无限扩散近似。

17. 实际应用应考虑对流、有限电极、产物回扩散和时间相关双层响应，不能仅由三个点就断言实际体系符合此理想模型。

#### 数值结果与单位

- current_t1_microA: 14.1860782497335 microA
- current_t4_microA: 5.74959875190912 microA
- current_t9_microA: 3.20014962965009 microA
- inferred_Cottrell_coefficient_microA_sqrt_s: 9.33383297203244 microA_sqrt_s
- inferred_charge_amplitude_microA: 8.00000000000000 microA
- inversion_determinant: -0.167930046619704 dimensionless
- inferred_D_m2_s: 6.00000000000000e-10 m2/s
- D_in_1eMinus10_m2_s: 6.00000000000000 scaled_m2/s
- standard_uncertainty_a_microA_sqrt_s: 0.370062398952345 microA_sqrt_s
- standard_uncertainty_D_m2_s: 4.75769043728791e-11 m2/s
- relative_standard_uncertainty_D: 0.0792948406214652 fraction
- faradaic_charge_t9_microC: 56.0029978321947 microC
- capacitive_charge_t9_microC: 15.8222560553881 microC
- total_charge_t9_microC: 71.8252538875828 microC
- faradaic_charge_fraction: 0.779711797745229 fraction
- electrolyzed_amount_mol: 5.80430171111844e-10 mol
- electrode_radius_mm: 1.49270533036046 mm
- diffusion_length_sqrtDt_mm: 0.0734846922834954 mm
- diffusion_length_radius_ratio: 0.0492292020326276 ratio
- electrode_area_cm2: 0.0700000000000000 cm2
- concentration_mol_m3: 1.00000000000000 mol/m3
- exp_minus_t1_over_tau: 0.606530659712633 ratio
- exp_minus_t4_over_tau: 0.135335283236613 ratio
- inverse_sqrt_t4: 0.500000000000000 s^-0.5
- initial_Cottrell_coefficient_microA: 9.33383297203244 microA_sqrt_s
- capacitive_t9_microA: 0.0888719723059384 microA
- faradaic_t9_microA: 3.11127765734415 microA
- total_to_faradaic_charge_ratio: 1.28252516236358 ratio

### UC-ADV12-O166 A₂/B₂逐步缩聚的计量偏差、端基酸值与Carothers数均分子量

#### 完整题干

将乙二醇HO–CH₂CH₂–OH（A₂，62.068 g/mol）0.03000 mol与己二酸HOOC–(CH₂)₄–COOH（B₂，146.14 g/mol）0.02000 mol理想缩聚。每生成1条酯键释放一分子H₂O并定量移走，M(H₂O)=18.01528 g/mol。所有物种均只有2个官能团，无环化、支化、挥发单体损失和降解。限制性羧基转化率p_B=0.8000。反应后的游离单体和低聚体全部计入总质量和分子数，每个产物分子都是非环线性链。已知M(KOH)=56.1056 g/mol。求初始羟基、羧基当量及实际成键数、羟基转化率、数均聚合度DPn、干产物分子数及数均分子量、脱水与原料总质量守恒、羟基及羧基端数、酸值和羟值(mg KOH/g)。证明端基总当量为剩余链数的两倍，并给出完全消耗羧基时DPn的计量上限，以及要达到DPn=4所需羧基转化率。讨论二官能缩聚不可能凭此机理产生交联凝胶的原因。

#### 逐步解析

1. 乙二醇与己二酸均是严格双官能，初始羟基当量2×0.03000=0.06000 mol、羧基当量2×0.02000=0.04000 mol。

2. 令A为羟基、B为羧基，r=B₀/A₀=2/3；每条酯键消耗一个A和一个B官能团，生成一分子水。

3. 给定pB=0.8000，成键数b=B₀pB=0.0320000000000 mol，对应pA=b/A₀=0.533333333333。

4. 无分子内环化，分子间每生成一条酯键都使分子数减少1，所以N=N0−b；初始分子数N0=0.05000 mol。

5. 剩余分子0.0180000000000 mol，DPn=N0/N=2.77777777778；它把未反应单体也计入平均。

6. 由Carothers关系DPn=(1+r)/(1+r−2r pB)独立回算，结果与分子计数一致。

7. pB→1时DPn,max=(1+r)/(1−r)=5.00000000000，不平衡端基限制链增长，即使羧基完全消耗也不会得到无限长链。

8. 总质量守恒：m_initial=n_glycol M_glycol+n_adipic M_adipic；m_dry=m_initial−b M_water。

9. 初始质量4.78484000000 g，分离水质量0.576488960000 g，干产物质量4.20835104000 g。

10. 数均分子量Mn=m_dry/N=233.797280000 g/mol；不要假定所有链具有相同的端基与重复单元数。

11. 两种剩余端基按未反应官能团直接计数：nOH=A₀−b、nCOOH=B₀−b。

12. 得到OH端基0.0280000000000 mol、COOH端基0.00800000000000 mol，总端数0.0360000000000 mol，等于2N=0.0360000000000 mol。

13. 酸值是每克干产物的羧基KOH当量mg数，AV=1000×56.1056×nCOOH/m_dry；羟值按OH的KOH当量同理换算。

14. 故酸值AV=106.655741342 mg KOH/g、羟值=373.295094698 mg KOH/g。

15. 要求DPn=4时，由Carothers关系反解pB=(1+r)(1−1/4)/(2r)，检验在0至1之间。

16. pB,target=0.937500000000，所需成键0.0375000000000 mol、目标剩余分子0.0125000000000 mol，回代DPn=4.00000000000。

17. 纯双官能无环线性缩聚不能形成三臂及更高的交联节点，因此不会按该机理形成化学凝胶；真实工艺需另外考虑非理想环化、单体挥发、平衡和副反应。

#### 数值结果与单位

- initial_OH_mol: 0.0600000000000000 mol
- initial_COOH_mol: 0.0400000000000000 mol
- functional_ratio_B_A: 0.666666666666667 ratio
- B_conversion: 0.800000000000000 fraction
- A_conversion: 0.533333333333333 fraction
- formed_bonds_mol: 0.0320000000000000 mol
- initial_molecules_mol: 0.0500000000000000 mol
- final_molecules_mol: 0.0180000000000000 mol
- DPn_current: 2.77777777777778 count
- DPn_max_mass_imbalance: 5.00000000000000 count
- initial_monomer_mass_g: 4.78484000000000 g
- water_removed_mass_g: 0.576488960000000 g
- dry_products_mass_g: 4.20835104000000 g
- Mn_g_mol: 233.797280000000 g/mol
- remaining_OH_ends_mol: 0.0280000000000000 mol
- remaining_COOH_ends_mol: 0.00800000000000000 mol
- sum_end_moles: 0.0360000000000000 mol
- double_chain_moles: 0.0360000000000000 mol
- acid_value_mgKOH_g: 106.655741342338 mgKOH/g
- hydroxyl_value_mgKOH_g: 373.295094698184 mgKOH/g
- acid_end_fraction: 0.222222222222222 fraction
- hydroxyl_end_fraction: 0.777777777777778 fraction
- pB_for_DP4: 0.937500000000000 fraction
- bonds_for_DP4_mol: 0.0375000000000000 mol
- molecules_for_DP4_mol: 0.0125000000000000 mol
- confirmed_target_DP: 4.00000000000000 count
- dry_mass_fraction: 0.879517609784235 fraction
- water_mass_fraction: 0.120482390215765 fraction
- OH_to_COOH_end_ratio: 3.50000000000000 ratio
- DP_current_over_max: 0.555555555555555 ratio

### UC-ADV12-P166 BET氮气多层吸附的双点反演、单层容量与比表面积

#### 完整题干

某理想固体在77.00 K以N₂进行BET多层吸附，x=p/p₀，吸附量v以cm³ STP/g计，服从v=v_m C x/[(1−x)(1+(C−1)x)]。实验提供两个理想模拟点：(x₁=0.05000, v₁=79.9467021985 cm³ STP/g)、(x₂=0.2000, v₂=117.187500000 cm³ STP/g)。v_m与BET常数C均未知，必须从两点数据求出，不能预设其数值。给定0 °C、1 atm的氮气STP摩尔体积22414 cm³/mol、阿伏伽德罗常数6.02214076×10²³ mol⁻¹、氮气分子有效横截面积0.1620 nm²、R=8.314462618 J/(mol K)。将数据线性化为y=x/[v(1−x)]，求斜率、截距、v_m、C及单层分子数和BET比表面积，预测x=0.1000时v。若C≈exp[(E₁−E_L)/(RT)]，反演第一层相对后续层的能量差，并审核低相对压力和接近饱和时的BET适用范围；不得将多层吸附总体积误当成单层体积。

#### 逐步解析

1. 理想BET公式计算的是多层总吸附体积；其与单层容量v_m之间不是简单的Langmuir单层覆盖关系。

2. 将BET方程两边倒转整理：y=x/[v(1−x)]=1/(v_m C)+[(C−1)/(v_m C)]x。

3. 给定相对压强x₁=0.0500000000000、x₂=0.200000000000，实验吸附量v₁=79.9467021985、v₂=117.187500000 cm³ STP/g。

4. 由数据计算y₁=0.000658333333333、y₂=0.00213333333333 g/cm³。

5. 直线斜率s=(y₂−y₁)/(x₂−x₁)，截距i=y₁−sx₁；两点压力不同，故可反演。

6. 本题s=0.00983333333333、i=0.000166666666667 g/cm³，i>0且s>0。

7. 从i+s=1/v_m得v_m=1/(i+s)，再从s/i=C−1得C=1+s/i。

8. 结果v_m=100.000000000 cm³ STP/g，C=60.0000000000。

9. 单层气体物质的量n_m=v_m/(22414 cm³/mol)；只取单层容量而非某一压力下的总v。

10. 因此n_m=0.00446149727849 mol/g、N_m=2.68677646114e+21 molecules/g。

11. 每个N₂分子的有效表面截面积为0.1620×10⁻¹⁸ m²，故S_BET=N_m σ。

12. 得到比表面积S_BET=435.257786705 m²/g，量纲严格为面积除质量。

13. 回代预测x=0.1000时v=96.6183574879 cm³ STP/g，对应BET线性变量y=0.00115000000000。

14. 把C近似写成exp((E₁−E_L)/(RT))，于是E₁−E_L=RT lnC=2.62125516020 kJ/mol。

15. 低压x→0时v≈v_m Cx；理想公式在x→1时发散，真实高压行为会受多层凝聚、毛细现象和孔结构影响。

16. 本题两个高精度模拟点足以完成代数反演，但不代替真实BET多点线性区、Rouquerol一致性标准和样品脱气质量控制。

#### 数值结果与单位

- pressure_x1: 0.0500000000000000 fraction
- pressure_x2: 0.200000000000000 fraction
- adsorbed_v1_cm3STP_g: 79.9467021985343 cm3/g
- adsorbed_v2_cm3STP_g: 117.187500000000 cm3/g
- BET_y1: 0.000658333333333333 g/cm3
- BET_y2: 0.00213333333333333 g/cm3
- BET_slope: 0.00983333333333333 g/cm3
- BET_intercept: 0.000166666666666667 g/cm3
- monolayer_capacity_cm3STP_g: 100.000000000000 cm3/g
- inferred_BET_C: 60.0000000000000 ratio
- predicted_v_at_x0p10_cm3STP_g: 96.6183574879227 cm3/g
- predicted_y_at_x0p10: 0.00115000000000000 g/cm3
- monolayer_moles_g: 0.00446149727848666 mol/g
- monolayer_molecules_g: 2.68677646114036e+21 molecules/g
- BET_surface_m2_g: 435.257786704738 m2/g
- layer_energy_difference_kJ_mol: 2.62125516020116 kJ/mol
- v1_over_vm: 0.799467021985343 ratio
- v2_over_vm: 1.17187500000000 ratio
- v3_over_vm: 0.966183574879227 ratio
- slope_plus_intercept: 0.0100000000000000 g/cm3
- inverse_slope_plus_intercept: 100.000000000000 cm3/g
- slope_over_intercept: 59.0000000000000 ratio
- x1_over_1_minus_x1: 0.0526315789473684 ratio
- x2_over_1_minus_x2: 0.250000000000000 ratio
- v0p10_crosscheck: 96.6183574879227 cm3/g
- specific_area_per_STP_cm3: 4.35257786704738 m2_per_cm3
- inverse_vm: 0.0100000000000000 g/cm3
- specific_area_per_mol: 97558.6803120000 m2/mol
- monolayer_mmol_g: 4.46149727848666 mmol/g

<a id="batch-30"></a>

## 第十二辑第三十批 · I171/A171/O167/P167

本批新创四题均有完整分步推导、无量纲平衡/化学模型检查及独立数值见证函数，属于awaiting_expert_review草稿，不代表跨辑排重和学术出版审定。

### UC-ADV12-I171 Fe(II)低自旋—高自旋热平衡的磁化率、自旋熵与压力响应

#### 完整题目

考虑理想无相互作用的六配位Fe(II)分子晶体，低自旋态LS为d⁶、S=0、简并度gLS=1；高自旋态HS为d⁶、S=2、自旋简并度gHS=5，两个态均不发生价态改变。以1 bar为基准压强，HS相对LS的摩尔焓差ΔH=+12.000 kJ/mol、额外振动熵差ΔS_vib=+18.00 J/(mol K)，HS摩尔体积较大ΔV=+5.000 cm³/mol，均假定与温度、压力无关。忽略自旋轨道耦合、交换相互作用、磁滞及LS抗磁修正。每个Fe独立选择LS或HS，温度260.0 K和400.0 K、压强1 bar；另比较300.0 K下1 bar与500.0 MPa（压力仅以ΔV项改变两态G）。自旋朗德因子g=2.000，R=8.314462618 J/(mol K)、kB=1.380649×10⁻²³ J/K、NA=6.02214076×10²³ mol⁻¹、μB=9.2740100783×10⁻²⁴ J/T、μ0=4π×10⁻⁷ H/m。推导HS分数的平衡、混合自由能凸性、熵及热容忽略假设的范围；求260/400 K的HS分数、摩尔Curie量χMT（SI m³ K/mol）、摩尔磁化率χM（SI m³/mol）、有效磁矩μeff（以μB为单位）、平衡混合熵/焓/自由能、半转换温度、磁性及压力稳定性的交叉校验。求300 K高压HS分数和局域dpHS/dP，解释为何不能把五重自旋简并同时计入两次。

#### 解答及模型推导

1. Fe²⁺始终为d⁶，LS态S=0简并度1，HS态S=2简并度2S+1=5；不应把配位场转换误写成氧化还原反应。

2. 以LS单态为零能量，HS/LS分子配分函数比K(T,P)=5 exp(ΔS_vib/R) exp{−[ΔH+(P−P₀)ΔV]/(RT)}。

3. 注意ΔS_vib是额外振动熵，ln5仅表示电子自旋多重性，不能再把Rln5重复加进ΔS_vib。

4. 对独立分子占位，pHS=K/(1+K)，pLS=1−pHS，宏观配分函数(1+K)^N给出同样的平均分数。

5. 260 K时K=0.16919701597、pHS=0.14471215173；400 K时K=1.1807734052、pHS=0.54144708587。

6. 高温使HS分数增加0.39673493415；半转换温度满足ΔH=T(ΔS_vib+Rln5)，即T½=382.38954217 K。

7. 每mol Fe的自旋混合熵S=−R[p ln p+(1−p)ln(1−p)]+p(ΔS_vib+Rln5)，式中p∈(0,1)。

8. 在1 bar相对于全LS的平均焓H=pΔH，自由能G=H−TS；对于给定温度，平衡态G允许为负，这是混合贡献，不是负的绝对晶体焓。

9. 260 K得到S=7.9787159204 J/(mol K)、H=1.7365458207 kJ/mol、G=-0.33792031859 kJ/mol。

10. 400 K得到S=22.726029355 J/(mol K)、H=6.4973650304 kJ/mol、G=-2.5930467117 kJ/mol。

11. 对任意暂定分数p，自由能G(p)=pΔH−Tp(ΔS_vib+Rln5)+RT[p lnp+(1−p)ln(1−p)]。

12. 其二阶导G''=RT/[p(1−p)]>0；260与400 K的数值曲率分别17465.870276和13395.184445 J/mol，确保平衡解唯一。

13. HS自旋仅取S=2、g=2，纯HS摩尔Curie常数C=μ₀ NA (gμB)² S(S+1)/(3kB)，单位m³ K/mol；LS按题设无磁贡献。

14. 纯HS磁矩μspin=g√[S(S+1)]=4.8989794856 μB，纯HS Curie常数C=0.000037714000089 m³ K/mol。

15. 两温度下χMT=p C，依次0.0000054576741031、0.000020420135445 m³ K/mol，χM=χMT/T依次2.0991054243e-8、5.1050338612e-8 m³/mol。

16. 混合物平均有效磁矩μeff=μspin√p，260与400 K依次1.8636232563、3.6048203923 μB；不可将p线性乘在μeff上。

17. 300 K时1 bar与500 MPa下pHS分别0.26181546861、0.11520701417；P升高引入Δ(PΔV)=2499.5000000 J/mol而稳定体积较小的LS态。

18. 在300 K有∂lnK/∂P=−ΔV/(RT)=-2.0045392507e-9 Pa⁻¹、高压dpHS/dP=-2.0433142173e-10 Pa⁻¹。

19. 本题不包含铁位点之间的协同相互作用，不能由单分子两态模型外推出一阶突变、磁滞或团簇有序。

#### 全部计算结果及单位

- HS_fraction_260K: 0.144712151725560 fraction
- HS_fraction_400K: 0.541447085870589 fraction
- HS_fraction_increase: 0.396734934145030 fraction
- HS_to_LS_K_260K: 0.169197015972481 ratio
- HS_to_LS_K_400K: 1.18077340517737 ratio
- molar_Curie_chiT_260_SI: 0.00000545767410305966 m3 K/mol
- molar_Curie_chiT_400_SI: 0.0000204201354447217 m3 K/mol
- molar_susceptibility_260_SI: 2.09910542425372e-8 m3/mol
- molar_susceptibility_400_SI: 5.10503386118042e-8 m3/mol
- effective_moment_260_muB: 1.86362325629764 muB
- effective_moment_400_muB: 3.60482039232111 muB
- pure_HS_spin_only_moment_muB: 4.89897948556636 muB
- pure_HS_Curie_constant_SI: 0.0000377140000890175 m3 K/mol
- half_conversion_temperature_K: 382.389542166931 K
- mix_entropy_260_J_mol_K: 7.97871592037628 J/(mol K)
- relative_H_260_kJ_mol: 1.73654582070671 kJ/mol
- relative_G_260_kJ_mol: -0.337920318591117 kJ/mol
- G_curvature_260_J_mol: 17465.8702761343 J/mol
- mix_entropy_400_J_mol_K: 22.7260293554243 J/(mol K)
- relative_H_400_kJ_mol: 6.49736503044707 kJ/mol
- relative_G_400_kJ_mol: -2.59304671172266 kJ/mol
- G_curvature_400_J_mol: 13395.1844446787 J/mol
- HS_fraction_300K_1bar: 0.261815468608894 fraction
- HS_fraction_300K_500MPa: 0.115207014172509 fraction
- pressure_G_HS_minus_LS_shift_J_mol: 2499.50000000000 J/mol
- pressure_logK_derivative_per_Pa: -2.00453925074905e-9 Pa^-1
- pressure_HS_fraction_derivative_per_Pa: -2.04331421727097e-10 Pa^-1
- HS_to_LS_K_300K_500MPa: 0.130207874630430 ratio
- HS_fraction_highP_over_lowP: 0.440031350266047 ratio
- mean_spin_multiplicity_260: 1.57884860690224 dimensionless

### UC-ADV12-A171 非线性荧光标准加入法的饱和响应、三点逆解与误差传播

#### 完整题目

某假想分析物的荧光探针在固定基体内满足饱和响应F(s)=Fmax(Cx+s)/(Kd+Cx+s)，其中未知原样浓度Cx>0、未知饱和响应Fmax>0及未知半饱和浓度Kd>0，响应扣除了空白、无荧光内滤效应，所加标准溶液引起的总体积变化已准确校正。向等体积平行样中分别加入s=0、0.01000、0.02000 mol/L的分析物，理想读数依次为F0=285.71428571、F1=375.00000000、F2=444.44444444（仪器积分单位），这些读数为题目完整输入，不预告模拟数据的生成参数。假设三次测量彼此独立，标准不确定度均uF=0.5000积分单位，加入标准浓度无误差。以三个观测点构造代数逆解求Fmax、Kd和Cx，再求原样浓度及其一阶传播标准不确定度、浓度相对不确定度及斜率/残差；必须采用对三观测值的全Jacobian，不能把饱和信号当作直接线性比值。校验0<Cx、0<Kd、F2<Fmax，检验三点可辨识且增量标准加入数据无自相矛盾。

#### 解答及模型推导

1. 题设探针有可饱和非线性响应，F=Fmax c/(Kd+c)，其中c=Cx+s；标准加入的三组s完全已知。

2. 输入数据为F0=285.71428571、F1=375.00000000、F2=444.44444444，其增量递减，符合响应饱和而非简单Beer–Lambert线性。

3. 对等间距加入量0、h、2h（h=0.01000 M），定义G(s)=F(s)/(Fmax−F(s))=(Cx+s)/Kd，故G0−2G1+G2=0。

4. 以三点等差条件消去Fmax，得Fmax=[F1(F0+F2)−2F0F2]/[2F1−F0−F2]；分母为零时本反演无法使用。

5. 本题分母2F1−F0−F2=19.841269841>0，所得Fmax=1000.0000000，并满足F2<Fmax。

6. 计算线性化变量G0=0.40000000000、G1=0.60000000000、G2=0.80000000000，二阶差分-1.1102230246e-16接近0。

7. 由G(s)=(Cx+s)/Kd，斜率m=(G2−G0)/(2h)=1/Kd，截距G0=Cx/Kd；从而Kd=1/m、Cx=G0/m。

8. 反演m=20.000000000 M⁻¹、Kd=0.050000000000 mol/L、Cx=0.020000000000 mol/L（20.000000000 mmol/L）。

9. 在原样附近dF/dc=Fmax Kd/(Kd+c)²，响应随浓度增加单调但灵敏度逐渐降低。

10. 在s=0处dF/dc=10204.081633 积分单位/(mol/L)；F0/其单次噪声标准差=571.42857143。

11. 为传播三次读数不确定度，把θ=(Cx,Kd,Fmax)作为待估参数，对每次加入量s_j求观测偏导。

12. Jacobian每行分别为∂F/∂Cx=Fmax Kd/(Kd+c)²，∂F/∂Kd=−Fmax c/(Kd+c)²，∂F/∂Fmax=c/(Kd+c)。

13. 因三参数恰由三个独立读数确定，局部测量扰动满足dθ=J⁻¹dF，因此u(Cx)²=uF² Σ_j [(J⁻¹)₁j]²。

14. 三个独立敏感度∂Cx/∂F0=0.00058800000000、∂Cx/∂F1=-0.0010240000000、∂Cx/∂F2=0.00048600000000 mol/L/积分单位。

15. 得到u(Cx)=0.00063845829934 mol/L，即0.63845829934 mmol/L；相对标准不确定度0.031922914967。

16. 由饱和曲线反演出的浓度和线性化点必须回代全部三条响应公式，以判断误差来自统计不确定度还是模型失配。

17. 这里假设同一基体和同一Fmax,Kd，实际荧光测量应另查光漂白、淬灭、散射、移液和非线性曲线的参数稳定性。

#### 全部计算结果及单位

- fluorescence_F0: 285.714285714286 integral
- fluorescence_F1: 375.000000000000 integral
- fluorescence_F2: 444.444444444444 integral
- inferred_Fmax: 999.999999999997 integral
- saturation_ratio_G0: 0.400000000000001 ratio
- saturation_ratio_G1: 0.600000000000003 ratio
- saturation_ratio_G2: 0.800000000000004 ratio
- linearized_slope_per_M: 20.0000000000001 M^-1
- inferred_Kd_M: 0.0499999999999997 mol/L
- inferred_unknown_concentration_M: 0.0200000000000000 mol/L
- unknown_concentration_mM: 20.0000000000000 mmol/L
- saturation_Fmax_denominator: 19.8412698412699 integral
- F2_to_F0_ratio: 1.55555555555556 ratio
- raw_F0_signal_to_noise: 571.428571428571 ratio
- transformed_line_second_difference: 0.00000000000000 dimensionless
- response_derivative_F0_per_M: 10204.0816326531 integral/M
- dCx_dF0_M_per_unit: 0.000587999999999999 M/integral
- dCx_dF1_M_per_unit: -0.00102400000000000 M/integral
- dCx_dF2_M_per_unit: 0.000485999999999998 M/integral
- unknown_standard_uncertainty_M: 0.000638458299343033 mol/L
- unknown_relative_uncertainty: 0.0319229149671517 fraction
- unknown_standard_uncertainty_mM: 0.638458299343033 mmol/L
- concentration_after_second_spike_M: 0.0400000000000000 mol/L
- G0_from_inversion: 0.400000000000001 ratio
- G2_from_inversion: 0.800000000000004 ratio
- remaining_response_headroom_Fmax_minus_F2: 555.555555555553 integral
- Kd_plus_original_concentration_M: 0.0699999999999997 mol/L
- F1_over_Fmax: 0.375000000000001 fraction

### UC-ADV12-O167 Diels–Alder内/外型双通道的Eyring选择性反转与产率预测

#### 题干

某理想假想Diels–Alder反应中，过量亲双烯体与单一二烯底物的活度恒定，可把内型(endo)和外型(exo)两条不可逆平行路径均视为准一级。两路径均服从k(T)=(kB T/h)exp(ΔS‡/R−ΔH‡/(RT))，不含额外透射系数。内型：ΔH‡=70.00 kJ/mol、ΔS‡=−80.00 J/(mol K)；外型：ΔH‡=74.00 kJ/mol、ΔS‡=−70.00 J/(mol K)。R=8.314462618 J/(mol K)，kB=1.380649×10⁻²³ J/K，h=6.62607015×10⁻³⁴ J·s。起始二烯浓度0.02000 mol/L，产物不互变也不逆反应。分别在298.15 K反应1800.0 s和450.0 K反应2.000 s。求两通道Eyring速率常数、总消耗常数、转化率、内/外分支和浓度、表观混合活化焓，确定两通道速率何时相等及升温导致内/外选择性反转的条件。核验物料守恒、产物比与速率比、ΔG‡(T)=ΔH‡−TΔS‡及指数中的量纲。不要将最终内型/外型分支与平衡热力学稳定度混淆。

#### 解答

1. 反应物只有一个被计数的二烯底物，亲双烯体过量，故有效速率方程为−d[A]/dt=(kendo+kexo)[A]。
2. 每个速率按Eyring关系从同一基元kBT/h乘热力学活化因子得到，指数ΔS‡/R−ΔH‡/(RT)均为无量纲。
3. 不能把路径活化熵当作产物的平衡熵，内/外型产物比在互斥不可逆路径下取决于相应速率之比。
4. 298.15 K时kendo=0.00022444143361 s⁻¹、kexo=0.00014882282835 s⁻¹、总速率0.00037326426196 s⁻¹。
5. 对应选择性比kendo/kexo=1.5081115988，内/外型分支分数0.60129365836和0.39870634164。
6. 令t=1800.0 s，由[A](t)=A0 exp(−(kendo+kexo)t)得到转化率X=1−exp(−kt)。
7. 298.15 K下转化率X=0.48925031985，内型产物0.0058836622935 mol/L、外型产物0.0039013441035 mol/L，剩余底物0.010214993603 mol/L。
8. 对每条通道有ΔG‡(T)=ΔH‡−TΔS‡；在298.15 K求内外型活化Gibbs自由能分别为ΔG‡endo=70.00+0.08000T、ΔG‡exo=74.00+0.07000T kJ/mol。
9. 对应数值为93.852000000和94.870500000 kJ/mol。
10. 对总速率kΣ/T=(kB/h)[exp(ΔSendo/R−Hendo/RT)+exp(ΔSexo/R−Hexo/RT)]，求−R dln(kΣ/T)/d(1/T)得到两路径分支权重的活化焓。
11. 298.15 K表观活化焓=71.594825367 kJ/mol，不可简单无权重平均70和74 kJ/mol。
12. 450.0 K时kendo=4.6571514420 s⁻¹、kexo=5.3230153225 s⁻¹、总速率=9.9801667645 s⁻¹。
13. 高温内/外型比=0.87490851704，分支=0.46664064358与0.53335935642，已转为外型占优。
14. 450.0 K、t=2 s，转化率=0.99999999786，内型=0.0093328128515 mol/L、外型=0.010667187106 mol/L、残余底物=4.2891110138e-11 mol/L。
15. 450.0 K的表观活化焓=72.133437426 kJ/mol，内外通道活化Gibbs自由能分别106.00000000、105.50000000 kJ/mol。
16. 因两通道的Eyring前因子相同，ln(kendo/kexo)=(ΔSendo−ΔSexo)/R−(ΔHendo−ΔHexo)/(RT)=−10/R+4000/(RT)。
17. 令速率比等于1，选择性反转温度Tcross=4000/10=400.00000000 K；低于此温度内型占优，高于此温度外型占优。
18. 两温度最终产物内/外型比应严格等于相应速率比：298 K为1.5081115988、450 K为0.87490851704。
19. 把两产物和剩余[A]相加，298 K=0.020000000000 mol/L、450 K=0.020000000000 mol/L，均恢复初始0.02000 mol/L。
20. 实际Diels–Alder反应还可能涉及溶剂活度、逆环加成、次级轨道作用、底物构象和产物异构化；这些均不在理想模型内。

#### 独立复算数值

| 量 | 值 | 单位 |
|---|---:|---|
| `k_endo_298_s` | 0.00022444143360757018 | s^-1 |
| `k_exo_298_s` | 0.00014882282835034332 | s^-1 |
| `total_k_298_s` | 0.0003732642619579135 | s^-1 |
| `endo_exo_rate_ratio_298` | 1.5081115988416331 | ratio |
| `endo_fraction_298` | 0.6012936583596008 | fraction |
| `exo_fraction_298` | 0.3987063416403992 | fraction |
| `conversion_298` | 0.48925031985189743 | fraction |
| `endo_product_298_M` | 0.005883662293547045 | mol/L |
| `exo_product_298_M` | 0.003901344103490904 | mol/L |
| `unreacted_diene_298_M` | 0.010214993602962052 | mol/L |
| `Eyring_weighted_activation_enthalpy_298_kJ_mol` | 71.5948253665616 | kJ/mol |
| `endo_deltaG_activation_298_kJ_mol` | 93.852 | kJ/mol |
| `exo_deltaG_activation_298_kJ_mol` | 94.8705 | kJ/mol |
| `k_endo_450_s` | 4.657151441963649 | s^-1 |
| `k_exo_450_s` | 5.323015322497885 | s^-1 |
| `total_k_450_s` | 9.980166764461533 | s^-1 |
| `endo_exo_rate_ratio_450` | 0.8749085170354587 | ratio |
| `endo_fraction_450` | 0.46664064357595125 | fraction |
| `exo_fraction_450` | 0.5333593564240489 | fraction |
| `conversion_450` | 0.9999999978554445 | fraction |
| `endo_product_450_M` | 0.00933281285150429 | mol/L |
| `exo_product_450_M` | 0.010667187105604601 | mol/L |
| `unreacted_diene_450_M` | 4.289111013831902e-11 | mol/L |
| `Eyring_weighted_activation_enthalpy_450_kJ_mol` | 72.1334374256962 | kJ/mol |
| `endo_deltaG_activation_450_kJ_mol` | 106 | kJ/mol |
| `exo_deltaG_activation_450_kJ_mol` | 105.5 | kJ/mol |
| `selectivity_equal_rate_temperature_K` | 400 | K |
| `product_ratio_450` | 0.8749085170354588 | ratio |
| `product_ratio_298` | 1.5081115988416331 | ratio |
| `log_endo_exo_rate_ratio_residual_298` | 0 | dimensionless |
| `product_mass_balance_450_M` | 0.02 | mol/L |
| `product_mass_balance_298_M` | 0.02 | mol/L |

### UC-ADV12-P167 N₂O₄理想气体绝热恒容解离：温度—转化率耦合的唯一平衡解

#### 题干

一理想、绝热、刚性密闭反应器体积V=0.02500 m³，初始含1.000 mol N₂O₄纯气体、温度T₀=300.0 K，反应N₂O₄(g)⇌2NO₂(g)，无惰性气体。用ξ表示初始每1 mol N₂O₄解离的反应进度，0<ξ<1。取理想气体恒定Cv(N₂O₄)=75.00 J/(mol K)、Cv(NO₂)=35.00 J/(mol K)，基准温度Tref=300.0 K时反应内能ΔrUref=+55.00 kJ/mol。无壁面功与热交换、无其他反应。在固定浓度标准态c°=40.00 mol/m³，300.0 K时平衡常数Kc(Tref)=0.1000，定义Kc=[(cNO₂/c°)²]/(cN₂O₄/c°)。采用恒容标准态Van’t Hoff形式dlnKc/dT=ΔrU(T)/(RT²)，其中ΔrU(T)=ΔrUref+ΔCv(T−Tref)、ΔCv=2Cv(NO₂)−Cv(N₂O₄)，R=8.314462618 J/(mol K)。求绝热平衡ξ与最终温度、各物种量、平衡常数与浓度反应商、恒容能量守恒残差和压力（总压及分压），并与300 K外加恒温浴的等温平衡进度比较。把所得Kc转成p°=1.000 bar的无量纲Kp，独立用分压验证，说明内能与焓差及温度反馈的区别。所有定容气相标准态和热容为题设近似，不应用常压ΔH盲代。

#### 解答

1. 选定每初始1 mol N₂O₄的反应进度ξ，定容无惰性气体的摩尔数nN2O4=1−ξ、nNO2=2ξ、总n=1+ξ。
2. 气体总内能相对于300 K纯N₂O₄基准为U=[75+(2×35−75)ξ](T−300)+ξ×55000 J。
3. 反应热容差ΔCv=2Cv(NO₂)−Cv(N₂O₄)=−5 J/(mol K)；绝热刚性容器无热和体积功，因此令U=0。
4. 对任意ξ可解能量约束T(ξ)=300−55000ξ/[75−5ξ]，使温度下降，不能擅自保持300 K。
5. 理想气体浓度由c_i=n_i/V计算，而c°=40 mol/m³，因此浓度形式反应商Q_c=4ξ²/(1−ξ)。
6. 依据给定恒容基准，ΔrU(T)=ΔrUref+ΔCv(T−Tref)；积分dlnKc/dT=ΔrU(T)/(RT²)得ln[Kc(T)/Kref]=ΔUref/R(1/Tref−1/T)+ΔCv/R[ln(T/Tref)+Tref/T−1]。
7. 由于反应吸热，降温使Kc减小，而Q_c随ξ严格增大；在使T>0的物理区间内两者恰有一个交点。
8. 保界数值求解Q_c(ξ)=Kc(T(ξ))，得到ξ=0.042638113141，最终T=268.64291657 K，绝热温降31.357083428 K。
9. 最终N₂O₄=0.95736188686 mol、NO₂=0.085276226281 mol、气体总量=1.0426381131 mol，符合2N+N₂O₄的氮氧计量。
10. 计算Kc(Tfinal)=0.0075959100405，由物种浓度得到Q_c=0.0075959100405，差0。
11. 总恒容热容=74.786809434 J/K，气体显热变化=-2345.0962227 J，反应基准内能变化=2345.0962227 J，相加得到U残差-1.3642420527e-12 J。
12. 注意ΔrU(Tfinal)=ΔUref+ΔCv(Tfinal−300)；对于理想气体反应Δn=+1，所以ΔrH=ΔrU+RT，并非把ΔU和ΔH混同。
13. 最终ΔrU=55.156785417 kJ/mol，ΔrH=57.390406905 kJ/mol。
14. 气体理想总压P=nRT/V=0.93154355725 bar；N₂O₄与NO₂分压分别为0.85535363269和0.076189924555 bar。
15. 以压力标准态p°=1 bar为无量纲压力活度，平衡常数Kp=Kc(c°RT/p°)^Δν；Δν=1，所以不能忘记c°RT/p°因子。
16. 由浓度换算Kp=0.0067865551532，分压反应商Qp=(pNO₂/p°)²/(pN₂O₄/p°)=0.0067865551532，两者之差-1.2143064332e-17。
17. 另在300 K外部恒温浴中求等温平衡Q_c(ξ)=0.1000，得到ξ_iso，温度反馈不再耦合热量。
18. 对应等温解离进度ξ_iso=0.14610721926，绝热与等温之比0.29182755895，说明吸热造成绝热解离显著减小。
19. 300 K下的Kc只在300 K使用；温度变化后必须用热力学积分更新Kc，不能用常压ΔH套进恒容Van’t Hoff式。
20. 模型忽略温度相关热容、NO₂二聚以外的反应、容器热容及非理想气体压缩性；实验平衡还应验证反应时间尺度和传热边界。

#### 独立复算数值

| 量 | 值 | 单位 |
|---|---:|---|
| `adiabatic_equilibrium_extent_xi` | 0.04263811314061834 | mol_progress |
| `adiabatic_equilibrium_temperature_K` | 268.64291657214943 | K |
| `adiabatic_temperature_drop_K` | 31.35708342785057 | K |
| `final_N2O4_mol` | 0.9573618868593816 | mol |
| `final_NO2_mol` | 0.08527622628123668 | mol |
| `final_total_mol` | 1.0426381131406184 | mol |
| `Kc_at_final_temperature` | 0.0075959100404806405 | dimensionless |
| `concentration_quotient_at_final` | 0.007595910040480655 | dimensionless |
| `Kc_equilibrium_residual` | 0 | dimensionless |
| `isothermal_300K_extent` | 0.146107219255619 | J/K |
| `adiabatic_over_isothermal_extent` | 0.2918275589519069 | J/K |
| `final_total_Cv_J_K` | 74.78680943429691 | J/K |
| `reactant_sensible_internal_energy_J` | -2345.09622273401 | J |
| `reaction_reference_energy_J` | 2345.0962227340087 | J |
| `adiabatic_internal_energy_residual_J` | 0 | J |
| `deltaU_reaction_at_final_kJ_mol` | 55.156785417139254 | kJ/mol |
| `deltaH_reaction_at_final_kJ_mol` | 57.390406904568884 | kJ/mol |
| `final_total_pressure_bar` | 0.931543557249588 | bar |
| `final_N2O4_partial_pressure_bar` | 0.8553536326941154 | bar |
| `final_NO2_partial_pressure_bar` | 0.0761899245554726 | bar |
| `converted_Kp_at_final` | 0.0067865551532000105 | dimensionless |
| `Kp_from_partial_pressures` | 0.006786555153200023 | dimensionless |
| `pressure_form_equilibrium_residual` | 0 | dimensionless |
| `final_NO2_mole_fraction` | 0.0817889018313065 | fraction |
| `final_N2O4_mole_fraction` | 0.9182110981686934 | fraction |
| `reaction_DeltaCv_J_mol_K` | -5 | J/(mol K) |
| `log_Kc_final_over_reference` | -2.5775602361202083 | dimensionless |
| `dimensionless_ideal_gas_composition_term` | -0.2951884671601577 | dimensionless |
| `reaction_reference_energy_kJ` | 2.345096222734009 | kJ |
| `temperature_for_trial_xi0p3_K` | 75.51020408163265 | K |
| `NO2_to_N2O4_concentration_ratio` | 3.5629672520590803 | ratio |

<a id="batch-31"></a>

## 第十二辑第三十一批 · I172/A172/O168/P168

四科各一道全新高阶综合题：掺杂NaCl缺陷热力学、色谱三速度反演、水活度缩醛平衡与Nernst–Planck扩散电势。所有题均为待专家审校稿，独立数值复算不代表科学出版审核。

### UC-ADV12-I172 Ca²⁺掺杂NaCl的非稀Schottky空位、电中性与温度耦合

#### 完整题目

在理想单晶NaCl中，有0.004000比例的Na子晶格位置被Ca²⁺取代，即Ca_Na^•分数c=0.004000；Na空位V_Na′（负一有效电荷）分数v和Cl空位V_Cl^•（正一有效电荷）分数y均以各自子晶格位点数作分母，晶体无电子/空穴、间隙离子和其他缺陷。每个Na与Cl子晶格各恰好一个位点/化学式单元，Na占位分数为1−c−v、Cl占位分数为1−y，电中性要求v=c+y。假定Schottky缺陷形成平衡的理想位点活度乘积K(T)=[v/(1−c−v)]·[y/(1−y)]，900.0 K时K=1.000×10⁻⁶，形成反应焓近似ΔH=+100.0 kJ/mol、温度不变；K(T)=K(900 K) exp[(ΔH/R)(1/900−1/T)]，R=8.314462618 J/(mol K)。求900.0与1100.0 K的阴阳离子空位、Na/Cl占位、电荷平衡和位点数、温升K及空位增强倍数；求d y/d lnK与热力学唯一根的证明。说明若误以每个Ca都由一个Na空位补偿而忽略热激发Cl空位，会漏掉的内禀Schottky贡献，以及掺杂是否真正改变各子晶格的位点数量。

#### 逐步解答

1. 各子晶格的位点分母固定为1，Ca_Na^•占Na位分数c=0.004；Na空位v，Na实际占位1−c−v；阴离子空位y，Cl实际占位1−y。

2. Kröger–Vink有效电荷平衡为[Ca_Na^•]+[V_Cl^•]−[V_Na′]=0，所以v=c+y；仅取v=c会把所有热Schottky对错误地忽略。

3. 以理想占位分数为活度，Na空位/正常Na位的比为v/(1−c−v)，Cl空位/正常Cl位比为y/(1−y)。

4. 代入v=c+y得到单变量方程K(T)=(c+y)y/[(1−2c−y)(1−y)]，有效域0<y<1−2c。

5. 其对数导数dlnQ/dy=1/y+1/(c+y)+1/(1−2c−y)+1/(1−y)>0，且Q从0递增至无穷，故正根唯一。

6. 温升平衡常数按指定形成焓的Van’t Hoff关系放大；本题并非在两温度保持同一K。

7. 900 K的K=0.00000100000000000，1100 K的K=0.0000113559807828，ln(K1100/K900)=2.42974454636。

8. 数值解900 K时Cl空位y=0.000234174026386、Na空位v=0.00423417402639；1100 K时相应y=0.00190155848709、v=0.00590155848709。

9. 900 K Na占位=0.991765825974、Cl占位=0.999765825974；1100 K分别=0.990098441513、0.998098441513。

10. 两温度必须逐项核对Na子晶格c+v+nNa=1、Cl子晶格y+nCl=1和有效电荷c+y−v=0。

11. 回代Q900=0.00000100000000000、Q1100=0.0000113559807828，与温度相关平衡常数分别一致。

12. 阴离子空位温升倍数=8.12027924889，两温度的Na空位/Cl空位比依次18.0813136783、3.10353771770。

13. 对lnQ(y)=lnK隐式求导，得dy/dlnK=1/[1/y+1/(c+y)+1/(1−2c−y)+1/(1−y)]。

14. 900 K与1100 K相应灵敏度0.000221802742600、0.00143401432996，高温内禀空位的热激发贡献更显著。

15. Na与Cl占位数可不相等但各子晶格总位点数仍为1，晶体整体电中性通过掺杂缺陷的有效电荷严格满足。

16. 模型不处理复合缺陷、缔合、位错、表面非化学计量和真实CaCl₂掺杂时的相平衡限制，不能直接用该理想缺陷分数替代实验定量结果。

#### 独立数值答案向量

- Schottky_K_900: 0.00000100000000000000 dimensionless
- Schottky_K_1100: 0.0000113559807828452 dimensionless
- Cl_vacancy_900: 0.000234174026385795 fraction
- Cl_vacancy_1100: 0.00190155848708859 fraction
- Na_vacancy_900: 0.00423417402638579 fraction
- Na_vacancy_1100: 0.00590155848708859 fraction
- Na_occupied_900: 0.991765825973614 fraction
- Na_occupied_1100: 0.990098441512911 fraction
- Cl_occupied_900: 0.999765825973614 fraction
- Cl_occupied_1100: 0.998098441512911 fraction
- Cl_vacancy_growth_factor: 8.12027924888574 ratio
- Na_to_Cl_vacancy_ratio_900: 18.0813136782733 ratio
- Na_to_Cl_vacancy_ratio_1100: 3.10353771769821 ratio
- dy_dlnK_900: 0.000221802742599649 fraction
- dy_dlnK_1100: 0.00143401432996041 fraction
- Q_Schottky_900: 0.00000100000000000000 dimensionless
- Q_Schottky_1100: 0.0000113559807828452 dimensionless
- charge_residual_900: 0.00000000000000 effective_charge
- charge_residual_1100: 0.00000000000000 effective_charge
- Na_sub_lattice_site_sum_900: 1.00000000000000 sites
- Na_sub_lattice_site_sum_1100: 1.00000000000000 sites
- Cl_sub_lattice_site_sum_900: 1.00000000000000 sites
- Cl_sub_lattice_site_sum_1100: 1.00000000000000 sites
- vacancy_charge_compensation_900: 0.00400000000000000 fraction
- vacancy_charge_compensation_1100: 0.00400000000000000 fraction
- ln_K_high_over_low: 2.42974454636248 ratio
- Na_vacancy_growth_factor: 1.39379214229559 ratio
- Na_to_Cl_stoichiometric_ratio_900: 0.991998126168986 ratio
- Na_to_Cl_stoichiometric_ratio_1100: 0.991984758549594 ratio

### UC-ADV12-A172 Van Deemter三速度精确逆解与色谱分离度优化

#### 完整题目

一根长度L=25.00 cm的理想液相色谱柱，峰高等效理论板高度遵守Van Deemter模型H(u)=A+B/u+C u（u为线速度cm/s），其中A、B、C均未知正数。实测三组精确模拟数据：(u=0.2500 cm/s,H=0.01100 cm)、(u=0.5000 cm/s,H=0.008000 cm)、(u=1.000 cm/s,H=0.008000 cm)。两组不互变分析物保留因子k′₁=2.000、k′₂=2.500在所研究流速区间不变；死时间tM=L/u，保留时间tR,i=tM(1+k′i)，同一流速下各峰板数N=L/H，假设Gaussian峰标准差σti=tR,i/√N、基线宽w_i=4σti。分离度定义Rs=2(tR,2−tR,1)/(w1+w2)，不使用容易混淆的近似保留因子公式。由三数据反演A、B、C，证明H最小化的最佳流速唯一，计算最佳流速下H、N、两峰保留时间及峰宽、Rs；与u=0.5000 cm/s比较N和Rs，核对反演单位与峰宽公式的精确一致性。讨论为什么在本简化模型中增大流速未必提高分离度。

#### 逐步解答

1. Van Deemter式中u以cm/s计，故A为cm，B为cm²/s，C为s；每项均返回cm的板高H。

2. 把H(u)=A+B/u+Cu乘u，化成uH(u)=Cu²+Au+B，从三个不同u得到一个二次多项式插值逆问题。

3. 令三组u=0.25、0.50、1.00 cm/s，先计算三个uH，再用相邻割线斜率求C与A，最后算B。

4. 精确反演得到A=0.00200000000000 cm，B=0.00200000000000 cm²/s，C=0.00400000000000 s；三者均为正。

5. 求导H′(u)=−B/u²+C，H″(u)=2B/u³>0，所以u*=√(B/C)是唯一全局极小点。

6. 最优流速u*=0.707106781187 cm/s，最低板高Hmin=0.00765685424949 cm，理论板数N=L/Hmin=3265.04843705。

7. 以u*计算死时间tM=L/u*，而不是使用另一个流速的死时间；分析物保留因子设为常数。

8. 最优死时间=35.3553390593 s，保留时间分别tR1=106.066017178 s、tR2=123.743686708 s。

9. Gaussian峰方差公式给σti=tRi/√N，基线宽wi=4σti，两个峰因保留时间不同故宽度不同。

10. 标准差σ1=1.85622854527、σ2=2.16559996948 s，峰宽w1=7.42491418108、w2=8.66239987792 s。

11. 直接代入分离度定义Rs=2Δt/(w1+w2)，得到Rs=√N (k′₂−k′₁)/[2(2+k′₁+k′₂)]。

12. 最优Rs=2.19771547504，由板数公式独立验算得2.19771547504。

13. 基准u=0.5000 cm/s下理论板数N=3125.00000000，Rs=2.15006536298；最优分离度提高因子1.02216216906。

14. 虽然随u增加死时间缩短，峰宽也按tM缩短，但Rs直接依赖√N，而H(u)先降后升。

15. 该题不包含保留因子随流速变化、梯度洗脱和非Gaussian拖尾；实际分离度还受载样量、颗粒粒径及检测器采集速率制约。

16. 校验每个给定H数值均由反演后的A+B/u+Cu严格恢复，不把H的三个测量值误当成三个未知流速。

#### 独立数值答案向量

- H_u0p25_cm: 0.0110000000000000 cm
- H_u0p5_cm: 0.00800000000000000 cm
- H_u1_cm: 0.00800000000000000 cm
- VanDeemter_A_cm: 0.00200000000000000 cm
- VanDeemter_B_cm2_per_s: 0.00200000000000000 cm2/s
- VanDeemter_C_s: 0.00400000000000000 s
- optimal_velocity_cm_s: 0.707106781186548 cm/s
- minimum_H_cm: 0.00765685424949238 cm
- optimum_theoretical_plates: 3265.04843704677 plates
- optimum_dead_time_s: 35.3553390593274 s
- peak1_retention_time_s: 106.066017177982 s
- peak2_retention_time_s: 123.743686707646 s
- peak1_sigma_s: 1.85622854526903 s
- peak2_sigma_s: 2.16559996948053 s
- peak1_baseline_width_s: 7.42491418107611 s
- peak2_baseline_width_s: 8.66239987792213 s
- optimum_resolution_Rs: 2.19771547504239 ratio
- resolution_from_plate_formula: 2.19771547504239 ratio
- plates_at_u0p5: 3125.00000000000 plates
- Rs_at_u0p5: 2.15006536298057 ratio
- peak_retention_separation_s: 17.6776695296637 s
- sum_baseline_width_s: 16.0873140589982 s
- resolution_improvement_factor: 1.02216216905879 ratio
- optimal_velocity_over_reference: 1.41421356237310 ratio
- retention_time_ratio: 1.16666666666667 ratio
- optimal_velocity_squared: 0.500000000000000 cm2/s2
- inverse_minimum_H_per_cm: 130.601937481871 cm^-1

### UC-ADV12-O168 水抑制缩醛形成的非线性物料平衡与反应焓温度效应

#### 完整题目

在固定体积1.000 L的理想液相反应器中，假想脂肪醛A与某单羟基醇ROH发生可逆缩醛化：A+2ROH⇌Acetal+H₂O。反应物/产物均保持单相且忽略活度系数，定义全部物种的无量纲活度a_i=[i]/c°，标准态c°=1.000 mol/L。因此K=[Acetal][H₂O]c°/([A][ROH]²)。初始[A]₀=0.02000 mol/L、[ROH]₀=0.1000 mol/L，缩醛初始为零。对比两种初始水含量W₀=0.01000与0.04000 mol/L，在298.15 K时K=20.00（无量纲）。另假定缩醛化标准反应焓ΔrH°=−25.00 kJ/mol在298.15—323.15 K保持常数，323.15 K的K由Van’t Hoff式外推，讨论W₀=0.01000 mol/L时升温后的反应进度。计算每种条件的唯一物理进度、剩余醛/醇、生成缩醛与水浓度、醛转化率、标准反应商回代和水含量对反应进度的局域灵敏度∂ξ/∂W₀，检查C/H/O原子可通过所述反应的整体计量严格守恒，并解释水抑制与放热反应升温的双重影响。不可把K误写成含单位的经验常数或把水活度强行置为1。

#### 逐步解答

1. 固定体积、只有一条缩醛化总反应，以反应进度ξ(mol/L)记[A]=A0−ξ、[ROH]=R0−2ξ、[Acetal]=ξ、[H2O]=W0+ξ。

2. 依据给定浓度标准态c°=1 M，无量纲反应商Q=ξ(W0+ξ)c°/[(A0−ξ)(R0−2ξ)²]，不能直接省略标准态做量纲运算。

3. 物理范围0<ξ<min(A0,R0/2)=0.02000 M，保证全部组分浓度正且无负物料。

4. 求lnQ关于ξ的导数1/ξ+1/(W0+ξ)+1/(A0−ξ)+4/(R0−2ξ)>0，因此Q从0严格上升到无穷，各条件有唯一平衡根。

5. 298.15 K下K=20.00，固定A0、R0，分别代入W0=0.01000与0.04000 M，使用保界二分计算。

6. 较低初始水含量的进度ξ=0.0157076851671 M，较高水含量ξ=0.0133611306618 M；水增多造成减少量0.00234655450533 M。

7. 两条件下醛转化率依次0.785384258357与0.668056533090，显示初始水抑制缩醛生成。

8. 低水条件的剩余醛=0.00429231483286、剩余醇=0.0685846296657、缩醛=0.0157076851671、水=0.0257076851671 M。

9. 高水条件的剩余醛=0.00663886933819、剩余醇=0.0732777386764、缩醛=0.0133611306618、水=0.0533611306618 M。

10. 由平衡lnQ(ξ,W0)=lnK，固定温度对W0隐式求导：dξ/dW0=−[1/(W0+ξ)]/[1/ξ+1/(W0+ξ)+1/(A0−ξ)+4/(R0−2ξ)]<0。

11. 298 K时低水、高水条件灵敏度依次-0.0987635489861与-0.0627185054316，符号均为负。

12. Van’t Hoff积分ln[K(T2)/K(T1)]=−ΔH°/R(1/T2−1/T1)。ΔH°<0的放热反应升温后K降低。

13. 323.15 K时K=9.16627176135，低水进度ξ=0.0135024787355 M，较298 K减少0.00220520643163 M。

14. 323 K下剩余醛=0.00649752126449、醇=0.0729950425290、缩醛=0.0135024787355、水=0.0235024787355 M。

15. 回代三个无量纲Q分别20.0000000000、20.0000000000、9.16627176135，应等于各自K。

16. 物种在反应中C/H/O骨架守恒：一分子醛+两分子醇生成一分子缩醛与一分子水；各物种总分子数减少一，但原子数不变。

17. 此处不含酸催化的动力学、水的非理想活度和挥发移除，实际缩醛合成常通过共沸蒸馏带水驱动，不能把该模型直接当实验转化率。

#### 独立数值答案向量

- K298: 20.0000000000000 dimensionless
- K323: 9.16627176134744 dimensionless
- extent_low_water_298_M: 0.0157076851671360 mol/L
- extent_high_water_298_M: 0.0133611306618094 mol/L
- extent_low_water_323_M: 0.0135024787355081 mol/L
- conversion_low_water_298: 0.785384258356799 fraction
- conversion_high_water_298: 0.668056533090471 fraction
- conversion_low_water_323: 0.675123936775406 fraction
- aldehyde_remaining_low_water_298_M: 0.00429231483286402 mol/L
- alcohol_remaining_low_water_298_M: 0.0685846296657280 mol/L
- acetal_produced_low_water_298_M: 0.0157076851671360 mol/L
- water_final_low_water_298_M: 0.0257076851671360 mol/L
- aldehyde_remaining_high_water_298_M: 0.00663886933819058 mol/L
- alcohol_remaining_high_water_298_M: 0.0732777386763812 mol/L
- acetal_produced_high_water_298_M: 0.0133611306618094 mol/L
- water_final_high_water_298_M: 0.0533611306618094 mol/L
- aldehyde_remaining_323_M: 0.00649752126449187 mol/L
- alcohol_remaining_323_M: 0.0729950425289838 mol/L
- acetal_produced_323_M: 0.0135024787355081 mol/L
- water_final_323_M: 0.0235024787355081 mol/L
- d_extent_d_initial_water_low_298: -0.0987635489861362 ratio
- d_extent_d_initial_water_high_298: -0.0627185054315819 ratio
- d_extent_d_initial_water_323: -0.130793419137187 ratio
- extent_difference_due_water_M: 0.00234655450532656 mol/L
- extent_difference_due_heating_M: 0.00220520643162786 mol/L
- reaction_quotient_low_water_298: 20.0000000000000 dimensionless
- reaction_quotient_high_water_298: 20.0000000000000 dimensionless
- reaction_quotient_323: 9.16627176134745 dimensionless
- consumed_alcohol_low_water_298_M: 0.0314153703342720 mol/L
- acetal_to_remaining_aldehyde_ratio_298: 3.65949045649458 ratio
- K323_over_K298: 0.458313588067372 ratio
- aldehyde_material_balance_low_water_298_M: 0.0200000000000000 mol/L

### UC-ADV12-P168 二元电解质零电流扩散：Nernst–Einstein反演、双极扩散与液接电势

#### 完整题目

在298.15 K，理想1:1强电解质M⁺X⁻的平板液接区厚度L=1.000 mm，左、右端总电解质浓度分别为cL=0.1000 mol/L、cR=0.01000 mol/L。溶液局域电中性[c+]=[c−]=c(x)，D+=1.300×10⁻⁹ m²/s、D−=2.000×10⁻⁹ m²/s，活度系数取1、无对流和反应、离子通量满足Nernst–Planck式J±=−D±[dc/dx±(F c/(RT))dφ/dx]。稳态开路条件是总电流密度F(J+−J−)=0；由该约束消去电场得到双极（互扩散）系数Damb=2D+D−/(D++D−)。设浓度沿厚度线性，且可使用局域理想Nernst–Einstein电导率κ(c)=F² c(D++D−)/(RT)。F=96485.33212 C/mol、R=8.314462618 J/(mol K)。求转移数、Damb、中心浓度c=0.0550 mol/L处电导率、通量、局域电势梯度和跨液接区Δφ=φR−φL；分别以中点局域电场代回两离子通量并验证零电流、扩散系数反演和单位。比较中心局域电场与跨膜平均电场，说明开路不意味着零离子流，也不能把平均电场生搬硬套进局域Nernst–Planck方程。

#### 逐步解答

1. 强电解质M⁺X⁻遵循局域电中性，1:1离子在同一点浓度相同为c，左0.1000 M与右0.01000 M须转换为100与10 mol/m³。

2. 对Nernst–Planck式J+=−D+[c′+(F c/RT)φ′]、J−=−D−[c′−(F c/RT)φ′]，开路J+=J−而不是两者分别为0。

3. 由J+−J−=0解出φ′=−(RT/F)[(D+−D−)/(D++D−)]·c′/c。

4. 定义离子转移数t+=D+/(D++D−)、t−=D−/(D++D−)，二者相加等于1，t+−t−=(D+−D−)/(D++D−)。

5. 本题t+=0.393939393939、t−=0.606060606061，差-0.212121212121；阳离子扩散更慢，形成不为零的液接电势。

6. 用电场表达式消去迁移项，可得共同盐通量J+=J−=−Damb dc/dx，其中Damb=2D+D−/(D++D−)。

7. Damb=1.57575757576e-9 m²/s，沿x从左到右的浓度梯度dc/dx=-90000.0000000 mol/m⁴。

8. 故稳定盐通量J=0.000141818181818 mol/(m²s)，两个离子以同一数量向右扩散。

9. 局域电导率κ(c)=F² c(D++D−)/(RT)，取中心浓度c=55.0 mol/m³；它不是整段非均匀液接区的串联等效电导率。

10. 中心κ=0.681601006149 S/m、电阻率=1.46713398451 Ωm；可由κ反演总扩散系数D++D−=3.30000000000e-9 m²/s。

11. 对φ′=−(RT/F)(t+−t−)(c′/c)在两端积分得Δφ=−(RT/F)(t+−t−)ln(cR/cL)。

12. 液接电势Δφ=-0.0125489529636 V，即-12.5489529636 mV；平均电势梯度Δφ/L=-12.5489529636 V/m。

13. 但中心局域电势梯度应直接用c=55.0 mol/m³算，φ′mid=-8.91808531490 V/m，与平均值不相同。

14. 将中点c、c′与φ′mid代入J±，它们应分别等于Damb×正向浓度梯度的共同盐流。

15. 中点J+=0.000141818181818、J−=0.000141818181818 mol/(m²s)，总电流密度F(J+−J−)按代数约束为0。

16. 对平板内非均匀浓度，局域电场随1/c变化，平均场不是局域Nernst–Planck式的可替代值；用平均场会产生虚假的净电流。

17. 本题不含Debye长度尺度的空间电荷层、热扩散、浓差对流与非理想活度系数；真实高浓度盐还需扩展浓度依赖迁移数和热力学因子。

#### 独立数值答案向量

- cation_diffusivity_m2_s: 1.30000000000000e-9 m2/s
- anion_diffusivity_m2_s: 2.00000000000000e-9 m2/s
- diffusivity_sum_m2_s: 3.30000000000000e-9 m2/s
- cation_transference_number: 0.393939393939394 fraction
- anion_transference_number: 0.606060606060606 fraction
- transference_number_difference: -0.212121212121212 fraction
- ambipolar_diffusivity_m2_s: 1.57575757575758e-9 m2/s
- midpoint_conductivity_S_m: 0.681601006149276 S/m
- midpoint_resistivity_ohm_m: 1.46713398451321 ohm m
- liquid_junction_potential_V: -0.0125489529636379 V
- liquid_junction_potential_mV: -12.5489529636379 mV
- average_electric_field_V_m: -12.5489529636379 V/m
- local_midpoint_electric_field_V_m: -8.91808531489865 V/m
- ambipolar_salt_flux_mol_m2_s: 0.000141818181818182 mol/(m2 s)
- cation_flux_at_midpoint_mol_m2_s: 0.000141818181818182 mol/(m2 s)
- anion_flux_at_midpoint_mol_m2_s: 0.000141818181818182 mol/(m2 s)
- zero_current_density_A_m2: 0.00000000000000 A/m2
- linear_concentration_gradient_mol_m4: -90000.0000000000 mol/m4
- midpoint_concentration_mol_m3: 55.0000000000000 mol/m3
- diffusivity_ratio_cation_anion: 0.650000000000000 ratio
- transference_ratio_cation_anion: 0.650000000000000 ratio
- diffusion_time_scale_s: 64.2999819268682 s
- conductivity_inverse_sum_D_m2_s: 3.30000000000000e-9 m2/s
- local_dimensionless_potential_log_coefficient_V: 0.00544994102577140 V
- left_to_right_concentration_ratio: 10.0000000000000 ratio
- junction_potential_per_log_concentration_V: 0.00544994102577140 V
- local_field_per_concentration_gradient: 0.0000990898368322072 V m3/mol
- junction_potential_absolute_V: 0.0125489529636379 V

<a id="batch-32"></a>

## 第十二辑第三十二批 · I173/A173/O169/P169

本批四题均为高阶综合待审稿，尚未完成人工科学性、全部历史模型同构与版权审定；独立数值自动QA不应解读为正式批准。

### UC-ADV12-I173 Sr–K/Ti–Fe共掺钙钛矿的电荷补偿、容忍因子与晶体密度

#### 完整题目

设某理想立方ABO₃钙钛矿在空气中形成固定价态的掺杂晶体Sr₁₋ₓKₓTi₁₋ᵧFeᵧO₃₋δ，x=0.1000、y=0.2000。A位Sr²⁺、K⁺；B位Ti⁴⁺、高自旋Fe³⁺；氧为O²⁻，不存在电子空穴、其他缺陷或第二相，氧空位是唯一电荷补偿。每个式量单位有1个A位、1个B位、3个氧位。采用题设的Shannon型有效离子半径（Å）：Sr²⁺(XII配位)=1.440、K⁺(XII)=1.640、Ti⁴⁺(VI)=0.605、Fe³⁺(VI)=0.645、O²⁻=1.400；各晶格占位随机混合，半径按位点比例线性平均。定义Goldschmidt容忍因子t=(rA+rO)/(√2(rB+rO))、八面体因子μ=rB/rO；用B—O硬球接触给理想假设的晶格常数aB=2(rB+rO)，而用A—O接触给aA=√2(rA+rO)，比较两预测的偏差。假设最终选择aB作为近似立方晶胞边长，Z=1，计算理论晶体密度。采用摩尔质量Sr 87.620、K 39.0983、Ti 47.867、Fe 55.845、O 15.999 g/mol，NA=6.02214076×10²³ mol⁻¹。求δ、氧空位占氧位分数、平均两位点半径、各电荷贡献、电中性验证、掺杂前假想满氧化物与缺氧氧化物的摩尔质量差、容忍因子及密度。要求区分氧空位每化学式单位的数目δ与氧位空缺比例δ/3，并说明t≠1时硬球模型与真实结构松弛的局限。

#### 详细解答

1. 每个式量单位只有1个Sr/K混合A位、1个Ti/Fe混合B位与3个O位；K⁺替Sr²⁺减少1单位正电、Fe³⁺替Ti⁴⁺也减少1单位正电。

2. 电中性方程2(1−x)+x+4(1−y)+3y−2(3−δ)=0，化简得到2δ=x+y，故δ=(x+y)/2。

3. 计算δ=0.15000000000个氧空位/式量单位，而氧位空缺分数应为δ/3=0.050000000000，二者分母不同。

4. 剩余氧原子数3−δ；缺氧并不会自动增加或减少每个式量单位中A与B的固定晶格位点数。

5. 氧原子数=2.8500000000；K和Fe分别贡献氧空位0.050000000000与0.10000000000个/式量单位。

6. 定义平均A位半径rA=(1−x)rSr+x rK，平均B位半径rB=(1−y)rTi+y rFe，两个不同配位数的有效半径不能混合平均。

7. 得rA=1.4600000000 Å、rB=0.61300000000 Å。

8. 按题设容忍因子与八面体尺寸比的两个公式分别计算，不用未掺杂母体的半径替代掺杂晶体平均半径。

9. 容忍因子t=1.0046325853，八面体因子μ=0.43785714286。

10. 若B–O为理想硬球接触，立方晶胞边长aB=2(rB+rO)；若A–O为硬球接触，aA=√2(rA+rO)。

11. aB=4.0260000000 Å、aA=4.0446507884 Å，两者差值=0.018650788387 Å，相对差0.0046325852924；不能将不一致的两条几何关系同时强制设为精确成立。

12. 化学式量为(1−x)MSr+xMK+(1−y)MTi+yMFe+(3−δ)MO，满氧假想式量额外多δ个O原子。

13. 缺氧摩尔质量=177.82758000 g/mol、假想满氧质量=180.22743000 g/mol，缺氧损失质量=2.3998500000 g/mol。

14. 将aB从Å换成cm（1 Å=10⁻⁸ cm），近似晶胞体积Vcell=(aB×10⁻⁸)³，单位cm³。

15. Vcell=6.5256129576e-23 cm³，假设Z=1，则ρ=M/(NA Vcell)=4.5250866965 g/cm³。

16. A位电荷=1.9000000000、B位电荷=3.8000000000、氧绝对负电荷=5.7000000000，净电荷残差0.0000000000，符合电中性。

17. 真实Sr/K/Fe/Ti钙钛矿可能发生Fe不同价态、非立方畸变、有序占位或固溶度受限；这里的密度、容忍因子仅为明确假设下的硬球模型估计。

#### 数值答案及单位

- K_fraction_A_sites: 0.100000000000000 fraction
- Fe_fraction_B_sites: 0.200000000000000 fraction
- mean_A_site_radius_Angstrom: 1.46000000000000 angstrom
- mean_B_site_radius_Angstrom: 0.613000000000000 angstrom
- oxygen_vacancies_per_formula: 0.150000000000000 vacancies/formula
- oxygen_atoms_per_formula: 2.85000000000000 atoms/formula
- oxygen_vacancy_site_fraction: 0.0500000000000000 fraction
- Goldschmidt_tolerance_factor: 1.00463258529236 ratio
- octahedral_size_ratio: 0.437857142857143 ratio
- B_contact_cubic_lattice_Angstrom: 4.02600000000000 angstrom
- A_contact_cubic_lattice_Angstrom: 4.04465078838705 angstrom
- lattice_parameter_difference_Angstrom: 0.0186507883870517 angstrom
- relative_lattice_parameter_discrepancy: 0.00463258529236257 fraction
- deficient_oxide_molar_mass_g_mol: 177.827580000000 g/mol
- hypothetical_fully_oxygenated_molar_mass_g_mol: 180.227430000000 g/mol
- oxygen_deficient_mass_fraction: 0.986684324356176 fraction
- missing_oxygen_mass_g_mol: 2.39985000000000 g/mol
- ideal_density_g_cm3: 4.52508669652367 g/cm3
- unit_cell_volume_cm3: 6.52561295760000e-23 cm3
- A_site_positive_charge_per_formula: 1.90000000000000 charge/formula
- B_site_positive_charge_per_formula: 3.80000000000000 charge/formula
- oxygen_absolute_charge_per_formula: 5.70000000000000 charge/formula
- formal_charge_residual: 0.00000000000000 charge/formula
- K_acceptor_vacancy_contribution_per_formula: 0.0500000000000000 vacancies/formula
- Fe_acceptor_vacancy_contribution_per_formula: 0.100000000000000 vacancies/formula
- Ti_B_site_fraction: 0.800000000000000 fraction
- Fe_B_site_fraction: 0.200000000000000 fraction
- Sr_A_site_fraction: 0.900000000000000 fraction
- total_B_site_occupancy: 0.800000000000000 fraction
- original_oxygen_site_count: 3.00000000000000 sites/formula
- oxygen_mass_loss_fraction_of_full: 0.0133156756438240 fraction
- unit_cell_volume_Angstrom_cubed: 65.2561295760000 angstrom^3

### UC-ADV12-A173 Ca/Mg竞争EDTA双终点返算：掩蔽泄漏、协方差与水硬度

#### 完整题目

取某水样V=25.00 mL，用EDTA标准液浓度C=0.01000 mol/L（标准不确定度uC=0.000050 mol/L）分别作两份平行滴定。第一份在充分络合pH条件下EDTA对Ca²⁺和Mg²⁺都为1:1计量，总终点消耗VT=18.400 mL；第二份提高pH使Mg主要以氢氧化物沉淀，Ca²⁺仍全部参与络合，但测定条件独立验证有f=0.005000的Mg摩尔数仍泄漏进入EDTA滴定，第二终点消耗VC=11.600 mL。每份滴定EDTA体积读数独立，标准不确定度uV=0.0500 mL，体积标定与Ca回收视为准确；EDTA浓度C不确定度是两份滴定共用的同一系统分量。各样品只有Ca/Mg这两种贡献水硬度的金属，忽略其它离子、配位体积改变及沉淀后液体体积变化。求Ca和Mg原样物质的量及浓度、金属质量浓度、分别折合CaCO₃的硬度及总硬度；给定摩尔质量Ca 40.078、Mg 24.305、CaCO₃ 100.0869 g/mol。使用两个终点的联立方程计入f，推导Ca/Mg浓度对C、VT、VC的灵敏度与两浓度的协方差、相关系数及各自标准不确定度。计算总硬度标准不确定度时必须保留共用C与共享总终点测量引起的相关性，不能把两个独立算出的金属浓度误当独立。

#### 详细解答

1. 总终点的金属物质的量nT=nCa+nMg=C VT，选择性终点则nCa+f nMg=C VC。

2. 第二份的f=0.005是实际进入滴定的Mg摩尔分率；它是已知掩蔽泄漏，而非把所有Mg从第二份测量中完全删除。

3. 将两方程相减，nMg=C(VT−VC)/(1−f)，再回代nCa=C(VC−f VT)/(1−f)。

4. 总量=0.00018400000000 mol；nCa=0.00011565829146 mol，nMg=0.000068341708543 mol。

5. 两份水样体积都是25.00 mL，只有在将体积转换为L后才能把n/V得到mol/L的原样浓度。

6. cCa=0.0046263316583 mol/L、cMg=0.0027336683417 mol/L，Ca/Mg摩尔比=1.6923529412。

7. 换算质量浓度：cmetal×摩尔质量(g/mol)×1000 mg/g，硬度CaCO₃当量把每mol二价金属对应1 mol CaCO₃。

8. Ca质量浓度=185.41412020 mg/L、Mg=66.441809045 mg/L；总硬度=736.63958400 mg/L CaCO₃。

9. 分别由两种金属贡献的CaCO₃当量硬度为463.03519405和273.60438995 mg/L。

10. 设样品体积V精确，令k=1/[V(1−f)]，则cCa=C k(VC−f VT)，cMg=C k(VT−VC)。

11. 对共享C和独立VT、VC微分，Ca灵敏度依次∂cCa/∂C=cCa/C，∂cCa/∂VT=−fCk，∂cCa/∂VC=Ck。

12. Mg灵敏度依次∂cMg/∂C=cMg/C，∂cMg/∂VT=Ck，∂cMg/∂VC=−Ck；所有体积不确定度需以L代入。

13. 按独立源C、VT、VC各自平方传播，u²(cCa)=(cCa uC/C)²+(fCk uVT)²+(Ck uVC)²；Mg类似。

14. 所得u(cCa)=0.000030644965611 M、u(cMg)=0.000031541781300 M，相对不确定度0.0066240312790和0.011538261909。

15. 协方差是三个共同测量源的偏导乘积之和，cov(cCa,cMg)=(cCa cMg/C²)uC²−f(Ck)²uVT²−(Ck)²uVC²。

16. 计算协方差=-8.9878942451e-11 M²、相关系数=-0.092984936581，为负说明终点反演的浓度误差存在反相关。

17. 总硬度仅依赖nT=C VT，由此直接传播uHard=[1000 M(CaCO₃)] sqrt[(VT uC/V)²+(C uVT/V)²]。

18. 总硬度标准不确定度=4.1920045251 mg/L CaCO₃；若无视相关性直接合并两个硬度标准差会出错。

19. 核对两个终点物料平衡残差严格为0，同时cCa+cMg=C VT/V；f>0使忽略泄漏得到的表观Ca含量偏高。

20. 本题对配位反应计量采用可定量的条件；真实EDTA滴定还需验证pH缓冲、金属共存干扰、指示剂终点系统误差和残余沉淀的Ca夹带。

#### 数值答案及单位

- EDTA_titrant_concentration_M: 0.0100000000000000 mol/L
- total_endpoint_volume_mL: 18.4000000000000 mL
- Ca_selective_endpoint_volume_mL: 11.6000000000000 mL
- magnesium_masking_leakage_fraction: 0.00500000000000000 fraction
- total_metal_amount_mol: 0.000184000000000000 mol
- calcium_amount_mol: 0.000115658291457286 mol
- magnesium_amount_mol: 0.0000683417085427136 mol
- calcium_concentration_M: 0.00462633165829146 mol/L
- magnesium_concentration_M: 0.00273366834170854 mol/L
- calcium_to_magnesium_mole_ratio: 1.69235294117647 ratio
- calcium_mass_concentration_mg_L: 185.414120201005 mg/L
- magnesium_mass_concentration_mg_L: 66.4418090452262 mg/L
- total_hardness_as_CaCO3_mg_L: 736.639584000000 mg/L CaCO3
- calcium_hardness_as_CaCO3_mg_L: 463.035194050251 mg/L CaCO3
- magnesium_hardness_as_CaCO3_mg_L: 273.604389949749 mg/L CaCO3
- calcium_concentration_standard_uncertainty_M: 0.0000306449656114234 mol/L
- magnesium_concentration_standard_uncertainty_M: 0.0000315417812999928 mol/L
- calcium_relative_standard_uncertainty: 0.00662403127897251 fraction
- magnesium_relative_standard_uncertainty: 0.0115382619093724 fraction
- Ca_Mg_concentration_covariance_M2: -8.98789424509481e-11 mol2/L2
- Ca_Mg_concentration_correlation: -0.0929849365813076 ratio
- total_hardness_standard_uncertainty_mg_L: 4.19200452510924 mg/L CaCO3
- total_endpoint_mass_balance_residual_mol: 0.00000000000000 mol
- selective_endpoint_mass_balance_residual_mol: 0.00000000000000 mol
- total_metal_concentration_M: 0.00736000000000000 mol/L
- sum_recovered_concentrations_M: 0.00736000000000000 mol/L
- total_hardness_in_mmol_per_L: 7.36000000000000 mmol/L
- selective_apparent_Ca_fraction_bias_ratio: 1.00295446645812 ratio
- Mg_mole_fraction: 0.371422329036487 fraction
- aliquot_volume_L: 0.0250000000000000 L
- titrant_volume_difference_L: 0.00680000000000000 L
- mean_metal_concentration_M: 0.00368000000000000 mol/L

### UC-ADV12-O169 烯胺催化双底物占位与高底物浓度抑制：速率最大值反演

#### 完整题目

某理想小分子有机催化剂E与反应底物S发生快速可逆结合E+S⇌ES（解离常数Kd1=0.02000 mol/L），其活性配合物ES通过产物形成步骤ES→E+P催化转化，催化速率常数kcat=0.8000 s⁻¹；但ES还可继续可逆结合第二个S形成非活性ESS，ES+S⇌ESS（解离常数Kd2=0.1000 mol/L），ESS不形成P。催化剂总浓度Etotal=0.001000 mol/L，假设配位结合相对催化转化足够快可用即时平衡占位，底物浓度由大储库维持恒定，考察S分别为0.02000、0.1000、0.5000 mol/L的初始稳态速率；不考虑产物抑制、催化剂失活和其他配合物。推导E、ES、ESS随自由[S]的占比及v=kcat[ES]；求这三种浓度下的催化剂各物种浓度、产物形成初速、有效周转频率，证明当[S]=sqrt(Kd1·Kd2)时初速达到唯一峰值，求最优浓度、最大速率与最优活性占比。解释为何过量底物会抑制，而不是传统无限饱和的Michaelis–Menten曲线，并核验催化剂总量守恒和ES/ESS的质量作用比。

#### 详细解答

1. 明确本题是快速结合平衡加慢催化步骤的初始速率模型：底物浓度由储库固定，E、ES、ESS三态相互转换，但只有ES转化生成产物。

2. 由解离常数Kd1=[E][S]/[ES]和Kd2=[ES][S]/[ESS]，可得[ES]=[E] S/Kd1、[ESS]=[E] S²/(Kd1 Kd2)。

3. 将催化剂守恒Etotal=[E]+[ES]+[ESS]联立，得到共同分母D=Kd1+S+S²/Kd2。

4. 因此[E]=Etotal Kd1/D、[ES]=Etotal S/D、[ESS]=Etotal S²/(Kd2 D)；三个浓度非负、相加等于Etotal。

5. 初始产率v(S)=kcat Etotal S/(Kd1+S+S²/Kd2)，其单位mol/(L s)，并不是简单地把所有底物占位都当作有活性。

6. 在S=0.02000 M，计算[ES]=0.00045454545455 M、[ESS]=0.000090909090909 M、[E]=0.00045454545455 M，初速=0.00036363636364 M/s。

7. 在S=0.1000 M，计算[ES]=0.00045454545455 M、[ESS]=0.00045454545455 M、[E]=0.000090909090909 M，初速=0.00036363636364 M/s。

8. 在S=0.5000 M，计算[ES]=0.00016556291391 M、[ESS]=0.00082781456954 M、[E]=0.0000066225165563 M，初速=0.00013245033113 M/s。

9. 分别检查三条件下E、ES、ESS的总量严格回到0.001000 M，并且ESS/ES=S/Kd2；这两个条件组成配位占位的独立物料与质量作用核验。

10. 对v(S)求导，dv/dS正负由Kd1−S²/Kd2决定，其零点S*=sqrt(Kd1 Kd2)。

11. 由于在S>0时导数先正后负，因此S*是唯一全局峰值；S趋0时v→0，S趋无穷时v∼kcat Etotal Kd2/S→0。

12. 最优S*=0.044721359550 M，最大速率=0.00042229123600 M/s。

13. 最优分布[E]=0.00023606797750、[ES]=0.00052786404500、[ESS]=0.00023606797750 M；最优时[ES]占催化剂分数0.52786404500。

14. 按v/Etotal定义有效周转频率，最优为0.42229123600 s⁻¹，低于内禀kcat=0.80000000000 s⁻¹。

15. 中高两条件下，S=0.5000 M时失活ESS比例=0.82781456954，远超过S=0.1000 M时的0.45454545455。

16. 高底物浓度0.5000 M相对于0.1000 M的产率比=0.36423841060，证明浓度过高反而抑制催化。

17. 经典Michaelis–Menten单占位只有E+S⇌ES，不包含第二个S形成非生产性ESS；因此本模型的钟形曲线不能直接套用MM饱和极限。

18. 真实烯胺催化可能具有胺缩合、底物竞争、立体选择性和溶剂效应；本题只把两个快速平衡与一个慢步骤定义为可精确求解的假想机制。

#### 数值答案及单位

- first_binding_Kd_M: 0.0200000000000000 mol/L
- second_binding_Kd_M: 0.100000000000000 mol/L
- total_catalyst_M: 0.00100000000000000 mol/L
- product_formation_kcat_s: 0.800000000000000 s^-1
- optimal_substrate_M: 0.0447213595499958 mol/L
- maximum_initial_rate_M_per_s: 0.000422291236000337 mol/(L s)
- productive_ES_at_optimum_M: 0.000527864045000421 mol/L
- inactive_ESS_at_optimum_M: 0.000236067977499790 mol/L
- free_catalyst_at_optimum_M: 0.000236067977499790 mol/L
- initial_rate_at_S0p02_M_per_s: 0.000363636363636364 mol/(L s)
- initial_rate_at_S0p10_M_per_s: 0.000363636363636364 mol/(L s)
- initial_rate_at_S0p50_M_per_s: 0.000132450331125828 mol/(L s)
- ES_at_S0p02_M: 0.000454545454545455 mol/L
- ES_at_S0p10_M: 0.000454545454545454 mol/L
- ES_at_S0p50_M: 0.000165562913907285 mol/L
- ESS_at_S0p02_M: 0.0000909090909090909 mol/L
- ESS_at_S0p10_M: 0.000454545454545454 mol/L
- ESS_at_S0p50_M: 0.000827814569536424 mol/L
- free_E_at_S0p02_M: 0.000454545454545455 mol/L
- free_E_at_S0p10_M: 0.0000909090909090909 mol/L
- free_E_at_S0p50_M: 0.00000662251655629139 mol/L
- catalyst_inventory_S0p02_M: 0.00100000000000000 mol/L
- catalyst_inventory_S0p10_M: 0.00100000000000000 mol/L
- catalyst_inventory_S0p50_M: 0.00100000000000000 mol/L
- inactive_fraction_S0p50: 0.827814569536424 fraction
- inactive_fraction_S0p10: 0.454545454545454 fraction
- productive_fraction_S0p02: 0.454545454545455 fraction
- productive_fraction_S0p10: 0.454545454545454 fraction
- productive_fraction_S0p50: 0.165562913907285 fraction
- optimal_turnover_frequency_s: 0.422291236000337 s^-1
- high_to_middle_rate_ratio: 0.364238410596027 ratio
- maximum_productive_fraction: 0.527864045000421 fraction
- optimum_binding_denominator_M: 0.0847213595499958 mol/L

### UC-ADV12-P169 经典均相成核的临界半径、势垒与蒸气过饱和比指数效应

#### 完整题目

在298.15 K，某假想蒸气以均一球形液滴成核，蒸气过饱和比S=p/p_eq分别取2.200与3.000，假设理想气相、不可压液相，液相摩尔体积Vm=18.00×10⁻⁶ m³/mol，球面张力γ=0.05000 J/m²与半径、S无关。忽略异相成核、曲率依赖表面张力与动力学前因子的随温度变化。经典毛细模型下形成半径r液滴的可逆功ΔG(r)=4πr²γ−(4πr³/3)(RT lnS/Vm)，其中R=8.314462618 J/(mol K)、kB=1.380649×10⁻²³ J/K、NA=6.02214076×10²³ mol⁻¹。每个临界液滴所含平均分子数n*=4πr*³ NA/(3 Vm)。假设定常成核率J(S)=J0 exp[−ΔG*/(kBT)]，J0=1.000×10³⁵ m⁻³ s⁻¹。推导临界半径和自由能势垒解析式，求两过饱和比下的r*、n*、ΔG*/(kBT)、成核率及二者比，分别核验临界点处表面项、体积项、总势垒的代数关系；计算半径为2r*时的ΔG以说明超过临界点后自由能下降。讨论临界核只有几十至百个分子时连续介质近似的可疑性，不得把CNT成核率当成真实实验必然值。

#### 详细解答

1. 经典球形液滴成核自由能包括新建界面需付的正表面能4πr²γ及释放的体相化学势驱动力−(4π/3)r³ Δμ/Vm。

2. 理想蒸气过饱和比S>1产生每mol驱动力Δμ=RT lnS>0，所以体积项随r³降低成核功。

3. 对ΔG(r)求导得到8πrγ−4πr² Δμ/Vm，非零驻点为r*=2γVm/(RT lnS)。

4. 在r*处二阶导数d²ΔG/dr²=8πγ−8πr*Δμ/Vm=−8πγ<0，故是势垒顶点而非自由能极小。

5. 将r*代入得到ΔG*=16πγ³Vm²/[3(RT lnS)²]，且表面能U_surf(r*)=3ΔG*、体相降低量|U_bulk(r*)|=2ΔG*。

6. 在S=2.2000000000时驱动力Δμ=1954.5519160 J/mol，S=3.0000000000时Δμ=2723.4126558 J/mol。

7. 相应临界半径r*=0.92092718811 nm、0.66093546132 nm；过饱和比增大，临界半径减小。

8. 计算临界液滴分子数n*=109.45683610、40.461703937，采用液体摩尔体积与NA转换，不能把Vm直接当单分子体积。

9. 两势垒分别为1.7762709079e-19 J、9.1490651719e-20 J，即43.151024030 kBT及22.225862582 kBT。

10. 题设的J0有m⁻³s⁻¹量纲，J=J0 exp(−ΔG*/kBT)，指数必须无量纲。

11. 计算J低=1.8186468520e+16 m⁻³s⁻¹、J高=2.2255149956e+25 m⁻³s⁻¹，比值J高/J低=1223720258.4。

12. 低过饱和比时临界核表面能=5.3288127238e-19 J、体相绝对项=3.5525418159e-19 J，其差回到势垒1.7762709079e-19 J。

13. 高过饱和比时对应表面=2.7447195516e-19 J、体相绝对项=1.8298130344e-19 J，差回到势垒9.1490651719e-20 J。

14. 把r=2r*代回ΔG，表面项放大4倍而体积项放大8倍，因此ΔG(2r*)=4×3ΔG*−8×2ΔG*=−4ΔG*。

15. 所得ΔG(2r*)依次-7.1050836317e-19、-3.6596260688e-19 J，表明超过临界核后增大液滴可以自发降低模型自由能。

16. 小尺度下球形/常γ/连续液体密度/定常前因子等假设可能失效；只用CNT结果不能预测真实实验材料的绝对成核率。

#### 数值答案及单位

- temperature_K: 298.150000000000 K
- surface_tension_J_m2: 0.0500000000000000 J/m2
- liquid_molar_volume_m3_mol: 0.0000180000000000000 m3/mol
- kinetic_prefactor_mMinus3_sMinus1: 1.00000000000000e+35 m^-3 s^-1
- supersaturation_low: 2.20000000000000 ratio
- supersaturation_high: 3.00000000000000 ratio
- driving_mu_low_J_mol: 1954.55191598073 J/mol
- driving_mu_high_J_mol: 2723.41265575119 J/mol
- critical_radius_low_nm: 0.920927188110438 nm
- critical_radius_high_nm: 0.660935461322337 nm
- critical_radius_ratio_low_over_high: 1.39336931062518 ratio
- critical_barrier_low_J: 1.77627090792755e-19 J
- critical_barrier_high_J: 9.14906517190072e-20 J
- barrier_low_over_kBT: 43.1510240302490 ratio
- barrier_high_over_kBT: 22.2258625823930 ratio
- critical_cluster_molecules_low: 109.456836096015 molecules
- critical_cluster_molecules_high: 40.4617039369692 molecules
- rate_low_mMinus3_sMinus1: 1.81864685197360e+16 m^-3 s^-1
- rate_high_mMinus3_sMinus1: 2.22551499563360e+25 m^-3 s^-1
- rate_ratio_high_over_low: 1223720258.39896 ratio
- critical_surface_energy_low_J: 5.32881272378266e-19 J
- critical_bulk_energy_abs_low_J: 3.55254181585511e-19 J
- critical_surface_energy_high_J: 2.74471955157022e-19 J
- critical_bulk_energy_abs_high_J: 1.82981303438014e-19 J
- barrier_low_surface_minus_bulk_J: 1.77627090792755e-19 J
- barrier_high_surface_minus_bulk_J: 9.14906517190072e-20 J
- bulk_free_energy_density_low_J_m3: 108586217.554485 J/m3
- bulk_free_energy_density_high_J_m3: 151300703.097288 J/m3
- log_rate_low: 37.4394542245426 ln(m^-3 s^-1)
- log_rate_high: 58.3646156723986 ln(m^-3 s^-1)
- DeltaG_at_two_critical_radii_low_J: -7.10508363171022e-19 J
- DeltaG_at_two_critical_radii_high_J: -3.65962606876029e-19 J
- one_nm_over_critical_radius_low: 1.08586217554485 ratio

<a id="batch-33"></a>

## 第十二辑第三十三批 · I174/A174/O170/P170

本批新增4道高阶综合待审题，按四科各一道录入题干与逐步严谨解答；所有题均为awaiting_expert_review，跨辑同构尚未完成专家比对，机器核验只证明特定模型与答案数值一致。

### UC-ADV12-I174 氧离子导体固体氧浓差电池的Nernst电势、负载功率与法拉第输运

#### 题目

在T=900.0 K，将一片理想钇稳定氧化锆（YSZ）只允许O²⁻离子传导的致密电解质用于固体氧浓差电池，两侧氧气均为理想气体；高氧压参考侧p_ref=0.2100 bar，低氧压样品侧p_s=0.001000 bar。电极可逆、表面交换无限快，唯一电池内损是电解质的欧姆电阻；电解质厚度d=0.5000 mm，截面积A=1.000 cm²，离子电导率σ=0.1000 S/m、温度浓度均匀。四电子O₂+4e⁻⇌2O²⁻，氧气沿电化学势驱动方向跨膜，每输运1 mol O₂对应4F电量。电池外接R_L=200.0 Ω纯电阻，F=96485.33212 C/mol，R=8.314462618 J/(mol K)，氧气摩尔质量32.000 g/mol。求理想开路Nernst电动势E、内阻、接负载电流、端电压、负载功率、内损与氧气输运摩尔率和每小时的氧气质量；验证ΔG_O2=RTln(p_ref/p_s)=4FE，功率守恒P_load+P_internal=I E。说明从电池的正向净传输中高氧压侧氧气化学势降低，真实传感器还需考虑极化和浓差改变，不能把负载端电压直接当作开路氧传感读数。

#### 严格分步解答

1. 氧离子固体电解质载流子为O²⁻，两侧氧气平衡半电池涉及O₂和四个电子，因此浓差电池可逆电压的分母必须是4F，而非2F。

2. 两侧高氧压参考侧和低氧压样品侧所对应的化学势差为Δμ_O2=RTln(p_ref/p_s)>0，是每mol O₂的转移自由能驱动力。

3. 在900 K下p_ref/p_s=210.00000000，自然对数=5.3471075307，开路电动势E=(RT/4F)ln(p_ref/p_s)=0.10367506706 V。

4. 电解质电阻满足R_i=d/(σA)，先将厚度0.5000 mm转换为0.0005000 m、面积1.000 cm²转换为1.000×10⁻⁴ m²。

5. 内阻=50.000000000 Ω；外接负载200.00000000 Ω，负载与内阻串联。

6. 忽略电极过电势，电池电流I=E/(Ri+RL)，外端电压V=I RL；不可把开路电压E误作为负载后的端电压。

7. 电流I=0.00041470026823 A，即0.41470026823 mA；端电压V=0.082940053647 V。

8. 利用I=E/(Ri+RL)计算外负载输出功率P=I²RL，内欧姆损耗P_int=I²Ri，二者之和应等于I E。

9. 负载功率=0.000034395262495 W、内耗=0.0000085988156236 W，两者总和=0.000042994078118 W，电化学供电率I E=0.000042994078118 W。

10. 氧气净输运以每mol氧气四电子计量，因此n_dot(O₂)=I/(4F)，这不等于每电子对应一分子氧气。

11. 每秒输运1.0745163517e-9 mol O₂、每小时0.0000038682588660 mol O₂，质量输运=0.12378428371 mg/h。

12. 能量单位转换核查：Δμ_O2=40012.493111 J/mol，4 F E/Δμ=1.0000000000，验证Nernst电压与化学能一致。

13. 负载电压利用率V/E=0.80000000000，相应内阻分压比例=0.20000000000。

14. 开路电动势除以厚度给207.35013412 V/m，仅是电动势对长度的形式归一，不能在存在电极双电层时当作严格局部均匀电场。

15. 本题将YSZ离子电导率视为常数，排除了氧离子迁移数不为1、接触电阻、反应极化和氧气流量变化导致的两侧实际pO₂改变。

16. 真实器件的实测信号若接有有限负载，需要扣除内部压降，再与热电偶测得的温度共同用于氧压反算。

#### 机器可核验全部数值答案

- temperature_K: 900.000000000000 K
- reference_oxygen_pressure_bar: 0.210000000000000 bar
- sample_oxygen_pressure_bar: 0.00100000000000000 bar
- oxide_ionic_conductivity_S_m: 0.100000000000000 S/m
- electrolyte_thickness_m: 0.000500000000000000 m
- electrode_area_m2: 0.000100000000000000 m2
- external_load_ohm: 200.000000000000 ohm
- internal_ionic_resistance_ohm: 50.0000000000000 ohm
- Nernst_open_circuit_emf_V: 0.103675067058263 V
- Nernst_open_circuit_emf_mV: 103.675067058263 mV
- loaded_current_A: 0.000414700268233051 A
- loaded_current_mA: 0.414700268233051 mA
- terminal_voltage_V: 0.0829400536466102 V
- voltage_utilization_ratio: 0.800000000000000 ratio
- load_power_W: 0.0000343952624945129 W
- electrolyte_ohmic_loss_W: 0.00000859881562362822 W
- total_dissipated_power_W: 0.0000429940781181411 W
- electrochemical_power_input_W: 0.0000429940781181411 W
- oxygen_transport_mol_per_second: 1.07451635165976e-9 mol/s
- oxygen_transport_mol_per_hour: 0.00000386825886597514 mol/h
- oxygen_transport_mass_mg_per_hour: 0.123784283711204 mg/h
- oxygen_chemical_potential_difference_J_mol: 40012.4931107190 J/mol
- Faraday_Nernst_identity_ratio: 1.00000000000000 ratio
- current_density_A_m2: 4.14700268233051 A/m2
- open_circuit_field_V_m: 207.350134116526 V/m
- current_via_load_A: 0.000414700268233051 A
- internal_voltage_drop_V: 0.0207350134116526 V
- internal_drop_from_current_V: 0.0207350134116525 V
- internal_fraction: 0.200000000000000 fraction
- thermal_Nernst_prefactor_V: 0.0193889998401345 V
- log_pressure_ratio: 5.34710753071747 ratio
- terminal_plus_internal_drop_V: 0.103675067058263 V

### UC-ADV12-A174 等温滴定量热双点反演结合常数与放热焓：配体耗尽和协方差

#### 题目

在298.15 K，某理想等温滴定量热(ITC)实验采用三份体积均为V=1.000 mL的平行受体样品，受体总浓度M_T=0.001000 mol/L。单一受体M与配体L形成一比一复合物ML，解离常数K_d=[M_free][L_free]/[ML]，反应结合焓ΔH_bind（每mol ML）假定与结合程度无关。三份样品的已校正配体总浓度L_T分别为0.0004000、0.001500、0.003000 mol/L，初始均无ML。完成平衡后观察的积分结合热分别为Q₁=−11.2843666167989 mJ、Q₂=−28.8706800674989 mJ、Q₃=−35.0490431885720 mJ（按给定模型产生的精确模拟值；实测保留小数末位误差可忽略）。仪器对任一积分热的标准不确定度uQ=0.05000 mJ，各独立；受体总量、配体总量和体积视作精确。不得预先假定K_d或ΔH。由二次配体耗尽方程求各组的ML浓度；仅利用Q₁、Q₂比值反演K_d，再求ΔH，第三个热Q₃用于独立预测验证。对前两次热测量进行一阶Jacobian不确定度传播，求K_d、ΔH的标准不确定度，注意同一Q₁出现在比值和焓反演中而导致相关性。检验结合总量不超过受体或配体总量、各游离浓度非负、反应热符号与热量单位的一致性。

#### 严格分步解答

1. 反应只有M+L⇌ML，令x=[ML]，由物料平衡[M_free]=M_T−x、[L_free]=L_T−x；定义K_d=(M_T−x)(L_T−x)/x。

2. 整理得x²−(M_T+L_T+K_d)x+M_TL_T=0；应选择0<x<min(M_T,L_T)的小根而不是非物理大根。

3. 为避免相近数相减，稳定计算x=2M_TL_T/[M_T+L_T+K_d+sqrt((M_T+L_T+K_d)²−4M_TL_T)]。

4. 每份样品体积V相同，积分结合热Q=ΔH_bind V x；x用mol/L、V用L，所以Q以J计。

5. 三份读数Q₁=-11.284366617、Q₂=-28.870680067、Q₃=-35.049043189 mJ，均为放热负值。

6. 取热量比r=Q₂/Q₁=x₂(K_d)/x₁(K_d)，未知结合焓和体积同时被约去，可以先求唯一的K_d。

7. 对于题设L_T1<L_T2、受体总量固定，结合比例比值随K_d增加单调上升；通过正值保界二分查找r的根。

8. 实验热量比r=2.5584670410，反演得到K_d=0.00030000000000 mol/L。

9. 利用二次耗尽根计算三个配合物浓度依次0.00028210916542、0.00072176700169、0.00087622607971 mol/L。

10. 对应三份受体占位比例0.28210916542、0.72176700169、0.87622607971；各自游离配体浓度L_T−x非负。

11. 用第一组热量及ML量计算ΔH_bind=Q₁/(V x₁)=-40000.000000 J/mol，负号对应放热。

12. 把反演K_d和ΔH代入第三份样品，预测Q₃=-35.049043189 mJ，与独立实测的差记为0.0000000000 mJ。

13. 对隐式结合平衡求导dx_j/dK_d=−x_j/(M_T+L_Tj+K_d−2x_j)，以r(K_d)=x₂/x₁构造dr/dK_d。

14. 计算dr/dK_d=366.47769864 M⁻¹，因此dK_d/dr=0.0027286789994 M，确定测量比值误差放大的灵敏度。

15. 两个热读数独立但它们共享用于参数反演的Q₁。对r=Q₂/Q₁，u_r²=(uQ/Q₁)²+(Q₂uQ/Q₁²)²。

16. 热量比标准不确定度u_r=0.012171500651，反演u(K_d)=0.000033212118218 mol/L、相对误差=0.11070706073。

17. 结合焓H=Q₁/[V x₁(K_d(r))]，对Q₁和Q₂求全偏导，既含Q₁直接项，又包含K_d间接影响项。独立Q误差分别乘自己的全偏导求平方和。

18. 给定两热全偏导-18243416.255、8516093.0325，传播得到u(ΔH)=1006.6604159 J/mol，相对值=0.025166510398。

19. 真实ITC测定常需校正稀释热、滴定热容、配体活度与注射稀释体积，三份平行点仅足以在本理想化模型中实现参数和内部验证。

#### 机器可核验全部数值答案

- receptor_total_concentration_M: 0.00100000000000000 mol/L
- aliquot_volume_L: 0.00100000000000000 L
- ligand_total_L1_M: 0.000400000000000000 mol/L
- ligand_total_L2_M: 0.00150000000000000 mol/L
- ligand_total_L3_M: 0.00300000000000000 mol/L
- observed_heat_Q1_mJ: -11.2843666167989 mJ
- observed_heat_Q2_mJ: -28.8706800674989 mJ
- observed_heat_Q3_mJ: -35.0490431885720 mJ
- measured_heat_ratio_Q2_Q1: 2.55846704098744 ratio
- inferred_binding_Kd_M: 0.000300000000000001 mol/L
- inferred_binding_enthalpy_J_mol: -40000.0000000000 J/mol
- complex_concentration_L1_M: 0.000282109165419972 mol/L
- complex_concentration_L2_M: 0.000721767001687473 mol/L
- complex_concentration_L3_M: 0.000876226079714300 mol/L
- receptor_binding_fraction_L1: 0.282109165419972 fraction
- receptor_binding_fraction_L2: 0.721767001687473 fraction
- receptor_binding_fraction_L3: 0.876226079714300 fraction
- predicted_heat_Q3_mJ: -35.0490431885720 mJ
- third_heat_prediction_residual_mJ: 0.00000000000000 mJ
- heat_standard_uncertainty_mJ: 0.0500000000000000 mJ
- heat_ratio_standard_uncertainty: 0.0121715006512086 ratio
- Kd_standard_uncertainty_M: 0.0000332121182175403 mol/L
- Kd_relative_standard_uncertainty: 0.110707060725134 fraction
- binding_enthalpy_standard_uncertainty_J_mol: 1006.66041593373 J/mol
- enthalpy_relative_standard_uncertainty: 0.0251665103983433 fraction
- heat_ratio_derivative_per_M: 366.477698636532 M^-1
- Kd_derivative_per_heat_ratio_M: 0.00272867899935103 M
- enthalpy_partial_derivative_Q1: -18243416.2553009 J/(mol J)
- enthalpy_partial_derivative_Q2: 8516093.03254570 J/(mol J)
- free_receptor_L1_M: 0.000717890834580028 mol/L
- free_ligand_L1_M: 0.000117890834580028 mol/L
- Kd_reconstructed_from_L1_complex_M: 0.000300000000000001 mol/L
- complex_concentration_ratio_L2_L1: 2.55846704098744 ratio
- bound_fraction_L1_independent: 0.282109165419972 fraction
- free_receptor_L3_M: 0.000123773920285700 mol/L
- free_ligand_L3_M: 0.00212377392028570 mol/L

### UC-ADV12-O170 双官能单体分子内环化与二聚的竞争：Riccati精确解和终态分支

#### 题目

某假想线性双官能有机单体M在固定溶剂、温度与惰性条件下发生不可逆竞争：每一个M以一级速率k_c=0.02500 s⁻¹分子内环化成单体环C；两个M以二级速率k_d=3.000 L/(mol s)发生分子间二聚形成非环二聚体D，且该反应按d[D]/dt=k_d[M]²计。C、D稳定且不会继续聚合或相互转化，不存在分解和环间交换。于是d[M]/dt=−k_c[M]−2k_d[M]²，d[C]/dt=k_c[M]，d[D]/dt=k_d[M]²。分别取初始[M]₀=0.02000与0.2000 mol/L，C、D初始为0；求t=60.00 s的M、C、D、初始两条通道速率与其消费单体数之比，求t→∞时的环单体与二聚体产率、其中单体骨架进入环结构的比例。推导Riccati模型的完整解析解，并求初始单体浓度使环化对单体消耗速率与二聚对单体消耗速率相等的临界浓度。给定全部浓度单位为mol/L，核验[M]+[C]+2[D]=[M]₀的逐时骨架守恒；注意[M]+[C]+[D]不是单体骨架守恒，二聚体每分子含两个单体单元。

#### 严格分步解答

1. 本题两通道消耗单体的计量不同：环化M→C消耗1个单体，二聚2M→D每生成1个D消耗2个M。

2. ODE为dM/dt=−kc M−2kd M²，dC/dt=kc M，dD/dt=kd M²；从三式得到d(M+C+2D)/dt=0。

3. 令β=2kd M0/kc，利用Bernoulli/Riccati变换求得M(t)=M0 e^(−kc t)/[1+β(1−e^(−kc t))]。

4. 环化产物为C(t)=kc/(2kd) ln[1+β(1−e^(−kc t))]，可通过对C′=kc M直接积分得到。

5. 由严格骨架守恒计算D(t)=[M0−M(t)−C(t)]/2，避免对M²再次手动复杂积分。

6. 低初始浓度M0=0.020000000000 M时β=4.8000000000，高初始浓度M0=0.20000000000 M时β=48.000000000。

7. 在t=60.00 s，低初始浓度剩余M=0.00094367235706 M、环C=0.0064737855251 M、二聚D=0.0062912710589 M。

8. 高初始浓度时对应M=0.0011654823898 M、环C=0.015188259570 M、二聚D=0.091823129020 M。

9. 按M+C+2D的单体骨架计数核对两条件下分别为0.020000000000 M与0.20000000000 M，完全恢复初始骨架。

10. 当t趋无穷时e^(−kct)→0、单体M→0，而环化终量C∞=kc/(2kd) ln(1+β)，D∞=(M0−C∞)/2。

11. 低浓度的终环C∞=0.0073244079898 M、终二聚D∞=0.0063377960051 M，骨架进入环的分率0.36622039949。

12. 高浓度对应C∞=0.016215917909 M、D∞=0.091892041046 M、环分率0.081079589544。

13. 初始环分子产生速率为kc M0，二聚分子产生速率为kd M0²；由于后者消耗两个单体，必须用2kd M0²与环化通道的单体消耗速率进行比较。

14. 低浓度初始环化通量=0.00050000000000 M/s、二聚分子通量=0.0012000000000 M/s；高浓度对应0.0050000000000和0.12000000000 M/s。

15. 初始两条通道消耗单体的速率相等即kc M0=2kd M0²，唯一正阈值M0*=kc/(2kd)。

16. 算得M0*=0.0041666666667 M；在低、高初始浓度下，初始环化/二聚单体消耗比依次0.20833333333、0.020833333333。

17. 提高初始单体浓度强化二级二聚项，因此虽然环产物绝对浓度可能增大，单体骨架的最终环分率会降低。

18. 本模型把环化产物视为不能被二聚端基继续攻击的稳定终产物，并假定不发生更高聚体、可逆开环或链增长，真实环链平衡需在更完整的聚合模型下分析。

#### 机器可核验全部数值答案

- intramolecular_cyclization_rate_constant_s: 0.0250000000000000 s^-1
- intermolecular_dimerization_rate_constant_L_mol_s: 3.00000000000000 L/(mol s)
- sampling_time_s: 60.0000000000000 s
- initial_equal_consumption_concentration_M: 0.00416666666666667 mol/L
- low_initial_monomer_M: 0.0200000000000000 mol/L
- high_initial_monomer_M: 0.200000000000000 mol/L
- Riccati_dimensionless_parameter_low: 4.80000000000000 ratio
- Riccati_dimensionless_parameter_high: 48.0000000000000 ratio
- monomer_remaining_t60_low_M: 0.000943672357056009 mol/L
- monomer_remaining_t60_high_M: 0.00116548238977978 mol/L
- cyclic_monomer_t60_low_M: 0.00647378552511017 mol/L
- cyclic_monomer_t60_high_M: 0.0151882595698024 mol/L
- dimer_t60_low_M: 0.00629127105891691 mol/L
- dimer_t60_high_M: 0.0918231290202089 mol/L
- skeleton_inventory_t60_low_M: 0.0200000000000000 mol/L
- skeleton_inventory_t60_high_M: 0.200000000000000 mol/L
- final_cyclic_monomer_low_M: 0.00732440798980156 mol/L
- final_cyclic_monomer_high_M: 0.0162159179087943 mol/L
- final_dimer_low_M: 0.00633779600509922 mol/L
- final_dimer_high_M: 0.0918920410456029 mol/L
- final_skeleton_fraction_in_cycles_low: 0.366220399490078 fraction
- final_skeleton_fraction_in_cycles_high: 0.0810795895439714 fraction
- initial_cyclization_flux_low_M_s: 0.000500000000000000 mol/(L s)
- initial_cyclization_flux_high_M_s: 0.00500000000000000 mol/(L s)
- initial_dimer_molecule_flux_low_M_s: 0.00120000000000000 mol/(L s)
- initial_dimer_molecule_flux_high_M_s: 0.120000000000000 mol/(L s)
- initial_dimer_monomer_consumption_low_M_s: 0.00240000000000000 mol/(L s)
- initial_dimer_monomer_consumption_high_M_s: 0.240000000000000 mol/(L s)
- initial_cyclization_to_dimer_consumption_ratio_low: 0.208333333333333 ratio
- initial_cyclization_to_dimer_consumption_ratio_high: 0.0208333333333333 ratio
- high_over_low_final_cyclic_yield_ratio: 2.21395612196551 ratio
- molecular_number_t60_low_M: 0.0137087289410831 mol/L
- molecular_number_t60_high_M: 0.108176870979791 mol/L
- exp_minus_kc_t: 0.223130160148430 ratio
- cyclization_flux_t60_low_M_s: 0.0000235918089264002 mol/(L s)
- cyclization_flux_t60_high_M_s: 0.0000291370597444946 mol/(L s)
- dimerization_molecule_flux_t60_low_M_s: 0.00000267155255241493 mol/(L s)
- dimerization_molecule_flux_t60_high_M_s: 0.00000407504760266038 mol/(L s)

### UC-ADV12-P170 非绝热Marcus电子转移的正常区、活化最优点、反转区与详细平衡

#### 题目

某理想非绝热电子转移体系的两条谐形自由能曲线以无量纲集体反应坐标q描述：G_D(q)=λq²、G_A(q)=λ(q−1)²+ΔG°，其中重组自由能λ=0.6000 eV，ΔG°是每个电子转移事件的标准反应自由能（eV）。假定电子耦合给出与温度和驱动力均无关的有效速率前因子k0=1.000×10¹² s⁻¹，Marcus型速率为k_f=k0 exp[−(λ+ΔG°)²/(4λ kBT)]。给定kB=1.380649×10⁻²³ J/K、1 eV=1.602176634×10⁻¹⁹ J，NA=6.02214076×10²³ mol⁻¹，分别在298.15 K与350.0 K计算四种驱动力ΔG°=−0.2000、−0.6000、−1.000、−1.400 eV下的交叉坐标q*、活化自由能、前向速率常数、速率与驱动力的非单调关系。对ΔG°=−0.6000 eV，另给反向速率k_b=k0 exp[−(λ−ΔG°)²/(4λ kBT)]，证明k_f/k_b=exp[−ΔG°/(kBT)]满足详细平衡。判断正常区、无势垒最优点、反转区和高温影响，核验eV与J、kJ/mol的转换。不可误认为反应越放热，速率就必然越快。

#### 严格分步解答

1. Marcus谐形自由能曲线G_D(q)=λq²，G_A(q)=λ(q−1)²+ΔG°，两曲线交点由λq²=λ(q−1)²+ΔG°决定。

2. 展开并约去q²，得到q*=(λ+ΔG°)/(2λ)；反应初态极小值在q=0，所以前向活化自由能ΔG‡=λ(q*)²。

3. 代入得到常用Marcus抛物线势垒ΔG‡=(λ+ΔG°)²/(4λ)，不存在强制ΔG‡随放热程度单调下降的假设。

4. 当ΔG°从0趋向−λ时势垒变小，是正常区；在ΔG°=−λ时势垒恰为0；再更负会进入反转区。

5. 题设λ=0.60000000000 eV，四种驱动力依次-0.20000000000、-0.60000000000、-1.0000000000、-1.4000000000 eV。

6. 交叉坐标依次q*=0.33333333333、0.0000000000、-0.33333333333、-0.66666666667，后两个q*为负体现交点超过供体势阱底部。

7. 对应活化势垒0.066666666667、0.0000000000、0.066666666667、0.26666666667 eV。

8. 以kBT为eV单位时，用kB T/(1.602176634×10⁻¹⁹ J/eV)换算，指数ΔG‡/(kBT)才无量纲。

9. 低温kBT=0.025692579121 eV、高温kBT=0.030160666418 eV。

10. 298.15 K时四种驱动力下前向速率分别74662078495、1.0000000000e+12、74662078495、31074224.841 s⁻¹。

11. 350.0 K时四个速率分别1.0965848724e+11、1.0000000000e+12、1.0965848724e+11、144600235.96 s⁻¹。

12. 第一种和第三种驱动力对−λ对称，势垒相同，因此两个速率相同；第四种更深放热却比第三种反应慢。

13. 深反转区对称情形的速率比=0.00041619822897，无势垒最优驱动力是-0.60000000000 eV。

14. 对于ΔG°=−0.6000 eV，反向电子转移所需的Marcus势垒是(λ−ΔG°)²/(4λ)，反向速率须用同一个前因子。

15. 298.15 K反向速率=72.094259187 s⁻¹，正逆比=13870729948。

16. 前后势垒差ΔG‡f−ΔG‡b=ΔG°，故ln(kf/kb)=−ΔG°/(kBT)，这一详细平衡关系不依赖于过渡态坐标选择。

17. 由热力学独立计算的详细平衡目标值为13870729948，和数值正逆比一致。

18. 各势垒换算为kJ/mol后依次6.4323554749、0.0000000000、6.4323554749、25.729421900；1 eV×NA即96.485 kJ/mol。

19. 高温会使非零活化势垒的指数抑制减弱，但本题有效前因子固定，并未包含非绝热耦合随温度的真实变化。

20. 此处的Marcus模型忽略量子隧穿、高频内层振动和反应物扩散极限，因此不应把模型给出的极快速率当作实验上必然可观察的值。

#### 机器可核验全部数值答案

- temperature_low_K: 298.150000000000 K
- temperature_high_K: 350.000000000000 K
- reorganization_energy_eV: 0.600000000000000 eV
- effective_rate_prefactor_s: 1000000000000.00 s^-1
- driving_force_1_eV: -0.200000000000000 eV
- driving_force_2_eV: -0.600000000000000 eV
- driving_force_3_eV: -1.00000000000000 eV
- driving_force_4_eV: -1.40000000000000 eV
- activation_barrier_1_eV: 0.0666666666666667 eV
- activation_barrier_2_eV: 0.00000000000000 eV
- activation_barrier_3_eV: 0.0666666666666667 eV
- activation_barrier_4_eV: 0.266666666666667 eV
- forward_rate_Tlow_case1_s: 74662078494.6866 s^-1
- forward_rate_Tlow_case2_s: 1000000000000.00 s^-1
- forward_rate_Tlow_case3_s: 74662078494.6866 s^-1
- forward_rate_Tlow_case4_s: 31074224.8409022 s^-1
- forward_rate_Thigh_case1_s: 109658487239.928 s^-1
- forward_rate_Thigh_case2_s: 1000000000000.00 s^-1
- forward_rate_Thigh_case3_s: 109658487239.928 s^-1
- forward_rate_Thigh_case4_s: 144600235.961437 s^-1
- crossing_coordinate_case1: 0.333333333333333 ratio
- crossing_coordinate_case2: 0.00000000000000 ratio
- crossing_coordinate_case3: -0.333333333333333 ratio
- crossing_coordinate_case4: -0.666666666666667 ratio
- kBT_Tlow_eV: 0.0256925791210858 eV
- kBT_Thigh_eV: 0.0301606664175081 eV
- reverse_rate_case2_Tlow_s: 72.0942591868565 s^-1
- forward_to_reverse_rate_ratio_case2: 13870729948.2496 ratio
- detailed_balance_expected_ratio: 13870729948.2496 ratio
- deep_inverted_to_symmetrical_rate_ratio: 0.000416198228972605 ratio
- barrierless_driving_force_eV: -0.600000000000000 eV
- barrier_case1_kJ_mol: 6.43235547488733 kJ/mol
- barrier_case2_kJ_mol: 0.00000000000000 kJ/mol
- barrier_case3_kJ_mol: 6.43235547488734 kJ/mol
- barrier_case4_kJ_mol: 25.7294218995493 kJ/mol
- rate_increase_case1_with_temperature: 1.46873070574552 ratio
- rate_increase_case4_with_temperature: 4.65338191706406 ratio
- equal_normal_inverted_rate_residual: 0.00000000000000 s^-1
- barrierless_to_normal_rate_ratio_lowT: 13.3936801675186 ratio

<a id="batch-34"></a>

## 第十二辑收官六题 · 严格题目、逐步演算、机器复核

### UC-ADV12-I175 NaCl Born–Haber循环与Born–Landé静电晶格能的定量比较

Na(s)升华焓108.0 kJ/mol，Na(g)电离能496.0 kJ/mol，Cl₂(g)键解离焓243.0 kJ/mol，Cl(g)得电子的焓变化−349.0 kJ/mol，NaCl(s)标准生成焓−411.0 kJ/mol；晶格模型Madelung常数1.7476，最近邻距0.2810 nm，排斥指数9，e=1.602176634×10⁻¹⁹ C，ε0=8.8541878128×10⁻¹² F/m，NA=6.02214076×10²³ mol⁻¹。

**关键模型：** ΔHf=ΔHsub+IE+DCl2/2+EA+ΔHlattice；U_Born=−NA M e²/(4πε₀r)(1−1/n)。

1. 明确变量、边界、温度和计量：Na(s)升华焓108.0 kJ/mol，Na(g)电离能496.0 kJ/mol，Cl₂(g)键解离焓243.0 kJ/mol，Cl(g)得电子的焓变化−349.0 kJ/mol，NaCl(s)标准生成焓−411.0 kJ/mol；晶格模型Madelung常数1.7476，最近邻距0.2810 nm，排斥指数9，e=1.602176634×10⁻¹⁹ C，ε0=8.8541878128×10⁻¹² F/m，NA=6.02214076×10²³ mol⁻¹。

2. 建立化学物理方程：ΔHf=ΔHsub+IE+DCl2/2+EA+ΔHlattice；U_Born=−NA M e²/(4πε₀r)(1−1/n)。

3. 使用题设数据代入该方程，先检查活动度或浓度比是否无量纲、所有分母是否非零。

4. 求得第一组参数：gas_cycle_kJ_mol=376.500000000 kJ/mol；lattice_formation_kJ_mol=-787.500000000 kJ/mol；lattice_dissociation_kJ_mol=787.500000000 kJ/mol。

5. 再求第二组结果：unrepressed_coulomb_kJ_mol=-864.069771457 kJ/mol；BornLande_energy_kJ_mol=-768.062019073 kJ/mol；model_experiment_difference_kJ_mol=19.4379809274 kJ/mol。

6. 最后计算独立比值与核验量：reconstructed_formation_kJ_mol=-411.000000000 kJ/mol；balance_residual_kJ_mol=0.00000000000 kJ/mol。

7. 守恒或导数交叉核验：将气相离子制备的四个热化学步骤和晶格生成焓相加，应严格恢复−411.0 kJ/mol。

8. 讨论模型外推局限。假想体系只有题设的物种和过程；已排除的副反应、非理想效应及测量系统误差不能从这些数值自动推断。

9. 独立数值见证在CI中重新计算全部8个答案；这仅是模型内数值验证，题目仍须完成跨辑同构审查和专家审稿。

**数值答案：**

- gas_cycle_kJ_mol: 376.500000000000 kJ/mol
- lattice_formation_kJ_mol: -787.500000000000 kJ/mol
- lattice_dissociation_kJ_mol: 787.500000000000 kJ/mol
- unrepressed_coulomb_kJ_mol: -864.069771456662 kJ/mol
- BornLande_energy_kJ_mol: -768.062019072588 kJ/mol
- model_experiment_difference_kJ_mol: 19.4379809274117 kJ/mol
- reconstructed_formation_kJ_mol: -411.000000000000 kJ/mol
- balance_residual_kJ_mol: 0.00000000000000 kJ/mol

### UC-ADV12-A175 稳定碳同位素稀释质谱中13C原子比与原样质量反演

原样碳原子物质的量ns未知，原样13C原子分数fs=0.01100；加入13C富集内标，其总碳原子量nt=0.0005000 mol、13C原子分数ft=0.9800；混合物测得13C/12C原子比R=1/3。碳的摩尔质量12.011 g/mol，忽略同位素分馏、回收损失与质谱质量歧视效应。

**关键模型：** f=R/(1+R)，13C守恒f(ns+nt)=fs ns+ft nt，ns=nt(ft−f)/(f−fs)。

1. 明确变量、边界、温度和计量：原样碳原子物质的量ns未知，原样13C原子分数fs=0.01100；加入13C富集内标，其总碳原子量nt=0.0005000 mol、13C原子分数ft=0.9800；混合物测得13C/12C原子比R=1/3。碳的摩尔质量12.011 g/mol，忽略同位素分馏、回收损失与质谱质量歧视效应。

2. 建立化学物理方程：f=R/(1+R)，13C守恒f(ns+nt)=fs ns+ft nt，ns=nt(ft−f)/(f−fs)。

3. 使用题设数据代入该方程，先检查活动度或浓度比是否无量纲、所有分母是否非零。

4. 求得第一组参数：mixed_13C_atom_fraction=0.250000000000 fraction；sample_carbon_mol=0.00152719665272 mol；total_carbon_mol=0.00202719665272 mol。

5. 再求第二组结果：total_13C_mol=0.000506799163180 mol；total_12C_mol=0.00152039748954 mol；reconstructed_13C_12C_ratio=0.333333333333 ratio。

6. 最后计算独立比值与核验量：spike_13C_signal_fraction=0.966852425181 fraction；original_carbon_mass_g=0.0183431589958 g。

7. 守恒或导数交叉核验：用算得的ns回代两个同位素的原子数，必须恢复原始混合分数f=0.25及R=1/3，且fs<f<ft。

8. 讨论模型外推局限。假想体系只有题设的物种和过程；已排除的副反应、非理想效应及测量系统误差不能从这些数值自动推断。

9. 独立数值见证在CI中重新计算全部8个答案；这仅是模型内数值验证，题目仍须完成跨辑同构审查和专家审稿。

**数值答案：**

- mixed_13C_atom_fraction: 0.250000000000000 fraction
- sample_carbon_mol: 0.00152719665271967 mol
- total_carbon_mol: 0.00202719665271966 mol
- total_13C_mol: 0.000506799163179916 mol
- total_12C_mol: 0.00152039748953975 mol
- reconstructed_13C_12C_ratio: 0.333333333333333 ratio
- spike_13C_signal_fraction: 0.966852425180599 fraction
- original_carbon_mass_g: 0.0183431589958159 g

### UC-ADV12-O171 Mayo–Lewis二元自由基共聚瞬时组成与微转化率进料漂移

两种乙烯基单体M1/M2终端自由基共聚，反应比r1=0.2000、r2=2.000；初始进料M1摩尔分数f1=0.3000、M2分数f2=0.7000。采用Mayo–Lewis终端模型，批式转化率从X=0增大微量dX=0.01000，不包括扩散、链转移与高转化率动力学漂移。

**关键模型：** F1=(r1f1²+f1f2)/(r1f1²+2f1f2+r2f2²)，df1/dX=(f1−F1)/(1−X)。

1. 明确变量、边界、温度和计量：两种乙烯基单体M1/M2终端自由基共聚，反应比r1=0.2000、r2=2.000；初始进料M1摩尔分数f1=0.3000、M2分数f2=0.7000。采用Mayo–Lewis终端模型，批式转化率从X=0增大微量dX=0.01000，不包括扩散、链转移与高转化率动力学漂移。

2. 建立化学物理方程：F1=(r1f1²+f1f2)/(r1f1²+2f1f2+r2f2²)，df1/dX=(f1−F1)/(1−X)。

3. 使用题设数据代入该方程，先检查活动度或浓度比是否无量纲、所有分母是否非零。

4. 求得第一组参数：MayoLewis_numerator=0.228000000000 ratio；denominator=1.41800000000 ratio；instantaneous_polymer_M1=0.160789844852 fraction。

5. 再求第二组结果：instantaneous_polymer_M2=0.839210155148 fraction；enrichment_over_feed=0.535966149506 ratio；initial_dfeed_dconversion=0.139210155148 ratio。

6. 最后计算独立比值与核验量：first_order_feed_after_1percent=0.301392101551 fraction；composition_sum=1.00000000000 ratio。

7. 守恒或导数交叉核验：F1+F2=1；初始进料变化导数由f1−F1控制，不应将小步外推当成高转化率积分结果。

8. 讨论模型外推局限。假想体系只有题设的物种和过程；已排除的副反应、非理想效应及测量系统误差不能从这些数值自动推断。

9. 独立数值见证在CI中重新计算全部8个答案；这仅是模型内数值验证，题目仍须完成跨辑同构审查和专家审稿。

**数值答案：**

- MayoLewis_numerator: 0.228000000000000 ratio
- denominator: 1.41800000000000 ratio
- instantaneous_polymer_M1: 0.160789844851904 fraction
- instantaneous_polymer_M2: 0.839210155148096 fraction
- enrichment_over_feed: 0.535966149506347 ratio
- initial_dfeed_dconversion: 0.139210155148096 ratio
- first_order_feed_after_1percent: 0.301392101551481 fraction
- composition_sum: 1.00000000000000 ratio

### UC-ADV12-O172 5-exo-trig自由基分子内环化与硫醇氢原子转移捕获

5-己烯基自由基R·只沿5-exo-trig一级环化kc=2.000×10⁵ s⁻¹或被硫醇RSH双分子捕获kt=1.000×10⁸ L/(mol s)反应。硫醇始终过量，分别考察其浓度0.001000、0.01000 mol/L；R·初始浓度1.000×10⁻⁵ mol/L。计算10.00 μs后的余量以及t→∞产物组成，假设两种产物均不再反应。

**关键模型：** kobs=kc+kt[RSH]，R(t)=R0e^(−kobs t)，环化最终分数kc/kobs，捕获分数kt[RSH]/kobs。

1. 明确变量、边界、温度和计量：5-己烯基自由基R·只沿5-exo-trig一级环化kc=2.000×10⁵ s⁻¹或被硫醇RSH双分子捕获kt=1.000×10⁸ L/(mol s)反应。硫醇始终过量，分别考察其浓度0.001000、0.01000 mol/L；R·初始浓度1.000×10⁻⁵ mol/L。计算10.00 μs后的余量以及t→∞产物组成，假设两种产物均不再反应。

2. 建立化学物理方程：kobs=kc+kt[RSH]，R(t)=R0e^(−kobs t)，环化最终分数kc/kobs，捕获分数kt[RSH]/kobs。

3. 使用题设数据代入该方程，先检查活动度或浓度比是否无量纲、所有分母是否非零。

4. 求得第一组参数：observed_k_low_s=300000.000000 s^-1；observed_k_high_s=1200000.00000 s^-1；lifetime_low_microsecond=3.33333333333 microsecond；lifetime_high_microsecond=0.833333333333 microsecond。

5. 再求第二组结果：cyclized_fraction_low=0.666666666667 fraction；cyclized_fraction_high=0.166666666667 fraction；radical_t10us_low_M=4.97870683679e-7 mol/L；radical_t10us_high_M=6.14421235333e-11 mol/L。

6. 最后计算独立比值与核验量：cyclized_product_low_M=0.00000666666666667 mol/L；cyclized_product_high_M=0.00000166666666667 mol/L；equal_rate_thiol_concentration_M=0.00200000000000 mol/L。

7. 守恒或导数交叉核验：环化+捕获的终产率为1，每个最终产物由一个R·形成；高硫醇浓度降低环化分数。

8. 讨论模型外推局限。假想体系只有题设的物种和过程；已排除的副反应、非理想效应及测量系统误差不能从这些数值自动推断。

9. 独立数值见证在CI中重新计算全部11个答案；这仅是模型内数值验证，题目仍须完成跨辑同构审查和专家审稿。

**数值答案：**

- observed_k_low_s: 300000.000000000 s^-1
- observed_k_high_s: 1200000.00000000 s^-1
- lifetime_low_microsecond: 3.33333333333333 microsecond
- lifetime_high_microsecond: 0.833333333333333 microsecond
- cyclized_fraction_low: 0.666666666666667 fraction
- cyclized_fraction_high: 0.166666666666667 fraction
- radical_t10us_low_M: 4.97870683678639e-7 mol/L
- radical_t10us_high_M: 6.14421235332820e-11 mol/L
- cyclized_product_low_M: 0.00000666666666666667 mol/L
- cyclized_product_high_M: 0.00000166666666666667 mol/L
- equal_rate_thiol_concentration_M: 0.00200000000000000 mol/L

### UC-ADV12-P171 N₂与CO的线性刚性转子配分函数、转动熵及对称数效应

在298.15 K，N₂转动特征温度2.880 K、转动对称数σ=2；CO转动特征温度2.770 K、对称数σ=1。二者均处刚性线性转子高温极限，R=8.314462618 J/(mol K)。仅计算转动自由度，排除振动、平动、电子与核自旋统计部分。

**关键模型：** qrot=T/(σθrot)，Urot=RT，Cv=R，Srot=R(lnqrot+1)，Arot=−RTlnqrot。

1. 明确变量、边界、温度和计量：在298.15 K，N₂转动特征温度2.880 K、转动对称数σ=2；CO转动特征温度2.770 K、对称数σ=1。二者均处刚性线性转子高温极限，R=8.314462618 J/(mol K)。仅计算转动自由度，排除振动、平动、电子与核自旋统计部分。

2. 建立化学物理方程：qrot=T/(σθrot)，Urot=RT，Cv=R，Srot=R(lnqrot+1)，Arot=−RTlnqrot。

3. 使用题设数据代入该方程，先检查活动度或浓度比是否无量纲、所有分母是否非零。

4. 求得第一组参数：N2_rotational_partition=51.7621527778 ratio；CO_rotational_partition=107.635379061 ratio；N2_rotational_entropy_J_molK=41.1288133421 J/molK；CO_rotational_entropy_J_molK=47.2157495648 J/molK。

5. 再求第二组结果：entropy_CO_minus_N2_J_molK=6.08693622267 J/molK；rotational_internal_energy_J_mol=2478.95702956 J/mol；rotational_Cv_J_molK=8.31446261800 J/molK。

6. 最后计算独立比值与核验量：N2_rotational_Helmholtz_J_mol=-9783.59866840 J/mol；CO_rotational_Helmholtz_J_mol=-11598.4187032 J/mol；thermo_identity_ratio=1.00000000000 ratio。

7. 守恒或导数交叉核验：逐项核验Arot+TSrot=Urot；不能将转动Cv=R误当成该气体全部的定容热容。

8. 讨论模型外推局限。假想体系只有题设的物种和过程；已排除的副反应、非理想效应及测量系统误差不能从这些数值自动推断。

9. 独立数值见证在CI中重新计算全部10个答案；这仅是模型内数值验证，题目仍须完成跨辑同构审查和专家审稿。

**数值答案：**

- N2_rotational_partition: 51.7621527777778 ratio
- CO_rotational_partition: 107.635379061372 ratio
- N2_rotational_entropy_J_molK: 41.1288133421257 J/molK
- CO_rotational_entropy_J_molK: 47.2157495647929 J/molK
- entropy_CO_minus_N2_J_molK: 6.08693622266720 J/molK
- rotational_internal_energy_J_mol: 2478.95702955670 J/mol
- rotational_Cv_J_molK: 8.31446261800000 J/molK
- N2_rotational_Helmholtz_J_mol: -9783.59866839807 J/mol
- CO_rotational_Helmholtz_J_mol: -11598.4187031863 J/mol
- thermo_identity_ratio: 1.00000000000000 ratio

### UC-ADV12-P172 Langmuir–Hinshelwood双反应物竞争吸附的最大表面反应速率

气固催化剂A和B在同一均一位点Langmuir竞争吸附，KA=2.000 bar⁻¹、KB=0.5000 bar⁻¹，固定B分压pB=2.000 bar；A分压取0.2000、1.000 bar，最大速率参数k=0.02000 mol/(m² s)。表面反应速率r=kθAθB，θA=KApA/(1+KApA+KBpB)、θB=KBpB/(1+KApA+KBpB)，空位覆盖度为倒数分母。忽略产品竞争吸附。

**关键模型：** r=k(KApA)(KBpB)/[1+KApA+KBpB]²；当KApA=1+KBpB时取得固定pB下唯一最大值。

1. 明确变量、边界、温度和计量：气固催化剂A和B在同一均一位点Langmuir竞争吸附，KA=2.000 bar⁻¹、KB=0.5000 bar⁻¹，固定B分压pB=2.000 bar；A分压取0.2000、1.000 bar，最大速率参数k=0.02000 mol/(m² s)。表面反应速率r=kθAθB，θA=KApA/(1+KApA+KBpB)、θB=KBpB/(1+KApA+KBpB)，空位覆盖度为倒数分母。忽略产品竞争吸附。

2. 建立化学物理方程：r=k(KApA)(KBpB)/[1+KApA+KBpB]²；当KApA=1+KBpB时取得固定pB下唯一最大值。

3. 使用题设数据代入该方程，先检查活动度或浓度比是否无量纲、所有分母是否非零。

4. 求得第一组参数：optimal_A_pressure_bar=1.00000000000 bar；low_theta_A=0.166666666667 fraction；low_theta_B=0.416666666667 fraction；low_theta_vac=0.416666666667 fraction。

5. 再求第二组结果：low_rate_mol_m2_s=0.00138888888889 mol/(m2s)；optimal_theta_A=0.500000000000 fraction；optimal_theta_B=0.250000000000 fraction；optimal_theta_vac=0.250000000000 fraction。

6. 最后计算独立比值与核验量：optimal_rate_mol_m2_s=0.00250000000000 mol/(m2s)；rate_improvement=1.80000000000 ratio；coverages_sum=1.00000000000 ratio；stationary_derivative_factor=0.00000000000 ratio。

7. 守恒或导数交叉核验：最优点对A分压的一阶导数为0；三种位点分率和必须为1，B被过量A排挤使速率最终下降。

8. 讨论模型外推局限。假想体系只有题设的物种和过程；已排除的副反应、非理想效应及测量系统误差不能从这些数值自动推断。

9. 独立数值见证在CI中重新计算全部12个答案；这仅是模型内数值验证，题目仍须完成跨辑同构审查和专家审稿。

**数值答案：**

- optimal_A_pressure_bar: 1.00000000000000 bar
- low_theta_A: 0.166666666666667 fraction
- low_theta_B: 0.416666666666667 fraction
- low_theta_vac: 0.416666666666667 fraction
- low_rate_mol_m2_s: 0.00138888888888889 mol/(m2s)
- optimal_theta_A: 0.500000000000000 fraction
- optimal_theta_B: 0.250000000000000 fraction
- optimal_theta_vac: 0.250000000000000 fraction
- optimal_rate_mol_m2_s: 0.00250000000000000 mol/(m2s)
- rate_improvement: 1.80000000000000 ratio
- coverages_sum: 1.00000000000000 ratio
- stationary_derivative_factor: 0.00000000000000 ratio

