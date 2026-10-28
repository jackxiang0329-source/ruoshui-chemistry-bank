#!/usr/bin/env python3
"""Reproducible XeLaTeX source builder for the chemistry advanced-only repository.

Source of truth is editorial/advanced_integrated_vN/*.jsonl, not a hand-edited PDF.
Generated documents are DRAFTS and must never be treated as approved publication.
"""
from __future__ import annotations
import argparse
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "editorial"
OUT = ROOT / "release" / "pdfs-src"
SUBJECTS = {
    "inorganic": "无机化学",
    "analytical": "分析化学",
    "organic": "有机化学",
    "physical": "物理化学",
}
BATCH_START = 2

def latex_escape(s: object) -> str:
    """Escape plain text, preserving intentional LaTeX inline/display math spans."""
    value = str(s).replace("\r\n", "\n").replace("\r", "\n")
    spans = re.split(r"(\\\((?:.|\n)*?\\\)|\\\[(?:.|\n)*?\\\])", value)
    def plain(t: str) -> str:
        table = {
            "\\": r"\textbackslash{}",
            "&": r"\&",
            "%": r"\%",
            "$": r"\$",
            "#": r"\#",
            "_": r"\_",
            "{": r"\{",
            "}": r"\}",
            "~": r"\textasciitilde{}",
            "^": r"\textasciicircum{}",
        }
        return "".join(table.get(ch, ch) for ch in t)
    return "".join(x if x.startswith((r"\(", r"\[")) else plain(x) for x in spans)

def paragraph(s: object) -> str:
    return latex_escape(s).replace("\n\n", r"\par " + "\n").replace("\n", " ")

def series_names() -> list[int]:
    names = []
    for d in SOURCE.glob("advanced_integrated_v*"):
        if not d.is_dir():
            continue
        m = re.fullmatch(r"advanced_integrated_v(\d+)", d.name)
        if m and int(m.group(1)) >= BATCH_START and list(d.glob("*.jsonl")):
            names.append(int(m.group(1)))
    return sorted(names)

def read_series(n: int) -> list[dict]:
    directory = SOURCE / f"advanced_integrated_v{n}"
    rows = []
    # Only data files, never source markdown, audit queue or approved manifest.
    for p in sorted(directory.glob("*.jsonl")):
        for line_no, line in enumerate(p.read_text(encoding="utf-8").splitlines(), 1):
            if line.strip():
                try:
                    q = json.loads(line)
                except json.JSONDecodeError as exc:
                    raise ValueError(f"Invalid JSON {p}:{line_no}") from exc
                if not q.get("id") or not q.get("problem_zh"):
                    raise ValueError(f"Missing question fields {p}:{line_no}")
                if not q.get("solution_zh_steps"):
                    raise ValueError(f"Missing worked solution {p}:{line_no}")
                if q.get("publishable") is not False:
                    raise ValueError(f"Refusing to conflate publication with draft: {q['id']}")
                q["_series"] = n
                rows.append(q)
    return sorted(rows, key=lambda q: (
        list(SUBJECTS).index(q["subject"]),
        int(re.search(r"(\d+)$", q["id"]).group(1)) if re.search(r"(\d+)$", q["id"]) else 0,
    ))

PREAMBLE = r"""
\documentclass[UTF8,11pt,a4paper]{ctexart}
\usepackage[a4paper,left=23mm,right=23mm,top=24mm,bottom=24mm]{geometry}
\usepackage{fontspec}
\setmainfont{DejaVu Sans}
\setCJKmainfont{Noto Serif CJK SC}
\usepackage{amsmath,amssymb}
\usepackage[colorlinks=true,linkcolor=blue!45!black,unicode=true]{hyperref}
\usepackage{enumitem}
\usepackage{xcolor}
\usepackage{needspace}
\usepackage{fancyhdr}
\setlength{\parindent}{2em}
\setlength{\parskip}{0.25em}
\setlist[enumerate]{leftmargin=2.6em,itemsep=0.4em,topsep=0.5em}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{\small 三千弱水 · 大学化学高阶综合题库}
\fancyhead[R]{\small 待专家审校稿}
\fancyfoot[C]{\thepage}
\setlength{\headheight}{15pt}
\sloppy
"""

def make_tex(rows: list[dict], heading: str, outfile: Path) -> None:
    out = [PREAMBLE, r"\begin{document}",
           r"\begin{center}",
           r"{\LARGE\bfseries " + latex_escape(heading) + r"}\\[0.8em]",
           r"{\large 题目、分步解析与数值核验}\\[0.5em]",
           r"{\small \textcolor{red!65!black}{审校稿：未经化学专家核准；禁止直接视为正式试卷或出版物}}",
           r"\end{center}",
           r"\vspace{1em}",
           r"\noindent 本册从仓库结构化 JSONL 自动生成。增补和修改应只编辑源题目数据，并重新执行统一编译。",
           r"\par 机械方程残差检查只能说明指定模型的内部数值一致，不保证模型现实可行性。"
           r"第六辑另须完成跨辑模型去重审查。",
           r"\tableofcontents", r"\clearpage"]
    previous_series = None
    previous_subject = None
    for q in rows:
        series, subject = q["_series"], q["subject"]
        if series != previous_series:
            if previous_series is not None:
                out.append(r"\clearpage")
            out.extend([r"\section*{" + latex_escape(f"第{series}辑 · 题目及解答") + "}",
                        r"\addcontentsline{toc}{section}{" + latex_escape(f"第{series}辑") + "}"])
            previous_series, previous_subject = series, None
        if subject != previous_subject:
            out.extend([r"\subsection*{" + latex_escape(SUBJECTS[subject]) + "}",
                        r"\addcontentsline{toc}{subsection}{" + latex_escape(f"第{series}辑 / {SUBJECTS[subject]}") + "}"])
            previous_subject = subject
        out.extend([r"\Needspace{7\baselineskip}",
                    r"\subsubsection*{" + latex_escape(f"{q['id']} · {q.get('title') or '综合题'}") + "}",
                    r"\noindent\textbf{题目}\par", paragraph(q["problem_zh"]) + r"\par",
                    r"\medskip\noindent\textbf{分步解答}",
                    r"\begin{enumerate}"])
        for step in q["solution_zh_steps"]:
            out.append(r"\item " + paragraph(step))
        out.extend([r"\end{enumerate}"])
        if q.get("answer_values"):
            values = []
            names = q.get("answer_names") or []
            units = q.get("answer_units") or []
            for i, value in enumerate(q["answer_values"]):
                try:
                    shown = format(float(value), ".9g")
                except (TypeError, ValueError):
                    shown = str(value)
                label = names[i] if i < len(names) else f"答案{i+1}"
                unit = units[i] if i < len(units) else ""
                values.append(f"{label} = {shown}" + (f" {unit}" if unit else ""))
            out.extend([r"\noindent\textbf{答案摘要}\par",
                        latex_escape("；".join(values)) + r"\par"])
        assumption = q.get("assumptions") or q.get("model_assumptions") or ""
        if assumption:
            out.extend([r"\noindent\textbf{模型前提：}", paragraph(assumption) + r"\par"])
        if q.get("novelty_review_status") == "pending_cross_series_model_review":
            out.append(r"\noindent\textcolor{red!65!black}{[跨辑去重未完成 · 草稿]} \par")
        out.append(r"\medskip\hrule\medskip")
    out.append(r"\end{document}")
    outfile.parent.mkdir(parents=True, exist_ok=True)
    outfile.write_text("\n".join(out) + "\n", encoding="utf-8")

def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--series", default="all",
                    help="e.g. v6, all (all also generates individual v2..vN)")
    args = ap.parse_args()
    all_numbers = series_names()
    if not all_numbers:
        raise SystemExit("No JSONL chemistry series found")
    OUT.mkdir(parents=True, exist_ok=True)
    if args.series == "all":
        selected = all_numbers
    else:
        n = int(args.series.removeprefix("v"))
        if n not in all_numbers:
            raise SystemExit(f"Missing series: {n}")
        selected = [n]
    for n in selected:
        q = read_series(n)
        outfile = OUT / f"chemistry_advanced_v{n}.tex"
        make_tex(q, f"大学化学高阶综合题 · 第{n}辑 ({len(q)}题)", outfile)
        print(f"Generated {outfile.relative_to(ROOT)}: {len(q)} solved items")
    # Always build one consolidated source, even when compiling one series.
    combined = [q for n in all_numbers for q in read_series(n)]
    if len({q["id"] for q in combined}) != len(combined):
        raise SystemExit("Duplicate problem id across series")
    output = OUT / "chemistry_advanced_v2_onwards.tex"
    make_tex(combined, f"大学化学高阶综合题 · 第2至{max(all_numbers)}辑 ({len(combined)}题)", output)
    print(f"Generated {output.relative_to(ROOT)}: {len(combined)} solved items")

if __name__ == "__main__":
    main()
