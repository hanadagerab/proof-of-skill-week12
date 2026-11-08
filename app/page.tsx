import Link from 'next/link';
export default function Home() {
 return <main className="mx-auto max-w-6xl px-5 py-12 md:py-20">
   <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-xs font-extrabold tracking-wider text-teal-800 border border-teal-200">PROOF-OF-SKILL / WEEK 13 PREVIEW · CANDIDATE-FIRST</div>
   <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_.85fr] items-center">
    <div><p className="eyebrow">Your work already counts</p><h1 className="mt-4 text-5xl md:text-6xl font-black tracking-tight leading-[1.08]">Show the work you <span className="text-[#197a84]">actually did.</span></h1>
      <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">Turn a real project, internship, operational responsibility, or family-business contribution into a clear, reusable description. No extra assessment or Google sign-in required to begin.</p>
      <p className="mt-4 text-sm text-slate-500">Your words stay yours. The result is self-reported—not an employer-verified credential, hiring recommendation, or proof of authorship.</p>
    </div>
    <div className="surface p-6 md:p-8 border-t-4 border-t-[#197a84]"><div className="eyebrow">The useful result</div><p className="mt-4 text-sm font-bold text-slate-500 uppercase tracking-wide">Example only · Candidate-reported</p><div className="mt-3 rounded-xl bg-slate-50 border border-slate-200 p-5 text-slate-800"><p className="text-lg font-semibold leading-relaxed">I organized supplier invoices and tracked which payments required follow-up.</p></div><p className="mt-4 text-xs text-slate-500">No invented savings, job titles, metrics, or employer endorsements. You edit the final statement before copying or saving it on your device.</p></div>
   </div>
   <section aria-labelledby="choose" className="mt-14"><h2 id="choose" className="text-2xl font-black">Choose how you want to begin</h2><p className="mt-2 text-slate-600">Both routes are optional. Choose the one relevant to you.</p>
    <div className="mt-6 grid gap-5 md:grid-cols-2">
     <article className="surface p-7 md:p-9 relative overflow-hidden border-2 border-teal-200"><span className="pill observed">RECOMMENDED FOR EXISTING EXPERIENCE</span><h3 className="mt-5 text-2xl font-black">Describe my existing experience</h3><p className="mt-3 text-slate-600 leading-relaxed">I already did the work. Help me explain it without exaggeration.</p><p className="mt-4 text-sm text-slate-500">Jobs · internships · academic projects · informal work · family businesses</p><Link href="/experience" className="btn mt-7 inline-flex items-center gap-2">Start with my experience <span aria-hidden="true">→</span></Link><p className="mt-3 text-xs text-slate-500">No login · Review and edit · Copy or save locally</p></article>
     <article className="surface p-7 md:p-9"><span className="pill inferred">OPTIONAL PRACTICE</span><h3 className="mt-5 text-2xl font-black">Try a financial skills exercise</h3><p className="mt-3 text-slate-600 leading-relaxed">I want to try the original finance example and see how submitted values are classified.</p><p className="mt-4 text-sm text-slate-500">This is a platform exercise—not proof of previous employment or employer endorsement.</p><Link href="/product" className="btn outline mt-7 inline-flex items-center gap-2">Open the financial exercise <span aria-hidden="true">→</span></Link><p className="mt-3 text-xs text-slate-500">Existing Week 12 exercise preserved</p></article>
    </div>
   </section>
   <section className="mt-14 grid gap-5 md:grid-cols-3">{[
    ['01 / DESCRIBE','Use your own words','Describe what you personally did, how you approached it, and what sources you can safely mention.'],
    ['02 / REVIEW','You control every claim','Read the summary, correct the wording, and decide what you are comfortable sharing.'],
    ['03 / REUSE','Copy something practical','Copy or save a plain-text summary to your device. Nothing goes to an employer automatically.']
   ].map(([k,h,p])=><article key={k} className="surface p-6"><div className="eyebrow">{k}</div><h3 className="font-bold text-xl mt-3">{h}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{p}</p></article>)}</section>
   <p className="mt-10 text-sm text-slate-500">Research status: Five candidate response records informed this iteration, but independent navigation times, three-stranger eligibility, employer adoption, and return visits have not been verified. Week 4's ~2.8× comparison was simulated.</p>
 </main>;
}
