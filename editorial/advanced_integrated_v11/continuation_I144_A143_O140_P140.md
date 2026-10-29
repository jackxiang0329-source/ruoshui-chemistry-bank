# 第十一辑 I144 / A143 / O140 / P140 高阶综合题

以下均为机器复核待专家审查的编辑草稿，尚未获得可正式发布许可。

## UC-ADV11-I144 单畴磁性纳米晶Néel阻塞温度双时间窗反演与各向异性能垒

### 完整题干
某假想单畴球形无机磁性纳米晶颗粒直径d=15.00 nm，已知磁晶各向异性K=3.000×10⁴ J/m³、饱和体磁化强度Ms=4.000×10⁵ A/m，颗粒独立且忽略尺寸分布。零场热激活Néel弛豫时间τ(T)=τ₀ exp(KV/kBT)，V=πd³/6，τ₀=1.000×10⁻⁹ s。实验采用τ_m1=0.001000 s和τ_m2=100.0 s两个观测时间，阻塞温度定义τ(T_B)=τ_m。取kB=1.380649×10⁻²³ J/K、1eV=1.602176634×10⁻¹⁹ J。求V、各向异性能垒（J/eV/K）、两阻塞温度，反向将两温度作为测量输入唯一识别能垒和τ₀、再反算K、300 K热翻转时间、单颗粒磁矩；当外场为0.01000 T时检验Zeeman能与能垒比，解释测量时间尺度、热激活唯一性和物理实验失效。

### 逐步中文解答
1. 假设单分散球形高各向异性单畴颗粒，直径d=15.00 nm，磁晶各向异性能垒E_a=KV，体积V=πd³/6；忽略颗粒间偶极相互作用和磁场修正。

2. 磁矩反转由Néel–Arrhenius过程τ(T)=τ₀ exp(E_a/kBT)描述；测量时间τ_m=τ(T_B)的温度称为观测时间尺度相关阻塞温度。

3. 按给定K=3.000×10⁴ J/m³求体积V=1.76714586764e-24 m³和能垒E_a=5.30143760293e-20 J，即0.330889709064 eV。

4. 能垒温度E_a/kB=3839.81562507 K；在τ₀=1.000×10⁻⁹ s、τ_m1=1.000 ms时ln(τ_m/τ₀)=ln(10⁶)，T_B1=277.935122915 K。

5. 在τ_m2=100.0 s时ln(τ_m/τ₀)=ln(10¹¹)，T_B2=151.600976136 K；长测量时间对应更低阻塞温度。

6. 将两实验数据写成lnτ_m=lnτ₀+(E_a/kB)/T_B；以横坐标1/T_B线性反演，斜率等于E_a/kB，截距为lnτ₀。

7. 两点不同使反演唯一，得到E_a/kB=3839.81562507 K、τ₀=1.00000000000e-9 s，且τ₀远低于两观测时间，符合热激活模型。

8. 使用已知体积反求K=E_a/V=30000.0000000 J/m³，核验与独立材料参数一致，单位J/m³不是J/mol。

9. 给定饱和体磁化强度M_s=4.000×10⁵ A/m，单颗粒磁矩μ=M_sV=7.06858347058e-19 A·m²。

10. 若弱外加场B=0.01000 T，Zeeman能量幅度μB相对E_a比值为0.133333333333，虽小于1但并非严格为零；阻塞公式按零场理想值使用。

11. 在300.0 K预测τ(T)=0.000361994905277 s；一旦τ≪实验观测时间，测得的是时间平均近似超顺磁而非永久宏观剩磁。

12. 阻塞温度不是平衡热力学相变；颗粒尺寸分布、非单轴各向异性、表面自旋冻结、磁偶极相互作用及较大外场会使单一能垒与统一τ₀近似失效。

### 独立答案向量
- particle_volume_m3: 1.7671458676442582e-24 m3
- anisotropy_barrier_J: 5.301437602932775e-20 J
- anisotropy_barrier_eV: 0.3308897090639243 eV
- barrier_kelvin: 3839.8156250667435 K
- blocking_temp_1ms_K: 277.9351229153954 K
- blocking_temp_100s_K: 151.6009761356702 K
- inverse_barrier_kelvin: 3839.815625066743 K
- inferred_attempt_time_s: 1.0000000000000007e-9 s
- inferred_anisotropy_J_m3: 29999.999999999996 J/m3
- particle_moment_Am2: 7.0685834705770325e-19 A m2
- Zeeman_to_anisotropy_ratio: 0.13333333333333333 dimensionless
- relaxation_time_300K_s: 0.00036199490527725965 s
- log_window_ratio: 11.512925464970229 dimensionless
- blocking_temperature_ratio: 1.8333333333333337 dimensionless
- reciprocal_temperature_difference_K_inv: 0.0029983016345400994 K^-1

**适用条件：** 阻塞温度不是平衡热力学相变；颗粒尺寸分布、非单轴各向异性、表面自旋冻结、磁偶极相互作用及较大外场会使单一能垒与统一τ₀近似失效。

**待审标记：** `publishable=false`, `exclude_from_official_bank=true`, `quality_status=awaiting_expert_review`, `novelty_review_status=pending_cross_series_model_review`。

## UC-ADV11-A143 双缓冲热滴定ITC的质子链接数、内禀焓与有限浓度结合根反演

### 完整题干
某假想单一受体M和配体L在恒温、恒定pH下形成1:1络合物ML，并伴随每次结合吸收n_H个质子，采用观测焓关系ΔH_obs(buffer)=ΔH_intrinsic+n_H ΔH_ion(buffer)。在缓冲液1中ΔH_ion=+5.000 kJ/mol，观测ΔH_obs=−35.00 kJ/mol；缓冲液2中ΔH_ion=+20.00 kJ/mol，观测ΔH_obs=−5.000 kJ/mol。两缓冲液的结合Kd均为2.000 μmol/L。假设总M_T=10.00 μmol/L、L_T=20.00 μmol/L，溶液体积200.0 μL，反应达到平衡而无其它反应；初始两者均未结合。求结合伴随质子数、内禀结合焓、1:1络合物和游离组分浓度、受体占据率、两个缓冲体系积分ITC热量与相差、被吸收质子数。通过两组焓反演、结合二次方程及物料和能量守恒检验正根唯一性及实验边界。

### 逐步中文解答
1. 以单一1:1受体M与配体L结合为模型，形成ML，不考虑多位点协同与沉淀，恒温298.15 K、恒定pH。

2. 结合净吸收n_H个H⁺时，实验观察焓H_obs=H_intrinsic+n_H H_ion(buffer)，其中H_ion是缓冲酸的给定电离摩尔焓，采用题设符号约定。

3. 两缓冲体系电离焓分别5.00与20.00 kJ/mol，实测结合焓−35.00与−5.00 kJ/mol，故两组差消去H_intrinsic。

4. 求n_H=(−5−(−35))/(20−5)=2个质子每次结合事件，说明结合过程耦合吸收质子。

5. 回代H_intrinsic=−35−n_H×5=-45 kJ/mol，两个缓冲体系均得到同值，参数在不同缓冲焓下唯一。

6. 受体与配体总浓度M_T=10.00 μmol/L、L_T=20.00 μmol/L，结合K_d=[M][L]/[ML]=2.000 μmol/L，物料衡算[M]=M_T−x、[L]=L_T−x。

7. 代入质量作用得x²−(M_T+L_T+K_d)x+M_TL_T=0；物理解要求0≤x≤min(M_T,L_T)，舍弃较大的非物理解。

8. 按稳定小根x=2M_TL_T/[M_T+L_T+K_d+√((M_T+L_T+K_d)²−4M_TL_T)]，得[ML]=0.00000851668522645 mol/L。

9. 游离[M]=0.00000148331477355、[L]=0.0000114833147735 mol/L，受体占据分数x/M_T=0.851668522645。

10. 假设200.0 μL等温量热池由全部未结合初始浓度一次达到平衡，结合物质的量xV=1.70333704529e-9 mol；两缓冲观测热量Q=xVH_obs分别-59.6167965852与-8.51668522645 μJ。

11. 质子吸收量n_HxV=3.40667409058 nmol，缓冲焓差引起Q₂−Q₁=51.1001113587 μJ，符合n_HxV×15 kJ/mol的热量守恒。

12. 唯一性来自正Kd下0<x<min(M,L)时K_d(x)=(M−x)(L−x)/x严格递减；本题忽略注射稀释热、质子化微态比例变化和缓冲活度差异，真实ITC须扣空白与质子活度效应。

### 独立答案向量
- buffer_protons_per_binding: 2 protons/event
- intrinsic_binding_enthalpy_kJ_mol: -45 kJ/mol
- dissociation_constant_M: 0.000002 mol/L
- association_constant_M_inv: 500000 L/mol
- complex_concentration_M: 0.000008516685226452115 mol/L
- unbound_host_M: 0.0000014833147735478854 mol/L
- unbound_ligand_M: 0.000011483314773547886 mol/L
- host_fraction_bound: 0.8516685226452114 fraction
- ITC_heat_buffer1_uJ: -59.616796585164806 uJ
- ITC_heat_buffer2_uJ: -8.516685226452115 uJ
- buffer_heat_difference_uJ: 51.100111358712695 uJ
- linked_proton_mol_nmol: 3.406674090580846 nmol
- buffer_linkage_heat_uJ: 51.1001113587127 uJ
- inverse_mass_action_Ka: 1.0000000000000024 dimensionless

**适用条件：** 唯一性来自正Kd下0<x<min(M,L)时K_d(x)=(M−x)(L−x)/x严格递减；本题忽略注射稀释热、质子化微态比例变化和缓冲活度差异，真实ITC须扣空白与质子活度效应。

**待审标记：** `publishable=false`, `exclude_from_official_bank=true`, `quality_status=awaiting_expert_review`, `novelty_review_status=pending_cross_series_model_review`。

## UC-ADV11-O140 13C-NMR二元共聚物dyad谱反演Markov转移、段长及序列熵

### 完整题干
一假想二元A/B共聚物的高定量13C-NMR能分辨无方向序列dyad AA、AB+BA、BB，已校正的峰积分分别300、500、200。设主链非常长、链端影响可忽略，且在统计上是平稳一阶Markov二元序列，所有单体处于一种相同性能的连续链中，不能直接按未归一的GC响应计算分布。求三个无方向dyad概率、A/B单体比例、转移矩阵P(A→A),P(A→B),P(B→A),P(B→B)、两种单体的平均连续段长度、转移矩阵第二特征值、每单体序列熵率，以及10000个dyad中混合dyad平均数；核验链端平稳约束P(AB)=P(BA)、序列归一和反相关性与模型的适用条件。

### 逐步中文解答
1. 将共聚物主链看作无限长平稳二元一阶Markov序列，字母A、B分别代表两种共聚单元；忽略链端影响及NMR响应不等。

2. 定量13C-NMR按无方向dyad归类为AA、AB+BA、BB，校正积分300、500、200，总数1000。

3. 归一化得无方向dyad比例P(AA)=0.3、P(AB+BA)=0.5、P(BB)=0.2，严格相加为1。

4. 长链平稳序列有P(AB)=P(BA)，故两种有向异dyad各占混合比例的一半；这来自端点数差至多1而不是假定A和B等量。

5. 单体A占有率π_A=P(AA)+P(AB)=0.55，π_B=P(BB)+P(BA)=0.45；两者和为1。

6. 转移概率P(A→A)=P(AA)/π_A=0.545454545455、P(A→B)=P(AB)/π_A=0.454545454545。

7. 同理P(B→A)=0.555555555556、P(B→B)=0.444444444444；每行求和为1。

8. 平稳分布满足π_A P_AB=π_B P_BA；数值代入左右都为0.2500，说明混合dyad有向流平衡与归一化一致。

9. A连续段长度服从几何分布，平均〈L_A〉=1/P_AB=2.20000000000；B连续段平均〈L_B〉=1/P_BA=1.80000000000单体。

10. 转移矩阵的第二特征值λ₂=1−P_AB−P_BA=-0.0101010101010，轻微负值表示一步序列相关性为弱反向，而不是长程分层。

11. 每单体序列熵率h=−Σ_i π_iΣ_j P_ij lnP_ij=0.688087790631 nats，未超过最大二元熵ln2=0.693147180560。

12. 若研究含10000个内部dyad的极长样本，期望混合dyad数5000；此为统计平均而非逐条链必然值。若链长短、NMR dyad峰重叠或存在二阶及以上序列记忆，一阶Markov和该推断不能保证原始聚合机理。

### 独立答案向量
- AA_dyad_fraction: 0.3 fraction
- mixed_dyad_fraction: 0.5 fraction
- BB_dyad_fraction: 0.2 fraction
- A_monomer_fraction: 0.55 fraction
- B_monomer_fraction: 0.45 fraction
- P_A_to_A: 0.5454545454545454 fraction
- P_A_to_B: 0.45454545454545453 fraction
- P_B_to_A: 0.5555555555555556 fraction
- P_B_to_B: 0.4444444444444445 fraction
- average_A_run_length: 2.2 monomers
- average_B_run_length: 1.7999999999999998 monomers
- Markov_second_eigenvalue: -0.010101010101010166 dimensionless
- sequence_entropy_nats_per_monomer: 0.6880877906309577 nats/monomer
- inverse_sequence_entropy: 1.4533029267719273 monomers/nat
- mixed_dyads_per_10000: 5000 dyads
- stationary_detailed_flow_residual: 0 dimensionless

**适用条件：** 若研究含10000个内部dyad的极长样本，期望混合dyad数5000；此为统计平均而非逐条链必然值。若链长短、NMR dyad峰重叠或存在二阶及以上序列记忆，一阶Markov和该推断不能保证原始聚合机理。

**待审标记：** `publishable=false`, `exclude_from_official_bank=true`, `quality_status=awaiting_expert_review`, `novelty_review_status=pending_cross_series_model_review`。

## UC-ADV11-P140 永久偶极Langevin取向配分函数的非线性极化及热力学反演

### 完整题干
假想稀极性分子气体/非相互作用体系在恒温298.15 K下具有体浓度0.1000 mol/L，每分子的固定偶极矩μ=4.000 Debye（1D=3.33564×10⁻³⁰ C·m），受均匀静电场E=1.000×10⁸ V/m。忽略诱导极化和分子间作用，角度Boltzmann能量为U(θ)=−μEcosθ，规定取向配分函数相对零场z=sinh(x)/x，x=μE/(kBT)，L(x)=coth x−1/x。取kB=1.380649×10⁻²³ J/K、NA=6.02214076×10²³ mol⁻¹、R=8.314462618 J/(mol·K)、ε₀=8.8541878128×10⁻¹² F/m。推导取向配分函数和Langevin平均，求L(x)、弱场近似、饱和及实际极化、P/(ε₀E)、摩尔取向自由能、取向势能和熵变化；说明由P反演μ的唯一性、低/高场极限及强电场模型边界。

### 逐步中文解答
1. 考虑电中性但具有固定永久偶极矩μ的独立理想刚性极性分子，体浓度0.1000 mol/L，均匀外电场E=1.000×10⁸ V/m；忽略分子极化率、偶极–偶极相互作用和溶剂屏蔽。

2. 取偶极与电场夹角θ的单分子取向势能U(θ)=−μE cosθ，Boltzmann权重exp(x cosθ)，x=μE/(kBT)。

3. 在球面取向积分Z_orient=∫exp(x cosθ)dΩ=4πsinh(x)/x，除以4π得到与零场比较的配分函数z=sinh(x)/x。

4. 由〈cosθ〉=∂ln z/∂x得到Langevin函数L(x)=coth(x)−1/x，正场下0<L(x)<1且单调递增。

5. 使用1D=3.33564×10⁻³⁰ C·m，把μ=4 D变成μ=1.33425600000e-29 C·m；得x=0.324131372425。

6. 算出L(x)=0.107294537000；弱场线性近似x/3=0.108043790808，其比值L/(x/3)=0.993065276560，可量化非线性。

7. 数密度n=c×1000×N_A=6.02214076000e+25 m⁻³，饱和极限极化P_sat=nμ=0.000803507744187 C/m²。

8. 施加该场下P=nμL(x)=0.0000862119913882 C/m²，且0<P<P_sat，对应P/(ε₀E)=0.0973686047901。

9. 取每摩尔分子的取向Helmholtz自由能相对零场为F_or=−RT ln[sinh(x)/x]=-43.2560043870 J/mol。

10. 平均偶极势能U_or=−N_A μE L(x)=-86.2119913882 J/mol，与自由能不同；取向熵改变量ΔS=(U−F)/T=-0.144075086370 J/(mol·K)应小于0。

11. 通过解P=nμ[coth(μE/kBT)−kBT/(μE)]，若n、E、T已知且测到P，可反推唯一正μ：μL(μE/kBT)对μ>0单调增。

12. 小场x→0时L≈x/3且P≈nμ²E/(3kBT)，饱和x→∞时L→1。此模型适用于稀、独立、刚性分子取向；真实强场可使溶剂击穿、介质局域场修正与电极边界效应重要。

### 独立答案向量
- dipole_C_m: 1.334256e-29 C m
- Langevin_argument: 0.3241313724249324 dimensionless
- orientation_cosine_mean: 0.10729453699961944 dimensionless
- saturation_polarization_C_m2: 0.000803507744187456 C/m2
- field_polarization_C_m2: 0.00008621199138820175 C/m2
- effective_incremental_P_over_epsE: 0.09736860479011969 dimensionless
- linearized_Langevin_x_over_3: 0.1080437908083108 dimensionless
- nonlinearity_ratio: 0.9930652765597546 ratio
- orientation_Helmholtz_F_J_mol: -43.256004387011174 J/mol
- orientation_internal_U_J_mol: -86.21199138820174 J/mol
- orientational_entropy_change_J_molK: -0.14407508636991637 J/(mol K)
- saturation_over_observed_P: 9.320139011397634 ratio
- reconstructed_dimensionless_field: 0.3241313724249324 dimensionless
- positive_partition_log_term_J_molK: 0.1450813496126486 J/(mol K)

**适用条件：** 小场x→0时L≈x/3且P≈nμ²E/(3kBT)，饱和x→∞时L→1。此模型适用于稀、独立、刚性分子取向；真实强场可使溶剂击穿、介质局域场修正与电极边界效应重要。

**待审标记：** `publishable=false`, `exclude_from_official_bank=true`, `quality_status=awaiting_expert_review`, `novelty_review_status=pending_cross_series_model_review`。

