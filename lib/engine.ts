import {classify as classifyJS} from './engine.mjs';
export type Category='OBSERVED'|'INFERRED'|'MISSING'|'UNVERIFIED';
export type EvidenceInput={revenue:number|null;cost:number|null;claimedMargin:number|null;sourceNotes:string;assistance:'none'|'ai'|'other'|'unspecified';isSynthetic:boolean};
export type EvidenceItem={criterion:string;category:Category;supports:string;limitation:string};
export type EvidenceSummary={items:EvidenceItem[];prohibited:string[];humanNextAction:string;status:string;isSynthetic:boolean};
export const classify=classifyJS as (input:EvidenceInput)=>EvidenceSummary;
