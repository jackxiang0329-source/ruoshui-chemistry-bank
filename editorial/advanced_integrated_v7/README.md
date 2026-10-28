# 大学化学高阶综合题 · 第七辑（60道）

本辑正式改为 **四大化学各15道，总共60道新题目与分步解答**，按学科集中在12个JSONL文件中。

[**阅读60道完整中文题目与8步以上解答**](60_advanced_chemistry_solutions.md)

| 学科 | 题号 | 题数 | 存档 |
|---|---|---:|---|
| 无机化学 | I46–I60 | 15 | [1](inorganic_part1.jsonl) · [2](inorganic_part2.jsonl) · [3](inorganic_part3.jsonl) |
| 分析化学 | A46–A60 | 15 | [1](analytical_part1.jsonl) · [2](analytical_part2.jsonl) · [3](analytical_part3.jsonl) |
| 有机化学 | O43–O57 | 15 | [1](organic_part1.jsonl) · [2](organic_part2.jsonl) · [3](organic_part3.jsonl) |
| 物理化学 | P43–P57 | 15 | [1](physical_part1.jsonl) · [2](physical_part2.jsonl) · [3](physical_part3.jsonl) |

## 验证机制

```bash
node scripts/check-advanced-authored-v7.mjs
node scripts/audit-advanced-only.mjs
```

60个问题的唯一编号、数量、学科分布、完整推导步骤和数值模型已进入独立重算的CI。计算验证覆盖每题首项主答案的独立公式，以及题目中附带的守恒/平衡数值残差；**这不等于现实化学机理、难度、跨辑原创性或专业科学性的人工认可**。

为防止多辑同核心模型仅换参数，已建立[跨辑模型潜在重叠复核队列](overlap_review_queue.json)。队列中的配对是待审线索，不是已确认的抄袭或重复，但**不能称本辑60道全部通过模型层去重**。

全部题目维持 `publishable=false`、`exclude_from_official_bank=true`、`quality_status=awaiting_expert_review`、`novelty_review_status=pending_cross_series_model_review`、`parametric_variant=null`（未知而非假定没有变式）。正式批准数0。

## PDF自动编译

本辑JSONL入库后，[PDF自动编译](../pdf_drafts/README.md)工作流会生成 `chemistry_advanced_v7_draft.pdf` 和总合集，并保存可编辑TeX源稿。PDF仍为**待审校草稿**，其存在不代表出版合格。
