# 第十五辑分析化学九题 A226–A234

## UC-ADV15-A226 同位素稀释质谱的重原子丰度精确反演

某单重同位素示踪分子的天然样品中重核原子分数fX=0.01000，实验向样品加入0.002000 mol化学性质相同、重核富集分率fS=0.9000的标记内标。混合物的重原子分数测得fm=0.2500，假设每分子恰有一个被监测原子位点且无同位素分馏、检测器质量歧视和试剂损失。通过总原子数守恒反演原样未知物质的量nX，求两来源重核摩尔数、混合总核摩尔数、混合重核和轻核总量、原样/内标摩尔比、混合重轻原子比和混合分率复算。说明不能直接用重/轻比替代重原子分数。

### 计算与解析

1. 实验测量模型和给定条件：某单重同位素示踪分子的天然样品中重核原子分数fX=0.01000，实验向样品加入0.002000 mol化学性质相同、重核富集分率fS=0.9000的标记内标。混合物的重原子分数测得fm=0.2500，假设每分子恰有一个被监测原子位点且无同位素分馏、检测器质量歧视和试剂损失。通过总原子数守恒反演原样未知物质的量nX，求两来源重核摩尔数、混合总核摩尔数、混合重核和轻核总量、原样/内标摩尔比、混合重轻原子比和混合分率复算。说明不能直接用重/轻比替代重原子分数。

2. 完整反演或计量方程：fm=(nX fX+nS fS)/(nX+nS)，nX=nS(fS−fm)/(fm−fX)，nheavy=fm(nX+nS)。

3. 确认原样、标准品和空白的质量或体积关系，所有光谱响应和电位基线按题面规定处理。

4. 第一批直接求得：sample_mol = 0.005416666666667 mol；spike_mol = 0.002000000000000 mol；sample_spike_ratio = 2.708333333333 ratio。

5. 第二批由标定和方程求出：heavy_from_sample_mol = 0.00005416666666667 mol；heavy_from_spike_mol = 0.001800000000000 mol；total_molecules_mol = 0.007416666666667 mol。

6. 其余浓度、校准或统计结果：total_heavy_mol = 0.001854166666667 mol；total_light_mol = 0.005562500000000 mol；heavy_light_ratio = 0.3333333333333 ratio；fraction_check = 0.2500000000000 fraction。

7. 用计算结果回代原观测量或响应方程，检查物料和计数归一以及标准态一致。

8. 当仪器存在背景漂移、分辨率限制、基体效应和非理想标定时，需重新评估系统偏差。

9. GitHub QA校核全部数值字段，但公式见证尚属于同源实现，不能称已独立验证。

10. 题目学术可信度与跨辑去重仍须专家逐题审核。

### 全部数值答案

- sample_mol = 0.005416666666667 mol
- spike_mol = 0.002000000000000 mol
- sample_spike_ratio = 2.708333333333 ratio
- heavy_from_sample_mol = 0.00005416666666667 mol
- heavy_from_spike_mol = 0.001800000000000 mol
- total_molecules_mol = 0.007416666666667 mol
- total_heavy_mol = 0.001854166666667 mol
- total_light_mol = 0.005562500000000 mol
- heavy_light_ratio = 0.3333333333333 ratio
- fraction_check = 0.2500000000000 fraction

## UC-ADV15-A227 毛细管电泳迁移时间的电泳迁移率与电渗流分离

某毛细管电泳仪器总毛细管长度Lt=0.6000 m，检测点到入口距离Ld=0.5000 m，电压V=20000 V。中性电渗流标记物到达时间tEOF=100.0 s，单价分析离子到达时间tA=80.00 s，另一阴离子标记到达时间tB=125.0 s。电场沿管均匀，检测速度v=Ld/t，μapp=v/E=Lt Ld/(Vt)，μep=μapp−μEOF。求EOF表观迁移率、A/B表观迁移率、A/B本征电泳迁移率、A相对EOF速度比、两离子迁移率差、EOF体积流量未知时为何仍可求迁移率，以及A/B相对EOF的净迁移方向。离子没有吸附和电荷状态互变。

### 计算与解析

1. 实验测量模型和给定条件：某毛细管电泳仪器总毛细管长度Lt=0.6000 m，检测点到入口距离Ld=0.5000 m，电压V=20000 V。中性电渗流标记物到达时间tEOF=100.0 s，单价分析离子到达时间tA=80.00 s，另一阴离子标记到达时间tB=125.0 s。电场沿管均匀，检测速度v=Ld/t，μapp=v/E=Lt Ld/(Vt)，μep=μapp−μEOF。求EOF表观迁移率、A/B表观迁移率、A/B本征电泳迁移率、A相对EOF速度比、两离子迁移率差、EOF体积流量未知时为何仍可求迁移率，以及A/B相对EOF的净迁移方向。离子没有吸附和电荷状态互变。

2. 完整反演或计量方程：μapp=LtLd/(V t)，μEOF=LtLd/(V tEOF)，μep=μapp−μEOF。

3. 确认原样、标准品和空白的质量或体积关系，所有光谱响应和电位基线按题面规定处理。

4. 第一批直接求得：mobility_EOF = 1.500000000000e-7 m2/(Vs)；mobility_A_app = 1.875000000000e-7 m2/(Vs)；mobility_B_app = 1.200000000000e-7 m2/(Vs)。

5. 第二批由标定和方程求出：mobility_A_ep = 3.750000000000e-8 m2/(Vs)；mobility_B_ep = -3.000000000000e-8 m2/(Vs)；velocity_A_m_s = 0.006250000000000 m/s。

6. 其余浓度、校准或统计结果：velocity_B_m_s = 0.004000000000000 m/s；velocity_EOF_m_s = 0.005000000000000 m/s；ep_mobility_difference = 6.750000000000e-8 m2/(Vs)；A_over_EOF_velocity = 1.250000000000 ratio。

7. 用计算结果回代原观测量或响应方程，检查物料和计数归一以及标准态一致。

8. 当仪器存在背景漂移、分辨率限制、基体效应和非理想标定时，需重新评估系统偏差。

9. GitHub QA校核全部数值字段，但公式见证尚属于同源实现，不能称已独立验证。

10. 题目学术可信度与跨辑去重仍须专家逐题审核。

### 全部数值答案

- mobility_EOF = 1.500000000000e-7 m2/(Vs)
- mobility_A_app = 1.875000000000e-7 m2/(Vs)
- mobility_B_app = 1.200000000000e-7 m2/(Vs)
- mobility_A_ep = 3.750000000000e-8 m2/(Vs)
- mobility_B_ep = -3.000000000000e-8 m2/(Vs)
- velocity_A_m_s = 0.006250000000000 m/s
- velocity_B_m_s = 0.004000000000000 m/s
- velocity_EOF_m_s = 0.005000000000000 m/s
- ep_mobility_difference = 6.750000000000e-8 m2/(Vs)
- A_over_EOF_velocity = 1.250000000000 ratio

## UC-ADV15-A228 等温滴定量热法1:1结合焓的总热量与稀释空白

假想等温滴定量热实验中蛋白结合配体反应P+L⇌PL，某一完整滴定阶段按平衡模型已知新增结合量Δn=4.000×10⁻⁸ mol，反应结合焓ΔH=−30.00 kJ/mol，除结合外有定量稀释背景热Qblank=+0.1000 mJ，仪器测得积分热Qobs=Qbind+Qblank。另一个滴定阶段新增结合量为2.000×10⁻⁸ mol，具有相同焓和相同空白。求两阶段结合热、总观测热、扣空白热、两阶段观测热比、按扣空白反演的ΔH、把空白漏扣导致的表观ΔH、累计结合量与累计结合热。所有热统一为mJ，忽略热容和注射体积变化。

### 计算与解析

1. 实验测量模型和给定条件：假想等温滴定量热实验中蛋白结合配体反应P+L⇌PL，某一完整滴定阶段按平衡模型已知新增结合量Δn=4.000×10⁻⁸ mol，反应结合焓ΔH=−30.00 kJ/mol，除结合外有定量稀释背景热Qblank=+0.1000 mJ，仪器测得积分热Qobs=Qbind+Qblank。另一个滴定阶段新增结合量为2.000×10⁻⁸ mol，具有相同焓和相同空白。求两阶段结合热、总观测热、扣空白热、两阶段观测热比、按扣空白反演的ΔH、把空白漏扣导致的表观ΔH、累计结合量与累计结合热。所有热统一为mJ，忽略热容和注射体积变化。

2. 完整反演或计量方程：Qbind=Δn ΔH；Qobs=Qbind+Qblank，ΔHapp=Qobs/Δn。

3. 确认原样、标准品和空白的质量或体积关系，所有光谱响应和电位基线按题面规定处理。

4. 第一批直接求得：binding_heat1_mJ = -1.200000000000 mJ；observed_heat1_mJ = -1.100000000000 mJ；binding_heat2_mJ = -0.6000000000000 mJ。

5. 第二批由标定和方程求出：observed_heat2_mJ = -0.5000000000000 mJ；blank_mJ = 0.1000000000000 mJ；recovered_binding_enthalpy_kJmol = -30.00000000000 kJ/mol。

6. 其余浓度、校准或统计结果：wrong_enthalpy_without_blank_kJmol = -27.50000000000 kJ/mol；observed_heat_ratio = 2.200000000000 ratio；cumulative_bound_mol = 6.000000000000e-8 mol；cumulative_binding_heat_mJ = -1.800000000000 mJ。

7. 用计算结果回代原观测量或响应方程，检查物料和计数归一以及标准态一致。

8. 当仪器存在背景漂移、分辨率限制、基体效应和非理想标定时，需重新评估系统偏差。

9. GitHub QA校核全部数值字段，但公式见证尚属于同源实现，不能称已独立验证。

10. 题目学术可信度与跨辑去重仍须专家逐题审核。

### 全部数值答案

- binding_heat1_mJ = -1.200000000000 mJ
- observed_heat1_mJ = -1.100000000000 mJ
- binding_heat2_mJ = -0.6000000000000 mJ
- observed_heat2_mJ = -0.5000000000000 mJ
- blank_mJ = 0.1000000000000 mJ
- recovered_binding_enthalpy_kJmol = -30.00000000000 kJ/mol
- wrong_enthalpy_without_blank_kJmol = -27.50000000000 kJ/mol
- observed_heat_ratio = 2.200000000000 ratio
- cumulative_bound_mol = 6.000000000000e-8 mol
- cumulative_binding_heat_mJ = -1.800000000000 mJ

## UC-ADV15-A229 质谱峰自然丰度中的同位素卷积二项分布

某分子含两个相互独立等价氯原子，每个氯原子有35Cl天然丰度p=0.7578、37Cl丰度q=0.2422，其他元素的同位素丰度在本题忽略。两氯分子呈M、M+2、M+4三个质谱同位素峰，几率分别为p²、2pq、q²。假设响应效率不依赖同位素，求三峰概率、相对于M峰的强度比、其相对M=100基准的峰强度、观察100000个分子时各峰预期计数、相对分布均值所对应的37Cl个数及每分子37Cl个数方差。说明中间峰的组合因子2来自两个可替换氯位点。

### 计算与解析

1. 实验测量模型和给定条件：某分子含两个相互独立等价氯原子，每个氯原子有35Cl天然丰度p=0.7578、37Cl丰度q=0.2422，其他元素的同位素丰度在本题忽略。两氯分子呈M、M+2、M+4三个质谱同位素峰，几率分别为p²、2pq、q²。假设响应效率不依赖同位素，求三峰概率、相对于M峰的强度比、其相对M=100基准的峰强度、观察100000个分子时各峰预期计数、相对分布均值所对应的37Cl个数及每分子37Cl个数方差。说明中间峰的组合因子2来自两个可替换氯位点。

2. 完整反演或计量方程：PM=p²，PM2=2pq，PM4=q²；E[N37]=2q，Var[N37]=2pq。

3. 确认原样、标准品和空白的质量或体积关系，所有光谱响应和电位基线按题面规定处理。

4. 第一批直接求得：prob_M = 0.5742608400000 fraction；prob_Mplus2 = 0.3670783200000 fraction；prob_Mplus4 = 0.05866084000000 fraction。

5. 第二批由标定和方程求出：ratio_M2_M = 0.6392187912378 ratio；ratio_M4_M = 0.1021501657679 ratio；relative_Mplus2_intensity_to100 = 63.92187912378 counts_relative。

6. 其余浓度、校准或统计结果：relative_Mplus4_intensity_to100 = 10.21501657679 counts_relative；expected_counts_Mplus2 = 36707.83200000 counts；mean_37Cl_atoms = 0.4844000000000 atoms；variance_37Cl_atoms = 0.3670783200000 atoms2。

7. 用计算结果回代原观测量或响应方程，检查物料和计数归一以及标准态一致。

8. 当仪器存在背景漂移、分辨率限制、基体效应和非理想标定时，需重新评估系统偏差。

9. GitHub QA校核全部数值字段，但公式见证尚属于同源实现，不能称已独立验证。

10. 题目学术可信度与跨辑去重仍须专家逐题审核。

### 全部数值答案

- prob_M = 0.5742608400000 fraction
- prob_Mplus2 = 0.3670783200000 fraction
- prob_Mplus4 = 0.05866084000000 fraction
- ratio_M2_M = 0.6392187912378 ratio
- ratio_M4_M = 0.1021501657679 ratio
- relative_Mplus2_intensity_to100 = 63.92187912378 counts_relative
- relative_Mplus4_intensity_to100 = 10.21501657679 counts_relative
- expected_counts_Mplus2 = 36707.83200000 counts
- mean_37Cl_atoms = 0.4844000000000 atoms
- variance_37Cl_atoms = 0.3670783200000 atoms2

## UC-ADV15-A230 定量电化学传感器Michaelis–Menten饱和电流的Kₘ反演

某固定化酶电化学传感器的稳态催化电流i=i_max C/(K_m+C)，其中分析物浓度C用mmol/L计。给定在C1=1.000 mmol/L测得i1=2.000 μA，在C2=3.000 mmol/L测得i2=4.000 μA，假设无背景、非特异吸附与传质限制，电极电流完全由一级酶催化机制控制。通过Hanes形式C/i=(K_m+C)/i_max或双点直接求Km及imax，预测C=5.000、10.00时的电流、初始低浓度灵敏度imax/Km、半饱和浓度、两个电流比和最大电流归一化分率。注意高浓度不能继续按低浓度线性标定。

### 计算与解析

1. 实验测量模型和给定条件：某固定化酶电化学传感器的稳态催化电流i=i_max C/(K_m+C)，其中分析物浓度C用mmol/L计。给定在C1=1.000 mmol/L测得i1=2.000 μA，在C2=3.000 mmol/L测得i2=4.000 μA，假设无背景、非特异吸附与传质限制，电极电流完全由一级酶催化机制控制。通过Hanes形式C/i=(K_m+C)/i_max或双点直接求Km及imax，预测C=5.000、10.00时的电流、初始低浓度灵敏度imax/Km、半饱和浓度、两个电流比和最大电流归一化分率。注意高浓度不能继续按低浓度线性标定。

2. 完整反演或计量方程：1/i=(K_m/i_max)(1/C)+1/i_max；两点求得K_m=3.000 mM、i_max=8.000 μA。

3. 确认原样、标准品和空白的质量或体积关系，所有光谱响应和电位基线按题面规定处理。

4. 第一批直接求得：Km_mM = 3.000000000000 mmol/L；imax_microA = 8.000000000000 microA；current_C1_microA = 2.000000000000 microA。

5. 第二批由标定和方程求出：current_C3_microA = 4.000000000000 microA；current_C5_microA = 5.000000000000 microA；current_C10_microA = 6.153846153846 microA。

6. 其余浓度、校准或统计结果：initial_sensitivity_microA_mM = 2.666666666667 microA/mM；half_saturation_C_mM = 3.000000000000 mmol/L；ratio_i10_over_i5 = 1.230769230769 ratio；fraction_max_at_C10 = 0.7692307692308 fraction。

7. 用计算结果回代原观测量或响应方程，检查物料和计数归一以及标准态一致。

8. 当仪器存在背景漂移、分辨率限制、基体效应和非理想标定时，需重新评估系统偏差。

9. GitHub QA校核全部数值字段，但公式见证尚属于同源实现，不能称已独立验证。

10. 题目学术可信度与跨辑去重仍须专家逐题审核。

### 全部数值答案

- Km_mM = 3.000000000000 mmol/L
- imax_microA = 8.000000000000 microA
- current_C1_microA = 2.000000000000 microA
- current_C3_microA = 4.000000000000 microA
- current_C5_microA = 5.000000000000 microA
- current_C10_microA = 6.153846153846 microA
- initial_sensitivity_microA_mM = 2.666666666667 microA/mM
- half_saturation_C_mM = 3.000000000000 mmol/L
- ratio_i10_over_i5 = 1.230769230769 ratio
- fraction_max_at_C10 = 0.7692307692308 fraction

## UC-ADV15-A231 等离子体原子吸收光谱双线校正的背景吸光反演

某原子吸收光谱AAS在分析线λa和邻近非吸收参比线λr同时记录样品吸光度，理想模型Aa=kC+B、Ar=B，其中k=0.5000 L/mg，B是宽带背景吸光，未知样本Aa=0.8500、Ar=0.1000。加入1:1稀释、并假定背景吸光随样本浓度同倍减半而新信号服从同一模型。求样本扣背景吸光、原样分析物浓度(mg/L)、原样背景、稀释样Aa与Ar、稀释后扣背景吸光及浓度、忽略背景时的浓度与相对高估，以及原样信号由分析物贡献的比例。说明参比线不能出现分析物吸收，否则两线扣除有偏。

### 计算与解析

1. 实验测量模型和给定条件：某原子吸收光谱AAS在分析线λa和邻近非吸收参比线λr同时记录样品吸光度，理想模型Aa=kC+B、Ar=B，其中k=0.5000 L/mg，B是宽带背景吸光，未知样本Aa=0.8500、Ar=0.1000。加入1:1稀释、并假定背景吸光随样本浓度同倍减半而新信号服从同一模型。求样本扣背景吸光、原样分析物浓度(mg/L)、原样背景、稀释样Aa与Ar、稀释后扣背景吸光及浓度、忽略背景时的浓度与相对高估，以及原样信号由分析物贡献的比例。说明参比线不能出现分析物吸收，否则两线扣除有偏。

2. 完整反演或计量方程：C=(Aa−Ar)/k；稀释后C'=C/2、B'=B/2。

3. 确认原样、标准品和空白的质量或体积关系，所有光谱响应和电位基线按题面规定处理。

4. 第一批直接求得：analyte_absorbance = 0.7500000000000 AU；original_concentration_mgL = 1.500000000000 mg/L；background_absorbance = 0.1000000000000 AU。

5. 第二批由标定和方程求出：diluted_analytical_absorbance = 0.4250000000000 AU；diluted_reference_absorbance = 0.05000000000000 AU；diluted_corrected_absorbance = 0.3750000000000 AU。

6. 其余浓度、校准或统计结果：diluted_concentration_mgL = 0.7500000000000 mg/L；naive_uncorrected_concentration_mgL = 1.700000000000 mg/L；naive_relative_overestimate = 0.1333333333333 fraction；analyte_signal_fraction = 0.8823529411765 fraction。

7. 用计算结果回代原观测量或响应方程，检查物料和计数归一以及标准态一致。

8. 当仪器存在背景漂移、分辨率限制、基体效应和非理想标定时，需重新评估系统偏差。

9. GitHub QA校核全部数值字段，但公式见证尚属于同源实现，不能称已独立验证。

10. 题目学术可信度与跨辑去重仍须专家逐题审核。

### 全部数值答案

- analyte_absorbance = 0.7500000000000 AU
- original_concentration_mgL = 1.500000000000 mg/L
- background_absorbance = 0.1000000000000 AU
- diluted_analytical_absorbance = 0.4250000000000 AU
- diluted_reference_absorbance = 0.05000000000000 AU
- diluted_corrected_absorbance = 0.3750000000000 AU
- diluted_concentration_mgL = 0.7500000000000 mg/L
- naive_uncorrected_concentration_mgL = 1.700000000000 mg/L
- naive_relative_overestimate = 0.1333333333333 fraction
- analyte_signal_fraction = 0.8823529411765 fraction

## UC-ADV15-A232 气相傅里叶红外光谱线强度温度校正与浓度误差

某气相FTIR吸收测量模型A(T)=S(T)cL，光程L=0.1000 m、浓度c以任意固定mol/m³计。单吸收谱线强度温度依赖由题设近似S(T)=S300 (300/T)exp[−E''/R(1/T−1/300)]，其中S300=0.5000 m²/mol，低能级能E''=5000 J/mol。样品在T=350.0 K实际浓度c=0.02000 mol/m³。计算S350、实际吸光度A350、若错误用S300标定得到的表观c、相对系统偏差、温度修正系数S350/S300、若实际光程加倍后A值以及300K在相同浓度光程下A300；再求两温度吸光度比与反演原始浓度的结果。模型不含压力展宽、谱线重叠和分子配分函数更复杂项。

### 计算与解析

1. 实验测量模型和给定条件：某气相FTIR吸收测量模型A(T)=S(T)cL，光程L=0.1000 m、浓度c以任意固定mol/m³计。单吸收谱线强度温度依赖由题设近似S(T)=S300 (300/T)exp[−E''/R(1/T−1/300)]，其中S300=0.5000 m²/mol，低能级能E''=5000 J/mol。样品在T=350.0 K实际浓度c=0.02000 mol/m³。计算S350、实际吸光度A350、若错误用S300标定得到的表观c、相对系统偏差、温度修正系数S350/S300、若实际光程加倍后A值以及300K在相同浓度光程下A300；再求两温度吸光度比与反演原始浓度的结果。模型不含压力展宽、谱线重叠和分子配分函数更复杂项。

2. 完整反演或计量方程：S350=S300(300/350)exp[−(5000/R)(1/350−1/300)]；capp=A350/(S300 L)。

3. 确认原样、标准品和空白的质量或体积关系，所有光谱响应和电位基线按题面规定处理。

4. 第一批直接求得：line_strength_S350 = 0.5706751700448 m2/mol；absorbance_350 = 0.001141350340090 AU；apparent_c_using300 = 0.02282700680179 mol/m3。

5. 第二批由标定和方程求出：relative_bias = 0.1413503400895 fraction；line_strength_ratio = 1.141350340090 ratio；absorbance_double_path = 0.002282700680179 AU。

6. 其余浓度、校准或统计结果：absorbance_300 = 0.001000000000000 AU；absorbance_ratio350_300 = 1.141350340090 ratio；recovered_actual_c = 0.02000000000000 mol/m3；path_length_m = 0.1000000000000 m。

7. 用计算结果回代原观测量或响应方程，检查物料和计数归一以及标准态一致。

8. 当仪器存在背景漂移、分辨率限制、基体效应和非理想标定时，需重新评估系统偏差。

9. GitHub QA校核全部数值字段，但公式见证尚属于同源实现，不能称已独立验证。

10. 题目学术可信度与跨辑去重仍须专家逐题审核。

### 全部数值答案

- line_strength_S350 = 0.5706751700448 m2/mol
- absorbance_350 = 0.001141350340090 AU
- apparent_c_using300 = 0.02282700680179 mol/m3
- relative_bias = 0.1413503400895 fraction
- line_strength_ratio = 1.141350340090 ratio
- absorbance_double_path = 0.002282700680179 AU
- absorbance_300 = 0.001000000000000 AU
- absorbance_ratio350_300 = 1.141350340090 ratio
- recovered_actual_c = 0.02000000000000 mol/m3
- path_length_m = 0.1000000000000 m

## UC-ADV15-A233 电化学阻抗Randles串联溶液电阻与并联RC半圆

某电极等效Randles电路由溶液电阻Rs=10.00 Ω与电荷转移电阻Rct=100.0 Ω并联双电层电容Cdl=100.0 μF串联组成，假设无Warburg扩散。阻抗Z(ω)=Rs+Rct/(1+iωRct Cdl)，以Z=Z'−iZ''（Z''为正损耗）表示。分别在f=1.000 Hz和f=100.0 Hz求实部Z'和正损耗Z''、半圆顶点频率fmax=1/(2πRct Cdl)、半圆两端高低频电阻、顶点阻抗实部及损耗峰值、100 Hz阻抗模和低频/高频电阻比。数值全部用Ω，电容μF须转换为F。

### 计算与解析

1. 实验测量模型和给定条件：某电极等效Randles电路由溶液电阻Rs=10.00 Ω与电荷转移电阻Rct=100.0 Ω并联双电层电容Cdl=100.0 μF串联组成，假设无Warburg扩散。阻抗Z(ω)=Rs+Rct/(1+iωRct Cdl)，以Z=Z'−iZ''（Z''为正损耗）表示。分别在f=1.000 Hz和f=100.0 Hz求实部Z'和正损耗Z''、半圆顶点频率fmax=1/(2πRct Cdl)、半圆两端高低频电阻、顶点阻抗实部及损耗峰值、100 Hz阻抗模和低频/高频电阻比。数值全部用Ω，电容μF须转换为F。

2. 完整反演或计量方程：Z'=Rs+Rct/(1+(ωτ)²)，Z''=Rctωτ/(1+(ωτ)²)，τ=RctCdl。

3. 确认原样、标准品和空白的质量或体积关系，所有光谱响应和电位基线按题面规定处理。

4. 第一批直接求得：real_Z_1Hz = 109.6067682407 ohm；loss_Z_1Hz = 6.258477827057 ohm；real_Z_100Hz = 12.47045230319 ohm。

5. 第二批由标定和方程求出：loss_Z_100Hz = 15.52230961346 ohm；semicircle_peak_frequency_Hz = 15.91549430919 Hz；low_frequency_resistance = 110.0000000000 ohm。

6. 其余浓度、校准或统计结果：high_frequency_resistance = 10.00000000000 ohm；real_Z_at_peak = 60.00000000000 ohm；loss_Z_at_peak = 50.00000000000 ohm；impedance_magnitude_100Hz = 19.91115959411 ohm。

7. 用计算结果回代原观测量或响应方程，检查物料和计数归一以及标准态一致。

8. 当仪器存在背景漂移、分辨率限制、基体效应和非理想标定时，需重新评估系统偏差。

9. GitHub QA校核全部数值字段，但公式见证尚属于同源实现，不能称已独立验证。

10. 题目学术可信度与跨辑去重仍须专家逐题审核。

### 全部数值答案

- real_Z_1Hz = 109.6067682407 ohm
- loss_Z_1Hz = 6.258477827057 ohm
- real_Z_100Hz = 12.47045230319 ohm
- loss_Z_100Hz = 15.52230961346 ohm
- semicircle_peak_frequency_Hz = 15.91549430919 Hz
- low_frequency_resistance = 110.0000000000 ohm
- high_frequency_resistance = 10.00000000000 ohm
- real_Z_at_peak = 60.00000000000 ohm
- loss_Z_at_peak = 50.00000000000 ohm
- impedance_magnitude_100Hz = 19.91115959411 ohm

## UC-ADV15-A234 离子选择电极双点校准的膜电势与未知活度

298.15 K某选择性电极测一价阳离子X⁺，理想Nernst形式E=E°+(RT/F)ln aX，E°=0.3000 V。标准液活动度a1=0.001000、a2=0.01000（以1 M归一化），未知样的真实活动度aU=0.003000，所有活度系数与参比电位已经标定、无干扰离子。求两标准的电位、未知电位、由电位反算aU、未知pX、每十倍浓度电位斜率、未知点在两标准之间的对数插值分率、未知aX加倍时电极电位和电位增量、两标准电压差。注意绝对电位与参比标定有关，但差分斜率与Nernst一致。

### 计算与解析

1. 实验测量模型和给定条件：298.15 K某选择性电极测一价阳离子X⁺，理想Nernst形式E=E°+(RT/F)ln aX，E°=0.3000 V。标准液活动度a1=0.001000、a2=0.01000（以1 M归一化），未知样的真实活动度aU=0.003000，所有活度系数与参比电位已经标定、无干扰离子。求两标准的电位、未知电位、由电位反算aU、未知pX、每十倍浓度电位斜率、未知点在两标准之间的对数插值分率、未知aX加倍时电极电位和电位增量、两标准电压差。注意绝对电位与参比标定有关，但差分斜率与Nernst一致。

2. 完整反演或计量方程：E=E°+(RT/F)ln a，a=exp[(E−E°)F/RT]。

3. 确认原样、标准品和空白的质量或体积关系，所有光谱响应和电位基线按题面规定处理。

4. 第一批直接求得：E_standard1 = 0.1225219509428 V；E_standard2 = 0.1816813006286 V；E_unknown = 0.1507481340933 V。

5. 第二批由标定和方程求出：activity_recovered = 0.003000000000000 activity；pX = 2.522878745280 pX；slope_per_decade = 0.05915934968572 V。

6. 其余浓度、校准或统计结果：log_interpolation_fraction = 0.4771212547197 fraction；E_double_activity = 0.1685568728727 V；potential_increment_double = 0.01780873877938 V；standard_voltage_difference = 0.05915934968572 V。

7. 用计算结果回代原观测量或响应方程，检查物料和计数归一以及标准态一致。

8. 当仪器存在背景漂移、分辨率限制、基体效应和非理想标定时，需重新评估系统偏差。

9. GitHub QA校核全部数值字段，但公式见证尚属于同源实现，不能称已独立验证。

10. 题目学术可信度与跨辑去重仍须专家逐题审核。

### 全部数值答案

- E_standard1 = 0.1225219509428 V
- E_standard2 = 0.1816813006286 V
- E_unknown = 0.1507481340933 V
- activity_recovered = 0.003000000000000 activity
- pX = 2.522878745280 pX
- slope_per_decade = 0.05915934968572 V
- log_interpolation_fraction = 0.4771212547197 fraction
- E_double_activity = 0.1685568728727 V
- potential_increment_double = 0.01780873877938 V
- standard_voltage_difference = 0.05915934968572 V