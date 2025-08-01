import { z } from 'zod';
import {
	requiredString,
	mobileValidation,
	optionalMobileValidation,
	optionalEmail,
} from '@/validations/stringValidations';
import { fileValidation } from '@/validations/fileValidations';

const commissionsSchema = z.object({
	commission: requiredString('Commission is required'),
	position: requiredString('Commission Name is required'),
	select_position: requiredString('Position is required'),
	category_from: requiredString('Person category is required'),
	personName: requiredString('Person name is required'),
	status: requiredString('Status is required'),
	electionConductedOn: requiredString('From the year is required'),
	toYear: requiredString('To the year is required'),
	mobileNumber: mobileValidation('Enter a valid 10-digit mobile number'),
	address: requiredString('Address is required'),
	image: fileValidation('Image file is required'),
});

const committeeSchema = z.object({
	committee: requiredString('Committee is required'),
	committeePosition: requiredString('Position is required'),
	position: requiredString('Category is required'),
	personName: requiredString('Name is required'),
	status: requiredString('Status is required'),
	electionConductedOn: requiredString('From Year is required'),
	toYear: requiredString('To Year is required'),
	mobileNumber: mobileValidation('Enter a valid 10-digit mobile number'),
	address: requiredString('Address is required'),
	image: fileValidation('Image file is required'),
});

const socialServiceSocietyTypeSchema = z.object({
	society: requiredString('SSS is required'),
	category: requiredString('Category is required'),
	personName: requiredString('Name is required'),
	status: requiredString('Status is required'),
	electionConductedOn: requiredString('From Year is required'),
	toYear: requiredString('To Year is required'),
	address: requiredString('Address is required'),
	mobileNumber: mobileValidation('Enter a valid 10-digit mobile number'),
	image: fileValidation('Image file is required'),
});

const houseListSchema = z.object({
	parishName: requiredString('Parish name is required'),
	churchName: requiredString('Name of the Church is required'),
	vicariate: requiredString('Vicariate is required'),
	houseType: requiredString('Name of the House type is required'),
	houseName: requiredString('Name of the House is required'),
	housePlace: requiredString('Place of the House is required'),
	incardinatedTo: z.enum(['diocese', 'pontifical', 'public'], {
		required_error: 'Incardinated To is required',
	}),
	congregation: requiredString('Congregation is required'),
	abbreviation: requiredString('Abbreviation is required'),
	establishedOn: z.string().optional(),
	establishedBy: z.string().optional(),
	landOwnership: requiredString('Land Ownership is required'),
	contactAddress: z.string().optional(),
	contactNumber: z.string().optional(),
	recognitionNumber: z.string().optional(),
});

const institutionsFormSchema = z.object({
	category: requiredString('Category is required'),
	schoolCategory: requiredString('School Category is required'),
	instituteName: requiredString('Institute Name is required'),
	place: requiredString('Place is required'),
	parish: requiredString('Parish is required'),
	vicariate: requiredString('Vicariate is required'),
	landOwnership: requiredString('Land Ownership is required'),
	establishedYear: z.string().optional(),
	gender: requiredString('Gender is required'),
	classFrom: requiredString('Starting class is required'),
	runBy: requiredString('Run By is required'),
	congregation: requiredString('Congregation is required'),
	medium: requiredString('Medium is required'),
	management: requiredString('Management is required'),
	mobile: optionalMobileValidation('Enter a valid mobile number'),
	email: optionalEmail(),
	address: z.string().optional(),
	gradeName: z.string().optional(),
});

const vocationalListSchema = z.object({
	noviciateName: requiredString('Name of the Noviciate is required'),
	placeName: requiredString('Name of the Place is required'),
	parish: requiredString('Parish is required'),
	vicariate: requiredString('Vicariate is required'),
	landOwnership: requiredString('Land Ownership is required'),
	belongsTo: requiredString('Belongs To is required'),
	congregationName: requiredString('Name of the Congregation is required'),
	seminary: requiredString('Seminary is required'),
	mobileNo: optionalMobileValidation('Invalid mobile number'),
	mailId: optionalEmail(),
	address: z.string().optional(),
});

const uploadSchema = z.object({
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

type CommissionsType = z.infer<typeof commissionsSchema>;
type CommitteeType = z.infer<typeof committeeSchema>;
type SocialServiceSocietyType = z.infer<typeof socialServiceSocietyTypeSchema>;
type HouseListType = z.infer<typeof houseListSchema>;
type InstitutionsType = z.infer<typeof institutionsFormSchema>;
type VocationalListType = z.infer<typeof vocationalListSchema>;
type UploadSchema = z.infer<typeof uploadSchema>;

export {
	commissionsSchema,
	committeeSchema,
	socialServiceSocietyTypeSchema,
	houseListSchema,
	institutionsFormSchema,
	vocationalListSchema,
	uploadSchema,
};

export type {
	CommissionsType,
	CommitteeType,
	SocialServiceSocietyType,
	HouseListType,
	InstitutionsType,
	VocationalListType,
	UploadSchema,
};
