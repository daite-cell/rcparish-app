import { z } from 'zod';
import { optionalString, requiredString } from '@/validations/stringValidations';
import { enumFromArray } from '@/validations/enumValidations';
import {
	fileValidation as requiredImageSchema,
	optionalFileValidation as optionalImageSchema,
} from '@/validations/fileValidations';
import { optionalDate, requiredDate, validDate } from '@/validations';

export const chroniclesSchema = z.object({
	date: requiredDate('Date is required'),
	event: requiredString('Event is required'),
	description: requiredString('Description is required'),
	extendPeriod: enumFromArray(['yes', 'no'], 'Please select an option'),
	image1: requiredImageSchema('Image 1 is required'),
	image2: optionalImageSchema('Image 2 must be a valid file if provided'),
	image3: optionalImageSchema('Image 3 must be a valid file if provided'),
});

export type ChroniclesType = z.infer<typeof chroniclesSchema>;

export const baptismSchema = z.object({
	activeness: enumFromArray(['Active', 'Inactive'], 'Activeness is required'),
	event: requiredString('Name is required'),
	gender: enumFromArray(['Male', 'Female', 'Other'], 'Gender is required'),
	fatherName: requiredString("Father's name is required"),
	motherName: requiredString("Mother's name is required"),
	domicile: optionalString(),
	godFatherName: optionalString(),
	godMotherName: optionalString(),
	dateOfBirthStatus: enumFromArray(['known', 'unknown'], 'Please select date of birth status'),
	dateOfBirth: z
		.string({ required_error: 'Date of birth is required' })
		.optional()
		.refine((val) => !val || !isNaN(Date.parse(val)), {
			message: 'Invalid date format',
		}),
	placeOfBirthRemarks: requiredString('Place of birth remarks is required'),
	baptismDateStatusRemarks: requiredString('Baptism date status remarks is required'),
	baptismDateStatus: enumFromArray(['known', 'unknown'], 'Please select baptism date status'),
	baptismDate: z
		.string({ required_error: 'Baptism date is required' })
		.optional()
		.refine((val) => !val || !isNaN(Date.parse(val)), {
			message: 'Invalid date format',
		}),
	baptismOldFamilyNumber: z.string().optional(),
	baptistAtChurch: requiredString('Baptized at (Church Name) is required'),
	minister: requiredString('Minister is required'),
	registrationNumber: requiredString('Registration Number is required'),
	remarks: optionalString(),
});

export type BaptismType = z.infer<typeof baptismSchema>;

export const baptismEditSchema = z.object({
	activeness: enumFromArray(['Active', 'Inactive'], 'Please select activeness'),
	familyName: requiredString('Name is required'),
	gender: enumFromArray(['Male', 'Female', 'Other'], 'Please select gender'),
	subStationName: requiredString('Main-Station / Sub-Station is required'),
	fatherName: requiredString("Father's name is required"),
	motherName: requiredString("Mother's name is required"),
	domicile: optionalString(),
	godFatherName: optionalString(),
	godMotherName: optionalString(),
	anbiam: requiredString('Anbiam is required'),
	uniqueAnbiamFamilyNumber: requiredString('Unique Anbiam Family Number is required'),
	memberName: requiredString('Member Name is required'),
	nameInBaptismRegister: requiredString('Name in Baptism Register is required'),
	dateOfBirthStatus: enumFromArray(['known', 'unknown'], 'Please select date of birth status'),
	dateOfBirth: z
		.string({ required_error: 'Date of birth is required' })
		.optional()
		.refine((val) => !val || !isNaN(Date.parse(val)), {
			message: 'Invalid date format',
		}),

	placeOfBirthRemarks: requiredString('Place of birth remarks is required'),
	baptismDateStatus: enumFromArray(['known', 'unknown'], 'Please select baptism date status'),
	baptismDate: z
		.string({ required_error: 'Baptism date is required' })
		.optional()
		.refine((val) => !val || !isNaN(Date.parse(val)), {
			message: 'Invalid date format',
		}),
	baptismDateStatusRemarks: requiredString('Baptism date status remarks is required'),

	baptismOldFamilyNumber: optionalString(),
	baptistAtChurch: requiredString('Baptized at (Church Name) is required'),
	minister: requiredString('Minister is required'),
	registrationNumber: requiredString('Registration Number is required'),
	remarks: optionalString(),
});

export type BaptismEditType = z.infer<typeof baptismEditSchema>;

export const holyCommunionSchema = z.object({
	activeness: enumFromArray(['Active', 'Inactive'], 'Activeness is required'),
	familyName: requiredString('Name is required'),
	gender: enumFromArray(['Male', 'Female', 'Other'], 'Gender is required'),
	fatherName: requiredString("Father's Name is required"),
	motherName: requiredString("Mother's Name is required"),

	domicile: optionalString(),
	godFatherName: optionalString(),
	godMotherName: optionalString(),
	nameInBaptismRegister: requiredString('Name as in the Baptism Register is required'),

	baptismDateStatus: enumFromArray(['known', 'unknown'], 'Date of Baptism status is required'),
	baptismDate: z
		.string()
		.optional()
		.refine((val) => !val || !isNaN(Date.parse(val)), {
			message: 'Invalid baptism date',
		}),
	baptismDateStatusRemarks: z
		.string()
		.optional()
		.refine((val) => !val || val.trim() !== '', {
			message: 'Remarks are required when baptism date is unknown',
		}),

	holyCommunionStatus: enumFromArray(['received', 'not_yet', 'unknown'], 'Holy Communion Status is required'),
	holyCommunionDate: z
		.string()
		.optional()
		.refine((val) => !val || !isNaN(Date.parse(val)), {
			message: 'Invalid Holy Communion date',
		}),
	holyCommunionStatusRemarks: z
		.string()
		.optional()
		.refine((val) => !val || val.trim() !== '', {
			message: 'Remarks are required when Holy Communion date is not provided',
		}),

	baptistAtChurch: requiredString('FHC at (Church Name) is required'),
	minister: requiredString('FHC in (Parish) is required'),
	registrationNumber: requiredString('Registration Number is required'),
	remarks: optionalString(),
});

export type HolyCommunionType = z.infer<typeof holyCommunionSchema>;

export const holyCommunionEditSchema = z.object({
	activeness: enumFromArray(['Active', 'Inactive'], 'Activeness is required'),
	familyName: requiredString('Family name is required'),
	subStationName: requiredString('Main-Station / Sub-Station is required'),
	anbiam: requiredString('Anbiam is required'),
	uniqueFamilyNumber: requiredString('Unique Anbiam Family Number is required'),
	headName: requiredString('Name of the Head is required'),
	memberName: requiredString('Member name is required'),
	gender: enumFromArray(['Male', 'Female', 'Other'], 'Gender is required'),
	fatherName: requiredString("Father's name is required"),
	motherName: requiredString("Mother's name is required"),
	godFatherName: optionalString(),
	godMotherName: optionalString(),
	nameInBaptismRegister: requiredString('Name in Baptism Register is required'),
	baptismDateStatus: enumFromArray(['known', 'unknown'], 'Date of Baptism status is required'),
	baptismDate: z
		.string()
		.optional()
		.refine((val) => !val || !isNaN(Date.parse(val)), {
			message: 'Invalid baptism date',
		}),
	baptismDateStatusRemarks: z
		.string()
		.optional()
		.refine((val) => !val || val.trim() !== '', {
			message: 'Remarks are required when baptism date is unknown',
		}),

	holyCommunionStatus: enumFromArray(['received', 'not_yet', 'unknown'], 'Please select Holy Communion status'),
	holyCommunionDate: z
		.string()
		.optional()
		.refine((val) => !val || !isNaN(Date.parse(val)), {
			message: 'Invalid Holy Communion date format',
		}),

	holyCommunionStatusRemarks: z
		.string()
		.optional()
		.refine((val) => !val || val.trim() !== '', {
			message: 'Remarks are required when Holy Communion date is not provided',
		}),

	baptistAtChurch: requiredString('FHC at (Church Name) is required'),
	minister: requiredString('FHC in (Parish) is required'),
	registrationNumber: requiredString('Registration Number is required'),
	remarks: optionalString(),
});

export type HolyCommunionEditType = z.infer<typeof holyCommunionEditSchema>;

export const confirmationsSchema = z.object({
	activeness: enumFromArray(['Active', 'Inactive'], 'Activeness is required'),
	familyName: requiredString('Name is required'),
	gender: enumFromArray(['Male', 'Female', 'Other'], 'Gender is required'),
	fatherName: requiredString("Father's Name is required"),
	motherName: requiredString("Mother's Name is required"),

	domicile: optionalString(),
	godFatherName: optionalString(),
	godMotherName: optionalString(),
	nameInBaptismRegister: requiredString('Name as in the Baptism Register is required'),

	baptismDateStatus: enumFromArray(['known', 'unknown'], 'Date of Baptism status is required'),
	baptismDate: z
		.string()
		.optional()
		.refine((val) => !val || !isNaN(Date.parse(val)), {
			message: 'Invalid baptism date',
		}),
	baptismDateStatusRemarks: z
		.string()
		.optional()
		.refine((val) => !val || val.trim() !== '', {
			message: 'Remarks are required when baptism date is unknown',
		}),

	confirmationStatus: enumFromArray(['received', 'not_yet', 'unknown'], 'Confirmation Status is required'),
	confirmationDate: z
		.string()
		.optional()
		.refine((val) => !val || !isNaN(Date.parse(val)), {
			message: 'Invalid Confirmation date',
		}),
	confirmationStatusRemarks: z
		.string()
		.optional()
		.refine((val) => !val || val.trim() !== '', {
			message: 'Remarks are required when Holy Communion date is not provided',
		}),

	baptistAtChurch: requiredString('FHC at (Church Name) is required'),
	minister: requiredString('FHC in (Parish) is required'),
	registrationNumber: requiredString('Registration Number is required'),
	remarks: optionalString(),
});

export type ConfirmationsType = z.infer<typeof confirmationsSchema>;

export const confirmationsEditSchema = z.object({
	activeness: enumFromArray(['Active', 'Inactive'], 'Activeness is required'),
	familyName: requiredString('Name is required'),
	gender: enumFromArray(['Male', 'Female', 'Other'], 'Gender is required'),
	fatherName: requiredString("Father's Name is required"),
	motherName: requiredString("Mother's Name is required"),
	subStationName: requiredString('Main-Station / Sub-Station is required'),
	godFatherName: optionalString(),
	godMotherName: optionalString(),
	nameInBaptismRegister: requiredString('Name as in the Baptism Register is required'),
	anbiam: requiredString('Anbiam is required'),
	uniqueAnbiamFamilyNumber: requiredString('Unique Anbiam Family Number is required'),
	headName: requiredString('Name of the Head is required'),

	baptismDateStatus: enumFromArray(['known', 'unknown'], 'Date of Baptism status is required'),
	baptismDate: z
		.string()
		.optional()
		.refine((val) => !val || !isNaN(Date.parse(val)), {
			message: 'Invalid baptism date',
		}),
	baptismDateStatusRemarks: z
		.string()
		.optional()
		.refine((val) => !val || val.trim() !== '', {
			message: 'Remarks are required when baptism date is unknown',
		}),

	confirmationStatus: enumFromArray(['received', 'not_yet', 'unknown'], 'Confirmation Status is required'),
	confirmationDate: z
		.string()
		.optional()
		.refine((val) => !val || !isNaN(Date.parse(val)), {
			message: 'Invalid Confirmation date',
		}),
	confirmationStatusRemarks: z
		.string()
		.optional()
		.refine((val) => !val || val.trim() !== '', {
			message: 'Remarks are required when Holy Communion date is not provided',
		}),

	baptistAtChurch: requiredString('FHC at (Church Name) is required'),
	minister: requiredString('FHC in (Parish) is required'),
	registrationNumber: requiredString('Registration Number is required'),
	remarks: optionalString(),
});

export type ConfirmationsEditType = z.infer<typeof confirmationsEditSchema>;

export const deathRegisterSchema = z.object({
	eventNumber: requiredString('Registration Number is required'),
	activeness: enumFromArray(['Active', 'Inactive'], 'Activeness is required'),
	name: requiredString('Name is required'),
	motherName: requiredString("Mother's Name is required"),
	place: requiredString('Place is required'),

	dateOfBirthStatus: z.enum(['known', 'unknown'], {
		required_error: 'Date of Birth status is required',
	}),
	dateOfBirth: z
		.string({ required_error: 'Date of birth is required' })
		.optional()
		.refine((val) => !val || !isNaN(Date.parse(val)), {
			message: 'Invalid date format',
		}),
	remarks: optionalString(),

	birthPlace: requiredString('Birth Place is required'),
	diedOn: validDate('Date of Death is required'),
	diedAt: requiredString('Place of Death is required'),
	dateOfBurial: optionalDate(),
	buriedAt: optionalString(),
	minister: requiredString('Minister name is required'),
	finalRemarks: requiredString('Final Remarks are required'),
});

export type DeathRegisterType = z.infer<typeof deathRegisterSchema>;

export const marriageProposalSchema = z.object({
	activeness: enumFromArray(['Active', 'Inactive'], 'Activeness is required'),
	familyName: requiredString('Name is required'),
	gender: enumFromArray(['Male', 'Female', 'Other'], 'Gender is required'),
	fatherName: requiredString("Father's Name is required"),
	motherName: requiredString("Mother's Name is required"),
	subStationName: requiredString('Main-Station / Sub-Station is required'),
	maritalStatus: enumFromArray(['0', '1', '2'], 'Marital Status is required'),
	nameInBaptismRegister: requiredString('Name as in the Baptism Register is required'),
	anbiam: requiredString('Anbiam is required'),
	uniqueAnbiamFamilyNumber: requiredString('Unique Anbiam Family Number is required'),
	headName: requiredString('Name of the Head is required'),
	marriagePreparation: enumFromArray(['0', '1', '2'], 'Marriage Preparation Class is required'),
	haveReason: enumFromArray(['yes', 'no'], 'Have Reason is required'),
	attendedDate: z
		.string({ required_error: 'Date of birth is required' })
		.optional()
		.refine((val) => !val || !isNaN(Date.parse(val)), {
			message: 'Invalid date format',
		}),

	dateOfBirth: z
		.string({ required_error: 'Date of birth is required' })
		.optional()
		.refine((val) => !val || !isNaN(Date.parse(val)), {
			message: 'Invalid date format',
		}),
	dioceseAttended: requiredString('Diocese Attended is required'),
	parishAttended: requiredString('Parish Attended is required'),
	baptismDateStatusRemarks: z
		.string()
		.optional()
		.refine((val) => !val || val.trim() !== '', {
			message: 'Remarks are required when baptism date is unknown',
		}),

	confirmationStatus: enumFromArray(['received', 'not_yet', 'unknown'], 'Confirmation Status is required'),
	confirmationDate: z
		.string()
		.optional()
		.refine((val) => !val || !isNaN(Date.parse(val)), {
			message: 'Invalid Confirmation date',
		}),
	confirmationStatusRemarks: z
		.string()
		.optional()
		.refine((val) => !val || val.trim() !== '', {
			message: 'Remarks are required when Holy Communion date is not provided',
		}),
	parishName: requiredString('Parish Name is required'),
	religion: enumFromArray(['yes', 'no'], 'Please select a religion'),
	sacramentReason: requiredString('Sacrament Reason is required'),

	registrationNumber: requiredString('Registration Number is required'),
});

export type MarriageProposalType = z.infer<typeof marriageProposalSchema>;

export const marriageRegistrationSchema = z.object({
	activeness: enumFromArray(['active', 'inactive'], 'Activeness is required'),
	familyName: requiredString('Family name is required'),
	stationType: requiredString('Station type is required'),
	anbiam: requiredString('Anbiam is required'),
	uniqueFamilyNumber: requiredString('Unique Anbiam Family Number is required'),
	bannsType: requiredString('Banns/Rectification is required'),
	marriageDate: z
		.string({ required_error: 'Marriage Date is required' })
		.refine((val) => !isNaN(Date.parse(val)), { message: 'Invalid Marriage Date' }),
	churchName: requiredString('Church Name is required'),
	marriageParish: requiredString('Marriage Parish is required'),
	minister: requiredString('Minister is required'),
	announcement1: z
		.string({ required_error: '1st Announcement Date is required' })
		.refine((val) => !isNaN(Date.parse(val)), { message: 'Invalid date' }),
	announcement2: z
		.string({ required_error: '2nd Announcement Date is required' })
		.refine((val) => !isNaN(Date.parse(val)), { message: 'Invalid date' }),
	announcement3: z
		.string({ required_error: '3rd Announcement Date is required' })
		.refine((val) => !isNaN(Date.parse(val)), { message: 'Invalid date' }),

	groomName: requiredString("Bridegroom's Name is required"),
	groomMaritalStatus: enumFromArray(['0', '1', '2'], 'Bridegroom marital status is required'),
	groomPreparationClass: enumFromArray(['0', '1', '2'], 'Bridegroom preparation class is required'),
	groomClassDate: z
		.string({ required_error: 'Bridegroom preparation date is required' })
		.refine((val) => !isNaN(Date.parse(val)), { message: 'Invalid date' }),
	groomParish: requiredString("Bridegroom's Parish is required"),
	groomDiocese: requiredString("Bridegroom's Diocese is required"),
	groomFather: requiredString("Bridegroom's Father's Name is required"),
	groomMother: requiredString("Bridegroom's Mother's Name is required"),
	groomParishName: requiredString('Bridegroom Parish Name is required'),
	groomReligion: enumFromArray(['rc', 'converted'], 'Bridegroom Religion is required'),
	haveSacraments: enumFromArray(['yes', 'no'], 'Sacrament status is required'),
	sacramentReason: z.string().optional(), // Conditionally required in form
	groomWitness: requiredString("Bridegroom's Witness is required"),
	groomAddress: requiredString("Bridegroom's Address is required"),

	brideName: requiredString("Bride's Name is required"),
	brideMaritalStatus: enumFromArray(['0', '1', '2'], 'Bride marital status is required'),
	bridePreparationClass: enumFromArray(['0', '1', '2'], 'Bride preparation class is required'),
	brideClassDate: z
		.string({ required_error: 'Bride preparation date is required' })
		.refine((val) => !isNaN(Date.parse(val)), { message: 'Invalid date' }),
	brideParish: requiredString("Bride's Parish is required"),
	brideDiocese: requiredString("Bride's Diocese is required"),
	brideFather: requiredString("Bride's Father's Name is required"),
	brideMother: requiredString("Bride's Mother's Name is required"),
	brideParishName: requiredString('Bride Parish Name is required'),
	brideReligion: enumFromArray(['rc', 'converted'], 'Bride Religion is required'),
	brideWitness: requiredString("Bride's Witness is required"),
	brideAddress: requiredString("Bride's Address is required"),
	registerNumber: requiredString('Registration Number is required'),
	remarks: z.string().optional(),
});

export type MarriageRegistrationType = z.infer<typeof marriageRegistrationSchema>;
