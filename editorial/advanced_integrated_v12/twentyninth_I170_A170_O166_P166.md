# 第十二辑第29批 · I170/A170/O166/P166

本批四道高阶综合原创待审稿，分别覆盖无机配位氧化还原、分析计时安培、有机缩聚计量与物理多层吸附。独立数值复算并非专家科学性或跨辑原创性认证，全部publishable=false。

## UC-ADV12-I170 氯配位稳定Cu(I)对歧化平衡、Nernst电位与固相物料的耦合

### 完整题干

在298.15 K的假想Cu–Cl理想稀溶液中，只允许可逆歧化2Cu⁺⇌Cu²⁺+Cu(s)，以及Cu⁺+Cl⁻⇌CuCl(aq)、Cu²⁺+Cl⁻⇌CuCl⁺(aq)两种可溶一氯络合。自由[Cl⁻]由外部储液池恒定保持0.05000 mol/L；β_I=100.0、β_II=10.00 L/mol。原有Cu(I)的总浓度0.01000 mol/L、样品体积0.1000 L，容许形成纯Cu固相。标准还原电位E°(Cu⁺/Cu)=0.3500 V、E°(Cu²⁺/Cu⁺)=0.2500 V。F=96485.33212 C/mol，R=8.314462618 J/(mol K)，标准态c°=1 mol/L、活度系数取1；忽略氧化、水解、多氯络合和CuCl沉淀。求自由离子歧化平衡常数、各氧化态配位分配因子、条件平衡常数与其自由能、平衡各铜物种和铜沉积质量；用两个Nernst电位独立复核详细平衡并核验铜物料、总反应电荷、外部Cl储库假设。说明配位如何改变歧化方向。

### 逐步解析

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

### 数值结果与单位

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

## UC-ADV12-A170 计时安培Cottrell扩散与双电层充电的双时刻反演、积分及误差传播

### 完整题干

某假想1电子可逆电极在298.15 K受扩散控制，电极面积A=0.07000 cm²，体相浓度c*=1.000 mmol/L，n=1、F=96485.33212 C/mol。法拉第限流满足iF(t)=nFAc*sqrt[D/(πt)]，同时有独立一阶双电层充电电流idl(t)=B exp(−t/τ)，τ=2.000 s由另一阻抗实验确定。实测理想模拟总电流i(1.000 s)=14.1860782497 μA，i(4.000 s)=5.74959875191 μA；独立验证点i(9.000 s)=3.20014962965 μA。不得预先假定扩散系数D或初始充电电流B。由前两点严格反演a=nFAc*sqrt(D/π)及B与D，再用第三点验算。假设两测量电流的标准不确定度均为0.1000 μA且相互独立，其余参数确定，求D的一阶合成标准不确定度。求0—9 s的法拉第电量、充电电量、总电量、总电解摩尔数（只用法拉第电量），以及圆盘半径与扩散长度sqrt(Dt)之比；核验SI单位与半无限平面近似的条件。

### 逐步解析

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

### 数值结果与单位

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

## UC-ADV12-O166 A₂/B₂逐步缩聚的计量偏差、端基酸值与Carothers数均分子量

### 完整题干

将乙二醇HO–CH₂CH₂–OH（A₂，62.068 g/mol）0.03000 mol与己二酸HOOC–(CH₂)₄–COOH（B₂，146.14 g/mol）0.02000 mol理想缩聚。每生成1条酯键释放一分子H₂O并定量移走，M(H₂O)=18.01528 g/mol。所有物种均只有2个官能团，无环化、支化、挥发单体损失和降解。限制性羧基转化率p_B=0.8000。反应后的游离单体和低聚体全部计入总质量和分子数，每个产物分子都是非环线性链。已知M(KOH)=56.1056 g/mol。求初始羟基、羧基当量及实际成键数、羟基转化率、数均聚合度DPn、干产物分子数及数均分子量、脱水与原料总质量守恒、羟基及羧基端数、酸值和羟值(mg KOH/g)。证明端基总当量为剩余链数的两倍，并给出完全消耗羧基时DPn的计量上限，以及要达到DPn=4所需羧基转化率。讨论二官能缩聚不可能凭此机理产生交联凝胶的原因。

### 逐步解析

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

### 数值结果与单位

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

## UC-ADV12-P166 BET氮气多层吸附的双点反演、单层容量与比表面积

### 完整题干

某理想固体在77.00 K以N₂进行BET多层吸附，x=p/p₀，吸附量v以cm³ STP/g计，服从v=v_m C x/[(1−x)(1+(C−1)x)]。实验提供两个理想模拟点：(x₁=0.05000, v₁=79.9467021985 cm³ STP/g)、(x₂=0.2000, v₂=117.187500000 cm³ STP/g)。v_m与BET常数C均未知，必须从两点数据求出，不能预设其数值。给定0 °C、1 atm的氮气STP摩尔体积22414 cm³/mol、阿伏伽德罗常数6.02214076×10²³ mol⁻¹、氮气分子有效横截面积0.1620 nm²、R=8.314462618 J/(mol K)。将数据线性化为y=x/[v(1−x)]，求斜率、截距、v_m、C及单层分子数和BET比表面积，预测x=0.1000时v。若C≈exp[(E₁−E_L)/(RT)]，反演第一层相对后续层的能量差，并审核低相对压力和接近饱和时的BET适用范围；不得将多层吸附总体积误当成单层体积。

### 逐步解析

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

### 数值结果与单位

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
