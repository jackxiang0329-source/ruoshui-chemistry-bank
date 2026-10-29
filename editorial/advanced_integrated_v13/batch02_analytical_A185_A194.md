# 第十三辑第二批分析化学十题 A185—A194

## UC-ADV13-A185 反相HPLC溶剂强度模型下两组分保留因子和选择性

### 题目

一种假想反相HPLC中两种分析物的保留因子随乙腈体积分数φ遵循ln k_i=ln k_w,i−S_iφ；分析物A取k_w,A=100.0、S_A=6.000，分析物B取k_w,B=200.0、S_B=5.000。固定死时间t0=1.500 min、其余流动相条件不变，比较φ=0.3000和0.5000。求两种分析物保留因子、保留时间、选择性α=kB/kA、两峰洗脱时间差及α随φ变化的放大倍数。指出本题不考虑梯度、流速与柱效变化，不能由α单独推出分离度Rs。

### 推导

1. 实验模型、全部已知数值与明确的未知量：一种假想反相HPLC中两种分析物的保留因子随乙腈体积分数φ遵循ln k_i=ln k_w,i−S_iφ；分析物A取k_w,A=100.0、S_A=6.000，分析物B取k_w,B=200.0、S_B=5.000。固定死时间t0=1.500 min、其余流动相条件不变，比较φ=0.3000和0.5000。求两种分析物保留因子、保留时间、选择性α=kB/kA、两峰洗脱时间差及α随φ变化的放大倍数。指出本题不考虑梯度、流速与柱效变化，不能由α单独推出分离度Rs。

2. 推导所用校准或反演方程：ki=kwi exp(−Si φ)，tRi=t0(1+ki)，α=kB/kA。

3. 对ln k求φ导数为−Si，A的保留因子比B随φ增加下降更快。

4. 选择性α指数增长，由lnα=ln(kwB/kwA)+(SA−SB)φ获得。

5. 保留时间差只需两峰tR之差；没有板高和峰宽数据不能凭时间差断言完全分离。

6. 实际数值反演第一组：kA_phi0p3=16.5298888222 ratio；kB_phi0p3=44.6260320297 ratio；alpha_phi0p3=2.69971761515 ratio；tRA_phi0p3_min=26.2948332332 min；tRB_phi0p3_min=68.4390480445 min。

7. 后续参数与交叉量：delta_tR_phi0p3_min=42.1442148113 min；kA_phi0p5=4.97870683679 ratio；kB_phi0p5=16.4169997248 ratio；alpha_phi0p5=3.29744254140 ratio。

8. 独立验证和最终结果：tRA_phi0p5_min=8.96806025518 min；tRB_phi0p5_min=26.1254995872 min；delta_tR_phi0p5_min=17.1574393320 min；alpha_increase_factor=1.22140275816 ratio。

9. 数值单位必须分别处理测量信号、浓度、时间、质荷比与热力学因子；回代模型应能恢复给定的全部校准观测量。

10. 误差与适用界限：题设假定的模型参数、校准范围及独立性为本题有效条件，所述理想读数不意味着实际测量没有偏差。

11. 按人工作业规范，科学性、同构查重与版权尚需专家审查；数值见证仅重复计算物理化学模型。

### 答案表

- kA_phi0p3=16.5298888222 ratio
- kB_phi0p3=44.6260320297 ratio
- alpha_phi0p3=2.69971761515 ratio
- tRA_phi0p3_min=26.2948332332 min
- tRB_phi0p3_min=68.4390480445 min
- delta_tR_phi0p3_min=42.1442148113 min
- kA_phi0p5=4.97870683679 ratio
- kB_phi0p5=16.4169997248 ratio
- alpha_phi0p5=3.29744254140 ratio
- tRA_phi0p5_min=8.96806025518 min
- tRB_phi0p5_min=26.1254995872 min
- delta_tR_phi0p5_min=17.1574393320 min
- alpha_increase_factor=1.22140275816 ratio

## UC-ADV13-A186 ICP–MS铜同位素比的指数质量歧视校正与样品丰度

### 题目

ICP–MS测量63Cu/65Cu的原子数比，假设测量质量歧视遵循R_meas=R_true(m65/m63)^β，采用名义质量63.000与65.000 u。标准样真实比Rstd=2.0000，仪器测得Rstd,meas=1.9000；未知样本测得Runk,meas=1.2000；同一运行β稳定，忽略离子计数统计波动。求β、校正因子、未知样63Cu/65Cu真实比、两同位素原子分数及未经校正的63Cu原子分数偏差，回代标准样仪器比值。

### 推导

1. 实验模型、全部已知数值与明确的未知量：ICP–MS测量63Cu/65Cu的原子数比，假设测量质量歧视遵循R_meas=R_true(m65/m63)^β，采用名义质量63.000与65.000 u。标准样真实比Rstd=2.0000，仪器测得Rstd,meas=1.9000；未知样本测得Runk,meas=1.2000；同一运行β稳定，忽略离子计数统计波动。求β、校正因子、未知样63Cu/65Cu真实比、两同位素原子分数及未经校正的63Cu原子分数偏差，回代标准样仪器比值。

2. 推导所用校准或反演方程：β=ln(Rstd,meas/Rstd,true)/ln(m65/m63)，Runk,true=Runk,meas/(m65/m63)^β，f63=R/(1+R)。

3. 使用同一标准的真值和测值确定β，注意定义中的质量比是65/63不是倒数。

4. 将质量歧视因子除出样本原始比值，才能把离子比转成原子分数。

5. 质量歧视模型是假定同一运行参数固定；不同基体、时段和质量范围可能需要进一步标准化。

6. 实际数值反演第一组：mass_ratio=1.03174603175 ratio；beta=-1.64125183542 ratio；bias_factor=0.950000000000 ratio；corrected_unknown_ratio=1.26315789474 ratio。

7. 后续参数与交叉量：sample_fraction_Cu63=0.558139534884 fraction；sample_fraction_Cu65=0.441860465116 fraction；uncorrected_fraction_Cu63=0.545454545455 fraction。

8. 独立验证和最终结果：fraction_Cu63_bias=-0.0126849894292 fraction；recovered_standard_measured_ratio=1.90000000000 ratio；standard_bias_percent=-5.00000000000 percent。

9. 数值单位必须分别处理测量信号、浓度、时间、质荷比与热力学因子；回代模型应能恢复给定的全部校准观测量。

10. 误差与适用界限：题设假定的模型参数、校准范围及独立性为本题有效条件，所述理想读数不意味着实际测量没有偏差。

11. 按人工作业规范，科学性、同构查重与版权尚需专家审查；数值见证仅重复计算物理化学模型。

### 答案表

- mass_ratio=1.03174603175 ratio
- beta=-1.64125183542 ratio
- bias_factor=0.950000000000 ratio
- corrected_unknown_ratio=1.26315789474 ratio
- sample_fraction_Cu63=0.558139534884 fraction
- sample_fraction_Cu65=0.441860465116 fraction
- uncorrected_fraction_Cu63=0.545454545455 fraction
- fraction_Cu63_bias=-0.0126849894292 fraction
- recovered_standard_measured_ratio=1.90000000000 ratio
- standard_bias_percent=-5.00000000000 percent

## UC-ADV13-A187 两点玻璃电极pH标定的电位斜率与未知样本反演

### 题目

298.15 K玻璃电极在缓冲液pH=4.000时读数E4=+0.18000 V、pH=10.000时读数E10=−0.17496 V，未知水样电极读数Eunk=+0.002520 V。假定电位对pH的经验直线E=E0−S pH在上述范围成立，无液接电位及温度变化，理论Nernst斜率为2.303RT/F。由两点求经验S和截距E0，计算未知样pH、对应H⁺活动度、经验斜率与理论斜率的相对偏差，并用三个点检验残差。

### 推导

1. 实验模型、全部已知数值与明确的未知量：298.15 K玻璃电极在缓冲液pH=4.000时读数E4=+0.18000 V、pH=10.000时读数E10=−0.17496 V，未知水样电极读数Eunk=+0.002520 V。假定电位对pH的经验直线E=E0−S pH在上述范围成立，无液接电位及温度变化，理论Nernst斜率为2.303RT/F。由两点求经验S和截距E0，计算未知样pH、对应H⁺活动度、经验斜率与理论斜率的相对偏差，并用三个点检验残差。

2. 推导所用校准或反演方程：S=(E4−E10)/(10−4)，E0=E4+4S，pHunk=(E0−Eunk)/S。

3. 两点标定先求正的S，再计算外推截距E0，不能直接把电位视作pH。

4. 检查未知pH落在4–10的校准有效范围内。

5. 转换H+活度a_H=10^(−pH)，若报告浓度需另有活度系数假定。

6. 实际数值反演第一组：empirical_slope_V_per_pH=0.0591600000000 V/pH；calibration_intercept_V=0.416640000000 V；unknown_pH=7.00000000000 pH。

7. 后续参数与交叉量：hydrogen_activity=1.00000000000e-7 ratio；theoretical_Nernst_slope_V_per_pH=0.0591700097168 V/pH；relative_slope_error=-0.000169168753697 fraction。

8. 独立验证和最终结果：reconstructed_E4_V=0.180000000000 V；reconstructed_E10_V=-0.174960000000 V；reconstructed_Eunknown_V=0.00252000000000 V。

9. 数值单位必须分别处理测量信号、浓度、时间、质荷比与热力学因子；回代模型应能恢复给定的全部校准观测量。

10. 误差与适用界限：题设假定的模型参数、校准范围及独立性为本题有效条件，所述理想读数不意味着实际测量没有偏差。

11. 按人工作业规范，科学性、同构查重与版权尚需专家审查；数值见证仅重复计算物理化学模型。

### 答案表

- empirical_slope_V_per_pH=0.0591600000000 V/pH
- calibration_intercept_V=0.416640000000 V
- unknown_pH=7.00000000000 pH
- hydrogen_activity=1.00000000000e-7 ratio
- theoretical_Nernst_slope_V_per_pH=0.0591700097168 V/pH
- relative_slope_error=-0.000169168753697 fraction
- reconstructed_E4_V=0.180000000000 V
- reconstructed_E10_V=-0.174960000000 V
- reconstructed_Eunknown_V=0.00252000000000 V

## UC-ADV13-A188 尺寸排阻色谱对数分子量–洗脱体积校准反演

### 题目

一条假想尺寸排阻色谱柱在有效分离范围中满足log10(M/g mol⁻¹)=a+b Ve（Ve单位mL），三标准品的(分子量,洗脱体积)分别(1000,17.00 mL)、(10000,14.00 mL)、(100000,11.00 mL)，未知聚合物洗脱体积Ve=12.50 mL。柱外排阻体积V0=10.00 mL、全渗透体积Vt=20.00 mL。求校准斜率、截距、未知分子量、未知Kav=(Ve−V0)/(Vt−V0)、三个标准的Kav及摩尔质量倍数，解释SEC用流体动力尺寸推断表观摩尔量的局限。

### 推导

1. 实验模型、全部已知数值与明确的未知量：一条假想尺寸排阻色谱柱在有效分离范围中满足log10(M/g mol⁻¹)=a+b Ve（Ve单位mL），三标准品的(分子量,洗脱体积)分别(1000,17.00 mL)、(10000,14.00 mL)、(100000,11.00 mL)，未知聚合物洗脱体积Ve=12.50 mL。柱外排阻体积V0=10.00 mL、全渗透体积Vt=20.00 mL。求校准斜率、截距、未知分子量、未知Kav=(Ve−V0)/(Vt−V0)、三个标准的Kav及摩尔质量倍数，解释SEC用流体动力尺寸推断表观摩尔量的局限。

2. 推导所用校准或反演方程：log10 M=a+bVe，b=(5−3)/(11−17)，Kav=(Ve−V0)/(Vt−V0)。

3. 由两个标准品求斜率b，第三标准品检验直线假设的内部一致性。

4. 将未知Ve代入log10M再指数化，避免混用自然对数与常用对数。

5. Kav需处于0到1的柱内有效范围，分子量校准依赖链形状和溶剂条件。

6. 实际数值反演第一组：calibration_slope_logM_per_mL=-0.333333333333 log10/mL；calibration_intercept=8.66666666667 log10；unknown_log10_M=4.50000000000 log10；unknown_molar_mass_g_mol=31622.7766017 g/mol。

7. 后续参数与交叉量：unknown_Kav=0.250000000000 fraction；standard1_Kav=0.700000000000 fraction；standard2_Kav=0.400000000000 fraction。

8. 独立验证和最终结果：standard3_Kav=0.100000000000 fraction；unknown_over_standard1_mass=31.6227766017 ratio；calibration_standard2_residual=0.00000000000 log10。

9. 数值单位必须分别处理测量信号、浓度、时间、质荷比与热力学因子；回代模型应能恢复给定的全部校准观测量。

10. 误差与适用界限：题设假定的模型参数、校准范围及独立性为本题有效条件，所述理想读数不意味着实际测量没有偏差。

11. 按人工作业规范，科学性、同构查重与版权尚需专家审查；数值见证仅重复计算物理化学模型。

### 答案表

- calibration_slope_logM_per_mL=-0.333333333333 log10/mL
- calibration_intercept=8.66666666667 log10
- unknown_log10_M=4.50000000000 log10
- unknown_molar_mass_g_mol=31622.7766017 g/mol
- unknown_Kav=0.250000000000 fraction
- standard1_Kav=0.700000000000 fraction
- standard2_Kav=0.400000000000 fraction
- standard3_Kav=0.100000000000 fraction
- unknown_over_standard1_mass=31.6227766017 ratio
- calibration_standard2_residual=0.00000000000 log10

## UC-ADV13-A189 酶促葡萄糖安培传感器双点Michaelis–Menten标定

### 题目

某葡萄糖氧化酶安培传感器达到稳态后满足净电流I=Imax c/(Km+c)，背景已经扣除。两个独立的葡萄糖标准浓度c1=0.5000 mmol/L与c2=2.000 mmol/L测得I1=2.000 μA、I2=5.000 μA（忽略测量误差）。浓度单位mmol/L，求Km与Imax、在c=1.000及5.000 mmol/L的预测电流、半饱和浓度、在1 mmol/L处灵敏度dI/dc以及低浓度线性斜率Imax/Km。解析Lineweaver–Burk图中两点拟合的局限，不能用线性模型外推高浓度。

### 推导

1. 实验模型、全部已知数值与明确的未知量：某葡萄糖氧化酶安培传感器达到稳态后满足净电流I=Imax c/(Km+c)，背景已经扣除。两个独立的葡萄糖标准浓度c1=0.5000 mmol/L与c2=2.000 mmol/L测得I1=2.000 μA、I2=5.000 μA（忽略测量误差）。浓度单位mmol/L，求Km与Imax、在c=1.000及5.000 mmol/L的预测电流、半饱和浓度、在1 mmol/L处灵敏度dI/dc以及低浓度线性斜率Imax/Km。解析Lineweaver–Burk图中两点拟合的局限，不能用线性模型外推高浓度。

2. 推导所用校准或反演方程：1/I=(Km/Imax)(1/c)+1/Imax；I(c)=Imax c/(Km+c)。

3. 将两组输入数据代入倒数方程的截距和斜率以反演Imax和Km；这只是误差忽略下的代数解。

4. 将Km、Imax回代两种校准浓度，并检查所有预测电流小于Imax。

5. 灵敏度dI/dc=Imax Km/(Km+c)²，随浓度升高而降低。

6. 实际数值反演第一组：inferred_Imax_microamp=10.0000000000 microamp；inferred_Km_mM=2.00000000000 mmol/L；predicted_I_at1mM_microamp=3.33333333333 microamp；predicted_I_at5mM_microamp=7.14285714286 microamp。

7. 后续参数与交叉量：half_saturation_concentration_mM=2.00000000000 mmol/L；sensitivity_at1_microamp_per_mM=2.22222222222 microamp/mM；low_c_sensitivity_microamp_per_mM=5.00000000000 microamp/mM。

8. 独立验证和最终结果：reconstructed_I1_microamp=2.00000000000 microamp；reconstructed_I2_microamp=5.00000000000 microamp；saturation_fraction_at5=0.714285714286 fraction。

9. 数值单位必须分别处理测量信号、浓度、时间、质荷比与热力学因子；回代模型应能恢复给定的全部校准观测量。

10. 误差与适用界限：题设假定的模型参数、校准范围及独立性为本题有效条件，所述理想读数不意味着实际测量没有偏差。

11. 按人工作业规范，科学性、同构查重与版权尚需专家审查；数值见证仅重复计算物理化学模型。

### 答案表

- inferred_Imax_microamp=10.0000000000 microamp
- inferred_Km_mM=2.00000000000 mmol/L
- predicted_I_at1mM_microamp=3.33333333333 microamp
- predicted_I_at5mM_microamp=7.14285714286 microamp
- half_saturation_concentration_mM=2.00000000000 mmol/L
- sensitivity_at1_microamp_per_mM=2.22222222222 microamp/mM
- low_c_sensitivity_microamp_per_mM=5.00000000000 microamp/mM
- reconstructed_I1_microamp=2.00000000000 microamp
- reconstructed_I2_microamp=5.00000000000 microamp
- saturation_fraction_at5=0.714285714286 fraction

## UC-ADV13-A190 毛细管电泳中电渗流和分析物迁移率的双标记分离

### 题目

一根毛细管全长Ltot=0.5000 m、入口到检测窗Ldet=0.4000 m，施加V=20000 V，电场均匀。中性电渗流标记tEOF=120.0 s；阳离子X迁移时间tX=100.0 s，阴离子Y迁移时间tY=150.0 s。忽略吸附、浓度梯度与热对流，流速v=(μEOF+μep)E，E=V/Ltot；迁移率由到检测窗的时间计算。求电渗流μEOF、两种分析物表观μapp、真实电泳迁移率μep、X/Y表观速度、电渗流速度以及迁移率的方向与相对大小。不能用总毛细管长度代替检测距离计算速度。

### 推导

1. 实验模型、全部已知数值与明确的未知量：一根毛细管全长Ltot=0.5000 m、入口到检测窗Ldet=0.4000 m，施加V=20000 V，电场均匀。中性电渗流标记tEOF=120.0 s；阳离子X迁移时间tX=100.0 s，阴离子Y迁移时间tY=150.0 s。忽略吸附、浓度梯度与热对流，流速v=(μEOF+μep)E，E=V/Ltot；迁移率由到检测窗的时间计算。求电渗流μEOF、两种分析物表观μapp、真实电泳迁移率μep、X/Y表观速度、电渗流速度以及迁移率的方向与相对大小。不能用总毛细管长度代替检测距离计算速度。

2. 推导所用校准或反演方程：μapp=Ldet Ltot/(V t)；μEOF=Ldet Ltot/(V tEOF)；μep=μapp−μEOF。

3. 中性标记没有电泳迁移率，因此其测得的表观迁移率直接给μEOF。

4. 阳离子迁移比EOF更快，电泳迁移率为正；阴离子慢于EOF，电泳迁移率为负。

5. 毛细管检测窗长度用于实际位移Ldet，电场长度为Ltot，两者角色不能互换。

6. 实际数值反演第一组：electric_field_V_m=40000.0000000 V/m；EOF_mobility_m2_Vs=8.33333333333e-8 m2/(V s)；X_apparent_mobility=1.00000000000e-7 m2/(V s)；Y_apparent_mobility=6.66666666667e-8 m2/(V s)。

7. 后续参数与交叉量：X_electrophoretic_mobility=1.66666666667e-8 m2/(V s)；Y_electrophoretic_mobility=-1.66666666667e-8 m2/(V s)；EOF_speed_m_s=0.00333333333333 m/s。

8. 独立验证和最终结果：X_speed_m_s=0.00400000000000 m/s；Y_speed_m_s=0.00266666666667 m/s；X_over_Y_time_ratio=0.666666666667 ratio。

9. 数值单位必须分别处理测量信号、浓度、时间、质荷比与热力学因子；回代模型应能恢复给定的全部校准观测量。

10. 误差与适用界限：题设假定的模型参数、校准范围及独立性为本题有效条件，所述理想读数不意味着实际测量没有偏差。

11. 按人工作业规范，科学性、同构查重与版权尚需专家审查；数值见证仅重复计算物理化学模型。

### 答案表

- electric_field_V_m=40000.0000000 V/m
- EOF_mobility_m2_Vs=8.33333333333e-8 m2/(V s)
- X_apparent_mobility=1.00000000000e-7 m2/(V s)
- Y_apparent_mobility=6.66666666667e-8 m2/(V s)
- X_electrophoretic_mobility=1.66666666667e-8 m2/(V s)
- Y_electrophoretic_mobility=-1.66666666667e-8 m2/(V s)
- EOF_speed_m_s=0.00333333333333 m/s
- X_speed_m_s=0.00400000000000 m/s
- Y_speed_m_s=0.00266666666667 m/s
- X_over_Y_time_ratio=0.666666666667 ratio

## UC-ADV13-A191 高分辨质谱分辨13C与15N质量缺陷等质量异构峰

### 题目

某单电荷离子的两种名义同质异位素替代峰分别由13C替换12C与15N替换14N导致，精确质量差为13C−12C=1.003354835 u、15N−14N=0.997034894 u。假设两个待分离峰的平均质荷比m/z≈200.0000，仪器分辨本领定义R=m/Δm_FWHM。比较Rinst=10000与Rinst=40000时各自半高全宽FWHM，求两个峰差Δm、恰好按FWHM标准分开的最低R、两个仪器的峰距/FWHM与是否满足Δm≥FWHM。只采用FWHM判据，不声称已计算实际高斯峰面积串扰。

### 推导

1. 实验模型、全部已知数值与明确的未知量：某单电荷离子的两种名义同质异位素替代峰分别由13C替换12C与15N替换14N导致，精确质量差为13C−12C=1.003354835 u、15N−14N=0.997034894 u。假设两个待分离峰的平均质荷比m/z≈200.0000，仪器分辨本领定义R=m/Δm_FWHM。比较Rinst=10000与Rinst=40000时各自半高全宽FWHM，求两个峰差Δm、恰好按FWHM标准分开的最低R、两个仪器的峰距/FWHM与是否满足Δm≥FWHM。只采用FWHM判据，不声称已计算实际高斯峰面积串扰。

2. 推导所用校准或反演方程：Δm=1.003354835−0.997034894 u；Rmin≈m/Δm；FWHM=m/Rinst。

3. 先计算同位素质量缺陷差，不能把两者名义质量+1视作无法分离。

4. FWHM是同一质荷比下的仪器谱峰宽度，Δm/FWHM才是无量纲分离判据。

5. 仪器峰型、基线噪声和信噪比未指定，FWHM判据不是完整的检出限结论。

6. 实际数值反演第一组：isobar_delta_mass_u=0.00631994100000 u；required_resolution=31645.8650484 ratio；FWHM_at_R10000_u=0.0200000000000 u；FWHM_at_R40000_u=0.00500000000000 u。

7. 后续参数与交叉量：separation_units_R10000=0.315997050000 ratio；separation_units_R40000=1.26398820000 ratio；R10000_resolvable_indicator=0.00000000000 boolean_0or1。

8. 独立验证和最终结果：R40000_resolvable_indicator=1.00000000000 boolean_0or1；mass_difference_milli_u=6.31994100000 milli_u；resolution_improvement_factor=4.00000000000 ratio。

9. 数值单位必须分别处理测量信号、浓度、时间、质荷比与热力学因子；回代模型应能恢复给定的全部校准观测量。

10. 误差与适用界限：题设假定的模型参数、校准范围及独立性为本题有效条件，所述理想读数不意味着实际测量没有偏差。

11. 按人工作业规范，科学性、同构查重与版权尚需专家审查；数值见证仅重复计算物理化学模型。

### 答案表

- isobar_delta_mass_u=0.00631994100000 u
- required_resolution=31645.8650484 ratio
- FWHM_at_R10000_u=0.0200000000000 u
- FWHM_at_R40000_u=0.00500000000000 u
- separation_units_R10000=0.315997050000 ratio
- separation_units_R40000=1.26398820000 ratio
- R10000_resolvable_indicator=0.00000000000 boolean_0or1
- R40000_resolvable_indicator=1.00000000000 boolean_0or1
- mass_difference_milli_u=6.31994100000 milli_u
- resolution_improvement_factor=4.00000000000 ratio

## UC-ADV13-A192 PFG-NMR扩散排序谱Stejskal–Tanner信号衰减反演

### 题目

298.15 K假想单组分溶液进行PFG–NMR扩散实验，已校准扩散编码参数b=0、1.000×10⁹、2.000×10⁹ s/m²，信号遵守Stejskal–Tanner模型I(b)=I0 exp(−bD)。三组准确峰积分分别为I0=1000.000、I1=449.328964117、I2=201.896517995信号单位（模拟示意输入）；假设无T₂权重变化、对流或化学交换。由I1/I0与I2/I1分别反演扩散系数、估算两个方法的相对差及由水黏度η=0.0008900 Pa·s、kB=1.380649×10⁻²³ J/K计算等效Stokes–Einstein水合半径，检验对数信号与b线性。

### 推导

1. 实验模型、全部已知数值与明确的未知量：298.15 K假想单组分溶液进行PFG–NMR扩散实验，已校准扩散编码参数b=0、1.000×10⁹、2.000×10⁹ s/m²，信号遵守Stejskal–Tanner模型I(b)=I0 exp(−bD)。三组准确峰积分分别为I0=1000.000、I1=449.328964117、I2=201.896517995信号单位（模拟示意输入）；假设无T₂权重变化、对流或化学交换。由I1/I0与I2/I1分别反演扩散系数、估算两个方法的相对差及由水黏度η=0.0008900 Pa·s、kB=1.380649×10⁻²³ J/K计算等效Stokes–Einstein水合半径，检验对数信号与b线性。

2. 推导所用校准或反演方程：D=−ln(I(b)/I0)/b；rH=kBT/(6πηD)，两等间距信号满足I1²≈I0 I2。

3. 把信号强度比取自然对数得到直线lnI=lnI0−bD，斜率为−D。

4. 用两组独立的等b增量计算D可检验数据的单组分模型一致性。

5. 若样品多组分交换或出现对流，lnI对b可能非线性，简单的单指数rH就不具唯一物理意义。

6. 实际数值反演第一组：diffusivity_from_I1_m2_s=8.00000000000e-10 m2/s；diffusivity_from_I2overI1_m2_s=7.99999999998e-10 m2/s；diffusivity_consistency_fraction=-3.36641825527e-12 fraction；hydration_radius_nm=0.306716386930 nm。

7. 后续参数与交叉量：signal_ratio_I1_I0=0.449328964117 ratio；signal_ratio_I2_I0=0.201896517995 ratio；natural_log_first_ratio=-0.800000000000 ratio。

8. 独立验证和最终结果：natural_log_second_ratio=-0.799999999998 ratio；signal_model_second_ratio=0.201896517994 ratio；signal_nonexponential_residual=5.43731726310e-13 ratio。

9. 数值单位必须分别处理测量信号、浓度、时间、质荷比与热力学因子；回代模型应能恢复给定的全部校准观测量。

10. 误差与适用界限：题设假定的模型参数、校准范围及独立性为本题有效条件，所述理想读数不意味着实际测量没有偏差。

11. 按人工作业规范，科学性、同构查重与版权尚需专家审查；数值见证仅重复计算物理化学模型。

### 答案表

- diffusivity_from_I1_m2_s=8.00000000000e-10 m2/s
- diffusivity_from_I2overI1_m2_s=7.99999999998e-10 m2/s
- diffusivity_consistency_fraction=-3.36641825527e-12 fraction
- hydration_radius_nm=0.306716386930 nm
- signal_ratio_I1_I0=0.449328964117 ratio
- signal_ratio_I2_I0=0.201896517995 ratio
- natural_log_first_ratio=-0.800000000000 ratio
- natural_log_second_ratio=-0.799999999998 ratio
- signal_model_second_ratio=0.201896517994 ratio
- signal_nonexponential_residual=5.43731726310e-13 ratio

## UC-ADV13-A193 竞争ELISA四参数Logistic浓度反演与局域敏感度

### 题目

一种竞争ELISA试剂盒在0至无穷浓度范围具有四参数Logistic响应Y(x)=A+(D−A)/[1+(x/C)^B]，其中低吸光度极限A=0.1000 AU，高吸光度极限D=2.000 AU，IC50=C=1.000 nmol/L，Hill指数B=1.400。某样本真实分析物浓度未知，测得吸光度Y=0.1000+1.900/[1+2^1.4]（此为题目完整精确测量值，注意给定式只定义观测值，不在解析中先使用生成浓度）。求样本浓度、相对C的倍数、局域导数dY/dx、逆敏感度dx/dY、仪器独立吸光度标准差uY=0.01000 AU导致的线性传播u(x)，并预测浓度减半后的响应。讨论靠近上下平台时反演不稳定性。

### 推导

1. 实验模型、全部已知数值与明确的未知量：一种竞争ELISA试剂盒在0至无穷浓度范围具有四参数Logistic响应Y(x)=A+(D−A)/[1+(x/C)^B]，其中低吸光度极限A=0.1000 AU，高吸光度极限D=2.000 AU，IC50=C=1.000 nmol/L，Hill指数B=1.400。某样本真实分析物浓度未知，测得吸光度Y=0.1000+1.900/[1+2^1.4]（此为题目完整精确测量值，注意给定式只定义观测值，不在解析中先使用生成浓度）。求样本浓度、相对C的倍数、局域导数dY/dx、逆敏感度dx/dY、仪器独立吸光度标准差uY=0.01000 AU导致的线性传播u(x)，并预测浓度减半后的响应。讨论靠近上下平台时反演不稳定性。

2. 推导所用校准或反演方程：x=C{(D−A)/(Y−A)−1}^{1/B}；dY/dx=−(D−A)B(x/C)^{B−1}/[C(1+(x/C)^B)²]。

3. 观测Y必须严格位于A与D之间，才有唯一正的x；Y向低平台趋近时x趋于无穷。

4. 先通过幂反演求x，再用导数获得局域浓度测量不确定度，不允许用响应高低简单线性换算。

5. 不确定度仅来自给定uY，不包含拟合参数的协方差、基质效应和ELISA批间变异。

6. 实际数值反演第一组：observed_absorbance_AU=0.622119191884 AU；inferred_concentration_nM=2.00000000000 nmol/L；concentration_over_IC50=2.00000000000 ratio；slope_dY_dx_AU_nM=-0.265048742017 AU/nM。

7. 后续参数与交叉量：inverse_sensitivity_nM_AU=-3.77289094975 nM/AU；concentration_uncertainty_nM=0.0377289094975 nmol/L；relative_concentration_uncertainty=0.0188644547488 fraction。

8. 独立验证和最终结果：predicted_absorbance_half_concentration=1.05000000000 AU；Hill_response_fraction=0.274799574676 fraction；distance_above_lower_plateau_AU=0.522119191884 AU。

9. 数值单位必须分别处理测量信号、浓度、时间、质荷比与热力学因子；回代模型应能恢复给定的全部校准观测量。

10. 误差与适用界限：题设假定的模型参数、校准范围及独立性为本题有效条件，所述理想读数不意味着实际测量没有偏差。

11. 按人工作业规范，科学性、同构查重与版权尚需专家审查；数值见证仅重复计算物理化学模型。

### 答案表

- observed_absorbance_AU=0.622119191884 AU
- inferred_concentration_nM=2.00000000000 nmol/L
- concentration_over_IC50=2.00000000000 ratio
- slope_dY_dx_AU_nM=-0.265048742017 AU/nM
- inverse_sensitivity_nM_AU=-3.77289094975 nM/AU
- concentration_uncertainty_nM=0.0377289094975 nmol/L
- relative_concentration_uncertainty=0.0188644547488 fraction
- predicted_absorbance_half_concentration=1.05000000000 AU
- Hill_response_fraction=0.274799574676 fraction
- distance_above_lower_plateau_AU=0.522119191884 AU

## UC-ADV13-A194 双原子光谱Boltzmann发射线强比的等离子体激发温度反演

### 题目

某理想局域热平衡等离子体的两条无自吸收同元素原子发射线波长λ1=500.0 nm、λ2=600.0 nm，两个上能级能量差E2−E1=0.6000 eV；上能级统计简并度g1=3、g2=5，爱因斯坦系数A1=1.000×10⁷、A2=2.000×10⁷ s⁻¹。假定发射线积分强度Ii∝Ni Ai hc/λi，两线有共同系统收集效率。测得I2/I1= [(g2 A2 λ1)/(g1 A1 λ2)] exp[−0.6000 eV/(kB×6000 K)]（精确理想读数，未知T应由测得比值反演），kB=8.617333262145×10⁻⁵ eV/K。求激发温度、能级Boltzmann因子、频率修正的前因子、两能级占据比与若忽略光子能量频率比产生的表观温度偏差。忽略非LTE、自吸收与粒子密度漂移。

### 推导

1. 实验模型、全部已知数值与明确的未知量：某理想局域热平衡等离子体的两条无自吸收同元素原子发射线波长λ1=500.0 nm、λ2=600.0 nm，两个上能级能量差E2−E1=0.6000 eV；上能级统计简并度g1=3、g2=5，爱因斯坦系数A1=1.000×10⁷、A2=2.000×10⁷ s⁻¹。假定发射线积分强度Ii∝Ni Ai hc/λi，两线有共同系统收集效率。测得I2/I1= [(g2 A2 λ1)/(g1 A1 λ2)] exp[−0.6000 eV/(kB×6000 K)]（精确理想读数，未知T应由测得比值反演），kB=8.617333262145×10⁻⁵ eV/K。求激发温度、能级Boltzmann因子、频率修正的前因子、两能级占据比与若忽略光子能量频率比产生的表观温度偏差。忽略非LTE、自吸收与粒子密度漂移。

2. 推导所用校准或反演方程：I2/I1=(g2 A2 λ1)/(g1 A1 λ2) exp(−ΔE/kBT)，T=−ΔE/[kB ln((I2/I1)/prefactor)]。

3. 由于发射光子能量hc/λ，积分强度不能只按上能级数和A系数之比计算，必须包含波长因子λ1/λ2。

4. 反演的对数自变量须是测量比与已知光谱系数前因子的比，且介于0和1之间。

5. 在等离子体非局域热平衡时，Boltzmann温度不等于真实动理学温度，本题不作此推断。

6. 实际数值反演第一组：measured_line_ratio=0.870401600021 ratio；spectroscopic_prefactor=2.77777777778 ratio；Boltzmann_occupation_factor=0.313344576007 ratio；recovered_temperature_K=6000.00000000 K。

7. 后续参数与交叉量：upper_level_population_ratio=0.522240960012 ratio；frequency_ratio_nu2_nu1=0.833333333333 ratio；naive_temperature_no_photon_energy_K=5185.32094391 K。

8. 独立验证和最终结果：naive_temperature_bias_K=-814.679056094 K；ln_Boltzmann_factor=-1.16045181216 ratio；thermal_energy_kBT_eV=0.517039995729 eV。

9. 数值单位必须分别处理测量信号、浓度、时间、质荷比与热力学因子；回代模型应能恢复给定的全部校准观测量。

10. 误差与适用界限：题设假定的模型参数、校准范围及独立性为本题有效条件，所述理想读数不意味着实际测量没有偏差。

11. 按人工作业规范，科学性、同构查重与版权尚需专家审查；数值见证仅重复计算物理化学模型。

### 答案表

- measured_line_ratio=0.870401600021 ratio
- spectroscopic_prefactor=2.77777777778 ratio
- Boltzmann_occupation_factor=0.313344576007 ratio
- recovered_temperature_K=6000.00000000 K
- upper_level_population_ratio=0.522240960012 ratio
- frequency_ratio_nu2_nu1=0.833333333333 ratio
- naive_temperature_no_photon_energy_K=5185.32094391 K
- naive_temperature_bias_K=-814.679056094 K
- ln_Boltzmann_factor=-1.16045181216 ratio
- thermal_energy_kBT_eV=0.517039995729 eV