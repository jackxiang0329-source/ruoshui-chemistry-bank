# 第十二辑第三十三批 · I174/A174/O170/P170

本批新增4道高阶综合待审题，按四科各一道录入题干与逐步严谨解答；所有题均为awaiting_expert_review，跨辑同构尚未完成专家比对，机器核验只证明特定模型与答案数值一致。

## UC-ADV12-I174 氧离子导体固体氧浓差电池的Nernst电势、负载功率与法拉第输运

### 题目

在T=900.0 K，将一片理想钇稳定氧化锆（YSZ）只允许O²⁻离子传导的致密电解质用于固体氧浓差电池，两侧氧气均为理想气体；高氧压参考侧p_ref=0.2100 bar，低氧压样品侧p_s=0.001000 bar。电极可逆、表面交换无限快，唯一电池内损是电解质的欧姆电阻；电解质厚度d=0.5000 mm，截面积A=1.000 cm²，离子电导率σ=0.1000 S/m、温度浓度均匀。四电子O₂+4e⁻⇌2O²⁻，氧气沿电化学势驱动方向跨膜，每输运1 mol O₂对应4F电量。电池外接R_L=200.0 Ω纯电阻，F=96485.33212 C/mol，R=8.314462618 J/(mol K)，氧气摩尔质量32.000 g/mol。求理想开路Nernst电动势E、内阻、接负载电流、端电压、负载功率、内损与氧气输运摩尔率和每小时的氧气质量；验证ΔG_O2=RTln(p_ref/p_s)=4FE，功率守恒P_load+P_internal=I E。说明从电池的正向净传输中高氧压侧氧气化学势降低，真实传感器还需考虑极化和浓差改变，不能把负载端电压直接当作开路氧传感读数。

### 严格分步解答

1. 氧离子固体电解质载流子为O²⁻，两侧氧气平衡半电池涉及O₂和四个电子，因此浓差电池可逆电压的分母必须是4F，而非2F。

2. 两侧高氧压参考侧和低氧压样品侧所对应的化学势差为Δμ_O2=RTln(p_ref/p_s)>0，是每mol O₂的转移自由能驱动力。

3. 在900 K下p_ref/p_s=210.00000000，自然对数=5.3471075307，开路电动势E=(RT/4F)ln(p_ref/p_s)=0.10367506706 V。

4. 电解质电阻满足R_i=d/(σA)，先将厚度0.5000 mm转换为0.0005000 m、面积1.000 cm²转换为1.000×10⁻⁴ m²。

5. 内阻=50.000000000 Ω；外接负载200.00000000 Ω，负载与内阻串联。

6. 忽略电极过电势，电池电流I=E/(Ri+RL)，外端电压V=I RL；不可把开路电压E误作为负载后的端电压。

7. 电流I=0.00041470026823 A，即0.41470026823 mA；端电压V=0.082940053647 V。

8. 利用I=E/(Ri+RL)计算外负载输出功率P=I²RL，内欧姆损耗P_int=I²Ri，二者之和应等于I E。

9. 负载功率=0.000034395262495 W、内耗=0.0000085988156236 W，两者总和=0.000042994078118 W，电化学供电率I E=0.000042994078118 W。

10. 氧气净输运以每mol氧气四电子计量，因此n_dot(O₂)=I/(4F)，这不等于每电子对应一分子氧气。

11. 每秒输运1.0745163517e-9 mol O₂、每小时0.0000038682588660 mol O₂，质量输运=0.12378428371 mg/h。

12. 能量单位转换核查：Δμ_O2=40012.493111 J/mol，4 F E/Δμ=1.0000000000，验证Nernst电压与化学能一致。

13. 负载电压利用率V/E=0.80000000000，相应内阻分压比例=0.20000000000。

14. 开路电动势除以厚度给207.35013412 V/m，仅是电动势对长度的形式归一，不能在存在电极双电层时当作严格局部均匀电场。

15. 本题将YSZ离子电导率视为常数，排除了氧离子迁移数不为1、接触电阻、反应极化和氧气流量变化导致的两侧实际pO₂改变。

16. 真实器件的实测信号若接有有限负载，需要扣除内部压降，再与热电偶测得的温度共同用于氧压反算。

### 机器可核验全部数值答案

- temperature_K: 900.000000000000 K
- reference_oxygen_pressure_bar: 0.210000000000000 bar
- sample_oxygen_pressure_bar: 0.00100000000000000 bar
- oxide_ionic_conductivity_S_m: 0.100000000000000 S/m
- electrolyte_thickness_m: 0.000500000000000000 m
- electrode_area_m2: 0.000100000000000000 m2
- external_load_ohm: 200.000000000000 ohm
- internal_ionic_resistance_ohm: 50.0000000000000 ohm
- Nernst_open_circuit_emf_V: 0.103675067058263 V
- Nernst_open_circuit_emf_mV: 103.675067058263 mV
- loaded_current_A: 0.000414700268233051 A
- loaded_current_mA: 0.414700268233051 mA
- terminal_voltage_V: 0.0829400536466102 V
- voltage_utilization_ratio: 0.800000000000000 ratio
- load_power_W: 0.0000343952624945129 W
- electrolyte_ohmic_loss_W: 0.00000859881562362822 W
- total_dissipated_power_W: 0.0000429940781181411 W
- electrochemical_power_input_W: 0.0000429940781181411 W
- oxygen_transport_mol_per_second: 1.07451635165976e-9 mol/s
- oxygen_transport_mol_per_hour: 0.00000386825886597514 mol/h
- oxygen_transport_mass_mg_per_hour: 0.123784283711204 mg/h
- oxygen_chemical_potential_difference_J_mol: 40012.4931107190 J/mol
- Faraday_Nernst_identity_ratio: 1.00000000000000 ratio
- current_density_A_m2: 4.14700268233051 A/m2
- open_circuit_field_V_m: 207.350134116526 V/m
- current_via_load_A: 0.000414700268233051 A
- internal_voltage_drop_V: 0.0207350134116526 V
- internal_drop_from_current_V: 0.0207350134116525 V
- internal_fraction: 0.200000000000000 fraction
- thermal_Nernst_prefactor_V: 0.0193889998401345 V
- log_pressure_ratio: 5.34710753071747 ratio
- terminal_plus_internal_drop_V: 0.103675067058263 V

## UC-ADV12-A174 等温滴定量热双点反演结合常数与放热焓：配体耗尽和协方差

### 题目

在298.15 K，某理想等温滴定量热(ITC)实验采用三份体积均为V=1.000 mL的平行受体样品，受体总浓度M_T=0.001000 mol/L。单一受体M与配体L形成一比一复合物ML，解离常数K_d=[M_free][L_free]/[ML]，反应结合焓ΔH_bind（每mol ML）假定与结合程度无关。三份样品的已校正配体总浓度L_T分别为0.0004000、0.001500、0.003000 mol/L，初始均无ML。完成平衡后观察的积分结合热分别为Q₁=−11.2843666167989 mJ、Q₂=−28.8706800674989 mJ、Q₃=−35.0490431885720 mJ（按给定模型产生的精确模拟值；实测保留小数末位误差可忽略）。仪器对任一积分热的标准不确定度uQ=0.05000 mJ，各独立；受体总量、配体总量和体积视作精确。不得预先假定K_d或ΔH。由二次配体耗尽方程求各组的ML浓度；仅利用Q₁、Q₂比值反演K_d，再求ΔH，第三个热Q₃用于独立预测验证。对前两次热测量进行一阶Jacobian不确定度传播，求K_d、ΔH的标准不确定度，注意同一Q₁出现在比值和焓反演中而导致相关性。检验结合总量不超过受体或配体总量、各游离浓度非负、反应热符号与热量单位的一致性。

### 严格分步解答

1. 反应只有M+L⇌ML，令x=[ML]，由物料平衡[M_free]=M_T−x、[L_free]=L_T−x；定义K_d=(M_T−x)(L_T−x)/x。

2. 整理得x²−(M_T+L_T+K_d)x+M_TL_T=0；应选择0<x<min(M_T,L_T)的小根而不是非物理大根。

3. 为避免相近数相减，稳定计算x=2M_TL_T/[M_T+L_T+K_d+sqrt((M_T+L_T+K_d)²−4M_TL_T)]。

4. 每份样品体积V相同，积分结合热Q=ΔH_bind V x；x用mol/L、V用L，所以Q以J计。

5. 三份读数Q₁=-11.284366617、Q₂=-28.870680067、Q₃=-35.049043189 mJ，均为放热负值。

6. 取热量比r=Q₂/Q₁=x₂(K_d)/x₁(K_d)，未知结合焓和体积同时被约去，可以先求唯一的K_d。

7. 对于题设L_T1<L_T2、受体总量固定，结合比例比值随K_d增加单调上升；通过正值保界二分查找r的根。

8. 实验热量比r=2.5584670410，反演得到K_d=0.00030000000000 mol/L。

9. 利用二次耗尽根计算三个配合物浓度依次0.00028210916542、0.00072176700169、0.00087622607971 mol/L。

10. 对应三份受体占位比例0.28210916542、0.72176700169、0.87622607971；各自游离配体浓度L_T−x非负。

11. 用第一组热量及ML量计算ΔH_bind=Q₁/(V x₁)=-40000.000000 J/mol，负号对应放热。

12. 把反演K_d和ΔH代入第三份样品，预测Q₃=-35.049043189 mJ，与独立实测的差记为0.0000000000 mJ。

13. 对隐式结合平衡求导dx_j/dK_d=−x_j/(M_T+L_Tj+K_d−2x_j)，以r(K_d)=x₂/x₁构造dr/dK_d。

14. 计算dr/dK_d=366.47769864 M⁻¹，因此dK_d/dr=0.0027286789994 M，确定测量比值误差放大的灵敏度。

15. 两个热读数独立但它们共享用于参数反演的Q₁。对r=Q₂/Q₁，u_r²=(uQ/Q₁)²+(Q₂uQ/Q₁²)²。

16. 热量比标准不确定度u_r=0.012171500651，反演u(K_d)=0.000033212118218 mol/L、相对误差=0.11070706073。

17. 结合焓H=Q₁/[V x₁(K_d(r))]，对Q₁和Q₂求全偏导，既含Q₁直接项，又包含K_d间接影响项。独立Q误差分别乘自己的全偏导求平方和。

18. 给定两热全偏导-18243416.255、8516093.0325，传播得到u(ΔH)=1006.6604159 J/mol，相对值=0.025166510398。

19. 真实ITC测定常需校正稀释热、滴定热容、配体活度与注射稀释体积，三份平行点仅足以在本理想化模型中实现参数和内部验证。

### 机器可核验全部数值答案

- receptor_total_concentration_M: 0.00100000000000000 mol/L
- aliquot_volume_L: 0.00100000000000000 L
- ligand_total_L1_M: 0.000400000000000000 mol/L
- ligand_total_L2_M: 0.00150000000000000 mol/L
- ligand_total_L3_M: 0.00300000000000000 mol/L
- observed_heat_Q1_mJ: -11.2843666167989 mJ
- observed_heat_Q2_mJ: -28.8706800674989 mJ
- observed_heat_Q3_mJ: -35.0490431885720 mJ
- measured_heat_ratio_Q2_Q1: 2.55846704098744 ratio
- inferred_binding_Kd_M: 0.000300000000000001 mol/L
- inferred_binding_enthalpy_J_mol: -40000.0000000000 J/mol
- complex_concentration_L1_M: 0.000282109165419972 mol/L
- complex_concentration_L2_M: 0.000721767001687473 mol/L
- complex_concentration_L3_M: 0.000876226079714300 mol/L
- receptor_binding_fraction_L1: 0.282109165419972 fraction
- receptor_binding_fraction_L2: 0.721767001687473 fraction
- receptor_binding_fraction_L3: 0.876226079714300 fraction
- predicted_heat_Q3_mJ: -35.0490431885720 mJ
- third_heat_prediction_residual_mJ: 0.00000000000000 mJ
- heat_standard_uncertainty_mJ: 0.0500000000000000 mJ
- heat_ratio_standard_uncertainty: 0.0121715006512086 ratio
- Kd_standard_uncertainty_M: 0.0000332121182175403 mol/L
- Kd_relative_standard_uncertainty: 0.110707060725134 fraction
- binding_enthalpy_standard_uncertainty_J_mol: 1006.66041593373 J/mol
- enthalpy_relative_standard_uncertainty: 0.0251665103983433 fraction
- heat_ratio_derivative_per_M: 366.477698636532 M^-1
- Kd_derivative_per_heat_ratio_M: 0.00272867899935103 M
- enthalpy_partial_derivative_Q1: -18243416.2553009 J/(mol J)
- enthalpy_partial_derivative_Q2: 8516093.03254570 J/(mol J)
- free_receptor_L1_M: 0.000717890834580028 mol/L
- free_ligand_L1_M: 0.000117890834580028 mol/L
- Kd_reconstructed_from_L1_complex_M: 0.000300000000000001 mol/L
- complex_concentration_ratio_L2_L1: 2.55846704098744 ratio
- bound_fraction_L1_independent: 0.282109165419972 fraction
- free_receptor_L3_M: 0.000123773920285700 mol/L
- free_ligand_L3_M: 0.00212377392028570 mol/L

## UC-ADV12-O170 双官能单体分子内环化与二聚的竞争：Riccati精确解和终态分支

### 题目

某假想线性双官能有机单体M在固定溶剂、温度与惰性条件下发生不可逆竞争：每一个M以一级速率k_c=0.02500 s⁻¹分子内环化成单体环C；两个M以二级速率k_d=3.000 L/(mol s)发生分子间二聚形成非环二聚体D，且该反应按d[D]/dt=k_d[M]²计。C、D稳定且不会继续聚合或相互转化，不存在分解和环间交换。于是d[M]/dt=−k_c[M]−2k_d[M]²，d[C]/dt=k_c[M]，d[D]/dt=k_d[M]²。分别取初始[M]₀=0.02000与0.2000 mol/L，C、D初始为0；求t=60.00 s的M、C、D、初始两条通道速率与其消费单体数之比，求t→∞时的环单体与二聚体产率、其中单体骨架进入环结构的比例。推导Riccati模型的完整解析解，并求初始单体浓度使环化对单体消耗速率与二聚对单体消耗速率相等的临界浓度。给定全部浓度单位为mol/L，核验[M]+[C]+2[D]=[M]₀的逐时骨架守恒；注意[M]+[C]+[D]不是单体骨架守恒，二聚体每分子含两个单体单元。

### 严格分步解答

1. 本题两通道消耗单体的计量不同：环化M→C消耗1个单体，二聚2M→D每生成1个D消耗2个M。

2. ODE为dM/dt=−kc M−2kd M²，dC/dt=kc M，dD/dt=kd M²；从三式得到d(M+C+2D)/dt=0。

3. 令β=2kd M0/kc，利用Bernoulli/Riccati变换求得M(t)=M0 e^(−kc t)/[1+β(1−e^(−kc t))]。

4. 环化产物为C(t)=kc/(2kd) ln[1+β(1−e^(−kc t))]，可通过对C′=kc M直接积分得到。

5. 由严格骨架守恒计算D(t)=[M0−M(t)−C(t)]/2，避免对M²再次手动复杂积分。

6. 低初始浓度M0=0.020000000000 M时β=4.8000000000，高初始浓度M0=0.20000000000 M时β=48.000000000。

7. 在t=60.00 s，低初始浓度剩余M=0.00094367235706 M、环C=0.0064737855251 M、二聚D=0.0062912710589 M。

8. 高初始浓度时对应M=0.0011654823898 M、环C=0.015188259570 M、二聚D=0.091823129020 M。

9. 按M+C+2D的单体骨架计数核对两条件下分别为0.020000000000 M与0.20000000000 M，完全恢复初始骨架。

10. 当t趋无穷时e^(−kct)→0、单体M→0，而环化终量C∞=kc/(2kd) ln(1+β)，D∞=(M0−C∞)/2。

11. 低浓度的终环C∞=0.0073244079898 M、终二聚D∞=0.0063377960051 M，骨架进入环的分率0.36622039949。

12. 高浓度对应C∞=0.016215917909 M、D∞=0.091892041046 M、环分率0.081079589544。

13. 初始环分子产生速率为kc M0，二聚分子产生速率为kd M0²；由于后者消耗两个单体，必须用2kd M0²与环化通道的单体消耗速率进行比较。

14. 低浓度初始环化通量=0.00050000000000 M/s、二聚分子通量=0.0012000000000 M/s；高浓度对应0.0050000000000和0.12000000000 M/s。

15. 初始两条通道消耗单体的速率相等即kc M0=2kd M0²，唯一正阈值M0*=kc/(2kd)。

16. 算得M0*=0.0041666666667 M；在低、高初始浓度下，初始环化/二聚单体消耗比依次0.20833333333、0.020833333333。

17. 提高初始单体浓度强化二级二聚项，因此虽然环产物绝对浓度可能增大，单体骨架的最终环分率会降低。

18. 本模型把环化产物视为不能被二聚端基继续攻击的稳定终产物，并假定不发生更高聚体、可逆开环或链增长，真实环链平衡需在更完整的聚合模型下分析。

### 机器可核验全部数值答案

- intramolecular_cyclization_rate_constant_s: 0.0250000000000000 s^-1
- intermolecular_dimerization_rate_constant_L_mol_s: 3.00000000000000 L/(mol s)
- sampling_time_s: 60.0000000000000 s
- initial_equal_consumption_concentration_M: 0.00416666666666667 mol/L
- low_initial_monomer_M: 0.0200000000000000 mol/L
- high_initial_monomer_M: 0.200000000000000 mol/L
- Riccati_dimensionless_parameter_low: 4.80000000000000 ratio
- Riccati_dimensionless_parameter_high: 48.0000000000000 ratio
- monomer_remaining_t60_low_M: 0.000943672357056009 mol/L
- monomer_remaining_t60_high_M: 0.00116548238977978 mol/L
- cyclic_monomer_t60_low_M: 0.00647378552511017 mol/L
- cyclic_monomer_t60_high_M: 0.0151882595698024 mol/L
- dimer_t60_low_M: 0.00629127105891691 mol/L
- dimer_t60_high_M: 0.0918231290202089 mol/L
- skeleton_inventory_t60_low_M: 0.0200000000000000 mol/L
- skeleton_inventory_t60_high_M: 0.200000000000000 mol/L
- final_cyclic_monomer_low_M: 0.00732440798980156 mol/L
- final_cyclic_monomer_high_M: 0.0162159179087943 mol/L
- final_dimer_low_M: 0.00633779600509922 mol/L
- final_dimer_high_M: 0.0918920410456029 mol/L
- final_skeleton_fraction_in_cycles_low: 0.366220399490078 fraction
- final_skeleton_fraction_in_cycles_high: 0.0810795895439714 fraction
- initial_cyclization_flux_low_M_s: 0.000500000000000000 mol/(L s)
- initial_cyclization_flux_high_M_s: 0.00500000000000000 mol/(L s)
- initial_dimer_molecule_flux_low_M_s: 0.00120000000000000 mol/(L s)
- initial_dimer_molecule_flux_high_M_s: 0.120000000000000 mol/(L s)
- initial_dimer_monomer_consumption_low_M_s: 0.00240000000000000 mol/(L s)
- initial_dimer_monomer_consumption_high_M_s: 0.240000000000000 mol/(L s)
- initial_cyclization_to_dimer_consumption_ratio_low: 0.208333333333333 ratio
- initial_cyclization_to_dimer_consumption_ratio_high: 0.0208333333333333 ratio
- high_over_low_final_cyclic_yield_ratio: 2.21395612196551 ratio
- molecular_number_t60_low_M: 0.0137087289410831 mol/L
- molecular_number_t60_high_M: 0.108176870979791 mol/L
- exp_minus_kc_t: 0.223130160148430 ratio
- cyclization_flux_t60_low_M_s: 0.0000235918089264002 mol/(L s)
- cyclization_flux_t60_high_M_s: 0.0000291370597444946 mol/(L s)
- dimerization_molecule_flux_t60_low_M_s: 0.00000267155255241493 mol/(L s)
- dimerization_molecule_flux_t60_high_M_s: 0.00000407504760266038 mol/(L s)

## UC-ADV12-P170 非绝热Marcus电子转移的正常区、活化最优点、反转区与详细平衡

### 题目

某理想非绝热电子转移体系的两条谐形自由能曲线以无量纲集体反应坐标q描述：G_D(q)=λq²、G_A(q)=λ(q−1)²+ΔG°，其中重组自由能λ=0.6000 eV，ΔG°是每个电子转移事件的标准反应自由能（eV）。假定电子耦合给出与温度和驱动力均无关的有效速率前因子k0=1.000×10¹² s⁻¹，Marcus型速率为k_f=k0 exp[−(λ+ΔG°)²/(4λ kBT)]。给定kB=1.380649×10⁻²³ J/K、1 eV=1.602176634×10⁻¹⁹ J，NA=6.02214076×10²³ mol⁻¹，分别在298.15 K与350.0 K计算四种驱动力ΔG°=−0.2000、−0.6000、−1.000、−1.400 eV下的交叉坐标q*、活化自由能、前向速率常数、速率与驱动力的非单调关系。对ΔG°=−0.6000 eV，另给反向速率k_b=k0 exp[−(λ−ΔG°)²/(4λ kBT)]，证明k_f/k_b=exp[−ΔG°/(kBT)]满足详细平衡。判断正常区、无势垒最优点、反转区和高温影响，核验eV与J、kJ/mol的转换。不可误认为反应越放热，速率就必然越快。

### 严格分步解答

1. Marcus谐形自由能曲线G_D(q)=λq²，G_A(q)=λ(q−1)²+ΔG°，两曲线交点由λq²=λ(q−1)²+ΔG°决定。

2. 展开并约去q²，得到q*=(λ+ΔG°)/(2λ)；反应初态极小值在q=0，所以前向活化自由能ΔG‡=λ(q*)²。

3. 代入得到常用Marcus抛物线势垒ΔG‡=(λ+ΔG°)²/(4λ)，不存在强制ΔG‡随放热程度单调下降的假设。

4. 当ΔG°从0趋向−λ时势垒变小，是正常区；在ΔG°=−λ时势垒恰为0；再更负会进入反转区。

5. 题设λ=0.60000000000 eV，四种驱动力依次-0.20000000000、-0.60000000000、-1.0000000000、-1.4000000000 eV。

6. 交叉坐标依次q*=0.33333333333、0.0000000000、-0.33333333333、-0.66666666667，后两个q*为负体现交点超过供体势阱底部。

7. 对应活化势垒0.066666666667、0.0000000000、0.066666666667、0.26666666667 eV。

8. 以kBT为eV单位时，用kB T/(1.602176634×10⁻¹⁹ J/eV)换算，指数ΔG‡/(kBT)才无量纲。

9. 低温kBT=0.025692579121 eV、高温kBT=0.030160666418 eV。

10. 298.15 K时四种驱动力下前向速率分别74662078495、1.0000000000e+12、74662078495、31074224.841 s⁻¹。

11. 350.0 K时四个速率分别1.0965848724e+11、1.0000000000e+12、1.0965848724e+11、144600235.96 s⁻¹。

12. 第一种和第三种驱动力对−λ对称，势垒相同，因此两个速率相同；第四种更深放热却比第三种反应慢。

13. 深反转区对称情形的速率比=0.00041619822897，无势垒最优驱动力是-0.60000000000 eV。

14. 对于ΔG°=−0.6000 eV，反向电子转移所需的Marcus势垒是(λ−ΔG°)²/(4λ)，反向速率须用同一个前因子。

15. 298.15 K反向速率=72.094259187 s⁻¹，正逆比=13870729948。

16. 前后势垒差ΔG‡f−ΔG‡b=ΔG°，故ln(kf/kb)=−ΔG°/(kBT)，这一详细平衡关系不依赖于过渡态坐标选择。

17. 由热力学独立计算的详细平衡目标值为13870729948，和数值正逆比一致。

18. 各势垒换算为kJ/mol后依次6.4323554749、0.0000000000、6.4323554749、25.729421900；1 eV×NA即96.485 kJ/mol。

19. 高温会使非零活化势垒的指数抑制减弱，但本题有效前因子固定，并未包含非绝热耦合随温度的真实变化。

20. 此处的Marcus模型忽略量子隧穿、高频内层振动和反应物扩散极限，因此不应把模型给出的极快速率当作实验上必然可观察的值。

### 机器可核验全部数值答案

- temperature_low_K: 298.150000000000 K
- temperature_high_K: 350.000000000000 K
- reorganization_energy_eV: 0.600000000000000 eV
- effective_rate_prefactor_s: 1000000000000.00 s^-1
- driving_force_1_eV: -0.200000000000000 eV
- driving_force_2_eV: -0.600000000000000 eV
- driving_force_3_eV: -1.00000000000000 eV
- driving_force_4_eV: -1.40000000000000 eV
- activation_barrier_1_eV: 0.0666666666666667 eV
- activation_barrier_2_eV: 0.00000000000000 eV
- activation_barrier_3_eV: 0.0666666666666667 eV
- activation_barrier_4_eV: 0.266666666666667 eV
- forward_rate_Tlow_case1_s: 74662078494.6866 s^-1
- forward_rate_Tlow_case2_s: 1000000000000.00 s^-1
- forward_rate_Tlow_case3_s: 74662078494.6866 s^-1
- forward_rate_Tlow_case4_s: 31074224.8409022 s^-1
- forward_rate_Thigh_case1_s: 109658487239.928 s^-1
- forward_rate_Thigh_case2_s: 1000000000000.00 s^-1
- forward_rate_Thigh_case3_s: 109658487239.928 s^-1
- forward_rate_Thigh_case4_s: 144600235.961437 s^-1
- crossing_coordinate_case1: 0.333333333333333 ratio
- crossing_coordinate_case2: 0.00000000000000 ratio
- crossing_coordinate_case3: -0.333333333333333 ratio
- crossing_coordinate_case4: -0.666666666666667 ratio
- kBT_Tlow_eV: 0.0256925791210858 eV
- kBT_Thigh_eV: 0.0301606664175081 eV
- reverse_rate_case2_Tlow_s: 72.0942591868565 s^-1
- forward_to_reverse_rate_ratio_case2: 13870729948.2496 ratio
- detailed_balance_expected_ratio: 13870729948.2496 ratio
- deep_inverted_to_symmetrical_rate_ratio: 0.000416198228972605 ratio
- barrierless_driving_force_eV: -0.600000000000000 eV
- barrier_case1_kJ_mol: 6.43235547488733 kJ/mol
- barrier_case2_kJ_mol: 0.00000000000000 kJ/mol
- barrier_case3_kJ_mol: 6.43235547488734 kJ/mol
- barrier_case4_kJ_mol: 25.7294218995493 kJ/mol
- rate_increase_case1_with_temperature: 1.46873070574552 ratio
- rate_increase_case4_with_temperature: 4.65338191706406 ratio
- equal_normal_inverted_rate_residual: 0.00000000000000 s^-1
- barrierless_to_normal_rate_ratio_lowT: 13.3936801675186 ratio
