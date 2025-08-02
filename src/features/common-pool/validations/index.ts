import { z } from 'zod';
import { requiredString } from '@/validations/stringValidations';
import { enumFromArray } from '@/validations/enumValidations';

export const familySearchSchema = z.object({
	search_by_family: enumFromArray(['family_no', 'marriage_date', 'family_mobile_no'], 'Please select a search field'),
	search_value: requiredString('Search value is required'),
});

export type FamilySearchForm = z.infer<typeof familySearchSchema>;

export const memberSearchSchema = z.object({
	search_by_member: enumFromArray(['member_id', 'family_no', 'member_mobile_no'], 'Please select a search field'),
	search_value: requiredString('Search value is required'),
});

export type MemberSearchForm = z.infer<typeof memberSearchSchema>;
