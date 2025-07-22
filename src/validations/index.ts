import { z } from 'zod';

export const familySearchSchema = z.object({
	search_by_family: z.enum(['family_no', 'marriage_date', 'family_mobile_no'], {
		required_error: 'Please select a search field',
	}),
	search_value: z.string().min(1, 'This field is required'),
});

export type FamilySearchForm = z.infer<typeof familySearchSchema>;

export const memberSearchSchema = z.object({
	search_by_member: z.enum(['member_id', 'family_no', 'member_mobile_no'], {
		required_error: 'Please select a search field',
	}),
	search_value: z.string().min(1, 'This field is required'),
});

export type MemberSearchForm = z.infer<typeof memberSearchSchema>;

export const historyFormSchema = z.object({
	parishHistory: z.string().min(10, 'Parish history must be at least 10 characters long'),
	document: z.any().optional(),
});

export type HistoryFormType = z.infer<typeof historyFormSchema>;

export const yearSelectionSchema = z.object({
	year_type: z.enum(['current_year', 'next_year'], {
		required_error: 'Please select a year type',
	}),
});

export type YearSelectionFormValues = z.infer<typeof yearSelectionSchema>;

export const uploadSchema = z.object({
	document: z
		.instanceof(FileList)
		.refine((files) => files.length > 0, {
			message: 'File is required',
		})
		.refine((files) => files[0]?.size <= 5 * 1024 * 1024, {
			message: 'Max file size is 5MB',
		})
		.refine(
			(files) => {
				const allowedTypes = [
					'application/pdf',
					'application/vnd.ms-excel',
					'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
				];
				return allowedTypes.includes(files[0]?.type);
			},
			{
				message: 'Only PDF and Excel files are allowed',
			}
		),
});

export type UploadSchema = z.infer<typeof uploadSchema>;

export const requestSchema = z.object({
	parish: z.string().min(1, 'Parish is required'),
	priests: z.string().min(1, 'Priest is required'),
	requestFor: z.string().min(1, 'Request For is required'),
	description: z.string().min(1, 'Description is required'),
});

export type RequestFormValues = z.infer<typeof requestSchema>;
