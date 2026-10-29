# 第十二辑第四批 I154 A154 O151 P151

全部保持专家审核待审，不计作正式批准或原创性认证。

## UC-ADV12-I154 全钒液流电池VO2+/VO2+与V3+/V2+质子耦合Nernst电压及容量界限

### 完整题干
一假想全钒液流电池正极放电半反应VO₂⁺+2H⁺+e⁻→VO²⁺+H₂O，E₊°=+1.000 V，负极对应还原偶V³⁺+e⁻→V²⁺，E₋°=−0.2600 V。T=298.15 K、R=8.314462618 J/(mol·K)、F=96485.33212 C/mol，采用相对1 M的理想离子活度。正极电解液0.2500 L：[VO₂⁺]=0.08000 M、[VO²⁺]=0.02000 M、[H⁺]=1.000 M；负极电解液0.2500 L：[V²⁺]=0.07000 M、[V³⁺]=0.03000 M。求两极的单电子Nernst还原电势、初始可逆电池电压，以及限制放电的活性价态、最大理论电子摩尔数、法拉第电量、恒2.000 A理想放电时间、正极质子消耗和恒体积无质子补充后的形式余量，并检验V原子、O/H、电子和电荷守恒及电势变化的实际限制。

### 分步解析
1. 假想全钒液流电池正极半反应为VO₂⁺(V(V))+2H⁺+e⁻⇌VO²⁺(V(IV))+H₂O，标准还原电势E₊°=+1.000 V。

2. 负极还原半反应V³⁺+e⁻⇌V²⁺，标准电势E₋°=−0.2600 V；放电时负极实际上反向进行V²⁺→V³⁺+e⁻。

3. 两个半反应都转移1电子；正极物料和电荷：左端+1+2−1=+2，右端VO²⁺为+2，水分子负责氧氢原子守恒。

4. 在初始正极槽0.2500 L中V(V)以VO₂⁺计浓度0.08000 mol/L，V(IV)以VO²⁺计0.02000 mol/L，质子浓度1.000 mol/L。

5. 负极槽同样0.2500 L，V²⁺浓度0.07000 mol/L、V³⁺浓度0.03000 mol/L，两个槽中其他电解质/膜迁移维持宏观电中性。

6. 应用单电子Nernst：E₊=E₊°−(RT/F)ln([VO²⁺]/([VO₂⁺][H⁺]²))，活动度由相对于1 mol/L的无量纲浓度代表。

7. 负极采用还原电势E₋=E₋°−(RT/F)ln([V²⁺]/[V³⁺])，放电电池初始可逆电压E_cell=E₊−E₋。

8. T=298.15 K时求E₊=1.03561747756 V、E₋=-0.281769267317 V、初始E_cell=1.31738674488 V。

9. 正极可被还原的V(V)为0.0200000000000 mol，负极可氧化V²⁺为0.0175000000000 mol，限制物是负极V²⁺。

10. 最大理想电子物质的量=0.0175000000000 mol，法拉第电量Q=1688.49331210 C；若放电电流恒定2.000 A，对应理想时间t=844.246656050 s。

11. 正极按每电子消耗2H⁺，对应消耗0.0350000000000 mol，在无外部质子补充且液体体积恒定的封闭正极槽内剩余形式质子浓度=0.860000000000 mol/L。

12. 初始瞬间2A下的理想可逆电功率为I E_cell，实际存在欧姆、极化和泵送损失；随着放电组成变化电压也变化，不能用初始E_cell乘总Q冒充全过程准确可提取能量。

13. 真实全钒电池受到浓硫酸活度、电荷跨膜迁移、物料交叉渗透及VO₂⁺/VO²⁺配位状态影响；这里仅在指定理想初态作Nernst和计量检查。

### 独立数值向量
- positive_redox_potential_V: 1.0356174775587534 V
- negative_redox_potential_V: -0.2817692673174706 V
- initial_reversible_cell_voltage_V: 1.317386744876224 V
- positive_Nernst_quotient: 0.25 ratio
- negative_Nernst_quotient: 2.3333333333333335 ratio
- positive_VV_mol: 0.02 mol
- negative_VII_mol: 0.0175 mol
- limiting_electron_mol: 0.0175 mol
- maximum_stoichiometric_charge_C: 1688.4933121000004 C
- ideal_discharge_time_at_2A_s: 844.2466560500002 s
- protons_consumed_mol: 0.035 mol
- remaining_positive_H_M: 0.86 mol/L
- initial_electrical_power_W: 2.634773489752448 W
- total_positive_vanadium_M: 0.1 mol/L
- total_negative_vanadium_M: 0.1 mol/L
- electron_charge_reaction_balance: 0 charge

`publishable=false`、`exclude_from_official_bank=true`、`quality_status=awaiting_expert_review`、`novelty_review_status=pending_cross_series_model_review`。

## UC-ADV12-A154 Cu(II)四线EPR超精细场谱、响应校正积分及绝对自旋定量

### 完整题干
某理想稀Cu(II)配合物EPR实验中电子自旋S=1/2、铜核自旋I=3/2，一阶各向同性超精细作用使B(m_I)=B₀−m_Ia_B，m_I=+3/2,+1/2,−1/2,−3/2，超精细间隔a_B=7.000 mT。微波频率ν=9.500 GHz，真实电子g=2.1000，h=6.62607015×10⁻³⁴ J·s、μ_B=9.2740100783×10⁻²⁴ J/T。四条实验线双积分原始面积分别为2000、2100、1900、2000，仪器响应因子为1.000、1.050、0.950、1.000。同温标准品含3.000 nmol有效S=1/2中心，响应校正后的积分总面积为6000，未知样品体积100.0 μL，T=298.15 K、kB=1.380649×10⁻²³ J/K。由四线计算中心场、线位置、邻线间距与g、校正面积、样品中心摩尔量和浓度、总粒子数以及Zeeman热布居差，说明仪器响应与功率饱和条件。

### 分步解析
1. 考虑假想Cu(II)单电子顺磁配合物，电子自旋S=1/2，与一个核自旋I=3/2的铜核发生一级各向同性超精细分裂；假设分子快速转动使粉末各向异性完全平均。

2. 测量X波段EPR微波频率ν=9.500 GHz，给定h=6.62607015×10⁻³⁴ J·s、μ_B=9.2740100783×10⁻²⁴ J/T。

3. 忽略二阶超精细作用，中心电子Zeeman共振条件hν=g μ_B B₀，且以题设定义每条超精细线B(m_I)=B₀−m_I a_B。

4. 核磁量子数m_I=+3/2,+1/2,−1/2,−3/2，因此一阶EPR有4条等统计强度线，邻线磁场间隔a_B=7.000 mT。

5. 由给定电子g因子2.1000算中心共振场B₀=0.323215944310 T。

6. 四条线场分别0.312715944310、0.319715944310、0.326715944310、0.333715944310 T，线间距0.007000 T，首末间距0.02100 T。

7. 反过来以四线平均场当B₀，再通过g=hν/(μ_BB₀)独立重构g，减轻超精细分裂对中心位置的影响。

8. 四条线原始双积分面积为2000、2100、1900、2000，响应因子分别1.000、1.050、0.950、1.000，须先校正仪器不同线位的响应。

9. 经响应因子校正后四线均为2000，合计面积=8000，满足核量子态4重的理想相对强度。

10. 同温标准品包含3.00000000000 nmol单电子中心，响应校正总面积6000，因此未知样品中心量=4.00000000000 nmol。

11. 未知样品实际体积100.0 μL，中心浓度=0.0000400000000000 mol/L；颗粒总数为nN_A=2.40885630400e+15。

12. 单一Zeeman双能级在T=298.15 K的热布居差为tanh(hν/(2kBT))=0.000764595007754，仅约千分级，说明信号强度还依赖温度与饱和条件。

13. 若自旋交换、超精细各向异性、核四极分裂、功率饱和或线形叠加存在，四线等面积和标准样的EPR定量不能直接套用；本模型仅在低功率且同温标定下有效。

### 独立数值向量
- central_resonance_field_T: 0.32321594431019496 T
- line_B_mIplus3over2_T: 0.31271594431019495 T
- line_B_mIplus1over2_T: 0.31971594431019495 T
- line_B_mIminus1over2_T: 0.32671594431019496 T
- line_B_mIminus3over2_T: 0.33371594431019497 T
- adjacent_hyperfine_spacing_T: 0.007 T
- inferred_electron_g: 2.1 dimensionless
- response_corrected_integrated_area: 8000 area
- sample_spin_amount_mol: 4e-9 mol
- sample_spin_concentration_M: 0.00004 mol/L
- Zeeman_population_difference: 0.0007645950077540665 fraction
- spin_particle_number: 2408856304000000 centers
- hyperfine_three_intervals_normalization: 1.0000000000000009 ratio
- outer_hyperfine_span_mT: 21.000000000000018 mT
- reconstructed_mean_center_field_T: 0.32321594431019496 T
- uncorrected_area_sum: 8000 area

`publishable=false`、`exclude_from_official_bank=true`、`quality_status=awaiting_expert_review`、`novelty_review_status=pending_cross_series_model_review`。

## UC-ADV12-O151 双吸附有机表面反应Langmuir–Hinshelwood覆盖率、过量反应物抑制与选择最优

### 完整题干
一假想有机异相催化表面遵循竞争Langmuir吸附A+*⇌A*、B+*⇌B*，仅吸附A*与邻近B*发生生成P+2*的理想Langmuir–Hinshelwood反应。吸附常数K_A=100.0 L/mol、K_B=50.00 L/mol，初始液相C_A=0.02000、C_B=0.01000 mol/L；活性位点量Γ=1.000×10⁻⁶ mol/m²、等效邻位反应频率k_s=2.000 s⁻¹、催化表面积0.1000 m²、液相体积1.000 L。在60.00 s的短时近似中忽略液相浓度变化对表面覆盖率的反馈。求空位、A/B吸附分数、单位面积产物生成速率、60 s产物量及液相A/B剩余量；在固定C_B下求唯一最佳C_A及最大速率、过量A对速率的抑制，检查活性位点和A/B骨架守恒及近似适用范围。

### 分步解析
1. 设一种假想有机异相催化表面有等价位点*，A与B均可竞争吸附，吸附平衡常数K_A=100.0 L/mol、K_B=50.00 L/mol。

2. 反应机理A+*⇌A*、B+*⇌B*，随后邻近A*与B*反应生成可迅速离开的有机产物P和两个空位，忽略其它吸附分子。

3. 均匀平均场位点分数满足θ_*=1/[1+K_A C_A+K_B C_B]、θ_A=K_A C_A θ_*、θ_B=K_B C_B θ_*。

4. 在C_A=0.02000、C_B=0.01000 mol/L时定义吸附活动度x=K_A C_A=2.000、y=K_B C_B=0.5000。

5. 计算分母1+x+y=3.50000000000，空位分数θ_*=0.285714285714，θ_A=0.571428571429、θ_B=0.142857142857。

6. 反应按理想双吸附位点Langmuir–Hinshelwood式r=k_s Γ θ_A θ_B计，Γ=1.000×10⁻⁶ mol位点/m²、k_s=2.000 s⁻¹。

7. 得到面积速率r=1.63265306122e-7 mol/(m²·s)，量纲由Γ和k_s共同给出。

8. 总催化表面积A_s=0.1000 m²，若浴液体积1.000 L且60.00 s内浓度近似恒定，则产物摩尔量n_P=9.79591836735e-7 mol。

9. 对于固定C_B，反应速率随x的函数为r∝x y/(1+x+y)²；求导可得唯一最大值发生在x_opt=1+y。

10. 故最佳A浓度C_A,opt=(1+K_B C_B)/K_A=0.0150000000000 mol/L，对应r_max=1.66666666667e-7 mol/(m²·s)。

11. 初态C_A=0.02000 mol/L高于最优0.01500 mol/L，过量A占据位点会抑制B吸附，速率相对最优偏低2.08333333333%。

12. 各位点分数θ_*+θ_A+θ_B=1；按P每分子消耗一个A、一个B，60 s后A/B各减少n_P/1L，二者均保留正浓度。

13. 真实邻位关联、表面扩散、强吸附阻塞、多个位点族、放热与批式浓度变化会使平均场θ_Aθ_B公式失效；若反应时间增长不能继续用恒浓度近似。

### 独立数值向量
- A_adsorption_activity: 2 ratio
- B_adsorption_activity: 0.5 ratio
- theta_A: 0.5714285714285714 fraction
- theta_B: 0.14285714285714285 fraction
- theta_empty: 0.2857142857142857 fraction
- surface_product_rate_mol_m2_s: 1.6326530612244896e-7 mol/(m2 s)
- product_amount_60s_mol: 9.795918367346939e-7 mol
- optimal_A_concentration_M: 0.015 mol/L
- maximum_surface_rate_mol_m2_s: 1.6666666666666665e-7 mol/(m2 s)
- rate_deficit_from_optimum_ratio: 0.02083333333333326 fraction
- bulk_product_concentration_change_M: 9.795918367346939e-7 mol/L
- remaining_bulk_A_M: 0.019999020408163266 mol/L
- remaining_bulk_B_M: 0.009999020408163266 mol/L
- site_fraction_sum: 0.9999999999999999 ratio
- surface_turnover_capacity_mol_m2_s: 0.000002 mol/(m2 s)

`publishable=false`、`exclude_from_official_bank=true`、`quality_status=awaiting_expert_review`、`novelty_review_status=pending_cross_series_model_review`。

## UC-ADV12-P151 Brusselator开放化学反应网络的定点Jacobian、Hopf阈值与振荡模态

### 完整题干
一个假想开放化学振荡器按经典Brusselator无量纲动力学运行：dx/dt=A−(B+1)x+x²y，dy/dt=Bx−x²y，其中外界供给参数A=2.000，时间单位s，待比较B=4.800、B=5.000和B=5.200。推导唯一正稳态、2×2线性Jacobian、特征方程及稳定性判据，计算B=4.800时的稳态浓度、复特征值实虚部、线性振荡周期和衰减时间；求临界B_c和频率、周期，再计算B=5.200时复特征值及增长时间。严格检查平衡物料流率、迹与行列式、特征值和模型范围，说明线性局部失稳不能自动证明实际稳定极限环。

### 分步解析
1. 考虑经典无量纲Brusselator开放化学反应网络，两个中间组分x与y遵从dx/dt=A−(B+1)x+x²y，dy/dt=Bx−x²y。

2. 题设外部维持A=2.000的恒定输入，反应物和产物库维持B参数固定，x、y是无量纲浓度，时间单位秒。

3. 稳态由dy/dt=0得y=B/x（若x>0），代入dx/dt=0得到x*=A、y*=B/A；对正A、B唯一且为正。

4. 在稳态处对右端计算Jacobian：J=[[B−1,A²],[-B,−A²]]。

5. 其迹Tr J=B−1−A²，行列式det J=A²>0；特征方程λ²−(Tr J)λ+det J=0。

6. 当Tr J<0时平衡线性稳定；Tr J>0时线性不稳定；在判别式小于零情况下是共轭复特征根。

7. 给定B=4.800时x*=2.000、y*=2.40000000000，迹=-0.200000000000、行列式=4。

8. 这时两个特征值的实部=-0.100000000000 s⁻¹，虚部的绝对值=1.99749843554 rad/s，说明扰动以衰减振荡方式恢复。

9. 对应线性振荡周期=3.14552702289 s、包络衰减时间=10.0000000000 s。

10. Hopf线性临界条件Tr J=0给B_c=1+A²=5，临界角频率ω_c=√det=A=2 rad/s。

11. Hopf线性临界周期T_c=2π/ω_c=3.14159265359 s，临界稳态y*=B_c/A=2.5。

12. 当B=5.200时特征值实部=0.100000000000 s⁻¹、虚部绝对值=1.99749843554 rad/s，扰动按指数放大，线性增长时间10.0000000000 s。

13. 线性Hopf条件只证明定点的局部稳定性改变和频率；有限幅度极限环存在性与稳定性还需非线性中心流形及Lyapunov系数分析，不应仅凭正实部直接断言稳定周期轨道。

### 独立数值向量
- stable_fixed_x: 2 fraction
- stable_fixed_y: 2.4 fraction
- stable_trace: -0.20000000000000018 s^-1
- jacobian_determinant: 4 s^-2
- stable_real_eigenvalue: -0.10000000000000009 s^-1
- stable_oscillation_frequency_rad_s: 1.997498435543818 rad/s
- stable_linear_period_s: 3.1455270228880017 s
- Hopf_threshold_B: 5 dimensionless
- critical_fixed_y: 2.5 fraction
- unstable_real_eigenvalue: 0.10000000000000009 s^-1
- unstable_oscillation_frequency_rad_s: 1.997498435543818 rad/s
- unstable_linear_period_s: 3.1455270228880017 s
- critical_angular_frequency: 2 rad/s
- Hopf_period_s: 3.141592653589793 s
- stable_envelope_decay_s: 9.999999999999991 s
- unstable_growth_time_s: 9.999999999999991 s
- distance_to_Hopf_threshold: 0.20000000000000018 dimensionless

`publishable=false`、`exclude_from_official_bank=true`、`quality_status=awaiting_expert_review`、`novelty_review_status=pending_cross_series_model_review`。

