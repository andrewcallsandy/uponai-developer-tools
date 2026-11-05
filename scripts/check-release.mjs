import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';
const forbidden=new RegExp(['re'+'tell','jam'+'bonz','X-Actor-Type','X-Provider-Id','X-Tenant-Id','X-Impersonation-Reason'].join('|'),'i');
const root=JSON.parse(fs.readFileSync('package.json'));
for(const name of ['sdk','mcp-server']){
 const dir='packages/'+name,pkg=JSON.parse(fs.readFileSync(dir+'/package.json'));
 assert.equal(pkg.name,'@upon-ai/'+name);assert.equal(pkg.version,root.version);assert.equal(pkg.license,'MIT');assert(!pkg.private);
 const readme=fs.readFileSync(dir+'/README.md','utf8');
 const pins=[...readme.matchAll(/@upon-ai\/(?:sdk|mcp-server)@(\d+\.\d+\.\d+)/g)];
 assert(pins.length>0,'Missing pinned install example in '+dir);
 for(const pin of pins)assert.equal(pin[1],root.version,'Stale install example in '+dir);
 if(name==='mcp-server')assert.equal(pkg.dependencies['@upon-ai/sdk'],root.version);
 assert(fs.readFileSync(dir+'/LICENSE','utf8').includes('Copyright (c) 2026 UponAI'));
 const scan=dir=>{for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const file=path.join(dir,entry.name);if(entry.isDirectory())scan(file);else{const text=fs.readFileSync(file,'utf8');assert(!forbidden.test(text),'Non-public branding/header in '+file);assert(!/npm_[A-Za-z0-9]{20,}|AIza[A-Za-z0-9_-]{30,}/.test(text),'Possible credential in '+file);}}};
 scan(dir+'/dist');assert(fs.statSync(dir+'/dist/index.d.ts').size>0);
}
assert(fs.readFileSync('README.md','utf8').includes('@upon-ai/sdk@'+root.version));
assert(fs.readFileSync('packages/mcp-server/src/index.ts','utf8').includes("version:'"+root.version+"'"));
console.log('Package metadata, declarations, branding and secret-pattern checks passed');
