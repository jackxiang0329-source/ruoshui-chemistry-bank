# 34 道大学化学教材计算题：中文独立推导隔离稿

仅供内部审核，不包含教材原题全文。版本、逐题权利、答案及专家审查均未批准。

固定版本：a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2

## 异丙醇稀释后的总体积（分析化学）

来源：[contents/m51014.md，第 16 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51014.md)

1. 已知稀释只加溶剂，溶质的物质的量在操作前后不变；体积、浓度必须使用配套单位。
2. 写出 c₁V₁=c₂V₂，并将 0.3556 mol/L、0.1718 L 与 0.1222 mol/L 代入反求 V₂。
3. V₂≈0.499935 L，有效数字约 0.5000 L；用 V₂c₂=V₁c₁ 做反向一致性检查。

计算值：最终体积 = 0.4999352 L

---

## 蔗糖储备液取用体积（分析化学）

来源：[contents/m51014.md，第 18 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51014.md)

1. 储备液浓度 0.33 mol/L 大于最终 0.025 mol/L，原液取样体积应小于总体积 25 mL。
2. 稀释不改变溶质物质的量，V₁=c₂V₂/c₁=(0.025×25)/0.33 mL。
3. 结果约 1.89394 mL，按两位有效数字约 1.9 mL；以原液溶质的量反查。

计算值：原液体积 = 1.893939 mL

---

## HCl 储备液的摩尔浓度（分析化学）

来源：[contents/m51014.md，第 22 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51014.md)

1. 明确 868.8 g 是 HCl 溶质质量，2.00 L 是溶液定容体积，不可直接把 g/L 视为 mol/L。
2. 计算 M(HCl)=1.008+35.45=36.458 g/mol，由 c=m/(MV) 得 868.8/(36.458×2.00)。
3. c≈11.9144 mol/L，按原始量精度约 11.9 mol/L；复算 cVM 应为 868.8 g。

计算值：HCl 浓度 = 11.91508 mol/L

---

## 硫酸钾溶液的总体积（分析化学）

来源：[contents/m51014.md，第 24 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51014.md)

1. 化学式 K₂SO₄ 含两 K、一 S、四 O，先求摩尔质量，防止漏乘下标。
2. M=2×39.0983+32.06+4×15.999 g/mol；由 n=m/M、V=n/c 得 V=(57/M)/0.20。
3. 求得约 1.63556 L，按给定精度约 1.6 L；由 cVM 验算溶质质量。

计算值：体积 = 1.635557 L

---

## 定容气体受热的理论压强（物理化学）

来源：[contents/m51065.md，第 10 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51065.md)

1. 只在理想气体、定容和摩尔数不变的数学模型中使用 P/T=常数；摄氏温度不能直接相除。
2. 将 23 ℃ 与 475 ℃ 转为 296.15 K 与 748.15 K，代入 P₂=1344×748.15/296.15 torr。
3. 约 3395.28 torr，即 3.40×10³ torr；这是理论计算，不代表实际加热压力容器安全。

计算值：理论末态压强 = 3395.285 torr

---

## 等压氢气升温时的体积（物理化学）

来源：[contents/m51065.md，第 12 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51065.md)

1. 假设气体的量和压强不变，运用 V/T=常数，先将 −196 ℃ 和 100 ℃ 转为绝对温度。
2. 两端温度分别是 77.15 K、373.15 K，因此 V₂=2.50×373.15/77.15 L。
3. 结果约 12.0917 L，按三位有效数字 12.1 L；以 V₂/T₂ 与 V₁/T₁ 的相等性反查。

计算值：末态体积 = 12.09170 L

---

## 三氟化硼的气体摩尔数与质量（物理化学）

来源：[contents/m51065.md，第 16 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51065.md)

1. 采用 P=1.220 atm、V=4.3410 L、T=788.0 K 和 R=0.082057338 L·atm/(mol·K)。
2. 先求 n=PV/(RT)，再以 M(BF₃)=10.81+3×18.998 g/mol 计算 m=nM。
3. 得到 n≈0.0819042 mol 与 m≈5.55343 g；m/M 反推 n 应与理想气体计算一致。

计算值：物质的量 = 0.08190416 mol；质量 = 5.553430 g

---

## 高压氧气折算到人体温度与常压（物理化学）

来源：[contents/m51065.md，第 20 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51065.md)

1. 初态为 151 atm、35.4 L、298.15 K，目标为 1 atm、310.15 K，假设理想气体和物质的量不变。
2. 使用 P₁V₁/T₁=P₂V₂/T₂，得到 V₂=151×35.4×310.15/298.15 L。
3. 约 5560.54 L，源答案按四位有效数字约 5561 L；实际高压气体非理想性另行复核。

计算值：末态体积 = 5560.543 L

---

## 脂肪在膳食中的能量占比（物理化学）

来源：[contents/m51034.md，第 20 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51034.md)

1. 食品 Cal 为千卡；脂肪 65 g、能量密度 9.1 Cal/g，已知每日总能量 2000 Cal。
2. 脂肪提供 65×9.1=591.5 Cal，故占比=591.5/2000×100%。
3. 计算为 29.575%，按题设精度取约 30%；分子分母必须使用同一能量单位。

计算值：能量百分比 = 29.57500 %

---

## 低热量饮料中的碳水质量严格上限（物理化学）

来源：[contents/m51034.md，第 22 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51034.md)

1. 已给碳水化合物能量密度 4.1 Cal/g，若饮料热量严格小于 1 Cal，应该保留不等号。
2. 令质量为 m，列 4.1m<1，得 m<1/4.1 g。
3. 边界值约 0.243902 g，教材的 0.24 g 是近似说明；边界等号自身不符合严格小于条件。

计算值：质量上限 = 0.2439024 g

---

## 从 pH 独立求两种离子浓度（分析化学）

来源：[contents/m51117.md，第 7 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51117.md)

1. 稀溶液下近似以浓度代替活度，25 ℃ 时采用 K_w≈10⁻¹⁴。
2. 由 pH=6.52 求 [H₃O⁺]≈10⁻⁶·⁵²，再以 [OH⁻]≈K_w/[H₃O⁺] 计算。
3. 两者分别约 3.020×10⁻⁷ 和 3.311×10⁻⁸ mol/L，乘积反算约 10⁻¹⁴。

计算值：水合氢离子浓度 = 3.019952e-7 mol/L；氢氧根离子浓度 = 3.311311e-8 mol/L

---

## 氨水离子积及原参考答案标签错误（分析化学）

来源：[contents/m51117.md，第 11 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51117.md)

参考答案疑点：textbook_labels_hydronium_numeric_result_as_hydroxide

1. 原数据给定的是 [OH⁻]=3.2×10⁻³ mol/L，但要求计算的是 [H₃O⁺]，必须辨别符号。
2. 25 ℃ 下按 [H₃O⁺]=K_w/[OH⁻]，代入 10⁻¹⁴/(3.2×10⁻³)。
3. 结果约 3.125×10⁻¹² mol/L；原答案将该数值误标为 OH⁻，必须作为来源疑点保留。

计算值：水合氢离子浓度 = 3.125000e-12 mol/L

---

## 比较三种化合物中的氧元素质量（无机化学）

来源：[contents/m51011.md，第 9 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51011.md)

1. 乙醇与水每分子各含一个氧原子，甲酸含两个，因此不能只比较各化合物的摩尔数。
2. 对三种样品用 m(O)=n(化合物)×每粒子氧原子数×15.999 g/mol，分别取 0.75、0.60、1.00 mol。
3. 氧质量约为 12.00、19.20、16.00 g，故甲酸所含氧元素质量最多。

计算值：乙醇中的氧 = 11.99925 g；甲酸中的氧 = 19.19880 g；水中的氧 = 15.99900 g

---

## 五种物质的摩尔质量核算（无机化学）

来源：[contents/m51011.md，第 13 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51011.md)

1. 拆分分子式下标，尤其 Sc₂(SO₄)₃ 中 2 个 Sc、3 个 S、12 个 O；丙酮含三个 C。
2. 按 M=Σ n_i A_i 求和，例如 M(Sc₂(SO₄)₃)=2A(Sc)+3A(S)+12A(O)。
3. 所用标准原子量小数位可能与教材旧表不同，复核时先检查组成和量纲，再比较末位舍入。

计算值：S₈ = 256.5280 g/mol；戊烷 = 72.15100 g/mol；硫酸钪 = 378.0800 g/mol；丙酮 = 58.08000 g/mol；葡萄糖 = 180.1560 g/mol

---

## 五种含杂原子有机物的式量（无机化学）

来源：[contents/m51011.md，第 15 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51011.md)

1. 按已给物质的化学式计算而非只凭名称猜测盐型；含 Br、Cl、F 的组成尤其要逐原子计数。
2. 将 C₂HBrClF₃、C₁₂H₁₄N₂Cl₂、C₈H₁₀N₄O₂、CO(NH₂)₂、C₁₈H₃₅O₂Na 的各元素贡献求和。
3. 保留化学式和所用原子量表，源答案末位与现代原子量常有微差，须人工审定而非强行取齐。

计算值：氟烷 = 197.3780 g/mol；百草枯盐式 = 257.1580 g/mol；咖啡因 = 194.1940 g/mol；尿素 = 60.05600 g/mol；钠皂 = 306.4660 g/mol

---

## 等摩尔氧原子、氧气、臭氧的质量（无机化学）

来源：[contents/m51011.md，第 21 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51011.md)

1. 三组都是 0.600 mol，但作为粒子的 O、O₂、O₃ 每粒子分别含 1、2、3 个氧原子。
2. 利用 m=nM，分别求 0.600×15.999、0.600×31.998、0.600×47.997 g。
3. 结果约 9.60、19.2、28.8 g；等摩尔粒子并不是等摩尔氧原子。

计算值：氧原子 = 9.599400 g；氧气 = 19.19880 g；臭氧 = 28.79820 g

---

## 锆石的元素质量与原子数（无机化学）

来源：[contents/m51011.md，第 23 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51011.md)

1. 硅酸锆化学式 ZrSiO₄，0.3384 mol 中锆、硅各有 0.3384 mol 原子，而氧原子为四倍。
2. 原子数用 6.02214076×10²³ mol⁻¹ 求得；元素质量为各元素原子物质的量乘其摩尔质量。
3. 氧原子数必须是锆原子数四倍，结果分别标注“个”和“克”，避免混用元素数量与质量。

计算值：锆原子数 = 2.037892e+23 个；锆质量 = 30.87020 g；硅原子数 = 2.037892e+23 个；硅质量 = 9.503964 g；氧原子数 = 8.151570e+23 个；氧质量 = 21.65625 g

---

## 三种铝盐中的铝质量比较（无机化学）

来源：[contents/m51011.md，第 25 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51011.md)

原题化学式疑点：printed_Al2C1_6_is_Al2Cl6_not_carbon_digit_one

1. 原题出现 C1 与 Cl 易混的化学式，当前只按原答案暗示的 Al₂Cl₆ 解释，保留原文疑点。
2. 对 122 g AlPO₄、266 g Al₂Cl₆、225 g Al₂S₃ 分别计算 m(Al)=m(样品)×n_Al A(Al)/M(物质)。
3. 三者比较以 Al₂S₃ 含铝质量最大；若原化学式解释改变必须重算，不能自动抹除错字警告。

计算值：磷酸铝中的 Al = 26.99223 g；氯化铝二聚体中的 Al = 53.82883 g；硫化铝中的 Al = 80.86741 g

---

## 钻石克拉质量换算至原子数（无机化学）

来源：[contents/m51011.md，第 26 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51011.md)

原教材未附参考答案，必须人工复核。

1. 按题设 1 克拉等于 0.200 g，1.25 克拉钻石质量就是 0.250 g。
2. 假设金刚石纯碳，先计算 n=0.250/12.011 mol，再乘阿伏伽德罗常数 N_A。
3. 得到约 1.253×10²² 个原子；源教材无附答案，钻石纯度是应单独审阅的假设。

计算值：碳原子数 = 1.253464e+22 个

---

## 高锰酸钾质量配液浓度（分析化学）

来源：[contents/m51014.md，第 10 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51014.md)

1. KMnO₄ 摩尔质量等于 A(K)+A(Mn)+4A(O)，在计算前逐一清点下标。
2. 先用 0.0908 g 除以式量得到摩尔数，再除以 0.500 L 得浓度 c。
3. 约 1.149×10⁻³ mol/L，有效数字约 1.15×10⁻³ mol/L；逆算 cVM 应回到称样质量。

计算值：KMnO₄ 浓度 = 0.001149132 mol/L

---

## 胆固醇、氨、异丙醇和碘的浓度（分析化学）

来源：[contents/m51014.md，第 12 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51014.md)

1. 四组都先检查溶质化学式和质量单位，异丙醇质量 1.49 kg 须转换为 1490 g。
2. 分别计算 c=m/(MV)，体积依次 0.100、0.500、2.50、0.100 L；摩尔质量分别按 C₂₇H₄₆O、NH₃、C₃H₈O、I₂。
3. 碘为双原子分子，误用单个碘原子量会造成两倍偏差；其他数据也要按各自精度舍入。

计算值：胆固醇 = 0.005043138 mol/L；氨 = 0.4990899 mol/L；异丙醇 = 9.917465 mol/L；碘 = 0.001142592 mol/L

---

## 牛奶中钙离子的浓度（分析化学）

来源：[contents/m51014.md，第 14 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51014.md)

1. 题设含 1.0 g 钙元素（作为 Ca²⁺），不是 1.0 g 的其他钙盐。
2. n(Ca²⁺)=1.0 g/(40.078 g/mol)，再除以 1.0 L 溶液体积。
3. 约 0.02495 mol/L，按输入有效数字取 0.025 mol/L，需区分元素质量与化合物质量。

计算值：钙离子浓度 = 0.02495134 mol/L

---

## 硝酸铁的原液取样体积（分析化学）

来源：[contents/m51014.md，第 15 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51014.md)

原教材未附参考答案，必须人工复核。

1. 原液 1.00 mol/L，目标为 1.00 L、0.250 mol/L；假设稀释前后溶质的量守恒。
2. 依 c₁V₁=c₂V₂，V₁=(0.250×1.00)/1.00 L。
3. 计算 0.250 L 即 250 mL；取样体积小于最终溶液体积，是合理性检查。

计算值：原液体积 = 0.2500000 L

---

## 四组溶液稀释及原答案题号勘误（分析化学）

来源：[contents/m51014.md，第 20 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51014.md)

参考答案疑点：answer_labels_part_d_as_part_e

1. 所有小问用 c_f=c_iV_i/V_f，确保体积单位在每个小问中前后一致。
2. 四个浓度计算分别为 (1.00×0.250)/2.00、(0.5000×0.1222)/1.250、(2.35×0.350)/4.00、(22.50×0.025)/100.0。
3. 第四个小问教材参考答案误写成 (e) 而非 (d)，这属于编号错位，不影响溶质守恒的公式。

计算值：Fe(NO₃)₃ = 0.1250000 mol/L；丙醇 = 0.04888000 mol/L；H₃PO₄ = 0.2056250 mol/L；蔗糖 = 0.005625000 mol/L

---

## 汽车冷却水降温传热（物理化学）

来源：[contents/m51034.md，第 8 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51034.md)

1. 按美制 1 gallon≈3.78541 L、密度约 1 g/mL 得水质量约 3785 g。
2. 华氏温差 240−175=65 °F，相当于 65×5/9 K；因此 Q=mcΔT。
3. 计算热量绝对值约 572 kJ，按题设精度为 5.7×10² kJ；系统取水时放热符号为负。

计算值：传热量绝对值 = 571.9337 kJ

---

## 吸热反应的近似量热（物理化学）

来源：[contents/m51034.md，第 14 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51034.md)

1. 温度下降 3.1 ℃，说明反应体系吸热；近似按溶液质量与水相近的比热处理。
2. m≈100+3.15+1.52 g，Q≈m×4.20×3.1 J，再除以 1000。
3. 约 1.363 kJ（教材约 1.4 kJ）；真实值须考虑量热器热容和溶液比热偏差。

计算值：吸热量 = 1.362803 kJ

---

## 弹式量热热容与放热量（物理化学）

来源：[contents/m51034.md，第 18 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51034.md)

1. 量热器热容 534 J/K，675 mL 水在近似密度 1 g/mL 时热容为 675×4.184 J/K。
2. 总热容为两项相加，温差为 26.9−23.4=3.5 K；Q=C_totalΔT。
3. 绝对值为 11.7537 kJ，教材舍入约 11.7 kJ；燃烧反应作为系统的热量符号为负。

计算值：热量绝对值 = 11.75370 kJ

---

## 谷物食品的营养热量（物理化学）

来源：[contents/m51034.md，第 24 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51034.md)

1. 食品单位 Cal 是千卡；蛋白质 3 g、碳水 18 g、脂肪 6 g。
2. 能量=3×4.1+18×4.1+6×9.1 Cal，以各营养素的单位质量能量分别求和。
3. 计算为 140.7 Cal，按给定精度约 1.4×10² Cal。

计算值：每份热量 = 140.7000 Cal

---

## 碘蒸气的理想气体温度（物理化学）

来源：[contents/m51065.md，第 17 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51065.md)

原教材未附参考答案，必须人工复核。

1. 碘蒸气分子 I₂ 的摩尔质量为 2×126.90447 g/mol，不能按单个 I 原子求摩尔数。
2. 气室 73.3 mL 转成 0.0733 L；n=0.292/M(I₂)，T=0.462×0.0733/(nR)。
3. 约为 358.72 K（约 85.6 ℃）。原题不附答案，气体模型还需人工审查。

计算值：绝对温度 = 358.7175 K

---

## 三种气体的压力体积单位换算（物理化学）

来源：[contents/m51065.md，第 18 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51065.md)

1. 三份数据的压力分别使用 torr、kPa、torr；计算前必须统一为 atm，221 mL 改为 0.221 L。
2. 三组分别用 n=PV/(RT)，温度为 299.15、483、219.15 K，再乘各自气体摩尔质量。
3. 三份质量约 7.24×10⁻⁵、23.12、1.49×10⁻⁴ g；注意第一项是 0.100 L，不能错用 100 L。

计算值：CO₂ = 0.07242022 g；C₂H₄ = 23.12374 g；Ar = 0.0001485739 g

---

## 给定呼吸耗氧体积的摩尔数（物理化学）

来源：[contents/m51065.md，第 23 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51065.md)

原教材未附参考答案，必须人工复核。

1. 给定 14 L、100 kPa 与 25 ℃ 的气态氧，温度必须改为 298.15 K。
2. 使用 R=8.314462618 kPa·L/(mol·K)，代入 n=100×14/(R×298.15)。
3. 得到约 0.56475 mol，按给定精度约 0.56 mol；只针对给定时间的实验模型。

计算值：氧气物质的量 = 0.5647536 mol

---

## 不同含氟化合物的标准状况体积（物理化学）

来源：[contents/m51065.md，第 26 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51065.md)

1. 明确使用教材 STP=273.15 K 和 1 atm；若采用 1 bar 版本 STP 会略有不同。
2. 分别求两种气体的摩尔质量，再用 V=(10.0/M)×RT/P 计算相同质量时的体积。
3. 约 1.85 L 和 4.66 L；分子量越大相同质量的气体物质的量越小。

计算值：CCl₂F₂ = 1.853818 L；C₂H₅F = 4.663746 L

---

## 40 ℃ 下纯水的浓度与 pH（分析化学）

来源：[contents/m51117.md，第 2 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51117.md)

原教材未附参考答案，必须人工复核。

1. 纯水中性条件是 [H₃O⁺]=[OH⁻]，而不是任何温度下 pH 均为 7。
2. 40 ℃ 时 K_w=2.9×10⁻¹⁴，因此 [H₃O⁺]=√K_w≈1.70294×10⁻⁷ mol/L。
3. pH=−log₁₀([H₃O⁺]/1 mol/L)≈6.7688；教材无参考答案，活度近似应另行复核。

计算值：水合氢离子浓度 = 1.702939e-7 mol/L；pH = 6.768801

---

## 雨水中氢氧根离子浓度（分析化学）

来源：[contents/m51117.md，第 10 题](https://github.com/philschatz/chemistry-book/blob/a6ac3918e61cbedf0589c5b43e748dc8a7edf5e2/contents/m51117.md)

原教材未附参考答案，必须人工复核。

1. 25 ℃ 时按稀溶液近似，取 K_w≈1.0×10⁻¹⁴。
2. 雨水 [H₃O⁺]=1.7×10⁻⁶ mol/L，代入 [OH⁻]=K_w/[H₃O⁺]。
3. 得到 [OH⁻]≈5.882×10⁻⁹ mol/L；两浓度相乘反验 K_w，教材原题未附答案。

计算值：氢氧根浓度 = 5.882353e-9 mol/L

---
