/**
 * Optional Week 13 skill-theme hints. These match candidate-entered phrases only.
 * A match is NOT proof of ability, employment, competency or role suitability.
 * No LLM, network calls, hidden scoring or inferred outcomes.
 */
export const TARGET_JOBS=Object.freeze(['unspecified','administration','operations','analyst','other']);
const patterns=Object.freeze([
 {id:'inventory',en:'Inventory record organization',es:'Organización de registros de inventario',roles:['operations','administration'],rx:/\b(?:inventory|stock.count|inventario|existencias|stock)\b/i},
 {id:'invoices',en:'Invoice organization',es:'Organización de facturas',roles:['administration'],rx:/\b(?:invoice|invoices|factura|facturas|comprobante|comprobantes)\b/i},
 {id:'comparison',en:'Comparing options or figures',es:'Comparación de opciones o cifras',roles:['analyst','administration'],rx:/\b(?:compar(?:e|ed|ing|ison)|compar(?:ar|é|o|ó|aba|ación)|contrast(?:ed|é|ar)?|cotej(?:ar|é|o))(?=\s|[.,;!?]|$)/i},
 {id:'followup',en:'Following up pending items',es:'Seguimiento de pendientes',roles:['administration','operations'],rx:/\b(?:follow.up|following up|tracked pending|seguimiento|dar seguimiento|di seguimiento|pendientes|pending payments)\b/i},
 {id:'spreadsheets',en:'Using spreadsheets',es:'Uso de hojas de cálculo',roles:['analyst','administration'],rx:/\b(?:spreadsheet|spreadsheets|excel|hoja[s]? de c[aá]lculo)\b/i},
 {id:'scheduling',en:'Organizing shifts or schedules',es:'Organización de turnos u horarios',roles:['operations'],rx:/\b(?:shift|shifts|roster|rosters|turnos|horarios|guardias)\b/i},
 {id:'budget',en:'Budget comparison',es:'Comparación de presupuestos',roles:['analyst','administration'],rx:/\b(?:budget|budgets|presupuesto|presupuestos|variances|variaciones presupuestales)\b/i},
 {id:'checklist',en:'Organizing a checklist or handover',es:'Organización de listas de revisión o entregas',roles:['operations'],rx:/\b(?:checklist|checklists|handover|handovers|lista de verificaci[oó]n|lista de revisi[oó]n|entrega de turno)\b/i},
]);
export function suggestTransferableSkills(input,targetJob='unspecified',locale='en'){
 const text=[input?.activity,input?.decisions].filter(x=>typeof x==='string').join('. ');
 const safeTarget=TARGET_JOBS.includes(targetJob)?targetJob:'unspecified';
 const matches=[];
 for(const rule of patterns){
  const match=rule.rx.exec(text);
  if(!match)continue;
  // Match is an exact candidate-authored substring. The category is only a suggested description.
  matches.push({id:rule.id,label:locale==='es'?rule.es:rule.en,
    evidence:match[0],source:'candidate-reported',relevance:rule.roles.includes(safeTarget)?1:0});
 }
 matches.sort((a,b)=>b.relevance-a.relevance);
 return matches.slice(0,3).map(({relevance,...rest})=>rest);
}
export function approvedSkillLines(suggestions,selectedIds,locale='en',targetJob='unspecified'){
 const approved=suggestions.filter(s=>selectedIds.includes(s.id)).slice(0,3);
 const prefix=locale==='es'?'Posibles habilidades transferibles (elegidas por la persona; sin verificar):':'Possible transferable skill themes (selected by candidate; not verified):';
 const jobLabels=locale==='es'?{administration:'Administración',operations:'Operaciones',analyst:'Análisis',other:'Otro puesto',unspecified:'No indicado'}:{administration:'Administration',operations:'Operations',analyst:'Analysis',other:'Other role',unspecified:'Not specified'};
 const job=jobLabels[TARGET_JOBS.includes(targetJob)?targetJob:'unspecified'];
 const jobLine=(locale==='es'?'Puesto de interés (elegido por la persona; no es una evaluación de compatibilidad): ':'Target role (candidate-selected; not an eligibility assessment): ')+job;
 return [jobLine,...(approved.length?[prefix,...approved.map(s=>'- '+s.label+' ('+(locale==='es'?'palabras de la persona: ':'candidate wording: ')+s.evidence+')')]:[])];
}
