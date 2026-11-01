export function classify(input: {revenue:number|null;cost:number|null;claimedMargin:number|null;sourceNotes:string;assistance:string;isSynthetic:boolean}): {items:Array<{criterion:string;category:string;supports:string;limitation:string}>;prohibited:string[];humanNextAction:string;status:string;isSynthetic:boolean};
export const CATEGORIES:readonly string[];
