# 第十一辑 O144 / P144 完整中文解析

两题均待化学专家与跨辑模型复核，不得正式发布。

## UC-ADV11-O144 五位点短肽等电点、微态电荷分布与化学滴定缓冲容量

### 题干
某假想有机短肽含五个可离子化位点：N端氨基pKa=8.000、Lys氨基pKa=10.500、C端羧基pKa=3.100、Glu羧基pKa=4.200、Tyr酚羟基pKa=10.100。假设理想溶液、各位点独立，氨基质子化带+1、酸基去质子化带−1、其余状态中性。肽总浓度0.5000 mmol/L。求pH=0、7、8、11、14时的平均净电荷及唯一等电点pI，计算pI处五位点的正负电荷分数、总电荷方差、净电荷关于pH的导数、32种微观状态中恰好净电荷为零的总概率，以及滴定缓冲容量β=ln10 C_T Var(Q)。检查微态概率归一、平均电中性与恰好中性两概念的区别、正负电荷计数和非理想边界。

### 逐步推导
1. 假设短肽有五个独立可质子化中心：N端氨基、Lys氨基、C端羧基、Glu羧基和Tyr酚羟基，宏观pKa依次8.000、10.500、3.100、4.200、10.100。

2. 对氨基质子化带+1的概率b=1/[1+10^(pH−pKa)]；羧基/酚羟基去质子化带−1的概率a=1/[1+10^(pKa−pH)]。

3. 总平均净电荷Z(pH)=b_N+b_L−a_C−a_G−a_Y，各位点状态独立使平均电荷可直接相加。

4. 在pH=7和8分别得Z=-0.0903106545098、-0.510861939734，符号相反，等电点位于两者之间。

5. 每个氨基正电分数随pH增大而严格下降，每个酸基负电分数严格上升，因此Z'(pH)严格为负，等电根唯一。

6. 在[0,14]区间二分法求Z(pI)=0，得到pI=6.11452822980；不可将它简单等同于任意两个pKa平均值。

7. 在pI处N端与Lys的质子化正电分数为0.987149758973、0.999958836684。

8. 在pI处C端、Glu、Tyr的去质子化负电分数为0.999033833519、0.987971370998、0.000103391140323，正负当量和相等。

9. 独立二态的电荷方差Var(Q)=Σp_i(1−p_i)，不受电荷符号影响；该量同时描述微观质子化状态的电荷波动。

10. 方差Var(Q)=0.0256788284937，故dZ/dpH=−ln(10)Var(Q)=-0.0591276876950，提供与数值二分法不同的局部唯一性核验。

11. 计算五中心总共2⁵=32种微观质子化状态，分别用二项式概率多项式卷积求两个正位点激活数和三个负位点激活数分布。

12. 只有正数与负数相等的微态净电荷严格为零，将两个概率多项式同指数系数相乘求和，得到P(Q=0)=0.974361096360；平均Z=0不等于所有微态都中性。

13. 对总肽浓度0.5000 mmol/L，位点滴定缓冲容量β=ln(10) C_T Var(Q)=0.0000295638438475 mol/(L·pH)。

14. 本统计假设各位点互不影响且只发生质子酸碱交换；真实短肽的静电pKa耦合、离子强度、构象及盐桥需通过多微观酸解离常数重新求解。

### 独立答案向量
- isoelectric_pH: 6.1145282298044386 pH
- mean_charge_pH7: -0.09031065450984577 charge
- mean_charge_pH8: -0.5108619397335976 charge
- mean_charge_pH11: -2.646931984792292 charge
- mean_charge_pH0: 1.9991432003571479 charge
- mean_charge_pH14: -2.9995569953380494 charge
- Nterm_positive_fraction: 0.9871497589734821 fraction
- Lys_positive_fraction: 0.9999588366840564 fraction
- Cterm_negative_fraction: 0.9990338335188622 fraction
- Glu_negative_fraction: 0.9879713709983526 fraction
- Tyr_negative_fraction: 0.00010339114032346769 fraction
- charge_variance_at_pI: 0.02567882849365549 charge2
- net_charge_derivative_per_pH: -0.059127687695041876 charge/pH
- probability_exactly_neutral_microstate: 0.9743610963604131 fraction
- buffer_capacity_mol_L_per_pH: 0.00002956384384752094 mol/(L pH)
- positive_equivalents_pI: 1.9871085956575385 charge
- negative_equivalents_pI: 1.9871085956575383 charge
- mean_charge_residual_pI: 2.220446049250313e-16 charge

待审标志：publishable=false, exclude_from_official_bank=true, quality_status=awaiting_expert_review, novelty_review_status=pending_cross_series_model_review。

## UC-ADV11-P144 Gamma停留时间分布与串联CSTR一级反应转化、质量及热量守恒

### 题干
某恒温液相反应A→B以n个等体积理想CSTR串联来近似，反应一级速率常数k=0.02000 s⁻¹。示踪脉冲测得停留时间Gamma分布的均值τ=120.0 s与方差4800 s²，Gamma(n,n/τ)密度E(t)=(n/τ)^n t^(n−1)exp(−nt/τ)/(n−1)!。入口浓度C_A0=0.5000 mol/L、体积流量Q=1.000 L/min，反应焓ΔH_r=−60.00 kJ/mol，温度由外部移热维持。由示踪数据反演正整数n、每釜平均时间，推导一级反应未转化率为RTD的Laplace变换，求n釜、PFR、单CSTR转化率、出口A/B浓度、产物流率、移热功率及t=τ的RTD密度，并检查归一、守恒、单调性和模型局限。

### 逐步推导
1. 将稳态反应器等效为n个相同理想全混釜串联，反应为A→B一级转化，恒定k=0.02000 s⁻¹。

2. 无反应示踪脉冲得到Gamma停留时间分布E(t)=(n/τ)^n t^(n−1)exp(−nt/τ)/(n−1)!，t≥0。

3. 该分布满足概率积分∫E(t)dt=1，均值τ和方差τ²/n；由τ=120 s、方差4800 s²得n=3。

4. 每个釜平均停留时间τ/n=40 s、示踪整体标准差=69.2820323028 s。

5. 对经历停留时间t的A，一级反应生存概率为exp(−kt)；稳态出口残留比为Laplace积分∫E(t)exp(−kt)dt。

6. Gamma分布的Laplace变换为(1+kτ/n)^(−n)，因此X=1−(1+kτ/n)^(−n)，无需误用批式。

7. 本题1+kτ/n=1.80000000000，故三釜总转化率X=0.828532235940。

8. 同平均时间的理想PFR转化率X_PFR=0.909282046711，单釜X_CSTR=0.705882352941，满足X_CSTR<X_3<X_PFR。

9. 入口A浓度0.5 mol/L、流量1 L/min，出口A=0.0857338820302、B=0.414266117970 mol/L。

10. 出口B生成通量为流量乘浓度=0.00690443529950 mol/s，出口A与B流率和恰等于入口A流率。

11. 每摩尔反应放出60.00 kJ，恒温移热功率P=−ΔH_r×B生成速率=414.266117970 W。

12. 在t=τ的示踪RTD密度=0.00560104519138 s⁻¹，由Gamma公式非负且有正确概率密度单位。

13. 与n→∞趋向PFR、n=1趋向CSTR的极限相容；若存在旁路、非等体积、反应放热改变k或反应非一级，必须重新标定RTD与反应耦合。

### 独立答案向量
- inferred_tank_number: 3 tanks
- RTD_variance_s2: 4800 s2
- RTD_sd_s: 69.2820323027551 s
- per_tank_mean_residence_s: 40 s
- Laplace_denominator: 1.7999999999999998 dimensionless
- series_conversion: 0.8285322359396433 fraction
- PFR_conversion: 0.9092820467105875 fraction
- single_CSTR_conversion: 0.7058823529411765 fraction
- outlet_A_M: 0.08573388203017834 mol/L
- outlet_B_M: 0.41426611796982166 mol/L
- product_flux_mol_s: 0.0069044352994970274 mol/s
- required_heat_removal_W: 414.26611796982166 W
- unconverted_fraction: 0.1714677640603567 fraction
- single_tank_survival: 0.5555555555555556 fraction
- RTD_density_at_mean_s_inv: 0.005601045191384694 s^-1
- per_tank_exit_rate_s_inv: 0.025 s^-1

待审标志：publishable=false, exclude_from_official_bank=true, quality_status=awaiting_expert_review, novelty_review_status=pending_cross_series_model_review。

