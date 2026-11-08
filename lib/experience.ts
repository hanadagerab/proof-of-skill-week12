import {buildExperienceSummary as buildJS,summaryForCopy as copyJS,validateExperience as validateJS} from './experience.mjs';
export type ExperienceType='job'|'internship'|'academic'|'informal'|'family';
export type AssistanceType='unspecified'|'none'|'ai'|'other';
export type ExperienceInput={type:ExperienceType;activity:string;decisions:string;support:string;limits:string;assistance:AssistanceType};
export type ExperienceSummary={kind:'candidate-described-experience';type:ExperienceType;resumeBullet:string;activity:string;decisions:string;support:string;limits:string;assistance:AssistanceType;verification:string;disclaimer:string};
export type ExperienceErrors=Partial<Record<keyof ExperienceInput,string>>;
export const validateExperience=validateJS as (input:ExperienceInput)=>{valid:boolean;errors:ExperienceErrors};
export const buildExperienceSummary=buildJS as (input:ExperienceInput)=>({ok:true;summary:ExperienceSummary}|{ok:false;errors:ExperienceErrors});
export const summaryForCopy=copyJS as (summary:ExperienceSummary,editedBullet?:string,locale?:'en'|'es')=>string;
