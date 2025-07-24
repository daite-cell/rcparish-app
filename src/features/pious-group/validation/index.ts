import { z } from 'zod';

const parishCouncilMemberSchema = z.object({
	subStationName: z.string().min(1, 'Sub Station is required'),
	electionConductedOn: z.string().min(1, 'Election Conducted On is required'),
	periodEndOn: z.string().min(1, 'Period End On is required'),
	position: z.enum(['President', 'Secretary', 'Treasurer', 'Caller', 'Member'], {
		required_error: 'Position is required',
	}),
	electedStatus: z.string().min(1, 'Please select elected status'),
	electedDate: z.string().min(1, 'Elected Date is required'),
	electedForm: z.string().min(1, 'Elected Form is required'),
	selectAnbiam: z.string().min(1, 'Select Anbiama is required'),
	personName: z.string().min(1, 'Person Name is required'),
	mobileNumber: z.string().regex(/^\d{10}$/, 'Mobile number must be exactly 10 digits'),
	anbiamPostion: z.string().min(1, 'Anbiam Position is required'),
});

type ParishCouncilMemberFormType = z.infer<typeof parishCouncilMemberSchema>;

const religiousPeopleParishSchema = z.object({
	institution: z.string().min(1, 'Please select an institution'),
	position: z.string().min(1, 'Please select a position'),
	incharge: z.string().min(1, 'Please select an in-charge role'),
	personName: z.string().min(1, 'Person Name is required'),
	mobileNumber: z
		.string()
		.regex(/^\d{10}$/, 'Mobile number must be exactly 10 digits')
		.optional()
		.or(z.literal('')),
	image: z.custom<File>().refine((file) => file instanceof File && file.size > 0, {
		message: 'Image file is required',
	}),
});

type ReligiousPeopleParishType = z.infer<typeof religiousPeopleParishSchema>;

const priestNunParishSchema = z.object({
	institution: z.string().min(1, 'Institution is required'),
	personName: z.string().min(1, 'Name of the Person is required'),
	fatherName: z.string().min(1, 'Father Name is required'),
	motherName: z.string().min(1, 'Mother Name is required'),

	gender: z.enum(['male', 'female'], {
		required_error: 'Gender is required',
	}),

	dioceseOrCongregation: z.enum(['diocese', 'congregation'], {
		required_error: 'Please select Diocese or Congregation',
	}),
	dioceseName: z.string().min(1, 'Diocese name is required'),

	brotherhoodOrPriesthood: z.enum(['brotherhood', 'priesthood'], {
		required_error: 'Please select Brotherhood or Priesthood',
	}),

	studying: z.string().min(1, 'Studying field is required'),
	place: z.string().min(1, 'Place is required'),

	mobileNumber: z
		.string()
		.min(10, 'Mobile number must be at least 10 digits')
		.max(15, 'Mobile number must be at most 15 digits'),

	email: z.string().email('Enter a valid email address'),

	temporaryAddress: z.string().min(5, 'Temporary address is required'),

	permanentAddressStatus: z.enum(['same_as_temporary', 'different'], {
		required_error: 'Please choose an address option',
	}),

	permanentAddress: z.string().min(5, 'Permanent address is required').optional(),

	image: z.custom<File>().refine((file) => file instanceof File && file.size > 0, {
		message: 'Image file is required',
	}),
});
type priestNunParishType = z.infer<typeof priestNunParishSchema>;

const anbiamsSchema = z.object({
	parishName: z.string().min(1, 'Parish Name is required'),
	subStationName: z.string().min(1, 'Sub-Station selection is required'),
	anbiamName: z.string().min(1, 'Anbiam Name is required'),
	anbiamShortForm: z.string().min(1, 'Short Form is required'),
	electedOn: z.string().min(1, 'Election date is required'),
	periodYears: z
		.string()
		.min(1, 'Period is required')
		.refine((val) => /^\d+$/.test(val), {
			message: 'Must be a number',
		}),
	extendPeriod: z.enum(['yes', 'no'], {
		required_error: 'Please choose Yes or No',
	}),
	periodEndOn: z.string().min(1, 'Period end date is required'),
});

type AnbiamsType = z.infer<typeof anbiamsSchema>;

const anbiamsInchargeSchema = z.object({
	subStationName: z.string().min(1, 'Sub-Station is required'),
	selectedAnbiam: z.string().min(1, 'Anbiam selection is required'),
	shortForm: z.string().min(1, 'Short form is required'),

	electionConductedOn: z.string().min(1, 'Election conducted date is required'),

	position: z.string().min(1, 'Position is required'),
	electedStatus: z.enum(['regular', 'intermediate'], {
		required_error: 'Elected status is required',
	}),
	presidentName: z.string().min(1, 'President name is required'),
	mobileNumber1: z.string().min(10, 'Mobile Number 1 must be at least 10 digits').max(15, 'Too long'),
	mobileNumber2: z.string().min(10, 'Mobile Number 2 must be at least 10 digits').max(15, 'Too long').optional(),

	electedDate: z.string().min(1, 'Elected Date is required'),
	periodEndOn: z.string().min(1, 'Period End On is required'),
});
type AnbiamInchargeType = z.infer<typeof anbiamsInchargeSchema>;

export {
	parishCouncilMemberSchema,
	religiousPeopleParishSchema,
	priestNunParishSchema,
	anbiamsSchema,
	anbiamsInchargeSchema,
};

export type {
	ParishCouncilMemberFormType,
	ReligiousPeopleParishType,
	priestNunParishType,
	AnbiamsType,
	AnbiamInchargeType,
};
