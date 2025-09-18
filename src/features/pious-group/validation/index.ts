import { z } from 'zod';
import {
	aadhaarValidation,
	emailValidation,
	longText,
	mobileValidation,
	numericString,
	optionalEmail,
	optionalMobileValidation,
	optionalString,
	requiredString,
} from '@/validations/stringValidations';
import { enumFromArray, requiredDate } from '@/validations';
import { requiredImageSchema } from '@/validations/imageValidations';

const parishCouncilMemberSchema = z.object({
	subStationName: requiredString('Sub Station is required'),
	mainStationName: requiredString('Main Station is required'),
	memberSubStationName: requiredString('Member Sub Station is required'),
	councilSubStationName: requiredString('Council Sub Station is required'),
	electionConductedOn: requiredString('Election Conducted On is required'),
	periodEndOn: requiredString('Period End On is required'),
	position: enumFromArray(['President', 'Secretary', 'Treasurer', 'Caller', 'Member'], 'Position is required'),
	electedStatus: requiredString('Please select elected status'),
	electedDate: requiredString('Elected Date is required'),
	electedForm: requiredString('Elected Form is required'),
	selectAnbiam: requiredString('Select Anbiama is required'),
	personName: requiredString('Person Name is required'),
	mobileNumber: mobileValidation('Enter a valid 10-digit mobile number'),
	anbiamPostion: requiredString('Anbiam Position is required'),
});

type ParishCouncilMemberFormType = z.infer<typeof parishCouncilMemberSchema>;

const religiousPeopleParishSchema = z.object({
	institution: requiredString('Please select an institution'),
	position: requiredString('Please select a position'),
	incharge: requiredString('Please select an in-charge role'),
	personName: requiredString('Person Name is required'),
	gender: enumFromArray(['male', 'female'], 'Gender is required'),
	mobileNumber: mobileValidation('Enter a valid 10-digit mobile number'),
	image: requiredImageSchema,
});

type ReligiousPeopleParishType = z.infer<typeof religiousPeopleParishSchema>;

const priestNunParishSchema = z.object({
	institution: requiredString('Institution is required'),
	personName: requiredString('Name of the Person is required'),
	fatherName: requiredString('Father Name is required'),
	motherName: requiredString('Mother Name is required'),
	gender: enumFromArray(['male', 'female'], 'Gender is required'),
	dioceseOrCongregation: enumFromArray(['diocese', 'congregation'], 'Please select Diocese or Congregation'),
	dioceseName: requiredString('Diocese name is required'),
	brotherhoodOrPriesthood: enumFromArray(['brotherhood', 'priesthood'], 'Please select Brotherhood or Priesthood'),
	studying: requiredString('Studying field is required'),
	place: requiredString('Place is required'),
	mobileNumber: mobileValidation('Enter a valid 10-digit mobile number'),
	email: emailValidation('Enter a valid email address'),
	temporaryAddress: longText(10, 'Temporary address is required'),
	image: requiredImageSchema,
	relationshipToFamily: requiredString('Relationship to Family is required'),
	familyHead: requiredString('Family Head is required'),
	familyName: requiredString('Family Name is required'),
	subStationName: requiredString('Sub-Station selection is required'),
	selectAnbiam: requiredString('Select Anbiama is required'),
	addressStatus: enumFromArray(['same', 'different'], 'Please select address status'),
	differentAddress: optionalString(),
});

type priestNunParishType = z.infer<typeof priestNunParishSchema>;

const anbiamsSchema = z.object({
	parishName: requiredString('Parish Name is required'),
	subStationName: requiredString('Sub-Station selection is required'),
	anbiamName: requiredString('Anbiam Name is required'),
	anbiamShortForm: requiredString('Short Form is required'),
	electedOn: requiredString('Election date is required'),

	periodYears: requiredString('Period is required').refine((val) => /^\d+$/.test(val), {
		message: 'Must be a number',
	}),
	extendPeriod: enumFromArray(['yes', 'no'], 'Please choose Yes or No'),

	periodEndOn: requiredString('Period end date is required'),
});

type AnbiamsType = z.infer<typeof anbiamsSchema>;

const anbiamsInchargeSchema = z.object({
	subStationName: requiredString('Sub-Station is required'),
	selectedAnbiam: requiredString('Anbiam selection is required'),
	shortForm: requiredString('Short form is required'),
	electionConductedOn: requiredString('Election conducted date is required'),
	position: requiredString('Position is required'),
	electedStatus: enumFromArray(['regular', 'intermediate'], 'Elected status is required'),
	presidentName: requiredString('President name is required'),
	mobileNumber1: mobileValidation('Mobile Number 1 must be at least 10 digits'),
	mobileNumber2: mobileValidation('Mobile Number 2 must be at least 10 digits').optional(),
	electedDate: requiredString('Elected Date is required'),
	periodEndOn: requiredString('Period End On is required'),
});

type AnbiamInchargeType = z.infer<typeof anbiamsInchargeSchema>;

const councilDetailSchema = z.object({
	mainStationName: requiredString('Main Station is required'),
	electionConductedOn: requiredString('Election date is required'),
	periodYears: numericString('Period duration is required', 'Only numbers allowed'),
	extendPeriod: enumFromArray(['yes', 'no'], 'Please select an option'),
	periodEndOn: requiredString('End date is required'),
});

type CouncilDetailFormType = z.infer<typeof councilDetailSchema>;

const familesMembersTypeSchema = z
	.object({
		subStationName: requiredString('Sub-Station is required'),
		selectedAnbiam: z.string().min(1, 'Anbiam is required'),

		marriageStatus: enumFromArray(['yes', 'no'], 'Please select marriage status'),
		communityStatus: enumFromArray(['same', 'different'], 'Please select community status'),
		physicallyChallengedStatus: enumFromArray(['yes', 'no'], 'Please select physically challenged status'),
		vocationStatus: enumFromArray(['yes', 'no'], 'Please select vocation status'),

		dateOfBirth: enumFromArray(['known', 'unknown'], 'Please select date of birth'),
		baptismDate: enumFromArray(['known', 'unknown'], 'Please select baptism status'),
		holyCommunionDate: enumFromArray(['received', 'not_yet', 'unknown'], 'Please select holy communion status'),
		confirmationDate: enumFromArray(['received', 'not_yet', 'unknown'], 'Please select confirmation status'),

		communication: enumFromArray(['same_as_family', 'individual'], 'Please select communication status'),
		qualificationCategory: enumFromArray(['completed', 'studying'], 'Please select qualification status'),
		profQualificationCategory: enumFromArray(
			['completed', 'studying'],
			'Please select professional qualification status'
		),
		education: enumFromArray(['school', 'college'], 'Please select education status'),

		marriageDate: optionalString(),
		marriageRemarks: optionalString(),

		image: requiredImageSchema,
		familyName: requiredString('Family Name is required'),
		familyType: enumFromArray(['couple', 'single'], 'Please select Family Type'),
		community: requiredString('Community is required'),
		subCaste: requiredString('Sub-Caste is required'),
		livingStatus: requiredString('Living Status is required'),

		permanentAddressStatus: enumFromArray(
			['same_as_family', 'different_from_family', 'same_as_temporary'],
			'Please choose permanent address status'
		),

		mobileNumber: optionalMobileValidation(),
		email: optionalEmail(),
		remarks: optionalString(),
		activeness: requiredString('Activeness is required'),

		anbiam: requiredString('Anbiam is required'),
		personName: requiredString('Name is required'),
		gender: enumFromArray(['male', 'female'], 'Gender is required'),
		relationshipToFamily: enumFromArray(['father-husband', 'mother-wife'], 'Relationship to Family is required'),

		fatherName: requiredString('Father Name is required'),
		motherName: requiredString('Mother Name is required'),
		livingWith: requiredString('Living With is required'),

		challengedType: optionalString(),
		challengedPercentage: optionalString(),

		bloodGroup: requiredString('Blood Group is required'),
		religion: requiredString('Religion is required'),
		parishStatus: requiredString('Parish Status is required'),

		vocationType: optionalString(),
		congregationName: optionalString(),
		vocationOrder: optionalString(),
		firstJoiningDate: optionalString(),
		currentStatus: optionalString(),
		placeName: optionalString(),
		vocationRemarks: optionalString(),

		godFatherName: optionalString(),
		godMotherName: optionalString(),

		dob: optionalString(),
		dobRemarks: optionalString(),
		baptismDateKnown: optionalString(),
		baptismRemarks: optionalString(),
		holyCommunionDateKnown: optionalString(),
		holyCommunionRemarks: optionalString(),
		confirmationDateKnown: optionalString(),
		confirmationRemarks: optionalString(),

		sameMobile: optionalString(),
		aadhaar: aadhaarValidation(),

		qualification: optionalString(),
		profQualification: optionalString(),
		educationStatus: optionalString(),
		profEducationStatus: optionalString(),
		educationRemarks: optionalString(),

		completedQualification: optionalString(),
		schoolClass: optionalString(),
		schoolBoard: optionalString(),
		schoolName: optionalString(),
		schoolLocation: optionalString(),
		schoolManagement: optionalString(),

		courseType: optionalString(),
		courseName: optionalString(),
		courseYear: optionalString(),
		collegeName: optionalString(),
		collegeLocation: optionalString(),

		profCourseName: optionalString(),
		profCollegeName: optionalString(),
		profCollegeLocation: optionalString(),

		occupationSector: requiredString("Occupation's Sector is required"),
		occupation: requiredString('Occupation is required'),
		monthlyIncome: requiredString('Monthly Income is required'),

		permanentAddress: optionalString(),
		residentialAddressStatus: requiredString('Residential Address Status is required'),
		residentialAddress: requiredString('Residential Address is required'),
	})
	.superRefine((data, ctx) => {
		const { ZodIssueCode } = z;

		if (data.physicallyChallengedStatus === 'yes') {
			if (!data.challengedType) {
				ctx.addIssue({ code: ZodIssueCode.custom, path: ['challengedType'], message: 'Challenged Type is required' });
			}
			if (!data.challengedPercentage) {
				ctx.addIssue({
					code: ZodIssueCode.custom,
					path: ['challengedPercentage'],
					message: 'Challenged Percentage is required',
				});
			}
		}

		if (data.marriageStatus === 'yes') {
			if (!data.marriageDate) {
				ctx.addIssue({ code: ZodIssueCode.custom, path: ['marriageDate'], message: 'Marriage Date is required' });
			}
			if (!data.marriageRemarks) {
				ctx.addIssue({
					code: ZodIssueCode.custom,
					path: ['marriageRemarks'],
					message: 'Marriage Remarks are required',
				});
			}
		}

		if (data.vocationStatus === 'yes') {
			const requiredWhenVocation = [
				'vocationType',
				'congregationName',
				'vocationOrder',
				'firstJoiningDate',
				'currentStatus',
				'placeName',
				'vocationRemarks',
			];
			requiredWhenVocation.forEach((f) => {
				if (!data[f as keyof typeof data]) {
					ctx.addIssue({ code: ZodIssueCode.custom, path: [f], message: `${f} is required when vocation is 'yes'` });
				}
			});
		}

		if (data.dateOfBirth === 'known') {
			if (!data.dob) ctx.addIssue({ code: ZodIssueCode.custom, path: ['dob'], message: 'Date of Birth is required' });
		} else {
			if (!data.dobRemarks)
				ctx.addIssue({ code: ZodIssueCode.custom, path: ['dobRemarks'], message: 'DOB Remarks are required' });
		}

		if (data.baptismDate === 'known') {
			if (!data.baptismDateKnown)
				ctx.addIssue({ code: ZodIssueCode.custom, path: ['baptismDateKnown'], message: 'Baptism Date is required' });
		} else {
			if (!data.baptismRemarks)
				ctx.addIssue({ code: ZodIssueCode.custom, path: ['baptismRemarks'], message: 'Baptism Remarks are required' });
		}

		if (data.holyCommunionDate === 'received') {
			if (!data.holyCommunionDateKnown)
				ctx.addIssue({
					code: ZodIssueCode.custom,
					path: ['holyCommunionDateKnown'],
					message: 'Holy Communion Date is required',
				});
		} else {
			if (!data.holyCommunionRemarks)
				ctx.addIssue({
					code: ZodIssueCode.custom,
					path: ['holyCommunionRemarks'],
					message: 'Holy Communion Remarks are required',
				});
		}

		if (data.confirmationDate === 'received') {
			if (!data.confirmationDateKnown)
				ctx.addIssue({
					code: ZodIssueCode.custom,
					path: ['confirmationDateKnown'],
					message: 'Confirmation Date is required',
				});
		} else {
			if (!data.confirmationRemarks)
				ctx.addIssue({
					code: ZodIssueCode.custom,
					path: ['confirmationRemarks'],
					message: 'Confirmation Remarks are required',
				});
		}

		if (data.communication === 'same_as_family') {
			if (!data.sameMobile)
				ctx.addIssue({ code: ZodIssueCode.custom, path: ['sameMobile'], message: 'Same Mobile is required' });
		} else {
			if (!data.mobileNumber)
				ctx.addIssue({ code: ZodIssueCode.custom, path: ['mobileNumber'], message: 'Mobile Number is required' });
		}

		if (data.qualificationCategory === 'completed') {
			if (!data.completedQualification)
				ctx.addIssue({
					code: ZodIssueCode.custom,
					path: ['completedQualification'],
					message: 'Completed Qualification is required',
				});
		} else if (data.qualificationCategory === 'studying') {
			if (data.education === 'school') {
				['schoolClass', 'schoolBoard', 'schoolName', 'schoolLocation', 'schoolManagement'].forEach((f) => {
					if (!data[f as keyof typeof data])
						ctx.addIssue({ code: ZodIssueCode.custom, path: [f], message: `${f} is required for school` });
				});
			} else if (data.education === 'college') {
				['courseType', 'courseName', 'courseYear', 'collegeName', 'collegeLocation'].forEach((f) => {
					if (!data[f as keyof typeof data])
						ctx.addIssue({ code: ZodIssueCode.custom, path: [f], message: `${f} is required for college` });
				});
			}
		}

		if (data.profQualificationCategory === 'completed') {
			if (!data.profQualification)
				ctx.addIssue({
					code: ZodIssueCode.custom,
					path: ['profQualification'],
					message: 'Professional Qualification is required',
				});
		} else if (data.profQualificationCategory === 'studying') {
			['profCourseName', 'profCollegeName', 'profCollegeLocation'].forEach((f) => {
				if (!data[f as keyof typeof data])
					ctx.addIssue({ code: ZodIssueCode.custom, path: [f], message: `${f} is required for professional studying` });
			});
		}

		if (data.permanentAddressStatus === 'different_from_family' && !data.permanentAddress) {
			ctx.addIssue({
				code: ZodIssueCode.custom,
				path: ['permanentAddress'],
				message: 'Permanent Address is required when it differs from family address',
			});
		}
	});

type FamilesMembersType = z.infer<typeof familesMembersTypeSchema>;

const familesTypeSchema = z.object({
	subStationName: requiredString('Sub Station is required'),
	selectedAnbiam: requiredString('Anbiam is required'),
	anbiamShortForm: requiredString('Short Form is required'),
	parishName: requiredString('Father / Husband Name is required'),
	anbiamName: requiredString('Mother / Wife Name is required'),
	marriageDateStatus: enumFromArray(['known', 'unknown'], 'Please select marriage date status'),
	marriageDate: optionalString(),
	oldFamilyNumber: optionalString(),
	familyName: requiredString('Family Name is required'),
	headOfFamily: requiredString('Head of Family is required'),
	familyType: enumFromArray(['couple', 'single'], 'Please select Family Type'),
	roofType: requiredString('Roof Type is required'),
	community: requiredString('Community is required'),
	subCaste: optionalString(),
	houseOwnership: requiredString('House Ownership is required'),
	familyIncome: optionalString(),
	subscriptionStart: optionalString(),
	subscriptionPeriod: optionalString(),
	subscriptionEnd: optionalString(),
	monthlySubscription: optionalString(),
	cemeteryNumber: optionalString(),
	livingStatus: requiredString('Living Status is required'),
	settledAs: requiredString('Settled As is required'),
	permanentAddressStatus: enumFromArray(['same_as_temporary', 'different'], 'Please choose permanent address status'),
	temporaryAddress: optionalString(),
	mobileNumber: optionalMobileValidation(),
	email: optionalEmail(),
	remark: optionalString(),
	activeness: requiredString('Activeness is required'),
	dynamicFamilyMembers: z
		.array(
			z.object({
				memberId: optionalString(),
				name: optionalString(),
				relation: optionalString(),
				gender: optionalString(),
			})
		)
		.optional(),
});

type FamilesType = z.infer<typeof familesTypeSchema>;

const associationsClubSchema = z.object({
	parishName: requiredString('Parish Name is required'),
	subStationName: requiredString('Sub Station is required'),
	anbiamName: requiredString('Association Name is required'),
	organisedBy: enumFromArray(['diocese', 'parish', 'association'], 'Organised By is required'),
	electedOn: requiredString('Elected On date is required'),
	periodYears: requiredString('Period (in years) is required'),
	extendPeriod: enumFromArray(['yes', 'no'], 'Please choose Yes or No'),
	periodEndOn: requiredString('Period End On date is required'),
});
type AssociationsClubFormType = z.infer<typeof associationsClubSchema>;

const associationsInchargeSchema = z.object({
	subStationName: requiredString('Sub-station is required'),
	selectedAnbiam: requiredString('Association is required'),
	electionConductedOn: requiredDate('Election Conducted On is required'),
	position: enumFromArray(['President', 'Secretary', 'Treasurer', 'Caller', 'Member'], 'Position is required'),
	electedStatus: enumFromArray(['regular', 'intermediate'], 'Elected Status is required'),
	memberType: enumFromArray(['memberOfParish', 'memberOfReligious'], 'Member type is required'),
	presidentName: requiredString('President name is required'),
	mobileNumber: mobileValidation(),
	electedDate: requiredDate('Elected Date is required'),
	periodEndOn: requiredDate('Period End On is required'),
});

type AssociationsInchargeType = z.infer<typeof associationsInchargeSchema>;

const familyCardSchema = z.object({
	subStationName: requiredString('Sub Station is required'),
	selectedAnbiam: requiredString('Anbiam selection is required'),
	hasPriorBalance: enumFromArray(['current_year', 'next_year'], 'Please choose Yes or No'),
});

type FamilyCardType = z.infer<typeof familyCardSchema>;

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
	familyCardSchema,
	familesMembersTypeSchema,
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
	FamilyCardType,
	FamilesMembersType,
};
