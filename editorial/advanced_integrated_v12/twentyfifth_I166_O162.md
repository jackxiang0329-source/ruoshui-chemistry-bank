# 第十二辑 I166/O162 完整中文解析

自动机器复核不代替专家科学性及原创性审核，所有记录禁止发表。

## UC-ADV12-I166 高压NiII氨配体取代的活化体积、反应体积和详细平衡

### 题目
某假想无机配合物在水中只发生可逆单氨配体取代Ni(H₂O)₆²⁺+NH₃⇌Ni(H₂O)₅(NH₃)²⁺+H₂O。温度298.15 K，NH₃自由浓度由储液池固定在0.1000 mol/L，Ni总浓度0.01000 mol/L。参考压力下速率常数k_f0=2.000 L/(mol s)、k_r0=0.08000 s⁻¹；升压ΔP=100.0 MPa时正向、逆向活化体积分别ΔV‡_f=+10.00、ΔV‡_r=+4.000 cm³/mol，假设在该压力范围内恒定，速率压力依赖k_i(P)=k_i(P₀)exp[−ΔV‡_iΔP/(RT)]，R=8.314462618 J/(mol K)。求两速率压力比、高压速率、两个压力下结合常数K=k_f/k_r、反应体积与标准反应自由能及其压力差。用热力学dlnK/dP=−ΔV_rxn/(RT)独立核验详细平衡；从全部Ni初始为水合态的条件，求各压力平衡结合分数、结合态浓度、弛豫时间及0.5000 s时结合态浓度。核验Ni原子数、配体计量、电荷守恒及固定NH₃浓度近似。

### 分步解析
1. 考虑假想八面体Ni(II)水合配合物Ni(H₂O)₆²⁺+NH₃⇌Ni(H₂O)₅(NH₃)²⁺+H₂O，在水中只有这两个Ni物种，Ni形式价始终+II。

2. 以自由NH₃浓度c_L=0.1000 mol/L为恒定缓冲储库，Ni总分析浓度0.01000 mol/L，假设溶液体积与离子活度系数在比较压力下不变。

3. 298.15 K、参考压力P₀时正向二级速率k_f0=2.000 L/(mol s)、逆向一级速率k_r0=0.08000 s⁻¹，因此条件结合常数K₀=k_f0/k_r0。

4. 压力从P₀升高ΔP=100.0 MPa，Eyring活化体积ΔV‡_f=+10.00 cm³/mol、ΔV‡_r=+4.000 cm³/mol，取常数。

5. 压力速率关系k_i(P)/k_i(P₀)=exp[−ΔV‡_iΔP/(RT)]；cm³/mol要换成10⁻⁶ m³/mol才能和Pa相乘得到J/mol。

6. 算得正向速率比0.668047863906，逆向速率比0.850987208056；高压速率分别1.33609572781 L/(mol s)与0.0680789766445 s⁻¹。

7. 参考及高压结合常数分别K₀=25.0000000000、K₁=19.6256729121 L/mol，两者比值0.785026916482。

8. 正逆过渡态的活化体积差给反应体积ΔV_rxn=ΔV‡_f−ΔV‡_r=+6.000 cm³/mol，不应把正逆活化体积直接相加。

9. 热力学压力响应dlnK/dP=−ΔV_rxn/(RT)，积分给K₁/K₀=exp[−ΔV_rxn ΔP/(RT)]，须与k_f/k_r逐点一致。

10. 标准反应自由能G°=−RT ln(K c°)，c°=1 mol/L，参考与高压分别-7.97945485333及-7.37945485333 kJ/mol；差600.000000000 J/mol。

11. 在任意压力下把结合视为一阶正向a=k_f c_L及一阶逆向b=k_r，平衡结合分数θ=a/(a+b)=Kc_L/(1+Kc_L)。

12. 两压力下平衡结合分数0.714285714286、0.662454924495，相应结合态Ni浓度0.00714285714286、0.00662454924495 mol/L。

13. 若初始Ni全部是水合态，结合态时间演化为[B](t)=N_total θ[1−exp(−(a+b)t)]，总Ni无流失。

14. t=0.5s时两压力结合态浓度分别0.000933155461437和0.000635467775643 mol/L，弛豫时间分别3.57142857143和4.95813968045 s。

15. 逐点核对K=a/(bc_L)=k_f/k_r，Ni总浓度[水合态]+[结合态]不变；前后配体NH₃与水交换，金属电荷保持+2且不发生电子转移。

16. 固定NH₃储库及常活化体积是理想化约束，实际高压下介电常数、溶剂化、自由NH₃酸碱平衡、活度及扩散速率均可能改变，不能把此结果直接当作真实Ni(II)实验速率。

### 数值结果
- high_pressure_forward_rate_ratio: 0.6680478639060341 ratio
- high_pressure_reverse_rate_ratio: 0.8509872080559372 ratio
- high_pressure_forward_rate_L_mol_s: 1.3360957278120682 L/(mol s)
- high_pressure_reverse_rate_s: 0.06807897664447497 s^-1
- ambient_binding_K_L_mol: 25 L/mol
- high_pressure_binding_K_L_mol: 19.625672912057507 L/mol
- binding_constant_pressure_ratio: 0.7850269164823003 ratio
- reaction_volume_cm3_mol: 6.000000000000001 cm3/mol
- standard_binding_G_at_reference_kJ_mol: -7.979454853327147 kJ/mol
- standard_binding_G_high_pressure_kJ_mol: -7.3794548533271485 kJ/mol
- pressure_induced_standard_G_change_J_mol: 599.9999999999991 J/mol
- ambient_equilibrium_bound_fraction: 0.7142857142857143 fraction
- high_pressure_equilibrium_bound_fraction: 0.6624549244945572 fraction
- ambient_equilibrium_bound_Ni_M: 0.0071428571428571435 mol/L
- high_pressure_equilibrium_bound_Ni_M: 0.006624549244945572 mol/L
- ambient_bound_Ni_after_0p5s_M: 0.0009331554614371015 mol/L
- high_pressure_bound_Ni_after_0p5s_M: 0.0006354677756434706 mol/L
- ambient_relaxation_time_s: 3.571428571428571 s
- high_pressure_relaxation_time_s: 4.958139680450624 s
- ambient_detailed_balance_K_check: 25 L/mol
- high_pressure_detailed_balance_K_check: 19.6256729120575 L/mol
- ambient_Ni_inventory_check_M: 0.01 mol/L
- high_pressure_Ni_inventory_check_M: 0.01 mol/L

## UC-ADV12-O162 半胱氨酸S/N竞争烷基化的酸碱物种分数、化学选择性与pH反演

### 题目
在一假想有机半胱氨酸衍生物中同时存在一个硫醇SH（条件pK_a=8.300）和一个铵型氨基NH₃⁺（条件pK_a=9.500），活性亲核体分别为RS⁻与RNH₂。缓冲pH分别固定为8.500和10.000，忽略两个酸碱位点的耦合，且半胱氨酸衍生物总浓度0.01000 mol/L在反应中维持不变。加入0.001000 mol/L单官能烷基化试剂E后，反应只能生成互斥的S-烷基化或N-烷基化产物，二级速率常数k_S=100.0、k_N=20.00 L/(mol s)，反应时间t=2.000 s。求两pH下RS⁻和游离RNH₂活性分数、竞争伪一级速率、E转化率、两产物浓度及S/N比。反过来求使S/N表观选择性恰好等于20的唯一pH，并检查每个pH下E物料守恒、酸碱物种分布、目标pH区间和忽略二次烷基化的适用边界。

### 分步解析
1. 假设有机半胱氨酸样底物具有一个硫醇RSH与一个氨基RNH₃⁺，两者分别可去质子化为亲核硫负离子RS⁻和中性胺RNH₂。

2. 题设条件pK_a(SH)=8.300、pK_a(NH₃⁺)=9.500，且酸碱位点之间的耦合已忽略；缓冲pH不因少量反应发生变化。

3. 各反应活性分数为f_S=1/[1+10^(pK_a,S−pH)]、f_N=1/[1+10^(pK_a,N−pH)]，而非全部含硫或氨基底物都处于活性形态。

4. 两种活性位点对同一种单官能烷基化试剂E竞争生成互斥的单次S-烷基化或N-烷基化产物，不发生双烷基化或产物重排。

5. 半胱氨酸样底物总浓度C_Nu=0.01000 M维持恒定远大于E初始0.001000 M，二级速率常数k_S=100.0、k_N=20.00 L/(mol s)。

6. 所以对E的两条平行伪一级速率a_S=k_SC_Nu f_S、a_N=k_NC_Nu f_N，E的总消失速率常数λ=a_S+a_N。

7. pH=8.5时硫负离子分数0.613136820153、游离胺分数0.0909090909091，对应速率a_S=0.613136820153和a_N=0.0181818181818 s⁻¹。

8. pH=8.5时产物比S/N=a_S/a_N=33.7225251084，即使k_S/k_N固定为5，酸碱物种分布也显著改变表观选择性。

9. 积分平行通道得[E](t)=E₀e^(−λt)，[P_S]=E₀(1−e^(−λt))a_S/λ、[P_N]=E₀(1−e^(−λt))a_N/λ。

10. 反应t=2s后，pH8.5消耗分数0.717093062074，S/N产物分别0.000696440962037和0.0000206521000369 mol/L，剩余E=0.000282906937926 mol/L。

11. 在pH=10时，硫负离子分数0.980437696127、中性胺分数0.759746926648，S/N竞争比降至6.45239659246。

12. pH10时2秒后S/N两产物浓度为0.000775897074509和0.000120249439629 mol/L，剩余E=0.000103853485861 mol/L。

13. 对目标选择性S/N=20，设y=10^(−pH)、r=20/(k_S/k_N)=4，利用r=(1+10^pKaN y)/(1+10^pKaS y)唯一反演y=(r−1)/(10^pKaN−r×10^pKaS)。

14. 得到pH*=8.89655794962，回代S/N=20.0000000000，位于两个测试pH之间。

15. 任意pH下检查[P_S]+[P_N]+[E]=E₀以及两种产物比等于两速率之比；真实半胱氨酸常存在电荷和构象耦合、二次烷基化、硫醇氧化及水解竞争，需要改用完整物种动力学。

### 数值结果
- thiolate_fraction_pH8p5: 0.6131368201531427 fraction
- neutral_amine_fraction_pH8p5: 0.09090909090909091 fraction
- S_path_pseudo_firstorder_rate_pH8p5: 0.6131368201531427 s^-1
- N_path_pseudo_firstorder_rate_pH8p5: 0.018181818181818184 s^-1
- electrophile_disappearance_rate_pH8p5: 0.6313186383349609 s^-1
- S_over_N_product_ratio_pH8p5: 33.72252510842284 ratio
- electrophile_conversion_pH8p5: 0.7170930620739996 fraction
- S_alkylated_product_pH8p5_M: 0.0006964409620370686 mol/L
- N_alkylated_product_pH8p5_M: 0.000020652100036931075 mol/L
- remaining_electrophile_pH8p5_M: 0.0002829069379260004 mol/L
- thiolate_fraction_pH10: 0.9804376961274204 fraction
- neutral_amine_fraction_pH10: 0.7597469266479578 fraction
- electrophile_disappearance_rate_pH10: 1.1323870814570118 s^-1
- S_over_N_product_ratio_pH10: 6.45239659246245 ratio
- electrophile_conversion_pH10: 0.8961465141387763 fraction
- S_alkylated_product_pH10_M: 0.000775897074509495 mol/L
- N_alkylated_product_pH10_M: 0.00012024943962928149 mol/L
- remaining_electrophile_pH10_M: 0.00010385348586122367 mol/L
- inverse_pH_for_selectivity20: 8.896557949621954 pH
- selectivity_ratio_at_inverse_pH: 20 ratio
- electrophile_inventory_pH8p5_M: 0.001 mol/L
- electrophile_inventory_pH10_M: 0.0010000000000000002 mol/L
- product_ratio_consistency_pH8p5: 33.72252510842285 ratio
- product_ratio_consistency_pH10: 6.452396592462451 ratio

