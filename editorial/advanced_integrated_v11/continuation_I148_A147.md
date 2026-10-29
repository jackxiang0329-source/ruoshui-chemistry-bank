# 第十一辑 I148 / A147 高阶题目及解析

草稿禁止正式发表，尚待人类化学专家逐式审核。

## UC-ADV11-I148 ScF3声子Grüneisen负热膨胀的晶格与质量密度反演

### 中文题干
某假想立方ScF₃无机框架晶体每晶胞含一个ScF₃式量，晶格常数a(300 K)=4.000 Å，Sc/F摩尔原子量分别44.9559与18.9984 g/mol，N_A=6.02214076×10²³ mol⁻¹。题设有效Grüneisen参数γ=−1.500、体弹性模量B=30.00 GPa、C_V=3R、R=8.314462618 J/(mol·K)，在300–350 K认为这些参数恒定，且α_V=γC_V/(BV_m)、α_L=α_V/3。求每摩尔晶胞体积、式量、300 K密度、体/线热膨胀系数，以及350 K的晶格参数、摩尔体积、密度变化；用立方有限应变精确关系和Sc³⁺/F⁻电中性、量纲核对并讨论负热膨胀近似。

### 逐步解析
1. 假想立方ScF₃框架每晶胞含一个化学式单位；Sc³⁺与三个F⁻满足化学计量电中性。

2. 将晶格常数4.000 Å换成4.000×10⁻¹⁰ m，每摩尔晶胞的体积V_m=N_Aa³。

3. 由原子量得到ScF₃式量101.951100000 g/mol，V_m=0.0000385417008640 m³/mol。

4. 密度ρ=(M/1000)/V_m=2645.21538268 kg/m³，明确g/mol到kg/mol的换算。

5. 采用题设有效Grüneisen关系α_V=γC_V/(BV_m)，B=30.00 GPa、γ=−1.500、C_V=3R。

6. 算得α_V=-0.0000323589609369 K⁻¹和立方各向同性α_L=α_V/3=-0.0000107863203123 K⁻¹，二者负号体现负热膨胀。

7. 升温50.00 K且α_L近似恒定，按一阶应变a₂=a(1+50α_L)求a₂=3.99784273594 Å。

8. 对有限晶格应变以精确立方关系V_m₂=V_m(a₂/a)³求0.0000384793760192 m³/mol，而非把3α_LΔT当严格精确的体积改变量。

9. 相应密度ρ₂=2649.49982424 kg/m³，相对变化=0.00161969478737，随温度升高因体积缩小而上升。

10. 单位验证：B V_m=(Pa)(m³/mol)=J/mol，C_V/(BV_m)的量纲是K⁻¹，结果符号与γ一致。

11. 每式量一个Sc³⁺、三个F⁻电荷和为0，体积收缩不会改变ScF₃的原子数或形式化学计量。

12. 本题把声子谱压缩为恒定有效γ，忽略温度相关热容、晶体弹性各向异性与声子非谐性；不代表真实ScF₃精确实测。

### 答案向量
- molar_cell_volume_m3_mol: 0.000038541700864000004 m3/mol
- formula_mass_g_mol: 101.9511 g/mol
- density_300_kg_m3: 2645.2153826773056 kg/m3
- volume_expansion_K_inv: -0.0000323589609369036 K^-1
- linear_expansion_K_inv: -0.0000107863203123012 K^-1
- lattice_parameter_350_A: 3.9978427359375397 Angstrom
- molar_volume_350_m3_mol: 0.000038479376019240486 m3/mol
- density_350_kg_m3: 2649.499824244092 kg/m3
- relative_density_change: 0.0016196947873674539 ratio
- gamma_times_Cv_J_molK: -37.415081781 J/(mol K)
- thermodynamic_identity_J_molK: -37.415081781 J/(mol K)
- formal_charge_residual: 0 charge
- finite_relative_volume_change: -0.0016170756184175072 ratio

状态：`publishable=false`, `exclude_from_official_bank=true`, `quality_status=awaiting_expert_review`, `novelty_review_status=pending_cross_series_model_review`。

## UC-ADV11-A147 微悬臂梁吸附谐振频移的Langmuir质量与动态响应双压反演

### 中文题干
某假想微悬臂梁气体吸附传感器空白共振频率f₀=100.000 kHz、有效振动质量m_eff=1.000×10⁻⁹ kg，吸附后f=f₀/[1+m_ads/m_eff]^(1/2)。表面单层Langmuir平衡m_ads(p)=m_max Kp/(1+Kp)。两次实验在p=0.1000 bar和p=1.000 bar的频率分别为99833.7488459583 Hz与99339.9267798783 Hz，假定传感器刚度和质量标定不变。给定脱附一级常数k_des=0.02000 s⁻¹。由两次频率读数反求m_max、K及p=0.5000 bar时的吸附量、覆盖率和共振频率；在Langmuir吸附/脱附动力学下求k_ads和响应时间，并验证两点反问题唯一性、正性、位点质量守恒与实验物理边界。

### 逐步解析
1. 把化学气体传感微悬臂梁看作刚度恒定的线性谐振器，空白有效质量10⁻⁹ kg、共振频率100.000 kHz。

2. 平衡吸附物与梁同步振动的模型给f=f₀/√(1+m_ads/m_eff)；频移需进行平方根反演。

3. 单类独立表面位点遵循Langmuir公式m_ads=m_max Kp/(1+Kp)，压力以bar计。

4. 在p₁=0.1000 bar时表面吸附质量3.33333333333e-12 kg，共振频率99833.7488460 Hz。

5. 在p₂=1.000 bar时表面吸附质量1.33333333333e-11 kg，共振频率99339.9267799 Hz。

6. 把观测频率转换为m_ads=m_eff[(f₀/f)²−1]，两点均为正值，满足非负载荷边界。

7. 对Langmuir式求倒数：1/m_ads=1/m_max+1/(m_max Kp)，令横坐标1/p，直线两点唯一决定斜率与截距。

8. 得到m_max=2.00000000000e-11 kg、K=2.00000000000 bar⁻¹；截距与斜率均正，反向回代重建两频率。

9. 在p₃=0.5000 bar时m_ads=1.00000000000e-11 kg、f=99503.7190210 Hz、覆盖率θ=0.500000000000。

10. 若微观吸附动力学dθ/dt=k_ads p(1−θ)−k_desθ，平衡要求K=k_ads/k_des。

11. 取k_des=0.02000 s⁻¹得k_ads=0.0400000000000 bar⁻¹s⁻¹，p₃处弛豫时间τ=[k_ads p₃+k_des]⁻¹=25.0000000000 s。

12. 低压p→0时f→f₀，高压覆盖饱和时m_ads→m_max；真实水汽竞争、刚度变化、非均匀吸附、气体黏滞和多种位点会使质量频移和Langmuir假设失效。

### 答案向量
- frequency_0p1bar_Hz: 99833.74884595827 Hz
- frequency_1bar_Hz: 99339.92677987828 Hz
- mass_0p1bar_kg: 3.3333333333333335e-12 kg
- mass_1bar_kg: 1.3333333333333333e-11 kg
- inverse_mass_slope_bar_kg: 25000000000 bar/kg
- inverse_mass_intercept_per_kg: 50000000000 kg^-1
- saturation_mass_kg: 2e-11 kg
- Langmuir_K_per_bar: 2 bar^-1
- mass_0p5bar_kg: 1e-11 kg
- frequency_0p5bar_Hz: 99503.71902099892 Hz
- coverage_0p5bar: 0.5 fraction
- adsorption_rate_bar_inv_s: 0.04 bar^-1s^-1
- relaxation_time_0p5bar_s: 25 s
- coverage_from_mass_ratio: 0.5 fraction

状态：`publishable=false`, `exclude_from_official_bank=true`, `quality_status=awaiting_expert_review`, `novelty_review_status=pending_cross_series_model_review`。

