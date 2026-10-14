import fs from 'node:fs';import {execFileSync} from 'node:child_process';
const tag=process.argv[2];if(!['next','latest'].includes(tag))throw Error('Choose next or latest');
if(process.env.GITHUB_ACTIONS!=='true'||!process.env.GITHUB_REPOSITORY)throw Error('Publishing requires the protected GitHub workflow');
for(const name of ['sdk','mcp-server']){
 const p=JSON.parse(fs.readFileSync(`packages/${name}/package.json`));
 if(p.repository?.url!==`git+https://github.com/${process.env.GITHUB_REPOSITORY}.git`)throw Error('Repository metadata does not match publishing workflow');
 // Never overwrite or silently skip a package version: investigate partial release first.
 let found=false;
 try{execFileSync('npm',['view',`${p.name}@${p.version}`,'version','--registry=https://registry.npmjs.org'],{stdio:'pipe'});found=true;}
 catch(e){if(!String(e.stderr).includes('E404'))throw Error('Cannot verify version availability');}
 if(found)throw Error(`Version already exists: ${p.name}@${p.version}; inspect partial release before continuing`);
}
for(const name of ['sdk','mcp-server']){
 const p=JSON.parse(fs.readFileSync(`packages/${name}/package.json`));
 execFileSync('npm',['publish',`artifacts/upon-ai-${name}-${p.version}.tgz`,'--access','public','--provenance','--tag',tag],{stdio:'inherit'});
 // Let registry visibility settle before publishing a dependent package.
 let ready=false;for(let i=0;i<6;i++){try{execFileSync('npm',['view',`${p.name}@${p.version}`,'dist.integrity'],{stdio:'pipe'});ready=true;break;}catch{await new Promise(r=>setTimeout(r,3000));}}
 if(!ready)throw Error('Published package is not visible yet; stop and inspect registry');
}
console.log('Published SDK and MCP; verify a clean registry installation before announcing');
