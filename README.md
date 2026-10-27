# 三千弱水 · 大学四大化学题库

独立构建面向本科化学专业的**无机化学、分析化学、物理化学、有机化学**题库、严格解答与 LaTeX 出版资源，并向三千弱水统一组卷平台提供版本化题目清单。

**当前状态：仓库初始化中；尚无已通过化学专家审核并发布的正式题库。**

## 当前候选内容快照（2026-10-27）

- 已验证 GitHub `main` 上共有 **1390** 份候选内容：无机 849、分析 33、物理 53、有机 455。
- 其中 **1112** 份练习候选、**278** 份学习卡；不是 1390 道独立可出卷考试真题。
- 全部 `awaiting_expert_review`、`publishable=false`；专家正式批准 **0** 道。
- 机器审计发现完全同题干 0 组、相同题型模板 36 组；并不表示跨语言或语义重复已解决。
- [本轮新增 EIS 原创习题和 Apache-2.0 来源审计](harvest/run_logs/2026-10-27-pyeis-original-eis.md)。
- [当前自动生成的实时审计数据](harvest/quality_audit.json)优先于本段日期快照；来源发现每 10 分钟采用 `4,14,24,34,44,54 * * * *`，严格入库每 30 分钟采用 `17,47 * * * *`，可能受 GitHub 调度延迟影响。

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
- [OpenStax 授权冲突与撤回记录](harvest/run_logs/2026-10-27-openstax-quality-audit.md)：官方当前标注 CC BY-NC-SA，原先 8 道改编题已从 main 撤回，未经额外核权禁止重新导入。
- 题库包含两种**不同资源类型**：命名反应/试剂「学习卡」和需要独立推理/计算的「习题候选」。两者均不能简单等同于考试真题。
- **强制出版保护**：尚未完成专家审核者必须明确标记 \`publishable=false\`；不允许仅凭许可证或自动计算结果自动发布。

## ChemTrain Daily 批量合规导入（2026-10-27）

- 固定 CC BY 4.0 原作者内容许可证与源 HTML Git Blob，仅转换无需分子结构图的文字 MCQ：**无机 227、有机 41，共 268**。
- 原始 2892 道不直接照单全收；排除第三方 pKa/Mayr 测量值、结构 SVG、所有依赖图示的题目。
- [可重复执行导入器](scripts/import-chemtrain-daily-text.mjs)、[回归测试](tests/chemtrain-daily-text.test.mjs)、[审计日志](harvest/run_logs/2026-10-27-chemtrain-daily-import.md)。
- `awaiting_expert_review` + `publishable=false`；结构构型题特别标记复审，不等于 268 道官方独立考试原题。

## NVIDIA 开放化学问答研究待审区（2026-10-27）

- [Nemotron-Science-v1](https://huggingface.co/datasets/nvidia/Nemotron-Science-v1) 的化学 RQA 分区共有 **52,179** 条模型生成问答，NVIDIA 原始内容声明 CC BY 4.0。
- [固定数据来源、许可证和容量限制](harvest/pinned_nvidia_science_rqa.json)；[可重复运行的采集器](scripts/stage-nvidia-rqa.mjs)。
- 每 **5 分钟** 的独立自动流程按页最多读取 **1,600 条**，只储存在 `data/research_quarantine/nvidia-rqa/` 的 JSONL（新批次为 `.jsonl.gz` 压缩）文件内，**最高 12,000 条后停止进一步暂存**。运行可能受 GitHub 排队、网络、API 服务影响而延迟。
- 这些是 **AI 生成、尚未独立验证答案的研究问答**，不能与 `data/candidates/` 的本科题库候选混为一谈。所有记录具有 `publishable=false`、`exclude_from_official_bank=true` 标记。
- [来源、抽取质量与错误记录](harvest/run_logs/2026-10-27-nvidia-research-rqa-intake.md)。
- [六项 GALILEO 官方 CC BY 4.0 化学 OER 作品级许可预审（本轮题目新增 0）](harvest/run_logs/2026-10-27-uga-oer-rights-review.md)。实际最新数量以 `harvest/nvidia_rqa_state.json` 为准；任何核准进入本科题库的转移都必须另外验算、分类、去重并记录专家审核。

