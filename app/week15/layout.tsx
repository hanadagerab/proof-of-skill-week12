import {Week15LanguageProvider,Week15LanguageSwitch} from './language';
import Link from 'next/link';
export default function Week15Layout({children}:{children:React.ReactNode}){return <Week15LanguageProvider><div className="mx-auto max-w-6xl px-5 pt-5 flex flex-wrap items-center justify-between gap-3"><Link className="text-sm font-semibold text-[#14675E] underline" href="/week15">Week 15 · Proof-of-Skill</Link><Week15LanguageSwitch/></div>{children}</Week15LanguageProvider>;}
