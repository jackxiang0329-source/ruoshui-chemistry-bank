# 第十五辑第二批分析10题：准确量值反演、逐步解答与数值QA

## UC-ADV15-A235 标准加入法固定终体积紫外吸收与原样浓度反演

在两个25.00 mL容量瓶中分别加入10.00 mL未知含磷有色衍生物原样，第二瓶额外加入1.000 mL、0.01000 mol/L的已知同一分析物标准液，均用空白基质定容到25.00 mL。紫外吸光度满足A=εl cfinal，联合系数εl=100.0 L/mol，两瓶实验吸光度A0=0.1200、A1=0.1600，截距已通过试剂空白扣除。假定标准加入前后响应系数相同且无基体抑制变化。求未加标与加标两瓶的最终浓度、标准加入的最终浓度增量、原样浓度、两种吸光度增量、原样10mL中的分析物mol量、原样在定容时的稀释分率、若误把额外1mL加入视为终体积26mL时会错误计算的标准增量、信号比和由加标样重新预测的吸光度。不可将加入体积当成定容外额外体积。

### 严格定量推导

1. **分析条件与样品状态**：在两个25.00 mL容量瓶中分别加入10.00 mL未知含磷有色衍生物原样，第二瓶额外加入1.000 mL、0.01000 mol/L的已知同一分析物标准液，均用空白基质定容到25.00 mL。紫外吸光度满足A=εl cfinal，联合系数εl=100.0 L/mol，两瓶实验吸光度A0=0.1200、A1=0.1600，截距已通过试剂空白扣除。假定标准加入前后响应系数相同且无基体抑制变化。求未加标与加标两瓶的最终浓度、标准加入的最终浓度增量、原样浓度、两种吸光度增量、原样10mL中的分析物mol量、原样在定容时的稀释分率、若误把额外1mL加入视为终体积26mL时会错误计算的标准增量、信号比和由加标样重新预测的吸光度。不可将加入体积当成定容外额外体积。

2. **由仪器观测反演量值的方程**：c0=A0/(εl)，c1=A1/(εl)，Δc=cS VS/25mL，c_sample=c0(25/10)。

3. 逐一确定原液、定容后溶液、仪器原始信号与基体或空白贡献的区别，并标明活动度或浓度单位。

4. 先求主校正、校准常数和第一组结果：unspiked_final_M=0.0012000000000000 mol/L；spiked_final_M=0.0016000000000000 mol/L；added_standard_final_M=0.00040000000000000 mol/L。

5. 依次求得样本浓度、相对分率或谱线指标：original_concentration_M=0.0030000000000000 mol/L；absorbance_increment=0.040000000000000 AU；original_analyte_moles_in_aliquot=0.000030000000000000 mol。

6. 剩余相互独立输出与回代数值：dilution_fraction=0.40000000000000 fraction；wrong_increment_if26mL_M=0.00038461538461538 mol/L；signal_ratio=1.3333333333333 ratio；reconstructed_spiked_absorbance=0.16000000000000 AU。

7. 将结果代回实际观测模型，并核对标样、稀释、单位和统计归一；所算物理量不应超出本题的仪器量程。

8. 如存在非线性基体效应、光谱峰重叠、浓度依赖活度或离子对，题设反演公式可能不再有效。

9. 用与原解不同的代数或数字表达式独立复算数值，按1e−9相对误差容限审校全部答案。

10. 初步质检不等同第三方独立实验认证，题干科学性、原创性与版权需专家核定。

### 可复算数值答案

- unspiked_final_M=0.0012000000000000 mol/L
- spiked_final_M=0.0016000000000000 mol/L
- added_standard_final_M=0.00040000000000000 mol/L
- original_concentration_M=0.0030000000000000 mol/L
- absorbance_increment=0.040000000000000 AU
- original_analyte_moles_in_aliquot=0.000030000000000000 mol
- dilution_fraction=0.40000000000000 fraction
- wrong_increment_if26mL_M=0.00038461538461538 mol/L
- signal_ratio=1.3333333333333 ratio
- reconstructed_spiked_absorbance=0.16000000000000 AU

## UC-ADV15-A236 同位素丰度二项计数与重轻比的不确定度传播

高分辨同位素质谱在扣除背景、死时间及质量歧视后，从固定总计数N=10000次独立事件中观察到重同位素NH=3600次、轻同位素NL=6400次。把重核事件视作二项随机试验，重丰度估计p=NH/N，其标准误σp=√[p(1−p)/N]。报告重/轻原子数比r=p/(1−p)，利用一阶误差传播σr=σp/(1−p)²。求丰度、轻丰度、比值、两标准误、r相对标准误、p的95%正态近似上下限、总计数加倍而真实p不变时的σp和标准误改善倍数。须声明正态区间不是严格Clopper–Pearson区间，也不能纠正仪器系统误差。

### 严格定量推导

1. **分析条件与样品状态**：高分辨同位素质谱在扣除背景、死时间及质量歧视后，从固定总计数N=10000次独立事件中观察到重同位素NH=3600次、轻同位素NL=6400次。把重核事件视作二项随机试验，重丰度估计p=NH/N，其标准误σp=√[p(1−p)/N]。报告重/轻原子数比r=p/(1−p)，利用一阶误差传播σr=σp/(1−p)²。求丰度、轻丰度、比值、两标准误、r相对标准误、p的95%正态近似上下限、总计数加倍而真实p不变时的σp和标准误改善倍数。须声明正态区间不是严格Clopper–Pearson区间，也不能纠正仪器系统误差。

2. **由仪器观测反演量值的方程**：p=NH/N，σp=√(p(1−p)/N)，r=p/(1−p)，σr=σp/(1−p)²。

3. 逐一确定原液、定容后溶液、仪器原始信号与基体或空白贡献的区别，并标明活动度或浓度单位。

4. 先求主校正、校准常数和第一组结果：heavy_fraction=0.36000000000000 fraction；light_fraction=0.64000000000000 fraction；heavy_light_ratio=0.56250000000000 ratio。

5. 依次求得样本浓度、相对分率或谱线指标：sigma_fraction=0.0048000000000000 fraction；sigma_ratio=0.011718750000000 ratio；relative_sigma_ratio=0.020833333333333 fraction。

6. 剩余相互独立输出与回代数值：lower95_heavy_fraction=0.35059200000000 fraction；upper95_heavy_fraction=0.36940800000000 fraction；sigma_fraction_double_counts=0.0033941125496954 fraction；improvement_factor=1.4142135623731 ratio。

7. 将结果代回实际观测模型，并核对标样、稀释、单位和统计归一；所算物理量不应超出本题的仪器量程。

8. 如存在非线性基体效应、光谱峰重叠、浓度依赖活度或离子对，题设反演公式可能不再有效。

9. 用与原解不同的代数或数字表达式独立复算数值，按1e−9相对误差容限审校全部答案。

10. 初步质检不等同第三方独立实验认证，题干科学性、原创性与版权需专家核定。

### 可复算数值答案

- heavy_fraction=0.36000000000000 fraction
- light_fraction=0.64000000000000 fraction
- heavy_light_ratio=0.56250000000000 ratio
- sigma_fraction=0.0048000000000000 fraction
- sigma_ratio=0.011718750000000 ratio
- relative_sigma_ratio=0.020833333333333 fraction
- lower95_heavy_fraction=0.35059200000000 fraction
- upper95_heavy_fraction=0.36940800000000 fraction
- sigma_fraction_double_counts=0.0033941125496954 fraction
- improvement_factor=1.4142135623731 ratio

## UC-ADV15-A237 HPLC分离度、理论塔板数及死时间校正选择性

某等度高效液相色谱分离两个中性组分，第一峰保留时间tR1=5.000 min、基线峰宽w1=0.4000 min；第二峰tR2=6.000 min、基线峰宽w2=0.5000 min。死时间tM=1.000 min，取基线宽塔板公式Ni=16(tRi/wi)²，分离度Rs=2(tR2−tR1)/(w1+w2)，保留因子ki=(tRi−tM)/tM，选择性α=k2/k1。求Rs、各Ni、两个保留因子、α、调整后保留时间、保留时间差、第二峰与第一峰基线峰宽比以及分离度大于1.5的布尔结论。说明塔板数仅描述峰展宽，不能直接视为分析物分离度。

### 严格定量推导

1. **分析条件与样品状态**：某等度高效液相色谱分离两个中性组分，第一峰保留时间tR1=5.000 min、基线峰宽w1=0.4000 min；第二峰tR2=6.000 min、基线峰宽w2=0.5000 min。死时间tM=1.000 min，取基线宽塔板公式Ni=16(tRi/wi)²，分离度Rs=2(tR2−tR1)/(w1+w2)，保留因子ki=(tRi−tM)/tM，选择性α=k2/k1。求Rs、各Ni、两个保留因子、α、调整后保留时间、保留时间差、第二峰与第一峰基线峰宽比以及分离度大于1.5的布尔结论。说明塔板数仅描述峰展宽，不能直接视为分析物分离度。

2. **由仪器观测反演量值的方程**：Rs=2ΔtR/(w1+w2)，N1=16(tR1/w1)²，N2=16(tR2/w2)²，α=(tR2−tM)/(tR1−tM)。

3. 逐一确定原液、定容后溶液、仪器原始信号与基体或空白贡献的区别，并标明活动度或浓度单位。

4. 先求主校正、校准常数和第一组结果：resolution_Rs=2.2222222222222 ratio；plates_peak1=2500.0000000000 plates；plates_peak2=2304.0000000000 plates。

5. 依次求得样本浓度、相对分率或谱线指标：retention_factor1=4.0000000000000 ratio；retention_factor2=5.0000000000000 ratio；selectivity_alpha=1.2500000000000 ratio。

6. 剩余相互独立输出与回代数值：adjusted_tR1_min=4.0000000000000 min；adjusted_tR2_min=5.0000000000000 min；baseline_width_ratio2_over1=1.2500000000000 ratio；resolution_exceeds_1p5_flag=1.0000000000000 boolean。

7. 将结果代回实际观测模型，并核对标样、稀释、单位和统计归一；所算物理量不应超出本题的仪器量程。

8. 如存在非线性基体效应、光谱峰重叠、浓度依赖活度或离子对，题设反演公式可能不再有效。

9. 用与原解不同的代数或数字表达式独立复算数值，按1e−9相对误差容限审校全部答案。

10. 初步质检不等同第三方独立实验认证，题干科学性、原创性与版权需专家核定。

### 可复算数值答案

- resolution_Rs=2.2222222222222 ratio
- plates_peak1=2500.0000000000 plates
- plates_peak2=2304.0000000000 plates
- retention_factor1=4.0000000000000 ratio
- retention_factor2=5.0000000000000 ratio
- selectivity_alpha=1.2500000000000 ratio
- adjusted_tR1_min=4.0000000000000 min
- adjusted_tR2_min=5.0000000000000 min
- baseline_width_ratio2_over1=1.2500000000000 ratio
- resolution_exceeds_1p5_flag=1.0000000000000 boolean

## UC-ADV15-A238 Ag⁺库仑滴定氯离子的电流效率与法拉第计量

在恒电流库仑滴定氯化物样品时，银阳极Ag(s)→Ag⁺+e⁻产生Ag⁺并立即以AgCl沉淀定量消耗Cl⁻。电流I=0.02000 A、电解时间t=300.0 s、电流效率η=0.9800（其余电子通量用于副反应）；取样品体积50.00 mL、MCl=35.453 g/mol、F=96485.33212 C/mol。假设氯离子足量且AgCl无损失，1 mol有效电子生成1 mol Ag⁺，求通过总电量、有效电量、Cl⁻摩尔数、样品Cl浓度(mol/L与mg/L)、对应Cl质量mg、副反应电量、忽略电流效率时的相对高估、以及在相同有效电量下电流降至一半所需时间。不要错误地把Ag电解当成二电子过程。

### 严格定量推导

1. **分析条件与样品状态**：在恒电流库仑滴定氯化物样品时，银阳极Ag(s)→Ag⁺+e⁻产生Ag⁺并立即以AgCl沉淀定量消耗Cl⁻。电流I=0.02000 A、电解时间t=300.0 s、电流效率η=0.9800（其余电子通量用于副反应）；取样品体积50.00 mL、MCl=35.453 g/mol、F=96485.33212 C/mol。假设氯离子足量且AgCl无损失，1 mol有效电子生成1 mol Ag⁺，求通过总电量、有效电量、Cl⁻摩尔数、样品Cl浓度(mol/L与mg/L)、对应Cl质量mg、副反应电量、忽略电流效率时的相对高估、以及在相同有效电量下电流降至一半所需时间。不要错误地把Ag电解当成二电子过程。

2. **由仪器观测反演量值的方程**：Q=It，Quseful=ηQ，nCl=Quseful/F，c=nCl/V，m=nCl MCl。

3. 逐一确定原液、定容后溶液、仪器原始信号与基体或空白贡献的区别，并标明活动度或浓度单位。

4. 先求主校正、校准常数和第一组结果：total_charge_C=6.0000000000000 C；effective_charge_C=5.8800000000000 C；chloride_moles=0.000060941905580912 mol。

5. 依次求得样本浓度、相对分率或谱线指标：chloride_concentration_M=0.0012188381116182 mol/L；chloride_mass_mg_L=43.211467571202 mg/L；chloride_mass_in_sample_mg=2.1605733785601 mg。

6. 剩余相互独立输出与回代数值：side_reaction_charge_C=0.12000000000000 C；naive_relative_bias=0.020408163265306 fraction；time_at_half_current_s=600.00000000000 s；electron_equivalents_mol=0.000060941905580912 mol。

7. 将结果代回实际观测模型，并核对标样、稀释、单位和统计归一；所算物理量不应超出本题的仪器量程。

8. 如存在非线性基体效应、光谱峰重叠、浓度依赖活度或离子对，题设反演公式可能不再有效。

9. 用与原解不同的代数或数字表达式独立复算数值，按1e−9相对误差容限审校全部答案。

10. 初步质检不等同第三方独立实验认证，题干科学性、原创性与版权需专家核定。

### 可复算数值答案

- total_charge_C=6.0000000000000 C
- effective_charge_C=5.8800000000000 C
- chloride_moles=0.000060941905580912 mol
- chloride_concentration_M=0.0012188381116182 mol/L
- chloride_mass_mg_L=43.211467571202 mg/L
- chloride_mass_in_sample_mg=2.1605733785601 mg
- side_reaction_charge_C=0.12000000000000 C
- naive_relative_bias=0.020408163265306 fraction
- time_at_half_current_s=600.00000000000 s
- electron_equivalents_mol=0.000060941905580912 mol

## UC-ADV15-A239 XRD微晶尺寸的仪器峰宽去卷积与Scherrer反演

某粉末XRD样品在波长λ=0.15406 nm的Cu Kα辐射下有一条衍射峰2θ=40.00°，实验全宽半高βobs=0.01000 rad（2θ角单位），仪器高斯展宽βinst=0.006000 rad。假定样品尺寸峰宽亦高斯，βsize=√(βobs²−βinst²)，Scherrer形状因子K=0.9000；忽略应变、微吸收与多峰重叠。按D=Kλ/[βsize cos θ]求微晶相干衍射尺寸nm，并求布拉格角θ、尺寸峰宽、尺寸峰宽占实测峰宽比、仪器峰宽占比、未扣仪器宽度时得到的错误尺寸、尺寸低估比例、以尺寸nm计算的1/D以及若改用βobs不扣宽度会低估多少nm。说明D是相干衍射尺寸而不必等于粒子几何直径。

### 严格定量推导

1. **分析条件与样品状态**：某粉末XRD样品在波长λ=0.15406 nm的Cu Kα辐射下有一条衍射峰2θ=40.00°，实验全宽半高βobs=0.01000 rad（2θ角单位），仪器高斯展宽βinst=0.006000 rad。假定样品尺寸峰宽亦高斯，βsize=√(βobs²−βinst²)，Scherrer形状因子K=0.9000；忽略应变、微吸收与多峰重叠。按D=Kλ/[βsize cos θ]求微晶相干衍射尺寸nm，并求布拉格角θ、尺寸峰宽、尺寸峰宽占实测峰宽比、仪器峰宽占比、未扣仪器宽度时得到的错误尺寸、尺寸低估比例、以尺寸nm计算的1/D以及若改用βobs不扣宽度会低估多少nm。说明D是相干衍射尺寸而不必等于粒子几何直径。

2. **由仪器观测反演量值的方程**：βsize²=βobs²−βinst²，D=Kλ/(βsize cosθ)，θ=(2θ)/2。

3. 逐一确定原液、定容后溶液、仪器原始信号与基体或空白贡献的区别，并标明活动度或浓度单位。

4. 先求主校正、校准常数和第一组结果：theta_deg=20.000000000000 deg；sample_broadening_rad=0.0080000000000000 rad；broadening_fraction=0.80000000000000 fraction。

5. 依次求得样本浓度、相对分率或谱线指标：instrumental_fraction=0.60000000000000 fraction；coherent_domain_nm=18.444063108109 nm；uncorrected_domain_nm=14.755250486488 nm。

6. 剩余相互独立输出与回代数值：relative_underestimate=0.20000000000000 fraction；inverse_domain_nmInv=0.054217988419283 nm^-1；absolute_underestimate_nm=3.6888126216219 nm；quadratic_broadening_check=0.00010000000000000 rad2。

7. 将结果代回实际观测模型，并核对标样、稀释、单位和统计归一；所算物理量不应超出本题的仪器量程。

8. 如存在非线性基体效应、光谱峰重叠、浓度依赖活度或离子对，题设反演公式可能不再有效。

9. 用与原解不同的代数或数字表达式独立复算数值，按1e−9相对误差容限审校全部答案。

10. 初步质检不等同第三方独立实验认证，题干科学性、原创性与版权需专家核定。

### 可复算数值答案

- theta_deg=20.000000000000 deg
- sample_broadening_rad=0.0080000000000000 rad
- broadening_fraction=0.80000000000000 fraction
- instrumental_fraction=0.60000000000000 fraction
- coherent_domain_nm=18.444063108109 nm
- uncorrected_domain_nm=14.755250486488 nm
- relative_underestimate=0.20000000000000 fraction
- inverse_domain_nmInv=0.054217988419283 nm^-1
- absolute_underestimate_nm=3.6888126216219 nm
- quadratic_broadening_check=0.00010000000000000 rad2

## UC-ADV15-A240 计时电流法Cottrell扩散电流的时间平方根规律

某理想平面电极在计时电位阶跃后发生单电子扩散控制还原，符合Cottrell方程i(t)=nFA C*√[D/(πt)]。给定n=1、F=96485.33212 C/mol、电极面积A=0.01000 cm²、主体浓度C*=0.001000 mol/L（须转换为mol/cm³）、扩散系数D=1.000×10⁻⁵ cm²/s。求t=1.000、4.000、16.00 s时的电流(A)、前两个电流比、i√t不变量、由4s电流反演的扩散系数、1s到16s的电流衰减分数、4s后若面积加倍的电流与16s电流除以4s电流的比。假设无限平板半无限扩散、无双电层电流、对流、迁移和反应动力学迟滞。

### 严格定量推导

1. **分析条件与样品状态**：某理想平面电极在计时电位阶跃后发生单电子扩散控制还原，符合Cottrell方程i(t)=nFA C*√[D/(πt)]。给定n=1、F=96485.33212 C/mol、电极面积A=0.01000 cm²、主体浓度C*=0.001000 mol/L（须转换为mol/cm³）、扩散系数D=1.000×10⁻⁵ cm²/s。求t=1.000、4.000、16.00 s时的电流(A)、前两个电流比、i√t不变量、由4s电流反演的扩散系数、1s到16s的电流衰减分数、4s后若面积加倍的电流与16s电流除以4s电流的比。假设无限平板半无限扩散、无双电层电流、对流、迁移和反应动力学迟滞。

2. **由仪器观测反演量值的方程**：i(t)=n F A C* √[D/(πt)]，C*=1e−6 mol/cm³，D=πt[i/(nFA C*)]²。

3. 逐一确定原液、定容后溶液、仪器原始信号与基体或空白贡献的区别，并标明活动度或浓度单位。

4. 先求主校正、校准常数和第一组结果：current_t1_A=0.0000017214180789030 A；current_t4_A=8.6070903945151e-7 A；current_t16_A=4.3035451972575e-7 A。

5. 依次求得样本浓度、相对分率或谱线指标：current_ratio_t1_t4=2.0000000000000 ratio；current_times_sqrt_t=0.0000017214180789030 A_sqrt_s；diffusion_D_recovered_cm2s=0.000010000000000000 cm2/s。

6. 剩余相互独立输出与回代数值：current_drop_1to16_fraction=0.75000000000000 fraction；double_area_current_t4_A=0.0000017214180789030 A；current_ratio_t16_t4=0.50000000000000 ratio；bulk_concentration_mol_cm3=0.0000010000000000000 mol/cm3。

7. 将结果代回实际观测模型，并核对标样、稀释、单位和统计归一；所算物理量不应超出本题的仪器量程。

8. 如存在非线性基体效应、光谱峰重叠、浓度依赖活度或离子对，题设反演公式可能不再有效。

9. 用与原解不同的代数或数字表达式独立复算数值，按1e−9相对误差容限审校全部答案。

10. 初步质检不等同第三方独立实验认证，题干科学性、原创性与版权需专家核定。

### 可复算数值答案

- current_t1_A=0.0000017214180789030 A
- current_t4_A=8.6070903945151e-7 A
- current_t16_A=4.3035451972575e-7 A
- current_ratio_t1_t4=2.0000000000000 ratio
- current_times_sqrt_t=0.0000017214180789030 A_sqrt_s
- diffusion_D_recovered_cm2s=0.000010000000000000 cm2/s
- current_drop_1to16_fraction=0.75000000000000 fraction
- double_area_current_t4_A=0.0000017214180789030 A
- current_ratio_t16_t4=0.50000000000000 ratio
- bulk_concentration_mol_cm3=0.0000010000000000000 mol/cm3

## UC-ADV15-A241 XPS以C 1s为内标的带电位移校正与峰间能差

某绝缘氧化物X射线光电子能谱(XPS)采用表面污染碳C 1s的284.80 eV结合能作为工作标尺。仪器原始谱图测得C 1s在285.60 eV、金属M 2p₃/₂在711.30 eV、对应M 2p₁/₂在724.80 eV，假定所有谱峰受到同一均匀正电荷能量平移δ=Eobs(C)−284.80。求δ、金属两个校正结合能、金属自旋轨道峰间距、校正金属峰相对C 1s的能差、校正后C1s能量、未校正的M2p₃/₂相对已知标尺的虚假偏差、2p₃/₂原始与校正能量比和两个金属峰校正后相对原始的移动量。说明差分峰间距不受均匀充电影响，但若是差异充电该模型失效。

### 严格定量推导

1. **分析条件与样品状态**：某绝缘氧化物X射线光电子能谱(XPS)采用表面污染碳C 1s的284.80 eV结合能作为工作标尺。仪器原始谱图测得C 1s在285.60 eV、金属M 2p₃/₂在711.30 eV、对应M 2p₁/₂在724.80 eV，假定所有谱峰受到同一均匀正电荷能量平移δ=Eobs(C)−284.80。求δ、金属两个校正结合能、金属自旋轨道峰间距、校正金属峰相对C 1s的能差、校正后C1s能量、未校正的M2p₃/₂相对已知标尺的虚假偏差、2p₃/₂原始与校正能量比和两个金属峰校正后相对原始的移动量。说明差分峰间距不受均匀充电影响，但若是差异充电该模型失效。

2. **由仪器观测反演量值的方程**：δ=Eobs(C)−284.80，Ecorrected=Eobserved−δ，ΔEso=E1/2−E3/2。

3. 逐一确定原液、定容后溶液、仪器原始信号与基体或空白贡献的区别，并标明活动度或浓度单位。

4. 先求主校正、校准常数和第一组结果：charging_offset_eV=0.80000000000001 eV；metal_2p3_corrected_eV=710.50000000000 eV；metal_2p1_corrected_eV=724.00000000000 eV。

5. 依次求得样本浓度、相对分率或谱线指标：spin_orbit_splitting_eV=13.500000000000 eV；metal_C_relative_eV=425.70000000000 eV；carbon_corrected_eV=284.80000000000 eV。

6. 剩余相互独立输出与回代数值：false_uncorrected_offset_eV=0.80000000000001 eV；raw_to_corrected_metal_ratio=1.0011259676284 ratio；metal_peak_shift_2p3_eV=-0.79999999999995 eV；metal_peak_shift_2p1_eV=-0.79999999999995 eV。

7. 将结果代回实际观测模型，并核对标样、稀释、单位和统计归一；所算物理量不应超出本题的仪器量程。

8. 如存在非线性基体效应、光谱峰重叠、浓度依赖活度或离子对，题设反演公式可能不再有效。

9. 用与原解不同的代数或数字表达式独立复算数值，按1e−9相对误差容限审校全部答案。

10. 初步质检不等同第三方独立实验认证，题干科学性、原创性与版权需专家核定。

### 可复算数值答案

- charging_offset_eV=0.80000000000001 eV
- metal_2p3_corrected_eV=710.50000000000 eV
- metal_2p1_corrected_eV=724.00000000000 eV
- spin_orbit_splitting_eV=13.500000000000 eV
- metal_C_relative_eV=425.70000000000 eV
- carbon_corrected_eV=284.80000000000 eV
- false_uncorrected_offset_eV=0.80000000000001 eV
- raw_to_corrected_metal_ratio=1.0011259676284 ratio
- metal_peak_shift_2p3_eV=-0.79999999999995 eV
- metal_peak_shift_2p1_eV=-0.79999999999995 eV

## UC-ADV15-A242 Raman反Stokes/Stokes热平衡强度比与温度回推

某分子的单一Raman活性振动模具有波数位移Δν=1000.0 cm⁻¹，泵浦波长λ0=532.0 nm，对应激光波数ν0=10⁷/λ0(nm) cm⁻¹。Stokes与anti-Stokes散射波数νS=ν0−Δν、νAS=ν0+Δν，假定相同散射截面且同一光学通道灵敏度已校正。热平衡的积分强度比I_AS/I_S=(νAS/νS)^4 exp[−(hc/kB)Δν/T]，hc/kB=1.438776877 cm·K。求T=300.0 K下的泵浦、Stokes、反Stokes波数、频率四次方修正因子、纯Boltzmann因子、强度比、该比在T=400.0 K时的值、强度比倍率、用300 K比值反推温度及错误漏掉频率因子时所推算的偏差。需区别Raman的波数与普通Hz频率。

### 严格定量推导

1. **分析条件与样品状态**：某分子的单一Raman活性振动模具有波数位移Δν=1000.0 cm⁻¹，泵浦波长λ0=532.0 nm，对应激光波数ν0=10⁷/λ0(nm) cm⁻¹。Stokes与anti-Stokes散射波数νS=ν0−Δν、νAS=ν0+Δν，假定相同散射截面且同一光学通道灵敏度已校正。热平衡的积分强度比I_AS/I_S=(νAS/νS)^4 exp[−(hc/kB)Δν/T]，hc/kB=1.438776877 cm·K。求T=300.0 K下的泵浦、Stokes、反Stokes波数、频率四次方修正因子、纯Boltzmann因子、强度比、该比在T=400.0 K时的值、强度比倍率、用300 K比值反推温度及错误漏掉频率因子时所推算的偏差。需区别Raman的波数与普通Hz频率。

2. **由仪器观测反演量值的方程**：Q=(νAS/νS)^4，I_AS/I_S=Qe^(−1.438776877 Δν/T)，T=(1.438776877 Δν)/ln(Q/Iratio)。

3. 逐一确定原液、定容后溶液、仪器原始信号与基体或空白贡献的区别，并标明活动度或浓度单位。

4. 先求主校正、校准常数和第一组结果：laser_wavenumber_cmInv=18796.992481203 cm^-1；Stokes_wavenumber=17796.992481203 cm^-1；antiStokes_wavenumber=19796.992481203 cm^-1。

5. 依次求得样本浓度、相对分率或谱线指标：frequency_fourth_factor=1.5311241434944 ratio；Boltzmann_factor_300=0.0082633688514459 ratio；intensity_ratio_300=0.012652243555048 ratio。

6. 剩余相互独立输出与回代数值：intensity_ratio_400=0.041964133384557 ratio；ratio_400_over300=3.3167345539924 ratio；recovered_temperature_300=300.00000000000 K；wrong_temperature_ignore_freq_minus_true_K=29.245532829538 K。

7. 将结果代回实际观测模型，并核对标样、稀释、单位和统计归一；所算物理量不应超出本题的仪器量程。

8. 如存在非线性基体效应、光谱峰重叠、浓度依赖活度或离子对，题设反演公式可能不再有效。

9. 用与原解不同的代数或数字表达式独立复算数值，按1e−9相对误差容限审校全部答案。

10. 初步质检不等同第三方独立实验认证，题干科学性、原创性与版权需专家核定。

### 可复算数值答案

- laser_wavenumber_cmInv=18796.992481203 cm^-1
- Stokes_wavenumber=17796.992481203 cm^-1
- antiStokes_wavenumber=19796.992481203 cm^-1
- frequency_fourth_factor=1.5311241434944 ratio
- Boltzmann_factor_300=0.0082633688514459 ratio
- intensity_ratio_300=0.012652243555048 ratio
- intensity_ratio_400=0.041964133384557 ratio
- ratio_400_over300=3.3167345539924 ratio
- recovered_temperature_300=300.00000000000 K
- wrong_temperature_ignore_freq_minus_true_K=29.245532829538 K

## UC-ADV15-A243 气相色谱外标直线的定量范围、检出限与稀释回算

一台GC检测器在选定线性范围内满足积分峰面积A=b+mC，标定空白截距b=200.0 counts、斜率m=500.0 counts/(mg/L)。浓度20.00 mg/L的标样峰面积Astd=10200 counts；被测原样先进行5.000倍稀释，稀释液峰面积Aunk=6200 counts。空白面积随机标准差σblank=30.00 counts，检出限LOD=3σblank/m、定量限LOQ=10σblank/m。假定标定精确且没有基体抑制，求稀释液与原样浓度、标样校准回算浓度、LOD/LOQ、未知信号净峰面积、标样净峰面积、原样与标样浓度比、未知浓度对LOQ的倍数及如果错误不扣截距得到的样品原浓度和高估误差。区别检出限与仪器最终可以准确测量的范围。

### 严格定量推导

1. **分析条件与样品状态**：一台GC检测器在选定线性范围内满足积分峰面积A=b+mC，标定空白截距b=200.0 counts、斜率m=500.0 counts/(mg/L)。浓度20.00 mg/L的标样峰面积Astd=10200 counts；被测原样先进行5.000倍稀释，稀释液峰面积Aunk=6200 counts。空白面积随机标准差σblank=30.00 counts，检出限LOD=3σblank/m、定量限LOQ=10σblank/m。假定标定精确且没有基体抑制，求稀释液与原样浓度、标样校准回算浓度、LOD/LOQ、未知信号净峰面积、标样净峰面积、原样与标样浓度比、未知浓度对LOQ的倍数及如果错误不扣截距得到的样品原浓度和高估误差。区别检出限与仪器最终可以准确测量的范围。

2. **由仪器观测反演量值的方程**：C=(A−b)/m；C_original=5 C_diluted；LOD=3σ/m。

3. 逐一确定原液、定容后溶液、仪器原始信号与基体或空白贡献的区别，并标明活动度或浓度单位。

4. 先求主校正、校准常数和第一组结果：diluted_concentration_mgL=12.000000000000 mg/L；original_concentration_mgL=60.000000000000 mg/L；standard_recovered_mgL=20.000000000000 mg/L。

5. 依次求得样本浓度、相对分率或谱线指标：LOD_mgL=0.18000000000000 mg/L；LOQ_mgL=0.60000000000000 mg/L；unknown_net_area=6000.0000000000 counts。

6. 剩余相互独立输出与回代数值：standard_net_area=10000.000000000 counts；original_to_standard_concentration_ratio=3.0000000000000 ratio；diluted_over_LOQ=20.000000000000 ratio；naive_original_concentration_mgL=62.000000000000 mg/L；naive_overestimate_mgL=2.0000000000000 mg/L。

7. 将结果代回实际观测模型，并核对标样、稀释、单位和统计归一；所算物理量不应超出本题的仪器量程。

8. 如存在非线性基体效应、光谱峰重叠、浓度依赖活度或离子对，题设反演公式可能不再有效。

9. 用与原解不同的代数或数字表达式独立复算数值，按1e−9相对误差容限审校全部答案。

10. 初步质检不等同第三方独立实验认证，题干科学性、原创性与版权需专家核定。

### 可复算数值答案

- diluted_concentration_mgL=12.000000000000 mg/L
- original_concentration_mgL=60.000000000000 mg/L
- standard_recovered_mgL=20.000000000000 mg/L
- LOD_mgL=0.18000000000000 mg/L
- LOQ_mgL=0.60000000000000 mg/L
- unknown_net_area=6000.0000000000 counts
- standard_net_area=10000.000000000 counts
- original_to_standard_concentration_ratio=3.0000000000000 ratio
- diluted_over_LOQ=20.000000000000 ratio
- naive_original_concentration_mgL=62.000000000000 mg/L
- naive_overestimate_mgL=2.0000000000000 mg/L

## UC-ADV15-A244 荧光各向异性双平行偏振信号的G因子校正

偏振荧光光谱仪测得样品甲平行通道计数I∥=360.0、垂直通道I⊥=180.0，样品乙I∥=240.0、I⊥=150.0。因光路探测效率差异，经标定需乘垂直信号校正因子G=1.200，即I⊥,corr=G I⊥。在忽略背景与偏振串扰条件下，荧光各向异性r=(I∥−G I⊥)/(I∥+2G I⊥)，偏振度P=(I∥−G I⊥)/(I∥+G I⊥)。求两样品的修正垂直信号、r、P、总强度I∥+2GI⊥，两样品r差、r甲/r乙，以及从P甲经r=2P/(3−P)重算的r甲。强调G是响应比例而不是荧光量子产率。

### 严格定量推导

1. **分析条件与样品状态**：偏振荧光光谱仪测得样品甲平行通道计数I∥=360.0、垂直通道I⊥=180.0，样品乙I∥=240.0、I⊥=150.0。因光路探测效率差异，经标定需乘垂直信号校正因子G=1.200，即I⊥,corr=G I⊥。在忽略背景与偏振串扰条件下，荧光各向异性r=(I∥−G I⊥)/(I∥+2G I⊥)，偏振度P=(I∥−G I⊥)/(I∥+G I⊥)。求两样品的修正垂直信号、r、P、总强度I∥+2GI⊥，两样品r差、r甲/r乙，以及从P甲经r=2P/(3−P)重算的r甲。强调G是响应比例而不是荧光量子产率。

2. **由仪器观测反演量值的方程**：J⊥=GI⊥；r=(I∥−J⊥)/(I∥+2J⊥)；P=(I∥−J⊥)/(I∥+J⊥)。

3. 逐一确定原液、定容后溶液、仪器原始信号与基体或空白贡献的区别，并标明活动度或浓度单位。

4. 先求主校正、校准常数和第一组结果：corrected_perpendicular_A=216.00000000000 counts；corrected_perpendicular_B=180.00000000000 counts；anisotropy_A=0.18181818181818 ratio。

5. 依次求得样本浓度、相对分率或谱线指标：anisotropy_B=0.10000000000000 ratio；polarization_A=0.25000000000000 ratio；polarization_B=0.14285714285714 ratio。

6. 剩余相互独立输出与回代数值：total_intensity_A=792.00000000000 counts；total_intensity_B=600.00000000000 counts；anisotropy_difference_A_minus_B=0.081818181818182 ratio；anisotropy_ratio_A_B=1.8181818181818 ratio；rA_from_P=0.18181818181818 ratio。

7. 将结果代回实际观测模型，并核对标样、稀释、单位和统计归一；所算物理量不应超出本题的仪器量程。

8. 如存在非线性基体效应、光谱峰重叠、浓度依赖活度或离子对，题设反演公式可能不再有效。

9. 用与原解不同的代数或数字表达式独立复算数值，按1e−9相对误差容限审校全部答案。

10. 初步质检不等同第三方独立实验认证，题干科学性、原创性与版权需专家核定。

### 可复算数值答案

- corrected_perpendicular_A=216.00000000000 counts
- corrected_perpendicular_B=180.00000000000 counts
- anisotropy_A=0.18181818181818 ratio
- anisotropy_B=0.10000000000000 ratio
- polarization_A=0.25000000000000 ratio
- polarization_B=0.14285714285714 ratio
- total_intensity_A=792.00000000000 counts
- total_intensity_B=600.00000000000 counts
- anisotropy_difference_A_minus_B=0.081818181818182 ratio
- anisotropy_ratio_A_B=1.8181818181818 ratio
- rA_from_P=0.18181818181818 ratio