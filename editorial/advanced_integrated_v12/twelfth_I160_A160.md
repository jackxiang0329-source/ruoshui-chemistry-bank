# 第十二辑 I160 / A160 大学化学高阶综合题

两题仅为待审编辑草稿，独立计算不是人类专家审核或原创性证明。

## UC-ADV12-I160 反铁磁自旋1/2二聚体的三重态统计、Schottky热容与有限场磁化率

### 完整中文题干
某假想无机双核磁性配合物每分子含两个S=1/2自旋，满足各向同性反铁磁Heisenberg交换H=J S₁·S₂（J>0），相对于S=0单态，S=1三重态能隙按每摩尔二聚体计Δ_m=650.0 J/mol。忽略晶间相互作用，温度T=30.00 K，各中心磁谱因子g=2.100，外磁场B=5.000 T，R=8.314462618 J/(mol K)、k_B=1.380649×10⁻²³ J/K、μ_B=9.2740100783×10⁻²⁴ J/T、N_A=6.02214076×10²³ mol⁻¹。以单态为零能基准，求零场配分函数、单态/三重态占据分数、等概率温度、相对内能、Schottky热容和自旋熵；引入三重态m=−1,0,+1的Zeeman分裂，求B=5 T的配分函数、磁化强度、有限场M/B以及严格B→0摩尔磁化率，检查自旋简并、概率归一及低高温与低场极限。

### 逐步详细解析
1. 设两自旋1/2无机磁性中心只受各向同性Heisenberg交换H=J S₁·S₂，J>0，单态自旋总量S=0的本征能为−3J/4，三重态S=1的本征能为J/4。

2. 将单态能量选作零点，则三重态高出能隙Δ=J，包含m_S=−1、0、+1共3个微观态，不能把三重态当作单简并态。

3. 题设交换间隙按每摩尔自旋二聚体计Δ_m=650.0 J/mol，与玻尔兹曼因子相容的无量纲变量x=Δ_m/(RT)。

4. 在T=30 K时x=2.60590102597，单个三重微态的相对权重u=e^(−x)=0.0738365785414，整个零场配分函数Z=1+3u=1.22150973562。

5. 单态概率p_S=1/Z=0.818659050219，三重态宏观概率p_T=3u/Z=0.181340949781，两者严格相加为1。

6. p_T=p_S要求3e^(−Δ_m/RT*)=1，故T*=Δ_m/[Rln3]=71.1598000365 K，正根唯一。

7. 零场相对于单态的平均能量U_m=Δ_m p_T=117.871617357 J/mol，温度无关Δ_m使Schottky热容C_m=R x² p_T(1−p_T)=8.38202539166 J/(mol K)。

8. 由S_m=R[lnZ+x p_T]计算自旋统计熵S_m=5.59267463198 J/(mol K)；低温趋0，高温趋Rln4。

9. 磁场B沿z轴时三重态Zeeman能为Δ_m−m gμ_B B N_A，单态磁矩为0；以单分子变量y=gμ_B B/(k_BT)构造Z_B=1+u[1+2cosh(y)]。

10. g=2.1、μ_B=9.2740100783e-24 J/T、B=5 T给y=0.235099835469与Z_B=1.22560965817。

11. 对lnZ_B按磁场微分，摩尔磁化强度M_m=N_A gμ_B[2u sinh(y)/Z_B]=0.335299450426 A·m²/mol，符号为正。

12. 由B→0取极限，低场摩尔磁化率χ_m=(N_A(gμ_B)²/(k_BT))[2u/(1+3u)]=0.0666691178178 J/(mol·T²)；有限场M_m/B=0.0670598900852与低场有非线性差别。

13. 三重态受场分裂后的总概率为u[1+2cosh(y)]/Z_B，检查在0与1之间；自旋相关磁响应不等于二个独立Curie自由自旋的简单相加。

14. 模型假设互不作用的同质二聚体、各向同性交换、g张量各向同性和忽略晶场与磁各向异性；真实无机双核磁体的晶间交换或激发多重态可能改变磁化率和热容。

### 独立主要答案向量
- triplet_gap_over_RT: 2.605901025973759 dimensionless
- triplet_single_microstate_weight: 0.07383657854144061 dimensionless
- zero_field_partition_function: 1.2215097356243219 dimensionless
- singlet_population: 0.8186590502194346 fraction
- triplet_population: 0.1813409497805654 fraction
- equal_macro_population_temperature_K: 71.15980003645308 K
- relative_spin_energy_J_mol: 117.8716173573675 J/mol
- spin_heat_capacity_J_molK: 8.382025391656223 J/(mol K)
- spin_entropy_J_molK: 5.592674631982236 J/(mol K)
- zero_field_molar_susceptibility_J_per_mol_T2: 0.06666911781776629 J/(mol T2)
- field_Zeeman_argument: 0.2350998354690439 dimensionless
- field_partition_function: 1.2256096581657419 dimensionless
- field_molar_magnetization_A_m2_mol: 0.3352994504259987 A m2/mol
- finite_field_M_over_B: 0.06705989008519973 J/(mol T2)
- field_triplet_probability: 0.18407953679427685 fraction
- population_normalization: 1 fraction
- characteristic_gap_temperature_K: 78.17703077921277 K

适用条件：模型假设互不作用的同质二聚体、各向同性交换、g张量各向同性和忽略晶场与磁各向异性；真实无机双核磁体的晶间交换或激发多重态可能改变磁化率和热容。

审核：publishable=false；exclude_from_official_bank=true；awaiting_expert_review；pending_cross_series_model_review。

## UC-ADV12-A160 EQCM铜沉积电荷与Sauerbrey质量双反演及滞留水计量审计

### 完整中文题干
某假想酸性铜电沉积电极配合电化学石英晶体微天平(EQCM)研究Cu²⁺+2e→Cu(s)反应，唯一副反应为2H⁺+2e→H₂。恒流沉积60.00 s积分总电荷Q=0.1200 C，由独立气体收集法确认Cu沉积法拉第效率90.00%；F=96485.33212 C/mol。铜相对摩尔质量63.546 g/mol，水18.01528 g/mol，铜致密层密度8.960 g/cm³，电极面积1.000 cm²。EQCM基频与电极校准后的Sauerbrey质量灵敏度C_f=56.60 Hz/(μg cm⁻²)，测得相对沉积前频率下降2500.0 Hz。假设附着质量仅包括沉积Cu及被刚性耦合的界面滞留水，H₂逸出且水不参与净电荷反应。求两反应电子电荷分配、Cu生成摩尔数及质量、总EQCM质量、滞留水质量与mol数及每Cu水分子比、析氢摩尔数、干铜等效厚度、平均沉积速率和电流；检查Faraday电荷、铜质量、反应原子计量与水质量守恒及刚性EQCM局限。

### 逐步详细解析
1. 在酸性Cu²⁺电沉积中令目标反应为Cu²⁺+2e⁻→Cu(s)，唯一副反应为2H⁺+2e⁻→H₂(g)，所以两路径每摩尔产物均需2摩尔电子。

2. 题设总积分电荷Q=0.1200 C、Cu沉积法拉第效率η_F=0.9000，因此分配到Cu与析氢的电荷分别Q_Cu=η_FQ和Q_H=(1−η_F)Q。

3. 得到Q_Cu=0.108000000000 C、Q_H=0.0120000000000 C，二者和回归总Q。

4. 按Faraday常数F=96485.33212 C/mol，沉积Cu摩尔数n_Cu=Q_Cu/(2F)=5.59670561457e-7 mol。

5. Cu原子量63.546 g/mol，因此金属铜质量m_Cu=35.5648254984 μg。

6. 电化学石英晶体微天平EQCM的题设刚性薄膜Sauerbrey标定为Δf=−C_f Δm/A，其中C_f=56.6 Hz/(μg cm⁻²)，电极面积A=1.000 cm²。

7. 测得频移Δf=-2500 Hz，反演总耦合质量Δm=−Δf A/C_f=44.1696113074 μg，包含金属及残留的界面水，而不只Cu。

8. 扣除已由电荷单独确定的金属质量，剩余随晶体振动的滞留水质量m_w=8.60478580905 μg；其为正说明总EQCM质量大于Faraday沉积质量。

9. 按水摩尔质量18.01528 g/mol，水摩尔数n_w=4.77638194302e-7 mol，表观每个Cu对应水分子比n_w/n_Cu=0.853427403897。

10. 副反应析氢摩尔数n_H2=Q_H/(2F)=6.21856179397e-8 mol；该析出气体不计入EQCM刚性附着质量。

11. 若铜层干燥后密度取8.960 g/cm³，真实金属Cu的等效致密层厚d=m_Cu/(ρA)=39.6928856009 nm，绝不能将含水EQCM总质量直接代入Cu密度。

12. 沉积60.00 s平均铜生成速率n_Cu/t=9.32784269096e-9 mol/s，总平均电流Q/t=0.00200000000000 A。

13. 独立核对电子守恒：2F(n_Cu+n_H2)=Q，Cu²⁺与H⁺还原保持电荷守恒；水的滞留并非由析氢反应额外生成。

14. 模型假设仅有Cu沉积与H₂副反应、法拉第效率独立可靠、频移全部属于刚性无耗散质量加载且无溶液黏弹负载；实际EQCM必须检查耗散、溶剂层及表面粗糙度。

### 独立主要答案向量
- copper_deposition_charge_C: 0.108 C
- hydrogen_side_reaction_charge_C: 0.011999999999999997 C
- deposited_Cu_mol: 5.596705614573574e-7 mol
- deposited_Cu_mass_ug: 35.56482549836923 ug
- EQCM_total_mass_ug: 44.169611307420496 ug
- entrained_water_mass_ug: 8.604785809051265 ug
- entrained_water_mol: 4.776381943023513e-7 mol
- evolved_H2_mol: 6.218561793970636e-8 mol
- entrained_water_per_Cu_ratio: 0.8534274038973974 ratio
- dry_copper_thickness_nm: 39.6928856008585 nm
- copper_current_efficiency_percent: 90 percent
- Cu_deposition_rate_mol_s: 9.327842690955957e-9 mol/s
- mean_total_current_A: 0.002 A
- deposited_Cu_atoms: 337041490032443700 atoms
- charge_balance_C: 0.12 C
- copper_faradaic_fraction_check: 0.9000000000000001 fraction

适用条件：模型假设仅有Cu沉积与H₂副反应、法拉第效率独立可靠、频移全部属于刚性无耗散质量加载且无溶液黏弹负载；实际EQCM必须检查耗散、溶剂层及表面粗糙度。

审核：publishable=false；exclude_from_official_bank=true；awaiting_expert_review；pending_cross_series_model_review。

