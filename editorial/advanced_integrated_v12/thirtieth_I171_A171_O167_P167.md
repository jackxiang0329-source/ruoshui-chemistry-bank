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
- transformed_line_second_difference: 0.00000000000000 dimensionless
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
- transformed_line_second_difference: 0.00000000000000 dimensionless
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
- transformed_line_second_difference: 0.00000000000000 dimensionless
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

