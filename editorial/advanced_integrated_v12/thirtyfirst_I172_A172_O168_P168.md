# 第十二辑第三十一批 · I172/A172/O168/P168

四科各一道全新高阶综合题：掺杂NaCl缺陷热力学、色谱三速度反演、水活度缩醛平衡与Nernst–Planck扩散电势。所有题均为待专家审校稿，独立数值复算不代表科学出版审核。

## UC-ADV12-I172 Ca²⁺掺杂NaCl的非稀Schottky空位、电中性与温度耦合

### 完整题目

在理想单晶NaCl中，有0.004000比例的Na子晶格位置被Ca²⁺取代，即Ca_Na^•分数c=0.004000；Na空位V_Na′（负一有效电荷）分数v和Cl空位V_Cl^•（正一有效电荷）分数y均以各自子晶格位点数作分母，晶体无电子/空穴、间隙离子和其他缺陷。每个Na与Cl子晶格各恰好一个位点/化学式单元，Na占位分数为1−c−v、Cl占位分数为1−y，电中性要求v=c+y。假定Schottky缺陷形成平衡的理想位点活度乘积K(T)=[v/(1−c−v)]·[y/(1−y)]，900.0 K时K=1.000×10⁻⁶，形成反应焓近似ΔH=+100.0 kJ/mol、温度不变；K(T)=K(900 K) exp[(ΔH/R)(1/900−1/T)]，R=8.314462618 J/(mol K)。求900.0与1100.0 K的阴阳离子空位、Na/Cl占位、电荷平衡和位点数、温升K及空位增强倍数；求d y/d lnK与热力学唯一根的证明。说明若误以每个Ca都由一个Na空位补偿而忽略热激发Cl空位，会漏掉的内禀Schottky贡献，以及掺杂是否真正改变各子晶格的位点数量。

### 逐步解答

1. 各子晶格的位点分母固定为1，Ca_Na^•占Na位分数c=0.004；Na空位v，Na实际占位1−c−v；阴离子空位y，Cl实际占位1−y。

2. Kröger–Vink有效电荷平衡为[Ca_Na^•]+[V_Cl^•]−[V_Na′]=0，所以v=c+y；仅取v=c会把所有热Schottky对错误地忽略。

3. 以理想占位分数为活度，Na空位/正常Na位的比为v/(1−c−v)，Cl空位/正常Cl位比为y/(1−y)。

4. 代入v=c+y得到单变量方程K(T)=(c+y)y/[(1−2c−y)(1−y)]，有效域0<y<1−2c。

5. 其对数导数dlnQ/dy=1/y+1/(c+y)+1/(1−2c−y)+1/(1−y)>0，且Q从0递增至无穷，故正根唯一。

6. 温升平衡常数按指定形成焓的Van’t Hoff关系放大；本题并非在两温度保持同一K。

7. 900 K的K=0.00000100000000000，1100 K的K=0.0000113559807828，ln(K1100/K900)=2.42974454636。

8. 数值解900 K时Cl空位y=0.000234174026386、Na空位v=0.00423417402639；1100 K时相应y=0.00190155848709、v=0.00590155848709。

9. 900 K Na占位=0.991765825974、Cl占位=0.999765825974；1100 K分别=0.990098441513、0.998098441513。

10. 两温度必须逐项核对Na子晶格c+v+nNa=1、Cl子晶格y+nCl=1和有效电荷c+y−v=0。

11. 回代Q900=0.00000100000000000、Q1100=0.0000113559807828，与温度相关平衡常数分别一致。

12. 阴离子空位温升倍数=8.12027924889，两温度的Na空位/Cl空位比依次18.0813136783、3.10353771770。

13. 对lnQ(y)=lnK隐式求导，得dy/dlnK=1/[1/y+1/(c+y)+1/(1−2c−y)+1/(1−y)]。

14. 900 K与1100 K相应灵敏度0.000221802742600、0.00143401432996，高温内禀空位的热激发贡献更显著。

15. Na与Cl占位数可不相等但各子晶格总位点数仍为1，晶体整体电中性通过掺杂缺陷的有效电荷严格满足。

16. 模型不处理复合缺陷、缔合、位错、表面非化学计量和真实CaCl₂掺杂时的相平衡限制，不能直接用该理想缺陷分数替代实验定量结果。

### 独立数值答案向量

- Schottky_K_900: 0.00000100000000000000 dimensionless
- Schottky_K_1100: 0.0000113559807828452 dimensionless
- Cl_vacancy_900: 0.000234174026385795 fraction
- Cl_vacancy_1100: 0.00190155848708859 fraction
- Na_vacancy_900: 0.00423417402638579 fraction
- Na_vacancy_1100: 0.00590155848708859 fraction
- Na_occupied_900: 0.991765825973614 fraction
- Na_occupied_1100: 0.990098441512911 fraction
- Cl_occupied_900: 0.999765825973614 fraction
- Cl_occupied_1100: 0.998098441512911 fraction
- Cl_vacancy_growth_factor: 8.12027924888574 ratio
- Na_to_Cl_vacancy_ratio_900: 18.0813136782733 ratio
- Na_to_Cl_vacancy_ratio_1100: 3.10353771769821 ratio
- dy_dlnK_900: 0.000221802742599649 fraction
- dy_dlnK_1100: 0.00143401432996041 fraction
- Q_Schottky_900: 0.00000100000000000000 dimensionless
- Q_Schottky_1100: 0.0000113559807828452 dimensionless
- charge_residual_900: 0.00000000000000 effective_charge
- charge_residual_1100: 0.00000000000000 effective_charge
- Na_sub_lattice_site_sum_900: 1.00000000000000 sites
- Na_sub_lattice_site_sum_1100: 1.00000000000000 sites
- Cl_sub_lattice_site_sum_900: 1.00000000000000 sites
- Cl_sub_lattice_site_sum_1100: 1.00000000000000 sites
- vacancy_charge_compensation_900: 0.00400000000000000 fraction
- vacancy_charge_compensation_1100: 0.00400000000000000 fraction
- ln_K_high_over_low: 2.42974454636248 ratio
- Na_vacancy_growth_factor: 1.39379214229559 ratio
- Na_to_Cl_stoichiometric_ratio_900: 0.991998126168986 ratio
- Na_to_Cl_stoichiometric_ratio_1100: 0.991984758549594 ratio

## UC-ADV12-A172 Van Deemter三速度精确逆解与色谱分离度优化

### 完整题目

一根长度L=25.00 cm的理想液相色谱柱，峰高等效理论板高度遵守Van Deemter模型H(u)=A+B/u+C u（u为线速度cm/s），其中A、B、C均未知正数。实测三组精确模拟数据：(u=0.2500 cm/s,H=0.01100 cm)、(u=0.5000 cm/s,H=0.008000 cm)、(u=1.000 cm/s,H=0.008000 cm)。两组不互变分析物保留因子k′₁=2.000、k′₂=2.500在所研究流速区间不变；死时间tM=L/u，保留时间tR,i=tM(1+k′i)，同一流速下各峰板数N=L/H，假设Gaussian峰标准差σti=tR,i/√N、基线宽w_i=4σti。分离度定义Rs=2(tR,2−tR,1)/(w1+w2)，不使用容易混淆的近似保留因子公式。由三数据反演A、B、C，证明H最小化的最佳流速唯一，计算最佳流速下H、N、两峰保留时间及峰宽、Rs；与u=0.5000 cm/s比较N和Rs，核对反演单位与峰宽公式的精确一致性。讨论为什么在本简化模型中增大流速未必提高分离度。

### 逐步解答

1. Van Deemter式中u以cm/s计，故A为cm，B为cm²/s，C为s；每项均返回cm的板高H。

2. 把H(u)=A+B/u+Cu乘u，化成uH(u)=Cu²+Au+B，从三个不同u得到一个二次多项式插值逆问题。

3. 令三组u=0.25、0.50、1.00 cm/s，先计算三个uH，再用相邻割线斜率求C与A，最后算B。

4. 精确反演得到A=0.00200000000000 cm，B=0.00200000000000 cm²/s，C=0.00400000000000 s；三者均为正。

5. 求导H′(u)=−B/u²+C，H″(u)=2B/u³>0，所以u*=√(B/C)是唯一全局极小点。

6. 最优流速u*=0.707106781187 cm/s，最低板高Hmin=0.00765685424949 cm，理论板数N=L/Hmin=3265.04843705。

7. 以u*计算死时间tM=L/u*，而不是使用另一个流速的死时间；分析物保留因子设为常数。

8. 最优死时间=35.3553390593 s，保留时间分别tR1=106.066017178 s、tR2=123.743686708 s。

9. Gaussian峰方差公式给σti=tRi/√N，基线宽wi=4σti，两个峰因保留时间不同故宽度不同。

10. 标准差σ1=1.85622854527、σ2=2.16559996948 s，峰宽w1=7.42491418108、w2=8.66239987792 s。

11. 直接代入分离度定义Rs=2Δt/(w1+w2)，得到Rs=√N (k′₂−k′₁)/[2(2+k′₁+k′₂)]。

12. 最优Rs=2.19771547504，由板数公式独立验算得2.19771547504。

13. 基准u=0.5000 cm/s下理论板数N=3125.00000000，Rs=2.15006536298；最优分离度提高因子1.02216216906。

14. 虽然随u增加死时间缩短，峰宽也按tM缩短，但Rs直接依赖√N，而H(u)先降后升。

15. 该题不包含保留因子随流速变化、梯度洗脱和非Gaussian拖尾；实际分离度还受载样量、颗粒粒径及检测器采集速率制约。

16. 校验每个给定H数值均由反演后的A+B/u+Cu严格恢复，不把H的三个测量值误当成三个未知流速。

### 独立数值答案向量

- H_u0p25_cm: 0.0110000000000000 cm
- H_u0p5_cm: 0.00800000000000000 cm
- H_u1_cm: 0.00800000000000000 cm
- VanDeemter_A_cm: 0.00200000000000000 cm
- VanDeemter_B_cm2_per_s: 0.00200000000000000 cm2/s
- VanDeemter_C_s: 0.00400000000000000 s
- optimal_velocity_cm_s: 0.707106781186548 cm/s
- minimum_H_cm: 0.00765685424949238 cm
- optimum_theoretical_plates: 3265.04843704677 plates
- optimum_dead_time_s: 35.3553390593274 s
- peak1_retention_time_s: 106.066017177982 s
- peak2_retention_time_s: 123.743686707646 s
- peak1_sigma_s: 1.85622854526903 s
- peak2_sigma_s: 2.16559996948053 s
- peak1_baseline_width_s: 7.42491418107611 s
- peak2_baseline_width_s: 8.66239987792213 s
- optimum_resolution_Rs: 2.19771547504239 ratio
- resolution_from_plate_formula: 2.19771547504239 ratio
- plates_at_u0p5: 3125.00000000000 plates
- Rs_at_u0p5: 2.15006536298057 ratio
- peak_retention_separation_s: 17.6776695296637 s
- sum_baseline_width_s: 16.0873140589982 s
- resolution_improvement_factor: 1.02216216905879 ratio
- optimal_velocity_over_reference: 1.41421356237310 ratio
- retention_time_ratio: 1.16666666666667 ratio
- optimal_velocity_squared: 0.500000000000000 cm2/s2
- inverse_minimum_H_per_cm: 130.601937481871 cm^-1

## UC-ADV12-O168 水抑制缩醛形成的非线性物料平衡与反应焓温度效应

### 完整题目

在固定体积1.000 L的理想液相反应器中，假想脂肪醛A与某单羟基醇ROH发生可逆缩醛化：A+2ROH⇌Acetal+H₂O。反应物/产物均保持单相且忽略活度系数，定义全部物种的无量纲活度a_i=[i]/c°，标准态c°=1.000 mol/L。因此K=[Acetal][H₂O]c°/([A][ROH]²)。初始[A]₀=0.02000 mol/L、[ROH]₀=0.1000 mol/L，缩醛初始为零。对比两种初始水含量W₀=0.01000与0.04000 mol/L，在298.15 K时K=20.00（无量纲）。另假定缩醛化标准反应焓ΔrH°=−25.00 kJ/mol在298.15—323.15 K保持常数，323.15 K的K由Van’t Hoff式外推，讨论W₀=0.01000 mol/L时升温后的反应进度。计算每种条件的唯一物理进度、剩余醛/醇、生成缩醛与水浓度、醛转化率、标准反应商回代和水含量对反应进度的局域灵敏度∂ξ/∂W₀，检查C/H/O原子可通过所述反应的整体计量严格守恒，并解释水抑制与放热反应升温的双重影响。不可把K误写成含单位的经验常数或把水活度强行置为1。

### 逐步解答

1. 固定体积、只有一条缩醛化总反应，以反应进度ξ(mol/L)记[A]=A0−ξ、[ROH]=R0−2ξ、[Acetal]=ξ、[H2O]=W0+ξ。

2. 依据给定浓度标准态c°=1 M，无量纲反应商Q=ξ(W0+ξ)c°/[(A0−ξ)(R0−2ξ)²]，不能直接省略标准态做量纲运算。

3. 物理范围0<ξ<min(A0,R0/2)=0.02000 M，保证全部组分浓度正且无负物料。

4. 求lnQ关于ξ的导数1/ξ+1/(W0+ξ)+1/(A0−ξ)+4/(R0−2ξ)>0，因此Q从0严格上升到无穷，各条件有唯一平衡根。

5. 298.15 K下K=20.00，固定A0、R0，分别代入W0=0.01000与0.04000 M，使用保界二分计算。

6. 较低初始水含量的进度ξ=0.0157076851671 M，较高水含量ξ=0.0133611306618 M；水增多造成减少量0.00234655450533 M。

7. 两条件下醛转化率依次0.785384258357与0.668056533090，显示初始水抑制缩醛生成。

8. 低水条件的剩余醛=0.00429231483286、剩余醇=0.0685846296657、缩醛=0.0157076851671、水=0.0257076851671 M。

9. 高水条件的剩余醛=0.00663886933819、剩余醇=0.0732777386764、缩醛=0.0133611306618、水=0.0533611306618 M。

10. 由平衡lnQ(ξ,W0)=lnK，固定温度对W0隐式求导：dξ/dW0=−[1/(W0+ξ)]/[1/ξ+1/(W0+ξ)+1/(A0−ξ)+4/(R0−2ξ)]<0。

11. 298 K时低水、高水条件灵敏度依次-0.0987635489861与-0.0627185054316，符号均为负。

12. Van’t Hoff积分ln[K(T2)/K(T1)]=−ΔH°/R(1/T2−1/T1)。ΔH°<0的放热反应升温后K降低。

13. 323.15 K时K=9.16627176135，低水进度ξ=0.0135024787355 M，较298 K减少0.00220520643163 M。

14. 323 K下剩余醛=0.00649752126449、醇=0.0729950425290、缩醛=0.0135024787355、水=0.0235024787355 M。

15. 回代三个无量纲Q分别20.0000000000、20.0000000000、9.16627176135，应等于各自K。

16. 物种在反应中C/H/O骨架守恒：一分子醛+两分子醇生成一分子缩醛与一分子水；各物种总分子数减少一，但原子数不变。

17. 此处不含酸催化的动力学、水的非理想活度和挥发移除，实际缩醛合成常通过共沸蒸馏带水驱动，不能把该模型直接当实验转化率。

### 独立数值答案向量

- K298: 20.0000000000000 dimensionless
- K323: 9.16627176134744 dimensionless
- extent_low_water_298_M: 0.0157076851671360 mol/L
- extent_high_water_298_M: 0.0133611306618094 mol/L
- extent_low_water_323_M: 0.0135024787355081 mol/L
- conversion_low_water_298: 0.785384258356799 fraction
- conversion_high_water_298: 0.668056533090471 fraction
- conversion_low_water_323: 0.675123936775406 fraction
- aldehyde_remaining_low_water_298_M: 0.00429231483286402 mol/L
- alcohol_remaining_low_water_298_M: 0.0685846296657280 mol/L
- acetal_produced_low_water_298_M: 0.0157076851671360 mol/L
- water_final_low_water_298_M: 0.0257076851671360 mol/L
- aldehyde_remaining_high_water_298_M: 0.00663886933819058 mol/L
- alcohol_remaining_high_water_298_M: 0.0732777386763812 mol/L
- acetal_produced_high_water_298_M: 0.0133611306618094 mol/L
- water_final_high_water_298_M: 0.0533611306618094 mol/L
- aldehyde_remaining_323_M: 0.00649752126449187 mol/L
- alcohol_remaining_323_M: 0.0729950425289838 mol/L
- acetal_produced_323_M: 0.0135024787355081 mol/L
- water_final_323_M: 0.0235024787355081 mol/L
- d_extent_d_initial_water_low_298: -0.0987635489861362 ratio
- d_extent_d_initial_water_high_298: -0.0627185054315819 ratio
- d_extent_d_initial_water_323: -0.130793419137187 ratio
- extent_difference_due_water_M: 0.00234655450532656 mol/L
- extent_difference_due_heating_M: 0.00220520643162786 mol/L
- reaction_quotient_low_water_298: 20.0000000000000 dimensionless
- reaction_quotient_high_water_298: 20.0000000000000 dimensionless
- reaction_quotient_323: 9.16627176134745 dimensionless
- consumed_alcohol_low_water_298_M: 0.0314153703342720 mol/L
- acetal_to_remaining_aldehyde_ratio_298: 3.65949045649458 ratio
- K323_over_K298: 0.458313588067372 ratio
- aldehyde_material_balance_low_water_298_M: 0.0200000000000000 mol/L

## UC-ADV12-P168 二元电解质零电流扩散：Nernst–Einstein反演、双极扩散与液接电势

### 完整题目

在298.15 K，理想1:1强电解质M⁺X⁻的平板液接区厚度L=1.000 mm，左、右端总电解质浓度分别为cL=0.1000 mol/L、cR=0.01000 mol/L。溶液局域电中性[c+]=[c−]=c(x)，D+=1.300×10⁻⁹ m²/s、D−=2.000×10⁻⁹ m²/s，活度系数取1、无对流和反应、离子通量满足Nernst–Planck式J±=−D±[dc/dx±(F c/(RT))dφ/dx]。稳态开路条件是总电流密度F(J+−J−)=0；由该约束消去电场得到双极（互扩散）系数Damb=2D+D−/(D++D−)。设浓度沿厚度线性，且可使用局域理想Nernst–Einstein电导率κ(c)=F² c(D++D−)/(RT)。F=96485.33212 C/mol、R=8.314462618 J/(mol K)。求转移数、Damb、中心浓度c=0.0550 mol/L处电导率、通量、局域电势梯度和跨液接区Δφ=φR−φL；分别以中点局域电场代回两离子通量并验证零电流、扩散系数反演和单位。比较中心局域电场与跨膜平均电场，说明开路不意味着零离子流，也不能把平均电场生搬硬套进局域Nernst–Planck方程。

### 逐步解答

1. 强电解质M⁺X⁻遵循局域电中性，1:1离子在同一点浓度相同为c，左0.1000 M与右0.01000 M须转换为100与10 mol/m³。

2. 对Nernst–Planck式J+=−D+[c′+(F c/RT)φ′]、J−=−D−[c′−(F c/RT)φ′]，开路J+=J−而不是两者分别为0。

3. 由J+−J−=0解出φ′=−(RT/F)[(D+−D−)/(D++D−)]·c′/c。

4. 定义离子转移数t+=D+/(D++D−)、t−=D−/(D++D−)，二者相加等于1，t+−t−=(D+−D−)/(D++D−)。

5. 本题t+=0.393939393939、t−=0.606060606061，差-0.212121212121；阳离子扩散更慢，形成不为零的液接电势。

6. 用电场表达式消去迁移项，可得共同盐通量J+=J−=−Damb dc/dx，其中Damb=2D+D−/(D++D−)。

7. Damb=1.57575757576e-9 m²/s，沿x从左到右的浓度梯度dc/dx=-90000.0000000 mol/m⁴。

8. 故稳定盐通量J=0.000141818181818 mol/(m²s)，两个离子以同一数量向右扩散。

9. 局域电导率κ(c)=F² c(D++D−)/(RT)，取中心浓度c=55.0 mol/m³；它不是整段非均匀液接区的串联等效电导率。

10. 中心κ=0.681601006149 S/m、电阻率=1.46713398451 Ωm；可由κ反演总扩散系数D++D−=3.30000000000e-9 m²/s。

11. 对φ′=−(RT/F)(t+−t−)(c′/c)在两端积分得Δφ=−(RT/F)(t+−t−)ln(cR/cL)。

12. 液接电势Δφ=-0.0125489529636 V，即-12.5489529636 mV；平均电势梯度Δφ/L=-12.5489529636 V/m。

13. 但中心局域电势梯度应直接用c=55.0 mol/m³算，φ′mid=-8.91808531490 V/m，与平均值不相同。

14. 将中点c、c′与φ′mid代入J±，它们应分别等于Damb×正向浓度梯度的共同盐流。

15. 中点J+=0.000141818181818、J−=0.000141818181818 mol/(m²s)，总电流密度F(J+−J−)按代数约束为0。

16. 对平板内非均匀浓度，局域电场随1/c变化，平均场不是局域Nernst–Planck式的可替代值；用平均场会产生虚假的净电流。

17. 本题不含Debye长度尺度的空间电荷层、热扩散、浓差对流与非理想活度系数；真实高浓度盐还需扩展浓度依赖迁移数和热力学因子。

### 独立数值答案向量

- cation_diffusivity_m2_s: 1.30000000000000e-9 m2/s
- anion_diffusivity_m2_s: 2.00000000000000e-9 m2/s
- diffusivity_sum_m2_s: 3.30000000000000e-9 m2/s
- cation_transference_number: 0.393939393939394 fraction
- anion_transference_number: 0.606060606060606 fraction
- transference_number_difference: -0.212121212121212 fraction
- ambipolar_diffusivity_m2_s: 1.57575757575758e-9 m2/s
- midpoint_conductivity_S_m: 0.681601006149276 S/m
- midpoint_resistivity_ohm_m: 1.46713398451321 ohm m
- liquid_junction_potential_V: -0.0125489529636379 V
- liquid_junction_potential_mV: -12.5489529636379 mV
- average_electric_field_V_m: -12.5489529636379 V/m
- local_midpoint_electric_field_V_m: -8.91808531489865 V/m
- ambipolar_salt_flux_mol_m2_s: 0.000141818181818182 mol/(m2 s)
- cation_flux_at_midpoint_mol_m2_s: 0.000141818181818182 mol/(m2 s)
- anion_flux_at_midpoint_mol_m2_s: 0.000141818181818182 mol/(m2 s)
- zero_current_density_A_m2: -2.61524016743724e-15 A/m2
- linear_concentration_gradient_mol_m4: -90000.0000000000 mol/m4
- midpoint_concentration_mol_m3: 55.0000000000000 mol/m3
- diffusivity_ratio_cation_anion: 0.650000000000000 ratio
- transference_ratio_cation_anion: 0.650000000000000 ratio
- diffusion_time_scale_s: 64.2999819268682 s
- conductivity_inverse_sum_D_m2_s: 3.30000000000000e-9 m2/s
- local_dimensionless_potential_log_coefficient_V: 0.00544994102577140 V
- left_to_right_concentration_ratio: 10.0000000000000 ratio
- junction_potential_per_log_concentration_V: 0.00544994102577140 V
- local_field_per_concentration_gradient: 0.0000990898368322072 V m3/mol
- junction_potential_absolute_V: 0.0125489529636379 V
