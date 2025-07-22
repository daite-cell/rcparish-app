import { z } from 'zod';

export const sermonSchema = z.object({
	writtenBy: z.string().min(1, 'Written By is required'),
	year: z.enum(['A', 'B', 'C'], { required_error: 'Year is required' }),
	season: z.string().min(1, 'Season is required'),
	week: z.string().min(1, 'Week is required'),
	date: z.string().min(1, 'Date is required'),
	day: z.string().min(1, 'Day is required'),
	document: z.any().optional(),
	description: z.string().min(1, 'Description is required'),
});

export type SermonFormValues = z.infer<typeof sermonSchema>;
