import test from 'node:test';
import assert from 'node:assert/strict';
import {calculate,defaults,validate,OFFER} from '../lib/pricing-model.mjs';
test('approved default economics',()=>{const r=calculate(defaults);assert.equal(r.cost,1700);assert.equal(r.contribution,800);assert.equal(r.margin,32);assert.equal(r.expenditure,3400);assert.equal(r.threshold3,10200);assert.equal(r.threshold10,34000);assert.equal(r.ratio,null);assert.equal(r.effort,5);assert.equal(r.freed,1);});
test('historical offer does not change public price',()=>{assert.equal(calculate({...defaults,price:1500}).contribution,-200);assert.equal(OFFER,2500)});
test('ROI vs ratio',()=>{const r=calculate({...defaults,benefit:10200});assert.equal(r.ratio,3);assert.equal(r.roi,200);assert.equal(calculate({...defaults,benefit:0}).roi,-100)});
test('zero denominators',()=>{const r=calculate({...defaults,price:0,interviews:0});assert.equal(r.margin,null);assert.equal(r.ratio,null)});
test('reject bad input',()=>{for(const x of [{price:-1},{price:NaN},{price:1.001},{cohort:2.5},{participants:21},{cohort:3},{benefit:Infinity},{unknown:1}])assert.throws(()=>validate({...defaults,...x}))});
test('unknown outcomes and negative capacity',()=>{assert.equal(calculate(defaults).consideration,null);assert.equal(calculate({...defaults,pilotMinutes:13}).freed,-1)});
