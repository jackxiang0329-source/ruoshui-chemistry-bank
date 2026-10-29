# 第十二辑 I165/A165 完整题干与逐步解析

本批仍为未经化学专家与跨辑模型认证的待审草稿。

## UC-ADV12-I165 57Fe Mössbauer双峰异构位移、四极分裂与自由核反冲审计

### 题干
某假想无机铁配合物进行⁵⁷Fe Mössbauer谱学，核γ基准跃迁能量Eγ=14.4125 keV。相对同一参考源，轴对称电场梯度下观测四极双峰的多普勒速度分别v₋=−0.3500、v₊=+1.2500 mm/s；定义正速度给正能量移。⁵⁷Fe核质量采用56.9354 u、1u=1.66053906660×10⁻²⁷ kg；c=299792458 m/s、h=4.135667696×10⁻¹⁵ eV·s、1eV=1.602176634×10⁻¹⁹ J、k_B=1.380649×10⁻²³ J/K。求双峰异构位移速度和四极速度间距、每峰与中心的能移、四极超精细能量间距（eV和neV）、对应频率与温标、γ光子波长，以及自由核单次反冲能和反冲与四极能量的数量级比。逐一核查谱线中心、能量差、速度单位和无反冲吸收与自由核反冲的区别；说明四极分裂无法仅由双峰唯一反推电场梯度张量。

### 严格解答
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

### 答案与单位
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

## UC-ADV12-A165 强酸电导滴定的离子物料、稀释修正与分段斜率交点反演

### 题干
某分析化学电导滴定将20.00 mL未知HCl水样（另含0.005000 mol/L不反应NaCl背景盐）以0.02000 mol/L NaOH滴定，假设等温、完全中和、离子摩尔电导率保持常数，真实待测HCl浓度0.01000 mol/L用于生成独立模拟读数。298 K时λ(H⁺)=0.03496、λ(Na⁺)=0.005011、λ(Cl⁻)=0.007635、λ(OH⁻)=0.01985 S·m²/mol，所有体积可加，κ=Σλc且c必须转成mol/m³。求滴定体积V=0、5、10、15、20 mL各点原始电导率及按初始体积校正后的电导率κ_corr=κ(V)(V_i+V)/V_i，计算等当量前后两条严格线性支的斜率和交点，并由交点独立反求HCl浓度；列明每段四种离子的物质的量，逐一检查反应物当量、溶液总正负电荷、稀释和等当量处非零最低电导率，解释现实离子迁移率并非严格常数。

### 严格解答
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

### 答案与单位
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

