# 第十一辑 I150 / A149 / O146 / P146

以下为机器自洽、尚待人工专家审阅的高阶综合题草稿。

## UC-ADV11-I150 CoFe2O4尖晶石反位参数的中子散射—亚晶格磁矩双重反演

### 题干
一种理想化CoFe₂O₄尖晶石每式量有一个四面体A位和两个八面体B位，阳离子按(Co₁₋ₓFeₓ)_A[CoₓFe₂₋ₓ]_B O₄分布，0≤x≤1。假定Co²⁺、Fe³⁺的理想共线磁矩分别3.000、5.000 μB，A/B亚晶格反平行，净饱和磁矩测为4.400 μB/式量。Co和Fe中子相干散射长度分别2.490与9.450 fm；立方晶格常数a=8.400 Å，每晶胞Z=8式量，1 μB=9.2740100783×10⁻²⁴ A·m²，N_A=6.02214076×10²³ mol⁻¹，Co/Fe/O摩尔原子质量分别58.933/55.845/15.999 g/mol。由磁矩反演x，预测A/B平均散射长度、两亚晶格和晶胞净磁矩、晶胞体积、理想密度与饱和磁化/比磁化，并对位点、化学计量、电荷和模型边界逐一检查。

### 完整分步解析
1. CoFe₂O₄尖晶石有每式量一个四面体A位点与两个八面体B位点；设反位参数x描述(Co₁₋ₓFeₓ)_A[CoₓFe₂₋ₓ]_B O₄。

2. 题设Co为Co²⁺(自旋有效矩3μB)、Fe为Fe³⁺(有效矩5μB)，氧为O²⁻，两种离子A/B位矩均视为相同且A、B亚晶格理想反平行。

3. 质量与晶体位点约束：A位Co+Fe=1、B位Co+Fe=2，整体Co=1、Fe=2，形式电荷2+2×3−4×2=0。

4. 每式量A亚晶格矩m_A=3(1−x)+5x=3+2x，B亚晶格矩m_B=3x+5(2−x)=10−2x，净矩m_B−m_A=7−4x。

5. 已测理想自旋净磁矩4.400 μB/式量，故由7−4x=4.4唯一反演x=0.6500，在物理区间0≤x≤1内。

6. Co²⁺与Fe³⁺中子相干散射长度分别b_Co=2.49 fm、b_Fe=9.45 fm，A位平均散射长度b_A=(1−x)b_Co+xb_Fe=7.01400000000 fm。

7. B位每位点平均散射长度b_B=[x b_Co+(2−x)b_Fe]/2=7.18800000000 fm，两位点总和与化学计量一致。

8. 回算A、B亚晶格矩分别4.30000000000、8.70000000000 μB，差值4.40000000000 μB，与磁化测量相符。

9. 每立方晶胞含8个CoFe₂O₄式量，故晶胞净矩=35.2000000000 μB，磁化计算必须乘8。

10. 晶格常数a=8.400 Å，体积=5.92704000000e-28 m³，CoFe₂O₄式量=234.619000000 g/mol。

11. 由ρ=8M/(N_A a³)得理想密度5258.53060416 kg/m³；以1μB=9.2740100783×10⁻²⁴ A·m²求饱和磁化550772.653392 A/m、比磁化104.738889027 A·m²/kg。

12. 磁性与中子散射为两种独立物理观测；真实CoFe₂O₄有轨道磁矩、非共线自旋、热振动和缺陷，净矩与散射长度皆不应未经实验检验便视作真实材料数据。

### 答案向量
- spinel_inversion_parameter: 0.65 ratio
- A_site_neutron_scattering_fm: 7.014 fm
- B_site_average_scattering_fm: 7.188000000000001 fm
- A_sublattice_moment_muB: 4.3 muB/formula
- B_sublattice_moment_muB: 8.7 muB/formula
- net_moment_per_formula_muB: 4.3999999999999995 muB/formula
- net_moment_per_unit_cell_muB: 35.199999999999996 muB/cell
- unit_cell_volume_m3: 5.92704e-28 m3
- formula_mass_g_mol: 234.619 g/mol
- density_kg_m3: 5258.530604163438 kg/m3
- ideal_saturation_magnetization_A_m: 550772.6533921823 A/m
- specific_magnetization_A_m2_kg: 104.7388890265483 A m2/kg
- Co_on_A_site_fraction: 0.35 fraction
- Co_on_B_site_fraction: 0.325 fraction
- Fe_on_B_site_fraction: 0.675 fraction
- formal_charge_balance: 0 charge

待审标记：publishable=false；exclude_from_official_bank=true；quality_status=awaiting_expert_review；novelty_review_status=pending_cross_series_model_review。

## UC-ADV11-A149 Van Deemter双流速反演与Darcy压降约束的色谱分离度最优化

### 题干
某液相色谱填充柱长度L=30.00 cm，有效板高服从H(u)=A+B/u+C u，流速u以cm/s表示，板高H以cm计，已独立标定A=0.002000 cm。观测u₁=1.000 cm/s与u₂=4.000 cm/s时均有H=0.007000 cm。流动黏度η=0.001000 Pa·s，填充层渗透率k_perm=1.000×10⁻¹² m²，泵压上限100.0 bar，Darcy压差ΔP=ηLu/k_perm。两待分离组分的选择性α=1.200、第二峰保留因子k′=3.000，近似分离度R_s=(√N/4)[(α−1)/α][k′/(1+k′)]。从双观测唯一反算B与C及单位，求唯一最优流速、最小板高、板数、无保留时间、分离度和Darcy压差，判断压差限制是否活跃，并说明为何未知A时无法仅用两个数据点识别三参数。

### 完整分步解析
1. 在分析色谱填充柱中采用理想Van Deemter板高关系H(u)=A+B/u+Cu，A为多路径项、B/u为纵向扩散项、Cu为传质阻力项。

2. 给定已独立校准的涡流参数A=0.002000 cm，其余B、C未知，测得u=1.000和4.000 cm/s时板高相同，均0.007000 cm。

3. 由实测H(u)扣A并乘u可得u[H(u)−A]=B+C u²，因此两点在(u²,u(H−A))平面上构成直线。

4. 代入u=1和4两次观测，截距B=0.00400000000000 cm²/s，斜率C=0.00100000000000 s，因u²不同反演唯一。

5. 求H'(u)=−B/u²+C=0，正最优流速u_opt=√(B/C)；二阶导数H''(u)=2B/u³>0保证是唯一最小板高。

6. u_opt=2.00000000000 cm/s，最小板高H_min=0.00600000000000 cm。

7. 有效柱长L=30 cm时最大理论板数N=L/H_min=5000.00000000；不保留示踪物平均通过时间t₀=L/u_opt=15.0000000000 s。

8. 对固定选择性因子α=1.200、第二峰保留因子k′=3.000，采用理想色谱分离度近似R_s=(√N/4)[(α−1)/α][k′/(1+k′)]。

9. 代入得R_s=2.20970869121，此处大写R_s为色谱分离度而非电化学溶液电阻。

10. 填充层同时服从题设Darcy层流公式ΔP=ηL u/k_perm；将η=0.001000 Pa·s、L和u由cm换成m，渗透率k_perm=1.000×10⁻¹² m²。

11. 求ΔP=60.0000000000 bar，低于100.0 bar泵压上限，故无须在该模型中降低最佳流速。

12. 若A也未知，仅两个板高测量无法唯一分辨A、B、C；压缩性载气、梯度洗脱、过载、峰拖尾和流速依赖黏度均会改变Van Deemter与Darcy联立优化。

### 答案向量
- plate_height_at_1cm_s_cm: 0.007 cm
- plate_height_at_4cm_s_cm: 0.007 cm
- diffusion_B_cm2_s: 0.004 cm2/s
- mass_transfer_C_s: 0.001 s
- optimum_velocity_cm_s: 2 cm/s
- minimum_plate_height_cm: 0.006 cm
- maximum_plate_number: 5000 plates
- unretained_time_at_optimum_s: 15 s
- darcy_pressure_bar: 59.99999999999999 bar
- resolution_at_optimum: 2.2097086912079607 resolution
- linearized_intercept_B: 0.004 cm2/s
- linearized_slope_C: 0.001 s
- plate_number_at_1cm_s: 4285.714285714285 plates
- stationary_optimum_velocity: 2 cm/s
- four_times_optimum_velocity: 8 cm/s

待审标记：publishable=false；exclude_from_official_bank=true；quality_status=awaiting_expert_review；novelty_review_status=pending_cross_series_model_review。

## UC-ADV11-O146 酰胺旋转异构体动态NMR双温Eyring反演与并峰交换寿命

### 题干
某假想N-酰胺具有两个等布居旋转异构体A/B，在慢交换NMR中两峰频率间隔Δν=100.0 Hz，并于T_c=330.0 K并峰。假定双位点对称交换且自然线宽近似可忽略，采用近似并峰关系k_c=πΔν/√2（k_c为单方向位点交换率）。独立动力学实验在T₂=350.0 K测得单向交换速率k₂=822.00780581656 s⁻¹。采用Eyring表达式k(T)=kBT/h·exp(ΔS‡/R−ΔH‡/(RT))，kB=1.380649×10⁻²³ J/K、h=6.62607015×10⁻³⁴ J·s、R=8.314462618 J/(mol·K)。由并峰条件和两温度速率唯一反演ΔH‡、ΔS‡、330 K的ΔG‡，预测298.15 K速率、平均位点等待时间和半衰期，核查单位、回代、激活自由能正性及等布居并峰模型的适用边界。

### 完整分步解析
1. 考虑一个假想N-酰胺的两个等布居旋转异构体A和B，分别给出两个核磁共振化学位移，慢交换频率差Δν=100.0 Hz。

2. 题设按对称两位点动态NMR近似，在等布居、相同本征线宽、等速A⇌B条件下的并峰温度T_c=330.0 K满足k_c=πΔν/√2。

3. 由并峰谱求单向位点交换速率k_c=222.144146908 s⁻¹；这是单向速率而不是A+B总双向离开率之和。

4. 采用Eyring式k(T)=kBT/h·exp(ΔS‡/R−ΔH‡/(RT))，以T=330 K和350 K的两个速率表征同一旋转过渡态。

5. 在350.0 K的第二动力学实验测得k₂=822.007805817 s⁻¹，因升温快交换率应增大。

6. 两点整理为ln[k(T)/T]=ln(kB/h)+ΔS‡/R−ΔH‡/(RT)，横坐标为1/T的斜率是−ΔH‡/R。

7. 两温度不同使线性方程满秩，解得ΔH‡=60.0000000000 kJ/mol。

8. 由截距求ΔS‡=-19.0238485418 J/(mol·K)，不能仅用并峰温度独立求出焓与熵两个参数。

9. 在并峰温度下ΔG‡=ΔH‡−T_cΔS‡=66.2778700188 kJ/mol，正值对应显著旋转势垒。

10. 外推298.15 K得到k=19.4103054234 s⁻¹，单方向等待时间均值1/k=0.0515190244660 s，半衰期ln2/k=0.0357102665538 s。

11. 将求得ΔH‡、ΔS‡再回代330 K与350 K的两个速率，确认两个等布居构象的化学交换完全由同一参数对解释。

12. 并峰公式适用于两位点等布居及指定线宽近似，真实酰胺可能存在不等布居、化学位移温度漂移、额外耦合、多个构象以及非Arrhenius热容贡献。

### 答案向量
- coalescence_rate_s: 222.1441469079183 s^-1
- exchange_rate_350K_s: 822.0078058165639 s^-1
- rate_ratio: 3.700335197925773 ratio
- Eyring_deltaH_kJ_mol: 60.00000000000001 kJ/mol
- Eyring_deltaS_J_molK: -19.023848541835946 J/(mol K)
- G_activation_330_kJ_mol: 66.27787001880587 kJ/mol
- predicted_298K_rate_s: 19.410305423398192 s^-1
- 298K_exchange_half_life_s: 0.03571026655378589 s
- 298K_exchange_mean_dwell_s: 0.05151902446596991 s
- ln_k_over_T_330: -0.3957661729030072 dimensionless
- ln_k_over_T_350: 0.8538167366548393 dimensionless
- Eyring_prefactor_330_s: 6876084310698.1 s^-1
- G_activation_350_J_mol: 66658.3469896426 J/mol
- half_two_site_spacing_Hz: 50 Hz

待审标记：publishable=false；exclude_from_official_bank=true；quality_status=awaiting_expert_review；novelty_review_status=pending_cross_series_model_review。

## UC-ADV11-P146 高分子凝胶Donnan电化学势—固定电荷平衡与渗透压差联合求解

### 题干
一种含不可移动阴离子基团的理想化凝胶与温度T=298.15 K的外部大体积1:1电解质库M⁺A⁻平衡，外部两种单价离子的浓度均c_s=0.1000 mol/L。凝胶内部按实际液体体积计的固定负电荷浓度X=0.05000 mol/L，体积由外部支撑固定为0.1000 L，固定基团完全解离且离子活动度近似浓度。忽略H⁺、OH⁻以及渗流；电化学势平衡导出c_+^in=c_s exp(−Fψ/RT)，c_-^in=c_s exp(Fψ/RT)，ψ=φ_in−φ_out。给定R=8.314462618 J/(mol·K)、F=96485.33212 C/mol。联立Donnan乘积关系与凝胶电中性，唯一反演内阳离子和阴离子浓度、分配系数、电位差，计算相对于盐库的可动离子范特霍夫渗透压差、体积内各种电荷摩尔量并检查守恒、正根和凝胶体积/电离模型限制。

### 完整分步解析
1. 考虑一带不可移动负电荷的理想高分子凝胶浸泡在单价盐M⁺A⁻的巨大外部盐库中，外库阳离子与阴离子浓度均c_s=0.1000 mol/L。

2. 凝胶内部固定负电荷浓度X=0.05000 mol/L（按凝胶内实际液体体积定义），且凝胶整体宏观电中性要求c_+^in−c_-^in=X。

3. 理想溶液电化学势连续，令ψ=φ_in−φ_out；单价离子分配分别c_+^in=c_s exp(−Fψ/RT)、c_-^in=c_s exp(+Fψ/RT)。

4. 两分配式相乘得c_+^in c_-^in=c_s²，表明盐库活动度标度下Donnan分配乘积约束。

5. 联立电中性与乘积得c_-²+Xc_-−c_s²=0，非负根唯一；另一根为负不符合物理浓度。

6. 取平方根D=√(X²+4c_s²)=0.206155281281 mol/L，解得c_+=(X+D)/2=0.128077640640 mol/L。

7. 同样c_-=(D−X)/2=0.0780776406404 mol/L，内部阳离子富集、阴离子排斥。

8. 验证c_+−c_-=0.0500000000000 mol/L等于固定负电荷浓度，且c_+ c_-=c_s²=0.0100000000000 (mol/L)²。

9. 由ψ=−(RT/F)ln(c_+/c_s)求Donnan电势ψ=-6.35805164322 mV，负号对应内部固定负电荷。

10. 按理想范特霍夫渗透压，凝胶内外可动离子浓度和之差Δc=(c_++c_−−2c_s)；固定电荷共价连在凝胶上，不另外当自由理想气体粒子计数。

11. 渗透压差ΔΠ=RT×1000Δc=15.2586778001 kPa，因凝胶内离子总浓度略高，渗透压差为正。

12. 若凝胶液体体积固定0.1000 L，则凝胶内部阳离子、阴离子及固定负电荷当量数分别0.0128077640640、0.00780776406404、0.00500000000000 mol，满足积分电中性。

13. 本模型假设盐库活度近似浓度、固定电荷完全解离、凝胶体积被外力固定；若发生体积膨胀、盐特异吸附、多价离子或电荷调节，必须加入弹性能及非理想活度。

### 答案向量
- quadratic_discriminant_M: 0.20615528128088306 mol/L
- internal_cation_concentration_M: 0.12807764064044153 mol/L
- internal_anion_concentration_M: 0.07807764064044154 mol/L
- cation_partition_coefficient: 1.2807764064044151 ratio
- anion_partition_coefficient: 0.7807764064044154 ratio
- Donnan_voltage_mV: -6.3580516432191505 mV
- excess_osmotic_pressure_kPa: 15.25867780014381 kPa
- inside_ion_product_M2: 0.010000000000000004 M2
- charge_difference_M: 0.05 mol/L
- inside_osmotically_active_ion_sum_M: 0.20615528128088306 mol/L
- external_osmolarity_mOsm_L: 100 mOsm/L
- internal_cations_mol_in_0p1L: 0.012807764064044153 mol
- internal_anions_mol_in_0p1L: 0.007807764064044154 mol
- fixed_sites_mol_in_0p1L: 0.005000000000000001 mol
- osmotic_pressure_times_gel_volume_J: 1.525867780014381 J

待审标记：publishable=false；exclude_from_official_bank=true；quality_status=awaiting_expert_review；novelty_review_status=pending_cross_series_model_review。

