# 第十二辑 I163 / A163 题干与逐步解答

本批为专家待审编辑稿，机器复算不能证明科学性或跨辑原创性。

## UC-ADV12-I163 Davies活度修正下BaSO4共离子溶解的正根反演与饱和指数

### 中文题干
某假想BaSO₄(s)溶解实验在25°C进行，热力学溶度积K_sp=a_Ba²⁺a_SO₄²⁻=1.100×10⁻¹⁰（所有活度以1 mol/L标准状态无量纲化）。溶液预先加入BaCl₂，总初始Ba²⁺=2.000×10⁻⁵ mol/L；NaNO₃作为大量惰性背景电解质使两次实验离子强度分别控制为0.01000和0.1000 mol/L。忽略BaSO₄中性离子对、HSO₄⁻和水解、假设固相始终存在。用Davies公式log₁₀γ_i=−0.51z_i²[√I/(1+√I)−0.30I]（I以mol/L对1 mol/L标准化），并对Ba²⁺、SO₄²⁻同时取z²=4。推导共离子平衡的唯一正根溶解度s，分别给出两离子强度下活度系数、s、自由Ba²⁺浓度、浓度离子积和最终热力学活度积。以测试溶解量s_test=5.000×10⁻⁶ mol/L分别计算试算离子积与SI=log₁₀(Q/K_sp)，判断欠饱和或过饱和。核对Ba与SO₄物质的量和电荷平衡，估计该溶解引入的离子强度，讨论Davies有效范围。

### 分步解析
1. 考虑BaSO₄(s)⇌Ba²⁺+SO₄²⁻。以1 mol/L为标准浓度，热力学溶度积K_sp=a_Ba a_SO4=1.100×10⁻¹⁰，不能把它直接等同于摩尔浓度的乘积。

2. 体系额外加入BaCl₂使尚未溶解固体前总Ba²⁺分析浓度c₀=2.000×10⁻⁵ mol/L，固体溶解s产生等量Ba²⁺、SO₄²⁻；忽略所有离子对与水解。

3. 大量1:1惰性NaNO₃电解质缓冲使离子强度在两次实验中分别固定为I₁=0.01000 mol/L和I₂=0.1000 mol/L，以小浓度盐引入的离子强度增量作为误差估计。

4. 将Davies经验式log₁₀γ_i=−0.51z_i²[√I/(1+√I)−0.30I]用于|z|=2的Ba²⁺与SO₄²⁻，故两者活度系数相同；I以mol/L相对1 mol/L标准浓度表达。

5. 代入I₁、I₂得到γ_±=0.661706581924、0.372463508913，盐浓度越高双电荷离子的γ越小。

6. 质量守恒给[Ba²⁺]=c₀+s、[SO₄²⁻]=s，而固液平衡要求γ²(c₀+s)s=K_sp。

7. 将该式化为s²+c₀s−K_sp/γ²=0。两个代数根一正一负，负根不符合非负物质的量，故物理解唯一。

8. 为避免在c₀远大于溶度时二次求根的消减误差，采用稳定表达式s=[2K_sp/γ²]/[√(c₀²+4K_sp/γ²)+c₀]。

9. 由此两离子强度下溶解度分别s₁=0.00000874098118918、s₂=0.0000198816402999 mol/L；后者为前者2.27453187114倍。

10. 低盐溶液自由Ba²⁺浓度=0.0000287409811892 mol/L，高盐溶液=0.0000398816402999 mol/L。

11. 将两正根逐一回代γ²(c₀+s)s，得1.10000000000e-10和1.10000000000e-10，均应等于K_sp。

12. 在尚未达到饱和的统一试算s_test=5.000×10⁻⁶ mol/L下，计算两背景的反应商Q=γ²(c₀+s_test)s_test，并用SI=log₁₀(Q/K_sp)判断相对饱和状态。

13. 试算Q₁=5.47319500702e-11、Q₂=1.73411331840e-11；SI₁=-0.303151763059、SI₂=-0.802315211427，负SI代表相对固相欠饱和。

14. 每个Ba²⁺带2单位正电、每个SO₄²⁻带2单位负电；BaCl₂带来的2c₀个Cl⁻当量与溶解的SO₄²⁻阴离子当量共同抵消阳离子电荷。

15. 忽略背景盐自身时，新增BaCl₂和BaSO₄造成离子强度增量ΔI=3c₀+4s，因此两次溶解对应额外4s分别为0.0000349639247567和0.0000795265611995 mol/L；本题已把背景离子强度视为受控参数。

16. Davies活度公式仅为中低离子强度经验近似，并非大浓度精确理论；真实硫酸盐可产生离子缔合、硫酸氢根与硫酸钡晶格表面效应，故本计算不是实测溶解度的替代。

### 数值见证
- Davies_mean_divalent_activity_coefficient_I001 = 0.6617065819240074 fraction
- Davies_mean_divalent_activity_coefficient_I01 = 0.37246350891277114 fraction
- BaSO4_solubility_I001_M = 0.000008740981189184137 mol/L
- BaSO4_solubility_I01_M = 0.000019881640299865217 mol/L
- salting_in_solubility_ratio = 2.27453187114351 ratio
- free_Ba_concentration_I001_M = 0.00002874098118918414 mol/L
- free_Ba_concentration_I01_M = 0.00003988164029986522 mol/L
- ionic_activity_product_equilibrium_I001 = 1.1e-10 dimensionless
- ionic_activity_product_equilibrium_I01 = 1.1e-10 dimensionless
- concentration_product_I001_M2 = 2.5122437593335373e-10 M2
- concentration_product_I01_M2 = 7.92912427010529e-10 M2
- ion_activity_product_trial_I001 = 5.473195007019415e-11 dimensionless
- ion_activity_product_trial_I01 = 1.7341133183951746e-11 dimensionless
- trial_saturation_index_I001 = -0.30315176305925945 ratio
- trial_saturation_index_I01 = -0.8023152114265004 ratio
- charge_cation_anion_dissolved_equivalents_I001_M = 0.00007496392475673655 ratio
- ionic_strength_increase_from_dissolution_I001_M = 0.00003496392475673655 mol/L
- ionic_strength_increase_from_dissolution_I01_M = 0.00007952656119946087 mol/L
- quadratic_numerator_I001_M = 0.000017481962378368275 mol/L

审核标记：publishable=false, exclude_from_official_bank=true, quality_status=awaiting_expert_review, novelty_review_status=pending_cross_series_model_review。

## UC-ADV12-A163 双波长Beer–Lambert混合物矩阵反演与浓度估计协方差

### 中文题干
某假想分析实验同时测量两种有色离子X、Y的摩尔浓度。1.000 cm比色皿在两个波长λ₁、λ₂处具有摩尔吸光系数矩阵E=[[15000,4000],[3000,12000]] L/(mol cm)，列顺序X、Y，行顺序λ₁、λ₂。光谱无重叠反应或吸附，符合Beer–Lambert线性叠加。独立空白基线分别b₁=0.01000、b₂=0.02000，样品测得吸光度A₁=0.15000、A₂=0.10400。空白扣除后两通道噪声互相独立，其标准差σ_A1=0.002000、σ_A2=0.003000（无量纲），背景基线值本身视作已准确测定。求唯一反演的c_X、c_Y，给出浓度比、各组分对吸光度的贡献、矩阵行列式与回代信号；建立Σ_c=(lE)⁻¹ diag(σ_A1²,σ_A2²)(lE)⁻ᵀ，计算浓度标准差、方差、协方差、相关系数及基于3σ的两物种浓度检测限，并检验波长数、噪声相关性、正浓度与反问题病态极限。

### 分步解析
1. 用两波长透射光度法同时测定两种不发生相互转化的吸收物种X与Y，假定理想Beer–Lambert线性叠加且光程l=1.000 cm。

2. λ₁与λ₂两列摩尔吸光系数依次为X:(15000,3000)、Y:(4000,12000) L/(mol cm)，背景空白吸光度分别为b₁=0.01000、b₂=0.02000。

3. 将空白扣除的吸光度列向量y=(A₁−b₁,A₂−b₂)写成y=l E c，E为2×2响应矩阵，c为待测两浓度。

4. 本题实测A₁=0.150000000000、A₂=0.104000000000，扣空白后y₁=0.140000000000、y₂=0.0840000000000。

5. 响应矩阵行列式det E=ε_X1 ε_Y2−ε_Y1 ε_X2=168000000.000，不为零，因而两物种浓度能唯一识别。

6. 明确写出代数反演c_X=(ε_Y2 y₁−ε_Y1 y₂)/(l det E)，c_Y=(ε_X1 y₂−ε_X2 y₁)/(l det E)。

7. 计算得c_X=0.00000800000000000 mol/L（8.00000000000 μmol/L），c_Y=0.00000500000000000 mol/L，浓度均非负。

8. 重建两波长吸光度b+l Ec得到A₁=0.150000000000、A₂=0.104000000000，与观测完全相符；X:Y浓度比为1.60000000000。

9. 设两波长扣空白后的测量噪声独立、均值零且标准差σ_A1=0.002000、σ_A2=0.003000吸光度；背景数值本身由独立空白校准准确给定，不计额外不确定度。

10. 线性误差传播给Σ_c=(lE)⁻¹ diag(σ₁²,σ₂²)[(lE)⁻¹]ᵀ，与单独把两波长噪声简单相加不同。

11. 具体Var(c_X)=[ε_Y2²σ₁²+ε_Y1²σ₂²]/(l det E)²=2.55102040816e-14 (mol/L)²，故σ_X=1.59719141250e-7 mol/L。

12. Var(c_Y)=[ε_X2²σ₁²+ε_X1²σ₂²]/(l det E)²=7.30229591837e-14 (mol/L)²，故σ_Y=2.70227606258e-7 mol/L。

13. 两浓度估计协方差cov(c_X,c_Y)=−[ε_Y2 ε_X2σ₁²+ε_Y1 ε_X1σ₂²]/(l det E)²=-2.42346938776e-14 (mol/L)²，相关系数=-0.561501418337。

14. 在仅考虑给定高斯空白噪声的三倍标准差近似下，X和Y的检测限为4.79157423750e-7和8.10682818773e-7 mol/L；这些是模型推导的联合反演标准差，不等于完整实验方法检出限。

15. 量纲核对：E单位L/(mol cm)，乘l cm与c mol/L得到无量纲吸光度；协方差矩阵应半正定且两种不确定度不能被视为独立。

16. 当两吸收物种的相对光谱形状几乎相同时det E趋0，反问题会严重放大噪声；真实样品的散射、漂移、非线性吸收和基线不确定性需要额外波长及校准。

### 数值见证
- measured_absorbance_lambda1 = 0.15 absorbance
- measured_absorbance_lambda2 = 0.10400000000000001 absorbance
- baseline_corrected_lambda1 = 0.13999999999999999 absorbance
- baseline_corrected_lambda2 = 0.084 absorbance
- spectral_matrix_determinant = 168000000 (L/(mol cm))^2
- reconstructed_species_X_M = 0.000007999999999999998 mol/L
- reconstructed_species_Y_M = 0.000005 mol/L
- species_X_uM = 7.999999999999998 umol/L
- species_Y_uM = 5 umol/L
- species_X_to_Y_concentration_ratio = 1.5999999999999999 ratio
- species_X_one_sigma_M = 1.5971914124998498e-7 mol/L
- species_Y_one_sigma_M = 2.7022760625752777e-7 mol/L
- species_X_variance_M2 = 2.5510204081632653e-14 (mol/L)^2
- species_Y_variance_M2 = 7.302295918367347e-14 (mol/L)^2
- species_XY_covariance_M2 = -2.423469387755102e-14 (mol/L)^2
- estimated_concentration_correlation = -0.5615014183372646 dimensionless
- species_X_three_sigma_concentration_LOD_M = 4.79157423749955e-7 mol/L
- species_Y_three_sigma_concentration_LOD_M = 8.106828187725833e-7 mol/L
- predicted_lambda1_absorbance = 0.14999999999999997 absorbance
- predicted_lambda2_absorbance = 0.104 absorbance
- X_lambda1_absorbance_contribution = 0.11999999999999997 absorbance
- Y_lambda1_absorbance_contribution = 0.02 absorbance

审核标记：publishable=false, exclude_from_official_bank=true, quality_status=awaiting_expert_review, novelty_review_status=pending_cross_series_model_review。

