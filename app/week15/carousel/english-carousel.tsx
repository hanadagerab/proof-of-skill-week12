'use client';
import Link from 'next/link';
import Image from 'next/image';
const images=['01-cv-en.svg','02-contexto-en.svg','03-limites-en.svg','04-pregunta-en.svg'];
const summaries=['A CV alone cannot show how someone handled a problem.','A relevant, voluntary work sample can add context.','A file does not certify authorship or skill.','The next question belongs to a human evaluator.'];
const alts=['A CV cannot tell the full story','A sample adds useful context','Evidence has real limits','The next question is human'];
export default function EnglishCarousel(){return <main lang="en" className="mx-auto max-w-5xl px-4 py-12 md:py-20">
<p className="eyebrow">Beyond the CV · Asset A · Four panels</p><h1 className="mt-3 text-4xl font-black">What a CV leaves unanswered</h1>
<p className="mt-4 text-slate-700">A ready-to-share four-slide educational carousel. Each original English-language SVG can be downloaded or linked separately. No actual candidate or employer data was used.</p>
<div className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6" aria-label="Four-panel educational carousel">{images.map((item,i)=><figure key={item} className="w-[min(82vw,460px)] shrink-0 snap-start"><Image unoptimized width={1080} height={1080} src={`/week15/carousel/${item}`} alt={alts[i]} className="w-full rounded-2xl border border-slate-200 shadow-sm" loading={i===0?'eager':'lazy'}/><figcaption className="mt-3 flex items-center justify-between text-sm"><span>Panel {i+1} of four</span><a className="font-bold underline text-[#14675E]" download={item} href={`/week15/carousel/${item}`}>Download English SVG</a></figcaption><p className="mt-3 text-base leading-relaxed text-slate-700 md:hidden">{summaries[i]}</p></figure>)}</div>
<p className="text-sm text-slate-600">Swipe horizontally to browse the slides. Share all four in sequence with the qualifying language intact.</p>
<div className="mt-10 flex flex-wrap gap-3"><Link className="btn" href="/week15">Back to launch</Link><Link className="btn outline" href="/week15/evidence">Explore the fictional example</Link></div></main>}