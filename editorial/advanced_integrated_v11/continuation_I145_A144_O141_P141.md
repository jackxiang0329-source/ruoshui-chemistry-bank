# 第十一辑 I145 / A144 / O141 / P141 高阶综合题

独立机器复算不构成专家审定或原创新颖性证明，全部标记为禁止正式发布。

## UC-ADV11-I145｜四血红素两态氧结合MWC配分函数、P50与Hill协同性反演

### 中文题干
某假想四血红素Fe(II)氧结合蛋白以Monod–Wyman–Changeux两态整体构象模型表征，每个四聚体有4个等价O₂结合位点。T态无氧相对权重L₀=100.0、R态权重1，解离常数分别K_T=100.0 μmol/L和K_R=2.000 μmol/L；在每个构象内4位点统计独立。氧作为中性O₂分子做形式计量，不讨论真实超氧化物电子结构。自由O₂浓度c=10.00 μmol/L、四聚体总浓度1.000 μmol/L，氧相对摩尔质量31.998 g/mol。由两态配分函数导出R构象比例和四位点占有率Y、已结合O₂浓度及质量。定义P50为Y=0.5的自由氧浓度，求P50和Hill对数斜率n_H=dln[Y/(1−Y)]/dln c，利用占位数的平均值与二阶矩验证正根唯一、结合氧与原子氧计量及极限行为，说明该模型的科学适用范围。

### 严密逐步解析
1. 将假想四血红素Fe(II)氧结合蛋白看成两种整体构象T与R，不允许构象内部分子混合；每构象内四个结合位点等价且相互独立。

2. 每个结合氧分子视作中性O₂，既不改变血红素中心的题设形式氧化态，也不引入自由离子；这里只做结合统计，不构成真实超氧化物电子结构的声明。

3. 无氧时T/R配分权重之比L₀=100。各构象的逐位点氧结合解离常数分别K_T=100 μM、K_R=2 μM，因此R态为高亲和态。

4. 给定自由氧浓度c，T构象统计权重Z_T=L₀(1+c/K_T)^4，R构象Z_R=(1+c/K_R)^4，总配分函数Z=Z_T+Z_R。

5. 氧占位的平均分数Y=(1/4)∂lnZ/∂ln c=[L₀(c/K_T)(1+c/K_T)^3+(c/K_R)(1+c/K_R)^3]/Z。

6. 在c=10.00 μM时T/R权重依次为146.410000000、1296.00000000，R构象比例为0.898496266665。

7. 在相同浓度下位点占有率Y=0.757974501009，每个四血红素分子平均结合氧分子数n̄=4Y=3.03189800403。

8. 若四血红素蛋白总浓度1.000 μM，已结合氧分子浓度为4Y×10⁻⁶=0.00000303189800403 mol/L；原子氧对应其两倍，符合每个O₂含两个O原子。

9. 将Y(c)=1/2定义为P₅₀，自由氧浓度在(0,∞)变化时Y从0连续增加至1，导数与占位数方差成正，因此正根唯一。

10. 使用包围二分法求P₅₀=5.78379956212 μM，回代Y(P₅₀)=0.500000000000。

11. 对任意构象的四个独立位点，二阶阶乘矩〈n(n−1)〉按12 a²(1+a)²（a=c/K）加权；总方差Var(n)=〈n(n−1)〉+〈n〉−〈n〉²。

12. 在P₅₀时Hill对数斜率n_H=dln[Y/(1−Y)]/dlnc=Var(n)/(4Y(1−Y))=2.29886542778，检验其是否大于1以体现构象合作性。

13. 本题未将氧结合与实际Fe(II)/Fe(III)反应耦合，且假定无氧耗尽、构象内独立和均一四位点；真实蛋白的异质位点与质子/CO₂耦联效应需要更复杂模型。

### 主要答案向量
- tenuM_T_weight: 146.41000000000005 dimensionless
- tenuM_R_weight: 1296.0000000000007 dimensionless
- tenuM_partition: 1442.4100000000008 dimensionless
- tenuM_R_state_fraction: 0.8984962666648179 fraction
- tenuM_site_occupancy: 0.7579745010087284 fraction
- tenuM_O2_per_tetramer: 3.0318980040349137 O2/tetramer
- tenuM_bound_O2_M: 0.0000030318980040349135 mol/L
- P50_uM: 5.7837995621177685 umol/L
- Hill_slope_P50: 2.2988654277848592 dimensionless
- occupancy_number_variance_P50: 2.2988654277848592 molecules2
- occupancy_number_variance_ten: 1.3370278719881021 molecules2
- bound_O2_mass_g_per_L: 0.00009701467233310917 g/L
- T_state_fraction: 0.10150373333518214 fraction
- affinity_ratio_KT_over_KR: 50.00000000000001 ratio
- P50_occupancy_backcheck: 0.5 fraction

适用条件：本题未将氧结合与实际Fe(II)/Fe(III)反应耦合，且假定无氧耗尽、构象内独立和均一四位点；真实蛋白的异质位点与质子/CO₂耦联效应需要更复杂模型。

待审状态：`publishable=false`; `exclude_from_official_bank=true`; `quality_status=awaiting_expert_review`; `novelty_review_status=pending_cross_series_model_review`。

## UC-ADV11-A144｜ICP发射谱双光程自吸收输运反演、逃逸因子与铁柱密度

### 中文题干
某理想均匀ICP等离子体的铁原子发射谱线存在自吸收，设沿光程s的辐射输运满足dI/ds=j−αI，入射背景I(0)=0，源函数S=j/α在同一谱线上与光程无关。分别选等离子体路径L=1.000 cm与2L，测得单路径光强I(L)=100.0计数单位，强度比I(2L)/I(L)=1.30119421191220。吸收线中心有效截面σ=1.000×10⁻¹⁴ cm²、α=σn（n为吸收下能级原子数密度），取铁原子摩尔质量55.845 g/mol、NA=6.02214076×10²³ mol⁻¹。求单程光学厚度、α、n、柱密度、下能级铁质量面密度、源函数S、三倍光程信号、逃逸因子β=(1−e^(−τ))/τ以及光学薄校正值，验证反演唯一正解、光强比和两端物理极限。

### 严密逐步解析
1. 假定均匀发光等离子体在给定窄谱线上的自发发射系数j与吸收系数α沿光程为常数，忽略背景光、散射、饱和增益和频率分布变化。

2. 辐射输运微分方程dI/ds=j−αI，给定入射背景I(0)=0，可积分得I(L)=S[1−exp(−αL)]，其中源函数S=j/α。

3. 用光程L=1.000 cm定义光学厚度τ=αL，第二次用相同等离子体的两倍光程2L，故I(2L)/I(L)=[1−exp(−2τ)]/[1−exp(−τ)]。

4. 上式因式分解为1+exp(−τ)；由于真实吸收α>0，观测强度比R必须位于1与2之间。

5. 第一次探测I(L)=100.0计数单位，第二次与第一次比R=1.30119421191，因此I(2L)=130.119421191同单位。

6. 反演τ=−ln(R−1)=1.20000000000；自然对数在0<R−1<1内唯一，故吸收系数α=τ/L=1.20000000000 cm⁻¹。

7. 假定该谱线有效吸收截面σ=1e-14 cm²、并且只有相关下能级粒子贡献吸收，则α=σn，n=1.20000000000e+14 cm⁻³。

8. 由光程柱密度N_col=nL=1.20000000000e+14 cm⁻²；用铁原子相对质量55.845 g/mol计算对应面密度1.11279365048e-8 g/cm²，只是该下能级原子的面质量，不等于整个样品铁总质量。

9. 已知I(L)，源函数S=I(L)/[1−exp(−τ)]=143.101276069计数，三倍光程预测I(3L)=S[1−exp(−3τ)]=139.191216520。

10. 均匀无背景源的逃逸因子β=[1−exp(−τ)]/τ=0.582338156740；若完全光学薄，单程光强应为I_thin=Sτ=171.721531283，自吸收校正为I_thin/I(L)=1.71721531283。

11. τ→0时双程/单程比→2、逃逸因子→1；τ→∞时双程比→1、逃逸因子→0，符合发光层自吸收饱和极限。

12. 本题只反演均匀一维源与下能级粒子数密度；真实ICP发射谱的温度梯度、线翼频率、自反转、荧光激发、激发态布居和不均匀仪器响应会使常源函数假设失效。

### 主要答案向量
- double_path_intensity_ratio: 1.3011942119122022 ratio
- double_path_intensity_counts: 130.11942119122023 counts
- optical_depth_single_path: 1.1999999999999997 dimensionless
- absorption_coefficient_cm_inv: 1.1999999999999997 cm^-1
- lower_state_number_density_cm3: 119999999999999.97 cm^-3
- column_density_cm2: 119999999999999.97 cm^-2
- source_function_counts: 143.10127606933332 counts
- triple_path_counts: 139.19121652016148 counts
- photon_escape_probability: 0.5823381567398316 ratio
- thin_path_expected_counts: 171.72153128319994 counts
- self_absorption_correction_factor: 1.7172153128319994 ratio
- Fe_gram_per_cm2: 1.1127936504758813e-8 g/cm2
- triple_single_ratio: 1.3919121652016146 ratio
- absorbed_fraction_relative_thin: 0.4176618432601684 fraction

适用条件：本题只反演均匀一维源与下能级粒子数密度；真实ICP发射谱的温度梯度、线翼频率、自反转、荧光激发、激发态布居和不均匀仪器响应会使常源函数假设失效。

待审状态：`publishable=false`; `exclude_from_official_bank=true`; `quality_status=awaiting_expert_review`; `novelty_review_status=pending_cross_series_model_review`。

## UC-ADV11-O141｜氨酰tRNA合成酶双重动力学校对的错误赔率、ATP预算与底物通量

### 中文题干
某假想氨酰-tRNA合成酶实行两阶段不可逆动力学校对。正确氨基酸C和错误类似物W进入酶的事件强度分别为10.00和20.00 s⁻¹（按每酶单位计），进入后未活化前脱离速率k_off,C=2.000、k_off,W=4.000 s⁻¹，成功ATP依赖活化速率k_act,C=8.000、k_act,W=6.000 s⁻¹；每次成功活化消耗1 ATP→AMP+PPi。活化中间体随后或形成氨酰-tRNA产品，或被水解编辑回收底物：C的产品/编辑速率20.00/1.000 s⁻¹，W的产品/编辑速率2.000/18.00 s⁻¹。假定所有步骤竞争指数等待，入口供给固定、无回流或酶占位瓶颈。求两类活化概率、活化通量、正确/错误产品通量及编辑通量、编辑前后错误比例、错误赔率改善倍数、ATP消耗通量和每个被接受产品的ATP平均消耗，并逐类检查底物骨架、活化分流与核苷酸计量守恒。

### 严密逐步解析
1. 设单分子酶E在非饱和、伪一级底物供给下接收正确氨基酸C与错误类似物W，进入反应网络的每酶单位入口事件强度分别10.00与20.00 s⁻¹。

2. 首个竞争步骤中，进入的底物可在未耗ATP前脱离(k_off)或以k_act发生消耗1 ATP的活化，故每次进入成功活化概率p_act=k_act/(k_act+k_off)。

3. 对C使用k_act=8、k_off=2 s⁻¹，p_act,C=0.8；对W使用6和4 s⁻¹，p_act,W=0.6。

4. 活化通量分别J_AC=10p_act,C=8 s⁻¹和J_AW=20p_act,W=12 s⁻¹；每个成功活化事件均记一个ATP→AMP+PPi。

5. 活化中间体再在形成tRNA酯产物(k_prod)与水解编辑(k_edit)之间竞争，产物概率p_prod=k_prod/(k_prod+k_edit)，编辑概率互补。

6. 正确底物k_prod=20、k_edit=1 s⁻¹，产品通量J_C=7.61904761905 s⁻¹，编辑水解J_EC=0.380952380952 s⁻¹。

7. 错误底物k_prod=2、k_edit=18 s⁻¹，产品通量J_W=1.20000000000 s⁻¹，错误编辑水解J_EW=10.8000000000 s⁻¹。

8. 接受产品总通量8.81904761905 s⁻¹，错误产品分数=0.136069114471，远低于活化中间体中错误占比0.600000000000。

9. 错误与正确的比例赔率通过编辑降低了9.52380952381倍；此量独立于酶单位数量，不能错误地称为提高了相同倍的正确产率。

10. 由于每个活化消耗1 ATP，ATP消耗通量=20.0000000000 s⁻¹，每个最终接受产物平均消耗ATP=2.26781857451个。

11. 逐路径检验化学计数：对每种氨基酸，活化通量=成功产物通量+编辑水解通量；被编辑的底物骨架进入回收池，不会凭空消失，ATP的AMP及PPi生成数量等于活化次数。

12. 模型假定活化和编辑为无记忆不可逆竞争、每事件使用一个ATP、无二次重试及下游反应限速；真实氨酰-tRNA合成酶含预转移/后转移编辑、非平衡酶占位与副反应，不能由该简化通量直接宣称真实保真度。

### 主要答案向量
- correct_activation_probability: 0.8 fraction
- wrong_activation_probability: 0.6 fraction
- activated_correct_flux_s: 8 s^-1
- activated_wrong_flux_s: 12 s^-1
- correct_product_flux_s: 7.619047619047619 s^-1
- wrong_product_flux_s: 1.2 s^-1
- correct_editing_flux_s: 0.3809523809523814 s^-1
- wrong_editing_flux_s: 10.8 s^-1
- total_product_flux_s: 8.819047619047618 s^-1
- wrong_product_fraction: 0.13606911447084236 fraction
- wrong_fraction_pre_editing: 0.6 fraction
- error_odds_improvement_factor: 9.523809523809524 ratio
- ATP_per_accepted_product: 2.267818574514039 ATP/product
- total_hydrolysis_flux_s: 11.180952380952382 s^-1
- ATP_consumption_flux_s: 20 ATP/s
- correct_product_fraction: 0.8639308855291576 fraction

适用条件：模型假定活化和编辑为无记忆不可逆竞争、每事件使用一个ATP、无二次重试及下游反应限速；真实氨酰-tRNA合成酶含预转移/后转移编辑、非平衡酶占位与副反应，不能由该简化通量直接宣称真实保真度。

待审状态：`publishable=false`; `exclude_from_official_bank=true`; `quality_status=awaiting_expert_review`; `novelty_review_status=pending_cross_series_model_review`。

## UC-ADV11-P141｜Cahn–Hilliard守恒相分离的最快波长、有限周期模态与增长率

### 中文题干
一假想二元液体在T=298.15 K采用正则溶液混合自由能密度f(c)=(RT/V_m)[c ln c+(1−c)ln(1−c)+χ c(1−c)]，其中组分A体积分数c，初始均匀c₀=0.5000、相互作用参数χ=3.000、每摩尔格点体积V_m=1.000×10⁻⁵ m³/mol，R=8.314462618 J/(mol K)。梯度能为κ|∇c|²/2，κ=1.000×10⁻⁸ J/m；守恒动力学为∂c/∂t=M∇²[f'(c)−κ∇²c]，M=1.000×10⁻²⁵ m⁵/(J s)。请线性化得到σ(k)，计算spinodal不稳定波数区间、截止波长、连续最快增长波数/波长/增长率，并在周期边界长度L=100.0 nm下比较n=1、2、3模式增长率与最快离散模式；说明组分积分守恒、k=0稳定性及线性模型的实验边界。

### 严密逐步解析
1. 设二元理想体积分数c的正则溶液自由能密度f(c)=(RT/V_m)[c ln c+(1−c)ln(1−c)+χ c(1−c)]，加入梯度能κ|∇c|²/2。

2. 初始均匀体积分数c₀=0.5000、χ=3.000时，f''(c₀)=(RT/V_m)[1/c₀+1/(1−c₀)−2χ]为负，故均匀态在长波涨落下不稳定。

3. 取V_m=0.00001 m³/mol、T=298.15 K，得到f''=-495791405.911 J/m³；κ=1e-8 J/m保证梯度自由能密度单位J/m³。

4. 守恒型Cahn–Hilliard动力学为∂c/∂t=M∇²[f'(c)−κ∇²c]，M的量纲m⁵/(J·s)，不应与普通质量扩散系数混淆。

5. 设c=c₀+δc、扰动δc∼exp(σt+ikx)，线性化得增长率σ(k)=−M k²[f''(c₀)+κk²]。

6. 若f''<0，0<k<k_c=√(−f''/κ)的涨落指数增长，而k>k_c由于梯度能稳定化衰减；k=0因组分守恒增长率为0。

7. 临界波数k_c=222663738.833 m⁻¹，对应截止波长λ_c=2π/k_c=28.2182691268 nm。

8. 对σ(k)在k>0求导，唯一增长最快波数k*=√[−f''/(2κ)]=k_c/√2，波长λ*=2π/k*。

9. 计算k*=157447039.653 m⁻¹、λ*=39.9066589059 nm；理论最快增长率σ*=M[f'']²/(4κ)=0.614522795439 s⁻¹。

10. 若样品采用长L=100.0 nm的一维周期边界，允许离散波数k_n=2πn/L，不同于无限连续空间的任意k。

11. n=1、2、3的线性增长率分别0.180145147107、0.533555133642、0.499153595249 s⁻¹，比较可得离散最快整数模式n=2，而非直接对连续最优n*=2.50584746360四舍五入而不核算。

12. 质量守恒由全域积分∫∂c/∂t dx=M∫∂²μ/∂x² dx=0保证，周期边界的表面通量相消；若负f''导致振幅达到非线性尺度、界面厚度接近分子尺度或M依赖组成，线性模分析应终止。

### 主要答案向量
- free_energy_second_derivative_J_m3: -495791405.91133994 J/m3
- spinodal_cutoff_wavenumber_m_inv: 222663738.83309782 m^-1
- continuous_fastest_wavenumber_m_inv: 157447039.65323386 m^-1
- cutoff_wavelength_nm: 28.218269126834688 nm
- fastest_wavelength_nm: 39.906658905863615 nm
- continuous_max_growth_s_inv: 0.6145227954388577 s^-1
- continuous_optimal_mode_index: 2.5058474635997823 dimensionless
- n1_growth_s_inv: 0.1801451471067533 s^-1
- n2_growth_s_inv: 0.5335551336417285 s^-1
- n3_growth_s_inv: 0.49915359524907144 s^-1
- fastest_discrete_mode: 2 mode
- fastest_discrete_wavevector_m_inv: 125663706.14359173 m^-1
- zero_mode_growth_s_inv: 0 s^-1
- cutoff_times_optimal_wavelength: 8.885765876316732 dimensionless

适用条件：质量守恒由全域积分∫∂c/∂t dx=M∫∂²μ/∂x² dx=0保证，周期边界的表面通量相消；若负f''导致振幅达到非线性尺度、界面厚度接近分子尺度或M依赖组成，线性模分析应终止。

待审状态：`publishable=false`; `exclude_from_official_bank=true`; `quality_status=awaiting_expert_review`; `novelty_review_status=pending_cross_series_model_review`。

