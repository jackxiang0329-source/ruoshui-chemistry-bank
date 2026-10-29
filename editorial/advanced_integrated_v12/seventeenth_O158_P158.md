# 第十二辑 O158 / P158 高阶综合题

当前仅为未经过专家批准的编辑草稿，禁止正式发布。

## UC-ADV12-O158 自由基链转移与失活竞争的几何链长分布、Mayo反演及分散度

### 中文题干
一假想有机单体M的自由基链聚合在恒温、恒单体及链转移剂浓度下进行。每条被观测的活性链起始时已有1个重复单元，其后以独立指数事件继续增长或停止：每次增长速率k_p[M]，链转移剂引起原链终止速率k_tr[T]，本征不可逆去活化速率k_d；各事件互相独立且相对浓度始终恒定。数据为k_p=300.0 L/(mol s)、[M]=0.5000 mol/L、k_tr=50.00 L/(mol s)、[T]=0.1000 mol/L、k_d=1.000 s⁻¹，重复单元摩尔质量100.0 g/mol且忽略端基质量。求增长与两种死亡危险率、链长的完整几何分布、数均及重均DP、分散度、数均和重均摩尔质量、DP=1/2及DP≤5概率、平均寿命和按死亡通道分配的终止分数；若将[T]减半求新DP_n并用两次DP反演k_tr，核验概率归一及Mayo型倒数关系，说明链转移再引发为何会改变真实链数计量。

### 逐步解析
1. 假设有机单体M的自由基链已由引发步骤固定获得第一个重复单元，随后每个活链可继续增长、被链转移剂终止该链或固有失活；各事件按独立指数等待且所有浓度固定。

2. 增长事件速率a=k_p[M]，每次增长使重复单元数n加1；链转移导致原生长链终止（转移生成的自由基不纳入当前单链寿命），本征失活事件也终止该链。

3. 总失活率b=k_tr[T]+k_d，两种终止机制互斥且指数记忆无关；每轮下一事件先增长的概率p=a/(a+b)，先终止的概率q=b/(a+b)。

4. 题设k_p=300 L/(mol s)、[M]=0.5 mol/L、k_tr=50 L/(mol s)、[T]=0.1 mol/L、k_d=1 s⁻¹，得a=150 s⁻¹、总链死亡b=6 s⁻¹。

5. 事件概率p=0.961538461538、q=0.0384615384615，故额外增长事件数N服从P(N=j)=q p^j (j=0,1,2,...)，归一和q/(1−p)=1。

6. 实际链长DP=1+N。几何分布给〈N〉=p/q=a/b，Var(N)=p/q²，E[(1+N)²]=(1+m)(1+2m)。

7. 平均额外增长m=25.0000000000，数均链长DP_n=1+m=26.0000000000。

8. 按定义DP_w=〈DP²〉/〈DP〉=1+2m=51.0000000000，分散度Đ=DP_w/DP_n=1.96153846154，长链极限接近2而非1。

9. 单体重复单元相对摩尔质量100.0 g/mol，不计端基则数均Mn=2600.00000000、重均Mw=5100.00000000 g/mol。

10. 单链仅含1个重复单元的概率P(DP=1)=q=0.0384615384615；仅含2个为qp=0.0369822485207；DP≤5的累计概率1−p⁵=0.178072893241。

11. 平均单链活性寿命τ=1/b=0.166666666667 s；最终死亡为链转移的概率k_tr[T]/b=0.833333333333，其余为本征失活。

12. Mayo型倒数关系严格写为1/(DP_n−1)=k_d/(k_p[M])+(k_tr/(k_p[M]))[T]，因为本题引发已先加入一个重复单元，不能不经说明将DP_n−1误写为DP_n。

13. 将[T]降到0.05000 mol/L，预测DP_n=43.8571428571，由两浓度的1/(DP_n−1)差值反求k_tr=50.0000000000 L/(mol s)，与输入一致。

14. 此为等浓度、独立常数危险率及链转移只决定原链停止的统计模型；实际自由基再引发、链–链偶合/歧化、扩散胶效应和活链浓度变化会改变分子量分布与Mayo关系。

### 主要答案向量
- propagation_event_rate_s: 150 s^-1
- chain_transfer_hazard_s: 5 s^-1
- total_chain_death_rate_s: 6 s^-1
- probability_propagate_before_death: 0.9615384615384616 fraction
- probability_die_before_propagation: 0.038461538461538436 fraction
- average_active_chain_lifetime_s: 0.16666666666666666 s
- mean_additional_propagations: 25 monomers
- number_average_degree_of_polymerization: 26 monomers
- weight_average_degree_of_polymerization: 51 monomers
- dispersity_Mw_over_Mn: 1.9615384615384615 ratio
- number_average_molar_mass_g_mol: 2600 g/mol
- weight_average_molar_mass_g_mol: 5100 g/mol
- probability_exactly_one_unit: 0.038461538461538436 fraction
- probability_exactly_two_units: 0.03698224852071003 fraction
- probability_DP_at_most_five: 0.17807289324064812 fraction
- fraction_death_by_transfer: 0.8333333333333334 fraction
- fraction_death_by_intrinsic_deactivation: 0.16666666666666666 fraction
- degree_DPn_at_half_transfer_agent: 43.857142857142854 monomers
- reconstructed_chain_transfer_rate_constant_L_mol_s: 50 L/(mol s)
- Mayo_inverse_additional_DP: 0.04 dimensionless

状态：publishable=false，exclude_from_official_bank=true，awaiting_expert_review，pending_cross_series_model_review。

## UC-ADV12-P158 Gibbs–Langmuir非离子表面吸附的表面张力、分子占据和毛细压力

### 中文题干
某假想非离子有机表面活性剂在298.15 K水–空气界面形成均匀Langmuir单分子吸附层，最大表面过剩Γ_max=3.000×10⁻⁶ mol/m²，平衡吸附常数K=2000 L/mol，所有实验浓度低于CMC。假设体相活动度近似浓度、无其它溶质且表面平衡，覆盖率θ=Kc/(1+Kc)，Γ=Γ_maxθ，Gibbs吸附积分为γ=γ₀−RTΓ_max ln(1+Kc)，纯水γ₀=0.07200 N/m、R=8.314462618 J/(mol K)、N_A=6.02214076×10²³ mol⁻¹。计算c=0.1000 mmol/L和1.000 mmol/L的覆盖率、Γ与表面张力和降幅，求dγ/dlnc并与−RTΓ逐点核验，推导饱和分子平均表面积与高浓度表面分子数密度。若高浓度溶液形成半径10.00 μm的球形液滴，求Laplace压强；另在洁净玻璃半径0.2500 mm、接触角0°的毛细管中求毛细上升高度，与纯水比较（ρ=1000 kg/m³、g=9.810 m/s²）。检查面积、表面张力、吸附热力学以及CMC模型限制。

### 逐步解析
1. 假设理想非离子表面活性剂在水–空气界面形成单分子Langmuir吸附层，浓度低于临界胶束浓度，体相活度近似c/c°，无离子屏蔽或多层吸附。

2. Langmuir表面覆盖率θ(c)=Kc/(1+Kc)，最大表面过剩Γ_max=3.000×10⁻⁶ mol/m²，故Γ(c)=Γ_maxθ(c)。

3. Gibbs单溶质表面吸附等温式在固定温度下dγ=−RTΓ dlnc，将Langmuir式积分，并以纯水γ₀=0.07200 N/m作c→0参考。

4. 得到γ(c)=γ₀−RTΓ_max ln(1+Kc)，其中K=2000 L/mol与c以mol/L相乘为无量纲。

5. c₁=0.0001000 mol/L、c₂=0.001000 mol/L时覆盖率θ分别0.166666666667与0.666666666667。

6. 表面过剩Γ₁=5.00000000000e-7、Γ₂=0.00000200000000000 mol/m²，随c增加但不超过Γ_max。

7. 表面张力γ₁=0.0706440980854、γ₂=0.0638297620327 N/m，均小于纯水γ₀并保持正值。

8. 两浓度各自的表面张力下降量γ₀−γ分别0.00135590191456、0.00817023796725 N/m。

9. 由γ的解析导数核验dγ/dlnc=−RTΓ(c)，在两浓度分别为-0.00123947851478、-0.00495791405911 N/m，严格满足Gibbs吸附式。

10. 在最大单层覆盖时，每个表面活性剂分子的平均面积a=1/(Γ_max N_A)=0.553513022391 nm²/分子。

11. c₂时吸附分子面密度N_s=Γ₂N_A=1.20442815200e+18 molecules/m²，验证它小于饱和面密度Γ_maxN_A。

12. 当c=c₂且半径为10.00 μm的球形液滴界面各处张力均匀时，Laplace附加压Δp=2γ/r=12765.9524065 Pa，低于同尺寸洁净水液滴的14400.0000000 Pa。

13. 若清洁玻璃毛细管半径0.2500 mm、接触角为0°、液体密度1000 kg/m³和g=9.810 m/s²，毛细升高h=2γ/(ρgr)=5.20528130746 cm，纯水为5.87155963303 cm。

14. 表面吸附等温式需要单一非离子表面活性剂的理想吸附且没有表面相变；若接近CMC、出现盐/共溶剂变化、接触角不恒定或动力学吸附未平衡，张力和毛细高度需另测。

### 主要答案向量
- surface_tension_c0p1mM_N_m: 0.07064409808543771 N/m
- surface_tension_c1mM_N_m: 0.06382976203274644 N/m
- surface_tension_drop_c0p1mM_N_m: 0.0013559019145622797 N/m
- surface_tension_drop_c1mM_N_m: 0.008170237967253552 N/m
- surface_coverage_c0p1mM: 0.16666666666666669 fraction
- surface_coverage_c1mM: 0.6666666666666666 fraction
- surface_excess_c0p1mM_mol_m2: 5.000000000000001e-7 mol/m2
- surface_excess_c1mM_mol_m2: 0.000002 mol/m2
- Gibbs_derivative_c0p1mM_N_m: -0.0012394785147783502 N/m
- Gibbs_derivative_c1mM_N_m: -0.0049579140591134 N/m
- saturated_molecular_footprint_nm2: 0.5535130223912822 nm2/molecule
- surface_number_density_c1mM_molecules_m2: 1204428152000000000 molecules/m2
- droplet_Laplace_pressure_c1mM_Pa: 12765.952406549288 Pa
- clean_water_Laplace_pressure_Pa: 14399.999999999998 Pa
- capillary_rise_c1mM_cm: 5.205281307461483 cm
- clean_water_capillary_rise_cm: 5.8715596330275215 cm
- surface_tension_relative_to_clean: 0.886524472677034 ratio
- Gibbs_slope_saturation_N_m: -0.0074368710886701 N/m

状态：publishable=false，exclude_from_official_bank=true，awaiting_expert_review，pending_cross_series_model_review。

