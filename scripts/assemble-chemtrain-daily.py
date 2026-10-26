#!/usr/bin/env python3
"""Reassemble ChemTrain Daily's 11 Git blobs and verify the original SHA-1."""
import argparse, hashlib, json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
BASE=ROOT/'third_party'/'ChemTrain'/'chemtrain-daily'
LOCK=json.loads((ROOT/'third_party/ChemTrain/SOURCE_LOCK.json').read_text(encoding='utf-8'))
SOURCE=next(s for s in LOCK['sources'] if s['repository']=='ChemTrain/chemtrain-daily')
ENTRY=SOURCE['reconstructed_files'][0]
def run(output):
    parts=[(BASE/p['path']).read_bytes() for p in ENTRY['parts']]
    data=b''.join(parts)
    sha=hashlib.sha1(b'blob '+str(len(data)).encode()+b'\0'+data).hexdigest()
    if sha!=ENTRY['sha']:raise RuntimeError('Original Git Blob SHA mismatch: '+sha)
    output.parent.mkdir(parents=True,exist_ok=True)
    if output.exists() and output.read_bytes()!=data:
        raise RuntimeError('Refusing to overwrite a different file: '+str(output))
    output.write_bytes(data)
    print('Reconstructed',output,'bytes',len(data),'Git blob SHA',sha)
if __name__=='__main__':
    parser=argparse.ArgumentParser()
    parser.add_argument('--output',type=Path,default=ROOT/'.tmp'/'chemtrain_daily.html')
    args=parser.parse_args();run(args.output)
