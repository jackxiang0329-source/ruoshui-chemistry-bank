# 开放教材导入与四科题库审计记录 — 2026-10-27

## 版权来源与边界

- 来源：OpenStax《Chemistry 2e》（2019），https://openstax.org/details/books/chemistry-2e
- 版权依据：https://collection.bccampus.ca/textbook/UbciECy3/ 明确说明教材为 **CC BY 4.0 except where otherwise noted**（个别例外另行标注）。
- 作者归属：Paul Flowers、Klaus Theopold、Richard Langley、William R. Robinson 等（教材著作权人以出版社书页为准）；已在每个候选题记录声明原作者与中文改编。
- 仅选取出版社自有的「Check Your Learning」与常规练习/正文示例；排除了图形、未经单独授权的第三方试题、外部百科、插图及附录表格。不是转载整本教材。
- 八道题的题源节页：15.1 沉淀平衡（2 道）、14.7 酸碱滴定（1 道）、12.3 速率定律（2 道）、17.3 电极电势（1 道）、15.2 路易斯配位（1 道）、第 15 章练习中的配合物稳定常数（1 道）。
- 源来源表：\`harvest/pinned_openstax_chemistry2e.json\`，逐题含来源 URL、具体题目概念、计算参数、答案、解析、复算期望值和误差范围。

## 新增及对应 GitHub 证据

- 此次新增 **8 道**未审核、禁止发布的**中文改编习题**：无机 2、分析 3、物理 3、有机 0。
- 新增脚本及题目固定清单：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/87d920c81200ceab4a0295f3b7d41b80cb0bec22
- 自动审计与去重分层代码：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/d0a48824007a49c8167c2cde3d0ea6d3554ec23f
- 首次测试因 **浮点数严格相等断言**失败，无任何题目写入；记录：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40441064741
- 修复为容差比较：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/9fa211504ec7fa18861d54b37915eb7e8703f726
- **第一次实际成功导入**：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40441117500
- 由 Action 写入新增题目、报告及审计：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/0275a85a86b8fdfc8e04102b6faa7069a3996f16
- 已确认首次导入新文件 8 道、先前同一 ID 已有 0 道；新增后候选题总数由 1106 增至 **1114**。
- 首次审计发现 5 份历史文件 \`publishable\` 字段缺失，虽然属于待审，发布保护标志不够明确；安全规范脚本：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/567ea602116d32089d517ac56f6a8e85a112a2c9
- **二次成功验证**：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40441320268
- 五份历史文件补齐 \`publishable=false\` 的自动提交：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/7bd5321bdf9b0f4e2a0be98fb984013a737ced44 。该提交仅**修改 5 份已有文件**和审计报告，净新增题目 **0 道**。

## 审计总量

- 候选总数：**1114**。
- 分学科：无机 624、有机 414、分析 28、物理 48。
- 分实际用途：独立答案的习题候选 836、命名反应/试剂复习学习卡 278。不能将复习卡计算为 278 道独立考试真题。
- 安全状态：**1114/1114** 明确 \`publishable=false\`，**1114/1114** \`awaiting_expert_review\`；专家批准进入正式组卷 **0**。
- 精确同文题目组：**0**；在自动模板规则下的潜在同模板组 **36**。跨来源的高相似度且答案相同的自动标记配对 **0**，这是保守规则结果，**不代表语义重复已完全消除**。
- [持续更新的机器可读结果](../quality_audit.json) 每次 Actions 运行都会根据仓库实时生成，不会根据模板相同直接误删题。

## 未完成与风险

1. 对 36 组同模板练习做教育用途判断；参数不同、步骤不同的题目不必强制合并。
2. 仍缺少经过专家审核可以正式发布的题目及独立人工语义比对工作。
3. OpenStax 的 CC BY 授权不自动涵盖个别第三方来源，导入器仅允许本次人工挑选的八题，不批量抓取网页或有版权例外的附件。
4. 四科学科分类是检索与教学应用导向的分类；教材本身属综合化学，需后续专家调整题目教学层级。
5. 后续继续筛选完整答题与明确再分发权的大学无机、分析和物理化学习题；严格记录独立问题与自生成参数变体的区别。

错误闭环：本轮第一次工作流失败已修复，最后两次完整流水线（导入与出版保护修复）已分别成功。常规 GitHub 定时触发仍是 \`17,47 * * * *\`（配置每 30 分钟一次，不承诺调度系统绝对准点）。
