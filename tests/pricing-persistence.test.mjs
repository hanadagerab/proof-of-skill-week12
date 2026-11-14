import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const source=readFileSync(new URL('../app/employer-pilot/page.tsx',import.meta.url),'utf8');
test('scenario tabs preserve separate saved associations',()=>{assert.match(source,/const \{id,name\}=links\[side\]/);assert.match(source,/onClick=\{\(\)=>setSide\(s\)\}/);assert.match(source,/\[target\]:\{id:data.id,name:payload.name\}/);assert.doesNotMatch(source,/setId\(/)});
test('same user events preserve editing state and owner transitions clear it',()=>{assert.match(source,/if\(owner.current===next\)return/);assert.match(source,/generation.current\+\+/);assert.match(source,/setSaved\(\[\]\);setLinks/);assert.match(source,/if\(previous!==null\)\{clear\(\);setA\(\{\.\.\.defaults\}\);setB\(\{\.\.\.defaults,price:1500\}\);setSide\('A'\);setOauthStatus\(''\)\}/);assert.match(source,/if\(epoch!==generation.current\)return/)});
test('save versus explicit duplication and error handling',()=>{assert.match(source,/id&&!copy\?db.from\('pricing_scenarios'\).update/);assert.match(source,/onClick=\{\(\)=>save\(true\)\}/);assert.match(source,/Unable to save/);});
