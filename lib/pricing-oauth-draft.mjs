import {validate} from './pricing-model.mjs';
export const DRAFT_KEY='pos:employer:oauth-draft:v1';
export const DRAFT_TTL=600000;
export function clearDraft(storage){try{storage.removeItem(DRAFT_KEY);return true}catch{return false}}
function validDraft(x){if(!x||Object.keys(x).sort().join(',')!=='a,b,expires,side,v'||x.v!==1||!['A','B'].includes(x.side)||!Number.isSafeInteger(x.expires))throw Error('Invalid draft');return {a:validate(x.a),b:validate(x.b),side:x.side,expires:x.expires,v:1}}
export function storeDraft(storage,{a,b,side},consent,now=Date.now()){
 if(!consent)return {status:clearDraft(storage)?'declined':'blocked'};
 let payload;try{payload=validDraft({a,b,side,v:1,expires:now+DRAFT_TTL})}catch{return {status:'invalid'}}
 try{storage.setItem(DRAFT_KEY,JSON.stringify(payload));return {status:'stored'}}catch{return {status:'blocked'}}
}
export function consumeDraft(storage,now=Date.now()){
 let raw;try{raw=storage.getItem(DRAFT_KEY);storage.removeItem(DRAFT_KEY)}catch{return {status:'blocked'}}
 if(!raw)return {status:'missing'};
 try{const draft=validDraft(JSON.parse(raw));if(draft.expires<=now||draft.expires>now+DRAFT_TTL)return {status:'expired'};return {status:'restored',draft}}catch{return {status:'invalid'}}
}
export function oauthReturn(origin){return new URL('/employer-pilot?oauth_return=1',origin).href}
export function oauthOutcome(search,hash){const q=new URLSearchParams(search),h=new URLSearchParams(hash.replace(/^#/,''));return q.has('error')||q.has('error_code')||h.has('error')||h.has('error_code')?'error':q.get('oauth_return')==='1'?'return':'none'}
