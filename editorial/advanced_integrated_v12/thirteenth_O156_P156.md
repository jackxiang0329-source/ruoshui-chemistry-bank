# 第十二辑 O156 / P156 严格中文解答

以下均为编辑待审稿（publishable=false），模型独立性需要人类跨辑专家复核。

## UC-ADV12-O156 A3–B2硫醇–烯逐步聚合的Flory–Stockmayer凝胶阈值与分支消灭概率

### 完整题干
一种假想有机聚合物以三官能巯基单体A₃（每分子3个–SH，摩尔质量300.0 g/mol）与双官能烯烃单体B₂（每分子2个C=C，摩尔质量200.0 g/mol）发生理想硫醇–烯逐步点击加成，不产生小分子副产物。投入A₃=2.000 mmol、B₂=3.000 mmol，恰好有相同数目的官能团，各类官能团转化率p=0.8000。采用无环、无凝聚体损失、随机等反应性并以无限大均匀网络处理的Flory–Stockmayer树状分支理论。设从一条A型官能团无法延伸到无限凝胶的概率u_A=1−p+p u_B，从B型官能团失败的概率u_B=1−p+p u_A²。求凝胶临界转化率、分支方程最小物理解、A₃与B₂分子各自进入凝胶的概率、凝胶及溶胶质量和凝胶质量分数、凝胶中两单体的物质的量、已形成C–S连接键数及剩余两种官能团浓度或总摩尔数。检查各分支正根唯一性、节点质量及官能团守恒并讨论环化对凝胶点的影响。

### 逐步求解
1. 将三巯基单体A₃和二烯烃单体B₂以硫醇–烯点击加成聚合，不发生水或其它小分子消除，每成一条C–S连接键消耗一个–SH与一个烯键。

2. 投入A₃=2.000 mmol、B₂=3.000 mmol，初始反应官能团数均为6.000 mmol；同一转化率p_A=p_B=p=0.8000满足官能团计量而不是分子数量相等。

3. 假定随机、各官能团等反应活性、无环化和无限大体系的树状Flory–Stockmayer模型，A₃、B₂在二分交替网络中有各自不同的分支消灭概率。

4. 沿一条随机A反应臂无法通达无限大凝胶的概率u_A=1−p+p u_B^(2−1)；沿一条B反应臂的概率u_B=1−p+p u_A^(3−1)。

5. 在无凝胶解u_A=u_B=1附近线性化，正反馈因子(f_A−1)(f_B−1)p²=2p²；超过1便发生凝胶，临界转化率p_c=1/√2。

6. 计算p_c=0.707106781187、p/p_c=1.13137084990，本题p>p_c，非平凡最小不动点为物理解。

7. 代入u_B=1−p+p u_A²到u_A=1−p+p u_B，得到u_A=1−p²+p²u_A²；除去平凡解u_A=1，另一根u_A=(1−p²)/p²。

8. 取物理较小根u_A=0.562500000000，由第二方程反算u_B=0.453125000000，两者都在[0,1]。

9. A₃分子所有3条独立分支都失败才不在凝胶，因此凝胶A分数G_A=1−u_A³；B₂对应G_B=1−u_B²。

10. 得到G_A=0.822021484375、G_B=0.794677734375；两者因功能度不同而不相等。

11. A₃摩尔质量300.0 g/mol，B₂摩尔质量200.0 g/mol，两种单体投入质量均为0.600000000000 g，总聚合物质量1.200 g。

12. 凝胶质量=0.970019531250 g、溶胶质量=0.229980468750 g、凝胶质量分数=0.808349609375，两相质量和严格回归投入。

13. 已形成的硫醇–烯连接键为3n_Ap=0.00480000000000 mol，残留–SH与未反应烯键各0.00120000000000、0.00120000000000 mol，连接键生成不脱去原子。

14. 有限聚合体系的含环、笼状结构、官能团不等活性、扩散受限和反应后网络收缩会改变真正凝胶阈值；本题结果属于理想随机网络的热力学极限。

### 主要数值答案
- gel_point_conversion: 0.7071067811865475 fraction
- conversion_relative_to_gel_point: 1.1313708498984762 ratio
- A_branch_extinction_probability: 0.5624999999999997 fraction
- B_branch_extinction_probability: 0.45312499999999967 fraction
- A3_molecule_gel_fraction: 0.8220214843750003 fraction
- B2_molecule_gel_fraction: 0.7946777343750003 fraction
- A3_total_mass_g: 0.6 g
- B2_total_mass_g: 0.6 g
- gel_mass_g: 0.9700195312500004 g
- sol_mass_g: 0.22998046874999956 g
- gel_mass_fraction: 0.8083496093750003 fraction
- formed_thiol_ene_links_mol: 0.0048000000000000004 mol
- remaining_thiol_groups_mol: 0.0011999999999999997 mol
- remaining_alkene_groups_mol: 0.0011999999999999997 mol
- A3_gel_mol: 0.0016440429687500006 mol
- B2_gel_mol: 0.002384033203125001 mol
- A_branch_consistency_residual: -1.1102230246251565e-16 dimensionless
- B_branch_consistency_residual: 0 dimensionless

适用条件：有限聚合体系的含环、笼状结构、官能团不等活性、扩散受限和反应后网络收缩会改变真正凝胶阈值；本题结果属于理想随机网络的热力学极限。

待审标记：publishable=false；exclude_from_official_bank=true；awaiting_expert_review；pending_cross_series_model_review。

## UC-ADV12-P156 Collins–Kimball部分吸收反应球的扩散与表面阻力、二级动力学联立反演

### 完整题干
某假想液相偶联反应A+B→AB在298 K水溶液中进行，两种中性反应粒子以扩散控制相遇，相对接触半径a=0.5000 nm，D_A=8.000×10⁻¹⁰和D_B=6.000×10⁻¹⁰ m²/s。碰撞接触后不保证立即反应，而采用Collins–Kimball局域辐射边界条件D_rel dc/dr|_{a}=κ c(a)，κ=0.2000 m/s，远场浓度c∞固定。N_A=6.02214076×10²³ mol⁻¹，水溶液体积不变；起始[A]=[B]=1.000×10⁻⁶ mol/L。请推导扩散场c(r)、Smoluchowski扩散控制上限k_diff=4πa(D_A+D_B)N_A×1000和有限反应边界k_eff=k_diff/[1+D_rel/(κa)]，给出表面Damköhler数、等效反应半径和反应概率。再以二级反应速率方程积分求半衰期、t=0.01000 s时[A]、[B]及[AB]、当时与初始生成速率，并检查粒子与反应物物料守恒、反应阻力与准稳态扩散时间极限。

### 逐步求解
1. 把水中两种中性小分子A和B简化为球形布朗运动粒子，彼此首次中心距离达到a=0.5000 nm时视作接触，不考虑静电长程力、对流或多体效应。

2. 两物种自扩散系数分别D_A=8.000×10⁻¹⁰、D_B=6.000×10⁻¹⁰ m²/s，相对坐标扩散系数D_rel=D_A+D_B。

3. 在孤立反应球外，准稳态球对称扩散方程∇²c=0给c(r)=c∞[1−a_eff/r]，远场保持体相c∞。

4. 采用Collins–Kimball辐射边界条件D_rel (dc/dr)|_{r=a}=κ c(a)，局部表面反应速度κ=0.2000 m/s。

5. 代入浓度剖面得到a_eff=a/[1+D_rel/(κa)]，于是扩散与有限表面反应的两种串联阻力满足k_eff=4πD_rel a_eff N_A×1000。

6. 相对扩散D_rel=1.40000000000e-9 m²/s，表面Damköhler数Da_s=κa/D_rel=0.0714285714286。

7. 若接触必定反应，Smoluchowski扩散上限k_diff=4πaD_rel N_A×1000=5297351687.74 L/(mol s)。

8. 有限表面反应后k_eff=k_diff Da_s/(1+Da_s)=353156779.183 L/(mol s)，有效反应概率因子=0.0666666666667。

9. 对应等效反应半径a_eff=0.0333333333333 nm，小于几何接触半径a，是部分反应边界的直观解释。

10. 反应计量A+B→AB且起始[A]₀=[B]₀=1.000 μmol/L，无其它损失，在全部时刻[A]=[B]=c；方程dc/dt=−k_eff c²。

11. 积分得到1/c−1/c₀=k_eff t，故c(t)=c₀/(1+k_eff c₀t)，半衰期t½=1/(k_eff c₀)。

12. 计算t½=0.00283160357933 s，t=10.00 ms时未反应c=2.20674178549e-7 mol/L，产物浓度p=c₀−c=7.79325821451e-7 mol/L。

13. 该时刻产物生成率k_eff c²=0.0000171977085471 mol/(L s)，最初生成率k_eff c₀²=0.000353156779183 mol/(L s)。

14. 接触扩散弛豫时间尺度a²/D_rel=1.78571428571e-10 s远短于整体半衰期，支撑准稳态扩散近似。

15. 检查A/B分别的分子数库存：c+[AB]=c₀；κ→∞恢复Smoluchowski极限，κ→0则k_eff→0。模型不含溶剂化定向、反应复合体扩散、离子静电势或聚集。

### 主要数值答案
- relative_diffusion_m2_s: 1.4000000000000001e-9 m2/s
- surface_Damkohler_number: 0.07142857142857144 dimensionless
- Smoluchowski_diffusion_limited_M_inv_s: 5297351687.739903 L/(mol s)
- Collins_Kimball_effective_rate_M_inv_s: 353156779.1826603 L/(mol s)
- reaction_probability_per_encounter: 0.06666666666666668 fraction
- effective_reactive_radius_nm: 0.03333333333333334 nm
- equal_reactant_half_life_s: 0.0028316035793348837 s
- reactant_concentration_after_10ms_M: 2.2067417854890257e-7 mol/L
- product_concentration_after_10ms_M: 7.793258214510974e-7 mol/L
- instantaneous_product_rate_M_s: 0.00001719770854706696 mol/(L s)
- initial_reaction_rate_M_s: 0.00035315677918266027 mol/(L s)
- encounter_diffusion_relaxation_s: 1.7857142857142858e-10 s
- surface_to_diffusion_resistance_ratio: 13.999999999999996 ratio
- A_species_inventory_M: 0.000001 mol/L
- inverse_concentration_growth_M_inv: 3531567.791826603 L/mol
- inverse_concentration_time_slope: 3531567.791826603 L/mol
- integrated_pseudo_time: 3.531567791826603 dimensionless

适用条件：检查A/B分别的分子数库存：c+[AB]=c₀；κ→∞恢复Smoluchowski极限，κ→0则k_eff→0。模型不含溶剂化定向、反应复合体扩散、离子静电势或聚集。

待审标记：publishable=false；exclude_from_official_bank=true；awaiting_expert_review；pending_cross_series_model_review。

