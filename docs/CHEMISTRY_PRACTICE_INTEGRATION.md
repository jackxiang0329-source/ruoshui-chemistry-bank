# 三千弱水 · 化学选择题适配器 v0.2

这是把 [chemquiz](https://github.com/bem130/chemquiz) 的**题目随机选择、题库分类与唯一选项理念**整理成可直接供 JavaScript/Cloudflare Workers 复用的纯逻辑模块，并且单独提供 Node.js 版本的原始数据加载器。上游 Rust 工程在 `third_party/chemquiz` 原样保存，原代码 MIT 许可和原作者署名不可删除。

## 目前可运行的功能

- 读取两份原始目录，合计 301 条；按照标准化英文名+化学式去重 28 条，并隔离结构争议 6 条，得到 **267 条未审练习候选**。
- 仅支持 **无机（inorganic）、有机（organic）** 的名称/化学式选择题。**尚未从开源数据得到分析和物理化学题目**；请求这两科时明确拒绝，不能假装生成。
- 两种模式：`name_to_formula`（名称→化学式）、`formula_to_name`（在四个或更多选项中选择一个匹配分子式的名称）。
- 同一道题的选项确保名称和分子式分别唯一，避免将同分异构体/别名放到同一单选题造成多个正确选项。
- 参数化种子与 Fisher-Yates 洗牌：相同上游数据、seed、题型和配置生成完全相同的试卷。
- **学生卷绝对不包含正确选项位置**；答案及原始上游来源留在单独的教师卷。作答评测函数独立。
- 数值判分提供绝对、相对容差及严格单位字符串比较（尚无完整单位换算）；它是基础设施而不是物理化学专家答案验证。
- 所有生成品带 `UNREVIEWED_DO_NOT_PUBLISH`；**不会读取正式发布清单、自动上网或写入 D1/R2**。

## 本地使用

Node.js 20+；无新的 npm 包依赖。

```bash
npm run audit:vendor
npm test
npm run practice:preview -- --discipline=organic --count=10 --options=4 --seed=20261026
npm run practice:preview -- --discipline=inorganic --count=10 --mode=formula_to_name --seed=20261026
```

默认在 `.tmp/chemistry-practice/` 中生成 `student.json`、`teacher-private.json` 和 `audit-report.json`；这些文件被仓库 `.gitignore` 排除。**不要把教师卷上传到公开网站**。

## 纯逻辑 API

```js
import { generatePractice } from './src/chemistry/practice.mjs';
import { readVendorCatalog, readHolds } from './src/chemistry/catalog-node.mjs';
import { gradeChoices } from './src/chemistry/grading.mjs';

const { student, teacher } = generatePractice(readVendorCatalog('organic'), {
  track: 'organic', mode: 'name_to_formula',
  count: 10, optionCount: 4, seed: 42, heldIds: readHolds()
});
const result = gradeChoices(student, teacher, {});
```

`practice.mjs`、`grading.mjs` 仅依赖标准 ECMAScript，可在 Cloudflare Workers 打包环境复用；`catalog-node.mjs` 使用 Node.js `fs`，**不能放进 Workers**。上线时应离线读取**已完成授权、科学复核与中文化**的题目，通过签名审核清单构建生产题库索引，然后只向 Worker 注入经过审批的内容。**本次不能把上游目录直接作为生产题库**。

## 数据边界与现实限制

这批来源主要是英文名→化学式识别，更多属于基础概念训练，不能代替国内大学化学专业的高难度四大化学期末综合题。原始文件中的某些 SMILES 存在问题（例如石墨/金刚石/甲烷共用 `C`，不同二糖共用结构式）；对应行被排除。上游绝对结构和分子式未经逐一专业核验。ChemIQ 评测代码目前单独保留，不直接接入这个基础选择题适配器，防止误将基准题当作公开练习导致评测污染。

### 面向三千弱水主平台的接口契约

- 学科：`chemistry.inorganic`、`chemistry.organic`；预留 `chemistry.analytical` 和 `chemistry.physical`，无内容不得返回伪造题。
- 学生展示：`student.questions[].id/prompt/options`，不含教师答案。
- 评分接口应在服务器持有 `teacher.answers`，经授权的教师才可导出完整答案与评分标准。
- 学科库数据版本：`source.reference` 固定上游 SHA，正式上线还需每题 SHA-256、质检签名、许可确认。
- 与数学平台连接通过新的化学前缀 API/独立签名清单，**本 PR 未修改 `ruoshui-math-exam` 生产 Worker、D1 或网站 UI**。

验收重点：`npm test`、种子确定性、标准化去重、严重结构风险排除、正式发布隔离、学生答案不泄漏。
