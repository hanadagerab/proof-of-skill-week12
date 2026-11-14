import type {Metadata} from 'next';
import Link from 'next/link';
import './globals.css';
export const metadata:Metadata={
 title:'Proof-of-Skill | Your experience, your evidence',
 description:'Describe your existing work honestly, review your own evidence, or try an optional finance exercise. Candidate-reported, not employer verified.'
};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body>
 <header className="bg-[#132a47] text-white"><div className="mx-auto max-w-6xl px-5 py-5 flex flex-wrap items-center justify-between gap-5">
  <Link href="/" className="font-black text-xl">◈ Proof-of-Skill <span className="text-sm text-[#eabda1]">/ WEEK 14 PREVIEW</span></Link>
  <nav aria-label="Main navigation" className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold">
   <Link href="/" className="hover:underline">Home</Link>
   <Link href="/experience" className="text-[#b7ece6] hover:underline">My experience</Link>
   <Link href="/product" className="hover:underline">Finance exercise</Link>
   <Link href="/employer-pilot" className="text-[#b7ece6] hover:underline">Employer pilot / Empresas</Link>
   <Link href="/about" className="hover:underline">About</Link>
  </nav>
 </div></header>
 {children}
 <footer className="mx-auto max-w-6xl px-5 py-10 text-xs text-slate-500">Hana Dager Abascal · The Stack, Week 14 · Candidate-reported experiences are not independently verified · No automatic hiring decision.</footer>
 </body></html>;
}
