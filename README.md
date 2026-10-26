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

## 可运行的开源题库练习适配器（待审预览）

已基于原版 chemquiz 化合物目录建立独立 JavaScript 出题/判分模块（不修改原版 Rust 源码）。原始 301 个顶层条目去重 28、隔离 6 条结构风险后，余 **267 条待审核练习候选**。目前只支持无机/有机英文名称与化学式识别；分析和物理化学待原创计算题模块，不能伪称已经完成。

```bash
npm run audit:vendor
npm test
npm run practice:preview -- --discipline=organic --count=10 --seed=20261026
```

运行结果生成在被 Git 忽略的 `.tmp/chemistry-practice/`，学生卷与教师答案卷分别保存。**未通过专业化学审核，不得自动发布至网站或作为正式考试。**

详见 [练习适配器与三千弱水接口说明](docs/CHEMISTRY_PRACTICE_INTEGRATION.md)。

## 四大学科统一组卷（V0.3 未审预览）

目前无机/有机可生成化学名称与分子式选择题，分析/物理化学新增三类原创参数化计算题，共六类。全科统一使用 `buildUnifiedPaper` 接口，学生题干与私有教师答案分别生成；尚未接入生产网站和正式已审题库。

```bash
npm run paper:unified -- --track=analytical --count=12 --seed=20261026
npm run paper:unified -- --track=physical --count=12 --seed=20261026
```

详细公式、假设、判分与四科统一接口见 [FOUR_TRACKS.md](docs/FOUR_TRACKS.md)。待专家审核与完整 CI 验收后才能进入正式组卷。
