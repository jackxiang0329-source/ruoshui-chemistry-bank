# 四大化学参数化计算题 + 统一组卷契约 v0.3

## 新增的六个原创计算题模板

**分析化学**
1. `ANAL-ACID`：弱酸 HA 用**不近似的二次方程正根**求 pH，检查 (x^2/(C-x)=K_a)。
2. `ANAL-EDTA`：条件形成常数 `Kf'=αY Kf` 与 1:1 金属和 EDTA 物料守恒；检查 `Kf' x²+x=C`。
3. `ANAL-PRECIP`：Mg(OH)₂ 刚开始沉淀的临界条件 `C[OH-]²=Ksp`，明确忽略活度、可溶水解物种等。

**物理化学**
1. `PHYS-EQ`：气相二聚反应的 `ΔrG°=ΔrH°−TΔrS°`，`ln K°=−ΔrG°/(RT)`，标准态及无量纲平衡常数说明。
2. `PHYS-ARR`：两温度 Arrhenius 关系，计算 `k₂/k₁`，不需要指前因子。
3. `PHYS-ENTROPY`：理想气体可逆等温膨胀，`ΔS=nR ln(V₂/V₁)`，结果单位 J/K。

这些公式是常规本科知识，但具体数值组合和完整教学题干是本项目重新设计的演示模板。**没有搬运第三方教材题干。**

## 运行四科统一接口

需要 Node 20+，无新 npm 依赖。

```bash
npm run paper:unified -- --track=analytical --count=12 --seed=20261026
npm run paper:unified -- --track=physical --count=12 --seed=20261026
npm run paper:unified -- --track=inorganic --count=10 --seed=20261026
npm run paper:unified -- --track=organic --count=10 --mode=formula_to_name --seed=20261026
```

CLI 会在 `.tmp/chemistry-unified/<track>/` 中分别生成 `student.json`、`teacher-private.json`、`audit-report.json`。请勿将教师答案文件部署到静态网站或公开 API。不同学科路径分开，避免互相覆盖。

`src/chemistry/unified.mjs` 导出 `buildUnifiedPaper(config,resources)`：
- `inorganic` / `organic`：使用现有 `chemquiz` 顶层目录；要求显式提供 `catalog` 和 `heldIds`，支持基础识别选择题。
- `analytical` / `physical`：使用独立原创计算题参数生成器，无第三方依赖。
- 四科均返回 `{schema_version,track,format,generator,student,teacher,report}`。
- 教师卷和学生卷类型在 `kind` 中明确区分，数值答案仅存在于私有 `teacher.answers[]`。

## 答案验证

`gradeQuantitative(student,teacher,submissions)` 接受以题目 ID 索引的数值作答；有单位的题必须上传 `{value,unit}`。目前只支持单位字符串精确比对（无法自动进行 mL↔L、J↔kJ 等换算），数值有效数字与容差规则采用**题目类型明确约定的绝对或相对容差**。

为避免暴露答案，返回结果只含题号、是否正确及错因类型，不含数值正确答案。生产系统必须由服务器端保有经人工批准的教师卷，不能把学生传回的题目 JSON 当作可信任数据。

## 化学理论适用边界

- 酸碱题明确忽略水自偶电离、活度效应，且所选参数满足 `[H+]≫10⁻⁷ M`；
- 沉淀开始条件不等于实际分离实验的操作 pH；
- EDTA 题的 `αY` 与缓冲体系作为**题目给定数据**，不独立构造真实缓冲配方；
- 热力学 `ΔrH°`、`ΔrS°` 的恒温度近似只在指定区间内作为模型假设；
- Arrhenius 假设活化能在给定温度区间不变；
- 物理化学熵变适用于理想气体和等温可逆路径（熵为状态函数）。

所有试题仍为 `UNREVIEWED_DO_NOT_PUBLISH`，不进入正式发布索引。计算方程残差测试已覆盖 5 组种子、每科 60 道次，共 600 道次；它不能替代真实专家审核或独立实验数据确认。

## 后续出版与 Cloudflare 对接

- 先把数值题对应的结构化题干、单位、标准推导经审核后转为独立 TeX；
- 排版使用 `ctex`、`mhchem`、Elegant 风格，出题和答案分卷；
- 只有通过内容授权与专业审稿的题目，才进入含版本和文件 SHA 的可发布清单；
- 免费 Cloudflare Workers 只提供轻量索引/抽卷接口；批量 PDF 编译在 GitHub Actions 或离线环境完成。

注意：本版本**没有部署 Cloudflare**，也没有修改数学仓库或生产数据库。
