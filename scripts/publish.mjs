import fs from 'node:fs';import {execFileSync} from 'node:child_process';import {createHash} from 'node:crypto';
import {shouldPublish,parseRegistryIntegrity} from './release-state.mjs';
const tag=process.argv[2];if(!['next','latest'].includes(tag))throw Error('Choose next or latest');
const resume=process.env.RESUME_RELEASE==='true';
if(process.env.GITHUB_ACTIONS!=='true'||!process.env.GITHUB_REPOSITORY)throw Error('Publishing requires the protected GitHub workflow');
function integrityAtRegistry(pkg){
 try{return parseRegistryIntegrity(JSON.parse(execFileSync('npm',['view',`${pkg.name}@${pkg.version}`,'dist.integrity','--json','--registry=https://registry.npmjs.org'],{encoding:'utf8',stdio:'pipe'})));}
 catch(e){if(String(e.stderr).includes('E404'))return null;throw Error('Cannot verify registry state');}
}
const packages=['sdk','mcp-server'].map(name=>{
 const pkg=JSON.parse(fs.readFileSync(`packages/${name}/package.json`));
 if(pkg.repository?.url!==`git+https://github.com/${process.env.GITHUB_REPOSITORY}.git`)throw Error('Repository metadata does not match publishing workflow');
 const artifact=`./artifacts/upon-ai-${name}-${pkg.version}.tgz`;
 const integrity='sha512-'+createHash('sha512').update(fs.readFileSync(artifact)).digest('base64');
 return {pkg,artifact,integrity};
});
// Preflight both packages before any registry write. Resume is explicit and must match bytes.
for(const item of packages)item.publish=shouldPublish(integrityAtRegistry(item.pkg),item.integrity,resume);
for(const {pkg,artifact,integrity,publish} of packages){
 if(!publish){console.log(`Verified existing artifact: ${pkg.name}@${pkg.version}`);continue;}
 execFileSync('npm',['publish',artifact,'--access','public','--provenance','--tag',tag],{stdio:'inherit'});
 // npm may accept an upload several minutes before serving its metadata.
 let ready=false;for(let i=0;i<60;i++){
  const remote=integrityAtRegistry(pkg);
  if(remote){if(remote!==integrity)throw Error('Registry artifact integrity mismatch');ready=true;break;}
  await new Promise(r=>setTimeout(r,10000));
 }
 if(!ready)throw Error('Upload accepted but not visible after 10 minutes; inspect registry before explicit resume');
}
console.log('SDK and MCP registry artifacts verified; validate a clean registry installation before announcing');
