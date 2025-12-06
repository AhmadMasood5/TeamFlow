import {z} from 'zod';
export const worspaceSchema =z.object({
    name : z.string().min(3).max(50),
})