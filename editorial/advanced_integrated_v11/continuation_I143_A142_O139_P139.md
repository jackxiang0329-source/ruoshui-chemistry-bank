# 第十一辑 I143 / A142 / O139 / P139 高阶综合题

待审稿：publishable=false，exclude_from_official_bank=true；机器计算不证明独创性已获人类审定。

## UC-ADV11-I143｜57Fe Mössbauer核反冲与Einstein振动无声子分数反演

### 中文题干
假想含57Fe的晶体中核共振γ跃迁能Eγ=14.4125 keV，核质量为56.9354u（1u=1.66053906660×10⁻²⁷ kg），将核振动简化为单一一维Einstein声子，ℏω=25.00 meV。假设凝聚态Mössbauer无声子分数f(T)=exp{−[E_R/(ℏω)]coth[ℏω/(2kBT)]}，自由单核反冲能E_R=Eγ²/(2mc²)。真空c=299792458 m/s，h=6.62607015×10⁻³⁴ J·s，1eV=1.602176634×10⁻¹⁹ J，kB=8.617333262145×10⁻⁵ eV/K。求80.00 K和300.0 K的无声子分数及比值、反冲能（eV和meV）、γ波长（pm）、自然线宽Γ=4.660×10⁻⁹ eV所对应τ=ℏ/Γ、1.000 mm/s多普勒能移与等效线宽速度，并检查低温/高温物理极限及假设有效性。

### 严密逐步解析
1. 将57Fe 14.4125 keV核共振γ光子的能量从keV换算为eV，采用给定核质量m=56.9354u、u=1.66053906660×10⁻²⁷ kg，并使用真空c。

2. 若光子由自由单核发射或吸收，反冲动量p=Eγ/c，单核反冲能E_R=p²/(2m)=Eγ²/(2mc²)；此处能量与mc²必须取相同单位。

3. 计算核质量m=9.45434559725e-26 kg、反冲能E_R=0.00195833127260 eV=1.95833127260 meV；自由核反冲不等于凝聚态无声子事件的必然损失。

4. 题设简化为独立一维Einstein谐振子，单一声子量子ℏω=25.00 meV，谐振子平均位移〈x²〉=ℏ(2mω)⁻¹coth(ℏω/(2kBT))。

5. Debye–Waller无反冲几率f=exp[−(E_R/(ℏω))coth(ℏω/(2kBT))]，不是简单的exp(−E_R/kBT)；指数必须无量纲。

6. 计算比值E_R/(ℏω)=0.0783332509040，80.00 K时f=0.920704297430，300.0 K时f=0.839928534459。

7. 300 K与80 K无声子分数比f300/f80=0.912267420499，升温使位移涨落增大，因此该比值应小于1。

8. γ光子波长λ=hc/Eγ=86.0254629198 pm；相关转换需要1 pm=10⁻¹² m。

9. 给定自然宽度Γ=4.66e-9 eV，寿命τ=ℏ/Γ=1.41247201062e-7 s（以Γ为能量半高全宽的约定）。

10. 对低速度沿束向多普勒位移ΔE≈Eγv/c，1.000 mm/s对应4.80749252204e-8 eV；令ΔE=Γ求特征速度0.0969320280507 mm/s。

11. 若T→0，coth(ℏω/(2kBT))→1，f→exp(−E_R/ℏω)；T高时coth x≈1/x，故f随T降低且始终0<f≤1。

12. 模型要求单一Einstein模、谐振位移、无非谐性与局域结构动态；真实Mössbauer无声子分数应由声子谱及晶格Debye模型表征，且核跃迁选择定则与超精细分裂均未考虑。

### 数值答案向量
- nuclear_mass_kg: 9.454345597249764e-26 kg
- recoil_energy_eV: 0.0019583312726011923 eV
- recoil_energy_meV: 1.9583312726011923 meV
- recoil_over_phonon: 0.07833325090404769 ratio
- recoilless_80K: 0.9207042974298062 fraction
- recoilless_300K: 0.839928534458506 fraction
- recoilless_ratio_300_80: 0.9122674204988617 ratio
- gamma_wavelength_pm: 86.02546291982674 pm
- natural_linewidth_eV: 4.66e-9 eV
- mean_lifetime_s: 1.412472010624263e-7 s
- linewidth_equiv_velocity_mm_s: 0.09693202805065047 mm/s
- doppler_shift_1mm_s_eV: 4.8074925220433665e-8 eV
- phonon_over_kT300: 0.9670431767958602 ratio

**适用条件：** 模型要求单一Einstein模、谐振位移、无非谐性与局域结构动态；真实Mössbauer无声子分数应由声子谱及晶格Debye模型表征，且核跃迁选择定则与超精细分裂均未考虑。

**审核状态**：`quality_status=awaiting_expert_review`、`novelty_review_status=pending_cross_series_model_review`。

## UC-ADV11-A142｜单分子动态力谱Bell–Evans峰力反演与存活概率双速率校验

### 中文题干
原子力显微镜单分子动态力谱在298.15 K测定一配体–受体复合物不可逆解离，假设Bell势垒k(F)=k₀ exp(Fxβ/kBT)，加载力F(t)=rt，加载率分别r₁=100.0 pN/s和r₂=1000.0 pN/s，且每次从F=0开始，忽略回结合与仪器弹性。测得两组断裂力分布众数分别为47.096657464895 pN、70.792589401793 pN。取kB=1.380649×10⁻²³ J/K，1 pN·nm=10⁻²¹ J。推导生存概率S(F)与断裂力密度p(F)，由峰条件唯一反演零力解离速率k₀和势垒距离xβ；求两个峰时的速率k(F*)、生存概率、第一峰前断裂比例，并验证众数大于零、正根唯一及物理解边界。

### 严密逐步解析
1. 实验为单分子动态力谱，假设一个不可逆解离势垒和恒力加载速率r=dF/dt，零力解离速率k₀以及势垒距离xβ固定。

2. Bell模型给k(F)=k₀exp(Fxβ/kBT)；将kBT换算为pN·nm，1 pN·nm=10⁻²¹ J。

3. 随时间加载F=rt，未断裂存活概率S(F)满足dS/dF=−[k(F)/r]S；积分得到S(F)=exp{−[k₀kBT/(r xβ)](exp(Fxβ/kBT)−1)}。

4. 断裂力分布p(F)=k(F)S(F)/r，其对数导数为dlnp/dF=xβ/kBT−k(F)/r；内部极大处条件k(F*)=r xβ/kBT。

5. 当r xβ/(k₀kBT)>1时，峰值力F*=(kBT/xβ)ln[r xβ/(k₀kBT)]；若参数不满足该不等式，则最大值在F=0的边界。

6. T=298.15 K得kBT=4.11640499350 pN·nm。给定两加载率r₁=100和r₂=1000 pN/s，各自理论众数分别47.0966574649及70.7925894018 pN。

7. 两峰相减消除k₀：F₂*−F₁*=(kBT/xβ)ln(r₂/r₁)，反推xβ=0.400000000000 nm；因为r₂>r₁且峰差正，唯一正解。

8. 再由峰条件k₀=(r₁ xβ/kBT)exp(−F₁*xβ/kBT)=0.100000000000 s⁻¹；第二加载率回代得到相同k₀。

9. 峰时瞬时解离速率k(F₁*)=9.71721685868 s⁻¹，k(F₂*)=97.1721685868 s⁻¹，按加载速率同比增加。

10. 由存活积分求S₁(F₁*)=0.371684840213、S₂(F₂*)=0.368258221232，其各自断裂分数为1−S。

11. 令F→0得S→1；F增大S单调下降到0；同时用峰值条件和二阶导数负号证明两个内部众数唯一。

12. 本题忽略回结合、仪器柔性、加载率波动、多势垒、分子异质性与力依赖xβ；若出现多峰或突变路径，不能将两个众数直接解释为唯一分子机理。

### 数值答案向量
- thermal_energy_pN_nm: 4.116404993500001 pN nm
- peak_force_100_pN: 47.09665746489507 pN
- peak_force_1000_pN: 70.79258940179345 pN
- peak_force_difference_pN: 23.695931936898383 pN
- transition_distance_nm: 0.4 nm
- zero_force_offrate_s: 0.09999999999999998 s^-1
- force_offrate_peak_100_s: 9.717216858681766 s^-1
- force_offrate_peak_1000_s: 97.17216858681768 s^-1
- survival_at_peak_100: 0.3716848402134227 fraction
- survival_at_peak_1000: 0.3682582212316908 fraction
- ruptured_fraction_at_peak_100: 0.6283151597865773 fraction
- loading_rate_ratio: 10 ratio
- force_acceleration_factor_100: 97.17216858681765 ratio

**适用条件：** 本题忽略回结合、仪器柔性、加载率波动、多势垒、分子异质性与力依赖xβ；若出现多峰或突变路径，不能将两个众数直接解释为唯一分子机理。

**审核状态**：`quality_status=awaiting_expert_review`、`novelty_review_status=pending_cross_series_model_review`。

## UC-ADV11-O139｜肽酰胺EX2氘交换门控速率反演与双位点同位素峰卷积

### 中文题干
某假想多肽的酰胺位点1通过闭合C⇌开放O构象门控后进行H/D交换，开环一级常数k_o、关环一级常数k_c；开放态本征交换率k_int，满足准稳态EX2近似k_obs=k_o k_int/(k_c+k_int)。两缓冲pH下k_int分别为0.05000和0.5000 s⁻¹，实测对应表观交换常数0.00081300813008130及0.0028735632183908 s⁻¹，构象速率不变。分子上另有独立位点2，交换速率k_ref=0.001000 s⁻¹。第二pH下在D₂O中标记600.0 s，总肽浓度20.00 μmol/L，每个H→D质量净增1.006276746 Da。求k_o、k_c、开放平衡分数、各位点交换概率、0D/1D/2D同位素峰摩尔分数、平均氘引入数、质心质量增量及双重标记浓度；检查速率反演唯一性、概率归一和EX2条件。

### 严密逐步解析
1. 在EX2交换模型中肽链的同一酰胺NH可闭合C⇌开放O，开启一级常数k_o、关闭一级常数k_c；只有开放态以本征常数k_int被D₂O不可逆氘交换。

2. 假定k_c+k_int≫k_o，故开放态准稳态，未交换底物消耗的表观速率k_obs=k_o k_int/(k_c+k_int)，而不是k_o+k_int。

3. 两种pH缓冲条件改变本征交换常数k_int，但不改变构象开关常数，给定k_int,1=0.05000 s⁻¹，k_int,2=0.5000 s⁻¹。

4. 观测的两个HDX表观常数分别为0.000813008130081、0.00287356321839 s⁻¹；写倒数1/k_obs=1/k_o+(k_c/k_o)/k_int。

5. 由两组点(1/k_int,1/k_obs)的斜率求k_c/k_o=49.0000000000，截距1/k_o=250.000000000 s；两横坐标不同确保唯一。

6. 反算k_o=0.00400000000000 s⁻¹、k_c=0.196000000000 s⁻¹，两者均正，回代两实验的k_obs精确吻合。

7. 原构象开放平衡分数k_o/(k_o+k_c)=0.0200000000000，不是可直接等同于任意pH时交换概率。

8. 在第二条件D₂O交换600.0 s，第一位点交换概率p₁=1−exp(−k_obs,2 t)=0.821673284544。

9. 另一个独立的快速可接触NH位点假定k_ref=0.001 s⁻¹，其交换概率p₂=1−exp(−k_ref t)=0.451188363906。

10. 将两个独立位点的伯努利交换组合成M+0D、M+1D、M+2D三组分，概率分别0.09786777647、0.5314027986、0.3707294249，求和为1。

11. 平均氘交换数〈N_D〉=p₁+p₂=1.27286164845，若单个H→D净质量增量1.006276746 Da，则质心平均增量1.28085107771 Da。

12. 总肽物质浓度20.00 μmol/L时双重标记组分浓度=0.00000741458849837 mol/L。若EX2失效而转成EX1，或者不同位点交换相关，单指数/独立卷积模型均需修正。

### 数值答案向量
- HDX_kobs_pH1_s: 0.0008130081300813008 s^-1
- HDX_kobs_pH2_s: 0.002873563218390805 s^-1
- inverse_rate_slope: 49 dimensionless
- inverse_rate_intercept_s: 250 s
- opening_rate_s: 0.004 s^-1
- closing_rate_s: 0.196 s^-1
- open_equilibrium_fraction: 0.02 fraction
- site1_exchange_prob_600s: 0.8216732845438469 fraction
- site2_exchange_prob_600s: 0.4511883639059736 fraction
- M0_isotopologue_fraction: 0.09786777646876528 fraction
- M1_isotopologue_fraction: 0.5314027986126489 fraction
- M2_isotopologue_fraction: 0.3707294249185858 fraction
- mean_D_incorporations: 1.2728616484498205 D/molecule
- mean_mass_shift_Da: 1.2808510777102813 Da
- doubly_labelled_molar_conc: 0.000007414588498371717 mol/L
- isotopologue_probability_sum: 1 ratio
- exact_open_state_probability_under_intrinsic_exchange: 0.005714285714285715 fraction

**适用条件：** 总肽物质浓度20.00 μmol/L时双重标记组分浓度=0.00000741458849837 mol/L。若EX2失效而转成EX1，或者不同位点交换相关，单指数/独立卷积模型均需修正。

**审核状态**：`quality_status=awaiting_expert_review`、`novelty_review_status=pending_cross_series_model_review`。

## UC-ADV11-P139｜三态燃料驱动化学马达的非平衡环流、熵产生和绕行涨落

### 中文题干
某理想单分子化学马达在恒定燃料活度下沿三个状态E₁⇌E₂⇌E₃⇌E₁运行；各边顺时针一级跃迁速率k₊=8.000 s⁻¹，逆时针k₋=2.000 s⁻¹，任一步顺向消耗1个燃料F并生成W，逆向复原F；储液池与环境温度T=298.15 K恒定。所有态的跃迁速率相同，满足局域详细平衡ln(k₊/k₋)=Δμ_step/(RT)，R=8.314462618 J/(mol·K)。求稳态状态概率、每边顺/逆/净流和净完整循环通量、每循环无量纲亲和势与每摩尔驱动力、每分子熵产生率(单位kB/s)和每摩尔马达耗散功率；以60.00 s内净有向步数除以3作为广义绕行计数，给出期望、方差和标准差，并检查涨落统计、反向路径权重、局域概率守恒与详细平衡极限。

### 严密逐步解析
1. 设三态单分子催化环E₁⇌E₂⇌E₃⇌E₁，均匀正向转移速率k₊，逆向k₋，每一步前进相当于消耗一个化学燃料分子F并生成W，且储液池保持活度不变。

2. 列出连续时间Markov主方程dp_i/dt=k₊p_{i−1}+k₋p_{i+1}−(k₊+k₋)p_i，按循环下标模3记，转移保概率。

3. 三个状态转移完全对称，稳态唯一均匀p₁=p₂=p₃=1/3；非零转移速率使状态图强连通，保证唯一平稳分布。

4. 在各条边上正向净概率流J_edge=p_i k₊−p_{i+1}k₋=(k₊−k₋)/3，且三条边相同，故总概率积累为零。

5. k₊=8、k₋=2 s⁻¹时单边正向流2.6666666667 s⁻¹、逆向流0.66666666667 s⁻¹、净循环通量2.0000000000 cycles/s。

6. 采用局域详细平衡，每一步化学势驱动Δμ_step=RT ln(k₊/k₋)，沿完整三个反应步骤循环的无量纲亲和势A_c=3ln(k₊/k₋)。

7. 计算A_c=4.15888308336，每摩尔完整循环驱动力ΔG_c=RT A_c=10.3096924546 kJ/mol。

8. 非平衡稳态熵产生率按每单分子kB单位为Σ_edges J_edge ln[(p_i k₊)/(p_{i+1}k₋)]=3J_edge ln(k₊/k₋)=(k₊−k₋)ln4。

9. 得到单位kB的熵产生率8.31776616672 s⁻¹，按每摩尔酶分子换算耗散功率P=R T Σ=20.6193849092 kJ/(mol·s)，必须为非负。

10. 因为在任意构象的下一步正、逆跃迁率恒等，正逆事件可视为独立Poisson计数，60 s内净有向步数均值(k₊−k₋)t、方差(k₊+k₋)t。

11. 把有向步数除以3定义带分数的净绕行计数，60 s内其均值120.000000000、方差66.6666666667，标准差8.16496580928。

12. 时间反演下完整三步循环的速率权重比为(k₋/k₊)³=exp(−A_c)，这里仅比较路径权重；实际离散整循环次数需考虑始末状态边界。

13. 当k₊=k₋时每条边流为零、亲和力和耗散归零；若实际三个步骤不同、非指数等待或燃料活度变化，均匀稳态及Poisson绕行计数不再成立。

### 数值答案向量
- forward_step_fraction: 0.8 fraction
- backward_step_fraction: 0.19999999999999996 fraction
- steady_state_each_conformer: 0.3333333333333333 fraction
- forward_cycle_flux_s: 2.6666666666666665 s^-1
- reverse_cycle_flux_s: 0.6666666666666666 s^-1
- net_cycle_flux_s: 2 s^-1
- cycle_affinity_dimensionless: 4.1588830833596715 dimensionless
- cycle_drive_kJ_mol: 10.309692454598903 kJ/mol
- entropy_production_in_kB_per_s: 8.317766166719343 kB/s
- dissipated_power_J_mol_s: 20619.384909197805 J/(mol s)
- dissipated_power_kJ_mol_s: 20.619384909197805 kJ/(mol s)
- mean_net_cycles_60s: 120 cycles
- net_cycle_count_variance_60s: 66.66666666666667 cycles2
- net_cycle_count_sd_60s: 8.16496580927726 cycles
- reverse_forward_cycle_probability_ratio: 0.015625000000000007 ratio
- total_step_rate_s: 10 s^-1

**适用条件：** 当k₊=k₋时每条边流为零、亲和力和耗散归零；若实际三个步骤不同、非指数等待或燃料活度变化，均匀稳态及Poisson绕行计数不再成立。

**审核状态**：`quality_status=awaiting_expert_review`、`novelty_review_status=pending_cross_series_model_review`。

