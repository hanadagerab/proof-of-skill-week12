'use client';
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import content from './distribution-content.json';
import {useWeek15Language} from './language';

const images=['01-cv','02-contexto','03-limites','04-pregunta'] as const;
type Language='en'|'es';
function Copy({lang}:{lang:Language}){return content[lang]}

export function Week15Disclosures({kind}:{kind:'carousel'|'evidence'}){
 const {lang}=useWeek15Language();
 const c=Copy({lang});
 return <div className="mt-7 space-y-5">
  <section aria-labelledby="w15-privacy" className="rounded-2xl border border-[#9acdc5] bg-[#E4F2EF] p-5 md:p-7">
   <h2 id="w15-privacy" className="text-xl font-black text-[#132A47]">{c.privacyH}</h2>
   <p className="mt-3 leading-relaxed text-[#132A47]">{c.privacyCopy}</p>
  </section>
  <section aria-labelledby="w15-claims" className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
   <h2 id="w15-claims" className="text-xl font-black">{c.claimH}</h2>
   <p className="mt-3 leading-relaxed text-slate-700">{c.claimCopy}</p>
  </section>
  {kind==='evidence'&&<>
   <section aria-labelledby="w15-effort" className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
    <h2 id="w15-effort" className="text-xl font-black">{c.effortH}</h2>
    <p className="mt-3 leading-relaxed text-slate-700">{c.effortCopy}</p>
   </section>
  </>}
 </div>;
}

export function Week15Carousel(){
 const {lang}=useWeek15Language();
 const c=Copy({lang});
 return <main lang={lang} className="mx-auto max-w-5xl px-4 py-12 md:py-20">
  <p className="eyebrow">Beyond the CV · Asset A</p>
  <h1 className="mt-3 text-3xl font-black md:text-4xl">{c.headingA}</h1>
  <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700">{c.introA}</p>
  <section className="mt-9" aria-labelledby="w15-text-first">
   <h2 id="w15-text-first" className="text-2xl font-black">{c.textFirst}</h2>
   <div className="mt-5 grid gap-4 md:grid-cols-2">{c.panelNames.map((heading,i)=>
    <article key={images[i]} className="surface border-t-4 border-t-[#197a84] p-6">
     <p className="eyebrow">{i+1} / 04</p>
     <h3 className="mt-3 text-xl font-bold">{heading}</h3>
     <p className="mt-3 leading-relaxed text-slate-700">{c.summaries[i]}</p>
    </article>
   )}</div>
  </section>
  <Week15Disclosures kind="carousel"/>
  <section aria-labelledby="w15-original-art" className="mt-10">
   <h2 id="w15-original-art" className="text-2xl font-black">{c.visuals}</h2>
   <p className="mt-3 text-slate-700">{c.visualsIntro}</p>
   <p className="mt-2 text-sm text-slate-500">{c.originalNote}</p>
   <div className="mt-5 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5" aria-label={lang==='es'?'Cuatro láminas originales':'Four original carousel panels'}>
    {images.map((name,i)=>{
      const asset=name+(lang==='en'?'-en':'')+'.svg';
      return <figure key={asset} className="w-[min(82vw,460px)] shrink-0 snap-start">
       <Image unoptimized width={1080} height={1080} src={'/week15/carousel/'+asset} alt={c.panelNames[i]} className="w-full rounded-2xl border border-slate-200 shadow-sm"/>
       <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm">
        <span>{c.panel} {i+1} / 4</span><a className="font-semibold text-[#14675E] underline" download={asset} href={'/week15/carousel/'+asset}>{c.download}</a>
       </figcaption>
       <p className="mt-2 text-sm leading-relaxed text-slate-700">{c.summaries[i]}</p>
      </figure>;
    })}
   </div>
   <p className="text-sm text-slate-600">{c.swipe}</p>
  </section>
  <div className="mt-9 flex flex-wrap gap-3">
   <Link href="/week15" className="btn outline">{lang==='es'?'Volver a Week 15':'Back to Week 15'}</Link>
   <Link href="/week15/evidence" className="btn">{c.navB}</Link>
  </div>
 </main>;
}

export function Week15Evidence(){
 const {lang}=useWeek15Language();
 const [index,setIndex]=useState(0);
 const c=Copy({lang});
 const [tag,heading,body,label,note]=c.steps[index];
 return <main lang={lang} className="mx-auto max-w-5xl px-4 py-12 md:py-20">
  <p className="eyebrow">Evidence in Action · Asset B</p>
  <h1 className="mt-3 text-3xl font-black leading-tight md:text-4xl">{c.headingB}</h1>
  <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700">{c.introB}</p>
  <section aria-labelledby="w15-excel-question" className="mt-6 rounded-2xl border border-[#91D3C9] border-l-4 border-l-[#197A84] bg-[#E4F2EF] px-5 py-5 md:px-7 md:py-6">
   <h2 id="w15-excel-question" className="text-xl font-black leading-snug text-[#132A47]">{c.question}</h2>
   <p className="mt-3 text-base leading-relaxed text-[#132A47]">{c.answer}</p>
  </section>
  <Week15Disclosures kind="evidence"/>
  <section aria-label={lang==='es'?'Recorrido interactivo de seis etapas':'Six-stage interactive walkthrough'} className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
   <p className="eyebrow" aria-live="polite">{tag} · {index+1} / 6</p>
   <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200" role="progressbar" aria-label={lang==='es'?'Progreso del recorrido':'Walkthrough progress'} aria-valuenow={index+1} aria-valuemin={1} aria-valuemax={6}>
    <div className="h-full bg-[#237F78] transition-all" style={{width:`${(index+1)/6*100}%`}}/>
   </div>
   <div aria-live="polite" aria-atomic="true">
    <h2 className="mt-8 text-2xl font-black md:text-3xl">{heading}</h2>
    <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">{body}</p>
    <div className="mt-7 rounded-2xl bg-[#E4F2EF] p-5">
     <p className="text-xs font-extrabold uppercase tracking-widest text-[#14675E]">{label}</p>
     <p className="mt-3 font-semibold text-[#132A47]">{note}</p>
    </div>
   </div>
   <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
    <button type="button" disabled={index===0} onClick={()=>setIndex(x=>Math.max(0,x-1))} className="rounded-xl border border-slate-400 px-6 py-3 font-bold text-[#132A47] disabled:opacity-40">{c.prev}</button>
    <span className="text-sm text-slate-500">{c.step} {index+1} {c.of} 6</span>
    <button type="button" className="btn" onClick={()=>setIndex(x=>(x+1)%c.steps.length)}>{index===5?c.restart:c.next}</button>
   </div>
  </section>
  <section aria-labelledby="w15-limit" className="mt-8 rounded-2xl border border-amber-300 bg-amber-50 p-5">
   <h2 id="w15-limit" className="text-xl font-black text-amber-950">{c.limith}</h2>
   <p className="mt-2 leading-relaxed text-amber-950">{c.limit}</p>
  </section>
  <section aria-labelledby="w15-measure" className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
   <h2 id="w15-measure" className="text-xl font-black">{c.comparisonH}</h2>
   <p className="mt-3 leading-relaxed text-slate-700">{c.comparisonCopy}</p>
  </section>
  <div className="mt-8 flex flex-wrap gap-3">
   <Link href="/week15" className="btn outline">{lang==='es'?'Volver a Week 15':'Back to Week 15'}</Link>
   <Link href="/employer-pilot" className="btn">{lang==='es'?'Explorar piloto hipotético':'Explore the hypothetical pilot'}</Link>
  </div>
 </main>;
}

export function Week15Landing(){
 const {lang}=useWeek15Language();
 const c=Copy({lang});
 const es=lang==='es';
 return <main lang={lang} className="mx-auto max-w-6xl px-5 py-12 md:py-20">
  <section className="relative overflow-hidden rounded-3xl bg-[#132A47] p-7 text-white md:p-12">
   <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border-[38px] border-[#237F78]/35" aria-hidden="true"/>
   <div className="relative max-w-4xl">
    <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#91E2D4]">Week 15 · Proof-of-Skill · {es?'Distribución responsable':'Responsible distribution'}</p>
    <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">{es?'Mira la evidencia. Identifica qué preguntar después.':'See the evidence. Know what to ask next.'}</h1>
    <p className="mt-6 text-lg leading-relaxed text-slate-100">{es?'Para pequeñas y medianas empresas mexicanas que evalúan analistas junior. Tras leer un CV, una muestra voluntaria puede ayudar a decidir qué aclarar con una persona, sin certificar habilidades.':'For Mexican SMEs recruiting junior analysts. After reviewing a CV, an optional work sample may help identify what a human reviewer should clarify, without certifying skills.'}</p>
    <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold">
     <span className="rounded-full border border-[#87C7BD] px-4 py-2">{es?'Ejemplo ficticio':'Fictional example'}</span>
     <span className="rounded-full border border-[#87C7BD] px-4 py-2">{es?'Sin certificación':'Not certification'}</span>
     <span className="rounded-full border border-[#87C7BD] px-4 py-2">{es?'Juicio humano':'Human judgment'}</span>
    </div>
   </div>
  </section>
  <p className="mt-6 rounded-xl border border-amber-300 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-amber-950">{es?'Demostración educativa con datos inventados. No se ha medido el beneficio operativo, el esfuerzo del candidato ni la demanda comercial.':'Educational demonstration with invented data. Employer benefit, candidate effort and commercial demand have not been measured.'}</p>
  <section aria-labelledby="w15-resources" className="mt-12">
   <h2 id="w15-resources" className="text-2xl font-black">{es?'Tres recursos independientes':'Three independent resources'}</h2>
   <div className="mt-5 grid gap-5 md:grid-cols-3">
    <article className="surface p-6">
     <p className="eyebrow">A · Beyond the CV</p>
     <h3 className="mt-3 text-xl font-black">{c.headingA}</h3>
     <p className="mt-3 text-sm leading-relaxed text-slate-700">{c.introA}</p>
     <Link className="btn mt-5" href="/week15/carousel">{c.navA}</Link>
    </article>
    <article className="surface p-6">
     <p className="eyebrow">B · Evidence in Action</p>
     <h3 className="mt-3 text-xl font-black">{c.headingB}</h3>
     <p className="mt-3 text-sm leading-relaxed text-slate-700">{c.introB}</p>
     <Link className="btn mt-5" href="/week15/evidence">{c.navB}</Link>
    </article>
    <article className="surface p-6">
     <p className="eyebrow">C · The Human Standard</p>
     <h3 className="mt-3 text-xl font-black">{es?'Evidencia opcional. Consideración equivalente.':'Optional evidence. Equal consideration.'}</h3>
     <p className="mt-3 text-sm leading-relaxed text-slate-700">{es?'Infografía original sobre derechos, límites y decisiones humanas.':'Original infographic about candidate rights, limitations and human judgment.'}</p>
     <Link className="btn mt-5" href="/week15/rights">{es?'Ver derechos':'View candidate rights'}</Link>
    </article>
   </div>
  </section>
  <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-7" aria-labelledby="w15-purpose">
   <h2 id="w15-purpose" className="text-2xl font-black">{es?'Una muestra puede orientar una conversación, no verificar competencia.':'A sample may inform a conversation, not verify competence.'}</h2>
   <p className="mt-3 leading-relaxed text-slate-700">{c.claimCopy}</p>
   <p className="mt-3 leading-relaxed text-slate-700">{c.effortCopy}</p>
  </section>
  <Week15Disclosures kind="carousel"/>
  <section className="mt-12 rounded-3xl bg-[#f3f1eb] p-7 md:p-10">
   <h2 className="text-2xl font-black">{es?'Explora el piloto hipotético para empresas':'Explore the hypothetical employer pilot'}</h2>
   <p className="mt-3 text-slate-700">{es?'No constituye una compra, un proceso de contratación real ni una promesa de ahorro.':'It is not a purchase, an actual hiring process or a promise of savings.'}</p>
   <Link href="/employer-pilot" className="btn mt-5">{es?'Explorar piloto para empresas':'Explore employer pilot'}</Link>
  </section>
 </main>;
}
