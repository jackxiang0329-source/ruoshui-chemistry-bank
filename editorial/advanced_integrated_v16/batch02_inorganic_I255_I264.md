# 第十六辑inorganic 题解（跨辑重复模型修订后）

## UC-ADV16-I255 尖晶石ZnAl₂O₄反位参数与四面体–八面体占位计量

一式量尖晶石ZnAl₂O₄在反位度x=0.3000时按(Zn₁₋ₓAlₓ)[ZnₓAl₂₋ₓ]O₄分布，圆括号为一个四面体位，方括号为两个八面体位。假设Zn为+2、Al为+3、O为−2，没有氧空位。求四面体Zn、Al数量、八面体Zn、Al数量、四面体Al分率、八面体Al位点分率、总Zn与Al库存、正电荷总数、氧负电荷总数、形式净电荷和正常尖晶石反位参数为0时四面体Zn分率。说明本题是位点计数，不是实际结构能判据。

### 推导与解析

1. **物理化学与计量假设**：一式量尖晶石ZnAl₂O₄在反位度x=0.3000时按(Zn₁₋ₓAlₓ)[ZnₓAl₂₋ₓ]O₄分布，圆括号为一个四面体位，方括号为两个八面体位。假设Zn为+2、Al为+3、O为−2，没有氧空位。求四面体Zn、Al数量、八面体Zn、Al数量、四面体Al分率、八面体Al位点分率、总Zn与Al库存、正电荷总数、氧负电荷总数、形式净电荷和正常尖晶石反位参数为0时四面体Zn分率。说明本题是位点计数，不是实际结构能判据。

2. **主方程与推导**：tet(Zn,Al)=(1−x,x)，oct(Zn,Al)=(x,2−x)，总正电荷2Zn+3Al=8。

3. 变量识别：按题设划分结构位点、平均氧化态、气相分子或活度形态，避免将不同粒子的计数基准混用。

4. 独立建立电荷平衡、统计权重归一或原子/离子库存关系，并明确无量纲平衡常数的标准态。

5. 基础解算：tet_Zn = 0.7000000000000 sites；tet_Al = 0.3000000000000 sites；oct_Zn = 0.3000000000000 sites。

6. 由守恒或统计分配进一步推导：oct_Al = 1.700000000000 sites；tet_Al_fraction = 0.3000000000000 fraction；oct_Al_fraction = 0.8500000000000 fraction；total_Zn = 1.000000000000 ions。

7. 完整数值答案的其余字段：total_Al = 2.000000000000 ions；positive_charge = 8.000000000000 e；negative_charge = -8.000000000000 e；charge_residual = 0.000000000000 e；normal_tet_Zn_fraction = 1.000000000000 fraction。

8. 反向核验关键方程：例如阳离子与阴离子形式价相抵、硅氧端点与桥氧数相符、磁矩满足角动量耦合。

9. 第二代数路径重算所有字段并按1e−9相对精度比较；所有单位与符号随结果保留。

10. 本题为原创编辑草稿，跨辑同构、实验适用范围与版权须由专家核实。

### 数值答案

- tet_Zn = 0.7000000000000 sites
- tet_Al = 0.3000000000000 sites
- oct_Zn = 0.3000000000000 sites
- oct_Al = 1.700000000000 sites
- tet_Al_fraction = 0.3000000000000 fraction
- oct_Al_fraction = 0.8500000000000 fraction
- total_Zn = 1.000000000000 ions
- total_Al = 2.000000000000 ions
- positive_charge = 8.000000000000 e
- negative_charge = -8.000000000000 e
- charge_residual = 0.000000000000 e
- normal_tet_Zn_fraction = 1.000000000000 fraction

## UC-ADV16-I256 有限聚硅酸根Si₄O₁₁⁶⁻的桥氧计量与非桥氧数

一理想有限聚硅酸根具有化学式Si₄O₁₁⁶⁻，四个Si全部为四配位SiO₄，氧只分为连接两Si的桥氧BO及仅连接一个Si的非桥氧NBO；没有三配位氧或游离氧。设桥氧原子数B、非桥氧数N，要求满足B+N=11与2B+N=4×4。求B、N、平均每Si桥氧端点、平均非桥氧数、氧/硅原子比、Si形式正电荷、氧形式负电荷、净电荷、四面体角点总数、桥氧共享造成的角点减少数、每一个硅四面体平均被另一个Si连接的数目及平均非桥氧有效负电荷数。

### 推导与解析

1. **物理化学与计量假设**：一理想有限聚硅酸根具有化学式Si₄O₁₁⁶⁻，四个Si全部为四配位SiO₄，氧只分为连接两Si的桥氧BO及仅连接一个Si的非桥氧NBO；没有三配位氧或游离氧。设桥氧原子数B、非桥氧数N，要求满足B+N=11与2B+N=4×4。求B、N、平均每Si桥氧端点、平均非桥氧数、氧/硅原子比、Si形式正电荷、氧形式负电荷、净电荷、四面体角点总数、桥氧共享造成的角点减少数、每一个硅四面体平均被另一个Si连接的数目及平均非桥氧有效负电荷数。

2. **主方程与推导**：2B+N=16，B+N=11，所以B=5、N=6，形式净电荷=4×(+4)+11×(−2)。

3. 变量识别：按题设划分结构位点、平均氧化态、气相分子或活度形态，避免将不同粒子的计数基准混用。

4. 独立建立电荷平衡、统计权重归一或原子/离子库存关系，并明确无量纲平衡常数的标准态。

5. 基础解算：bridging_O = 5.000000000000 atoms；nonbridging_O = 6.000000000000 atoms；BO_bonds_per_Si = 2.500000000000 bonds/Si。

6. 由守恒或统计分配进一步推导：NBO_per_Si = 1.500000000000 atoms/Si；O_per_Si = 2.750000000000 ratio；Si_charge = 16.00000000000 e；O_charge = -22.00000000000 e。

7. 完整数值答案的其余字段：net_charge = -6.000000000000 e；tetra_corner_count = 16.00000000000 corners；shared_corner_reduction = 5.000000000000 corners；network_neighbors_per_Si = 2.500000000000 neighbors/Si；NBO_charge_count = 6.000000000000 charges。

8. 反向核验关键方程：例如阳离子与阴离子形式价相抵、硅氧端点与桥氧数相符、磁矩满足角动量耦合。

9. 第二代数路径重算所有字段并按1e−9相对精度比较；所有单位与符号随结果保留。

10. 本题为原创编辑草稿，跨辑同构、实验适用范围与版权须由专家核实。

### 数值答案

- bridging_O = 5.000000000000 atoms
- nonbridging_O = 6.000000000000 atoms
- BO_bonds_per_Si = 2.500000000000 bonds/Si
- NBO_per_Si = 1.500000000000 atoms/Si
- O_per_Si = 2.750000000000 ratio
- Si_charge = 16.00000000000 e
- O_charge = -22.00000000000 e
- net_charge = -6.000000000000 e
- tetra_corner_count = 16.00000000000 corners
- shared_corner_reduction = 5.000000000000 corners
- network_neighbors_per_Si = 2.500000000000 neighbors/Si
- NBO_charge_count = 6.000000000000 charges

## UC-ADV16-I257 八面体d⁶离子高低自旋晶体场能与成对能竞争

假想八面体d⁶金属离子晶体场分裂Δo=18000 cm⁻¹，同一壳层电子配对能P=20000 cm⁻¹。高自旋t₂g⁴e_g²含1对成对电子、4个未成对电子，低自旋t₂g⁶e_g⁰含3对成对电子、0个未成对电子。t₂g每电子贡献−0.4Δo，e_g贡献+0.6Δo。求两态CFSE、成对能贡献、含成对能总能量、两态能量差ELS−EHS、两态未成对电子数、按μ=√[n(n+2)]μB所得自旋磁矩、能量更低为高自旋的标志。忽略自旋轨道及结构畸变，不把该模型当成全部配合物的实验判据。

### 推导与解析

1. **物理化学与计量假设**：假想八面体d⁶金属离子晶体场分裂Δo=18000 cm⁻¹，同一壳层电子配对能P=20000 cm⁻¹。高自旋t₂g⁴e_g²含1对成对电子、4个未成对电子，低自旋t₂g⁶e_g⁰含3对成对电子、0个未成对电子。t₂g每电子贡献−0.4Δo，e_g贡献+0.6Δo。求两态CFSE、成对能贡献、含成对能总能量、两态能量差ELS−EHS、两态未成对电子数、按μ=√[n(n+2)]μB所得自旋磁矩、能量更低为高自旋的标志。忽略自旋轨道及结构畸变，不把该模型当成全部配合物的实验判据。

2. **主方程与推导**：EHS=(-0.4×4+0.6×2)Δ+P，ELS=(-0.4×6)Δ+3P；ΔE=−2Δ+2P。

3. 变量识别：按题设划分结构位点、平均氧化态、气相分子或活度形态，避免将不同粒子的计数基准混用。

4. 独立建立电荷平衡、统计权重归一或原子/离子库存关系，并明确无量纲平衡常数的标准态。

5. 基础解算：CFSE_HS_cmInv = -7200.000000000 cm^-1；CFSE_LS_cmInv = -43200.00000000 cm^-1；pairing_HS_cmInv = 20000.00000000 cm^-1。

6. 由守恒或统计分配进一步推导：pairing_LS_cmInv = 60000.00000000 cm^-1；energy_HS_cmInv = 12800.00000000 cm^-1；energy_LS_cmInv = 16800.00000000 cm^-1；LS_minus_HS = 4000.000000000 cm^-1。

7. 完整数值答案的其余字段：unpaired_HS = 4.000000000000 electrons；unpaired_LS = 0.000000000000 electrons；mu_HS_muB = 4.898979485566 muB；mu_LS_muB = 0.000000000000 muB；HS_lower_flag = 1.000000000000 boolean。

8. 反向核验关键方程：例如阳离子与阴离子形式价相抵、硅氧端点与桥氧数相符、磁矩满足角动量耦合。

9. 第二代数路径重算所有字段并按1e−9相对精度比较；所有单位与符号随结果保留。

10. 本题为原创编辑草稿，跨辑同构、实验适用范围与版权须由专家核实。

### 数值答案

- CFSE_HS_cmInv = -7200.000000000 cm^-1
- CFSE_LS_cmInv = -43200.00000000 cm^-1
- pairing_HS_cmInv = 20000.00000000 cm^-1
- pairing_LS_cmInv = 60000.00000000 cm^-1
- energy_HS_cmInv = 12800.00000000 cm^-1
- energy_LS_cmInv = 16800.00000000 cm^-1
- LS_minus_HS = 4000.000000000 cm^-1
- unpaired_HS = 4.000000000000 electrons
- unpaired_LS = 0.000000000000 electrons
- mu_HS_muB = 4.898979485566 muB
- mu_LS_muB = 0.000000000000 muB
- HS_lower_flag = 1.000000000000 boolean

## UC-ADV16-I258 两性氧化物表面位点的双质子化状态分布与净电荷

某氧化物表面每个反应位点只可能为≡SOH₂⁺、≡SOH、≡SO⁻。第一步去质子化pKa1=4.000（SOH₂⁺→SOH），第二步pKa2=9.000（SOH→SO⁻），溶液由外部缓冲液固定pH=6.000。理想活度与相同位点响应下，正电位点/中性位点=10^(pKa1−pH)，负电位点/中性位点=10^(pH−pKa2)。总位点浓度ST=0.01000 mol/L，忽略特异吸附和双电层修正。计算两个相对权重、分配函数、三态分率与浓度、每位点平均净形式电荷、每L净电荷当量mol及等电点pH近似(pKa1+pKa2)/2。指出表面酸碱与体相浓度由题设强制近似联系。

### 推导与解析

1. **物理化学与计量假设**：某氧化物表面每个反应位点只可能为≡SOH₂⁺、≡SOH、≡SO⁻。第一步去质子化pKa1=4.000（SOH₂⁺→SOH），第二步pKa2=9.000（SOH→SO⁻），溶液由外部缓冲液固定pH=6.000。理想活度与相同位点响应下，正电位点/中性位点=10^(pKa1−pH)，负电位点/中性位点=10^(pH−pKa2)。总位点浓度ST=0.01000 mol/L，忽略特异吸附和双电层修正。计算两个相对权重、分配函数、三态分率与浓度、每位点平均净形式电荷、每L净电荷当量mol及等电点pH近似(pKa1+pKa2)/2。指出表面酸碱与体相浓度由题设强制近似联系。

2. **主方程与推导**：w+=10^(4−6)，w−=10^(6−9)，Z=1+w++w−，f+=w+/Z，f−=w−/Z。

3. 变量识别：按题设划分结构位点、平均氧化态、气相分子或活度形态，避免将不同粒子的计数基准混用。

4. 独立建立电荷平衡、统计权重归一或原子/离子库存关系，并明确无量纲平衡常数的标准态。

5. 基础解算：positive_weight = 0.01000000000000 ratio；negative_weight = 0.001000000000000 ratio；partition_Z = 1.011000000000 ratio。

6. 由守恒或统计分配进一步推导：positive_fraction = 0.009891196834817 fraction；neutral_fraction = 0.9891196834817 fraction；negative_fraction = 0.0009891196834817 fraction；positive_site_M = 0.00009891196834817 mol/L。

7. 完整数值答案的其余字段：neutral_site_M = 0.009891196834817 mol/L；negative_site_M = 0.000009891196834817 mol/L；mean_charge_per_site = 0.008902077151335 e/site；net_charge_mol_per_L = 0.00008902077151335 mol/L；zero_charge_pH = 6.500000000000 pH。

8. 反向核验关键方程：例如阳离子与阴离子形式价相抵、硅氧端点与桥氧数相符、磁矩满足角动量耦合。

9. 第二代数路径重算所有字段并按1e−9相对精度比较；所有单位与符号随结果保留。

10. 本题为原创编辑草稿，跨辑同构、实验适用范围与版权须由专家核实。

### 数值答案

- positive_weight = 0.01000000000000 ratio
- negative_weight = 0.001000000000000 ratio
- partition_Z = 1.011000000000 ratio
- positive_fraction = 0.009891196834817 fraction
- neutral_fraction = 0.9891196834817 fraction
- negative_fraction = 0.0009891196834817 fraction
- positive_site_M = 0.00009891196834817 mol/L
- neutral_site_M = 0.009891196834817 mol/L
- negative_site_M = 0.000009891196834817 mol/L
- mean_charge_per_site = 0.008902077151335 e/site
- net_charge_mol_per_L = 0.00008902077151335 mol/L
- zero_charge_pH = 6.500000000000 pH

## UC-ADV16-I259 Y³⁺替代Zr⁴⁺氧化锆的氧空位与化学计量公式

理想Y掺杂ZrO₂材料中，Zr阳离子位的摩尔分率x=0.1600被Y³⁺替代，其他阳离子都是Zr⁴⁺。氧保持O²⁻，只靠氧空位补偿负电，不出现间隙离子或电子空穴。以每1 mol总阳离子为计量基准，化学式为Zr₁₋ₓYₓO₂₋ₓ/₂，理想萤石氧位点共有2 mol。求Zr和Y摩尔数、正常氧和空位mol、氧空位占可用氧位点的分率、阳离子正电荷与氧负电荷、总电荷残差、氧/总阳离子比、氧空位/Y原子比及每100个阳离子对应的氧空位数量。解释x是阳离子位分率，不是Y₂O₃添加物摩尔分数。

### 推导与解析

1. **物理化学与计量假设**：理想Y掺杂ZrO₂材料中，Zr阳离子位的摩尔分率x=0.1600被Y³⁺替代，其他阳离子都是Zr⁴⁺。氧保持O²⁻，只靠氧空位补偿负电，不出现间隙离子或电子空穴。以每1 mol总阳离子为计量基准，化学式为Zr₁₋ₓYₓO₂₋ₓ/₂，理想萤石氧位点共有2 mol。求Zr和Y摩尔数、正常氧和空位mol、氧空位占可用氧位点的分率、阳离子正电荷与氧负电荷、总电荷残差、氧/总阳离子比、氧空位/Y原子比及每100个阳离子对应的氧空位数量。解释x是阳离子位分率，不是Y₂O₃添加物摩尔分数。

2. **主方程与推导**：x=0.16，nVac=x/2，nO=2−x/2，Qcation=4(1−x)+3x=4−x。

3. 变量识别：按题设划分结构位点、平均氧化态、气相分子或活度形态，避免将不同粒子的计数基准混用。

4. 独立建立电荷平衡、统计权重归一或原子/离子库存关系，并明确无量纲平衡常数的标准态。

5. 基础解算：Zr_mol = 0.8400000000000 mol；Y_mol = 0.1600000000000 mol；O_mol = 1.920000000000 mol。

6. 由守恒或统计分配进一步推导：vacancies_mol = 0.08000000000000 mol；oxygen_vacancy_site_fraction = 0.04000000000000 fraction；cation_positive_charge = 3.840000000000 e；oxygen_negative_charge = -3.840000000000 e。

7. 完整数值答案的其余字段：charge_residual = 0.000000000000 e；oxygen_per_cation = 1.920000000000 ratio；vacancy_per_Y = 0.5000000000000 ratio；vacancies_per100_cations = 8.000000000000 vacancies。

8. 反向核验关键方程：例如阳离子与阴离子形式价相抵、硅氧端点与桥氧数相符、磁矩满足角动量耦合。

9. 第二代数路径重算所有字段并按1e−9相对精度比较；所有单位与符号随结果保留。

10. 本题为原创编辑草稿，跨辑同构、实验适用范围与版权须由专家核实。

### 数值答案

- Zr_mol = 0.8400000000000 mol
- Y_mol = 0.1600000000000 mol
- O_mol = 1.920000000000 mol
- vacancies_mol = 0.08000000000000 mol
- oxygen_vacancy_site_fraction = 0.04000000000000 fraction
- cation_positive_charge = 3.840000000000 e
- oxygen_negative_charge = -3.840000000000 e
- charge_residual = 0.000000000000 e
- oxygen_per_cation = 1.920000000000 ratio
- vacancy_per_Y = 0.5000000000000 ratio
- vacancies_per100_cations = 8.000000000000 vacancies

## UC-ADV16-I260 NO₂/N₂O₄气相缔合平衡与固定总压下单体分率

某理想NO₂(g)与N₂O₄(g)二聚体系2NO₂⇌N₂O₄，在给定温度的无量纲平衡常数Kp=(pD/p°)/(pM/p°)²=4.000，标准压p°=1.000 bar，总压力Ptot=1.000 bar。令单体摩尔分率y、二聚体摩尔分率1−y，则Kp=(1−y)/y²。给定系统总共有1.000 mol气相分子（NO₂和N₂O₄各算一个分子），求稳定物理根y、二聚体分率、两分压、单体/二聚体摩尔数、以NO₂单元计的总库存、NO₂单元在二聚体中的分率、Kp回代、平均每气相分子的NO₂单元数和二聚体/单体分压比。注意气相总摩尔数不等于NO₂化学计量单元mol数。

### 推导与解析

1. **物理化学与计量假设**：某理想NO₂(g)与N₂O₄(g)二聚体系2NO₂⇌N₂O₄，在给定温度的无量纲平衡常数Kp=(pD/p°)/(pM/p°)²=4.000，标准压p°=1.000 bar，总压力Ptot=1.000 bar。令单体摩尔分率y、二聚体摩尔分率1−y，则Kp=(1−y)/y²。给定系统总共有1.000 mol气相分子（NO₂和N₂O₄各算一个分子），求稳定物理根y、二聚体分率、两分压、单体/二聚体摩尔数、以NO₂单元计的总库存、NO₂单元在二聚体中的分率、Kp回代、平均每气相分子的NO₂单元数和二聚体/单体分压比。注意气相总摩尔数不等于NO₂化学计量单元mol数。

2. **主方程与推导**：4y²+y−1=0，y=(√17−1)/8，pM=yP，pD=(1−y)P。

3. 变量识别：按题设划分结构位点、平均氧化态、气相分子或活度形态，避免将不同粒子的计数基准混用。

4. 独立建立电荷平衡、统计权重归一或原子/离子库存关系，并明确无量纲平衡常数的标准态。

5. 基础解算：monomer_mole_fraction = 0.3903882032022 fraction；dimer_mole_fraction = 0.6096117967978 fraction；pNO2_bar = 0.3903882032022 bar。

6. 由守恒或统计分配进一步推导：pN2O4_bar = 0.6096117967978 bar；monomer_moles = 0.3903882032022 mol；dimer_moles = 0.6096117967978 mol；NO2_unit_inventory_mol = 1.609611796798 mol_units。

7. 完整数值答案的其余字段：dimer_unit_fraction = 0.7574643749637 fraction；Kp_recovered = 4.000000000000 ratio；NO2_units_per_molecule = 1.609611796798 units；dimer_monomer_pressure_ratio = 1.561552812809 ratio。

8. 反向核验关键方程：例如阳离子与阴离子形式价相抵、硅氧端点与桥氧数相符、磁矩满足角动量耦合。

9. 第二代数路径重算所有字段并按1e−9相对精度比较；所有单位与符号随结果保留。

10. 本题为原创编辑草稿，跨辑同构、实验适用范围与版权须由专家核实。

### 数值答案

- monomer_mole_fraction = 0.3903882032022 fraction
- dimer_mole_fraction = 0.6096117967978 fraction
- pNO2_bar = 0.3903882032022 bar
- pN2O4_bar = 0.6096117967978 bar
- monomer_moles = 0.3903882032022 mol
- dimer_moles = 0.6096117967978 mol
- NO2_unit_inventory_mol = 1.609611796798 mol_units
- dimer_unit_fraction = 0.7574643749637 fraction
- Kp_recovered = 4.000000000000 ratio
- NO2_units_per_molecule = 1.609611796798 units
- dimer_monomer_pressure_ratio = 1.561552812809 ratio

## UC-ADV16-I261 水中不同价态离子的Born静电溶剂化自由能

将两种假想刚性球状无机离子从真空转移到298.15 K的均匀连续介电水中，水相对介电常数εr=78.50。Born模型给出的标准静电溶剂化自由能为ΔG=−NA z²e²/[8πε0r](1−1/εr)，其中ε0=8.8541878128×10⁻¹² F/m，e=1.602176634×10⁻¹⁹ C，NA=6.02214076×10²³ mol⁻¹。离子A价数zA=1、半径rA=0.3000 nm；离子B zB=2、半径rB=0.4000 nm。求两者ΔG(kJ/mol)、其比、差、绝对值比、各离子静电因子z²/r(nm⁻¹)、介电削弱因子(1−1/εr)、每个离子溶剂化自由能J、按价态平方归一的每mol自由能及模型A转移到真空的逆过程自由能。说明Born模型不含专一溶剂化和化学配位效应。

### 推导与解析

1. 明确系统与全部给定条件：将两种假想刚性球状无机离子从真空转移到298.15 K的均匀连续介电水中，水相对介电常数εr=78.50。Born模型给出的标准静电溶剂化自由能为ΔG=−NA z²e²/[8πε0r](1−1/εr)，其中ε0=8.8541878128×10⁻¹² F/m，e=1.602176634×10⁻¹⁹ C，NA=6.02214076×10²³ mol⁻¹。离子A价数zA=1、半径rA=0.3000 nm；离子B zB=2、半径rB=0.4000 nm。求两者ΔG(kJ/mol)、其比、差、绝对值比、各离子静电因子z²/r(nm⁻¹)、介电削弱因子(1−1/εr)、每个离子溶剂化自由能J、按价态平方归一的每mol自由能及模型A转移到真空的逆过程自由能。说明Born模型不含专一溶剂化和化学配位效应。

2. 由题目所述机理推导出基础数学关系：ΔGi=−C z_i²/r_i·(1−1/εr)，C=NA e²/(8π ε0)；比值GB/GA=(zB²/rB)/(zA²/rA)。

3. 将化学式、链统计、纳米尺度物性或微观碰撞与宏观热力学单位严格对应。

4. 明确控制变量、守恒假设和理想模型边界，检查相应物理量的符号和有效范围。

5. 求得基础数值：DG_A_kJmol = -228.6092986718 kJ/mol；DG_B_kJmol = -685.8278960153 kJ/mol；DG_B_over_A = 3.000000000000 ratio；DG_B_minus_A_kJmol = -457.2185973435 kJ/mol。

6. 计算中间量与变换：magnitude_ratio = 3.000000000000 ratio；charge_radius_A_nmInv = 3.333333333333 nm^-1；charge_radius_B_nmInv = 10.00000000000 nm^-1；dielectric_reduction = 0.9872611464968 ratio。

7. 继续得到全部答案：per_ion_A_J = -3.796146715637e-19 J；per_ion_B_J = -1.138844014691e-18 J；DG_A_per_charge_squared = -228.6092986718 kJ/mol；vacuum_reverse_A_kJmol = 228.6092986718 kJ/mol。

8. 代回相应的电荷/聚合度/自由能/压强方程，检查单位、分率、极限和非负性。

9. 用另一套独立的代数表达式重算所有字段，并通过逐字段1e−9相对误差检测。

10. 此稿替换此前发现的跨辑重复风险模型；科学性及跨辑原创性仍需专家终审，故未标为正式批准。

### 数值答案

- DG_A_kJmol = -228.6092986718 kJ/mol
- DG_B_kJmol = -685.8278960153 kJ/mol
- DG_B_over_A = 3.000000000000 ratio
- DG_B_minus_A_kJmol = -457.2185973435 kJ/mol
- magnitude_ratio = 3.000000000000 ratio
- charge_radius_A_nmInv = 3.333333333333 nm^-1
- charge_radius_B_nmInv = 10.00000000000 nm^-1
- dielectric_reduction = 0.9872611464968 ratio
- per_ion_A_J = -3.796146715637e-19 J
- per_ion_B_J = -1.138844014691e-18 J
- DG_A_per_charge_squared = -228.6092986718 kJ/mol
- vacuum_reverse_A_kJmol = 228.6092986718 kJ/mol

## UC-ADV16-I262 Cu₂O/CuO混相体系的平均铜价态与氧质量分数

某无水固态铜氧化物样品只由Cu₂O和CuO两相组成，Cu₂O为0.03000 mol，CuO为0.02000 mol，不存在金属Cu、氢氧化物及氧空位。Cu与O原子摩尔质量分别63.546和15.999 g/mol。求两相分别所含Cu原子与O原子mol、总Cu与总O库存、Cu的形式平均氧化态、Cu⁺/Cu²⁺原子分率、样品总质量、氧质量分率、Cu质量分率及用铜总形式正电荷和氧负电荷核对的电中性。注意平均价态按照铜原子数加权，而不是两相摩尔数简单算术平均。

### 推导与解析

1. **物理化学与计量假设**：某无水固态铜氧化物样品只由Cu₂O和CuO两相组成，Cu₂O为0.03000 mol，CuO为0.02000 mol，不存在金属Cu、氢氧化物及氧空位。Cu与O原子摩尔质量分别63.546和15.999 g/mol。求两相分别所含Cu原子与O原子mol、总Cu与总O库存、Cu的形式平均氧化态、Cu⁺/Cu²⁺原子分率、样品总质量、氧质量分率、Cu质量分率及用铜总形式正电荷和氧负电荷核对的电中性。注意平均价态按照铜原子数加权，而不是两相摩尔数简单算术平均。

2. **主方程与推导**：nCu=2nCu2O+nCuO，nO=nCu2O+nCuO，vCu=2nO/nCu，wO=nO MO/(nCu MCu+nO MO)。

3. 变量识别：按题设划分结构位点、平均氧化态、气相分子或活度形态，避免将不同粒子的计数基准混用。

4. 独立建立电荷平衡、统计权重归一或原子/离子库存关系，并明确无量纲平衡常数的标准态。

5. 基础解算：Cu_from_Cu2O_mol = 0.06000000000000 mol；Cu_from_CuO_mol = 0.02000000000000 mol；oxygen_from_Cu2O_mol = 0.03000000000000 mol。

6. 由守恒或统计分配进一步推导：oxygen_from_CuO_mol = 0.02000000000000 mol；total_Cu_mol = 0.08000000000000 mol；total_O_mol = 0.05000000000000 mol；mean_Cu_valence = 1.250000000000 oxidation。

7. 完整数值答案的其余字段：CuI_fraction = 0.7500000000000 fraction；CuII_fraction = 0.2500000000000 fraction；sample_mass_g = 5.883630000000 g；oxygen_mass_fraction = 0.1359619826536 fraction；copper_mass_fraction = 0.8640380173464 fraction；charge_balance = 0.000000000000 e。

8. 反向核验关键方程：例如阳离子与阴离子形式价相抵、硅氧端点与桥氧数相符、磁矩满足角动量耦合。

9. 第二代数路径重算所有字段并按1e−9相对精度比较；所有单位与符号随结果保留。

10. 本题为原创编辑草稿，跨辑同构、实验适用范围与版权须由专家核实。

### 数值答案

- Cu_from_Cu2O_mol = 0.06000000000000 mol
- Cu_from_CuO_mol = 0.02000000000000 mol
- oxygen_from_Cu2O_mol = 0.03000000000000 mol
- oxygen_from_CuO_mol = 0.02000000000000 mol
- total_Cu_mol = 0.08000000000000 mol
- total_O_mol = 0.05000000000000 mol
- mean_Cu_valence = 1.250000000000 oxidation
- CuI_fraction = 0.7500000000000 fraction
- CuII_fraction = 0.2500000000000 fraction
- sample_mass_g = 5.883630000000 g
- oxygen_mass_fraction = 0.1359619826536 fraction
- copper_mass_fraction = 0.8640380173464 fraction
- charge_balance = 0.000000000000 e

## UC-ADV16-I263 无机碳酸体系三形态的酸碱分布与总碳守恒

298.15 K理想稀水溶液总无机碳CT=0.01000 mol/L，只含H₂CO₃*、HCO₃⁻与CO₃²⁻三个酸碱形态。宏观酸解离常数以pKa1=6.350、pKa2=10.330给定，外部缓冲池固定pH=8.300。设r1=[HCO₃⁻]/[H₂CO₃*]=10^(pH−pKa1)，r2=[CO₃²⁻]/[HCO₃⁻]=10^(pH−pKa2)。忽略离子强度效应与气液逸散。求r1、r2、三形态分率与浓度、碳库存回代、每mol碳平均负电荷、CO₃/H₂CO₃比及该pH下碳酸根相对于碳酸氢根比例。强调H₂CO₃*表示含溶解CO₂的表观形态。

### 推导与解析

1. **物理化学与计量假设**：298.15 K理想稀水溶液总无机碳CT=0.01000 mol/L，只含H₂CO₃*、HCO₃⁻与CO₃²⁻三个酸碱形态。宏观酸解离常数以pKa1=6.350、pKa2=10.330给定，外部缓冲池固定pH=8.300。设r1=[HCO₃⁻]/[H₂CO₃*]=10^(pH−pKa1)，r2=[CO₃²⁻]/[HCO₃⁻]=10^(pH−pKa2)。忽略离子强度效应与气液逸散。求r1、r2、三形态分率与浓度、碳库存回代、每mol碳平均负电荷、CO₃/H₂CO₃比及该pH下碳酸根相对于碳酸氢根比例。强调H₂CO₃*表示含溶解CO₂的表观形态。

2. **主方程与推导**：Z=1+r1+r1r2；α0=1/Z，α1=r1/Z，α2=r1r2/Z，平均负电=α1+2α2。

3. 变量识别：按题设划分结构位点、平均氧化态、气相分子或活度形态，避免将不同粒子的计数基准混用。

4. 独立建立电荷平衡、统计权重归一或原子/离子库存关系，并明确无量纲平衡常数的标准态。

5. 基础解算：ratio_bicarbonate_acid = 89.12509381337 ratio；ratio_carbonate_bicarbonate = 0.009332543007970 ratio；acid_fraction = 0.01099422326757 fraction。

6. 由守恒或统计分配进一步推导：bicarbonate_fraction = 0.9798611801271 fraction；carbonate_fraction = 0.009144596605376 fraction；acid_M = 0.0001099422326757 mol/L；bicarbonate_M = 0.009798611801271 mol/L。

7. 完整数值答案的其余字段：carbonate_M = 0.00009144596605376 mol/L；total_carbon_backcheck_M = 0.01000000000000 mol/L；average_negative_charge = 0.9981503733378 e/carbon；carbonate_acid_ratio = 0.8317637711027 ratio；carbonate_bicarbonate_fraction = 0.009332543007970 fraction。

8. 反向核验关键方程：例如阳离子与阴离子形式价相抵、硅氧端点与桥氧数相符、磁矩满足角动量耦合。

9. 第二代数路径重算所有字段并按1e−9相对精度比较；所有单位与符号随结果保留。

10. 本题为原创编辑草稿，跨辑同构、实验适用范围与版权须由专家核实。

### 数值答案

- ratio_bicarbonate_acid = 89.12509381337 ratio
- ratio_carbonate_bicarbonate = 0.009332543007970 ratio
- acid_fraction = 0.01099422326757 fraction
- bicarbonate_fraction = 0.9798611801271 fraction
- carbonate_fraction = 0.009144596605376 fraction
- acid_M = 0.0001099422326757 mol/L
- bicarbonate_M = 0.009798611801271 mol/L
- carbonate_M = 0.00009144596605376 mol/L
- total_carbon_backcheck_M = 0.01000000000000 mol/L
- average_negative_charge = 0.9981503733378 e/carbon
- carbonate_acid_ratio = 0.8317637711027 ratio
- carbonate_bicarbonate_fraction = 0.009332543007970 fraction

## UC-ADV16-I264 Ce³⁺自由离子自旋轨道耦合的Landé因子与有效磁矩

一个孤立Ce³⁺离子具有4f¹构型，采用Hund规则基态L=3、S=1/2、J=5/2，忽略晶体场劈裂、磁各向异性和热激发多重态。Landé因子gJ=1+[J(J+1)+S(S+1)−L(L+1)]/[2J(J+1)]，有效磁矩μeff=gJ√[J(J+1)]μB。给定T=300.0 K、μB=9.2740100783×10⁻²⁴ J/T，NA=6.02214076×10²³ mol⁻¹，kB=1.380649×10⁻²³ J/K和μ0=1.25663706212×10⁻⁶ SI。求三个角动量平方量、Landé因子、磁矩μB与J/T、磁量子数多重度2J+1、饱和磁矩gJJμB、SI Curie摩尔磁化率χ=μ0NA μeff²/(3kBT)及χT。不可用只考虑S的spin-only磁矩替代。

### 推导与解析

1. **物理化学与计量假设**：一个孤立Ce³⁺离子具有4f¹构型，采用Hund规则基态L=3、S=1/2、J=5/2，忽略晶体场劈裂、磁各向异性和热激发多重态。Landé因子gJ=1+[J(J+1)+S(S+1)−L(L+1)]/[2J(J+1)]，有效磁矩μeff=gJ√[J(J+1)]μB。给定T=300.0 K、μB=9.2740100783×10⁻²⁴ J/T，NA=6.02214076×10²³ mol⁻¹，kB=1.380649×10⁻²³ J/K和μ0=1.25663706212×10⁻⁶ SI。求三个角动量平方量、Landé因子、磁矩μB与J/T、磁量子数多重度2J+1、饱和磁矩gJJμB、SI Curie摩尔磁化率χ=μ0NA μeff²/(3kBT)及χT。不可用只考虑S的spin-only磁矩替代。

2. **主方程与推导**：gJ=1+[J(J+1)+S(S+1)−L(L+1)]/(2J(J+1))；χmol=μ0NA(gJ²J(J+1)μB²)/(3kBT)。

3. 变量识别：按题设划分结构位点、平均氧化态、气相分子或活度形态，避免将不同粒子的计数基准混用。

4. 独立建立电荷平衡、统计权重归一或原子/离子库存关系，并明确无量纲平衡常数的标准态。

5. 基础解算：J_Jplus1 = 8.750000000000 ratio；S_Splus1 = 0.7500000000000 ratio；L_Lplus1 = 12.00000000000 ratio。

6. 由守恒或统计分配进一步推导：Lande_g = 0.8571428571429 ratio；effective_mu_muB = 2.535462764186 muB；effective_mu_JT = 2.351390722821e-23 J/T；multiplet_degeneracy = 6.000000000000 states。

7. 完整数值答案的其余字段：saturation_mu_muB = 2.142857142857 muB；susceptibility_SI_m3mol = 3.367321438353e-8 m3/mol；chi_times_T = 0.00001010196431506 m3K/mol。

8. 反向核验关键方程：例如阳离子与阴离子形式价相抵、硅氧端点与桥氧数相符、磁矩满足角动量耦合。

9. 第二代数路径重算所有字段并按1e−9相对精度比较；所有单位与符号随结果保留。

10. 本题为原创编辑草稿，跨辑同构、实验适用范围与版权须由专家核实。

### 数值答案

- J_Jplus1 = 8.750000000000 ratio
- S_Splus1 = 0.7500000000000 ratio
- L_Lplus1 = 12.00000000000 ratio
- Lande_g = 0.8571428571429 ratio
- effective_mu_muB = 2.535462764186 muB
- effective_mu_JT = 2.351390722821e-23 J/T
- multiplet_degeneracy = 6.000000000000 states
- saturation_mu_muB = 2.142857142857 muB
- susceptibility_SI_m3mol = 3.367321438353e-8 m3/mol
- chi_times_T = 0.00001010196431506 m3K/mol