import test from 'node:test';import assert from 'node:assert/strict';import {classify} from '../lib/engine.mjs';
const base={revenue:100,cost:60,claimedMargin:40,sourceNotes:'Illustrative inputs',assistance:'none',isSynthetic:true};
test('consistent values do not establish verified authorship',()=>{const x=classify(base);assert(x.items.some(i=>i.category==='INFERRED'));assert(x.items.some(i=>i.category==='UNVERIFIED'));assert(x.prohibited.includes('Automatically hire or reject'));});
test('missing inputs remain missing',()=>assert(classify({...base,revenue:null}).items.some(i=>i.category==='MISSING')));
test('contradictory margin is flagged',()=>assert.match(classify({...base,claimedMargin:90}).items.find(i=>i.criterion==='Margin consistency').supports,/disagreement/));
test('AI disclosure does not establish independent performance',()=>assert(classify({...base,assistance:'ai'}).items.find(i=>i.criterion==='Authorship and assistance').category==='UNVERIFIED'));
test('zero revenue must not divide by zero',()=>assert(classify({...base,revenue:0}).items.some(i=>i.criterion==='Margin computation'&&i.category==='MISSING')));
test('no source remains missing',()=>assert(classify({...base,sourceNotes:''}).items.some(i=>i.criterion==='Source explanation'&&i.category==='MISSING')));
test('summary labels synthetic',()=>assert.equal(classify(base).isSynthetic,true));
