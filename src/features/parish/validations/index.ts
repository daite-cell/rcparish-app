import { z } from 'zod';

export const historyFormSchema = z.object({
	parishHistory: z.string().min(10, 'Parish history must be at least 10 characters long'),
	document: z.any().optional(),
});

export type HistoryFormType = z.infer<typeof historyFormSchema>;
