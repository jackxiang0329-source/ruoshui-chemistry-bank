# 第十二辑第五批四道大学化学高难度综合题

以下为编辑稿，不等于专家通过、原创性确认或正式出版许可。

## UC-ADV12-I155 Ni3Al低温电子—Debye声子热容分离、德拜温度与熵能积分

### 完整题干
一种假想金属间无机化合物Ni₃Al的低温摩尔热容（每摩尔化学式）由电子与Debye声子贡献C(T)=γT+βT³构成，测得T₁=5.000 K时C₁=0.0225000000000000 J/(mol·K)、T₂=10.00 K时C₂=0.120000000000000 J/(mol·K)。Ni₃Al每化学式含4原子，低温Debye系数β=(12π⁴nR)/(5Θ_D³)，n=4，R=8.314462618 J/(mol·K)。给定Ni/Al摩尔原子量58.6934/26.9815 g/mol。将C/T对T²线性化，唯一求电子Sommerfeld γ、声子β与Debye温度Θ_D；计算10 K的电子/声子贡献、电子分数和0–10 K的熵增加与内能增加，并逐项回代热容、原子数、低温T≪Θ_D、量纲和可能磁性Schottky项的失效情形。

### 中文分步解析
1. 假想金属间化合物Ni₃Al的低温等压与定容热容差可以忽略，在题设温度范围应用Sommerfeld电子热容与Debye声子T³律。

2. 每摩尔Ni₃Al式量含4个原子，低温热容写作C(T)=γT+βT³，其中γ单位J/(mol·K²)、β单位J/(mol·K⁴)。

3. 实验在5.000 K与10.00 K测得C₅与C₁₀，先对每组除以T得到C/T=γ+βT²，避免直接解高度尺度不均的线性方程。

4. 两点数据分别C₅=0.0225000000000、C₁₀=0.120000000000 J/(mol·K)，对应C/T严格为T²的直线。

5. 由斜率β=[C₁₀/T₂−C₅/T₁]/(T₂²−T₁²)=0.000100000000000 J/(mol·K⁴)。

6. 由截距求γ=0.00200000000000 J/(mol·K²)，γ与β均正，保证所选温度范围热容为正。

7. 低温Debye理论β=(12π⁴ n R)/(5 Θ_D³)，其中n=4为每式量原子数而非Ni数量。

8. 反算Debye温度Θ_D=426.810376786 K，远大于10.00 K，支持T³低温近似。

9. 在10 K电子热容γT=0.0200000000000、晶格热容βT³=0.100000000000 J/(mol·K)，电子分数=0.166666666667。

10. 通过可逆加热积分，低温摩尔熵S(T)−S(0)=∫₀ᵀ C(T')/T' dT'=γT+(β/3)T³，题设取S(0)=0。

11. 故10 K热激发熵=0.0533333333333 J/(mol·K)，相对于0 K的热激发内能U(T)−U(0)=∫₀ᵀ C(T')dT'=0.350000000000 J/mol。

12. Ni₃Al式量M=3×58.6934+26.9815=203.061700000 g/mol，换算每克热容时应按式量而不是每原子摩尔。

13. 真实金属间化合物可能有磁性热容、电子关联、Schottky中心及声子非Debye项；由两点低温拟合得到的Θ_D只是指定近似的等效参数。

### 主要答案向量
- heat_capacity_5K_J_molK: 0.0225 J/(mol K)
- heat_capacity_10K_J_molK: 0.12000000000000001 J/(mol K)
- electronic_gamma_J_molK2: 0.0019999999999999996 J/(mol K2)
- Debye_beta_J_molK4: 0.0001 J/(mol K4)
- Debye_temperature_K: 426.810376786438 K
- electronic_heat_10K_J_molK: 0.019999999999999997 J/(mol K)
- phonon_heat_10K_J_molK: 0.1 J/(mol K)
- electronic_fraction_10K: 0.16666666666666666 fraction
- lowT_entropy_10K_J_molK: 0.05333333333333333 J/(mol K)
- lowT_internal_energy_10K_J_mol: 0.35 J/mol
- Ni3Al_formula_mass_g_mol: 203.0617 g/mol
- phonon_over_electron_heat_10K: 5.000000000000001 ratio
- heat_capacity_div_T_10K: 0.012 J/(mol K2)
- Debye_beta_backcalculated: 0.0001000000000000001 J/(mol K4)

审核：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

## UC-ADV12-A155 双通道单分子FRET串色校正、距离与寿命双反演及光子不确定度

### 完整题干
一种假想单分子有机荧光染料FRET实验，在固定激发功率下得到供体通道计数I_D=400、受体原始通道计数I_A,raw=700。受体信号中来自供体光谱串色的比例α=0.1000 I_D，受体直接激发背景独立测为60个光子；受体/供体亮度校正因子γ=0.7500，采用E=I_A,corr/(I_A,corr+γI_D)。Förster距离R₀=5.000 nm，距离式E=1/[1+(r/R₀)⁶]。供体单独寿命τ_D0=4.000 ns，假设配对后唯有FRET新增淬灭，τ_DA=τ_D0(1−E)。计算校正受体与总计数、E、r、τ_DA、能量转移率k_ET，并以题设有效加权光子数N_eff=I_A,corr+γI_D采用理想二项近似估算σ_E、距离的一阶传播标准差σ_r。核查背景、分数、寿命和几何唯一性以及实际染料标定局限。

### 中文分步解析
1. 对假想单分子有机荧光供体–受体染料对进行smFRET分析，光子统计采用指定光学检出近似，供体检测通道I_D=400个光子。

2. 受体检测通道原始计数I_A,raw=700，其中供体串色为αI_D、α=0.1000，受体被供体激发激光直接激发的背景独立测定为60个光子。

3. 先扣两类受体伪计数，校正受体计数I_A,corr=I_A,raw−α I_D−I_direct；不能把串色误当作有效能量转移光子。

4. 计算I_A,corr=600.000000000、串色=40、直接激发=60个光子。

5. 检测效率和量子产率差异由题设γ=0.7500校正，采用E=I_A,corr/(I_A,corr+γI_D)。

6. 校正总有效权重=900.000000000，FRET效率E=0.666666666667，非转移分率1−E=0.333333333333。

7. Förster距离规律E=1/[1+(r/R₀)⁶]，已知R₀=5.000 nm，故r=R₀[(1/E)−1]^(1/6)。

8. 求染料有效距离r=4.45449359070 nm，在0<E<1时正根唯一；实际距离还会受到染料取向κ²的影响。

9. 假设只有FRET额外非辐射通道改变供体寿命，供体单独寿命τ_D0=4.000 ns，配对后寿命τ_DA=τ_D0(1−E)。

10. 预测τ_DA=1.33333333333 ns，能量转移速率k_ET=1/τ_DA−1/τ_D0=0.500000000000 ns⁻¹。

11. 为了估计理想光子计数不确定度，采用题设有效加权光子数N_eff=I_A,corr+γI_D，近似二项标准差σ_E≈√[E(1−E)/N_eff]。

12. 得到σ_E=0.0157134840264，一阶误差传播|dr/dE|=r/[6E(1−E)]，距离标准不确定度σ_r=0.0524967104123 nm。

13. 加权N_eff只是近似有效计数，实际不确定度应计入串色/γ/直接激发标定误差、暗计数、染料闪烁和光子时间相关；此题不证明实际单分子距离真实精度。

### 主要答案向量
- corrected_acceptor_photons: 600 photons
- gamma_corrected_total_count: 900 effective_photons
- FRET_efficiency: 0.6666666666666666 fraction
- donor_inefficiency_fraction: 0.33333333333333337 fraction
- interdye_distance_nm: 4.454493590701697 nm
- predicted_donor_lifetime_ns: 1.3333333333333335 ns
- energy_transfer_rate_ns_inv: 0.4999999999999999 ns^-1
- effective_photon_count: 900 photons
- ideal_shotnoise_sigma_E: 0.015713484026367724 fraction
- propagated_distance_sigma_nm: 0.05249671041228638 nm
- corrected_acceptor_to_donor_ratio: 2 ratio
- total_acceptor_correction_photons: 100 photons
- donor_leakage_photons: 40 photons
- direct_acceptor_excitation_photons: 60 photons
- FRET_geometric_backcheck: 0.6666666666666665 fraction

审核：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

## UC-ADV12-O152 AA–BB失配逐步聚加成Carothers链数、端基统计与质量守恒

### 完整题干
一种假想理想双官能有机逐步聚加成以AA和BB单体反应生成线性A–B共聚链，初始AA分子浓度N_A=0.1000 mol/L、BB分子浓度N_B=0.08000 mol/L，每单体各有两个同类官能团，AA与BB的官能团形成新键时不放出小分子。反应结束时限量B官能团的转化率p_B=0.7500。严格假定所有反应都是两个不同链之间的加成，无环化、支化、链断裂或体积变化。给定AA单体摩尔质量200.0 g/mol、BB单体150.0 g/mol。求形成的键摩尔量、反应后独立链浓度、数均聚合度与Carothers式、A基团转化率、残余A/B端基浓度与端基分数、数均链式量、每链两种单体数、限量基团完全消耗时的最大聚合度，并以分子数、端基数和总质量守恒独立复核。

### 中文分步解析
1. 研究一种假想理想双官能AA型和BB型有机单体的逐步聚加成，AA和BB之间每形成一条键都把两个原来的分子链连成一条，不产生小分子。

2. 初始AA单体浓度N_A=0.1000 mol/L，每分子有两个A反应基团，初始A官能团总量0.2000 mol/L。

3. 初始BB单体N_B=0.08000 mol/L，每分子有两个B反应基团，初始B官能团总量0.1600 mol/L，B官能团为限量官能团。

4. 在题设反应结束时B官能团转化率p_B=0.7500，无环化、无支化和链断裂，形成的A–B键浓度等于2N_B p_B。

5. 算得新键总浓度bonds=0.120000000000 mol/L，每条键连接两个组分而不消耗或新增任何单体骨架。

6. 若没有闭环，每形成一条新键使独立分子链总数减少1，因此链浓度N_chain=N_A+N_B−bonds。

7. 此时链浓度N_chain=0.0600000000000 mol/L，平均每链包含单体数DP_n=(N_A+N_B)/N_chain=3.00000000000。

8. 以初始单体计量比r=N_B/N_A=0.8000，Carothers失配公式DP_n=(1+r)/(1+r−2rp_B)也给相同数值。

9. A基团已反应分数p_A=bonds/(2N_A)=0.600000000000；反应后未消耗A、B端基浓度分别0.0800000000000与0.0400000000000 mol/L。

10. 每条线性聚合物平均保留两个端基，故剩余官能团总量unA+unB=2N_chain；A端基分数unA/(2N_chain)，B端基分数unB/(2N_chain)。

11. 求端基分数A=0.666666666667、B=0.333333333333，两者和为1，体现非化学计量导致的A富集。

12. 题设AA单体式量200.0 g/mol、BB单体式量150.0 g/mol，聚加成不释放质量，骨架质量浓度M_tot=200N_A+150N_B。

13. 总聚合骨架质量=32.0000000000 g/L，数均链式量M_n=M_tot/N_chain=533.333333333 g/mol。

14. 即使B基团全部消耗，最大理论DP_n=(N_A+N_B)/(N_A−N_B)，仍有限；一旦出现分子内环化、支化或缩聚放出小分子，链计数与式量公式需重新推导。

### 主要答案向量
- formed_AB_bonds_M: 0.12 mol/L
- polymer_chain_concentration_M: 0.06 mol/L
- number_average_degree_of_polymerization: 3 monomers/chain
- initial_B_over_A_monomer_ratio: 0.7999999999999999 ratio
- A_functional_conversion: 0.6 fraction
- unreacted_A_end_groups_M: 0.08000000000000002 mol/L
- unreacted_B_end_groups_M: 0.04000000000000001 mol/L
- A_terminus_fraction: 0.6666666666666669 fraction
- B_terminus_fraction: 0.3333333333333334 fraction
- polymer_skeleton_mass_g_L: 32 g/L
- number_average_chain_mass_g_mol: 533.3333333333334 g/mol
- mean_A2_units_per_chain: 1.6666666666666667 units/chain
- mean_B2_units_per_chain: 1.3333333333333335 units/chain
- maximum_stoichiometric_DPn: 8.999999999999998 monomers/chain
- molecule_count_reconstruction_M: 0.18 mol/L
- total_unreacted_functional_end_groups_M: 0.12000000000000002 mol/L

审核：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

## UC-ADV12-P152 Nernst–Planck双离子开路扩散电势与双极性扩散守恒

### 完整题干
理想稀二元1:1电解质M⁺A⁻在厚度L=1.000 mm的液层中沿x方向扩散，左右端浓度分别c_L=0.2000 mol/L、c_R=0.1000 mol/L，两端储液池保持固定浓度。温度298.15 K，阳离子、阴离子自由扩散系数D_+=2.000×10⁻⁹、D_−=1.000×10⁻⁹ m²/s。局部电中性c_+=c_−=c，电极开路无净离子电流，对两种离子分别采用Nernst–Planck式J_i=−D_i dc/dx−z_i D_iFc/(RT) dφ/dx，z_+=+1、z_−=−1；R=8.314462618 J/(mol·K)、F=96485.33212 C/mol。推导零电流电场、双极性扩散系数、相等阳/阴离子通量、左右扩散电势差、输运分数和两离子电流抵消、固定端点的最长线性扩散模态时间，严格核验浓度SI单位、势差符号、浓度和电荷守恒与模型边界。

### 中文分步解析
1. 考虑一价盐M⁺A⁻在一维液层中无外部电路电流的扩散，局部电中性给c_+=c_-=c(x)，两种离子扩散系数D_+=2.000×10⁻⁹、D_−=1.000×10⁻⁹ m²/s。

2. 在稀理想溶液、恒温条件下，用Nernst–Planck式J_+=−D_+ dc/dx−(D_+F/RT)c dφ/dx。

3. 阴离子荷数−1，对应J_−=−D_− dc/dx+(D_−F/RT)c dφ/dx，注意电迁移项符号反向。

4. 开放电路零净电流条件j=F(J_+−J_−)=0，推得dφ/dx=(RT/F)[(D_−−D_+)/(D_++D_−)] dln c/dx。

5. 代入任一通道得到盐的共同粒子通量J_s=J_+=J_−=−D_amb dc/dx，其中D_amb=2D_+D_−/(D_++D_−)。

6. 计算D_amb=1.33333333333e-9 m²/s，介于两种离子扩散系数之间，反映快离子被扩散电场约束。

7. 两端固定浓度左c_L=0.2000 mol/L、右c_R=0.1000 mol/L；转成SI浓度分别200与100 mol/m³。

8. 液层厚度L=0.001 m，梯度dc/dx=-100000.000000 mol/m⁴，故盐通量J_s=0.000133333333333 mol/(m²·s)，从左向右为正。

9. 将电势导数沿层厚积分得Δφ=φ_R−φ_L=(RT/F)[(D_−−D_+)/(D_++D_−)]ln(c_R/c_L)。

10. 计算Δφ=5.93624625979 mV；由于阳离子扩散更快，向右的扩散电势为正，以抵消额外的阳离子通量。

11. 理想离子输运分数t_+=D_+/(D_++D_−)=0.666666666667、t_−=0.333333333333；两者相加为1。

12. 在零电流条件下两种离子的通量相等且各自电流密度的绝对值FJ_s=12.8647109493 A/m²，正负符号抵消，净电流为零。

13. 若两端浓度固定、层内参数均匀，线性扰动最慢衰减时间为L²/(π² D_amb)，这是含Dirichlet端点的扩散模态估算。

14. 得到时间尺度75.9908877318 s，不能将其误解释成离子单独的漂移穿越时间。

15. 模型需局部电中性、无限稀活度、无对流、浓差边界固定且无显著Debye层；多价离子、浓电解质非理想、膜固定电荷或外加电流时须解更完整Poisson–Nernst–Planck方程。

### 主要答案向量
- ambipolar_diffusivity_m2_s: 1.3333333333333333e-9 m2/s
- concentration_gradient_mol_m4: -100000 mol/m4
- salt_flux_mol_m2_s: 0.00013333333333333334 mol/(m2 s)
- diffusion_potential_right_minus_left_mV: 5.93624625979223 mV
- cation_transference_fraction: 0.6666666666666666 fraction
- anion_transference_fraction: 0.3333333333333333 fraction
- each_ion_charge_current_magnitude_A_m2: 12.864710949333334 A/m2
- net_electric_current_A_m2: 0 A/m2
- slab_longest_mode_time_s: 75.99088773175333 s
- log_right_left_activity_ratio: -0.6931471805599453 dimensionless
- left_electrolyte_M: 0.2 mol/L
- right_electrolyte_M: 0.1 mol/L
- diffusion_coefficient_ratio: 2 ratio
- dimensionless_potential: 0.23104906018664842 dimensionless
- relative_ambipolar_diffusivity: 0.44444444444444436 ratio

审核：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

