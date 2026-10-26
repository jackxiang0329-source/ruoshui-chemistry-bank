# 2026-10-27 大学化学扩充：物理化学原创数值练习与外部来源核验

## 核验基线
- 主分支基线：`261fe20da7827be9fea76c99c586c16e57776ccc`，`data/candidates/*.json` 共 **709** 个；`harvest/source_candidates.json` 目录 **568** 个候选来源。
- `harvest/approved_imports.json` 已批准的结构化来源仍为 MuzaPro 一项；其他 TMC/chemquiz/Radical/Photoredox 由专用导入器固定版本核验。已审查的 PR #1、#5–#9 未合并，未将待审数据冒充合法题目。
- 公开仓库搜索覆盖物理化学练习、分析化学练习、电化学测验及有机/无机题库；GitHub 仓库的公开可见性不等于题文版权许可。

## 新增外部来源判定
- `ChemTrain/chemtrain-daily`：代码 MIT；`LICENSE-CONTENT.md` 对作者原创题文标注 CC BY 4.0，但明确排除第三方实测 pKa、Mayr N/E 等数据。其题目汇集自其他 ChemTrain 应用，与已导入题目可能重合；本轮没有将约 2,900 条宣传数量直接计入新增，也未复制大型 HTML。
- `angiorda/Physical_chemistry_oral_exam_questions`：有动力学 Notebook，但本次未发现可核验的明确题文再分发许可；不导入。
- `gds001/Computational-Physical-Chemistry`：有物理化学计算 Notebook，未核实明确的题文再分发许可；不导入。
- `ahutchison-sudo/Chem-2210-practice-problems`：分析化学练习应用，未核实明确的题文再分发许可；不导入。
- `amitwinpp535-del/electrochemistry-quiz`：电化学 HTML 测验，未核实明确的题文再分发许可；不导入。
- `JuaoSea/Chemistry`：仓库 GPL-3.0，主要是计算/实验分析源码与 Notebook；尚未验证适合作为题库的独立问答及数据授权，不导入。

**本轮新增已核权的第三方原题来源：0；新增第三方原题：0。**

## 原创物理化学候选题（非第三方导入）
- 新增 `scripts/import-original-physical.mjs`、`tests/original-physical.test.mjs`，通过确定性数值生成 24 道本科基础练习：热力学平衡 ΔrG° 6 道、Arrhenius 活化能 6 道、一级反应半衰期 6 道、理想气体可逆等温体积功 6 道。
- 题目从标准公式与独立选择的参数生成，非外部试卷原题，不计入新增第三方题源；原创内容使用仅针对本批材料的 CC0 1.0 声明，不改变第三方许可。
- 所有题目按 NFKC 规范化题干 SHA-256 去重；已存在题目会核验答案、学科、发布状态，发生冲突则失败而非覆盖；每题自带计算参数和可复验公式。新增数量以 Actions 实际提交后的 Git 树差异为准，不预先宣称成功。
- 新增题全部标记 `awaiting_expert_review`、`publishable=false`，不得作为已审核的正式组卷题。

## 待办和限制
1. 运行 CI 测试、首次导入及复跑幂等性；核对 GitHub 实际新增文件和提交。
2. 物理化学题的有效数字、符号约定和教学表述仍需专家复核；跨来源语义重复检测仍需完善。
3. 对 ChemTrain Daily 的非第三方数据建立逐题内容权利白名单、版本固定和去重策略，再考虑增量导入。
4. PR #1、#5–#9 的数据、图片和第三方测量值仍需单独版权审查，不能整批合并。
