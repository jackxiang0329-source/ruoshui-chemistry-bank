# UC-ADV11-I138 镍铁尖晶石反位参数的双亚晶格磁矩反演与质量磁化强度

## 题干
某假想化学计量尖晶石NiFe₂O₄的阳离子分布写为(Ni₁₋ₓFeₓ)_A[NiₓFe₂₋ₓ]_B O₄，0≤x≤1，A四面体位每式量1个、B八面体位每式量2个。假定所有Ni为高自旋Ni²⁺（饱和自旋磁矩2 μB）、Fe为高自旋Fe³⁺（5 μB），在0 K两亚晶格严格反平行且无自旋倾斜；由中子衍射模型得到A亚晶格饱和磁矩为4.400 μB/式量。给定相对原子质量Ni=58.6934、Fe=55.845、O=15.999 g/mol，μB=9.2740100783×10⁻²⁴ A·m²，N_A=6.02214076×10²³ mol⁻¹。求反位参数x、两个亚晶格及净饱和磁矩、各亚晶格Ni占位、每式量摩尔质量、每摩尔及单位质量饱和磁矩；以另一测量通道的净磁矩反向核验x，逐一检查位点、元素、电荷与磁矩极限，证明唯一物理解并阐述假设失效条件。

## 逐步严密解析
1. 设反位参数x∈[0,1]，四面体A位组成为Ni_(1−x)Fe_x，八面体B位组成为Ni_xFe_(2−x)；每式量有1个A位及2个B位，绝不可将B位下标归一成一个位点。

2. 按题设高自旋自旋-only饱和自旋磁矩，Ni²⁺为2 μB、Fe³⁺为5 μB；A亚晶格磁矩M_A=2(1−x)+5x=2+3x μB/式量。

3. B亚晶格磁矩M_B=2x+5(2−x)=10−3x μB/式量，两个亚晶格按题设严格反平行。

4. 故净磁矩M_net=|M_B−M_A|=|8−6x| μB/式量。在0≤x≤1内，8−6x≥2>0，可去绝对值且反演唯一。

5. 题设中性子衍射等效测得A亚晶格饱和磁矩4.400 μB/式量，因此x=(4.400−2)/3=0.8000，满足物理占位区间。

6. 得到A位Ni=0.200、Fe=0.800，B位Ni=0.800、Fe=1.200；各元素合计Ni=1、Fe=2，且A位总数1、B位总数2。

7. 反演所得B亚晶格磁矩为7.600 μB/式量，净磁矩为3.200 μB/式量。由净磁矩反向独立求x=(8−3.200)/6=0.8000。

8. 氧离子为O²⁻，Ni²⁺与Fe³⁺给出总阳电荷2+2×3=8，四个氧给出−8，总电荷残差为0，与x无关。

9. 摩尔质量M=58.6934+2×55.845+4×15.999=234.3794 g/mol；每摩尔式量的饱和磁矩为3.2×μ_B×N_A，单位A·m²/mol。

10. 质量比饱和磁矩σ=3.2 μ_B N_A/(0.2343794 kg/mol)，单位A·m²/kg，且1 A·m²/kg=1 emu/g；不得把摩尔质量的g/mol直接当kg/mol。

11. 端点x=0时净磁矩8 μB、x=1时2 μB，本题3.2在其间。由dM_net/dx=−6<0可证明逆问题严格单调、唯一。

12. 本题为0 K理想共线Néel两亚晶格的离子高自旋近似；自旋倾斜、氧缺陷、价态混合、温度激发及共价性都会使真实磁矩和占位反演偏离，不可当作材料实测定论。

## 机器独立复核答案向量
- inversion_x: 0.8000000000000002 fraction
- A_sublattice_muB: 4.4 muB/formula
- B_sublattice_muB: 7.6 muB/formula
- net_moment_muB: 3.1999999999999993 muB/formula
- formula_mass_g_mol: 234.3794 g/mol
- saturation_A_m2_kg: 76.25160791596012 A m2/kg
- moment_per_mol_A_m2: 17.871806112377985 A m2/mol
- x_from_net: 0.8000000000000002 fraction
- A_Ni_occupancy: 0.19999999999999984 per_formula
- B_Ni_occupancy: 0.8000000000000002 per_formula
- charge_residual: 0 elementary_charge/formula

状态：`publishable=false`, `exclude_from_official_bank=true`, `quality_status=awaiting_expert_review`, `novelty_review_status=pending_cross_series_model_review`。模型原创性及科学性未获专家确认。
