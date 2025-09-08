import { z } from 'zod';
import { longText } from '@/validations/stringValidations';
import { optionalFile } from '@/validations/fileValidations';

export const historyFormSchema = z.object({
	parishHistory: longText(10, 'Parish history must be at least 10 characters long'),
	document: optionalFile(),
});

export type HistoryFormType = z.infer<typeof historyFormSchema>;
