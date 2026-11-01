export const CATEGORIES = Object.freeze(['OBSERVED','INFERRED','MISSING','UNVERIFIED']);
export function classify(input){
 const n=(v)=>typeof v==='number'&&Number.isFinite(v)?v:null;
 const revenue=n(input.revenue),cost=n(input.cost),claimed=n(input.claimedMargin);
 const items=[];
 const add=(criterion,category,supports,limitation)=>items.push({criterion,category,supports,limitation});
 if(revenue===null||cost===null){add('Numeric inputs','MISSING','The required revenue and/or cost figure was not supplied.','No margin can be evaluated.');}
 else {add('Submitted values','OBSERVED',`Submitted revenue ${revenue} and cost ${cost}.`,'Figures are self-reported; underlying sources are not verified.');
 if(revenue<=0)add('Margin computation','MISSING','Positive revenue is required to calculate a meaningful margin.','Do not infer financial capability.');
 else {const m=(revenue-cost)/revenue*100;
 if(claimed===null)add('Claimed margin','MISSING',`Submitted figures imply ${m.toFixed(2)}% under supplied inputs.`,'No claimed margin was provided for comparison.');
 else if(Math.abs(m-claimed)>0.1)add('Margin consistency','INFERRED',`Mathematical inconsistency: (${revenue} − ${cost}) ÷ ${revenue} × 100 = ${m.toFixed(2)}%, but the submitted claim is ${claimed.toFixed(2)}%. Review the revenue, cost, or claimed margin and clarify which input needs correction.`,'This difference does not establish dishonesty, incompetence, or a hiring verdict. The underlying figures and authorship remain unverified.');
 else add('Margin consistency','INFERRED',`Claimed margin agrees with supplied values (${m.toFixed(2)}%).`,'Mathematical consistency does not establish audited results, independent skill or authorship.');}}
 if(!input.sourceNotes?.trim())add('Source explanation','MISSING','No source or assumption notes were supplied.','Evaluator must request the basis of the inputs.');
 else add('Source explanation','OBSERVED','Candidate supplied a source/assumption explanation.','Truth and completeness of this explanation were not independently checked.');
 add('Authorship and assistance','UNVERIFIED',input.assistance==='none'?'Candidate self-reports no assistance.':input.assistance==='ai'?'Candidate discloses AI assistance.':input.assistance==='other'?'Candidate discloses other assistance.':'No definitive assistance disclosure.','Self-report cannot independently verify authorship or performance.');
 return {items,prohibited:['Independent authorship verified','Candidate is employable','Automatically hire or reject','10× proven'],humanNextAction:'A hiring evaluator must review the submission, clarify missing or conflicting evidence, and make any consequential hiring decision.',status:'Bounded evidence summary · not a hiring verdict',isSynthetic:!!input.isSynthetic};
}
