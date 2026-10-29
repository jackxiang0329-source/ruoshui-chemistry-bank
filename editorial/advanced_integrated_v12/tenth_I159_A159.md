# 第十二辑 I159 / A159 完整中文解析

所有稿件均为待专家审批候选，非正式发布。

## UC-ADV12-I159 MgO Born–Haber循环的二次电子亲和、晶格焓和假想水合路径审计

### 中文题干
以假想标准状态的MgO(s) Born–Haber热化学循环作严格无机化学推导。已知Mg(s)+½O₂(g)→MgO(s)标准生成焓ΔH_f=−602 kJ/mol；Mg(s)→Mg(g)升华焓+148 kJ/mol，Mg(g)第一次、第二次电离焓分别+738及+1451 kJ/mol，½O₂(g)→O(g)解离焓+249 kJ/mol，氧原子第一次电子加合焓−141 kJ/mol、第二次电子加合焓+744 kJ/mol。定义晶格形成焓L为Mg²⁺(g)+O²⁻(g)→MgO(s)，求所有气相离子制备焓、L、正号晶格解离焓及Hess残差。另给假想且不发生水解的气态离子水合焓Mg²⁺ −1921、O²⁻ −1300 kJ/mol，求形式离子溶解焓，检查Mg/O/电子数与电荷守恒。必须解释O²⁻在真实水中会迅速质子化，故形式溶解路径不等同于真实MgO水化实验。

### 解答过程
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

### 答案向量
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

## UC-ADV12-A159 拉曼Stokes/反Stokes四次频率修正的晶格温度及光子计数误差反演

### 中文题干
用假想无机晶体的一阶拉曼Stokes与反Stokes信号反演局部温度。入射激光真空波数ν̃₀=20000.0 cm⁻¹，晶格拉曼模式波数ν̃_v=1000.0 cm⁻¹，两支谱线的探测响应已完成校准，并假定非共振拉曼张量相同、晶格热平衡。给定强度比I_AS/I_S=[(ν̃₀+ν̃_v)/(ν̃₀−ν̃_v)]⁴ exp[−(hc/kB)ν̃_v/T]，hc/kB=1.438776877 K·cm。实测强度比为0.0244663336559430，环境温度298.15 K。求Stokes及反Stokes波数和真空波长、光学频率四次修正因子、由比值唯一反演的温度及升温量、声子占有数。若Stokes光子计数的期望为1.000×10⁶，反Stokes计数按该比值预测且两个计数独立Poisson，求反Stokes计数期望、比值和温度的一阶标准不确定度；验证光子能量差、Boltzmann极限、噪声单位与共振/背景局限。

### 解答过程
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

### 答案向量
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

