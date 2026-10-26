import { existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
export function renderPreview(id, mode='both') {
  if (!/^CHEM-(INORG|ANAL|PHYS|ORG)-\d{4}$/.test(id)) throw new Error('Invalid ID');
  if (!['both','problem','solution'].includes(mode)) throw new Error('Invalid mode');
  const metadataPath = join(ROOT, 'questions', id, 'metadata.json');
  if (!existsSync(metadataPath)) throw new Error('Unknown question');
  const metadata = JSON.parse(readFileSync(metadataPath, 'utf8'));
  const header = [
    '\\documentclass[UTF8,a4paper,11pt]{ctexart}',
    '\\usepackage{amsmath,amssymb,mhchem,geometry,fancyhdr,xcolor}',
    '\\geometry{left=22mm,right=22mm,top=26mm,bottom=25mm}',
    '\\definecolor{ruoshuiblue}{HTML}{284E68}',
    '\\pagestyle{fancy}\\fancyhf{}',
    '\\fancyhead[L]{三千弱水 · 四大化学}',
    '\\fancyhead[R]{本科综合练习}',
    '\\fancyfoot[C]{\\thepage}',
    '\\setlength{\\headheight}{15pt}',
    '\\begin{document}',
    '\\begin{center}',
    '{\\LARGE\\bfseries\\color{ruoshuiblue}化学试题预览}\\\\[5pt]',
    '{\\small ' + id + ' · ' + metadata.discipline + ' · 待人工复核}',
    '\\end{center}'
  ];
  if (mode !== 'solution')
    header.push('\\section*{题目}', '\\input{questions/' + id + '/problem.tex}');
  if (mode !== 'problem')
    header.push('\\section*{参考答案（未审定）}', '\\input{questions/' + id + '/solution.tex}');
  header.push('\\end{document}');
  return header.join('\n') + '\n';
}
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const id = process.argv[2];
  if (!id) { console.error('Usage: node scripts/render-preview.mjs CHEM-ORG-0001 [both|problem|solution]'); process.exitCode = 2; }
  else { try { process.stdout.write(renderPreview(id, process.argv[3] || 'both')); } catch (e) { console.error(e.message); process.exitCode = 1; } }
}
