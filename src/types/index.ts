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

export type MemberType = {
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
