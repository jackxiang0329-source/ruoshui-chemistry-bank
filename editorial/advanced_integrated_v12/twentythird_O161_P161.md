# 第十二辑 O161 / P161 完整中文题解

以下均为等待化学专家、跨辑原创性审查的编辑候选。

## UC-ADV12-O161 Karplus核磁偶合的三构象Boltzmann简并统计与双温度焓熵反演

### 题目
某假想有机化合物RCH₂–CH₂R绕中间C–C键只有三个快速互变构象：一个anti（φ=180°）和两个镜像gauche（φ=±60°）。其³J_HH满足实验标定的Karplus式J(φ)=8cos²φ−2cosφ+2 Hz。相对单个anti构象，每一个gauche具有固定焓差ΔH=+4500.0 J/mol及内禀熵差ΔS=+8.000 J/(mol K)，注意两个gauche属于两个微态。温度分别为T₁=298.15 K、T₂=350.0 K，R=8.314462618 J/(mol K)。快交换NMR测得两温度偶合J_obs₁=7.85913006659821 Hz、J_obs₂=7.25506617762009 Hz。由Karplus、三态配分函数和Boltzmann分布求anti、每个及总gauche概率、两个J值，并只根据两温度J_obs独立反演单个gauche权重及ΔH、ΔS；进一步求构象概率混合熵及两态能隙模型的构象热容，核验简并度只计一次、概率归一、反演唯一性、升温人口趋势和物理适用条件。

### 逐步解答
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

### 独立数值结果
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

## UC-ADV12-P161 12CO/13CO谐振子同位素频移与量子振动配分热容、熵及零点能

### 题目
以理想一维量子谐振子模拟¹²C¹⁶O和¹³C¹⁶O分子的同一个伸缩振动模，假设同位素替换不改变电子势能曲率，谐振子波数随约化质量的平方根倒数变化。原子质量m(¹²C)=12.000000 u、m(¹³C)=13.003355 u、m(¹⁶O)=15.994915 u，已知¹²CO振动波数ν̃₁₂=2143.000 cm⁻¹。给定hc/k_B=1.438776877 K·cm、R=8.314462618 J/(mol K)，温度T=800.0 K。求两分子的约化质量、¹³CO振动波数与同位素红移；用振动配分函数q=1/(1−e^(−x))及x=(hc/k_B)ν̃/T求平均振动声子数、v=0和v=1的概率、零点能与含零点能的摩尔振动内能、摩尔振动热容C_V和振动熵，比较两同位素。核验振动概率归一、低温第三定律极限、高温C_V→R，并说明谐振子单模热容不是CO全部热容。

### 逐步解答
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

### 独立数值结果
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

