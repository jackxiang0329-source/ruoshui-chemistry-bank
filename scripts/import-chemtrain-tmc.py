#!/usr/bin/env python3
"""Import CC BY 4.0 TMC Learn exercises as UNREVIEWED candidates.

The upstream Python source is parsed as AST, never executed. A pinned commit
and Git blob SHA prevent silent changes. Existing question IDs are never overwritten.
"""
from __future__ import annotations
import argparse
import ast
import hashlib
import json
import os
from pathlib import Path
import re
import sys
import unicodedata
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parent.parent
CONFIG = ROOT / 'harvest' / 'approved_generators.json'
OUT = ROOT / 'data' / 'candidates'
REPORT = ROOT / 'harvest' / 'import_reports' / 'chemtrain_tmc.json'
GROUP = dict(zip(
    'Sc Ti V Cr Mn Fe Co Ni Cu Zn Y Zr Nb Mo Tc Ru Rh Pd Ag Cd Hf Ta W Re Os Ir Pt Au Hg'.split(),
    [3,4,5,6,7,8,9,10,11,12,3,4,5,6,7,8,9,10,11,12,4,5,6,7,8,9,10,11,12],
))
SET_NAMES = ('CORE', 'CARBONYLS', 'PI', 'SQUARE', 'HYDRIDES', 'WERNER')
PARAMS = ('name','formula','metal','charge','ligands','ve','os','geom','note','fam','mm','no_os','shape')
DEFAULTS = {'note':'','fam':None,'mm':0,'no_os':False,'shape':None}

def git_blob_sha(data: bytes) -> str:
    return hashlib.sha1(b'blob ' + str(len(data)).encode() + b'\0' + data).hexdigest()

def question_id(text: str) -> str:
    normalized = ' '.join(unicodedata.normalize('NFKC', text).split()).strip().lower()
    return hashlib.sha256(normalized.encode('utf-8')).hexdigest()

def safe_literal(node: ast.AST, constants: dict):
    """Resolve only AST literals, one allowlisted named string, and string concatenation."""
    if isinstance(node, ast.Name):
        if node.id not in constants:
            raise ValueError('Unapproved upstream name: ' + node.id)
        return constants[node.id]
    if isinstance(node, ast.BinOp) and isinstance(node.op, ast.Add):
        left, right = safe_literal(node.left, constants), safe_literal(node.right, constants)
        if not isinstance(left, str) or not isinstance(right, str) or len(left) + len(right) > 2000:
            raise ValueError('Only short literal string concatenation allowed')
        return left + right
    return ast.literal_eval(node)

def cards_from_source(source: str) -> list[dict]:
    """Accept literal C(...) records in six static sets; never eval or import."""
    module = ast.parse(source)
    assignments = {}
    constants = {}
    for node in module.body:
        if isinstance(node, ast.Assign) and len(node.targets) == 1:
            target = node.targets[0]
            if isinstance(target, ast.Name) and target.id == 'NO_NOTE':
                constants['NO_NOTE'] = ast.literal_eval(node.value)
                if not isinstance(constants['NO_NOTE'], str) or len(constants['NO_NOTE']) > 2000:
                    raise ValueError('Unexpected NO_NOTE constant')
            if isinstance(target, ast.Name) and target.id in SET_NAMES:
                if not isinstance(node.value, ast.List):
                    raise ValueError('Expected static list: ' + target.id)
                assignments[target.id] = node.value.elts
    if set(assignments) != set(SET_NAMES):
        raise ValueError('Missing TMC sets: ' + ', '.join(sorted(set(SET_NAMES) - set(assignments))))
    results, seen = [], set()
    for set_name in SET_NAMES:
        for node in assignments[set_name]:
            if not isinstance(node, ast.Call) or not isinstance(node.func, ast.Name) or node.func.id != 'C':
                raise ValueError('Unexpected expression in ' + set_name)
            if len(node.args) > len(PARAMS):
                raise ValueError('Too many C args')
            card = dict(DEFAULTS)
            for key, value in zip(PARAMS, node.args):
                card[key] = safe_literal(value, constants)
            for kw in node.keywords:
                if kw.arg not in PARAMS or kw.arg in PARAMS[:len(node.args)]:
                    raise ValueError('Duplicate/unknown C keyword')
                card[kw.arg] = safe_literal(kw.value, constants)
            if any(x not in card for x in PARAMS[:8]):
                raise ValueError('Missing C field')
            if not isinstance(card['formula'], str) or not 2 <= len(card['formula']) <= 180:
                raise ValueError('Bad chemical formula')
            if not isinstance(card['name'], str) or not card['name'].strip():
                raise ValueError('Missing complex name')
            if not isinstance(card['ve'], int) or not 0 <= card['ve'] <= 32:
                raise ValueError('Bad electron count')
            if not isinstance(card['os'], int) or not -5 <= card['os'] <= 10:
                raise ValueError('Bad oxidation state')
            if not isinstance(card['no_os'], bool):
                raise ValueError('Invalid no_os flag')
            metal = re.fullmatch(r'([A-Z][a-z]?)(\d*)', card['metal'])
            if not metal or metal.group(1) not in GROUP:
                raise ValueError('Unsupported metal: ' + str(card['metal']))
            card['d_count'] = GROUP[metal.group(1)] - card['os']
            if not 0 <= card['d_count'] <= 10:
                raise ValueError('Invalid d count')
            card['set_name'] = set_name
            unique_key = (card['name'], card['formula'], card['metal'], card['charge'],
                          card['ligands'], card['ve'], card['os'])
            if unique_key not in seen:
                seen.add(unique_key)
                results.append(card)
    return results

def questions_from_card(card: dict):
    f = card['formula']
    yield 'valence_electrons', f'按照 ChemTrain TMC Learn 的电子计数约定，配合物 {f} 中每个金属中心的价电子数是多少？', f"{card['ve']} e⁻"
    if not card['no_os']:
        yield 'oxidation_state', f'按照 ChemTrain TMC Learn 的离子法计数约定，配合物 {f} 中金属的氧化态是多少？', f"{card['os']:+d}" if card['os'] else '0'
        yield 'd_electrons', f'按照 ChemTrain TMC Learn 的电子计数约定，配合物 {f} 中金属的 d 电子数是多少？', f"d^{card['d_count']}"

def fetch_pinned(source: dict, local: str | None = None) -> bytes:
    if local:
        raw = Path(local).read_bytes()
    else:
        url = 'https://raw.githubusercontent.com/' + source['repository'] + '/' + source['commit'] + '/' + source['path']
        with urlopen(Request(url, headers={'User-Agent': 'ruoshui-chemistry-tmc-import/1.0'}), timeout=45) as resp:
            raw = resp.read(2_000_001)
    if len(raw) > 2_000_000:
        raise ValueError('Source exceeds 2MB')
    sha = git_blob_sha(raw)
    if sha != source['blob_sha']:
        raise ValueError('Pinned source Git blob SHA mismatch: ' + sha)
    return raw

def run(source_file: str | None = None) -> dict:
    cfg = json.loads(CONFIG.read_text(encoding='utf-8'))
    if cfg.get('schema_version') != 1 or len(cfg.get('approved_generators', [])) != 1:
        raise ValueError('Expected exactly one approved TMC generator')
    s = cfg['approved_generators'][0]
    if s['id'] != 'chemtrain-tmc-electron-counts' or s['content_rights_verified'] is not True:
        raise ValueError('Rights approval required')
    if s['license'] != 'CC-BY-4.0' or not s.get('attribution'):
        raise ValueError('Content license and attribution required')
    if not re.fullmatch(r'[0-9a-f]{40}', s['commit']) or not re.fullmatch(r'[0-9a-f]{40}', s['blob_sha']):
        raise ValueError('Full pinned commit and blob SHA required')
    raw = fetch_pinned(s, source_file)
    cards = cards_from_source(raw.decode('utf-8'))
    if len(cards) != s['expected_unique_complexes']:
        raise ValueError(f"Unexpected complex count: {len(cards)} != {s['expected_unique_complexes']}")
    added, duplicates, counts, unique_ids = 0, 0, {}, set()
    OUT.mkdir(parents=True, exist_ok=True)
    for card in cards:
        for kind, question, answer in questions_from_card(card):
            qid = question_id(question)
            if qid in unique_ids:
                duplicates += 1
                continue
            unique_ids.add(qid)
            counts[kind] = counts.get(kind, 0) + 1
            path = OUT / (qid + '.json')
            if path.exists():
                duplicates += 1
                continue
            record = {
                'schema_version': 1, 'id': qid, 'subject': 'inorganic',
                'topic': 'transition_metal_electron_counting', 'question_type': kind,
                'question': question, 'answer': answer,
                'quality_status': 'awaiting_expert_review', 'publishable': False,
                'source': {
                    'repository': s['repository'], 'commit': s['commit'],
                    'file': s['path'], 'git_blob_sha': s['blob_sha'],
                    'original_id': card['name'], 'original_set': card['set_name'],
                    'formula': card['formula'], 'license': s['license'],
                    'attribution': s['attribution'], 'content_rights_verified': True,
                    'license_evidence': s['license_evidence'],
                    'url': 'https://github.com/' + s['repository'] + '/blob/' + s['commit'] + '/' + s['path'],
                    'changes': 'Generated Chinese question prompts from licensed source card fields; no structure drawings or textbook passages copied.',
                },
            }
            path.write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
            added += 1
    report = {
        'schema_version': 1, 'generator': s['id'], 'source_repository': s['repository'],
        'source_commit': s['commit'], 'source_git_blob_sha': s['blob_sha'],
        'content_license': s['license'], 'attribution': s['attribution'],
        'unique_source_complexes': len(cards), 'generated_unique_question_variants': len(unique_ids),
        'by_question_type': counts, 'subject': 'inorganic',
        'review_status': 'awaiting_expert_review', 'publishable': False,
        'note': 'Generated variants are not independent source cards; chemical expert review still required.',
    }
    REPORT.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(report, ensure_ascii=False, indent=2) + '\n'
    if not REPORT.exists() or REPORT.read_text(encoding='utf-8') != payload:
        REPORT.write_text(payload, encoding='utf-8')
    message = f"TMC Learn pinned CC BY 4.0: {len(cards)} complexes, {len(unique_ids)} unique question variants; new={added}, already-present/duplicate={duplicates}; NOT expert-reviewed."
    print(message)
    if os.getenv('GITHUB_STEP_SUMMARY'):
        with open(os.environ['GITHUB_STEP_SUMMARY'], 'a', encoding='utf-8') as fh:
            fh.write('### Pinned ChemTrain TMC Learn import\n- ' + message + '\n')
    return {'cards':len(cards), 'variants':len(unique_ids), 'added':added, 'duplicates':duplicates}

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--source-file', help='Offline reproduction with a pinned local source file')
    args = parser.parse_args()
    try:
        run(args.source_file)
    except (ValueError, OSError, SyntaxError, KeyError, UnicodeError) as exc:
        print('TMC import blocked: ' + str(exc), file=sys.stderr)
        sys.exit(1)
