import { z } from 'zod';
import { requiredString } from '@/validations/stringValidations';
import { enumFromArray } from '@/validations/enumValidations';
import { optionalFileValidation } from '@/validations/fileValidations';
import { requiredDate } from '@/validations';

export const sermonSchema = z.object({
	writtenBy: requiredString('Written By is required'),
	year: enumFromArray(['A', 'B', 'C'], 'Year is required'),
	season: requiredString('Season is required'),
	week: requiredString('Week is required'),
	date: requiredDate('Date is required'),
	day: requiredString('Day is required'),
	document: optionalFileValidation('Please upload a valid file'),
	description: requiredString('Description is required'),
});

export type SermonFormValues = z.infer<typeof sermonSchema>;

export const requestSchema = z.object({
	parish: requiredString('Parish is required'),
	priests: requiredString('Priest is required'),
	requestFor: requiredString('Request For is required'),
	description: requiredString('Description is required'),
});

export type RequestFormValues = z.infer<typeof requestSchema>;

export const yearSelectionSchema = z.object({
	year_type: enumFromArray(['current_year', 'next_year'], 'Please select a year type'),
});

export type YearSelectionFormValues = z.infer<typeof yearSelectionSchema>;
