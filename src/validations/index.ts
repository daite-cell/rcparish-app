import { z } from 'zod';

export const familySearchSchema = z.object({
	search_by_family: z.enum(['family_no', 'marriage_date', 'family_mobile_no'], {
		required_error: 'Please select a search field',
	}),
	search_value: z.union([z.string().min(1), z.date()]),
});

export type FamilySearchForm = z.infer<typeof familySearchSchema>;

export const memberSearchSchema = z.object({
	search_by_family: z.enum(['member_id', 'family_no', 'member_mobile_no'], {
		required_error: 'Please select a search field',
	}),
	search_value: z.string().min(1, 'This field is required'),
});

export type MemberSearchForm = z.infer<typeof memberSearchSchema>;
