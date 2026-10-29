# 第十二辑第三十批 · I171/A171/O167/P167

本批新创四题均有完整分步推导、无量纲平衡/化学模型检查及独立数值见证函数，属于awaiting_expert_review草稿，不代表跨辑排重和学术出版审定。

## UC-ADV12-I171 Fe(II)低自旋—高自旋热平衡的磁化率、自旋熵与压力响应

### 完整题目

考虑理想无相互作用的六配位Fe(II)分子晶体，低自旋态LS为d⁶、S=0、简并度gLS=1；高自旋态HS为d⁶、S=2、自旋简并度gHS=5，两个态均不发生价态改变。以1 bar为基准压强，HS相对LS的摩尔焓差ΔH=+12.000 kJ/mol、额外振动熵差ΔS_vib=+18.00 J/(mol K)，HS摩尔体积较大ΔV=+5.000 cm³/mol，均假定与温度、压力无关。忽略自旋轨道耦合、交换相互作用、磁滞及LS抗磁修正。每个Fe独立选择LS或HS，温度260.0 K和400.0 K、压强1 bar；另比较300.0 K下1 bar与500.0 MPa（压力仅以ΔV项改变两态G）。自旋朗德因子g=2.000，R=8.314462618 J/(mol K)、kB=1.380649×10⁻²³ J/K、NA=6.02214076×10²³ mol⁻¹、μB=9.2740100783×10⁻²⁴ J/T、μ0=4π×10⁻⁷ H/m。推导HS分数的平衡、混合自由能凸性、熵及热容忽略假设的范围；求260/400 K的HS分数、摩尔Curie量χMT（SI m³ K/mol）、摩尔磁化率χM（SI m³/mol）、有效磁矩μeff（以μB为单位）、平衡混合熵/焓/自由能、半转换温度、磁性及压力稳定性的交叉校验。求300 K高压HS分数和局域dpHS/dP，解释为何不能把五重自旋简并同时计入两次。

### 解答及模型推导

1. Fe²⁺始终为d⁶，LS态S=0简并度1，HS态S=2简并度2S+1=5；不应把配位场转换误写成氧化还原反应。

2. 以LS单态为零能量，HS/LS分子配分函数比K(T,P)=5 exp(ΔS_vib/R) exp{−[ΔH+(P−P₀)ΔV]/(RT)}。

3. 注意ΔS_vib是额外振动熵，ln5仅表示电子自旋多重性，不能再把Rln5重复加进ΔS_vib。

4. 对独立分子占位，pHS=K/(1+K)，pLS=1−pHS，宏观配分函数(1+K)^N给出同样的平均分数。

5. 260 K时K=0.16919701597、pHS=0.14471215173；400 K时K=1.1807734052、pHS=0.54144708587。

6. 高温使HS分数增加0.39673493415；半转换温度满足ΔH=T(ΔS_vib+Rln5)，即T½=382.38954217 K。

7. 每mol Fe的自旋混合熵S=−R[p ln p+(1−p)ln(1−p)]+p(ΔS_vib+Rln5)，式中p∈(0,1)。

8. 在1 bar相对于全LS的平均焓H=pΔH，自由能G=H−TS；对于给定温度，平衡态G允许为负，这是混合贡献，不是负的绝对晶体焓。

9. 260 K得到S=7.9787159204 J/(mol K)、H=1.7365458207 kJ/mol、G=-0.33792031859 kJ/mol。

10. 400 K得到S=22.726029355 J/(mol K)、H=6.4973650304 kJ/mol、G=-2.5930467117 kJ/mol。

11. 对任意暂定分数p，自由能G(p)=pΔH−Tp(ΔS_vib+Rln5)+RT[p lnp+(1−p)ln(1−p)]。

12. 其二阶导G''=RT/[p(1−p)]>0；260与400 K的数值曲率分别17465.870276和13395.184445 J/mol，确保平衡解唯一。

13. HS自旋仅取S=2、g=2，纯HS摩尔Curie常数C=μ₀ NA (gμB)² S(S+1)/(3kB)，单位m³ K/mol；LS按题设无磁贡献。

14. 纯HS磁矩μspin=g√[S(S+1)]=4.8989794856 μB，纯HS Curie常数C=0.000037714000089 m³ K/mol。

15. 两温度下χMT=p C，依次0.0000054576741031、0.000020420135445 m³ K/mol，χM=χMT/T依次2.0991054243e-8、5.1050338612e-8 m³/mol。

16. 混合物平均有效磁矩μeff=μspin√p，260与400 K依次1.8636232563、3.6048203923 μB；不可将p线性乘在μeff上。

17. 300 K时1 bar与500 MPa下pHS分别0.26181546861、0.11520701417；P升高引入Δ(PΔV)=2499.5000000 J/mol而稳定体积较小的LS态。

18. 在300 K有∂lnK/∂P=−ΔV/(RT)=-2.0045392507e-9 Pa⁻¹、高压dpHS/dP=-2.0433142173e-10 Pa⁻¹。

19. 本题不包含铁位点之间的协同相互作用，不能由单分子两态模型外推出一阶突变、磁滞或团簇有序。

### 全部计算结果及单位

- HS_fraction_260K: 0.144712151725560 fraction
- HS_fraction_400K: 0.541447085870589 fraction
- HS_fraction_increase: 0.396734934145030 fraction
- HS_to_LS_K_260K: 0.169197015972481 ratio
- HS_to_LS_K_400K: 1.18077340517737 ratio
- molar_Curie_chiT_260_SI: 0.00000545767410305966 m3 K/mol
- molar_Curie_chiT_400_SI: 0.0000204201354447217 m3 K/mol
- molar_susceptibility_260_SI: 2.09910542425372e-8 m3/mol
- molar_susceptibility_400_SI: 5.10503386118042e-8 m3/mol
- effective_moment_260_muB: 1.86362325629764 muB
- effective_moment_400_muB: 3.60482039232111 muB
- pure_HS_spin_only_moment_muB: 4.89897948556636 muB
- pure_HS_Curie_constant_SI: 0.0000377140000890175 m3 K/mol
- half_conversion_temperature_K: 382.389542166931 K
- mix_entropy_260_J_mol_K: 7.97871592037628 J/(mol K)
- relative_H_260_kJ_mol: 1.73654582070671 kJ/mol
- relative_G_260_kJ_mol: -0.337920318591117 kJ/mol
- G_curvature_260_J_mol: 17465.8702761343 J/mol
- mix_entropy_400_J_mol_K: 22.7260293554243 J/(mol K)
- relative_H_400_kJ_mol: 6.49736503044707 kJ/mol
- relative_G_400_kJ_mol: -2.59304671172266 kJ/mol
- G_curvature_400_J_mol: 13395.1844446787 J/mol
- HS_fraction_300K_1bar: 0.261815468608894 fraction
- HS_fraction_300K_500MPa: 0.115207014172509 fraction
- pressure_G_HS_minus_LS_shift_J_mol: 2499.50000000000 J/mol
- pressure_logK_derivative_per_Pa: -2.00453925074905e-9 Pa^-1
- pressure_HS_fraction_derivative_per_Pa: -2.04331421727097e-10 Pa^-1
- HS_to_LS_K_300K_500MPa: 0.130207874630430 ratio
- HS_fraction_highP_over_lowP: 0.440031350266047 ratio
- mean_spin_multiplicity_260: 1.57884860690224 dimensionless

## UC-ADV12-A171 非线性荧光标准加入法的饱和响应、三点逆解与误差传播

### 完整题目

某假想分析物的荧光探针在固定基体内满足饱和响应F(s)=Fmax(Cx+s)/(Kd+Cx+s)，其中未知原样浓度Cx>0、未知饱和响应Fmax>0及未知半饱和浓度Kd>0，响应扣除了空白、无荧光内滤效应，所加标准溶液引起的总体积变化已准确校正。向等体积平行样中分别加入s=0、0.01000、0.02000 mol/L的分析物，理想读数依次为F0=285.71428571、F1=375.00000000、F2=444.44444444（仪器积分单位），这些读数为题目完整输入，不预告模拟数据的生成参数。假设三次测量彼此独立，标准不确定度均uF=0.5000积分单位，加入标准浓度无误差。以三个观测点构造代数逆解求Fmax、Kd和Cx，再求原样浓度及其一阶传播标准不确定度、浓度相对不确定度及斜率/残差；必须采用对三观测值的全Jacobian，不能把饱和信号当作直接线性比值。校验0<Cx、0<Kd、F2<Fmax，检验三点可辨识且增量标准加入数据无自相矛盾。

### 解答及模型推导

1. 题设探针有可饱和非线性响应，F=Fmax c/(Kd+c)，其中c=Cx+s；标准加入的三组s完全已知。

2. 输入数据为F0=285.71428571、F1=375.00000000、F2=444.44444444，其增量递减，符合响应饱和而非简单Beer–Lambert线性。

3. 对等间距加入量0、h、2h（h=0.01000 M），定义G(s)=F(s)/(Fmax−F(s))=(Cx+s)/Kd，故G0−2G1+G2=0。

4. 以三点等差条件消去Fmax，得Fmax=[F1(F0+F2)−2F0F2]/[2F1−F0−F2]；分母为零时本反演无法使用。

5. 本题分母2F1−F0−F2=19.841269841>0，所得Fmax=1000.0000000，并满足F2<Fmax。

6. 计算线性化变量G0=0.40000000000、G1=0.60000000000、G2=0.80000000000，二阶差分-1.1102230246e-16接近0。

7. 由G(s)=(Cx+s)/Kd，斜率m=(G2−G0)/(2h)=1/Kd，截距G0=Cx/Kd；从而Kd=1/m、Cx=G0/m。

8. 反演m=20.000000000 M⁻¹、Kd=0.050000000000 mol/L、Cx=0.020000000000 mol/L（20.000000000 mmol/L）。

9. 在原样附近dF/dc=Fmax Kd/(Kd+c)²，响应随浓度增加单调但灵敏度逐渐降低。

10. 在s=0处dF/dc=10204.081633 积分单位/(mol/L)；F0/其单次噪声标准差=571.42857143。

11. 为传播三次读数不确定度，把θ=(Cx,Kd,Fmax)作为待估参数，对每次加入量s_j求观测偏导。

12. Jacobian每行分别为∂F/∂Cx=Fmax Kd/(Kd+c)²，∂F/∂Kd=−Fmax c/(Kd+c)²，∂F/∂Fmax=c/(Kd+c)。

13. 因三参数恰由三个独立读数确定，局部测量扰动满足dθ=J⁻¹dF，因此u(Cx)²=uF² Σ_j [(J⁻¹)₁j]²。

14. 三个独立敏感度∂Cx/∂F0=0.00058800000000、∂Cx/∂F1=-0.0010240000000、∂Cx/∂F2=0.00048600000000 mol/L/积分单位。

15. 得到u(Cx)=0.00063845829934 mol/L，即0.63845829934 mmol/L；相对标准不确定度0.031922914967。

16. 由饱和曲线反演出的浓度和线性化点必须回代全部三条响应公式，以判断误差来自统计不确定度还是模型失配。

17. 这里假设同一基体和同一Fmax,Kd，实际荧光测量应另查光漂白、淬灭、散射、移液和非线性曲线的参数稳定性。

### 全部计算结果及单位

- fluorescence_F0: 285.714285714286 integral
- fluorescence_F1: 375.000000000000 integral
- fluorescence_F2: 444.444444444444 integral
- inferred_Fmax: 999.999999999997 integral
- saturation_ratio_G0: 0.400000000000001 ratio
- saturation_ratio_G1: 0.600000000000003 ratio
- saturation_ratio_G2: 0.800000000000004 ratio
- linearized_slope_per_M: 20.0000000000001 M^-1
- inferred_Kd_M: 0.0499999999999997 mol/L
- inferred_unknown_concentration_M: 0.0200000000000000 mol/L
- unknown_concentration_mM: 20.0000000000000 mmol/L
- saturation_Fmax_denominator: 19.8412698412699 integral
- F2_to_F0_ratio: 1.55555555555556 ratio
- raw_F0_signal_to_noise: 571.428571428571 ratio
- transformed_line_second_difference: -1.11022302462516e-16 dimensionless
- response_derivative_F0_per_M: 10204.0816326531 integral/M
- dCx_dF0_M_per_unit: 0.000587999999999999 M/integral
- dCx_dF1_M_per_unit: -0.00102400000000000 M/integral
- dCx_dF2_M_per_unit: 0.000485999999999998 M/integral
- unknown_standard_uncertainty_M: 0.000638458299343033 mol/L
- unknown_relative_uncertainty: 0.0319229149671517 fraction
- unknown_standard_uncertainty_mM: 0.638458299343033 mmol/L
- concentration_after_second_spike_M: 0.0400000000000000 mol/L
- G0_from_inversion: 0.400000000000001 ratio
- G2_from_inversion: 0.800000000000004 ratio
- remaining_response_headroom_Fmax_minus_F2: 555.555555555553 integral
- Kd_plus_original_concentration_M: 0.0699999999999997 mol/L
- F1_over_Fmax: 0.375000000000001 fraction

## UC-ADV12-O167 Diels–Alder内/外型双通道的Eyring选择性反转与产率预测

### 完整题目

某理想假想Diels–Alder反应中，过量亲双烯体与单一二烯底物的活度恒定，可把内型(endo)和外型(exo)两条不可逆平行路径均视为准一级。两路径均服从k(T)=(kB T/h)exp(ΔS‡/R−ΔH‡/(RT))，不含额外透射系数。内型：ΔH‡=70.00 kJ/mol、ΔS‡=−80.00 J/(mol K)；外型：ΔH‡=74.00 kJ/mol、ΔS‡=−70.00 J/(mol K)。R=8.314462618 J/(mol K)，kB=1.380649×10⁻²³ J/K，h=6.62607015×10⁻³⁴ J·s。起始二烯浓度0.02000 mol/L，产物不互变也不逆反应。分别在298.15 K反应1800.0 s和450.0 K反应2.000 s。求两通道Eyring速率常数、总消耗常数、转化率、内/外分支和浓度、表观混合活化焓，确定两通道速率何时相等及升温导致内/外选择性反转的条件。核验物料守恒、产物比与速率比、ΔG‡(T)=ΔH‡−TΔS‡及指数中的量纲。不要将最终内型/外型分支与平衡热力学稳定度混淆。

### 解答及模型推导

1. 反应物只有一个被计数的二烯底物，亲双烯体过量，故有效速率方程为−d[A]/dt=(kendo+kexo)[A]。

2. 每个速率按Eyring关系从同一基元kBT/h乘热力学活化因子得到，指数ΔS‡/R−ΔH‡/(RT)均为无量纲。

3. 不能把路径活化熵当作产物的平衡熵，内/外型产物比在互斥不可逆路径下取决于相应速率之比。

4. 298.15 K时kendo=0.00022444143361 s⁻¹、kexo=0.00014882282835 s⁻¹、总速率0.00037326426196 s⁻¹。

5. 对应选择性比kendo/kexo=1.5081115988，内/外型分支分数0.60129365836和0.39870634164。

6. 令t=1800.0 s，由[A](t)=A0 exp(−(kendo+kexo)t)得到转化率X=1−exp(−kt)。

7. 298.15 K下转化率X=0.48925031985，内型产物0.0058836622935 mol/L、外型产物0.0039013441035 mol/L，剩余底物0.010214993603 mol/L。

8. 对每条通道有ΔG‡(T)=ΔH‡−TΔS‡；在298.15 K求内外型活化Gibbs自由能分别为ΔG‡endo=70.00+0.08000T、ΔG‡exo=74.00+0.07000T kJ/mol。

9. 对应数值为93.852000000和94.870500000 kJ/mol。

10. 对总速率kΣ/T=(kB/h)[exp(ΔSendo/R−Hendo/RT)+exp(ΔSexo/R−Hexo/RT)]，求−R dln(kΣ/T)/d(1/T)得到两路径分支权重的活化焓。

11. 298.15 K表观活化焓=71.594825367 kJ/mol，不可简单无权重平均70和74 kJ/mol。

12. 450.0 K时kendo=4.6571514420 s⁻¹、kexo=5.3230153225 s⁻¹、总速率=9.9801667645 s⁻¹。

13. 高温内/外型比=0.87490851704，分支=0.46664064358与0.53335935642，已转为外型占优。

14. 450.0 K、t=2 s，转化率=0.99999999786，内型=0.0093328128515 mol/L、外型=0.010667187106 mol/L、残余底物=4.2891110138e-11 mol/L。

15. 450.0 K的表观活化焓=72.133437426 kJ/mol，内外通道活化Gibbs自由能分别106.00000000、105.50000000 kJ/mol。

16. 因两通道的Eyring前因子相同，ln(kendo/kexo)=(ΔSendo−ΔSexo)/R−(ΔHendo−ΔHexo)/(RT)=−10/R+4000/(RT)。

17. 令速率比等于1，选择性反转温度Tcross=4000/10=400.00000000 K；低于此温度内型占优，高于此温度外型占优。

18. 两温度最终产物内/外型比应严格等于相应速率比：298 K为1.5081115988、450 K为0.87490851704。

19. 把两产物和剩余[A]相加，298 K=0.020000000000 mol/L、450 K=0.020000000000 mol/L，均恢复初始0.02000 mol/L。

20. 实际Diels–Alder反应还可能涉及溶剂活度、逆环加成、次级轨道作用、底物构象和产物异构化；这些均不在理想模型内。

### 全部计算结果及单位

- k_endo_298_s: 0.000224441433607570 s^-1
- k_exo_298_s: 0.000148822828350343 s^-1
- total_k_298_s: 0.000373264261957913 s^-1
- endo_exo_rate_ratio_298: 1.50811159884163 ratio
- endo_fraction_298: 0.601293658359601 fraction
- exo_fraction_298: 0.398706341640399 fraction
- conversion_298: 0.489250319851897 fraction
- endo_product_298_M: 0.00588366229354704 mol/L
- exo_product_298_M: 0.00390134410349090 mol/L
- unreacted_diene_298_M: 0.0102149936029621 mol/L
- Eyring_weighted_activation_enthalpy_298_kJ_mol: 71.5948253665616 kJ/mol
- endo_deltaG_activation_298_kJ_mol: 93.8520000000000 kJ/mol
- exo_deltaG_activation_298_kJ_mol: 94.8705000000000 kJ/mol
- k_endo_450_s: 4.65715144196365 s^-1
- k_exo_450_s: 5.32301532249789 s^-1
- total_k_450_s: 9.98016676446153 s^-1
- endo_exo_rate_ratio_450: 0.874908517035459 ratio
- endo_fraction_450: 0.466640643575951 fraction
- exo_fraction_450: 0.533359356424049 fraction
- conversion_450: 0.999999997855444 fraction
- endo_product_450_M: 0.00933281285150429 mol/L
- exo_product_450_M: 0.0106671871056046 mol/L
- unreacted_diene_450_M: 4.28911101383190e-11 mol/L
- Eyring_weighted_activation_enthalpy_450_kJ_mol: 72.1334374256962 kJ/mol
- endo_deltaG_activation_450_kJ_mol: 106.000000000000 kJ/mol
- exo_deltaG_activation_450_kJ_mol: 105.500000000000 kJ/mol
- selectivity_equal_rate_temperature_K: 400.000000000000 K
- product_ratio_450: 0.874908517035459 ratio
- product_ratio_298: 1.50811159884163 ratio
- log_endo_exo_rate_ratio_residual_298: 4.16333634234434e-15 dimensionless
- product_mass_balance_450_M: 0.0200000000000000 mol/L
- product_mass_balance_298_M: 0.0200000000000000 mol/L

## UC-ADV12-P167 N₂O₄理想气体绝热恒容解离：温度—转化率耦合的唯一平衡解

### 完整题目

一理想、绝热、刚性密闭反应器体积V=0.02500 m³，初始含1.000 mol N₂O₄纯气体、温度T₀=300.0 K，反应N₂O₄(g)⇌2NO₂(g)，无惰性气体。用ξ表示初始每1 mol N₂O₄解离的反应进度，0<ξ<1。取理想气体恒定Cv(N₂O₄)=75.00 J/(mol K)、Cv(NO₂)=35.00 J/(mol K)，基准温度Tref=300.0 K时反应内能ΔrUref=+55.00 kJ/mol。无壁面功与热交换、无其他反应。在固定浓度标准态c°=40.00 mol/m³，300.0 K时平衡常数Kc(Tref)=0.1000，定义Kc=[(cNO₂/c°)²]/(cN₂O₄/c°)。采用恒容标准态Van’t Hoff形式dlnKc/dT=ΔrU(T)/(RT²)，其中ΔrU(T)=ΔrUref+ΔCv(T−Tref)、ΔCv=2Cv(NO₂)−Cv(N₂O₄)，R=8.314462618 J/(mol K)。求绝热平衡ξ与最终温度、各物种量、平衡常数与浓度反应商、恒容能量守恒残差和压力（总压及分压），并与300 K外加恒温浴的等温平衡进度比较。把所得Kc转成p°=1.000 bar的无量纲Kp，独立用分压验证，说明内能与焓差及温度反馈的区别。所有定容气相标准态和热容为题设近似，不应用常压ΔH盲代。

### 解答及模型推导

1. 选定每初始1 mol N₂O₄的反应进度ξ，定容无惰性气体的摩尔数nN2O4=1−ξ、nNO2=2ξ、总n=1+ξ。

2. 气体总内能相对于300 K纯N₂O₄基准为U=[75+(2×35−75)ξ](T−300)+ξ×55000 J。

3. 反应热容差ΔCv=2Cv(NO₂)−Cv(N₂O₄)=−5 J/(mol K)；绝热刚性容器无热和体积功，因此令U=0。

4. 对任意ξ可解能量约束T(ξ)=300−55000ξ/[75−5ξ]，使温度下降，不能擅自保持300 K。

5. 理想气体浓度由c_i=n_i/V计算，而c°=40 mol/m³，因此浓度形式反应商Q_c=4ξ²/(1−ξ)。

6. 依据给定恒容基准，ΔrU(T)=ΔrUref+ΔCv(T−Tref)；积分dlnKc/dT=ΔrU(T)/(RT²)得ln[Kc(T)/Kref]=ΔUref/R(1/Tref−1/T)+ΔCv/R[ln(T/Tref)+Tref/T−1]。

7. 由于反应吸热，降温使Kc减小，而Q_c随ξ严格增大；在使T>0的物理区间内两者恰有一个交点。

8. 保界数值求解Q_c(ξ)=Kc(T(ξ))，得到ξ=0.042638113141，最终T=268.64291657 K，绝热温降31.357083428 K。

9. 最终N₂O₄=0.95736188686 mol、NO₂=0.085276226281 mol、气体总量=1.0426381131 mol，符合2N+N₂O₄的氮氧计量。

10. 计算Kc(Tfinal)=0.0075959100405，由物种浓度得到Q_c=0.0075959100405，差1.4745149546e-17。

11. 总恒容热容=74.786809434 J/K，气体显热变化=-2345.0962227 J，反应基准内能变化=2345.0962227 J，相加得到U残差-1.3642420527e-12 J。

12. 注意ΔrU(Tfinal)=ΔUref+ΔCv(Tfinal−300)；对于理想气体反应Δn=+1，所以ΔrH=ΔrU+RT，并非把ΔU和ΔH混同。

13. 最终ΔrU=55.156785417 kJ/mol，ΔrH=57.390406905 kJ/mol。

14. 气体理想总压P=nRT/V=0.93154355725 bar；N₂O₄与NO₂分压分别为0.85535363269和0.076189924555 bar。

15. 以压力标准态p°=1 bar为无量纲压力活度，平衡常数Kp=Kc(c°RT/p°)^Δν；Δν=1，所以不能忘记c°RT/p°因子。

16. 由浓度换算Kp=0.0067865551532，分压反应商Qp=(pNO₂/p°)²/(pN₂O₄/p°)=0.0067865551532，两者之差-1.2143064332e-17。

17. 另在300 K外部恒温浴中求等温平衡Q_c(ξ)=0.1000，得到ξ_iso，温度反馈不再耦合热量。

18. 对应等温解离进度ξ_iso=0.14610721926，绝热与等温之比0.29182755895，说明吸热造成绝热解离显著减小。

19. 300 K下的Kc只在300 K使用；温度变化后必须用热力学积分更新Kc，不能用常压ΔH套进恒容Van’t Hoff式。

20. 模型忽略温度相关热容、NO₂二聚以外的反应、容器热容及非理想气体压缩性；实验平衡还应验证反应时间尺度和传热边界。

### 全部计算结果及单位

- adiabatic_equilibrium_extent_xi: 0.0426381131406183 mol_progress
- adiabatic_equilibrium_temperature_K: 268.642916572149 K
- adiabatic_temperature_drop_K: 31.3570834278506 K
- final_N2O4_mol: 0.957361886859382 mol
- final_NO2_mol: 0.0852762262812367 mol
- final_total_mol: 1.04263811314062 mol
- Kc_at_final_temperature: 0.00759591004048064 dimensionless
- concentration_quotient_at_final: 0.00759591004048066 dimensionless
- Kc_equilibrium_residual: 1.47451495458029e-17 dimensionless
- isothermal_300K_extent: 0.146107219255619 J/K
- adiabatic_over_isothermal_extent: 0.291827558951907 J/K
- final_total_Cv_J_K: 74.7868094342969 J/K
- reactant_sensible_internal_energy_J: -2345.09622273401 J
- reaction_reference_energy_J: 2345.09622273401 J
- adiabatic_internal_energy_residual_J: -1.36424205265939e-12 J
- deltaU_reaction_at_final_kJ_mol: 55.1567854171393 kJ/mol
- deltaH_reaction_at_final_kJ_mol: 57.3904069045689 kJ/mol
- final_total_pressure_bar: 0.931543557249588 bar
- final_N2O4_partial_pressure_bar: 0.855353632694115 bar
- final_NO2_partial_pressure_bar: 0.0761899245554726 bar
- converted_Kp_at_final: 0.00678655515320001 dimensionless
- Kp_from_partial_pressures: 0.00678655515320002 dimensionless
- pressure_form_equilibrium_residual: -1.21430643318376e-17 dimensionless
- final_NO2_mole_fraction: 0.0817889018313065 fraction
- final_N2O4_mole_fraction: 0.918211098168693 fraction
- reaction_DeltaCv_J_mol_K: -5.00000000000000 J/(mol K)
- log_Kc_final_over_reference: -2.57756023612021 dimensionless
- dimensionless_ideal_gas_composition_term: -0.295188467160158 dimensionless
- reaction_reference_energy_kJ: 2.34509622273401 kJ
- temperature_for_trial_xi0p3_K: 75.5102040816327 K
- NO2_to_N2O4_concentration_ratio: 3.56296725205908 ratio
