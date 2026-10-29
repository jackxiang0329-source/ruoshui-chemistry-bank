# 第十一辑 I147 / A146 / O143 / P143 高阶题目与解析

所有题目为待专家审核草稿，独立数值计算与跨辑词项筛查不能证明原创性。

## UC-ADV11-I147 V2O5局部键价指数约束的长键反演、畸变指标与化学计量审计

### 中文题干
假想V₂O₅晶体的一个V(V)局部六配位氧环境中，两条相同短V–O键长1.600 Å，其余四条等长长键未知。采用经验键价模型s_i=exp[(R₀−R_i)/B]，参数R₀=1.803 Å、B=0.370 Å，局部V(V)键价总和S=5.000。求短键/长键各自键价、未知长键长度、键价回代总和、六配位平均V–O长度、无量纲畸变指数Δ=(1/6)Σ[(R_i−〈R〉)/〈R〉]²，以及短长键各贡献的形式价分数。另以整体V₂O₅两V五O的化学计量检查电荷中性，说明局部键价和整体氧桥联并非一一对应，以及指数反问题的唯一性与经验模型局限。

### 逐步中文解析
1. 以假想V₂O₅无机固体的一个六配位V(V)中心作为局部几何模型，两根V−O短键长度1.600 Å，其余四根等长长键未知。

2. 采用题设经验键价定律s_i=exp[(R₀−R_i)/B]，参数R₀=1.803 Å、B=0.370 Å，键价s为无量纲；正值与距离单调反向相关。

3. 对V(V)中心要求键价和S=Σ_i s_i=5.000，描述局部形式氧化态+5，而非实际电子密度的严格积分。

4. 每根短键键价s_s=exp[(R₀−1.600)/B]=1.73091236594，两短键合计3.46182473187。

5. 四根长键分担剩余键价5−2s_s，因此每根s_l=(5−2s_s)/4=0.384543817031，为正且小于s_s。

6. 由单调指数逆函数唯一反推出长键长度R_l=R₀−B ln s_l=2.15660808908 Å，满足R_l>R_s。

7. 回代两短四长的六配位键价和S=2s_s+4s_l=5.00000000000，与形式+5相吻合。

8. 平均V−O距离〈R〉=(2R_s+4R_l)/6=1.97107205939 Å。

9. 按题设畸变指数Δ=(1/6)Σ_i[(R_i−〈R〉)/〈R〉]²，求Δ=0.0177207259760，其量纲为零且Δ≥0。

10. 短键贡献总键价分数2s_s/5=0.692364946375，长键贡献4s_l/5=0.307635053625，两者总和为1。

11. 整体V₂O₅式量内两V(V)形式总正价为+10，五个O²⁻总负电为−10，化学计量电中性；若只观察一个局部V−O六面体，不能假定每个O都只连接这一V。

12. 键价参数依赖配位环境、共价性与经验训练集；真实V₂O₅畸变配位并非严格两短四等长，氧位点桥联数和XRD热振动也会改变反演，需实验核验。

### 主答案向量
- short_bond_valence: 1.7309123659372385 valence
- long_bond_valence: 0.38454381703138074 valence
- inferred_long_bond_length_A: 2.15660808908223 Angstrom
- vanadium_BVS: 5 valence
- octahedral_mean_distance_A: 1.9710720593881532 Angstrom
- octahedral_distortion_index: 0.017720725976010807 dimensionless
- average_bond_valence: 0.8333333333333334 valence/bond
- short_bond_fraction_of_valence: 0.6923649463748954 fraction
- long_bond_fraction_of_valence: 0.30763505362510457 fraction
- two_V_positive_valence_sum: 10 charge
- five_O_negative_valence_magnitude: 10 charge
- global_charge_residual: 0 charge
- bond_length_difference_A: 0.5566080890822298 Angstrom
- long_valence_backward: 0.3845438170313807 valence

适用假设：键价参数依赖配位环境、共价性与经验训练集；真实V₂O₅畸变配位并非严格两短四等长，氧位点桥联数和XRD热振动也会改变反演，需实验核验。

审核标记：`publishable=false`、`exclude_from_official_bank=true`、`quality_status=awaiting_expert_review`、`novelty_review_status=pending_cross_series_model_review`。

## UC-ADV11-A146 双频光声光热幅相联立反演热扩散系数与Beer–Lambert浓度

### 中文题干
某假想光声分析系统采用指定的一维光热近似：幅值A(f)=K F_abs exp[−L√(πf/α)]/√f，相位φ(f)=−L√(πf/α)，其中热扩散层厚L=10.00 μm，α为样品有效热扩散系数，K=0.1000 V√Hz为已校准电子与声学增益。光学薄层吸收分数F_abs=1−10^(−εcd)，ε=1000.0 L/(mol·cm)，光程d=0.01000 cm；两次调制频率f₁=100.0 Hz、f₂=400.0 Hz，对应测得A₁=1.1742295353738 mV、A₂=0.33519793052190 mV。求两次热波衰减指数及相位、吸收分数、由两个幅值反演的α与浓度c、未受热衰减的100 Hz信号；检查频率单位、幅值比物理解、唯一性和相位差的独立一致性，并说明何时模型不适用。

### 逐步中文解析
1. 题设采用简化一维光声热扩散模型：对厚度L的均匀光热层，调制频率f处相位φ(f)=−L√(πf/α)，α为有效热扩散系数。

2. 同一薄光吸收样品的幅值模型A(f)=K_abs F_abs exp[−L√(πf/α)]/√f，频率依赖的1/√f因子不可在幅值比中忽略。

3. 光学吸收由Beer–Lambert关系F_abs=1−10^(−εcd)给出，ε=1000 L/(mol·cm)、光程d=0.01000 cm、浓度c未知。

4. 采用f₁=100.0 Hz和f₂=400.0 Hz，光热层厚L=10.00 μm，热扩散项a(f)=L√(πf/α)为无量纲。

5. 给定α=1e-7 m²/s，算得a₁=0.560499121640、a₂=1.12099824328，两相位分别−a₁、−a₂弧度。

6. 题设浓度c=0.01 mol/L时吸收分数F_abs=0.205671765276；吸收为正且小于1。

7. 频率100 Hz及400 Hz的声电转换校准常数K_abs=0.1 V√Hz，模型幅值分别A₁=1.17422953537 mV、A₂=0.335197930522 mV。

8. 取幅值比R=A₂/A₁=0.285462016091，则−ln[R√(f₂/f₁)]=L√(π/α)(√f₂−√f₁)=0.560499121640。

9. 由此唯一反推出α=πL²(√f₂−√f₁)²/{ln[R√(f₂/f₁)]}²=1.00000000000e-7 m²/s，要求R√(f₂/f₁)在(0,1)。

10. 利用A₁已知α和校准K_abs，反推F_abs=A₁√f₁ exp(a₁)/K_abs=0.205671765276。

11. Beer–Lambert逆函数c=−ln(1−F_abs)/(ln10 εd)=0.0100000000000 mol/L，与原信号来源参数一致。

12. 相位差φ₂−φ₁=−(a₂−a₁)与幅度反演α独立核对；频率趋高时热波穿透受抑制。真实光声池的声学共振、温度边界、非均匀吸收和调制功率不稳定会使简化模型失效。

### 主答案向量
- thermal_attenuation100: 0.5604991216397929 dimensionless
- thermal_attenuation400: 1.1209982432795857 dimensionless
- phase100_rad: -0.5604991216397929 rad
- phase400_rad: -1.1209982432795857 rad
- optical_absorbed_fraction: 0.2056717652757185 fraction
- signal100_mV: 1.1742295353737906 mV
- signal400_mV: 0.3351979305219029 mV
- amplitude_ratio400_100: 0.28546201609142785 ratio
- log_amplitude_attenuation_difference: 0.5604991216397929 dimensionless
- reconstructed_diffusivity_m2_s: 1.0000000000000002e-7 m2/s
- reconstructed_optical_fraction: 0.20567176527571854 fraction
- reconstructed_concentration_M: 0.01 mol/L
- unattenuated_signal100_mV: 2.0567176527571855 mV
- corrected_ratio_exp_attenuation: 0.5709240321828557 ratio

适用假设：相位差φ₂−φ₁=−(a₂−a₁)与幅度反演α独立核对；频率趋高时热波穿透受抑制。真实光声池的声学共振、温度边界、非均匀吸收和调制功率不稳定会使简化模型失效。

审核标记：`publishable=false`、`exclude_from_official_bank=true`、`quality_status=awaiting_expert_review`、`novelty_review_status=pending_cross_series_model_review`。

## UC-ADV11-O143 酮烯醇氢氘互变平衡的量子振动配分函数与零点能同位素效应

### 中文题干
某假想有机羰基分子发生酮K⇌烯醇E互变异构，两种结构在不含局域振动零点能的电子能级差ΔE₀=E_E−E_K=+5.000 kJ/mol。只计一个迁移质子的局域谐振模式：H标记的酮式波数3000 cm⁻¹、烯醇式3500 cm⁻¹；将H整体替换D后两频率均缩放1/√2，假设电子能与其它配分自由能差不变。取T=298.15 K，h=6.62607015×10⁻³⁴ J·s、c=2.99792458×10¹⁰ cm/s、NA=6.02214076×10²³ mol⁻¹、R=8.314462618 J/(mol K)、kB=1.380649×10⁻²³ J/K，q_vib=e^(−hcν̃/(2kBT))/(1−e^(−hcν̃/kBT))。计算H/D两种的零点能差、完整振动平衡常数K_E/K、烯醇分数、自由能差、同位素分馏比KD/KH，并在各总浓度1.000 mmol/L下求烯醇浓度，检验概率、原子和同位素数守恒与实验边界。

### 逐步中文解析
1. 把假想有机羰基酮式K与烯醇式E看作可逆一分子互变异构，忽略构象/转动差异，设不含振动零点能的电子能差E_E−E_K=+5.000 kJ/mol。

2. 将迁移氢的局域谐振模分别简化为酮式3000 cm⁻¹、烯醇式3500 cm⁻¹；H→D替代时两模式的波数按1/√2缩放，其他电子能与体积不变。

3. 单个谐振模配分函数q_vib=exp[−h c ν̃/(2kBT)]/[1−exp(−h c ν̃/kBT)]，因此每摩尔零点能为½ N_A h c ν̃。

4. 同一同位素下K_enol/keto=exp[−ΔE₀/(RT)] q_vib(E)/q_vib(K)；这是含零点能与热激发的平衡比而非仅按电子能隙Boltzmann估算。

5. 对H模式，烯醇−酮的摩尔零点能差为2.99066414097 kJ/mol，正差使烯醇相对不利。

6. 对D模式零点能差为2.11471889433 kJ/mol，较H小；这可导致平衡氘同位素效应。

7. 在T=298.15 K完整计算两谐振配分函数，得到K_H=0.0398195185769、K_D=0.0566946974919，两者均正。

8. 同位素平衡分馏因子K_D/K_H=1.42379163581，若大于1说明本题假设下D的烯醇相对丰度高。

9. 酮/烯醇总分子数守恒，每种同位素烯醇分数f_E=K/(1+K)，计算H=0.0382946442777、D=0.0536528645658。

10. 化学势差ΔG°_E−K=−RT lnK，分别得到H=7.99066530568、D=7.11479158341 kJ/mol。

11. 若分别有H或D纯同位素样品各1.000 mmol/L，烯醇浓度分别0.0000382946442777、0.0000536528645658 mol/L，酮与烯醇物种浓度和均为1.000 mmol/L。

12. 该近似只考虑一个迁移H/D振动模式；真实酮烯醇互变可能有其它振动、溶剂氢键、隧穿、同位素交换及配位影响，不能将预测同位素效应直接当实验数值。

### 主答案向量
- H_ZPE_enol_minus_keto_kJ_mol: 2.990664140967423 kJ/mol
- D_ZPE_enol_minus_keto_kJ_mol: 2.1147188943295077 kJ/mol
- H_enol_keto_equilibrium_constant: 0.03981951857687438 ratio
- D_enol_keto_equilibrium_constant: 0.056694697491910244 ratio
- isotope_fractionation_ratio_KD_KH: 1.4237916358144096 ratio
- H_enol_fraction: 0.038294644277665095 fraction
- D_enol_fraction: 0.053652864565778974 fraction
- H_equilibrium_Gibbs_kJ_mol: 7.990665305683125 kJ/mol
- D_equilibrium_Gibbs_kJ_mol: 7.114791583412491 kJ/mol
- Gibbs_H_minus_D_kJ_mol: 0.8758737222706332 kJ/mol
- H_enol_concentration_if_total_1mM: 0.000038294644277665096 mol/L
- D_enol_concentration_if_total_1mM: 0.000053652864565778975 mol/L
- H_keto_fraction: 0.961705355722335 fraction
- D_keto_fraction: 0.946347135434221 fraction
- log_fractionation_factor: 0.35332347911946727 dimensionless

适用假设：该近似只考虑一个迁移H/D振动模式；真实酮烯醇互变可能有其它振动、溶剂氢键、隧穿、同位素交换及配位影响，不能将预测同位素效应直接当实验数值。

审核标记：`publishable=false`、`exclude_from_official_bank=true`、`quality_status=awaiting_expert_review`、`novelty_review_status=pending_cross_series_model_review`。

## UC-ADV11-P143 理想光电化学二极管最大功率点的非线性唯一根与能流检查

### 中文题干
某假想光电化学半导体二极管采用理想Shockley关系I(V)=I_ph−I₀[exp(qV/(kBT))−1]，理想因子1、无串联或漏电，光生电流I_ph=10.00 mA，暗饱和电流I₀=1.000 nA，T=298.15 K，kB=1.380649×10⁻²³ J/K、q=1.602176634×10⁻¹⁹ C。入射光功率P_in=0.1000 W，材料带隙E_g=1.500 eV。求热电压、短路电流、开路电压、最大输出功率点方程及唯一数值解V_m、I_m、P_m、填充因子FF、效率η；由光生电流得到电子数率，并在一光子最多产生一电子假设下检查最小带隙光子功率。验证dP/dV和两端功率边界及理想光电化学模型适用条件。

### 逐步中文解析
1. 采用理想单结光电化学半导体二极管模型，光生电流I_ph=10.00 mA、暗饱和电流I₀=1.000 nA，理想因子n=1、忽略串联与并联电阻。

2. 电流–电压关系I(V)=I_ph−I₀[exp(qV/kBT)−1]，令热电压V_T=kBT/q。

3. 在T=298.15 K时V_T=0.0256925791211 V；短路V=0得I_sc=I_ph=0.01 A。

4. 开路I(V_oc)=0得V_oc=V_T ln(1+I_ph/I₀)=0.414115450363 V，V_oc必须为正。

5. 输出电功率P(V)=V I(V)，对V求导得dP/dV=I_ph+I₀−I₀ exp(V/V_T)(1+V/V_T)。

6. 用无量纲x=V/V_T，最大功率点满足(1+x)e^x=1+I_ph/I₀；左边对x≥0严格单调增，且在0时小于目标，故(0,V_oc/V_T)内唯一根。

7. 采用数值二分法得到x_m=13.4475695479，V_m=x_m V_T=0.345502744596 V。

8. 最大功率点电流I_m=9.30784298914 mA，功率P_m=3.21588529902 mW；与I_sc V_oc相比较，填充因子FF=0.776567330730。

9. 给定入射总光功率P_in=0.1 W，理想电能转换效率η=P_m/P_in=0.0321588529902，不能将光生电流直接乘开路电压作为可提取输出。

10. 短路光生电子流率I_ph/q=6.24150907446e+16 electrons/s。若每光子至少需带隙E_g=1.500 eV且每吸收光子至多贡献1电子，则所需最小入射有效光子功率为0.0150000000000 W，小于给定P_in。

11. 在V=0及V=V_oc处输出功率均为零；内部驻点是唯一最大值。用dP/dV和电流回代两种独立式检查导出参数。

12. 本题为理想Shockley二极管，不含辐射/非辐射复合细节、串联电阻、载流子收集不足、温升或电解液腐蚀；光化学电池的实际效率需考虑化学反应过电位和法拉第选择性。

### 主答案向量
- thermal_voltage_V: 0.02569257912108585 V
- open_circuit_voltage_V: 0.4141154503627341 V
- maximum_power_reduced_voltage: 13.44756954792226 dimensionless
- maximum_power_voltage_V: 0.3455027445962973 V
- maximum_power_current_mA: 9.307842989143557 mA
- maximum_electric_power_mW: 3.215885299020503 mW
- fill_factor: 0.7765673307295413 fraction
- conversion_efficiency: 0.03215885299020503 fraction
- short_circuit_electron_flux_s: 62415090744607630 electrons/s
- minimum_absorbed_photon_power_W: 0.015000000000000001 W
- incident_to_minimum_photon_power: 6.666666666666666 ratio
- diode_forward_current_prefactor_A: 0.0006921580108564432 A
- maximum_power_derivative_residual_A: 5.204170427930421e-18 A
- open_circuit_reduced_voltage: 16.118095750958314 dimensionless

适用假设：本题为理想Shockley二极管，不含辐射/非辐射复合细节、串联电阻、载流子收集不足、温升或电解液腐蚀；光化学电池的实际效率需考虑化学反应过电位和法拉第选择性。

审核标记：`publishable=false`、`exclude_from_official_bank=true`、`quality_status=awaiting_expert_review`、`novelty_review_status=pending_cross_series_model_review`。

