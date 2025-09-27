import { z } from 'zod';
import { longText, mobileValidation, optionalString, requiredString } from '@/validations/stringValidations';
import { optionalFile } from '@/validations/fileValidations';
import { requiredImageSchema } from '@/validations/imageValidations';
import { enumFromArray } from '@/validations';

export const historyFormSchema = z.object({
	parishHistory: longText(10, 'Parish history must be at least 10 characters long'),
	document: optionalFile(),
});

export type HistoryFormType = z.infer<typeof historyFormSchema>;

export const formerParishPriestFormSchema = z.object({
	priestName: requiredString('Priest Name is required'),
	fromDate: requiredString('From Date is required'),
	from: enumFromArray(['diocese', 'congregation'], 'Please select From'),
	dioceseName: optionalString(),
	congregationName: optionalString(),
	tillDate: requiredString('Till Date is required'),
	noOfYears: requiredString('No of Years is required'),
	mobileNumber: mobileValidation('Enter a valid 10-digit Mobile Number'),
	livingStatus: requiredString('Living Status is required'),
	image: requiredImageSchema,
});

export type FormerParishPriestFormType = z.infer<typeof formerParishPriestFormSchema>;

export const formNotificationsFormSchema = z.object({
	title: requiredString('Title is required'),
	document: requiredImageSchema,
});

export type FormNotificationsFormType = z.infer<typeof formNotificationsFormSchema>;
