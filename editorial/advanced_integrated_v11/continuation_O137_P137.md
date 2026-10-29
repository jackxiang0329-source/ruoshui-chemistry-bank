# 第十一辑 O137 / P137 严格解析

两题均为编辑级待专家复核，不构成正式发布或原创新颖性确认。

## UC-ADV11-O137 Kolbe双羧酸根共电解的随机自由基偶合、GC组成与碳电量守恒

### 中文题干
一理想Kolbe电解体系同时含乙酸根CH₃COO⁻与丙酸根C₂H₅COO⁻，分别经单电子脱羧产生甲基与乙基自由基，再随机成对偶合成乙烷C₂H₆、丙烷C₃H₈、正丁烷C₄H₁₀；假定无歧化、副偶合及其它有机产物。GC原始面积三峰为3600、5760、1280，摩尔响应系数依次为1.000、1.200、0.800。阳极总电荷Q=20.00 C，其中80.00%用于Kolbe脱羧，其余电量为不产生这些自由基的副反应，F=96485.33212 C/mol。每个自由基脱羧必生成一个CO₂，每两个自由基形成一个烷烃。求校正GC摩尔分数、两类自由基比例、乙烷/丙烷/丁烷各摩尔数、自由基总数及两类数目、CO₂摩尔数和在298.15 K、1.000 bar的体积（气体常数0.08314462618 L·bar/(mol·K)）、底物与产物碳原子计量和氧守恒；检查电子计量及随机成对模型适用性。

### 逐步解析
1. Kolbe阳极半反应CH₃COO⁻→CH₃·+CO₂+e⁻，C₂H₅COO⁻→C₂H₅·+CO₂+e⁻，每产生一个烷基自由基释放一个电子和一个CO₂，电荷−1在两边严格守恒。

2. 自由基终止2CH₃·→C₂H₆，CH₃·+C₂H₅·→C₃H₈，2C₂H₅·→C₄H₁₀，各条终止均消耗两个自由基形成一个烷烃分子。

3. 原始GC面积3600/5760/1280的响应因子分别1.000/1.200/0.800，必须先按响应系数相除，得校正面积3600/4800/1600。

4. 三类摩尔分数由校正面积归一化，分别0.3600、0.4800、0.1600；假定所有自由基充分混合且无歧化，随机成对终止的理论分数为f²、2f(1−f)、(1−f)²。

5. 由双甲基及混合产物的分子统计，甲基自由基分数f=(2n_ethane+n_propane)/(2Σn_alkane)=0.6000，乙基自由基分数0.4000；理论概率重新得到0.36/0.48/0.16。

6. 通电Q=20 C、目标Kolbe法拉第效率80.00%，有机自由基摩尔数n_R=0.8Q/F=0.000165828314506 mol，电子-自由基1:1。

7. 每个烷烃需两个自由基，故总烷烃量n_R/2=0.0000829141572529 mol；乙烷、丙烷、正丁烷分别为0.00002984909661、0.00003979879548、0.00001326626516 mol。

8. 生成甲基自由基数n_A=0.6n_R=0.000099496988704 mol、乙基自由基数n_B=0.4n_R=0.000066331325802 mol，须满足2n_ethane+n_propane=n_A和2n_butane+n_propane=n_B。

9. 净CO₂生成摩尔数n_CO2=n_R=0.00016582831451；按理想气体在298.15 K、1.000 bar计算体积V=nRT/P=4.1108126594 mL。

10. 醋酸根每个含2C、丙酸根每个含3C，底物碳原子物质的量n_C,in=2n_A+3n_B。

11. 终产烷烃与CO₂的碳原子数分别为2n_ethane+3n_propane+4n_butane和n_CO2；两者相加严格等于2n_A+3n_B，氧平衡为2n_CO2个O原子。

12. 未计入Kolbe产物的20%电量对应其它阳极过程，不能误计为第二套烷烃或CO₂；随机配对、无歧化、定量GC及无后续燃烧都是本题适用假设。

### 答案向量
- ethane_fraction: 0.36 fraction
- propane_fraction: 0.48 fraction
- butane_fraction: 0.16000000000000003 fraction
- ethane_mol: 0.000029849096611059056 mol
- propane_mol: 0.00003979879548141208 mol
- butane_mol: 0.000013266265160470695 mol
- radicals_mol: 0.00016582831450588366 mol
- alkanes_total_mol: 0.00008291415725294183 mol
- acetate_radicals_mol: 0.00009949698870353019 mol
- propionate_radicals_mol: 0.00006633132580235347 mol
- CO2_mol: 0.00016582831450588366 mol
- CO2_volume_mL: 4.110812659438996 mL
- acetate_radical_fraction: 0.6 fraction
- carboxylate_carbon_mol: 0.0003979879548141208 mol_C
- total_product_carbon_mol: 0.00039798795481412076 mol_C
- CO2_oxygen_atoms_mol: 0.0003316566290117673 mol_O

质量状态：awaiting_expert_review / pending_cross_series_model_review，publishable=false，exclude_from_official_bank=true。

## UC-ADV11-P137 Fisher–KPP自催化反应扩散波前最小速度与Arrhenius升温选择

### 中文题干
一理想等温液相自催化反应A+B→2B在无限长一维均匀介质中进行，两组分均以相同扩散系数D=2.000×10⁻⁹ m²/s扩散，总浓度C₀=[A]+[B]在空间及时间上恒定，取u=[B]/C₀，二级速率常数k₂使有效一级增长系数k=k₂C₀=0.05000 s⁻¹（T₁=298.15 K）。忽略对流、热效应、吸附及边界影响，故∂u/∂t=D∂²u/∂x²+ku(1−u)。设前沿U(x−ct)连接U(−∞)=1、U(+∞)=0，求行波领先边缘特征方程、最小物理前沿速度、指数衰减根及长度，并用量纲/根判别式验证。升温到T₂=318.15 K时仅k按Arrhenius式变化，Ea=45.00 kJ/mol、R=8.314462618 J/(mol·K)，D不变，求新k、最小速度、衰减根、速度比及其对数，检查A/B总量守恒并说明何种初始条件选择最小速度而不是唯一行波速度。

### 逐步解析
1. 设溶液中的自催化反应A+B→2B使反应物总浓度C₀=[A]+[B]恒定，并假定A、B的扩散系数相同D、无对流和热效应。

2. 以u=[B]/C₀表示B的分数，则0≤u≤1且[A]=C₀(1−u)，二级反应速率k₂[A][B]转化为u的增长项ku(1−u)，其中k=k₂C₀是s⁻¹。

3. 在一维无限长介质中，反应扩散方程是∂u/∂t=D∂²u/∂x²+ku(1−u)，构成Fisher–KPP型自催化前沿。

4. 令z=x−ct、u(x,t)=U(z)，得到常微分方程D U''+cU'+kU(1−U)=0，传播前沿连接U(−∞)=1与U(+∞)=0。

5. 在前沿稀疏的领先边缘U≪1，线性方程D U''+cU'+kU=0；试U∼exp(−λz)得特征方程Dλ²−cλ+k=0。

6. 若要正的实数衰减指数λ，判别式c²−4Dk≥0且c>0，因此存在非振荡传播前沿的最小可能速度c_min=2√(Dk)。

7. 在T₁=298.15 K、D=2e-9 m²/s、k=0.05 s⁻¹下，c_min=0.000020000000000 m/s=20.000000000 μm/s。

8. 最小速度对应特征方程双重根λ*=√(k/D)=5000.0000000 m⁻¹，领先边缘长度1/λ*=200.00000000 μm。

9. 保持D及C₀不变，动力学Arrhenius k(T₂)=k(T₁)exp[(Ea/R)(1/T₁−1/T₂)]，给出k₂=0.15651783730 s⁻¹。

10. 升温到T₂=318.15 K后最小传播速度c₂=0.000035385628416 m/s，领先边缘根λ₂=8846.4071041 m⁻¹，速度比c₂/c₁=1.7692814208。

11. 由c_min∝√k得到ln(c₂/c₁)=Ea(1/T₁−1/T₂)/(2R)，与分别代入k₂所求比值一致；质量守恒[A]+[B]=C₀始终成立。

12. c≥c_min存在一族行波速度，只有陡峭初始前沿的经典KPP选择最小速度，不能误称所有初始条件的行波速度唯一；有限边界、不同组分扩散、非等温效应均可改变传播。

### 答案向量
- growth_rate_298_s_inv: 0.05 s^-1
- minimum_front_decay_lambda_m_inv: 5000 m^-1
- minimum_speed_m_s: 0.00002 m/s
- minimum_speed_um_s: 20 um/s
- front_decay_length_um: 200 um
- growth_rate_318_s_inv: 0.1565178373012132 s^-1
- lambda_318_m_inv: 8846.407104051146 m^-1
- speed_318_m_s: 0.000035385628416204586 m/s
- speed_318_um_s: 35.38562841620458 um/s
- speed_ratio: 1.7692814208102292 ratio
- log_speed_ratio: 0.5705734872114143 dimensionless
- Arrhenius_predicted_log_speed_ratio: 0.5705734872114144 dimensionless
- leading_edge_characteristic_residual: 0 s^-1

质量状态：awaiting_expert_review / pending_cross_series_model_review，publishable=false，exclude_from_official_bank=true。

