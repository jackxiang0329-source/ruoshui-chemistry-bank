# 五道有机化学反应题：元素守恒及反应条件逐题质检

所有五题是现存候选；净反应平衡不是专家确认反应条件、主产物、实验安全或版权的证明。

数量：5/5 形式净反应元素守恒；3 道优先条件复核（q2/q4/q5）；人工批准 0。

## q1：Williamson SN2 ether synthesis

- 题目：[候选 JSON](../data/candidates/7d299414e8b48ebbe8242d02493ee1571d184f0b5afe27066dbe3fa50814fbf4.json)
- 来源答案：Sodium Methoxide + Bromoethane
- 形式反应：CH3ONa + C2H5Br → C3H8O + NaBr
- 元素守恒：通过（残差均为 0）
- 条件警示：conditions_unspecified
- 严格审校建议：甲氧基负离子与一级溴乙烷发生 SN2 取代，产生甲乙醚；题干宜补充适当溶剂并提示一级卤代烷更利于取代。
- 参考资料：[教材1](https://openstax.org/books/organic-chemistry/pages/18-2-preparing-ethers)
- 审核状态：仍待人工审定、不可组卷。

## q2：Tertiary chloride SN1 solvolysis with E1 competition

- 题目：[候选 JSON](../data/candidates/428637fc953ac4b588a810c520e1925f9616fb52d8efbfd02d88bce51f989815.json)
- 来源答案：Ethanol + tert-Butyl Chloride
- 形式反应：C2H5OH + C4H9Cl → C6H14O + HCl
- 元素守恒：通过（残差均为 0）
- 条件警示：acidic_conditions_ambiguous_competing_E1
- 严格审校建议：乙醇可进攻叔丁基氯溶剂解形成的碳正离子，但 E1 消除成异丁烯也可发生；若含水，还可形成叔丁醇。来源的“酸性条件”不能保证该醚为唯一或主产物。应说明溶剂、含水量与产物竞争。
- 参考资料：[教材1](https://openstax.org/books/organic-chemistry/pages/11-12-a-summary-of-reactivity-sn1-sn2-e1-e1cb-and-e2)
- 审核状态：仍待人工审定、不可组卷。

## q3：E2 alkene formation with bulky strong base

- 题目：[候选 JSON](../data/candidates/8ff61e3268c3b80f8796c3b5775c5a5a18be362a147024090ff238f6e32ea322.json)
- 来源答案：Potassium tert-butoxide + 2-Bromo-2-methylpropane
- 形式反应：C4H9OK + C4H9Br → C4H8 + C4H10O + KBr
- 元素守恒：通过（残差均为 0）
- 条件警示：temperature_and_solvent_unspecified
- 严格审校建议：叔丁醇钾从叔丁基溴夺取 β-H，协同消除 Br，生成 2-甲基丙烯、叔丁醇与 KBr；题干还应限定适宜溶剂和温度。
- 参考资料：[教材1](https://openstax.org/books/organic-chemistry/pages/11-8-the-e2-reaction-and-the-deuterium-isotope-effect)；[教材2](https://openstax.org/books/organic-chemistry/pages/11-12-a-summary-of-reactivity-sn1-sn2-e1-e1cb-and-e2)
- 审核状态：仍待人工审定、不可组卷。

## q4：Fischer acid-catalyzed esterification

- 题目：[候选 JSON](../data/candidates/e9db8a9b15428852ac449dca74b6d49abb26f3734e33761a919c530c30330fdc.json)
- 来源答案：Acetic Acid + Ethanol
- 形式反应：CH3COOH + C2H5OH → C4H8O2 + H2O
- 元素守恒：通过（残差均为 0）
- 条件警示：sulfuric_acid_catalyst_not_selected_and_equilibrium_unstated
- 严格审校建议：乙酸与乙醇为化学计量反应物；硫酸在来源备选项里出现，但不在标注的正确反应物二元组中。若题干写“酸催化”，应将酸催化剂作为单独条件，并说明可逆平衡及除水或过量醇的影响。
- 参考资料：[教材1](https://chem.libretexts.org/Courses/Purdue/Purdue%3A_Chem_26605%3A_Organic_Chemistry_II_%28Lipton%29/Chapter_13._Addition-Elimination_Sequences/13.2%3A_Electrophilic_Addition-Elimination/13.2.1_%22Acid-Catalyzed_Nucleophilic_Acyl_Substitution%22/13.2.1.2_Fischer_Esterification)
- 审核状态：仍待人工审定、不可组卷。

## q5：Grignard ethylene oxide ring opening followed by hydrolysis

- 题目：[候选 JSON](../data/candidates/5aac29b6f67f409b2304a984381ba1a7a0d081d3d4dc8e27cfc6270ca49df3bb.json)
- 来源答案：Phenylmagnesium Bromide + Ethylene Oxide
- 形式反应：C6H5MgBr + C2H4O + HCl → C8H10O + MgBrCl
- 元素守恒：通过（残差均为 0）
- 条件警示：anhydrous_step_and_separate_acid_workup_omitted
- 严格审校建议：苯基溴化镁先在无水醚溶剂中与环氧乙烷反应生成镁醇盐，再用水性酸后处理生成 2-苯乙醇；不能把酸在反应开始时与格氏试剂一同加入。HCl 只用于形式净式中的后处理。
- 参考资料：[教材1](https://openstax.org/books/organic-chemistry/pages/18-5-reactions-of-epoxides-ring-opening)
- 审核状态：仍待人工审定、不可组卷。

注意：原始 data/candidates JSON 不变，依旧 publishable=false；项目级 MIT 许可不替代每项第三方权利链审核。
