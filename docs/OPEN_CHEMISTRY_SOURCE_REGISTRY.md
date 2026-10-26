# 四大化学开源资源整合总账（2026-10-26）

当前仓库维护三类相互独立的内容：

1. `third_party/`：第三方开源程序的原始镜像或 Git 子模块引用；
2. `imports/`：真实导入并去重的外部题目、溯源、冲突与隔离状态（多数尚在 Draft PR，不在 main）；
3. `questions/`：本项目原创或人工审定的中文独立 LaTeX 题目（当前正式发布 0 道）。

## 实际接入情况

- **主分支已提交**：chemquiz 99 个源文件、ChemIQ 9 个核心文件；不代表其题目已经合并。
- **Draft PR #1**：ChemIQ 814 条与 chemquiz 273 条；源内去重后 1087 条，未专业审稿。
- **Draft PR #6**：Kankoor 60 条与有机反应 22 条；源内去重后 82 条，四组答案冲突阻断。
- **Draft PR #8**：十一个上游固定 SHA GitLink，包括 ChemTrain Daily+7 子项目、ChemLit-QA、chemie-eroberung、GPQA（保持盲测）。这是完整源码的**可复现引用**，不是已经下载至主仓库普通文件，也不能直接统计为本项目新的正式试题。
- **Draft PR #5**：四科统一组卷逻辑及原创分析/物理计算题生成器，非外部来源实际题量。

注意：旧两批的 1087+82=**1169 条**只是**来源内部去重的隔离候选**，未完成跨项目及跨语言语义去重，不等于正式题库容量。ChemTrain Daily 的约 2900 道是上游自述，需实际抽题核实；子项目高度重叠。ChemLit-QA 1025 是主集，814+211 为其拆分；GPQA 448 道是理工科混合基准，不应当成全部化学题。

## 仍不能直接导入的高价值资源

| 来源 | 原因 |
|---|---|
| ChemQuests（952 QA） | HF 数据 gated，必须登录和接受信息共享条件，未获授权不能自动拉取 |
| Nemotron-Science-v1 RQA（52,179） | CC BY 4.0，但托管完整数据约 2.5 GB；尚未实际下载和逐题化学审核 |
| ChemBench | 实际项目仓库体积约 590 MB、题文许可及评测污染另需核实 |
| WeBWorK OPL | 约 1.1 GB 仓库，题目有个别版权差异及 CC BY-NC-SA 限制 |
| ChemistryQA | 源于 Socratic，数据计算使用许可与题文再发布权不同 |
| 部分化学图片/实测数据 | 上游来源可能包含第三方论文、pKa/Mayr/电位测量值，不能只依靠 MIT 代码许可 |

另有版权明确禁止转载的商业题集不收录。

## 实际拉取 11 个源码 Git 子模块的命令

```bash
git clone https://github.com/jackxiang0329-source/ruoshui-chemistry-bank.git
cd ruoshui-chemistry-bank
git fetch origin feat/import-chemtrain-open-sources-20261026
git switch feat/import-chemtrain-open-sources-20261026
git submodule sync --recursive
git submodule update --init --recursive
node scripts/audit-chemtrain-submodules.mjs
node scripts/audit-extra-submodules.mjs
node scripts/audit-chemtrain-content.mjs
```

**限制**：部分子模块总容量达数十 MB，需本地网络。GitHub Actions 当前有基础设施层失败，不能虚称以上命令已在 CI 全部成功执行。正式发布仍需要版权复核、化学专家审稿、规范去重、独立 TeX 编译、逐页 PDF 质检。
