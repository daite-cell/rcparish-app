import type { ColumnDef } from '@tanstack/react-table';
import type { JSX, ReactNode } from 'react';

export interface AppRoute {
	path: string;
	name: string;
	element: JSX.Element;
	layout?: boolean;
}

export interface NavLinkSectionProps {
	page_path_name: string;
	nav_side_heading?: string;
	label: string;
	page_nav_links: NavLinkProps[];
}

export interface TabsProps {
	label: string;
}

export interface NavLinkProps {
	path_url: string;
	label: string;
	icon: string;
	tabs?: TabsProps[];
	child_nav_links?: NavLinkProps[];
}

export interface CircularProgressProps {
	size?: number;
	strokeWidth?: number;
	color?: string;
	speed?: number;
}

export interface FormButtonProps {
	label?: string;
	onClick?: () => void;
}

export type InfoHeadingTitleProps = { title: string; style?: string };

export interface InfoParagraphProps {
	children: ReactNode;
	style?: string;
}

export interface BulletPointListProps {
	items?: string[];
	style?: string;
	ordered?: boolean;
}

export interface ParagraphGroupWithTitleProps {
	title: string;
	paragraphs?: string[];
	style?: string;
}

export interface PriestFullInfoProps {
	name: string;
	priestFrom?: string;
	ordinationDate?: string;
	birthDate?: string;
	livingStatus?: string;
	nativePlace?: string;
	aadhaarNumber?: string;
	phoneNumber?: string;
	email?: string;
	address?: string;
}

export type TableRowData = {
	sub_station: string;
	date: string;
	timing: string;
	title: string;
	country: string;
};

export interface FamilyFullOverviewData {
	family_name: string;
	activeness: {
		active_ness: string;
	};
	family_details: {
		family_head_name: string;
		unique_anbiam_family_number: string;
		old_family_number: string;
		sub_station: string;
		anbiam: string;
		father_or_husband_name: string;
		mother_or_wife_name: string;
		marriage_date: string;
	};
	social_status_details: {
		house_type: string;
		house_ownership: string;
	};
	income_and_subscription_details: {
		family_monthly_income: string;
		subscription_from: string;
		family_card_valid_upto: string;
		monthly_subscription: string;
		cemetery_number: string;
	};
	community_details: {
		community: string;
		sub_caste: string;
	};
	contact_details: {
		living_status: string;
		parish_name: string;
		diocese_name: string;
		country_name: string;
		settled_as: string;
		mobile_number: string;
		email_id: string;
		temporary_address: string;
		permanent_address: string;
	};
}

export interface PriestFamilyDataProps {
	parish: {
		church_name: string;
		parish_name: string;
		diocese_name: string;
	};

	profile: {
		member_from: string;
		mobile_number: string;
		email: string;
		gender: string;
		member_name: string;
	};

	family_info: {
		family_name: string;
		unique_family_number: string;
		sub_station: string;
		anbiam: string;
		relation: string;
		family_head: string;
		father_name: string;
		mother_name: string;
	};

	religious_details: {
		category: string;
		diocese_name: string;
		current_status: string;
		position: string;
		place: string;
		permanent_address: string;
		temporary_address: string;
	};
}

export type HolyCommunionMemberType = {
	memberName: string;
	memberId: string;
	familyName: string;
	familyId: string;
	mainStation: string;
	subStationId: string;
	anbiam: string;
	anbiamId: string;
	gender: string;
	familyHead: string;
	fatherName: string;
	motherName: string;
	godFatherName: string;
	godMotherName: string;
	baptismDate: string;
	fhcDate: string;
	fhcReceived: string;
	fhcAt: string;
	fhcIn: string;
	minister: string;
	registrationNumber: string;
	remarks: string;
};

export type TableConfig<T> = {
	columns: ColumnDef<T, unknown>[];
};
export type Property = {
	details: string;
	type: string;
	propertyType: string;
	propertyName: string;
	propertyIdOrNo: string;
	propertyOwnFor: string;
	propertyMaintainedBy: string;
	ownershipName: string;
	renderName: string;
	mobile: string;
	adhaar: string;
	address: string;
	leaseAmount: string;
	agreementDocumentWritten: string;
	agreementFromOn: string;
	agreementPeriod: string;
	agreementEndOn: string;
	agreementMadeBy: string;
};

export type LandDocument = {
	document: string;
	parishName: string;
	villageName: string;
	automaticDocumentId: string;
	dateOfRegistration: string;
	purchasingAmount: string;
	purchaserName: string;
	vendorName: string;
	oldSurvey: string;
	newSurvey: string;
	extentInAcre: string;
	pattaNo: string;
	availabilityOfDocument: 'yes' | 'no';
	landUsage: string;
	landType: string;
	remark: string;
};

export type Cemetery = {
	details: string;
	cemeteryNumber: string;
	forFamily: string;
	maintainedBy: string;
	mobile: string;
	parish: string;
	cemeteryAt: string;
	address: string;
	dugOnLastTime: string;
};

export interface ChurchInventory {
	details: string;
	stationType: string;
	thingName: string;
	thingIdOrNo: string;
	category: string;
	ratePerItem: number;
	quantity: number;
	price: number;
	purchasedOrSponsored: string;
	sponsorName: string;
	dateOn: string;
	propertyOwnFor: string;
}

export interface PresbyteryInventory {
	details: string;
	thingName: string;
	thingIdOrNo: string;
	category: string;
	ratePerItem: number;
	quantity: number;
	price: number;
	purchasedOrSponsored: string;
	sponsorName: string;
	dateOn: string;
	propertyOwnFor: string;
}
export type BishopPositionTableProps = {
	position: string;
	name: string;
	from: string;
	to: string;
	mobile: string;
	briefHistory: string;
	upload: string;
};

export interface PriestPersonalDetailsProps {
	nameOfThePriests: string;
	image: string;
	presentPosition: string;
	ordinationDate: string;
	birthDate: string;
	livingStatus: string;
	mobileNumber: string;
	optionalMobileNumber: string;
	mailId: string;
	nativePlace: string;
	adhaarNumber: string;
	presentResidential: string;
}

export interface ParishCouncilMemberDetailsProps {
	mainStation: string;
	position: string;
	name: string;
	mobile: string;
	memberId: string;
	electedStatus: string;
	electedDate: string;
	electedFrom: string;
	nameOfRespectives: string;
	positionInDiscipline: string;
}

export interface FamilyDataProps {
	mainStation: string;
	anbiam: string;
	familyNumber: string;
	familyName: string;
	marriageDate1: string;
	marriageDate2: string;
	oldFamilyNumber: string;
	familyHead: string;
	membersInFamily: string;
	familyType: string;
	monthlySubscription: string;
	subscriptionFrom: string;
	houseType: string;
	community: string;
	ownership: string;
	livingStatus: string;
	settledAs: string;
	mobile: string;
	permanentAddress: string;
	temporaryAddress: string;
	remarks: string;
	position: string;
	name: string;
	memberId: string;
	electedStatus: string;
	electedDate: string;
	electedFrom: string;
	nameOfRespectives: string;
	positionInDiscipline: string;
	familyMonthlyIncome?: string;
	subCaste?: string;
}

export interface MembersInParishFamilyProps {
	memberName: string;
	uniqueMembershipNumber: string;
	familyName: string;
	uniqueAnbiamFamilyNumber: string;
	oldFamilyNumber: string;
	mainStationSubStation: string;
	anbiam: string;
	relationshipToFamily: string;
	gender: string;
	fatherName: string;
	motherName: string;
	livingWith: string;
	physicallyChallenged: string;
	bloodGroup: string;
	communityCaste: string;
	subCaste: string;
	religion: string;
	vocationStatus: string;
	marriageStatus: string;
	marriageDate: string;
	marriageRemarks: string;
	birthDate: string;
	baptismDate: string;
	holyCommunionDate: string;
	confirmationDate: string;
	mobileNumber: string;
	adhaarNumber: string;
	qualification: string;
	occupation: string;
	monthlyIncome: string;
	livingStatus: string;
	permanentAddress: string;
	residentialAddress: string;
	subStationId: string;
	anbiamId: string;

	activeness?: string;
	occupationSector?: string;
	typePercentage?: string;
	relation?: string;
	religionDetails?: string;
	migratedReason?: string;
	migratedPreviousParishDiocese?: string;
	migratedPreviousStateCountryRite?: string;
	migratedDate?: string;
	convertedFrom?: string;
	conversionDate?: string;
	conversionMinister?: string;
	remarks?: string;
	marriageRemark?: string;
	congregationName?: string;
	congregationPosition?: string;
	congregationJoiningDate?: string;
	congregationPlace?: string;
	congregationRemarks?: string;
	godFatherName?: string;
	godMotherName?: string;
	qualificationStatus?: string;
	qualificationCategory?: string;
	qualificationStudyingIn?: string;
	qualificationStudyingInstituteName?: string;
	qualificationStudyingInstitutePlace?: string;
	qualificationStudyingInstituteManagement?: string;
	profQualificationStatus?: string;
	profQualification?: string;
	profStudyingCourse?: string;
	profStudyingInstituteName?: string;
	profStudyingInstitutePlace?: string;
	profStudyingInstituteManagement?: string;
}

export interface ParishSonsAndDaughtersProps {
	memberName: string;
	uniqueMemberId: string;
	familyName: string;
	uniqueFamilyId: string;
	station: string;
	subStationId: string;
	anbiam: string;
	anbiamId: string;
	gender: string;
	familyHead: string;
	relationshipToFamily: string;
	fatherName: string;
	motherName: string;
	category: string;
	nameOfRespective: string;
	presentStatus: string;
	studyingOrPosition: string;
	place: string;
	mobileNumber: string;
	email: string;
	permanentAddress: string;
	temporaryAddress: string;
}

export interface ReligiousPersonProps {
	religiousPersonName: string;
	image?: string;
	personId: string;
	gender: string;
	position: string;
	institution: string;
	inChargeFor: string;
	contactMobileNumber: string;
}

export interface AnbiamCouncilDataProps {
	parishName: string;
	mainStationOrSubStation: string;
	anbiamName: string;
	anbiamId: string;
	shortForm: string;
	electedOn: string;
	periodOfYears: number;
	ifExtended: string;
	periodEndsOn: string;
}

export interface AnbiamInchargeDataProps {
	mainStation: string;
	anbiam: string;
	position: string;
	electedStatus: string;
	reason: string;
	name: string;
	mobile1: string;
	mobile2?: string;
	memberId: string;
	electedDate: string;
}

export interface AssociationCouncilMemberProps {
	mainStation: string;
	association: string;
	priorDignitaries: string;
	position: string;
	memberFrom: string;
	electedStatus: string;
	reason: string;
	name: string;
	mobile: string;
	memberId: string;
	electedDate: string;
}

export interface ChronicleMemberProps {
	details: string;
	date: string;
	event: string;
	descriptions: string;
	documentAttachment: string;
	image1: string;
	image2: string;
	image3: string;
	eventNo: string;
}

export interface BaptismMemberType {
	memberName: string;
	memberId: string;
	familyName: string;
	familyId: string;
	mainStation: string;
	subStationId: string;
	anbiam: string;
	anbiamId: string;
	gender: string;
	familyHead: string;
	fatherName: string;
	motherName: string;
	godFatherName: string;
	godMotherName: string;
	dateOfBirth: string;
	baptistDate: string;
	baptistAt: string;
	baptistIn: string;
	minister: string;
	registrationNumber: string;
	remarks: string;
}

export interface ConfirmationFromFamilyMemberType {
	memberName: string;
	memberId: string;
	familyName: string;
	familyId: string;
	mainStation: string;
	subStationId: string;
	anbiam: string;
	anbiamId: string;
	gender: string;
	familyHead: string;
	fatherName: string;
	motherName: string;
	godFatherName: string;
	godMotherName: string;
	baptismDate: string;
	confirmationDate: string;
	confirmationReceived: string;
	confirmationAt: string;
	confirmationIn: string;
	minister: string;
	registrationNumber: string;
	remarks: string;
}

export interface ConfirmationRegisteredMemberType {
	memberName: string;
	memberId: string;
	isMemberInParish: string;
	gender: string;
	fatherName: string;
	motherName: string;
	domicileName: string;
	godFatherName: string;
	godMotherName: string;
	baptismDate: string;
	confirmationDate: string;
	confirmationAt: string;
	confirmationIn: string;
	minister: string;
	registrationNumber: string;
	remarks: string;
}

export interface MarriageRegisterMemberType {
	bannsOrRectification: string;
	bridegroomName: string;
	brideName: string;
	familyName: string;
	familyId: string;
	mainStation: string;
	subStationId: string;
	anbiamName: string;
	anbiamId: string;
	marriageDate: string;
	marriageAt: string;
	marriageIn: string;
	minister: string;
	bridegroomWitness: string;
	bridegroomAddress: string;
	brideWitness: string;
	brideAddress: string;
	registrationNumber: string;
	remarks: string;
}

export interface MarriageProposalMemberType {
	memberName: string;
	gender: string;
	isMemberInParish: string | boolean;
	fatherName: string;
	motherName: string;
	registrationNumber: string;
}

export interface MarriageRegisterMemberAsParishType {
	bannsOrRectification: string;
	bridegroomName: string;
	brideName: string;
	isMemberInParish: string | boolean;
	marriageDate: string;
	marriageAt: string;
	marriageIn: string;
	minister: string;
	priestName: string;
	bridegroomWitness: string;
	bridegroomAddress: string;
	brideWitness: string;
	brideAddress: string;
	registrationNumber: string;
	remarks: string;
}

export interface MarriageProposalMemberFormType {
	memberName: string;
	gender: string;
	familyName: string;
	familyId: string;
	mainStation: string;
	subStationId: string;
	anbiam: string;
	anbiamId: string;
	fatherName: string;
	motherName: string;
	registrationNumber: string;
}

export interface DeathRegisterMemberType {
	memberName: string;
	memberId: string;
	familyName: string;
	familyId: string;
	mainStation: string;
	subStationId: string;
	anbiamName: string;
	anbiamId: string;
	fatherName: string;
	motherName: string;
	deathDate: string;
	deathPlace: string;
	causeOfDeath: string;
	deathCertificateIssued: string;
	burialDate: string;
	cemetery: string;
	registrationNumber: string;
	remarks: string;
}

export interface DeathRegisterMemberAsParishType {
	memberName: string;
	memberId: string;
	isMemberInParish: string;
	fatherName: string;
	motherName: string;
	birthDate: string;
	birthPlace: string;
	deathDate: string;
	deathPlace: string;
	burialDate: string;
	cemetery: string;
	minister: string;
	registrationNumber: string;
	remarks: string;
}

export interface RegisterSectionOverviewProps {
	memberName: string;
	familyName: string;
	uniqueAnbiamFamilyNumber: string;
	mainStation: string;
	subStationId: string;
	anbiam: string;
	nameOfHead: string;
	gender: string;
	baptistDate: string;
	fatherName: string;
	motherName: string;
	godFatherName: string;
	godMotherName: string;
	baptistAt: string;
	baptistIn: string;
	minister: string;
	registrationNumber: string;
	remarks: string;
}

export interface CongregationInstitutionType {
	id?: string;
	category: string;
	institutionCategory: string;
	institutionType: string;
	name: string;
	place: string;
	landOwnership: string;
	establishedYear: string;
	recognitionDate: string;
	recognitionNumber: string;
	classesFrom: string;
	classesUpto: string;
	gender: string;
	runBy: string;
	medium: string;
	management: string;
	contactNumber: string;
	mailId: string;
	address: string;
}

export interface VocationalInstitutionType {
	noviciateName: string;
	place: string;
	landOwnership: string;
	belongsTo: string;
	seminary: string;
	contactNumberLL: string;
	mailId: string;
	address: string;
}

export interface ConventDetailsTypeProps {
	stationType: string;
	conventType: string;
	conventName: string;
	conventPlace: string;
	belongsTo: string;
	establishedYear: string;
	establishedBy: string;
	landOwnership: string;
	contactAddress: string;
	mobileNumber: string;
	email: string;
}
