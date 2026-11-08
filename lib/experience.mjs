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
export function summaryForCopy(summary,editedBullet) {
  const bullet=tidy(editedBullet || summary.resumeBullet);
  if (!bullet) return '';
  return [
    bullet,
    '',
    'Candidate-described experience | Not independently verified',
    'Approach and decisions: '+summary.decisions,
    'Evidence available (candidate-reported): '+summary.support,
    'Limits or unverified claims: '+summary.limits,
    'Assistance disclosure: '+summary.assistance,
    summary.disclaimer
  ].join('\n');
}
