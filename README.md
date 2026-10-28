# 三千弱水 · 大学化学高阶综合题库

本仓库仅保留与既有高阶综合题同等级的原创专题。**高阶难度不代表专家已审定。**

## 当前保留的题目

- **第一辑 12 道**：四科各 3 道，完整 [TeX](editorial/advanced_integrated_v1/original_advanced_integrated_12.tex)、[PDF](editorial/advanced_integrated_v1/original_advanced_integrated_12.pdf) 与 12 条 [机器可读候选](data/candidates/)。
- **第二辑 12 道**：四科各 3 道，完整 [中文解答](editorial/advanced_integrated_v2/advanced_authored_set01.md) 和 [JSONL](editorial/advanced_integrated_v2/advanced_authored_set01.jsonl)。
- **第三辑 12 道**：四科各 3 道，[完整中文题目及解答](editorial/advanced_integrated_v3/advanced_authored_set02.md)，[按学科归档](editorial/advanced_integrated_v3/)。
- **第四辑 50 道**：[50 道完整中文题目与分步解答](editorial/advanced_integrated_v4/50_advanced_chemistry_solutions.md)，[四科集中存储及审核说明](editorial/advanced_integrated_v4/README.md)，无机13、分析13、有机12、物化12。
- **合计 86 道高阶原创审校题**，化学专家审核通过 **0**，正式可出卷 **0**。

## 清理政策

此前约 **97,628** 条主候选记录包含大量低难度参数变式、选择题、学习卡与未经逐题评定的外部题。主分支仅保留第一辑的12个高阶候选；原有200道机械方法组合训练题不再保留。研究问答/教材原题副本、旧批量采集与生成流程退出主分支，避免文件散乱和低难题自动回流。

清理前完整快照保存在 [archive/pre-advanced-only-cleanup-2026-10-28](https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/tree/archive/pre-advanced-only-cleanup-2026-10-28)。历史资料供必要时人工复查，不自动视为高难度合格题。

## 校验与发布

```sh
node --test tests/advanced-integrated-12.test.mjs
node scripts/check-advanced-authored-chemistry.mjs
node scripts/check-advanced-authored-v3.mjs
node scripts/check-advanced-authored-v4.mjs
node scripts/audit-advanced-only.mjs
```

当前仅允许逐题独立建模、完整推导、约束条件与逆向验算的难题进入活动库。仍需人工化学科学性、实验模型、难度、版权与解答复核。所有题目 `publishable=false`；[正式发布索引](release/chemistry-approved-manifest.json) 为空。
