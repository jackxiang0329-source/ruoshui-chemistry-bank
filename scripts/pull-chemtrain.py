#!/usr/bin/env python3
"""Pull all eight fixed ChemTrain repos to temporary checkout; optionally copy missing source files."""
import argparse, json, shutil, subprocess
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
LOCK=ROOT/'third_party/ChemTrain/SOURCE_LOCK.json'
def run(*cmd,cwd=None):return subprocess.run(['git',*map(str,cmd)],cwd=cwd,check=True,capture_output=True,text=True).stdout.strip()
def main():
 p=argparse.ArgumentParser()
 p.add_argument('--destination',type=Path,default=ROOT/'.tmp/chemtrain-full')
 p.add_argument('--complete-vendor',action='store_true')
 args=p.parse_args();args.destination.mkdir(parents=True,exist_ok=True)
 sources=json.loads(LOCK.read_text(encoding='utf8'))['sources'];added=0
 for src in sources:
  name=src['repository'].split('/')[1];folder=args.destination/name
  if not (folder/'.git').is_dir():
   if folder.exists():raise RuntimeError(f'Non-git destination: {folder}')
   run('clone','--filter=blob:none','--no-checkout','https://github.com/'+src['repository']+'.git',folder)
  run('fetch','--filter=blob:none','origin',src['revision'],cwd=folder)
  run('checkout','--detach',src['revision'],cwd=folder)
  for item in src['all_upstream_files']:
   path=Path(item['path'])
   if path.is_absolute() or '..' in path.parts:raise ValueError('Invalid source path')
   actual=run('hash-object',str(path),cwd=folder)
   if actual!=item['sha']:raise RuntimeError('SHA mismatch: '+str(path))
   if args.complete_vendor:
    target=ROOT/'third_party/ChemTrain'/name/path
    if target.exists():
     if run('hash-object',target)!=item['sha']:raise RuntimeError('Pinned file changed: '+str(target))
    else:
     target.parent.mkdir(parents=True,exist_ok=True)
     shutil.copy2(folder/path,target);added+=1
  print(name,src['revision'],'verified',len(src['all_upstream_files']))
 print('Repositories:',len(sources),'missing source files copied:',added)
if __name__=='__main__':main()
