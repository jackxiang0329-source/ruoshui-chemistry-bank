# 大学化学题库采集记录：2026-10-27（北京时间）

## 已验证结果

- 主分支：`main`，数据导入提交：`d14c069b14664c63e3c159a0f918b56f3ed02471`（[查看提交](https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/d14c069b14664c63e3c159a0f918b56f3ed02471)）。
- 代码、许可清单和单元测试提交：`35ea94a58a7e90c5d9da7c79821faf0b3057aa45`，后续安全解析修复：`a4b0ce4f8aa6eb90084ccb97a410d8344de9370e`、`f8fdfbb9cca560cd8f9022239e2675869d261d8c`。
- [成功运行的 GitHub Actions #40357117662](https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40357117662)：采集测试、来源搜索、现有来源导入、TMC 生成导入、Git 提交全部成功。
- 已核权的新来源：`ChemTrain/tmc-learn`，源文件 `src/tmc_sets.py`，固定提交 `3ccdefe51d6754cb59cc19c847d76b7044da1414`，源 Git Blob SHA `a97ab868052f6f5ca568c132a3df3851d8cb89b2`。
- 内容许可：**CC BY 4.0**（[明确涵盖卡片集合的授权文本](https://github.com/ChemTrain/tmc-learn/blob/3ccdefe51d6754cb59cc19c847d76b7044da1414/LICENSE-CONTENT.md)），代码 MIT。作者署名：TMC Learn by Francesco Sala (ChemTrain)。逐题记录来源、固定 SHA、许可和中文改写说明。
- 上游 **199 张独立配合物卡片**，派生 **593 道不重复候选题型**：价电子数 199、氧化态 197、d 电子数 197。该 593 是**派生题型数，不是 593 张独立原题卡**。新增题目 JSON **593** 个，原有 5 个，本轮后主分支候选题目总数 **598**。
- 所有新增题：`subject=inorganic`、`quality_status=awaiting_expert_review`、`publishable=false`；**正式专家审核通过 0 道**，未自动进入发布题库。
- 同轮来源搜索：21 次成功 GitHub Search 请求，626 条可能重复的原始命中，新增独立来源候选 **0**，来源目录维持 **568**。原 MIT 有机反应来源导入新增 0、重复跳过 5。

## 去重、质检和复现

- 原始 `tmc_sets.py` 不执行，只通过 AST 解析六个静态题卡列表。固定 commit 和 Git Blob SHA 双重约束，若上游卡片数量不再是 199 则停止。
- 按 NFKC 归一化、空白归并、小写后的题干 SHA-256 去重；发现同 ID 文件即跳过，不覆盖已审核或已导入题目。
- 自动检查字段类型、金属族序数、电子数/氧化态范围，禁止不确定氧化态的题卡生成氧化态和 d 电子数题；5 个单元测试加一项命名常量安全解析测试通过。
- 复现：`python3 -m unittest discover -s tests -p "test_chemtrain_tmc_import.py" -v`；`python3 scripts/import-chemtrain-tmc.py`。
- 稳定统计见 `harvest/import_reports/chemtrain_tmc.json`；证据和风险说明见 `docs/SOURCE_CHEMTRAIN_TMC_LICENSE_REVIEW.md`。

## 错误与处理

- 首次工作流 [#40356977531](https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40356977531) 在上游第 142 行的 `NO_NOTE + "..." ` 安全字面量解析处失败，**没有提交部分数据**。已修改解析器，只允许白名单中的静态字符串和字符串拼接，不执行第三方 Python 代码；第二次工作流 #40357117662 完整成功。
- 不把尚未合并的 PR #9 的 232 条 ChemTrain 四子项目题目对象计入主分支本轮新增，也不重复搬运已有候选。

## 未完成事项

- 新增 593 道仍需化学专家核对电子计数约定、结构歧义、答案与题干措辞，并按实际教学要求分层分章；目前不可作为正式组卷内容。
- 有机化学、分析化学、物理化学本轮**没有新增已核权题目**。发现候选仓库不代表题目正文具有再分发授权。
- ChemTrain Daily、Reaction Learn、PG Learn 等大型资源，以及尚未合并的 PR #7–#9 仍需分别检查权利链、提取与 CI 后再考虑合并。
- GitHub Actions 定时抓取保留每 30 分钟一次（`17,47 * * * *`），实际启动可能受 GitHub 调度延迟影响。
