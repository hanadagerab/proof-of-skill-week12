import {writeTemporaryDraft as writeJS,consumeTemporaryDraft as consumeJS,clearTemporaryDraft as clearJS} from './experience-oauth-draft.mjs';
import type {ExperienceInput} from './experience';
import type {TargetJob} from './transferable-skills';

export type ExperienceOAuthDraft={
 form:ExperienceInput;lang:'en'|'es';targetJob:TargetJob;
 generated:boolean;bullet:string;selectedSkillIds:string[]
};
type StorageLike=Pick<Storage,'setItem'|'getItem'|'removeItem'>;
export const writeTemporaryDraft=writeJS as (storage:StorageLike,state:ExperienceOAuthDraft,now?:number)=>boolean;
export const consumeTemporaryDraft=consumeJS as (storage:StorageLike,now?:number)=>ExperienceOAuthDraft|null;
export const clearTemporaryDraft=clearJS as (storage:StorageLike)=>void;
