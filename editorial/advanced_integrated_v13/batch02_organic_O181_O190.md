# 第十三辑第二批有机化学十题 O181—O190

## UC-ADV13-O181 Curtin–Hammett快速构象平衡下的两条竞争环化反应动力学

### 完整问题

某底物具有可快速互变的两个反应构象A和B，在298.15 K平衡常数K=[B]/[A]=4.000；A经不可逆一级环化生成PA，kA=0.05000 s⁻¹，B经另一环化生成PB，kB=0.2000 s⁻¹。构象互变比化学转化快许多，K在反应中恒定；初始底物总浓度0.01000 mol/L，反应t=10.00 s，不考虑产物反应或构象选择性随时间变化。求总底物衰减kobs、最终产物分支比、PA/PB在10 s的形成量及剩余底物，证明即使构象分数给定，产物比例还需要各自速率常数。

### 解析

1. 描述反应物、速率/配分模型和完整假设：某底物具有可快速互变的两个反应构象A和B，在298.15 K平衡常数K=[B]/[A]=4.000；A经不可逆一级环化生成PA，kA=0.05000 s⁻¹，B经另一环化生成PB，kB=0.2000 s⁻¹。构象互变比化学转化快许多，K在反应中恒定；初始底物总浓度0.01000 mol/L，反应t=10.00 s，不考虑产物反应或构象选择性随时间变化。求总底物衰减kobs、最终产物分支比、PA/PB在10 s的形成量及剩余底物，证明即使构象分数给定，产物比例还需要各自速率常数。

2. 严格方程及参数转换：fA=1/(1+K)，fB=K/(1+K)，kobs=fAkA+fBkB；yA=fAkA/kobs，yB=fBkB/kobs。

3. 构象分数由快速平衡直接给出，但不可直接将构象丰度当作产物比例。

4. 从dC/dt=−kobs C积分得C=C0exp(−kobs t)，累计产物按速率分支乘已转化量。

5. PA+PB+C严格等于C0；若构象互变慢于反应，Curtin–Hammett的准平衡假设不成立。

6. 由模型依次算得第一批数值：fraction_A=0.200000000000 fraction；fraction_B=0.800000000000 fraction；k_observed=0.170000000000 s^-1；product_branch_A=0.0588235294118 fraction。

7. 计算剩余动力学或统计热力学中间量：product_branch_B=0.941176470588 fraction；product_ratio_B_over_A=16.0000000000 ratio；conversion_t10=0.817316475947 fraction；remaining_substrate_M=0.00182683524053 mol/L。

8. 最终分支、产率、自由能和回代结果：product_A_t10_M=0.000480774397616 mol/L；product_B_t10_M=0.00769239036186 mol/L；material_balance_M=0.0100000000000 mol/L。

9. 检验所有产物/中间体的分率、单体骨架或电子/原子守恒，注意单独的分子数不一定守恒。

10. 速率常数、标准态及Boltzmann指数必须无量纲，不能将mol/L、s^-1与kJ/mol直接混算。

11. 理想化机理已排除的副反应、构象交换限制及真实催化剂失活需进一步验证；不能把本题数学闭式解当实验普适规律。

12. 本题仍在专家原创性、科学性与版权待审名单，不是正式可出版题。

### 数值答案

- fraction_A=0.200000000000 fraction
- fraction_B=0.800000000000 fraction
- k_observed=0.170000000000 s^-1
- product_branch_A=0.0588235294118 fraction
- product_branch_B=0.941176470588 fraction
- product_ratio_B_over_A=16.0000000000 ratio
- conversion_t10=0.817316475947 fraction
- remaining_substrate_M=0.00182683524053 mol/L
- product_A_t10_M=0.000480774397616 mol/L
- product_B_t10_M=0.00769239036186 mol/L
- material_balance_M=0.0100000000000 mol/L

## UC-ADV13-O182 SNAr酚盐活性亲核体的酸碱分布与拟一级转化率

### 完整问题

假想活化氟代芳烃ArF仅与酚盐PhO⁻通过双分子SNAr生成ArOPh，速度r=k2[ArF][PhO⁻]，k2=3.000 L/(mol s)。总酚类[PhOH]+[PhO⁻]=0.02000 mol/L由外部库保持固定，pKa(PhOH)=10.000；外部缓冲分别设pH=9.000、11.000，初始ArF=0.005000 mol/L，t=100.0 s。无其它取代、酚盐耗尽或离子强度效应。计算两个pH的酚盐分数、自由酚盐浓度、拟一级速度、转化率、产物及底物余量，讨论提高pH而不是提高总酚量的作用。

### 解析

1. 描述反应物、速率/配分模型和完整假设：假想活化氟代芳烃ArF仅与酚盐PhO⁻通过双分子SNAr生成ArOPh，速度r=k2[ArF][PhO⁻]，k2=3.000 L/(mol s)。总酚类[PhOH]+[PhO⁻]=0.02000 mol/L由外部库保持固定，pKa(PhOH)=10.000；外部缓冲分别设pH=9.000、11.000，初始ArF=0.005000 mol/L，t=100.0 s。无其它取代、酚盐耗尽或离子强度效应。计算两个pH的酚盐分数、自由酚盐浓度、拟一级速度、转化率、产物及底物余量，讨论提高pH而不是提高总酚量的作用。

2. 严格方程及参数转换：fPhO=1/[1+10^(pKa−pH)]；kobs=k2 Cphenol fPhO；X=1−exp(−kobs t)。

3. Henderson–Hasselbalch关系给出亲核体PhO⁻的分率，真正进入速度式的是自由PhO⁻而非总酚量。

4. 在外部酚类储库条件下ArF按一级衰减，但若无储库，酚盐将被化学消耗不能固定。

5. 两个pH下产物与未反应ArF之和均等于0.005000 mol/L。

6. 由模型依次算得第一批数值：phenoxide_fraction_pH9=0.0909090909091 fraction；phenoxide_fraction_pH11=0.909090909091 fraction；phenoxide_M_pH9=0.00181818181818 mol/L；phenoxide_M_pH11=0.0181818181818 mol/L。

7. 计算剩余动力学或统计热力学中间量：kobs_pH9=0.00545454545455 s^-1；kobs_pH11=0.0545454545455 s^-1；conversion_pH9=0.420421721215 fraction；conversion_pH11=0.995723179651 fraction。

8. 最终分支、产率、自由能和回代结果：product_pH9_M=0.00210210860608 mol/L；product_pH11_M=0.00497861589825 mol/L；remaining_ArF_pH9_M=0.00289789139392 mol/L；remaining_ArF_pH11_M=0.0000213841017460 mol/L。

9. 检验所有产物/中间体的分率、单体骨架或电子/原子守恒，注意单独的分子数不一定守恒。

10. 速率常数、标准态及Boltzmann指数必须无量纲，不能将mol/L、s^-1与kJ/mol直接混算。

11. 理想化机理已排除的副反应、构象交换限制及真实催化剂失活需进一步验证；不能把本题数学闭式解当实验普适规律。

12. 本题仍在专家原创性、科学性与版权待审名单，不是正式可出版题。

### 数值答案

- phenoxide_fraction_pH9=0.0909090909091 fraction
- phenoxide_fraction_pH11=0.909090909091 fraction
- phenoxide_M_pH9=0.00181818181818 mol/L
- phenoxide_M_pH11=0.0181818181818 mol/L
- kobs_pH9=0.00545454545455 s^-1
- kobs_pH11=0.0545454545455 s^-1
- conversion_pH9=0.420421721215 fraction
- conversion_pH11=0.995723179651 fraction
- product_pH9_M=0.00210210860608 mol/L
- product_pH11_M=0.00497861589825 mol/L
- remaining_ArF_pH9_M=0.00289789139392 mol/L
- remaining_ArF_pH11_M=0.0000213841017460 mol/L

## UC-ADV13-O183 Heck催化循环中CO竞争性配位抑制与催化速率

### 完整问题

假想Pd催化Heck偶联的初速可被单一底物S饱和模型与气态CO竞争结合近似：v=Vmax[S]/{Km(1+KCO pCO)+[S]}，Vmax=0.02000 mmol/(L s)，Km=0.1000 mol/L，CO配位常数KCO=2.000 bar⁻¹。固定[S]=0.2000 mol/L，分别pCO=0、1.000 bar；总Pd催化剂浓度0.001000 mmol/L。求两种速率、催化剂表观TOF、CO抑制倍数及抑制前后Pd占位的无量纲竞争因子，解释CO配位于Pd空位降低可用催化中心而非改变净反应计量。

### 解析

1. 描述反应物、速率/配分模型和完整假设：假想Pd催化Heck偶联的初速可被单一底物S饱和模型与气态CO竞争结合近似：v=Vmax[S]/{Km(1+KCO pCO)+[S]}，Vmax=0.02000 mmol/(L s)，Km=0.1000 mol/L，CO配位常数KCO=2.000 bar⁻¹。固定[S]=0.2000 mol/L，分别pCO=0、1.000 bar；总Pd催化剂浓度0.001000 mmol/L。求两种速率、催化剂表观TOF、CO抑制倍数及抑制前后Pd占位的无量纲竞争因子，解释CO配位于Pd空位降低可用催化中心而非改变净反应计量。

2. 严格方程及参数转换：v=Vmax s/(Km(1+KCO pCO)+s)，TOF=v/[Pd]total。

3. 同一底物浓度下，增加CO使表观Km增加但Vmax不变，区别竞争抑制和不可逆催化剂死亡。

4. 速率和Pd浓度都以mmol/L计时比值直接得到s⁻¹，不可把两组不同浓度单位混用。

5. 本题忽略Pd沉淀与CO影响氧化加成势垒；该简单稳态式只是题设催化机制的有效模型。

6. 由模型依次算得第一批数值：rate_without_CO_mmol_L_s=0.0133333333333 mmol/(L s)；rate_at_1bar_CO_mmol_L_s=0.00800000000000 mmol/(L s)；TOF_without_CO_s=13.3333333333 s^-1；TOF_1bar_CO_s=8.00000000000 s^-1。

7. 计算剩余动力学或统计热力学中间量：activity_retention_fraction=0.600000000000 fraction；inhibition_factor=1.66666666667 ratio；apparent_Km_without_CO_M=0.100000000000 mol/L。

8. 最终分支、产率、自由能和回代结果：apparent_Km_with_CO_M=0.300000000000 mol/L；substrate_saturation_without_CO=0.666666666667 fraction；substrate_saturation_with_CO=0.400000000000 fraction。

9. 检验所有产物/中间体的分率、单体骨架或电子/原子守恒，注意单独的分子数不一定守恒。

10. 速率常数、标准态及Boltzmann指数必须无量纲，不能将mol/L、s^-1与kJ/mol直接混算。

11. 理想化机理已排除的副反应、构象交换限制及真实催化剂失活需进一步验证；不能把本题数学闭式解当实验普适规律。

12. 本题仍在专家原创性、科学性与版权待审名单，不是正式可出版题。

### 数值答案

- rate_without_CO_mmol_L_s=0.0133333333333 mmol/(L s)
- rate_at_1bar_CO_mmol_L_s=0.00800000000000 mmol/(L s)
- TOF_without_CO_s=13.3333333333 s^-1
- TOF_1bar_CO_s=8.00000000000 s^-1
- activity_retention_fraction=0.600000000000 fraction
- inhibition_factor=1.66666666667 ratio
- apparent_Km_without_CO_M=0.100000000000 mol/L
- apparent_Km_with_CO_M=0.300000000000 mol/L
- substrate_saturation_without_CO=0.666666666667 fraction
- substrate_saturation_with_CO=0.400000000000 fraction

## UC-ADV13-O184 Mayo链转移方程控制自由基聚合度与数均分子量

### 完整问题

某假想甲基丙烯酸甲酯(MMA)自由基聚合中，不加链转移剂时数均聚合度DPn,0=1000.0；加入已知链转移系数Ctr=0.5000的硫醇，维持[S]/[M]分别为0.002000与0.02000，MMA重复单元摩尔质量100.12 g/mol。假定低转化率时链转移剂和单体浓度近似恒定，且Mayo方程1/DPn=1/DPn,0+Ctr[S]/[M]成立。求两条件的数均聚合度、理论数均分子量（忽略端基质量）、新生链平均数相对无链转移剂的增加比例，以及两聚合度之比，说明这个公式与分子量分布PDI无直接一一对应关系。

### 解析

1. 描述反应物、速率/配分模型和完整假设：某假想甲基丙烯酸甲酯(MMA)自由基聚合中，不加链转移剂时数均聚合度DPn,0=1000.0；加入已知链转移系数Ctr=0.5000的硫醇，维持[S]/[M]分别为0.002000与0.02000，MMA重复单元摩尔质量100.12 g/mol。假定低转化率时链转移剂和单体浓度近似恒定，且Mayo方程1/DPn=1/DPn,0+Ctr[S]/[M]成立。求两条件的数均聚合度、理论数均分子量（忽略端基质量）、新生链平均数相对无链转移剂的增加比例，以及两聚合度之比，说明这个公式与分子量分布PDI无直接一一对应关系。

2. 严格方程及参数转换：1/DPn=1/1000+0.5 r，Mn=DPn×100.12 g/mol，链数/固定单体质量∝1/DPn。

3. 链转移产生新链而截短旧链，使聚合度下降，但不在本式中改变重复单元摩尔质量。

4. 把给定[S]/[M]看作低转化率的有效稳定条件，不能对全程消耗引起的比值变化作无限外推。

5. Mayo式确定数均聚合度，无法单独决定分子量分布的多分散系数。

6. 由模型依次算得第一批数值：DPn_low_transfer=500.000000000 ratio；DPn_high_transfer=90.9090909091 ratio；Mn_low_g_mol=50060.0000000 g/mol；Mn_high_g_mol=9101.81818182 g/mol。

7. 计算剩余动力学或统计热力学中间量：Mn_no_transfer_g_mol=100120.000000 g/mol；chain_number_factor_low=2.00000000000 ratio；chain_number_factor_high=11.0000000000 ratio。

8. 最终分支、产率、自由能和回代结果：DPn_ratio_low_over_high=5.50000000000 ratio；transfer_term_low=0.00100000000000 ratio；transfer_term_high=0.0100000000000 ratio。

9. 检验所有产物/中间体的分率、单体骨架或电子/原子守恒，注意单独的分子数不一定守恒。

10. 速率常数、标准态及Boltzmann指数必须无量纲，不能将mol/L、s^-1与kJ/mol直接混算。

11. 理想化机理已排除的副反应、构象交换限制及真实催化剂失活需进一步验证；不能把本题数学闭式解当实验普适规律。

12. 本题仍在专家原创性、科学性与版权待审名单，不是正式可出版题。

### 数值答案

- DPn_low_transfer=500.000000000 ratio
- DPn_high_transfer=90.9090909091 ratio
- Mn_low_g_mol=50060.0000000 g/mol
- Mn_high_g_mol=9101.81818182 g/mol
- Mn_no_transfer_g_mol=100120.000000 g/mol
- chain_number_factor_low=2.00000000000 ratio
- chain_number_factor_high=11.0000000000 ratio
- DPn_ratio_low_over_high=5.50000000000 ratio
- transfer_term_low=0.00100000000000 ratio
- transfer_term_high=0.0100000000000 ratio

## UC-ADV13-O185 E2反式共平面活性构象的热平衡和消除半衰期

### 完整问题

一具有可转动C–C单键的假想卤代烷处于快速构象平衡，仅反式共平面anti构象能够发生E2消除；anti相对非活性gauche构象的自由能高4.000 kJ/mol，两个构象简并度均视为1。在298.15与350.0 K内自由能差不变，anti构象中化学消除速度常数kanti=0.5000 s⁻¹亦视为温度独立，以便单独研究构象人口影响。求各温度anti分数、整体观察速度kobs、半衰期、反应5 s的转化率与anti分数温变。反应物从初始1 mol单分子开始，产物不再反应。

### 解析

1. 描述反应物、速率/配分模型和完整假设：一具有可转动C–C单键的假想卤代烷处于快速构象平衡，仅反式共平面anti构象能够发生E2消除；anti相对非活性gauche构象的自由能高4.000 kJ/mol，两个构象简并度均视为1。在298.15与350.0 K内自由能差不变，anti构象中化学消除速度常数kanti=0.5000 s⁻¹亦视为温度独立，以便单独研究构象人口影响。求各温度anti分数、整体观察速度kobs、半衰期、反应5 s的转化率与anti分数温变。反应物从初始1 mol单分子开始，产物不再反应。

2. 严格方程及参数转换：panti=exp(−ΔG/(RT))/[1+exp(−ΔG/(RT))]，kobs=panti kanti。

3. 反式共平面构象即使是较高自由能构象，也可能独占反应通道；消除速率取该构象分数加权。

4. 构象交换远快于消除时，底物总体满足单指数有效一级衰减。

5. 人为保持kanti不随温度变化，只隔离构象人口的热响应，真实E2反应有额外活化能温变。

6. 由模型依次算得第一批数值：anti_fraction_298=0.166091918418 fraction；anti_fraction_350=0.201887137924 fraction；k_observed_298=0.0830459592092 s^-1；k_observed_350=0.100943568962 s^-1。

7. 计算剩余动力学或统计热力学中间量：half_life_298=8.34654915375 s；half_life_350=6.86667994492 s；conversion_5s_298=0.339811445447 fraction。

8. 最终分支、产率、自由能和回代结果：conversion_5s_350=0.396324118317 fraction；anti_population_ratio=1.21551451658 ratio；k_observed_ratio=1.21551451658 ratio。

9. 检验所有产物/中间体的分率、单体骨架或电子/原子守恒，注意单独的分子数不一定守恒。

10. 速率常数、标准态及Boltzmann指数必须无量纲，不能将mol/L、s^-1与kJ/mol直接混算。

11. 理想化机理已排除的副反应、构象交换限制及真实催化剂失活需进一步验证；不能把本题数学闭式解当实验普适规律。

12. 本题仍在专家原创性、科学性与版权待审名单，不是正式可出版题。

### 数值答案

- anti_fraction_298=0.166091918418 fraction
- anti_fraction_350=0.201887137924 fraction
- k_observed_298=0.0830459592092 s^-1
- k_observed_350=0.100943568962 s^-1
- half_life_298=8.34654915375 s
- half_life_350=6.86667994492 s
- conversion_5s_298=0.339811445447 fraction
- conversion_5s_350=0.396324118317 fraction
- anti_population_ratio=1.21551451658 ratio
- k_observed_ratio=1.21551451658 ratio

## UC-ADV13-O186 不对称醛醇缩合的竞争过渡态ΔΔG‡与ee温度反转

### 完整问题

一种理想不对称醛醇加成可通过形成R或S产物的两条不可逆平行过渡态进行。两路径的活化焓差ΔΔH‡=H‡R−H‡S=+2.000 kJ/mol，活化熵差ΔΔS‡=S‡R−S‡S=+5.000 J/(mol K)，两路径Eyring速率的共同前因子相同。298.15和350.0 K下求kR/kS、R/S产物分率与产物ee_R=(nR−nS)/(nR+nS)，以及ee从S占优变为R占优的温度。假设反应物不会产生别的非手性产物，产物完全不可逆、不消旋。

### 解析

1. 描述反应物、速率/配分模型和完整假设：一种理想不对称醛醇加成可通过形成R或S产物的两条不可逆平行过渡态进行。两路径的活化焓差ΔΔH‡=H‡R−H‡S=+2.000 kJ/mol，活化熵差ΔΔS‡=S‡R−S‡S=+5.000 J/(mol K)，两路径Eyring速率的共同前因子相同。298.15和350.0 K下求kR/kS、R/S产物分率与产物ee_R=(nR−nS)/(nR+nS)，以及ee从S占优变为R占优的温度。假设反应物不会产生别的非手性产物，产物完全不可逆、不消旋。

2. 严格方程及参数转换：ln(kR/kS)=−(ΔΔH‡−TΔΔS‡)/(RT)，pR=kR/(kR+kS)，eeR=2pR−1。

3. 差分活化自由能ΔΔG‡=ΔΔH‡−TΔΔS‡随温度变号，决定哪一个过渡态更快。

4. 无需知道两条通道绝对速率，就能从速率比给出产物的动力学对映体比例。

5. 等选择性温度T*=ΔΔH‡/ΔΔS‡；活化差为零时ee=0，不代表整体反应速度为零。

6. 由模型依次算得第一批数值：deltaDeltaG_298_kJ_mol=0.509250000000 kJ/mol；deltaDeltaG_350_kJ_mol=0.250000000000 kJ/mol；rate_ratio_R_over_S_298=0.814297797172 ratio；rate_ratio_R_over_S_350=0.917677896659 ratio。

7. 计算剩余动力学或统计热力学中间量：product_R_fraction_298=0.448822568402 fraction；product_R_fraction_350=0.478535993066 fraction；product_ee_R_298=-0.102354863197 fraction。

8. 最终分支、产率、自由能和回代结果：product_ee_R_350=-0.0429280138675 fraction；selectivity_crossover_T=400.000000000 K；rate_ratio_high_over_low=1.12695613306 ratio。

9. 检验所有产物/中间体的分率、单体骨架或电子/原子守恒，注意单独的分子数不一定守恒。

10. 速率常数、标准态及Boltzmann指数必须无量纲，不能将mol/L、s^-1与kJ/mol直接混算。

11. 理想化机理已排除的副反应、构象交换限制及真实催化剂失活需进一步验证；不能把本题数学闭式解当实验普适规律。

12. 本题仍在专家原创性、科学性与版权待审名单，不是正式可出版题。

### 数值答案

- deltaDeltaG_298_kJ_mol=0.509250000000 kJ/mol
- deltaDeltaG_350_kJ_mol=0.250000000000 kJ/mol
- rate_ratio_R_over_S_298=0.814297797172 ratio
- rate_ratio_R_over_S_350=0.917677896659 ratio
- product_R_fraction_298=0.448822568402 fraction
- product_R_fraction_350=0.478535993066 fraction
- product_ee_R_298=-0.102354863197 fraction
- product_ee_R_350=-0.0429280138675 fraction
- selectivity_crossover_T=400.000000000 K
- rate_ratio_high_over_low=1.12695613306 ratio

## UC-ADV13-O187 可见光光氧化量子产率与吸收光子摩尔通量计量

### 完整问题

一种假想有机底物的LED光氧化实验，入射单色光子摩尔通量φin=2.000×10⁻⁶ mol photons/s；样品在激发波长单程吸光度A=0.5000，光学吸收分数fabs=1−10^(−A)；反应时间t=600.0 s。假设被吸收光子形成指定产物P的量子产率ΦP=0.2500 mol product/mol absorbed photons，混合物体积V=0.1000 L，光源通量恒定、没有内滤变化或副反应。求入射、吸收光子摩尔量、反应产物量与浓度、产物生成速率以及未吸收光子数量；讨论ΦP小于1不等于每次反应必消耗一个分子氧。

### 解析

1. 描述反应物、速率/配分模型和完整假设：一种假想有机底物的LED光氧化实验，入射单色光子摩尔通量φin=2.000×10⁻⁶ mol photons/s；样品在激发波长单程吸光度A=0.5000，光学吸收分数fabs=1−10^(−A)；反应时间t=600.0 s。假设被吸收光子形成指定产物P的量子产率ΦP=0.2500 mol product/mol absorbed photons，混合物体积V=0.1000 L，光源通量恒定、没有内滤变化或副反应。求入射、吸收光子摩尔量、反应产物量与浓度、产物生成速率以及未吸收光子数量；讨论ΦP小于1不等于每次反应必消耗一个分子氧。

2. 严格方程及参数转换：nabs=φin t(1−10^(−A))，nP=ΦP nabs，cP=nP/V。

3. 吸光度是常用对数定义，透射率为10^(−A)而非e^(−A)。

4. 量子产率严格按照被吸收光子而非入射光子归一化，不应省去fabs。

5. 能量与电子计量未完全指定，本题只能推得光子与指定产物的统计计量。

6. 由模型依次算得第一批数值：absorbed_fraction=0.683772233983 fraction；transmitted_fraction=0.316227766017 fraction；incident_photon_mol=0.00120000000000 mol；absorbed_photon_mol=0.000820526680780 mol。

7. 计算剩余动力学或统计热力学中间量：transmitted_photon_mol=0.000379473319220 mol；product_formed_mol=0.000205131670195 mol；product_concentration_M=0.00205131670195 mol/L。

8. 最终分支、产率、自由能和回代结果：product_rate_mol_s=3.41886116992e-7 mol/s；per_incident_photon_yield=0.170943058496 ratio；quantum_yield_recheck=0.250000000000 ratio。

9. 检验所有产物/中间体的分率、单体骨架或电子/原子守恒，注意单独的分子数不一定守恒。

10. 速率常数、标准态及Boltzmann指数必须无量纲，不能将mol/L、s^-1与kJ/mol直接混算。

11. 理想化机理已排除的副反应、构象交换限制及真实催化剂失活需进一步验证；不能把本题数学闭式解当实验普适规律。

12. 本题仍在专家原创性、科学性与版权待审名单，不是正式可出版题。

### 数值答案

- absorbed_fraction=0.683772233983 fraction
- transmitted_fraction=0.316227766017 fraction
- incident_photon_mol=0.00120000000000 mol
- absorbed_photon_mol=0.000820526680780 mol
- transmitted_photon_mol=0.000379473319220 mol
- product_formed_mol=0.000205131670195 mol
- product_concentration_M=0.00205131670195 mol/L
- product_rate_mol_s=3.41886116992e-7 mol/s
- per_incident_photon_yield=0.170943058496 ratio
- quantum_yield_recheck=0.250000000000 ratio

## UC-ADV13-O188 活性酰氯水解和胺解并行拟一级路径的化学选择性

### 完整问题

某假想活性酰氯AcCl在混合溶剂中只经溶剂水解生成羧酸PA（拟一级kH=0.02000 s⁻¹）与伯胺反应生成酰胺PN（kN=2.000 L/(mol s)）。伯胺自由浓度由储库固定在0.1000 mol/L，AcCl初始0.005000 mol/L，时间t=10.00 s，产物稳定且水解产物不再胺解。求观测速率、两路径最终选择性与10 s时产物浓度、未反应酰氯、两产物比、半衰期及若把胺浓度降低10倍带来的选择性变化。

### 解析

1. 描述反应物、速率/配分模型和完整假设：某假想活性酰氯AcCl在混合溶剂中只经溶剂水解生成羧酸PA（拟一级kH=0.02000 s⁻¹）与伯胺反应生成酰胺PN（kN=2.000 L/(mol s)）。伯胺自由浓度由储库固定在0.1000 mol/L，AcCl初始0.005000 mol/L，时间t=10.00 s，产物稳定且水解产物不再胺解。求观测速率、两路径最终选择性与10 s时产物浓度、未反应酰氯、两产物比、半衰期及若把胺浓度降低10倍带来的选择性变化。

2. 严格方程及参数转换：kobs=kH+kN[NH2]；famide=kN[NH2]/kobs；nProduct=C0(1−e^(−kobst))f。

3. 一级水解和二级胺解在固定自由胺条件下都表现为拟一级并行通道。

4. 产物分支来自相对速率而不是两种产物热力学稳定性。

5. 胺浓度减少会使胺解伪一级速率下降而不改变假定的一阶水解项。

6. 由模型依次算得第一批数值：aminolysis_pseudorate_s=0.200000000000 s^-1；total_pseudorate_s=0.220000000000 s^-1；amide_selectivity=0.909090909091 fraction；acid_selectivity=0.0909090909091 fraction。

7. 计算剩余动力学或统计热力学中间量：amide_t10_M=0.00404180382563 mol/L；acid_t10_M=0.000404180382563 mol/L；unreacted_AcCl_t10_M=0.000554015791812 mol/L；amide_over_acid_ratio=10.0000000000 ratio。

8. 最终分支、产率、自由能和回代结果：half_life_s=3.15066900255 s；amide_selectivity_at_0p01M=0.500000000000 fraction；amide_selectivity_drop=0.409090909091 fraction。

9. 检验所有产物/中间体的分率、单体骨架或电子/原子守恒，注意单独的分子数不一定守恒。

10. 速率常数、标准态及Boltzmann指数必须无量纲，不能将mol/L、s^-1与kJ/mol直接混算。

11. 理想化机理已排除的副反应、构象交换限制及真实催化剂失活需进一步验证；不能把本题数学闭式解当实验普适规律。

12. 本题仍在专家原创性、科学性与版权待审名单，不是正式可出版题。

### 数值答案

- aminolysis_pseudorate_s=0.200000000000 s^-1
- total_pseudorate_s=0.220000000000 s^-1
- amide_selectivity=0.909090909091 fraction
- acid_selectivity=0.0909090909091 fraction
- amide_t10_M=0.00404180382563 mol/L
- acid_t10_M=0.000404180382563 mol/L
- unreacted_AcCl_t10_M=0.000554015791812 mol/L
- amide_over_acid_ratio=10.0000000000 ratio
- half_life_s=3.15066900255 s
- amide_selectivity_at_0p01M=0.500000000000 fraction
- amide_selectivity_drop=0.409090909091 fraction

## UC-ADV13-O189 对映体互变与不对称酶消耗的动态动力学拆分解析矩阵指数

### 完整问题

一种手性底物的R/S对映体在反应液中以对称一级互变速率kr=0.05000 s⁻¹互相转化，酶对R、S的不可逆消耗速率分别kR=0.1000 s⁻¹、kS=0.02000 s⁻¹。R、S初始各0.01000 mol/L，产生互不互变的PR、PS，观察t=30.00 s。线性常系数方程dR/dt=−(kR+kr)R+krS，dS/dt=krR−(kS+kr)S；dPR/dt=kR R，dPS/dt=kS S。求R/S剩余量、两产物浓度、产品ee、残余底物ee及严格总物料守恒，要求使用2×2矩阵指数或等价解析本征值公式，不能忽略互变。

### 解析

1. 描述反应物、速率/配分模型和完整假设：一种手性底物的R/S对映体在反应液中以对称一级互变速率kr=0.05000 s⁻¹互相转化，酶对R、S的不可逆消耗速率分别kR=0.1000 s⁻¹、kS=0.02000 s⁻¹。R、S初始各0.01000 mol/L，产生互不互变的PR、PS，观察t=30.00 s。线性常系数方程dR/dt=−(kR+kr)R+krS，dS/dt=krR−(kS+kr)S；dPR/dt=kR R，dPS/dt=kS S。求R/S剩余量、两产物浓度、产品ee、残余底物ee及严格总物料守恒，要求使用2×2矩阵指数或等价解析本征值公式，不能忽略互变。

2. 严格方程及参数转换：设m=−(kR+kS+2kr)/2，δ=(kS−kR)/2，ω=√(δ²+kr²)；R=e^(mt)[R0 coshωt+(δR0+krS0)sinhωt/ω]，S=e^(mt)[S0coshωt+(krR0−δS0)sinhωt/ω]。产物由相应R/S积分得出。

3. 本征速率λ±=m±ω均为负，保证无源体系R、S均随长时间趋于零。

4. 积分因子J(a)=expm1(at)/a；∫e^(mt)coshωt=[J(m+ω)+J(m−ω)]/2，sinh对应两项之差的一半。

5. 以产物PR=kR∫Rdt、PS=kS∫Sdt严格计算，而非把瞬时分率当作全时间累积产物分率。

6. 由模型依次算得第一批数值：eigenvalue_fast_s=-0.174031242374 s^-1；eigenvalue_slow_s=-0.0459687576257 s^-1；remaining_R_t30_M=0.00147849922087 mol/L；remaining_S_t30_M=0.00301782401566 mol/L。

7. 计算剩余动力学或统计热力学中间量：product_PR_t30_M=0.0118201731720 mol/L；product_PS_t30_M=0.00368350359152 mol/L；product_ee_R=0.524821931247 fraction；unreacted_substrate_ee_R=-0.342351898166 fraction。

8. 最终分支、产率、自由能和回代结果：product_inventory_M=0.0155036767635 mol/L；reactant_inventory_M=0.00449632323653 mol/L；material_total_M=0.0200000000000 mol/L；population_rate_ratio_PR_over_PS=3.20894845852 ratio。

9. 检验所有产物/中间体的分率、单体骨架或电子/原子守恒，注意单独的分子数不一定守恒。

10. 速率常数、标准态及Boltzmann指数必须无量纲，不能将mol/L、s^-1与kJ/mol直接混算。

11. 理想化机理已排除的副反应、构象交换限制及真实催化剂失活需进一步验证；不能把本题数学闭式解当实验普适规律。

12. 本题仍在专家原创性、科学性与版权待审名单，不是正式可出版题。

### 数值答案

- eigenvalue_fast_s=-0.174031242374 s^-1
- eigenvalue_slow_s=-0.0459687576257 s^-1
- remaining_R_t30_M=0.00147849922087 mol/L
- remaining_S_t30_M=0.00301782401566 mol/L
- product_PR_t30_M=0.0118201731720 mol/L
- product_PS_t30_M=0.00368350359152 mol/L
- product_ee_R=0.524821931247 fraction
- unreacted_substrate_ee_R=-0.342351898166 fraction
- product_inventory_M=0.0155036767635 mol/L
- reactant_inventory_M=0.00449632323653 mol/L
- material_total_M=0.0200000000000 mol/L
- population_rate_ratio_PR_over_PS=3.20894845852 ratio

## UC-ADV13-O190 四半胱氨酸多肽三种二硫键连结拓扑的统计热力学

### 完整问题

某具有4个可形成二硫键的半胱氨酸位点的理想多肽，在完全氧化时可以产生恰好三种2条桥的连结拓扑：12|34、13|24与14|23。设其相对标准自由能近似用温度无关的能级E0=0、E1=2.000 kJ/mol、E2=5.000 kJ/mol表示，且每种拓扑简并度为1，无混合溶剂、构象熵以外的温度效应。在298.15 K与350.0 K，取正则配分函数Z=Σe^(−Ei/RT)，求三种拓扑分数、最稳定/最不稳定拓扑比、平均相对能量、构象混合熵S=−RΣpi lnpi、自由能A=−RTlnZ以及温升时最不稳定拓扑概率变化。强调这是三拓扑能级模型，而非完整肽折叠动力学。

### 解析

1. 描述反应物、速率/配分模型和完整假设：某具有4个可形成二硫键的半胱氨酸位点的理想多肽，在完全氧化时可以产生恰好三种2条桥的连结拓扑：12|34、13|24与14|23。设其相对标准自由能近似用温度无关的能级E0=0、E1=2.000 kJ/mol、E2=5.000 kJ/mol表示，且每种拓扑简并度为1，无混合溶剂、构象熵以外的温度效应。在298.15 K与350.0 K，取正则配分函数Z=Σe^(−Ei/RT)，求三种拓扑分数、最稳定/最不稳定拓扑比、平均相对能量、构象混合熵S=−RΣpi lnpi、自由能A=−RTlnZ以及温升时最不稳定拓扑概率变化。强调这是三拓扑能级模型，而非完整肽折叠动力学。

2. 严格方程及参数转换：Z=1+exp(−2000/RT)+exp(−5000/RT)，pi=exp(−Ei/RT)/Z，〈E〉=ΣpiEi，S=R(lnZ+〈E〉/RT)。

3. 4个指定半胱氨酸形成两条互不共享的桥有3种完全配对方式，不能把每一条桥的组合自由相乘而重复计数。

4. 用归一化Z计算各拓扑统计权重，求平均能量和熵，验证A=〈E〉−TS。

5. 假设固定三种有效能级；真实氧化折叠可能受到硫醇交换、非二硫化构象和溶剂的复杂影响。

6. 由模型依次算得第一批数值：partition_298=1.57934500087 ratio；partition_350=1.68233991345 ratio；topology0_fraction_298=0.633173878694 fraction；topology1_fraction_298=0.282577871347 fraction；topology2_fraction_298=0.0842482499586 fraction；topology0_fraction_350=0.594410197373 fraction。

7. 计算剩余动力学或统计热力学中间量：topology1_fraction_350=0.298956790252 fraction；topology2_fraction_350=0.106633012375 fraction；mean_energy_298_kJ_mol=0.986396992487 kJ/mol；mean_energy_350_kJ_mol=1.13107864238 kJ/mol；mixing_entropy_298_J_molK=7.10818598676 J/(mol K)。

8. 最终分支、产率、自由能和回代结果：mixing_entropy_350_J_molK=7.55671723886 J/(mol K)；Helmholtz_298_kJ_mol=-1.13290865946 kJ/mol；Helmholtz_350_kJ_mol=-1.51377239122 kJ/mol；rare_topology_fraction_increase=0.0223847624162 fraction；topology0_over2_298=7.51557307132 ratio。

9. 检验所有产物/中间体的分率、单体骨架或电子/原子守恒，注意单独的分子数不一定守恒。

10. 速率常数、标准态及Boltzmann指数必须无量纲，不能将mol/L、s^-1与kJ/mol直接混算。

11. 理想化机理已排除的副反应、构象交换限制及真实催化剂失活需进一步验证；不能把本题数学闭式解当实验普适规律。

12. 本题仍在专家原创性、科学性与版权待审名单，不是正式可出版题。

### 数值答案

- partition_298=1.57934500087 ratio
- partition_350=1.68233991345 ratio
- topology0_fraction_298=0.633173878694 fraction
- topology1_fraction_298=0.282577871347 fraction
- topology2_fraction_298=0.0842482499586 fraction
- topology0_fraction_350=0.594410197373 fraction
- topology1_fraction_350=0.298956790252 fraction
- topology2_fraction_350=0.106633012375 fraction
- mean_energy_298_kJ_mol=0.986396992487 kJ/mol
- mean_energy_350_kJ_mol=1.13107864238 kJ/mol
- mixing_entropy_298_J_molK=7.10818598676 J/(mol K)
- mixing_entropy_350_J_molK=7.55671723886 J/(mol K)
- Helmholtz_298_kJ_mol=-1.13290865946 kJ/mol
- Helmholtz_350_kJ_mol=-1.51377239122 kJ/mol
- rare_topology_fraction_increase=0.0223847624162 fraction
- topology0_over2_298=7.51557307132 ratio