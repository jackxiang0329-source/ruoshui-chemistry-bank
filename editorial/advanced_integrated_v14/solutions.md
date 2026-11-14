# 第十四辑 · 100 道题与解答

本辑题目均待专家审校。

| 批次 | 题数 | 题号 |
|---|---:|---|
| [第十四辑首批14题 · 四科不同模型与全部数值答案](#batch-01) | 14 | I201–I204、A201–A204、O198–O200、P198–P200 |
| [第十四辑第二批：16道不同化学模型的完整题目与逐步解析](#batch-02) | 16 | I205–I208、A205–A208、O201–O204、P201–P204 |
| [第十四辑第三批16道高阶化学综合题（待专家审查）](#batch-03) | 16 | I209–I212、A209–A212、O205–O208、P205–P208 |
| [第十四辑第四批8题完整中文题解（待审）](#batch-04) | 8 | I213–I214、A213–A214、O209–O210、P209–P210 |
| [第十四辑手动续编：无机化学 I215–I224](#batch-05) | 10 | I215–I224 |
| [第十四辑手动续编：分析化学 A215–A224](#batch-06) | 10 | A215–A224 |
| [第十四辑有机化学十道 O211–O220 完整解析](#batch-07) | 10 | O211–O220 |
| [第十四辑手动续编物理化学十题 P211–P220](#batch-08) | 10 | P211–P220 |
| [第十四辑收官6题：四科严格解析及数值向量](#batch-09) | 6 | I225、A225、O221–O222、P221–P222 |

<a id="batch-01"></a>

## 第十四辑首批14题 · 四科不同模型与全部数值答案

### UC-ADV14-I201 二茂铁和六羰基铬的18电子计数与CO解离电价核验

#### 完整题目

配合物Fe(η⁵-C₅H₅)₂（中性二茂铁）与Cr(CO)₆都按离子型电子计数。Fe基态族价电子为8个，两个Cp⁻各贡献6e⁻，Fe在二茂铁为+2价，因而d电子数6，合计18e⁻。Cr(CO)₆金属Cr氧化态0，d电子数6，六个CO各捐献2e⁻。假想Cr(CO)₆首先光解失去一个CO成为16电子Cr(CO)₅；若重新配位一个PPh₃、其每个PPh₃贡献2e⁻，计算恢复的价电子数。求四种配合物及中间体d电子、配体捐电子数、18e偏差、CO脱离前后配位数，说明18电子规则是经验而非普适稳定性定理。

#### 逐步严谨解答

1. 已知物理化学与计量参数：配合物Fe(η⁵-C₅H₅)₂（中性二茂铁）与Cr(CO)₆都按离子型电子计数。Fe基态族价电子为8个，两个Cp⁻各贡献6e⁻，Fe在二茂铁为+2价，因而d电子数6，合计18e⁻。Cr(CO)₆金属Cr氧化态0，d电子数6，六个CO各捐献2e⁻。假想Cr(CO)₆首先光解失去一个CO成为16电子Cr(CO)₅；若重新配位一个PPh₃、其每个PPh₃贡献2e⁻，计算恢复的价电子数。求四种配合物及中间体d电子、配体捐电子数、18e偏差、CO脱离前后配位数，说明18电子规则是经验而非普适稳定性定理。

2. 理论原理及计算公式：电子总数n_e=金属d电子数+各配体供电子数；d^n=族数−氧化态（离子型计数）。

3. 推导与定量判断：二茂铁要先把每个Cp判为−1价，Fe氧化态+2；CO和PPh3是中性L型2电子配体，Cr保持0。

4. 将所有质量、电子数、浓度和摩尔量与所列模型中的标准态统一，必要时把g转换kg、eV转换J。

5. 由基本关系计算前四个答案：ferrocene_metal_d_e=6.000000000000 electrons；ferrocene_Cp_donated_e=12.00000000000 electrons；ferrocene_total_e=18.00000000000 electrons；chromium_d_e=6.000000000000 electrons。

6. 由相同关系求其余主要答案：chromium_CO_donated_e=12.00000000000 electrons；CrCO6_total_e=18.00000000000 electrons；CrCO5_total_e=16.00000000000 electrons；CrCO5PPh3_total_e=18.00000000000 electrons。

7. 进一步复核与最终可观察量：CrCO5_electron_deficit=2.000000000000 electrons；CrCO5_coordination_number=5.000000000000 ligands。

8. 复核全元素/电荷/概率或能量守恒；对于线性响应与物质的量换算，应同时注意浓度和体积的乘法关系。

9. 题面理想化假设不排除真实实验的非理想活度、离子强度、链转移或层间热接触问题；不得无条件外推。

10. 此题包含数值验证但尚需专家审定化学科学性、难度与跨辑内容原创性。

#### 全部数值答案与单位

- ferrocene_metal_d_e=6.000000000000 electrons
- ferrocene_Cp_donated_e=12.00000000000 electrons
- ferrocene_total_e=18.00000000000 electrons
- chromium_d_e=6.000000000000 electrons
- chromium_CO_donated_e=12.00000000000 electrons
- CrCO6_total_e=18.00000000000 electrons
- CrCO5_total_e=16.00000000000 electrons
- CrCO5PPh3_total_e=18.00000000000 electrons
- CrCO5_electron_deficit=2.000000000000 electrons
- CrCO5_coordination_number=5.000000000000 ligands


### UC-ADV14-I202 金属羰基同位素替换的简谐伸缩频率及力常数校验

#### 完整题目

假想强配位金属羰基中C≡O伸缩看作独立双原子谐振子，12C16O峰位νtilde12=2050.0 cm⁻¹，原子摩尔质量取12C=12.000、13C=13.003355、16O=15.994915 g/mol。忽略同位素改变键力常数与金属–C耦合；振动波数νtilde=(1/2πc)√(k/μ)，c=299792458 m/s，μ为单分子约化质量。求12CO、13CO约化质量(u和kg)、13CO预测波数、位移cm⁻¹、波数比、两个同位素对应的振动光子能量eV和波长μm；指出测得差异若偏离理论，可能来自振动耦合。

#### 逐步严谨解答

1. 已知物理化学与计量参数：假想强配位金属羰基中C≡O伸缩看作独立双原子谐振子，12C16O峰位νtilde12=2050.0 cm⁻¹，原子摩尔质量取12C=12.000、13C=13.003355、16O=15.994915 g/mol。忽略同位素改变键力常数与金属–C耦合；振动波数νtilde=(1/2πc)√(k/μ)，c=299792458 m/s，μ为单分子约化质量。求12CO、13CO约化质量(u和kg)、13CO预测波数、位移cm⁻¹、波数比、两个同位素对应的振动光子能量eV和波长μm；指出测得差异若偏离理论，可能来自振动耦合。

2. 理论原理及计算公式：μ=mC mO/(mC+mO)；νtilde13/νtilde12=√(μ12/μ13)；E=h c νtilde（νtilde用m⁻¹）。

3. 推导与定量判断：同位素替换不变键力常数但增大μ，使振动频率下降，cm⁻¹到m⁻¹需要乘100。

4. 将所有质量、电子数、浓度和摩尔量与所列模型中的标准态统一，必要时把g转换kg、eV转换J。

5. 由基本关系计算前四个答案：reduced_mass_12CO_u=6.856208707903 u；reduced_mass_13CO_u=7.172412628058 u；reduced_mass_12CO_kg=1.138500240824e-26 kg；reduced_mass_13CO_kg=1.191007137066e-26 kg。

6. 由相同关系求其余主要答案：isotope_wavenumber_13_cmInv=2004.302381371 cm^-1；wavenumber_shift_cmInv=45.69761862945 cm^-1；frequency_ratio=0.9777084787173 ratio；photon_energy_12_eV=0.2541676067881 eV。

7. 进一步复核与最终可观察量：photon_energy_13_eV=0.2485018241720 eV；wavelength_13_um=4.989267135013 micrometer。

8. 复核全元素/电荷/概率或能量守恒；对于线性响应与物质的量换算，应同时注意浓度和体积的乘法关系。

9. 题面理想化假设不排除真实实验的非理想活度、离子强度、链转移或层间热接触问题；不得无条件外推。

10. 此题包含数值验证但尚需专家审定化学科学性、难度与跨辑内容原创性。

#### 全部数值答案与单位

- reduced_mass_12CO_u=6.856208707903 u
- reduced_mass_13CO_u=7.172412628058 u
- reduced_mass_12CO_kg=1.138500240824e-26 kg
- reduced_mass_13CO_kg=1.191007137066e-26 kg
- isotope_wavenumber_13_cmInv=2004.302381371 cm^-1
- wavenumber_shift_cmInv=45.69761862945 cm^-1
- frequency_ratio=0.9777084787173 ratio
- photon_energy_12_eV=0.2541676067881 eV
- photon_energy_13_eV=0.2485018241720 eV
- wavelength_13_um=4.989267135013 micrometer


### UC-ADV14-I203 [Fe(CN)₆]³⁻/⁴⁻氧化态、电荷守恒与还原电子库存

#### 完整题目

溶液中只有六氰合铁(III)阴离子[Fe(CN)₆]³⁻和六氰合铁(II)阴离子[Fe(CN)₆]⁴⁻，总络阴离子浓度C=0.01000 mol/L，其中Fe(III)物种分率f=0.3000，其余为Fe(II)。每个CN配体视为−1电荷，全部络阴离子以K⁺为唯一反离子、完全解离，无游离氰根。求两络物种浓度、平均铁氧化态、K⁺电中和所需浓度、按一电子氧化全部Fe(II)时所需电量（以1.000 L溶液计）、每mol络离子的平均负电荷及六氰配体总浓度，检验溶液电荷平衡并指出络离子配体数量不会随氧化态改变。

#### 逐步严谨解答

1. 已知物理化学与计量参数：溶液中只有六氰合铁(III)阴离子[Fe(CN)₆]³⁻和六氰合铁(II)阴离子[Fe(CN)₆]⁴⁻，总络阴离子浓度C=0.01000 mol/L，其中Fe(III)物种分率f=0.3000，其余为Fe(II)。每个CN配体视为−1电荷，全部络阴离子以K⁺为唯一反离子、完全解离，无游离氰根。求两络物种浓度、平均铁氧化态、K⁺电中和所需浓度、按一电子氧化全部Fe(II)时所需电量（以1.000 L溶液计）、每mol络离子的平均负电荷及六氰配体总浓度，检验溶液电荷平衡并指出络离子配体数量不会随氧化态改变。

2. 理论原理及计算公式：Fe平均氧化数=3f+2(1−f)，负电荷平均=3f+4(1−f)，[K+]=3[FeIII]+4[FeII]。

3. 推导与定量判断：氧化Fe(II)到Fe(III)每mol需要转移1 mol电子；氧化后重新形成的反离子电荷需求会变化，不能忽略反离子释放。

4. 将所有质量、电子数、浓度和摩尔量与所列模型中的标准态统一，必要时把g转换kg、eV转换J。

5. 由基本关系计算前四个答案：FeIII_complex_M=0.003000000000000 mol/L；FeII_complex_M=0.007000000000000 mol/L；average_oxidation_state=2.300000000000 oxidation；potassium_M=0.03700000000000 mol/L。

6. 由相同关系求其余主要答案：average_anion_charge_magnitude=3.700000000000 charge；ligand_CN_bound_M=0.06000000000000 mol/L；oxidation_charge_C_per_L=675.3973248400 C/L；Fe_inventory_M=0.01000000000000 mol/L。

7. 进一步复核与最终可观察量：charge_neutrality_residual_M=0.000000000000 mol/L；FeII_fraction=0.7000000000000 fraction。

8. 复核全元素/电荷/概率或能量守恒；对于线性响应与物质的量换算，应同时注意浓度和体积的乘法关系。

9. 题面理想化假设不排除真实实验的非理想活度、离子强度、链转移或层间热接触问题；不得无条件外推。

10. 此题包含数值验证但尚需专家审定化学科学性、难度与跨辑内容原创性。

#### 全部数值答案与单位

- FeIII_complex_M=0.003000000000000 mol/L
- FeII_complex_M=0.007000000000000 mol/L
- average_oxidation_state=2.300000000000 oxidation
- potassium_M=0.03700000000000 mol/L
- average_anion_charge_magnitude=3.700000000000 charge
- ligand_CN_bound_M=0.06000000000000 mol/L
- oxidation_charge_C_per_L=675.3973248400 C/L
- Fe_inventory_M=0.01000000000000 mol/L
- charge_neutrality_residual_M=0.000000000000 mol/L
- FeII_fraction=0.7000000000000 fraction


### UC-ADV14-I204 Na₂FePO₄F氟磷酸盐正极一电子容量与电极能量

#### 完整题目

假想Na₂FePO₄F（摩尔质量195.79 g/mol）的正极工作窗口仅发生1个Na离子脱嵌伴随Fe²⁺→Fe³⁺，即每式量1 mol电子，平均工作电压3.100 V。若完全理想可逆，取F=96485.33212 C/mol，计算理论比电量C/g、mAh/g、Wh/kg，放电深度80.00%时容量和能量、3.000 g电极活性物质放电电量及能量、放电过程中Na原子物质的量以及按C/2放电的电流（以3.000 g全理论容量为基准）。不计电解液和集流体；此值不是整包能量密度。

#### 逐步严谨解答

1. 已知物理化学与计量参数：假想Na₂FePO₄F（摩尔质量195.79 g/mol）的正极工作窗口仅发生1个Na离子脱嵌伴随Fe²⁺→Fe³⁺，即每式量1 mol电子，平均工作电压3.100 V。若完全理想可逆，取F=96485.33212 C/mol，计算理论比电量C/g、mAh/g、Wh/kg，放电深度80.00%时容量和能量、3.000 g电极活性物质放电电量及能量、放电过程中Na原子物质的量以及按C/2放电的电流（以3.000 g全理论容量为基准）。不计电解液和集流体；此值不是整包能量密度。

2. 理论原理及计算公式：capacity(mAh/g)=F*1000/(3600 M)，energy(Wh/kg)=capacity*V，Qsample=F m/M·DOD。

3. 推导与定量判断：Na₂FePO₄F含两Na但题设只允许一个电子循环，所以不可机械按2F每式量计容量。

4. 将所有质量、电子数、浓度和摩尔量与所列模型中的标准态统一，必要时把g转换kg、eV转换J。

5. 由基本关系计算前四个答案：specific_charge_C_per_g=492.8001027632 C/g；theoretical_capacity_mAh_g=136.8889174342 mAh/g；theoretical_energy_Wh_kg=424.3556440461 Wh/kg；DOD_capacity_mAh_g=109.5111339474 mAh/g。

6. 由相同关系求其余主要答案：DOD_energy_Wh_kg=339.4845152368 Wh/kg；sample_charge_80pct_C=1182.720246632 C；sample_energy_Wh=1.018453545711 Wh；sodium_extracted_mol=0.01225803156443 mol。

7. 进一步复核与最终可观察量：C_over_2_current_A=0.2053333761513 A；capacity_ratio_to_LiFePO4=0.8057612748353 ratio。

8. 复核全元素/电荷/概率或能量守恒；对于线性响应与物质的量换算，应同时注意浓度和体积的乘法关系。

9. 题面理想化假设不排除真实实验的非理想活度、离子强度、链转移或层间热接触问题；不得无条件外推。

10. 此题包含数值验证但尚需专家审定化学科学性、难度与跨辑内容原创性。

#### 全部数值答案与单位

- specific_charge_C_per_g=492.8001027632 C/g
- theoretical_capacity_mAh_g=136.8889174342 mAh/g
- theoretical_energy_Wh_kg=424.3556440461 Wh/kg
- DOD_capacity_mAh_g=109.5111339474 mAh/g
- DOD_energy_Wh_kg=339.4845152368 Wh/kg
- sample_charge_80pct_C=1182.720246632 C
- sample_energy_Wh=1.018453545711 Wh
- sodium_extracted_mol=0.01225803156443 mol
- C_over_2_current_A=0.2053333761513 A
- capacity_ratio_to_LiFePO4=0.8057612748353 ratio


### UC-ADV14-A201 外标LC–MS校准的检出限、定量限与空白噪声

#### 完整题目

某线性LC–MS外标响应S=kc+b（S为计数、c为ng/mL），斜率k=2000 counts/(ng/mL)，截距b=1000 counts。连续11次独立空白测得信号标准差sb=60.00 counts，在本题规定仪器方法中检出限LOD=3sb/k、定量限LOQ=10sb/k。分析物未知样信号Ssample=7000 counts，体积稀释倍数D=5.000。求样品测定溶液浓度、原样浓度、LOD、LOQ、二者比值、对应校准响应及样本信噪比(S−b)/sb、原样相对于LOD和LOQ的倍数。明确本题采用3σ/10σ约定而非由全浓度系列验证的不确定度模型。

#### 逐步严谨解答

1. 已知物理化学与计量参数：某线性LC–MS外标响应S=kc+b（S为计数、c为ng/mL），斜率k=2000 counts/(ng/mL)，截距b=1000 counts。连续11次独立空白测得信号标准差sb=60.00 counts，在本题规定仪器方法中检出限LOD=3sb/k、定量限LOQ=10sb/k。分析物未知样信号Ssample=7000 counts，体积稀释倍数D=5.000。求样品测定溶液浓度、原样浓度、LOD、LOQ、二者比值、对应校准响应及样本信噪比(S−b)/sb、原样相对于LOD和LOQ的倍数。明确本题采用3σ/10σ约定而非由全浓度系列验证的不确定度模型。

2. 理论原理及计算公式：c_meas=(S−b)/k，c_original=D c_meas，LOD=3sb/k，LOQ=10sb/k。

3. 推导与定量判断：空白噪声除以信号灵敏度得到浓度噪声，截距需从样品信号扣除，稀释倍数只用于还原原样浓度。

4. 将所有质量、电子数、浓度和摩尔量与所列模型中的标准态统一，必要时把g转换kg、eV转换J。

5. 由基本关系计算前四个答案：measured_sample_concentration_ng_mL=3.000000000000 ng/mL；original_sample_concentration_ng_mL=15.00000000000 ng/mL；LOD_ng_mL=0.09000000000000 ng/mL；LOQ_ng_mL=0.3000000000000 ng/mL。

6. 由相同关系求其余主要答案：LOQ_over_LOD=3.333333333333 ratio；signal_at_LOD=1180.000000000 counts；signal_at_LOQ=1600.000000000 counts；sample_signal_to_noise=100.0000000000 ratio。

7. 进一步复核与最终可观察量：original_over_LOD=166.6666666667 ratio；original_over_LOQ=50.00000000000 ratio。

8. 复核全元素/电荷/概率或能量守恒；对于线性响应与物质的量换算，应同时注意浓度和体积的乘法关系。

9. 题面理想化假设不排除真实实验的非理想活度、离子强度、链转移或层间热接触问题；不得无条件外推。

10. 此题包含数值验证但尚需专家审定化学科学性、难度与跨辑内容原创性。

#### 全部数值答案与单位

- measured_sample_concentration_ng_mL=3.000000000000 ng/mL
- original_sample_concentration_ng_mL=15.00000000000 ng/mL
- LOD_ng_mL=0.09000000000000 ng/mL
- LOQ_ng_mL=0.3000000000000 ng/mL
- LOQ_over_LOD=3.333333333333 ratio
- signal_at_LOD=1180.000000000 counts
- signal_at_LOQ=1600.000000000 counts
- sample_signal_to_noise=100.0000000000 ratio
- original_over_LOD=166.6666666667 ratio
- original_over_LOQ=50.00000000000 ratio


### UC-ADV14-A202 定量核磁qNMR内标的多质子积分与质量纯度校正

#### 完整题目

定量¹H-NMR采用延迟足够长的积分条件，样品含未知纯度化合物A，取样质量mA=20.00 mg、摩尔质量MA=200.0 g/mol，选择其1条不重叠峰代表nHA=2个质子，积分IA=8.000。加入纯内标S质量mS=10.00 mg、摩尔质量MS=100.0 g/mol，内标不重叠峰代表nHS=3个质子，积分IS=15.00。假设所有积分线性且回收100%。求样品A的物质的量与质量、质量纯度、样品中杂质质量、每个质子的平均信号积分比以及按内标平均质子积分求出的A理论质量。若忽略积分峰所代表质子数将出现何种定量偏差？

#### 逐步严谨解答

1. 题干与严格测量假设：定量¹H-NMR采用延迟足够长的积分条件，样品含未知纯度化合物A，取样质量mA=20.00 mg、摩尔质量MA=200.0 g/mol，选择其1条不重叠峰代表nHA=2个质子，积分IA=8.000。加入纯内标S质量mS=10.00 mg、摩尔质量MS=100.0 g/mol，内标不重叠峰代表nHS=3个质子，积分IS=15.00。假设所有积分线性且回收100%。求样品A的物质的量与质量、质量纯度、样品中杂质质量、每个质子的平均信号积分比以及按内标平均质子积分求出的A理论质量。若忽略积分峰所代表质子数将出现何种定量偏差？

2. qNMR绝对定量方程 nA=nS(IA/nHA)/(IS/nHS)；已知积分IA=8.000，nHA=2与nHS=3，不应省略质子数。

3. 整理量纲，质量用mg与g按1000换算，波长吸光度保持无量纲、浓度统一为mol/L。

4. 首组反演结果：standard_moles=0.0001000000000000 mol；analyte_moles=0.00008000000000000 mol；analyte_pure_mass_mg=16.00000000000 mg；analyte_mass_purity=0.8000000000000 fraction。

5. 后续定量结果：impurity_mass_mg=4.000000000000 mg；normalized_analyte_integral_per_proton=4.000000000000 signal；normalized_standard_integral_per_proton=5.000000000000 signal；integral_per_mol_ratio=0.8000000000000 ratio。

6. 交叉复核：naive_mass_mg_without_H_correction=10.66666666667 mg；naive_purity=0.5333333333333 fraction。

7. 独立检查纯分析物质量不超过称样量，0≤纯度≤1；每个积分须先除以其代表的氢质子个数，然后以摩尔量比反演。

8. 对照忽略多质子修正的误差：错误结果通常偏低，因为样本峰包含2H，而内标峰包含3H。

9. 排除实际仪器误差时该模型才为严格代数解，真实积分延迟、信号基线或离子活度应单独校正。

10. 机器复算不代表科学专家评审通过，本题仍为待审稿。

#### 全部数值答案与单位

- standard_moles=0.0001000000000000 mol
- analyte_moles=0.00008000000000000 mol
- analyte_pure_mass_mg=16.00000000000 mg
- analyte_mass_purity=0.8000000000000 fraction
- impurity_mass_mg=4.000000000000 mg
- normalized_analyte_integral_per_proton=4.000000000000 signal
- normalized_standard_integral_per_proton=5.000000000000 signal
- integral_per_mol_ratio=0.8000000000000 ratio
- naive_mass_mg_without_H_correction=10.66666666667 mg
- naive_purity=0.5333333333333 fraction

### UC-ADV14-A203 双波长光谱法测单质子酸碱指示剂的pKa与组成

#### 完整题目

单质子指示剂HIn⇌H⁺+In⁻总浓度C=1.000×10⁻⁵ mol/L，光程l=1.000 cm，两种物种在波长λ1的摩尔吸光系数εH1=10000、εB1=30000 L/(mol cm)，在λ2为εH2=25000、εB2=5000 L/(mol cm)。某缓冲样本pH=7.000，测得A1=0.2500、A2=0.1000，忽略散射和背景吸光。由两个吸光度线性方程反演酸型和碱型浓度、碱型分数及pKa，再预测pH=8.000时的两波长吸光度、物种浓度以及第一次样本的酸碱比。假设指示剂不聚集、活度系数1。

#### 逐步严谨解答

1. 题干与严格测量假设：单质子指示剂HIn⇌H⁺+In⁻总浓度C=1.000×10⁻⁵ mol/L，光程l=1.000 cm，两种物种在波长λ1的摩尔吸光系数εH1=10000、εB1=30000 L/(mol cm)，在λ2为εH2=25000、εB2=5000 L/(mol cm)。某缓冲样本pH=7.000，测得A1=0.2500、A2=0.1000，忽略散射和背景吸光。由两个吸光度线性方程反演酸型和碱型浓度、碱型分数及pKa，再预测pH=8.000时的两波长吸光度、物种浓度以及第一次样本的酸碱比。假设指示剂不聚集、活度系数1。

2. 联立双波长线性方程：10000a+30000b=0.2500，25000a+5000b=0.1000；行列式−7.000×10⁸不为零，因此解唯一。

3. 整理量纲，质量用mg与g按1000换算，波长吸光度保持无量纲、浓度统一为mol/L。

4. 首组反演结果：acid_concentration_M=0.000002500000000000 mol/L；base_concentration_M=0.000007500000000000 mol/L；base_fraction=0.7500000000000 fraction；inferred_pKa=6.522878745280 pKa。

5. 后续定量结果：acid_to_base_ratio=0.3333333333333 ratio；base_fraction_at_pH8=0.9677419354839 fraction；A1_predicted_pH8=0.2935483870968 absorbance；A2_predicted_pH8=0.05645161290323 absorbance。

6. 交叉复核：base_concentration_pH8_M=0.000009677419354839 mol/L；molar_balance_pH7=0.00001000000000000 mol/L。

7. 独立回代两个波长：A1=10000[HIn]+30000[In−]=0.2500，A2=25000[HIn]+5000[In−]=0.1000，且[HIn]+[In−]=1.000×10⁻⁵ mol/L。

8. 由反演的[In−]/[HIn]与已知pH=7计算pKa；对pH=8用相同pKa预测物种分数再用Beer–Lambert公式生成光谱。

9. 排除实际仪器误差时该模型才为严格代数解，真实积分延迟、信号基线或离子活度应单独校正。

10. 机器复算不代表科学专家评审通过，本题仍为待审稿。

#### 全部数值答案与单位

- acid_concentration_M=0.000002500000000000 mol/L
- base_concentration_M=0.000007500000000000 mol/L
- base_fraction=0.7500000000000 fraction
- inferred_pKa=6.522878745280 pKa
- acid_to_base_ratio=0.3333333333333 ratio
- base_fraction_at_pH8=0.9677419354839 fraction
- A1_predicted_pH8=0.2935483870968 absorbance
- A2_predicted_pH8=0.05645161290323 absorbance
- base_concentration_pH8_M=0.000009677419354839 mol/L
- molar_balance_pH7=0.00001000000000000 mol/L

### UC-ADV14-A204 顶空气相色谱分配平衡与气相采样回代原样量

#### 完整题目

密封顶空瓶中含液体V_L=0.01000 L、气相V_G=0.02000 L，加入挥发性分析物总物质的量nT=1.000×10⁻⁵ mol。达到平衡时定义无量纲分配常数K=C_G/C_L=0.5000，两个相浓度均以mol/L计，假定液相和气相体积恒定、无瓶壁吸附与化学反应。求平衡气、液相浓度、两相分析物物质的量、气相所占比例、从气相抽取1.000 mL气体（假定抽取后不再重新平衡）的分析物摩尔量、若只用气相浓度误当原样液浓度造成的相对偏差和如果K变为1时的气相比例。需明确两相体积不相等使气相分数不等于K/(1+K)。

#### 逐步严谨解答

1. 已知物理化学与计量参数：密封顶空瓶中含液体V_L=0.01000 L、气相V_G=0.02000 L，加入挥发性分析物总物质的量nT=1.000×10⁻⁵ mol。达到平衡时定义无量纲分配常数K=C_G/C_L=0.5000，两个相浓度均以mol/L计，假定液相和气相体积恒定、无瓶壁吸附与化学反应。求平衡气、液相浓度、两相分析物物质的量、气相所占比例、从气相抽取1.000 mL气体（假定抽取后不再重新平衡）的分析物摩尔量、若只用气相浓度误当原样液浓度造成的相对偏差和如果K变为1时的气相比例。需明确两相体积不相等使气相分数不等于K/(1+K)。

2. 理论原理及计算公式：nT=CL VL+CG VG，CG=K CL，CL=nT/(VL+KVG)，fgas=KVG/(VL+KVG)。

3. 推导与定量判断：气液分配常数是浓度比，而在相体积不相同的瓶内物质量比要额外乘相体积；若抽取气相破坏平衡将引起再分配，本题明确不重新平衡。

4. 将所有质量、电子数、浓度和摩尔量与所列模型中的标准态统一，必要时把g转换kg、eV转换J。

5. 由基本关系计算前四个答案：liquid_concentration_M=0.0005000000000000 mol/L；gas_concentration_M=0.0002500000000000 mol/L；liquid_moles=0.000005000000000000 mol；gas_moles=0.000005000000000000 mol。

6. 由相同关系求其余主要答案：gas_fraction=0.5000000000000 fraction；moles_in_1mL_headspace=2.500000000000e-7 mol；gas_over_liquid_concentration=0.5000000000000 ratio；relative_underestimate_if_gas_taken_as_liquid=-0.5000000000000 fraction。

7. 进一步复核与最终可观察量：gas_fraction_at_K1=0.6666666666667 fraction；total_mole_balance=0.00001000000000000 mol。

8. 复核全元素/电荷/概率或能量守恒；对于线性响应与物质的量换算，应同时注意浓度和体积的乘法关系。

9. 题面理想化假设不排除真实实验的非理想活度、离子强度、链转移或层间热接触问题；不得无条件外推。

10. 此题包含数值验证但尚需专家审定化学科学性、难度与跨辑内容原创性。

#### 全部数值答案与单位

- liquid_concentration_M=0.0005000000000000 mol/L
- gas_concentration_M=0.0002500000000000 mol/L
- liquid_moles=0.000005000000000000 mol
- gas_moles=0.000005000000000000 mol
- gas_fraction=0.5000000000000 fraction
- moles_in_1mL_headspace=2.500000000000e-7 mol
- gas_over_liquid_concentration=0.5000000000000 ratio
- relative_underestimate_if_gas_taken_as_liquid=-0.5000000000000 fraction
- gas_fraction_at_K1=0.6666666666667 fraction
- total_mole_balance=0.00001000000000000 mol


### UC-ADV14-O198 立构规整自由基聚合的Bernoulli链节双联体与三联体分布

#### 完整题目

某理想乙烯基聚合物的相邻链节立体关系被视为独立Bernoulli试验，每个相邻二联体meso概率pm=0.7000，racemo概率pr=0.3000。相邻关系相互独立，无高阶立体记忆。求两连续二联体的三联体mm、mr、rm、rr概率和核对和1，由于mr和rm这两种三联体序列在通常的立构统计计数中可合并，求其合并分数，求合并异立构三联体比例、立构等规mm与间规rr强度比、取N=1000个独立连续二联体期望的meso次数及方差，并说明三联体数量与独立二联体数量不完全相同，N用于独立连接变量而非N个三联体。

#### 逐步严谨解答

1. 已知物理化学与计量参数：某理想乙烯基聚合物的相邻链节立体关系被视为独立Bernoulli试验，每个相邻二联体meso概率pm=0.7000，racemo概率pr=0.3000。相邻关系相互独立，无高阶立体记忆。求两连续二联体的三联体mm、mr、rm、rr概率和核对和1，由于mr和rm这两种三联体序列在通常的立构统计计数中可合并，求其合并分数，求合并异立构三联体比例、立构等规mm与间规rr强度比、取N=1000个独立连续二联体期望的meso次数及方差，并说明三联体数量与独立二联体数量不完全相同，N用于独立连接变量而非N个三联体。

2. 理论原理及计算公式：P(mm)=pm²，P(mr)=pm pr，P(rm)=pr pm，P(rr)=pr²。

3. 推导与定量判断：独立的立体二联体转移才允许概率相乘；NMR常合并镜像排列mr与rm，其峰积分因子2来自组合数。

4. 将所有质量、电子数、浓度和摩尔量与所列模型中的标准态统一，必要时把g转换kg、eV转换J。

5. 由基本关系计算前四个答案：mm_probability=0.4900000000000 fraction；mr_probability=0.2100000000000 fraction；rm_probability=0.2100000000000 fraction；rr_probability=0.09000000000000 fraction。

6. 由相同关系求其余主要答案：merged_mr_fraction=0.4200000000000 fraction；mm_over_rr_ratio=5.444444444444 ratio；total_triad_probability=1.000000000000 fraction；expected_meso_count_1000=700.0000000000 count。

7. 进一步复核与最终可观察量：variance_meso_count_1000=210.0000000000 count2；expected_racemo_count_1000=300.0000000000 count。

8. 复核全元素/电荷/概率或能量守恒；对于线性响应与物质的量换算，应同时注意浓度和体积的乘法关系。

9. 题面理想化假设不排除真实实验的非理想活度、离子强度、链转移或层间热接触问题；不得无条件外推。

10. 此题包含数值验证但尚需专家审定化学科学性、难度与跨辑内容原创性。

#### 全部数值答案与单位

- mm_probability=0.4900000000000 fraction
- mr_probability=0.2100000000000 fraction
- rm_probability=0.2100000000000 fraction
- rr_probability=0.09000000000000 fraction
- merged_mr_fraction=0.4200000000000 fraction
- mm_over_rr_ratio=5.444444444444 ratio
- total_triad_probability=1.000000000000 fraction
- expected_meso_count_1000=700.0000000000 count
- variance_meso_count_1000=210.0000000000 count2
- expected_racemo_count_1000=300.0000000000 count


### UC-ADV14-O199 手性有机催化双Eyring路径的温度选择性与对映体分数

#### 完整题目

一个手性有机催化剂形成R和S产物的两个互不互变不可逆通道，298.15 K时两过渡态的活化Gibbs自由能分别ΔG‡R=65.00 kJ/mol、ΔG‡S=70.00 kJ/mol；350.0 K时假设两通道焓熵差满足ΔΔH‡=HR−HS=−10.00 kJ/mol、ΔΔS‡=SR−SS=−16.771 J/(mol K)，并以298.15 K的5.000 kJ/mol差独立规定温差线性化。请仅用298.15 K给定的ΔΔG‡=−5.000 kJ/mol与假设在300–350 K为常数的ΔΔH‡=−10.00 kJ/mol，通过推导ΔΔS‡=(ΔΔH‡−ΔΔG‡298)/298.15求350 K差。两通道Eyring前因子相同。求两温度速率比kR/kS、R产物分率及ee_R、室温R/S比与高温选择性变化，并说明绝对G‡R与G‡S不能不加热容修正直接外推。

#### 逐步严谨解答

1. 已知物理化学与计量参数：一个手性有机催化剂形成R和S产物的两个互不互变不可逆通道，298.15 K时两过渡态的活化Gibbs自由能分别ΔG‡R=65.00 kJ/mol、ΔG‡S=70.00 kJ/mol；350.0 K时假设两通道焓熵差满足ΔΔH‡=HR−HS=−10.00 kJ/mol、ΔΔS‡=SR−SS=−16.771 J/(mol K)，并以298.15 K的5.000 kJ/mol差独立规定温差线性化。请仅用298.15 K给定的ΔΔG‡=−5.000 kJ/mol与假设在300–350 K为常数的ΔΔH‡=−10.00 kJ/mol，通过推导ΔΔS‡=(ΔΔH‡−ΔΔG‡298)/298.15求350 K差。两通道Eyring前因子相同。求两温度速率比kR/kS、R产物分率及ee_R、室温R/S比与高温选择性变化，并说明绝对G‡R与G‡S不能不加热容修正直接外推。

2. 理论原理及计算公式：ΔΔS‡=(−10000−(−5000))/298.15，ΔΔG‡(T)=−10000−TΔΔS‡，kR/kS=exp(−ΔΔG‡/(RT))。

3. 推导与定量判断：过渡态差的热力学参数控制速率比而非总反应产率；温度升高对ee影响要考虑焓和熵差同时变化。

4. 将所有质量、电子数、浓度和摩尔量与所列模型中的标准态统一，必要时把g转换kg、eV转换J。

5. 由基本关系计算前四个答案：deltaS_diff_J_molK=-16.77008217340 J/(molK)；deltaG_diff_298_kJmol=-5.000000000000 kJ/mol；deltaG_diff_350_kJmol=-4.130471239309 kJ/mol；rate_ratio_298=7.515573071316 ratio。

6. 由相同关系求其余主要答案：rate_ratio_350=4.134538541210 ratio；R_fraction_298=0.8825680912341 fraction；R_fraction_350=0.8052405309700 fraction；ee_R_298=0.7651361824682 fraction。

7. 进一步复核与最终可观察量：ee_R_350=0.6104810619400 fraction；ee_fraction_change=-0.1546551205282 fraction。

8. 复核全元素/电荷/概率或能量守恒；对于线性响应与物质的量换算，应同时注意浓度和体积的乘法关系。

9. 题面理想化假设不排除真实实验的非理想活度、离子强度、链转移或层间热接触问题；不得无条件外推。

10. 此题包含数值验证但尚需专家审定化学科学性、难度与跨辑内容原创性。

#### 全部数值答案与单位

- deltaS_diff_J_molK=-16.77008217340 J/(molK)
- deltaG_diff_298_kJmol=-5.000000000000 kJ/mol
- deltaG_diff_350_kJmol=-4.130471239309 kJ/mol
- rate_ratio_298=7.515573071316 ratio
- rate_ratio_350=4.134538541210 ratio
- R_fraction_298=0.8825680912341 fraction
- R_fraction_350=0.8052405309700 fraction
- ee_R_298=0.7651361824682 fraction
- ee_R_350=0.6104810619400 fraction
- ee_fraction_change=-0.1546551205282 fraction


### UC-ADV14-O200 活性开环聚合的单体转化率、聚合度与端基数

#### 完整题目

假想单官能引发剂引发的活性ε-己内酯开环聚合没有链转移、终止或循环低聚物，所有引发剂链都从起始时增长且仅每条链含一个引发端基。初始己内酯单体浓度M0=1.000 mol/L、引发剂浓度I0=0.01000 mol/L，引发效率f=0.8000，其他引发剂不发生反应。反应单体转化率X=0.7000，己内酯重复单元摩尔质量114.14 g/mol。求有效生长链浓度、消耗单体浓度、每条链的数均重复单元DPn、单体残余浓度、忽略端基的Mn、活性链端基浓度及如果误把引发效率设为1造成的Mn偏差。再求90%转化的理论DPn与Mn；注意活性聚合可控数均并不自动保证极窄分布。

#### 逐步严谨解答

1. 已知物理化学与计量参数：假想单官能引发剂引发的活性ε-己内酯开环聚合没有链转移、终止或循环低聚物，所有引发剂链都从起始时增长且仅每条链含一个引发端基。初始己内酯单体浓度M0=1.000 mol/L、引发剂浓度I0=0.01000 mol/L，引发效率f=0.8000，其他引发剂不发生反应。反应单体转化率X=0.7000，己内酯重复单元摩尔质量114.14 g/mol。求有效生长链浓度、消耗单体浓度、每条链的数均重复单元DPn、单体残余浓度、忽略端基的Mn、活性链端基浓度及如果误把引发效率设为1造成的Mn偏差。再求90%转化的理论DPn与Mn；注意活性聚合可控数均并不自动保证极窄分布。

2. 理论原理及计算公式：chains=f I0，DPn=X M0/(f I0)，Mn=DPn Mrepeat，Mremain=M0(1−X)。

3. 推导与定量判断：平均每条链消费的单体量由总消费物质的量除以有效链数；未活化引发剂不计入活性增长链数。

4. 将所有质量、电子数、浓度和摩尔量与所列模型中的标准态统一，必要时把g转换kg、eV转换J。

5. 由基本关系计算前四个答案：active_chains_M=0.008000000000000 mol/L；converted_monomer_M=0.7000000000000 mol/L；DPn_70pct=87.50000000000 ratio；remaining_monomer_M=0.3000000000000 mol/L。

6. 由相同关系求其余主要答案：Mn_70pct_gmol=9987.250000000 g/mol；active_end_groups_M=0.008000000000000 mol/L；naive_Mn_gmol=7989.800000000 g/mol；naive_relative_bias=-0.2000000000000 fraction。

7. 进一步复核与最终可观察量：DPn_90pct=112.5000000000 ratio；Mn_90pct_gmol=12840.75000000 g/mol。

8. 复核全元素/电荷/概率或能量守恒；对于线性响应与物质的量换算，应同时注意浓度和体积的乘法关系。

9. 题面理想化假设不排除真实实验的非理想活度、离子强度、链转移或层间热接触问题；不得无条件外推。

10. 此题包含数值验证但尚需专家审定化学科学性、难度与跨辑内容原创性。

#### 全部数值答案与单位

- active_chains_M=0.008000000000000 mol/L
- converted_monomer_M=0.7000000000000 mol/L
- DPn_70pct=87.50000000000 ratio
- remaining_monomer_M=0.3000000000000 mol/L
- Mn_70pct_gmol=9987.250000000 g/mol
- active_end_groups_M=0.008000000000000 mol/L
- naive_Mn_gmol=7989.800000000 g/mol
- naive_relative_bias=-0.2000000000000 fraction
- DPn_90pct=112.5000000000 ratio
- Mn_90pct_gmol=12840.75000000 g/mol


### UC-ADV14-P198 两类异质位点Langmuir吸附等温式与覆盖加权

#### 完整题目

某固体吸附剂存在两类互不相互作用的活性位A和B，最大吸附容量分别qmaxA=1.000 mmol/g、qmaxB=2.000 mmol/g，Langmuir平衡常数分别KA=10.00 bar⁻¹、KB=0.5000 bar⁻¹，固定温度下气体分压分别为p=0.1000和1.000 bar。两类位点均只吸附一层且吸附独立，求两压强下A/B覆盖度、各自吸附量、总容量、总容量占理论最大3.000 mmol/g的分率及高低压吸附量比。解释总吸附量要按各类不同饱和容量加权而不能简单平均两个覆盖度。

#### 逐步严谨解答

1. 已知物理化学与计量参数：某固体吸附剂存在两类互不相互作用的活性位A和B，最大吸附容量分别qmaxA=1.000 mmol/g、qmaxB=2.000 mmol/g，Langmuir平衡常数分别KA=10.00 bar⁻¹、KB=0.5000 bar⁻¹，固定温度下气体分压分别为p=0.1000和1.000 bar。两类位点均只吸附一层且吸附独立，求两压强下A/B覆盖度、各自吸附量、总容量、总容量占理论最大3.000 mmol/g的分率及高低压吸附量比。解释总吸附量要按各类不同饱和容量加权而不能简单平均两个覆盖度。

2. 理论原理及计算公式：θi=Kip/(1+Kip)，qtotal=1 θA+2 θB（mmol/g），qmax,total=3 mmol/g。

3. 推导与定量判断：高亲和位点可在低压先饱和，低亲和但大容量位点继续贡献上升，异质位点叠加等温线不同于单一Langmuir。

4. 将所有质量、电子数、浓度和摩尔量与所列模型中的标准态统一，必要时把g转换kg、eV转换J。

5. 由基本关系计算前四个答案：thetaA_low=0.5000000000000 fraction；thetaB_low=0.04761904761905 fraction；qA_low_mmol_g=0.5000000000000 mmol/g；qB_low_mmol_g=0.09523809523810 mmol/g。

6. 由相同关系求其余主要答案：total_uptake_low_mmol_g=0.5952380952381 mmol/g；thetaA_high=0.9090909090909 fraction；thetaB_high=0.3333333333333 fraction；total_uptake_high_mmol_g=1.575757575758 mmol/g。

7. 进一步复核与最终可观察量：total_capacity_fraction_high=0.5252525252525 fraction；uptake_increase_ratio=2.647272727273 ratio。

8. 复核全元素/电荷/概率或能量守恒；对于线性响应与物质的量换算，应同时注意浓度和体积的乘法关系。

9. 题面理想化假设不排除真实实验的非理想活度、离子强度、链转移或层间热接触问题；不得无条件外推。

10. 此题包含数值验证但尚需专家审定化学科学性、难度与跨辑内容原创性。

#### 全部数值答案与单位

- thetaA_low=0.5000000000000 fraction
- thetaB_low=0.04761904761905 fraction
- qA_low_mmol_g=0.5000000000000 mmol/g
- qB_low_mmol_g=0.09523809523810 mmol/g
- total_uptake_low_mmol_g=0.5952380952381 mmol/g
- thetaA_high=0.9090909090909 fraction
- thetaB_high=0.3333333333333 fraction
- total_uptake_high_mmol_g=1.575757575758 mmol/g
- total_capacity_fraction_high=0.5252525252525 fraction
- uptake_increase_ratio=2.647272727273 ratio


### UC-ADV14-P199 独立双能级体系的Schottky热容峰与占据比

#### 完整题目

某一非简并基态E0=0和非简并激发态E1=Δ的理想双能级体系，能隙Δ/kB=300.0 K。每摩尔相互独立微单元在T1=150.0 K和T2=300.0 K统计，正则配分函数z=1+exp(−Δ/(kBT))。求两温度激发态占据分数、摩尔平均能U=R(Δ/kB)p_exc、定容热容Cv=R x² e^x/(1+e^x)²（x=Δ/kBT）、配分函数、能隙对应每mol能量及两热容比。并指出非简并假设与磁性Schottky异常的真实简并性不同。

#### 逐步严谨解答

1. 已知物理化学与计量参数：某一非简并基态E0=0和非简并激发态E1=Δ的理想双能级体系，能隙Δ/kB=300.0 K。每摩尔相互独立微单元在T1=150.0 K和T2=300.0 K统计，正则配分函数z=1+exp(−Δ/(kBT))。求两温度激发态占据分数、摩尔平均能U=R(Δ/kB)p_exc、定容热容Cv=R x² e^x/(1+e^x)²（x=Δ/kBT）、配分函数、能隙对应每mol能量及两热容比。并指出非简并假设与磁性Schottky异常的真实简并性不同。

2. 理论原理及计算公式：z=1+e^(−x)，p_exc=1/(1+e^x)，U=R(Δ/kB)p_exc，Cv=R x² p_exc(1−p_exc)。

3. 推导与定量判断：两能级热容在低T和高T都趋零，中间出现峰，不能用经典等分配每自由度恒定热容近似。

4. 将所有质量、电子数、浓度和摩尔量与所列模型中的标准态统一，必要时把g转换kg、eV转换J。

5. 由基本关系计算前四个答案：partition_T150=1.135335283237 ratio；partition_T300=1.367879441171 ratio；excited_fraction_T150=0.1192029220221 fraction；excited_fraction_T300=0.2689414213700 fraction。

6. 由相同关系求其余主要答案：internal_energy_T150_Jmol=297.3324717328 J/mol；internal_energy_T300_Jmol=670.8310183238 J/mol；heat_capacity_T150_JmolK=3.491860963869 J/(molK)；heat_capacity_T300_JmolK=1.634722569189 J/(molK)。

7. 进一步复核与最终可观察量：gap_energy_kJmol=2.494338785400 kJ/mol；heat_capacity_ratio=2.136057230556 ratio。

8. 复核全元素/电荷/概率或能量守恒；对于线性响应与物质的量换算，应同时注意浓度和体积的乘法关系。

9. 题面理想化假设不排除真实实验的非理想活度、离子强度、链转移或层间热接触问题；不得无条件外推。

10. 此题包含数值验证但尚需专家审定化学科学性、难度与跨辑内容原创性。

#### 全部数值答案与单位

- partition_T150=1.135335283237 ratio
- partition_T300=1.367879441171 ratio
- excited_fraction_T150=0.1192029220221 fraction
- excited_fraction_T300=0.2689414213700 fraction
- internal_energy_T150_Jmol=297.3324717328 J/mol
- internal_energy_T300_Jmol=670.8310183238 J/mol
- heat_capacity_T150_JmolK=3.491860963869 J/(molK)
- heat_capacity_T300_JmolK=1.634722569189 J/(molK)
- gap_energy_kJmol=2.494338785400 kJ/mol
- heat_capacity_ratio=2.136057230556 ratio


### UC-ADV14-P200 复合平板两层稳态热传导与界面温度

#### 完整题目

一块单位面积A=1.000 m²的平板由两种化学材料层串联，第一层厚d1=0.01000 m、导热系数κ1=0.2000 W/(m K)，第二层厚d2=0.02000 m、导热系数κ2=1.000 W/(m K)。两外表面分别恒温Tleft=350.0 K、Tright=300.0 K，层间完美热接触，忽略辐射、对流、温变κ和内部发热。根据傅里叶定律稳态热阻Rth=d/(κA)求各层热阻、总热阻、热流功率Qdot与热流密度、两层温降、界面温度与两层温降之比及300 s传递热量，检查温降和为50 K。

#### 逐步严谨解答

1. 已知物理化学与计量参数：一块单位面积A=1.000 m²的平板由两种化学材料层串联，第一层厚d1=0.01000 m、导热系数κ1=0.2000 W/(m K)，第二层厚d2=0.02000 m、导热系数κ2=1.000 W/(m K)。两外表面分别恒温Tleft=350.0 K、Tright=300.0 K，层间完美热接触，忽略辐射、对流、温变κ和内部发热。根据傅里叶定律稳态热阻Rth=d/(κA)求各层热阻、总热阻、热流功率Qdot与热流密度、两层温降、界面温度与两层温降之比及300 s传递热量，检查温降和为50 K。

2. 理论原理及计算公式：R1=d1/(κ1A)，R2=d2/(κ2A)，Qdot=(Tleft−Tright)/(R1+R2)，Tinterface=Tleft−QdotR1。

3. 推导与定量判断：串联层有相同热流，不能把各层热阻相加后再按导热系数直接线性平均求有效热导率。

4. 将所有质量、电子数、浓度和摩尔量与所列模型中的标准态统一，必要时把g转换kg、eV转换J。

5. 由基本关系计算前四个答案：resistance_layer1_K_W=0.05000000000000 K/W；resistance_layer2_K_W=0.02000000000000 K/W；total_resistance_K_W=0.07000000000000 K/W；heat_rate_W=714.2857142857 W。

6. 由相同关系求其余主要答案：heat_flux_W_m2=714.2857142857 W/m2；temperature_drop_layer1_K=35.71428571429 K；temperature_drop_layer2_K=14.28571428571 K；interface_temperature_K=314.2857142857 K。

7. 进一步复核与最终可观察量：drop_ratio_layer1_layer2=2.500000000000 ratio；heat_energy_300s_J=214285.7142857 J。

8. 复核全元素/电荷/概率或能量守恒；对于线性响应与物质的量换算，应同时注意浓度和体积的乘法关系。

9. 题面理想化假设不排除真实实验的非理想活度、离子强度、链转移或层间热接触问题；不得无条件外推。

10. 此题包含数值验证但尚需专家审定化学科学性、难度与跨辑内容原创性。

#### 全部数值答案与单位

- resistance_layer1_K_W=0.05000000000000 K/W
- resistance_layer2_K_W=0.02000000000000 K/W
- total_resistance_K_W=0.07000000000000 K/W
- heat_rate_W=714.2857142857 W
- heat_flux_W_m2=714.2857142857 W/m2
- temperature_drop_layer1_K=35.71428571429 K
- temperature_drop_layer2_K=14.28571428571 K
- interface_temperature_K=314.2857142857 K
- drop_ratio_layer1_layer2=2.500000000000 ratio
- heat_energy_300s_J=214285.7142857 J

<a id="batch-02"></a>

## 第十四辑第二批：16道不同化学模型的完整题目与逐步解析

本批所有条目均为未经过专家审定的研究草稿。数值公式由脚本重复计算；跨辑独立性尚未获人工认证。

### UC-ADV14-I205 Fe(II)自旋交叉的简并度修正、热分布与磁矩

#### 题目

设一个独立Fe(II)中心可处于低自旋S=0或高自旋S=2状态。以低自旋为零能参考，高自旋相对低自旋的焓差ΔH=18.00 kJ/mol、熵差ΔS=60.00 J/(mol K)，且另外明确计入自旋多重度比gH/gL=5。理想稀释中心无相互作用，取R=8.314462618 J/(mol K)，g≈2，忽略零场分裂。求250 K及300 K的高自旋/低自旋平衡常数、高自旋分率、有效自旋磁矩，并求高自旋分率恰为一半的温度和两温度常数比。注意熵差被定义为不含此显式自旋简并度，不能重复计数。

#### 推导与解答

1. 定义每中心统计权重wL=1，wH=5exp(ΔS/R−ΔH/RT)，故K=wH/wL。

2. 两态配分函数Z=1+K，高自旋分率fH=K/(1+K)，低自旋为1−fH。

3. 在250 K代入温度与R求K250，随后用分母1+K250归一化。

4. 在300 K重复计算，升温改变焓罚项但不改变题设简并度。

5. 高自旋S=2的自旋仅磁矩μH=2√[S(S+1)]μB=√24μB；低自旋S=0。

6. 快交换、独立中心条件下有效磁矩平方按分率平均，μeff=√(24fH)μB。

7. K=1的交叉温度由ΔH/T=ΔS+Rln5，不能误写成ΔH/ΔS。

8. 用K300/K250交叉检查温度依赖；实际固体协同性和零场分裂不在模型内。

9. 最终逐项数值（顺序与结构化字段一致）：K250=1.18077340518 ratio；K300=5 ratio；highspin_fraction_250=0.541447085871 fraction；highspin_fraction_300=0.833333333333 fraction；mu_eff_250_muB=3.60482039232 mu_B；mu_eff_300_muB=4.472135955 mu_B；half_fraction_temperature_K=245.293060028 K；K300_over_K250=4.2345127169 ratio。

10. 数值校核：全部结果为有限实数；单位换算、非负库存、分率界限及本题所列守恒等式须经独立人工复核。

11. 审稿边界：该理想化模型与真实体系的差异须由专业人员评估，不能将机器复算视为专家批准。

#### 全部数值答案

- K250: **1.18077340518 ratio**
- K300: **5 ratio**
- highspin_fraction_250: **0.541447085871 fraction**
- highspin_fraction_300: **0.833333333333 fraction**
- mu_eff_250_muB: **3.60482039232 mu_B**
- mu_eff_300_muB: **4.472135955 mu_B**
- half_fraction_temperature_K: **245.293060028 K**
- K300_over_K250: **4.2345127169 ratio**

### UC-ADV14-I206 Ca/Mg竞争EDTA络合的条件稳定常数与物料守恒

#### 题目

在pH固定的缓冲溶液中，EDTA未络合总浓度记作Lfree，包含各种质子化形式；其中Y4−分率α=0.3500。取CaY2−和MgY2−的热力学形成常数βCa=1.00×10^10、βMg=1.00×10^8 L/mol，金属游离浓度分别为[Ca2+]=2.00 μmol/L和[Mg2+]=50.0 μmol/L，Lfree=1.00 nmol/L。假设活度系数已包含在题设常数、没有其他络合物和沉淀。求两络合物浓度、总EDTA、金属总浓度、Ca/Mg的络合分率、络合物浓度比及真正游离Y4−浓度；检验每种金属和配体的物料平衡。

#### 推导与解答

1. 定义未络合EDTA所有酸碱形态之和Lfree，故[Y4−]=αLfree。

2. 条件常数β′M=αβM，络合平衡给[MY]=β′M[M2+]Lfree。

3. Ca与Mg同时竞争同一Lfree，不能把两个金属各自当成拥有全部EDTA。

4. 配体总量Ltot=Lfree+[CaY]+[MgY]。

5. 金属总量分别为CaT=[Ca2+]+[CaY]、MgT=[Mg2+]+[MgY]。

6. 络合分率fCa=[CaY]/CaT及fMg=[MgY]/MgT；两者应处于0至1。

7. 用[CaY]/[MgY]=(βCa[Ca2+])/(βMg[Mg2+])检查分配比例。

8. 此题为给定自由浓度的正问题，不可在未知总量时擅自把游离浓度当总浓度。

9. 最终逐项数值（顺序与结构化字段一致）：CaY_M=0.000007 mol/L；MgY_M=0.00000175 mol/L；EDTA_total_M=0.000008751 mol/L；Ca_total_M=0.000009 mol/L；Mg_total_M=0.00005175 mol/L；Ca_complexed_fraction=0.777777777778 fraction；Mg_complexed_fraction=0.0338164251208 fraction；CaY_over_MgY=4 ratio；free_Y4_M=3.5e-10 mol/L。

10. 数值校核：全部结果为有限实数；单位换算、非负库存、分率界限及本题所列守恒等式须经独立人工复核。

11. 审稿边界：该理想化模型与真实体系的差异须由专业人员评估，不能将机器复算视为专家批准。

#### 全部数值答案

- CaY_M: **0.000007 mol/L**
- MgY_M: **0.00000175 mol/L**
- EDTA_total_M: **0.000008751 mol/L**
- Ca_total_M: **0.000009 mol/L**
- Mg_total_M: **0.00005175 mol/L**
- Ca_complexed_fraction: **0.777777777778 fraction**
- Mg_complexed_fraction: **0.0338164251208 fraction**
- CaY_over_MgY: **4 ratio**
- free_Y4_M: **3.5e-10 mol/L**

### UC-ADV14-I207 CeO₂−x氧空位、混合价与氧气析出的电荷补偿

#### 题目

考虑不含其他缺陷的理想萤石型CeO₂−x，x=0.0800。每形成一个带有效正二价的氧空位，恰好有两个Ce4+还原为Ce3+，阳离子位置均由Ce占据；取Ce=140.116、O=15.999 g/mol。对0.500 mol缺陷化学式单元，求Ce3+/Ce4+分率、Ce平均氧化态、氧原子/化学式、缺陷式量、Ce3+物质的量、氧空位数及从CeO₂释放的O₂物质的量；同时给出相应电子当量电量（F=96485.33212 C/mol）。说明该电子当量只是形式电荷计量，不等于实际外电路流过的电量。

#### 推导与解答

1. 每式量有1个Ce和2−x个氧，氧均为−II，电中性要求Ce平均价态=4−2x。

2. 设Ce3+分率y，Ce平均价态=3y+4(1−y)=4−y，因此y=2x。

3. 由y=2x得Ce4+分率1−2x；必须满足0≤x≤0.5。

4. 每式量氧原子2−x，缺陷式量M=MCe+(2−x)MO。

5. 0.500 mol化学式单元中Ce3+摩尔量为0.500×2x。

6. 每式量氧空位x个，氧空位摩尔量0.500x；每两个缺失氧原子生成一个O₂。

7. 形式还原电子当量为2×氧空位摩尔量，乘F可写为电荷当量。

8. Ce和O元素库存与局域有效电荷同时守恒；缺陷关联、电子局域化和真实电极动力学均不由此式决定。

9. 最终逐项数值（顺序与结构化字段一致）：CeIII_fraction=0.16 fraction；CeIV_fraction=0.84 fraction；Ce_average_oxidation=3.84 oxidation；oxygen_per_formula=1.92 atoms/formula；defect_molar_mass_g_mol=170.83408 g/mol；CeIII_mol=0.08 mol；vacancy_mol=0.04 mol；O2_released_mol=0.02 mol；formal_electron_charge_C=7718.8265696 C。

10. 数值校核：全部结果为有限实数；单位换算、非负库存、分率界限及本题所列守恒等式须经独立人工复核。

11. 审稿边界：该理想化模型与真实体系的差异须由专业人员评估，不能将机器复算视为专家批准。

#### 全部数值答案

- CeIII_fraction: **0.16 fraction**
- CeIV_fraction: **0.84 fraction**
- Ce_average_oxidation: **3.84 oxidation**
- oxygen_per_formula: **1.92 atoms/formula**
- defect_molar_mass_g_mol: **170.83408 g/mol**
- CeIII_mol: **0.08 mol**
- vacancy_mol: **0.04 mol**
- O2_released_mol: **0.02 mol**
- formal_electron_charge_C: **7718.8265696 C**

### UC-ADV14-I208 Cu(I)歧化的标准电势、巨大平衡常数与稳定求根

#### 题目

在298.15 K的理想溶液中，给定E°(Cu2+/Cu+)=0.153 V、E°(Cu+/Cu)=0.521 V（均为还原电势）。考虑2Cu+(aq) ⇌ Cu2+(aq)+Cu(s)，纯铜活度1，所有水溶液离子活度以1 mol/L为标准态。起始1.000 L溶液仅含0.01000 mol/L Cu+，假设反应达到平衡、Cu金属可析出且无其他络合或沉淀。求歧化E°、log10K、K、平衡[Cu+]、[Cu2+]、Cu+反应分率、析出铜摩尔数及质量（Cu=63.546 g/mol）；要求稳定求解二次方程并核验铜元素守恒。

#### 推导与解答

1. 歧化时Cu+→Cu2+失电子，Cu+→Cu得电子，两个半反应各一电子。

2. 电池标准电势E°=E°(Cu+/Cu)−E°(Cu2+/Cu+)。

3. ΔrG°=−FE°，同时ΔrG°=−RTlnK，故lnK=FE°/(RT)。

4. 以x mol/L为反应进度，[Cu2+]=x、[Cu+]=C0−2x，K=(x/c°)/[(C0−2x)/c°]^2。

5. 令t=[Cu+]，由2Kt²+t−C0=0得到正根t=2C0/(1+√(1+8KC0))，避免大数相减。

6. 进度x=(C0−t)/2；铜金属物质的量xV，剩余溶液铜量(C0−x)V。

7. 反应掉的Cu+分率2x/C0，必须在[0,1]，且Cu总摩尔数守恒。

8. 活度系数、Cu2+水解和Cu+络合均忽略；巨大K并不证明真实溶液无动力学限制。

9. 最终逐项数值（顺序与结构化字段一致）：E_standard_V=0.368 V；log10K=6.22048758066 log10；K=1661451.16526 ratio；CuI_equilibrium_M=0.0000547078923389 mol/L；CuII_equilibrium_M=0.00497264605383 mol/L；CuI_consumed_fraction=0.994529210766 fraction；Cu_metal_mol=0.00497264605383 mol；Cu_metal_mass_g=0.315991766137 g。

10. 数值校核：全部结果为有限实数；单位换算、非负库存、分率界限及本题所列守恒等式须经独立人工复核。

11. 审稿边界：该理想化模型与真实体系的差异须由专业人员评估，不能将机器复算视为专家批准。

#### 全部数值答案

- E_standard_V: **0.368 V**
- log10K: **6.22048758066 log10**
- K: **1661451.16526 ratio**
- CuI_equilibrium_M: **0.0000547078923389 mol/L**
- CuII_equilibrium_M: **0.00497264605383 mol/L**
- CuI_consumed_fraction: **0.994529210766 fraction**
- Cu_metal_mol: **0.00497264605383 mol**
- Cu_metal_mass_g: **0.315991766137 g**

### UC-ADV14-A205 同位素稀释质谱的双同位素物料平衡与样品量反演

#### 题目

样品目标物天然重/轻同位素摩尔比Rs=0.3000，加入已知1.000 μmol同种化合物富集同位素内标，其重/轻比Rsp=4.000。完全混合且没有质量歧视后，质谱经校正测得混合物重/轻比Rm=0.7500。两种同位素均为同一元素且无其他同位素贡献，样品目标物摩尔质量取100.0 g/mol。求原样目标物总μmol、原样重/轻同位素各μmol、内标重/轻μmol、混合物重/轻μmol、样品质量mg，以及重/轻比回代残差。严禁把同位素比直接当重同位素分率。

#### 推导与解答

1. 比值R=nH/nL，故总量n的轻同位素量n/(1+R)，重同位素量nR/(1+R)。

2. 已知内标nsp=1 μmol，分别求其轻重同位素库存。

3. 设样品总量ns，则样品轻同位素ns/(1+Rs)、重同位素nsRs/(1+Rs)。

4. 混合物的实测比Rm=(Hs+Hsp)/(Ls+Lsp)，它不是两种比值的简单算术平均。

5. 移项得ns=nsp(1+Rs)(Rsp−Rm)/[(1+Rsp)(Rm−Rs)]。

6. 把ns代回分别计算样品轻重同位素及混合物轻重总量。

7. 样品质量m=ns(μmol)×M(g/mol)×10^−3 mg/μmol，检查换算因子。

8. 检验Hm/Lm=Rm且两同位素库存分别守恒；要求Rs<Rm<Rsp才有正样品量。

9. 最终逐项数值（顺序与结构化字段一致）：sample_total_umol=1.87777777778 umol；sample_light_umol=1.44444444444 umol；sample_heavy_umol=0.433333333333 umol；spike_light_umol=0.2 umol；spike_heavy_umol=0.8 umol；mixture_light_umol=1.64444444444 umol；mixture_heavy_umol=1.23333333333 umol；sample_mass_mg=0.187777777778 mg；ratio_reconstruction=0.75 ratio。

10. 数值校核：全部结果为有限实数；单位换算、非负库存、分率界限及本题所列守恒等式须经独立人工复核。

11. 审稿边界：该理想化模型与真实体系的差异须由专业人员评估，不能将机器复算视为专家批准。

#### 全部数值答案

- sample_total_umol: **1.87777777778 umol**
- sample_light_umol: **1.44444444444 umol**
- sample_heavy_umol: **0.433333333333 umol**
- spike_light_umol: **0.2 umol**
- spike_heavy_umol: **0.8 umol**
- mixture_light_umol: **1.64444444444 umol**
- mixture_heavy_umol: **1.23333333333 umol**
- sample_mass_mg: **0.187777777778 mg**
- ratio_reconstruction: **0.75 ratio**

### UC-ADV14-A206 三波长吸光度的双组分浓度与未知基线联合反演

#### 题目

两个互不反应分析物X、Y在光程1.000 cm下满足Aλ=ελX cX+ελY cY+b，其中b是三波长共同的未知基线吸光度。三组吸收系数(ελX,ελY)按λ1、λ2、λ3分别为(2.0,1.0)、(1.0,3.0)、(3.0,2.0) L/(mol cm)，实测吸光度A1=0.0550、A2=0.0550、A3=0.0850。求cX、cY、b、三波长各自重构吸光度、浓度比、第四波长系数(4.0,1.0)时的预测吸光度，以及最大绝对残差。须证明差分消除基线后系数矩阵可逆，不能把b错误地设为零。

#### 推导与解答

1. 用1 cm光程将Beer–Lambert式写成A1=2cX+cY+b。

2. 第二、第三波长分别给A2=cX+3cY+b与A3=3cX+2cY+b。

3. 差分消去b，得A2−A1=−cX+2cY，A3−A1=cX+cY。

4. 差分系数矩阵行列式(−1)×1−2×1=−3≠0，故可唯一反演。

5. 由A2−A1=0得cX=2cY，再由A3−A1=0.0300求浓度。

6. 代回任意原式求b，并分别重构A1、A2、A3，检查最大残差。

7. 在第四波长用A4=4cX+cY+b预测响应；浓度比cX/cY需为正。

8. 三波长基线必须共同且吸光度线性；若波长漂移或散射基线变化，需扩展模型。

9. 最终逐项数值（顺序与结构化字段一致）：cX_M=0.02 mol/L；cY_M=0.01 mol/L；baseline_absorbance=0.005 absorbance；A1_reconstructed=0.055 absorbance；A2_reconstructed=0.055 absorbance；A3_reconstructed=0.085 absorbance；cX_over_cY=2 ratio；A4_predicted=0.095 absorbance；max_residual=0 absorbance。

10. 数值校核：全部结果为有限实数；单位换算、非负库存、分率界限及本题所列守恒等式须经独立人工复核。

11. 审稿边界：该理想化模型与真实体系的差异须由专业人员评估，不能将机器复算视为专家批准。

#### 全部数值答案

- cX_M: **0.02 mol/L**
- cY_M: **0.01 mol/L**
- baseline_absorbance: **0.005 absorbance**
- A1_reconstructed: **0.055 absorbance**
- A2_reconstructed: **0.055 absorbance**
- A3_reconstructed: **0.085 absorbance**
- cX_over_cY: **2 ratio**
- A4_predicted: **0.095 absorbance**
- max_residual: **0 absorbance**

### UC-ADV14-A207 双寿命时间门控荧光的组分强度、积分与交叉时间

#### 题目

假设样品中只有两种互不交换的荧光物种A、B，寿命分别τA=2.000 ns、τB=8.000 ns，仪器响应已去卷积，信号I(t)=IA0exp(−t/τA)+IB0exp(−t/τB)。实测I(0)=1000.0 counts，I(4 ns)=600exp(−2)+400exp(−0.5) counts（将此表达式视为精确读数）。求两个初始强度、4 ns和8 ns信号、总时间积分面积、B的积分光子占比、强度加权平均寿命、两物种瞬时强度相等的时间及初始A分率。需说明积分面积与瞬时强度的加权方式不同。

#### 推导与解答

1. 两种寿命已知，令IA0+IB0=I0=1000。

2. 第二门控方程I4=IA0e^−2+IB0e^−1/2。

3. 两个指数不同，线性方程唯一可解；IA0=(I4−1000e^−1/2)/(e^−2−e^−1/2)。

4. 求得IB0=1000−IA0，代入预测I8=IA0e^−4+IB0e^−1。

5. 时间积分∫0∞I(t)dt=IA0τA+IB0τB，单位counts·ns。

6. B的积分占比为IB0τB/(IA0τA+IB0τB)，与IB0/I0不同。

7. 积分平均寿命定义为总面积/I0；交叉时刻解IA0e^−t/τA=IB0e^−t/τB。

8. 题设要求正振幅且双指数衰减，真实仪器IRF、散射和能量转移会破坏此简化。

9. 最终逐项数值（顺序与结构化字段一致）：A_initial_counts=600 counts；B_initial_counts=400 counts；I4_counts=323.813433827 counts；I8_counts=158.141159802 counts；integrated_area_counts_ns=4400 counts*ns；B_integrated_fraction=0.727272727273 fraction；mean_lifetime_ns=4.4 ns；equal_contribution_time_ns=1.08124028829 ns；A_initial_fraction=0.6 fraction。

10. 数值校核：全部结果为有限实数；单位换算、非负库存、分率界限及本题所列守恒等式须经独立人工复核。

11. 审稿边界：该理想化模型与真实体系的差异须由专业人员评估，不能将机器复算视为专家批准。

#### 全部数值答案

- A_initial_counts: **600 counts**
- B_initial_counts: **400 counts**
- I4_counts: **323.813433827 counts**
- I8_counts: **158.141159802 counts**
- integrated_area_counts_ns: **4400 counts*ns**
- B_integrated_fraction: **0.727272727273 fraction**
- mean_lifetime_ns: **4.4 ns**
- equal_contribution_time_ns: **1.08124028829 ns**
- A_initial_fraction: **0.6 fraction**

### UC-ADV14-A208 Cottrell计时电流的扩散系数反演与积分电量

#### 题目

理想平面电极在t=0发生完全扩散控制的一电子还原，初始溶液浓度C*=1.000 mmol/L，电极面积A=0.2000 cm²，扩散系数D=1.000×10^−5 cm²/s，F=96485.33212 C/mol。支持电解质充分、半无限扩散、无对流与双电层电流，Cottrell式i(t)=nFAC*√[D/(πt)]，注意C*必须换算成mol/cm³。求1 s与4 s的电流、1 s与4 s的积分电量、两时刻电流比与电量比、由1 s电流反演的D、4 s累计消耗物质的量及4 s平均电流。指出不能把瞬时电流乘时间当精确积分电量。

#### 推导与解答

1. 把1 mmol/L换算为10^−6 mol/cm³；其余长度单位全部保持cm。

2. 半无限扩散边界给i(t)=nFAC*√(D/π)t^−1/2。

3. 在t=1 s和4 s代入，电流比i1/i4=√(4/1)=2。

4. 积分Q(t)=∫0^t i(s)ds=2nFAC*√(Dt/π)，不是i(t)t。

5. 因此Q4/Q1=√4=2，且Q(t)=2i(t)t。

6. 由i1²=n²F²A²C*²D/(πt)反演D=πt[i1/(nFAC*)]²。

7. 法拉第定律n_consumed=Q4/(nF)，平均电流Q4/4s。

8. 检验电流A、电量C、浓度mol/cm³单位，模型不适用于有限扩散层耗尽后。

9. 最终逐项数值（顺序与结构化字段一致）：current_1s_A=0.0000344283615781 A；current_4s_A=0.000017214180789 A；charge_1s_C=0.0000688567231561 C；charge_4s_C=0.000137713446312 C；current_ratio=2 ratio；charge_ratio=2 ratio；D_recovered_cm2_s=0.00001 cm2/s；moles_consumed_4s=1.42729929292e-9 mol；mean_current_4s_A=0.0000344283615781 A。

10. 数值校核：全部结果为有限实数；单位换算、非负库存、分率界限及本题所列守恒等式须经独立人工复核。

11. 审稿边界：该理想化模型与真实体系的差异须由专业人员评估，不能将机器复算视为专家批准。

#### 全部数值答案

- current_1s_A: **0.0000344283615781 A**
- current_4s_A: **0.000017214180789 A**
- charge_1s_C: **0.0000688567231561 C**
- charge_4s_C: **0.000137713446312 C**
- current_ratio: **2 ratio**
- charge_ratio: **2 ratio**
- D_recovered_cm2_s: **0.00001 cm2/s**
- moles_consumed_4s: **1.42729929292e-9 mol**
- mean_current_4s_A: **0.0000344283615781 A**

### UC-ADV14-O201 Mayo–Lewis二元共聚瞬时组成与早期进料漂移

#### 题目

理想末端模型的二元自由基共聚中，单体M1、M2反应性比分别r1=0.500、r2=2.000，初始摩尔进料分率f1=0.400、f2=0.600。忽略体积变化、链转移与终止对瞬时组成的影响。瞬时共聚物M1分率F1=[r1f1²+f1f2]/[r1f1²+2f1f2+r2f2²]。求F1、F2、F1/F2、F1/f1、初始单体库随总转化率X的导数(df1/dX)|X=0、X=0.010时一阶泰勒估计f1、共聚物M2/M1比，以及瞬时共聚物与进料M1分率差。特别区分一阶近似与完整积分进料漂移。

#### 推导与解答

1. 末端模型给出的分子为r1f1²+f1f2，分母另含2f1f2+r2f2²。

2. 代入f1=0.4、f2=0.6、r1=0.5、r2=2得到瞬时F1，F2=1−F1。

3. F1/F2表示链段瞬时组成比，不等于进料f1/f2。

4. 初始进料与聚合物组成不同，消耗的M1分率F1小于原始f1。

5. 令初始单体总量为1，转化率X后剩余M1量为f1,0−∫0^X F1(u)du。

6. 剩余总量1−X，因此df1/dX=(f1−F1)/(1−X)，在X=0取f1−F1。

7. f1(X)≈f1(0)+X(df1/dX)|0，只在足够小X适用。

8. 核验F1+F2=1及分率非负；此近似不能冒充10%或更高转化率的精确积分。

9. 最终逐项数值（顺序与结构化字段一致）：instant_F1=0.25 fraction；instant_F2=0.75 fraction；polymer_M1_M2_ratio=0.333333333333 ratio；F1_over_feed_f1=0.625 ratio；initial_df1_dX=0.15 per_conversion；feed_f1_at_X001_first_order=0.4015 fraction；polymer_M2_M1_ratio=3 ratio；F1_minus_f1=-0.15 fraction。

10. 数值校核：全部结果为有限实数；单位换算、非负库存、分率界限及本题所列守恒等式须经独立人工复核。

11. 审稿边界：该理想化模型与真实体系的差异须由专业人员评估，不能将机器复算视为专家批准。

#### 全部数值答案

- instant_F1: **0.25 fraction**
- instant_F2: **0.75 fraction**
- polymer_M1_M2_ratio: **0.333333333333 ratio**
- F1_over_feed_f1: **0.625 ratio**
- initial_df1_dX: **0.15 per_conversion**
- feed_f1_at_X001_first_order: **0.4015 fraction**
- polymer_M2_M1_ratio: **3 ratio**
- F1_minus_f1: **-0.15 fraction**

### UC-ADV14-O202 外消旋底物一级动力学拆分的双对映体库存与双ee

#### 题目

外消旋底物R、S各0.5000 mmol，分别经不可逆且不发生消旋的一阶酶促消耗，kR=0.1200 h^−1、kS=0.0300 h^−1；产物保持来源对映标记且无二次反应。反应8.000 h后，求剩余R和S摩尔数、总底物转化率、剩余底物ee（以S过量为正）、已生成产物ee（以R来源为正）、选择性因子kR/kS、产物总摩尔数及两种产物分别的摩尔数。必须逐物种核对初始库存，不能以单一平均速率估算ee。

#### 推导与解答

1. 两对映体分别满足dNR/dt=−kRNR、dNS/dt=−kSNS。

2. 积分得NR(t)=0.5exp(−kRt)、NS(t)=0.5exp(−kSt) mmol。

3. 剩余总底物Nrem=NR+NS，初始总量1 mmol，转化率c=1−Nrem/1。

4. 剩余底物的eeS=(NS−NR)/(NS+NR)，符号以S过量为正。

5. 产物由库存差给PR=0.5−NR、PS=0.5−NS，均非负。

6. 产物eeR=(PR−PS)/(PR+PS)，不得把底物ee直接当产物ee。

7. 选择性因子E=kR/kS，和某时刻产物比例是不同的物理量。

8. 逐物种验证NR+PR=0.5、NS+PS=0.5，且不存在消旋与逆反应。

9. 最终逐项数值（顺序与结构化字段一致）：R_remaining_mmol=0.191446442988 mmol；S_remaining_mmol=0.393313930533 mmol；substrate_conversion=0.415239626479 fraction；substrate_ee_S=0.345214034136 fraction；product_ee_R=0.486146973152 fraction；selectivity_factor=4 ratio；product_total_mmol=0.415239626479 mmol；R_product_mmol=0.308553557012 mmol；S_product_mmol=0.106686069467 mmol。

10. 数值校核：全部结果为有限实数；单位换算、非负库存、分率界限及本题所列守恒等式须经独立人工复核。

11. 审稿边界：该理想化模型与真实体系的差异须由专业人员评估，不能将机器复算视为专家批准。

#### 全部数值答案

- R_remaining_mmol: **0.191446442988 mmol**
- S_remaining_mmol: **0.393313930533 mmol**
- substrate_conversion: **0.415239626479 fraction**
- substrate_ee_S: **0.345214034136 fraction**
- product_ee_R: **0.486146973152 fraction**
- selectivity_factor: **4 ratio**
- product_total_mmol: **0.415239626479 mmol**
- R_product_mmol: **0.308553557012 mmol**
- S_product_mmol: **0.106686069467 mmol**

### UC-ADV14-O203 Diels–Alder内外型竞争过渡态的温度反转

#### 题目

同一底物经两个平行不可逆Diels–Alder过渡态形成endo和exo产物，反应物共同，过渡态理论前因子相同且传输系数相同。给定ΔH‡endo=55.00 kJ/mol、ΔS‡endo=−80.00 J/(mol K)，ΔH‡exo=58.00 kJ/mol、ΔS‡exo=−65.00 J/(mol K)。忽略温度变化引起的活化热容，R=8.314462618 J/(mol K)。求298.15 K两路径的ΔG‡、kendo/kexo和endo分支分率；350.00 K两路径的ΔG‡与速率比；并求两速率相等的交叉温度和350 K endo分率。必须解释焓有利与熵不利如何导致选择性反转。

#### 推导与解答

1. 对每条路径ΔG‡(T)=ΔH‡−TΔS‡，两项都以kJ/mol统一。

2. 298.15 K分别计算endo、exo活化自由能，不能只比较活化焓。

3. Eyring前因子相同，kendo/kexo=exp[−(G‡endo−G‡exo)/(RT)]。

4. 两个平行通道的分支分率fendo=kendo/(kendo+kexo)=ratio/(1+ratio)。

5. 在350 K用同一活化焓熵参数重复求G‡与速率比。

6. 两条路径速率相等要求ΔG‡endo=ΔG‡exo，故Tcross=(Hendo−Hexo)/(Sendo−Sexo)。

7. 核验交叉温度正且在两个测试温度以下，因此高温exo可更占优势。

8. 忽略可逆产物平衡与二次异构化；产物比例仅为动力学分支而非热力学平衡比。

9. 最终逐项数值（顺序与结构化字段一致）：Gendo_298_kJmol=78.852 kJ/mol；Gexo_298_kJmol=77.37975 kJ/mol；kendo_over_kexo_298=0.552170193152 ratio；endo_fraction_298=0.355740752907 fraction；Gendo_350_kJmol=83 kJ/mol；Gexo_350_kJmol=80.75 kJ/mol；kendo_over_kexo_350=0.461543290615 ratio；crossover_temperature_K=200 K；endo_fraction_350=0.31579173438 fraction。

10. 数值校核：全部结果为有限实数；单位换算、非负库存、分率界限及本题所列守恒等式须经独立人工复核。

11. 审稿边界：该理想化模型与真实体系的差异须由专业人员评估，不能将机器复算视为专家批准。

#### 全部数值答案

- Gendo_298_kJmol: **78.852 kJ/mol**
- Gexo_298_kJmol: **77.37975 kJ/mol**
- kendo_over_kexo_298: **0.552170193152 ratio**
- endo_fraction_298: **0.355740752907 fraction**
- Gendo_350_kJmol: **83 kJ/mol**
- Gexo_350_kJmol: **80.75 kJ/mol**
- kendo_over_kexo_350: **0.461543290615 ratio**
- crossover_temperature_K: **200 K**
- endo_fraction_350: **0.31579173438 fraction**

### UC-ADV14-O204 自由基聚合稳态链浓度、速率与终止方式的链长差异

#### 题目

理想自由基聚合，热引发剂浓度[I]=0.01000 mol/L，分解常数kd=1.000×10^−5 s^−1，引发效率f=0.6000，单体[M]=2.000 mol/L，增长常数kp=1000 L/(mol s)，双基终止速率常数kt=1.000×10^7 L/(mol s)。定义Ri=2fkd[I]、终止消耗自由基速率Rt=2kt[R•]²，稳态Ri=Rt。求Ri、稳态[R•]、聚合速率Rp、动力学链长ν=Rp/Ri、歧化终止下的数均聚合度、偶合终止下的数均聚合度、初始单体减少0.100 mol/L所需的短时恒速估计，以及终止事件速率。明确忽略链转移、凝胶效应与单体浓度变化。

#### 推导与解答

1. 引发剂每次有效分解形成两个自由基，Ri=2fkd[I]。

2. 自由基稳态平衡2kt[R•]²=Ri，因此[R•]=√(Ri/(2kt))。

3. 单体增长速率Rp=kp[M][R•]，单位mol/(L s)。

4. 动力学链长ν=Rp/Ri，是每生成一个有效引发自由基的平均增长数。

5. 纯歧化终止每个自由基形成一条死链，DPn≈ν。

6. 纯偶合终止两个自由基生成一条死链，DPn≈2ν；两种情形不可混淆。

7. 在初始速率近似不变时Δt≈0.100/Rp，终止事件频率为kt[R•]²=Ri/2。

8. 检验Ri=2×事件速率和单体守恒；真实转化过程[M]及黏度改变，短时估计不能外推。

9. 最终逐项数值（顺序与结构化字段一致）：initiation_rate_M_s=1.2e-7 mol/(L*s)；radical_concentration_M=7.74596669241e-8 mol/L；polymerization_rate_M_s=0.000154919333848 mol/(L*s)；kinetic_chain_length=1290.99444874 monomers/chain；DPn_disproportionation=1290.99444874 monomers/chain；DPn_combination=2581.98889747 monomers/chain；shorttime_0p1M_seconds=645.497224368 s；termination_events_M_s=6e-8 mol/(L*s)。

10. 数值校核：全部结果为有限实数；单位换算、非负库存、分率界限及本题所列守恒等式须经独立人工复核。

11. 审稿边界：该理想化模型与真实体系的差异须由专业人员评估，不能将机器复算视为专家批准。

#### 全部数值答案

- initiation_rate_M_s: **1.2e-7 mol/(L*s)**
- radical_concentration_M: **7.74596669241e-8 mol/L**
- polymerization_rate_M_s: **0.000154919333848 mol/(L*s)**
- kinetic_chain_length: **1290.99444874 monomers/chain**
- DPn_disproportionation: **1290.99444874 monomers/chain**
- DPn_combination: **2581.98889747 monomers/chain**
- shorttime_0p1M_seconds: **645.497224368 s**
- termination_events_M_s: **6e-8 mol/(L*s)**

### UC-ADV14-P201 Debye介电弛豫复介电常数与损耗峰

#### 题目

极性液体的单一Debye弛豫模型为ε*(ω)=ε∞+(εs−ε∞)/(1+iωτ)，给定静态介电常数εs=80.00、高频极限ε∞=4.000、弛豫时间τ=1.000 ns，采用ε*=ε′−iε″且ε″≥0的记号。求ω=1.000×10^9 rad/s时ε′、ε″、损耗正切ε″/ε′、复介电常数模长；ω=2.000×10^9 rad/s时ε′、ε″；损耗峰的角频率与普通频率MHz，并给出峰值ε″。注意不能把角频率误认为Hz。

#### 推导与解答

1. 写x=ωτ，ε′=ε∞+(εs−ε∞)/(1+x²)。

2. 按ε*=ε′−iε″约定，ε″=(εs−ε∞)x/(1+x²)。

3. 在ω=10^9 rad/s时τ=10^−9 s，所以x=1。

4. 损耗正切tanδ=ε″/ε′，复数模长|ε*|=√(ε′²+ε″²)。

5. 在ω=2×10^9 rad/s时x=2，重新计算实部与损耗。

6. 令d[x/(1+x²)]/dx=0，损耗峰出现在x=1。

7. 峰角频率ωpeak=1/τ，普通频率fpeak=ωpeak/(2π)，单位Hz转MHz除10^6。

8. 峰值损耗ε″peak=(εs−ε∞)/2；该模型不包含直流电导或多重弛豫。

9. 最终逐项数值（顺序与结构化字段一致）：eps_real_omega1=42 relative；eps_loss_omega1=38 relative；loss_tangent_omega1=0.904761904762 ratio；eps_modulus_omega1=56.639209034 relative；eps_real_omega2=19.2 relative；eps_loss_omega2=30.4 relative；peak_omega_rad_s=1000000000 rad/s；peak_frequency_MHz=159.154943092 MHz；peak_loss=38 relative。

10. 数值校核：全部结果为有限实数；单位换算、非负库存、分率界限及本题所列守恒等式须经独立人工复核。

11. 审稿边界：该理想化模型与真实体系的差异须由专业人员评估，不能将机器复算视为专家批准。

#### 全部数值答案

- eps_real_omega1: **42 relative**
- eps_loss_omega1: **38 relative**
- loss_tangent_omega1: **0.904761904762 ratio**
- eps_modulus_omega1: **56.639209034 relative**
- eps_real_omega2: **19.2 relative**
- eps_loss_omega2: **30.4 relative**
- peak_omega_rad_s: **1000000000 rad/s**
- peak_frequency_MHz: **159.154943092 MHz**
- peak_loss: **38 relative**

### UC-ADV14-P202 经典均匀成核的临界半径、势垒及体表面竞争

#### 题目

一新相在旧相内以球形核均匀成核，界面张力γ=0.0300 J/m²，单位体积转变自由能Δgv=−3.000×10^7 J/m³，T=300.0 K，kB=1.380649×10^−23 J/K。连续介质经典成核自由能ΔG(r)=4πr²γ+(4π/3)r³Δgv。求临界半径r*（nm）、临界核表面积、体积、表面自由能项、体积自由能项、总势垒、势垒相对于kBT的倍数、r=1.000 nm时ΔG及r=3.000 nm时ΔG。讨论临界核尺度接近分子尺度时连续介质模型的失效风险。

#### 推导与解答

1. 球形核表面能为4πr²γ，体积驱动力为(4π/3)r³Δgv，Δgv<0。

2. 导数dΔG/dr=8πrγ+4πr²Δgv=4πr(2γ+rΔgv)。

3. 非零驻点r*=−2γ/Δgv>0，二阶导数为负，故是势垒最大值。

4. 求临界表面积A*=4πr*²与体积V*=4πr*³/3。

5. 分别计算临界表面项γA*及体积项ΔgvV*，体积项应为负。

6. 总势垒ΔG*=16πγ³/[3(Δgv)²]，应等于两项之和。

7. 用kBT归一化势垒，另外代入1 nm与3 nm的半径计算自由能。

8. 核验长度m与nm转换及能量J；原子尺度的界面张力曲率修正未包含。

9. 最终逐项数值（顺序与结构化字段一致）：critical_radius_nm=2 nm；critical_area_m2=5.02654824574e-17 m2；critical_volume_m3=3.35103216383e-26 m3；surface_term_J=1.50796447372e-18 J；volume_term_J=-1.00530964915e-18 J；barrier_J=5.02654824574e-19 J；barrier_over_kBT=121.357135805 ratio；G_at_1nm_J=2.51327412287e-19 J；G_at_3nm_J=3.85185988877e-34 J。

10. 数值校核：全部结果为有限实数；单位换算、非负库存、分率界限及本题所列守恒等式须经独立人工复核。

11. 审稿边界：该理想化模型与真实体系的差异须由专业人员评估，不能将机器复算视为专家批准。

#### 全部数值答案

- critical_radius_nm: **2 nm**
- critical_area_m2: **5.02654824574e-17 m2**
- critical_volume_m3: **3.35103216383e-26 m3**
- surface_term_J: **1.50796447372e-18 J**
- volume_term_J: **-1.00530964915e-18 J**
- barrier_J: **5.02654824574e-19 J**
- barrier_over_kBT: **121.357135805 ratio**
- G_at_1nm_J: **2.51327412287e-19 J**
- G_at_3nm_J: **3.85185988877e-34 J**

### UC-ADV14-P203 旋转圆盘电极Koutecký–Levich分离扩散与动力学电流

#### 题目

理想旋转圆盘电极的一电子反应，面积A=0.1000 cm²，扩散系数D=1.000×10^−5 cm²/s，运动黏度ν=0.01000 cm²/s，反应物体相浓度C*=1.000×10^−6 mol/cm³，F=96485.33212 C/mol。Levich极限电流iL=0.62nFAD^(2/3)ν^(−1/6)ω^(1/2)C*；固定电位下独立动力学极限电流ik=20.00 μA，实测1/i=1/ik+1/iL。求ω=100 rad/s与400 rad/s的扩散极限电流、两转速实测电流、实测电流比、100 rad/s时电流相对于扩散极限的比例、Koutecký–Levich截距1/ik，以及旋转速率加倍时iL的倍率。假设溶液欧姆降和双电层电流可忽略。

#### 推导与解答

1. 统一A、D、ν、C*为cm与mol/cm³体系，ω单位必须是rad/s。

2. 先计算Levich前因子B=0.62nFAD^(2/3)ν^(−1/6)C*。

3. iL=B√ω，所以转速由100增至400 rad/s，iL严格翻倍。

4. 动力学与扩散串联限制给i=(ik iL)/(ik+iL)。

5. 分别在两个转速求iL与iobs，不能把两种极限电流直接相加。

6. 以iobs/iL表示扩散极限利用率，它小于1。

7. Koutecký–Levich图1/i对ω^(−1/2)的截距是1/ik，单位A^−1。

8. 检查ik=20 μA转换为2×10^−5 A，并说明反应电子数与旋转流体条件已固定。

9. 最终逐项数值（顺序与结构化字段一致）：Levich_i100_A=0.0000598209059144 A；Levich_i400_A=0.000119641811829 A；observed_i100_A=0.0000149887815051 A；observed_i400_A=0.0000171355284298 A；observed_ratio=1.14322357851 ratio；observed_over_diffusion_100=0.250560924746 fraction；KL_intercept_per_A=50000 1/A；Levich_rotation_400_over_100=2 ratio。

10. 数值校核：全部结果为有限实数；单位换算、非负库存、分率界限及本题所列守恒等式须经独立人工复核。

11. 审稿边界：该理想化模型与真实体系的差异须由专业人员评估，不能将机器复算视为专家批准。

#### 全部数值答案

- Levich_i100_A: **0.0000598209059144 A**
- Levich_i400_A: **0.000119641811829 A**
- observed_i100_A: **0.0000149887815051 A**
- observed_i400_A: **0.0000171355284298 A**
- observed_ratio: **1.14322357851 ratio**
- observed_over_diffusion_100: **0.250560924746 fraction**
- KL_intercept_per_A: **50000 1/A**
- Levich_rotation_400_over_100: **2 ratio**

### UC-ADV14-P204 第二维里截断气体的压缩因子、逸度与剩余Gibbs能

#### 题目

某真实气体在T=300.0 K、压力不超过2.000 MPa范围内，采用压力二阶维里截断近似Z=PVm/(RT)=1+BpP/(RT)，其中Bp=−1.000×10^−4 m³/mol且视为温度常数，R=8.314462618 J/(mol K)。对P1=1.000 MPa与P2=2.000 MPa求Z1、Z2；在P1求摩尔体积Vm、逸度系数φ、逸度f（MPa）、剩余摩尔Gibbs自由能GR、摩尔体积相对理想气体的偏差以及dlnφ/dP。采用dlnφ/dP=(Z−1)/P且φ→1 (P→0)，讨论截断近似适用范围。

#### 推导与解答

1. 给定压力维里形式Z=1+BpP/(RT)，Bp为m³/mol。

2. P1、P2先换成Pa，分别求压缩因子，检查Z>0。

3. Vm=ZRT/P=RT/P+Bp，因此相对理想气体的体积偏差恰为Bp。

4. 等温热力学恒等式dlnφ/dP=(Z−1)/P=Bp/(RT)。

5. 从P=0的φ=1积分得lnφ=BpP/(RT)，因此φ=exp[BpP/(RT)]。

6. 逸度f=φP，若用MPa输出要把Pa除以10^6。

7. 剩余Gibbs自由能GR=RTlnφ=BpP，单位J/mol。

8. 此为压力维里截断，不可将Bp误用为浓度维里系数，也不可向高压任意外推。

9. 最终逐项数值（顺序与结构化字段一致）：Z_1MPa=0.959909214985 ratio；Z_2MPa=0.91981842997 ratio；Vm_1MPa_m3mol=0.0023943387854 m3/mol；fugacity_coefficient_1MPa=0.960702217828 ratio；fugacity_1MPa_MPa=0.960702217828 MPa；residual_Gibbs_Jmol=-100 J/mol；Vm_minus_ideal_m3mol=-0.0001 m3/mol；dlnphi_dP_perPa=-4.0090785015e-8 1/Pa。

10. 数值校核：全部结果为有限实数；单位换算、非负库存、分率界限及本题所列守恒等式须经独立人工复核。

11. 审稿边界：该理想化模型与真实体系的差异须由专业人员评估，不能将机器复算视为专家批准。

#### 全部数值答案

- Z_1MPa: **0.959909214985 ratio**
- Z_2MPa: **0.91981842997 ratio**
- Vm_1MPa_m3mol: **0.0023943387854 m3/mol**
- fugacity_coefficient_1MPa: **0.960702217828 ratio**
- fugacity_1MPa_MPa: **0.960702217828 MPa**
- residual_Gibbs_Jmol: **-100 J/mol**
- Vm_minus_ideal_m3mol: **-0.0001 m3/mol**
- dlnphi_dP_perPa: **-4.0090785015e-8 1/Pa**

<a id="batch-03"></a>

## 第十四辑第三批16道高阶化学综合题（待专家审查）

### UC-ADV14-I209 Fe氧化还原对的配体络合形式电势

#### 完整题目

在298.15 K，E°(Fe3+/Fe2+)=0.7700 V，配体L对Fe3+、Fe2+的1:1络合常数分别为β3=10^8、β2=10^5 L/mol，缓冲保持自由[L]=0.001000 mol/L。分析总浓度包含自由态和络合态，假定无水解、无其他配位且活度系数为1。求两种总量/自由态因子、两种自由态分率、形式电势及移动量、两种总浓度相等时的电势、两种络合态/自由态比。 请列出各物种或物理量的基本方程、逐项给出单位与数值，并检验题设的守恒条件、非负性和适用范围；所有结论只针对上述理想化模型，不应不加条件地外推到实际实验。

#### 逐步解答

1. D3=1+β3[L]、D2=1+β2[L]。

2. 自由离子Nernst式E=E°+(RT/F)ln([FeIII]free/[FeII]free)。

3. 用[Fe]free=[Fe]T/D代入得到E=E°+(RT/F)ln(D2/D3)+(RT/F)ln([FeIII]T/[FeII]T)。

4. E°′=E°+(RT/F)ln(D2/D3)，络合更强的氧化态使E°′下降。

5. 自由分率1/D，络合/自由比D−1。

6. 分析总浓度相等时E=E°′，必须保持自由[L]固定。

7. 数值代入：D3=100001 ratio；D2=101 ratio；f3=0.000009999900001 fraction；f2=0.00990099009901 fraction；Eformal=0.592777343681 V；deltaE=-0.177222656319 V；E_equal=0.592777343681 V；bound3_free=100000 ratio；bound2_free=100 ratio。

8. 核对题设的元素、电荷、总量、分率或能量守恒，并确保物理量与单位一致。

9. 化学科学性、模型适用性及跨辑独立原创性尚未由专家确认，不得作为正式发布题。

#### 数值结果

- D3: 100001 ratio
- D2: 101 ratio
- f3: 0.000009999900001 fraction
- f2: 0.00990099009901 fraction
- Eformal: 0.592777343681 V
- deltaE: -0.177222656319 V
- E_equal: 0.592777343681 V
- bound3_free: 100000 ratio
- bound2_free: 100 ratio


### UC-ADV14-I210 Al取代ZnO的锌空位电荷补偿

#### 完整题目

理想ZnO中Al3+取代Zn2+，每个O对应Al原子y=0.0400；唯一电荷补偿缺陷是有效−2价Zn空位，每两个AlZn•配一个VZn″。氧子晶格全占据，阳离子位总数每O恰为1，Zn=65.38、Al=26.982、O=15.999 g/mol。求Zn、Al、空位占位、占据分率、形式正负电荷、缺陷式量及0.250 mol O对应的Al和空位摩尔数。 请列出各物种或物理量的基本方程、逐项给出单位与数值，并检验题设的守恒条件、非负性和适用范围；所有结论只针对上述理想化模型，不应不加条件地外推到实际实验。

#### 逐步解答

1. Al取代产生+1有效电荷，Zn空位产生−2。

2. 由y−2v=0得到v=y/2。

3. 阳离子位守恒z+y+v=1，故z=1−3y/2。

4. 离子电荷平衡2z+3y=2，与O2−抵消。

5. 缺陷式量M=zMZn+yMAl+MO，不含空位质量。

6. 0.250 mol氧对应的掺杂与空位摩尔数分别为0.250y、0.250v。

7. 数值代入：Zn_per_O=0.94 atoms；Al_per_O=0.04 atoms；vacancy_per_O=0.02 sites；occupied_fraction=0.98 fraction；positive_charge=2 charge；negative_charge=2 charge；molar_mass=78.53548 g/mol；Al_mol=0.01 mol；vacancy_mol=0.005 mol。

8. 核对题设的元素、电荷、总量、分率或能量守恒，并确保物理量与单位一致。

9. 化学科学性、模型适用性及跨辑独立原创性尚未由专家确认，不得作为正式发布题。

#### 数值结果

- Zn_per_O: 0.94 atoms
- Al_per_O: 0.04 atoms
- vacancy_per_O: 0.02 sites
- occupied_fraction: 0.98 fraction
- positive_charge: 2 charge
- negative_charge: 2 charge
- molar_mass: 78.53548 g/mol
- Al_mol: 0.01 mol
- vacancy_mol: 0.005 mol


### UC-ADV14-I211 四铁四硫簇还原的混合价电子账本

#### 完整题目

对[Fe4S4(SR)4]2−一电子还原为[Fe4S4(SR)4]3−，核心4个S各−2，末端4个SR各−1，全部Fe仅在形式+II和+III之间分配。配体价态不变，簇不解离。求前后Fe氧化数总和、平均价态、Fe(III)/Fe(II)数目以及每mol簇还原的形式电荷当量。说明价态账本与实际电子离域并不矛盾。 请列出各物种或物理量的基本方程、逐项给出单位与数值，并检验题设的守恒条件、非负性和适用范围；所有结论只针对上述理想化模型，不应不加条件地外推到实际实验。

#### 逐步解答

1. 配体总电荷−8−4=−12。

2. 总电荷−q意味着Fe氧化数总和12−q。

3. 初始q=2，Fe价态总和10、平均10/4。

4. 设n3+n2=4、3n3+2n2=10，解出两种Fe计数。

5. 还原后q=3，总和9，解相同整数方程。

6. 两态总价数差1，故每mol簇接受1 mol电子，形式电量为F。

7. 数值代入：sum_before=10 oxidation；mean_before=2.5 oxidation；FeIII_before=2 ions；FeII_before=2 ions；sum_after=9 oxidation；mean_after=2.25 oxidation；FeIII_after=1 ions；FeII_after=3 ions；charge_per_mol=96485.33212 C。

8. 核对题设的元素、电荷、总量、分率或能量守恒，并确保物理量与单位一致。

9. 化学科学性、模型适用性及跨辑独立原创性尚未由专家确认，不得作为正式发布题。

#### 数值结果

- sum_before: 10 oxidation
- mean_before: 2.5 oxidation
- FeIII_before: 2 ions
- FeII_before: 2 ions
- sum_after: 9 oxidation
- mean_after: 2.25 oxidation
- FeIII_after: 1 ions
- FeII_after: 3 ions
- charge_per_mol: 96485.33212 C


### UC-ADV14-I212 八面体d3配合物近似谱带与Racah参数

#### 完整题目

某八面体d3配合物两条谱带位于18000与33000 cm−1。本题特定近似规定ν1=10Dq、ν2=10Dq+15B，游离离子Bfree=1200 cm−1；取h=6.62607015×10−34 J s、c=299792458 m/s、NA=6.02214076×10^23 mol−1。求10Dq、B、B/Bfree、两谱带波长、10Dq摩尔能量、晶场稳定化能、未成对电子数和自旋仅磁矩。须说明该近似不能代替完整Tanabe–Sugano拟合。 请列出各物种或物理量的基本方程、逐项给出单位与数值，并检验题设的守恒条件、非负性和适用范围；所有结论只针对上述理想化模型，不应不加条件地外推到实际实验。

#### 逐步解答

1. 直接由第一带得10Dq=18000 cm−1。

2. 第二带与第一带差15B，B=(33000−18000)/15。

3. 共价性缩减比β=B/Bfree。

4. 谱带波长nm=10^7/波数(cm−1)。

5. 摩尔能量E=NAhc×100ν/1000 kJ/mol。

6. d3八面体t2g3给CFSE=−1.2Δo，S=3/2给μ=2√[S(S+1)]μB。

7. 数值代入：Dq10=18000 cm^-1；B_Racah=1000 cm^-1；beta=0.833333333333 ratio；wavelength1=555.555555556 nm；wavelength2=303.03030303 nm；energy_kJmol=215.32781815 kJ/mol；CFSE_kJmol=-258.39338178 kJ/mol；unpaired=3 electrons；spin_muB=3.87298334621 mu_B。

8. 核对题设的元素、电荷、总量、分率或能量守恒，并确保物理量与单位一致。

9. 化学科学性、模型适用性及跨辑独立原创性尚未由专家确认，不得作为正式发布题。

#### 数值结果

- Dq10: 18000 cm^-1
- B_Racah: 1000 cm^-1
- beta: 0.833333333333 ratio
- wavelength1: 555.555555556 nm
- wavelength2: 303.03030303 nm
- energy_kJmol: 215.32781815 kJ/mol
- CFSE_kJmol: -258.39338178 kJ/mol
- unpaired: 3 electrons
- spin_muB: 3.87298334621 mu_B


### UC-ADV14-A209 异方差三点校准的加权回归协方差

#### 完整题目

三个独立校准点(x,y)=(0,1),(1,3),(2,5)，响应已知方差分别为1、0.25、1 counts²。采用已知方差倒数权重1、4、1拟合y=a+bx。未知样响应4 counts，暂不计未知样自身噪声。求a、b、加权x均值、加权Sxx、斜率和截距标准误、二者协方差、未知x和x=3的预测y。即使拟合残差为零也不得将已知仪器噪声方差置零。 请列出各物种或物理量的基本方程、逐项给出单位与数值，并检验题设的守恒条件、非负性和适用范围；所有结论只针对上述理想化模型，不应不加条件地外推到实际实验。

#### 逐步解答

1. 权重和W=6，加权均值xbar=(0+4+2)/6=1。

2. Sxx=Σwi(xi−xbar)²=2。

3. 加权最小二乘得到a=1、b=2。

4. 已知方差下Var(b)=1/Sxx。

5. Var(a)=1/W+xbar²/Sxx，Cov(a,b)=−xbar/Sxx。

6. 未知样x=(4−a)/b，预测x=3时y=a+3b。

7. 数值代入：a=1 counts；b=2 counts/unit；xbar=1 unit；Sxx=2 weighted_unit2；SE_slope=0.707106781187 counts/unit；SE_intercept=0.816496580928 counts；Cov_ab=-0.5 covariance；unknown_x=1.5 unit；predicted_y3=7 counts。

8. 核对题设的元素、电荷、总量、分率或能量守恒，并确保物理量与单位一致。

9. 化学科学性、模型适用性及跨辑独立原创性尚未由专家确认，不得作为正式发布题。

#### 数值结果

- a: 1 counts
- b: 2 counts/unit
- xbar: 1 unit
- Sxx: 2 weighted_unit2
- SE_slope: 0.707106781187 counts/unit
- SE_intercept: 0.816496580928 counts
- Cov_ab: -0.5 covariance
- unknown_x: 1.5 unit
- predicted_y3: 7 counts


### UC-ADV14-A210 荧光内滤效应校正的浓度非线性

#### 完整题目

题设光路下荧光内滤校正式Fobs=Ftrue·10^{−(Aex+Aem)/2}。样品A真实强度1000 counts，激发/发射吸光度0.400/0.200；样品B浓度为A一半，真实强度和两种吸光度均相应减半。求两样品观测强度、透过因子、观测强度比与真实强度比、A的校正乘子及A、B相对低估比例。说明仪器几何与散射会影响该近似的适用性。 请列出各物种或物理量的基本方程、逐项给出单位与数值，并检验题设的守恒条件、非负性和适用范围；所有结论只针对上述理想化模型，不应不加条件地外推到实际实验。

#### 逐步解答

1. 定义T=10^{−(Aex+Aem)/2}。

2. A吸光度和0.6，TA=10^−0.3，FobsA=1000TA。

3. B吸光度和0.3，TB=10^−0.15，FobsB=500TB。

4. 观测比2TA/TB，与真实比2不同。

5. 校正乘子1/TA，校正A强度应回到1000。

6. 相对低估为1−T，非线性来自吸光度随浓度变化。

7. 数值代入：A_observed=501.187233627 counts；B_observed=353.972892192 counts；TA=0.501187233627 fraction；TB=0.707945784384 fraction；observed_ratio=1.41589156877 ratio；true_ratio=2 ratio；A_correction=1.99526231497 ratio；A_underestimate=0.498812766373 fraction；B_underestimate=0.292054215616 fraction。

8. 核对题设的元素、电荷、总量、分率或能量守恒，并确保物理量与单位一致。

9. 化学科学性、模型适用性及跨辑独立原创性尚未由专家确认，不得作为正式发布题。

#### 数值结果

- A_observed: 501.187233627 counts
- B_observed: 353.972892192 counts
- TA: 0.501187233627 fraction
- TB: 0.707945784384 fraction
- observed_ratio: 1.41589156877 ratio
- true_ratio: 2 ratio
- A_correction: 1.99526231497 ratio
- A_underestimate: 0.498812766373 fraction
- B_underestimate: 0.292054215616 fraction


### UC-ADV14-A211 NMR双位点EXSY交换的平衡与本征松弛

#### 完整题目

两态A⇌B一级交换常数kAB=0.4000 s−1、kBA=0.1000 s−1，初始pA=1、pB=0，pA+pB=1，假设核磁信号已扣除自旋弛豫影响且与物种分率线性。求平衡分率、2 s和4 s两态分率、接近平衡的松弛半时间、初始净通量及2 s净通量。必须用双向交换矩阵，不能把A简单视作单向一级衰减。 请列出各物种或物理量的基本方程、逐项给出单位与数值，并检验题设的守恒条件、非负性和适用范围；所有结论只针对上述理想化模型，不应不加条件地外推到实际实验。

#### 逐步解答

1. 平衡由kAB pAeq=kBA pBeq和归一化确定。

2. pAeq=kBA/(kAB+kBA)=0.2，pBeq=0.8。

3. 非零交换本征值−(kAB+kBA)=−0.5 s−1。

4. pA(t)=0.2+0.8exp(−0.5t)，pB=1−pA。

5. 松弛半时间ln2/0.5。

6. 净通量J=kABpA−kBApB，初始0.4 s−1，平衡趋于0。

7. 数值代入：Aeq=0.2 fraction；Beq=0.8 fraction；A2=0.494303552937 fraction；B2=0.505696447063 fraction；A4=0.308268226589 fraction；B4=0.691731773411 fraction；half_time=1.38629436112 s；flux_initial=0.4 1/s；flux_2s=0.147151776469 1/s。

8. 核对题设的元素、电荷、总量、分率或能量守恒，并确保物理量与单位一致。

9. 化学科学性、模型适用性及跨辑独立原创性尚未由专家确认，不得作为正式发布题。

#### 数值结果

- Aeq: 0.2 fraction
- Beq: 0.8 fraction
- A2: 0.494303552937 fraction
- B2: 0.505696447063 fraction
- A4: 0.308268226589 fraction
- B4: 0.691731773411 fraction
- half_time: 1.38629436112 s
- flux_initial: 0.4 1/s
- flux_2s: 0.147151776469 1/s


### UC-ADV14-A212 Cu/Ni共沉积的电流分配与法拉第质量

#### 完整题目

恒电流电沉积总通过电量100.00 C，其中80%用于Cu2+→Cu、10%用于Ni2+→Ni、余10%为不沉积金属的副反应。两金属均为二电子还原，F=96485.33212 C/mol，Cu=63.546、Ni=58.6934 g/mol，忽略剥落。求Cu和Ni分配电量、沉积摩尔数、各自质量、总增重、金属电流效率、副反应电量和金属沉积电子摩尔数。不可把互斥的80%再乘总效率90%。 请列出各物种或物理量的基本方程、逐项给出单位与数值，并检验题设的守恒条件、非负性和适用范围；所有结论只针对上述理想化模型，不应不加条件地外推到实际实验。

#### 逐步解答

1. 总电量分配QCu=80、QNi=10、Qside=10 C。

2. 二电子还原给nCu=80/(2F)。

3. 同理nNi=10/(2F)。

4. 各金属质量分别乘摩尔质量。

5. 总增重为两金属质量之和。

6. 总金属效率(80+10)/100=0.9，沉积电子摩尔数90/F。

7. 数值代入：QCu=80 C；QNi=10 C；nCu=0.000414570786265 mol；nNi=0.0000518213482831 mol；mCu=0.026344315184 g；mNi=0.00304157112332 g；total_mass=0.0293858863073 g；efficiency=0.9 fraction；Qside=10 C；metal_e_mol=0.000932784269096 mol。

8. 核对题设的元素、电荷、总量、分率或能量守恒，并确保物理量与单位一致。

9. 化学科学性、模型适用性及跨辑独立原创性尚未由专家确认，不得作为正式发布题。

#### 数值结果

- QCu: 80 C
- QNi: 10 C
- nCu: 0.000414570786265 mol
- nNi: 0.0000518213482831 mol
- mCu: 0.026344315184 g
- mNi: 0.00304157112332 g
- total_mass: 0.0293858863073 g
- efficiency: 0.9 fraction
- Qside: 10 C
- metal_e_mol: 0.000932784269096 mol


### UC-ADV14-O205 产物竞争结合的有机催化剂库存与抑制

#### 完整题目

催化剂C与底物S及产物P分别形成互斥1:1配合物CS和CP，总催化剂CT=0.01000 mol/L，外部储库维持游离[S]=0.2000 mol/L、[P]=0.1000 mol/L，KS=10.00 L/mol、KP=100.0 L/mol。只有CS以kcat=1.000 s−1生成产物。求自由C、CS、CP浓度和各自分率、当前速率、P=0时速率、产物抑制比及催化剂物料守恒残差。强调产物结合是可逆抑制而非永久失活。 请列出各物种或物理量的基本方程、逐项给出单位与数值，并检验题设的守恒条件、非负性和适用范围；所有结论只针对上述理想化模型，不应不加条件地外推到实际实验。

#### 逐步解答

1. 结合平衡[CS]=KS[S][C]、[CP]=KP[P][C]。

2. 总量CT=[C](1+KS[S]+KP[P])。

3. 由CT反演自由C，再求两配合物。

4. 各物种分率分别除以CT，和为1。

5. 速率v=kcat[CS]。

6. P=0时v0=kcat CT KS[S]/(1+KS[S])，抑制比v/v0。

7. 数值代入：free_C=0.000769230769231 mol/L；CS=0.00153846153846 mol/L；CP=0.00769230769231 mol/L；free_fraction=0.0769230769231 fraction；CS_fraction=0.153846153846 fraction；CP_fraction=0.769230769231 fraction；rate=0.00153846153846 mol/(L*s)；rate_without_P=0.00666666666667 mol/(L*s)；inhibition_ratio=0.230769230769 ratio；balance_residual=0 mol/L。

8. 核对题设的元素、电荷、总量、分率或能量守恒，并确保物理量与单位一致。

9. 化学科学性、模型适用性及跨辑独立原创性尚未由专家确认，不得作为正式发布题。

#### 数值结果

- free_C: 0.000769230769231 mol/L
- CS: 0.00153846153846 mol/L
- CP: 0.00769230769231 mol/L
- free_fraction: 0.0769230769231 fraction
- CS_fraction: 0.153846153846 fraction
- CP_fraction: 0.769230769231 fraction
- rate: 0.00153846153846 mol/(L*s)
- rate_without_P: 0.00666666666667 mol/(L*s)
- inhibition_ratio: 0.230769230769 ratio
- balance_residual: 0 mol/L


### UC-ADV14-O206 Schulz–Flory链长几何分布的尾部质量

#### 完整题目

理想线性逐步聚合且等反应性、严格等化学计量，链数分率xn=(1−p)p^(n−1)，n≥1，p=0.8000。链质量与n成正比，无环化支化。求数均和重均聚合度、分散系数、恰为n=5的数分率和质量分率、n≥10的数分率和质量分率、链长方差及尾部质量/数分率比。必须使用无限几何级数及其求导，不可截断链长分布。 请列出各物种或物理量的基本方程、逐项给出单位与数值，并检验题设的守恒条件、非负性和适用范围；所有结论只针对上述理想化模型，不应不加条件地外推到实际实验。

#### 逐步解答

1. 归一化Σxn=1。

2. 数均DPn=Σnxn=1/(1−p)。

3. 重均DPw=Σn²xn/Σnxn=(1+p)/(1−p)。

4. 分散系数Đ=1+p。

5. x5=(1−p)p⁴，w5=5x5/DPn。

6. 数尾部p⁹，质量尾部p⁹(10−9p)，方差p/(1−p)²。

7. 数值代入：DPn=5 monomers；DPw=9 monomers；dispersity=1.8 ratio；x5=0.08192 fraction；w5=0.08192 fraction；number_tail_10=0.134217728 fraction；mass_tail_10=0.3758096384 fraction；variance=20 monomers2；tail_ratio=2.8 ratio。

8. 核对题设的元素、电荷、总量、分率或能量守恒，并确保物理量与单位一致。

9. 化学科学性、模型适用性及跨辑独立原创性尚未由专家确认，不得作为正式发布题。

#### 数值结果

- DPn: 5 monomers
- DPw: 9 monomers
- dispersity: 1.8 ratio
- x5: 0.08192 fraction
- w5: 0.08192 fraction
- number_tail_10: 0.134217728 fraction
- mass_tail_10: 0.3758096384 fraction
- variance: 20 monomers2
- tail_ratio: 2.8 ratio


### UC-ADV14-O207 有机烯烃表面加氢的压力级数与高压抑制

#### 完整题目

有机烯烃S和H2以题设单占位有效物种竞争吸附，速率r=k(KS[S])(KHP)/(1+KS[S]+KHP)²，k=0.01000 mol/(L s)、KS=10.00 L/mol、[S]=0.2000 mol/L、KH=0.5000 bar−1。求1 bar及4 bar速率、两种覆盖分率、速率比、1 bar的局部H2反应级数、速率最大压力及峰值。需解析求导，解释高压氢抑制；真实H2解离吸附可能改变压力幂律。 请列出各物种或物理量的基本方程、逐项给出单位与数值，并检验题设的守恒条件、非负性和适用范围；所有结论只针对上述理想化模型，不应不加条件地外推到实际实验。

#### 逐步解答

1. 令a=KS[S]=2，b=KHP，分母D=1+a+b。

2. θS=a/D、θH=b/D，空位1/D。

3. 速率r=kab/D²，分别代入1和4 bar。

4. 局部级数dlnr/dlnP=1−2b/D。

5. 令局部级数零得b*=1+a，P*=(1+a)/KH。

6. 峰值r*=ka/[4(1+a)]，检查覆盖度之和1。

7. 数值代入：r1=0.000816326530612 mol/(L*s)；r4=0.0016 mol/(L*s)；H1=0.142857142857 fraction；S1=0.571428571429 fraction；H4=0.4 fraction；S4=0.4 fraction；r4_over_r1=1.96 ratio；order1=0.714285714286 order；P_peak=6 bar；r_peak=0.00166666666667 mol/(L*s)。

8. 核对题设的元素、电荷、总量、分率或能量守恒，并确保物理量与单位一致。

9. 化学科学性、模型适用性及跨辑独立原创性尚未由专家确认，不得作为正式发布题。

#### 数值结果

- r1: 0.000816326530612 mol/(L*s)
- r4: 0.0016 mol/(L*s)
- H1: 0.142857142857 fraction
- S1: 0.571428571429 fraction
- H4: 0.4 fraction
- S4: 0.4 fraction
- r4_over_r1: 1.96 ratio
- order1: 0.714285714286 order
- P_peak: 6 bar
- r_peak: 0.00166666666667 mol/(L*s)


### UC-ADV14-O208 双电离态酰胺酶水解的钟形pH速率

#### 完整题目

某酶促有机酰胺水解的理想钟形pH模型为kobs=kmax/[1+10^(pKa1−pH)+10^(pH−pKa2)]，kmax=10.00 s−1、pKa1=6.000、pKa2=8.000。求pH6、7、8速率、最适pH及其峰速率和活性分率、pH6和8相对峰速率、峰点两个失活项的共同值。必须说明有限pKa间隔时kmax不可达到，且实际酶可能有耦合电离。 请列出各物种或物理量的基本方程、逐项给出单位与数值，并检验题设的守恒条件、非负性和适用范围；所有结论只针对上述理想化模型，不应不加条件地外推到实际实验。

#### 逐步解答

1. 记a=10^(pKa1−pH)、b=10^(pH−pKa2)。

2. 活性分率1/(1+a+b)，速率乘kmax。

3. 对分母求导，极值条件a=b。

4. 因此pHopt=(pKa1+pKa2)/2=7。

5. 峰值分母1+2×0.1，峰速率小于kmax。

6. pH6与8各代入求速率及相对峰速率。

7. 数值代入：k6=4.97512437811 1/s；k7=8.33333333333 1/s；k8=4.97512437811 1/s；pHopt=7 pH；kopt=8.33333333333 1/s；active_fraction=0.833333333333 fraction；k6_over_opt=0.597014925373 ratio；k8_over_opt=0.597014925373 ratio；inactive_term=0.1 ratio。

8. 核对题设的元素、电荷、总量、分率或能量守恒，并确保物理量与单位一致。

9. 化学科学性、模型适用性及跨辑独立原创性尚未由专家确认，不得作为正式发布题。

#### 数值结果

- k6: 4.97512437811 1/s
- k7: 8.33333333333 1/s
- k8: 4.97512437811 1/s
- pHopt: 7 pH
- kopt: 8.33333333333 1/s
- active_fraction: 0.833333333333 fraction
- k6_over_opt: 0.597014925373 ratio
- k8_over_opt: 0.597014925373 ratio
- inactive_term: 0.1 ratio


### UC-ADV14-P205 一价盐Debye长度与Bjerrum关联尺度

#### 完整题目

298.15 K水εr=78.50，ε0=8.8541878128×10−12 F/m，e=1.602176634×10−19 C，kB=1.380649×10−23 J/K，NA=6.02214076×10^23 mol−1。完全解离1:1盐离子强度0.1000与0.01000 mol/L，线性Poisson–Boltzmann近似下λD=√[εrε0kBT/(2NAe²·1000I)]，lB=e²/(4πεrε0kBT)。求两个λD、比值、逆长度、lB及两种λD/lB。 请列出各物种或物理量的基本方程、逐项给出单位与数值，并检验题设的守恒条件、非负性和适用范围；所有结论只针对上述理想化模型，不应不加条件地外推到实际实验。

#### 逐步解答

1. 盐离子强度mol/L乘1000转mol/m³。

2. ε=εrε0，所有长度用m。

3. 分别由λD公式取正平方根。

4. 浓度下降10倍，长度增长√10倍。

5. κ=1/λD，单位m−1。

6. Bjerrum长度与浓度无关，比较λD/lB。

7. 数值代入：lambda_01_nm=0.96198300312 nm；lambda_001_nm=3.04205736023 nm；ratio=3.16227766017 ratio；kappa_01=1039519406.02 1/m；kappa_001=328724899.495 1/m；Bjerrum_nm=0.713960919933 nm；lambda1_over_Bj=1.34738887839 ratio；lambda2_over_Bj=4.26081774968 ratio。

8. 核对题设的元素、电荷、总量、分率或能量守恒，并确保物理量与单位一致。

9. 化学科学性、模型适用性及跨辑独立原创性尚未由专家确认，不得作为正式发布题。

#### 数值结果

- lambda_01_nm: 0.96198300312 nm
- lambda_001_nm: 3.04205736023 nm
- ratio: 3.16227766017 ratio
- kappa_01: 1039519406.02 1/m
- kappa_001: 328724899.495 1/m
- Bjerrum_nm: 0.713960919933 nm
- lambda1_over_Bj: 1.34738887839 ratio
- lambda2_over_Bj: 4.26081774968 ratio


### UC-ADV14-P206 反应热容差下温度平衡常数的严格积分

#### 完整题目

某反应T0=298.15 K时ΔH°=−50.00 kJ/mol、ΔS°=−100.0 J/(mol K)，在298.15至350 K区间ΔCp°=−20.00 J/(mol K)恒定，无相变。求350 K的ΔH、ΔS、ΔG、K350；298.15 K的ΔG与K298；平衡常数比及由−RTlnK重构ΔG的残差。需积分Kirchhoff式，不能将298 K的ΔH、ΔS原样外推。 请列出各物种或物理量的基本方程、逐项给出单位与数值，并检验题设的守恒条件、非负性和适用范围；所有结论只针对上述理想化模型，不应不加条件地外推到实际实验。

#### 逐步解答

1. ΔH(T)=ΔH0+ΔCp(T−T0)。

2. ΔS(T)=ΔS0+ΔCp ln(T/T0)。

3. ΔG(T)=ΔH(T)−TΔS(T)。

4. K(T)=exp[−ΔG(T)/(RT)]。

5. 在T0求G0、K0，再求K350/K0。

6. 检验−RTlnK350与ΔG350一致。

7. 数值代入：H350=-51.037 kJ/mol；S350=-103.206728778 J/(mol*K)；G350=-14.9146449276 kJ/mol；K350=168.207525178 ratio；G298=-20.185 kJ/mol；K298=3437.62899961 ratio；K_ratio=0.0489312619824 ratio；G_reconstruction_residual=-1.81898940355e-12 J/mol。

8. 核对题设的元素、电荷、总量、分率或能量守恒，并确保物理量与单位一致。

9. 化学科学性、模型适用性及跨辑独立原创性尚未由专家确认，不得作为正式发布题。

#### 数值结果

- H350: -51.037 kJ/mol
- S350: -103.206728778 J/(mol*K)
- G350: -14.9146449276 kJ/mol
- K350: 168.207525178 ratio
- G298: -20.185 kJ/mol
- K298: 3437.62899961 ratio
- K_ratio: 0.0489312619824 ratio
- G_reconstruction_residual: -1.81898940355e-12 J/mol


### UC-ADV14-P207 电极双电层RC阶跃充电的能量守恒

#### 完整题目

理想阻挡电极用串联电阻R=100.0 Ω与电容C=10.00 μF表示，初始电压零，t=0施加恒定0.1000 V阶跃，无Faraday反应。i(t)=(ΔV/R)e^(−t/RC)、Q(t)=CΔV[1−e^(−t/RC)]。求时间常数、初始电流、1 ms电流和电量、最终电量、电容储能、串联电阻耗散、充至90%的时间及1 ms尚未充入的电量分率。解释电源供能的一半化为热。 请列出各物种或物理量的基本方程、逐项给出单位与数值，并检验题设的守恒条件、非负性和适用范围；所有结论只针对上述理想化模型，不应不加条件地外推到实际实验。

#### 逐步解答

1. τ=RC，μF转F。

2. i0=ΔV/R，1ms时i=i0e^−1。

3. Q1ms=CΔV(1−e^−1)，Q∞=CΔV。

4. 储能Ecap=CΔV²/2。

5. 电源总功ΔVQ∞，电阻热为总功减储能。

6. t90=τln10，1ms未充入分率e^−1。

7. 数值代入：tau=0.001 s；i0=0.001 A；i1ms=0.000367879441171 A；Q1ms=6.32120558829e-7 C；Qfinal=0.000001 C；Ecap=5e-8 J；Eheat=5e-8 J；t90=0.00230258509299 s；unfilled1ms=0.367879441171 fraction。

8. 核对题设的元素、电荷、总量、分率或能量守恒，并确保物理量与单位一致。

9. 化学科学性、模型适用性及跨辑独立原创性尚未由专家确认，不得作为正式发布题。

#### 数值结果

- tau: 0.001 s
- i0: 0.001 A
- i1ms: 0.000367879441171 A
- Q1ms: 6.32120558829e-7 C
- Qfinal: 0.000001 C
- Ecap: 5e-8 J
- Eheat: 5e-8 J
- t90: 0.00230258509299 s
- unfilled1ms: 0.367879441171 fraction


### UC-ADV14-P208 固定负电荷凝胶的Donnan电势与渗透压

#### 完整题目

理想凝胶内不可移动负固定电荷X=0.1000 mol/L，外部1:1盐大储库cS=0.05000 mol/L，T=298.15 K，允许小离子跨膜。凝胶电中性c+−c−=X，Donnan平衡c+c−=cS²；忽略高分子本身渗透压及活度修正。求凝胶内两离子浓度及比值、移动离子总浓度、相对外液渗透浓度差与渗透压Pa、凝胶相对外液电势差、两个守恒残差。 请列出各物种或物理量的基本方程、逐项给出单位与数值，并检验题设的守恒条件、非负性和适用范围；所有结论只针对上述理想化模型，不应不加条件地外推到实际实验。

#### 逐步解答

1. 由c+−c−=X和c+c−=cS²联立。

2. 正根c+=(X+√(X²+4cS²))/2。

3. c−=cS²/c+，总小离子浓度c++c−。

4. 渗透浓度差Δc=c++c−−2cS。

5. ΔΠ=RT×1000Δc，mol/L转mol/m³。

6. 阳离子电化学平衡给Δψ=(RT/F)ln(cS/c+)。

7. 数值代入：cation=0.120710678119 mol/L；anion=0.0207106781187 mol/L；ratio=5.82842712475 ratio；total_mobile=0.141421356237 mol/L；osmotic_delta_M=0.0414213562373 mol/L；osmotic_pressure=102681.762218 Pa；membrane_potential=-0.0226447606201 V；charge_residual=1.38777878078e-17 mol/L；product_residual=0 mol2/L2。

8. 核对题设的元素、电荷、总量、分率或能量守恒，并确保物理量与单位一致。

9. 化学科学性、模型适用性及跨辑独立原创性尚未由专家确认，不得作为正式发布题。

#### 数值结果

- cation: 0.120710678119 mol/L
- anion: 0.0207106781187 mol/L
- ratio: 5.82842712475 ratio
- total_mobile: 0.141421356237 mol/L
- osmotic_delta_M: 0.0414213562373 mol/L
- osmotic_pressure: 102681.762218 Pa
- membrane_potential: -0.0226447606201 V
- charge_residual: 1.38777878078e-17 mol/L
- product_residual: 0 mol2/L2

<a id="batch-04"></a>

## 第十四辑第四批8题完整中文题解（待审）

### UC-ADV14-I213 氧化物Frenkel缺陷平衡与Nernst–Einstein电导

#### 完整题目

假设氧化物有N=1.000×10^28 m−3个等价正常氧位和同数可用间隙位，稀缺陷Frenkel对由一个氧空位和一个氧间隙组成，两种缺陷分率相等c，理想平衡满足c²=K(T)=exp(ΔS/R−ΔH/RT)。取ΔH=80.00 kJ/mol、ΔS=20.00 J/(mol K)。在800 K和1000 K求K与c；1000 K时假设仅氧间隙离子可迁移、氧空位不贡献电导；氧间隙离子电荷|q|=2e、扩散系数D=1.000×10−10 m²/s，按σ=nq²D/(kBT)求电导率，并求两温度缺陷分率比和1000 K每立方米缺陷对数。给定e=1.602176634×10−19 C、kB=1.380649×10−23 J/K。 请逐步列出全部必要方程，检查各量的单位、正负号、守恒关系和模型可辨识性，并对近似假设及其失效范围作出说明；不得将本题的理想模型直接解释为未经校准的真实实验结果。

#### 推导与解答

1. Frenkel对含一空位一间隙，电中性且两种缺陷分率相等。

2. 理想稀缺陷质量作用律c_v c_i=K，故c=√K。

3. K(T)=exp(ΔS/R−ΔH/RT)，代入800与1000 K。

4. 仅计入移动氧间隙离子数密度n=Nc，1000 K缺陷对数密度也为Nc。

5. 离子电荷大小2e，σ=n(2e)²D/(kBT)。

6. 检验c≪1和电导率S/m，忽略缺陷关联与Haven比。

7. 数值结果：K800=0.0000662689959024 ratio；K1000=0.000734484766374 ratio；c800=0.00814057712342 fraction；c1000=0.0271013794183 fraction；defect_fraction_ratio=3.32917175372 ratio；defect_pair_density_m3=2.71013794183e+26 1/m3；conductivity_S_m=0.201552826297 S/m；charge_magnitude_C=3.204353268e-19 C。

8. 核对题设物料、电荷、归一化、热力学或动力学恒等式与量纲，保持有限精度输出。

9. 本题未经专家科学性、原创性和正式出版审核；数值公式复算不能替代独立实现交叉验证。

#### 数值答案

- K800: 0.0000662689959024 ratio
- K1000: 0.000734484766374 ratio
- c800: 0.00814057712342 fraction
- c1000: 0.0271013794183 fraction
- defect_fraction_ratio: 3.32917175372 ratio
- defect_pair_density_m3: 2.71013794183e+26 1/m3
- conductivity_S_m: 0.201552826297 S/m
- charge_magnitude_C: 3.204353268e-19 C


### UC-ADV14-I214 NaCl晶体的Bragg衍射、结构因子与晶体密度

#### 完整题目

理想岩盐型NaCl立方晶格参数a=5.640 Å，每常规晶胞含Z=4个NaCl式量；Cu Kα波长λ=1.5406 Å。采用一阶Bragg反射，d_hkl=a/√(h²+k²+l²)。为考察系统消光与离子散射反差，取固定原子散射因子fNa=11、fCl=17（无量纲），面心立方允许反射的结构因子F_hkl=4(fCl±fNa)，奇数全奇取负号，全偶取正号。求111与200的晶面距、两峰2θ角度、结构因子、忽略多重性等校正的|F111/F200|²和理论晶体密度。MNaCl=58.44 g/mol、NA=6.02214076×10^23 mol−1。 请逐步列出全部必要方程，检查各量的单位、正负号、守恒关系和模型可辨识性，并对近似假设及其失效范围作出说明；不得将本题的理想模型直接解释为未经校准的真实实验结果。

#### 推导与解答

1. 立方晶面距d111=a/√3、d200=a/2。

2. 一阶Bragg方程2d sinθ=λ，2θ须以角度报告。

3. 111全奇，F111=4(fCl−fNa)。

4. 200全偶，F200=4(fCl+fNa)。

5. 忽略Lorentz、极化、热振动和多重性，强度比取结构因子模平方比。

6. 晶胞质量4M/NA，体积(a×10−8 cm/Å)³，密度为二者之比。

7. 数值结果：d111_A=3.25625551823 angstrom；d200_A=2.82 angstrom；two_theta111_deg=27.3672016258 deg；two_theta200_deg=31.704311174 deg；F111=24 relative；F200=112 relative；intensity_ratio=0.0459183673469 ratio；density_g_cm3=2.16362496673 g/cm3。

8. 核对题设物料、电荷、归一化、热力学或动力学恒等式与量纲，保持有限精度输出。

9. 本题未经专家科学性、原创性和正式出版审核；数值公式复算不能替代独立实现交叉验证。

#### 数值答案

- d111_A: 3.25625551823 angstrom
- d200_A: 2.82 angstrom
- two_theta111_deg: 27.3672016258 deg
- two_theta200_deg: 31.704311174 deg
- F111: 24 relative
- F200: 112 relative
- intensity_ratio: 0.0459183673469 ratio
- density_g_cm3: 2.16362496673 g/cm3


### UC-ADV14-A213 飞行时间质谱的时间零点、质量反演与分辨率

#### 完整题目

飞行时间质谱校准模型t=t0+K√(m/z)，m/z以Da/e计，t以μs计。两个单电荷标准离子m/z=100、400，对应实测飞行时间6.000与11.000 μs。未知单电荷离子飞行时间8.500 μs，峰的时间半高全宽Δt=0.0500 μs。求校准K和t0、未知√(m/z)及m/z、m/z=900时预测飞行时间、未知质量处的分辨本领R=m/Δm≈(t−t0)/(2Δt)、对应Δm、以及未知离子比m/z=226的离子飞行时间差。要求先扣除时间零点再计算质量分辨率。 请逐步列出全部必要方程，检查各量的单位、正负号、守恒关系和模型可辨识性，并对近似假设及其失效范围作出说明；不得将本题的理想模型直接解释为未经校准的真实实验结果。

#### 推导与解答

1. 两标准给6=t0+10K、11=t0+20K。

2. 两式相减K=0.5 μs/√Da，回代t0=1 μs。

3. 未知√m=(8.5−t0)/K，再平方得到m。

4. m/z=900的√m=30，代入时间校准。

5. 质量分辨本领由dt/dm=K/(2√m)得到R≈(t−t0)/(2Δt)。

6. Δm=m/R，226与225的时间差为K(√226−√225)。

7. 数值结果：K_us_sqrtDa=0.5 us/sqrt(Da)；t0_us=1 us；sqrt_unknown_mz=15 sqrt(Da)；unknown_mz=225 Da/e；flight_900_us=16 us；resolving_power=75 ratio；mass_FWHM_Da=3 Da；flight_gap_226_225_us=0.0166481891865 us。

8. 核对题设物料、电荷、归一化、热力学或动力学恒等式与量纲，保持有限精度输出。

9. 本题未经专家科学性、原创性和正式出版审核；数值公式复算不能替代独立实现交叉验证。

#### 数值答案

- K_us_sqrtDa: 0.5 us/sqrt(Da)
- t0_us: 1 us
- sqrt_unknown_mz: 15 sqrt(Da)
- unknown_mz: 225 Da/e
- flight_900_us: 16 us
- resolving_power: 75 ratio
- mass_FWHM_Da: 3 Da
- flight_gap_226_225_us: 0.0166481891865 us


### UC-ADV14-A214 双扩散组分DOSY信号的分率反演与表观扩散

#### 完整题目

PFG-NMR的两个非交换组分具有D1=1.000×10−9、D2=2.000×10−10 m²/s，初始总信号S0=1000.0 counts，第二组分初始强度分率f=0.3000。Stejskal–Tanner理想双指数信号S(b)=S0[(1−f)e^(−bD1)+f e^(−bD2)]。在b1=1.000×10^9 s/m²测得S1=1000[0.7e^(−1)+0.3e^(−0.2)] counts（视为精确读数）。求由S1反演的f、两组分初始强度、b1与b2=2.000×10^9时总信号、b1时快扩散组分信号分率、表观单指数扩散系数Dapp=−ln(S1/S0)/b1、以及b2时慢扩散组分信号分率。不能用单指数拟合代替真实两组分模型。 请逐步列出全部必要方程，检查各量的单位、正负号、守恒关系和模型可辨识性，并对近似假设及其失效范围作出说明；不得将本题的理想模型直接解释为未经校准的真实实验结果。

#### 推导与解答

1. 由S1/S0=(1−f)e^−1+f e^−0.2。

2. 解线性方程f=(S1/S0−e^−1)/(e^−0.2−e^−1)。

3. 初始两强度分别为(1−f)S0与fS0。

4. b2时指数变为e^−2和e^−0.4，分别加权求总信号。

5. b1快组分信号分率=(1−f)S0e^−1/S1。

6. Dapp仅是指定b点的表观单指数斜率，b2慢组分信号分率=fS0e^−0.4/S2。

7. 数值结果：slow_initial_fraction=0.3 fraction；fast_initial_counts=700 counts；slow_initial_counts=300 counts；S_b1=503.134834743 counts；S_b2=295.830712076 counts；fast_signal_fraction_b1=0.511822261226 fraction；Dapp_m2_s=6.86897083684e-10 m2/s；slow_signal_fraction_b2=0.679767196581 fraction。

8. 核对题设物料、电荷、归一化、热力学或动力学恒等式与量纲，保持有限精度输出。

9. 本题未经专家科学性、原创性和正式出版审核；数值公式复算不能替代独立实现交叉验证。

#### 数值答案

- slow_initial_fraction: 0.3 fraction
- fast_initial_counts: 700 counts
- slow_initial_counts: 300 counts
- S_b1: 503.134834743 counts
- S_b2: 295.830712076 counts
- fast_signal_fraction_b1: 0.511822261226 fraction
- Dapp_m2_s: 6.86897083684e-10 m2/s
- slow_signal_fraction_b2: 0.679767196581 fraction


### UC-ADV14-O209 Carothers非等化学计量缩聚的链数与端基库存

#### 完整题目

理想A2与B2双官能单体缩聚，初始A官能团1.000 mol、B官能团0.9500 mol，均在不同双官能单体上，B为限制基团。反应进度定义为B官能团转化率p=0.9800，无环化、无支化、无副反应且每成一键消耗一个A与一个B。令r=B0/A0=0.95。求形成键数、剩余A与B端基摩尔数、初始单体分子总摩尔数、最终链分子摩尔数、数均聚合度DPn、等计量但同p时的DPn、两者比值及端基数/链分子数比。证明DPn=(1+r)/(1+r−2rp)。 请逐步列出全部必要方程，检查各量的单位、正负号、守恒关系和模型可辨识性，并对近似假设及其失效范围作出说明；不得将本题的理想模型直接解释为未经校准的真实实验结果。

#### 推导与解答

1. 初始A2分子0.500 mol、B2分子0.475 mol，总0.975 mol。

2. B转化率p给成键数pB0=0.931 mol。

3. 剩余A端基A0−pB0，B端基B0(1−p)。

4. 无环化时每成一键分子数减1，最终链数0.975−0.931。

5. DPn=初始单体分子数/最终链分子数。

6. 等计量r=1时DPn=1/(1−p)，每条线性链有两个未反应端基。

7. 数值结果：bonds_mol=0.931 mol；A_ends_mol=0.069 mol；B_ends_mol=0.019 mol；initial_molecules_mol=0.975 mol；final_chains_mol=0.044 mol；DPn_imbalanced=22.1590909091 monomers；DPn_balanced=50 monomers；DP_ratio=0.443181818182 ratio；end_groups_per_chain=2 ends/chain。

8. 核对题设物料、电荷、归一化、热力学或动力学恒等式与量纲，保持有限精度输出。

9. 本题未经专家科学性、原创性和正式出版审核；数值公式复算不能替代独立实现交叉验证。

#### 数值答案

- bonds_mol: 0.931 mol
- A_ends_mol: 0.069 mol
- B_ends_mol: 0.019 mol
- initial_molecules_mol: 0.975 mol
- final_chains_mol: 0.044 mol
- DPn_imbalanced: 22.1590909091 monomers
- DPn_balanced: 50 monomers
- DP_ratio: 0.443181818182 ratio
- end_groups_per_chain: 2 ends/chain


### UC-ADV14-O210 活性阴离子聚合Poisson链长的分子量分散系数

#### 完整题目

活性阴离子聚合中0.01000 mol单官能引发剂全部迅速引发，初始单体0.5000 mol，转化率80.00%，无链转移、终止或链间交换，单体随机等概率分配到所有活性链，极限链增长次数n服从Poisson(λ)。每链引发基团质量M0=100.0 g/mol，每重复单元Mr=100.0 g/mol。求每链平均增长次数、数均分子量Mn、重均分子量Mw、分散系数Đ、链长方差、零增长链概率、恰增长40次的概率、以及质量平均意义下增长次数E[n²]/E[n]。需区分分子量分散系数与链长分散系数。 请逐步列出全部必要方程，检查各量的单位、正负号、守恒关系和模型可辨识性，并对近似假设及其失效范围作出说明；不得将本题的理想模型直接解释为未经校准的真实实验结果。

#### 推导与解答

1. 消耗单体0.5×0.8=0.4 mol，活性链0.01 mol，故λ=40。

2. Poisson分布有E[n]=λ、Var(n)=λ、E[n²]=λ²+λ。

3. 链分子量M=M0+Mr n，Mn=E[M]=M0+Mrλ。

4. Mw=E[M²]/E[M]=Mn+Mr²λ/Mn。

5. 分散系数Đ=Mw/Mn，注意M0不为零。

6. P(n=0)=e^−λ、P(n=40)=e^−λ λ^40/40!，E[n²]/E[n]=λ+1。

7. 数值结果：mean_growth=40 repeats；Mn_gmol=4100 g/mol；Mw_gmol=4197.56097561 g/mol；dispersity=1.0237953599 ratio；chain_variance=40 repeats2；zero_growth_probability=4.24835425529e-18 fraction；probability_n40=0.0629470394236 fraction；weight_average_growth=41 repeats。

8. 核对题设物料、电荷、归一化、热力学或动力学恒等式与量纲，保持有限精度输出。

9. 本题未经专家科学性、原创性和正式出版审核；数值公式复算不能替代独立实现交叉验证。

#### 数值答案

- mean_growth: 40 repeats
- Mn_gmol: 4100 g/mol
- Mw_gmol: 4197.56097561 g/mol
- dispersity: 1.0237953599 ratio
- chain_variance: 40 repeats2
- zero_growth_probability: 4.24835425529e-18 fraction
- probability_n40: 0.0629470394236 fraction
- weight_average_growth: 41 repeats


### UC-ADV14-P209 BET多层吸附的线性化参数与单层容量

#### 完整题目

理想BET多层吸附在相对压力x=p/p0∈(0,1)时吸附量n=nm Cx/[(1−x)(1+(C−1)x)]，单层容量nm=2.000 mmol/g、BET常数C=20.00。求x=0.3000与0.5000时的吸附量、对应n/nm、BET线性化变量y=x/[n(1−x)]在x=0.3的数值、线性拟合斜率和截距、由斜率截距反演的nm和C。须说明接近饱和时BET公式发散并不表示真实吸附量无界。 请逐步列出全部必要方程，检查各量的单位、正负号、守恒关系和模型可辨识性，并对近似假设及其失效范围作出说明；不得将本题的理想模型直接解释为未经校准的真实实验结果。

#### 推导与解答

1. BET式n/nm=Cx/[(1−x)(1+(C−1)x)]。

2. 分别代入x=0.3与0.5求吸附量和单层倍数。

3. 线性化y=x/[n(1−x)]=1/(nm C)+(C−1)x/(nm C)。

4. 因此截距i=1/(nm C)，斜率s=(C−1)/(nm C)。

5. 反演nm=1/(s+i)，C=1+s/i。

6. 校核n单位mmol/g，y单位g/mmol，x无量纲。

7. 数值结果：n03=2.55863539446 mmol/g；n05=3.80952380952 mmol/g；ratio03=1.27931769723 ratio；ratio05=1.90476190476 ratio；BET_y03=0.1675 g/mmol；slope=0.475 g/mmol；intercept=0.025 g/mmol；recovered_nm=2 mmol/g；recovered_C=20 ratio。

8. 核对题设物料、电荷、归一化、热力学或动力学恒等式与量纲，保持有限精度输出。

9. 本题未经专家科学性、原创性和正式出版审核；数值公式复算不能替代独立实现交叉验证。

#### 数值答案

- n03: 2.55863539446 mmol/g
- n05: 3.80952380952 mmol/g
- ratio03: 1.27931769723 ratio
- ratio05: 1.90476190476 ratio
- BET_y03: 0.1675 g/mmol
- slope: 0.475 g/mmol
- intercept: 0.025 g/mmol
- recovered_nm: 2 mmol/g
- recovered_C: 20 ratio


### UC-ADV14-P210 Kelvin毛细凝聚的曲率化学势与临界湿度

#### 完整题目

298.15 K水的液–汽表面张力γ=0.07200 N/m，液体摩尔体积Vm=18.00×10−6 m³/mol，R=8.314462618 J/(mol K)。假定完全润湿、圆柱孔的凹液面有效Kelvin曲率半径r，忽略吸附膜厚与线张力，平衡相对蒸气压h=p/psat满足lnh=−2γVm/(rRT)。求r=5.000 nm与10.00 nm的h、对应lnh、5 nm时毛细压力2γ/r、两半径的化学势变化RTlnh、以及h=0.9000时的Kelvin半径。讨论纳米孔径和实际孔径不必等于液面曲率半径。 请逐步列出全部必要方程，检查各量的单位、正负号、守恒关系和模型可辨识性，并对近似假设及其失效范围作出说明；不得将本题的理想模型直接解释为未经校准的真实实验结果。

#### 推导与解答

1. Kelvin式lnh=−2γVm/(rRT)，r必须用m。

2. 在5与10 nm分别求lnh，指数得到h。

3. 同一γ、Vm、T下lnh与1/r成正比。

4. Laplace压力幅值ΔP=2γ/r。

5. 化学势变化Δμ=RTlnh，应为负。

6. 给定h=0.9时反解r=−2γVm/(RTln0.9)。

7. 数值结果：h5=0.811297708463 fraction；h10=0.900720660617 fraction；lnh5=-0.20912020411 log；lnh10=-0.104560102055 log；capillary_pressure5_Pa=28800000 Pa；delta_mu5_Jmol=-518.4 J/mol；delta_mu10_Jmol=-259.2 J/mol；r_at_h09_nm=9.92403097138 nm。

8. 核对题设物料、电荷、归一化、热力学或动力学恒等式与量纲，保持有限精度输出。

9. 本题未经专家科学性、原创性和正式出版审核；数值公式复算不能替代独立实现交叉验证。

#### 数值答案

- h5: 0.811297708463 fraction
- h10: 0.900720660617 fraction
- lnh5: -0.20912020411 log
- lnh10: -0.104560102055 log
- capillary_pressure5_Pa: 28800000 Pa
- delta_mu5_Jmol: -518.4 J/mol
- delta_mu10_Jmol: -259.2 J/mol
- r_at_h09_nm: 9.92403097138 nm

<a id="batch-05"></a>

## 第十四辑手动续编：无机化学 I215–I224

### UC-ADV14-I215 掺钇CaF₂萤石晶胞中间隙氟电荷补偿

理想CaF₂萤石晶胞原有4个Ca位和8个F位，Y³⁺替代Ca²⁺的比例x=0.1000，每个Y_Ca引入1个F间隙离子维持电中性，晶格常数a=0.5460 nm不变。Ca、Y、F的摩尔质量分别40.078、88.906、18.998 g/mol。求Ca/Y/正常F/间隙F/总F原子数、晶胞质量、晶体密度、间隙F在全部F中的比例、晶胞形式净电荷和掺杂Y的阳离子摩尔分率。忽略间隙F形成能、离子相关效应；占位数可为统计平均。

#### 推导和结果

1. 已知条件、待求量及实验近似：理想CaF₂萤石晶胞原有4个Ca位和8个F位，Y³⁺替代Ca²⁺的比例x=0.1000，每个Y_Ca引入1个F间隙离子维持电中性，晶格常数a=0.5460 nm不变。Ca、Y、F的摩尔质量分别40.078、88.906、18.998 g/mol。求Ca/Y/正常F/间隙F/总F原子数、晶胞质量、晶体密度、间隙F在全部F中的比例、晶胞形式净电荷和掺杂Y的阳离子摩尔分率。忽略间隙F形成能、离子相关效应；占位数可为统计平均。

2. 建立严格的计量和平衡表达式：nCa=4(1−x)，nY=4x，nFi=4x，nF=8+4x，ρ=(nCa MCa+nY MY+nF MF)/(NA a³)。

3. 把体积、质量、摩尔数、电势和无量纲热力学因子统一到公式规定单位。

4. 第一组计算结果：Ca = 3.600000000000 atoms；Y = 0.4000000000000 atoms；normal_F = 8.000000000000 atoms；interstitial_F = 0.4000000000000 atoms。

5. 第二组计算结果：total_F = 8.400000000000 atoms；cell_mass_g = 5.636307976302e-22 g；density_g_cm3 = 3.462715312665 g/cm3。

6. 其余结果和回代校验：interstitial_fraction = 0.04761904761905 fraction；net_charge = 0.000000000000 e；Y_fraction = 0.1000000000000 fraction。

7. 分别核对元素/电荷/配位位点/概率或磁性态的归一化守恒；高温或浓度边界不能任意外推。

8. 通过另一种独立计算途径重算每个数值答案（见QA脚本），检验结果的数值精度与取值域。

9. 未引入题面未给出的结构重组、离子非理想性和动力学副反应修正。

10. 本题待人工科学、原创性与版权审查，独立数值复核不代表正式批准。

- Ca = 3.600000000000 atoms
- Y = 0.4000000000000 atoms
- normal_F = 8.000000000000 atoms
- interstitial_F = 0.4000000000000 atoms
- total_F = 8.400000000000 atoms
- cell_mass_g = 5.636307976302e-22 g
- density_g_cm3 = 3.462715312665 g/cm3
- interstitial_fraction = 0.04761904761905 fraction
- net_charge = 0.000000000000 e
- Y_fraction = 0.1000000000000 fraction

### UC-ADV14-I216 Co³⁺配位络合引起的一电子形式电势漂移

Co³⁺+e⇌Co²⁺的标准电势E°=1.820 V。两种氧化态分别生成ML，形成常数βIII=1.000×10⁶、βII=100.0 M⁻¹，自由L恒为0.1000 M。总Co(III)/Co(II)浓度相等时求两个络合因子、自由Co分率、形式电势、相对标准电势漂移及总氧化/还原浓度比变为3.000时的E和电位增加量。T=298.15K，均为理想浓度、无其它络合物。

#### 推导和结果

1. 已知条件、待求量及实验近似：Co³⁺+e⇌Co²⁺的标准电势E°=1.820 V。两种氧化态分别生成ML，形成常数βIII=1.000×10⁶、βII=100.0 M⁻¹，自由L恒为0.1000 M。总Co(III)/Co(II)浓度相等时求两个络合因子、自由Co分率、形式电势、相对标准电势漂移及总氧化/还原浓度比变为3.000时的E和电位增加量。T=298.15K，均为理想浓度、无其它络合物。

2. 建立严格的计量和平衡表达式：Eformal=E°+(RT/F)ln[(1+βII L)/(1+βIII L)]；E=Eformal+(RT/F)ln(CT,III/CT,II)。

3. 把体积、质量、摩尔数、电势和无量纲热力学因子统一到公式规定单位。

4. 第一组计算结果：factor_III = 100001.0000000 ratio；factor_II = 11.00000000000 ratio；free_fraction_III = 0.000009999900001000 fraction；free_fraction_II = 0.09090909090909 fraction。

5. 第二组计算结果：formal_E_V = 1.585811108668 V；shift_V = -0.2341888913317 V；E_ratio3_V = 1.614037291819 V。

6. 其余结果和回代校验：ratio3_increment_V = 0.02822618315045 V；factor_ratio = 0.0001099989000110 ratio；bound_fraction_III = 0.9999900001000 fraction。

7. 分别核对元素/电荷/配位位点/概率或磁性态的归一化守恒；高温或浓度边界不能任意外推。

8. 通过另一种独立计算途径重算每个数值答案（见QA脚本），检验结果的数值精度与取值域。

9. 未引入题面未给出的结构重组、离子非理想性和动力学副反应修正。

10. 本题待人工科学、原创性与版权审查，独立数值复核不代表正式批准。

- factor_III = 100001.0000000 ratio
- factor_II = 11.00000000000 ratio
- free_fraction_III = 0.000009999900001000 fraction
- free_fraction_II = 0.09090909090909 fraction
- formal_E_V = 1.585811108668 V
- shift_V = -0.2341888913317 V
- E_ratio3_V = 1.614037291819 V
- ratio3_increment_V = 0.02822618315045 V
- factor_ratio = 0.0001099989000110 ratio
- bound_fraction_III = 0.9999900001000 fraction

### UC-ADV14-I217 三齿/双齿配体竞争结合M²⁺的统计分配

M²⁺只能分别生成MT²⁺和MB²⁺两种1:1配合物，独立三齿T和双齿B自由浓度由外库固定为0.004000 M及0.01000 M。βT=500.0、βB=80.00 M⁻¹，金属总浓度0.005000 M。求金属分配函数、自由M/两络合物浓度、三物种分率、络合物MT/MB比、总结合分率与M守恒。无三元配体络合或金属沉淀，恒温理想溶液。

#### 推导和结果

1. 已知条件、待求量及实验近似：M²⁺只能分别生成MT²⁺和MB²⁺两种1:1配合物，独立三齿T和双齿B自由浓度由外库固定为0.004000 M及0.01000 M。βT=500.0、βB=80.00 M⁻¹，金属总浓度0.005000 M。求金属分配函数、自由M/两络合物浓度、三物种分率、络合物MT/MB比、总结合分率与M守恒。无三元配体络合或金属沉淀，恒温理想溶液。

2. 建立严格的计量和平衡表达式：D=1+βT[T]+βB[B]，Mfree=MTot/D，MT=βT[T]Mfree，MB=βB[B]Mfree。

3. 把体积、质量、摩尔数、电势和无量纲热力学因子统一到公式规定单位。

4. 第一组计算结果：D = 3.800000000000 ratio；Mfree = 0.001315789473684 mol/L；MT = 0.002631578947368 mol/L；MB = 0.001052631578947 mol/L。

5. 第二组计算结果：free_fraction = 0.2631578947368 fraction；MT_fraction = 0.5263157894737 fraction；MB_fraction = 0.2105263157895 fraction。

6. 其余结果和回代校验：MT_MB_ratio = 2.500000000000 ratio；total_bound_fraction = 0.7368421052632 fraction；metal_total = 0.005000000000000 mol/L。

7. 分别核对元素/电荷/配位位点/概率或磁性态的归一化守恒；高温或浓度边界不能任意外推。

8. 通过另一种独立计算途径重算每个数值答案（见QA脚本），检验结果的数值精度与取值域。

9. 未引入题面未给出的结构重组、离子非理想性和动力学副反应修正。

10. 本题待人工科学、原创性与版权审查，独立数值复核不代表正式批准。

- D = 3.800000000000 ratio
- Mfree = 0.001315789473684 mol/L
- MT = 0.002631578947368 mol/L
- MB = 0.001052631578947 mol/L
- free_fraction = 0.2631578947368 fraction
- MT_fraction = 0.5263157894737 fraction
- MB_fraction = 0.2105263157895 fraction
- MT_MB_ratio = 2.500000000000 ratio
- total_bound_fraction = 0.7368421052632 fraction
- metal_total = 0.005000000000000 mol/L

### UC-ADV14-I218 Gd³⁺和Ce³⁺缺陷电荷补偿下CeO₂−δ的氧空位

理想Ce₁₋yGdyO₂₋δ中Gd³⁺替代Ce⁴⁺，y=0.1000，其余Ce位的20.00%为Ce³⁺、80.00%为Ce⁴⁺；所有氧为O²⁻，没有其它缺陷。求每式量Ce³⁺、Ce⁴⁺、Gd³⁺数量、正电荷、氧缺位δ、实际氧原子数、氧位空位分率δ/2、Ce³⁺占Ce比例、每mol化学式的氧空位mol数以及形式电荷残差。明确20%针对剩余Ce位而非全部阳离子位。

#### 推导和结果

1. 已知条件、待求量及实验近似：理想Ce₁₋yGdyO₂₋δ中Gd³⁺替代Ce⁴⁺，y=0.1000，其余Ce位的20.00%为Ce³⁺、80.00%为Ce⁴⁺；所有氧为O²⁻，没有其它缺陷。求每式量Ce³⁺、Ce⁴⁺、Gd³⁺数量、正电荷、氧缺位δ、实际氧原子数、氧位空位分率δ/2、Ce³⁺占Ce比例、每mol化学式的氧空位mol数以及形式电荷残差。明确20%针对剩余Ce位而非全部阳离子位。

2. 建立严格的计量和平衡表达式：3nCeIII+4nCeIV+3nGd=2(2−δ)。

3. 把体积、质量、摩尔数、电势和无量纲热力学因子统一到公式规定单位。

4. 第一组计算结果：CeIII = 0.1800000000000 ions；CeIV = 0.7200000000000 ions；GdIII = 0.1000000000000 ions；positive_charge = 3.720000000000 charge。

5. 第二组计算结果：delta = 0.1400000000000 vacancies；oxygen_count = 1.860000000000 ions；vacancy_fraction = 0.07000000000000 fraction。

6. 其余结果和回代校验：CeIII_over_all_Ce = 0.2000000000000 fraction；vacancy_mol_per_mol = 0.1400000000000 mol/mol；net_charge = 0.000000000000 charge。

7. 分别核对元素/电荷/配位位点/概率或磁性态的归一化守恒；高温或浓度边界不能任意外推。

8. 通过另一种独立计算途径重算每个数值答案（见QA脚本），检验结果的数值精度与取值域。

9. 未引入题面未给出的结构重组、离子非理想性和动力学副反应修正。

10. 本题待人工科学、原创性与版权审查，独立数值复核不代表正式批准。

- CeIII = 0.1800000000000 ions
- CeIV = 0.7200000000000 ions
- GdIII = 0.1000000000000 ions
- positive_charge = 3.720000000000 charge
- delta = 0.1400000000000 vacancies
- oxygen_count = 1.860000000000 ions
- vacancy_fraction = 0.07000000000000 fraction
- CeIII_over_all_Ce = 0.2000000000000 fraction
- vacancy_mol_per_mol = 0.1400000000000 mol/mol
- net_charge = 0.000000000000 charge

### UC-ADV14-I219 自旋1/2双核配合物单重–三重态交换热占据

两个自旋1/2金属中心反铁磁交换，单重态S=0能量0、简并度1；三重态S=1能隙Δ/kB=100.0 K、简并度3。比较T=50.00与200.0 K，求两个配分函数、三重态和单重态分率、每mol双核分子的平均交换能J/mol、200K/50K平均能之比和忽略三重态简并度时50K错误的分率。体系在零外场下服从正则统计，不考虑长程磁有序和Zeeman分裂。

#### 推导和结果

1. 已知条件、待求量及实验近似：两个自旋1/2金属中心反铁磁交换，单重态S=0能量0、简并度1；三重态S=1能隙Δ/kB=100.0 K、简并度3。比较T=50.00与200.0 K，求两个配分函数、三重态和单重态分率、每mol双核分子的平均交换能J/mol、200K/50K平均能之比和忽略三重态简并度时50K错误的分率。体系在零外场下服从正则统计，不考虑长程磁有序和Zeeman分裂。

2. 建立严格的计量和平衡表达式：Z(T)=1+3exp(−100/T)，pT=3exp(−100/T)/Z，U=R100pT。

3. 把体积、质量、摩尔数、电势和无量纲热力学因子统一到公式规定单位。

4. 第一组计算结果：Z50 = 1.406005849710 ratio；Z200 = 2.819591979138 ratio；triplet50 = 0.2887654057724 fraction；triplet200 = 0.6453387556076 fraction。

5. 第二组计算结果：singlet50 = 0.7112345942276 fraction；singlet200 = 0.3546612443924 fraction；U50_Jmol = 240.0929171666 J/mol。

6. 其余结果和回代校验：U200_Jmol = 536.5644959446 J/mol；energy_ratio = 2.234820178274 ratio；wrong_triplet50 = 0.1192029220221 fraction。

7. 分别核对元素/电荷/配位位点/概率或磁性态的归一化守恒；高温或浓度边界不能任意外推。

8. 通过另一种独立计算途径重算每个数值答案（见QA脚本），检验结果的数值精度与取值域。

9. 未引入题面未给出的结构重组、离子非理想性和动力学副反应修正。

10. 本题待人工科学、原创性与版权审查，独立数值复核不代表正式批准。

- Z50 = 1.406005849710 ratio
- Z200 = 2.819591979138 ratio
- triplet50 = 0.2887654057724 fraction
- triplet200 = 0.6453387556076 fraction
- singlet50 = 0.7112345942276 fraction
- singlet200 = 0.3546612443924 fraction
- U50_Jmol = 240.0929171666 J/mol
- U200_Jmol = 536.5644959446 J/mol
- energy_ratio = 2.234820178274 ratio
- wrong_triplet50 = 0.1192029220221 fraction

### UC-ADV14-I220 MnCO₃沉淀的碳酸根物种分配与pH边界

25°C固定自由Mn²⁺=0.001000 M，初始碳酸总量0.01000 M，碳酸物种仅HCO₃⁻与CO₃²⁻，pKa₂=10.330，MnCO₃溶度积Ksp=2.000×10⁻¹¹。求恰开始沉淀时所需自由[CO₃²⁻]、CO₃分率、HCO₃浓度、起始pH；再分别求pH=9.000与11.000、假设不析出时的碳酸根浓度、离子反应商和饱和比。外库控制自由Mn²⁺；此题只检验沉淀起始驱动力，不预测沉淀后的总量。

#### 推导和结果

1. 已知条件、待求量及实验近似：25°C固定自由Mn²⁺=0.001000 M，初始碳酸总量0.01000 M，碳酸物种仅HCO₃⁻与CO₃²⁻，pKa₂=10.330，MnCO₃溶度积Ksp=2.000×10⁻¹¹。求恰开始沉淀时所需自由[CO₃²⁻]、CO₃分率、HCO₃浓度、起始pH；再分别求pH=9.000与11.000、假设不析出时的碳酸根浓度、离子反应商和饱和比。外库控制自由Mn²⁺；此题只检验沉淀起始驱动力，不预测沉淀后的总量。

2. 建立严格的计量和平衡表达式：fCO3=1/(1+10^(pKa−pH))，Q=[Mn²⁺][CO₃²⁻]，pH*=pKa+log10(f*/(1−f*))。

3. 把体积、质量、摩尔数、电势和无量纲热力学因子统一到公式规定单位。

4. 第一组计算结果：threshold_carbonate_M = 2.000000000000e-8 mol/L；threshold_fraction = 0.000002000000000000 fraction；bicarbonate_onset_M = 0.009999980000000 mol/L；onset_pH = 4.631030864254 pH。

5. 第二组计算结果：carbonate_pH9 = 0.0004468350937180 mol/L；carbonate_pH11 = 0.008238615285056 mol/L；Q_pH9 = 4.468350937180e-7 M2。

6. 其余结果和回代校验：Q_pH11 = 0.000008238615285056 M2；saturation_pH9 = 22341.75468590 ratio；saturation_pH11 = 411930.7642528 ratio。

7. 分别核对元素/电荷/配位位点/概率或磁性态的归一化守恒；高温或浓度边界不能任意外推。

8. 通过另一种独立计算途径重算每个数值答案（见QA脚本），检验结果的数值精度与取值域。

9. 未引入题面未给出的结构重组、离子非理想性和动力学副反应修正。

10. 本题待人工科学、原创性与版权审查，独立数值复核不代表正式批准。

- threshold_carbonate_M = 2.000000000000e-8 mol/L
- threshold_fraction = 0.000002000000000000 fraction
- bicarbonate_onset_M = 0.009999980000000 mol/L
- onset_pH = 4.631030864254 pH
- carbonate_pH9 = 0.0004468350937180 mol/L
- carbonate_pH11 = 0.008238615285056 mol/L
- Q_pH9 = 4.468350937180e-7 M2
- Q_pH11 = 0.000008238615285056 M2
- saturation_pH9 = 22341.75468590 ratio
- saturation_pH11 = 411930.7642528 ratio

### UC-ADV14-I221 Li₁−xFePO₄脱锂的铁氧化态与电子转移库存

某Li₁₋xFePO₄正极在x=0.3500及x=0.8000两状态之间理想脱锂，Li为+1价、PO₄整体−3价，全部铁仅Fe²⁺/Fe³⁺，无氧空位或电子/空穴副载流子。求两状态平均Fe氧化态、Fe³⁺和Fe²⁺分率、每mol原始式量脱锂的物质的量及转移电量(C/mol)，两状态的电荷比，解释为何x是每式量的一电子容量比例且不是2电子过程。F=96485.33212 C/mol。

#### 推导和结果

1. 已知条件、待求量及实验近似：某Li₁₋xFePO₄正极在x=0.3500及x=0.8000两状态之间理想脱锂，Li为+1价、PO₄整体−3价，全部铁仅Fe²⁺/Fe³⁺，无氧空位或电子/空穴副载流子。求两状态平均Fe氧化态、Fe³⁺和Fe²⁺分率、每mol原始式量脱锂的物质的量及转移电量(C/mol)，两状态的电荷比，解释为何x是每式量的一电子容量比例且不是2电子过程。F=96485.33212 C/mol。

2. 建立严格的计量和平衡表达式：(1−x)+Fe_valence−3=0，Fe_valence=2+x，n(e−)/formula=x。

3. 把体积、质量、摩尔数、电势和无量纲热力学因子统一到公式规定单位。

4. 第一组计算结果：valence_x35 = 2.350000000000 oxidation；valence_x80 = 2.800000000000 oxidation；FeIII_fraction_x35 = 0.3500000000000 fraction；FeIII_fraction_x80 = 0.8000000000000 fraction。

5. 第二组计算结果：FeII_fraction_x35 = 0.6500000000000 fraction；FeII_fraction_x80 = 0.2000000000000 fraction；Li_removed_x35 = 0.3500000000000 mol/mol；Li_removed_x80 = 0.8000000000000 mol/mol。

6. 其余结果和回代校验：charge_x35_Cmol = 33769.86624200 C/mol；charge_x80_Cmol = 77188.26569600 C/mol；charge_ratio = 2.285714285714 ratio。

7. 分别核对元素/电荷/配位位点/概率或磁性态的归一化守恒；高温或浓度边界不能任意外推。

8. 通过另一种独立计算途径重算每个数值答案（见QA脚本），检验结果的数值精度与取值域。

9. 未引入题面未给出的结构重组、离子非理想性和动力学副反应修正。

10. 本题待人工科学、原创性与版权审查，独立数值复核不代表正式批准。

- valence_x35 = 2.350000000000 oxidation
- valence_x80 = 2.800000000000 oxidation
- FeIII_fraction_x35 = 0.3500000000000 fraction
- FeIII_fraction_x80 = 0.8000000000000 fraction
- FeII_fraction_x35 = 0.6500000000000 fraction
- FeII_fraction_x80 = 0.2000000000000 fraction
- Li_removed_x35 = 0.3500000000000 mol/mol
- Li_removed_x80 = 0.8000000000000 mol/mol
- charge_x35_Cmol = 33769.86624200 C/mol
- charge_x80_Cmol = 77188.26569600 C/mol
- charge_ratio = 2.285714285714 ratio

### UC-ADV14-I222 NO与Cl₂生成NOCl的三物种理想气体平衡求根

恒温1.000 L理想反应容器，2NO(g)+Cl₂(g)⇌2NOCl(g)，初始NO=0.01000 mol、Cl₂=0.008000 mol、NOCl=0，浓度平衡常数Kc=100.0 L/mol（以标准浓度归一）。定义反应进度ξ mol，物理解区间0<ξ<0.005。计算唯一物理根、NO、Cl₂、NOCl平衡浓度、NO转化率、NOCl生成摩尔数、Cl₂消耗量、回代Kc以及NO原子与Cl原子的总库存。注意Cl₂含两个Cl原子。

#### 推导和结果

1. 已知条件、待求量及实验近似：恒温1.000 L理想反应容器，2NO(g)+Cl₂(g)⇌2NOCl(g)，初始NO=0.01000 mol、Cl₂=0.008000 mol、NOCl=0，浓度平衡常数Kc=100.0 L/mol（以标准浓度归一）。定义反应进度ξ mol，物理解区间0<ξ<0.005。计算唯一物理根、NO、Cl₂、NOCl平衡浓度、NO转化率、NOCl生成摩尔数、Cl₂消耗量、回代Kc以及NO原子与Cl原子的总库存。注意Cl₂含两个Cl原子。

2. 建立严格的计量和平衡表达式：Kc=(2ξ)^2/[(0.01000−2ξ)^2(0.008000−ξ)]，用二分法取唯一物理根。

3. 把体积、质量、摩尔数、电势和无量纲热力学因子统一到公式规定单位。

4. 第一组计算结果：extent = 0.002165295635055 mol；NO_M = 0.005669408729890 mol/L；Cl2_M = 0.005834704364945 mol/L；NOCl_M = 0.004330591270110 mol/L。

5. 第二组计算结果：NO_conversion = 0.4330591270110 fraction；NOCl_moles = 0.004330591270110 mol；Cl2_consumption = 0.002165295635055 mol。

6. 其余结果和回代校验：Kc_recovered = 100.0000000000 L/mol；NO_atom_moles = 0.01000000000000 mol；Cl_atom_moles = 0.01600000000000 mol。

7. 分别核对元素/电荷/配位位点/概率或磁性态的归一化守恒；高温或浓度边界不能任意外推。

8. 通过另一种独立计算途径重算每个数值答案（见QA脚本），检验结果的数值精度与取值域。

9. 未引入题面未给出的结构重组、离子非理想性和动力学副反应修正。

10. 本题待人工科学、原创性与版权审查，独立数值复核不代表正式批准。

- extent = 0.002165295635055 mol
- NO_M = 0.005669408729890 mol/L
- Cl2_M = 0.005834704364945 mol/L
- NOCl_M = 0.004330591270110 mol/L
- NO_conversion = 0.4330591270110 fraction
- NOCl_moles = 0.004330591270110 mol
- Cl2_consumption = 0.002165295635055 mol
- Kc_recovered = 100.0000000000 L/mol
- NO_atom_moles = 0.01000000000000 mol
- Cl_atom_moles = 0.01600000000000 mol

### UC-ADV14-I223 金属A²⁺/B²⁺对单齿L的竞争配位分流

在理想水溶液中金属A²⁺、B²⁺的总浓度分别0.004000和0.006000 M；自由单齿L浓度由外储库维持为0.01000 M。只有A+L⇌AL、B+L⇌BL两种1:1络合，形成常数分别KA=2000、KB=100.0 M⁻¹，无混合物种。求两金属络合分率、两络合物和两自由金属浓度、络合物A/B比、自由金属B/A比、总被结合L浓度及全部络合物中A所占分率。必须区别总金属浓度与自由金属浓度。

#### 推导和结果

1. 已知条件、待求量及实验近似：在理想水溶液中金属A²⁺、B²⁺的总浓度分别0.004000和0.006000 M；自由单齿L浓度由外储库维持为0.01000 M。只有A+L⇌AL、B+L⇌BL两种1:1络合，形成常数分别KA=2000、KB=100.0 M⁻¹，无混合物种。求两金属络合分率、两络合物和两自由金属浓度、络合物A/B比、自由金属B/A比、总被结合L浓度及全部络合物中A所占分率。必须区别总金属浓度与自由金属浓度。

2. 建立严格的计量和平衡表达式：f_i=K_i[L]/(1+K_i[L])，[MiL]=CT,i f_i，[Mi]=CT,i(1−f_i)。

3. 把体积、质量、摩尔数、电势和无量纲热力学因子统一到公式规定单位。

4. 第一组计算结果：frac_A = 0.9523809523810 fraction；frac_B = 0.5000000000000 fraction；AL_M = 0.003809523809524 mol/L；BL_M = 0.003000000000000 mol/L。

5. 第二组计算结果：free_A_M = 0.0001904761904762 mol/L；free_B_M = 0.003000000000000 mol/L；complex_A_B = 1.269841269841 ratio。

6. 其余结果和回代校验：free_B_A = 15.75000000000 ratio；total_bound_L_M = 0.006809523809524 mol/L；A_fraction_of_complexes = 0.5594405594406 fraction。

7. 分别核对元素/电荷/配位位点/概率或磁性态的归一化守恒；高温或浓度边界不能任意外推。

8. 通过另一种独立计算途径重算每个数值答案（见QA脚本），检验结果的数值精度与取值域。

9. 未引入题面未给出的结构重组、离子非理想性和动力学副反应修正。

10. 本题待人工科学、原创性与版权审查，独立数值复核不代表正式批准。

- frac_A = 0.9523809523810 fraction
- frac_B = 0.5000000000000 fraction
- AL_M = 0.003809523809524 mol/L
- BL_M = 0.003000000000000 mol/L
- free_A_M = 0.0001904761904762 mol/L
- free_B_M = 0.003000000000000 mol/L
- complex_A_B = 1.269841269841 ratio
- free_B_A = 15.75000000000 ratio
- total_bound_L_M = 0.006809523809524 mol/L
- A_fraction_of_complexes = 0.5594405594406 fraction

### UC-ADV14-I224 Er³⁺稀土热耦合荧光双谱线强度比与温度反演

稀土Er³⁺两个热耦合能级差ΔE/kB=900.0 K，实验标定发光强度比R(T)=Ihot/Icold=C exp(−900/T)，C=2.500包含简并度与辐射概率。T=300.0 K和450.0 K，求两R、R450/R300、相对灵敏度Sr=900/T²、绝对灵敏度dR/dT=R Sr、由R450反算T、450K的纯Boltzmann激发因子及R相对增加量。模型要求温度平衡及无其他猝灭，谱线强度比不可直接等同布居比。

#### 推导和结果

1. 已知条件、待求量及实验近似：稀土Er³⁺两个热耦合能级差ΔE/kB=900.0 K，实验标定发光强度比R(T)=Ihot/Icold=C exp(−900/T)，C=2.500包含简并度与辐射概率。T=300.0 K和450.0 K，求两R、R450/R300、相对灵敏度Sr=900/T²、绝对灵敏度dR/dT=R Sr、由R450反算T、450K的纯Boltzmann激发因子及R相对增加量。模型要求温度平衡及无其他猝灭，谱线强度比不可直接等同布居比。

2. 建立严格的计量和平衡表达式：R=Cexp(−θ/T)，T=θ/ln(C/R)，Sr=θ/T²。

3. 把体积、质量、摩尔数、电势和无量纲热力学因子统一到公式规定单位。

4. 第一组计算结果：R300 = 0.1244676709197 ratio；R450 = 0.3383382080915 ratio；R450_R300 = 2.718281828459 ratio；Sr300 = 0.01000000000000 K^-1。

5. 第二组计算结果：Sr450 = 0.004444444444444 K^-1；dR_dT300 = 0.001244676709197 K^-1；dR_dT450 = 0.001503725369296 K^-1。

6. 其余结果和回代校验：T_recovered = 450.0000000000 K；Boltzmann450 = 0.1353352832366 ratio；relative_increase = 1.718281828459 fraction。

7. 分别核对元素/电荷/配位位点/概率或磁性态的归一化守恒；高温或浓度边界不能任意外推。

8. 通过另一种独立计算途径重算每个数值答案（见QA脚本），检验结果的数值精度与取值域。

9. 未引入题面未给出的结构重组、离子非理想性和动力学副反应修正。

10. 本题待人工科学、原创性与版权审查，独立数值复核不代表正式批准。

- R300 = 0.1244676709197 ratio
- R450 = 0.3383382080915 ratio
- R450_R300 = 2.718281828459 ratio
- Sr300 = 0.01000000000000 K^-1
- Sr450 = 0.004444444444444 K^-1
- dR_dT300 = 0.001244676709197 K^-1
- dR_dT450 = 0.001503725369296 K^-1
- T_recovered = 450.0000000000 K
- Boltzmann450 = 0.1353352832366 ratio
- relative_increase = 1.718281828459 fraction

<a id="batch-06"></a>

## 第十四辑手动续编：分析化学 A215–A224

### UC-ADV14-A215 H₂O₂碘量法与硫代硫酸钠滴定的氧化剂摩尔数

酸性环境下H₂O₂+2I⁻+2H⁺→I₂+2H₂O，生成的I₂用2S₂O₃²⁻→S₄O₆²⁻+2I⁻的当量关系滴定。取原样10.00 mL，消耗cT=0.01250 mol/L硫代硫酸钠18.00 mL，另测空白0.2000 mL。假定反应完全且不存在其它氧化剂、滴定剂浓度准确，求扣空白体积、净硫代硫酸根摩尔数、H₂O₂摩尔数和原样浓度、H₂O₂质量浓度(g/L)，M=34.0147 g/mol；计算若不扣空白的系统偏差、一个50.00 mL原样中H₂O₂总质量及以1.000 L表示的氧化能力电子摩尔数。不得把I₂与S₂O₃的2:1配比漏掉。

#### 模型与解析

1. 完整分析化学实验参数：酸性环境下H₂O₂+2I⁻+2H⁺→I₂+2H₂O，生成的I₂用2S₂O₃²⁻→S₄O₆²⁻+2I⁻的当量关系滴定。取原样10.00 mL，消耗cT=0.01250 mol/L硫代硫酸钠18.00 mL，另测空白0.2000 mL。假定反应完全且不存在其它氧化剂、滴定剂浓度准确，求扣空白体积、净硫代硫酸根摩尔数、H₂O₂摩尔数和原样浓度、H₂O₂质量浓度(g/L)，M=34.0147 g/mol；计算若不扣空白的系统偏差、一个50.00 mL原样中H₂O₂总质量及以1.000 L表示的氧化能力电子摩尔数。不得把I₂与S₂O₃的2:1配比漏掉。

2. 建立量值反演方程：n(H2O2)=n(S2O3²⁻)/2，cH2O2=cT(Vt−Vblank)/(2Vsample)，每mol H2O2对应2mol电子。

3. 明确空白校正、标准态与体积转换，以真实实验观测的条件未知量为基础建立线性或非线性反演。

4. 第一组定量结果：net_titrant_volume_mL = 17.800000000000 mL；thiosulfate_moles = 0.00022250000000000 mol；peroxide_moles = 0.00011125000000000 mol；peroxide_concentration_M = 0.011125000000000 mol/L。

5. 第二组定量结果：peroxide_mass_g_L = 0.37841353750000 g/L；naive_concentration_no_blank_M = 0.011250000000000 mol/L；naive_relative_bias = 0.011235955056180 fraction。

6. 其余结果与反演回代：peroxide_mass_in_50mL_g = 0.018920676875000 g；electron_equiv_mol_per_L = 0.022250000000000 mol_e/L；iodine_moles = 0.00011125000000000 mol。

7. 将最终浓度、吸光度或当量量返回原测量方程，检查两端相符及物料与电荷平衡。

8. 解释本题仪器校正假设的使用范围，不用理想数学条件代替真实基线噪声和基体效应。

9. 数值证据已由不同写法的独立计算函数逐项复核，不能将它理解为正式科研验证。

10. 尚需专家审校题目化学合理性、模型独立性和版权。

- net_titrant_volume_mL = 17.800000000000 mL
- thiosulfate_moles = 0.00022250000000000 mol
- peroxide_moles = 0.00011125000000000 mol
- peroxide_concentration_M = 0.011125000000000 mol/L
- peroxide_mass_g_L = 0.37841353750000 g/L
- naive_concentration_no_blank_M = 0.011250000000000 mol/L
- naive_relative_bias = 0.011235955056180 fraction
- peroxide_mass_in_50mL_g = 0.018920676875000 g
- electron_equiv_mol_per_L = 0.022250000000000 mol_e/L
- iodine_moles = 0.00011125000000000 mol

### UC-ADV14-A216 气相色谱Kováts保留指数校准的死时间修正

等温GC同一固定相上正辛烷C8、正壬烷C9和未知目标峰A的保留时间tR分别为4.200、5.900、5.000 min；死时间t0=1.200 min。假定未知峰位于两n-alkane之间，按Kováts指数I=800+100[ln(tR,A−t0)−ln(tR,8−t0)]/[ln(tR,9−t0)−ln(tR,8−t0)]。求三组调整保留时间、未知保留因子kA=(tR,A−t0)/t0、两烷保留因子、计算得到的指数、指数距800和900的差、未知峰对辛烷和壬烷的对数位移分数、未知峰在两烷对数保留位置的相对分数。说明不可直接用未扣死时间的线性tR插值。

#### 模型与解析

1. 完整分析化学实验参数：等温GC同一固定相上正辛烷C8、正壬烷C9和未知目标峰A的保留时间tR分别为4.200、5.900、5.000 min；死时间t0=1.200 min。假定未知峰位于两n-alkane之间，按Kováts指数I=800+100[ln(tR,A−t0)−ln(tR,8−t0)]/[ln(tR,9−t0)−ln(tR,8−t0)]。求三组调整保留时间、未知保留因子kA=(tR,A−t0)/t0、两烷保留因子、计算得到的指数、指数距800和900的差、未知峰对辛烷和壬烷的对数位移分数、未知峰在两烷对数保留位置的相对分数。说明不可直接用未扣死时间的线性tR插值。

2. 建立量值反演方程：t'R=tR−t0，α=[ln(t'A/t'8)]/[ln(t'9/t'8)]，I=800+100α。

3. 明确空白校正、标准态与体积转换，以真实实验观测的条件未知量为基础建立线性或非线性反演。

4. 第一组定量结果：adjusted_t8_min = 3.0000000000000 min；adjusted_t9_min = 4.7000000000000 min；adjusted_tA_min = 3.8000000000000 min；capacity_factor_A = 3.1666666666667 ratio。

5. 第二组定量结果：capacity_factor_C8 = 2.5000000000000 ratio；capacity_factor_C9 = 3.9166666666667 ratio；Kovats_index = 852.65367239134 index。

6. 其余结果与反演回代：index_above800 = 52.653672391342 index；index_below900 = 47.346327608658 index；log_retention_fraction = 0.52653672391342 fraction。

7. 将最终浓度、吸光度或当量量返回原测量方程，检查两端相符及物料与电荷平衡。

8. 解释本题仪器校正假设的使用范围，不用理想数学条件代替真实基线噪声和基体效应。

9. 数值证据已由不同写法的独立计算函数逐项复核，不能将它理解为正式科研验证。

10. 尚需专家审校题目化学合理性、模型独立性和版权。

- adjusted_t8_min = 3.0000000000000 min
- adjusted_t9_min = 4.7000000000000 min
- adjusted_tA_min = 3.8000000000000 min
- capacity_factor_A = 3.1666666666667 ratio
- capacity_factor_C8 = 2.5000000000000 ratio
- capacity_factor_C9 = 3.9166666666667 ratio
- Kovats_index = 852.65367239134 index
- index_above800 = 52.653672391342 index
- index_below900 = 47.346327608658 index
- log_retention_fraction = 0.52653672391342 fraction

### UC-ADV14-A217 UV–Vis等体积标准加入法对未知磷酸根浓度的反演

用衍生化UV–Vis测磷酸根，信号A=kCfinal，k=1000.0 L/mol，空白已扣除。在两个相同的25.00 mL容量瓶中各加入10.00 mL未知水样，第一瓶不加标，第二瓶加0.5000 mL浓度0.001000 M磷酸根标准液，再均定容到25.00 mL。实测A0=0.04000、A1=0.06000，无反应抑制及光学背景。求两瓶最终磷酸根浓度、样品原浓度、加入标样在终体积中的浓度、样品稀释分数、标准加入吸光度增量、两吸光度之比、若误将第二瓶按25.50 mL计算得到的表观浓度差以及样品10 mL的磷酸根摩尔数。模型要求终体积固定。

#### 模型与解析

1. 完整分析化学实验参数：用衍生化UV–Vis测磷酸根，信号A=kCfinal，k=1000.0 L/mol，空白已扣除。在两个相同的25.00 mL容量瓶中各加入10.00 mL未知水样，第一瓶不加标，第二瓶加0.5000 mL浓度0.001000 M磷酸根标准液，再均定容到25.00 mL。实测A0=0.04000、A1=0.06000，无反应抑制及光学背景。求两瓶最终磷酸根浓度、样品原浓度、加入标样在终体积中的浓度、样品稀释分数、标准加入吸光度增量、两吸光度之比、若误将第二瓶按25.50 mL计算得到的表观浓度差以及样品10 mL的磷酸根摩尔数。模型要求终体积固定。

2. 建立量值反演方程：C0,final=Csample×10/25；C1,final=C0,final+Cstandard×0.5/25；A=kC。

3. 明确空白校正、标准态与体积转换，以真实实验观测的条件未知量为基础建立线性或非线性反演。

4. 第一组定量结果：final_concentration_unspiked_M = 0.000040000000000000 mol/L；final_concentration_spiked_M = 0.000060000000000000 mol/L；original_sample_concentration_M = 0.00010000000000000 mol/L；spiked_increment_M = 0.000020000000000000 mol/L。

5. 第二组定量结果：sample_dilution_factor = 0.40000000000000 fraction；delta_absorbance = 0.020000000000000 AU；absorbance_ratio = 1.5000000000000 ratio。

6. 其余结果与反演回代：incorrect_final_volume_spike_increment_M = 0.000019607843137255 mol/L；sample_aliquot_phosphate_moles = 0.0000010000000000000 mol；reconstructed_A1 = 0.060000000000000 AU。

7. 将最终浓度、吸光度或当量量返回原测量方程，检查两端相符及物料与电荷平衡。

8. 解释本题仪器校正假设的使用范围，不用理想数学条件代替真实基线噪声和基体效应。

9. 数值证据已由不同写法的独立计算函数逐项复核，不能将它理解为正式科研验证。

10. 尚需专家审校题目化学合理性、模型独立性和版权。

- final_concentration_unspiked_M = 0.000040000000000000 mol/L
- final_concentration_spiked_M = 0.000060000000000000 mol/L
- original_sample_concentration_M = 0.00010000000000000 mol/L
- spiked_increment_M = 0.000020000000000000 mol/L
- sample_dilution_factor = 0.40000000000000 fraction
- delta_absorbance = 0.020000000000000 AU
- absorbance_ratio = 1.5000000000000 ratio
- incorrect_final_volume_spike_increment_M = 0.000019607843137255 mol/L
- sample_aliquot_phosphate_moles = 0.0000010000000000000 mol
- reconstructed_A1 = 0.060000000000000 AU

### UC-ADV14-A218 双组分FTIR红外吸光度线性方程反演化学组分

1.000 cm光程FTIR在两个特征波数对组分X、Y的摩尔吸光系数分别为(εX1,εY1)=(1000,300) L/(mol cm)，(εX2,εY2)=(200,800) L/(mol cm)。实测扣基线A1=0.1150、A2=0.09000；仅X、Y贡献，样本均匀无散射。联立Beer–Lambert两波数方程求X与Y浓度、各组分在两个波数的吸光度贡献、总浓度、X摩尔分率、浓度比、吸光度回代残差和系数矩阵行列式。说明选择谱带必须避免矩阵近奇异，否则实验误差会放大。

#### 模型与解析

1. 完整分析化学实验参数：1.000 cm光程FTIR在两个特征波数对组分X、Y的摩尔吸光系数分别为(εX1,εY1)=(1000,300) L/(mol cm)，(εX2,εY2)=(200,800) L/(mol cm)。实测扣基线A1=0.1150、A2=0.09000；仅X、Y贡献，样本均匀无散射。联立Beer–Lambert两波数方程求X与Y浓度、各组分在两个波数的吸光度贡献、总浓度、X摩尔分率、浓度比、吸光度回代残差和系数矩阵行列式。说明选择谱带必须避免矩阵近奇异，否则实验误差会放大。

2. 建立量值反演方程：1000x+300y=0.1150，200x+800y=0.09000；行列式D=1000·800−300·200。

3. 明确空白校正、标准态与体积转换，以真实实验观测的条件未知量为基础建立线性或非线性反演。

4. 第一组定量结果：concentration_X_M = 0.000087837837837838 mol/L；concentration_Y_M = 0.000090540540540541 mol/L；X_absorbance_band1 = 0.087837837837838 AU；Y_absorbance_band1 = 0.027162162162162 AU。

5. 第二组定量结果：X_absorbance_band2 = 0.017567567567568 AU；Y_absorbance_band2 = 0.072432432432432 AU；total_concentration_M = 0.00017837837837838 mol/L。

6. 其余结果与反演回代：X_mole_fraction = 0.49242424242424 fraction；X_over_Y_ratio = 0.97014925373134 ratio；determinant = 740000.00000000 coefficient2。

7. 将最终浓度、吸光度或当量量返回原测量方程，检查两端相符及物料与电荷平衡。

8. 解释本题仪器校正假设的使用范围，不用理想数学条件代替真实基线噪声和基体效应。

9. 数值证据已由不同写法的独立计算函数逐项复核，不能将它理解为正式科研验证。

10. 尚需专家审校题目化学合理性、模型独立性和版权。

- concentration_X_M = 0.000087837837837838 mol/L
- concentration_Y_M = 0.000090540540540541 mol/L
- X_absorbance_band1 = 0.087837837837838 AU
- Y_absorbance_band1 = 0.027162162162162 AU
- X_absorbance_band2 = 0.017567567567568 AU
- Y_absorbance_band2 = 0.072432432432432 AU
- total_concentration_M = 0.00017837837837838 mol/L
- X_mole_fraction = 0.49242424242424 fraction
- X_over_Y_ratio = 0.97014925373134 ratio
- determinant = 740000.00000000 coefficient2

### UC-ADV14-A219 高效液相色谱Van Deemter最优流速与柱效折中

某高效液相色谱柱的理论塔板高度满足H(u)=A+B/u+C u，其中A=10.00 μm，B=40.00 μm·mm/s，C=5.000 μm/(mm/s)，流动相线速度u以mm/s计，柱长L=150.0 mm。求最优u*=√(B/C)、最小H、在u=1.000和5.000 mm/s时的H与塔板数N=L/H、最优塔板数、最优条件下保留时间以t0=L/u*估算的死时间，以及流速相对最优值的比值与H增加量。假定三项系数随速度不变，未给保留因子不可凭此预测具体分离度。

#### 模型与解析

1. 完整分析化学实验参数：某高效液相色谱柱的理论塔板高度满足H(u)=A+B/u+C u，其中A=10.00 μm，B=40.00 μm·mm/s，C=5.000 μm/(mm/s)，流动相线速度u以mm/s计，柱长L=150.0 mm。求最优u*=√(B/C)、最小H、在u=1.000和5.000 mm/s时的H与塔板数N=L/H、最优塔板数、最优条件下保留时间以t0=L/u*估算的死时间，以及流速相对最优值的比值与H增加量。假定三项系数随速度不变，未给保留因子不可凭此预测具体分离度。

2. 建立量值反演方程：H(u)=A+B/u+C u，u*=√(B/C)，N=L/H，u以mm/s而H转mm。

3. 明确空白校正、标准态与体积转换，以真实实验观测的条件未知量为基础建立线性或非线性反演。

4. 第一组定量结果：optimal_linear_velocity_mm_s = 2.8284271247462 mm/s；min_plate_height_um = 38.284271247462 um；H_at1_um = 55.000000000000 um；H_at5_um = 43.000000000000 um。

5. 第二组定量结果：plates_optimum = 3918.0581244561 plates；plates_at1 = 2727.2727272727 plates；plates_at5 = 3488.3720930233 plates。

6. 其余结果与反演回代：dead_time_at_optimum_s = 53.033008588991 s；velocity5_over_optimum = 1.7677669529664 ratio；H5_excess_um = 4.7157287525381 um。

7. 将最终浓度、吸光度或当量量返回原测量方程，检查两端相符及物料与电荷平衡。

8. 解释本题仪器校正假设的使用范围，不用理想数学条件代替真实基线噪声和基体效应。

9. 数值证据已由不同写法的独立计算函数逐项复核，不能将它理解为正式科研验证。

10. 尚需专家审校题目化学合理性、模型独立性和版权。

- optimal_linear_velocity_mm_s = 2.8284271247462 mm/s
- min_plate_height_um = 38.284271247462 um
- H_at1_um = 55.000000000000 um
- H_at5_um = 43.000000000000 um
- plates_optimum = 3918.0581244561 plates
- plates_at1 = 2727.2727272727 plates
- plates_at5 = 3488.3720930233 plates
- dead_time_at_optimum_s = 53.033008588991 s
- velocity5_over_optimum = 1.7677669529664 ratio
- H5_excess_um = 4.7157287525381 um

### UC-ADV14-A220 荧光Stern–Volmer淬灭常数与动力学猝灭速率反演

某理想单组分荧光探针无淬灭剂时寿命τ0=5.000 ns，强度F0=1000.0 a.u.，加入淬灭剂Q后符合F0/F=τ0/τ=1+KSV[Q]，其中KSV=20.00 L/mol。分别取[Q]=0.01000与0.05000 mol/L；假定全部是动态碰撞淬灭，没有静态复合物、内滤或再吸收。求两条件Stern–Volmer因子、荧光强度、寿命、淬灭效率E=1−F/F0、KSV反推的双分子淬灭速率kq=KSV/τ0（M⁻¹s⁻¹）及强度比。说明必须把ns转换为s。

#### 模型与解析

1. 完整分析化学实验参数：某理想单组分荧光探针无淬灭剂时寿命τ0=5.000 ns，强度F0=1000.0 a.u.，加入淬灭剂Q后符合F0/F=τ0/τ=1+KSV[Q]，其中KSV=20.00 L/mol。分别取[Q]=0.01000与0.05000 mol/L；假定全部是动态碰撞淬灭，没有静态复合物、内滤或再吸收。求两条件Stern–Volmer因子、荧光强度、寿命、淬灭效率E=1−F/F0、KSV反推的双分子淬灭速率kq=KSV/τ0（M⁻¹s⁻¹）及强度比。说明必须把ns转换为s。

2. 建立量值反演方程：F=F0/(1+KSVQ)，τ=τ0/(1+KSVQ)，kq=KSV/τ0。

3. 明确空白校正、标准态与体积转换，以真实实验观测的条件未知量为基础建立线性或非线性反演。

4. 第一组定量结果：SVfactor_low = 1.2000000000000 ratio；SVfactor_high = 2.0000000000000 ratio；fluorescence_low = 833.33333333333 AU；fluorescence_high = 500.00000000000 AU。

5. 第二组定量结果：lifetime_low_ns = 4.1666666666667 ns；lifetime_high_ns = 2.5000000000000 ns；quenching_efficiency_low = 0.16666666666667 fraction。

6. 其余结果与反演回代：quenching_efficiency_high = 0.50000000000000 fraction；bimolecular_rate_MInv_sInv = 4000000000.0000 M^-1s^-1；fluorescence_ratio_low_high = 1.6666666666667 ratio。

7. 将最终浓度、吸光度或当量量返回原测量方程，检查两端相符及物料与电荷平衡。

8. 解释本题仪器校正假设的使用范围，不用理想数学条件代替真实基线噪声和基体效应。

9. 数值证据已由不同写法的独立计算函数逐项复核，不能将它理解为正式科研验证。

10. 尚需专家审校题目化学合理性、模型独立性和版权。

- SVfactor_low = 1.2000000000000 ratio
- SVfactor_high = 2.0000000000000 ratio
- fluorescence_low = 833.33333333333 AU
- fluorescence_high = 500.00000000000 AU
- lifetime_low_ns = 4.1666666666667 ns
- lifetime_high_ns = 2.5000000000000 ns
- quenching_efficiency_low = 0.16666666666667 fraction
- quenching_efficiency_high = 0.50000000000000 fraction
- bimolecular_rate_MInv_sInv = 4000000000.0000 M^-1s^-1
- fluorescence_ratio_low_high = 1.6666666666667 ratio

### UC-ADV14-A221 电位滴定一价离子选择电极的两标准标定与未知样反演

298.15 K某理想单价离子X⁺选择电极满足E=E0+(RT/F)ln(aX)，E0=0.3000 V，活度系数已通过校正视为1。两个标准a1=0.001000和a2=0.01000；某未知样电势恰为Eunk=E0+(RT/F)ln(0.003000)，仪器假定无漂移。求标准电势读数、未知电势、由未知读数反推的活度、pX=−log10 a、Nernst十倍活度电势差、未知相对两标准的对数位置以及当X活度翻倍时电势升高量。F=96485.33212 C/mol；必须取自然对数。

#### 模型与解析

1. 完整分析化学实验参数：298.15 K某理想单价离子X⁺选择电极满足E=E0+(RT/F)ln(aX)，E0=0.3000 V，活度系数已通过校正视为1。两个标准a1=0.001000和a2=0.01000；某未知样电势恰为Eunk=E0+(RT/F)ln(0.003000)，仪器假定无漂移。求标准电势读数、未知电势、由未知读数反推的活度、pX=−log10 a、Nernst十倍活度电势差、未知相对两标准的对数位置以及当X活度翻倍时电势升高量。F=96485.33212 C/mol；必须取自然对数。

2. 建立量值反演方程：E=E0+RT/F·ln a，a=exp[(E−E0)F/RT]，pX=−log10a。

3. 明确空白校正、标准态与体积转换，以真实实验观测的条件未知量为基础建立线性或非线性反演。

4. 第一组定量结果：E_standard1_V = 0.12252195094284 V；E_standard2_V = 0.18168130062856 V；E_unknown_V = 0.15074813409329 V；inferred_activity = 0.0030000000000000 fraction。

5. 第二组定量结果：unknown_pX = 2.5228787452803 pX；potential_per_decade_V = 0.059159349685722 V；log_interpolation_fraction = 0.47712125471966 fraction。

6. 其余结果与反演回代：potential_if_activity_doubles_V = 0.16855687287266 V；doubling_potential_increment_V = 0.017808738779377 V；standard_difference_V = 0.059159349685722 V。

7. 将最终浓度、吸光度或当量量返回原测量方程，检查两端相符及物料与电荷平衡。

8. 解释本题仪器校正假设的使用范围，不用理想数学条件代替真实基线噪声和基体效应。

9. 数值证据已由不同写法的独立计算函数逐项复核，不能将它理解为正式科研验证。

10. 尚需专家审校题目化学合理性、模型独立性和版权。

- E_standard1_V = 0.12252195094284 V
- E_standard2_V = 0.18168130062856 V
- E_unknown_V = 0.15074813409329 V
- inferred_activity = 0.0030000000000000 fraction
- unknown_pX = 2.5228787452803 pX
- potential_per_decade_V = 0.059159349685722 V
- log_interpolation_fraction = 0.47712125471966 fraction
- potential_if_activity_doubles_V = 0.16855687287266 V
- doubling_potential_increment_V = 0.017808738779377 V
- standard_difference_V = 0.059159349685722 V

### UC-ADV14-A222 EDTA反滴定过量Zn²⁺的复杂计量与样本Ca²⁺含量

对20.00 mL水样中的Ca²⁺进行EDTA配位反滴定：加入25.00 mL、0.01000 mol/L EDTA，充分络合Ca²⁺后用0.008000 mol/L Zn²⁺标准液反滴定剩余EDTA，耗去10.00 mL Zn液。假设每个金属与EDTA为1:1配比，EDTA不与其它离子形成络合物，Zn²⁺只消耗剩余EDTA。求加入EDTA总mol、反滴定剩余mol、Ca²⁺mol、样品中Ca浓度(mol/L与mg/L, MCa=40.078 g/mol)、Ca占EDTA的分率、若错误忽略剩余EDTA会高估Ca多少mg/L、样品中Ca质量及回代EDTA当量守恒。

#### 模型与解析

1. 完整分析化学实验参数：对20.00 mL水样中的Ca²⁺进行EDTA配位反滴定：加入25.00 mL、0.01000 mol/L EDTA，充分络合Ca²⁺后用0.008000 mol/L Zn²⁺标准液反滴定剩余EDTA，耗去10.00 mL Zn液。假设每个金属与EDTA为1:1配比，EDTA不与其它离子形成络合物，Zn²⁺只消耗剩余EDTA。求加入EDTA总mol、反滴定剩余mol、Ca²⁺mol、样品中Ca浓度(mol/L与mg/L, MCa=40.078 g/mol)、Ca占EDTA的分率、若错误忽略剩余EDTA会高估Ca多少mg/L、样品中Ca质量及回代EDTA当量守恒。

2. 建立量值反演方程：nCa=nEDTA,added−nZn,back，cCa=nCa/Vsample，mg/L=cCa·40.078·1000。

3. 明确空白校正、标准态与体积转换，以真实实验观测的条件未知量为基础建立线性或非线性反演。

4. 第一组定量结果：EDTA_added_mol = 0.00025000000000000 mol；EDTA_excess_mol = 0.000080000000000000 mol；Ca_moles = 0.00017000000000000 mol；Ca_concentration_M = 0.0085000000000000 mol/L。

5. 第二组定量结果：Ca_mass_mg_L = 340.66300000000 mg/L；fraction_EDTA_bound_Ca = 0.68000000000000 fraction；naive_Ca_concentration_mg_L = 500.97500000000 mg/L。

6. 其余结果与反演回代：naive_overestimate_mg_L = 160.31200000000 mg/L；Ca_mass_in_sample_mg = 6.8132600000000 mg；EDTA_mole_balance = 0.00025000000000000 mol。

7. 将最终浓度、吸光度或当量量返回原测量方程，检查两端相符及物料与电荷平衡。

8. 解释本题仪器校正假设的使用范围，不用理想数学条件代替真实基线噪声和基体效应。

9. 数值证据已由不同写法的独立计算函数逐项复核，不能将它理解为正式科研验证。

10. 尚需专家审校题目化学合理性、模型独立性和版权。

- EDTA_added_mol = 0.00025000000000000 mol
- EDTA_excess_mol = 0.000080000000000000 mol
- Ca_moles = 0.00017000000000000 mol
- Ca_concentration_M = 0.0085000000000000 mol/L
- Ca_mass_mg_L = 340.66300000000 mg/L
- fraction_EDTA_bound_Ca = 0.68000000000000 fraction
- naive_Ca_concentration_mg_L = 500.97500000000 mg/L
- naive_overestimate_mg_L = 160.31200000000 mg/L
- Ca_mass_in_sample_mg = 6.8132600000000 mg
- EDTA_mole_balance = 0.00025000000000000 mol

### UC-ADV14-A223 溶液中13C核磁积分与天然丰度校正的摩尔分率

一种定量13C NMR方法中两化合物A和B分别有可积分的独立碳位数nC,A=2、nC,B=3。假定核自旋弛豫充分、响应按13C核数成正比，天然13C丰度都为f13=0.01100，测得归一化积分IA=2200.0、IB=3300.0。求两化合物的物质的量比nA/nB，混合物A/B摩尔分率、单位相对总物质量下13C标记核的期望数（单位为每个分子的13C核）、如果把原样总浓度0.1000 mol/L，求A/B浓度、总13C核浓度以及如果错误直接以积分比估算A分率会造成的偏差。强调数量比必须先除每分子有效碳位数。

#### 模型与解析

1. 完整分析化学实验参数：一种定量13C NMR方法中两化合物A和B分别有可积分的独立碳位数nC,A=2、nC,B=3。假定核自旋弛豫充分、响应按13C核数成正比，天然13C丰度都为f13=0.01100，测得归一化积分IA=2200.0、IB=3300.0。求两化合物的物质的量比nA/nB，混合物A/B摩尔分率、单位相对总物质量下13C标记核的期望数（单位为每个分子的13C核）、如果把原样总浓度0.1000 mol/L，求A/B浓度、总13C核浓度以及如果错误直接以积分比估算A分率会造成的偏差。强调数量比必须先除每分子有效碳位数。

2. 建立量值反演方程：nA/nB=(IA/nCA)/(IB/nCB)，xA=nA/(nA+nB)，C13=f13(nCA cA+nCB cB)。

3. 明确空白校正、标准态与体积转换，以真实实验观测的条件未知量为基础建立线性或非线性反演。

4. 第一组定量结果：molar_ratio_A_over_B = 1.0000000000000 ratio；A_mole_fraction = 0.50000000000000 fraction；B_mole_fraction = 0.50000000000000 fraction；mean_13C_per_molecule = 0.027500000000000 nuclei/molecule。

5. 第二组定量结果：concentration_A_M = 0.050000000000000 mol/L；concentration_B_M = 0.050000000000000 mol/L；total_13C_nuclei_M = 0.0027500000000000 mol/L。

6. 其余结果与反演回代：raw_integral_fraction_A = 0.40000000000000 fraction；raw_fraction_error = -0.10000000000000 fraction；response_per_carbon_ratio = 1.0000000000000 ratio。

7. 将最终浓度、吸光度或当量量返回原测量方程，检查两端相符及物料与电荷平衡。

8. 解释本题仪器校正假设的使用范围，不用理想数学条件代替真实基线噪声和基体效应。

9. 数值证据已由不同写法的独立计算函数逐项复核，不能将它理解为正式科研验证。

10. 尚需专家审校题目化学合理性、模型独立性和版权。

- molar_ratio_A_over_B = 1.0000000000000 ratio
- A_mole_fraction = 0.50000000000000 fraction
- B_mole_fraction = 0.50000000000000 fraction
- mean_13C_per_molecule = 0.027500000000000 nuclei/molecule
- concentration_A_M = 0.050000000000000 mol/L
- concentration_B_M = 0.050000000000000 mol/L
- total_13C_nuclei_M = 0.0027500000000000 mol/L
- raw_integral_fraction_A = 0.40000000000000 fraction
- raw_fraction_error = -0.10000000000000 fraction
- response_per_carbon_ratio = 1.0000000000000 ratio

### UC-ADV14-A224 电导率标定的电池常数、标准溶液与样品测量

某电导池两电极几何常数Kcell未知，25°C已知KCl标准溶液电导率κstd=0.01288 S/cm，测其电阻Rstd=120.0 Ω。电解质水样分别测得R1=300.0 Ω和R2=800.0 Ω，假定电导池电极极化、温度漂移可忽略。根据κ=Kcell/R求Kcell(cm⁻¹)、水样两次电导率(S/cm与mS/cm)、两个电阻之比及电导率比、若电极有效面积A=2.000 cm²时等效极距l=Kcell A、两次电导G=1/R与标准溶液电导Gstd。避免把电导S与电导率S/cm混淆。

#### 模型与解析

1. 完整分析化学实验参数：某电导池两电极几何常数Kcell未知，25°C已知KCl标准溶液电导率κstd=0.01288 S/cm，测其电阻Rstd=120.0 Ω。电解质水样分别测得R1=300.0 Ω和R2=800.0 Ω，假定电导池电极极化、温度漂移可忽略。根据κ=Kcell/R求Kcell(cm⁻¹)、水样两次电导率(S/cm与mS/cm)、两个电阻之比及电导率比、若电极有效面积A=2.000 cm²时等效极距l=Kcell A、两次电导G=1/R与标准溶液电导Gstd。避免把电导S与电导率S/cm混淆。

2. 建立量值反演方程：Kcell=κstd Rstd，κsample=Kcell/R，l=Kcell A，G=1/R。

3. 明确空白校正、标准态与体积转换，以真实实验观测的条件未知量为基础建立线性或非线性反演。

4. 第一组定量结果：cell_constant_cmInv = 1.5456000000000 cm^-1；conductivity_sample1_S_cm = 0.0051520000000000 S/cm；conductivity_sample2_S_cm = 0.0019320000000000 S/cm；conductivity_sample1_mS_cm = 5.1520000000000 mS/cm。

5. 第二组定量结果：conductivity_sample2_mS_cm = 1.9320000000000 mS/cm；resistance_ratio_R2_R1 = 2.6666666666667 ratio；conductivity_ratio_sample1_sample2 = 2.6666666666667 ratio。

6. 其余结果与反演回代：equivalent_electrode_spacing_cm = 3.0912000000000 cm；conductance_sample1_S = 0.0033333333333333 S；conductance_standard_S = 0.0083333333333333 S。

7. 将最终浓度、吸光度或当量量返回原测量方程，检查两端相符及物料与电荷平衡。

8. 解释本题仪器校正假设的使用范围，不用理想数学条件代替真实基线噪声和基体效应。

9. 数值证据已由不同写法的独立计算函数逐项复核，不能将它理解为正式科研验证。

10. 尚需专家审校题目化学合理性、模型独立性和版权。

- cell_constant_cmInv = 1.5456000000000 cm^-1
- conductivity_sample1_S_cm = 0.0051520000000000 S/cm
- conductivity_sample2_S_cm = 0.0019320000000000 S/cm
- conductivity_sample1_mS_cm = 5.1520000000000 mS/cm
- conductivity_sample2_mS_cm = 1.9320000000000 mS/cm
- resistance_ratio_R2_R1 = 2.6666666666667 ratio
- conductivity_ratio_sample1_sample2 = 2.6666666666667 ratio
- equivalent_electrode_spacing_cm = 3.0912000000000 cm
- conductance_sample1_S = 0.0033333333333333 S
- conductance_standard_S = 0.0083333333333333 S

<a id="batch-07"></a>

## 第十四辑有机化学十道 O211–O220 完整解析

### UC-ADV14-O211 取代基Hammett常数与芳基亲核加成反应速率的线性自由能关联

某芳香亲核加成反应满足Hammett关系log10(kX/kH)=ρσX，ρ=+2.000、未取代H的速度kH=0.01000 s⁻¹。假想取代基A有σA=+0.3000，B有σB=−0.2000。求A/B取代体的k、与kH比值、A/B速率比、在t=60.00 s按一级动力学两种反应物各自转化率、半衰期、A/B活化Gibbs自由能差ΔΔG‡=−RTln(kA/kB)（298.15 K，单位kJ/mol）以及两个取代基造成的log10速率变化量。假定ρ对两个取代基相同，且不推断微观机理必然相同。

#### 完整推导与答案

1. 完整底物、反应路径与假设：某芳香亲核加成反应满足Hammett关系log10(kX/kH)=ρσX，ρ=+2.000、未取代H的速度kH=0.01000 s⁻¹。假想取代基A有σA=+0.3000，B有σB=−0.2000。求A/B取代体的k、与kH比值、A/B速率比、在t=60.00 s按一级动力学两种反应物各自转化率、半衰期、A/B活化Gibbs自由能差ΔΔG‡=−RTln(kA/kB)（298.15 K，单位kJ/mol）以及两个取代基造成的log10速率变化量。假定ρ对两个取代基相同，且不推断微观机理必然相同。

2. 建立反应动力学、热力学或分布模型：kX=kH×10^(ρσX)，X(t)=1−exp(−kXt)，ΔΔG‡=−RTln(kA/kB)。

3. 从原始反应计量或速率常数导出未知量的代数关系，所有浓度、时间、活化能等数值采用题设单位。

4. 计算第一组关键量：rate_A_sInv = 0.039810717055350 s^-1；rate_B_sInv = 0.0039810717055350 s^-1；rate_ratio_A_H = 3.9810717055350 ratio；rate_ratio_B_H = 0.39810717055350 ratio。

5. 计算产物、选择性或平均分子量：rate_ratio_A_B = 10.000000000000 ratio；conversion_A_t60 = 0.90824589237740 fraction；conversion_B_t60 = 0.21247826001410 fraction。

6. 完整结果与交叉量：half_life_A_s = 17.411069978876 s；half_life_B_s = 174.11069978876 s；activation_free_energy_A_minus_B_kJmol = -5.7080095024301 kJ/mol。

7. 核查底物骨架的反应物+产物库存、概率分率归一、活化自由能与速率比之间的一致性。

8. 区分反应限速步与产物分支控制步，并说明实验中不受题设约束的副反应或溶剂化会影响选择性。

9. 利用独立实现的第二组数值见证验证每个答案字段；同时指出其不能替代跨辑同构检查。

10. 化学合理性、原创性与可出版状态仍须专家逐题审核。

- rate_A_sInv = 0.039810717055350 s^-1
- rate_B_sInv = 0.0039810717055350 s^-1
- rate_ratio_A_H = 3.9810717055350 ratio
- rate_ratio_B_H = 0.39810717055350 ratio
- rate_ratio_A_B = 10.000000000000 ratio
- conversion_A_t60 = 0.90824589237740 fraction
- conversion_B_t60 = 0.21247826001410 fraction
- half_life_A_s = 17.411069978876 s
- half_life_B_s = 174.11069978876 s
- activation_free_energy_A_minus_B_kJmol = -5.7080095024301 kJ/mol

### UC-ADV14-O212 水解逆过程–酯化的等初始浓度可逆二级平衡

理想溶液中有机酸A与醇B发生可逆酯化A+B⇌E+H₂O，假设活度等于各自以1 mol/L标准态归一的浓度，平衡常数K=4.000。初态[A]=[B]=0.1000 M、[E]=[H₂O]=0，溶剂为惰性无水非水溶剂，水仅来自反应，不考虑其它反应。令反应进度x M，平衡[A]=[B]=0.1−x，[E]=[H₂O]=x。求x、四物种平衡浓度、A转化率、酯/未反应A摩尔比、反应商回代及如果通过外部除水把游离[H₂O]保持在0.01000 M，且仍允许酸醇库存各0.1−x的新的数学平衡x（注意除水为开放系统）。

#### 完整推导与答案

1. 完整底物、反应路径与假设：理想溶液中有机酸A与醇B发生可逆酯化A+B⇌E+H₂O，假设活度等于各自以1 mol/L标准态归一的浓度，平衡常数K=4.000。初态[A]=[B]=0.1000 M、[E]=[H₂O]=0，溶剂为惰性无水非水溶剂，水仅来自反应，不考虑其它反应。令反应进度x M，平衡[A]=[B]=0.1−x，[E]=[H₂O]=x。求x、四物种平衡浓度、A转化率、酯/未反应A摩尔比、反应商回代及如果通过外部除水把游离[H₂O]保持在0.01000 M，且仍允许酸醇库存各0.1−x的新的数学平衡x（注意除水为开放系统）。

2. 建立反应动力学、热力学或分布模型：K=x²/(C−x)² => x=C√K/(1+√K)；除水时K=x·w/(C−x)²，取0<x<C正根。

3. 从原始反应计量或速率常数导出未知量的代数关系，所有浓度、时间、活化能等数值采用题设单位。

4. 计算第一组关键量：closed_extent_M = 0.066666666666667 mol/L；closed_acid_M = 0.033333333333333 mol/L；closed_alcohol_M = 0.033333333333333 mol/L；closed_ester_M = 0.066666666666667 mol/L。

5. 计算产物、选择性或平均分子量：closed_water_M = 0.066666666666667 mol/L；acid_conversion = 0.66666666666667 fraction；ester_over_acid = 2.0000000000000 ratio。

6. 完整结果与交叉量：equilibrium_quotient = 4.0000000000000 ratio；open_water_fixed_extent_M = 0.085389278074438 mol/L；open_water_fixed_conversion = 0.85389278074438 fraction。

7. 核查底物骨架的反应物+产物库存、概率分率归一、活化自由能与速率比之间的一致性。

8. 区分反应限速步与产物分支控制步，并说明实验中不受题设约束的副反应或溶剂化会影响选择性。

9. 利用独立实现的第二组数值见证验证每个答案字段；同时指出其不能替代跨辑同构检查。

10. 化学合理性、原创性与可出版状态仍须专家逐题审核。

- closed_extent_M = 0.066666666666667 mol/L
- closed_acid_M = 0.033333333333333 mol/L
- closed_alcohol_M = 0.033333333333333 mol/L
- closed_ester_M = 0.066666666666667 mol/L
- closed_water_M = 0.066666666666667 mol/L
- acid_conversion = 0.66666666666667 fraction
- ester_over_acid = 2.0000000000000 ratio
- equilibrium_quotient = 4.0000000000000 ratio
- open_water_fixed_extent_M = 0.085389278074438 mol/L
- open_water_fixed_conversion = 0.85389278074438 fraction

### UC-ADV14-O213 SN1离子对中溶剂捕获与亲核捕获的双通道选择性

某叔烷基卤化物R–X以一级电离速率ki=0.02000 s⁻¹生成中间体碳正离子R⁺；假设电离为总反应限速且中间体瞬时被并行捕获：水捕获速率kw=2.000×10⁵ s⁻¹，外部亲核体Nu的自由浓度恒0.05000 M，捕获二级常数kNu=1.000×10⁷ M⁻¹s⁻¹。离子对不发生复合逆反应、重排或消除，初始R–X浓度0.01000 M，t=30.00 s。求碳正离子捕获分支、总底物转化、两产物浓度、剩余底物、捕获平均寿命、Nu通道产物比水产物及Nu浓度减半时Nu分支。说明产物比例由中间体捕获控制而总底物消耗由电离控制。

#### 完整推导与答案

1. 完整底物、反应路径与假设：某叔烷基卤化物R–X以一级电离速率ki=0.02000 s⁻¹生成中间体碳正离子R⁺；假设电离为总反应限速且中间体瞬时被并行捕获：水捕获速率kw=2.000×10⁵ s⁻¹，外部亲核体Nu的自由浓度恒0.05000 M，捕获二级常数kNu=1.000×10⁷ M⁻¹s⁻¹。离子对不发生复合逆反应、重排或消除，初始R–X浓度0.01000 M，t=30.00 s。求碳正离子捕获分支、总底物转化、两产物浓度、剩余底物、捕获平均寿命、Nu通道产物比水产物及Nu浓度减半时Nu分支。说明产物比例由中间体捕获控制而总底物消耗由电离控制。

2. 建立反应动力学、热力学或分布模型：fNu=kNu[Nu]/(kw+kNu[Nu])，Pj=C0(1−exp(−ki t))fj，τtrap=1/(kw+kNu[Nu])。

3. 从原始反应计量或速率常数导出未知量的代数关系，所有浓度、时间、活化能等数值采用题设单位。

4. 计算第一组关键量：capture_Nu_rate = 500000.00000000 s^-1；capture_total_rate = 700000.00000000 s^-1；Nu_branch = 0.71428571428571 fraction；water_branch = 0.28571428571429 fraction。

5. 计算产物、选择性或平均分子量：substrate_conversion_t30 = 0.45118836390597 fraction；Nu_product_M = 0.0032227740278998 mol/L；water_product_M = 0.0012891096111599 mol/L；remaining_substrate_M = 0.0054881163609403 mol/L。

6. 完整结果与交叉量：capture_lifetime_s = 0.0000014285714285714 s；Nu_water_product_ratio = 2.5000000000000 ratio；Nu_branch_at_half_concentration = 0.55555555555556 fraction。

7. 核查底物骨架的反应物+产物库存、概率分率归一、活化自由能与速率比之间的一致性。

8. 区分反应限速步与产物分支控制步，并说明实验中不受题设约束的副反应或溶剂化会影响选择性。

9. 利用独立实现的第二组数值见证验证每个答案字段；同时指出其不能替代跨辑同构检查。

10. 化学合理性、原创性与可出版状态仍须专家逐题审核。

- capture_Nu_rate = 500000.00000000 s^-1
- capture_total_rate = 700000.00000000 s^-1
- Nu_branch = 0.71428571428571 fraction
- water_branch = 0.28571428571429 fraction
- substrate_conversion_t30 = 0.45118836390597 fraction
- Nu_product_M = 0.0032227740278998 mol/L
- water_product_M = 0.0012891096111599 mol/L
- remaining_substrate_M = 0.0054881163609403 mol/L
- capture_lifetime_s = 0.0000014285714285714 s
- Nu_water_product_ratio = 2.5000000000000 ratio
- Nu_branch_at_half_concentration = 0.55555555555556 fraction

### UC-ADV14-O214 有机酸酐水解两条并行催化路径的pH速率剖面

假想有机酸酐A水解的拟一级总速度kobs=kH[H⁺]+kOH[OH⁻]+k0，速率参数kH=10.00 L/(mol s)、kOH=1.000×10⁵ L/(mol s)、k0=0.002000 s⁻¹，T=298.15 K水自电离Kw=10⁻¹⁴，溶液pH由缓冲池恒定。取pH=4.000和9.000，初始A=0.01000 M，t=100.0 s。求两pH下酸催化、碱催化和非催化项的单项速率、总速度、转化率、残余A、速率比与pH最小速率点pH*由kH[H⁺]=kOH[OH⁻]得出。忽略溶剂组成变化与A水解导致的pH漂移。

#### 完整推导与答案

1. 完整底物、反应路径与假设：假想有机酸酐A水解的拟一级总速度kobs=kH[H⁺]+kOH[OH⁻]+k0，速率参数kH=10.00 L/(mol s)、kOH=1.000×10⁵ L/(mol s)、k0=0.002000 s⁻¹，T=298.15 K水自电离Kw=10⁻¹⁴，溶液pH由缓冲池恒定。取pH=4.000和9.000，初始A=0.01000 M，t=100.0 s。求两pH下酸催化、碱催化和非催化项的单项速率、总速度、转化率、残余A、速率比与pH最小速率点pH*由kH[H⁺]=kOH[OH⁻]得出。忽略溶剂组成变化与A水解导致的pH漂移。

2. 建立反应动力学、热力学或分布模型：kobs=kH 10^(−pH)+kOH 10^(pH−14)+k0，最小位置pH*=[14+log10(kH/kOH)]/2。

3. 从原始反应计量或速率常数导出未知量的代数关系，所有浓度、时间、活化能等数值采用题设单位。

4. 计算第一组关键量：acid_term_pH4 = 0.0010000000000000 s^-1；base_term_pH4 = 0.000010000000000000 s^-1；total_rate_pH4 = 0.0030100000000000 s^-1；acid_term_pH9 = 1.0000000000000e-8 s^-1。

5. 计算产物、选择性或平均分子量：base_term_pH9 = 1.0000000000000 s^-1；total_rate_pH9 = 1.0020000100000 s^-1；conversion_pH4_t100 = 0.25992222725329 fraction；conversion_pH9_t100 = 1.0000000000000 fraction。

6. 完整结果与交叉量：remaining_A_pH4_M = 0.0074007777274671 mol/L；remaining_A_pH9_M = 3.0457375596158e-46 mol/L；minimum_rate_pH = 5.0000000000000 pH。

7. 核查底物骨架的反应物+产物库存、概率分率归一、活化自由能与速率比之间的一致性。

8. 区分反应限速步与产物分支控制步，并说明实验中不受题设约束的副反应或溶剂化会影响选择性。

9. 利用独立实现的第二组数值见证验证每个答案字段；同时指出其不能替代跨辑同构检查。

10. 化学合理性、原创性与可出版状态仍须专家逐题审核。

- acid_term_pH4 = 0.0010000000000000 s^-1
- base_term_pH4 = 0.000010000000000000 s^-1
- total_rate_pH4 = 0.0030100000000000 s^-1
- acid_term_pH9 = 1.0000000000000e-8 s^-1
- base_term_pH9 = 1.0000000000000 s^-1
- total_rate_pH9 = 1.0020000100000 s^-1
- conversion_pH4_t100 = 0.25992222725329 fraction
- conversion_pH9_t100 = 1.0000000000000 fraction
- remaining_A_pH4_M = 0.0074007777274671 mol/L
- remaining_A_pH9_M = 3.0457375596158e-46 mol/L
- minimum_rate_pH = 5.0000000000000 pH

### UC-ADV14-O215 抗氧剂抑制自由基自氧化的诱导期与有效链增长

某有机烯烃自氧化引发自由基生成速率Ri=1.000×10⁻⁸ mol/(L s)，抑制剂IH初始浓度0.001000 mol/L，每个IH分子能高效捕获n=2个自由基直到耗尽，抑制期间所有自由基均被捕获且不引发链增长。耗尽之后在t=20000 s总观察窗口内链反应以恒定产品生成速率Rp=3.000×10⁻⁷ mol/(L s)进行，并且产品不分解。求抑制剂自由基捕获容量、理想诱导期、窗口内剩余有效产物生成时间、生成产物浓度、如果没有抑制剂在同一窗口的产物浓度、抑制导致的产物减少比例、抑制剂在t=10000 s的余量以及半量消耗时间。指明该简化分段动力学仅是极限模型。

#### 完整推导与答案

1. 完整底物、反应路径与假设：某有机烯烃自氧化引发自由基生成速率Ri=1.000×10⁻⁸ mol/(L s)，抑制剂IH初始浓度0.001000 mol/L，每个IH分子能高效捕获n=2个自由基直到耗尽，抑制期间所有自由基均被捕获且不引发链增长。耗尽之后在t=20000 s总观察窗口内链反应以恒定产品生成速率Rp=3.000×10⁻⁷ mol/(L s)进行，并且产品不分解。求抑制剂自由基捕获容量、理想诱导期、窗口内剩余有效产物生成时间、生成产物浓度、如果没有抑制剂在同一窗口的产物浓度、抑制导致的产物减少比例、抑制剂在t=10000 s的余量以及半量消耗时间。指明该简化分段动力学仅是极限模型。

2. 建立反应动力学、热力学或分布模型：诱导期tind=n[IH]0/Ri；t>tind时P=Rp(t−tind)，捕获量Ri t，剩余IH=max(0,IH0−Ri t/n)。

3. 从原始反应计量或速率常数导出未知量的代数关系，所有浓度、时间、活化能等数值采用题设单位。

4. 计算第一组关键量：radical_capacity_M = 0.0020000000000000 mol/L；induction_time_s = 200000.00000000 s；post_induction_time_s = 0.0000000000000 s；product_with_inhibitor_M = 0.0000000000000 mol/L。

5. 计算产物、选择性或平均分子量：product_without_inhibitor_M = 0.0060000000000000 mol/L；suppression_fraction = 1.0000000000000 fraction；inhibitor_remaining_t10000_M = 0.00095000000000000 mol/L。

6. 完整结果与交叉量：inhibitor_half_consumption_time_s = 100000.00000000 s；fraction_window_inhibited = 1.0000000000000 fraction；product_ratio_with_without = 0.0000000000000 ratio。

7. 核查底物骨架的反应物+产物库存、概率分率归一、活化自由能与速率比之间的一致性。

8. 区分反应限速步与产物分支控制步，并说明实验中不受题设约束的副反应或溶剂化会影响选择性。

9. 利用独立实现的第二组数值见证验证每个答案字段；同时指出其不能替代跨辑同构检查。

10. 化学合理性、原创性与可出版状态仍须专家逐题审核。

- radical_capacity_M = 0.0020000000000000 mol/L
- induction_time_s = 200000.00000000 s
- post_induction_time_s = 0.0000000000000 s
- product_with_inhibitor_M = 0.0000000000000 mol/L
- product_without_inhibitor_M = 0.0060000000000000 mol/L
- suppression_fraction = 1.0000000000000 fraction
- inhibitor_remaining_t10000_M = 0.00095000000000000 mol/L
- inhibitor_half_consumption_time_s = 100000.00000000 s
- fraction_window_inhibited = 1.0000000000000 fraction
- product_ratio_with_without = 0.0000000000000 ratio

### UC-ADV14-O216 烯烃Z/E产物的光稳态–热稳态耦合化学分流

某有机烯烃光异构体E与Z在单色光下受光化学一级互变：kE→Z,photo=0.02000 s⁻¹、kZ→E,photo=0.005000 s⁻¹；另外恒温热互变速度分别0.002000和0.008000 s⁻¹。总初始E=0.01000 M，Z=0，在光照t=100.0 s。求光照条件下正逆总速度、Z稳态分率与Z/E稳态比、达到平衡的松弛时间、t=100 s时Z与E浓度、关灯后纯热稳态Z分率、相对于光照稳态的变化量及光照稳态总浓度守恒。假设无光漂白、局部升温和后续反应。

#### 完整推导与答案

1. 完整底物、反应路径与假设：某有机烯烃光异构体E与Z在单色光下受光化学一级互变：kE→Z,photo=0.02000 s⁻¹、kZ→E,photo=0.005000 s⁻¹；另外恒温热互变速度分别0.002000和0.008000 s⁻¹。总初始E=0.01000 M，Z=0，在光照t=100.0 s。求光照条件下正逆总速度、Z稳态分率与Z/E稳态比、达到平衡的松弛时间、t=100 s时Z与E浓度、关灯后纯热稳态Z分率、相对于光照稳态的变化量及光照稳态总浓度守恒。假设无光漂白、局部升温和后续反应。

2. 建立反应动力学、热力学或分布模型：ka=.02+.002，kb=.005+.008，Zss=ka/(ka+kb)，Z(t)=C0 Zss[1−exp(−(ka+kb)t)]。

3. 从原始反应计量或速率常数导出未知量的代数关系，所有浓度、时间、活化能等数值采用题设单位。

4. 计算第一组关键量：total_forward_rate = 0.022000000000000 s^-1；total_reverse_rate = 0.013000000000000 s^-1；Z_fraction_light_ss = 0.62857142857143 fraction；Z_over_E_light_ss = 1.6923076923077 ratio。

5. 计算产物、选择性或平均分子量：relaxation_time_s = 28.571428571429 s；Z_t100_M = 0.0060959021613454 mol/L；E_t100_M = 0.0039040978386546 mol/L。

6. 完整结果与交叉量：Z_fraction_dark_ss = 0.20000000000000 fraction；Z_fraction_light_minus_dark = 0.42857142857143 fraction；mass_balance_M = 0.010000000000000 mol/L。

7. 核查底物骨架的反应物+产物库存、概率分率归一、活化自由能与速率比之间的一致性。

8. 区分反应限速步与产物分支控制步，并说明实验中不受题设约束的副反应或溶剂化会影响选择性。

9. 利用独立实现的第二组数值见证验证每个答案字段；同时指出其不能替代跨辑同构检查。

10. 化学合理性、原创性与可出版状态仍须专家逐题审核。

- total_forward_rate = 0.022000000000000 s^-1
- total_reverse_rate = 0.013000000000000 s^-1
- Z_fraction_light_ss = 0.62857142857143 fraction
- Z_over_E_light_ss = 1.6923076923077 ratio
- relaxation_time_s = 28.571428571429 s
- Z_t100_M = 0.0060959021613454 mol/L
- E_t100_M = 0.0039040978386546 mol/L
- Z_fraction_dark_ss = 0.20000000000000 fraction
- Z_fraction_light_minus_dark = 0.42857142857143 fraction
- mass_balance_M = 0.010000000000000 mol/L

### UC-ADV14-O217 聚合单体链生长与链终止的PDI分布矩计算

某理想聚合反应所生成链长n≥1服从几何分布P(n)=(1−p)p^(n−1)，传播继续概率p=0.8000。每个重复单元摩尔质量100.0 g/mol，忽略端基质量。求数均链长Xn=1/(1−p)、重均链长Xw=(1+p)/(1−p)、分散系数Đ=Xw/Xn、数均/重均摩尔质量Mn、Mw、链长至少10的数分率P(n≥10)=p⁹、对应质量分率W(n≥10)=Σn≥10 nP(n)/ΣnP(n)、平均方差和链长n=1、2的数分率。注意数字分布与质量分布不同。

#### 完整推导与答案

1. 完整底物、反应路径与假设：某理想聚合反应所生成链长n≥1服从几何分布P(n)=(1−p)p^(n−1)，传播继续概率p=0.8000。每个重复单元摩尔质量100.0 g/mol，忽略端基质量。求数均链长Xn=1/(1−p)、重均链长Xw=(1+p)/(1−p)、分散系数Đ=Xw/Xn、数均/重均摩尔质量Mn、Mw、链长至少10的数分率P(n≥10)=p⁹、对应质量分率W(n≥10)=Σn≥10 nP(n)/ΣnP(n)、平均方差和链长n=1、2的数分率。注意数字分布与质量分布不同。

2. 建立反应动力学、热力学或分布模型：E[n]=1/(1−p)，E[n²]=(1+p)/(1−p)²，Xw=E[n²]/E[n]，W(n≥N)=p^(N−1)[N−(N−1)p]。

3. 从原始反应计量或速率常数导出未知量的代数关系，所有浓度、时间、活化能等数值采用题设单位。

4. 计算第一组关键量：number_average_DP = 5.0000000000000 units；weight_average_DP = 9.0000000000000 units；dispersity = 1.8000000000000 ratio；Mn_gmol = 500.00000000000 g/mol。

5. 计算产物、选择性或平均分子量：Mw_gmol = 900.00000000000 g/mol；number_fraction_n_ge10 = 0.13421772800000 fraction；mass_fraction_n_ge10 = 0.37580963840000 fraction。

6. 完整结果与交叉量：variance_chain_length = 20.000000000000 units2；number_fraction_n1 = 0.20000000000000 fraction；number_fraction_n2 = 0.16000000000000 fraction。

7. 核查底物骨架的反应物+产物库存、概率分率归一、活化自由能与速率比之间的一致性。

8. 区分反应限速步与产物分支控制步，并说明实验中不受题设约束的副反应或溶剂化会影响选择性。

9. 利用独立实现的第二组数值见证验证每个答案字段；同时指出其不能替代跨辑同构检查。

10. 化学合理性、原创性与可出版状态仍须专家逐题审核。

- number_average_DP = 5.0000000000000 units
- weight_average_DP = 9.0000000000000 units
- dispersity = 1.8000000000000 ratio
- Mn_gmol = 500.00000000000 g/mol
- Mw_gmol = 900.00000000000 g/mol
- number_fraction_n_ge10 = 0.13421772800000 fraction
- mass_fraction_n_ge10 = 0.37580963840000 fraction
- variance_chain_length = 20.000000000000 units2
- number_fraction_n1 = 0.20000000000000 fraction
- number_fraction_n2 = 0.16000000000000 fraction

### UC-ADV14-O218 有机热裂解反应的Eyring ΔH‡、ΔS‡与反应速率

某有机分子单分子热裂解在T1=300.0与T2=350.0 K遵循过渡态理论k=(kBT/h)exp(ΔS‡/R)exp(−ΔH‡/(RT))，给定ΔH‡=80.00 kJ/mol、ΔS‡=−50.00 J/(mol K)，kB=1.380649×10⁻²³ J/K、h=6.62607015×10⁻³⁴ J·s、R=8.314462618 J/(mol K)。求两温度的活化自由能ΔG‡、速率常数、半衰期、速率比、Eyring绘图斜率dln(k/T)/d(1/T)=−ΔH‡/R以及两温度TST前因子之比。不能把ΔH‡误当Arrhenius活化能Ea，后者约等于ΔH‡+RT。

#### 完整推导与答案

1. 完整底物、反应路径与假设：某有机分子单分子热裂解在T1=300.0与T2=350.0 K遵循过渡态理论k=(kBT/h)exp(ΔS‡/R)exp(−ΔH‡/(RT))，给定ΔH‡=80.00 kJ/mol、ΔS‡=−50.00 J/(mol K)，kB=1.380649×10⁻²³ J/K、h=6.62607015×10⁻³⁴ J·s、R=8.314462618 J/(mol K)。求两温度的活化自由能ΔG‡、速率常数、半衰期、速率比、Eyring绘图斜率dln(k/T)/d(1/T)=−ΔH‡/R以及两温度TST前因子之比。不能把ΔH‡误当Arrhenius活化能Ea，后者约等于ΔH‡+RT。

2. 建立反应动力学、热力学或分布模型：ΔG‡=ΔH‡−TΔS‡，k=(kBT/h)exp(−ΔG‡/(RT))。

3. 从原始反应计量或速率常数导出未知量的代数关系，所有浓度、时间、活化能等数值采用题设单位。

4. 计算第一组关键量：activation_G_300_kJmol = 95.000000000000 kJ/mol；activation_G_350_kJmol = 97.500000000000 kJ/mol；rate_300_sInv = 0.00018001228145944 s^-1；rate_350_sInv = 0.020516398258878 s^-1。

5. 计算产物、选择性或平均分子量：half_life_300_s = 3850.5549451421 s；half_life_350_s = 33.785032431801 s；rate_ratio_350_300 = 113.97221396531 ratio。

6. 完整结果与交叉量：Eyring_slope_K = -9621.7884035954 K；prefactor_350_over_300 = 1.1666666666667 ratio；activation_entropy_JmolK = -50.000000000000 J/(molK)。

7. 核查底物骨架的反应物+产物库存、概率分率归一、活化自由能与速率比之间的一致性。

8. 区分反应限速步与产物分支控制步，并说明实验中不受题设约束的副反应或溶剂化会影响选择性。

9. 利用独立实现的第二组数值见证验证每个答案字段；同时指出其不能替代跨辑同构检查。

10. 化学合理性、原创性与可出版状态仍须专家逐题审核。

- activation_G_300_kJmol = 95.000000000000 kJ/mol
- activation_G_350_kJmol = 97.500000000000 kJ/mol
- rate_300_sInv = 0.00018001228145944 s^-1
- rate_350_sInv = 0.020516398258878 s^-1
- half_life_300_s = 3850.5549451421 s
- half_life_350_s = 33.785032431801 s
- rate_ratio_350_300 = 113.97221396531 ratio
- Eyring_slope_K = -9621.7884035954 K
- prefactor_350_over_300 = 1.1666666666667 ratio
- activation_entropy_JmolK = -50.000000000000 J/(molK)

### UC-ADV14-O219 二级有机胺还原胺化反应的底物消耗和有效初速

在某理想还原胺化模型中，醛A与自由二级胺B反应形成中间体并被瞬时不可逆还原；整体初速可由r=k2[A][B]表达，k2=0.8000 L/(mol s)。外部储液池维持[B]=0.02000 M恒定，A初始0.01000 M。比较t=30.00与100.0 s时A残余量与还原胺产物浓度、转化率、拟一级速率kobs、半衰期、初始和t=100瞬时速度及产物在t=100的摩尔比，忽略胺耗尽及副缩醛、烯胺生成。

#### 完整推导与答案

1. 完整底物、反应路径与假设：在某理想还原胺化模型中，醛A与自由二级胺B反应形成中间体并被瞬时不可逆还原；整体初速可由r=k2[A][B]表达，k2=0.8000 L/(mol s)。外部储液池维持[B]=0.02000 M恒定，A初始0.01000 M。比较t=30.00与100.0 s时A残余量与还原胺产物浓度、转化率、拟一级速率kobs、半衰期、初始和t=100瞬时速度及产物在t=100的摩尔比，忽略胺耗尽及副缩醛、烯胺生成。

2. 建立反应动力学、热力学或分布模型：kobs=k2[B]，A(t)=A0 exp(−kobst)，P=A0−A，r(t)=kobs A(t)。

3. 从原始反应计量或速率常数导出未知量的代数关系，所有浓度、时间、活化能等数值采用题设单位。

4. 计算第一组关键量：pseudo_first_order_rate = 0.016000000000000 s^-1；half_life_s = 43.321698784997 s；remaining_A_30_M = 0.0061878339180614 mol/L；remaining_A_100_M = 0.0020189651799466 mol/L。

5. 计算产物、选择性或平均分子量：product_30_M = 0.0038121660819386 mol/L；product_100_M = 0.0079810348200534 mol/L；conversion_30 = 0.38121660819386 fraction。

6. 完整结果与交叉量：conversion_100 = 0.79810348200534 fraction；initial_rate_M_s = 0.00016000000000000 mol/(Ls)；rate_t100_M_s = 0.000032303442879145 mol/(Ls)。

7. 核查底物骨架的反应物+产物库存、概率分率归一、活化自由能与速率比之间的一致性。

8. 区分反应限速步与产物分支控制步，并说明实验中不受题设约束的副反应或溶剂化会影响选择性。

9. 利用独立实现的第二组数值见证验证每个答案字段；同时指出其不能替代跨辑同构检查。

10. 化学合理性、原创性与可出版状态仍须专家逐题审核。

- pseudo_first_order_rate = 0.016000000000000 s^-1
- half_life_s = 43.321698784997 s
- remaining_A_30_M = 0.0061878339180614 mol/L
- remaining_A_100_M = 0.0020189651799466 mol/L
- product_30_M = 0.0038121660819386 mol/L
- product_100_M = 0.0079810348200534 mol/L
- conversion_30 = 0.38121660819386 fraction
- conversion_100 = 0.79810348200534 fraction
- initial_rate_M_s = 0.00016000000000000 mol/(Ls)
- rate_t100_M_s = 0.000032303442879145 mol/(Ls)

### UC-ADV14-O220 底物构象快速平衡下分子内环化选择性和活性分率

有机底物在快速构象平衡下具有反应活性构象A和不活性构象B，[B]/[A]=K=3.000。只有A以一级速度kc=0.1000 s⁻¹环化生成产物P，构象交换远快于化学反应、产物不可逆。初始所有未反应底物总浓度C0=0.02000 M，t=20.00和60.00 s；求A、B构象平衡分率、观察一级速率kobs、两时刻总底物残余浓度与P产物浓度、20 s转化分率、半衰期以及构象转换使环化变慢的倍数。严格区分快速构象平衡下kobs与仅活性构象内的kc。

#### 完整推导与答案

1. 完整底物、反应路径与假设：有机底物在快速构象平衡下具有反应活性构象A和不活性构象B，[B]/[A]=K=3.000。只有A以一级速度kc=0.1000 s⁻¹环化生成产物P，构象交换远快于化学反应、产物不可逆。初始所有未反应底物总浓度C0=0.02000 M，t=20.00和60.00 s；求A、B构象平衡分率、观察一级速率kobs、两时刻总底物残余浓度与P产物浓度、20 s转化分率、半衰期以及构象转换使环化变慢的倍数。严格区分快速构象平衡下kobs与仅活性构象内的kc。

2. 建立反应动力学、热力学或分布模型：fA=1/(1+K)，kobs=fAkc，C(t)=C0e^(−kobst)，P(t)=C0−C(t)。

3. 从原始反应计量或速率常数导出未知量的代数关系，所有浓度、时间、活化能等数值采用题设单位。

4. 计算第一组关键量：active_conformer_fraction = 0.25000000000000 fraction；inactive_conformer_fraction = 0.75000000000000 fraction；observed_rate = 0.025000000000000 s^-1；remaining_20_M = 0.012130613194253 mol/L。

5. 计算产物、选择性或平均分子量：remaining_60_M = 0.0044626032029686 mol/L；product_20_M = 0.0078693868057473 mol/L；product_60_M = 0.015537396797031 mol/L。

6. 完整结果与交叉量：conversion_20 = 0.39346934028737 fraction；half_life_s = 27.725887222398 s；rate_slowdown_factor = 4.0000000000000 ratio。

7. 核查底物骨架的反应物+产物库存、概率分率归一、活化自由能与速率比之间的一致性。

8. 区分反应限速步与产物分支控制步，并说明实验中不受题设约束的副反应或溶剂化会影响选择性。

9. 利用独立实现的第二组数值见证验证每个答案字段；同时指出其不能替代跨辑同构检查。

10. 化学合理性、原创性与可出版状态仍须专家逐题审核。

- active_conformer_fraction = 0.25000000000000 fraction
- inactive_conformer_fraction = 0.75000000000000 fraction
- observed_rate = 0.025000000000000 s^-1
- remaining_20_M = 0.012130613194253 mol/L
- remaining_60_M = 0.0044626032029686 mol/L
- product_20_M = 0.0078693868057473 mol/L
- product_60_M = 0.015537396797031 mol/L
- conversion_20 = 0.39346934028737 fraction
- half_life_s = 27.725887222398 s
- rate_slowdown_factor = 4.0000000000000 ratio

<a id="batch-08"></a>

## 第十四辑手动续编物理化学十题 P211–P220

### UC-ADV14-P211 理想气相二元等温混合的Gibbs自由能与混合熵

在298.15 K、总压1.000 bar条件下，纯理想气体A与B分别有2.000、3.000 mol，两组气体由隔板移除而等温等压地充分混合。忽略化学反应和非理想性。求两个摩尔分率与终态分压、总混合熵ΔSmix=−RΣni lnxi、混合Gibbs自由能ΔGmix=RTΣni lnxi、混合焓、ΔG/ΔS、每mol混合气体的熵增与自由能变。给出理想混合ΔG<0和ΔH=0的理由，并验证ΔG=−TΔS。

#### 完整计算过程

1. 完整物理化学系统及约束：在298.15 K、总压1.000 bar条件下，纯理想气体A与B分别有2.000、3.000 mol，两组气体由隔板移除而等温等压地充分混合。忽略化学反应和非理想性。求两个摩尔分率与终态分压、总混合熵ΔSmix=−RΣni lnxi、混合Gibbs自由能ΔGmix=RTΣni lnxi、混合焓、ΔG/ΔS、每mol混合气体的熵增与自由能变。给出理想混合ΔG<0和ΔH=0的理由，并验证ΔG=−TΔS。

2. 推导模型主方程与相关守恒条件：xA=2/5，xB=3/5，ΔG=RT(2ln xA+3ln xB)，ΔS=−R(2ln xA+3ln xB)。

3. 将全部物理输入换算为规范单位，检查热力学对数和指数中只有无量纲比。

4. 第一组数值求解：xA = 0.40000000000000 fraction；xB = 0.60000000000000 fraction；pA_bar = 0.40000000000000 bar；pB_bar = 0.60000000000000 bar。

5. 第二组状态、能量或动力学量：entropy_total_J_K = 27.978651734132 J/K；Gibbs_total_J = -8341.8350145313 J；enthalpy_J = 0.0000000000000 J。

6. 剩余数值答案与回代：G_over_S_K = -298.15000000000 K；molar_entropy_J_molK = 5.5957303468263 J/(molK)；molar_Gibbs_J_mol = -1668.3670029063 J/mol。

7. 核查正负性、覆盖或组成归一、化学原子守恒，以及电压、气压与扩散的物理边界。

8. 使用独立数学表达式逐项重算答案字段，以防止主求值公式中无意的单位或代数错误。

9. 题设所忽略的电极极化、介质非均匀性或浓度依赖系数将改变真实实验值，不能未经验证直接外推。

10. 该完整题解仍属于待专家科学和原创性审核的不可出版草稿。

#### 数值答案及单位

- xA = 0.40000000000000 fraction
- xB = 0.60000000000000 fraction
- pA_bar = 0.40000000000000 bar
- pB_bar = 0.60000000000000 bar
- entropy_total_J_K = 27.978651734132 J/K
- Gibbs_total_J = -8341.8350145313 J
- enthalpy_J = 0.0000000000000 J
- G_over_S_K = -298.15000000000 K
- molar_entropy_J_molK = 5.5957303468263 J/(molK)
- molar_Gibbs_J_mol = -1668.3670029063 J/mol

### UC-ADV14-P212 Clausius–Clapeyron积分式的汽化压强与沸点反演

某纯挥发性液体在298.15 K时饱和蒸气压为20.00 kPa，在温度298–340 K之间摩尔汽化焓固定为40.00 kJ/mol，气相理想且可忽略液相体积。求318.15 K、338.15 K的饱和压强、与298.15 K压强的比、两温度逆温差、ln(p318/p298)、压强为101.325 kPa时预测的正常沸点、lnp对1/T的斜率及p338/p318。指出本题的吸热汽化决定升温升压，不可把焓差的正号误放进指数。

#### 完整计算过程

1. 完整物理化学系统及约束：某纯挥发性液体在298.15 K时饱和蒸气压为20.00 kPa，在温度298–340 K之间摩尔汽化焓固定为40.00 kJ/mol，气相理想且可忽略液相体积。求318.15 K、338.15 K的饱和压强、与298.15 K压强的比、两温度逆温差、ln(p318/p298)、压强为101.325 kPa时预测的正常沸点、lnp对1/T的斜率及p338/p318。指出本题的吸热汽化决定升温升压，不可把焓差的正号误放进指数。

2. 推导模型主方程与相关守恒条件：ln(p/p0)=−(40000/R)(1/T−1/298.15)，Tb=[1/298.15−(R/40000)ln(101.325/20)]⁻¹。

3. 将全部物理输入换算为规范单位，检查热力学对数和指数中只有无量纲比。

4. 第一组数值求解：p318_kPa = 55.151565951779 kPa；p338_kPa = 134.88863281723 kPa；p318_over_p298 = 2.7575782975889 ratio；p338_over_p298 = 6.7444316408615 ratio。

5. 第二组状态、能量或动力学量：inverseT_318_diff = -0.00021084497467739 K^-1；inverseT_338_diff = -0.00039674894983653 K^-1；ln_pressure_ratio318 = 1.0143528661536 ratio。

6. 剩余数值答案与回代：boiling_T_K = 331.48364666007 K；Clapeyron_slope_K = -4810.8942017977 K；p338_over_p318 = 2.4457806499125 ratio。

7. 核查正负性、覆盖或组成归一、化学原子守恒，以及电压、气压与扩散的物理边界。

8. 使用独立数学表达式逐项重算答案字段，以防止主求值公式中无意的单位或代数错误。

9. 题设所忽略的电极极化、介质非均匀性或浓度依赖系数将改变真实实验值，不能未经验证直接外推。

10. 该完整题解仍属于待专家科学和原创性审核的不可出版草稿。

#### 数值答案及单位

- p318_kPa = 55.151565951779 kPa
- p338_kPa = 134.88863281723 kPa
- p318_over_p298 = 2.7575782975889 ratio
- p338_over_p298 = 6.7444316408615 ratio
- inverseT_318_diff = -0.00021084497467739 K^-1
- inverseT_338_diff = -0.00039674894983653 K^-1
- ln_pressure_ratio318 = 1.0143528661536 ratio
- boiling_T_K = 331.48364666007 K
- Clapeyron_slope_K = -4810.8942017977 K
- p338_over_p318 = 2.4457806499125 ratio

### UC-ADV14-P213 Debye单一松弛模型的介电频散、损耗和峰频率

某理想极性液体相对静态介电常数εs=80.00、光学极限ε∞=5.000，单一Debye松弛时间τ=1.000 ns。给定频率10.00 MHz和100.0 MHz，定义无量纲x=2π fτ，实部ε'=ε∞+(εs−ε∞)/(1+x²)，损耗正值ε''=(εs−ε∞)x/(1+x²)，损耗角tanδ=ε''/ε'。分别计算两频率的实部、损耗、损耗角，计算介电强度、损耗峰频率(MHz)、峰值ε''以及两频率损耗比。说明复介电常数符号约定会影响虚部记号，但这里ε''作为正损耗。

#### 完整计算过程

1. 完整物理化学系统及约束：某理想极性液体相对静态介电常数εs=80.00、光学极限ε∞=5.000，单一Debye松弛时间τ=1.000 ns。给定频率10.00 MHz和100.0 MHz，定义无量纲x=2π fτ，实部ε'=ε∞+(εs−ε∞)/(1+x²)，损耗正值ε''=(εs−ε∞)x/(1+x²)，损耗角tanδ=ε''/ε'。分别计算两频率的实部、损耗、损耗角，计算介电强度、损耗峰频率(MHz)、峰值ε''以及两频率损耗比。说明复介电常数符号约定会影响虚部记号，但这里ε''作为正损耗。

2. 推导模型主方程与相关守恒条件：ε' =5+75/(1+x²)，ε''=75x/(1+x²)，fmax=1/(2πτ)，ε''max=37.5。

3. 将全部物理输入换算为规范单位，检查热力学对数和指数中只有无量纲比。

4. 第一组数值求解：real_10MHz = 79.705076180538 ratio；loss_10MHz = 4.6938583702929 ratio；lossTangent_10MHz = 0.058890331647898 ratio；real_100MHz = 58.771760024367 ratio。

5. 第二组状态、能量或动力学量：loss_100MHz = 33.785793252629 ratio；lossTangent_100MHz = 0.57486441172803 ratio；delta_epsilon = 75.000000000000 ratio。

6. 剩余数值答案与回代：loss_peak_MHz = 159.15494309190 MHz；loss_peak_height = 37.500000000000 ratio；loss_ratio_100_over10 = 7.1978723232165 ratio。

7. 核查正负性、覆盖或组成归一、化学原子守恒，以及电压、气压与扩散的物理边界。

8. 使用独立数学表达式逐项重算答案字段，以防止主求值公式中无意的单位或代数错误。

9. 题设所忽略的电极极化、介质非均匀性或浓度依赖系数将改变真实实验值，不能未经验证直接外推。

10. 该完整题解仍属于待专家科学和原创性审核的不可出版草稿。

#### 数值答案及单位

- real_10MHz = 79.705076180538 ratio
- loss_10MHz = 4.6938583702929 ratio
- lossTangent_10MHz = 0.058890331647898 ratio
- real_100MHz = 58.771760024367 ratio
- loss_100MHz = 33.785793252629 ratio
- lossTangent_100MHz = 0.57486441172803 ratio
- delta_epsilon = 75.000000000000 ratio
- loss_peak_MHz = 159.15494309190 MHz
- loss_peak_height = 37.500000000000 ratio
- loss_ratio_100_over10 = 7.1978723232165 ratio

### UC-ADV14-P214 双气体竞争吸附Langmuir–Hinshelwood表面催化速率

催化表面含一类等价位点，气相A、B竞争单层吸附，KA=2.000 bar⁻¹、KB=1.000 bar⁻¹，θi=Ki pi/(1+KA pA+KB pB)，空位分率为分母倒数。仅相邻A*、B*反应，速率r=kθAθB，k=0.01000 mol/(m²s)。固定pB=1.000 bar，比较pA=1.000与2.000 bar：求两条件的A覆盖、B覆盖、空位分率与速率、速率比、在固定pB下最佳pA与最大速率。说明一类位点上的分率需加和为1，过量A也可能竞争排斥B而抑制反应。

#### 完整计算过程

1. 完整物理化学系统及约束：催化表面含一类等价位点，气相A、B竞争单层吸附，KA=2.000 bar⁻¹、KB=1.000 bar⁻¹，θi=Ki pi/(1+KA pA+KB pB)，空位分率为分母倒数。仅相邻A*、B*反应，速率r=kθAθB，k=0.01000 mol/(m²s)。固定pB=1.000 bar，比较pA=1.000与2.000 bar：求两条件的A覆盖、B覆盖、空位分率与速率、速率比、在固定pB下最佳pA与最大速率。说明一类位点上的分率需加和为1，过量A也可能竞争排斥B而抑制反应。

2. 推导模型主方程与相关守恒条件：D=1+2pA+pB，r=.01(2pA)(pB)/D²；固定pB=1时最优pA=(1+pB)/2=1 bar。

3. 将全部物理输入换算为规范单位，检查热力学对数和指数中只有无量纲比。

4. 第一组数值求解：thetaA_pA1 = 0.50000000000000 fraction；thetaB_pA1 = 0.25000000000000 fraction；vacancy_pA1 = 0.25000000000000 fraction；rate_pA1 = 0.0012500000000000 mol/(m2s)。

5. 第二组状态、能量或动力学量：thetaA_pA2 = 0.66666666666667 fraction；thetaB_pA2 = 0.16666666666667 fraction；vacancy_pA2 = 0.16666666666667 fraction；rate_pA2 = 0.0011111111111111 mol/(m2s)。

6. 剩余数值答案与回代：rate_ratio = 0.88888888888889 ratio；optimal_pA_bar = 1.0000000000000 bar；optimal_rate = 0.0012500000000000 mol/(m2s)。

7. 核查正负性、覆盖或组成归一、化学原子守恒，以及电压、气压与扩散的物理边界。

8. 使用独立数学表达式逐项重算答案字段，以防止主求值公式中无意的单位或代数错误。

9. 题设所忽略的电极极化、介质非均匀性或浓度依赖系数将改变真实实验值，不能未经验证直接外推。

10. 该完整题解仍属于待专家科学和原创性审核的不可出版草稿。

#### 数值答案及单位

- thetaA_pA1 = 0.50000000000000 fraction
- thetaB_pA1 = 0.25000000000000 fraction
- vacancy_pA1 = 0.25000000000000 fraction
- rate_pA1 = 0.0012500000000000 mol/(m2s)
- thetaA_pA2 = 0.66666666666667 fraction
- thetaB_pA2 = 0.16666666666667 fraction
- vacancy_pA2 = 0.16666666666667 fraction
- rate_pA2 = 0.0011111111111111 mol/(m2s)
- rate_ratio = 0.88888888888889 ratio
- optimal_pA_bar = 1.0000000000000 bar
- optimal_rate = 0.0012500000000000 mol/(m2s)

### UC-ADV14-P215 不同溶液黏度下刚性胶体的Stokes–Einstein扩散

某水合刚性纳米球探针流体动力半径r=3.000 nm，在温度298.15 K和两种溶液黏度η=0.001000、0.002000 Pa·s下，假设无滑移Stokes阻力、连续介质与热布朗平衡成立。用kB=1.380649×10⁻²³ J/K、Stokes–Einstein式D=kBT/(6πηr)求两扩散系数、比值、两个摩擦系数ζ=6πηr、一维t=1 s的均方位移2Dt、对应均方根位移μm和由第一个D反推粒子半径nm。不能用三维6Dt代替一维2Dt。

#### 完整计算过程

1. 完整物理化学系统及约束：某水合刚性纳米球探针流体动力半径r=3.000 nm，在温度298.15 K和两种溶液黏度η=0.001000、0.002000 Pa·s下，假设无滑移Stokes阻力、连续介质与热布朗平衡成立。用kB=1.380649×10⁻²³ J/K、Stokes–Einstein式D=kBT/(6πηr)求两扩散系数、比值、两个摩擦系数ζ=6πηr、一维t=1 s的均方位移2Dt、对应均方根位移μm和由第一个D反推粒子半径nm。不能用三维6Dt代替一维2Dt。

2. 推导模型主方程与相关守恒条件：D=kBT/ζ，ζ=6πηr，MSD1D=2Dt。

3. 将全部物理输入换算为规范单位，检查热力学对数和指数中只有无量纲比。

4. 第一组数值求解：D_viscosity1 = 7.2794022498187e-11 m2/s；D_viscosity2 = 3.6397011249094e-11 m2/s；D_ratio = 2.0000000000000 ratio；friction1 = 5.6548667764616e-11 kg/s。

5. 第二组状态、能量或动力学量：friction2 = 1.1309733552923e-10 kg/s；MSD1 = 1.4558804499637e-10 m2；MSD2 = 7.2794022498187e-11 m2。

6. 剩余数值答案与回代：RMS1_um = 12.065987112391 um；RMS2_um = 8.5319413088808 um；inferred_radius_nm = 3.0000000000000 nm。

7. 核查正负性、覆盖或组成归一、化学原子守恒，以及电压、气压与扩散的物理边界。

8. 使用独立数学表达式逐项重算答案字段，以防止主求值公式中无意的单位或代数错误。

9. 题设所忽略的电极极化、介质非均匀性或浓度依赖系数将改变真实实验值，不能未经验证直接外推。

10. 该完整题解仍属于待专家科学和原创性审核的不可出版草稿。

#### 数值答案及单位

- D_viscosity1 = 7.2794022498187e-11 m2/s
- D_viscosity2 = 3.6397011249094e-11 m2/s
- D_ratio = 2.0000000000000 ratio
- friction1 = 5.6548667764616e-11 kg/s
- friction2 = 1.1309733552923e-10 kg/s
- MSD1 = 1.4558804499637e-10 m2
- MSD2 = 7.2794022498187e-11 m2
- RMS1_um = 12.065987112391 um
- RMS2_um = 8.5319413088808 um
- inferred_radius_nm = 3.0000000000000 nm

### UC-ADV14-P216 无定形聚合物WLF时间–温度等效松弛时间预测

某无定形聚合物满足Williams–Landel–Ferry经验式log10 aT=−C1(T−Tref)/(C2+T−Tref)，Tref=300.0 K、C1=17.44、C2=51.60 K。参考温度时特征松弛时间τref=100.0 s；假定τ(T)=aT τref，模型仅在300–330 K有效。计算310.0、320.0和330.0 K时的log10 aT、平移因子aT及松弛时间τ，求τ310/τ330。要求解释log10与自然对数不能混用，温度足够远时WLF外推可能失效。

#### 完整计算过程

1. 完整物理化学系统及约束：某无定形聚合物满足Williams–Landel–Ferry经验式log10 aT=−C1(T−Tref)/(C2+T−Tref)，Tref=300.0 K、C1=17.44、C2=51.60 K。参考温度时特征松弛时间τref=100.0 s；假定τ(T)=aT τref，模型仅在300–330 K有效。计算310.0、320.0和330.0 K时的log10 aT、平移因子aT及松弛时间τ，求τ310/τ330。要求解释log10与自然对数不能混用，温度足够远时WLF外推可能失效。

2. 推导模型主方程与相关守恒条件：log10aT=−17.44ΔT/(51.6+ΔT)，aT=10^(log10aT)，τ=aT×100 s。

3. 将全部物理输入换算为规范单位，检查热力学对数和指数中只有无量纲比。

4. 第一组数值求解：log_shift_310 = -2.8311688311688 log10；log_shift_320 = -4.8715083798883 log10；log_shift_330 = -6.4117647058824 log10；factor_310 = 0.0014751329666106 ratio。

5. 第二组状态、能量或动力学量：factor_320 = 0.000013442858278805 ratio；factor_330 = 3.8746751204561e-7 ratio；tau_310_s = 0.14751329666106 s。

6. 剩余数值答案与回代：tau_320_s = 0.0013442858278805 s；tau_330_s = 0.000038746751204561 s；tau_ratio310_330 = 3807.1139405280 ratio。

7. 核查正负性、覆盖或组成归一、化学原子守恒，以及电压、气压与扩散的物理边界。

8. 使用独立数学表达式逐项重算答案字段，以防止主求值公式中无意的单位或代数错误。

9. 题设所忽略的电极极化、介质非均匀性或浓度依赖系数将改变真实实验值，不能未经验证直接外推。

10. 该完整题解仍属于待专家科学和原创性审核的不可出版草稿。

#### 数值答案及单位

- log_shift_310 = -2.8311688311688 log10
- log_shift_320 = -4.8715083798883 log10
- log_shift_330 = -6.4117647058824 log10
- factor_310 = 0.0014751329666106 ratio
- factor_320 = 0.000013442858278805 ratio
- factor_330 = 3.8746751204561e-7 ratio
- tau_310_s = 0.14751329666106 s
- tau_320_s = 0.0013442858278805 s
- tau_330_s = 0.000038746751204561 s
- tau_ratio310_330 = 3807.1139405280 ratio

### UC-ADV14-P217 Debye–Hückel离子强度修正的单双价离子活动度系数

298.15 K稀水溶液用Debye–Hückel极限律log10 γi=−A zi²√I，I以mol/L数值计，A=0.5090。比较离子强度I1=0.001000与I2=0.01000 mol/L，分别对zi=+1和zi=+2。求四个γ、同I条件下二价/一价γ比、同价态在高低I下γ比、在I2时二价离子自由浓度c=0.005000 M的无量纲活动度γ c/(1 M)、及二价离子log10γ在两强度下的差。必须说明单离子活动度系数的约定性质和该极限律的稀溶液适用域。

#### 完整计算过程

1. 完整物理化学系统及约束：298.15 K稀水溶液用Debye–Hückel极限律log10 γi=−A zi²√I，I以mol/L数值计，A=0.5090。比较离子强度I1=0.001000与I2=0.01000 mol/L，分别对zi=+1和zi=+2。求四个γ、同I条件下二价/一价γ比、同价态在高低I下γ比、在I2时二价离子自由浓度c=0.005000 M的无量纲活动度γ c/(1 M)、及二价离子log10γ在两强度下的差。必须说明单离子活动度系数的约定性质和该极限律的稀溶液适用域。

2. 推导模型主方程与相关守恒条件：γ=10^(−0.509 z² √I)，活动度数值γ×c/1 M。

3. 将全部物理输入换算为规范单位，检查热力学对数和指数中只有无量纲比。

4. 第一组数值求解：gamma1_lowI = 0.96361600941648 ratio；gamma2_lowI = 0.86221589897732 ratio；gamma1_highI = 0.88940588755589 ratio；gamma2_highI = 0.62574876335444 ratio。

5. 第二组状态、能量或动力学量：div_monovalent_ratio_lowI = 0.89477124762532 ratio；div_monovalent_ratio_highI = 0.70355815281818 ratio；monovalent_high_low = 0.92298786950880 ratio。

6. 剩余数值答案与回代：divalent_high_low = 0.72574486749392 ratio；divalent_activity_highI = 0.0031287438167722 activity；loggamma2_difference = -0.13921602683897 log10。

7. 核查正负性、覆盖或组成归一、化学原子守恒，以及电压、气压与扩散的物理边界。

8. 使用独立数学表达式逐项重算答案字段，以防止主求值公式中无意的单位或代数错误。

9. 题设所忽略的电极极化、介质非均匀性或浓度依赖系数将改变真实实验值，不能未经验证直接外推。

10. 该完整题解仍属于待专家科学和原创性审核的不可出版草稿。

#### 数值答案及单位

- gamma1_lowI = 0.96361600941648 ratio
- gamma2_lowI = 0.86221589897732 ratio
- gamma1_highI = 0.88940588755589 ratio
- gamma2_highI = 0.62574876335444 ratio
- div_monovalent_ratio_lowI = 0.89477124762532 ratio
- div_monovalent_ratio_highI = 0.70355815281818 ratio
- monovalent_high_low = 0.92298786950880 ratio
- divalent_high_low = 0.72574486749392 ratio
- divalent_activity_highI = 0.0031287438167722 activity
- loggamma2_difference = -0.13921602683897 log10

### UC-ADV14-P218 单电子对称Butler–Volmer电极电流与小信号电导

298.15 K理想单电子电极按Butler–Volmer方程j=j0[exp(αFη/RT)−exp(−(1−α)Fη/RT)]，j0=1.000 A/m²、α=0.5000。F=96485.33212 C/mol、R=8.314462618 J/(mol K)。计算η=+0.05000、−0.05000、+0.1000与0 V的净电流密度；在+0.05 V时氧化和还原部分电流及其比、j(+0.1)/j(+0.05)、在η≈0处的小信号电导dj/dη，以及净电流反对称校验。假设电荷转移控制、没有浓差极化和欧姆降。

#### 完整计算过程

1. 完整物理化学系统及约束：298.15 K理想单电子电极按Butler–Volmer方程j=j0[exp(αFη/RT)−exp(−(1−α)Fη/RT)]，j0=1.000 A/m²、α=0.5000。F=96485.33212 C/mol、R=8.314462618 J/(mol K)。计算η=+0.05000、−0.05000、+0.1000与0 V的净电流密度；在+0.05 V时氧化和还原部分电流及其比、j(+0.1)/j(+0.05)、在η≈0处的小信号电导dj/dη，以及净电流反对称校验。假设电荷转移控制、没有浓差极化和欧姆降。

2. 推导模型主方程与相关守恒条件：设b=F/(2RT)，则j=2j0sinh(bη)，dj/dη|0=j0 F/(RT)。

3. 将全部物理输入换算为规范单位，检查热力学对数和指数中只有无量纲比。

4. 第一组数值求解：j_plus0p05 = 2.2680545602768 A/m2；j_minus0p05 = -2.2680545602768 A/m2；anodic_plus0p05 = 2.6459855706008 A/m2；cathodic_plus0p05 = 0.37793101032404 A/m2。

5. 第二组状态、能量或动力学量：anodic_cathodic_ratio = 7.0012396398278 ratio；j_plus0p1 = 6.8584077912633 A/m2；current_ratio = 3.0239165809249 ratio。

6. 剩余数值答案与回代：j_zero = 0.0000000000000 A/m2；differential_conductance = 38.921744495609 A/(m2V)；antisymmetry_residual = 0.0000000000000 A/m2。

7. 核查正负性、覆盖或组成归一、化学原子守恒，以及电压、气压与扩散的物理边界。

8. 使用独立数学表达式逐项重算答案字段，以防止主求值公式中无意的单位或代数错误。

9. 题设所忽略的电极极化、介质非均匀性或浓度依赖系数将改变真实实验值，不能未经验证直接外推。

10. 该完整题解仍属于待专家科学和原创性审核的不可出版草稿。

#### 数值答案及单位

- j_plus0p05 = 2.2680545602768 A/m2
- j_minus0p05 = -2.2680545602768 A/m2
- anodic_plus0p05 = 2.6459855706008 A/m2
- cathodic_plus0p05 = 0.37793101032404 A/m2
- anodic_cathodic_ratio = 7.0012396398278 ratio
- j_plus0p1 = 6.8584077912633 A/m2
- current_ratio = 3.0239165809249 ratio
- j_zero = 0.0000000000000 A/m2
- differential_conductance = 38.921744495609 A/(m2V)
- antisymmetry_residual = 0.0000000000000 A/m2

### UC-ADV14-P219 球形纳米液滴的Laplace压差与表面张力自由能

理想球形液滴的液气界面表面张力γ=0.05000 N/m，气相外部压力pout=1.000×10⁵ Pa，半径分别为r1=10.00 nm和r2=100.0 nm。温度298.15 K，忽略曲率相关表面张力、电荷及分子尺度离散效应。求两个半径下的Laplace压差Δp=2γ/r和液滴内部绝对压力、表面积4πr²、单个液滴的表面能Gsurface=γA、两半径压差与表面能比及小液滴表面能对kBT的比值。说明界面自由能仅是体系的一个能量贡献。

#### 完整计算过程

1. 完整物理化学系统及约束：理想球形液滴的液气界面表面张力γ=0.05000 N/m，气相外部压力pout=1.000×10⁵ Pa，半径分别为r1=10.00 nm和r2=100.0 nm。温度298.15 K，忽略曲率相关表面张力、电荷及分子尺度离散效应。求两个半径下的Laplace压差Δp=2γ/r和液滴内部绝对压力、表面积4πr²、单个液滴的表面能Gsurface=γA、两半径压差与表面能比及小液滴表面能对kBT的比值。说明界面自由能仅是体系的一个能量贡献。

2. 推导模型主方程与相关守恒条件：Δp=2γ/r，pin=pout+Δp，Gsurf=4πγr²。

3. 将全部物理输入换算为规范单位，检查热力学对数和指数中只有无量纲比。

4. 第一组数值求解：deltaP_10nm = 10000000.000000 Pa；deltaP_100nm = 1000000.0000000 Pa；insideP_10nm = 10100000.000000 Pa；insideP_100nm = 1100000.0000000 Pa。

5. 第二组状态、能量或动力学量：surface_area_10nm = 1.2566370614359e-15 m2；surface_area_100nm = 1.2566370614359e-13 m2；surface_energy_10nm = 6.2831853071796e-17 J；surface_energy_100nm = 6.2831853071796e-15 J。

6. 剩余数值答案与回代：deltaP_ratio = 10.000000000000 ratio；surface_energy_ratio = 0.010000000000000 ratio；surface_energy_over_kBT = 15263.768548287 ratio。

7. 核查正负性、覆盖或组成归一、化学原子守恒，以及电压、气压与扩散的物理边界。

8. 使用独立数学表达式逐项重算答案字段，以防止主求值公式中无意的单位或代数错误。

9. 题设所忽略的电极极化、介质非均匀性或浓度依赖系数将改变真实实验值，不能未经验证直接外推。

10. 该完整题解仍属于待专家科学和原创性审核的不可出版草稿。

#### 数值答案及单位

- deltaP_10nm = 10000000.000000 Pa
- deltaP_100nm = 1000000.0000000 Pa
- insideP_10nm = 10100000.000000 Pa
- insideP_100nm = 1100000.0000000 Pa
- surface_area_10nm = 1.2566370614359e-15 m2
- surface_area_100nm = 1.2566370614359e-13 m2
- surface_energy_10nm = 6.2831853071796e-17 J
- surface_energy_100nm = 6.2831853071796e-15 J
- deltaP_ratio = 10.000000000000 ratio
- surface_energy_ratio = 0.010000000000000 ratio
- surface_energy_over_kBT = 15263.768548287 ratio

### UC-ADV14-P220 气相二聚分子A₂解离平衡的压力依赖与原子数守恒

某理想气相分解A₂(g)⇌2A(g)，起初有1.000 mol A₂，恒温下定义解离度α且Kp=0.2500，标准压力1.000 bar。假定没有其它物种，比较总压P=1.000与4.000 bar；解离后总物质的量n=1+α，yA=2α/(1+α)、yA2=(1−α)/(1+α)。求两压强下的α、分压pA与pA2、两组分总摩尔量、解离度比、由低压状态分压重建的Kp及A原子总摩尔数。说明高压会抑制气体分子数增多的分解反应。

#### 完整计算过程

1. 完整物理化学系统及约束：某理想气相分解A₂(g)⇌2A(g)，起初有1.000 mol A₂，恒温下定义解离度α且Kp=0.2500，标准压力1.000 bar。假定没有其它物种，比较总压P=1.000与4.000 bar；解离后总物质的量n=1+α，yA=2α/(1+α)、yA2=(1−α)/(1+α)。求两压强下的α、分压pA与pA2、两组分总摩尔量、解离度比、由低压状态分压重建的Kp及A原子总摩尔数。说明高压会抑制气体分子数增多的分解反应。

2. 推导模型主方程与相关守恒条件：Kp=4α²(P/p°)/(1−α²)，α=√[Kp/(Kp+4P/p°)]。

3. 将全部物理输入换算为规范单位，检查热力学对数和指数中只有无量纲比。

4. 第一组数值求解：alpha_1bar = 0.24253562503633 fraction；alpha_4bar = 0.12403473458921 fraction；partial_A_1bar = 0.39038820320221 bar；partial_A2_1bar = 0.60961179679779 bar。

5. 第二组状态、能量或动力学量：partial_A_4bar = 0.88278221853732 bar；partial_A2_4bar = 3.1172177814627 bar；total_moles_1bar = 1.2425356250363 mol；total_moles_4bar = 1.1240347345892 mol。

6. 剩余数值答案与回代：alpha_ratio = 1.9553847221876 ratio；Kp_backcheck = 0.25000000000000 ratio；total_A_atom_moles = 2.0000000000000 mol_atoms。

7. 核查正负性、覆盖或组成归一、化学原子守恒，以及电压、气压与扩散的物理边界。

8. 使用独立数学表达式逐项重算答案字段，以防止主求值公式中无意的单位或代数错误。

9. 题设所忽略的电极极化、介质非均匀性或浓度依赖系数将改变真实实验值，不能未经验证直接外推。

10. 该完整题解仍属于待专家科学和原创性审核的不可出版草稿。

#### 数值答案及单位

- alpha_1bar = 0.24253562503633 fraction
- alpha_4bar = 0.12403473458921 fraction
- partial_A_1bar = 0.39038820320221 bar
- partial_A2_1bar = 0.60961179679779 bar
- partial_A_4bar = 0.88278221853732 bar
- partial_A2_4bar = 3.1172177814627 bar
- total_moles_1bar = 1.2425356250363 mol
- total_moles_4bar = 1.1240347345892 mol
- alpha_ratio = 1.9553847221876 ratio
- Kp_backcheck = 0.25000000000000 ratio
- total_A_atom_moles = 2.0000000000000 mol_atoms

<a id="batch-09"></a>

## 第十四辑收官6题：四科严格解析及数值向量

### UC-ADV14-I225 草酸铁(III)络合物的三级逐步稳定常数与条件分布

某理想无沉淀Fe³⁺–草酸根L²⁻水溶液中只有Fe³⁺、FeL⁺、FeL₂⁻和FeL₃³⁻四种含铁形态。逐步形成常数K₁=1.000×10⁴、K₂=1.000×10³、K₃=1.000×10² L/mol。自由[L]=0.001000 mol/L由外库固定，总铁浓度CT=0.002000 M，pH恒定，忽略水解、氧化还原与草酸质子化。求配分函数D、各物种分率和浓度、铁平均配位草酸根数、络合草酸总浓度、自由Fe³⁺分率以及总铁平衡检验。注意三级物种是由逐步常数乘积产生，不可将K₃当总形成常数。

#### 推导

1. 给定物种、反应或物理系统：某理想无沉淀Fe³⁺–草酸根L²⁻水溶液中只有Fe³⁺、FeL⁺、FeL₂⁻和FeL₃³⁻四种含铁形态。逐步形成常数K₁=1.000×10⁴、K₂=1.000×10³、K₃=1.000×10² L/mol。自由[L]=0.001000 mol/L由外库固定，总铁浓度CT=0.002000 M，pH恒定，忽略水解、氧化还原与草酸质子化。求配分函数D、各物种分率和浓度、铁平均配位草酸根数、络合草酸总浓度、自由Fe³⁺分率以及总铁平衡检验。注意三级物种是由逐步常数乘积产生，不可将K₃当总形成常数。

2. 由质量作用、化学计量或动力学守恒推出核心方程：D=1+K₁L+K₁K₂L²+K₁K₂K₃L³；x_n=β_n L^n/D；总结合L=CT∑n x_n。

3. 把活度和反应商明确写作标准态的无量纲比，温度、体积和电压均换为公式所要求的单位。

4. 先确定独立变量及各项库存约束，例如总溶质、总反应物、概率归一或等温相平衡。

5. 从主方程直接计算第一组结果：D=22.0000000000000 ratio；free_fraction=0.0454545454545455 fraction；mono_fraction=0.454545454545455 fraction；bis_fraction=0.454545454545455 fraction。

6. 继续计算其余主要结果：tris_fraction=0.0454545454545455 fraction；free_Fe_M=0.0000909090909090909 mol/L；mono_Fe_M=0.000909090909090909 mol/L；bis_Fe_M=0.000909090909090909 mol/L。

7. 剩余反演量、验证量及单位：tris_Fe_M=0.0000909090909090909 mol/L；mean_bound_L=1.50000000000000 ligands/Fe；total_bound_L_M=0.00300000000000000 mol/L；Fe_total_check_M=0.00200000000000000 mol/L。

8. 分别将解代回题目给出的平衡式或微分方程，并检验零/高浓度、无限时间及已知理想极限的行为。

9. 独立数值见证已在QA脚本中按另一计算途径实现；本次仅声称数值向量程序复算，并不宣称实验验证。

10. 该题仍需人工复核跨辑同构、真实化学过程与数学推导的出版级严谨性。

#### 答案

- D=22.0000000000000 ratio
- free_fraction=0.0454545454545455 fraction
- mono_fraction=0.454545454545455 fraction
- bis_fraction=0.454545454545455 fraction
- tris_fraction=0.0454545454545455 fraction
- free_Fe_M=0.0000909090909090909 mol/L
- mono_Fe_M=0.000909090909090909 mol/L
- bis_Fe_M=0.000909090909090909 mol/L
- tris_Fe_M=0.0000909090909090909 mol/L
- mean_bound_L=1.50000000000000 ligands/Fe
- total_bound_L_M=0.00300000000000000 mol/L
- Fe_total_check_M=0.00200000000000000 mol/L

### UC-ADV14-A225 同位素稀释质谱的¹³C内标定量与混合原子分数

某样品含目标化合物未知物质的量n，天然目标中重同位素原子分数fX=0.01000。向样品加入同化学物质的富集内标nS=0.002000 mol，富集标的重分数fS=0.9000。混合后质谱重同位素占比测得fm=0.2500，假定定量混合、两种同位素无仪器歧视且每分子仅含1个可用标记原子。求由fm=(n fX+nS fS)/(n+nS)反演未知n、混合总摩尔数、轻重原子各摩尔数、原样/内标摩尔数比、原样与内标各自重原子贡献、混合重/轻原子比及若未加内标时的重/轻比。要求从原子数守恒而非简单质量加权得出公式。

#### 推导

1. 给定物种、反应或物理系统：某样品含目标化合物未知物质的量n，天然目标中重同位素原子分数fX=0.01000。向样品加入同化学物质的富集内标nS=0.002000 mol，富集标的重分数fS=0.9000。混合后质谱重同位素占比测得fm=0.2500，假定定量混合、两种同位素无仪器歧视且每分子仅含1个可用标记原子。求由fm=(n fX+nS fS)/(n+nS)反演未知n、混合总摩尔数、轻重原子各摩尔数、原样/内标摩尔数比、原样与内标各自重原子贡献、混合重/轻原子比及若未加内标时的重/轻比。要求从原子数守恒而非简单质量加权得出公式。

2. 由质量作用、化学计量或动力学守恒推出核心方程：n=nS(fS−fm)/(fm−fX)；重原子总量=nfX+nSfS；轻原子=(n+nS)−nheavy。

3. 把活度和反应商明确写作标准态的无量纲比，温度、体积和电压均换为公式所要求的单位。

4. 先确定独立变量及各项库存约束，例如总溶质、总反应物、概率归一或等温相平衡。

5. 从主方程直接计算第一组结果：unknown_n_mol=0.00541666666666667 mol；total_n_mol=0.00741666666666667 mol；heavy_mol=0.00185416666666667 mol；light_mol=0.00556250000000000 mol。

6. 继续计算其余主要结果：unknown_to_spike_ratio=2.70833333333333 ratio；heavy_from_unknown_mol=0.0000541666666666667 mol；heavy_from_spike_mol=0.00180000000000000 mol；heavy_to_light_ratio=0.333333333333333 ratio。

7. 剩余反演量、验证量及单位：unspiked_heavy_light_ratio=0.0101010101010101 ratio；reconstructed_heavy_fraction=0.250000000000000 fraction。

8. 分别将解代回题目给出的平衡式或微分方程，并检验零/高浓度、无限时间及已知理想极限的行为。

9. 独立数值见证已在QA脚本中按另一计算途径实现；本次仅声称数值向量程序复算，并不宣称实验验证。

10. 该题仍需人工复核跨辑同构、真实化学过程与数学推导的出版级严谨性。

#### 答案

- unknown_n_mol=0.00541666666666667 mol
- total_n_mol=0.00741666666666667 mol
- heavy_mol=0.00185416666666667 mol
- light_mol=0.00556250000000000 mol
- unknown_to_spike_ratio=2.70833333333333 ratio
- heavy_from_unknown_mol=0.0000541666666666667 mol
- heavy_from_spike_mol=0.00180000000000000 mol
- heavy_to_light_ratio=0.333333333333333 ratio
- unspiked_heavy_light_ratio=0.0101010101010101 ratio
- reconstructed_heavy_fraction=0.250000000000000 fraction

### UC-ADV14-O221 有机酸卤化物与醇的两阶段竞争酰基取代

某酰氯A在大过量醇甲R₁OH与醇乙R₂OH存在下不可逆发生并行亲核酰基取代，k₁=1.500 L/(mol s)、k₂=0.5000 L/(mol s)，两醇自由浓度由外库分别保持0.1000与0.2000 M。初始[A]=0.02000 M，t=10.00 s，忽略水解、消除、酰基迁移和产物互变。求总拟一级速度、两酯产物分支、10s底物剩余、两酯产物浓度与其摩尔比、A转化率、半衰期及两个路径的初始产物生成速率；检查两产物与残余A物料平衡。

#### 推导

1. 给定物种、反应或物理系统：某酰氯A在大过量醇甲R₁OH与醇乙R₂OH存在下不可逆发生并行亲核酰基取代，k₁=1.500 L/(mol s)、k₂=0.5000 L/(mol s)，两醇自由浓度由外库分别保持0.1000与0.2000 M。初始[A]=0.02000 M，t=10.00 s，忽略水解、消除、酰基迁移和产物互变。求总拟一级速度、两酯产物分支、10s底物剩余、两酯产物浓度与其摩尔比、A转化率、半衰期及两个路径的初始产物生成速率；检查两产物与残余A物料平衡。

2. 由质量作用、化学计量或动力学守恒推出核心方程：λ=k₁c₁+k₂c₂；p₁=k₁c₁/λ；[A]=A₀exp(−λt)，[Pj]=A₀(1−e^(−λt))pj。

3. 把活度和反应商明确写作标准态的无量纲比，温度、体积和电压均换为公式所要求的单位。

4. 先确定独立变量及各项库存约束，例如总溶质、总反应物、概率归一或等温相平衡。

5. 从主方程直接计算第一组结果：kobs=0.250000000000000 s^-1；branch_ester1=0.600000000000000 fraction；branch_ester2=0.400000000000000 fraction；A_t10_M=0.00164169997247798 mol/L。

6. 继续计算其余主要结果：ester1_t10_M=0.0110149800165132 mol/L；ester2_t10_M=0.00734332001100881 mol/L；ester_ratio=1.50000000000000 ratio；conversion_t10=0.917915001376101 fraction。

7. 剩余反演量、验证量及单位：half_time_s=2.77258872223978 s；initial_rate_ester1_Ms=0.00300000000000000 mol/(Ls)；initial_rate_ester2_Ms=0.00200000000000000 mol/(Ls)。

8. 分别将解代回题目给出的平衡式或微分方程，并检验零/高浓度、无限时间及已知理想极限的行为。

9. 独立数值见证已在QA脚本中按另一计算途径实现；本次仅声称数值向量程序复算，并不宣称实验验证。

10. 该题仍需人工复核跨辑同构、真实化学过程与数学推导的出版级严谨性。

#### 答案

- kobs=0.250000000000000 s^-1
- branch_ester1=0.600000000000000 fraction
- branch_ester2=0.400000000000000 fraction
- A_t10_M=0.00164169997247798 mol/L
- ester1_t10_M=0.0110149800165132 mol/L
- ester2_t10_M=0.00734332001100881 mol/L
- ester_ratio=1.50000000000000 ratio
- conversion_t10=0.917915001376101 fraction
- half_time_s=2.77258872223978 s
- initial_rate_ester1_Ms=0.00300000000000000 mol/(Ls)
- initial_rate_ester2_Ms=0.00200000000000000 mol/(Ls)

### UC-ADV14-O222 环辛烯环氧化双面进攻的非对映选择性与自由能差

某带手性辅助基的取代环辛烯发生立体选择性环氧化，Re面与Si面通道的过渡态活化自由能分别为ΔG‡Re=65.00、ΔG‡Si=69.00 kJ/mol，T=298.15 K，假设两路径Eyring前因子相同、均不可逆且生成两个稳定非对映异构体。求Re/Si速率比、两产物分率、非对映过量de、相应主/副产物摩尔比、ΔΔG‡=GRe−GSi、若总产物量为0.01000 mol时两产物摩尔数、主异构体相对于次异构体的百分比增量及温度升至350 K、假设ΔΔG‡恒定时的新选择性。

#### 推导

1. 给定物种、反应或物理系统：某带手性辅助基的取代环辛烯发生立体选择性环氧化，Re面与Si面通道的过渡态活化自由能分别为ΔG‡Re=65.00、ΔG‡Si=69.00 kJ/mol，T=298.15 K，假设两路径Eyring前因子相同、均不可逆且生成两个稳定非对映异构体。求Re/Si速率比、两产物分率、非对映过量de、相应主/副产物摩尔比、ΔΔG‡=GRe−GSi、若总产物量为0.01000 mol时两产物摩尔数、主异构体相对于次异构体的百分比增量及温度升至350 K、假设ΔΔG‡恒定时的新选择性。

2. 由质量作用、化学计量或动力学守恒推出核心方程：kRe/kSi=exp[−(GRe−GSi)/(RT)]；fRe=r/(1+r)，de=fRe−fSi。

3. 把活度和反应商明确写作标准态的无量纲比，温度、体积和电压均换为公式所要求的单位。

4. 先确定独立变量及各项库存约束，例如总溶质、总反应物、概率归一或等温相平衡。

5. 从主方程直接计算第一组结果：rate_ratio_Re_Si=5.02076253632245 ratio；fraction_Re=0.833908081581505 fraction；fraction_Si=0.166091918418495 fraction；diastereomeric_excess=0.667816163163010 fraction。

6. 继续计算其余主要结果：major_minor_ratio=5.02076253632245 ratio；deltaG_Re_minus_Si_kJmol=-4.00000000000000 kJ/mol；moles_Re=0.00833908081581505 mol；moles_Si=0.00166091918418495 mol。

7. 剩余反演量、验证量及单位：relative_major_over_minor_excess=4.02076253632245 fraction；rate_ratio_350K=3.95326255195373 ratio；fraction_Re_350K=0.798112862076013 fraction。

8. 分别将解代回题目给出的平衡式或微分方程，并检验零/高浓度、无限时间及已知理想极限的行为。

9. 独立数值见证已在QA脚本中按另一计算途径实现；本次仅声称数值向量程序复算，并不宣称实验验证。

10. 该题仍需人工复核跨辑同构、真实化学过程与数学推导的出版级严谨性。

#### 答案

- rate_ratio_Re_Si=5.02076253632245 ratio
- fraction_Re=0.833908081581505 fraction
- fraction_Si=0.166091918418495 fraction
- diastereomeric_excess=0.667816163163010 fraction
- major_minor_ratio=5.02076253632245 ratio
- deltaG_Re_minus_Si_kJmol=-4.00000000000000 kJ/mol
- moles_Re=0.00833908081581505 mol
- moles_Si=0.00166091918418495 mol
- relative_major_over_minor_excess=4.02076253632245 fraction
- rate_ratio_350K=3.95326255195373 ratio
- fraction_Re_350K=0.798112862076013 fraction

### UC-ADV14-P221 二元理想溶液Raoult定律的露点组成与汽相分配

理想二元挥发液体A/B在298.15 K的纯液蒸气压p*A=80.00、p*B=40.00 kPa，液相A摩尔分率xA=0.3000，汽相为理想气体、液相满足Raoult定律。计算两组分蒸汽分压、泡点总压、气相A/B摩尔分率、汽相A/B比、相对挥发度α=p*A/p*B、由气相组成反求液相xA（露点逆算）、汽相A相对于液相的富集倍数及总压回代误差。注意总压是泡点压力，不是纯组分蒸汽压的算术平均。

#### 推导

1. 给定物种、反应或物理系统：理想二元挥发液体A/B在298.15 K的纯液蒸气压p*A=80.00、p*B=40.00 kPa，液相A摩尔分率xA=0.3000，汽相为理想气体、液相满足Raoult定律。计算两组分蒸汽分压、泡点总压、气相A/B摩尔分率、汽相A/B比、相对挥发度α=p*A/p*B、由气相组成反求液相xA（露点逆算）、汽相A相对于液相的富集倍数及总压回代误差。注意总压是泡点压力，不是纯组分蒸汽压的算术平均。

2. 由质量作用、化学计量或动力学守恒推出核心方程：pi=xipi*，P=Σpi，yi=pi/P；反演xA=(yA/p*A)/(yA/p*A+yB/p*B)。

3. 把活度和反应商明确写作标准态的无量纲比，温度、体积和电压均换为公式所要求的单位。

4. 先确定独立变量及各项库存约束，例如总溶质、总反应物、概率归一或等温相平衡。

5. 从主方程直接计算第一组结果：partial_A_kPa=24.0000000000000 kPa；partial_B_kPa=28.0000000000000 kPa；bubble_pressure_kPa=52.0000000000000 kPa；vapor_A_fraction=0.461538461538462 fraction。

6. 继续计算其余主要结果：vapor_B_fraction=0.538461538461538 fraction；vapor_A_B_ratio=0.857142857142857 ratio；relative_volatility=2.00000000000000 ratio；back_calculated_liquid_A=0.300000000000000 fraction。

7. 剩余反演量、验证量及单位：enrichment_y_over_x=1.53846153846154 ratio；pressure_balance_kPa=0.00000000000000 kPa。

8. 分别将解代回题目给出的平衡式或微分方程，并检验零/高浓度、无限时间及已知理想极限的行为。

9. 独立数值见证已在QA脚本中按另一计算途径实现；本次仅声称数值向量程序复算，并不宣称实验验证。

10. 该题仍需人工复核跨辑同构、真实化学过程与数学推导的出版级严谨性。

#### 答案

- partial_A_kPa=24.0000000000000 kPa
- partial_B_kPa=28.0000000000000 kPa
- bubble_pressure_kPa=52.0000000000000 kPa
- vapor_A_fraction=0.461538461538462 fraction
- vapor_B_fraction=0.538461538461538 fraction
- vapor_A_B_ratio=0.857142857142857 ratio
- relative_volatility=2.00000000000000 ratio
- back_calculated_liquid_A=0.300000000000000 fraction
- enrichment_y_over_x=1.53846153846154 ratio
- pressure_balance_kPa=0.00000000000000 kPa

### UC-ADV14-P222 一阶热分解反应的非等温升温转化积分与等效时间

某不可逆一阶固体热分解在T0=300.0 K时k0=0.001000 s⁻¹，活化能Ea=50.00 kJ/mol，Arrhenius关系k(T)=k0 exp[(Ea/R)(1/T0−1/T)]。样品以线性速率β=1.000 K/s从300升到350 K，无热滞后、无扩散影响且反应物仅发生一个消耗过程。以X=1−exp[−(1/β)∫_{300}^{350}k(T)dT]求转化率，要求采用数值积分（复合Simpson，2000等分）而不是直接使用350 K下k×50s。求末态k、积分危险度H、剩余分率、转化率、恒温初始速率、恒温末态速率、积分等效初始温度时间H/k0、用两端速率梯形平均得到的错误危险度及其相对误差、加热用时。

#### 推导

1. 给定物种、反应或物理系统：某不可逆一阶固体热分解在T0=300.0 K时k0=0.001000 s⁻¹，活化能Ea=50.00 kJ/mol，Arrhenius关系k(T)=k0 exp[(Ea/R)(1/T0−1/T)]。样品以线性速率β=1.000 K/s从300升到350 K，无热滞后、无扩散影响且反应物仅发生一个消耗过程。以X=1−exp[−(1/β)∫_{300}^{350}k(T)dT]求转化率，要求采用数值积分（复合Simpson，2000等分）而不是直接使用350 K下k×50s。求末态k、积分危险度H、剩余分率、转化率、恒温初始速率、恒温末态速率、积分等效初始温度时间H/k0、用两端速率梯形平均得到的错误危险度及其相对误差、加热用时。

2. 由质量作用、化学计量或动力学守恒推出核心方程：H=(h/3β)[k(T0)+k(Tend)+4Σodd k(Ti)+2Σeven k(Ti)]，X=1−e^(−H)。

3. 把活度和反应商明确写作标准态的无量纲比，温度、体积和电压均换为公式所要求的单位。

4. 先确定独立变量及各项库存约束，例如总溶质、总反应物、概率归一或等温相平衡。

5. 从主方程直接计算第一组结果：k_350=0.0175249836693261 s^-1；hazard_integral=0.307711139119052 ratio；survival_fraction=0.735127636959094 fraction；conversion_fraction=0.264872363040906 fraction。

6. 继续计算其余主要结果：k_300=0.00100000000000000 s^-1；constant_350_rate=0.0175249836693261 s^-1；equivalent_300K_seconds=307.711139119052 s；trapezoid_hazard=0.463124591733151 ratio。

7. 剩余反演量、验证量及单位：trapezoid_relative_error=0.505062810072566 fraction；heating_time_s=50.0000000000000 s。

8. 分别将解代回题目给出的平衡式或微分方程，并检验零/高浓度、无限时间及已知理想极限的行为。

9. 独立数值见证已在QA脚本中按另一计算途径实现；本次仅声称数值向量程序复算，并不宣称实验验证。

10. 该题仍需人工复核跨辑同构、真实化学过程与数学推导的出版级严谨性。

#### 答案

- k_350=0.0175249836693261 s^-1
- hazard_integral=0.307711139119052 ratio
- survival_fraction=0.735127636959094 fraction
- conversion_fraction=0.264872363040906 fraction
- k_300=0.00100000000000000 s^-1
- constant_350_rate=0.0175249836693261 s^-1
- equivalent_300K_seconds=307.711139119052 s
- trapezoid_hazard=0.463124591733151 ratio
- trapezoid_relative_error=0.505062810072566 fraction
- heating_time_s=50.0000000000000 s
