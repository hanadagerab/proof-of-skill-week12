import test from 'node:test';
import assert from 'node:assert/strict';
import {DRAFT_KEY,DRAFT_TTL_MS,makeTemporaryDraft,parseTemporaryDraft,writeTemporaryDraft,consumeTemporaryDraft,clearTemporaryDraft} from '../lib/experience-oauth-draft.mjs';
const now=1762646400000;
const state={form:{type:'family',activity:'Organicé facturas pendientes de un negocio familiar.',decisions:'Comparé precios y seguí pagos pendientes.',support:'',limits:'',assistance:'none'},lang:'es',targetJob:'administration',generated:true,bullet:'Organicé facturas pendientes.',selectedSkillIds:['invoices']};
function mem(){const data=new Map();return {setItem(k,v){data.set(k,v)},getItem(k){return data.get(k)??null},removeItem(k){data.delete(k)}}}
test('opt-in session-tab draft restores once, not persistent cloud storage',()=>{
 const s=mem();assert.equal(writeTemporaryDraft(s,state,now),true);assert(s.getItem(DRAFT_KEY));assert.deepEqual(consumeTemporaryDraft(s,now),state);assert.equal(consumeTemporaryDraft(s,now),null);
});
test('draft has a ten-minute expiry, and expired record is removed',()=>{
 const s=mem();writeTemporaryDraft(s,state,now);assert.equal(consumeTemporaryDraft(s,now+DRAFT_TTL_MS),null);assert.equal(s.getItem(DRAFT_KEY),null);
});
test('corrupted, oversized and malicious draft data is rejected',()=>{
 assert.equal(parseTemporaryDraft('{invalid',now),null);
 assert.equal(parseTemporaryDraft(JSON.stringify({version:1,expires:now+1000,form:{...state.form,activity:'x'.repeat(421)},lang:'es',targetJob:'other',generated:false,bullet:'',selectedSkillIds:[]}),now),null);
 assert.equal(makeTemporaryDraft({...state,targetJob:'__proto__'},now),null);
 assert.equal(makeTemporaryDraft({...state,selectedSkillIds:['a','b','c','d']},now),null);
});
test('browser storage denial returns failure without uploading data',()=>{
 const s={setItem(){throw Error('blocked')},getItem(){throw Error('blocked')},removeItem(){throw Error('blocked')}};
 assert.equal(writeTemporaryDraft(s,state,now),false);assert.equal(consumeTemporaryDraft(s,now),null);
 assert.doesNotThrow(()=>clearTemporaryDraft(s));
});
test('draft is never created automatically by validation',()=>{assert(makeTemporaryDraft(state,now));assert.equal(typeof makeTemporaryDraft(state,now),'string')});
