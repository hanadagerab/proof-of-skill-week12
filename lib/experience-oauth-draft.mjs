/** A user-opted-in, single-tab OAuth draft. Never auto-persist or send it to a server.
 * sessionStorage is readable by scripts on this origin: forbid confidential material.
 * Short expiry, one-use restore, strict field bounds and no cross-origin storage. */
export const DRAFT_KEY='proof-of-skill:experience:oauth-draft:v1';
export const DRAFT_TTL_MS=10*60*1000;
const choices={type:['job','internship','academic','informal','family'],assistance:['unspecified','none','ai','other'],lang:['en','es'],targetJob:['unspecified','administration','operations','analyst','other']};
const max={activity:420,decisions:360,support:360,limits:360};
export function parseTemporaryDraft(raw,now=Date.now()){
 try{
  if(typeof raw!=='string'||raw.length>4500)return null;
  const data=JSON.parse(raw);
  if(!data||data.version!==1||!Number.isFinite(data.expires)||data.expires<=now||data.expires>now+DRAFT_TTL_MS)return null;
  if(!choices.lang.includes(data.lang)||!choices.targetJob.includes(data.targetJob))return null;
  const f=data.form;
  if(!f||!choices.type.includes(f.type)||!choices.assistance.includes(f.assistance))return null;
  for(const [k,n] of Object.entries(max)) if(typeof f[k]!=='string'||f[k].length>n)return null;
  if(typeof data.generated!=='boolean'||typeof data.bullet!=='string'||data.bullet.length>430)return null;
  if(!Array.isArray(data.selectedSkillIds)||data.selectedSkillIds.length>3||
    data.selectedSkillIds.some(x=>typeof x!=='string'||x.length>35))return null;
  return {form:{type:f.type,assistance:f.assistance,activity:f.activity,decisions:f.decisions,support:f.support,limits:f.limits},
    lang:data.lang,targetJob:data.targetJob,generated:data.generated,bullet:data.bullet,selectedSkillIds:data.selectedSkillIds};
 }catch{return null}
}
export function makeTemporaryDraft(state,now=Date.now()){
 const raw=JSON.stringify({version:1,expires:now+DRAFT_TTL_MS,...state});
 if(!parseTemporaryDraft(raw,now))return null;
 return raw;
}
export function writeTemporaryDraft(storage,state,now=Date.now()){
 const payload=makeTemporaryDraft(state,now);
 if(!payload)return false;
 try{storage.setItem(DRAFT_KEY,payload);return true}catch{return false}
}
export function consumeTemporaryDraft(storage,now=Date.now()){
 let raw=null;
 try{raw=storage.getItem(DRAFT_KEY);storage.removeItem(DRAFT_KEY)}catch{return null}
 return parseTemporaryDraft(raw,now);
}
export function clearTemporaryDraft(storage){try{storage.removeItem(DRAFT_KEY)}catch{/* Storage can be disabled */}}
