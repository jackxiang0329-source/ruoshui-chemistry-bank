# 大学化学题库 · 第六辑（50条新增待审题目）

[阅读全部50道题目与逐步解答](50_advanced_chemistry_solutions.md)

| 学科 | 题数 | 编号 | 来源 |
|---|---:|---|---|
| 无机化学 | 13 | I33–I45 | [inorganic.jsonl](inorganic.jsonl) |
| 分析化学 | 13 | A33–A45 | [part1](analytical_part1.jsonl) · [part2](analytical_part2.jsonl) |
| 有机化学 | 12 | O31–O42 | [part1](organic_part1.jsonl) · [part2](organic_part2.jsonl) |
| 物理化学 | 12 | P31–P42 | [part1](physical_part1.jsonl) · [part2](physical_part2.jsonl) |
| **总计** | **50** | | **7个JSONL，统一归档** |

## 审校约束

所有题目都在 JSONL 中保存：独立文字题设、每题的分析步骤、公式求出的数值答案、理想化条件与机器残差。本辑额外通过 `scripts/check-advanced-authored-v6.mjs` 在**重新读取已提交数据**后逐题进行对应模型的独立复算，检查编号、科目、计数、质量标识。源代码和题目都在 GitHub Actions 中复算。

**重要：本辑有50条新编题目，但尚未确认其中50条均是与前五辑互不重复的模型。** 其中部分题目沿用了旧辑已出现的核心平衡与动力学类型。为避免将参数改写误算作原创新模型，全部记录均设置 `novelty_review_status=pending_cross_series_model_review`，`parametric_variant=null`（未知，不能提前断言false）。因此，**第六辑不能直接宣称为50种全新高难度模型**。后续需要逐题检查并替换实质性重复。

所有条目还保持 `quality_status=awaiting_expert_review`、`publishable=false`、`exclude_from_official_bank=true`，化学专家批准为0，正式发布库保持空。

本辑实际完成了50个**有解答的新记录**，但它们属于**待跨辑去重与科学专家双重审校的草稿**。严格性声明仅限题设模型内部可重算的数值与等式，并不自动证明真实化学可行性。
