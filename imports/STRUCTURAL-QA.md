# 结构语义复核 · 第二阶段（2026-10-26）

**不能把 SMILES 字符串相等解释为化学上完全相同，更不能对不同晶型、溶液形态或同分异构体自动删除记录。**

## 已确认的原始字段冲突

- `CQ-INORGANIC-0069`（graphite）、`CQ-INORGANIC-0070`（diamond）和 `CQ-ORGANIC-0049`（methane）均有 `smiles = "C"`；RDKit 对 `C` 的解析是 **CH4（甲烷）**，并非石墨或金刚石晶体。此组禁止按 SMILES 合并。
- `CQ-ORGANIC-0107`、`CQ-ORGANIC-0108`、`CQ-ORGANIC-0109` 分别对应三个不同名称的二糖，但上游给出同一个含手性标记的 SMILES；它们不是可无条件合并的化学同义名，应回原始文献分别核对结构。
- `ammonia` 与 `azane`、`silver(I) chloride` 与 `silver chloride` 的匹配属于**名称/索引层面待处理**，避免把可教学的命名变体作为非法重复。

程序 `npm run audit:structure` 按现有导入数据的**原始 SMILES 相等**找到 4 个冲突/别名组，2 个组共 6 条列为重点待审。此规则并未执行真正的 RDKit 规范化，不能发现不同 SMILES 编码的同构分子；后续通过 Python RDKit 检查并出具独立报告。

## ChemIQ 的答案字段特殊性

上游 ChemIQ 的 **200** 道 `smiles_to_iupac` 任务题要求回答化合物的英文 IUPAC 名称，但 `answer` 字段实际存放 **SMILES**，用于通过 OPSIN 将被测模型给出的英文名称转换成结构后评分。若制作中文题库，不能把这一字段直接展示为“IUPAC 名称标准答案”，必须经结构→命名的独立参考标准和人工化学审核。

## 原始文件与可回退性

所有冲突均只增加审核阻断清单 `review-holds.json`，不改动 upstream 原文/答案、不删除唯一名称、不变更数值题数据。审查人必须区分：**错误结构标记**、**等价别名**、**结构同一但问法不同**、**不同晶型/同分异构体**。

目前 `published_count = 0`。上述报告不构成科学正确性、翻译或版权完全审定。
