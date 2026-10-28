# 大学化学高阶综合题 · 第九辑（100题，四科各25）

**[第九辑100道完整中文题目与逐步解析](100_advanced_chemistry_solutions.md)**

| 学科 | 题号 | 数量 | 结构化源文件 |
|---|---|---:|---|
| 无机化学 | I76–I100 | 25 | [1](inorganic_part1.jsonl) · [2](inorganic_part2.jsonl) · [3a](inorganic_part3a.jsonl) · [3b](inorganic_part3b.jsonl) |
| 分析化学 | A76–A100 | 25 | [1](analytical_part1.jsonl) · [2](analytical_part2.jsonl) · [3](analytical_part3.jsonl) |
| 有机化学 | O73–O97 | 25 | [1](organic_part1.jsonl) · [2a](organic_part2a.jsonl) · [2b](organic_part2b.jsonl) · [3](organic_part3.jsonl) |
| 物理化学 | P73–P97 | 25 | [1](physical_part1.jsonl) · [2](physical_part2.jsonl) · [3](physical_part3.jsonl) |

## 数值质量检查

运行 `node scripts/check-advanced-authored-v9.mjs`，逐题执行100条独立主要数值答案复算，检查物料/能量/仪器模型残差、重复ID与标题、每科25题、基础解答完整度和正式发布隔离标记。此脚本验证的是**题设模型中的数学计算**，并不能证明真实化学机理正确、全部主要结论均通过独立人工复算或专家认证。应按[100题验收政策](../NEXT_BATCH_100_QA_POLICY.md)继续审查。

## 原创性与出版门槛

已替换最初发现的3条跨辑显著相近模型，同时建立[潜在同类核心模型人工对比清单](overlap_review_queue.json)，记录17组待判相似性线索。**不能宣称100题已经通过彻底跨辑核心模型去重。**

全部100条暂存为待审编辑稿：`quality_status=awaiting_expert_review`、`novelty_review_status=pending_cross_series_model_review`、`publishable=false`、`exclude_from_official_bank=true`；正式专家核准0条。

## PDF与TeX

[自动编译流程](../pdf_drafts/README.md)从这些JSONL重新生成 `chemistry_advanced_v9_draft.pdf` 和 `chemistry_all_v1_to_v9_draft.pdf` 以及可编辑TeX。必须以最新构建运行完成与仓库文件提交状态为准，不以源稿存在推断PDF已更新。
