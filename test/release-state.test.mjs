import {test} from 'node:test';import assert from 'node:assert/strict';
import {shouldPublish,parseRegistryIntegrity} from '../scripts/release-state.mjs';
test('new versions may publish; existing versions require explicit resume',()=>{
 assert.equal(shouldPublish(null,'sha512-expected',false),true);
 assert.throws(()=>shouldPublish('sha512-expected','sha512-expected',false),/explicitly resume/);
});
test('resume only accepts an identical already-published artifact',()=>{
 assert.equal(shouldPublish('sha512-expected','sha512-expected',true),false);
 assert.throws(()=>shouldPublish('sha512-other','sha512-expected',true),/differs/);
});

test('registry integrity supports npm 10 strings and npm 12 singleton arrays',()=>{
 const digest='sha512-YWJjZA==';
 assert.equal(parseRegistryIntegrity(digest),digest);
 assert.equal(parseRegistryIntegrity([digest]),digest);
 assert.throws(()=>parseRegistryIntegrity([digest,digest]),/Unexpected/);
 assert.throws(()=>parseRegistryIntegrity({integrity:digest}),/Unexpected/);
});
