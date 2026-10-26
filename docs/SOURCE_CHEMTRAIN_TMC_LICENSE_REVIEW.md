# ChemTrain TMC Learn 题卡来源审查（2026-10-27）

上游：https://github.com/ChemTrain/tmc-learn

固定提交：`3ccdefe51d6754cb59cc19c847d76b7044da1414`

源文件：`src/tmc_sets.py`，Git Blob SHA `a97ab868052f6f5ca568c132a3df3851d8cb89b2`。

**权利范围**：上游 `LICENSE-CONTENT.md` 明确声明卡片集合、配体资料、笔记和图等非代码内容采用 CC BY 4.0，允许署名后改编及再分发。上游源码为 MIT（版权所有 Francesco Sala, 2026）。本次不复制原 HTML、绘图、Logo、教科书原文或第三方测量值，仅从作者自有的配合物卡片记录生成中文数值问答。署名及改动说明写入每条题目。具体证据见 `harvest/approved_generators.json`。

**导入方式**：`python3 scripts/import-chemtrain-tmc.py`。通过固定 SHA 的 GitHub Raw 读取 30 KB 左右的 `tmc_sets.py`，核对 Git Blob SHA，使用 Python AST 只解析六个静态卡片数组里的字面量 `C(...)` 调用；不执行上游代码、不导入 Python 模块、不下载图像。遇到来源结构变化或原始卡片数量不符合上游 README 的 199 张即报错，避免静默部分导入。

**数据含义**：每张配合物卡片最多派生三个不同题型（价电子数、氧化态、d 电子数），对 `no_os` 卡片仅生成价电子题。派生题型数 **不是独立上游题卡数**。问题按规范化题干 SHA-256 去重，已有同 ID 文件不覆盖；统一分类无机化学/过渡金属配合物电子计数。生成数据一律 `quality_status=awaiting_expert_review`、`publishable=false`；本次程序检查不能代替化学专家审核。

**质量限制**：电子计数遵从 TMC Learn 声明的约定（如线性 NO、桥联 CO、金属—金属键），并非所有配合物均适合简化的电子计数规则。对于存在争议的配位化学约定、结构信息缺失、原始答案准确性仍须人工核验。不得将候选题目自动列为正式题库。

**与现有 PR 去重**：PR #9 已提取四个其他 ChemTrain 子项目的 232 条题目对象，本导入只针对此前未抽取的 `tmc-learn`；源卡片按内容哈希去重，未合并 PR 中的对象不计入本次主分支新增。
