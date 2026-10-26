# ChemTrain 系列源码与题库镜像 — 2026-10-26

已核验并锁定 **8 个 ChemTrain GitHub 项目**，见 [SOURCE_LOCK.json](SOURCE_LOCK.json)。源码按 **MIT**、题干/解析/结构图等内容按 **CC BY 4.0** 分开授权；每个项目的 `LICENSE`、`LICENSE-CONTENT.md`、`README.md`、`CITATION.cff` 已镜像。

## 已实际导入到此 PR 的内容

| 项目 | 已实际复制的程序/原始数据 | 已提取结构化题目或学习记录 |
|---|---|---:|
| pka-learn | 完整独立 HTML | 253 |
| reactivity-learn | 完整独立 HTML | 301（240 卡片、61 情景题） |
| photoredox-learn | 完整独立 HTML | 197（143 卡片、54 问题） |
| radical-learn | 完整独立 HTML | 50（41 自由基问题、9 区域选择题） |
| tmc-learn | 主要 Python 生成器、数据和模板，**不含 1.24 MB 生成 HTML** | 尚未提取；上游描述 199 个配合物 |
| reaction-learn | 已复制许可和引用资料，**3.5 MB 单文件 HTML 未镜像** | 尚未导入；上游描述 278 张卡片 |
| pg-learn | 已复制许可和引用资料，**3.48 MB 单文件 HTML 未镜像** | 尚未导入；上游描述 44 个保护基 |
| chemtrain-daily | 已复制许可和引用资料，**9.69 MB 单文件 HTML 未镜像** | 尚未导入；上游称约 2,900 道衍生练习 |

**本轮经内嵌原始 JSON 严格核对，确实已结构化导入的为 801 条，不是 2,900+801 道。** 每份导入数据位于 [imports/chemtrain](../../imports/chemtrain)，与原 HTML 分开保存，并保留来源、章节、结构引用、原作者、许可及 `publication_allowed:false`。完整 HTML 内的绘图以索引和内嵌 SVG 关联，JSONL 的 `original.mol` 需要原始 HTML 才能正确渲染，不得假定字符串就是可出版结构图。

## 固定版本全量拉取（需要可访问 GitHub 的环境）

```bash
python3 scripts/pull-chemtrain.py --destination .tmp/chemtrain-full
```

上述默认把全部八个上游项目 clone 到被忽略的临时目录，不覆盖 `third_party`。运行成功后可以选择 `--complete-vendor` 把锁定提交中的缺失文件补入 `third_party/ChemTrain/`，完整性检验会验证 SHA；**请在独立 PR 中审核大文件体积与 Git 历史后再合并**。用户可以复用相同命令在 Windows 的 Python 环境中运行。

```bash
node scripts/audit-chemtrain.mjs
```

## 版权与质量边界

- CC BY 4.0 要求署名、许可证链接、修改说明；衍生题来自子项目时要同时标注 ChemTrain Daily 和原子项目作者。
- 上游许可证明确指出 pKa 实测值、Mayr N/E、光氧化还原电势等第三方实验数据不在其内容许可覆盖范围；后续出版需补全原始论文和数据来源。
- ChemTrain Daily 中的部分练习基于子项目自动重组，**与子项目内容不能简单加总**。跨库去重需考虑题干、化学结构、溶剂、反应条件、温度和单位。
- 四个 HTML 的源数据导出仅是结构完整性检查，**不是**对化学事实、复杂机理、中文翻译或版权问题的专家终审。
- `third_party/ChemTrain/` 的源码与 `imports/chemtrain/` 的隔离候选均不会自动进入正式组卷发布索引。
