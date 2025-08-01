import { z } from 'zod';
import {
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
	permanentAddressStatus: enumFromArray(['same_as_temporary', 'different'], 'Please choose an address option'),
	permanentAddress: longText(10, 'Temporary address is required').optional(),
	image: requiredImageSchema,
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
