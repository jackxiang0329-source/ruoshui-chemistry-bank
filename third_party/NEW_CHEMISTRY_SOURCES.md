# 2026-10-26 新增两套化学题源版本锁定

本次直接向 PR #8 的来源分支追加两个固定 Git SHA 子模块，不复制上游科学论文片段，也不将任何候选题并入可发布清单。

## 1. stemQ（大学级别）

- 上游：https://github.com/idrori/stemQ
- 固定提交：`52ca513b16b53c9e7a69092862fda707cb387284`
- 总共 671 个受版本控制的上游文件；`data/5.111/` 与 `data/3.091/` 共 50 个 JSON 文件；它们分别对应化学科学原理和固态化学课程。完整 STEM 集合包含其他学科，不得全部当作化学题。
- 仓库发布了 MIT LICENSE（Iddo Drori），但原始课程试题可能属于其他创作者，题目再发布需额外版权核实。
- **质量警告**：抽样 `data/5.111/5.111_Question_01.json` 的题干要求计算入射光频率，示例 Solution 仅为 `7.43 * 10^-19 J`，与问题不符。必须将答案逐题复核。

## 2. RetChemQA（化学科研领域）

- 上游：https://github.com/nakulrampal/RetChemQA
- 固定提交：`9c7b3346c0e5d5f9a2a2c8e2017cb57744cb1fde`
- 7452 个受版本控制的上游文件；重点目录 `dataset/multi-hop`、`dataset/single-hop`、`dataset/synthesis-conditions`，对应科研问答文件及数据附件。
- 仓库声明 MIT 许可证，原始科学论文及由其衍生的问答内容仍需核验许可、答案准确性和可用于公开试卷的权利。

## 使用方式与限制

```sh
git switch feat/import-chemtrain-open-sources-20261026
git submodule sync --recursive
git submodule update --init --recursive
node scripts/audit-new-chemistry-submodules.mjs
```

**不是完整镜像：**新增的是上游仓库的 GitLink 与固定提交清单。完整上游文件需要初始化子模块才能实际下载，本次没有虚报成已复制的普通 Git 文件。本批新增正式题量 0；来源之间尚未完成语义去重，也未通过专业审稿或 CI 认证。
