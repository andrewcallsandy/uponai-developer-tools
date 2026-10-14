import fs from 'node:fs';import assert from 'node:assert/strict';
// No credentials needed: the production public contract must be genuinely public.
const local=JSON.parse(fs.readFileSync(new URL('../contract/openapi.json',import.meta.url)));
const response=await fetch('https://api.upon-ai.com/openapi.json',{redirect:'error',signal:AbortSignal.timeout(20000)});
if(!response.ok)throw Error(`Release blocked: production public contract returned HTTP ${response.status}`);
if(Number(response.headers.get('content-length'))>5*1024*1024)throw Error('Oversized contract');
const chunks=[];let size=0;for await(const chunk of response.body){size+=chunk.length;if(size>5*1024*1024)throw Error('Oversized contract');chunks.push(chunk);}
const text=Buffer.concat(chunks).toString('utf8');
assert.deepEqual(JSON.parse(text),local,'Release blocked: production contract does not match reviewed package contract');
console.log('Production contract matches the reviewed package contract');
