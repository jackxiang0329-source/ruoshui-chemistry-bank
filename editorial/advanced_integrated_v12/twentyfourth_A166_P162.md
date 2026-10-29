# 第十二辑 A166/P162 完整解答

此处仅为待专家审核稿件。

## UC-ADV12-A166 Karl Fischer库仑水分的空白漂移、法拉第效率与回收不确定度

### 完整题干
某实验用电生碘Karl Fischer库仑法测定溶剂微量水，每1 mol水消耗1 mol I₂，2I⁻→I₂+2e⁻，有效法拉第效率η=0.9750。样品质量0.5000 g，模拟真实水375.0 μg，电解150.0 s，恒定空白水漂移0.2000 μg/s；F=96485.33212 C/mol，M(H₂O)=18.01528 g/mol。样品实测电量4.44939213522333 C。之后加入200.0 μg水标准，另积分80.0 s测得加标电量2.37300913878578 C。求空白电量、净样品水质量、样品水ppm、有效电生碘摩尔数、平均电流、加标水回收率。假定电量标准不确定度0.01000 C、空白漂移速率不确定度0.01000 μg/s且独立，计算样品水质量与ppm的合成标准不确定度；审核电子/碘/水计量、空白水衡算及实验局限。

### 分步解答
1. 电极反应2I⁻→I₂+2e⁻，每摩尔水参与Karl Fischer反应需一摩尔I₂；故两摩尔电子对应一摩尔有效反应水。

2. 已校准有效电生碘法拉第效率η=0.9750，总水当量为m_eq=η Q M_H₂O/(2F)，F=96485.33212 C/mol、水摩尔质量18.01528 g/mol。

3. 假想样品0.5000 g含375.0 μg水，积分150.0 s，仪器以恒定背景湿气漂移0.2000 μg/s；原始电量必须包含样品水与漂移。

4. 样品测得积分电量4.44939213522 C，其中漂移等效电量0.329584602609 C。

5. 未经漂移扣除总水当量为405.000000000 μg，空白水为30.0000000000 μg。

6. 净样品水质量m_sample=ηQ M/(2F)−drift×time=375.000000000 μg。

7. 除以0.5000 g样品质量得到质量分数ppm=750.000000000 mg/kg，平均电生电流Q/t=0.0296626142348 A。

8. 用200.0 μg独立水标准作后加标，在80.0 s内积分增量电量，期间同样发生空白水漂移。

9. 得到加标电量2.37300913879 C，80 s空白水16.0000000000 μg。

10. 经效率和漂移修正标准水回收200.000000000 μg，回收率100.000000000%。

11. 假设电量的独立标准不确定度σ_Q=0.01000 C，漂移速率独立标准不确定度σ_d=0.01000 μg/s，称重与效率不确定度暂忽略。

12. 按一阶误差传播，σ_m²=[η M σ_Q/(2F)]²+(tσ_d)²，不能把两个标准差直接算术相加。

13. 合成标准不确定度σ_m=1.75457426296 μg，浓度标准不确定度3.50914852591 ppm。

14. 本模型假设氧化副反应与电子利用效率可独立校准，真实水分测试还可能受样品副反应、阳极膜、反应终点不稳定、湿气速率漂移等影响。

### 结果与单位
- sample_total_charge_C: 4.44939213522333 C
- blank_drift_charge_C: 0.3295846026091356 C
- sample_blank_corrected_charge_C: 4.119807532614194 C
- effective_iodine_mol: 0.000022480916200025754 mol
- uncorrected_water_ug: 405 ug
- sample_blank_water_ug: 29.999999999999996 ug
- corrected_sample_water_ug: 375 ug
- sample_water_mass_ppm: 750 ppm
- average_current_A: 0.0296626142348222 A
- standard_spike_charge_C: 2.3730091387857764 C
- standard_period_blank_water_ug: 16 ug
- recovered_spike_water_ug: 200 ug
- standard_recovery_percent: 100 percent
- water_mass_combined_uncertainty_ug: 1.754574262956273 ug
- water_ppm_combined_uncertainty: 3.509148525912546 ppm
- sample_water_fraction: 0.00075 fraction
- total_electron_equivalent_mol: 0.00004496183240005151 mol
- blank_electrolysis_fraction: 0.07407407407407408 fraction

## UC-ADV12-P162 Bell–Evans动态力谱的断裂概率分布与加载速率效应

### 完整题干
单分子动力学实验在298.15 K用匀速加载f(t)=rt拉断某化学键，零力解离速率k₀=0.1000 s⁻¹、过渡态距离x‡=0.5000 nm，受力Bell速率k(f)=k₀exp(fx‡/(kBT))，kB=1.380649×10⁻²³ J/K、1 pN·nm=10⁻²¹ J。两种加载速率r₁=10.00、r₂=40.00 pN/s。推导随力的生存概率S(f)、断裂力概率密度p(f)及归一，给出各加载速度下最可能断裂力及中位断裂力；在10 pN/s下计算15和30 pN时的生存与累计断裂概率，以及峰位处解离速率和瞬时平均寿命。验证四倍加载速率使最可能断裂力增加(kBT/x‡)ln4，判断峰位从内部退化到f=0的条件，并区分瞬时化学反应速率、概率密度和累计概率。

### 分步解答
1. 单分子不可逆键解离采用Bell–Evans模型，载荷f=rt从0匀速增加，零力解离常数k₀=0.1000 s⁻¹，过渡态距离x‡=0.5000 nm。

2. 给定k_B=1.380649×10⁻²³ J/K及T=298.15 K，用1 pN nm=10⁻²¹ J把热能kBT换算为pN nm。

3. 受力依赖速率k(f)=k₀exp[fx‡/(kBT)]，定义α=x‡/(kBT)和a=k₀/(rα)，分别为力倒数和无量纲量。

4. 计算kBT=4.11640499350 pN nm、特征力kBT/x‡=8.23280998700 pN，r=10 pN/s时a=0.0823280998700。

5. 令S(f)表示加载至力f仍保持结合的生存概率，因df/dt=r，满足dS/df=−[k(f)/r]S。

6. 积分并用初始条件S(0)=1得到S(f)=exp[−a(exp(αf)−1)]，对应断裂力概率密度p(f)=k(f)S(f)/r。

7. 对f≥0，积分∫p(f)df=S(0)−S(∞)=1，生存概率与累计断裂概率之和严格等于1。

8. 求p(f)峰值条件dlnp/df=α−k(f)/r=0，得到f*=(1/α)ln(rα/k₀)，仅rα>k₀时是正的内点极大值。

9. r=10 pN/s时最可能断裂力f*=20.5576788802 pN，峰值处解离率k(f*)=1.21465210734 s⁻¹。

10. 中位断裂力由S(f50)=1/2给出f50=(1/α)ln[1+(ln2)/a]，不等于最可能断裂力。

11. r=10 pN/s时中位力=18.4642467691 pN，15 pN时生存概率0.652597052242、30 pN时生存概率0.0466010524788。

12. 将加载速度升为40 pN/s，最可能力增至31.9707769413 pN，位移11.4130980611 pN，等于(kBT/x‡)ln4。

13. 相应新中位力为29.1942481681 pN；S(0)=1且断裂力概率密度的单位为pN⁻¹而非s⁻¹。

14. 当rα≤k₀时概率密度峰位于f=0边界；真实多势垒、反复再结合、反应坐标强制改变及非恒定载荷需重新建模。

### 结果与单位
- thermal_energy_pN_nm: 4.116404993500001 pN nm
- Bell_force_scale_pN: 8.232809987000001 pN
- dimensionless_ramp_factor: 0.08232809987000002 ratio
- most_probable_force_10pN_per_s: 20.557678880191624 pN
- median_force_10pN_per_s: 18.464246769116432 pN
- most_probable_force_40pN_per_s: 31.970776941341246 pN
- median_force_40pN_per_s: 29.19424816810783 pN
- mode_shift_pN: 11.413098061149622 pN
- hazard_rate_at_first_mode_s: 1.2146521073352203 s^-1
- hazard_lifetime_at_mode_s: 0.8232809987000002 s
- bond_survival_at_15pN: 0.6525970522421276 fraction
- rupture_cdf_at_15pN: 0.3474029477578724 fraction
- bond_survival_at_30pN: 0.046601052478810516 fraction
- rupture_cdf_at_30pN: 0.9533989475211895 fraction
- survival_at_mode: 0.39944791404722274 fraction
- rupture_density_at_zero_force_pN_inv: 0.01 pN^-1
- rupture_density_at_mode_pN_inv: 0.0485190250568117 pN^-1
- factor_four_loading_analytical_shift_pN: 11.413098061149622 pN
- force_zero_rupture_cdf: 0 fraction

