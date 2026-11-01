import type {EvidenceInput,EvidenceSummary} from './engine';
export function buildSubmissionRecord(userId:string,input:EvidenceInput,summary:EvidenceSummary): {
 user_id:string;task_slug:string;
 answers:{revenue:number|null;cost:number|null;claimedMargin:number|null;sourceNotes:string;isSynthetic:boolean};
 disclosure:{assistance:EvidenceInput['assistance']};summary:EvidenceSummary;
};
