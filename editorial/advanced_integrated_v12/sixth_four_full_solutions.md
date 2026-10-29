# 第十二辑第六批四题完整中文解析

全部仍为待专家审核的编辑草稿。

## UC-ADV12-I156 立方NiO Christoffel声子传播、弹性各向异性与Hill平均模量

### 题干
假想岩盐型立方NiO无机单晶，晶胞参数a=4.180 Å、每常规晶胞有4个NiO式量，Ni/O原子量分别58.6934/15.999 g/mol、N_A=6.02214076×10²³ mol⁻¹。其晶体弹性常数C₁₁=300.0 GPa、C₁₂=100.0 GPa、C₄₄=80.00 GPa，忽略磁弹耦合与晶体缺陷。求式量、晶胞体积、密度、体积模量与四方剪切模量、Zener各向异性比；通过立方晶体Christoffel刚度求[100]的纵/横声速和[110]的纵波及面内[1̄10]横波速度。另计算Voigt、Reuss及Hill多晶平均剪切模量和泊松比，逐项检验Born稳定性、Ni²⁺/O²⁻电中性、弹性模量/密度SI换算及模型边界。

### 中文分步推导
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

### 主要数值答案向量
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

## UC-ADV12-A156 BET氮气多层吸附双压线性反演、单层容量与比表面积

### 题干
一种假想多孔无机样品在77.00 K的N₂吸附实验遵循BET模型v=v_m Cx/[(1−x)(1+(C−1)x)]，x=p/p_sat，v的单位cm³(STP)/g，v_m为单层容量，C为吸附热常数。两相对压力x₁=0.1000与x₂=0.3000下分别测得v₁=18.832391713748和v₂=27.297543221110 cm³(STP)/g。N₂分子横截面积为0.1620 nm²，标准状态摩尔气体体积22414 cm³/mol、N_A=6.02214076×10²³ mol⁻¹、R=8.314462618 J/(mol·K)。对BET方程作直线变换Y=x/[v(1−x)]，由两点反推v_m、C，预测第三压力x=0.2000的吸附量，计算BET比表面积和在C≈exp[(E₁−E_L)/RT]假设下的吸附能差，检查正性、单位及模型边界。

### 中文分步推导
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

### 主要数值答案向量
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

## UC-ADV12-O153 对位取代SNAr的Hammett线性自由能反演、动力学转化与活化自由能差

### 题干
某假想三种对位取代芳香底物在恒定过量亲核试剂作用下发生同一SNAr限速步骤，采用Hammett经验关系log₁₀(k_X/k_H)=ρσ_p。三种取代基的σ_p分别为给电子基−0.2700、母体0、吸电子基+0.7800，在T=298.15 K下测得伪一级速率分别0.00211348903983665、0.0100000000000000、0.891250938133746 s⁻¹。给定R=8.314462618 J/(mol·K)，且实验中无机理切换。由两端速率和σ反演ρ、母体速率k_H，求两个极端反应的速率比；吸电子底物在60.00 s内反应不可逆且亲核试剂保持过量，求转化率与半衰期。假定不同取代基Eyring指前因子相同，估算吸电子相对于母体的过渡态活化自由能差；检查log底数、概率、反应骨架守恒及Hammett适用的机理边界。

### 中文分步推导
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

### 主要数值答案向量
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

## UC-ADV12-P153 球形多孔催化剂Thiele模数的反应—扩散边值解与有效因子

### 题干
一个球形多孔催化剂颗粒半径R_p=1.000 mm，内部反应物A发生一级不可逆反应k=0.01000 s⁻¹、有效扩散系数D_eff=1.000×10⁻⁹ m²/s，外部液体足够搅拌使球面浓度固定c_s=1.000 mol/m³，忽略颗粒温度梯度、外部膜阻力及孔结构变形。稳态球对称反应扩散方程D_eff(r⁻²)d/dr(r²dc/dr)−kc=0，中心要求有限。推导解析浓度分布、Thiele模数φ、中心浓度、球形有效因子η=3(φcothφ−1)/φ²，计算球体积、表面积、体积反应速率与表面扩散通量并独立比对二者总摩尔数，检查扩散长度、φ→0与φ→∞两端极限及实验模型范围。

### 中文分步推导
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

### 主要数值答案向量
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

