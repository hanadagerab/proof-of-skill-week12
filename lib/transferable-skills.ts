import {suggestTransferableSkills as suggestJS, approvedSkillLines as linesJS} from './transferable-skills.mjs';
import type {ExperienceInput} from './experience';
export type TargetJob='unspecified'|'administration'|'operations'|'analyst'|'other';
export type TransferableSkill={id:string;label:string;evidence:string;source:'candidate-reported'};
export const suggestTransferableSkills=suggestJS as (input:Pick<ExperienceInput,'activity'|'decisions'>,targetJob?:TargetJob,locale?:'en'|'es')=>TransferableSkill[];
export const approvedSkillLines=linesJS as (suggestions:TransferableSkill[],selectedIds:string[],locale?:'en'|'es',targetJob?:TargetJob)=>string[];
