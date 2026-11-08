"use client";
import Link from 'next/link';
import {useEffect,useRef,useState} from 'react';
import {buildExperienceSummary,summaryForCopy,type ExperienceInput,type ExperienceSummary} from '@/lib/experience';
import {suggestTransferableSkills,approvedSkillLines,type TargetJob} from '@/lib/transferable-skills';
import {getSupabase} from '@/lib/supabase';
import {writeTemporaryDraft,consumeTemporaryDraft,clearTemporaryDraft} from '@/lib/experience-oauth-draft';

const defaults:ExperienceInput={type:'academic',activity:'',decisions:'',support:'',limits:'',assistance:'unspecified'};
const translations={
 en:{
  accountTitle:'Your account — optional',accountOptional:'You can use the full experience workflow without signing in.',
  accountUnsigned:'Not signed in',accountSigned:'Signed in with Google',accountUnavailable:'Google Sign-In is not configured for this preview.',
  accountLogin:'Sign in with Google',accountLogout:'Sign out',accountFinances:'View saved financial exercises',accountPrivacy:'Experience descriptions are NOT saved to your account. Signing in only connects your existing Google account; your financial exercise has separate private account saving. To keep this experience summary, copy it or download the TXT file to your device.',
  authWarningTitle:'Your unsaved draft may be lost',authWarning:'Google Sign-In leaves this page. You can sign in without saving this draft, download it first, or explicitly keep a temporary copy in this browser tab for up to 10 minutes. Temporary copies are accessible to scripts running on this site, so do not use this option for confidential information. They are not sent to Supabase.',
  authWithoutDraft:'Sign in without keeping this draft',authKeepDraft:'Temporarily keep my draft in this tab and sign in',authCancel:'Cancel',authDraftFailed:'This browser blocked temporary draft storage. Nothing was saved. Download your draft before signing in, or continue without keeping it.',authRecovered:'A temporary draft was restored in this browser tab and removed from temporary storage. Review it before reuse.',authFailed:'Google authentication could not start. Your experience has not been saved to an account.',logoutFailed:'Sign-out could not be completed. Please try again.',logoutSuccess:'Signed out. Your experience was not saved to an account.',
  header:'Describe experience you already have',sub:'A practical account of your real contribution—without another assessment.',language:'Español',progress:'STEP 1 / YOUR EXPERIENCE',review:'STEP 2 / REVIEW YOUR WORDS',finish:'STEP 3 / REUSE',
  safety:'Keep confidential information out',safetyText:'Describe your role without entering client names, supplier prices, sensitive business records, employee information, passwords or unreleased financial data. Do not upload original documents.',
  target:'What kind of job are you exploring? (optional)',targetHelp:'This adjusts the order of relevant themes; it does not check job eligibility or rank you.',skillsTitle:'Possible themes from your own words',skillsIntro:'These are suggestions, not verified skills. Select only what really reflects your work; each suggestion shows the words you wrote.',skillsNone:'No clear keyword match in your description. That is okay—nothing will be added.',skillsSource:'Your words:',noDocuments:'You do not need supporting documents or proof to continue. Describe only what you can safely explain.',roleLabels:{unspecified:'No target job yet',administration:'Administrative / office roles',operations:'Operations / coordination',analyst:'Analysis / reporting',other:'Other role'},
  type:'Where did you gain this experience?',activity:'What did you personally do?',decisions:'What analysis, decisions, tools, or judgment did you use?',support:'What evidence can you safely describe? (optional)',limits:'What cannot you independently verify? (optional)',assistance:'Did you use help to prepare this description?',
  activityHint:'Describe your own actions—avoid team achievements you cannot personally claim.',decisionsHint:'For example: compared options, cleaned data, organized records, or proposed a process change.',supportHint:'Example: a de-identified worksheet, an outline, or notes you can explain. Do not paste private records.',limitsHint:'Example: outcomes were not independently measured, or the original records are confidential.',
  generate:'Create my summary',reset:'Start over',edit:'Edit my information',bullet:'Résumé-ready statement — edit this before copying',bulletHint:'These are your original words. Edit for clarity, and only keep claims you can support.',copy:'Copy reviewed summary',download:'Save .txt to my device',copySuccess:'Summary copied to clipboard.',copyFail:'Clipboard unavailable. Select the statement manually or save the file.',nothingSaved:'No account required. Your description is processed in this browser; this route does not save to Supabase or send evidence to an employer.',cancel:'Back to choices',label:'CANDIDATE-REPORTED EXPERIENCE · NOT INDEPENDENTLY VERIFIED',
  method:'Approach and decisions',evidence:'Evidence or sources',boundary:'Limits and uncertainty',assist:'Assistance reported',notVerified:'Not a skills certificate, verified employment record, employer endorsement, or hiring verdict.',validation:'Please complete your actual contribution and approach before generating a summary.',honest:'Check every claim against your own experience. Do not copy an overstatement.',
  example:'Examples to get started',example1:'University project: I organized stock-count data in a spreadsheet and flagged recurring differences.',exampleInternship:'Internship: I compared monthly expense categories with a budget and flagged differences for review.',example2:'Operations: I coordinated shift handovers and proposed a clearer checklist.',example3:'Family business: I organized invoices and tracked purchases that required follow-up.',editReady:'Review first, then copy or save. You can go back and correct your answers.',saveNote:'Save here means download a text file onto your device. Existing Google account storage remains available for the separate finance exercise.',
  choices:{job:'Job / paid work',internship:'Internship',academic:'Academic project',informal:'Informal work',family:'Family business'},
  assists:{unspecified:'Prefer not to specify',none:'I report no assistance',ai:'AI assistance',other:'Other assistance'}
 },
 es:{
  accountTitle:'Tu cuenta — opcional',accountOptional:'Puedes utilizar todo el flujo de experiencia sin iniciar sesión.',
  accountUnsigned:'No has iniciado sesión',accountSigned:'Sesión iniciada con Google',accountUnavailable:'Google no está configurado para iniciar sesión en esta vista previa.',
  accountLogin:'Iniciar sesión con Google',accountLogout:'Cerrar sesión',accountFinances:'Ver ejercicios financieros guardados',accountPrivacy:'Las descripciones de experiencia NO se guardan en tu cuenta. Iniciar sesión solo conecta tu cuenta actual de Google; el ejercicio financiero tiene su propio guardado privado. Para conservar este resumen, cópialo o descarga el archivo TXT en tu dispositivo.',
  authWarningTitle:'Podrías perder tu borrador',authWarning:'Iniciar sesión con Google te lleva a otra página. Puedes continuar sin conservar este borrador, descargarlo primero o elegir guardar temporalmente una copia en esta pestaña durante un máximo de 10 minutos. Los programas que se ejecutan en este sitio pueden acceder a esa copia; no uses esta opción si el texto es confidencial. No se envía a Supabase.',
  authWithoutDraft:'Iniciar sesión sin conservar este borrador',authKeepDraft:'Conservar temporalmente mi borrador en esta pestaña e iniciar sesión',authCancel:'Cancelar',authDraftFailed:'El navegador bloqueó el almacenamiento temporal. No se guardó nada. Descarga el borrador antes de iniciar sesión o continúa sin conservarlo.',authRecovered:'Se restauró un borrador temporal en esta pestaña y se eliminó del almacenamiento temporal. Revísalo antes de reutilizarlo.',authFailed:'No se pudo iniciar la autenticación de Google. Tu experiencia no se ha guardado en tu cuenta.',logoutFailed:'No se pudo cerrar la sesión. Inténtalo de nuevo.',logoutSuccess:'Sesión cerrada. Tu experiencia no se guardó en tu cuenta.',
  header:'Describe la experiencia que ya tienes',sub:'Explica tu aportación real, sin tener que hacer otro examen.',language:'English',progress:'PASO 1 / TU EXPERIENCIA',review:'PASO 2 / REVISA TUS PALABRAS',finish:'PASO 3 / REUTILIZA',
  safety:'No compartas información confidencial',safetyText:'Describe tu trabajo sin nombres de clientes, precios de proveedores, datos privados, información de empleados, contraseñas ni estados financieros reservados. No subas documentos originales.',
  target:'¿Qué tipo de puesto te interesa? (opcional)',targetHelp:'Esto solo ayuda a ordenar temas relacionados; no evalúa si calificas para un empleo.',skillsTitle:'Posibles habilidades según tus propias palabras',skillsIntro:'Son sugerencias, no habilidades verificadas. Marca solo las que describan tu trabajo; cada opción muestra las palabras que escribiste.',skillsNone:'No se encontraron palabras claramente relacionadas. No pasa nada: no se añadirá ninguna habilidad.',skillsSource:'Tus palabras:',noDocuments:'No necesitas presentar documentos ni pruebas para continuar. Describe únicamente lo que puedas explicar sin revelar datos privados.',roleLabels:{unspecified:'Todavía no elijo puesto',administration:'Administración / oficina',operations:'Operaciones / coordinación',analyst:'Análisis / reportes',other:'Otro puesto'},
  type:'¿En dónde obtuviste esta experiencia?',activity:'¿Qué hiciste tú personalmente?',decisions:'¿Qué análisis, decisiones, herramientas o criterios utilizaste?',support:'¿Qué evidencia puedes describir sin revelar datos privados? (opcional)',limits:'¿Qué no puedes verificar de manera independiente? (opcional)',assistance:'¿Recibiste ayuda para redactar esta descripción?',
  activityHint:'Explica tus acciones, sin atribuirte resultados de todo el equipo.',decisionsHint:'Por ejemplo: comparaste opciones, analizaste datos o propusiste un cambio.',supportHint:'Ejemplo: una hoja sin datos sensibles o un proceso que puedes explicar. No pegues archivos privados.',limitsHint:'Ejemplo: los resultados no se midieron de forma independiente o los registros son confidenciales.',
  generate:'Crear mi resumen',reset:'Empezar de nuevo',edit:'Editar mi información',bullet:'Frase para tu CV — puedes editarla antes de copiar',bulletHint:'Son tus propias palabras. Ajusta la claridad y conserva solo afirmaciones comprobables.',copy:'Copiar resumen revisado',download:'Guardar .txt en mi dispositivo',copySuccess:'Resumen copiado.',copyFail:'No se pudo copiar automáticamente; selecciona el texto o guarda el archivo.',nothingSaved:'No necesitas iniciar sesión. Esta ruta procesa el texto en tu navegador: no lo guarda en Supabase ni lo envía a empleadores.',cancel:'Volver a opciones',label:'EXPERIENCIA DESCRITA POR LA PERSONA · SIN VERIFICACIÓN INDEPENDIENTE',
  method:'Análisis y decisiones',evidence:'Evidencia o fuentes',boundary:'Límites y dudas',assist:'Ayuda utilizada',notVerified:'No es una certificación de habilidades, empleo verificado, aval de una empresa ni una decisión de contratación.',validation:'Describe tu aportación y cómo realizaste el trabajo para generar el resumen.',honest:'Revisa cada afirmación. No copies algo que exagere tus responsabilidades.',
  example:'Ejemplos para comenzar',example1:'Proyecto universitario: organicé registros de inventario en Excel e identifiqué diferencias.',exampleInternship:'Prácticas: comparé gastos mensuales con el presupuesto y señalé diferencias para revisión.',example2:'Operaciones: coordiné turnos y propuse una lista de revisión para los cambios de guardia.',example3:'Negocio familiar: organicé facturas y di seguimiento a compras pendientes.',editReady:'Revisa el texto antes de copiar o guardar. Puedes regresar a corregir tus respuestas.',saveNote:'Guardar aquí significa descargar un archivo de texto a tu dispositivo. El guardado en tu cuenta de Google sigue disponible para el ejercicio financiero.',
  choices:{job:'Empleo',internship:'Prácticas',academic:'Proyecto académico',informal:'Trabajo informal',family:'Negocio familiar'},
  assists:{unspecified:'Prefiero no indicar',none:'Declaro que no recibí ayuda',ai:'Usé inteligencia artificial',other:'Recibí otro tipo de ayuda'}
 }
};
type Lang='en'|'es';
const rows:[keyof Pick<ExperienceInput,'activity'|'decisions'|'support'|'limits'>,number][]=[['activity',420],['decisions',360],['support',360],['limits',360]];
export default function ExperiencePage(){
 const [lang,setLang]=useState<Lang>('en');
 const [form,setForm]=useState<ExperienceInput>(defaults);
 const [targetJob,setTargetJob]=useState<TargetJob>('unspecified');
 const [selectedSkillIds,setSelectedSkillIds]=useState<string[]>([]);
 const [generated,setGenerated]=useState<ExperienceSummary|null>(null);
 const [bullet,setBullet]=useState('');
 const [error,setError]=useState('');
 const [message,setMessage]=useState('');
 const reviewRef=useRef<HTMLHeadingElement|null>(null);
 const sb=getSupabase();
 const [userId,setUserId]=useState<string|null>(null);
 const [authPrompt,setAuthPrompt]=useState(false);
 const [authBusy,setAuthBusy]=useState(false);
 useEffect(()=>{if(generated) reviewRef.current?.focus();},[generated]);
 useEffect(()=>{
  if(!sb)return;
  let active=true;
  void sb.auth.getUser().then(({data,error:authError})=>{
   if(active){setUserId(authError?null:(data.user?.id??null));}
  });
  const {data:listener}=sb.auth.onAuthStateChange((_event,session)=>{
   if(active)setUserId(session?.user?.id??null);
  });
  return()=>{active=false;listener.subscription.unsubscribe();};
 },[sb]);
 useEffect(()=>{
  // Only restores a draft the candidate explicitly opted to hold for an OAuth redirect.
  // Consume-once means no unattended persistent session or cloud account save.
  let draft=null;
  try{draft=consumeTemporaryDraft(window.sessionStorage);}catch{return;}
  if(!draft)return;
  setForm(draft.form);
  setLang(draft.lang);
  setTargetJob(draft.targetJob);
  const rebuilt=draft.generated?buildExperienceSummary(draft.form):null;
  if(rebuilt?.ok){
   setGenerated(rebuilt.summary);
   setBullet(draft.bullet||rebuilt.summary.resumeBullet);
   setSelectedSkillIds(draft.selectedSkillIds);
  }
  setMessage(draft.lang==='es'
   ? 'Se restauró un borrador temporal en esta pestaña y se eliminó del almacenamiento temporal. Revísalo antes de reutilizarlo.'
   : 'A temporary draft was restored in this browser tab and removed from temporary storage. Review it before reuse.');
 },[]);
 const t=translations[lang];
 function update<K extends keyof ExperienceInput>(key:K,value:ExperienceInput[K]){
  setForm(prev=>({...prev,[key]:value}));setGenerated(null);setSelectedSkillIds([]);setMessage('');setError('');
 }
 function generate(){
  const result=buildExperienceSummary(form);
  if(!result.ok){setError(t.validation);return;}
  setGenerated(result.summary);setBullet(result.summary.resumeBullet);setSelectedSkillIds([]);setError('');setMessage('');
 }
 const suggestions=generated?suggestTransferableSkills(form,targetJob,lang):[];
 const summaryText=generated?[summaryForCopy(generated,bullet,lang),...(targetJob!=='unspecified'||selectedSkillIds.length?['',...approvedSkillLines(suggestions,selectedSkillIds,lang,targetJob)]:[])].join('\n'):'';
 function toggleSkill(id:string,checked:boolean){setSelectedSkillIds(prev=>checked?[...prev.filter(x=>x!==id),id].slice(0,3):prev.filter(x=>x!==id));setMessage('');}
 async function copy(){
  if(!generated||!bullet.trim())return;
  try{await navigator.clipboard.writeText(summaryText);setMessage(t.copySuccess);setError('');}
  catch{setError(t.copyFail);}
 }
 function download(){
  if(!generated||!bullet.trim())return;
  const file=new Blob([summaryText],{type:'text/plain;charset=utf-8'});
  const url=URL.createObjectURL(file);const a=document.createElement('a');a.href=url;a.download='proof-of-skill-my-experience.txt';document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);setMessage(lang==='es'?'Archivo descargado a tu dispositivo.':'Text file downloaded to your device.');
 }
 function reset(){setGenerated(null);setForm(defaults);setTargetJob('unspecified');setSelectedSkillIds([]);setBullet('');setMessage('');setError('');setAuthPrompt(false);try{clearTemporaryDraft(window.sessionStorage);}catch{/* private browsing */}}
 const hasDraft=Boolean(form.activity.trim()||form.decisions.trim()||form.support.trim()||form.limits.trim()||generated||bullet.trim());
 async function login(keepDraft:boolean){
  if(!sb||authBusy)return;
  setAuthBusy(true);setError('');
  try{
   // Never persist user text unless explicitly requested as a short-lived tab draft.
   if(keepDraft){
    const ok=writeTemporaryDraft(window.sessionStorage,{
     form,lang,targetJob,generated:Boolean(generated),bullet,selectedSkillIds
    });
    if(!ok){setError(t.authDraftFailed);setAuthBusy(false);return;}
   }else{clearTemporaryDraft(window.sessionStorage);}
   const {error:authError}=await sb.auth.signInWithOAuth({
    provider:'google',
    options:{redirectTo:window.location.origin+'/experience'}
   });
   if(authError){clearTemporaryDraft(window.sessionStorage);setError(t.authFailed);setAuthBusy(false);}
  }catch{
   try{clearTemporaryDraft(window.sessionStorage);}catch{/* restricted storage */}
   setError(t.authFailed);setAuthBusy(false);
  }
 }
 async function logout(){
  if(!sb||authBusy)return;
  setAuthBusy(true);setError('');
  try{
   const {error:authError}=await sb.auth.signOut();
   if(authError){setError(t.logoutFailed);}
   else{setUserId(null);setMessage(t.logoutSuccess);setAuthPrompt(false);}
  }catch{setError(t.logoutFailed);}
  setAuthBusy(false);
 }
 const labelCls='block text-sm font-bold text-slate-800';
 const inputCls='mt-2 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 focus-visible:outline-3 focus-visible:outline-[#197a84]';
 return <main lang={lang} className="mx-auto max-w-5xl px-4 sm:px-6 py-8 md:py-12">
  <nav aria-label="Breadcrumb" className="flex items-center justify-between gap-4"><Link href="/" className="text-sm font-bold text-[#197a84] hover:underline">← {t.cancel}</Link><button type="button" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-bold hover:bg-slate-100" onClick={()=>{setLang(prev=>prev==='en'?'es':'en');setError('');setMessage('');}}>{t.language}</button></nav>
  <div className="mt-9"><span className="eyebrow">PROOF-OF-SKILL / WEEK 13</span><h1 className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-slate-900">{t.header}</h1><p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">{t.sub}</p></div>
  <section aria-labelledby="experience-account-heading" className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
   <div className="flex flex-wrap items-center justify-between gap-4">
    <div>
     <h2 id="experience-account-heading" className="text-lg font-black">{t.accountTitle}</h2>
     <p className="mt-1 text-sm text-slate-600">{t.accountOptional}</p>
     <p className="mt-2 text-sm font-semibold text-slate-800" role="status">{userId?t.accountSigned:t.accountUnsigned}</p>
    </div>
    <div className="flex flex-wrap gap-2">
     {sb&&!userId&&<button type="button" onClick={()=>hasDraft?setAuthPrompt(true):void login(false)}
      disabled={authBusy} className="btn">{t.accountLogin}</button>}
     {sb&&userId&&<button type="button" onClick={()=>void logout()} disabled={authBusy}
      className="btn outline">{t.accountLogout}</button>}
    </div>
   </div>
   {!sb&&<p role="note" className="mt-3 text-sm font-semibold text-amber-900">{t.accountUnavailable}</p>}
   <p className="mt-4 rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">{t.accountPrivacy}</p>
   <Link href="/product" className="mt-3 inline-block text-sm font-semibold text-[#197a84] underline">{t.accountFinances}</Link>
   {authPrompt&&!userId&&<div role="group" aria-label={t.authWarningTitle} className="mt-4 rounded-xl border-2 border-amber-300 bg-amber-50 p-4">
    <h3 className="font-bold text-amber-950">{t.authWarningTitle}</h3>
    <p className="mt-2 text-sm leading-relaxed text-amber-950">{t.authWarning}</p>
    <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
     <button type="button" className="btn" disabled={authBusy} onClick={()=>void login(false)}>{t.authWithoutDraft}</button>
     <button type="button" className="btn outline" disabled={authBusy} onClick={()=>void login(true)}>{t.authKeepDraft}</button>
     <button type="button" className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold" disabled={authBusy} onClick={()=>setAuthPrompt(false)}>{t.authCancel}</button>
    </div>
   </div>}
  </section>
  <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5" role="note"><h2 className="font-bold text-amber-950 flex gap-2 items-center"><span aria-hidden="true">⚑</span>{t.safety}</h2><p className="mt-2 text-sm leading-relaxed text-amber-950">{t.safetyText}</p></div>
  <section className="mt-8 grid gap-7 lg:grid-cols-[1.2fr_.8fr]" aria-labelledby="form-head">
   <div className="surface p-5 md:p-8">
    <div className="eyebrow">{t.progress}</div><h2 id="form-head" className="mt-3 text-xl font-black">{lang==='es'?'Tu experiencia en tus palabras':'Your experience, in your own words'}</h2>
    <p className="mt-2 text-sm text-slate-600">{t.nothingSaved}</p>
    <div className="mt-6 space-y-5">
     <label className={labelCls}>{t.type}<select className={inputCls} value={form.type} onChange={e=>update('type',e.target.value as ExperienceInput['type'])}>{Object.entries(t.choices).map(([key,label])=><option key={key} value={key}>{label}</option>)}</select></label>
     <label className={labelCls}>{t.target}<span className="mt-1 block text-xs font-normal text-slate-500">{t.targetHelp}</span><select className={inputCls} value={targetJob} onChange={e=>{setTargetJob(e.target.value as TargetJob);setSelectedSkillIds([]);setMessage('');}}>{Object.entries(t.roleLabels).map(([key,label])=><option key={key} value={key}>{label}</option>)}</select></label>
     {rows.map(([key,max])=><label key={key} className={labelCls}>{t[key]}<span className="mt-1 block text-xs font-normal leading-relaxed text-slate-500">{t[(''+key+'Hint') as 'activityHint'|'decisionsHint'|'supportHint'|'limitsHint']}</span><textarea rows={key==='activity'?3:2} maxLength={max} value={form[key]} onChange={e=>update(key,e.target.value)} className={inputCls} aria-required={key==='activity'||key==='decisions'}/><span className="mt-1 block text-right text-xs font-normal text-slate-500">{form[key].length}/{max}</span></label>)}
     <p className="rounded-xl bg-teal-50 px-4 py-3 text-sm font-medium leading-relaxed text-teal-950" role="note">{t.noDocuments}</p>
     <label className={labelCls}>{t.assistance}<select className={inputCls} value={form.assistance} onChange={e=>update('assistance',e.target.value as ExperienceInput['assistance'])}>{Object.entries(t.assists).map(([key,label])=><option key={key} value={key}>{label}</option>)}</select></label>
     <button type="button" onClick={generate} className="btn w-full text-center text-base">{t.generate} →</button>
     <button type="button" onClick={reset} className="text-sm font-semibold text-slate-500 hover:underline">{t.reset}</button>
    </div>
   </div>
   <aside className="space-y-5">
    <section className="surface p-6"><h2 className="text-lg font-black">{t.example}</h2><div className="mt-4 space-y-3">{[t.example1,t.exampleInternship,t.example2,t.example3].map((s,i)=><p key={s} className="rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700"><strong className="text-[#197a84]">{String(i+1).padStart(2,'0')} / </strong>{s}</p>)}</div></section>
    <section className="rounded-2xl border border-teal-200 bg-teal-50 p-6"><h2 className="font-black text-teal-950">{t.label}</h2><p className="mt-2 text-sm text-teal-950 leading-relaxed">{t.notVerified}</p></section>
   </aside>
  </section>
  {error&&<p role="alert" className="mt-6 rounded-xl bg-rose-100 p-4 font-semibold text-rose-900">{error}</p>}
  {message&&<p role="status" className="mt-6 rounded-xl bg-teal-50 p-4 font-semibold text-teal-950">{message}</p>}
  {generated&&<section aria-labelledby="review-head" className="surface mt-8 p-5 md:p-8 border-t-4 border-t-[#197a84]">
   <div className="eyebrow">{t.review}</div><h2 id="review-head" ref={reviewRef} tabIndex={-1} className="mt-3 text-2xl font-black">{lang==='es'?'Tu resumen, bajo tu control':'Your summary, under your control'}</h2><p className="mt-2 text-sm text-slate-600">{t.editReady}</p>
   <div className="mt-5 rounded-xl border border-teal-200 bg-teal-50 p-4"><span className="text-xs font-bold tracking-wide text-teal-900">{t.label}</span><p className="mt-2 text-sm text-teal-950">{t.notVerified}</p></div>
   <label className="mt-6 block text-sm font-bold">{t.bullet}<textarea rows={3} maxLength={430} className={inputCls} value={bullet} onChange={e=>{setBullet(e.target.value);setMessage('');}}/><span className="mt-2 block text-xs font-normal text-slate-500">{t.bulletHint}</span></label>
   <div className="mt-6 grid gap-4 md:grid-cols-3">
    {[[t.method,generated.decisions],[t.evidence,generated.support],[t.boundary,generated.limits]].map(([k,v])=><div key={k} className="rounded-xl border border-slate-200 p-4"><h3 className="text-sm font-black">{k}</h3><p className="mt-2 text-sm break-words text-slate-600">{lang==='es'&&v==='No supporting source or work sample described.'?'No se describió ninguna fuente ni muestra de trabajo.':lang==='es'&&v==='The activity, source materials, results and authorship have not been independently verified.'?'Ni la actividad, ni las fuentes, los resultados o la autoría se han verificado de manera independiente.':v}</p></div>)}
   </div>
   <section className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5" aria-labelledby="transferable-skills-title"><h3 id="transferable-skills-title" className="text-lg font-black">{t.skillsTitle}</h3><p className="mt-2 text-sm leading-relaxed text-slate-700">{t.skillsIntro}</p>{suggestions.length?<div className="mt-4 space-y-3">{suggestions.map(s=><label key={s.id} className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"><input type="checkbox" className="mt-1 h-4 w-4 accent-teal-700" checked={selectedSkillIds.includes(s.id)} onChange={e=>toggleSkill(s.id,e.target.checked)}/><span><strong className="block text-sm text-slate-900">{s.label}</strong><span className="mt-1 block text-xs text-slate-600">{t.skillsSource} “{s.evidence}”</span></span></label>)}</div>:<p className="mt-3 text-sm text-slate-600">{t.skillsNone}</p>}</section>
   <p className="mt-6 text-sm text-slate-600">{t.honest}</p>
   <div className="eyebrow mt-7">{t.finish}</div>
   <div className="mt-3 flex flex-col gap-3 sm:flex-row">
    <button type="button" onClick={copy} disabled={!bullet.trim()} className="btn text-center flex-1">{t.copy}</button>
    <button type="button" onClick={download} disabled={!bullet.trim()} className="btn outline text-center flex-1">{t.download}</button>
    <button type="button" onClick={()=>{setGenerated(null);setMessage('');}} className="btn outline text-center">{t.edit}</button>
   </div>
   <p className="mt-4 text-xs text-slate-500">{t.saveNote}</p>
  </section>}
  <div className="mt-10 text-center text-xs text-slate-500">Proof-of-Skill · Your experience is self-reported. No automatic sharing or hiring decisions. · <Link href="/product" className="underline">Financial exercise</Link></div>
 </main>;
}
