import { optionalImageSchema, requiredImageSchema } from '@/validations';
import { z } from 'zod';

export const chroniclesSchema = z.object({
	date: z.string().min(1, 'Date is required'),
	event: z.string().min(1, 'Event is required'),
	description: z.string().min(1, 'Description is required'),
	extendPeriod: z.enum(['yes', 'no'], {
		required_error: 'Please select an option',
	}),
	image1: requiredImageSchema,
	image2: optionalImageSchema,
	image3: optionalImageSchema,
});

export type ChroniclesType = z.infer<typeof chroniclesSchema>;
