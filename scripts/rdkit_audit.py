#!/usr/bin/env python3
"""Read-only RDKit structural audit: no content deletion or chemistry certification."""
import json
import re
from collections import Counter, defaultdict
from pathlib import Path
from rdkit import Chem, RDLogger
from rdkit.Chem import rdMolDescriptors

RDLogger.DisableLog('rdApp.error')
ROOT = Path(__file__).resolve().parent.parent
CATEGORIES = ('nmr_elucidation','counting_carbon','counting_ring','shortest_path',
              'atom_mapping','smiles_to_iupac','sar','reaction')

def atom_counts(formula):
    """Compare only unambiguous neutral, ungrouped formulas; skip hydrates."""
    formula = str(formula).strip()
    tokens = re.findall(r'([A-Z][a-z]?)([0-9]*)',formula)
    if not tokens or ''.join(a+b for a,b in tokens)!=formula:
        return None
    counts=Counter()
    for element,amount in tokens:
        counts[element]+=int(amount) if amount else 1
    return dict(counts)

def parse_smiles(smiles):
    mol=Chem.MolFromSmiles(smiles)
    if mol is None:
        return None
    return {'canonical':Chem.MolToSmiles(mol,canonical=True,isomericSmiles=True),
      'formula':rdMolDescriptors.CalcMolFormula(mol),
      'num_carbon_atoms':sum(atom.GetAtomicNum()==6 for atom in mol.GetAtoms()),
      'num_sssr_rings':len(Chem.GetSymmSSSR(mol))}

def read_jsonl(path):
    return [json.loads(line) for line in path.read_text(encoding='utf8').splitlines() if line.strip()]

def run(root=ROOT):
    imports=root/'imports'
    records=read_jsonl(imports/'chemquiz'/'name-to-formula.jsonl')
    groups=defaultdict(list)
    bad_structure=[]; formula_conflicts=[]; formula_not_comparable=0; valid=0
    for record in records:
        smiles=str(record.get('smiles') or '').strip()
        if not smiles: continue
        info=parse_smiles(smiles)
        if info is None:
            bad_structure.append({'id':record['external_id'],'smiles':smiles})
            continue
        valid+=1
        groups[info['canonical']].append({'id':record['external_id'],
          'name':record['name_en'],'formula':record.get('answer'),
          'canonical_smiles':info['canonical']})
        target=atom_counts(record.get('answer',''))
        actual=atom_counts(info['formula'])
        if target is None or actual is None:
            formula_not_comparable+=1
        elif target!=actual:
            formula_conflicts.append({'id':record['external_id'],'name':record['name_en'],
              'declared_formula':record.get('answer'),'rdkit_formula':info['formula'],
              'canonical_smiles':info['canonical']})
    duplicate_groups=[g for g in groups.values() if len(g)>1]
    categories={}; structure_errors=[]; carbon_errors=[]; iupac_ref_smiles=0
    for category in CATEGORIES:
        questions=read_jsonl(imports/'chemiq'/(category+'.jsonl'))
        categories[category]=len(questions)
        for q in questions:
            metadata=q.get('meta_data') or {}
            if category=='smiles_to_iupac':
                answer=parse_smiles(str(q.get('answer') or ''))
                expected=parse_smiles(str(metadata.get('smiles') or ''))
                if answer is None or expected is None or answer['canonical']!=expected['canonical']:
                    structure_errors.append(q['uuid'])
                if q.get('answer')==metadata.get('smiles'):
                    iupac_ref_smiles+=1
            if category=='counting_carbon':
                info=parse_smiles(str(metadata.get('smiles_random') or metadata.get('smiles') or ''))
                if info is None:
                    structure_errors.append(q['uuid'])
                elif info['num_carbon_atoms']!=q['answer']:
                    carbon_errors.append(q['uuid'])
    return {'audit_type':'diagnostic_only_not_publication_approval',
      'chemquiz':{'total':len(records),'valid_smiles':valid,'unparseable':bad_structure,
        'formula_mismatches':formula_conflicts,'formula_not_comparable':formula_not_comparable,
        'canonical_smiles_duplicate_groups':len(duplicate_groups),
        'candidate_groups':duplicate_groups[:40]},
      'chemiq':{'categories':categories,'iupac_reference_answer_encoded_as_smiles':iupac_ref_smiles,
        'invalid_or_different_structure_refs':structure_errors[:40],
        'carbon_count_disagreements':carbon_errors[:40]},
      'notes':['Do not remove questions by canonical SMILES alone.',
        'Formula comparison skips hydrates and grouped formulae.',
        'Crystal allotropes cannot be represented by methane SMILES C.',
        'RDKit cannot independently prove experimental reactions, third-party rights or structure names.']}

if __name__=='__main__':
    print(json.dumps(run(),ensure_ascii=False,indent=2))
