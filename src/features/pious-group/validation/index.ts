import { z } from 'zod';

const parishCouncilMemberSchema = z.object({
	subStationName: z.string().min(1, 'Sub Station is required'),
	mainStationName: z.string().min(1, 'Main Station is required'),
	memberSubStationName: z.string().min(1, 'Member Sub Station is required'),
	councilSubStationName: z.string().min(1, 'Council Sub Station is required'),
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
	gender: z.enum(['male', 'female'], {
		required_error: 'Gender is required',
	}),
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

const councilDetailSchema = z.object({
	mainStationName: z.string().min(1, 'Main Station is required'),
	electionConductedOn: z.string().min(1, 'Election date is required'),
	periodYears: z
		.string()
		.min(1, 'Period duration is required')
		.refine((val) => /^[0-9]+$/.test(val), { message: 'Only numbers allowed' }),
	extendPeriod: z.enum(['yes', 'no'], {
		required_error: 'Please select an option',
	}),
	periodEndOn: z.string().min(1, 'End date is required'),
});

type CouncilDetailFormType = z.infer<typeof councilDetailSchema>;

const familesTypeSchema = z.object({
	subStationName: z.string().min(1, 'Sub Station is required'),
	selectedAnbiam: z.string().min(1, 'Anbiam is required'),
	anbiamShortForm: z.string().min(1, 'Short Form is required'),
	parishName: z.string().min(1, 'Father / Husband Name is required'),
	anbiamName: z.string().min(1, 'Mother / Wife Name is required'),
	marriageDateStatus: z.enum(['known', 'unknown']),
	marriageDate: z.string().optional(),
	oldFamilyNumber: z.string().optional(),
	familyName: z.string().min(1, 'Family Name is required'),
	headOfFamily: z.string().min(1, 'Head of Family is required'),
	familyType: z.enum(['couple', 'single']),
	roofType: z.string().min(1, 'Roof Type is required'),
	community: z.string().min(1, 'Community is required'),
	subCaste: z.string().optional(),
	houseOwnership: z.string().min(1, 'House Ownership is required'),
	familyIncome: z.string().optional(),
	subscriptionStart: z.string().optional(),
	subscriptionPeriod: z.string().optional(),
	subscriptionEnd: z.string().optional(),
	monthlySubscription: z.string().optional(),
	cemeteryNumber: z.string().optional(),
	livingStatus: z.string().min(1, 'Living Status is required'),
	settledAs: z.string().min(1, 'Settled As is required'),
	permanentAddressStatus: z.enum(['same_as_temporary', 'different']),
	temporaryAddress: z.string().optional(),
	mobileNumber: z.string().optional(),
	email: z.string().email().optional(),
	remark: z.string().optional(),
	activeness: z.string().min(1, 'Activeness is required'),
});

type FamilesType = z.infer<typeof familesTypeSchema>;

const associationsClubSchema = z.object({
	parishName: z.string().min(1, 'Parish Name is required'),
	subStationName: z.string().min(1, 'Sub Station is required'),
	anbiamName: z.string().min(1, 'Association Name is required'),

	organisedBy: z.enum(['diocese', 'parish', 'association'], {
		required_error: 'Organised By is required',
	}),
	electedOn: z.string().min(1, 'Elected On date is required'),

	periodYears: z
		.string()
		.min(1, 'Period (in years) is required')
		.refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
			message: 'Enter a valid number of years',
		}),

	extendPeriod: z.enum(['yes', 'no'], {
		required_error: 'Extension selection is required',
	}),
	periodEndOn: z.string().min(1, 'Period End On date is required'),
});

type AssociationsClubFormType = z.infer<typeof associationsClubSchema>;

const associationsInchargeSchema = z.object({
	subStationName: z.string().min(1, 'Sub-station is required'),
	selectedAnbiam: z.string().min(1, 'Association is required'),
	electionConductedOn: z.string().min(1, 'Election Conducted On is required'),

	position: z.enum(['President', 'Secretary', 'Treasurer', 'Caller', 'Member'], {
		required_error: 'Position is required',
	}),

	electedStatus: z.enum(['regular', 'intermediate'], {
		required_error: 'Elected Status is required',
	}),

	memberType: z.enum(['memberOfParish', 'memberOfReligious'], {
		required_error: 'Member type is required',
	}),

	presidentName: z.string().min(1, 'President name is required'),

	mobileNumber: z
		.string()
		.min(10, 'Mobile number must be 10 digits')
		.regex(/^[6-9]\d{9}$/, 'Enter a valid Indian mobile number'),

	electedDate: z.string().min(1, 'Elected Date is required'),
	periodEndOn: z.string().min(1, 'Period End On is required'),
});

type AssociationsInchargeType = z.infer<typeof associationsInchargeSchema>;

export {
	parishCouncilMemberSchema,
	religiousPeopleParishSchema,
	priestNunParishSchema,
	anbiamsSchema,
	anbiamsInchargeSchema,
	councilDetailSchema,
	familesTypeSchema,
	associationsClubSchema,
	associationsInchargeSchema,
};

export type {
	ParishCouncilMemberFormType,
	ReligiousPeopleParishType,
	priestNunParishType,
	AnbiamsType,
	AnbiamInchargeType,
	CouncilDetailFormType,
	FamilesType,
	AssociationsClubFormType,
	AssociationsInchargeType,
};
