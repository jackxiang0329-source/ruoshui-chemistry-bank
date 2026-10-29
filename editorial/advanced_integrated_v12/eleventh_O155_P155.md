# 第十二辑 O155/P155 中文完整题解

以下题目属于待人工审核的非正式编辑草稿。

## UC-ADV12-O155 六半胱氨酸二硫键完全匹配拓扑的Boltzmann权重与氧化还原守恒

### 题目
某假想有机多肽含6个可氧化半胱氨酸–SH侧链，依序标号1至6。在完全氧化条件下只生成分子内二硫键，全部6个–SH以不重叠的3对组成完全匹配，且不存在残留自由巯基或分子间交联。指定天然连接拓扑为(1,2)、(3,4)、(5,6)，它的标准自由能比其它所有完全匹配拓扑各低6.000 kJ/mol，其余错误拓扑彼此等能且简并度各1。温度298.15 K、R=8.314462618 J/(mol·K)，总蛋白浓度0.002000 mol/L，氧化剂为H₂O₂，二硫键反应按2RSH+H₂O₂→RSSR+2H₂O计量。求全部不同拓扑数、按恰好含0、1、3条天然键分类的简并数与Boltzmann概率、天然拓扑概率、正确天然键数均值及方差、天然拓扑与14个错误拓扑总权重的宏态自由能差、天然蛋白浓度、总二硫键及巯基/H₂O₂/H₂O和电子转移当量，检查组合计数、拓扑分布归一与氧化还原原子守恒。

### 严密解析
1. 把单条假想含6个自由半胱氨酸巯基的蛋白质链标号为1至6，氧化后全部六个巯基形成3条分子内二硫键，不存在分子间交联与游离巯基。

2. 完全配对的无序拓扑数为(6−1)!!=5×3×1=15；每个拓扑代表三个互不共享顶点的二硫键，而不是三条独立任取边。

3. 指定天然拓扑为(1,2)(3,4)(5,6)，其自由能低于其它14个拓扑6.000 kJ/mol；其它14个视作等能，且无溶剂/构象其它简并度。

4. 以普通错误拓扑单态权重1为标准，天然态权重w=exp[6000/(RT)]，配分函数Z=w+14。

5. 在T=298.15 K，w=11.2500517962、Z=25.2500517962，天然拓扑概率P_nat=w/Z=0.445545691828，其余概率合计14/Z。

6. 对于任意固定的一条天然二硫键，剩余四顶点共有3种完全配对，其中只有一种会同时包括其余两条天然键。

7. 因此恰好含一条天然键的非天然拓扑有3×(3−1)=6种；恰好含两条天然键的非天然拓扑不存在，因为第三条必然由余下两顶点配成。

8. 既无天然键的错误拓扑数为14−6=8，分类简并数为1（全对）、6（仅一对）、8（零对），总计15。

9. 一对天然键拓扑总概率6/Z=0.237623274931，零对拓扑概率8/Z=0.316831033241，三种分类概率求和为1。

10. 天然拓扑与其余错误拓扑整个宏态的统计权重比w/14=0.803575128303，对应宏态自由能差−RTln(w/14)=0.542109718653 kJ/mol。

11. 每分子天然键数的平均值〈N〉=(3w+1×6)/Z=1.57426035041，二阶矩〈N²〉=(9w+6)/Z=4.24753450138，方差=1.76923885049≥0。

12. 蛋白质初始浓度0.002 mol/L，因此天然拓扑浓度=0.000891091383656 mol/L；无论拓扑，每分子都形成三条S−S键，总键浓度=0.00600000000000 mol/L。

13. 每条键净氧化反应2RSH+H₂O₂→RSSR+2H₂O，H₂O₂浓度需求等于二硫键数，水生成数为其两倍，转移电子数为其两倍。

14. 总消耗巯基=0.0120000000000 mol/L、H₂O₂=0.00600000000000、产水=0.0120000000000、电子转移当量=0.0120000000000 mol/L，逐元素与氧化还原电荷平衡。

15. 该完全配对模型不代表真实蛋白折叠自由能仅由一个拓扑常数决定；巯基pKa、二硫键交换、分子间交联、溶剂与蛋白构象耦合会改变能量景观。

### 完整主答案向量
- number_of_complete_disulfide_matchings = 15 matchings
- native_Boltzmann_weight = 11.25005179624861 dimensionless
- topology_partition_sum = 25.25005179624861 dimensionless
- native_topology_probability = 0.44554569182784903 fraction
- one_native_bond_topology_probability = 0.23762327493092184 fraction
- zero_native_bond_topology_probability = 0.31683103324122913 fraction
- native_to_all_other_weight_ratio = 0.8035751283034721 ratio
- native_vs_others_macrostate_G_kJ_mol = 0.5421097186528787 kJ/mol
- mean_native_bonds_per_molecule = 1.5742603504144688 bonds
- second_moment_native_bond_count = 4.247534501381564 bonds2
- variance_native_bond_count = 1.7692388504944776 bonds2
- native_topology_mol_L = 0.0008910913836556981 mol/L
- total_disulfide_bonds_mol_L = 0.006 mol/L
- required_H2O2_mol_L = 0.006 mol/L
- produced_water_mol_L = 0.012 mol/L
- consumed_thiol_groups_mol_L = 0.012 mol/L
- transferred_electrons_mol_L = 0.012 mol/L
- uniform_topology_native_baseline = 0.06666666666666667 fraction

待审：`quality_status=awaiting_expert_review`, `novelty_review_status=pending_cross_series_model_review`, `publishable=false`。

## UC-ADV12-P155 Gouy–Chapman电双层Grahame电荷、微分电容与渗透压力校验

### 题目
某假想电极浸入298.15 K水溶液中的理想对称1:1电解质，体相阳离子和阴离子各10.00 mol/m³。溶剂介电常数ε_r=78.50、真空ε₀=8.8541878128×10⁻¹² F/m，kB=1.380649×10⁻²³ J/K、e=1.602176634×10⁻¹⁹ C、N_A=6.02214076×10²³ mol⁻¹、R=8.314462618 J/(mol K)。均匀平板电极相对体相电势ψ₀=+0.05000 V，仅存在Gouy–Chapman扩散层，离子视作点电荷且活度理想。采用λ_D=√[εkBT/(2e²N_Ac∞)]、表面离子浓度c±(0)=c∞exp(∓eψ₀/kBT)、Grahame表面电荷σ=√(8εRTc∞)sinh[eψ₀/(2kBT)]。求热电压、德拜长度与波数、σ及微分电容、表面阳/阴离子浓度、渗透压增量与Maxwell应力、可逆充电功∫σdψ；检查电荷符号、热力学正性、相等压力恒等式、零电势极限和理想模型适用范围。

### 严密解析
1. 把电极前方1:1对称理想电解质近似为无限平板、恒介电常数的Gouy–Chapman扩散双电层，忽略特异吸附、Stern层及有限离子尺寸。

2. 体相单一阳离子与单一阴离子浓度各为c∞=10.00 mol/m³（0.01000 mol/L），溶剂ε=ε₀ε_r，ε_r=78.50，温度298.15 K。

3. Poisson–Boltzmann分布为c₊(ψ)=c∞exp[−eψ/(kBT)]、c₋(ψ)=c∞exp[+eψ/(kBT)]，正表面势排斥阳离子、吸引阴离子。

4. 双电层热电压V_T=kBT/e，德拜长度λ_D=√[εkBT/(2e²N_Ac∞)]，其中浓度以mol/m³表示。

5. 计算V_T=0.0256925791211 V，λ_D=3.04205736023 nm，屏蔽波数κ=1/λ_D=328724899.495 m⁻¹。

6. 在电极表面势ψ₀=0.05 V时，定义x=eψ₀/(2kBT)=0.973043612406，不是用摄氏温度求指数。

7. 一维Poisson–Boltzmann方程的第一积分给Grahame关系σ=√(8εRTc∞)sinh(x)，σ为电极正表面电荷密度。

8. 前因子σ*=√(8εRTc∞)=0.0117405565895 C/m²，表面电荷σ=0.0133141114568 C/m²，正号与ψ₀一致。

9. 求微分电容C_diff=dσ/dψ₀=σ*/(2V_T)cosh(x)=0.345454455675 F/m²；零电势电容0.228481471910 F/m²。

10. 表面阳离子浓度=1.42831848560、阴离子浓度=70.0123964004 mol/m³，阴离子富集因子c₋/c₊=49.0173564973。

11. 近表面理想渗透压相对体相增加ΔΠ=RT(c₊+c₋−2c∞)=127519.321772 Pa。

12. 由Grahame第一积分，Maxwell电场压力σ²/(2ε)=127519.321772 Pa，与ΔΠ一致（所给R≈N_AkB）。

13. 由可逆充电功密度W/A=∫₀^{ψ₀}σ(ψ)dψ=2V_Tσ*[cosh(x)−1]=0.000308859500448 J/m²，非负。

14. 当ψ₀→0时σ≈(ε/λ_D)ψ₀、C_diff→ε/λ_D；较高电势及较高盐浓度下有限离子大小、Stern层、介电饱和和相关效应会使理想PB失效。

### 完整主答案向量
- thermal_voltage_V = 0.02569257912108585 V
- half_surface_potential_dimensionless = 0.9730436124056752 dimensionless
- Debye_length_nm = 3.0420573602277585 nm
- inverse_Debye_length_m_inv = 328724899.4953633 m^-1
- Grahame_charge_prefactor_C_m2 = 0.011740556589481206 C/m2
- surface_charge_C_m2 = 0.013314111456754521 C/m2
- differential_capacitance_F_m2 = 0.3454544556748442 F/m2
- zero_potential_capacitance_F_m2 = 0.2284814719096409 F/m2
- capacitance_nonlinearity_ratio = 1.5119582904799533 ratio
- cation_surface_mol_m3 = 1.4283184856013562 mol/m3
- anion_surface_mol_m3 = 70.01239640044119 mol/m3
- anion_cation_enrichment = 49.0173564973251 ratio
- osmotic_excess_pressure_Pa = 127519.32177217714 Pa
- Maxwell_stress_Pa = 127519.32177217712 Pa
- charging_work_J_m2 = 0.00030885950044796245 J/m2
- surface_anion_charge_density_C_m3 = 6617357.535984293 C/m3
- dimensionless_surface_potential = 1.9460872248113503 dimensionless

待审：`quality_status=awaiting_expert_review`, `novelty_review_status=pending_cross_series_model_review`, `publishable=false`。

