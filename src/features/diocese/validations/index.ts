import { z } from 'zod';

const fileValidation = z.custom<File>().refine((file) => file instanceof File && file.size > 0, {
	message: 'Image file is required',
});

const mobileValidation = z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number');

const emailValidation = z.string().email('Invalid email address');

const optionalEmail = z.union([emailValidation, z.literal('')]).optional();

const commissionsSchema = z.object({
	commission: z.string().nonempty('Commission is required'),
	position: z.string().nonempty('Commission Name is required'),
	select_position: z.string().nonempty('Position is required'),
	category_from: z.string().nonempty('Person category is required'),
	personName: z.string().nonempty('Person name is required'),
	status: z.string().nonempty('Status is required'),
	electionConductedOn: z.string().nonempty('From the year is required'),
	toYear: z.string().nonempty('To the year is required'),
	mobileNumber: mobileValidation,
	address: z.string().nonempty('Address is required'),
	image: fileValidation,
});

const committeeSchema = z.object({
	committee: z.string().nonempty('Committee is required'),
	committeePosition: z.string().nonempty('Position is required'),
	position: z.string().nonempty('Category is required'),
	personName: z.string().nonempty('Name is required'),
	status: z.string().nonempty('Status is required'),
	electionConductedOn: z.string().nonempty('From Year is required'),
	toYear: z.string().nonempty('To Year is required'),
	mobileNumber: mobileValidation,
	address: z.string().nonempty('Address is required'),
	image: fileValidation,
});

const socialServiceSocietyTypeSchema = z.object({
	society: z.string().nonempty('SSS is required'),
	category: z.string().nonempty('Category is required'),
	personName: z.string().nonempty('Name is required'),
	status: z.string().nonempty('Status is required'),
	electionConductedOn: z.string().nonempty('From Year is required'),
	toYear: z.string().nonempty('To Year is required'),
	address: z.string().nonempty('Address is required'),
	mobileNumber: mobileValidation,
	image: fileValidation,
});

const houseListSchema = z.object({
	parishName: z.string().nonempty('Parish name is required'),
	churchName: z.string().nonempty('Name of the Church is required'),
	vicariate: z.string().nonempty('Vicariate is required'),
	houseType: z.string().nonempty('Name of the House type is required'),
	houseName: z.string().nonempty('Name of the House is required'),
	housePlace: z.string().nonempty('Place of the House is required'),
	incardinatedTo: z.enum(['diocese', 'pontifical', 'public'], {
		required_error: 'Incardinated To is required',
	}),
	congregation: z.string().nonempty('Congregation is required'),
	abbreviation: z.string().nonempty('Abbreviation is required'),
	establishedOn: z.string().optional(),
	establishedBy: z.string().optional(),
	landOwnership: z.string().nonempty('Land Ownership is required'),
	contactAddress: z.string().optional(),
	contactNumber: z.string().optional(),
	recognitionNumber: z.string().optional(),
});

const institutionsFormSchema = z.object({
	category: z.string().nonempty('Category is required'),
	schoolCategory: z.string().nonempty('School Category is required'),
	instituteName: z.string().nonempty('Institute Name is required'),
	place: z.string().nonempty('Place is required'),
	parish: z.string().nonempty('Parish is required'),
	vicariate: z.string().nonempty('Vicariate is required'),
	landOwnership: z.string().nonempty('Land Ownership is required'),
	establishedYear: z.string().optional(),
	gender: z.string().nonempty('Gender is required'),
	classFrom: z.string().nonempty('Starting class is required'),
	runBy: z.string().nonempty('Run By is required'),
	congregation: z.string().nonempty('Congregation is required'),
	medium: z.string().nonempty('Medium is required'),
	management: z.string().nonempty('Management is required'),
	mobile: z.string().optional(),
	email: optionalEmail,
	address: z.string().optional(),
	gradeName: z.string().optional(),
});

const vocationalListSchema = z.object({
	noviciateName: z.string().nonempty('Name of the Noviciate is required'),
	placeName: z.string().nonempty('Name of the Place is required'),
	parish: z.string().nonempty('Parish is required'),
	vicariate: z.string().nonempty('Vicariate is required'),
	landOwnership: z.string().nonempty('Land Ownership is required'),
	belongsTo: z.string().nonempty('Belongs To is required'),
	congregationName: z.string().nonempty('Name of the Congregation is required'),
	seminary: z.string().nonempty('Seminary is required'),
	mobileNo: z
		.string()
		.optional()
		.refine((val) => !val || /^[6-9]\d{9}$/.test(val), { message: 'Invalid mobile number' }),
	mailId: optionalEmail,
	address: z.string().optional(),
});

// Types
type CommissionsType = z.infer<typeof commissionsSchema>;
type CommitteeType = z.infer<typeof committeeSchema>;
type SocialServiceSocietyType = z.infer<typeof socialServiceSocietyTypeSchema>;
type HouseListType = z.infer<typeof houseListSchema>;
type InstitutionsType = z.infer<typeof institutionsFormSchema>;
type VocationalListType = z.infer<typeof vocationalListSchema>;

export {
	commissionsSchema,
	committeeSchema,
	socialServiceSocietyTypeSchema,
	houseListSchema,
	institutionsFormSchema,
	vocationalListSchema,
};

export type {
	CommissionsType,
	CommitteeType,
	SocialServiceSocietyType,
	HouseListType,
	InstitutionsType,
	VocationalListType,
};
