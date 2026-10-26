# 三千弱水 · 大学四大化学题库

无机化学 · 分析化学 · 物理化学 · 有机化学

**工程状态：V0.1 原型。四科各一道原创教学示例，全部保留 draft，不代表正式审核通过。**

## 结构

- questions/CHEM-INORG-0001、CHEM-ANAL-0001、CHEM-PHYS-0001、CHEM-ORG-0001：每题独立 metadata.json、problem.tex、solution.tex
- schemas/question.schema.json：统一题目标准
- taxonomy/taxonomy.json：四学科知识点分层
- docs/SOURCES.md：上游开源资源及版权初审
- scripts/validate.mjs：格式与发布基本检查
- scripts/export-manifest.mjs：只导出已发布试题，草稿排除
- scripts/render-preview.mjs：从独立题目生成 ctex + mhchem + amsmath 可编译 TeX
- .github/workflows/ci.yml：Node 自动测试
- .github/workflows/latex.yml：手动 XeLaTeX 样卷编译

## 运行

需要 Node.js 20+，无外部 npm 依赖。

    npm run check
    npm test
    npm run manifest
    node scripts/render-preview.mjs CHEM-INORG-0001 both > CHEM-INORG-0001.tex

首次运行发布清单预期 published_count 为 0，以防止未审题目进入正式题库。编译 XeLaTeX 需要装好 ctex、mhchem、amsmath 和中文字体。

## 授权与质量

外部开源仓库、教材及练习集不能仅凭公开 GitHub 链接就自动转载。每条题目和图片必须核验独立授权。化学内容必须人工专业审核，自动检查只能辅助验证。

与现有三千弱水数学平台保持独立；后续通过经认证、含 SHA-256 的题目版本清单接入，不直接动数学仓库生产数据库。详见 docs/ARCHITECTURE.md。
