# 第十二辑 I158、O154

均为待专家审核稿，独立数值核对不证明原创性或批准发表。

## UC-ADV12-I158 CeO2氧空位与Ce3极化子缺陷热力学的氧压指数及化学膨胀反演

### 中文题干
某假想非化学计量萤石型无机氧化物CeO₂₋δ的缺陷形成反应为O_Oˣ+2Ce_Ceˣ⇌V_O••+2Ce_Ce′+½O₂(g)，其唯一带电缺陷为双正氧空位与单负Ce³⁺电子极化子，电子局域在Ce格点，氧子晶格原有2个位置/化学式。假设稀缺陷经验常数K_eff=(δ/2)(2δ)²√(p_O2/p°)=2.000×10⁻⁶，p°=1 bar。给低氧压p₁=0.001000 bar、高氧压p₂=0.1000 bar；化学膨胀规律a=a₀(1+βδ)，a₀=5.410 Å、β=0.1000，萤石常规晶胞含4个化学式单位。电子极化子迁移率固定μ=0.05000 cm²/(V s)，e=1.602176634×10⁻¹⁹ C，N_A=6.02214076×10²³ mol⁻¹，Ce/O原子量140.116/15.999 g/mol。求两压力下δ、Ce³⁺及氧空位位点分数、晶格常数、低压下Ce格点和缺陷数密度及电导率、两压力理论密度、δ对氧压的对数斜率；严格核对电荷、氧原子与晶胞数目守恒并说明稀缺陷模型限制。

### 逐步解析
1. 将理想化萤石型CeO₂₋δ写为每式量单位1个Ce和2−δ个O，缺失的氧空位数为δ，氧空位占全部氧子晶格位点的比例为δ/2。

2. 使用Kröger–Vink表示式O_Oˣ+2Ce_Ceˣ⇌V_O••+2Ce_Ce′+½O₂(g)，每生成一个双正有效电荷的氧空位，必须生成两个各带一负有效电荷的Ce³⁺小极化子。

3. 在没有其它缺陷或自由带电载流子的近似下，电中性要求Ce³⁺占Ce总数分数x_Ce3=2δ，且0<δ<0.5。

4. 题设稀缺陷近似下定义无量纲经验平衡常数K_eff=(δ/2)(2δ)²(p_O2/p°)^(1/2)=2δ³√(p_O2/p°)，并忽略未缺陷晶格位点的活度修正。

5. 在低氧压p₁=0.001 bar（p°=1 bar）时，δ₁=[K_eff/(2√p₁)]^(1/3)=0.0316227766017，氧空位位点分数δ₁/2=0.0158113883008。

6. 在高氧压p₂=0.1 bar时δ₂=0.0146779926762，因p₂>p₁故氧空位减少，δ₂/δ₁=0.464158883361。

7. 两压力相除给δ∝p_O2^(−1/6)，因此对数斜率dlnδ/dlnp_O2=−1/6，是无补偿、稀缺陷极限的可检验预测。

8. 题设化学膨胀a(δ)=a₀(1+βδ)，其中a₀=5.410 Å、β=0.1，所以两压力晶格常数分别5.42710792214与5.41794079404 Å。

9. 萤石常规立方晶胞含4个CeO₂式量，Ce格点数密度N_Ce=4/a³（a以cm计），空位密度δN_Ce，电子极化子密度2δN_Ce。

10. 低氧压时N_Ce=2.50238781994e+22 cm⁻³、N_V=7.91324510006e+20 cm⁻³、N_Ce3=1.58264902001e+21 cm⁻³，满足2N_V=N_Ce3。

11. 取小极化子有效迁移率μ=0.05 cm²/(V s)，σ=e μN_Ce3=12.6784163984 S/cm，须承认该迁移率为题设固定值。

12. 按Ce原子量140.116和O原子量15.999 g/mol，质量密度ρ=4[M_Ce+(2−δ)M_O]/(N_A a³)，低/高氧压分别7.13085187263、7.17843155952 g/cm³。

13. 归一检查：同式量的Ce数始终为1，氧从2降到2−δ，电荷由+4的Ce与−2的O组成净零；具体说(1−2δ)×4+(2δ)×3−2(2−δ)=0。

14. 本模型限定δ远小于1、无Ce空位/间隙、缺陷相互作用弱且K_eff不含其它活度项；实际CeO₂₋δ的位点熵、载流子迁移率和晶格常数会依温度与氧压改变。

### 数值答案向量
- oxygen_deficiency_at_low_pO2 = 0.03162277660168379 formula
- oxygen_deficiency_at_high_pO2 = 0.014677992676220695 formula
- deficiency_ratio = 0.4641588833612779 ratio
- oxygen_vacancy_site_fraction = 0.015811388300841896 fraction
- Ce3_cation_fraction = 0.06324555320336758 fraction
- low_pressure_lattice_A = 5.42710792214151 Angstrom
- high_pressure_lattice_A = 5.417940794037835 Angstrom
- low_pressure_Ce_site_density_cm3 = 2.502387819936682e+22 cm^-3
- oxygen_vacancy_density_cm3 = 791324510006322300000 cm^-3
- Ce3_hopping_carrier_density_cm3 = 1.5826490200126445e+21 cm^-3
- electron_hopping_conductivity_S_cm = 12.678416398436287 S/cm
- low_pressure_density_g_cm3 = 7.130851872632466 g/cm3
- high_pressure_density_g_cm3 = 7.178431559515135 g/cm3
- log_delta_log_pressure_slope = -0.16666666666666663 dimensionless
- reconstructed_reduction_equilibrium_constant = 0.0000019999999999999995 dimensionless

待审状态：publishable=false，exclude_from_official_bank=true。

## UC-ADV12-O154 Curtin–Hammett快速构象平衡的双立体通道与Eyring选择性

### 中文题干
某假想有机底物以两种互变构象A⇌B存在，构象B比A的标准自由能高3.000 kJ/mol，构象间互变远快于产物生成。A与B分别沿不同构型专一不可逆过渡态生成P_A、P_B，两条路径相对于各自构象的Eyring活化自由能ΔG‡_A=83.00 kJ/mol、ΔG‡_B=78.00 kJ/mol，产物不互变。T=320.0 K，h=6.62607015×10⁻³⁴ J s、kB=1.380649×10⁻²³ J/K、R=8.314462618 J/(mol K)。起始总底物0.01000 mol，恒温反应2.000 s，物料体积恒定。求构象平衡和两构象分数、各自Eyring速率、对总底物有效的两条消耗通道、总体一级速率及寿命、立体产物比；独立用Curtin–Hammett过渡态自由能差反算选择性；给出2 s后两产物及剩余底物摩尔数并检查分子守恒、快速构象平衡与反应选择性。

### 逐步解析
1. 考虑有机底物存在两种快速互变构象A⇌B，构象内自由能G_B−G_A=+3.000 kJ/mol，因此B虽为较少构象，仍可能具有更快的产物生成途径。

2. 假设A、B互变远快于两产物形成，整个反应期间底物保持构象Boltzmann平衡，且不可逆生成的不同立体产物P_A、P_B不发生互变。

3. 定义K_conf=[B]/[A]=exp[−(G_B−G_A)/(RT)]；构象占有率p_A=1/(1+K_conf)、p_B=K_conf/(1+K_conf)，两者和为1。

4. 在T=320 K，K_conf=0.323824580329，p_A=0.755387091960、p_B=0.244612908040。

5. 两路径各自相对于其起始构象的活化自由能分别ΔG‡_A=83.00、ΔG‡_B=78.00 kJ/mol，Eyring速率k_i=(kBT/h)exp[−ΔG‡_i/(RT)]。

6. 利用kB=1.380649e-23 J/K、h=6.62607015e-34 J s，计算k_A=0.188747849653、k_B=1.23603943528 s⁻¹。

7. 构象快速平衡下对总体底物的消耗通道为a=p_Ak_A=0.142577689263、b=p_Bk_B=0.302351200716 s⁻¹，而非单用k_B/k_A作为产物比。

8. 总消耗常数k_eff=a+b=0.444928889979 s⁻¹，B/A产物通量比b/a=2.12060668313。

9. Curtin–Hammett关系将B路径的过渡态能量换算到构象A基准：ΔΔG‡_TS=ΔG_BA+ΔG‡_B−ΔG‡_A=−2.000 kJ/mol。

10. 因此理论产物比P_B/P_A=exp[−ΔΔG‡_TS/(RT)]=2.12060668313，与两构象分支计算一致。

11. t=2 s内底物总转化率X=1−exp(−k_eff t)=0.589285839616，平均等待时间1/k_eff=2.24755016481 s。

12. 初始0.01 mol，产物P_A=0.00188836947252 mol、P_B=0.00400448892364 mol、剩余底物=0.00410714160384 mol，总和回归初始投料。

13. Curtin–Hammett选择性反映过渡态相对自由能，而不等于单纯最稳定构象选择性；某构象少但其过渡态更低时可以成为主要产物。

14. 所有温度和自由能均以题设固定标准状态为前提，忽略溶剂粘度、构象互变速率有限、产物可逆和隧穿；若构象交换不够快，单一指数消耗模型需改为耦合常微分方程。

### 数值答案向量
- B_to_A_conformer_equilibrium = 0.3238245803293799 ratio
- A_conformer_fraction = 0.7553870919598659 fraction
- B_conformer_fraction = 0.24461290804013425 fraction
- Eyring_rate_from_A_s = 0.18874784965314276 s^-1
- Eyring_rate_from_B_s = 1.236039435280408 s^-1
- effective_A_product_channel_s = 0.1425776892631655 s^-1
- effective_B_product_channel_s = 0.3023512007162259 s^-1
- total_consumption_s = 0.4449288899793914 s^-1
- B_over_A_product_ratio = 2.1206066831266663 ratio
- Curtin_Hammett_product_ratio = 2.120606683126666 ratio
- substrate_conversion_2s = 0.5892858396163025 fraction
- product_A_mol = 0.0018883694725215176 mol
- product_B_mol = 0.004004488923641508 mol
- remaining_substrate_mol = 0.004107141603836974 mol
- mean_substrate_lifetime_s = 2.2475501648057037 s
- TS_B_minus_TS_A_from_A_kJ_mol = -2 kJ/mol
- molecular_balance_mol = 0.01 mol

待审状态：publishable=false，exclude_from_official_bank=true。

