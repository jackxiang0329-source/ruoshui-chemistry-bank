# 三千弱水 · 大学四大化学题库

无机化学 · 分析化学 · 物理化学 · 有机化学

**工程状态：V0.1 原型。四科各一道原创教学示例，全部保留 draft，不代表正式审核通过。**

## 结构

- questions/CHEM-INORG-0001、CHEM-ANAL-0001、CHEM-PHYS-0001、CHEM-ORG-0001：每题独立 metadata.json、problem.tex、solution.tex
- schemas/question.schema.json：统一题目标准
- taxonomy/taxonomy.json：四学科知识点分层
- docs/SOURCES.md：上游开源资源及版权初审
- scripts/validate.mjs：格式与发布基本检查
- scripts/export-manifest.mjs：只导出已发布试题，草稿排除
- scripts/render-preview.mjs：从独立题目生成 ctex + mhchem + amsmath 可编译 TeX
- .github/workflows/ci.yml：Node 自动测试
- .github/workflows/latex.yml：手动 XeLaTeX 样卷编译

## 运行

需要 Node.js 20+，无外部 npm 依赖。

    npm run check
    npm test
    npm run manifest
    node scripts/render-preview.mjs CHEM-INORG-0001 both > CHEM-INORG-0001.tex

首次运行发布清单预期 published_count 为 0，以防止未审题目进入正式题库。编译 XeLaTeX 需要装好 ctex、mhchem、amsmath 和中文字体。

## 授权与质量

外部开源仓库、教材及练习集不能仅凭公开 GitHub 链接就自动转载。每条题目和图片必须核验独立授权。化学内容必须人工专业审核，自动检查只能辅助验证。

与现有三千弱水数学平台保持独立；后续通过经认证、含 SHA-256 的题目版本清单接入，不直接动数学仓库生产数据库。详见 docs/ARCHITECTURE.md。


## 已去重拉取的开源候选库（2026-10-26）

本仓库另有 `imports/` 隔离导入区，**不等于可立即公开考试组卷的正式题库**：

| 上游 | 原记录 | 删除重复 | 待审候选 |
|---|---:|---:|---:|
| oxpig/ChemIQ（BSD-3-Clause） | 816 | 2 | 814 |
| bem130/chemquiz（MIT） | 301 | 28 | 273 |
| **合计** | **1117** | **30** | **1087** |

ChemIQ 题目保留原英文题干及答案，仅作基准评测隔离候选；chemquiz 从开源化合物目录生成名称→分子式候选，并附四个原始参考数据集。两者都附固定上游 commit、原始行号和许可证文件。外部题目仍须逐条复核来源、科学准确性、中文表述和图表权利。**正式发布题数量仍为 0**，四道原创示例也均为待审草稿。

- [完整去重报告](imports/REPORT.md)
- [来源许可证与排除清单](imports/registry.json)
- [ChemIQ 来源与使用边界](imports/chemiq/README.md)
- [chemquiz 来源与去重说明](imports/chemquiz/README.md)

```bash
npm run audit:imports
npm test
npm run manifest
```

自动去重按题干/化合物键消除精确重复，不宣称检测了不同语言的语义同题、结构异构体与同一化学知识点的多种表达。

## 第二轮结构质检

新增 `npm run audit:structure` 检查上游相同 SMILES 的同义名与不同化学实体风险。已为石墨/金刚石/甲烷、三种二糖错误共用的 SMILES 建立六条阻断记录，详见 [结构质检](imports/STRUCTURAL-QA.md) 与 [人工复核清单](imports/review-holds.json)。它们仍保留于隔离数据而非直接删除。

`ChemIQ` 的 200 道 `smiles_to_iupac` 题，`answer` 是供 OPSIN 评分的 SMILES，不是可直接展示的 IUPAC 化学名称。

## 第三轮：RDKit 深度审计与中文化审核队列

- `python scripts/rdkit_audit.py`：使用 RDKit 输出候选化学式不符、SMILES 规范化后的结构冲突报告；它不会直接删题。
- `npm run review:queue -- --source=chemquiz --discipline=inorganic --limit=25`：生成含来源、风险标签与待翻译字段的中文化审核队列。
- `npm run review:queue -- --source=chemquiz --discipline=organic --limit=25`：有机化学审核队列。
- `npm run review:queue -- --source=chemiq --limit=25`：ChemIQ 基准评测题的隔离审阅视图。

详情：[审题规范](docs/CHEMISTRY_REVIEW.md)。导入数据保持隔离、未经人工审题不得生成公开题库或正式试卷。
