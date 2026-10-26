#!/usr/bin/env node
// Repository discovery only; a repository license is not necessarily question-content rights.
import {readFileSync, writeFileSync, appendFileSync, existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';
const root = new URL('../', import.meta.url);
const configPath = new URL('harvest/search_queries.json', root);
const catalogPath = new URL('harvest/source_candidates.json', root);
const token = process.env.GITHUB_TOKEN;
const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'ruoshui-chemistry-harvest',
  'X-GitHub-Api-Version': '2022-11-28'
};
if (token) headers.Authorization = 'Bearer ' + token;

export function subjects(value) {
  const t = String(value || '').toLowerCase();
  const rules = [
    ['inorganic', /inorganic|无机化学|无机/],
    ['organic', /organic|有机化学|有机/],
    ['analytical', /analytical|分析化学|色谱|滴定|titration|chromatograph/],
    ['physical', /physical chemistry|物理化学|热力学|动力学|thermodynamic|kinetic/]
  ];
  const hits = rules.filter(([,re]) => re.test(t)).map(([name]) => name);
  return hits.length ? hits : ['general'];
}

export function canonicalRepo(record, today) {
  const full = String(record.full_name || '');
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(full)) return null;
  const desc = String(record.description || '').slice(0, 600);
  const topics = Array.isArray(record.topics) ? record.topics.filter(x => typeof x === 'string').slice(0, 25) : [];
  const searchable = [full, desc, topics.join(' ')].join(' ').toLowerCase();
  if (!/chem|化学|molecul|reaction|spectroscop|titration/.test(searchable)) return null;
  return {
    repository: full, url: 'https://github.com/' + full, description: desc,
    subjects: subjects(searchable), topics,
    default_branch: String(record.default_branch || 'main'),
    repository_license_spdx: String(record.license?.spdx_id || 'UNKNOWN'),
    license_scope: 'repository_metadata_only_not_question_rights',
    archived: Boolean(record.archived), fork: Boolean(record.fork),
    last_upstream_push: String(record.pushed_at || ''),
    first_discovered: today, status: 'unreviewed_not_importable'
  };
}
async function githubSearch(q, limit) {
  const url = 'https://api.github.com/search/repositories?q=' +
    encodeURIComponent(q) + '&sort=updated&order=desc&per_page=' + limit;
  const response = await fetch(url, {headers, signal: AbortSignal.timeout(25000)});
  if (!response.ok) throw Error('GitHub search failed with HTTP ' + response.status + ' for ' + q);
  const json = await response.json();
  if (!Array.isArray(json.items)) throw Error('Invalid GitHub API response');
  return json.items;
}
function summary(lines) {
  console.log(lines.join('\n'));
  if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, lines.join('\n') + '\n');
}
export async function run() {
  if (!token) throw Error('GITHUB_TOKEN is required');
  const cfg = JSON.parse(readFileSync(configPath, 'utf8'));
  if (!Array.isArray(cfg.queries) || !Number.isInteger(cfg.max_catalog_entries)) throw Error('Invalid search configuration');
  const old = existsSync(catalogPath) ? JSON.parse(readFileSync(catalogPath,'utf8')) : {schema_version:1,sources:[]};
  if (old.schema_version !== 1 || !Array.isArray(old.sources)) throw Error('Unexpected candidate schema');
  const map = new Map(old.sources.map(x => [x.repository.toLowerCase(),x]));
  const today = new Date().toISOString().slice(0,10);
  let hits=0, added=0, updated=0, capped=0;
  for (const query of cfg.queries) {
    const rows = await githubSearch(query, Math.min(cfg.per_query,30));
    for (const row of rows) {
      hits++;
      const candidate = canonicalRepo(row,today);
      if (!candidate) continue;
      const key = candidate.repository.toLowerCase(), prev=map.get(key);
      if (!prev && map.size >= cfg.max_catalog_entries) {capped++;continue;}
      if (!prev) {map.set(key,candidate);added++;continue;}
      const merged = {...candidate,first_discovered:prev.first_discovered,status:prev.status};
      if (JSON.stringify(merged)!==JSON.stringify(prev)) {map.set(key,merged);updated++;}
    }
  }
  const sources = [...map.values()].sort((a,b) => a.repository.toLowerCase().localeCompare(b.repository.toLowerCase(),'en'));
  const content = JSON.stringify({schema_version:1,sources},null,2)+'\n';
  if (!existsSync(catalogPath) || readFileSync(catalogPath,'utf8')!==content) writeFileSync(catalogPath,content);
  summary(['### Chemistry source discovery','- Search hits including repeats: '+hits,
   '- Newly discovered repositories: '+added,'- Updated repository metadata: '+updated,
   '- Current source candidates: '+sources.length,'- Over catalog limit: '+capped,
   '- All sources are marked unreviewed; no question text is copied by discovery.']);
}
if (process.argv[1] && resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  run().catch(e => {console.error(e.message);process.exitCode=1;});
}
