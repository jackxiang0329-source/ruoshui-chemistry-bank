# 大学四大化学题库：168 道新原创计算练习与三类开放教育来源

日期：2026-10-27

## 真实提交及数量

- 原来候选 **1390**（无机 849、有机 455、分析 33、物理 53）；最新审计 **1558**（无机 849、有机 455、分析 **129**、物理 **125**）。净增 **168**；其中练习候选 **1280**，学习卡 278。
- **分析化学 +96**：8 个方法×12 组参数。酸标定、EDTA 配位、KIO₃ 碘量、高锰酸钾草酸盐滴定、双指示剂混合碱、间接碘量测铜、草酸钙间接滴定、Pb/Bi 分步 EDTA。每题独立计算物质的量守恒验证答案。固定 MIT 参考：`PWO-CHINA/Chemistry-Calculator-Toolkit` SHA `879205657e777c00621a461e975218b395ee32ea`；只有方法被引用，不复制第三方原题或实测数据。
- **物理化学 +72**：6 个方法×12 组参数。能斯特电池电动势、积分范特霍夫、Clausius-Clapeyron、理想稀溶液渗透压、凝固点下降、电子一维无限深势阱能级跃迁。独立正向计算和逆向公式残差检查，每题明确单位和适用条件。
- 两组均是**独立编写的可参数化习题**，**不是从外部直接转载的 168 道官方大学真题**。原创新题文按 [CC0](../../LICENSE-ORIGINAL-QUESTIONS.md) 声明，MIT 软件版权仍归原作者。全部 `quality_status=awaiting_expert_review`、`publishable=false`；未自动批准正式发表。
- 实际 96 题入库提交：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/c60d30b60a178c0d28288b7fe01986afabc5c9ac
- 分析化学完整成功 CI：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40469439168
- 实际 72 题入库提交：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/commit/4ab0c292365a0703e5e6cf6a3c7649c5cd90533b
- 物理化学完整成功 CI：https://github.com/jackxiang0329-source/ruoshui-chemistry-bank/actions/runs/40469877330
- 两种源脚本及校验：`scripts/import-original-analytical-variants.mjs`、`tests/original-analytical-variants.test.mjs`、`scripts/import-original-physical-variants.mjs`、`tests/original-physical-variants.test.mjs`。
- 机器审计：精确同题干组 **0**，同模板家族 **50**（参数变式数量扩大使模板相似更多），**不代表 168 个不同考点**。正式化学专家审核通过 0。

## 首轮失败与修复

- 第一版分析题 CI 在答案展示长度测试处失败：铜、钙质量分数题只展示末尾百分数，未完整代入；补齐代入式后通过。**首轮失败前没有写题。**
- 第一版物理题 CI 在测试的数字正则转义错误处失败：使用显式 `[0-9]` 检查替代错误的转义表达式，随后通过。
- 所有数值答案和单位都经过独立程序性检查，但对试验的真实性、反应条件选择性、化学概念难度尚待专家复核；不允许自动进入可发布题库。

## 新发现的独立 OER 线索（本次未转载其中原题）

1. ASCCC OERI 导航：https://asccc-oeri.org/open-educational-resources-and-chemistry/ ，描述 MyOpenMath 化学条目 **5389** 个、平台许可证 **GPL + CC BY**；尚未核验每道题实际版权、答案、年级范围或导出许可。
2. Medford《Data Analytics for Chemical Engineers》：https://www.medford.chbe.gatech.edu/DA4CHE/problem_sets/intro.html ，可公开获取 CC BY 4.0 的化工数据分析 Notebook 问题集，但明确**解答不公开**，需要后续独立求解与逐文件核权。
3. Lumen Learning《Chemistry for Majors》：https://courses.lumenlearning.com/chemistryformajors/chapter/problem-sets/ ，网站称题目 openly licensed，但教师答案键限制向合格机构/教职员工提供；未获取或转载受限答案。

## 后续

优先复审 168 道新题的实验适用性与同模板比例；然后逐条检查 MyOpenMath 公开条目的作者及许可，寻找允许合法再分发、包含完整答案和来源版本的大学分析/物理化学习题。不能把来源索引、人工尚未核验的 AI 问答或参数变式数量误当作可直接出版题量。
