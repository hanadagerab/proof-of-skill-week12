import Link from 'next/link';
export default function About(){
 return <main className="mx-auto max-w-4xl px-5 py-14"><span className="eyebrow">Our approach / candidate agency</span><h1 className="mt-4 text-5xl font-black">What can this tool actually show?</h1>
 <p className="mt-6 text-lg leading-relaxed text-slate-700">People can gain analytical skills through paid work, internships, university projects, informal employment and family businesses. Proof-of-Skill helps candidates describe that work clearly, without pretending to verify their employment or requiring an unrelated new assessment.</p>
 <div className="mt-9 grid gap-5 md:grid-cols-2">
  <section className="surface p-7"><h2 className="text-xl font-black">Candidate-described experience</h2><p className="mt-3 text-slate-600">You write what you actually did, the analysis you used, evidence you can safely describe, and limits. The tool structures and labels your own statements; it does not independently check them.</p><Link href="/experience" className="btn mt-5">Describe my experience →</Link></section>
  <section className="surface p-7"><h2 className="text-xl font-black">Optional platform exercise</h2><p className="mt-3 text-slate-600">Our original financial task checks numerical consistency under submitted assumptions. A work-sample exercise is not proof of past employment, authorship, credentials or a previous employer's endorsement.</p><Link href="/product" className="btn outline mt-5">Try the finance exercise →</Link></section>
 </div>
 <section className="surface mt-6 p-7"><h2 className="text-2xl font-black">Privacy and candidate control</h2><div className="mt-4 space-y-3 text-slate-700">
  <p>Do not enter confidential client names, supplier prices, employee records, company files, passwords or unpublished financial information.</p>
  <p>The experience-description pathway is available without login; you can edit, copy or download a text file to your own device. <strong>It does not save to our cloud database or send anything to an employer.</strong></p>
  <p>The separate finance exercise retains existing optional Google account saving and user-owned Supabase records. Existing saved finance summaries are not touched by the Week 13 route.</p>
  <p>Only you decide whether, where and with whom to share your description. This platform does not award credentials, rank applicants, verify job history or make hiring decisions.</p>
 </div></section>
 <section className="mt-7 rounded-2xl bg-slate-100 p-7"><h2 className="text-xl font-black">Evidence and research limitations</h2><p className="mt-3 leading-relaxed text-slate-700">Five supplied qualitative response records highlighted relevance, extra effort, inclusive guidance and honest evidence boundaries. They do not establish observed task times, independently verified strangers, consent to publish direct quotations, return visits or hiring effects. The earlier Week 4 49.2-versus-17.5-minute comparison (approximately 2.8×) was simulated, not a validated result.</p></section>
 </main>;
}
