# 第十二辑第三十二批 · I173/A173/O169/P169

本批四题均为高阶综合待审稿，尚未完成人工科学性、全部历史模型同构与版权审定；独立数值自动QA不应解读为正式批准。

## UC-ADV12-I173 Sr–K/Ti–Fe共掺钙钛矿的电荷补偿、容忍因子与晶体密度

### 完整题目

设某理想立方ABO₃钙钛矿在空气中形成固定价态的掺杂晶体Sr₁₋ₓKₓTi₁₋ᵧFeᵧO₃₋δ，x=0.1000、y=0.2000。A位Sr²⁺、K⁺；B位Ti⁴⁺、高自旋Fe³⁺；氧为O²⁻，不存在电子空穴、其他缺陷或第二相，氧空位是唯一电荷补偿。每个式量单位有1个A位、1个B位、3个氧位。采用题设的Shannon型有效离子半径（Å）：Sr²⁺(XII配位)=1.440、K⁺(XII)=1.640、Ti⁴⁺(VI)=0.605、Fe³⁺(VI)=0.645、O²⁻=1.400；各晶格占位随机混合，半径按位点比例线性平均。定义Goldschmidt容忍因子t=(rA+rO)/(√2(rB+rO))、八面体因子μ=rB/rO；用B—O硬球接触给理想假设的晶格常数aB=2(rB+rO)，而用A—O接触给aA=√2(rA+rO)，比较两预测的偏差。假设最终选择aB作为近似立方晶胞边长，Z=1，计算理论晶体密度。采用摩尔质量Sr 87.620、K 39.0983、Ti 47.867、Fe 55.845、O 15.999 g/mol，NA=6.02214076×10²³ mol⁻¹。求δ、氧空位占氧位分数、平均两位点半径、各电荷贡献、电中性验证、掺杂前假想满氧化物与缺氧氧化物的摩尔质量差、容忍因子及密度。要求区分氧空位每化学式单位的数目δ与氧位空缺比例δ/3，并说明t≠1时硬球模型与真实结构松弛的局限。

### 详细解答

1. 每个式量单位只有1个Sr/K混合A位、1个Ti/Fe混合B位与3个O位；K⁺替Sr²⁺减少1单位正电、Fe³⁺替Ti⁴⁺也减少1单位正电。

2. 电中性方程2(1−x)+x+4(1−y)+3y−2(3−δ)=0，化简得到2δ=x+y，故δ=(x+y)/2。

3. 计算δ=0.15000000000个氧空位/式量单位，而氧位空缺分数应为δ/3=0.050000000000，二者分母不同。

4. 剩余氧原子数3−δ；缺氧并不会自动增加或减少每个式量单位中A与B的固定晶格位点数。

5. 氧原子数=2.8500000000；K和Fe分别贡献氧空位0.050000000000与0.10000000000个/式量单位。

6. 定义平均A位半径rA=(1−x)rSr+x rK，平均B位半径rB=(1−y)rTi+y rFe，两个不同配位数的有效半径不能混合平均。

7. 得rA=1.4600000000 Å、rB=0.61300000000 Å。

8. 按题设容忍因子与八面体尺寸比的两个公式分别计算，不用未掺杂母体的半径替代掺杂晶体平均半径。

9. 容忍因子t=1.0046325853，八面体因子μ=0.43785714286。

10. 若B–O为理想硬球接触，立方晶胞边长aB=2(rB+rO)；若A–O为硬球接触，aA=√2(rA+rO)。

11. aB=4.0260000000 Å、aA=4.0446507884 Å，两者差值=0.018650788387 Å，相对差0.0046325852924；不能将不一致的两条几何关系同时强制设为精确成立。

12. 化学式量为(1−x)MSr+xMK+(1−y)MTi+yMFe+(3−δ)MO，满氧假想式量额外多δ个O原子。

13. 缺氧摩尔质量=177.82758000 g/mol、假想满氧质量=180.22743000 g/mol，缺氧损失质量=2.3998500000 g/mol。

14. 将aB从Å换成cm（1 Å=10⁻⁸ cm），近似晶胞体积Vcell=(aB×10⁻⁸)³，单位cm³。

15. Vcell=6.5256129576e-23 cm³，假设Z=1，则ρ=M/(NA Vcell)=4.5250866965 g/cm³。

16. A位电荷=1.9000000000、B位电荷=3.8000000000、氧绝对负电荷=5.7000000000，净电荷残差0.0000000000，符合电中性。

17. 真实Sr/K/Fe/Ti钙钛矿可能发生Fe不同价态、非立方畸变、有序占位或固溶度受限；这里的密度、容忍因子仅为明确假设下的硬球模型估计。

### 数值答案及单位

- K_fraction_A_sites: 0.100000000000000 fraction
- Fe_fraction_B_sites: 0.200000000000000 fraction
- mean_A_site_radius_Angstrom: 1.46000000000000 angstrom
- mean_B_site_radius_Angstrom: 0.613000000000000 angstrom
- oxygen_vacancies_per_formula: 0.150000000000000 vacancies/formula
- oxygen_atoms_per_formula: 2.85000000000000 atoms/formula
- oxygen_vacancy_site_fraction: 0.0500000000000000 fraction
- Goldschmidt_tolerance_factor: 1.00463258529236 ratio
- octahedral_size_ratio: 0.437857142857143 ratio
- B_contact_cubic_lattice_Angstrom: 4.02600000000000 angstrom
- A_contact_cubic_lattice_Angstrom: 4.04465078838705 angstrom
- lattice_parameter_difference_Angstrom: 0.0186507883870517 angstrom
- relative_lattice_parameter_discrepancy: 0.00463258529236257 fraction
- deficient_oxide_molar_mass_g_mol: 177.827580000000 g/mol
- hypothetical_fully_oxygenated_molar_mass_g_mol: 180.227430000000 g/mol
- oxygen_deficient_mass_fraction: 0.986684324356176 fraction
- missing_oxygen_mass_g_mol: 2.39985000000000 g/mol
- ideal_density_g_cm3: 4.52508669652367 g/cm3
- unit_cell_volume_cm3: 6.52561295760000e-23 cm3
- A_site_positive_charge_per_formula: 1.90000000000000 charge/formula
- B_site_positive_charge_per_formula: 3.80000000000000 charge/formula
- oxygen_absolute_charge_per_formula: 5.70000000000000 charge/formula
- formal_charge_residual: 0.00000000000000 charge/formula
- K_acceptor_vacancy_contribution_per_formula: 0.0500000000000000 vacancies/formula
- Fe_acceptor_vacancy_contribution_per_formula: 0.100000000000000 vacancies/formula
- Ti_B_site_fraction: 0.800000000000000 fraction
- Fe_B_site_fraction: 0.200000000000000 fraction
- Sr_A_site_fraction: 0.900000000000000 fraction
- total_B_site_occupancy: 0.800000000000000 fraction
- original_oxygen_site_count: 3.00000000000000 sites/formula
- oxygen_mass_loss_fraction_of_full: 0.0133156756438240 fraction
- unit_cell_volume_Angstrom_cubed: 65.2561295760000 angstrom^3

## UC-ADV12-A173 Ca/Mg竞争EDTA双终点返算：掩蔽泄漏、协方差与水硬度

### 完整题目

取某水样V=25.00 mL，用EDTA标准液浓度C=0.01000 mol/L（标准不确定度uC=0.000050 mol/L）分别作两份平行滴定。第一份在充分络合pH条件下EDTA对Ca²⁺和Mg²⁺都为1:1计量，总终点消耗VT=18.400 mL；第二份提高pH使Mg主要以氢氧化物沉淀，Ca²⁺仍全部参与络合，但测定条件独立验证有f=0.005000的Mg摩尔数仍泄漏进入EDTA滴定，第二终点消耗VC=11.600 mL。每份滴定EDTA体积读数独立，标准不确定度uV=0.0500 mL，体积标定与Ca回收视为准确；EDTA浓度C不确定度是两份滴定共用的同一系统分量。各样品只有Ca/Mg这两种贡献水硬度的金属，忽略其它离子、配位体积改变及沉淀后液体体积变化。求Ca和Mg原样物质的量及浓度、金属质量浓度、分别折合CaCO₃的硬度及总硬度；给定摩尔质量Ca 40.078、Mg 24.305、CaCO₃ 100.0869 g/mol。使用两个终点的联立方程计入f，推导Ca/Mg浓度对C、VT、VC的灵敏度与两浓度的协方差、相关系数及各自标准不确定度。计算总硬度标准不确定度时必须保留共用C与共享总终点测量引起的相关性，不能把两个独立算出的金属浓度误当独立。

### 详细解答

1. 总终点的金属物质的量nT=nCa+nMg=C VT，选择性终点则nCa+f nMg=C VC。

2. 第二份的f=0.005是实际进入滴定的Mg摩尔分率；它是已知掩蔽泄漏，而非把所有Mg从第二份测量中完全删除。

3. 将两方程相减，nMg=C(VT−VC)/(1−f)，再回代nCa=C(VC−f VT)/(1−f)。

4. 总量=0.00018400000000 mol；nCa=0.00011565829146 mol，nMg=0.000068341708543 mol。

5. 两份水样体积都是25.00 mL，只有在将体积转换为L后才能把n/V得到mol/L的原样浓度。

6. cCa=0.0046263316583 mol/L、cMg=0.0027336683417 mol/L，Ca/Mg摩尔比=1.6923529412。

7. 换算质量浓度：cmetal×摩尔质量(g/mol)×1000 mg/g，硬度CaCO₃当量把每mol二价金属对应1 mol CaCO₃。

8. Ca质量浓度=185.41412020 mg/L、Mg=66.441809045 mg/L；总硬度=736.63958400 mg/L CaCO₃。

9. 分别由两种金属贡献的CaCO₃当量硬度为463.03519405和273.60438995 mg/L。

10. 设样品体积V精确，令k=1/[V(1−f)]，则cCa=C k(VC−f VT)，cMg=C k(VT−VC)。

11. 对共享C和独立VT、VC微分，Ca灵敏度依次∂cCa/∂C=cCa/C，∂cCa/∂VT=−fCk，∂cCa/∂VC=Ck。

12. Mg灵敏度依次∂cMg/∂C=cMg/C，∂cMg/∂VT=Ck，∂cMg/∂VC=−Ck；所有体积不确定度需以L代入。

13. 按独立源C、VT、VC各自平方传播，u²(cCa)=(cCa uC/C)²+(fCk uVT)²+(Ck uVC)²；Mg类似。

14. 所得u(cCa)=0.000030644965611 M、u(cMg)=0.000031541781300 M，相对不确定度0.0066240312790和0.011538261909。

15. 协方差是三个共同测量源的偏导乘积之和，cov(cCa,cMg)=(cCa cMg/C²)uC²−f(Ck)²uVT²−(Ck)²uVC²。

16. 计算协方差=-8.9878942451e-11 M²、相关系数=-0.092984936581，为负说明终点反演的浓度误差存在反相关。

17. 总硬度仅依赖nT=C VT，由此直接传播uHard=[1000 M(CaCO₃)] sqrt[(VT uC/V)²+(C uVT/V)²]。

18. 总硬度标准不确定度=4.1920045251 mg/L CaCO₃；若无视相关性直接合并两个硬度标准差会出错。

19. 核对两个终点物料平衡残差严格为0，同时cCa+cMg=C VT/V；f>0使忽略泄漏得到的表观Ca含量偏高。

20. 本题对配位反应计量采用可定量的条件；真实EDTA滴定还需验证pH缓冲、金属共存干扰、指示剂终点系统误差和残余沉淀的Ca夹带。

### 数值答案及单位

- EDTA_titrant_concentration_M: 0.0100000000000000 mol/L
- total_endpoint_volume_mL: 18.4000000000000 mL
- Ca_selective_endpoint_volume_mL: 11.6000000000000 mL
- magnesium_masking_leakage_fraction: 0.00500000000000000 fraction
- total_metal_amount_mol: 0.000184000000000000 mol
- calcium_amount_mol: 0.000115658291457286 mol
- magnesium_amount_mol: 0.0000683417085427136 mol
- calcium_concentration_M: 0.00462633165829146 mol/L
- magnesium_concentration_M: 0.00273366834170854 mol/L
- calcium_to_magnesium_mole_ratio: 1.69235294117647 ratio
- calcium_mass_concentration_mg_L: 185.414120201005 mg/L
- magnesium_mass_concentration_mg_L: 66.4418090452262 mg/L
- total_hardness_as_CaCO3_mg_L: 736.639584000000 mg/L CaCO3
- calcium_hardness_as_CaCO3_mg_L: 463.035194050251 mg/L CaCO3
- magnesium_hardness_as_CaCO3_mg_L: 273.604389949749 mg/L CaCO3
- calcium_concentration_standard_uncertainty_M: 0.0000306449656114234 mol/L
- magnesium_concentration_standard_uncertainty_M: 0.0000315417812999928 mol/L
- calcium_relative_standard_uncertainty: 0.00662403127897251 fraction
- magnesium_relative_standard_uncertainty: 0.0115382619093724 fraction
- Ca_Mg_concentration_covariance_M2: -8.98789424509481e-11 mol2/L2
- Ca_Mg_concentration_correlation: -0.0929849365813076 ratio
- total_hardness_standard_uncertainty_mg_L: 4.19200452510924 mg/L CaCO3
- total_endpoint_mass_balance_residual_mol: 0.00000000000000 mol
- selective_endpoint_mass_balance_residual_mol: 0.00000000000000 mol
- total_metal_concentration_M: 0.00736000000000000 mol/L
- sum_recovered_concentrations_M: 0.00736000000000000 mol/L
- total_hardness_in_mmol_per_L: 7.36000000000000 mmol/L
- selective_apparent_Ca_fraction_bias_ratio: 1.00295446645812 ratio
- Mg_mole_fraction: 0.371422329036487 fraction
- aliquot_volume_L: 0.0250000000000000 L
- titrant_volume_difference_L: 0.00680000000000000 L
- mean_metal_concentration_M: 0.00368000000000000 mol/L

## UC-ADV12-O169 烯胺催化双底物占位与高底物浓度抑制：速率最大值反演

### 完整题目

某理想小分子有机催化剂E与反应底物S发生快速可逆结合E+S⇌ES（解离常数Kd1=0.02000 mol/L），其活性配合物ES通过产物形成步骤ES→E+P催化转化，催化速率常数kcat=0.8000 s⁻¹；但ES还可继续可逆结合第二个S形成非活性ESS，ES+S⇌ESS（解离常数Kd2=0.1000 mol/L），ESS不形成P。催化剂总浓度Etotal=0.001000 mol/L，假设配位结合相对催化转化足够快可用即时平衡占位，底物浓度由大储库维持恒定，考察S分别为0.02000、0.1000、0.5000 mol/L的初始稳态速率；不考虑产物抑制、催化剂失活和其他配合物。推导E、ES、ESS随自由[S]的占比及v=kcat[ES]；求这三种浓度下的催化剂各物种浓度、产物形成初速、有效周转频率，证明当[S]=sqrt(Kd1·Kd2)时初速达到唯一峰值，求最优浓度、最大速率与最优活性占比。解释为何过量底物会抑制，而不是传统无限饱和的Michaelis–Menten曲线，并核验催化剂总量守恒和ES/ESS的质量作用比。

### 详细解答

1. 明确本题是快速结合平衡加慢催化步骤的初始速率模型：底物浓度由储库固定，E、ES、ESS三态相互转换，但只有ES转化生成产物。

2. 由解离常数Kd1=[E][S]/[ES]和Kd2=[ES][S]/[ESS]，可得[ES]=[E] S/Kd1、[ESS]=[E] S²/(Kd1 Kd2)。

3. 将催化剂守恒Etotal=[E]+[ES]+[ESS]联立，得到共同分母D=Kd1+S+S²/Kd2。

4. 因此[E]=Etotal Kd1/D、[ES]=Etotal S/D、[ESS]=Etotal S²/(Kd2 D)；三个浓度非负、相加等于Etotal。

5. 初始产率v(S)=kcat Etotal S/(Kd1+S+S²/Kd2)，其单位mol/(L s)，并不是简单地把所有底物占位都当作有活性。

6. 在S=0.02000 M，计算[ES]=0.00045454545455 M、[ESS]=0.000090909090909 M、[E]=0.00045454545455 M，初速=0.00036363636364 M/s。

7. 在S=0.1000 M，计算[ES]=0.00045454545455 M、[ESS]=0.00045454545455 M、[E]=0.000090909090909 M，初速=0.00036363636364 M/s。

8. 在S=0.5000 M，计算[ES]=0.00016556291391 M、[ESS]=0.00082781456954 M、[E]=0.0000066225165563 M，初速=0.00013245033113 M/s。

9. 分别检查三条件下E、ES、ESS的总量严格回到0.001000 M，并且ESS/ES=S/Kd2；这两个条件组成配位占位的独立物料与质量作用核验。

10. 对v(S)求导，dv/dS正负由Kd1−S²/Kd2决定，其零点S*=sqrt(Kd1 Kd2)。

11. 由于在S>0时导数先正后负，因此S*是唯一全局峰值；S趋0时v→0，S趋无穷时v∼kcat Etotal Kd2/S→0。

12. 最优S*=0.044721359550 M，最大速率=0.00042229123600 M/s。

13. 最优分布[E]=0.00023606797750、[ES]=0.00052786404500、[ESS]=0.00023606797750 M；最优时[ES]占催化剂分数0.52786404500。

14. 按v/Etotal定义有效周转频率，最优为0.42229123600 s⁻¹，低于内禀kcat=0.80000000000 s⁻¹。

15. 中高两条件下，S=0.5000 M时失活ESS比例=0.82781456954，远超过S=0.1000 M时的0.45454545455。

16. 高底物浓度0.5000 M相对于0.1000 M的产率比=0.36423841060，证明浓度过高反而抑制催化。

17. 经典Michaelis–Menten单占位只有E+S⇌ES，不包含第二个S形成非生产性ESS；因此本模型的钟形曲线不能直接套用MM饱和极限。

18. 真实烯胺催化可能具有胺缩合、底物竞争、立体选择性和溶剂效应；本题只把两个快速平衡与一个慢步骤定义为可精确求解的假想机制。

### 数值答案及单位

- first_binding_Kd_M: 0.0200000000000000 mol/L
- second_binding_Kd_M: 0.100000000000000 mol/L
- total_catalyst_M: 0.00100000000000000 mol/L
- product_formation_kcat_s: 0.800000000000000 s^-1
- optimal_substrate_M: 0.0447213595499958 mol/L
- maximum_initial_rate_M_per_s: 0.000422291236000337 mol/(L s)
- productive_ES_at_optimum_M: 0.000527864045000421 mol/L
- inactive_ESS_at_optimum_M: 0.000236067977499790 mol/L
- free_catalyst_at_optimum_M: 0.000236067977499790 mol/L
- initial_rate_at_S0p02_M_per_s: 0.000363636363636364 mol/(L s)
- initial_rate_at_S0p10_M_per_s: 0.000363636363636364 mol/(L s)
- initial_rate_at_S0p50_M_per_s: 0.000132450331125828 mol/(L s)
- ES_at_S0p02_M: 0.000454545454545455 mol/L
- ES_at_S0p10_M: 0.000454545454545454 mol/L
- ES_at_S0p50_M: 0.000165562913907285 mol/L
- ESS_at_S0p02_M: 0.0000909090909090909 mol/L
- ESS_at_S0p10_M: 0.000454545454545454 mol/L
- ESS_at_S0p50_M: 0.000827814569536424 mol/L
- free_E_at_S0p02_M: 0.000454545454545455 mol/L
- free_E_at_S0p10_M: 0.0000909090909090909 mol/L
- free_E_at_S0p50_M: 0.00000662251655629139 mol/L
- catalyst_inventory_S0p02_M: 0.00100000000000000 mol/L
- catalyst_inventory_S0p10_M: 0.00100000000000000 mol/L
- catalyst_inventory_S0p50_M: 0.00100000000000000 mol/L
- inactive_fraction_S0p50: 0.827814569536424 fraction
- inactive_fraction_S0p10: 0.454545454545454 fraction
- productive_fraction_S0p02: 0.454545454545455 fraction
- productive_fraction_S0p10: 0.454545454545454 fraction
- productive_fraction_S0p50: 0.165562913907285 fraction
- optimal_turnover_frequency_s: 0.422291236000337 s^-1
- high_to_middle_rate_ratio: 0.364238410596027 ratio
- maximum_productive_fraction: 0.527864045000421 fraction
- optimum_binding_denominator_M: 0.0847213595499958 mol/L

## UC-ADV12-P169 经典均相成核的临界半径、势垒与蒸气过饱和比指数效应

### 完整题目

在298.15 K，某假想蒸气以均一球形液滴成核，蒸气过饱和比S=p/p_eq分别取2.200与3.000，假设理想气相、不可压液相，液相摩尔体积Vm=18.00×10⁻⁶ m³/mol，球面张力γ=0.05000 J/m²与半径、S无关。忽略异相成核、曲率依赖表面张力与动力学前因子的随温度变化。经典毛细模型下形成半径r液滴的可逆功ΔG(r)=4πr²γ−(4πr³/3)(RT lnS/Vm)，其中R=8.314462618 J/(mol K)、kB=1.380649×10⁻²³ J/K、NA=6.02214076×10²³ mol⁻¹。每个临界液滴所含平均分子数n*=4πr*³ NA/(3 Vm)。假设定常成核率J(S)=J0 exp[−ΔG*/(kBT)]，J0=1.000×10³⁵ m⁻³ s⁻¹。推导临界半径和自由能势垒解析式，求两过饱和比下的r*、n*、ΔG*/(kBT)、成核率及二者比，分别核验临界点处表面项、体积项、总势垒的代数关系；计算半径为2r*时的ΔG以说明超过临界点后自由能下降。讨论临界核只有几十至百个分子时连续介质近似的可疑性，不得把CNT成核率当成真实实验必然值。

### 详细解答

1. 经典球形液滴成核自由能包括新建界面需付的正表面能4πr²γ及释放的体相化学势驱动力−(4π/3)r³ Δμ/Vm。

2. 理想蒸气过饱和比S>1产生每mol驱动力Δμ=RT lnS>0，所以体积项随r³降低成核功。

3. 对ΔG(r)求导得到8πrγ−4πr² Δμ/Vm，非零驻点为r*=2γVm/(RT lnS)。

4. 在r*处二阶导数d²ΔG/dr²=8πγ−8πr*Δμ/Vm=−8πγ<0，故是势垒顶点而非自由能极小。

5. 将r*代入得到ΔG*=16πγ³Vm²/[3(RT lnS)²]，且表面能U_surf(r*)=3ΔG*、体相降低量|U_bulk(r*)|=2ΔG*。

6. 在S=2.2000000000时驱动力Δμ=1954.5519160 J/mol，S=3.0000000000时Δμ=2723.4126558 J/mol。

7. 相应临界半径r*=0.92092718811 nm、0.66093546132 nm；过饱和比增大，临界半径减小。

8. 计算临界液滴分子数n*=109.45683610、40.461703937，采用液体摩尔体积与NA转换，不能把Vm直接当单分子体积。

9. 两势垒分别为1.7762709079e-19 J、9.1490651719e-20 J，即43.151024030 kBT及22.225862582 kBT。

10. 题设的J0有m⁻³s⁻¹量纲，J=J0 exp(−ΔG*/kBT)，指数必须无量纲。

11. 计算J低=1.8186468520e+16 m⁻³s⁻¹、J高=2.2255149956e+25 m⁻³s⁻¹，比值J高/J低=1223720258.4。

12. 低过饱和比时临界核表面能=5.3288127238e-19 J、体相绝对项=3.5525418159e-19 J，其差回到势垒1.7762709079e-19 J。

13. 高过饱和比时对应表面=2.7447195516e-19 J、体相绝对项=1.8298130344e-19 J，差回到势垒9.1490651719e-20 J。

14. 把r=2r*代回ΔG，表面项放大4倍而体积项放大8倍，因此ΔG(2r*)=4×3ΔG*−8×2ΔG*=−4ΔG*。

15. 所得ΔG(2r*)依次-7.1050836317e-19、-3.6596260688e-19 J，表明超过临界核后增大液滴可以自发降低模型自由能。

16. 小尺度下球形/常γ/连续液体密度/定常前因子等假设可能失效；只用CNT结果不能预测真实实验材料的绝对成核率。

### 数值答案及单位

- temperature_K: 298.150000000000 K
- surface_tension_J_m2: 0.0500000000000000 J/m2
- liquid_molar_volume_m3_mol: 0.0000180000000000000 m3/mol
- kinetic_prefactor_mMinus3_sMinus1: 1.00000000000000e+35 m^-3 s^-1
- supersaturation_low: 2.20000000000000 ratio
- supersaturation_high: 3.00000000000000 ratio
- driving_mu_low_J_mol: 1954.55191598073 J/mol
- driving_mu_high_J_mol: 2723.41265575119 J/mol
- critical_radius_low_nm: 0.920927188110438 nm
- critical_radius_high_nm: 0.660935461322337 nm
- critical_radius_ratio_low_over_high: 1.39336931062518 ratio
- critical_barrier_low_J: 1.77627090792755e-19 J
- critical_barrier_high_J: 9.14906517190072e-20 J
- barrier_low_over_kBT: 43.1510240302490 ratio
- barrier_high_over_kBT: 22.2258625823930 ratio
- critical_cluster_molecules_low: 109.456836096015 molecules
- critical_cluster_molecules_high: 40.4617039369692 molecules
- rate_low_mMinus3_sMinus1: 1.81864685197360e+16 m^-3 s^-1
- rate_high_mMinus3_sMinus1: 2.22551499563360e+25 m^-3 s^-1
- rate_ratio_high_over_low: 1223720258.39896 ratio
- critical_surface_energy_low_J: 5.32881272378266e-19 J
- critical_bulk_energy_abs_low_J: 3.55254181585511e-19 J
- critical_surface_energy_high_J: 2.74471955157022e-19 J
- critical_bulk_energy_abs_high_J: 1.82981303438014e-19 J
- barrier_low_surface_minus_bulk_J: 1.77627090792755e-19 J
- barrier_high_surface_minus_bulk_J: 9.14906517190072e-20 J
- bulk_free_energy_density_low_J_m3: 108586217.554485 J/m3
- bulk_free_energy_density_high_J_m3: 151300703.097288 J/m3
- log_rate_low: 37.4394542245426 ln(m^-3 s^-1)
- log_rate_high: 58.3646156723986 ln(m^-3 s^-1)
- DeltaG_at_two_critical_radii_low_J: -7.10508363171022e-19 J
- DeltaG_at_two_critical_radii_high_J: -3.65962606876029e-19 J
- one_nm_over_critical_radius_low: 1.08586217554485 ratio
