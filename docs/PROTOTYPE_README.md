# 三千弱水 · 四大化学题库原型 v0.1

> 状态：独立学科仓库尚未建立。本目录只是放在既有数学组卷仓库的**隔离原型**，不接入生产 API、不迁移 D1、不自动发布题目；待单独创建化学仓库后迁移。不得把 PR 合并、文件存在或计算测试通过解读为化学专家审稿通过。

## 范围与准则

四个学科统一编码：inorganic（无机）、analytical（分析）、physical（物理）、organic（有机）。每题由独立的 `problem.tex`、`solution.tex` 和 `metadata.json` 构成，支持日后接入统一组卷引擎。化学式按 `mhchem` 宏包的 `\ce{}` 格式书写；独立编译时应由主模板加载 ctex、amsmath、mhchem，题目子文件不自行声明 documentclass。

**禁止未经许可搬运原题、插图、教材解答**。外部资料先登记来源、内容范围、适用许可证、出版和 AI 使用限制，只做元数据索引；四道种子题为本项目新撰写的教学演示题。公开 GitHub 源码中的答案是公开可见的，不应作为保密考试题。

## 目录

- `questions/CHEM-INORG-0001/`：八面体 Fe(II) d6 晶体场；
- `questions/CHEM-ANAL-0001/`：EDTA 条件形成常数与物料守恒；
- `questions/CHEM-PHYS-0001/`：NO2/N2O4 热力学平衡；
- `questions/CHEM-ORG-0001/`：SN2 与 CIP 构型翻转；
- `question.schema.json`：标准元数据约束（JSON Schema）；
- `taxonomy.json`：四科章节目录初版；
- `validate.mjs`：不依赖外部包的最小源文件安全与元数据检查；
- `SOURCES.md`：公开项目核验与内容许可决策。

## 运行

```bash
node prototypes/chemistry/validate.mjs
npm test
```

检查器只保证元数据、目录、部分 TeX 安全静态条件；不能证明化学正确、排版通过或版权合规。题目默认为 `draft` / `pending`，未具备发布资格。

## 集成路线

1. 建独立 `ruoshui-chemistry-bank` GitHub 仓库，迁入本目录并保留提交溯源；
2. 题库构建器导出增量 JSON 清单（ID、原始文件 SHA-256、许可、审核状态、学科、知识点）；由统一平台只读同步；
3. D1 存储审核后的检索字段，R2 存题图与已编译制品，GitHub 维护独立 TeX 源文件；
4. 用 ChemPy 校验可形式化的化学/数值问题，用 RDKit 校验分子结构与 CIP，不能把任何工具的通过当作实验产物真实性；
5. 双人专业质检、版权门禁、XeLaTeX 编译及逐页验收后才可发布；
6. Cloudflare Workers 只处理轻量搜索与组卷，正式 XeLaTeX 经离线任务完成。

与现有 `src/worker.js` 的 `analysis/calculus/linear/probability` 校验逻辑**尚未联通**，不可将这四道示例当作现有组卷系统已支持的题目。
