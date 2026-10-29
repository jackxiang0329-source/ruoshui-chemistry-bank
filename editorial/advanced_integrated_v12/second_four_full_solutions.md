# 第十二辑第二批四道综合题

本卷均为待审草稿，没有取得专家原创性证明或正式发布许可。

## UC-ADV12-I152 AgCl–氨配位溶解平衡的游离配体耗竭与多物料唯一根反演

### 中文题干
在一种理想水溶液中AgCl(s)与总分析氨浓度A_T=0.1000 mol/L平衡，银只以Ag⁺和[Ag(NH₃)₂]⁺存在，所有Cl⁻仅来自AgCl晶体溶解，忽略NH₄⁺和其他配合物。已知AgCl溶度积K_sp=[Ag⁺][Cl⁻]=1.800×10⁻¹⁰ (mol/L)²，二氨合银总生成常数β₂=[[Ag(NH₃)₂]⁺]/([Ag⁺][NH₃]²)=1.600×10⁷ (mol/L)⁻²。建立总银=总氯与总氨两个物料衡算，推导可唯一反演的游离氨一元方程，求游离NH₃、总溶解银、游离Ag⁺、[Ag(NH₃)₂]⁺、Cl⁻及配合分数；比较忽略配位消耗NH₃的近似溶解度误差，并回算溶度积、配位平衡、各物料与电荷守恒，说明酸碱电离等局限。

### 完整逐步解答
1. 假设固体AgCl(s)在含NH₃的均匀理想水溶液中溶解，银只存在Ag⁺和二氨合银(I)配离子[Ag(NH₃)₂]⁺，无其它银配合物与沉淀。

2. 难溶盐的饱和条件[Ag⁺][Cl⁻]=K_sp，题设K_sp=1.800×10⁻¹⁰ (mol/L)²。

3. 配位平衡β₂=[[Ag(NH₃)₂]⁺]/([Ag⁺][NH₃]²)=1.600×10⁷ (mol/L)⁻²；必须区分游离和总氨。

4. 假设初始NH₃总浓度A_T=0.1000 mol/L，没有外来Cl⁻和Ag⁺，由AgCl溶解给出总银浓度s=[Ag⁺]+[Ag(NH₃)₂]⁺=[Cl⁻]。

5. 游离氨浓度f由氨物料衡算A_T=f+2[Ag(NH₃)₂]⁺决定，配合物每分子消耗两个NH₃。

6. 消去游离银：s²=K_sp(1+β₂f²)，配合物浓度c=s β₂f²/(1+β₂f²)，得到唯一标量方程f+2c(f)=A_T。

7. 函数f+2c(f)在f≥0严格增加，f=0时低于A_T，f=A_T时高于A_T，所以唯一正物理解存在于(0,A_T)。

8. 二分法求游离NH₃ f=0.0903072463403 mol/L，总AgCl溶解度s=0.00484641397073 mol/L。

9. 自由Ag⁺浓度=3.71408635513e-8 mol/L，配合态银=0.00484637682987 mol/L；配合态占总银分数0.999992336424。

10. 游离氯离子浓度=[Cl⁻]=0.00484641397073 mol/L，总氨消耗2c=0.00969275365973 mol/L。

11. 如果错误地把游离氨固定为0.1000 mol/L，预测溶解度0.00536657991648 mol/L，比守恒求解值高10.7330068973%。

12. 回代检验K_sp=[Ag⁺][Cl⁻]、β₂配位式、总银s、氨衡算f+2c=A_T，以及[Ag⁺]+[Ag(NH₃)₂]⁺=[Cl⁻]的整体电中性。

13. 本题忽略NH₃/NH₄⁺酸碱电离、活度系数、Ag(NH₃)⁺中间配合物及配位阴离子；在真实实验中应同时解氢离子和电解质活度平衡。

### 主要答案
- free_ammonia_M: 0.0903072463402651 mol/L
- total_dissolved_silver_M: 0.004846413970731 mol/L
- free_Ag_plus_M: 3.7140863551332615e-8 mol/L
- Ag_NH3_2_plus_M: 0.0048463768298674485 mol/L
- free_chloride_M: 0.004846413970731 mol/L
- complexed_silver_fraction: 0.999992336423637 fraction
- bound_ammonia_M: 0.009692753659734897 mol/L
- free_ammonia_from_balance_M: 0.0903072463402651 mol/L
- naive_constant_ammonia_solubility_M: 0.005366579916483123 mol/L
- relative_naive_solubility_error: 0.10733006897338249 ratio
- ionic_product_Ag_Cl_M2: 1.8000000000019216e-10 M2
- complexation_reconstructed_M: 0.0048463768298726215 mol/L
- silver_balance_M: 0.004846413970731 mol/L
- ammonia_balance_M: 0.1 mol/L
- charge_balance_residual_M: 0 mol/L

状态：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

## UC-ADV12-A152 稳定同位素稀释质谱的后加示踪剂、操作空白与回收率联立质量守恒

### 中文题干
一个理想化两稳定同位素元素的IDMS分析中，自然来源元素的重同位素原子分数h_s=0.2500，富集同位素示踪剂的重同位素分数h_p=0.9500。原始样品经历前处理，元素质量回收率为0.8000；提取液的自然同位素组成操作空白元素质量为0.02000 mg（计入提取液），之后才向提取液加入已知示踪元素质量m_p=0.2500 mg，因此示踪剂不受回收率影响。混合后测得重同位素分数h_m=0.6000，假设两同位素原子质量差对质量等比例换算可忽略且无谱学干扰。用同位素质量当量守恒推导自然来源混合质量、扣空白后回收质量、原始样品质量，计算混合物重/轻同位素各自当量和比率，逐项检查同位素、空白、回收率与示踪加入次序，并说明何时本模型失效。

### 完整逐步解答
1. 按理想两稳定同位素元素的同位素稀释质谱(IDMS)问题，规定同位素原子分数h为重同位素占比；自然样品h_s=0.2500、富集示踪同位素h_p=0.9500。

2. 向处理过的样品提取液加入已知元素示踪总质量m_p=0.2500 mg，示踪在样品回收处理之后加入，因而不受前处理回收率损失。

3. 混合物实测重同位素分数h_m=0.6000，规定同位素质量差对质量比转换可忽略，可把各同位素原子数与元素总质量等比例相联系。

4. 假设原样提取液中所有非示踪元素均为自然同位素组成，包含样品真实回收部分m_r及独立化学操作空白m_b=0.02000 mg。

5. 混合物重同位素质量当量守恒：h_m(m_n+m_p)=h_s m_n+h_p m_p，其中m_n=m_r+m_b为自然成分总质量。

6. 移项得到m_n=m_p(h_p−h_m)/(h_m−h_s)，h_s<h_m<h_p且两端不同，反演唯一且两成分均为正。

7. 求m_n=0.250000000000 mg、回收样品部分m_r=m_n−m_b=0.230000000000 mg。

8. 题设前处理回收率r=0.8，原始样品分析元素的质量m_original=m_r/r=0.287500000000 mg。

9. 换算为μg得m_original=287.500000000 μg，不能错误把回收率作用于后加的示踪剂或空白。

10. 混合元素总质量m_n+m_p=0.500000000000 mg，重同位素当量=0.300000000000 mg、轻同位素当量=0.200000000000 mg。

11. 从两同位素质量当量算出重轻比R=heavy/light=1.50000000000，与由h_m/(1−h_m)所得比率相同。

12. 回代验证：样品回收质量与操作空白之和恰为自然同位素成分，混合前后重、轻同位素数均守恒；若实际质量差不可忽略必须用原子量与摩尔数代替质量近似。

13. 真实IDMS还须考虑质谱质量歧视、同位素纯度、同位素交换、示踪加入先后及回收率标定不确定性；若示踪在前处理之前加入并完全平衡，回收率可能在比值中抵消，不能使用本题公式。

### 主要答案
- blend_heavy_isotope_fraction: 0.6000000000000001 fraction
- measured_heavy_light_ratio: 1.5 ratio
- natural_abundance_analyte_in_blend_g: 0.00025 g
- recovered_sample_analyte_mass_g: 0.00023 g
- original_sample_analyte_mass_g: 0.0002875 g
- original_sample_analyte_ug: 287.5 ug
- total_blend_element_mass_g: 0.0005 g
- blend_heavy_isotope_mass_equivalent_g: 0.00030000000000000003 g
- blend_light_isotope_mass_equivalent_g: 0.0002 g
- natural_spike_mass_ratio: 1 ratio
- blank_fraction_of_natural_component: 0.08 fraction
- original_after_recovery_g: 0.00023 g
- blank_mass_balance_residual_g: 0 g
- measured_isotope_ratio: 1.4999999999999998 ratio

状态：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

## UC-ADV12-O149 分子内环化与二分子二聚竞争的Riccati积分、骨架守恒及有效摩尔浓度

### 中文题干
一假想有机双烯底物S在均相催化剂下竞争进行不可逆分子内环化S→P（k₁=0.05000 s⁻¹）和分子间二聚2S→D（k₂=2.000 L/(mol·s)），初始S₀=0.02000 mol/L，P和D均为0。假设无其他产物和溶剂体积变化，因此dS/dt=−k₁S−2k₂S²、dP/dt=k₁S、dD/dt=k₂S²。求严格非线性浓度积分解以及20.00 s时剩余S、环化P、二聚D、已耗骨架和环化选择率，计算瞬时两路径速率、有效摩尔浓度EM=k₁/k₂，以及底物半消耗的唯一时间。按S+P+2D=S₀进行骨架质量审计，特别解释二聚消耗两个分子为何不能使用两伪一级竞争公式。

### 完整逐步解答
1. 假设一种双官能二烯有机分子S在恒定催化剂作用下沿两种不可逆路径反应：分子内环化S→P（速率常数k₁，s⁻¹），和两个S分子相互二聚2S→D（常数k₂，L/(mol·s)）。

2. 二聚反应发生一次消耗两个S骨架而只产生一个D分子，因此动力学方程dS/dt=−k₁S−2k₂S²。

3. 同时有dP/dt=k₁S、dD/dt=k₂S²，初始P=D=0；每个S和P含一个骨架，D含两个骨架。

4. 令b=2k₂S₀/k₁，为无量纲初始二聚竞争参数，分离变量或以1/S代换求解Riccati型基元反应方程。

5. 严格的剩余浓度S(t)=S₀e^(−k₁t)/[1+b(1−e^(−k₁t))]，与简单两条伪一级独立分流不同。

6. 题设S₀=0.02 mol/L、k₁=0.05 s⁻¹、k₂=2 L/(mol·s)，得b=1.60000000000。

7. 在t=20 s时S=0.00365795705300 mol/L，消耗骨架S₀−S=0.0163420429470 mol/L。

8. 对dP/dt=k₁S(t)积分得到P(t)=[k₁/(2k₂)]ln[1+b(1−e^(−k₁t))]，不可以把瞬时选择性当作时间积分选择性。

9. 求环化产物P=0.00873534330277 mol/L；由骨架守恒S+P+2D=S₀反推二聚体D=0.00380334982211 mol/L。

10. 环化在已耗底物骨架中的选择率P/(S₀−S)=0.534531902229，应在0与1之间。

11. 在t=20 s的瞬时环化与二聚生成速率分别0.000182897852650和0.0000267612996032 mol/(L·s)，二聚对应底物骨架消耗率要乘2。

12. 分子内与分子间反应比较的有效摩尔浓度EM=k₁/k₂，单位mol/L，题设EM=0.02500 mol/L；当浓度低于该量级时分子内反应相对有利。

13. 令S(t_half)=S₀/2，解得e^(−k₁t_half)=(1+b)/(2+b)，t_half=6.50844800869 s；剩余S单调递减确保时间唯一。

14. 如二聚机理含中间体、发生交叉聚合、催化剂失活或分子内反应会回转，二阶Riccati模型与简单骨架守恒仍需扩展。

### 主要答案
- nonlinear_competition_parameter: 1.5999999999999999 dimensionless
- remaining_diene_M: 0.003657957053003822 mol/L
- intramolecular_ring_product_M: 0.008735343302772624 mol/L
- intermolecular_dimer_M: 0.0038033498221117764 mol/L
- diene_consumed_M: 0.016342042946996177 mol/L
- cyclized_fraction_of_consumed_skeleton: 0.5345319022294127 fraction
- instantaneous_cyclization_rate_M_s: 0.00018289785265019113 mol/(L s)
- instantaneous_dimer_formation_rate_M_s: 0.000026761299603240813 mol/(L s)
- skeleton_in_products_M: 0.016342042946996177 mol/L
- total_skeleton_balance_M: 0.019999999999999997 mol/L
- effective_molarity_M: 0.025 mol/L
- half_substrate_time_s: 6.50844800869256 s
- target_half_substrate_M: 0.01 mol/L
- ring_to_dimer_molecule_ratio: 2.296749894523876 ratio
- integrated_log_factor: 0.69882746422181 dimensionless

状态：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

## UC-ADV12-P149 Kelvin–Laplace纳米液滴曲率蒸气压、化学势与分子数反演

### 中文题干
两滴理想化球形液态水纳米液滴与水蒸气平衡，半径分别r₁=10.00 nm、r₂=20.00 nm，液体表面张力γ=0.07200 N/m，水的摩尔液体体积V_m=18.00×10⁻⁶ m³/mol，T=298.15 K、平面液体的饱和蒸气压p_sat=3167 Pa、R=8.314462618 J/(mol·K)、N_A=6.02214076×10²³ mol⁻¹。忽略曲率对γ的修正、蒸气非理想性及重力，采用Young–Laplace ΔP=2γ/r和Kelvin关系ln[p(r)/p_sat]=2γV_m/(rRT)。求两个液滴的Laplace压力与摩尔曲率化学势、对应蒸气压与比值；求蒸气压高于平面值10.00%所对应唯一半径，并计算半径10 nm液滴的物质的量与水分子个数。严格核验气液化学势、SI单位、两极端半径和模型适用界限。

### 完整逐步解答
1. 把假想纳米液态水滴近似为球形、各向同性界面，表面张力γ=0.07200 N/m，摩尔液体体积V_m=18.00×10⁻⁶ m³/mol。

2. 球形液滴内外压力差为Young–Laplace形式ΔP=2γ/r，半径越小内部压力越高。

3. 在近似液体不可压缩、蒸气理想及表面张力与半径无关的条件下，化学势差Δμ=V_m ΔP=2γV_m/r。

4. 把化学势差同理想蒸气RT ln[p(r)/p_sat]相等，得到Kelvin方程ln[p(r)/p_sat]=2γV_m/(rRT)。

5. 取T=298.15 K、平面饱和蒸气压p_sat=3167 Pa，研究半径r₁=10.00 nm和r₂=20.00 nm两液滴。

6. Kelvin无量纲指数分别为0.104560102055、0.0522800510274，各大于零，且r越小指数越大。

7. 两个平衡蒸气压分别p₁=3516.07344926、p₂=3336.97536908 Pa，其比值=1.05367078278。

8. Laplace压力差分别为14.4000000000与7.20000000000 MPa，半径加倍使压力差减半。

9. 对应曲率引起的液体摩尔化学势增加分别为259.200000000与129.600000000 J/mol，符号与蒸气压上升一致。

10. 若目标蒸气压为平面饱和蒸气压的1.100倍，则半径r*=2γV_m/[RT ln(1.100)]，正解唯一，因为p(r)随r单调递减。

11. 计算r*=10.9705072710 nm；半径10.00 nm液滴的体积为4πr³/3，所含水分子数N=(4πr³/3V_m)N_A=140141.579041。

12. 检查当r→∞时ΔP、Δμ及ln(p/p_sat)均趋零；有限分子数和强曲率可使宏观常数γ失效，电解质、表面活性剂、蒸发冷却与非球形接触角也需单独建模。

13. 本题仅是热力学平衡曲率效应，不包含两液滴之间由扩散控制的Ostwald熟化时间率；不能从蒸气压差直接得到真实熟化动力学。

### 主要答案
- Kelvin_exponent_10nm: 0.10456010205483533 dimensionless
- Kelvin_exponent_20nm: 0.052280051027417666 dimensionless
- equilibrium_vapor_pressure_10nm_Pa: 3516.0734492632077 Pa
- equilibrium_vapor_pressure_20nm_Pa: 3336.975369075502 Pa
- vapor_pressure_ratio: 1.0536707827835494 ratio
- Laplace_pressure_10nm_MPa: 14.399999999999999 MPa
- Laplace_pressure_20nm_MPa: 7.199999999999999 MPa
- surface_chemical_potential_10nm_J_mol: 259.2 J/mol
- surface_chemical_potential_20nm_J_mol: 129.6 J/mol
- droplet_radius_for_10pct_vapor_increase_nm: 10.970507271049199 nm
- molecules_in_10nm_droplet: 140141.5790407382 molecules
- moles_in_10nm_droplet: 2.3271056693257733e-19 mol
- vapor_pressure_excess_10nm_Pa: 349.07344926320775 Pa
- Laplace_pressure_ratio: 2 ratio
- Kelvin_length_m: 1.0456010205483533e-9 m

状态：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

