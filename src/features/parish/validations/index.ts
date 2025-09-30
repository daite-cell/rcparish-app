import { z } from 'zod';
import { longText, mobileValidation, optionalString, requiredString } from '@/validations/stringValidations';
import { optionalFile, requiredDocumentSchema } from '@/validations/fileValidations';
import { requiredImageSchema } from '@/validations/imageValidations';
import { enumFromArray } from '@/validations';

export const historyFormSchema = z.object({
	parishHistory: longText(10, 'Parish history must be at least 10 characters long'),
	document: optionalFile(),
});

export type HistoryFormType = z.infer<typeof historyFormSchema>;

export const formerParishPriestFormSchema = z
	.object({
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
	})
	.superRefine((data, ctx) => {
		if (data.from === 'diocese' && !data.dioceseName) {
			ctx.addIssue({
				path: ['dioceseName'],
				code: z.ZodIssueCode.custom,
				message: 'Diocese Name is required when From is Diocese',
			});
		}

		if (data.from === 'congregation' && !data.congregationName) {
			ctx.addIssue({
				path: ['congregationName'],
				code: z.ZodIssueCode.custom,
				message: 'Congregation is required when From is Congregation',
			});
		}
	});

export type FormerParishPriestFormType = z.infer<typeof formerParishPriestFormSchema>;

export const formNotificationsFormSchema = z.object({
	title: requiredString('Title is required'),
	document: requiredDocumentSchema,
});

export type FormNotificationsFormType = z.infer<typeof formNotificationsFormSchema>;

export const parishActivitiesFormSchema = z.object({
	subStationName: requiredString('Sub Station Name is required'),

	massTimings: z
		.array(
			z.object({
				day: optionalString(),
				time: optionalString(),
				title: optionalString(),
				remark: optionalString(),
			})
		)
		.optional(),

	festivalDetails: z
		.array(
			z.object({
				event_type: optionalString(),
				date: optionalString(),
				day: optionalString(),
				time: optionalString(),
				organized_by: optionalString(),
				remark: optionalString(),
			})
		)
		.optional(),

	yearPlans: z
		.array(
			z.object({
				date: optionalString(),
				event_name: optionalString(),
				day: optionalString(),
				time: optionalString(),
				organized_by: optionalString(),
				remark: optionalString(),
			})
		)
		.optional(),

	monthlyMeetings: z
		.array(
			z.object({
				association_name: optionalString(),
				week: optionalString(),
				day: optionalString(),
				time: optionalString(),
				organized_by: optionalString(),
				remark: optionalString(),
			})
		)
		.optional(),

	anbiamMeetings: z
		.array(
			z.object({
				anbiam_name: optionalString(),
				week: optionalString(),
				day: optionalString(),
				time: optionalString(),
				organized_by: optionalString(),
				remark: optionalString(),
			})
		)
		.optional(),
});

export type ParishActivitiesFormType = z.infer<typeof parishActivitiesFormSchema>;

export const subStationsFormSchema = z
	.object({
		hasSubStation: enumFromArray(['yes', 'no'], 'Please select Sub-Station existence'),
		parishName: requiredString('Parish Name is required'),

		subStationName: optionalString(),
		churchAvailability: enumFromArray(['yes', 'no'], 'Please select Church Availability').optional(),
		subStationChurchName: z.string().optional(),
		subStationHistory: optionalString(),
		catechistName: optionalString(),
		catechistMobile: mobileValidation('Enter a valid 10-digit Mobile Number').optional(),
		image: requiredImageSchema.optional(),
	})
	.superRefine((data, ctx) => {
		if (data.hasSubStation === 'yes') {
			if (!data.subStationName?.trim()) {
				ctx.addIssue({
					path: ['subStationName'],
					code: z.ZodIssueCode.custom,
					message: 'Sub-Station Name is required',
				});
			}
			if (!data.churchAvailability) {
				ctx.addIssue({
					path: ['churchAvailability'],
					code: z.ZodIssueCode.custom,
					message: 'Please select Church Availability',
				});
			}
			if (!data.image) {
				ctx.addIssue({
					path: ['image'],
					code: z.ZodIssueCode.custom,
					message: 'Image is required',
				});
			}
		}

		if (data.churchAvailability === 'yes' && !data.subStationChurchName?.trim()) {
			ctx.addIssue({
				path: ['subStationChurchName'],
				code: z.ZodIssueCode.custom,
				message: 'Sub-station Church Name is required when Church Availability is Yes',
			});
		}
	});

export type SubStationsFormType = z.infer<typeof subStationsFormSchema>;
