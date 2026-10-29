# 第十二辑 I162 / A162 解析

全部为专家待审编辑草稿，禁止发布，机器验证不代替人工科学性和新颖性审定。

## UC-ADV12-I162 两性Al(OH)3溶解平衡的络合物种分布与唯一溶解度极小值

### 中文题目
某假想Al(OH)₃无机固体的两性溶解平衡在298.15 K理想稀溶液中研究。体系由足量缓冲储液池维持pH且固相始终存在，简化模型只允许自由Al³⁺和[Al(OH)₄]⁻两种含Al溶解物种，忽略AlOH²⁺、Al(OH)₂⁺及多核络合。定义K_sp=[Al³⁺][OH⁻]³=1.000×10⁻³³和β₄=[Al(OH)₄⁻]/([Al³⁺][OH⁻]⁴)=1.000×10³³，两常数均以1 mol/L标准浓度定义为相应数值，水pK_w=14.000。求总溶解度S(pH)函数，严格证明其在正自由OH浓度范围内存在唯一极小值并求极小pH、最小总溶解度、该点自由Al³⁺与铝酸根比例；分别在pH 5、7、9求总溶解度及pH7两溶质物种浓度。回代检查导数与物种计量和电荷平衡，说明固相和缓冲液假设及未包含水解中间物种的限制。

### 逐步解析
1. 选取假想两性氢氧化铝固相Al(OH)₃(s)，在298.15 K固定pH、理想稀溶液的缓冲储液池中达到固液平衡；铝始终为形式氧化态+III。

2. 溶解产物只考虑自由Al³⁺与铝酸根[Al(OH)₄]⁻，刻意忽略AlOH²⁺、Al(OH)₂⁺、多核羟基络合物与铝酸聚合。

3. 以无量纲活度近似浓度比计算，设K_sp=[Al³⁺][OH⁻]³=10⁻³³，整体络合常数β₄=[Al(OH)₄⁻]/([Al³⁺][OH⁻]⁴)=10³³（均按1 mol/L标准浓度）。

4. 在给定自由[OH⁻]=o时，由K_sp求[Al³⁺]=K_sp/o³，代入β₄求[Al(OH)₄⁻]=β₄K_sp o；总铝溶解度S(o)=K_sp/o³+β₄K_sp o。

5. 在纯水常用pK_w=14的温度近似下o=10^(pH−14) mol/L，酸性侧自由Al³⁺项以o^−3增大，碱性侧铝酸根项以o正一次增大。

6. 求导S'(o)=−3K_sp/o⁴+β₄K_sp；在o>0的唯一极小处满足o⁴=3/β₄，且S''=12K_sp/o⁵>0。

7. 由此得到o*=7.40082804492e-9 mol/L，pOH*=8.13071968632，pH*=5.86928031368。

8. 极小点自由Al³⁺浓度=2.46694268164e-9、铝酸根浓度=7.40082804492e-9 mol/L，总溶解度S_min=9.86777072656e-9 mol/L。

9. 一阶条件给[Al(OH)₄⁻]=3[Al³⁺]，故极小处75%溶解铝为铝酸根，25%为自由Al³⁺，不要误以为两物种必须相等。

10. 分别在pH=5、7、9求总溶解度0.00000100100000000、1.00001000000e-7、0.0000100000000000 mol/L，显示两侧上升趋势。

11. pH 7自由Al³⁺=1.00000000000e-12、铝酸根=1.00000000000e-7 mol/L，总和严格等于该pH总铝。

12. 化学计量检查：Al(OH)₃(s)+OH⁻⇌[Al(OH)₄]⁻，反应前后各有1个Al、4个O、4个H，净电荷都为−1，形式Al(III)不变。

13. 最小溶解度推导假设始终有未溶解固相以维持K_sp并有外部缓冲容量固定pH；若总Al库存不足、pH由溶解自身改变或中间羟基络合物显著，计算不再成立。

### 主答案向量
- minimum_solubility_OH_M: 7.4008280449228524e-9 mol/L
- minimum_solubility_pOH: 8.130719686320084 pOH
- minimum_solubility_pH: 5.869280313679916 pH
- minimum_Al3_concentration_M: 2.466942681640951e-9 mol/L
- minimum_AlOH4_concentration_M: 7.4008280449228524e-9 mol/L
- minimum_total_Al_solubility_M: 9.867770726563804e-9 mol/L
- fraction_aluminate_at_minimum: 0.7499999999999999 fraction
- three_Al3_over_AlOH4_ratio_at_minimum: 1.0000000000000002 ratio
- total_solubility_pH5_M: 0.0000010009999999999998 mol/L
- total_solubility_pH7_M: 1.00001e-7 mol/L
- total_solubility_pH9_M: 0.000010000000000001 mol/L
- free_Al3_pH7_M: 1.0000000000000002e-12 mol/L
- aluminate_pH7_M: 1e-7 mol/L
- alkaline_branch_linear_coefficient: 1 dimensionless
- solubility_derivative_at_minimum: 0 slope
- triple_Al3_amount_M: 7.400828044922853e-9 mol/L
- aluminate_fraction_reverse_check: 0.7499999999999999 fraction

标记：publishable=false；exclude_from_official_bank=true；awaiting_expert_review；pending_cross_series_model_review。

## UC-ADV12-A162 吸附富集伏安信号的三倍时间双点反演、唯一根及动态检测限

### 中文题目
某假想痕量配合物采用吸附富集型溶出伏安法测量，固定电极和缓冲溶液条件下，富集t秒后的峰高电流I(t)符合I(t)=I_blank+kC[1−exp(−t/τ)]，空白I_blank=0.1000 nA、灵敏度k=1.000×10⁸ nA/(mol/L)，未知样品浓度C与累积动力学时间常数τ均待求。两个时间点t₁=10.00 s、t₃=30.00 s分别测得I₁=${I1.toPrecision(15)} nA和I₃=${I3.toPrecision(15)} nA；独立空白标准差σ_blank=0.02000 nA。由两个扣空白信号的比值推导一元二次方程，求其唯一指数物理解、τ和C，预测t=20.00 s时信号和半平台时间、两测量时点富集分数、无限时间及10和30秒的3σ浓度检测限。要求给出反演根区间、排除负根、信号与单位一致性及简化吸附模型失效条件。

### 逐步解析
1. 将假想痕量金属有机络合物在电极上的吸附富集型溶出峰电流换算为nA峰高信号I(t)，假设电极表面未饱和且定量响应随累积时间趋于指数平台。

2. 测量模型为I(t)=I_blank+kC[1−exp(−t/τ)]，空白I_blank=0.1000 nA、浓度灵敏度k=1.000×10⁸ nA/(mol/L)，τ为未知累积时间常数。

3. 分别在t₁=10.00 s和t₃=30.00 s同一样本独立测量，固定缓冲条件、峰电位和无电极记忆污染。

4. 给定I₁=1.67387736115 nA、I₃=3.20747935941 nA，减去空白得y₁=1.57387736115、y₃=3.10747935941 nA。

5. 以x=exp(−10/τ)记正数小于1的指数因子，t₃=3t₁时y₃/y₁=(1−x³)/(1−x)=1+x+x²，消除了未知浓度与灵敏度。

6. 观测比r=y₃/y₁=1.97441010088，对x解x²+x+(1−r)=0，唯一物理根x=[−1+√(4r−3)]/2=0.606530659713。

7. 在τ>0时要求1<r<3（累积时间比3），本次数值满足；另一个二次根为负，不是指数动力学的物理解。

8. 取自然对数反演τ=−10/lnx=20.0000000000 s；将此τ代回两次数据独立求浓度。

9. 由C=y₁/[k(1−x)]得到C=4.00000000000e-8 mol/L=40.0000000000 nmol/L，回代第二时点也得到同值。

10. 第三校验时点t₂=20.00 s预测I₂=2.62848223531 nA，所需时间达到半平台为t½=τln2=13.8629436112 s。

11. 10与30 s各自表面累积分数1−e^(−t/τ)分别为0.393469340287、0.776869839852，均在0到1之间。

12. 空白一倍标准差σ_blank=0.02000 nA，若按3σ/k作信号判据，无限累积时间的平台检测限LOD∞=3σ_blank/k；有限t时LOD(t)=LOD∞/[1−exp(−t/τ)]。

13. 求LOD∞=6.00000000000e-10 mol/L，10与30 s检测限分别1.52489644952e-9、7.72330150073e-10 mol/L；较长累积时间改善灵敏度，但不能去除空白系统偏差。

14. 假设峰电流与吸附物量线性，平台来自固定一级吸附动力学，不考虑浓度改变τ、竞争表面吸附、传质边界层及去吸附记忆；真实伏安分析需要独立标定k及空白噪声分布。

### 主答案向量
- signal_at_10s_nA: 1.6738773611494664 nA
- signal_at_30s_nA: 3.207479359406281 nA
- blank_corrected_10s_nA: 1.5738773611494663 nA
- blank_corrected_30s_nA: 3.107479359406281 nA
- signal_ratio30_10: 1.9744101008840758 ratio
- ten_second_uptake_decay_factor: 0.6065306597126334 dimensionless
- inferred_accumulation_tau_s: 20 s
- inferred_analyte_concentration_M: 4e-8 mol/L
- inferred_concentration_nM: 40 nmol/L
- predicted_20s_signal_nA: 2.6284822353142308 nA
- uptake_half_time_s: 13.862943611198906 s
- infinite_time_LOD_M: 6e-10 mol/L
- 10s_LOD_M: 1.524896449522079e-9 mol/L
- 30s_LOD_M: 7.723301500733209e-10 mol/L
- surface_fraction_at_10s: 0.3934693402873666 fraction
- surface_fraction_at_30s: 0.7768698398515702 fraction
- plateau_signal_above_blank_nA: 4 nA
- mean_signal_slope_10_to_30_nA_s: 0.07668009991284072 nA/s

标记：publishable=false；exclude_from_official_bank=true；awaiting_expert_review；pending_cross_series_model_review。

