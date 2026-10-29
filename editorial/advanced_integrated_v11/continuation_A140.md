# UC-ADV11-A140｜三重态荧光相关谱的粒子数、扩散与浓度联合反演

## 中文题干
单组分溶液的荧光相关光谱(FCS)使用三维高斯共聚焦模型，观测零延迟归一化振幅G(0)=0.058823529411765、扩散拟合时间τ_D=0.4500 ms。横向光斑尺度w₀=0.3000 μm，轴向z₀=1.500 μm，三重态暗态比例f_T=0.1500、恢复时间τ_T=3.000 μs。理论自相关G(τ)=N⁻¹(1+τ/τ_D)⁻¹[1+τ/(s²τ_D)]⁻¹/²[1+f_T/(1−f_T)exp(−τ/τ_T)]，s=z₀/w₀，扩散τ_D=w₀²/(4D)。给定T=298.15 K、黏度η=0.8900 mPa·s、kB=1.380649×10⁻²³ J/K、NA=6.02214076×10²³ mol⁻¹。计算结构参数s、平均荧光分子数、扩散系数D、水动力半径、有效高斯探测体积V_eff=π^(3/2)w₀²z₀及fL单位换算、溶液浓度(nmol/L)、数密度、τ_T与τ_D处的理论相关振幅，核对零延迟三重态校正、物理边界及唯一性。

## 完整分步解析
1. 题设三维高斯共聚焦探测体积的横向光斑尺度w₀、轴向z₀，定义无量纲结构参数s=z₀/w₀。

2. 单分散自由扩散的规范化FCS自相关G_d(τ)=N⁻¹(1+τ/τ_D)⁻¹[1+τ/(s²τ_D)]⁻¹/²，其中τ_D=w₀²/(4D)。

3. 若单个快速三重态暗态占比f_T、平均恢复时间τ_T，在此模型下整体自相关乘1+[f_T/(1−f_T)]exp(−τ/τ_T)。

4. 由光学尺度w₀=0.3 μm和z₀=1.5 μm得s=5；τ→0时G(0)=1/[N(1−f_T)]，与无三重态的1/N不同。

5. 测量G(0)=0.0588235294118、f_T=0.15，因此N=1/[G(0)(1−f_T)]=20个分子；若漏掉三重态校正会系统性低估数目。

6. 观测扩散时间τ_D=0.45 ms，独立反算D=w₀²/(4τ_D)=5.00000000000e-11 m²/s，并检查D>0。

7. Stokes–Einstein关系D=kBT/(6πηr_H)，代入T=298.15 K、η=0.00089 Pa·s，得r_H=4.90746219089 nm。

8. 有效体积V_eff=π^(3/2)w₀²z₀=7.51724279572e-19 m³=0.751724279572 fL；1 fL=10⁻¹⁸ m³，不能误乘10¹⁵。

9. 用N=cN_A V_eff求c=44.1794714445 nmol/L，计算中V_eff由m³乘1000得到L；数密度N/V_eff=2.66054995741e+19 m⁻³。

10. 把τ=τ_T代入完整自相关，G(τ_T)=0.0528863215458；既包含快速暗态恢复也包含小量扩散衰减。

11. 把τ=τ_D代入，G(τ_D)=0.0245145168923；三重态指数项此时近似0，扩散因子为1/[2√(1+1/s²)]。

12. 在单分散、高斯探测、各向同性布朗扩散、低浓度、无光漂白及三重态为单指数条件下反演唯一；多扩散组分、异常扩散、光漂白与背景计数需扩展模型。

## 独立机器答案向量
- axial_shape_parameter = 5 dimensionless
- observed_zero_lag_amplitude = 0.058823529411764705 dimensionless
- mean_fluorophore_number = 20 molecules
- diffusion_coefficient_m2_s = 5e-11 m2/s
- hydrodynamic_radius_nm = 4.907462190889036 nm
- effective_detection_volume_fL = 0.7517242795722805 fL
- solute_concentration_nM = 44.17947144446812 nmol/L
- number_density_m_minus3 = 26605499574098750000 m^-3
- G_at_triplet_time = 0.05288632154575661 dimensionless
- G_at_diffusion_time = 0.024514516892273002 dimensionless
- triplet_corrected_amplitude = 0.05 dimensionless
- triplet_population_ratio = 0.17647058823529413 dimensionless
- diffusion_reconstruction_ratio = 1 ratio

正式发布禁止：publishable=false，exclude_from_official_bank=true。人工质检仍待开展。
