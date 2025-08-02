import { z } from 'zod';
import {
	requiredString,
	optionalEmail,
	optionalMobileValidation,
	optionalDateWithFormat,
	optionalYear,
	optionalString,
} from '@/validations/stringValidations';
import { enumFromArray } from '@/validations/enumValidations';

export const institutionsFormSchema = z.object({
	category: requiredString('Category is required'),
	schoolType: requiredString('School Type is required'),
	diocesanCategory: requiredString('Diocesan Category is required'),
	schoolName: requiredString('School Name is required'),
	placeName: requiredString('Place Name is required'),
	landOwnership: requiredString('Land Ownership is required'),
	establishedYear: optionalYear('Established Year must be a 4-digit year'),
	s_recognition_date: optionalDateWithFormat('Recognition Date must be in YYYY-MM-DD format'),
	s_recognition_no: optionalString(),
	class_from: requiredString('Please select a class'),
	gender: requiredString('Please select gender'),
	classUpto: requiredString('Please select a class'),
	runBy: requiredString('Please specify who runs the institution'),
	dioceseName: requiredString('Diocese Name is required'),
	medium: requiredString('Please select a medium'),
	management: requiredString('Please select management'),
	optionalContactNumber: optionalMobileValidation(),
	optionalContactMail: optionalEmail(),
});

export type InstitutionsFormData = z.infer<typeof institutionsFormSchema>;

export const noviciateFormSchema = z.object({
	name: requiredString('Name is required'),
	place: requiredString('Place is required'),
	landOwnerShip: requiredString('Land Ownership is required'),
	belongsTo: optionalString(),
	congregationName: requiredString('Congregation Name is required'),
	seminary: requiredString('Seminary is required'),
	mobile_no: optionalMobileValidation(),
	mail_id: optionalEmail(),
	address: optionalString(),
});

export type NoviciateFormData = z.infer<typeof noviciateFormSchema>;

export const communitiesFormSchema = z.object({
	subStationName: requiredString('Sub Station is required'),
	conventType: requiredString('Please select the type of convent'),
	name: requiredString('Name is required'),
	place: requiredString('Place is required'),

	belongsTo: enumFromArray(['diocese', 'congregation'], 'Please select an option'),
	congregation: requiredString('Please select a congregation'),
	abbreviation: requiredString('Please select an abbreviation'),

	establishedDate: optionalDateWithFormat('Established Date must be in YYYY-MM-DD format'),
	establishedBy: optionalString(),

	landOwnership: requiredString('Land Ownership is required'),
	address: optionalString(),

	mobile_no: optionalMobileValidation(),
	mail_id: optionalEmail(),
});

export type CommunitiesFormData = z.infer<typeof communitiesFormSchema>;
