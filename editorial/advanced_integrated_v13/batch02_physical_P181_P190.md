# 第十三辑第二批物理化学十题 P181—P190

## UC-ADV13-P181 Margules二元液–汽相平衡及共沸点的活度系数反演

### 完整题目

298.15 K理想低压气相与非理想二元液体共存。两种纯组分饱和蒸气压分别80.00和40.00 kPa，液体二后缀Margules常数A=1.500，lnγ1=A(1−x1)²，lnγ2=Ax1²。分别取液相x1=0.2000与0.8000，按气相理想分压求泡点压力和蒸汽y1，求共沸液相组成与压力，检查Gibbs–Duhem一致性。

### 详细解析

1. 完整物理化学模型、数据与边界条件：298.15 K理想低压气相与非理想二元液体共存。两种纯组分饱和蒸气压分别80.00和40.00 kPa，液体二后缀Margules常数A=1.500，lnγ1=A(1−x1)²，lnγ2=Ax1²。分别取液相x1=0.2000与0.8000，按气相理想分压求泡点压力和蒸汽y1，求共沸液相组成与压力，检查Gibbs–Duhem一致性。

2. 可复现解析关系：P=x1γ1p1*+(1−x1)γ2p2*，y1=x1γ1p1*/P；共沸时γ1p1*=γ2p2*，x1,az=[1−ln(p2*/p1*)/A]/2。

3. 方程推导与物理判据：对Margules系数求x1微分，x1dlnγ1/dx1+(1−x1)dlnγ2/dx1=0。相平衡的蒸汽组成必须由两组分分压之比计算。

4. 确认所有标准态、热力学指数和对数的自变量无量纲，选择满足物理边界与唯一性的解。

5. 第一组数值与中间参数：gamma1_x0p2=2.61169647342 ratio；gamma2_x0p2=1.06183654655 ratio；pressure_x0p2_kPa=75.7659130642 kPa；vapor_fraction_x0p2=0.551529598005 fraction；gamma1_x0p8=1.06183654655 ratio。

6. 第二组状态、通量或相平衡计算：gamma2_x0p8=2.61169647342 ratio；pressure_x0p8_kPa=88.8511107663 kPa；vapor_fraction_x0p8=0.764847376615 fraction；azeotrope_x1=0.731049060187 fraction。

7. 全部余下答案及独立回代量：azeotrope_pressure_kPa=89.1685631767 kPa；azeotrope_y1=0.731049060187 fraction；azeotrope_partial_pressure_difference_kPa=1.42108547152e-14 kPa；GibbsDuhem_derivative_residual=0.00000000000 ratio。

8. 核对能量守恒、归一化、相边界或零流约束；数学计算中不能把近似的实验条件当成无误差的普适常数。

9. 若实际体系存在不可忽略的粒子相互作用、浓度依赖参数、相变动力学及结构变化，本题理想模型的数值不应直接外推。

10. 该题附可独立复算的数值见证，仍属于跨辑原创性和化学专家审定之前的草稿。

### 数值结果与单位

- gamma1_x0p2=2.61169647342 ratio
- gamma2_x0p2=1.06183654655 ratio
- pressure_x0p2_kPa=75.7659130642 kPa
- vapor_fraction_x0p2=0.551529598005 fraction
- gamma1_x0p8=1.06183654655 ratio
- gamma2_x0p8=2.61169647342 ratio
- pressure_x0p8_kPa=88.8511107663 kPa
- vapor_fraction_x0p8=0.764847376615 fraction
- azeotrope_x1=0.731049060187 fraction
- azeotrope_pressure_kPa=89.1685631767 kPa
- azeotrope_y1=0.731049060187 fraction
- azeotrope_partial_pressure_difference_kPa=1.42108547152e-14 kPa
- GibbsDuhem_derivative_residual=0.00000000000 ratio

## UC-ADV13-P182 渗透第二维里系数与非理想渗透压的双点求逆

### 完整题目

298.15 K某稀溶液渗透压采用截断维里式Π=RTc(1+Bc)。浓度用mol/m³，c1=10.00与c2=50.00，真实第二维里系数B=0.002000 m³/mol用于生成两个测量值，推导如何反演B，并求各渗透压、渗透系数、理想压强与超额压强。R=8.314462618 J/(mol K)，忽略高阶浓度依赖。

### 详细解析

1. 完整物理化学模型、数据与边界条件：298.15 K某稀溶液渗透压采用截断维里式Π=RTc(1+Bc)。浓度用mol/m³，c1=10.00与c2=50.00，真实第二维里系数B=0.002000 m³/mol用于生成两个测量值，推导如何反演B，并求各渗透压、渗透系数、理想压强与超额压强。R=8.314462618 J/(mol K)，忽略高阶浓度依赖。

2. 可复现解析关系：φi=Πi/(RTci)=1+Bci；B=(φ2−φ1)/(c2−c1)。

3. 方程推导与物理判据：压力单位Pa来自RTc，φ是无量纲；高浓度时遗漏三阶维里项会使本近似失效。

4. 确认所有标准态、热力学指数和对数的自变量无量纲，选择满足物理边界与唯一性的解。

5. 第一组数值与中间参数：pressure_10_Pa=25285.3617015 Pa；pressure_50_Pa=136342.636626 Pa；osmotic_factor_10=1.02000000000 ratio；osmotic_factor_50=1.10000000000 ratio。

6. 第二组状态、通量或相平衡计算：recovered_B_m3_mol=0.00200000000000 m3/mol；ideal_pressure_50_Pa=123947.851478 Pa；excess_pressure_50_Pa=12394.7851478 Pa。

7. 全部余下答案及独立回代量：pressure_ratio=5.39215686275 ratio；excess_pressure_fraction=0.100000000000 fraction；virial_intercept=1.00000000000 ratio。

8. 核对能量守恒、归一化、相边界或零流约束；数学计算中不能把近似的实验条件当成无误差的普适常数。

9. 若实际体系存在不可忽略的粒子相互作用、浓度依赖参数、相变动力学及结构变化，本题理想模型的数值不应直接外推。

10. 该题附可独立复算的数值见证，仍属于跨辑原创性和化学专家审定之前的草稿。

### 数值结果与单位

- pressure_10_Pa=25285.3617015 Pa
- pressure_50_Pa=136342.636626 Pa
- osmotic_factor_10=1.02000000000 ratio
- osmotic_factor_50=1.10000000000 ratio
- recovered_B_m3_mol=0.00200000000000 m3/mol
- ideal_pressure_50_Pa=123947.851478 Pa
- excess_pressure_50_Pa=12394.7851478 Pa
- pressure_ratio=5.39215686275 ratio
- excess_pressure_fraction=0.100000000000 fraction
- virial_intercept=1.00000000000 ratio

## UC-ADV13-P183 双面完全吸收有限薄膜Fick扩散级数与半释放时间

### 完整题目

厚度L=0.001000 m的平板膜最初均匀含溶质，t=0之后两侧浓度持续零，膜内恒定扩散系数D=2.000×10⁻¹⁰ m²/s。求600和1800 s时膜内平均剩余分数与释放分数、Fourier数、唯一半释放时间、1800 s首模态贡献及高阶修正。必须使用双面吸收有限膜的奇数模态级数而非半无限erfc近似。

### 详细解析

1. 完整物理化学模型、数据与边界条件：厚度L=0.001000 m的平板膜最初均匀含溶质，t=0之后两侧浓度持续零，膜内恒定扩散系数D=2.000×10⁻¹⁰ m²/s。求600和1800 s时膜内平均剩余分数与释放分数、Fourier数、唯一半释放时间、1800 s首模态贡献及高阶修正。必须使用双面吸收有限膜的奇数模态级数而非半无限erfc近似。

2. 可复现解析关系：S(t)=8/π² Σ_m exp[−(2m+1)²π²Dt/L²]/(2m+1)²，S(t_half)=0.5。

3. 方程推导与物理判据：各模态系数非负，故剩余量S(t)对t严格单调下降；用二分法求半释放时间，时间较大时首模态主导。

4. 确认所有标准态、热力学指数和对数的自变量无量纲，选择满足物理边界与唯一性的解。

5. 第一组数值与中间参数：survival_600=0.247991147445 fraction；survival_1800=0.0232122339373 fraction；released_600=0.752008852555 fraction；released_1800=0.976787766063 fraction。

6. 第二组状态、通量或相平衡计算：Fourier_600=0.120000000000 ratio；Fourier_1800=0.360000000000 ratio；half_release_s=245.913424405 s；half_release_Fourier=0.0491826848809 ratio。

7. 全部余下答案及独立回代量：first_mode_1800=0.0232122339373 fraction；higher_modes_1800=1.16920362281e-15 fraction；survival_ratio_600_to1800=10.6836398476 ratio；diffusion_length_600_m=0.000346410161514 m。

8. 核对能量守恒、归一化、相边界或零流约束；数学计算中不能把近似的实验条件当成无误差的普适常数。

9. 若实际体系存在不可忽略的粒子相互作用、浓度依赖参数、相变动力学及结构变化，本题理想模型的数值不应直接外推。

10. 该题附可独立复算的数值见证，仍属于跨辑原创性和化学专家审定之前的草稿。

### 数值结果与单位

- survival_600=0.247991147445 fraction
- survival_1800=0.0232122339373 fraction
- released_600=0.752008852555 fraction
- released_1800=0.976787766063 fraction
- Fourier_600=0.120000000000 ratio
- Fourier_1800=0.360000000000 ratio
- half_release_s=245.913424405 s
- half_release_Fourier=0.0491826848809 ratio
- first_mode_1800=0.0232122339373 fraction
- higher_modes_1800=1.16920362281e-15 fraction
- survival_ratio_600_to1800=10.6836398476 ratio
- diffusion_length_600_m=0.000346410161514 m

## UC-ADV13-P184 一维零外场Ising铁磁链的关联长度与约化顺磁响应

### 完整题目

无限长1D近邻铁磁Ising自旋链H=−JΣs_i s_{i+1}，s_i=±1，J/kB=200.0 K。在无外场T=250与500 K下计算t=tanh(200/T)、r=3时两点关联C3=t³、关联长度ξ=−1/lnt（格点数）、平均能u/kB=−200t与相对能量型外场h/kB的约化磁化率χred=(1+t)/[T(1−t)]，解释为何〈s〉=0而有限程关联非零。

### 详细解析

1. 完整物理化学模型、数据与边界条件：无限长1D近邻铁磁Ising自旋链H=−JΣs_i s_{i+1}，s_i=±1，J/kB=200.0 K。在无外场T=250与500 K下计算t=tanh(200/T)、r=3时两点关联C3=t³、关联长度ξ=−1/lnt（格点数）、平均能u/kB=−200t与相对能量型外场h/kB的约化磁化率χred=(1+t)/[T(1−t)]，解释为何〈s〉=0而有限程关联非零。

2. 可复现解析关系：C(r)=t^r=exp(−r/ξ)，ξ=−1/ln(t)，χred=(1+t)/[T(1−t)]。

3. 方程推导与物理判据：无外场无限一维近邻Ising模型在任何有限温度不出现自发磁化，此处的χ是K⁻¹的约化量而非SI磁化率。

4. 确认所有标准态、热力学指数和对数的自变量无量纲，选择满足物理边界与唯一性的解。

5. 第一组数值与中间参数：coupling_tanh_250=0.664036770268 ratio；coupling_tanh_500=0.379948962255 ratio；spin_correlation_r3_250=0.292803582285 ratio；spin_correlation_r3_500=0.0548498934184 ratio。

6. 第二组状态、通量或相平衡计算：correlation_length_250_sites=2.44249300357 sites；correlation_length_500_sites=1.03335852320 sites；susceptibility_250_Kinv=0.0198121296976 K^-1；susceptibility_500_Kinv=0.00445108185698 K^-1。

7. 全部余下答案及独立回代量：energy_over_kB_250_K=-132.807354054 K；energy_over_kB_500_K=-75.9897924510 K；length_ratio=2.36364528743 ratio；magnetization_zero_field=0.00000000000 ratio。

8. 核对能量守恒、归一化、相边界或零流约束；数学计算中不能把近似的实验条件当成无误差的普适常数。

9. 若实际体系存在不可忽略的粒子相互作用、浓度依赖参数、相变动力学及结构变化，本题理想模型的数值不应直接外推。

10. 该题附可独立复算的数值见证，仍属于跨辑原创性和化学专家审定之前的草稿。

### 数值结果与单位

- coupling_tanh_250=0.664036770268 ratio
- coupling_tanh_500=0.379948962255 ratio
- spin_correlation_r3_250=0.292803582285 ratio
- spin_correlation_r3_500=0.0548498934184 ratio
- correlation_length_250_sites=2.44249300357 sites
- correlation_length_500_sites=1.03335852320 sites
- susceptibility_250_Kinv=0.0198121296976 K^-1
- susceptibility_500_Kinv=0.00445108185698 K^-1
- energy_over_kB_250_K=-132.807354054 K
- energy_over_kB_500_K=-75.9897924510 K
- length_ratio=2.36364528743 ratio
- magnetization_zero_field=0.00000000000 ratio

## UC-ADV13-P185 过阻尼Kramers单势阱热激活逃逸与摩擦阻力

### 完整题目

假想过阻尼反应坐标具有阱底曲率频率ω0=1.000×10¹² s⁻¹、鞍顶ωb=0.8000×10¹² s⁻¹、摩擦率γ=5.000×10¹² s⁻¹、势垒ΔU=0.3500 eV，kB=8.617333262145×10⁻⁵ eV/K。采用k=(ω0ωb)/(2πγ)exp(−ΔU/kBT)求298.15和350 K逃逸率、半衰期、速率比、过阻尼前因子与γ翻倍后的率。

### 详细解析

1. 完整物理化学模型、数据与边界条件：假想过阻尼反应坐标具有阱底曲率频率ω0=1.000×10¹² s⁻¹、鞍顶ωb=0.8000×10¹² s⁻¹、摩擦率γ=5.000×10¹² s⁻¹、势垒ΔU=0.3500 eV，kB=8.617333262145×10⁻⁵ eV/K。采用k=(ω0ωb)/(2πγ)exp(−ΔU/kBT)求298.15和350 K逃逸率、半衰期、速率比、过阻尼前因子与γ翻倍后的率。

2. 可复现解析关系：k(T)=ω0ωb/(2πγ)e^(−ΔU/kBT)，t_half=ln2/k，固定其它量时k∝γ⁻¹。

3. 方程推导与物理判据：需用相同的eV单位计算ΔU/(kBT)并说明γ是时间倒数，不能直接将黏度Pa·s与摩擦率s⁻¹等同。

4. 确认所有标准态、热力学指数和对数的自变量无量纲，选择满足物理边界与唯一性的解。

5. 第一组数值与中间参数：prefactor_s=25464790894.7 s^-1；activation_over_kBT_298=13.6226105737 ratio；activation_over_kBT_350=11.6045181216 ratio；rate_298_s=30882.7178052 s^-1。

6. 第二组状态、通量或相平衡计算：rate_350_s=232360.300236 s^-1；half_life_298_s=0.0000224445006729 s；half_life_350_s=0.00000298307060137 s；temperature_rate_ratio=7.52395892427 ratio。

7. 全部余下答案及独立回代量：rate_double_friction_298_s=15441.3589026 s^-1；friction_to_curvature_ratio=6.25000000000 ratio；log_rate_ratio=2.01809245213 ratio。

8. 核对能量守恒、归一化、相边界或零流约束；数学计算中不能把近似的实验条件当成无误差的普适常数。

9. 若实际体系存在不可忽略的粒子相互作用、浓度依赖参数、相变动力学及结构变化，本题理想模型的数值不应直接外推。

10. 该题附可独立复算的数值见证，仍属于跨辑原创性和化学专家审定之前的草稿。

### 数值结果与单位

- prefactor_s=25464790894.7 s^-1
- activation_over_kBT_298=13.6226105737 ratio
- activation_over_kBT_350=11.6045181216 ratio
- rate_298_s=30882.7178052 s^-1
- rate_350_s=232360.300236 s^-1
- half_life_298_s=0.0000224445006729 s
- half_life_350_s=0.00000298307060137 s
- temperature_rate_ratio=7.52395892427 ratio
- rate_double_friction_298_s=15441.3589026 s^-1
- friction_to_curvature_ratio=6.25000000000 ratio
- log_rate_ratio=2.01809245213 ratio

## UC-ADV13-P186 Förster供受体六次方距离定律、荧光寿命及转移速率

### 完整题目

供体无受体时寿命τD=4.000 ns，Förster半径R0=5.000 nm。假想固定供受体距离r=3.000与7.000 nm，无扩散、静态淬灭及其它反应；模型E=1/[1+(r/R0)^6]，τDA=τD(1−E)，kET=(1/τD)(R0/r)^6。求两个距离下转移效率、转移速率、供体寿命、寿命淬灭比例、E反演距离及两效率比，说明κ²取向因子与光谱重叠已包含在R0中。

### 详细解析

1. 完整物理化学模型、数据与边界条件：供体无受体时寿命τD=4.000 ns，Förster半径R0=5.000 nm。假想固定供受体距离r=3.000与7.000 nm，无扩散、静态淬灭及其它反应；模型E=1/[1+(r/R0)^6]，τDA=τD(1−E)，kET=(1/τD)(R0/r)^6。求两个距离下转移效率、转移速率、供体寿命、寿命淬灭比例、E反演距离及两效率比，说明κ²取向因子与光谱重叠已包含在R0中。

2. 可复现解析关系：E=1/(1+(r/R0)^6)，τDA=τD(1−E)，kET=(R0/r)^6/τD。

3. 方程推导与物理判据：供体寿命速率由自身非转移通道1/τD与转移通道kET相加；FRET效率不是与距离线性关系。

4. 确认所有标准态、热力学指数和对数的自变量无量纲，选择满足物理边界与唯一性的解。

5. 第一组数值与中间参数：FRET_E_3nm=0.955423749541 fraction；FRET_E_7nm=0.117239671654 fraction；transfer_rate_3_nsInv=5.35836762689 ns^-1；transfer_rate_7_nsInv=0.0332025771575 ns^-1。

6. 第二组状态、通量或相平衡计算：lifetime_3_ns=0.178305001834 ns；lifetime_7_ns=3.53104131338 ns；quench_fraction_3=0.955423749541 fraction；quench_fraction_7=0.117239671654 fraction。

7. 全部余下答案及独立回代量：inferred_distance_3nm=3.00000000000 nm；inferred_distance_7nm=7.00000000000 nm；FRET_efficiency_ratio=8.14932126697 ratio；baseline_decay_rate_nsInv=0.250000000000 ns^-1。

8. 核对能量守恒、归一化、相边界或零流约束；数学计算中不能把近似的实验条件当成无误差的普适常数。

9. 若实际体系存在不可忽略的粒子相互作用、浓度依赖参数、相变动力学及结构变化，本题理想模型的数值不应直接外推。

10. 该题附可独立复算的数值见证，仍属于跨辑原创性和化学专家审定之前的草稿。

### 数值结果与单位

- FRET_E_3nm=0.955423749541 fraction
- FRET_E_7nm=0.117239671654 fraction
- transfer_rate_3_nsInv=5.35836762689 ns^-1
- transfer_rate_7_nsInv=0.0332025771575 ns^-1
- lifetime_3_ns=0.178305001834 ns
- lifetime_7_ns=3.53104131338 ns
- quench_fraction_3=0.955423749541 fraction
- quench_fraction_7=0.117239671654 fraction
- inferred_distance_3nm=3.00000000000 nm
- inferred_distance_7nm=7.00000000000 nm
- FRET_efficiency_ratio=8.14932126697 ratio
- baseline_decay_rate_nsInv=0.250000000000 ns^-1

## UC-ADV13-P187 Ar二聚体Lennard–Jones势函数的极小值、作用力与振动频率

### 完整题目

理想Ar₂两体相互作用势V(r)=4ε[(σ/r)^12−(σ/r)^6]，ε/kB=120.0 K、σ=0.3400 nm、kB=1.380649×10⁻²³ J/K、Ar摩尔质量39.948 g/mol、NA=6.02214076×10²³ mol⁻¹、光速c=299792458 m/s。求r*=2^(1/6)σ、井深、V(σ)与V(1.5σ)、F(r)=24ε/r[2(σ/r)^12−(σ/r)^6]、势阱曲率k=72ε/r*²以及两Ar原子约化质量对应的谐振动频率与波数。

### 详细解析

1. 完整物理化学模型、数据与边界条件：理想Ar₂两体相互作用势V(r)=4ε[(σ/r)^12−(σ/r)^6]，ε/kB=120.0 K、σ=0.3400 nm、kB=1.380649×10⁻²³ J/K、Ar摩尔质量39.948 g/mol、NA=6.02214076×10²³ mol⁻¹、光速c=299792458 m/s。求r*=2^(1/6)σ、井深、V(σ)与V(1.5σ)、F(r)=24ε/r[2(σ/r)^12−(σ/r)^6]、势阱曲率k=72ε/r*²以及两Ar原子约化质量对应的谐振动频率与波数。

2. 可复现解析关系：V(r*)=−ε，k=V''(r*)=72ε/r*²，μ=mAr/2，ν=(1/2π)√(k/μ)。

3. 方程推导与物理判据：V=0的r=σ不是势能最低点；所有长度换m、摩尔质量换单粒子kg后方可计算谐振动。

4. 确认所有标准态、热力学指数和对数的自变量无量纲，选择满足物理边界与唯一性的解。

5. 第一组数值与中间参数：equilibrium_radius_nm=0.381637096425 nm；well_depth_J=1.65677880000e-21 J；well_depth_kJ_mol=0.997735514178 kJ/mol；potential_sigma_J=0.00000000000 J；potential_1p5sigma_J=-5.30726878265e-22 J。

6. 第二组状态、通量或相平衡计算：force_sigma_N=1.16949091765e-10 N；force_1p5sigma_N=-5.64293416784e-12 N；curvature_N_per_m=0.819022549827 N/m；reduced_mass_kg=3.31676073277e-26 kg。

7. 全部余下答案及独立回代量：harmonic_frequency_Hz=790880722127 Hz；harmonic_wavenumber_cmInv=26.3809412486 cm^-1；minimum_potential_J=-1.65677880000e-21 J；force_at_large_distance_attractive=1.00000000000 boolean。

8. 核对能量守恒、归一化、相边界或零流约束；数学计算中不能把近似的实验条件当成无误差的普适常数。

9. 若实际体系存在不可忽略的粒子相互作用、浓度依赖参数、相变动力学及结构变化，本题理想模型的数值不应直接外推。

10. 该题附可独立复算的数值见证，仍属于跨辑原创性和化学专家审定之前的草稿。

### 数值结果与单位

- equilibrium_radius_nm=0.381637096425 nm
- well_depth_J=1.65677880000e-21 J
- well_depth_kJ_mol=0.997735514178 kJ/mol
- potential_sigma_J=0.00000000000 J
- potential_1p5sigma_J=-5.30726878265e-22 J
- force_sigma_N=1.16949091765e-10 N
- force_1p5sigma_N=-5.64293416784e-12 N
- curvature_N_per_m=0.819022549827 N/m
- reduced_mass_kg=3.31676073277e-26 kg
- harmonic_frequency_Hz=790880722127 Hz
- harmonic_wavenumber_cmInv=26.3809412486 cm^-1
- minimum_potential_J=-1.65677880000e-21 J
- force_at_large_distance_attractive=1.00000000000 boolean

## UC-ADV13-P188 Planck黑体辐射在500 nm的谱辐亮度与热光子占据

### 完整题目

理想黑体在固定λ=500.0 nm处的Planck谱辐亮度Bλ=2hc²/[λ⁵(expm1(hc/(λkBT)))]，报告W/(m² sr nm)，温度分别为1000.0和3000.0 K。h=6.62607015×10⁻³⁴ J·s、c=299792458 m/s、kB=1.380649×10⁻²³ J/K，Wien位移常数b=2.897771955×10⁻³ m K。求两温度无量纲光子能、热平均光子占据、谱辐亮度及其比、Wien峰波长和500 nm光子能量；区别同波长谱辐亮度与总辐射能量通量。

### 详细解析

1. 完整物理化学模型、数据与边界条件：理想黑体在固定λ=500.0 nm处的Planck谱辐亮度Bλ=2hc²/[λ⁵(expm1(hc/(λkBT)))]，报告W/(m² sr nm)，温度分别为1000.0和3000.0 K。h=6.62607015×10⁻³⁴ J·s、c=299792458 m/s、kB=1.380649×10⁻²³ J/K，Wien位移常数b=2.897771955×10⁻³ m K。求两温度无量纲光子能、热平均光子占据、谱辐亮度及其比、Wien峰波长和500 nm光子能量；区别同波长谱辐亮度与总辐射能量通量。

2. 可复现解析关系：Bλ,nm=2hc² λ⁻⁵ /expm1(hc/λkBT)×10⁻⁹，λmax=b/T。

3. 方程推导与物理判据：原始Bλ以每m波长为单位，换每nm需乘10⁻⁹；温升使占据数迅速增加，但不能套用全波段T⁴定律计算固定波长的比。

4. 确认所有标准态、热力学指数和对数的自变量无量纲，选择满足物理边界与唯一性的解。

5. 第一组数值与中间参数：photon_energy_over_kBT_1000=28.7755375501 ratio；photon_energy_over_kBT_3000=9.59184585003 ratio；occupation_1000=3.18377837222e-13 photons；occupation_3000=0.0000682879274683 photons。

6. 第二组状态、通量或相平衡计算：radiance_1000_W_nm=0.00000121344539389 W/(m2_sr_nm)；radiance_3000_W_nm=260.268339554 W/(m2_sr_nm)；radiance_ratio=214487063.748 ratio；Wien_peak_1000_nm=2897.77195500 nm。

7. 全部余下答案及独立回代量：Wien_peak_3000_nm=965.923985000 nm；photon_energy_J=3.97289171430e-19 J；photon_energy_eV=2.47968396866 eV；occupation_ratio=214487063.748 ratio。

8. 核对能量守恒、归一化、相边界或零流约束；数学计算中不能把近似的实验条件当成无误差的普适常数。

9. 若实际体系存在不可忽略的粒子相互作用、浓度依赖参数、相变动力学及结构变化，本题理想模型的数值不应直接外推。

10. 该题附可独立复算的数值见证，仍属于跨辑原创性和化学专家审定之前的草稿。

### 数值结果与单位

- photon_energy_over_kBT_1000=28.7755375501 ratio
- photon_energy_over_kBT_3000=9.59184585003 ratio
- occupation_1000=3.18377837222e-13 photons
- occupation_3000=0.0000682879274683 photons
- radiance_1000_W_nm=0.00000121344539389 W/(m2_sr_nm)
- radiance_3000_W_nm=260.268339554 W/(m2_sr_nm)
- radiance_ratio=214487063.748 ratio
- Wien_peak_1000_nm=2897.77195500 nm
- Wien_peak_3000_nm=965.923985000 nm
- photon_energy_J=3.97289171430e-19 J
- photon_energy_eV=2.47968396866 eV
- occupation_ratio=214487063.748 ratio

## UC-ADV13-P189 有限浓度Soret热扩散稳态的Logit组成分布

### 完整题目

无对流二元混合溶液薄层长L=2.000 mm，T从左300 K线性增至右350 K。A组分左端摩尔分数0.2000，总浓度ctot=1000 mol/m³，D=1.000×10⁻⁹ m²/s，Soret常数ST=0.01000 K⁻¹，不随T、x变化。稳态组分流JA=−D ctot[dx/dz+ST x(1−x)dT/dz]=0；用logit(x)=ln[x/(1−x)]求右端与中点摩尔分数及中点浓度梯度，并单独计算Fick及Soret通量贡献以验证零流。

### 详细解析

1. 完整物理化学模型、数据与边界条件：无对流二元混合溶液薄层长L=2.000 mm，T从左300 K线性增至右350 K。A组分左端摩尔分数0.2000，总浓度ctot=1000 mol/m³，D=1.000×10⁻⁹ m²/s，Soret常数ST=0.01000 K⁻¹，不随T、x变化。稳态组分流JA=−D ctot[dx/dz+ST x(1−x)dT/dz]=0；用logit(x)=ln[x/(1−x)]求右端与中点摩尔分数及中点浓度梯度，并单独计算Fick及Soret通量贡献以验证零流。

2. 可复现解析关系：logit(x(T))=logit(xL)−ST(T−TL)，dx/dz=−ST x(1−x) dT/dz。

3. 方程推导与物理判据：非稀溶液须对x(1−x)保留非线性，直接把x视为无限稀溶液浓度得到的简单指数公式不适用；真实ST可随T变化。

4. 确认所有标准态、热力学指数和对数的自变量无量纲，选择满足物理边界与唯一性的解。

5. 第一组数值与中间参数：right_xA=0.131667561668 fraction；midpoint_xA=0.162969920368 fraction；temperature_gradient_K_m=25000.0000000 K/m；midpoint_fraction_gradient_mInv=-34.1026813558 m^-1。

6. 第二组状态、通量或相平衡计算：Fick_flux_mid_mol_m2_s=0.0000341026813558 mol/(m2s)；Soret_flux_mid_mol_m2_s=-0.0000341026813558 mol/(m2s)；net_flux_mid_mol_m2_s=0.00000000000 mol/(m2s)；right_over_left_x=0.658337808339 ratio。

7. 全部余下答案及独立回代量：right_over_left_concentration=0.658337808339 ratio；logit_difference=-0.500000000000 ratio；right_xB=0.868332438332 fraction；total_molar_concentration=1000.00000000 mol/m3。

8. 核对能量守恒、归一化、相边界或零流约束；数学计算中不能把近似的实验条件当成无误差的普适常数。

9. 若实际体系存在不可忽略的粒子相互作用、浓度依赖参数、相变动力学及结构变化，本题理想模型的数值不应直接外推。

10. 该题附可独立复算的数值见证，仍属于跨辑原创性和化学专家审定之前的草稿。

### 数值结果与单位

- right_xA=0.131667561668 fraction
- midpoint_xA=0.162969920368 fraction
- temperature_gradient_K_m=25000.0000000 K/m
- midpoint_fraction_gradient_mInv=-34.1026813558 m^-1
- Fick_flux_mid_mol_m2_s=0.0000341026813558 mol/(m2s)
- Soret_flux_mid_mol_m2_s=-0.0000341026813558 mol/(m2s)
- net_flux_mid_mol_m2_s=0.00000000000 mol/(m2s)
- right_over_left_x=0.658337808339 ratio
- right_over_left_concentration=0.658337808339 ratio
- logit_difference=-0.500000000000 ratio
- right_xB=0.868332438332 fraction
- total_molar_concentration=1000.00000000 mol/m3

## UC-ADV13-P190 固体α/β相变的Clapeyron高压相界及Gibbs能变化

### 完整题目

某假想固体α→β在P0=1.000 bar、T0=350.0 K相平衡，相变焓ΔH=+5000 J/mol、摩尔体积差ΔV=−1.000×10⁻⁶ m³/mol。假设相变熵ΔS=ΔH/T0与ΔV恒定，P至150 MPa，T在340–350 K。用ΔG=ΔH−TΔS+ΔV(P−P0)推导相线、dT/dP、P=100.0 MPa时Teq、T=340 K时Peq，并判断在T=350K、P=100MPa时β相比α是否稳定。

### 详细解析

1. 完整物理化学模型、数据与边界条件：某假想固体α→β在P0=1.000 bar、T0=350.0 K相平衡，相变焓ΔH=+5000 J/mol、摩尔体积差ΔV=−1.000×10⁻⁶ m³/mol。假设相变熵ΔS=ΔH/T0与ΔV恒定，P至150 MPa，T在340–350 K。用ΔG=ΔH−TΔS+ΔV(P−P0)推导相线、dT/dP、P=100.0 MPa时Teq、T=340 K时Peq，并判断在T=350K、P=100MPa时β相比α是否稳定。

2. 可复现解析关系：dT/dP=ΔV/ΔS，Teq(P)=T0+ΔV(P−P0)/ΔS；ΔGβ−α=ΔH−TΔS+ΔV(P−P0)。

3. 方程推导与物理判据：体积较小的β相由增加压力稳定，固体体积差和压力差单位相乘才得到J/mol；不能把−ΔV误读为相变焓放热。

4. 确认所有标准态、热力学指数和对数的自变量无量纲，选择满足物理边界与唯一性的解。

5. 第一组数值与中间参数：transition_entropy_J_molK=14.2857142857 J/(molK)；dT_dP_K_Pa=-7.00000000000e-8 K/Pa；dT_dP_K_MPa=-0.0700000000000 K/MPa；Teq_100MPa_K=343.007000000 K。

6. 第二组状态、通量或相平衡计算：Peq_340K_MPa=142.957142857 MPa；deltaG_T350_P100MPa_Jmol=-99.9000000000 J/mol；deltaG_T340_P0_Jmol=142.857142857 J/mol。

7. 全部余下答案及独立回代量：pressure_Gibbs_shift_Jmol=-99.9000000000 J/mol；equilibrium_residual_Jmol=0.00000000000 J/mol；beta_stable_indicator=1.00000000000 bool。

8. 核对能量守恒、归一化、相边界或零流约束；数学计算中不能把近似的实验条件当成无误差的普适常数。

9. 若实际体系存在不可忽略的粒子相互作用、浓度依赖参数、相变动力学及结构变化，本题理想模型的数值不应直接外推。

10. 该题附可独立复算的数值见证，仍属于跨辑原创性和化学专家审定之前的草稿。

### 数值结果与单位

- transition_entropy_J_molK=14.2857142857 J/(molK)
- dT_dP_K_Pa=-7.00000000000e-8 K/Pa
- dT_dP_K_MPa=-0.0700000000000 K/MPa
- Teq_100MPa_K=343.007000000 K
- Peq_340K_MPa=142.957142857 MPa
- deltaG_T350_P100MPa_Jmol=-99.9000000000 J/mol
- deltaG_T340_P0_Jmol=142.857142857 J/mol
- pressure_Gibbs_shift_Jmol=-99.9000000000 J/mol
- equilibrium_residual_Jmol=0.00000000000 J/mol
- beta_stable_indicator=1.00000000000 bool