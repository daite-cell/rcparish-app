import { z } from 'zod';
import {
	requiredString,
	mobileValidation,
	optionalMobileValidation,
	optionalEmail,
	optionalString,
	aadhaarValidation,
	emailValidation,
} from '@/validations/stringValidations';
import { fileValidation } from '@/validations/fileValidations';
import { enumFromArray } from '@/validations';

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
	incardinatedTo: enumFromArray(['diocese', 'pontifical', 'public'], 'Incardinated To is required'),

	congregation: requiredString('Congregation is required'),
	abbreviation: requiredString('Abbreviation is required'),
	establishedOn: optionalString(),
	establishedBy: optionalString(),
	landOwnership: requiredString('Land Ownership is required'),
	contactAddress: optionalString(),
	contactNumber: optionalString(),
	recognitionNumber: optionalString(),
});

const institutionsFormSchema = z.object({
	category: requiredString('Category is required'),
	schoolCategory: requiredString('School Category is required'),
	instituteName: requiredString('Institute Name is required'),
	place: requiredString('Place is required'),
	parish: requiredString('Parish is required'),
	vicariate: requiredString('Vicariate is required'),
	landOwnership: requiredString('Land Ownership is required'),
	establishedYear: optionalString(),
	gender: requiredString('Gender is required'),
	classFrom: requiredString('Starting class is required'),
	runBy: requiredString('Run By is required'),
	congregation: requiredString('Congregation is required'),
	medium: requiredString('Medium is required'),
	management: requiredString('Management is required'),
	mobile: optionalMobileValidation('Enter a valid mobile number'),
	email: optionalEmail(),
	address: optionalString(),
	gradeName: optionalString(),
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
	address: optionalString(),
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

const priestsSchema = z.object({
	belongsTo: z.enum(['diocese', 'congregation'], {
		required_error: 'This field is required',
	}),

	priestPermanentId: requiredString('Priest ID is required'),
	nameOfPriest: requiredString('Name is required'),
	livingStatus: requiredString('Living status is required'),
	priestOrdinationDate: requiredString('Date of Priestly Ordination is required'),
	priestOrdinationPlace: requiredString('Place of Priestly Ordination is required'),
	dateOfBirth: requiredString('Date of Birth is required'),
	placeOfBirth: requiredString('Place of Birth is required'),
	nativePlace: requiredString('Native Place is required'),
	isSameAsBirthPlaceForPlace: z.boolean().optional(),
	nativeParish: requiredString('Native Parish is required'),
	isSameAsBirthPlaceForParish: z.boolean().optional(),
	isSameAsNativePlaceForBaptism: z.boolean().optional(),
	dateOfBaptism: optionalString(),
	nativeBaptism: optionalString(),
	dateOfFirstProfession: optionalString(),
	placeOfFirstProfession: optionalString(),
	dateOfDiaconate: optionalString(),
	placeOfDiaconate: optionalString(),
	mobileNumber: mobileValidation(),
	optionalNumber: optionalMobileValidation(),
	email: emailValidation(),
	aadhaarNumber: aadhaarValidation().optional(),
	presentAddress: optionalString(),
	fatherName: optionalString(),
	motherName: optionalString(),
	numberOfSiblings: optionalString(),
	birthOrder: optionalString(),
	elderBrothers: optionalString(),
	youngerBrothers: optionalString(),
	elderSisters: optionalString(),
	youngerSisters: optionalString(),
	remarks: optionalString(),
	image: fileValidation('Image file is required'),
});

const propertiesSchema = z.object({
	vicariate: enumFromArray(['V01', 'V02', 'V03', 'V04', 'V05', 'V06', 'V07', 'V08'], 'Vicariate is required'),
	parish: enumFromArray(
		['V01P01', 'V01P02', 'V01P03', 'V01P04', 'V01P05', 'V01P06', 'V01P07', 'V01P08'],
		'Parish is required'
	),
	villageName: requiredString('Village Name Is required'),
	documentNumber: requiredString('Document Number is required'),
	registrationDates: requiredString('Date of Registration is required'),
	electionConductedOn: requiredString('Registration Date is required'),
	purchasingAmount: requiredString('Purchasing Amount is required'),
	purchaserName: requiredString('Purchaser Name is required'),
	vendorName: requiredString('Vendor Name is required'),
	oldSurvey: requiredString('Old Survey is required'),
	newSurvey: requiredString('New Survey is required'),
	extent: requiredString('Extent is required'),
	pattaNumber: requiredString('Patta No is required'),
	availabilityOfDocument: requiredString('Availability of Document is required'),
	image: fileValidation('Image file is required'),
	usageOfLand: enumFromArray(['in_use', 'not_in_use'], 'Usage of Land is required'),
	typeOfLand: enumFromArray(['Nanjai', 'Punjai', 'Natham', 'Manai'], 'Type of Land is required'),
	remarks: requiredString('Remarks'),
});

type PriestsType = z.infer<typeof priestsSchema>;
type CommissionsType = z.infer<typeof commissionsSchema>;
type CommitteeType = z.infer<typeof committeeSchema>;
type SocialServiceSocietyType = z.infer<typeof socialServiceSocietyTypeSchema>;
type HouseListType = z.infer<typeof houseListSchema>;
type InstitutionsType = z.infer<typeof institutionsFormSchema>;
type VocationalListType = z.infer<typeof vocationalListSchema>;
type UploadSchemaType = z.infer<typeof uploadSchema>;
type PropertiesType = z.infer<typeof propertiesSchema>;

export {
	commissionsSchema,
	committeeSchema,
	socialServiceSocietyTypeSchema,
	houseListSchema,
	institutionsFormSchema,
	vocationalListSchema,
	uploadSchema,
	priestsSchema,
	propertiesSchema,
};

export type {
	CommissionsType,
	CommitteeType,
	SocialServiceSocietyType,
	HouseListType,
	InstitutionsType,
	VocationalListType,
	UploadSchemaType,
	PriestsType,
	PropertiesType,
};
