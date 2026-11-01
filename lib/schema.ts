import {z} from 'zod';
export const inputSchema=z.object({revenue:z.number().finite().min(0).max(1e12).nullable(),cost:z.number().finite().min(0).max(1e12).nullable(),claimedMargin:z.number().finite().min(-100000).max(100000).nullable(),sourceNotes:z.string().max(1200),assistance:z.enum(['none','ai','other','unspecified']),isSynthetic:z.boolean()});
export type ValidInput=z.infer<typeof inputSchema>;
