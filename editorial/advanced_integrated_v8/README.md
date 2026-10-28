# 大学化学高阶综合题 · 第八辑（60道，四科各15）

**完整正文**：[60道中文题目及分步解答](60_advanced_chemistry_solutions.md)

| 学科 | 题目编号 | 题数 | 数据文件 |
|---|---|---:|---|
| 无机化学 | UC-ADV8-I61–I75 | 15 | [1](inorganic_part1.jsonl) · [2](inorganic_part2.jsonl) · [3](inorganic_part3.jsonl) |
| 分析化学 | UC-ADV8-A61–A75 | 15 | [1](analytical_part1.jsonl) · [2](analytical_part2.jsonl) · [3](analytical_part3.jsonl) |
| 有机化学 | UC-ADV8-O58–O72 | 15 | [1](organic_part1.jsonl) · [2](organic_part2.jsonl) · [3](organic_part3.jsonl) |
| 物理化学 | UC-ADV8-P58–P72 | 15 | [1](physical_part1.jsonl) · [2](physical_part2.jsonl) · [3](physical_part3.jsonl) |
| **总计** | | **60** | **12个集中JSONL** |

## 严格的审核限制

[独立数值检查脚本](../../scripts/check-advanced-authored-v8.mjs) 对60条记录做唯一性、15/15/15/15数量与首项答案重新计算，且检查每条分步解答、模型约束残差及出版状态。这种计算检验**不能替代科学专家审稿**。

**重要：本辑还有 [45组经实际题号核验的潜在跨辑核心模型重叠](overlap_review_queue.json)**。这不等于确认45道重复，但其中一些属于明显相关的配位、酸碱或动力学模型，需要逐题改题或加入真正的新约束。故本辑严格计为**60条新增编辑题目记录，不计为60种经去重验证的原创独立模型**。

所有记录维持：
- `novelty_review_status=pending_cross_series_model_review`
- `parametric_variant=null`（未知，不可谎称false）
- `quality_status=awaiting_expert_review`
- `publishable=false`、`exclude_from_official_bank=true`

正式核准、正式出卷项均保持0。

## PDF/TeX自动汇编

GitHub Actions 的 [化学草稿 PDF 编译](../pdf_drafts/README.md) 会读取所有 `editorial/advanced_integrated_vN/*.jsonl`，生成 `chemistry_advanced_v8_draft.pdf`、`chemistry_all_v1_to_v8_draft.pdf` 和对应可编辑TeX源码。保留待审稿醒目声明，不因此自动批准。
