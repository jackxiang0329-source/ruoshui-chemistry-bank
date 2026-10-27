# 三千弱水 · 大学四大化学题库

独立构建面向本科化学专业的**无机化学、分析化学、物理化学、有机化学**题库、严格解答与 LaTeX 出版资源，并向三千弱水统一组卷平台提供版本化题目清单。

**当前状态：仓库初始化中；尚无已通过化学专家审核并发布的正式题库。**

## 原则

- **独立题目文件**：每道题保留 `problem.tex`、`solution.tex` 和机器可读 `metadata.json`；以后可以增加 `rubric.tex`、化学结构、绘图和实验数据。
- **原创优先，许可先行**：外部仓库与教材仅作为参考索引，禁止直接大批量转存未经逐题核验的题干、图片或解答。
- **双轨质检**：程序验证格式、数值计算、化学计量/电荷和部分有机结构；化学事实、推理与出版质量必须人工复核。
- **LaTeX 排版**：`ctex` + `mhchem` + `amsmath`，正式考试模板以后采用 Elegant 风格；不将高成本 XeLaTeX 编译放到免费 Cloudflare Workers。
- **多仓库接口**：本仓库保存可溯源原始素材，统一平台只读取经过审批、带版本与哈希的发布索引。

## 计划

第一期先建立可验证的四科样例、章节分类、题目 Schema、CI 和 TeX 构建规范。每科样例不等于正式题库；版本发布时另行声明审核与许可状态。

来源审查、样例及工具链将在开发分支提交并通过 PR 审核后进入 `main`。

## 开源题库程序源码（已迁入 main）

- [chemquiz 完整 Rust 组卷和 WASM 项目源码](third_party/chemquiz/)（99 个原始文件，MIT）
- [ChemIQ Python 核心校验、解析源码与 Notebook](third_party/ChemIQ/)（9 个原始文件，BSD-3-Clause）
- [上游版本、版权和复验说明](third_party/README.md)
- [源码逐文件 SHA 核验脚本](scripts/audit-upstream-vendor.mjs)

这些源码与待审外部题目数据不同，尚未作为本项目生产 API 的可运行模块。完整去重数据与题库质检工作保留在 Draft PR #1。


## 机器可读候选题与安全隔离

- [机器可读质量审计](harvest/quality_audit.json)：自动统计四科题量、复习卡与习题数量、许可证来源检查、完全同文题组、数字模板相似题和跨来源疑似重复对。此报告**只给人工复审提供线索，不进行自动语义合并**。
- [开放教材许可审查与导入结果](harvest/run_logs/2026-10-27-openstax-quality-audit.md)：记录八道 OpenStax 题目的各章来源、版权及独立复算。
- [OpenStax 固定题源清单](harvest/pinned_openstax_chemistry2e.json) 与 [生成器](scripts/import-openstax-chemistry2e.mjs)。
- 题库包含两种**不同资源类型**：命名反应/试剂「学习卡」和需要独立推理/计算的「习题候选」。两者均不能简单等同于考试真题。
- **强制出版保护**：尚未完成专家审核者必须明确标记 \`publishable=false\`；不允许仅凭许可证或自动计算结果自动发布。
