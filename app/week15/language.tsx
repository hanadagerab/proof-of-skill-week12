'use client';
import {createContext,useContext,useEffect,useState,type ReactNode} from 'react';
export type Week15Lang='en'|'es';
type LanguageContext={lang:Week15Lang;setLang:(lang:Week15Lang)=>void};
const Context=createContext<LanguageContext|undefined>(undefined);
const KEY='proof-of-skill-week15-language';
export function Week15LanguageProvider({children}:{children:ReactNode}){
 const [lang,setLang]=useState<Week15Lang>('es');
 useEffect(()=>{
   try {
     const saved=window.localStorage.getItem(KEY);
     const query=new URLSearchParams(window.location.search).get('lang');
     setLang(query==='es'||query==='en'?query:saved==='en'?'en':'es');
   } catch { /* Persisted preference is optional; Spanish is the new-visitor Week 15 default; global candidate flows are unchanged. */ }
 },[]);
 const change=(value:Week15Lang)=>{setLang(value);try{window.localStorage.setItem(KEY,value);}catch{ /* usable without storage */ }};
 return <Context.Provider value={{lang,setLang:change}}>{children}</Context.Provider>;
}
export function useWeek15Language(){const ctx=useContext(Context);if(!ctx)throw new Error('Week15LanguageProvider missing');return ctx;}
export function Week15LanguageSwitch(){
 const {lang,setLang}=useWeek15Language();
 return <div role="group" aria-label={lang==='es'?'Idioma del contenido de la semana 15':'Week 15 content language'} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white p-1 text-sm font-bold text-[#132A47]">
  <button type="button" lang="en" aria-pressed={lang==='en'} onClick={()=>setLang('en')} className={'rounded-lg px-3 py-2 '+(lang==='en'?'bg-[#132A47] text-white':'hover:bg-slate-100')}>English</button>
  <button type="button" lang="es" aria-pressed={lang==='es'} onClick={()=>setLang('es')} className={'rounded-lg px-3 py-2 '+(lang==='es'?'bg-[#132A47] text-white':'hover:bg-slate-100')}>Español</button>
 </div>;
}
