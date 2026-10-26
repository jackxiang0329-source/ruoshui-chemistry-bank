# 新增化学题库来源 · 实际拉取与质量记录

日期：2026-10-26

## 完成的拉取

| 来源 | 原始记录 | 去重删除 | 唯一候选 | 开源声明 |
|---|---:|---:|---:|---|
| [Kankoor chemistry](https://github.com/Taikutsu-Lyrz/Afghanistan-kankoor-exam-dataset) | 915 | 855 | 60 | ODC-By 1.0（需要署名） |
| [Organic Chemistry Quiz JS](https://github.com/MuzaPro/Organic-Chemistry-Quiz-JS) | 50 | 28 | 22 | MIT（原作者版权声明保留） |
| **本轮合计** | **965** | **883** | **82** | **全部隔离，未公开发布** |

Kankoor 全部 915 条原文和答案/选项保存在 `third_party/kankoor/`。逐条检查了四选一标准答案的索引一致性；规范化题干+选项只剩 60 道，855 条重复的答案一致。

MuzaPro 的 8 份原始题集、原版 JavaScript 逻辑、HTML/CSS 和 MIT 许可证保留在 `third_party/Organic-Chemistry-Quiz-JS/`。其中题目去重使用 `questionText+product.name+reactionType`：50 条→22 条。**有 4 个重复组的 `correctReagents` 不同**，具体版本保存在 `imports/organic-reactions/answer-conflicts.json`，不得使用这些记录自动评分或生成正式题卷。部分原始文件自称 “need-work” 或 “incorrect”，因此尚需逐条化学专家审核。

## 范围限制

- Kankoor 题目为达里语**大学入学考试**，不是国内本科无机/分析/物化/有机课程期末试题。
- MuzaPro 题目是英文基础反应与试剂选择交互练习，不是经过实验核验的复杂合成题库。
- ODC-By 许可和 MIT 仓库许可**不自动证明第三方考试题、书中插图、音视频具有完全可再授权**；上游声明与来源数据只按固定版本保留在隔离区。
- MuzaPro 部分交互图片/音频文件未复制，不能声称完整可运行 UI；独立原项目可用固定 SHA clone 获取全部文件。
- 不能将原始 HTML 形式的 `chemistryNotes` 不经 HTML 安全处理插入 Web 页面。
- 旧有的 ChemIQ/chemquiz 1,087 条候选仍在另一条 Draft PR #1 分支。**本轮 82 条是单独来源内去重后的候选，不意味着跨仓库整体语义去重已完成**。
- 856 题的 [synapse-questions](https://github.com/dhrubo326/synapse-questions) 明确是禁止转载的专有内容，未拉取。

## 程序化复验

```bash
node scripts/audit-additional-chemistry-imports.mjs
```

审计会检查原始 Git Blob 内容指纹、原始题量、派生去重数量、Kankoor 选项答案一致性、MuzaPro 试剂答案冲突数量、全部候选是否保持 `publication_allowed:false`。该审计不对化学事实、版权或中文翻译的正确性做保证。

**当前正式发布数量：0。**
