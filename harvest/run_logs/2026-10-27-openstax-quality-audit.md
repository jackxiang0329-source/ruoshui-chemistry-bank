# 2026-10-27 OpenStax 源版权纠错、撤回与数据库复审

## 纠错理由（必须优先使用第一方声明）

发现 **OpenStax 官方《Chemistry 2e》网页**当前明示其正文和练习遵循 **CC BY-NC-SA**（禁止商业使用、要求同方式共享、署名），并载明有关生成式 AI 系统使用的额外限制及请求授权方式：
https://openstax.org/books/chemistry-2e/pages/1-introduction

此前使用的第三方目录 https://collection.bccampus.ca/textbook/UbciECy3/ 将旧版标记为 CC BY 4.0 except where otherwise noted。两个来源存在时间/版本与法律适用范围差异。**没有确认对应旧版原文及可证明的旧许可版本时，不得把今天获取的网页习题按无条件 CC BY 4.0 转存。**

## 即刻处理

1. 取消 `scripts/import-openstax-chemistry2e.mjs`、`harvest/pinned_openstax_chemistry2e.json` 与测试，以阻止后续 Actions 每半小时重新引入。
2. 从 `main` 删除前一次自动导入的全部 8 道改编候选题（无机 2、分析 3、物理 3）。
3. 删除先前的 OpenStax 成功导入报告，来源索引改为 `import_questions:false`、状态 blocked。
4. 旧 GitHub 提交历史可能仍能访问过去的版本；本次属于主分支撤回，不是销毁公开 Git 历史。
5. 原有 5 份旧题标记 `publishable=false` 的修复保留；其他已单独核权题源的资料不删除。
6. `harvest/quality_audit.json` 由下次 GitHub Actions 依据实际保留的候选文件**重新计算**，不可沿用撤回前 1114 的报告。

## 实际数量

- OpenStax 本轮曾错误归因为 CC BY 的 8 道：**现已撤回，不应记为合法净增**。
- 扣除这 8 道后仓库应回到 **1106** 份候选题与学习卡，全部待审核。精确数量以本次修复后 GitHub Actions 和 git tree 验证为准。
- 本轮没有经过明确许可证验证而最终成功留存的新题；净增预期 **0**。
- 重复和质量分层审核功能独立保留；不会自动合并高相似模板。

## 原始记录与错误闭环

- 首次错误导入的代码提交： https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/87d920c81200ceab4a0295f3b7d41b80cb0bec22
- 曾成功写入但版权状态判断错误的 Actions： https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40441117500
- 另一次旧数据发布保护修复的 Actions： https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40441320268

**待完成**：请求 OpenStax 对原页具体内容授权版本作正式澄清；确认其 NC-SA 的范围与兼容性后再评估。须独立审校其他来源，不得用仓库级 MIT/CC BY 标签套用到书中第三方材料。
