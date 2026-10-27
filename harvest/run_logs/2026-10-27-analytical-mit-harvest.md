# 大学四大化学开源资源续采集与定量质检记录｜2026-10-27

## 现有仓库与本轮新增
- 基准：1,106 份候选（622 无机、414 有机、25 分析、45 物理），其中学习卡 278 份。
- 本轮从开源源码可依法利用的定量分析方法**独立编写并导入** 8 道分析化学计算练习：
  1. 无水 Na₂CO₃ 标定 HCl；
  2. Zn²⁺/EDTA 配位滴定；
  3. KIO₃ 标定硫代硫酸钠（1:6）；
  4. 草酸钠标定 KMnO₄（2:5）；
  5. 双指示剂碳酸钠/碳酸氢钠混合碱；
  6. Cu²⁺ 间接碘量法元素铜含量；
  7. 草酸盐沉淀—高锰酸钾滴定计算元素钙含量、空白校正；
  8. Bi³⁺/Pb²⁺ 分步选择性 EDTA 滴定。
- 这 **8 道是新编数值练习，不是上游现成的 8 道考试原题**；没有复制未经授权的实验记录、题卡、论文或第三方图。
- 已通过规范化 SHA-256 精确去重、固定数据清单核验、逐题独立计量复算、物理可行域检查和批量碰撞保护。
- **实际新增 8 个 `data/candidates/*.json`**；另有 `harvest/import_reports/analytical_calculator_mit.json` 和更新后的全库质量报告。
- 导入前 1106，导入后 **1114**（分析化学 33；无机 622、有机 414、物理 45）。
- 所有 1114 份均待专家审核、不得组卷发布；专家批准 0。
  
## 第一方开源来源、固定版本和许可
**PWO-CHINA / Chemistry-Calculator-Toolkit**
- 仓库：https://github.com/PWO-CHINA/Chemistry-Calculator-Toolkit
- 上游 Git SHA `879205657e777c00621a461e975218b395ee32ea`。
- 根目录 LICENSE **MIT**，Copyright (c) 2026 PWO-CHINA，Git Blob `49c2c01eba000fe4138e79b45083eee284f9f3bb`。
- 程序：`src/calculations.js` Git Blob `20378fe9af77e64932b9f412a6c51be9b0c433b5`。
- 教学公式文档：`docs/calculation-reference.md` Git Blob `0edb01aea5409a631536282ac179db5e28e9b772`。
- 上游单元测试：`tests/calculations.test.js` Git Blob `52acebcf661a38be4b781c26e520fbb359ceafcc`。
- 逐题来源注释、MIT 证据及改编说明写入每个候选 JSON。引入的是独立编写题干及标准计量公式，非镜像复制整个上游程序。

## 本轮全网新增发现、禁止直接导入事项
- [kbknudsen/PyEIS](https://github.com/kbknudsen/PyEIS)：**Apache-2.0** 开放的电化学阻抗模拟源码，已核验仓库根 LICENSE 与 README；暂无完整独立的题干和答案键，此轮只登记来源，不虚报物理化学题目增量。
- [ginnyxu01-spec/analytical-chemistry-quiz](https://github.com/ginnyxu01-spec/analytical-chemistry-quiz)：中文分析化学刷题 HTML；根目录未发现 LICENSE，不能擅自再分发。
- [MolChem/chemistry-quiz-1](https://github.com/MolChem/chemistry-quiz-1)：有机化学、动力学与分析化学题及大量反应图片；未发现根目录 LICENSE，不能搬运题文或图片。
- [dmccreary/chemistry](https://github.com/dmccreary/chemistry)：CC BY-NC-SA 4.0 且 AP 化学层级，未核验本项目授权兼容性/大学难度，暂不导入。
- OpenStax 的历史许可证冲突仍处于隔离状态，绝不恢复此前撤回的 8 题。

## GitHub 实际证明、错误与复测
- 初始脚本与 8 类题目来源清单：
  https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/0f591e5bc9feee4a15b69ca9a66a2bcdda74fd0d
  https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/e9ae075323b753663e2bf3aa8aec84c9d4576f77
- 两次最初测试失败（在导入前）：校验器对授权措辞使用过严的字符串比较、要求答案重复出现题干化学式；旧候选数据未受影响。错误发生的 GitHub Actions：
  https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40442389850
  https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40442421214
- 修复版权措辞和化学式存在性判断：
  https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/3214f8b4cf9e018d706402d9b28f152070efc12c
  https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/50f8d16f98d34b72553d061a25eee68ba0e54c77
- 成功运行的 GitHub Actions：
  https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40442495347
- 实际提交 8 个候选题 JSON、增量报告与审计报告：
  https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/5d8c7d0fc26c97b607dd6a82750ad3ee4fdd347d

## 定时发现的扩大与待完成
- 定时任务维持 `17,47 * * * *` 的**每 30 分钟配置**。
- 来源搜索从 18 项扩展至 **24 项**，重点覆盖分析化学定量实验、EDTA 络合滴定、反应动力学、化学热力学、电化学阻抗及分光光度法。**搜索结果默认 unreviewed_not_importable，不自动复制未经核权题文**。
- 来源目录旧值 568；新检索实际增量须以对应 Actions 运行的 `harvest/source_candidates.json` 和日志为准，不能将新查询或手工审查条目直接算为新增来源。
- 仍需：分析化学实验适用条件复核，形成形式化解答和 LaTeX，全文语义去重、难度标注；物理化学阻抗问题需独立开发、校验才能入库。
