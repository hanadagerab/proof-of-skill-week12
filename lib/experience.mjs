/** Week 13: bounded, deterministic transformations of candidate-reported experience.
 * No AI API, external verification, network transmission or invented accomplishments. */
export const EXPERIENCE_TYPES = Object.freeze(['job','internship','academic','informal','family']);
export const ASSISTANCE_TYPES = Object.freeze(['unspecified','none','ai','other']);

const tidy = value => typeof value === 'string' ? value.replace(/\s+/g,' ').trim() : '';
const bounds = { activity: 420, decisions: 360, support: 360, limits: 360 };
export function validateExperience(input) {
  const errors = {};
  if (!EXPERIENCE_TYPES.includes(input?.type)) errors.type='Choose a type of experience.';
  if (!ASSISTANCE_TYPES.includes(input?.assistance)) errors.assistance='Choose a valid assistance disclosure.';
  for (const [key,max] of Object.entries(bounds)) {
    const value=tidy(input?.[key]);
    if (value.length>max) errors[key]='Keep this answer under '+max+' characters.';
    if ((key==='activity'||key==='decisions') && value.length<12) errors[key]='Describe your contribution in at least 12 characters.';
  }
  return { valid: Object.keys(errors).length===0, errors };
}
export function buildExperienceSummary(input) {
  const checked=validateExperience(input);
  if (!checked.valid) return {ok:false,errors:checked.errors};
  const activity=tidy(input.activity), decisions=tidy(input.decisions);
  const support=tidy(input.support),limits=tidy(input.limits);
  // Directly reuses the candidate's words; never inserts titles, metrics or impact.
  const bullet=activity.replace(/[.\s]+$/,'')+'.';
  return {ok:true, summary:{
    kind:'candidate-described-experience',
    type:input.type,
    resumeBullet:bullet,
    activity,
    decisions,
    support:support||'No supporting source or work sample described.',
    limits:limits||'The activity, source materials, results and authorship have not been independently verified.',
    assistance:input.assistance,
    verification:'Candidate-reported, not independently verified',
    disclaimer:'This is a candidate-edited description, not a platform skill assessment, confirmed employment record, certificate, employer endorsement or hiring decision.',
  }};
}
/** Localized export labels. The user's own words are never translated or rewritten. */
export function summaryForCopy(summary,editedBullet,locale='en') {
  const bullet=tidy(editedBullet || summary.resumeBullet);
  if (!bullet) return '';
  const es=locale==='es';
  const labels=es ? {
    evidence:'Experiencia descrita por la persona | Sin verificación independiente',
    decisions:'Análisis y decisiones: ',support:'Evidencia disponible (declarada por la persona): ',
    limits:'Límites o afirmaciones sin verificar: ',assistance:'Ayuda utilizada: ',
    disclaimer:'Esta es una descripción redactada por la persona, no una prueba de habilidades en la plataforma, empleo confirmado, certificado, aval del empleador ni decisión de contratación.'
  } : {
    evidence:'Candidate-described experience | Not independently verified',
    decisions:'Approach and decisions: ',support:'Evidence available (candidate-reported): ',
    limits:'Limits or unverified claims: ',assistance:'Assistance disclosure: ',
    disclaimer:summary.disclaimer
  };
  const support=es && summary.support==='No supporting source or work sample described.'
    ? 'No se describió ninguna fuente ni muestra de trabajo.' : summary.support;
  const limits=es && summary.limits==='The activity, source materials, results and authorship have not been independently verified.'
    ? 'Ni la actividad, ni las fuentes, los resultados o la autoría se han verificado de manera independiente.' : summary.limits;
  const assists=es?{none:'Declara no haber recibido ayuda',ai:'Asistencia de inteligencia artificial',other:'Otro tipo de ayuda',unspecified:'No especificada'}:{none:'Self-reports no assistance',ai:'AI assistance',other:'Other assistance',unspecified:'Not specified'};
  return [
    bullet,'',labels.evidence,
    labels.decisions+summary.decisions,
    labels.support+support,
    labels.limits+limits,
    labels.assistance+(assists[summary.assistance] || 'Not specified'),
    labels.disclaimer
  ].join('\n');
}
