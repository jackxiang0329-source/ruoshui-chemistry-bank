# 2026-10-27 大学化学题库续采集：重复导入阻止与质量筛查

## 当前仓库核对结果

- `main` 既有候选记录 **1122**：无机 622、有机 414、分析 33、物理 53。
- 其中练习候选 844、学习卡 278，全部 `awaiting_expert_review` / `publishable=false`，专家批准 0。
- 机器审计：完全同题干重复 0 组；同模板疑似 36 组，语义去重尚未完成。
- **本轮新增合法候选题 0 道。** 没有把已存在的 5 道 Muza 题重复计算成新题。

## 上游已导入事实与失败纠正

- 来源 [MuzaPro/Organic-Chemistry-Quiz-JS](https://github.com/MuzaPro/Organic-Chemistry-Quiz-JS)，固定版本 `71f3262bce0eba6c7e1cb0814394f1e04b6a9dbc`，`data/questions.json` Git Blob `e4fde59d9f5faa1ff0ed82fa57ae7b05f276292a`。
- [上游 MIT LICENSE](https://github.com/MuzaPro/Organic-Chemistry-Quiz-JS/blob/71f3262bce0eba6c7e1cb0814394f1e04b6a9dbc/LICENSE)，Git Blob `4ef30f44a9a6ade70614188412f98c76aaa3b14e`；本仓库此前已经保留 [MIT 许可证全文](../../third_party/licenses/MUZA_ORGANIC_MIT_LICENSE.txt) 和 [来源审查](../../docs/SOURCE_MUZA_ORGANIC_LICENSE_REVIEW.md)。
- `harvest/approved_imports.json` 早已批准该固定源的 `organic-reaction-quiz` 结构化数据；`scripts/import-approved-chemistry.mjs` 已导入 **5** 道（q1–q5）。
- 一度尝试建立第二个 Muza 专用导入器，新的幂等检查在 [Actions 40447995423](https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40447995423) 发现 `Source question ID previously imported with different text q5`，按设计停止。**该失败运行没有把新候选提交到仓库**。
- 已在 [回退提交 29a9b1f](https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/29a9b1f9880f6421ee1cdd56a7d4efd08fa3d7e4) 移除重复导入器、清单、测试和工作流步骤，恢复此前稳定树。当前增加只读覆盖测试，不再导入。
- 对 5 道原题的许可、去重、学科及发布状态新增自动核验：`tests/muzapro-existing-coverage.test.mjs`。

## 化学质量风险

- q1 Williamson 醚合成：反应物与 SN2 机理基本一致，但实际条件仍需审核。
- q2 叔丁基氯的 SN1：题干称“酸性条件”，所选乙醇与叔丁基氯未明确酸的作用；需讨论溶剂、竞争消除和反应条件。
- q3 叔丁基溴 E2：强碱/底物组合合理，需补充温度和溶剂对竞争反应的影响。
- q4 Fischer 酯化：题干称“酸催化”，但正确反应物组合未包含催化剂；需明确催化剂是否预先给定。
- q5 格氏试剂与环氧乙烷：生成 2-苯基乙醇需先无水加成再酸性水解；原始选择题仅列两种主要反应物，需明确后处理。

**上述 5 道全部保留待专家审核，均不得作为已核准考试题发布。** 结构化细节见 [机器可读筛查记录](../source_reviews/2026-10-27-muzapro-reaction-quality.json)。

## 本轮另外核验的来源

| 来源 | 许可核验 | 不导入原因 |
| --- | --- | --- |
| [pranav11722/ChemQuiz-Pro-](https://github.com/pranav11722/ChemQuiz-Pro-) | MIT | HTML 中仅 3 道，主要是热/质传递和一条拉乌尔定律基础选择题，不构成新增本科四科题源 |
| [jayemscript/chemverse](https://github.com/jayemscript/chemverse) | MIT | `data/quiz.json` 含 12 组偏儿童/基础化学的测验，不符合当前本科题库筛选标准 |
| [prefabsprout/anchem_quiz](https://github.com/prefabsprout/anchem_quiz) | 未发现许可证 | 分析化学小测程序，无法确认题文再分发权 |
| [dipamsen/chemguessr](https://github.com/dipamsen/chemguessr) | 未发现许可证 | 无机化学小测程序，未核实内容许可 |
| [Kasa-SENSEI/InorganicChemistryQuiz](https://github.com/Kasa-SENSEI/InorganicChemistryQuiz) | 未发现许可证 | 未核实题文许可 |
| [sergeqzin/pcivmr](https://github.com/sergeqzin/pcivmr) | CC0-1.0 | 只有 LaTeX 排版包说明和许可，没有可导入习题 |
| [xavierprat/Physical-Chemistry-with-Jupyter](https://github.com/xavierprat/Physical-Chemistry-with-Jupyter) | 未核实 | 本轮 GitHub 仓库读取 404，无法核实内容与授权 |

## 后续事项

1. 复审 Muza q2、q4、q5 的反应条件与产物；不得凭 MIT 许可自动标为专家审核通过。
2. 36 组同模板题需要语义去重；现有精确题干去重 0 组不代表全库无同义重复。
3. 优先找**明确可再分发、具有独立解答、适合本科程度**的分析化学和物理化学题源；仅有源码或仓库可见并不意味着有题目版权。
4. 继续保持现有 30 分钟 GitHub Actions 发现流程；新来源须先核许可证与内容来源，再逐题筛选。

**净增：0；重复导入：0；新正式发布：0。**
