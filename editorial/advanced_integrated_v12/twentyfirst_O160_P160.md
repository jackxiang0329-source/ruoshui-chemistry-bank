# 第十二辑 O160 / P160 完整题目与推导

全为专家待审编辑候选，机器QA不等于人工科学和独创性审定。

## UC-ADV12-O160 外消旋底物动力学拆分的双一级轨迹与底物/产物ee守恒

### 中文题干
某假想手性酰化反应将外消旋有机底物分为快反应对映体F与慢反应对映体S，在固定催化剂和酰化剂活度条件下，各对映体不可逆一级转化为保持构型的产物P_F、P_S。起始总底物浓度C₀=0.01000 mol/L，F、S各占一半且无消旋，速率常数k_F=0.2000 s⁻¹、k_S=0.04000 s⁻¹，反应时间5.000 s。求两个底物剩余量、两个产物量、总转化率c、剩余底物和产品各自的ee及富集符号，验证各对映体的单独质量平衡与关系c ee_P=(1−c)ee_S。由底物剩余量独立反演k_F、k_S及选择性s=k_F/k_S，给定T=298.15 K和R=8.314462618 J/(mol K)，若两通道Eyring指前因子相同，求活化自由能差、两支半衰期和t→0时初始产物ee极限；解释为什么完全反应后累积产物不能保持高ee及动态动力学拆分的区别。

### 分步解答
1. 考虑假想外消旋的两个有机对映体F（快反应）和S（慢反应），各自只发生一级不可逆酰化生成构型保留的产物P_F和P_S，产物不互变、底物也不消旋。

2. 初始F、S各占总底物C₀=0.01000 mol/L的一半，固定手性催化剂与酰化剂活度下，两支通道分别有k_F=0.2000 s⁻¹、k_S=0.04000 s⁻¹。

3. 两个独立物料平衡微分方程为d[F]/dt=−k_F[F]、d[S]/dt=−k_S[S]，解得[F](t)=C₀exp(−k_Ft)/2、[S](t)=C₀exp(−k_St)/2。

4. 在t=5 s时剩余快、慢对映体浓度分别0.00183939720586和0.00409365376539 mol/L，因快支消耗更多，剩余底物富集慢构型。

5. 对应产物P_F=C₀/2−[F]=0.00316060279414、P_S=C₀/2−[S]=0.000906346234610 mol/L，两支分别满足底物+产物=初始0.005 mol/L。

6. 总剩余底物S_total=0.00593305097125、生成产物P_total=0.00406694902875 mol/L，总转化率c=P_total/C₀=0.406694902875。

7. 定义剩余底物的对映体过量ee_S=([S]−[F])/([S]+[F])，产物的对映体过量ee_P=([P_F]−[P_S])/([P_F]+[P_S])，二者的富集方向相反。

8. 代入得到ee_S=0.379948962255、ee_P=0.554286897523，两个绝对值均小于1。

9. 由于初始外消旋的F−S净差为0，严格质量平衡还给c ee_P=(1−c)ee_S，左右两侧均为0.225425655953。

10. 每条底物衰减曲线可独立反演速率常数k_i=−ln([i](t)/[i]₀)/t；它们的比值s=k_F/k_S为动力学拆分选择性因子。

11. 反算k_F=0.200000000000、k_S=0.0400000000000 s⁻¹，选择性因子s=5.00000000000。

12. 设Eyring两个通道指前因子相同，活化自由能差ΔG‡_F−ΔG‡_S=−RTln(k_F/k_S)=-3.98972742666 kJ/mol，快反应过渡态更低。

13. 两支底物各自半衰期ln2/k分别3.46573590280、17.3286795140 s；t→0时瞬时产物ee趋向(k_F−k_S)/(k_F+k_S)=0.666666666667，而完全转化后累计产物趋于外消旋。

14. 此理想动力学拆分不考虑可逆反应、产物消旋、动态动力学拆分与对映体互相转化；不借助消旋再生时，对于严格单一目标构型的传统拆分理论最高产率不超过初始底物一半。

### 主答案向量
- remaining_fast_enantiomer_M: 0.0018393972058572117 mol/L
- remaining_slow_enantiomer_M: 0.0040936537653899095 mol/L
- fast_product_M: 0.003160602794142788 mol/L
- slow_product_M: 0.0009063462346100906 mol/L
- remaining_total_substrate_M: 0.005933050971247121 mol/L
- total_product_M: 0.004066949028752879 mol/L
- overall_conversion: 0.40669490287528787 fraction
- remaining_substrate_ee_slow: 0.37994896225522484 ee
- product_ee_fast: 0.5542868975232671 ee
- kinetic_selectivity_factor: 5 ratio
- activation_G_fast_minus_slow_kJ_mol: -3.9897274266635736 kJ/mol
- fast_enantiomer_half_life_s: 3.465735902799726 s
- slow_enantiomer_half_life_s: 17.328679513998633 s
- reconstructed_fast_rate_s: 0.2 s^-1
- reconstructed_slow_rate_s: 0.03999999999999998 s^-1
- substrate_ee_mass_weight: 0.22542565595326977 fraction
- product_ee_mass_weight: 0.22542565595326974 fraction
- fast_enantiomer_inventory_M: 0.005 mol/L
- slow_enantiomer_inventory_M: 0.005 mol/L
- instantaneous_initial_product_ee_limit: 0.6666666666666666 fraction
- remaining_substrate_fraction: 0.5933050971247121 fraction

审核：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

## UC-ADV12-P160 带固定负电水凝胶的Donnan平衡、电化学势与盐依赖渗透压力

### 中文题干
某假想带固定负电基团的水凝胶在298.15 K隔膜内与一价NaCl外液达到Donnan平衡。凝胶每升水相有不可移动的单价负电基团X=0.05000 mol/L，外液NaCl浓度分别实验设为c_s=0.1000和0.2000 mol/L，假设两条件下凝胶体积及固定电荷浓度均不变，理想点离子，无离子配对，膜可自由交换Na⁺/Cl⁻但固定负基团不可透过。内液电中性c_+−c_−=X，电化学平衡c_+c_−=c_s²，ψ_in−ψ_out=(RT/F)ln(c_s/c_+)。求两个外盐条件下凝胶内Na⁺、Cl⁻浓度、Donnan电位、阳/阴离子富集或排斥倍数和理想移动离子相对外液的渗透压差ΔΠ=RT×1000(c_++c_−−2c_s)。若凝胶内独立有效网络链段浓度0.02000 mol/L，再计算其理想渗透贡献和低盐时的总超额渗透压；R=8.314462618 J/(mol K)、F=96485.33212 C/mol。分别检查电中性、Donnan乘积、Na⁺和Cl⁻电化学势残差，并说明真实凝胶体积变化会使本题固定X近似失效。

### 分步解答
1. 考虑含不可移动一价负电荷基团的均匀有机凝胶，固定电荷密度X=0.05000 mol/L（以凝胶水相体积计）；与理想1:1 NaCl外液隔膜接触，隔膜可通Na⁺、Cl⁻而不可通固定基团。

2. 设理想溶液、没有离子配对、体积保持固定、膜两侧温度T=298.15 K相同；外液Na⁺与Cl⁻浓度均为c_s，内液允许与外液发生Donnan电位差ψ=ψ_in−ψ_out。

3. 电化学势平衡给RTln(c_+/c_s)+Fψ=0、RTln(c_-/c_s)−Fψ=0，两式相加得Donnan乘积c_+c_-=c_s²。

4. 凝胶水相宏观电中性要求c_+−c_−=X，联立乘积与差值得唯一正解c_±=[√(X²+4c_s²)±X]/2。

5. c_s=0.1000 mol/L时，凝胶内部Na⁺浓度=0.128077640640、Cl⁻浓度=0.0780776406404 mol/L；Na⁺相对富集、Cl⁻相对排斥。

6. 两离子乘积=0.0100000000000 (mol/L)²，等于外侧c_s²；差值=0.0500000000000 mol/L，与固定负电X恰抵消。

7. 由Na⁺平衡求ψ=(RT/F)ln(c_s/c_+)=-6.35805164322 mV，负号表示凝胶内部电势相对外液更低。

8. 用Cl⁻电化学势反算应得到同一ψ；逐离子残差RTln(c_i/c_s)+z_iFψ应分别趋于零，而非只满足总体电中性。

9. 由于凝胶内部移动离子数高于外液，理想离子渗透压差ΔΠ_ion=RT×1000(c_++c_−−2c_s)，浓度必须由mol/L转为mol/m³。

10. 在0.1000 M盐外液时ΔΠ_ion=15258.6778001 Pa，正值对应凝胶由固定电荷吸引额外反离子导致的渗透作用。

11. 如果聚合物网络内独立的有效链段摩尔浓度给定c_chain=0.02 mol/L，理想链平动渗透贡献Π_chain=RT×1000 c_chain=49579.1405911 Pa。

12. 这两个贡献相加的模型总超额渗透压Π_total=64837.8183913 Pa；此处不含弹性反压，因此不能直接推出凝胶实际体积变化。

13. 把外盐升到0.2000 M而凝胶固定电荷浓度暂定不变，新内Na⁺、Cl⁻浓度分别0.226556443707、0.176556443707 mol/L，Donnan电位-3.20326718489 mV。

14. 高盐ΔΠ_ion=7716.71413945 Pa，小于低盐结果；由此解释增加背景盐会屏蔽固定电荷引起的Donnan渗透压力。

15. 本题的X按凝胶体积给定且保持固定，若发生真实膨胀收缩则X会稀释并与网络弹性、Flory–Huggins聚合物混合项耦合，真实Donnan模型还需活动度、离子尺寸及多价离子效应。

### 主答案向量
- gel_cation_concentration_0p1M: 0.12807764064044153 mol/L
- gel_anion_concentration_0p1M: 0.07807764064044154 mol/L
- Donnan_salt_product_M2: 0.010000000000000004 M2
- gel_ion_charge_difference_M: 0.04999999999999999 mol/L
- Donnan_potential_0p1M_mV: -6.35805164321915 mV
- ionic_osmotic_pressure_difference_0p1M_Pa: 15258.677800143809 Pa
- polymer_chain_osmotic_pressure_Pa: 49579.140591134004 Pa
- total_excess_osmotic_pressure_Pa: 64837.81839127781 Pa
- coion_exclusion_ratio_0p1M: 0.7807764064044154 ratio
- mobile_ion_excess_total_0p1M_M: 0.0061552812808830515 mol/L
- cation_electrochemical_potential_residual_J_mol: 0 J/mol
- anion_electrochemical_potential_residual_J_mol: 0 J/mol
- gel_cation_concentration_0p2M: 0.22655644370746375 mol/L
- gel_anion_concentration_0p2M: 0.17655644370746376 mol/L
- Donnan_potential_0p2M_mV: -3.2032671848896155 mV
- ionic_osmotic_pressure_0p2M_Pa: 7716.714139453085 Pa
- coion_exclusion_ratio_0p2M: 0.8827822185373188 ratio
- low_high_osmotic_pressure_ratio: 1.9773542889364115 ratio
- cation_enrichment_factor_0p1M: 1.2807764064044151 ratio
- anion_exclusion_factor_0p1M: 0.7807764064044154 ratio

审核：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

