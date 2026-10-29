# 第十二辑 O159 / P159 严格题目与解析

两题为专家待审编辑稿，不能将机器QA等同人类审定或原创性结论。

## UC-ADV12-O159 2D EXSY两态可逆构象交换的传播矩阵反演与详细平衡

### 中文题干
假想一种有机分子在298.15 K下只有两个NMR可辨构象A⇌B，平衡一维积分给[B]/[A]=2/3；分子以一级速率k_AB、k_BA进行马尔可夫互变，且无化学降解，总浓度0.01000 mol/L。2D EXSY实验对A构象进行理想选择性标记，校正所有T₁弛豫、NOE和接收灵敏度后，起始标签的条件概率为P_A(0)=1、P_B(0)=0。混合时间t₁=0.5000 s时观测归一B交叉峰概率0.252848223531423，t₂=1.000 s时观测0.345865886705355。推导两态速率方程与传播矩阵（或本征值），由两个时点分别推导总交换速率kΣ以及两个单向速率，给出EXSY A对角概率、到平衡的松弛时间和半衰趋近平衡时间；计算ΔG°_B−A=−RTln([B]/[A])、平衡两构象物质的量浓度和正逆微观通量，核验概率归一、详细平衡以及交换与自旋弛豫的实验限制。

### 逐步求解
1. 设有机分子仅存在两个可分辨的构象A、B，并以一阶速率A→B为k_AB、B→A为k_BA进行可逆化学交换；两构象的分子骨架及总体浓度守恒。

2. 假定2D EXSY选择性标记A态的核磁自旋，在混合时间t内标记不因T₁/T₂弛豫丢失、无额外交叉弛豫和NOE，交叉峰强度经校正后可按分子从A转至B的条件概率解释。

3. 主方程为dP_A/dt=−k_ABP_A+k_BAP_B、dP_B/dt=k_ABP_A−k_BAP_B，且P_A+P_B=1。

4. 稳态要求详细平衡π_Ak_AB=π_Bk_BA，设总交换速率kΣ=k_AB+k_BA，即π_A=k_BA/kΣ、π_B=k_AB/kΣ。

5. 独立一维NMR积分给平衡构象比[B]/[A]=2/3，故π_A=0.600000000000、π_B=0.400000000000。

6. 选择性激发的初始条件P_A(0)=1、P_B(0)=0。对2×2速率生成矩阵对角化，非零松弛本征值为−kΣ。

7. 随时间的EXSY概率严格为P_B(t)=π_B[1−exp(−kΣt)]，P_A(t)=π_A+π_Bexp(−kΣt)，两者任何时刻都归一。

8. 测得混合时间t₁=0.5s、t₂=1s处归一交叉峰P_B分别0.252848223531和0.345865886705；同时A态对角概率分别0.747151776469和0.654134113295。

9. 由任一时点解kΣ=−(1/t)ln[1−P_B(t)/π_B]，需满足0<P_B(t)<π_B；两个时间点均可独立求出。

10. 得到kΣ(0.5s)=2.00000000000 s⁻¹、kΣ(1s)=2.00000000000 s⁻¹，两次结果一致。

11. 详细平衡再给k_AB=kΣπ_B=0.800000000000、k_BA=kΣπ_A=1.20000000000 s⁻¹，不可将kΣ误认为单向速率。

12. 指数恢复时间τ=1/kΣ=0.500000000000 s，达到平衡差值一半的时间t₁/₂=ln2/kΣ=0.346573590280 s。

13. 对平衡构象比K=[B]/[A]=2/3，按1 mol/L标准状态计算ΔG°_B−A=−RTlnK=1.00513057998 kJ/mol，B的标准自由能较高。

14. 若总有机分子浓度0.01 mol/L，平衡[A]=0.00600000000000、[B]=0.00400000000000 mol/L，前后总浓度严格不变。

15. 正向和逆向的每分子总库归一化稳态交换通量同为0.480000000000 s⁻¹，两者差为0；交换仍持续，平衡不代表无微观交换事件。

16. 本模型只包含两态马尔可夫交换，真实2D EXSY必须校正交叉弛豫、NOE、T₁损失、非理想选择激发及多个中间构象；若这些效应显著不能直接将交叉峰视作条件概率。

### 独立数值答案
- equilibrium_A_fraction = 0.6 fraction
- equilibrium_B_fraction = 0.4 fraction
- equilibrium_B_over_A = 0.6666666666666667 ratio
- normalized_EXSY_B_crosspeak_t0p5 = 0.25284822353142306 fraction
- normalized_EXSY_B_crosspeak_t1 = 0.34586588670535495 fraction
- normalized_EXSY_A_diagonal_t0p5 = 0.7471517764685769 fraction
- normalized_EXSY_A_diagonal_t1 = 0.654134113294645 fraction
- total_exchange_rate_from_0p5_s = 1.9999999999999993 s^-1
- total_exchange_rate_from_1s_s = 2 s^-1
- forward_A_to_B_rate_s = 0.7999999999999998 s^-1
- reverse_B_to_A_rate_s = 1.1999999999999995 s^-1
- exchange_relaxation_time_s = 0.5 s
- exchange_half_approach_time_s = 0.34657359027997264 s
- G_B_minus_A_kJ_mol = 1.0051305799847012 kJ/mol
- equilibrium_A_concentration_M = 0.006 mol/L
- equilibrium_B_concentration_M = 0.004 mol/L
- equilibrium_forward_flux_per_total_s = 0.48 s^-1
- detailed_balance_flux_residual_s = 0 s^-1
- crosspeak_ratio_1_to_0p5 = 1.3678794411714426 ratio
- unrelaxed_excited_label_fraction_t1 = 0.1353352832366127 fraction

审核标记：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

## UC-ADV12-P159 Lindemann–Hinshelwood碰撞活化反应的压力降落、倒数反演与极限识别

### 中文题干
一种假想气相活化分解A→P在350.0 K下采用Lindemann–Hinshelwood模型：A+M⇌A*+M，正向活化常数k₁、碰撞去活化常数k₋₁均以L/(mol s)为单位，A*→P为一级常数k₂（s⁻¹）。热浴M的浓度远大于A而恒定，激发态A*满足准稳态且[A*]≪[A]。两个独立实验固定[M]₁=0.02000 mol/L与[M]₂=0.5000 mol/L，测得有效一阶常数k_obs,1=0.0352941176470588 s⁻¹、k_obs,2=0.230769230769231 s⁻¹。以速率方程推导k_obs=k₁[M]k₂/[k₋₁[M]+k₂]及低/高压常数k₀、k∞，使用1/k_obs对1/[M]双点反演k₀、k∞及转折碰撞浓度；说明为什么两点不足以分开k₂和k₋₁。在两个[M]下计算激发态的反应/回落竞争概率、[A*]/[A]准稳态比值。若起始A₀=0.01000 mol/L、反应持续5.000 s且[A*]可忽略，求转化分数与产物浓度；将[M]视作理想气体并用R=8.314462618 J/(mol K)换算热浴分压，检查低高压极限、准稳态与物料近似。

### 逐步求解
1. 采用Lindemann–Hinshelwood的独立热浴M碰撞活化模型：A+M → A*+M（速率常数k₁），A*+M → A+M（k₋₁），A*→P（k₂），假设产物P不逆反应。

2. 热浴碰撞物M的大量浓度[M]由实验固定，活化/失活分子反应的k₁和k₋₁单位均为L/(mol s)，单分子反应k₂单位s⁻¹。

3. 对低浓度中间态A*采用准稳态d[A*]/dt≈k₁[M][A]−(k₋₁[M]+k₂)[A*]=0。

4. 因此[A*]/[A]=k₁[M]/(k₋₁[M]+k₂)，产物形成速率v=k₂[A*]=k_obs[A]，其中k_obs=k₁[M]k₂/(k₋₁[M]+k₂)。

5. 定义低压极限常数k₀=k₁及高压一级极限k∞=k₁k₂/k₋₁，并取转折热浴浓度[M]*=k₂/k₋₁=k∞/k₀。

6. 两点测量用[M]₁=0.02000 M和[M]₂=0.5000 M，给定真实模型常数k₁=2.000、k₋₁=800.0 L/(mol s)，k₂=120.0 s⁻¹；在反演时将它们视为未知。

7. 按这些输入生成有效速率常数k_obs,1=0.0352941176471、k_obs,2=0.230769230769 s⁻¹。

8. 倒数变换1/k_obs=1/(k₀[M])+1/k∞，在横坐标x=1/[M]、纵坐标y=1/k_obs的图上为直线，斜率为1/k₀、截距为1/k∞。

9. 由双点线性解得到k₀=2.00000000000 L/(mol s)，k∞=0.300000000000 s⁻¹，唯一确定转折浓度[M]*=0.150000000000 mol/L。

10. 注意单凭两点k_obs只能识别k₁和k₂/k₋₁的组合，不能在没有第三类动力学信息时单独确定k₂与k₋₁。

11. 已活化A*进一步生成P而非回到A的条件概率为k₂/(k₋₁[M]+k₂)：低/高碰撞浓度分别0.882352941176、0.230769230769。

12. 准稳态激发态与基态浓度比分别0.000294117647059、0.00192307692308，均低于0.002，支持忽略A*库存的近似。

13. 在中间态库存可忽略且热浴常量的约化一级模型下，近似积分得到[A](t)=A₀exp(−k_obst)、[P](t)=A₀[1−exp(−k_obst)]。

14. 初始A₀=0.01000 mol/L、t=5.000 s时，两条件转化分数分别0.161776567577、0.684578725361，产物P浓度分别0.00161776567577和0.00684578725361 mol/L。

15. 若温度恒为350 K、气态M理想且[A]与[M]在同一体积中，热浴压力p=[M]×1000RT，两测试对应58201.2383260与1455030.95815 Pa。

16. M→0时k_obs≈k₀[M]呈二级碰撞依赖；M→∞时k_obs→k∞为纯一级极限。若A*不可忽略、能量随机游走、多能态或非理想碰撞显著，需要采用全主方程或Troe/RRKM更精细动力学模型。

### 独立数值答案
- low_pressure_bimolecular_rate_constant_M_inv_s = 2 L/(mol s)
- high_pressure_unimolecular_limit_s_inv = 0.3 s^-1
- half_falloff_collision_concentration_M = 0.15 mol/L
- effective_rate_low_collision_s = 0.03529411764705882 s^-1
- effective_rate_high_collision_s = 0.23076923076923078 s^-1
- high_low_rate_ratio = 6.538461538461539 ratio
- reciprocal_plot_slope_M_s = 0.5 mol s/L
- reciprocal_plot_intercept_s = 3.333333333333332 s
- recovered_low_pressure_constant_M_inv_s = 2 L/(mol s)
- recovered_high_pressure_constant_s_inv = 0.3000000000000001 s^-1
- reaction_probability_after_excitation_low = 0.8823529411764706 fraction
- reaction_probability_after_excitation_high = 0.23076923076923078 fraction
- excited_state_to_ground_ratio_low = 0.00029411764705882356 fraction
- excited_state_to_ground_ratio_high = 0.0019230769230769232 fraction
- converted_fraction_low_after5s = 0.1617765675770001 fraction
- converted_fraction_high_after5s = 0.6845787253610525 fraction
- product_low_after5s_M = 0.001617765675770001 mol/L
- product_high_after5s_M = 0.006845787253610525 mol/L
- unexcited_substrate_low_after5s_M = 0.00838223432423 mol/L
- unexcited_substrate_high_after5s_M = 0.0031542127463894754 mol/L
- low_bath_gas_partial_pressure_Pa = 58201.238326 Pa
- high_bath_gas_partial_pressure_Pa = 1455030.9581499998 Pa
- low_pressure_time_constant_s = 28.333333333333332 s
- high_pressure_time_constant_s = 4.333333333333333 s

审核标记：publishable=false，exclude_from_official_bank=true，quality_status=awaiting_expert_review，novelty_review_status=pending_cross_series_model_review。

