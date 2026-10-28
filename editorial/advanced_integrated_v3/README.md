# 大学化学高阶综合题 · 第三辑

本辑继续以第一、第二辑的独立高阶模型题作为最低难度基准。**新增12道，不是参数化生成的200道。** 四科各3道，均包含联立建模、推导、数值求解或根的唯一性分析，以及逆代入核验。

## 目录

| 科目 | 编号 | 完整题目与解答 |
|---|---|---|
| 无机化学 | I04—I06 | [inorganic.jsonl](inorganic.jsonl) |
| 分析化学 | A04—A06 | [analytical.jsonl](analytical.jsonl) |
| 有机化学 | O04—O06 | [organic.jsonl](organic.jsonl) |
| 物理化学 | P04—P06 | [physical.jsonl](physical.jsonl) |

[第三辑完整中文审校稿](advanced_authored_set02.md) 将题目、步骤推导、答案、模型假设和机器残差集中显示，便于查看与后续 LaTeX 排版。

## 质量保证与边界

运行 `node scripts/check-advanced-authored-v3.mjs`，逐题重新计算独立的质量、配位、电子、平衡、光谱或动力学方程；运行 `node scripts/audit-advanced-only.mjs` 确认主库只保留高阶题，不允许低难练习回填。GitHub Actions 在提交后检查两者。

本辑仅为原创题的机器级审校稿，尚无独立化学专家对实验合理性、学科真实程度、全部假设、排版与版权的最终签核。故所有记录均 `awaiting_expert_review`、`publishable=false`，**专家批准0、正式组卷0**。

每一条为独立编写的问题情境与数学模型，部分采用明示假想物种、缓冲条件或速率定律。后续扩充需要开发新的独立知识模型，严禁用改动数字、复制题型或拼接小问的方式虚增高难题数量。清理前旧数据继续隔离在备份分支。
