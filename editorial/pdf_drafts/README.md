# 大学化学综合题 · 自动编译 PDF（草稿区）

**本目录由 GitHub Actions 自动从结构化 JSONL 生成，不应人工编辑编译出来的 PDF 或 TeX。**

- 按辑输出：`chemistry_advanced_v2_draft.pdf`、`chemistry_advanced_v3_draft.pdf`、依此类推。新的第7、8辑及以后会在扫描到对应 `editorial/advanced_integrated_vN/*.jsonl` 后自动新增。
- 跨辑输出：`chemistry_advanced_v2_onwards_draft.pdf`，集中收录第2辑至最新辑。
- 全库输出：`chemistry_all_v1_to_vN_draft.pdf`，合并原第1辑已审校标识 PDF 和后续所有JSONL记录。
- TeX源文件：在 [tex](tex) 子目录，使用 `XeLaTeX`、`ctexart` 与 Noto CJK 字体编译。
- **质量状态**：全部为 `draft`（审校草稿），不等于专家已批准。第六辑还需要跨辑重复模型审查。

## 自动更新

每次向主分支提交 `editorial/advanced_integrated_vN/` 中的新增或更改，工作流 [Rebuild chemistry draft PDFs from JSONL](../../.github/workflows/chemistry-pdf-drafts.yml) 会重新生成 PDF 与 TeX，并将结果上传为 GitHub Actions Artifact；如果仓库允许工作流推送提交，也会更新这里的稳定文件。

如只需重新编译、不修改题目，可在仓库 **Actions → Rebuild chemistry draft PDFs from JSONL → Run workflow** 手动运行。

本地可以先使用：

```bash
python3 scripts/build-chemistry-pdf.py --series all
```

此命令只生成 TeX 源码；实际 PDF 仍须 XeLaTeX 进行两轮编译以完成目录和交叉引用。

## 编辑原则

1. **只改结构化源记录**，自动构建会覆盖这里的输出。
2. 完整的题目和严格解答必须在 JSONL 中保存，不依赖手动拼接 Markdown。
3. 审校稿 PDF 必须带待审核提示；未知跨辑去重状态不能被自动改为审核通过。
4. 如发现公式显示质量不够好，应在数据里规范独立的 LaTeX 数学标记，再重新编译；不要只修 PDF。
