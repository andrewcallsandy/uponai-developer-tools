import fs from 'node:fs';
const repository=process.argv[2];if(!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repository||''))throw Error('Usage: node scripts/set-repository.mjs OWNER/REPOSITORY');
for(const name of ['sdk','mcp-server']){const p=`packages/${name}/package.json`,data=JSON.parse(fs.readFileSync(p));data.repository={type:'git',url:`git+https://github.com/${repository}.git`,directory:`packages/${name}`};data.bugs={url:`https://github.com/${repository}/issues`};fs.writeFileSync(p,JSON.stringify(data,null,2)+'\n');}
console.log('Repository metadata configured; run npm install --package-lock-only --ignore-scripts');
