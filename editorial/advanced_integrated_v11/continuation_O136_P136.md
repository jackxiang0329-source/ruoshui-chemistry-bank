# 第十一辑 O136 / P136 题干与解析

本文件为待专家复核稿，机器计算不等于专家审核。

## UC-ADV11-O136｜Baeyer–Villiger迁移区域选择性与18O原子映射及响应校正

### 中文题干
假想苯乙酮PhCOCH₃以^18O富集过酸作Baeyer–Villiger氧化，只有苯基迁移（乙酸苯酯）与甲基迁移（苯甲酸甲酯）两不可逆并行路径；两条路径同反应级数且酯不进一步转化。原酮羰基氧为^16O而不交换，过酸实际插入氧原子的^18O比例80.00%，其余是^16O。起始苯乙酮0.01000 mol，转化率50.00%，所有耗用底物均转为两支酯。GC原始面积分别为8400、2400，响应系数分别1.200、0.800；T=298.15 K、R=8.314462618 J/(mol·K)，C/H/O原子量12.011/1.008/15.999。求产物比例及竞争速率比、两酯摩尔数、同位素插氧及原羰基氧的去向、未反应量、迁移活化自由能差G‡Ph−G‡Me、原酮及酯摩尔质量。明确分子式与原子守恒并解释为何不能将原酮羰基氧误当作过酸插氧。

### 完整解析
1. 底物苯乙酮PhC(=O)CH₃的Baeyer–Villiger氧化中，苯基迁移在C(=O)与Ph之间插入过酸氧，得到乙酸苯酯CH₃C(=O)OPh。

2. 若甲基迁移，则氧插在羰基碳与CH₃之间，得到苯甲酸甲酯PhC(=O)OCH₃；两产物都含C₈H₈O₂，而苯乙酮含C₈H₈O。

3. 过酸供给的氧中^18O原子占80.00%，且原有羰基氧为^16O且不交换；因此^18O位于产物C–O–R中的新增醚氧，不在羰基氧上。

4. 苯乙酮起始0.01000 mol，50.00%转化且无其它有机骨架产物，则两支酯产量之和0.005000 mol，剩余苯乙酮0.005000 mol。

5. GC峰面积必须分别除以响应因子；乙酸苯酯校正面积为8400/1.200=7000，苯甲酸甲酯为2400/0.800=3000。

6. 两支摩尔分率为p_Ph=0.70000000与p_Me=0.30000000；共同反应级数且无二次转化时k_Ph/k_Me=2.333333333。

7. 乙酸苯酯0.003500000000 mol，苯甲酸甲酯0.001500000000 mol；两者摩尔数加和为0.005 mol。

8. 酯产物新插氧总量0.005 mol，其中^18O=0.004000000000 mol、^16O=0.001000000000 mol；这与两产物总新醚氧数相符。

9. 每个酯均保留原底物一个羰基氧，因此产物原羰基^16O总数0.005000 mol；未反应酮还含原羰基^16O 0.005000 mol。

10. 相同指前因子Eyring竞争模型下ΔΔG‡=G‡Ph−G‡Me=−RT ln(k_Ph/k_Me)=-2.1004149871 kJ/mol。

11. 由原子量得苯乙酮C₈H₈O式量120.1510 g/mol，两种酯C₈H₈O₂式量136.1500 g/mol。每次氧化在有机骨架上新增恰一个氧，C与H均守恒。

12. 此模型假设Baeyer–Villiger为仅有的两支迁移、无同位素交换且响应校正准确；真实过酸副反应、产物水解和质谱同位素分辨率均可能导致偏差，机理归属须实验验证。

### 答案向量
- phenyl_branch = 0.7 fraction
- methyl_branch = 0.30000000000000004 fraction
- k_phenyl_over_k_methyl = 2.333333333333333 ratio
- phenyl_acetate_mol = 0.0034999999999999996 mol
- methyl_benzoate_mol = 0.0015000000000000002 mol
- inserted_18O_mol = 0.004 mol
- inserted_16O_mol = 0.001 mol
- unreacted_ketone_mol = 0.005 mol
- activation_G_phenyl_minus_methyl_kJ_mol = -2.1004149871352094 kJ/mol
- acetophenone_molar_mass = 120.15099999999998 g/mol
- ester_molar_mass = 136.14999999999998 g/mol
- substrate_molecular_balance = 0.009999999999999998 mol

状态：`publishable=false`, `exclude_from_official_bank=true`, `quality_status=awaiting_expert_review`, `novelty_review_status=pending_cross_series_model_review`。

## UC-ADV11-P136｜可逆二聚化学弛豫的Jacobian、Debye损耗峰与参数反演

### 中文题干
理想稀溶液仅有可逆二聚2A⇌A₂，正向二级常数k_f(L mol⁻¹ s⁻¹)、逆向一级常数k_r(s⁻¹)，总单体单元浓度C_T=[A]+2[A₂]=0.1000 mol/L；平衡常数K=k_f/k_r=[A₂]/[A]²=20.00 L/mol。恒温下给正向反应速率常数施加很小正弦相对扰动k_f→k_f[1+εexp(iωt)]，逆向常数不变、ε≪1。单弛豫耗散谱的峰在ω_peak=0.1000√17 rad/s。求平衡单体及二聚体浓度、动力学k_r和k_f、唯一稳定特征值λ、弛豫时间及Hz峰频；从反应守恒与动力学雅可比导出复响应χ(ω)=δ[A₂]/ε的静态幅值和峰频幅值、耗散幅与相位，并检查参数唯一、低高频极限及模型边界。

### 完整解析
1. 体系中只发生2A⇌A₂，假设理想稀溶液恒温恒体积，则总单体单元浓度C_T=[A]+2[A₂]=0.1000 mol/L，在反应中严格守恒。

2. 正向二级常数k_f、逆向一级常数k_r，平衡常数K=k_f/k_r=[A₂]/[A]²=20.00 L/mol。

3. 联立质量作用和平衡质量守恒，得到2K[A]²+[A]−C_T=0；在非负浓度区间左端严格增加，只存在一个正根。

4. 该正根[A]=[√(1+8KC_T)−1]/(4K)=0.0390388203202 mol/L；二聚体浓度[D]=K[A]²=0.0304805898399 mol/L。

5. 把[A]=C_T−2[D]代入动力学d[D]/dt=k_f[A]²−k_r[D]，沿守恒流形对平衡点求一阶导数，得到d(δD)/dt=−(k_r+4k_f[A]eq)δD。

6. 令λ=k_r+4k_f[A]eq=k_r√(1+8KC_T)，显然λ>0，平衡点局部稳定；频域损耗峰角频率观测为ω_peak=0.1√17=0.412310562562 rad/s。

7. 在单一Debye弛豫近似下ω_peak=λ，故反演k_r=0.100000000000 s⁻¹和k_f=Kk_r=2.00000000000 L/(mol·s)。

8. 弛豫时间τ=1/λ=2.42535625036 s、峰频f=λ/(2π)=0.0656212641207 Hz，必须区分角频率rad/s与普通Hz。

9. 为定义响应，额外对正向速率常数施加无量纲小驱动k_f→k_f(1+εe^{iωt})，仅保留ε一阶项；导出dδD/dt+λδD=k_f[A]eq² εe^{iωt}。

10. 以χ(ω)=δD_amplitude/ε定义复响应，得χ(ω)=χ₀/(1+iωτ)，静态系数χ₀=k_f[A]eq²/λ=0.00739262890829 mol/L。

11. 峰位置ωτ=1时幅值|χ|=0.00522737803185 mol/L，耗散分量−Imχ=0.00369631445415 mol/L，按e^{iωt}驱动惯例相位为−π/4。

12. 低频ωτ≪1时χ→χ₀、高频ωτ≫1时χ→0；若存在其它缔合态、活度非理想、驱动改变逆反应或多个弛豫时间，单峰模型不再适用。

### 答案向量
- equilibrium_A_mol_L = 0.039038820320220755 mol/L
- equilibrium_dimer_mol_L = 0.03048058983988962 mol/L
- reverse_rate_s = 0.1 s^-1
- forward_rate_L_mol_s = 2 L/(mol s)
- relaxation_rate_s = 0.412310562561766 s^-1
- relaxation_time_s = 2.42535625036333 s
- loss_peak_Hz = 0.06562126412070522 Hz
- static_susceptibility_mol_L = 0.007392628908293729 mol/L
- peak_amplitude_mol_L = 0.005227378031850199 mol/L
- peak_loss_mol_L = 0.0036963144541468647 mol/L
- phase_lag_rad = -0.7853981633974483 rad
- total_monomer_units_mol_L = 0.09999999999999999 mol/L
- jacobian_factor = 4.123105625617661 dimensionless

状态：`publishable=false`, `exclude_from_official_bank=true`, `quality_status=awaiting_expert_review`, `novelty_review_status=pending_cross_series_model_review`。

