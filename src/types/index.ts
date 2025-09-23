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

export interface ProfileCardProps {
	step: string;
	title: string;
	subtitle: string;
	stepNumber: string;
	pathUrl: string;
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
	sub_station_name: string;
	sub_station_id: string;
	anbiam_name: string;
	anbiam_id: string;
	family_name: string;
	unique_family_id: string;
	family_head: string;
	member_name: string;
	unique_member_id: string;
	god_mother_name: string;
	god_father_name: string;
	baptism_name: string;
	baptism_received: string;
	baptism_date: string;
	baptism_date_remark: string;
	gender: string;
	activeness: string;
	activeness_content: string;
	father_name: string;
	mother_name: string;
	holy_communion_received: string;
	holy_communion_date: string;
	holy_communion_date_remark: string;
	holy_communion_at: string;
	holy_communion_in: string;
	minister: string;
	record_no: string;
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
	id: string;
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
export interface PriestDetails {
	present_position: string;
	priest_name: string;
	image: string;
	priest_id: string;
	ordination_date: string;
	birth_date: string;
	living_status_content: string;
	mobile_no_1: string;
	mobile_no_2: string;
	mail_id: string;
	native_place: string;
	adhaar_no: string;
	address: string;
}

export interface ParishCouncilMemberDetailsProps {
	sub_station_id: string;
	election_conducted: string;
	period_end_on: string;
	elected_status: string;
	position: string;
	elected_category: string;
	anbiam_id: string;
	elected_from: string;
	association_id: string;
	unique_member_id: string;
	sub_station_name: string;
	elected_category_name: string;
	member_name: string;
	mobile_no: string;
	member_position: string;
	elected_date: string;
}

export interface FamilyDataProps {
	total_members: number;
	sub_station_name: string;
	sub_station_id: string;
	anbiam_name: string;
	anbiam_id: string;
	unique_family_id: string;
	family_name: string;
	marriage_date: string;
	family_head: string;
	family_type: string;
	social_status: string;
	community: string;
	house_ownership: string;
	subscription_from: string;
	subscription_period: string;
	subscription_end_on: string;
	monthly_subscription: string;
	living_status: string;
	settled_as: string;
	permanent_address: string;
	temporary_address: string;
	family_mobile_no: string;
	any_remark: string;
	activeness: string;
	activeness_content: string;
}
export interface FamilyCardDataProps {
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
	dob_received: string;
	birth_date: string;
	baptism_received: string;
	baptism_date: string;
	holy_communion_date: string;
	holy_communion_received: string;
	confirmation_date: string;
	confirmation_received: string;
	old_family_id: string;
	family_name: string;
	sub_station_name: string;
	anbiam_name: string;
	anbiam_id: string;
	sub_station_id: string;
	unique_family_id: string;
	unique_member_id: string;
	member_name: string;
	relation: string;
	gender: string;
	activeness: string;
	father_name: string;
	mother_name: string;
	living_with: string;
	physically_challenged: string;
	blood_group_content: string;
	community_category: string;
	sub_caste: string;
	religion: string;
	marriage_status: string;
	individual_marriage_date: string;
	marriage_remark: string;
	vocation_status: string;
	mobile_no: string;
	adhaar_no: string;
	full_qualification: string;
	q_status: string;
	occupation: string;
	monthly_income: string;
	living_status: string;
	permanent_address: string;
	temporary_address: string;
	remarks: string;
}

export interface ParishSonsAndDaughtersProps {
	family_name: string;
	family_head: string;
	sub_station_name: string;
	sub_station_id: string;
	anbiam_name: string;
	anbiam_id: string;
	unique_family_id: string;
	unique_member_id: string;
	member_name: string;
	gender: string;
	relation: string;
	activeness: string;
	father_name: string;
	mother_name: string;
	vocation_status: string;
	vs_data_1: string;
	vs_data_2: string;
	vs_data_3: string;
	vs_data_4: string;
	vs_data_5: string;
	mobile_no: string;
	email_id: string;
	permanent_address: string;
	temporary_address: string;
	image: string;
}

export interface ParishSonsAndDaughtersOtherMemberProps {
	member_name: string;
	father_name: string;
	mother_name: string;
	gender: string;
	category: string;
	name_of_respective: string;
	present_status: string;
	studying_or_position: string;
	place: string;
	mobile: string;
	email: string;
	permanent_address: string;
	temporary_address: string;
	member_id: string;
	if_member_in_parish: string;
}

export interface ReligiousPersonProps {
	convent_id: string;
	name: string;
	person_name: string;
	person_id: string;
	gender: string;
	position: string;
	position_content: string;
	in_charge: string;
	in_charge_content: string;
	mobile_no: string;
	image: string;
}

export interface AnbiamCouncilDataProps {
	parish_content: string;
	sub_station_id: string;
	sub_station_name: string;
	anbiam_name: string;
	anbiam_id: string;
	anbiam_short_form: string;
	elected_on: string;
	period_of: string;
	extend_period: string;
	period_end_on: string;
}

export interface AnbiamInchargeDataProps {
	sub_station_id: string;
	association_id: string;
	elected_status: string;
	position: string;
	member_from: string;
	unique_member_id: string;
	sub_station_name: string;
	association_name: string;
	member_name: string;
	mobile_no: string;
	elected_date: string;
	reason_content: string;
	anbiam_name: string;
	period_end_on: string;
}

export interface AssociationCouncilMemberProps {
	sub_station_id: string;
	association_id: string;
	elected_status: string;
	position: string;
	member_from: string;
	unique_member_id: string;
	sub_station_name: string;
	association_name: string;
	member_name: string;
	mobile_no: string;
	elected_date: string;
	reason_content: string;
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
	sub_station_name: string;
	sub_station_id: string;
	anbiam_name: string;
	anbiam_id: string;
	family_name: string;
	unique_family_id: string;
	family_head: string;
	member_name: string;
	unique_member_id: string;
	activeness: string;
	activeness_content: string;
	gender: string;
	father_name: string;
	mother_name: string;
	god_mother_name: string;
	god_father_name: string;
	baptism_name: string;
	dob_received: string;
	birth_date: string;
	birth_date_remark: string;
	baptism_received: string;
	baptism_date: string;
	baptism_date_remark: string;
	baptism_at: string;
	baptism_in: string;
	minister: string;
	record_no: string;
	remarks: string;
}

export interface ConfirmationFromFamilyMemberType {
	sub_station_name: string;
	sub_station_id: string;
	anbiam_name: string;
	anbiam_id: string;
	family_name: string;
	unique_family_id: string;
	family_head: string;
	member_name: string;
	unique_member_id: string;
	god_mother_name: string;
	god_father_name: string;
	baptism_name: string;
	baptism_received: string;
	baptism_date: string;
	baptism_date_remark: string;
	gender: string;
	activeness: string;
	activeness_content: string;
	father_name: string;
	mother_name: string;
	holy_communion_received: string;
	holy_communion_date: string;
	holy_communion_date_remark: string;
	holy_communion_at: string;
	holy_communion_in: string;
	minister: string;
	record_no: string;
	remarks: string;
}

export interface ConfirmationRegisteredMemberType {
	sub_station_name: string;
	sub_station_id: string;
	anbiam_name: string;
	anbiam_id: string;
	family_name: string;
	unique_family_id: string;
	family_head: string;
	member_name: string;
	unique_member_id: string;
	god_mother_name: string;
	god_father_name: string;
	baptism_name: string;
	baptism_received: string;
	baptism_date: string;
	baptism_date_remark: string;
	gender: string;
	activeness: string;
	activeness_content: string;
	father_name: string;
	mother_name: string;
	holy_communion_received: string;
	holy_communion_date: string;
	holy_communion_date_remark: string;
	holy_communion_at: string;
	holy_communion_in: string;
	minister: string;
	record_no: string;
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
	category_content: string;
	religious_content: string;
	type_content: string;
	name: string;
	institute_id: string;
	place: string;
	parish: string;
	land_ownership_content: string;
	established_year_content: string;
	recognition_date: string;
	recognition_no: string;
	class_from: string;
	class_to: string;
	gender_content: string;
	run_by_content: string;
	medium_content: string;
	management_content: string;
	mobile_no: string;
	mail_id: string;
	address: string;
}

export interface VocationalInstitutionType {
	parish: string;
	name: string;
	vocational_id: string;
	place: string;
	belong_to_content: string;
	land_ownership_content: string;
	seminary_content: string;
	address: string;
	mobile_no: string;
	mail_id: string;
}

export interface ConventDetailsTypeProps {
	parish: string;
	sub_station_name: string;
	sub_station_id: string;
	type_content: string;
	name: string;
	convent_id: string;
	place: string;
	belongs_to: string;
	established_year_content: string;
	established_by: string;
	land_ownership_content: string;
	address: string;
	mobile_no: string;
	mail_id: string;
}

export type CommonPoolSearchDataType = {
	activeness: string;
	action: string;
	parishName: string;
	familyName: string;
	transferReason: string;
	transferDate: string;
	subStation: string;
	anbiam: string;
};

export type CommonPoolFamilyAdmittedListType = {
	familyName: string;
	admittedDate: string;
	admittedBy: string;
	parishFromTo: string;
	subStationFromTo: string;
	anbiamFromTo: string;
	transferReason: string;
};

export type CommonPoolMemberAdmittedMemberType = {
	memberName: string;
	admittedDate: string;
	admittedBy: string;
	familyFromTo: string;
	parishFromTo: string;
	subStationFromTo: string;
	anbiamFromTo: string;
	transferReason: string;
};

export interface ActiveDonationTableProps {
	familyStatus: string;
	familyNumber: string;
	uniqueFamilyId: string;
	mainStation: string;
	subStationId: string;
	anbiam: string;
	anbiamId: string;
	totalAmount: number;
}

export interface InActiveDonationTableProps {
	name: string;
	city: string;
	donationFor: string;
	amount: number;
	voucherNumber: string;
	date: string;
	mobile: string;
	address: string;
}

export interface RentPropertyProps {
	type: string;
	propertyName: string;
	propertyId: string;
	renderName: string;
	mobileNumber: string;
	nowRentFor: string;
	fixedAmountMonthly: number;
	fixedAmountOn: string;
	grandPaidAmount: number;
	paidUpto: string;
	remainingUnpaidAmount: number;
	lastPaidAmount: number;
	lastPaidDate: string;
	paymentHistory: string;
}

export interface AdvanceRentPropertyProps {
	type: string;
	propertyName: string;
	propertyId: string;
	renderName: string;
	mobileNumber: string;
	nowRentFor: string;
	fixedAdvanceAmount: number;
	paidAdvanceAmount: number;
	balanceAmount: number;
	lastPaidDate: string;
}

export interface ChurchCollectionsProps {
	name: string;
	priestId: string;
	monthYear: string;
	monthly: number;
	special: number;
	other: number;
	amount: number;
}

export interface WorkerProps {
	id: number;
	parish: string;
	parish_content: string;
	vicariate: string;
	vicariate_content: string;
	working_as: string;
	working_as_content: string;
	worker_name: string;
	worker_id: string;
	joining_date: string;
	salary: string;
	salary_from: string;
	religion: string;
	religion_content: string;
	mobile_no: string;
	adhaar_no: string;
	temporary_address: string;
	check_address: string;
	permanent_address: string;
	registered_date: string;
	updated_date: string;
}

export interface EmployersSalaryProps {
	worker_name: string;
	salary_for: string | null;
	advance_salary: number | null;
	now_salary: number | null;
	total_paid: number | null;
	advance_total_paid: number | null;
	balance_salary: number | null;
	advance_on: string | null;
	date: string | null;
	receipt_no: string | null;
	working_as_content: string;
	worker_id: string;
	mobile_no: string;
	salary: number | string;
	salary_from: string;
}

export interface DioceseClosedRTB {
	requestNo: string;
	priestName: string;
	requestFor: string;
	reason: string;
	raisedOn: string;
	lastReceived: string;
	lastSent: string;
	status: string;
	lastUpdatedOn: string;
}

export interface DioceseOpenedRTB {
	requestNo: string;
	priestName: string;
	requestFor: string;
	reason: string;
	raisedOn: string;
	status: string;
	lastReceived: string;
	lastSent: string;
	respond: string;
	writeComment: string;
	action: string;
}

export interface QueryFromBishopClosedProps {
	queryNo: string;
	priestName: string;
	requestFor: string;
	reason: string;
	raisedOn: string;
	lastReceived: string;
	lastSent: string;
	status: string;
	lastUpdatedOn: string;
}

export interface QueryFromBishopOpenedProps {
	queryNo: string;
	priestName: string;
	requestFor: string;
	reason: string;
	raisedOn: string;
	status: string;
	lastReceived: string;
	lastSent: string;
	writeComment: string;
	action: string;
}

export interface QueryFromPeopleClosedProps {
	queryNo: string;
	requestFor: string;
	reason: string;
	raisedOn: string;
	lastReceived: string;
	lastSent: string;
	status: string;
	lastUpdatedOn: string;
}

export interface QueryFromPeopleOpenedProps {
	queryNo: string;
	familyName: string;
	subStationName: string;
	anbiamName: string;
	requestFor: string;
	reason: string;
	raisedOn: string;
	status: string;
	lastReceived: string;
	lastSent: string;
	writeComment: string;
	action: string;
}

export interface PriestDetailsProps {
	type: string;
	imageUrl: string;
	name: string;
	position: string;
	ordinationDate: string;
	dob: string;
	mobile1: string;
	optionalMobile: string;
	email: string;
	aadhaar: string;
	nativePlace: string;
	residence: string;
	livingStatus: string;
	uniqueId?: string;
	details?: string;
	id?: string;
	village?: string;
	status?: string;
	address?: string;
	mobile2?: string;
}

export interface PriestCalendarDetailsProps {
	name: string;
	firstProfessionDate: string;
	ordinationDate: string;
	birthDate: string;
	mobileNumber: string;
}

export interface CommissionMemberProps {
	nameOfCommission: string;
	position: string;
	priestName: string;
	presentPosition: string;
	from: string;
	to: string;
	mobile: string;
	imageUrl?: string;
	id?: string;
}

export interface DioceseVSSSMemberProps {
	id?: string;
	designation: string;
	priorDignitaries: string;
	priestName: string;
	presentPosition: string;
	fromYear: string;
	toYear: string;
	residentAt: string;
	mobileNumber: string;
	imageUrl?: string;
}

export interface DioceseSenateMemberProps {
	id: string;
	designation: string;
	priorDignitaries: string;
	priestName: string;
	presentPosition: string;
	fromYear: string;
	toYear: string;
	residentAt: string;
	mobileNumber: string;
	imageUrl: string;
	memberName: string;
}

export interface VicariateForaneMemberProps {
	id: string;
	priorDignitaries?: string;
	vicariateName: string;
	churchName: string;
	memberName: string;
	presentPosition: string;
	fromYear: string;
	toYear: string;
	residentAt: string;
	mobileNumber: string;
	imageUrl?: string;
}

export interface ParishTableDataProps {
	id: string;
	vicariateName: string;
	parishName: string;
	priestName: string;
	churchName: string;
	hasAssistant: 'Yes' | 'No';
	type: string;
	parishCouncil: 'Yes' | 'No';
	mobile1: string;
	email1: string;
	address: string;
	mobile2: string;
	email2: string;
	imageUrl: string;
}

export interface PropertiesProps {
	document: string;
	parishName: string;
	villageName: string;
	documentNumber: string;
	dateOfRegistration: string;
	purchasingAmount: string;
	purchaserName: string;
	vendorName: string;
	oldSurvey: string;
	newSurvey: string;
	extent: string;
	pattaNo: string;
	availabilityOfDocument: string;
	landUsage: string;
	landType: string;
	remark: string;
}

export interface VicariateDetailsProps {
	patronChurch: string;
	place: string;
	detailed: string;
}

export interface ParishDetailsProps {
	nameOfTheVicariate: string;
	parishName: string;
	priorDignitaries: string;
	presentParishPriest: string;
	churchName: string;
	hasSubStation: string;
	runBy: string;
	isMissionStation: string;
	parishContactNumber: string;
	parishMailId: string;
	address: string;
	priestMobileNo: string;
	priestEmailId: string;
	image: string;
}

export interface HouseListProps {
	parish: string;
	vicariate: string;
	churchName: string;
	houses: string;
	nameOfTheHouse: string;
	placeOfTheHouse: string;
	incardinatedTo: string;
	establishedYear: string;
	establishedBy: string;
	landOwnership: string;
	contactAddress: string;
	mobileNo: string;
	email: string;
}

export interface SchoolsListProps {
	details: string;
	category: string;
	institutionCategory: string;
	institutionType: string;
	name: string;
	place: string;
	parish: string;
	vicariate: string;
	landOwnership: string;
	establishedYear: string;
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

export interface TechnicalInstitutionListProps {
	category: string;
	institution_category: string;
	name: string;
	place: string;
	parish: string;
	vicariate: string;
	established_year: string;
	land_ownership: string;
	gender: string;
	run_by: string;
	medium: string;
	management: string;
	contact_number_ll: string;
	mail_id: string;
	address: string;
}

export interface CollegeListProps {
	category: string;
	college_category: string;
	name: string;
	place: string;
	parish: string;
	vicariate: string;
	established_year: string;
	land_ownership: string;
	affiliation_with: string;
	gender: string;
	run_by: string;
	medium: string;
	management: string;
	contact_number_ll: string;
	mail_id: string;
	address: string;
}

export interface HomageListProps {
	category: string;
	name: string;
	place: string;
	parish: string;
	vicariate: string;
	land_ownership: string;
	established_year?: string;
	run_by: string;
	home_for: string;
	contact_number_ll?: string;
	mail_id?: string;
	address?: string;
}

export interface HealthInstituteListProps {
	category: string;
	healthInstituteCategory: string;
	name: string;
	place: string;
	parish: string;
	vicariate: string;
	landOwnership: string;
	establishedYear: string;
	runBy: string;
	contactNumberLL: string;
	mailId: string;
	address: string;
}

export interface HostelListProps {
	category: string;
	name: string;
	campusName: string;
	place: string;
	parish: string;
	vicariate: string;
	landOwnership: string;
	specification: string;
	establishedYear: string;
	runBy: string;
	contactNumberLL: string;
	mailId: string;
	address: string;
}

export interface NoviciateInstitutionProps {
	noviciateName: string;
	place: string;
	parish: string;
	vicariate: string;
	landOwnership: string;
	institutionCategory: string;
	institutionType: string;
	category: string;
	contactNumber: string;
	mailId: string;
	address: string;
}

export interface CuriaMembersProps {
	position: string;
	name: string;
	presentPosition: string;
	from: string;
	to: string;
	mobile: string;
	imageUrl?: string;
	id?: string;
}

export interface CommitteesProps {
	id: string;
	position: string;
	name: string;
	presentPosition: string;
	from: string;
	to: string;
	mobile: string;
	imageUrl?: string;
}

export interface DioceseSermonProps {
	id: string;
	date: string;
	week: string;
	day: string;
	file: string;
	scrollTo: string;
	by: string;
}

export interface ParishAssociationClubProps {
	parish_content: string;
	sub_station_id: string;
	sub_station_name: string;
	association_content: string;
	association_id: string;
	organised_by: string;
	elected_on: string;
	period_of: string;
	extend_period: string;
	period_end_on: string;
}

export interface PriestReligiousProps {
	id: string;
	nameOfThePriests: string;
	birthDate: string;
	ordinationDate: string;
	presentPosition: string;
	presentResidential: string;
	mobileNumber: string;
	optionalMobileNumber: string;
	mailId: string;
	adhaarNumber: string;
	nativePlace: string;
	image: string;
	livingStatus: 'Alive' | 'Dead' | string;
}

export type SubscriptionProps = {
	family_name: string;
	sub_station_name: string;
	anbiam_name: string;
	family_income: number;
	mobile_no: string;
	balance_amount: number | null;
	month: string | null;
	now_amount: number | null;
	date: string | null;
	grand_amount: number | null;
	prior_total_amount: number | null;
	receipt_no: string | null;
	unique_family_id: string;
	old_family_id: string;
	family_head: string;
	sub_station_id: string;
	anbiam_id: string;
	subscription_from: string;
	monthly_subscription: string;
	activeness: string;
	activeness_content: string;
};

export interface PaymentDetailsProps {
	familyStatus: string;
	familyName: string;
	uniqueFamilyNumber: string;
	mainStation: string;
	anbiam: string;
	paidAmount: number;
	paidDate: string;
	receiptNo: string;
}

export interface RentPropertyPaymentProps {
	property: string;
	propertyName: string;
	renderName: string;
	mobileNumber: string;
	paidAmount: number;
	paidDate: string;
	receiptNumber: string;
}

export interface DayBookEntry {
	date: string;
	name: string;
	voucherNumber: string;
	purpose: string;
	description: string;
	details: string;
	incomeAmount: number;
	expenseAmount: number;
}

export type AuditingProps = {
	description: string;
	amount: number;
};

export interface AssociationDetailsProps {
	sub_station_id: string;
	sub_station_name: string;
	association_content: string;
	association_id: string;
	total_members: number;
}

export interface AssociationInchargeProps {
	member_from: string;
	member_name: string;
	mobile_no: string;
	elected_status: string;
	position: string;
	elected_date: string;
	period_end_on: string;
}

export interface MemberDetailsType {
	unique_member_id: string;
	activeness: string;
	activeness_content: string;
	member_name: string;
	member_in_active_reason: string;
	member_blood_group: string;
	member_mobile_no: string;
	member_occupation_sector: string;
	member_qualification: string;
	member_marriage_status: string;
	member_marriage_date: string;
	member_vocation_status: string;
	member_adhaar_no: string;
	member_birth_date: string;
	member_baptism_date: string;
	member_holy_communion_date: string;
	member_confirmation_date: string;
	relation: string;
	gender: string;
}

export interface FamilyMemberDetailsProps {
	activeness: string;
	activeness_content: string;
	member_name: string;
	unique_member_id: string;
	relation: string;
	gender: string;
	mobile_no: string;
	image: string;
}

export interface StudentDataProps {
	student_name: string;
	class: string;
	gender: string;
	father_name: string;
	mother_name: string;
	mobile_number: string;
	family_number: string;
	school_name: string;
	place_of_school: string;
	board_of_school: string;
	management: string;
	family_type: string;
	family_income: string;
	membership_number: string;
	sub_station_name: string;
	sub_station_id: string;
	anbiam_name: string;
	anbiam_id: string;
}

export interface CollegeStudentDataProps {
	student_name: string;
	course_type: string;
	course_name: string;
	year: string;
	college_name: string;
	place_of_college: string;
	management: string;
	gender: string;
	father_name: string;
	mother_name: string;
	mobile_number: string;
	family_number: string;
	family_type: string;
	family_income: string;
	membership_number: string;
	sub_station_name: string;
	sub_station_id: string;
	anbiam_name: string;
	anbiam_id: string;
}

export interface AnbiamDetailsProps {
	sub_station_id: string;
	sub_station_name: string;
	anbiam_name: string;
	anbiam_id: string;
	total_families: number;
	total_members: number;
}

export interface TotalFamilyMembersDetails {
	activeness: string;
	total_members: number;
	activeness_content: string;
	family_name: string;
	unique_family_id: string;
	old_family_id: string;
	family_head: string;
	monthly_subscription: string;
}

export interface PriestServiceDetails {
	id: number;
	priest_id: string;
	service_as: string;
	service_as_content: string;
	details: string;
	status: string;
	status_content: string;
	category: string;
	parish_place_name: string;
	church_name: string;
	from_date: string;
	to_date: string;
	remark: string;
	brief_history: string;
	registered_date: string;
	updated_date: string;
}

export interface PriestFamilyDetails {
	father_name: string;
	mother_name: string;
	no_of_siblings: number;
	birth_order: number;
	elder_brothers: number;
	younger_brothers: number;
	elder_sisters: number;
	younger_sisters: number;
	remark: string;
}

export interface PriestEducationDetails {
	category: string;
	details: string;
	course_name: string;
	institution_name: string;
	place: string;
	course_started: string;
	course_completed: string;
	remark: string;
}

export interface PriestHigherEducation {
	category: string;
	course_name: string;
	college_name: string;
	place: string;
	course_started: string;
	course_completed: string;
	remark: string;
}

export type SectionDataType = {
	col: number;
	sections: {
		heading?: string;
		data: Record<string, string | number | null | undefined>;
	}[];
};

type RecordsData = {
	service_record?: object[];
	family_record?: object[];
	secular_studies?: object[];
	sacred_studies?: object[];
};

export interface GenericOverviewProps<T = unknown> {
	userName?: string;
	sectionData?: SectionDataType[];
	isFamilyType?: boolean;
	showImage?: boolean;
	enableRecordTable?: boolean;
	recordsData?: RecordsData & T;
}
export type WorkingMember = {
	name?: string;
	designation?: string;
	jobType?: string;
	mobile?: string;
};

export type VendorMember = {
	name?: string;
	mobile?: string;
	adhaarNumber?: string;
};

export interface CemeteryMember {
	buriedPersonName?: string;
	buriedDate?: string;
}

export interface MonthlyCollectionProps {
	name?: string;
	occasion?: string;
	details?: string;
	sundayCollection?: number;
	massIndention?: number;
	boxCollection?: number;
	total?: number;
}

export interface SpecialCollectionProps {
	occasion?: string;
	details?: string;
	collection?: string;
	amount?: number;
}
export interface OtherCollectionProps {
	occasion?: number;
	collection?: number;
	amount?: number;
}

export interface MemberType {
	status: string;
	name_of_member: string;
	from_date: string;
	mobile?: string;
	to_date?: string;
	position?: string;
	image?: string;
	priest_id?: string;
	prior_dignitaries?: string;
}

export interface CuriaMembersFormType {
	members: MemberType[];
}

export interface RegisterMemberType {
	position: string;
	name: string;
	from_date: string;
	to_date?: string;
	mobile?: string;
	image?: string;
}

export interface TechnicalInstitutionListRow {
	details: string;
	category_content: string;
	religious_content: string;
	name: string;
	place: string;
	established_year_content: string;
	recognition_date: string;
	recognition_no: string;
	land_ownership_content: string;
	gender_content: string;
	run_by_content: string;
	medium_content: string;
	management_content: string;
	mobile_no: string;
	mail_id: string;
	address: string;
}

export interface CollegesListProps {
	category_content: string;
	college_category_content: string;
	name: string;
	place: string;
	established_year_content: string;
	recognition_date: string;
	recognition_no: string;
	land_ownership_content: string;
	affiliation_with_content: string;
	gender_content: string;
	run_by_content: string;
	medium_content: string;
	management_content: string;
	mobile_no: string;
	mail_id: string;
	address: string;
	details?: string;
}

export interface HomeInstitutionsListProps {
	details: string;
	category_content: string;
	name: string;
	place: string;
	land_ownership_content: string;
	established_year_content: string;
	recognition_date: string;
	recognition_no: string;
	run_by_content: string;
	home_for_content: string;
	mobile_no: string;
	mail_id: string;
	address: string;
}

export interface HealthInstituteListRow {
	details: string;
	category_content: string;
	health_category_content: string;
	name: string;
	place: string;
	land_ownership_content: string;
	established_year_content: string;
	recognition_date: string;
	recognition_no: string;
	run_by_content: string;
	mobile_no: string;
	mail_id: string;
	address: string;
}

export interface HostelCampusListProps {
	details: string;
	category_content: string;
	name: string;
	campus_name_content: string;
	place: string;
	land_ownership_content: string;
	specification_content: string;
	established_year_content: string;
	recognition_date: string;
	recognition_no: string;
	run_by_content: string;
	mobile_no: string;
	mail_id: string;
	address: string;
}

export interface SchoolListRow {
	religious_content: string;
	type_content: string;
	name: string;
	institute_id: string;
	place: string;
	parish: string;
	land_ownership_content: string;
	established_year_content: string;
	recognition_date: string;
	recognition_no: string;
	class_from: string;
	class_to: string;
	gender_content: string;
	run_by_content: string;
	medium_content: string;
	management_content: string;
	mobile_no: string;
	mail_id: string;
	address: string;
}

export interface AddFamilyMemberType {
	memberId: string;
	name: string;
	relation: string;
	gender: string;
	active: string;
}
