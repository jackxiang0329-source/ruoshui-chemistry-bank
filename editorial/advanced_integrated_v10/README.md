# 第十辑 · 大学化学高阶综合题（进行中）

**目标：100道完整题目及逐步解析，四科各25。当前已提交64道，四科各16道。**

本辑严格遵循[每批100题的验收规程](../NEXT_BATCH_100_QA_POLICY.md)。每次自动续编先查看GitHub最新题号、数据文件及CI状态，继续未满25道的学科；达到25+25+25+25并完成独立检查、跨辑核心模型复核和可编译稿后，才可以宣布本辑100题已完成。

| 学科 | 当前题数 | 本辑已录入题号 | 结构化题源 |
|---|---:|---|---|
| 无机化学 | 16 / 25 | I101–I116 | [inorganic.jsonl](inorganic.jsonl) |
| 分析化学 | 16 / 25 | A101–A116 | [analytical.jsonl](analytical.jsonl) |
| 有机化学 | 16 / 25 | O98–O113 | [organic.jsonl](organic.jsonl) |
| 物理化学 | 16 / 25 | P98–P113 | [physical.jsonl](physical.jsonl) |

## 严格复核与连续补充

1. 每题应当有完整且物理可行的题干、逐步推导、主要数值答案、合理量纲、模型前提与残差。**添加新题时必须同时为该题加入单独独立计算 witness** 到 [v10数值回归脚本](../../scripts/check-advanced-authored-v10.mjs)。脚本要求每题完整答案向量的独立复算，不只检查第一项。执行 `node scripts/check-advanced-authored-v10.mjs`。
2. 四科各自的 JSONL 是本辑唯一源稿。追加时按本辑递增题号，记录何种新数学核心及旧辑检索差异。不得仅替换参数、物种名或换一层题意背景凑数。
3. 机器回算通过、交叉模型去重及科学领域专家审核**属于不同验收层级**。未经审定始终 `publishable=false`、`exclude_from_official_bank=true`、`quality_status=awaiting_expert_review`、`novelty_review_status=pending_cross_series_model_review`、`parametric_variant=null`。
4. 每次追加更新这里的四科计数与全库草稿记录统计，检查GitHub Actions CI。PDF自动编译是待审草稿预览；最终完成后应给出第十辑单独PDF与第一至第十辑合订PDF、可编辑TeX，检查实际构建状态，不能因为有旧文件而声称最新版本成功。
5. 前九辑共有406条编辑记录；v10已新增64条后全库**470条编辑记录，其中第十辑64/100**。后续自动续编应实时修改该数字。跨辑相似模型需专门人工比较，不允许以 `model_family` 标签各异代替实质去重。

**当前第十辑不构成完整的100题验收批次，专家正式批准仍为0。**
