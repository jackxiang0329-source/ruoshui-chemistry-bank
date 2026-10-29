# 第十二辑第二十八批 · I169/A169/O165/P165

四科各新增1道完整原创待审题。题目独立数值计算与自动测试均不代替跨辑数学同构、化学科学性及人工出版审核。

## UC-ADV12-I169 CeO₂₋δ缺氧平衡的电荷补偿、非稀缺陷分数与氧分压指数

### 题目
在1000 K时，将无掺杂萤石型CeO₂₋δ视为均匀单相，允许0<δ<0.5。每化学式单位有1个Ce位（Ce³⁺或Ce⁴⁺）及2个氧位（O²⁻或空位V_O^{••}）。仅考虑O_O^×+2Ce_Ce^×⇌V_O^{••}+2Ce_Ce′+(1/2)O₂(g)，假设Ce³⁺是局域化小极化子且不发生其他反应。理想位点分数下，平衡常数定义为K=[δ/(2−δ)]·[2δ/(1−2δ)]²·(p_O₂/p°)^{1/2}=1.000×10⁻⁶，其中p°=1 bar。求氧分压0.01000 bar和1.000×10⁻⁶ bar下唯一的δ、Ce³⁺/Ce⁴⁺占位、氧空位和氧占据位点分数、平均Ce价态以及每mol化学式单位相对CeO₂的失氧质量。对各条件计算dlnδ/dln p_O₂并与稀缺陷近似δ≈[K/(2√(p/p°))]^{1/3}对比。核验每化学式单位的Ce守恒、O占位、形式电中性和K回代，说明低氧分压为何有偏离理想−1/6幂律的效应。

### 逐步解析

1. 按每化学式单位定义δ为空缺氧原子数，2δ个Ce⁴⁺各获得1个电子还原成Ce³⁺，所以Ce³⁺分数2δ，Ce⁴⁺分数1−2δ；氧位空缺分数δ/2。

2. 氧位和Ce位应分别归一，氧占据分数1−δ/2；Ce总数为1，氧总数2−δ，不能把空位分数δ/2误用成空位原子数δ。

3. 由O_O^×+2Ce_Ce^×⇌V_O^{••}+2Ce_Ce′+1/2O₂构造理想位点活度：a_V/a_O=δ/(2−δ)，a_CeIII/a_CeIV=2δ/(1−2δ)。

4. 故K=(δ/(2−δ)) [2δ/(1−2δ)]² √(p/p°)，采用p°=1 bar使根号的量纲无量纲。

5. 在δ∈(0,0.5)内三个占据比均严格随δ增加，K的左端从0严格递增至+∞，故每一个正压强存在唯一物理根。

6. 使用保界二分法而不是对稀缺陷三次方程直接取根，分别对p/p°=0.01000与10⁻⁶求δ。

7. p=0.01000 bar得到δ=0.016670944059；p=10⁻⁶ bar得到δ=0.070828909427；后者与前者之比4.2486441786。

8. 较高氧压时Ce³⁺、Ce⁴⁺分数分别0.033341888118、0.96665811188，氧空位、占据分数0.0083354720294、0.99166452797。

9. 较低氧压时Ce³⁺、Ce⁴⁺分数分别0.14165781885、0.85834218115，氧空位、占据分数0.035414454714、0.96458554529。

10. 平均Ce价态为4−2δ，分别3.9666581119和3.8583421811，失氧质量δ×15.999 g/mol分别为0.26671843400、1.1331917219。

11. 求局域斜率时在固定K下对lnδ、lnp隐式微分，得到dlnK/dlnδ=3+δ/(2−δ)+4δ/(1−2δ)，故dlnδ/dlnp=−1/{2[3+δ/(2−δ)+4δ/(1−2δ)]}。

12. 在两个压强下相应斜率-0.16247537798、-0.14850951011，与仅在δ趋0时成立的−1/6有差别。

13. δ≪1时第一比值δ/(2−δ)≈δ/2，CeIII/CeIV≈2δ，故K≈2δ³√(p/p°)。

14. 稀缺陷估值依次0.017099759467、0.079370052598；精确与近似之比分别0.97492272282、0.89238833929。

15. 独立回代K=0.0000010000000000、0.0000010000000000，电荷差2δ−[CeIII]=0.0000000000与0.0000000000，均在机器精度内归零。

16. 空位浓度不是电子导电率本身；此题未给电子迁移率，不能由Ce³⁺含量直接编造电导率。Ce空位、间隙氧、弹性相互作用和非理想活度均可能在真实体系中重要。

### 数值结果

- conditional_equilibrium_K: 0.00000100000000000000 dimensionless
- delta_p0p01: 0.0166709440588520 fraction
- delta_p1eMinus6: 0.0708289094272917 fraction
- vacancy_ratio_high_over_low: 4.24864417859304 ratio
- CeIII_fraction_p0p01: 0.0333418881177040 fraction
- CeIV_fraction_p0p01: 0.966658111882296 fraction
- oxygen_vacancy_site_fraction_p0p01: 0.00833547202942599 fraction
- oxygen_filled_site_fraction_p0p01: 0.991664527970574 fraction
- CeIII_fraction_p1eMinus6: 0.141657818854583 fraction
- CeIV_fraction_p1eMinus6: 0.858342181145417 fraction
- oxygen_vacancy_site_fraction_p1eMinus6: 0.0354144547136458 fraction
- oxygen_filled_site_fraction_p1eMinus6: 0.964585545286354 fraction
- mean_Ce_oxidation_p0p01: 3.96665811188230 oxidation_state
- mean_Ce_oxidation_p1eMinus6: 3.85834218114542 oxidation_state
- oxygen_mass_loss_g_per_mol_p0p01: 0.266718433997573 g/mol
- oxygen_mass_loss_g_per_mol_p1eMinus6: 1.13319172192724 g/mol
- reconstructed_K_p0p01: 0.00000100000000000000 dimensionless
- reconstructed_K_p1eMinus6: 0.00000100000000000000 dimensionless
- logdelta_logoxygenpressure_slope_p0p01: -0.162475377975281 slope
- logdelta_logoxygenpressure_slope_p1eMinus6: -0.148509510114747 slope
- dilute_delta_prediction_p0p01: 0.0170997594667670 fraction
- dilute_delta_prediction_p1eMinus6: 0.0793700525984100 fraction
- actual_over_dilute_p0p01: 0.974922722816752 ratio
- actual_over_dilute_p1eMinus6: 0.892388339285422 ratio
- charge_neutrality_residual_p0p01: 0.00000000000000 charge
- charge_neutrality_residual_p1eMinus6: 0.00000000000000 charge
- Ce_inventory_p0p01: 1.00000000000000 count
- Ce_inventory_p1eMinus6: 1.00000000000000 count
- oxygen_inventory_p0p01: 1.98332905594115 count
- oxygen_inventory_p1eMinus6: 1.92917109057271 count

## UC-ADV12-A169 定量核磁双延迟反演T₁、饱和校正与浓度不确定度

### 题目
在无交换和无化学反应的理想定量¹H NMR实验中，待测物A和内标S各有一个互不重叠、贡献1个质子的信号，接受同一接收增益、线形积分标定与90°脉冲，脉冲间纵向磁化完全去相位，忽略NOE。两者的纵向弛豫T₁未知，内标浓度C_S=0.01000 mol/L。对于重复延迟TR，一质子的积分信号I_i(TR)=k C_i [1−exp(−TR/T₁,i)]，同一未知仪器系数k对两种物质相同。在TR=1.000 s和2.000 s分别记录：A积分I_A1、I_A2以及S积分I_S1、I_S2，实际积分读数分别为I_A1=983.6733507184165、I_A2=1580.301397071394、I_S1=7134.952031398098、I_S2=9179.150013761011（仪器积分单位）。请仅根据这些模拟测量值和已知内标浓度进行反演，不能预先假定任何T₁、待测浓度或仪器k。另假设四次积分的标准不确定度各为2.000积分单位，相互独立，C_S无不确定度。求两个T₁、饱和校正的无限延迟积分、仪器k、C_A及g/L和mg/L（A的摩尔质量100.0 g/mol），不校正的浓度偏差，以及四次信号测量传播出的C_A标准不确定度。使用I(2TR)/I(TR)=1+exp(−TR/T₁)并检查量纲、信号饱和与标准溶液一致性。

### 逐步解析

1. 90°脉冲使可积分信号正比于前一延迟后的恢复磁化，I_i(TR)=k C_i(1−e^{−TR/T₁,i})；题中两个谱峰均只对应一个质子，不能额外乘质子数。

2. 在TR=1.000 s，实测模拟积分A=983.673350718、S=7134.95203140；TR=2.000 s，A=1580.30139707、S=9179.15001376，这些读数就是题设提供的逆问题数据。

3. 令r_i=I_i(2TR)/I_i(TR)，使用1−z²=(1−z)(1+z)可消去未知k和C，得到r_i=1+z_i，z_i=exp(−TR/T₁,i)。

4. 两信号比r_A=1.6065306597、r_S=1.2865047969，满足1<r_i<2，故由T₁=−TR/ln(r_i−1)反演。

5. 计算T₁,A=2.0000000000 s，T₁,S=0.80000000000 s；不是用原设定T₁代入回答。

6. 无限延迟完整恢复积分I_∞=I(TR)/(1−z)=I(TR)²/[2I(TR)−I(2TR)]，必须检查分母为正。

7. A的2I₁−I₂=387.04530437，S的分母5090.7540490；校正后I_A∞=2500.0000000、I_S∞=10000.000000。

8. 内标浓度已知，故k=I_S∞/C_S，进而C_A=C_S(I_A∞/I_S∞)，这是独立基于内标的定量核磁标定。

9. 由此k=1000000.0000，样品与内标浓度比=0.25000000000，C_A=0.0025000000000 mol/L。

10. A摩尔质量100.0 g/mol，正确质量浓度为0.25000000000 g/L，即250.00000000 mg/L；若误以TR=1 s的未校正强度比即浓度比，会得到0.0013786684849 mol/L。

11. 未经饱和校正的浓度/真实浓度比0.55146739397，显示不同T₁引起的系统偏差。

12. 将Q(I₁,I₂)=I₁²/(2I₁−I₂)代入C_A=C_S Q_A/Q_S；对Q作全微分，dlnQ/dI₁=2/I₁−2/(2I₁−I₂)，dlnQ/dI₂=1/(2I₁−I₂)。

13. 四个积分不确定度均为2.000且彼此独立，对四个对数灵敏度系数的乘积逐项平方求和，得到u(C_A)/C_A。

14. 计算相对标准不确定度0.0081362378334、C_A标准不确定度0.000020340594584 mol/L；质量浓度标准不确定度为0.0020340594584 g/L，即2.0340594584 mg/L。

15. 回代无限恢复信号与仪器常数得到规范化比1.0000000000和1.0000000000，即各自校准前后浓度一致。

16. 本实验是理想模拟；实际定量核磁还应校正基线、磁化转移、峰重叠、脉冲宽度、化学交换和内标称量不确定度。

### 数值结果

- analyte_integral_TR1: 983.673350718416 integral
- analyte_integral_TR2: 1580.30139707139 integral
- standard_integral_TR1: 7134.95203139810 integral
- standard_integral_TR2: 9179.15001376101 integral
- analyte_double_to_single_integral_ratio: 1.60653065971263 ratio
- standard_double_to_single_integral_ratio: 1.28650479686019 ratio
- analyte_denominator_2I1_minus_I2: 387.045304365439 integral
- standard_denominator_2I1_minus_I2: 5090.75404903519 integral
- reconstructed_analyte_T1_s: 2.00000000000000 s
- reconstructed_standard_T1_s: 0.800000000000000 s
- analyte_infinite_TR_integral: 2500.00000000000 integral
- standard_infinite_TR_integral: 10000.0000000000 integral
- instrument_proportionality_constant: 1000000.00000000 integral/(mol/L)
- analyte_to_standard_concentration_ratio: 0.250000000000000 ratio
- analyte_molarity_M: 0.00250000000000000 mol/L
- analyte_mass_concentration_g_L: 0.250000000000000 g/L
- analyte_to_standard_ratio_reconstructed: 0.250000000000000 ratio
- naive_analyte_molarity_M: 0.00137866848493117 mol/L
- naive_to_corrected_concentration_ratio: 0.551467393972467 ratio
- analyte_concentration_relative_uncertainty: 0.00813623783341959 fraction
- analyte_concentration_standard_uncertainty_M: 0.0000203405945835490 mol/L
- analyte_mass_concentration_standard_uncertainty_g_L: 0.00203405945835490 g/L
- normalized_analyte_infinite_TR_response: 1.00000000000000 ratio
- normalized_standard_infinite_TR_response: 1.00000000000000 ratio
- analyte_TR1_saturation_fraction: 0.393469340287367 fraction
- standard_TR1_saturation_fraction: 0.713495203139810 fraction
- positive_signal_check_analyte: 1.00000000000000 flag
- positive_signal_check_standard: 1.00000000000000 flag
- analyte_mass_concentration_mg_L: 250.000000000000 mg/L
- analyte_mass_concentration_standard_uncertainty_mg_L: 2.03405945835490 mg/L

## UC-ADV12-O165 环氧中间体的串联开环和竞争消除：解析浓度、峰时与终产率

### 题目
某假想含邻位卤代醇的有机底物A在碱过量、固定溶剂与温度下发生两条互斥的拟一级反应：A→B（环氧中间体，k₁=0.1200 s⁻¹）与A→D（不可逆消除副产物，k₃=0.03000 s⁻¹）；环氧中间体进一步不可逆被溶剂开环B→C（k₂=0.04000 s⁻¹）。B、C、D均不返回A，D也不再转化；外加碱和溶剂是过量储库，四种产物按A、B、C、D骨架物质的量1:1计量。初始[A]₀=0.01000 mol/L而[B]₀=[C]₀=[D]₀=0。推导A、B、C、D随时间的解析解；求8.000 s与20.00 s各组分浓度、A转化率和瞬时中间体B的最大浓度及峰值时刻，核验峰处dB/dt=0和两条路径对终产物的分支极限。推导[ABCD]守恒、B短时增长斜率、总A半衰期及长期C/D比。特别说明B可能先升后降而C和D持续积累，不能把B当作最终总产率。

### 逐步解析

1. 把反应写成A→B→C并联A→D；由溶剂/碱过量，两条从A出发的拟一级反应叠加成a=k₁+k₃。

2. ODE为dA/dt=−aA，dB/dt=k₁A−k₂B，dD/dt=k₃A，dC/dt=k₂B；对四式相加得d(A+B+C+D)/dt=0。

3. 由初始A₀=0.01000 mol/L可得A(t)=A₀e^{−at}；这里a=0.1500 s⁻¹，不应误用k₁。

4. 以积分因子e^{k₂t}解B方程，得到B(t)=A₀ k₁ [e^{−k₂t}−e^{−at}]/(a−k₂)，仅对a≠k₂使用此表达式。

5. 由D'=k₃A得D(t)=A₀(k₃/a)(1−e^{−at})；利用质量守恒C=A₀−A−B−D，等价于对k₂B积分。

6. 8 s得到A=0.0030119421191、B=0.0046358708199、C=0.00095457548476、D=0.0013976115762 mol/L。

7. 8 s总浓度0.010000000000 mol/L，A的转化率0.69880578809；B占初始骨架总量比0.46358708199。

8. 由dB/dt=k₁A−k₂B=0并代入解析解，得到e^{(a−k₂)t*}=a/k₂，故t*=ln(a/k₂)/(a−k₂)。

9. 得B的峰时t*=12.015962182 s，峰浓度B*=0.0049471074607 mol/L。

10. 峰时A=0.0016490358202、C=0.0017336638831、D=0.0016701928360 mol/L，且B生成、消耗通量同为0.00019788429843 mol/(L s)。

11. 计算t=20.00 s时分布并检查中间体是否已开始回落；与t=8 s的初始增长段区分。

12. 20 s时A=0.00049787068368、B=0.0043586388627、C=0.0032430645903、D=0.0019004258633 mol/L。

13. 在t→∞时A和B均消失，A→B的初始分支比例k₁/a最终全部进入C，而A→D分支k₃/a最终全部进入D。

14. 因此终态C∞=0.0080000000000 mol/L，D∞=0.0020000000000 mol/L，最终分支比例0.80000000000:0.20000000000。

15. A的半衰时间ln2/a=4.6209812037 s；D∞/C∞=k₃/k₁=0.25000000000，不是k₃/k₂。

16. 短时B'(0)=k₁A₀=0.001200 mol/(L s)，D'(0)=k₃A₀=0.0003000 mol/(L s)，C'(0)=0，符合串联延迟产生机理。

17. 本题中环氧化、开环和消除全用理想拟一级模型；真实化学合成时还须核查立体化学、酸碱催化、多步消除及中间体的副反应。

### 数值结果

- A_to_B_rate_constant_s: 0.120000000000000 s^-1
- B_to_C_rate_constant_s: 0.0400000000000000 s^-1
- A_to_D_rate_constant_s: 0.0300000000000000 s^-1
- A_disappearance_rate_constant_s: 0.150000000000000 s^-1
- A_concentration_t8_M: 0.00301194211912202 mol/L
- B_concentration_t8_M: 0.00463587081994351 mol/L
- C_concentration_t8_M: 0.000954575484758869 mol/L
- D_concentration_t8_M: 0.00139761157617560 mol/L
- total_concentration_t8_M: 0.0100000000000000 mol/L
- A_conversion_t8: 0.698805788087798 fraction
- B_peak_time_s: 12.0159621816575 s
- B_peak_concentration_M: 0.00494710746073207 mol/L
- A_concentration_at_B_peak_M: 0.00164903582024402 mol/L
- C_concentration_at_B_peak_M: 0.00173366388307272 mol/L
- D_concentration_at_B_peak_M: 0.00167019283595120 mol/L
- B_formation_flux_at_peak_M_s: 0.000197884298429283 mol/(L s)
- B_consumption_flux_at_peak_M_s: 0.000197884298429283 mol/(L s)
- A_concentration_t20_M: 0.000497870683678640 mol/L
- B_concentration_t20_M: 0.00435863886272026 mol/L
- C_concentration_t20_M: 0.00324306459033682 mol/L
- D_concentration_t20_M: 0.00190042586326427 mol/L
- final_C_concentration_M: 0.00800000000000000 mol/L
- final_D_concentration_M: 0.00200000000000000 mol/L
- eventual_C_fraction: 0.800000000000000 fraction
- eventual_D_fraction: 0.200000000000000 fraction
- A_half_life_s: 4.62098120373297 s
- final_D_over_C_ratio: 0.250000000000000 ratio
- B_fraction_t8: 0.463587081994351 fraction
- B_fraction_t20: 0.435863886272026 fraction
- C_fraction_t20: 0.324306459033682 fraction

## UC-ADV12-P165 对称正规溶液的双相共存、旋节线、杠杆定则与自由能驱动力

### 题目
某假想二元分子液体A/B在常压下混合，可近似视为对称正规溶液。摩尔混合Gibbs自由能g(x,T)=RT[xlnx+(1−x)ln(1−x)]+Ωx(1−x)，其中x为B摩尔分数，Ω=10000 J/mol、R=8.314462618 J/(mol K)；每个端点纯液的混合g取0，0ln0按0处理。T=400.0 K，总体x̄=0.3000。求临界温度、两旋节组成、通过共同切线确定的两个双相共存组成、两个相的摩尔分率、各相组成与总体物料守恒。核验g''(x̄)的符号、共存两端的化学势平衡，以及不发生相分离与完全双相分离时的混合自由能差；求x=0.500时混合自由能、相对两相的自由能峰差，并判断T=650 K时x=0.5是否局部稳定。说明为什么总体x̄=0.3在旋节区内时不存在经典成核能垒，且正规溶液模型只用于给定温压与Ω的理想化比较。

### 逐步解析

1. 由g(x)=RT[xlnx+(1−x)ln(1−x)]+Ωx(1−x)，一阶导数g'=RT ln[x/(1−x)]+Ω(1−2x)，二阶导数g''=RT/[x(1−x)]−2Ω。

2. 临界点满足g''(0.5,T_c)=0，故T_c=Ω/(2R)，温度400 K低于T_c才可能出现不互溶。

3. 计算T_c=601.36177522 K，400 K下RT=3325.7850472 J/mol。

4. 旋节组成是g''=0的两根x_s±=[1±√(1−2RT/Ω)]/2；只有当T<T_c时根为实数。

5. 旋节下界0.21067190313，上界0.78932809687，不等于真正的双相共存组成。

6. 对称性g(x)=g(1−x)导致两共存相分别x_b与1−x_b，共同切线是水平线；故由g'(x_b)=0且0<x_b<x_s−求较小根。

7. 在保界二分法中排除平凡驻点x=0.5，否则会把自由能极大值误当共存相。

8. 求得共存两相B摩尔分数x_b=0.070089278490、x_r=0.92991072151，两端导数g'分别0.0000000000、0.0000000000 J/mol。

9. 两端自由能-192.54874079、-192.54874079 J/mol相等；共同切线斜率0意味着两组分化学势在两相中分别相等。

10. 总体B比例x̄=0.3介于共存组成之间；按杠杆定则φ_r=(x̄−x_b)/(x_r−x_b)，φ_b=1−φ_r。

11. 富B相所占摩尔分率0.26739356569，贫B相0.73260643431，两相加权B比例0.30000000000，回到0.3000。

12. 均匀相g(x̄)=68.396638358 J/mol，完全分离后的双相自由能-192.54874079 J/mol，降低量260.94537915 J/mol。

13. g''(x̄)=-4162.9283467 J/mol <0，故在理想连续极限下小幅组成涨落可以自发放大，属于旋节分解而非跨越经典成核能垒。

14. 在x=0.5，g=194.74147138 J/mol，相对共存两相的自由能峰差387.29021218 J/mol；并非真正的界面成核能垒。

15. 当升至650 K时g''(0.5)=1617.6028068 J/mol>0，且650 K高于临界温度，局部均匀相稳定。

16. 过剩混合焓Ωx(1−x)和理想构型项RT[xlnx+(1−x)ln(1−x)]在x̄=0.3各自为正和负，不能只用混合焓判断相分离。

17. 忽略了界面能、有限粒径、组成依赖Ω、非对称组分和高阶涨落，故结果仅适用于题设正规溶液热力学模型。

### 数值结果

- critical_temperature_K: 601.361775224714 K
- RT_at_400_J_mol: 3325.78504720000 J/mol
- spinodal_discriminant: 0.578656193745474 ratio
- spinodal_B_lower: 0.210671903127263 fraction
- spinodal_B_upper: 0.789328096872737 fraction
- binodal_B_lower: 0.0700892784900177 fraction
- binodal_B_upper: 0.929910721509982 fraction
- gprime_at_binodal_lower_J_mol: 0.00000000000000 J/mol
- gprime_at_binodal_upper_J_mol: 0.00000000000000 J/mol
- mixed_g_at_binodal_lower_J_mol: -192.548740792871 J/mol
- mixed_g_at_binodal_upper_J_mol: -192.548740792871 J/mol
- homogeneous_g_at_x0p3_J_mol: 68.3966383575710 J/mol
- free_energy_gain_from_separation_J_mol: 260.945379150442 J/mol
- high_B_phase_molar_fraction: 0.267393565694830 fraction
- low_B_phase_molar_fraction: 0.732606434305170 fraction
- reconstructed_overall_B_fraction: 0.300000000000000 fraction
- gsecond_at_binodal_lower_J_mol: 31027.1522981171 J/mol
- gsecond_at_x0p3_J_mol: -4162.92834666667 J/mol
- gsecond_at_x0p5_J_mol: -6696.85981120000 J/mol
- mixed_g_at_x0p5_J_mol: 194.741471384895 J/mol
- center_to_coexistence_barrier_J_mol: 387.290212177766 J/mol
- excess_enthalpy_at_x0p3_J_mol: 2100.00000000000 J/mol
- ideal_entropy_g_component_at_x0p3_J_mol: -2031.60336164243 J/mol
- gsecond_at_x0p5_T650_J_mol: 1617.60280680000 J/mol
- temperature_below_critical_K: 201.361775224714 K
- spinodal_discriminant_nonnegative: 0.334842990560000 ratio
- gprime_at_x0p5_J_mol: 0.00000000000000 J/mol
- gain_over_RT: 0.0784612882212979 ratio
- overall_minus_binodal_lower: 0.229910721509982 fraction
- spinodal_upper_minus_overall: 0.489328096872737 fraction
