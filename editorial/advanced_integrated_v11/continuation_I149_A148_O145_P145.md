# 第十一辑 I149 A148 O145 P145 高阶综合题

这些题目及独立数值witness均属于编辑草稿；专家审定与跨辑方程级审查未完成。

## UC-ADV11-I149 CeO2-x 氧空位—Ce3+电中性与氧分压双态质量作用反演

### 题干
一理想化CeO₂₋ₓ无机氧化物在固定温度下与氧气平衡，氧移除反应为2Ce_Ceˣ+O_Oˣ ⇌ 2Ce_Ce′+V_O^{••}+½O₂(g)。每Ce阳离子位点中Ce³⁺分数2x、Ce⁴⁺分数1−2x，两个氧位点中空位分数x/2、正常氧位点分数1−x/2；气体分压相对1 bar为无量纲。采用理想位点活度的质量作用式K=[Ce³⁺]²[V_O](p_O₂/bar)^{1/2}/([Ce⁴⁺]²[O_O])。已知氧分压p₁=0.01000 bar时x₁=0.04000，温度不变降压到p₂=0.0001000 bar。推导仅含x的平衡方程并反演K与新非化学计量x₂，求Ce³⁺/Ce⁴⁺、空位/氧位点分数、每Ce相对理想氧化物释放的O₂量，并检查缺陷电荷平衡、气体氧原子数、正根唯一性和理想缺陷模型失效界限。

### 完整中文分步解答
1. 在理想化CeO₂₋ₓ萤石氧化物中，以每一个Ce为计量基准，原先两个氧位点中有x个氧空位，实际化学式CeO₂₋ₓ，要求0<x<1/2。

2. 从氧晶格移除一个O²⁻形成一个带形式+2有效电荷的氧空位V_O^{••}，伴随两个Ce(IV)还原为Ce(III)，故每Ce的Ce³⁺分数为2x。

3. 相应Ce⁴⁺阳离子位点分数为1−2x；氧位点中空位分数x/2、被氧占据的分数1−x/2，分别按对应子晶格而非混用总原子位数计。

4. 氧释放反应可写作2Ce_Ceˣ+O_Oˣ ⇌ 2Ce_Ce′+V_O^{••}+½O₂(g)，两侧有效电荷相等。

5. 题设用无量纲理想位点活度构造质量作用常数K=([Ce³⁺]²[V_O]p_O2^{1/2})/([Ce⁴⁺]²[O_O])，气体分压相对1 bar为无量纲。

6. 代入子晶格分数得到K=[2x³/((1−2x)²(1−x/2))]√(p_O2/bar)；系数2来源于两个还原Ce位点与一半氧空位。

7. 已知p₁=0.01 bar时x₁=0.04，计算K=0.0000154315034142，没有单位。

8. 第二次氧分压降至10⁻⁴ bar时保持同温，求f(x)=2x³/[(1−2x)²(1−x/2)]=K/√p₂；f(x)在0<x<1/2严格递增，正物理解唯一。

9. 二分法求x₂=0.0804822892511；对应Ce³⁺分数0.160964578502、Ce⁴⁺分数0.839035421498。

10. 氧子晶格空位分数=0.0402411446255、被占位分数=0.959758855374；低分压使x增大，和释放氧的方向一致。

11. 每Ce放出氧气的量为x₂/2=0.0402411446255 mol O₂/mol Ce（相对于CeO₂理想参照），总式量中的O数2−x₂=1.91951771075。

12. 逐Ce检查有效电荷：两个Ce³⁺形式负有效电荷总数2x，空位正有效电荷2x；Ce位点和氧位点各自分数和严格为1。

13. 实际CeO₂在较大缺氧时可能出现缺陷缔合、电子小极化子、非理想活度与相边界；本题仅在题设理想混合及恒温条件内成立。

### 主要数值答案
- dimensionless_K: 0.000015431503414220132 dimensionless
- x_at_0p01bar: 0.04 fraction
- Ce3_fraction_at_initial: 0.08 fraction
- x_at_1e4bar: 0.08048228925108711 fraction
- Ce3_cation_fraction: 0.16096457850217422 fraction
- Ce4_cation_fraction: 0.8390354214978257 fraction
- vacancy_oxygen_sublattice_fraction: 0.040241144625543554 fraction
- occupied_oxygen_site_fraction: 0.9597588553744565 fraction
- oxygen_evolved_mol_per_Ce: 0.040241144625543554 mol/mol
- vacancy_increase_ratio: 2.012057231277178 ratio
- oxygen_stoichiometric_coefficient: 1.919517710748913 O/Ce
- charge_neutrality_ratio: 2 charge ratio
- oxygen_pressure_sqrt_ratio: 10 ratio
- defect_ratio_at_two_pressures: 10 ratio

状态：`publishable=false`，`exclude_from_official_bank=true`，`quality_status=awaiting_expert_review`，`novelty_review_status=pending_cross_series_model_review`。

## UC-ADV11-A148 双波长标准加入—双组分消光矩阵满秩反演与质量复算

### 题干
某分析化学样品含有两种重叠吸收的有色配合物A和B，用1.000 cm比色皿测量450与550 nm两点吸光度。摩尔消光系数矩阵ε=[[25000,5000],[10000,20000]] L/(mol·cm)，行代表波长、列代表A和B；两波长仪器空白基线分别为0.01000和0.02000。样品的初始吸光度为0.35000000000000、0.30000000000000。采用保持总体积不变的标准加入方式，仅对A增加5.000 μmol/L，加标后的吸光度为0.47500000000000、0.35000000000000。求加标双波长响应比、消光矩阵行列式及两组分原始浓度与比例；如果原样总体积200.0 mL，A/B摩尔质量分别300.0/200.0 g/mol，求两组分质量。用原始与加标吸光度两组相互独立观测验证反演及线性秩唯一性，讨论基线、体积和非理想吸收的局限。

### 完整中文分步解答
1. 将假想双组分光学比色溶液中的待测A和干扰B视为各满足Beer–Lambert定律，并有两波长固定光学背景A_base；比色光程L=1.000 cm。

2. 给定450 nm时摩尔消光系数ε_A=25000、ε_B=5000 L/(mol·cm)，550 nm时分别10000、20000，均被认为不随浓度改变。

3. 对两波长写A450−A_base450=L(ε_A450 c_A+ε_B450 c_B)，A550−A_base550=L(ε_A550 c_A+ε_B550 c_B)。

4. 在同一总体积中只对待测A加入已知浓度增量Δc_A=5.000 μmol/L，B浓度和基线保持不变，故两波长光吸收增量只等于L ε_A Δc_A。

5. 实测的450与550 nm初始吸光度分别为0.350000000000、0.300000000000，加标后分别0.475000000000、0.350000000000。

6. 两波长增量分别0.125000000000和0.0500000000000，与ε_A450/ε_A550=2.500的比值完全吻合。

7. 正确扣去基线0.01000和0.02000后，双波长线性方程矩阵为[[25000,5000],[10000,20000]]；行列式非零确保两组分唯一识别。

8. 行列式为450000000.000 (L/(mol·cm))²；用Cramér法则求c_A=0.0000120000000000、c_B=0.00000800000000000 mol/L。

9. 目标与干扰组分浓度比c_A/c_B=1.50000000000，两组都非负，且相互混色不是简单单波长标准曲线可消除。

10. 若样品体积200.0 mL、两组分摩尔质量分别300.0和200.0 g/mol，则A总质量=0.000720000000000 g、B总质量=0.000320000000000 g。

11. 由回算c_A、c_B再分别重建两吸光度并加回背景，与原始两读数完全相同；加标读数的两波长差也应独立复现。

12. 若摩尔消光系数矩阵近奇异、出现化学络合、散射、内滤效应、加标体积改变或基线漂移，本反演可能严重偏差；不能把数值线性唯一性等同于实验无误差。

### 主要数值答案
- abs_initial_450: 0.35 abs
- abs_initial_550: 0.30000000000000004 abs
- abs_spiked_450: 0.475 abs
- abs_spiked_550: 0.35000000000000003 abs
- spike_delta_450: 0.125 abs
- spike_delta_550: 0.04999999999999999 abs
- two_wavelength_determinant: 450000000 L2/mol2/cm2
- analyte_A_mol_L: 0.000011999999999999999 mol/L
- interferent_B_mol_L: 0.000008000000000000003 mol/L
- concentration_A_over_B: 1.5 ratio
- mass_A_in_200mL_g: 0.00072 g
- mass_B_in_200mL_g: 0.00031999999999999997 g
- reconstructed_abs_450: 0.35000000000000003 abs
- reconstructed_abs_550: 0.30000000000000004 abs
- inverse_design_determinant: 2.222222222222222e-9 inverse-determinant

状态：`publishable=false`，`exclude_from_official_bank=true`，`quality_status=awaiting_expert_review`，`novelty_review_status=pending_cross_series_model_review`。

## UC-ADV11-O145 酶促手性醇动力学拆分的双一级指数与底物/产物ee保真审计

### 题干
一种假想酶以恒定过量酰基供体催化消旋二级醇R-OH与S-OH分别发生O-酰化生成保持原手性碳构型的R-酯和S-酯。初始两对映体各为1.000 mmol，反应在恒温下不可逆且无消旋、酯水解和竞争副反应；供体缓冲使两路径呈伪一级，k_R=0.08000 min⁻¹、k_S=0.02000 min⁻¹。求10.00 min后两种剩余醇及对应酯的摩尔量、总转化率、剩余底物S-ee和生成酯R-ee、动力学拆分因子E及双半衰期；由解析反函数求剩余底物ee达到90.00%时的唯一时间和相应转化率。检查两对映骨架分别守恒、所有分数物理有效、羟基酰化与碳手性构型关系及模型失效条件。

### 完整中文分步解答
1. 假设初始消旋手性二级醇R与S各1.000 mmol，分别与大量酰基供体发生不可逆、保留手性碳构型的酶催化O-酰化反应。

2. 酰基供体恒定过量使两对映体服从不同伪一级速率k_R=0.08000 min⁻¹和k_S=0.02000 min⁻¹，酯产物不再水解或消旋。

3. 对两对映体独立积分d[R]/dt=−k_R[R]、d[S]/dt=−k_S[S]，得到[R]_t=[R]_0e^(−k_Rt)、[S]_t=[S]_0e^(−k_St)。

4. 每一消耗的醇骨架形成同构型的手性酯，产物量分别[R]_0(1−e^(−k_Rt))、[S]_0(1−e^(−k_St))；供体提供酰基且不计入醇骨架数。

5. 10.00 min时R与S剩余比例分别0.449328964117、0.818730753078，余下物质的量分别0.000449328964117、0.000818730753078 mol。

6. 两种酯产物分别0.000550671035883、0.000181269246922 mol，总醇骨架数及各对映体分别严格守恒。

7. 总转化率c=1−(e^(−k_Rt)+e^(−k_St))/2=0.365970141402，在(0,1)内。

8. 未反应醇以S为过量构型，ee_S=(S_rem−R_rem)/(S_rem+R_rem)=0.291312612452。

9. 生成酯以R为过量构型，ee_P=(R_ester−S_ester)/(R_ester+S_ester)=0.504688425598。

10. 理想双一级模型的选择性系数E=k_R/k_S=4.00000000000，各半衰期分别8.66433975700与34.6573590280 min。

11. 由剩余底物ee_S=tanh[(k_R−k_S)t/2]，严格单调递增，故达到90.00%剩余S-醇ee的正时间唯一。

12. 反函数t=2atanh(0.9)/(k_R−k_S)=49.0739829861 min；届时转化率=0.802759906956，回代验证ee=0.9000。

13. 产物酯的手性保留以反应只发生在羟基氧为前提；若酰化伴随SN2手性碳取代、消旋、反应逆转或酶失活，动力学拆分与产物构型公式均不再成立。

### 主要数值答案
- R_substrate_survival_10min: 0.44932896411722156 fraction
- S_substrate_survival_10min: 0.8187307530779818 fraction
- R_remaining_mol: 0.0004493289641172216 mol
- S_remaining_mol: 0.0008187307530779819 mol
- R_ester_product_mol: 0.0005506710358827785 mol
- S_ester_product_mol: 0.0001812692469220182 mol
- conversion_10min: 0.36597014140239836 fraction
- remaining_substrate_ee_S: 0.29131261245159096 fraction
- ester_product_ee_R: 0.5046884255983451 fraction
- enantioselectivity_factor_E: 4 ratio
- half_life_R_min: 8.664339756999317 min
- half_life_S_min: 34.657359027997266 min
- time_for_90pct_substrate_ee_min: 49.073982986107346 min
- conversion_at_90pct_ee: 0.8027599069556235 fraction
- verified_target_ee: 0.9000000000000001 fraction
- molecular_skeleton_total_mol: 0.002 mol

状态：`publishable=false`，`exclude_from_official_bank=true`，`quality_status=awaiting_expert_review`，`novelty_review_status=pending_cross_series_model_review`。

## UC-ADV11-P145 半无限扩散Randles复阻抗双频去嵌入与Warburg/电荷转移唯一反演

### 题干
某恒温电化学电极采用线性Randles小信号阻抗模型：Z(ω)=R_s+[1/(R_ct+σ(1−i)/√ω)+iω C_dl]⁻¹。已知溶液电阻R_s=10.00 Ω，双电层电容C_dl=20.00 μF，半无限扩散Warburg参数σ单位Ω√(rad/s)，角频率ω用rad/s。两次EIS实验在ω₁=1.000 rad/s、ω₂=100.0 rad/s分别测得复阻抗Z₁=149.775174427437-40.3590832218194i Ω，Z₂=108.175447075882-24.2266795553407i Ω。求两点阻抗模长与相位，依次扣除R_s、反演并联导纳、扣除电容导纳后，唯一重建R_ct与σ，并用第二频点独立复核；求R_ctC_dl时间常数与相应近似频率。检查Warburg平方根频率标度、复阻抗单位、被动网络符号和半无限扩散模型边界。

### 完整中文分步解答
1. 假设一个电化学反应电极服从题设线性小信号Randles网络，串联溶液电阻R_s=10.00 Ω，双电层电容C_dl=20.00 μF。

2. 电荷转移支路由R_ct与半无限扩散Warburg阻抗串联，Z_F(ω)=R_ct+σ(1−i)/√ω，ω单位rad/s；本题定义的σ单位Ω·√(rad/s)。

3. 总复阻抗为Z(ω)=R_s+[1/Z_F(ω)+iωC_dl]⁻¹，两频率分别ω₁=1.000、ω₂=100.0 rad/s，电容导纳必须有正虚部。

4. 给定R_ct=100.0 Ω、σ=40.00 Ω√(rad/s)，先对Warburg项进行实虚拆分：ω=1时Z_F=140−40i Ω。

5. 并联导纳取Y=1/Z_F+iωC_dl；倒数计算时若Y=a+ib，则Z_parallel=(a−ib)/(a²+b²)，总实部加R_s。

6. ω₁的阻抗为Re=149.775174427、Im=-40.3590832218 Ω，模长155.117563394 Ω，相位-15.0809708079°。

7. ω₂的阻抗为Re=108.175447076、Im=-24.2266795553 Ω，模长110.855127767 Ω，相位-12.6235064643°。

8. 反演时先从总阻抗扣除R_s，再求并联部分的导纳1/(Z−R_s)，减去已知iωC_dl，得到远法拉第导纳1/Z_F。

9. 再求一次复倒数恢复ω₁的Z_F=140.000000000-40.0000000000i Ω。

10. 由ImZ_F=−σ/√ω求σ=40.0000000000 Ω√(rad/s)，由ReZ_F+ImZ_F=R_ct得R_ct=100.000000000 Ω。

11. 在ω₂进行独立复算同样得到σ=40.0000000000和R_ct=100.000000000，并非仅用首个频点自洽。

12. 由R_ct C_dl得双电层RC时间常数τ=0.00200000000000 s，对应粗略频率f=79.5774715459 Hz；这不是包含Warburg时Nyquist峰频的精确公式。

13. 模型适用于小扰动、线性稳定电极、半无限扩散且C_dl已独立标定；有限层扩散、常相位元件、法拉第副反应与电极老化都会导致复平面模型偏差。

### 主要数值答案
- Z1_real_ohm: 149.77517442743695 ohm
- Z1_imag_ohm: -40.35908322181936 ohm
- Z1_modulus_ohm: 155.11756339394617 ohm
- Z1_phase_deg: -15.080970807939797 degree
- Z100_real_ohm: 108.17544707588206 ohm
- Z100_imag_ohm: -24.22667955534074 ohm
- Z100_modulus_ohm: 110.85512776747915 ohm
- Z100_phase_deg: -12.623506464251939 degree
- recovered_Zfar1_real: 140 ohm
- recovered_Zfar1_imag: -39.99999999999999 ohm
- recovered_Zfar100_real: 103.99999999999997 ohm
- recovered_Zfar100_imag: -4.000000000000001 ohm
- sigma_from_1rad_s: 39.99999999999999 ohm sqrt(rad/s)
- Rct_from_1rad_s: 100 ohm
- sigma_from_100rad_s: 40.00000000000001 ohm sqrt(rad/s)
- RC_timescale_s: 0.002 s
- RC_frequency_Hz: 79.57747154594766 Hz

状态：`publishable=false`，`exclude_from_official_bank=true`，`quality_status=awaiting_expert_review`，`novelty_review_status=pending_cross_series_model_review`。

