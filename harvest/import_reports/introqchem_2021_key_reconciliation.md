# 2021 量子化学课程题：学生本与答案本交叉核验

固定来源：PaulWAyers/IntroQChemProblems @ 0491272e0b8e71059e601537b196181ab6b367cd

本报告不是新的教材题本；只保留校验序号、独立科学证据、原文链接与审核分类。**21 道仍未解除逐题版权审核与专家审批。**

历史上标记 13 项争议，其中 2 项经原答案本复核确认是误报；当前真正需要人工处理的来源问题为 **11 项**。另 1 项从“答案键错误”修正归因为“学生题单位问题”。

| 主题 | 问题类别 | 学生本单元 | 答案本单元 | 审核状态 |
|---|---|---:|---:|---|
| photon_radiation_pressure_force | source_question_unit_or_formula_error | 25 | 25 | 待专家与版权审核 |
| gamma_radiation_molar_energy | source_notebook_variable_or_condition_typo | 28 | 28 | 待专家与版权审核 |
| hydrogen_ground_state_first_absorption | source_notebook_variable_or_condition_typo | 38 | 42 | 待专家与版权审核 |
| complex_conjugate_tdse | source_question_unit_or_formula_error | 57 | 64 | 待专家与版权审核 |
| complex_conjugation_nonnegative_norm | logical_options_or_wording_interpretation | 66 | 73 | 待专家与版权审核 |
| momentum_vs_kinetic_operator_eigenstates | logical_options_or_wording_interpretation | 71 | 78 | 待专家与版权审核 |
| photon_particle_evidence | scientific_evidence_interpretation | 5 | 5 | 待专家与版权审核 |
| vacuum_light_speed_dispersion | source_assumption_or_outdated_terminology | 16 | 16 | 待专家与版权审核 |
| photon_energy_doubling_relations | source_assumption_or_outdated_terminology | 22 | 22 | 待专家与版权审核 |
| photon_particles_vs_matter_waves | scientific_evidence_interpretation | 45 | 49 | 待专家与版权审核 |
| wavefunction_probability_density_nonnegative | logical_options_or_wording_interpretation | 63 | 70 | 待专家与版权审核 |

## 源证据和科学对照

### photon_radiation_pressure_force

- [学生题本](https://github.com/PaulWAyers/IntroQChemProblems/blob/0491272e0b8e71059e601537b196181ab6b367cd/ipynb/IntroQM2021.ipynb)、[答案本](https://github.com/PaulWAyers/IntroQChemProblems/blob/0491272e0b8e71059e601537b196181ab6b367cd/ipynb/IntroQMkey.ipynb)
- 来源核对：原学生题把“动量每秒”的结果要求写成 kg·m/s；答案本实际计算光子动量乘光子每秒个数，即力 P/c。
- 独立说明：应将学生问题的单位改为 N=kg·m/s²。答案数值 F≈3.33564×10⁻¹⁰ N 不应被标注为答案键数值错误。

### gamma_radiation_molar_energy

- [学生题本](https://github.com/PaulWAyers/IntroQChemProblems/blob/0491272e0b8e71059e601537b196181ab6b367cd/ipynb/IntroQM2021.ipynb)、[答案本](https://github.com/PaulWAyers/IntroQChemProblems/blob/0491272e0b8e71059e601537b196181ab6b367cd/ipynb/IntroQMkey.ipynb)
- 来源核对：答案本的预期变量名和最终计算变量名少一个字符，实际公式仍为 λ=N_Ahc/E_m。
- 独立说明：标为源代码变量命名错误；不是计算理论错误。

### hydrogen_ground_state_first_absorption

- [学生题本](https://github.com/PaulWAyers/IntroQChemProblems/blob/0491272e0b8e71059e601537b196181ab6b367cd/ipynb/IntroQM2021.ipynb)、[答案本](https://github.com/PaulWAyers/IntroQChemProblems/blob/0491272e0b8e71059e601537b196181ab6b367cd/ipynb/IntroQMkey.ipynb)
- 来源核对：学生文本的能级不等式排除了 n₁=1，却同时明确写基态 n₁=1；答案本使用 1→2 跃迁。
- 独立说明：修正不等式起点为 n₁≥1，最小吸收频率为 3cR_H/4。

### complex_conjugate_tdse

- [学生题本](https://github.com/PaulWAyers/IntroQChemProblems/blob/0491272e0b8e71059e601537b196181ab6b367cd/ipynb/IntroQM2021.ipynb)、[答案本](https://github.com/PaulWAyers/IntroQChemProblems/blob/0491272e0b8e71059e601537b196181ab6b367cd/ipynb/IntroQMkey.ipynb)
- 来源核对：答案本的动能项系数写成 ℏ/(2m)，正确应为 ℏ²/(2m)，且势 V 应假设实值。
- 独立说明：保留已验证的数学系数错误；共轭左端的 i 必须变为 −i。

### complex_conjugation_nonnegative_norm

- [学生题本](https://github.com/PaulWAyers/IntroQChemProblems/blob/0491272e0b8e71059e601537b196181ab6b367cd/ipynb/IntroQM2021.ipynb)、[答案本](https://github.com/PaulWAyers/IntroQChemProblems/blob/0491272e0b8e71059e601537b196181ab6b367cd/ipynb/IntroQMkey.ipynb)
- 来源核对：对于复数 z，zz*=|z|²=a²+b²≥0；源选项包括“复数”和“非负实数”，答案本同时选两项。
- 独立说明：说明实数可视为复数，数学结论正确；非零实数不总成立（z=0）。属多选解释问题，不是错误证明。

### momentum_vs_kinetic_operator_eigenstates

- [学生题本](https://github.com/PaulWAyers/IntroQChemProblems/blob/0491272e0b8e71059e601537b196181ab6b367cd/ipynb/IntroQM2021.ipynb)、[答案本](https://github.com/PaulWAyers/IntroQChemProblems/blob/0491272e0b8e71059e601537b196181ab6b367cd/ipynb/IntroQMkey.ipynb)
- 来源核对：学生命题含“反之亦然”，答案本布尔值为真，忽略了动能简并子空间中动量不唯一。
- 独立说明：明确题干双向命题为假：cos(kx) 是自由粒子动能本征函数却不是动量本征函数。

### photon_particle_evidence

- [学生题本](https://github.com/PaulWAyers/IntroQChemProblems/blob/0491272e0b8e71059e601537b196181ab6b367cd/ipynb/IntroQM2021.ipynb)、[答案本](https://github.com/PaulWAyers/IntroQChemProblems/blob/0491272e0b8e71059e601537b196181ab6b367cd/ipynb/IntroQMkey.ipynb)
- 来源核对：原多选答案包含黑体辐射、康普顿散射和光电效应；黑体量子化是历史相关证据但非直接单光子碰撞测量。
- 独立说明：区分能量量子化的历史证据与直接光子动量散射实验；不武断地把源答案全盘判错。

### vacuum_light_speed_dispersion

- [学生题本](https://github.com/PaulWAyers/IntroQChemProblems/blob/0491272e0b8e71059e601537b196181ab6b367cd/ipynb/IntroQM2021.ipynb)、[答案本](https://github.com/PaulWAyers/IntroQChemProblems/blob/0491272e0b8e71059e601537b196181ab6b367cd/ipynb/IntroQMkey.ipynb)
- 来源核对：学生断言波长翻倍则传播速度减半，答案本判断为假；该判断需要真空或非色散环境语境。
- 独立说明：真空中速度始终为 c，波长变化使频率调整；若处于色散介质则需定义折射率。

### photon_energy_doubling_relations

- [学生题本](https://github.com/PaulWAyers/IntroQChemProblems/blob/0491272e0b8e71059e601537b196181ab6b367cd/ipynb/IntroQM2021.ipynb)、[答案本](https://github.com/PaulWAyers/IntroQChemProblems/blob/0491272e0b8e71059e601537b196181ab6b367cd/ipynb/IntroQMkey.ipynb)
- 来源核对：原多选含“有效相对论质量”与波数，答案本选择与能量成比例的选项。
- 独立说明：现代授课优先使用 E=hν=pc=ℏck；光子静止质量为零，避免把 E/c² 误称为静止质量。

### photon_particles_vs_matter_waves

- [学生题本](https://github.com/PaulWAyers/IntroQChemProblems/blob/0491272e0b8e71059e601537b196181ab6b367cd/ipynb/IntroQM2021.ipynb)、[答案本](https://github.com/PaulWAyers/IntroQChemProblems/blob/0491272e0b8e71059e601537b196181ab6b367cd/ipynb/IntroQMkey.ipynb)
- 来源核对：答案本包含黑体辐射、光电效应和康普顿散射；混合了量子化历史证据与光子碰撞现象。
- 独立说明：在科学讲解中分层表述证据强度，电子衍射体现电子波动性而非光子的粒子性。

### wavefunction_probability_density_nonnegative

- [学生题本](https://github.com/PaulWAyers/IntroQChemProblems/blob/0491272e0b8e71059e601537b196181ab6b367cd/ipynb/IntroQM2021.ipynb)、[答案本](https://github.com/PaulWAyers/IntroQChemProblems/blob/0491272e0b8e71059e601537b196181ab6b367cd/ipynb/IntroQMkey.ipynb)
- 来源核对：学生版问“永远不为负”应答真；答案本变量名则改问“可否为负”并赋假。
- 独立说明：两种逻辑表述的结论等价但真假字面反向，不能直接把答案本布尔值作为学生题答案。

## 两项误报修正

- **complex_exponential_wavefunction**：原键已明确接受 A、a、b、k、ω 等可能为复数时的整体共轭表达式。（学生本单元 69，答案本单元 76）
- **electron_waves_vs_atomic_lines**：原答案本只选 E（电子晶体散射），并没有选择 B（氢原子谱线）。（学生本单元 42，答案本单元 46）

## 数学与物理证明见证

- 复数模：(a+bi)(a−bi)=a²+b²≥0，等号当且仅当 a=b=0
- 动量与动能：φ(x)=cos(kx) 满足 Tφ=ℏ²k²/(2m)φ，但 pφ=iℏk sin(kx) 与 φ 不成比例
- 波函数共轭：−iℏ∂Ψ*/∂t = −ℏ²/(2m)∂²Ψ*/∂x² + VΨ*（V为实势）
- 氢基态首次吸收频率：2.4674418e+15 Hz

**科学专家批准：0；逐题版权确认：0；正式可组卷：0。**
