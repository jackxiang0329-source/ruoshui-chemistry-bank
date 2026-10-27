# ChemTrain Daily 文字选择题导入与许可证审核｜2026-10-27

## 版权与版本
- ChemTrain Daily（Quentin Bindschaedler），部分原始内容出自 TMC Learn（Francesco Sala）及 PG Learn（Quentin Bindschaedler）。来源：https://github.com/ChemTrain/chemtrain-daily
- 源 Git SHA：`327eb915764dbcdf7bce4974a0542f3b3d626554`。
- `chemtrain_daily.html` Git Blob `d0b152ff845f18a5ff5743c1e44a43b81f87584e`；`LICENSE-CONTENT.md` Git Blob `c1459875927c2a1bbbff1b6bf103efd0b0da44e8`。
- **原作者的题文、说明及卡片：CC BY 4.0**；代码 MIT。测得的第三方 pKa、Mayr N/E 值不受原作者内容许可覆盖，均不导入。本轮不复制结构示意 SVG、图像、论文、实验数据或外部百科内容。

## 合规筛选与真实新增
- 上游源题数 2892，分子图对象 2971（**复制数 0**）。只选择文字和选项可独立阅读、答案索引有效、解释非空且选项无重复的四类。
- TMC 几何形状 **133**；TMC 配体贡献电子数 **47**；TMC 配体 L/X 分类 **47**；PG 脱保护条件 **41**。筛选接受 **268**，剩余各类或涉及图片、实测数据未导入。
- 固定源许可和 HTML Blob SHA，使用 JSON 解析而不执行上游代码。全部候选保存确切来源、署名、CC BY 4.0、原应用、源数组位置、原文答案及解析。
- `--dry-run` 不写入，可核对分类和样题；统一规范化 SHA-256 题干去重，已有内容绝不覆盖，重跑新增应为零。
- 成功导入：**268 新 JSON，0 已存在 ID**；仓库候选数 **1122→1390**，无机 **622→849**、有机 **414→455**、分析 33、物理 53。
- 新文件全为 `quality_status=awaiting_expert_review` 且 `publishable=false`；133 道几何题带 `structure_geometry_review_pending=true`，因为化学式有时不能唯一表达空间异构。
- 全库审计：精确同文题目组 **0**，相同模板家族 **36**，许可证字段缺失 **0**，专家批准 **0**。跨来源语义相似、反应条件及化学准确性须人工终审。

## GitHub 证据与错误
- 结构探测成功：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40456680819
- 按题型探测成功：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40456783735
- 初次测试由于模拟的配合物名称过短失败（尚未写题）：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40457127698
- 更正后 4 个测试全通过且实际来源 dry-run=268/268：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40457197835
- 导入启用提交：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/ef1a339f6ea7ab58084333f695ec7cdab74346e6
- 完整自动化 47 步成功：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40457320446
- 实际新增 Git commit：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/b932a53aa680bd762c025c910a3749049ca10201
- 该提交已核验为 **268 个新增 data/candidates JSON + 1 份导入报告 + 更新质量审计**；`harvest/import_reports/chemtrain_daily_text_mcq.json` 包含确切计数。

## 仍待解决
- 专家判定几何题的命名及分子式是否足以唯一确定结构；逐题检查保护基脱除条件的底物依赖性；不同来源考点的语义重复；是否适合正式大学考试。
- 从已预审的来源中找更多原创且逐题具备再分发授权的分析化学、物理化学题，避免只靠扩大元数据目录刷数量。
