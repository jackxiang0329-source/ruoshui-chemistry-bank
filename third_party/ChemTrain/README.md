# ChemTrain 八个项目：完整源码内容与隔离题目数据

**2026-10-26 GitHub 抓取与完整性核验。** 上游八个项目共有 **55 个受版本控制文件**，本仓库已保存所有对应内容：
- **54 个文件**按原始路径直接镜像，原始 Git Blob SHA 逐项一致。
- `chemtrain-daily/chemtrain_daily.html`（9.69 MB）因单次请求体限制，以 `chemtrain_daily.html.parts/000.part` 至 `010.part` 的 **11 个 UTF-8 Git blobs** 保存。拼接与上游完整原文逐字符一致。运行 `python scripts/assemble-chemtrain-daily.py` 可重建原 HTML 并校验其 Git Blob SHA `33cf8fae4b050c21c0e9cbd8af7725a681391b83`。

所有上游版本和每个文件 SHA 见 [SOURCE_LOCK.json](SOURCE_LOCK.json)。

## 题目数据（不是独立题量总数）

- 四个子项目的内嵌数据：pKa 253、Reactivity 301、Photoredox 197、Radical 50，**合计 801 条卡片/情景问题**；在 `imports/chemtrain/`。
- ChemTrain Daily 题库中实际存在 **2,892 条衍生选择题**，分为 pKa 342、Reaction 561、PG 227、TMC 820、Reactivity 563、Photoredox 329、Radical 50；在 `imports/chemtrain-daily/`。
- Daily 内嵌 **2,971 个分子/反应绘图数据项**，存于其原始 HTML 分片文件中。渲染衍生题需要重组 HTML 或另行提取分子图。
- 其中 144 条在忽略选项/解释的粗略签名下与先前记录相同，但备选项实际不同，因此没有武断删除。**Daily 是子项目生成的派生题，不能与 801 条原始卡片简单相加宣称 3,693 道独立试题。**

## 授权、技术边界

**软件 MIT，题目及其说明/结构图 CC BY 4.0**，需要保留 ChemTrain 和相应原子项目作者署名及变更声明；Logo 带有 Twemoji CC BY 4.0 署名义务。第三方原始实验 pKa、Mayr 反应性参数与光氧化还原电势不被自动授权，应补全原论文/数据库来源。

原始代码与完整试题已镜像，但本项目**没有进行专业化学审稿、翻译、实验数据原始版权核验或 PDF 出版验收**。所有导入行均为 `external_quarantine`、`publication_allowed:false`，正式发布数量仍为零。

校验：

```bash
node scripts/audit-chemtrain.mjs
node --test tests/chemtrain-import.test.mjs
python scripts/assemble-chemtrain-daily.py
```

也可运行 `python scripts/pull-chemtrain.py` 从 GitHub 的八个固定提交直接获取一份临时的完整 Git checkout，以供独立历史比较。
