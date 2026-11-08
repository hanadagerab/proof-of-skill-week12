/**
 * Candidate-reported activity themes, NOT skill verification or job matching.
 * Require an activity verb followed by a relevant object in the same short clause.
 * No LLM, inference from isolated nouns, performance scores, or invented results.
 */
export const TARGET_JOBS=Object.freeze(['unspecified','administration','operations','analyst','other']);
const rules=[
 {id:'inventory',en:'Organizing inventory records',es:'Organización de registros de inventario',roles:['operations','administration'],
  action:/\b(?:organiz\w*|organic\w*|manage\w*|manej\w*|registr\w*|record\w*|tracked?|control\w*)/i,
  object:/\b(?:inventory|stock|stock.counts?|inventario|existencias)\b/i},
 {id:'invoices',en:'Organizing invoices',es:'Organización de facturas',roles:['administration'],
  action:/\b(?:organiz\w*|organic\w*|record\w*|registr\w*|managed?|manej\w*|review\w*|revis\w*|process\w*|proces\w*)/i,
  object:/\b(?:invoices?|facturas?|comprobantes?)\b/i},
 {id:'comparison',en:'Comparing options or figures',es:'Comparación de opciones o cifras',roles:['analyst','administration'],
  action:/\b(?:compar\w*|contrast\w*|cotej\w*)/i,
  object:/\b(?:prices?|precios?|figures?|cifras?|options?|opciones?|alternativas?|costs?|costos?|gastos?|budgets?|presupuestos?|suppliers?|proveedores?|records?|registros?|expenses?)\b/i},
 {id:'followup',en:'Following up pending items',es:'Seguimiento de pendientes',roles:['administration','operations'],
  action:/\b(?:tracked?|tracking|follow(?:ed|ing)?(?:.up)?|seguimiento|segu[ií]|segu[íi]a|revis\w*)/i,
  object:/\b(?:pending|pendientes?|payments?|pagos?|tasks?|tareas?|purchases?|compras?|solicitudes?)\b/i},
 {id:'spreadsheets',en:'Working with spreadsheets',es:'Trabajo con hojas de cálculo',roles:['analyst','administration'],
  action:/\b(?:used?|using|utilic\w*|us[éeó]|registr\w*|record\w*|actualiz\w*|updated?|creat\w*|elabor\w*)/i,
  object:/\b(?:excel|spreadsheets?|hojas?\s+de\s+c[aá]lculo)\b/i},
 {id:'scheduling',en:'Coordinating shifts or schedules',es:'Coordinación de turnos u horarios',roles:['operations'],
  action:/\b(?:coordin\w*|organiz\w*|organic\w*|plan\w*|program\w*|scheduled?|assigned?|asign\w*)/i,
  object:/\b(?:shifts?|rosters?|turnos?|horarios?|guardias?)\b/i},
 {id:'budget',en:'Comparing budgets',es:'Comparación de presupuestos',roles:['analyst','administration'],
  action:/\b(?:compar\w*|review\w*|revis\w*|analy[sz]\w*|analiz\w*|cotej\w*)/i,
  object:/\b(?:budgets?|presupuestos?)\b/i},
 {id:'checklist',en:'Preparing checklists or handovers',es:'Preparación de listas de revisión o entregas',roles:['operations'],
  action:/\b(?:prepar\w*|creat\w*|elabor\w*|propos\w*|propus\w*|organized?|organic\w*|coordin\w*)/i,
  object:/\b(?:checklists?|handovers?|listas?\s+de\s+(?:verificaci[oó]n|revisi[oó]n)|entregas?\s+de\s+turno)\b/i}
];
const negation=/\b(?:did not|didn't|do not|don't|never|without|not|no|nunca|jam[aá]s|sin)\b/i;
/** Split on clause boundaries to avoid borrowing an unrelated action for a different object. */
function clauses(input){
 return [input?.activity,input?.decisions].filter(x=>typeof x==='string')
  .flatMap(x=>x.split(/(?:[.!?;,]|\s+(?:and|but|pero|y)\s+)/i))
  .map(x=>x.trim()).filter(Boolean);
}
export function suggestTransferableSkills(input,targetJob='unspecified',locale='en'){
 const matches=[];
 const role=TARGET_JOBS.includes(targetJob)?targetJob:'unspecified';
 for(const rule of rules){
  for(const clause of clauses(input)){
   if(negation.test(clause))continue;
   const a=rule.action.exec(clause);
   if(!a)continue;
   // An action must actually govern the object, not merely occur elsewhere in text.
   const remaining=clause.slice(a.index+a[0].length);
   const o=rule.object.exec(remaining);
   if(!o || o.index>55)continue;
   const evidence=clause.slice(a.index,a.index+a[0].length+o.index+o[0].length).trim();
   if(evidence.length>100)continue;
   matches.push({id:rule.id,label:locale==='es'?rule.es:rule.en,
    evidence,source:'candidate-reported',relevance:rule.roles.includes(role)?1:0});
   break;
  }
 }
 matches.sort((a,b)=>b.relevance-a.relevance);
 return matches.slice(0,3).map(({relevance,...rest})=>rest);
}
const roles={
 en:{unspecified:'Not specified',administration:'Administration',operations:'Operations',analyst:'Analysis',other:'Other role'},
 es:{unspecified:'No indicado',administration:'Administración',operations:'Operaciones',analyst:'Análisis',other:'Otro puesto'}
};
const jobName=(locale,job)=>roles[locale==='es'?'es':'en'][TARGET_JOBS.includes(job)?job:'unspecified'];
export function approvedSkillLines(suggestions,selectedIds,locale='en',targetJob='unspecified'){
 const approved=suggestions.filter(s=>selectedIds.includes(s.id)).slice(0,3);
 const es=locale==='es';
 const role=(es?'Puesto de interés (elegido por la persona; no es una evaluación de compatibilidad): ':'Target role (candidate-selected; not an eligibility assessment): ')+jobName(locale,targetJob);
 const heading=es?'Posibles habilidades transferibles (elegidas por la persona; sin verificar):':'Possible transferable skill themes (selected by candidate; not verified):';
 return [role,...(approved.length?[heading,...approved.map(s=>'- '+s.label+' ('+(es?'palabras de la persona: ':'candidate wording: ')+s.evidence+')')]:[])];
}
/** One uncompleted, candidate-grounded practice question; no guessed interview answer. */
export function interviewPreparationQuestion(suggestions,selectedIds,locale='en',targetJob='unspecified'){
 const selected=suggestions.find(s=>selectedIds.includes(s.id));
 if(!selected)return null;
 const evidence=selected.evidence;
 const job=jobName(locale,targetJob);
 if(locale==='es')return targetJob==='unspecified'
  ? 'Pregunta para preparar una entrevista: ¿Cómo realizaste «'+evidence+'» y qué parte de esa experiencia puedes explicar con tus propias palabras, sin compartir información privada?'
  : 'Pregunta para preparar una entrevista de '+job+': ¿Cómo realizaste «'+evidence+'» y cómo explicarías esa actividad de forma honesta, sin compartir información privada?';
 return targetJob==='unspecified'
  ? 'Interview practice question: How did you carry out “'+evidence+'”, and what can you explain about your own contribution without sharing private information?'
  : 'Interview practice question for '+job+': How did you carry out “'+evidence+'”, and how would you describe that action truthfully without sharing private information?';
}
