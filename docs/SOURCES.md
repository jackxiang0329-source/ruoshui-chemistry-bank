# 2026-10-26 四大化学开源资源审查（只读索引，不复制题文）

| 项目 | 主要用途 | 仓库/内容许可状态 | 当前动作 |
| --- | --- | --- | --- |
| https://github.com/bjodah/chempy | 物化、无机、分析的化学平衡、计量、动力学计算 | BSD-2-Clause（代码） | 首期推荐工具；不直接移植源码 |
| https://github.com/rdkit/rdkit | 有机结构、SMILES、指纹、部分 CIP | BSD-3-Clause（代码） | 首期推荐工具；需额外核查反应实证 |
| https://github.com/CalebBell/thermo | 物化热力学与相平衡 | MIT（代码） | 第二期验证引入 |
| https://github.com/IUPAC-InChI/InChI | 化学结构标识标准化 | MIT（代码） | 参考标准 |
| https://github.com/Cantera/cantera | 物化反应动力学与热物性计算 | 复合/非单一 SPDX 自动判断，逐文件审查 | 仅评估 |
| https://github.com/maths/moodle-qtype_stack | 公式、单位与数值自动判分 | 核心 GPL-3.0；示例题/文档 CC BY-SA-4.0 | 参考设计，不嵌入 GPL 代码 |
| https://github.com/openstax/osbooks-chemistry-bundle | Chemistry 2e 教材章节与习题 | README/当前教材说明 CC BY-NC-SA-4.0，且官网当前版权说明限制 AI 使用 | **禁止自动导入题文**；待取得相应授权 |
| https://github.com/openstax/exercises | 在线练习平台与题目格式 | 平台代码另有许可，题目逐条授权不同 | 只参考架构；逐题核权 |
| https://github.com/microsoft/chemistry-qa | 约 4500 道化学问答（来源 Socratic） | 仓库无可直接推断的原题再发布授权 | **不导入正文** |
| https://github.com/EnvCommons/SuperCHEM | 500 道多模态评测题的环境说明 | README 宣称 MIT，原试题来源为非公开考试；需独立核权 | **仅研究评测设计** |
| https://github.com/erik-menke/AnalyticalProjects | 分析化学 Python 教学 Notebook | GitHub 顶层未识别统一许可 | 阅读参考，不复制 |
| https://github.com/open-reaction-database/ord-data | 有机反应实验数据 | GitHub 标注 CC BY-SA-4.0；单条来源与附件仍需复核 | 研究来源管理，不直接作为题库 |
| https://github.com/openwebwork/webwork-open-problem-library | 参数化练习框架 | 存在独立 OPL_LICENSE / 贡献来源差异 | 先筛选化学主题并逐项审查 |
| https://github.com/lamalab-org/chembench | ChemBench 约 2700+ 化学知识/推理评测题 | 仓库代码 MIT；评测题具体再利用边界须逐项核实 | **独立保留作盲测，不进训练/题库** |
| https://github.com/oxpig/ChemIQ | 有机结构、命名、谱学等 816 道可程序化评分题 | 仓库标注 BSD-3-Clause；需确认题目独立权利 | **独立保留作盲测，不进训练/题库** |
| https://github.com/bem130/chemquiz | 化学测验逻辑雏形 | MIT（源码） | 可研究算法，题库规模不足以作为主数据源 |

其他公开教育资源：
- David T. Harvey, Analytical Chemistry 2.1（https://sites.google.com/depauw.edu/dth/analytical-curriculum-projects/analytical-chemistry-2-1）：CC BY-NC-SA 4.0；需署名、非商业、同方式共享。
- MIT OpenCourseWare（https://mitocw.zendesk.com/hc/en-us/articles/5093047407771-Reusing-MIT-OpenCourseWare-Content）：CC BY-NC-SA 等要求，课程附属资料单独核权。
- OpenStax Chemistry 2e 当前前言（https://openstax.org/books/chemistry-2e/pages/preface）明确对在生成式 AI 服务中使用内容提出额外许可条件；不能依据第三方过时的 CC BY 索引覆盖官方当前声明。

决策：外部数据导入状态为 `metadata_only`，直至逐题授权证据、中文翻译授权、插图权属、来源版本与用途范围均确认。软件的开源许可证不自动授权其附带的教材、图片、试题。
