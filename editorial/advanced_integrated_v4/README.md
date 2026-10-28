# 大学化学高阶综合题库 · 第四辑：50 道原创综合题

本轮新增的是 **50 道新的化学模型习题**（不包含前面已经保存的 36 道），四科分布如下：

| 学科 | 新增题数 | 编号 | 独立结构化文件 |
|---|---:|---|---|
| 无机化学 | 13 | I07—I19 | [part1](inorganic_part1.jsonl)、[part2](inorganic_part2.jsonl) |
| 分析化学 | 13 | A07—A19 | [part1](analytical_part1.jsonl)、[part2](analytical_part2.jsonl) |
| 有机化学 | 12 | O07—O18 | [part1](organic_part1.jsonl)、[part2](organic_part2.jsonl) |
| 物理化学 | 12 | P07—P18 | [part1](physical_part1.jsonl)、[part2](physical_part2.jsonl) |
| **合计** | **50** | | **8 个 JSONL 文件，不逐题建文件** |

[**直接阅读全部50道题目与分步严格解答**](50_advanced_chemistry_solutions.md)。

## 格式、审校、适用范围

每题结构化记录提供独立题目情境、7步或更多分步解答（包含逆向方程核验）、最终数值答案、理想化科学假设与数学残差。题目覆盖化学平衡、缺陷化学、氧化还原、电极动力学、分析反演、非线性配位、动力学、光化学、缩聚、统计热力学、反应-扩散等不同知识模型。**本轮没有通过变动数值参数批量复制同一母题。**

两个强制机器检查：

```sh
node scripts/check-advanced-authored-v4.mjs
node scripts/audit-advanced-only.mjs
```

第一个脚本重新读取 **8 个已提交 JSONL**，核对50个唯一编号及标题、每题的多步解答、独立数值计算验证与未审标识；第二个检查清理后题库的完整性、防止简单题及旧自动采集代码回流。更改题意、参数、公式、答案应同时更新 JSONL、Markdown 和这两组复核。

这里的「严格解答」指题设指定数学化学模型中的分步演绎和方程核查，并**不意味着真实学科专家已完成化学合理性审定**。有些题目采用明示理想化或假想物种，必须把其适用边界与实际实验事实分开。全部保留 `publishable=false`、`quality_status=awaiting_expert_review`、`exclude_from_official_bank=true`。目前专家签核：0。

清理前约97,628条低中阶或来源待审候选仍仅在 `archive/pre-advanced-only-cleanup-2026-10-28` 分支。新题没有混入该旧主候选目录。
