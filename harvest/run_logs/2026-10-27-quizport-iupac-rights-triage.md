# 大学化学开源题源逐文件核权与学科筛选（2026-10-27）

## 基线（直接读取 main 分支机器审计）

- 本次检查时 `harvest/quality_audit.json`：候选 **1558**，无机 **849**、有机 **455**、分析 **129**、物理 **125**；其中习题候选 **1280**、学习卡 **278**。
- `publishable=false` **1558**，专家批准可发布 **0**；完全相同题干 **0** 组、同数值模板 **50** 家族。仅为机器审计，跨语言语义去重与化学专家审查仍待完成。
- 已核查 `harvest/import_reports/original_analytical_variants.json`、`harvest/import_reports/original_physical_variants.json` 及上一轮日志：此前新增的 96 道分析与 72 道物化均为参数化原创练习，本轮 **不得重复计数**。
- 本轮新导入题目 **0**；重复导入 **0**；新批准上游题文 **0**；没有修改 `harvest/approved_imports.json` 或 `data/candidates`。

## 具体来源与许可证据（均未复制题文或数据）

| 来源 | 固定上游 SHA | 许可证与内容范围 | 本科质量 / 答案判断 | 处理 |
|---|---|---|---|---|
| [QuizPort Library](https://github.com/kelleyblackmore/quizport-library) | `7f0d0738310d50a9b8eb22bde5482007b60aaa52` | 根目录 MIT；[README](https://github.com/kelleyblackmore/quizport-library/blob/7f0d0738310d50a9b8eb22bde5482007b60aaa52/README.md) **明确允许使用 quizzes**；题文件 blob `13fc0df476013de6c010c3434f58030cd5cdceaf` | 化学基础 JSON **10 道**，均有答案与解释；但仅涉及 Au、Na、H₂O、原子序数等入门知识，标注 Easy，不符合本科四大化学优先标准。个别解释过度简化，需化学复核 | **因学段/质量不匹配而不导入**，不是许可拒绝 |
| [IUPAC Dissociation-Constants](https://github.com/IUPAC/Dissociation-Constants) | `a1e958d264edf35ddf548ed594684d60a73b8f08` | [README](https://github.com/IUPAC/Dissociation-Constants/blob/a1e958d264edf35ddf548ed594684d60a73b8f08/README.md) 明确 **CC BY-NC 4.0**，须署名 IUPAC，数据来源于数字化参考书 | pKa 参考数据集而非有答案的大学习题；非商业条款与后续开放再分发方式须单独核对 | **不复制数据或教材正文**；只保留线索 |
| [Physical-Chemistry-with-Python-Book](https://github.com/xavierprat/Physical-Chemistry-with-Python-Book) | `1b48c2dc0f2ed9deb090f50b4f9355f9e6de8048` | 已检查完整 Git 树，**未发现根目录 LICENSE**；静态资源自带第三方 JS 许可证不等于教学内容许可证 | 物理化学 Sphinx 网站；习题及答案的逐文件来源尚未核验 | **待作者许可和题文答案核验，不导入** |
| [ChemQuiz-Pro-](https://github.com/pranav11722/ChemQuiz-Pro-) | `50172e85bd95c1d33db0a2ed699429028a2977dd` | MIT；README 只明确代码复用 | 仅 3 道示例且偏化工；此前 [来源筛查](2026-10-27-source-rights-triage-followup.md) 已处理 | **重复核查，未重复导入** |

## 本轮实际仓库改动

- 新增机器可读的 `harvest/source_reviews/2026-10-27-chemistry-quiz-and-data-rights.json`，固定上游 commit、关键 blob、题文许可范围、学科层级、答案状态、禁止导入结论；该文件 **不是** 自动导入白名单。
- 本日志记录来源、许可证、筛选、增量与未完成事项；没有增加任何新候选，也没有放宽 `publishable=false`。
- 最近成功的完整采集 CI：[GitHub Actions #40469877330](https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40469877330)，属于先前 72 道物化变式的工作流，**不是本次文档改动的新测试**。

## 未完成事项与错误

1. **本轮没有找到同时满足本科适用、明确题文可再分发、可靠答案、非重复四项要求的新外部习题。** 不把“找到 MIT 项目”或“发现 CC BY-NC 数据集”算作新增题目。
2. QuizPort 的基础题难度偏低；IUPAC 数据含 NC 限制；Physical-Chemistry-with-Python-Book 未核实作品级许可；ChemQuiz-Pro- 已审查。以上均是 **筛选限制**，不是下载失败。
3. 需优先核验 CC0/CC BY 的本科分析化学、物理化学原始题文与答案，记录附件 SHA、作者署名和第三方例外；继续复核 50 个数值模板家族及跨语言相似题。
4. 本轮 GitHub 读取与写入没有遇到 API 错误；**未运行新的 CI**，不把文档提交成功当作自动化测试通过。

**本轮结果：题库新增 0、重复导入 0、来源审核记录新增 1 份、可再分发且符合本科要求的新题文批准 0。**
