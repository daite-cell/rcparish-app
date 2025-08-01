import { z } from 'zod';
import { requiredString } from '@/validations/stringValidations';
import { enumFromArray } from '@/validations/enumValidations';
import {
	fileValidation as requiredImageSchema,
	optionalFileValidation as optionalImageSchema,
} from '@/validations/fileValidations';
import { requiredDate } from '@/validations';

export const chroniclesSchema = z.object({
	date: requiredDate('Date is required'),
	event: requiredString('Event is required'),
	description: requiredString('Description is required'),
	extendPeriod: enumFromArray(['yes', 'no'], 'Please select an option'),
	image1: requiredImageSchema('Image 1 is required'),
	image2: optionalImageSchema('Image 2 cannot be empty'),
	image3: optionalImageSchema('Image 3 cannot be empty'),
});

export type ChroniclesType = z.infer<typeof chroniclesSchema>;
