export const OFFER=2500;
export const categories=['acquisition','onboarding','review','delivery','support','corrections','exceptions'];
export const defaults={price:2500,acquisition:300,onboarding:150,review:650,delivery:250,support:150,corrections:100,exceptions:100,interviews:3,interviewCost:300,other:0,benefit:null,cohort:20,participants:20,cvMinutes:10,pilotMinutes:7,extraMinutes:15,baselineEffort:null,pilotEffort:null,baselineConsidered:null,pilotConsidered:null,rate:null};
const optional=new Set(['benefit','baselineEffort','pilotEffort','baselineConsidered','pilotConsidered','rate']);
const counts=new Set(['cohort','participants','interviews','baselineConsidered','pilotConsidered']);
const minutes=new Set(['cvMinutes','pilotMinutes','extraMinutes','baselineEffort','pilotEffort']);
export function validate(x){
 if(!x||typeof x!=='object'||Array.isArray(x)||Object.keys(x).length!==Object.keys(defaults).length)throw Error('Invalid scenario');
 for(const k of Object.keys(defaults)){
 const n=x[k];if(n===null&&optional.has(k))continue;
 const max=counts.has(k)?20:minutes.has(k)?1440:10000000;
 if(typeof n!=='number'||!Number.isFinite(n)||n<0||n>max||(counts.has(k)?!Number.isInteger(n):Math.abs(n*100-Math.round(n*100))>1e-6))throw Error('Invalid '+k);
 }
 if(x.participants>x.cohort||x.baselineConsidered>x.cohort||x.pilotConsidered>x.cohort)throw Error('Invalid cohort');
 return x;
}
export function calculate(input){
 const x=validate(input), cents=n=>Math.round(n*100), p=cents(x.price), s=categories.reduce((a,k)=>a+cents(x[k]),0), e=p+x.interviews*cents(x.interviewCost)+cents(x.other), b=x.benefit===null?null:cents(x.benefit);
 const freed=x.cohort*(x.cvMinutes-x.pilotMinutes)/60;
 return {cost:s/100,contribution:(p-s)/100,margin:p?100*(p-s)/p:null,expenditure:e/100,threshold3:3*e/100,threshold10:10*e/100,ratio:e&&b!==null?b/e:null,roi:e&&b!==null?100*(b-e)/e:null,baselineHours:x.cohort*x.cvMinutes/60,pilotHours:x.cohort*x.pilotMinutes/60,freed,capacityValue:x.rate===null?null:freed*x.rate,effort:x.participants*x.extraMinutes/60,baselineCandidateHours:x.baselineEffort===null?null:x.cohort*x.baselineEffort/60,pilotCandidateHours:x.pilotEffort===null||x.baselineEffort===null?null:(x.participants*x.pilotEffort+(x.cohort-x.participants)*x.baselineEffort)/60,consideration:x.baselineConsidered===null||x.pilotConsidered===null?null:x.pilotConsidered-x.baselineConsidered};
}
