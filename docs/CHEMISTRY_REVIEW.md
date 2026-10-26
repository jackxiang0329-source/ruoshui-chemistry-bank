# 中文化与化学专业审题工作台 · V0.1

题目虽然已经去掉精确重复，但**不等于可直接作为教材或考卷**。为了避免引入错误化学事实、错误 IUPAC 名称或版权风险，导出审核队列不自动填写中文翻译，也不标记任何题目为已发布。

## 审题命令

```bash
npm run review:queue -- --source=chemquiz --discipline=inorganic --limit=25
npm run review:queue -- --source=chemquiz --discipline=organic --limit=25
npm run review:queue -- --source=chemiq --limit=25
```

输出包括原英文题干、答案、SMILES、源文件/上游 Git SHA、结构风险标签和各审核字段。石墨/金刚石/甲烷与三种二糖构造冲突题优先显示，**不能自动从审核队列跳到正式发行目录**。

### 三人/多阶段审查职责建议

- 中文化审核：化学术语、IUPAC 中文命名、标点与题目条件完整性。
- 学科专家：元素与电荷守恒，化学热力学的标准态与单位，分析化学数值计算和有效数字，有机机理、立体构型及实验选择性。
- 版权与出版审稿：来源许可、原插图、照片、题目翻译权及 LaTeX/图像真实编译分页。

### 特殊答案格式

ChemIQ 共有 200 道 `smiles_to_iupac`，题目要求输出 IUPAC 名称，而底层 `answer` 字段为提供给 OPSIN 的 SMILES 参考结构。这类题目在翻译成中文题库时，不可直接把 `answer` 当作名称；还须独立命名并人工校验。

默认审核队列从原版隔离输入产生，不向 D1 或生产 Cloudflare 写入任何记录。ChemIQ 作为基准题尽量保持独立，不能在模型训练或出题中同时使用又声称其是独立盲测。
