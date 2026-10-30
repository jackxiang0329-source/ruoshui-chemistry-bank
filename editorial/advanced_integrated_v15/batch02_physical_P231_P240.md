# 第十五辑物理化学10题 P231–P240（完整题目、模型、过程与复算）

## UC-ADV15-P231 Young接触角、黏附功与毛细管上升的表面自由能

在298.15 K，一种理想液体的液气表面张力γLV=0.07200 N/m、固气表面自由能γSV=0.05000 N/m，在某平坦刚性固体上的平衡接触角θ=60.00°。Young方程为γSV=γSL+γLVcosθ，Dupré黏附功W=γLV+γSV−γSL。定义铺展系数S=γSV−γSL−γLV。液体在半径r=1.000 mm的竖直细管中，密度ρ=1000 kg/m³、重力g=9.810 m/s²，忽略重力导致的接触角变化、线张力和滞后。求γSL、W、S、cosθ、黏附/液气表面能比、毛细压差Δp=2γLVcosθ/r、平衡毛细上升高度Δp/(ρg)、接触角的弧度、两表面能γSV−γSL差及是否完全铺展(S≥0)。不要把mN/m与N/m混用。

### 数学模型与解析

1. 系统性质、控制量与理想化条件：在298.15 K，一种理想液体的液气表面张力γLV=0.07200 N/m、固气表面自由能γSV=0.05000 N/m，在某平坦刚性固体上的平衡接触角θ=60.00°。Young方程为γSV=γSL+γLVcosθ，Dupré黏附功W=γLV+γSV−γSL。定义铺展系数S=γSV−γSL−γLV。液体在半径r=1.000 mm的竖直细管中，密度ρ=1000 kg/m³、重力g=9.810 m/s²，忽略重力导致的接触角变化、线张力和滞后。求γSL、W、S、cosθ、黏附/液气表面能比、毛细压差Δp=2γLVcosθ/r、平衡毛细上升高度Δp/(ρg)、接触角的弧度、两表面能γSV−γSL差及是否完全铺展(S≥0)。不要把mN/m与N/m混用。

2. 核心热力学、输运或统计物理方程：γSL=γSV−γLVcosθ，W=γLV(1+cosθ)，Δp=2γLVcosθ/r。

3. 建立无量纲反应商、导数或者在SI制下的适当尺度转换，区分mol/L和mol/m³。

4. 按照物理边界与守恒方程解出第一组量：gamma_SL_Nm = 0.014000000000000 N/m；work_adhesion_Nm = 0.10800000000000 N/m；spreading_coefficient_Nm = -0.036000000000000 N/m。

5. 进一步得到响应量、相分布或动力学常数：cos_theta = 0.50000000000000 ratio；adhesion_to_surface_tension_ratio = 1.5000000000000 ratio；capillary_pressure_Pa = 72.000000000000 Pa。

6. 其余完整结果与反向核对：capillary_height_m = 0.0073394495412844 m；theta_rad = 1.0471975511966 rad；gammaSV_minus_gammaSL = 0.036000000000000 N/m；complete_wetting_flag = 0.0000000000000 boolean。

7. 用物料守恒、化学势相等、载流电中性或能量与界面作用的物理符号进行独立回代。

8. 检查升温、浓度趋零、压力均衡或无驱动力极限，不将局部稳定性误判为全局相稳定性。

9. 独立数字表达式逐一复算数值向量，并严格报告测量假设和误差模型的适用范围。

10. 跨辑模型重复与实验真实性的专家审核尚未完成，不作为正式批准题目。

### 数值答案及单位

- gamma_SL_Nm = 0.014000000000000 N/m
- work_adhesion_Nm = 0.10800000000000 N/m
- spreading_coefficient_Nm = -0.036000000000000 N/m
- cos_theta = 0.50000000000000 ratio
- adhesion_to_surface_tension_ratio = 1.5000000000000 ratio
- capillary_pressure_Pa = 72.000000000000 Pa
- capillary_height_m = 0.0073394495412844 m
- theta_rad = 1.0471975511966 rad
- gammaSV_minus_gammaSL = 0.036000000000000 N/m
- complete_wetting_flag = 0.0000000000000 boolean

## UC-ADV15-P232 Debye屏蔽长度的离子强度依赖与双电层尺度

298.15 K下相对介电常数εr=78.50的理想水溶液含1:1完全解离电解质，离子强度分别I1=0.01000 mol/L、I2=0.1000 mol/L。按SI制Debye屏蔽长度λD=√[ε0εr RT/(2 F² ISI)]，其中ε0=8.8541878128×10⁻¹² F/m，ISI以mol/m³表示（1 mol/L=1000 mol/m³），R=8.314462618 J/(mol K)，F=96485.33212 C/mol。求两种盐浓度下λD(nm)、屏蔽长度比、两强度ISI、倒数屏蔽波数κ=1/λD(m⁻¹)、屏蔽长度平方及随离子强度增大十倍而缩短的系数与两个状态λD κ回代。忽略离子有限尺寸、电介质饱和、溶剂化和多价离子。

### 数学模型与解析

1. 系统性质、控制量与理想化条件：298.15 K下相对介电常数εr=78.50的理想水溶液含1:1完全解离电解质，离子强度分别I1=0.01000 mol/L、I2=0.1000 mol/L。按SI制Debye屏蔽长度λD=√[ε0εr RT/(2 F² ISI)]，其中ε0=8.8541878128×10⁻¹² F/m，ISI以mol/m³表示（1 mol/L=1000 mol/m³），R=8.314462618 J/(mol K)，F=96485.33212 C/mol。求两种盐浓度下λD(nm)、屏蔽长度比、两强度ISI、倒数屏蔽波数κ=1/λD(m⁻¹)、屏蔽长度平方及随离子强度增大十倍而缩短的系数与两个状态λD κ回代。忽略离子有限尺寸、电介质饱和、溶剂化和多价离子。

2. 核心热力学、输运或统计物理方程：λD²=ε0 εr RT/(2 F² I×1000)，λD∝I^(−1/2)。

3. 建立无量纲反应商、导数或者在SI制下的适当尺度转换，区分mol/L和mol/m³。

4. 按照物理边界与守恒方程解出第一组量：lambdaD_I0p01_nm = 3.0420573603041 nm；lambdaD_I0p1_nm = 0.96198300314404 nm；length_ratio_low_high = 3.1622776601684 ratio。

5. 进一步得到响应量、相分布或动力学常数：I1_mol_m3 = 10.000000000000 mol/m3；I2_mol_m3 = 100.00000000000 mol/m3；kappa1_mInv = 328724899.48712 m^-1。

6. 其余完整结果与反向核对：kappa2_mInv = 1039519405.9892 m^-1；lambdaD_squared1_m2 = 9.2541129833803e-18 m2；length_shortening_factor = 3.1622776601684 ratio；screening_identity_lam1_kappa1 = 1.0000000000000 ratio。

7. 用物料守恒、化学势相等、载流电中性或能量与界面作用的物理符号进行独立回代。

8. 检查升温、浓度趋零、压力均衡或无驱动力极限，不将局部稳定性误判为全局相稳定性。

9. 独立数字表达式逐一复算数值向量，并严格报告测量假设和误差模型的适用范围。

10. 跨辑模型重复与实验真实性的专家审核尚未完成，不作为正式批准题目。

### 数值答案及单位

- lambdaD_I0p01_nm = 3.0420573603041 nm
- lambdaD_I0p1_nm = 0.96198300314404 nm
- length_ratio_low_high = 3.1622776601684 ratio
- I1_mol_m3 = 10.000000000000 mol/m3
- I2_mol_m3 = 100.00000000000 mol/m3
- kappa1_mInv = 328724899.48712 m^-1
- kappa2_mInv = 1039519405.9892 m^-1
- lambdaD_squared1_m2 = 9.2541129833803e-18 m2
- length_shortening_factor = 3.1622776601684 ratio
- screening_identity_lam1_kappa1 = 1.0000000000000 ratio

## UC-ADV15-P233 N₂理想分子的Maxwell–Boltzmann最概然、平均与均方根速率

气相N₂分子理想平衡，摩尔质量M=28.0134 g/mol，在T1=300.0、T2=600.0 K下服从Maxwell–Boltzmann速率分布。R=8.314462618 J/(mol K)。最概然速率vmp=√(2RT/M)、平均速率vavg=√(8RT/(πM))、均方根速率vrms=√(3RT/M)，M须换算为kg/mol。求两温度各三种速率(m/s)、两温度vrms之比、300K的vavg/vmp、两温度每mol平动动能U=3RT/2及高温相对低温的能量比。说明这三种速率都不同，不能把分子平均速率等同于气体声速。

### 数学模型与解析

1. 系统性质、控制量与理想化条件：气相N₂分子理想平衡，摩尔质量M=28.0134 g/mol，在T1=300.0、T2=600.0 K下服从Maxwell–Boltzmann速率分布。R=8.314462618 J/(mol K)。最概然速率vmp=√(2RT/M)、平均速率vavg=√(8RT/(πM))、均方根速率vrms=√(3RT/M)，M须换算为kg/mol。求两温度各三种速率(m/s)、两温度vrms之比、300K的vavg/vmp、两温度每mol平动动能U=3RT/2及高温相对低温的能量比。说明这三种速率都不同，不能把分子平均速率等同于气体声速。

2. 核心热力学、输运或统计物理方程：vmp=√(2RT/M)，vavg=√(8RT/(πM))，vrms=√(3RT/M)，U=3RT/2。

3. 建立无量纲反应商、导数或者在SI制下的适当尺度转换，区分mol/L和mol/m³。

4. 按照物理边界与守恒方程解出第一组量：vmp300 = 421.99743035193 m/s；vavg300 = 476.17310897695 m/s；vrms300 = 516.83918856395 m/s。

5. 进一步得到响应量、相分布或动力学常数：vmp600 = 596.79448929029 m/s；vavg600 = 673.41046875257 m/s；vrms600 = 730.92099003304 m/s。

6. 其余完整结果与反向核对：rms_ratio = 1.4142135623731 ratio；avg_over_mostprobable_300 = 1.1283791670955 ratio；translational_U300_Jmol = 3741.5081781000 J/mol；translational_U600_Jmol = 7483.0163562000 J/mol；energy_ratio = 2.0000000000000 ratio。

7. 用物料守恒、化学势相等、载流电中性或能量与界面作用的物理符号进行独立回代。

8. 检查升温、浓度趋零、压力均衡或无驱动力极限，不将局部稳定性误判为全局相稳定性。

9. 独立数字表达式逐一复算数值向量，并严格报告测量假设和误差模型的适用范围。

10. 跨辑模型重复与实验真实性的专家审核尚未完成，不作为正式批准题目。

### 数值答案及单位

- vmp300 = 421.99743035193 m/s
- vavg300 = 476.17310897695 m/s
- vrms300 = 516.83918856395 m/s
- vmp600 = 596.79448929029 m/s
- vavg600 = 673.41046875257 m/s
- vrms600 = 730.92099003304 m/s
- rms_ratio = 1.4142135623731 ratio
- avg_over_mostprobable_300 = 1.1283791670955 ratio
- translational_U300_Jmol = 3741.5081781000 J/mol
- translational_U600_Jmol = 7483.0163562000 J/mol
- energy_ratio = 2.0000000000000 ratio

## UC-ADV15-P234 正则溶液χ参数的自旋odal失稳判据与组成边界

假想理想混合熵加正则溶液焓的二元液体，混合Gibbs自由能每mol以RT归一后g(x)=xlnx+(1−x)ln(1−x)+χ x(1−x)，其中x为A的摩尔分率，χ=3.000，T=300.0 K。二阶曲率g''(x)=1/x+1/(1−x)−2χ，若g''<0为均一相局部不稳定。求在x=0.5000和0.1000时的曲率及g值、两自旋odal边界x±=[1±√(1−2/χ)]/2、临界χc=2、对称点x=0.5时混合自由能J/mol、两个测试组成的稳定判别数字标志(1为稳定，0为不稳定)以及自旋odal区间宽度和曲率在临界χc,x=.5时的值。注意局部稳定不是证明全局单相热力学最稳。

### 数学模型与解析

1. 系统性质、控制量与理想化条件：假想理想混合熵加正则溶液焓的二元液体，混合Gibbs自由能每mol以RT归一后g(x)=xlnx+(1−x)ln(1−x)+χ x(1−x)，其中x为A的摩尔分率，χ=3.000，T=300.0 K。二阶曲率g''(x)=1/x+1/(1−x)−2χ，若g''<0为均一相局部不稳定。求在x=0.5000和0.1000时的曲率及g值、两自旋odal边界x±=[1±√(1−2/χ)]/2、临界χc=2、对称点x=0.5时混合自由能J/mol、两个测试组成的稳定判别数字标志(1为稳定，0为不稳定)以及自旋odal区间宽度和曲率在临界χc,x=.5时的值。注意局部稳定不是证明全局单相热力学最稳。

2. 核心热力学、输运或统计物理方程：g=xlnx+(1−x)ln(1−x)+χx(1−x)，g''=1/[x(1−x)]−2χ。

3. 建立无量纲反应商、导数或者在SI制下的适当尺度转换，区分mol/L和mol/m³。

4. 按照物理边界与守恒方程解出第一组量：curvature_x0p5 = -2.0000000000000 ratio；curvature_x0p1 = 5.1111111111111 ratio；g_x0p5 = 0.056852819440055 ratio。

5. 进一步得到响应量、相分布或动力学常数：g_x0p1 = -0.055082973391448 ratio；spinodal_lower = 0.21132486540519 fraction；spinodal_upper = 0.78867513459481 fraction。

6. 其余完整结果与反向核对：critical_chi = 2.0000000000000 ratio；mixing_G_x0p5_Jmol = 141.81019258867 J/mol；stable_flag_x0p5 = 0.0000000000000 boolean；stable_flag_x0p1 = 1.0000000000000 boolean；spinodal_width = 0.57735026918963 fraction；curvature_at_critical_center = 0.0000000000000 ratio。

7. 用物料守恒、化学势相等、载流电中性或能量与界面作用的物理符号进行独立回代。

8. 检查升温、浓度趋零、压力均衡或无驱动力极限，不将局部稳定性误判为全局相稳定性。

9. 独立数字表达式逐一复算数值向量，并严格报告测量假设和误差模型的适用范围。

10. 跨辑模型重复与实验真实性的专家审核尚未完成，不作为正式批准题目。

### 数值答案及单位

- curvature_x0p5 = -2.0000000000000 ratio
- curvature_x0p1 = 5.1111111111111 ratio
- g_x0p5 = 0.056852819440055 ratio
- g_x0p1 = -0.055082973391448 ratio
- spinodal_lower = 0.21132486540519 fraction
- spinodal_upper = 0.78867513459481 fraction
- critical_chi = 2.0000000000000 ratio
- mixing_G_x0p5_Jmol = 141.81019258867 J/mol
- stable_flag_x0p5 = 0.0000000000000 boolean
- stable_flag_x0p1 = 1.0000000000000 boolean
- spinodal_width = 0.57735026918963 fraction
- curvature_at_critical_center = 0.0000000000000 ratio

## UC-ADV15-P235 纯非竞争酶抑制的Vmax下降与Michaelis常数不变

某水相单底物酶催化反应在无抑制剂时遵循v=Vmax S/(Km+S)，Vmax=1.000×10⁻⁵ mol/(L s)，Km=0.003000 mol/L。纯非竞争抑制剂I的游离浓度固定[I]=0.002000 M，抑制常数Ki=0.001000 M，均匀作用于游离酶与ES且其亲和力相同。有效α=1+[I]/Ki，Vmax,app=Vmax/α，Km不变。计算α、表观Vmax、Km、在S=0.002000和0.01000 M时有无抑制剂的四个反应速度、两处受抑制/无抑制的速度比、S=Km时受抑制速度、达到Vmax,app一半的底物浓度及最大速度被降低的分率。这个“纯”模型不能扩展到混合抑制。

### 数学模型与解析

1. 系统性质、控制量与理想化条件：某水相单底物酶催化反应在无抑制剂时遵循v=Vmax S/(Km+S)，Vmax=1.000×10⁻⁵ mol/(L s)，Km=0.003000 mol/L。纯非竞争抑制剂I的游离浓度固定[I]=0.002000 M，抑制常数Ki=0.001000 M，均匀作用于游离酶与ES且其亲和力相同。有效α=1+[I]/Ki，Vmax,app=Vmax/α，Km不变。计算α、表观Vmax、Km、在S=0.002000和0.01000 M时有无抑制剂的四个反应速度、两处受抑制/无抑制的速度比、S=Km时受抑制速度、达到Vmax,app一半的底物浓度及最大速度被降低的分率。这个“纯”模型不能扩展到混合抑制。

2. 核心热力学、输运或统计物理方程：α=1+I/Ki，v_inhib=Vmax S/[α(Km+S)]。

3. 建立无量纲反应商、导数或者在SI制下的适当尺度转换，区分mol/L和mol/m³。

4. 按照物理边界与守恒方程解出第一组量：inhibition_factor = 3.0000000000000 ratio；Vmax_app_Ms = 0.0000033333333333333 mol/(Ls)；Km_M = 0.0030000000000000 mol/L。

5. 进一步得到响应量、相分布或动力学常数：uninh_rate_S0p002 = 0.0000040000000000000 mol/(Ls)；inhib_rate_S0p002 = 0.0000013333333333333 mol/(Ls)；uninh_rate_S0p01 = 0.0000076923076923077 mol/(Ls)。

6. 其余完整结果与反向核对：inhib_rate_S0p01 = 0.0000025641025641026 mol/(Ls)；rate_ratio_S0p002 = 0.33333333333333 ratio；rate_ratio_S0p01 = 0.33333333333333 ratio；rate_inhib_at_Km = 0.0000016666666666667 mol/(Ls)；halfVmax_substrate_M = 0.0030000000000000 mol/L；fraction_Vmax_lost = 0.66666666666667 fraction。

7. 用物料守恒、化学势相等、载流电中性或能量与界面作用的物理符号进行独立回代。

8. 检查升温、浓度趋零、压力均衡或无驱动力极限，不将局部稳定性误判为全局相稳定性。

9. 独立数字表达式逐一复算数值向量，并严格报告测量假设和误差模型的适用范围。

10. 跨辑模型重复与实验真实性的专家审核尚未完成，不作为正式批准题目。

### 数值答案及单位

- inhibition_factor = 3.0000000000000 ratio
- Vmax_app_Ms = 0.0000033333333333333 mol/(Ls)
- Km_M = 0.0030000000000000 mol/L
- uninh_rate_S0p002 = 0.0000040000000000000 mol/(Ls)
- inhib_rate_S0p002 = 0.0000013333333333333 mol/(Ls)
- uninh_rate_S0p01 = 0.0000076923076923077 mol/(Ls)
- inhib_rate_S0p01 = 0.0000025641025641026 mol/(Ls)
- rate_ratio_S0p002 = 0.33333333333333 ratio
- rate_ratio_S0p01 = 0.33333333333333 ratio
- rate_inhib_at_Km = 0.0000016666666666667 mol/(Ls)
- halfVmax_substrate_M = 0.0030000000000000 mol/L
- fraction_Vmax_lost = 0.66666666666667 fraction

## UC-ADV15-P236 双热电腿Seebeck电压、匹配负载功率及内阻效应

某假想固体热电化学测量装置由A/B两种均匀热电腿构成，温差ΔT=30.00 K，Seebeck系数SA=+200.0 μV/K、SB=−50.00 μV/K，装置内电阻Rint=5.000 Ω，忽略温度依赖、热接触电势及Peltier回流。开路电动势V_oc=(SA−SB)ΔT。外负载RL=Rint时求最大输出功率Pmax=Voc²/(4Rint)、匹配负载电流、电压、外负载耗散与内阻耗散、短路电流、开路电压的mV值、两个Seebeck电势贡献和开路等效温差对电压比例。说明匹配负载得到最大输出功率不等于装置热电效率最优。

### 数学模型与解析

1. 系统性质、控制量与理想化条件：某假想固体热电化学测量装置由A/B两种均匀热电腿构成，温差ΔT=30.00 K，Seebeck系数SA=+200.0 μV/K、SB=−50.00 μV/K，装置内电阻Rint=5.000 Ω，忽略温度依赖、热接触电势及Peltier回流。开路电动势V_oc=(SA−SB)ΔT。外负载RL=Rint时求最大输出功率Pmax=Voc²/(4Rint)、匹配负载电流、电压、外负载耗散与内阻耗散、短路电流、开路电压的mV值、两个Seebeck电势贡献和开路等效温差对电压比例。说明匹配负载得到最大输出功率不等于装置热电效率最优。

2. 核心热力学、输运或统计物理方程：Voc=(SA−SB)ΔT，Ishort=Voc/Rint，Imatched=Voc/(2Rint)，Pmax=Voc²/(4Rint)。

3. 建立无量纲反应商、导数或者在SI制下的适当尺度转换，区分mol/L和mol/m³。

4. 按照物理边界与守恒方程解出第一组量：Seebeck_difference_uVperK = 250.00000000000 uV/K；open_circuit_voltage_V = 0.0075000000000000 V；open_circuit_voltage_mV = 7.5000000000000 mV。

5. 进一步得到响应量、相分布或动力学常数：matched_current_A = 0.00075000000000000 A；matched_load_voltage_V = 0.0037500000000000 V；max_power_W = 0.0000028125000000000 W。

6. 其余完整结果与反向核对：short_circuit_current_A = 0.0015000000000000 A；load_dissipation_W = 0.0000028125000000000 W；internal_dissipation_W = 0.0000028125000000000 W；A_Seebeck_voltage_V = 0.0060000000000000 V；B_Seebeck_voltage_V = -0.0015000000000000 V。

7. 用物料守恒、化学势相等、载流电中性或能量与界面作用的物理符号进行独立回代。

8. 检查升温、浓度趋零、压力均衡或无驱动力极限，不将局部稳定性误判为全局相稳定性。

9. 独立数字表达式逐一复算数值向量，并严格报告测量假设和误差模型的适用范围。

10. 跨辑模型重复与实验真实性的专家审核尚未完成，不作为正式批准题目。

### 数值答案及单位

- Seebeck_difference_uVperK = 250.00000000000 uV/K
- open_circuit_voltage_V = 0.0075000000000000 V
- open_circuit_voltage_mV = 7.5000000000000 mV
- matched_current_A = 0.00075000000000000 A
- matched_load_voltage_V = 0.0037500000000000 V
- max_power_W = 0.0000028125000000000 W
- short_circuit_current_A = 0.0015000000000000 A
- load_dissipation_W = 0.0000028125000000000 W
- internal_dissipation_W = 0.0000028125000000000 W
- A_Seebeck_voltage_V = 0.0060000000000000 V
- B_Seebeck_voltage_V = -0.0015000000000000 V

## UC-ADV15-P237 Flory–Huggins聚合物溶液自旋odal稳定条件与临界χ

考虑无体积变化的理想格点Flory–Huggins聚合物/溶剂混合，聚合物链长N=100，聚合物体积分数φ=0.3000，混合自由能每格点单位kBT归一g(φ)=(φ/N)lnφ+(1−φ)ln(1−φ)+χφ(1−φ)。χ=0.5000与1.000两情形，g''=1/(Nφ)+1/(1−φ)−2χ。计算两χ下的g、g''、各自局部稳定布尔值、给定φ的中性曲率阈值χspinodal=[1/(Nφ)+1/(1−φ)]/2，以及对称平均场模型的临界聚合物体积分率φc=1/(1+√N)、临界χc=(1+1/√N)²/2；并求χ=0.5下的无量纲第一导数g'=lnφ/N+1/N−ln(1−φ)−1+χ(1−2φ)和相对χspinodal的距离。注意在φ=0.3的局部稳定不等于全局无相分离。

### 数学模型与解析

1. 系统性质、控制量与理想化条件：考虑无体积变化的理想格点Flory–Huggins聚合物/溶剂混合，聚合物链长N=100，聚合物体积分数φ=0.3000，混合自由能每格点单位kBT归一g(φ)=(φ/N)lnφ+(1−φ)ln(1−φ)+χφ(1−φ)。χ=0.5000与1.000两情形，g''=1/(Nφ)+1/(1−φ)−2χ。计算两χ下的g、g''、各自局部稳定布尔值、给定φ的中性曲率阈值χspinodal=[1/(Nφ)+1/(1−φ)]/2，以及对称平均场模型的临界聚合物体积分率φc=1/(1+√N)、临界χc=(1+1/√N)²/2；并求χ=0.5下的无量纲第一导数g'=lnφ/N+1/N−ln(1−φ)−1+χ(1−2φ)和相对χspinodal的距离。注意在φ=0.3的局部稳定不等于全局无相分离。

2. 核心热力学、输运或统计物理方程：g=φ/Nlnφ+(1−φ)ln(1−φ)+χφ(1−φ)，g''=1/(Nφ)+1/(1−φ)−2χ。

3. 建立无量纲反应商、导数或者在SI制下的适当尺度转换，区分mol/L和mol/m³。

4. 按照物理边界与守恒方程解出第一组量：free_energy_chi0p5 = -0.14828437917009 ratio；free_energy_chi1 = -0.043284379170091 ratio；curvature_chi0p5 = 0.46190476190476 ratio。

5. 进一步得到响应量、相分布或动力学常数：curvature_chi1 = -0.53809523809524 ratio；stable_flag_chi0p5 = 1.0000000000000 boolean；stable_flag_chi1 = 0.0000000000000 boolean。

6. 其余完整结果与反向核对：local_spinodal_chi_threshold = 0.73095238095238 ratio；critical_polymer_fraction = 0.090909090909091 fraction；critical_chi = 0.60500000000000 ratio；first_derivative_chi0p5 = -0.44536478410453 ratio；distance_chi0p5_to_spinodal = 0.23095238095238 ratio。

7. 用物料守恒、化学势相等、载流电中性或能量与界面作用的物理符号进行独立回代。

8. 检查升温、浓度趋零、压力均衡或无驱动力极限，不将局部稳定性误判为全局相稳定性。

9. 独立数字表达式逐一复算数值向量，并严格报告测量假设和误差模型的适用范围。

10. 跨辑模型重复与实验真实性的专家审核尚未完成，不作为正式批准题目。

### 数值答案及单位

- free_energy_chi0p5 = -0.14828437917009 ratio
- free_energy_chi1 = -0.043284379170091 ratio
- curvature_chi0p5 = 0.46190476190476 ratio
- curvature_chi1 = -0.53809523809524 ratio
- stable_flag_chi0p5 = 1.0000000000000 boolean
- stable_flag_chi1 = 0.0000000000000 boolean
- local_spinodal_chi_threshold = 0.73095238095238 ratio
- critical_polymer_fraction = 0.090909090909091 fraction
- critical_chi = 0.60500000000000 ratio
- first_derivative_chi0p5 = -0.44536478410453 ratio
- distance_chi0p5_to_spinodal = 0.23095238095238 ratio

## UC-ADV15-P238 带界面热阻的两层固体一维稳态传热

两层均匀固体板沿法线一维稳态传热：热侧表面温度Th=80.00°C，冷侧Tc=30.00°C，第一层厚度L1=0.01000 m、热导率k1=0.2000 W/(m K)，第二层L2=0.02000 m、热导率k2=0.5000 W/(m K)，两层接触面另有面热阻Rc=0.01000 m²K/W。忽略侧向散热和温度依赖。热流密度q=(Th−Tc)/(L1/k1+Rc+L2/k2)，求三项热阻、总热阻、q、两层和界面温降、第一层后界面左侧温度、界面右侧温度、第二层出口温度回代及若忽略界面热阻将高估热流多少。明确温度差用K与°C差值一致，而绝对温度不同。

### 数学模型与解析

1. 系统性质、控制量与理想化条件：两层均匀固体板沿法线一维稳态传热：热侧表面温度Th=80.00°C，冷侧Tc=30.00°C，第一层厚度L1=0.01000 m、热导率k1=0.2000 W/(m K)，第二层L2=0.02000 m、热导率k2=0.5000 W/(m K)，两层接触面另有面热阻Rc=0.01000 m²K/W。忽略侧向散热和温度依赖。热流密度q=(Th−Tc)/(L1/k1+Rc+L2/k2)，求三项热阻、总热阻、q、两层和界面温降、第一层后界面左侧温度、界面右侧温度、第二层出口温度回代及若忽略界面热阻将高估热流多少。明确温度差用K与°C差值一致，而绝对温度不同。

2. 核心热力学、输运或统计物理方程：R1=L1/k1，R2=L2/k2，Rtot=R1+Rc+R2，q=ΔT/Rtot。

3. 建立无量纲反应商、导数或者在SI制下的适当尺度转换，区分mol/L和mol/m³。

4. 按照物理边界与守恒方程解出第一组量：resistance_layer1 = 0.050000000000000 m2K/W；contact_resistance = 0.010000000000000 m2K/W；resistance_layer2 = 0.040000000000000 m2K/W。

5. 进一步得到响应量、相分布或动力学常数：total_resistance = 0.10000000000000 m2K/W；heat_flux_W_m2 = 500.00000000000 W/m2；drop_layer1_K = 25.000000000000 K。

6. 其余完整结果与反向核对：drop_interface_K = 5.0000000000000 K；drop_layer2_K = 20.000000000000 K；left_interface_temperature_C = 55.000000000000 C；right_interface_temperature_C = 50.000000000000 C；cold_face_backcheck_C = 30.000000000000 C；relative_flux_overestimate_if_no_contact = 0.11111111111111 fraction。

7. 用物料守恒、化学势相等、载流电中性或能量与界面作用的物理符号进行独立回代。

8. 检查升温、浓度趋零、压力均衡或无驱动力极限，不将局部稳定性误判为全局相稳定性。

9. 独立数字表达式逐一复算数值向量，并严格报告测量假设和误差模型的适用范围。

10. 跨辑模型重复与实验真实性的专家审核尚未完成，不作为正式批准题目。

### 数值答案及单位

- resistance_layer1 = 0.050000000000000 m2K/W
- contact_resistance = 0.010000000000000 m2K/W
- resistance_layer2 = 0.040000000000000 m2K/W
- total_resistance = 0.10000000000000 m2K/W
- heat_flux_W_m2 = 500.00000000000 W/m2
- drop_layer1_K = 25.000000000000 K
- drop_interface_K = 5.0000000000000 K
- drop_layer2_K = 20.000000000000 K
- left_interface_temperature_C = 55.000000000000 C
- right_interface_temperature_C = 50.000000000000 C
- cold_face_backcheck_C = 30.000000000000 C
- relative_flux_overestimate_if_no_contact = 0.11111111111111 fraction

## UC-ADV15-P239 Smoluchowski扩散控制反应的双粒子捕获常数

某水相两种反应物A、B近似为两类自由扩散球体，仅当球心距离达到rA+rB时完全吸收并瞬时反应。给定扩散系数DA=1.000×10⁻¹⁰、DB=2.000×10⁻¹⁰ m²/s，反应半径rA=1.000、rB=2.000 nm，温度固定并忽略库仑势与反应激活垒。Smoluchowski两体捕获常数kpair=4π(DA+DB)(rA+rB)（m³/s），转为摩尔浓度单位kM=kpair NA×1000 (L mol⁻¹ s⁻¹)。初始自由CA=1.000×10⁻⁶ M、CB=2.000×10⁻⁶ M，求合计扩散系数、捕获半径、kpair、kM、初始生成速度r=kM CA CB、A/B扩散对速率常数的相对贡献DA/(DA+DB)与DB/(DA+DB)、在B恒定近似下A的伪一级时间常数1/(kM CB)、每秒每m³的捕获事件数与B对A的初始过量比。浓度随反应进行会变化，因此伪一级结果只针对初始小时间。

### 数学模型与解析

1. 系统性质、控制量与理想化条件：某水相两种反应物A、B近似为两类自由扩散球体，仅当球心距离达到rA+rB时完全吸收并瞬时反应。给定扩散系数DA=1.000×10⁻¹⁰、DB=2.000×10⁻¹⁰ m²/s，反应半径rA=1.000、rB=2.000 nm，温度固定并忽略库仑势与反应激活垒。Smoluchowski两体捕获常数kpair=4π(DA+DB)(rA+rB)（m³/s），转为摩尔浓度单位kM=kpair NA×1000 (L mol⁻¹ s⁻¹)。初始自由CA=1.000×10⁻⁶ M、CB=2.000×10⁻⁶ M，求合计扩散系数、捕获半径、kpair、kM、初始生成速度r=kM CA CB、A/B扩散对速率常数的相对贡献DA/(DA+DB)与DB/(DA+DB)、在B恒定近似下A的伪一级时间常数1/(kM CB)、每秒每m³的捕获事件数与B对A的初始过量比。浓度随反应进行会变化，因此伪一级结果只针对初始小时间。

2. 核心热力学、输运或统计物理方程：kpair=4πDrel rcap，kM=kpair NA×1000，r0=kM CA CB。

3. 建立无量纲反应商、导数或者在SI制下的适当尺度转换，区分mol/L和mol/m³。

4. 按照物理边界与守恒方程解出第一组量：relative_D_m2s = 3.0000000000000e-10 m2/s；capture_radius_nm = 3.0000000000000 nm；pair_rate_m3s = 1.1309733552923e-17 m3/s。

5. 进一步得到响应量、相分布或动力学常数：molar_k_Lmol_s = 6810880741.3799 L/(mol s)；initial_rate_Ms = 0.013621761482760 mol/(Ls)；A_diffusion_fraction = 0.33333333333333 fraction。

6. 其余完整结果与反向核对：B_diffusion_fraction = 0.66666666666667 fraction；pseudo_first_time_s = 0.000073411944649423 s；capture_events_m3s = 8.2032165048326e+24 events/(m3s)；initial_B_to_A_ratio = 2.0000000000000 ratio。

7. 用物料守恒、化学势相等、载流电中性或能量与界面作用的物理符号进行独立回代。

8. 检查升温、浓度趋零、压力均衡或无驱动力极限，不将局部稳定性误判为全局相稳定性。

9. 独立数字表达式逐一复算数值向量，并严格报告测量假设和误差模型的适用范围。

10. 跨辑模型重复与实验真实性的专家审核尚未完成，不作为正式批准题目。

### 数值答案及单位

- relative_D_m2s = 3.0000000000000e-10 m2/s
- capture_radius_nm = 3.0000000000000 nm
- pair_rate_m3s = 1.1309733552923e-17 m3/s
- molar_k_Lmol_s = 6810880741.3799 L/(mol s)
- initial_rate_Ms = 0.013621761482760 mol/(Ls)
- A_diffusion_fraction = 0.33333333333333 fraction
- B_diffusion_fraction = 0.66666666666667 fraction
- pseudo_first_time_s = 0.000073411944649423 s
- capture_events_m3s = 8.2032165048326e+24 events/(m3s)
- initial_B_to_A_ratio = 2.0000000000000 ratio

## UC-ADV15-P240 Donnan膜内固定负电荷对单价盐的离子浓度及渗透压

298.15 K理想半透膜两侧为同一种1:1强电解质，外侧盐浓度c0=0.05000 mol/L；膜内含不能透过的固定负电荷密度X=0.1000 mol/L。假设两种小离子可透膜，平衡满足膜内电中性c+−c−=X及Donnan乘积c+c−=c0²，外侧电中性。理想活动度按1 M标准态，电位差(内−外)Δψ=−(RT/F)ln(c+/c0)，渗透压差只考虑可透小离子ΔΠ=RT[(c++c−)−2c0]，用浓度mol/m³代入。求内侧c+与c−、内外阳离子比、膜电势(mV)、渗透压差(Pa)、阳离子浓度过量、阴离子被排斥比例、乘积与电中性回代、渗透压正号，以及小离子内外总浓度比。忽略固定聚合物本身的渗透压、离子有限尺寸和膜带电双电层。

### 数学模型与解析

1. 系统性质、控制量与理想化条件：298.15 K理想半透膜两侧为同一种1:1强电解质，外侧盐浓度c0=0.05000 mol/L；膜内含不能透过的固定负电荷密度X=0.1000 mol/L。假设两种小离子可透膜，平衡满足膜内电中性c+−c−=X及Donnan乘积c+c−=c0²，外侧电中性。理想活动度按1 M标准态，电位差(内−外)Δψ=−(RT/F)ln(c+/c0)，渗透压差只考虑可透小离子ΔΠ=RT[(c++c−)−2c0]，用浓度mol/m³代入。求内侧c+与c−、内外阳离子比、膜电势(mV)、渗透压差(Pa)、阳离子浓度过量、阴离子被排斥比例、乘积与电中性回代、渗透压正号，以及小离子内外总浓度比。忽略固定聚合物本身的渗透压、离子有限尺寸和膜带电双电层。

2. 核心热力学、输运或统计物理方程：c±=[√(X²+4c0²)±X]/2，Δψ=−RT/F ln(c+/c0)，ΔΠ=RT·1000·(c++c−−2c0)。

3. 建立无量纲反应商、导数或者在SI制下的适当尺度转换，区分mol/L和mol/m³。

4. 按照物理边界与守恒方程解出第一组量：inside_cation_M = 0.12071067811865 mol/L；inside_anion_M = 0.020710678118655 mol/L；cation_enrichment = 2.4142135623731 ratio。

5. 进一步得到响应量、相分布或动力学常数：Donnan_potential_mV = -22.644760620094 mV；osmotic_pressure_difference_Pa = 102681.76221825 Pa；cation_excess_M = 0.070710678118655 mol/L。

6. 其余完整结果与反向核对：anion_exclusion_fraction = 0.58578643762690 fraction；salt_product_backcheck_M2 = 0.0025000000000000 M2；electroneutral_residual_M = 0.0000000000000 mol/L；total_ion_concentration_ratio = 1.4142135623731 ratio。

7. 用物料守恒、化学势相等、载流电中性或能量与界面作用的物理符号进行独立回代。

8. 检查升温、浓度趋零、压力均衡或无驱动力极限，不将局部稳定性误判为全局相稳定性。

9. 独立数字表达式逐一复算数值向量，并严格报告测量假设和误差模型的适用范围。

10. 跨辑模型重复与实验真实性的专家审核尚未完成，不作为正式批准题目。

### 数值答案及单位

- inside_cation_M = 0.12071067811865 mol/L
- inside_anion_M = 0.020710678118655 mol/L
- cation_enrichment = 2.4142135623731 ratio
- Donnan_potential_mV = -22.644760620094 mV
- osmotic_pressure_difference_Pa = 102681.76221825 Pa
- cation_excess_M = 0.070710678118655 mol/L
- anion_exclusion_fraction = 0.58578643762690 fraction
- salt_product_backcheck_M2 = 0.0025000000000000 M2
- electroneutral_residual_M = 0.0000000000000 mol/L
- total_ion_concentration_ratio = 1.4142135623731 ratio