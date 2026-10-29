# 第十一辑 I146/A145/O142/P142 高阶综合题

以下均为编辑草稿，未经人类专家批准不可发布，跨辑数学模型同构仍待复核。

## UC-ADV11-I146 Cu2p–LMM修正Auger参数的XPS差分充电校正及弛豫能

### 中文题干
对两种假想无机铜配合物固体进行XPS与Cu LMM Auger谱分析，样品1与2分别存在均匀但未知的正充电位移δ₁、δ₂。校准标准C1s的真实结合能284.800 eV，两样品测得C1s为286.300与285.600 eV；Cu2p核心结合能表观为934.200与933.500 eV，对应Cu LMM Auger动能表观为915.000与914.700 eV。规定表观结合能BE_obs=BE_true+δ、Auger动能KE_obs=KE_true−δ，修正Auger参数α'=BE_Cu2p+KE_CuLMM。在初态项差可忽略的简化末态弛豫近似中Δα'≈2ΔR。求两个充电位移、校正后的Cu核心和Auger能量、修正Auger参数与差、估算弛豫能差，严格回代检查共同充电抵消与能量单位，说明为何不能凭此单独认定价态或配位环境。

### 逐步严密解析
1. 假定两组无机铜化合物的XPS谱由表面充电造成同一常量电位位移δ_i；表观核心能级结合能BE_obs=BE_true+δ_i。

2. 同一充电位移使同一次测量的Auger电子动能KE_obs=KE_true−δ_i；位移符号与结合能相反。

3. 指定校准用非反应性C1s标准BE_C,true=284.800 eV，两样品测得C1s分别286.300和285.600 eV，因此δ₁与δ₂可直接反算。

4. 得到δ₁=1.50000000000 eV、δ₂=0.800000000000 eV，满足两组电位偏移不同但各组内部均匀的假设。

5. 样品1的Cu2p结合能表观值934.2 eV，去充电后BE₁=932.700000000 eV；Cu LMM Auger动能表观915 eV，校正后KE₁=916.500000000 eV。

6. 样品2的Cu2p表观933.5 eV，校正后BE₂=932.700000000 eV；Auger动能表观914.7 eV，校正后KE₂=915.500000000 eV。

7. 定义修正Auger参数α'=BE(core)+KE(Auger)，其中充电位移+δ与−δ精确抵消，不必使用C1s校准即可先获得该参数。

8. 样品1 α'₁=1849.20000000 eV，样品2 α'₂=1848.20000000 eV，差值Δα'=1.00000000000 eV。

9. 两样品校正后核心结合能差BE₁−BE₂=0.00000000000 eV，显著小于Auger参数差，说明不能仅凭未校正2p峰位声称氧化态不同。

10. 在简化的初态贡献抵消、末态屏蔽改变主导的Wagner近似下，α'差约为2倍终态外原子弛豫能差，估算ΔR≈Δα'/2=0.500000000000 eV。

11. 将充电前后数值重建到两个表观谱，检验BE_true+δ=BE_obs和KE_true−δ=KE_obs，且两样品α'在充电校正前后不变。

12. 此结果不能仅由Auger参数确认铜化合物的配位几何、共价性或形式价态；差分充电、C1s化学位移、表面不均一、卫星峰误指及Auger线重叠会使简化推断失效。

### 主要答案向量
- charging_shift_sample1_eV: 1.5 eV
- charging_shift_sample2_eV: 0.8000000000000114 eV
- corrected_Cu2p_sample1_eV: 932.7 eV
- corrected_Cu2p_sample2_eV: 932.7 eV
- corrected_CuLMM_sample1_eV: 916.5 eV
- corrected_CuLMM_sample2_eV: 915.5 eV
- modified_Auger_parameter_sample1_eV: 1849.2 eV
- modified_Auger_parameter_sample2_eV: 1848.2 eV
- Auger_parameter_difference_eV: 1 eV
- relaxation_energy_difference_eV: 0.5 eV
- core_initial_state_difference_eV: 0 eV
- core_shift_residual_eV: 5.684341886080802e-14 eV
- kinetic_energy_difference_eV: 1 eV
- relative_Auger_change_per_mille: 0.5410669840926307 per_mille

**适用范围：** 此结果不能仅由Auger参数确认铜化合物的配位几何、共价性或形式价态；差分充电、C1s化学位移、表面不均一、卫星峰误指及Auger线重叠会使简化推断失效。

**审核状态：** `publishable=false`, `exclude_from_official_bank=true`, `quality_status=awaiting_expert_review`, `novelty_review_status=pending_cross_series_model_review`。

## UC-ADV11-A145 数字微滴PCR双靶标Poisson定量、共阳独立性及不确定度审计

### 中文题干
双靶标数字微滴PCR定量核酸分析：反应分为20,000个独立等体积微滴，每滴体积0.8500 nL，按A/B荧光阳性状态计数为00阴性15900滴、10仅A阳性2500滴、01仅B阳性1400滴、11双阳性200滴。假定A、B独立按Poisson模型进入每滴、任一拷贝均被完整检测，无假阳、串色或微滴破损。求两个靶标的阴性滴比例、Poisson平均拷贝数λ_A和λ_B、每微升原样拷贝数、双阳独立预测滴数与观测偏差、2×2列联表Pearson χ²检验统计量及优势比、两个λ的一阶标准不确定度。检查微滴计数守恒、对数浓度反演的正性和唯一性、体积单位换算以及模型适用条件。

### 逐步严密解析
1. 每个数字微滴体积v_d=0.8500 nL=0.0008500 μL；假定DNA靶标A与B各自均匀随机进入微滴，且单滴拷贝数相互独立、分别服从Poisson分布。

2. 把20,000个微滴按A/B阳性状态分为00、10、01、11四格，计数依次15900、2500、1400、200，求和恰为总数。

3. 由A阴性微滴等于00+01，得到q_A=(15900+1400)/20000；B阴性微滴等于00+10，q_B=(15900+2500)/20000。

4. Poisson模型中零拷贝概率q=e^(−λ)，因此λ_A=−lnq_A、λ_B=−lnq_B，必须进行对数校正而非直接将阳性分率当浓度。

5. 数值反演λ_A=0.145025772050、λ_B=0.0833816089391个拷贝/滴，二者非负且各阴性比例位于(0,1)，唯一性来自负对数单调。

6. 用每滴体积换算浓度c_A=λ_A/v_d=170.618555353 copies/μL，c_B=98.0960105165 copies/μL。

7. 独立性假设给理论双阳概率p₁₁=(1−q_A)(1−q_B)=0.0108000000000，预测双阳滴数=216.000000000。

8. 实际双阳频率为0.0100000000000，与理论差=-0.000800000000000；有有限抽样波动不表示一定有跨靶标结合。

9. 构造2×2列联表，采用Pearson独立性χ²=N(ad−bc)²/[(a+b)(c+d)(a+c)(b+d)]，其中a=n00,b=n01,c=n10,d=n11。

10. 得到χ²=1.48930030810（自由度1）和优势比OR=(n00 n11)/(n10 n01)=0.908571428571，仅作本次数据关联检查，不能直接证明微滴靶标真正独立。

11. 阴性频率的一阶二项方差传播给u(λ)=√[(1−q)/(Nq)]，A和B对应0.00279346884860、0.00208514414057个拷贝/滴。

12. 本题要求微滴体积一致、检出灵敏度为1且没有假阳性/交叉串色；若DNA聚集、模板复合、破滴或体积不均，Poisson独立模型和统计不确定度将失效。

### 主要答案向量
- A_negative_partition_fraction: 0.865 fraction
- B_negative_partition_fraction: 0.92 fraction
- A_Poisson_lambda: 0.14502577205025774 copies/droplet
- B_Poisson_lambda: 0.08338160893905101 copies/droplet
- A_copies_per_uL: 170.6185553532444 copies/uL
- B_copies_per_uL: 98.09601051653061 copies/uL
- observed_double_positive_fraction: 0.01 fraction
- independent_model_double_positive_fraction: 0.010799999999999995 fraction
- predicted_double_positive_droplets: 215.99999999999991 droplets
- double_positive_residual_fraction: -0.0007999999999999952 fraction
- Pearson_independence_chi_square: 1.4893003080990013 chi_square
- contingency_odds_ratio: 0.9085714285714286 ratio
- A_lambda_binomial_se: 0.002793468848598904 copies/droplet
- B_lambda_binomial_se: 0.002085144140570747 copies/droplet
- droplet_conservation_residual: 0 droplets

**适用范围：** 本题要求微滴体积一致、检出灵敏度为1且没有假阳性/交叉串色；若DNA聚集、模板复合、破滴或体积不均，Poisson独立模型和统计不确定度将失效。

**审核状态：** `publishable=false`, `exclude_from_official_bank=true`, `quality_status=awaiting_expert_review`, `novelty_review_status=pending_cross_series_model_review`。

## UC-ADV11-O142 双叠氮CuAAC有限炔库存的二级积分动力学与0/1/2重点击分布

### 中文题干
一假想有机双叠氮骨架M(N₃)₂浓度0.01000 mol/L，每分子有两个等价、反应性独立的叠氮位点，总浓度A₀=0.02000 mol/L。加入末端炔有机标记物B，初始B₀=0.01500 mol/L，在恒定Cu(I)催化下发生不可逆1:1 CuAAC点击反应，每形成一个三唑键消耗一个叠氮和一个炔，无脱去小分子。设位点级二级速率常数k=200.0 L/(mol·s)，1.000 s后停止反应，浓度随时间满足dx/dt=k(A₀−x)(B₀−x)。原始分子式量300.0 g/mol，每接上一标记净增加100.0 g/mol。求积分速率式、1.000 s后的点击键浓度、剩余叠氮和炔、位点转换率、0/1/2重标记分子比例和浓度、数均/重均摩尔质量与分散度，核对叠氮、炔和分子数守恒、正根唯一性与模型边界。

### 逐步严密解析
1. 假设每个有机骨架分子有两个等价且独立的叠氮反应位点，浓度C_M=0.01000 mol/L，故最初叠氮位点浓度A₀=0.02000 mol/L。

2. 同一体积中末端炔试剂初始浓度B₀=0.01500 mol/L，Cu(I)催化叠氮-炔环加成CuAAC每反应一对位点生成一个1,2,3-三唑键，不生成小分子副产物。

3. 假定两个位点反应性相同、无位阻或协同，Cu(I)保持恒定，位点总转化键浓度x满足dx/dt=k(A₀−x)(B₀−x)，其中k=200.0 L/(mol·s)。

4. 将两因子分离变量得ln[(B₀−x)/(A₀−x)]=ln(B₀/A₀)+(B₀−A₀)kt；该式对不同初始浓度有效。

5. 定义r=(B₀/A₀)exp[(B₀−A₀)kt]，t=1.000 s时r=0.275909580879；由线性代数整理得x=(B₀−rA₀)/(1−r)=0.0130947850324 mol/L。

6. 因B₀<A₀，物理解满足0<x<B₀；剩余叠氮位点A₀−x=0.00690521496758，剩余炔B₀−x=0.00190521496758 mol/L。

7. 位点平均转化概率p=x/A₀=0.654739251621；两个等价位点独立，故一个分子有0、1、2个三唑键概率为(1−p)²、2p(1−p)、p²。

8. 三组分概率分别0.119204984371、0.452111528016、0.428683487613，乘分子浓度0.01000 mol/L得到组分浓度0.00119204984371、0.00452111528016、0.00428683487613。

9. 检查位点数守恒：单点击分子浓度+2×双点击分子浓度应等于x；未反应叠氮位点和被消耗炔的差均应符合初始物料衡算。

10. 每个原始骨架摩尔质量300.0 g/mol，加入的炔基标签质量100.0 g/mol（无小分子离去），三组分式量为300、400、500 g/mol。

11. 数均摩尔质量M_n=Σp_i M_i=430.947850324 g/mol，重均M_w=Σp_i M_i²/(Σp_i M_i)=441.438946351 g/mol，分散度M_w/M_n=1.02434423566≥1。

12. 质量作用微分方程的右端在0≤x≤B₀为非负，故转化单调且不会超过炔的总库存；若两位点不独立、催化剂失活或CuAAC不是单一步骤二级过程，二项式与积分速率式不再成立。

### 主要答案向量
- remaining_reagent_ratio: 0.27590958087858164 dimensionless
- click_bonds_formed_M: 0.013094785032417918 mol/L
- unreacted_azide_sites_M: 0.006905214967582082 mol/L
- free_alkyne_M: 0.001905214967582081 mol/L
- site_conversion_fraction: 0.6547392516208959 fraction
- unlabelled_molecules_fraction: 0.11920498437129906 fraction
- single_clicked_fraction: 0.45211152801561016 fraction
- double_clicked_fraction: 0.4286834876130908 fraction
- unlabelled_molecules_M: 0.0011920498437129907 mol/L
- single_clicked_molecules_M: 0.0045211152801561015 mol/L
- double_clicked_molecules_M: 0.004286834876130908 mol/L
- number_average_mass_g_mol: 430.94785032417917 g/mol
- weight_average_mass_g_mol: 441.4389463506592 g/mol
- dispersity: 1.0243442356623618 dimensionless
- alkyne_atoms_used_M: 0.013094785032417917 mol/L
- molecule_total_M: 0.01 mol/L
- reaction_speed_at_1s_M_s: 0.002631183782121839 mol/(L s)

**适用范围：** 质量作用微分方程的右端在0≤x≤B₀为非负，故转化单调且不会超过炔的总库存；若两位点不独立、催化剂失活或CuAAC不是单一步骤二级过程，二项式与积分速率式不再成立。

**审核状态：** `publishable=false`, `exclude_from_official_bank=true`, `quality_status=awaiting_expert_review`, `novelty_review_status=pending_cross_series_model_review`。

## UC-ADV11-P142 有机激子–微腔光子强耦合的避免交叉、Hopfield权重与Rabi反演

### 中文题干
某假想有机分子薄膜置于单模光学微腔，分子激子能E_x=2.1000 eV、腔光子能E_c=2.0000 eV，两者以实常数g=0.08000 eV耦合，忽略损耗对本征能影响。哈密顿矩阵H=[[E_c,g],[g,E_x]]，观测极化激元上下分支为其本征值。已知hc=1239.841984 eV·nm，ℏ=6.582119569×10⁻¹⁶ eV·s，腔模与激子能量线宽分别κ=0.04000、γ=0.06000 eV，采用简化强耦合条件g>(κ+γ)/4。求上下支能量、分裂、仅由分裂和失谐反演的g、下支光子/激子Hopfield权重、上支光子权重、真空等效波长、Rabi频率、零失谐分裂、腔粗略Q及强耦合判据裕度，并验证Hermitian归一、能量正性与损耗模型边界。

### 逐步严密解析
1. 假想有机分子激子能量E_x与微腔单模光子能E_c形成双模耦合，两基态能量由Hermitian 2×2哈密顿矩阵H=[[E_c,g],[g,E_x]]确定。

2. 在忽略声子耗散的本征能计算中，对角化得到E±=(E_c+E_x)/2±√[((E_c−E_x)/2)²+g²]，其中g取实且非负。

3. 给定E_c=2 eV、E_x=2.1 eV及g=0.08 eV，失谐Δ=E_x−E_c=0.100000000000 eV。

4. 平均能量2.05 eV，根号项0.0943398113206 eV，因此下支E−=1.95566018868、上支E+=2.14433981132 eV。

5. 避免交叉能隙E+−E−=0.188679622641 eV；独立由观测能隙与已知失谐反推g=(1/2)√[(E+−E−)²−Δ²]=0.0800000000000 eV，正根唯一。

6. 下支光子Hopfield概率C_ph,−²=(1+Δ/√(Δ²+4g²))/2，下支激子概率为1减其值；反之上支光子概率互补。

7. 计算下支光子分数=0.764999470002、激子分数=0.235000529998，两者均在[0,1]且和为1；失谐Δ>0保证下支偏光子。

8. 能量换算为光子真空等效波长λ=hc/E，给hc=1239.841984 eV·nm，得到下支633.976184194、上支578.192867313 nm。

9. 将上下支分裂换为角频率Ω=(E+−E−)/ℏ=2.86654808779e+14 rad/s；零失谐时预期分裂恰为2g=0.16 eV。

10. 给定腔模宽度κ=0.04 eV、激子宽度γ=0.06 eV，在题设采用的简化强耦合判据g>(κ+γ)/4下，阈值为0.025 eV，g/阈值=3.20000000000。

11. 微腔无损品质因子粗估Q=E_c/κ=50，不应把腔宽度和激子宽度错误地用于Hermitian能量根号而改变本征概率归一。

12. 本题强耦合判据是简化的线宽经验条件；真实光谱需用非Hermitian损耗、无序展宽、激子饱和、振动耦合及角分辨色散检验，不能将理想2×2矩阵直接视为实测极化激元材料参数。

### 主要答案向量
- lower_polariton_eV: 1.9556601886794338 eV
- upper_polariton_eV: 2.144339811320566 eV
- split_eV: 0.18867962264113203 eV
- reconstructed_coupling_eV: 0.07999999999999995 eV
- lower_photon_fraction: 0.7649994700015903 fraction
- lower_exciton_fraction: 0.2350005299984097 fraction
- upper_photon_fraction: 0.2350005299984097 fraction
- lower_wavelength_nm: 633.9761841944573 nm
- upper_wavelength_nm: 578.192867312601 nm
- Rabi_frequency_rad_s: 286654808778865 rad/s
- zero_detuning_split_eV: 0.16 eV
- coupling_over_threshold: 3.1999999999999997 ratio
- cavity_quality_factor: 50 dimensionless
- heuristic_strong_coupling_threshold_eV: 0.025 eV
- spectral_hypotenuse_eV: 0.18867962264113214 eV

**适用范围：** 本题强耦合判据是简化的线宽经验条件；真实光谱需用非Hermitian损耗、无序展宽、激子饱和、振动耦合及角分辨色散检验，不能将理想2×2矩阵直接视为实测极化激元材料参数。

**审核状态：** `publishable=false`, `exclude_from_official_bank=true`, `quality_status=awaiting_expert_review`, `novelty_review_status=pending_cross_series_model_review`。

