import fs from 'node:fs';import os from 'node:os';import path from 'node:path';import {execFileSync} from 'node:child_process';
fs.mkdirSync('artifacts',{recursive:true});
const artifacts=[];
for(const name of ['sdk','mcp-server']){
 const result=JSON.parse(execFileSync('npm',['pack','--workspace','@upon-ai/'+name,'--pack-destination','artifacts','--json','--ignore-scripts'],{encoding:'utf8'}))[0];
 if(result.files.some(f=>!(/^(dist\/|README.md$|LICENSE$|package.json$)/.test(f.path))))throw Error('Unexpected packaged file');
 artifacts.push(path.resolve('artifacts',result.filename));
}
const consumer=fs.mkdtempSync(path.join(os.tmpdir(),'uponai-consumer-'));
fs.writeFileSync(path.join(consumer,'package.json'),JSON.stringify({name:'uponai-consumer-check',private:true,type:'module'}));
execFileSync('npm',['install','--ignore-scripts','--no-audit','--no-fund',...artifacts],{cwd:consumer,stdio:'pipe'});
execFileSync(process.execPath,['--input-type=module','-e',`import { UponAI } from '@upon-ai/sdk'; import { createMcpServer } from '@upon-ai/mcp-server'; if(typeof UponAI!=='function'||typeof createMcpServer!=='function')throw Error('Broken package exports');`],{cwd:consumer,stdio:'pipe'});
execFileSync(process.execPath,['-e',`(async()=>{const m=await import('@upon-ai/sdk');if(!m.UponAI)throw Error('CommonJS import failed')})()`],{cwd:consumer,stdio:'pipe'});
const bin=path.join(consumer,'node_modules/.bin/uponai-mcp');if(!fs.existsSync(bin))throw Error('Missing MCP executable');
fs.writeFileSync('artifacts/pack-report.json',JSON.stringify({packages:artifacts.map(p=>path.basename(p)),consumerInstall:'passed',esmImport:'passed',commonJsDynamicImport:'passed',mcpExecutable:'present'},null,2)+'\n');
console.log('Both tarballs installed and imported successfully; MCP executable present');
