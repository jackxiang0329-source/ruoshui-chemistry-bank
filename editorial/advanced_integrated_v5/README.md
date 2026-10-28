# 高阶大学化学综合题 · 第五辑 50 道

本轮在第四辑50道之后，新增**50道不同题目**：无机13道、分析13道、有机12道、物化12道。原题库中的已保留36道与第四辑50道不被重复计数。

[**直接阅读50道完整中文题目与7步以上的解答**](50_advanced_chemistry_solutions.md)。

## 统一文件结构

| 学科 | 题量 | 编号 | 数据文件 |
|---|---:|---|---|
| 无机化学 | 13 | I20— I32 | [inorganic.jsonl](inorganic.jsonl) |
| 分析化学 | 13 | A20— A32 | [前7道](analytical_part1.jsonl) · [后6道](analytical_part2.jsonl) |
| 有机化学 | 12 | O19— O30 | [前6道](organic_part1.jsonl) · [后6道](organic_part2.jsonl) |
| 物理化学 | 12 | P19— P30 | [前6道](physical_part1.jsonl) · [后6道](physical_part2.jsonl) |

共**7个JSONL**，没有50个逐题零散文件。每道结构化记录包括独立模型标记、题目、详细步骤、带单位答案、模型假设、复核残差和人工审核状态。

## 质量闸门

```bash
node scripts/check-advanced-authored-v5.mjs
node scripts/audit-advanced-only.mjs
```

独立复核脚本逐题读取已保存JSONL、按不同模型重新计算方程和电荷/物料/能量约束，检查50个唯一题号、标题和完整解答，并阻止将机器审校等同专家批准。

题库的当前正式发布数为**0**；所有本辑题目保持 `quality_status=awaiting_expert_review`、`publishable=false`、`exclude_from_official_bank=true`。题内采用明示假想模型、理想活度、准平衡与经验动力学假设，均不得直接推广为现实实验事实。后续修订必须保证JSONL、合辑Markdown及机器检查一致。
