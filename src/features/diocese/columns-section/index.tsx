import type {
	PriestDetailsProps,
	NoviciateInstitutionProps,
	InstitutionDetailsProps,
	PropertiesProps,
	DioceseVSSSMemberProps,
	DioceseSenateMemberProps,
	VicariateForaneMemberProps,
	ParishTableDataProps,
} from '@/types';

const getPriestsSectionData = (row: PriestDetailsProps) => [
	{
		col: 1,
		sections: [
			{
				heading: 'Priestly Info',
				data: {
					priest_permanent_Id: row?.uniqueId ?? '',
					priest_from: row?.type ?? '',
					date_of_priestly_ordination: row?.ordinationDate ?? '',
					place_of_priestly_ordination: '',
				},
			},
		],
	},
	{
		col: 2,
		sections: [
			{
				heading: 'Birth & Native Info',
				data: {
					birth_of_date: row?.dob ?? '',
					place_of_birth: '',
					native_place: row?.nativePlace ?? row?.village ?? '',
					native_parish: '',
					date_of_baptism: '',
					place_of_baptism: '',
					date_of_first_profession: '',
					place_of_first_profession: '',
				},
			},
		],
	},
	{
		col: 3,
		sections: [
			{
				heading: 'Other Details',
				data: {
					date_of_diaconate: '',
					place_of_diaconate: '',
					adhaar_no: row?.aadhaar ?? '',
					contact: row?.mobile1 ?? '',
					email: row?.email ?? '',
					address: row?.residence ?? row?.address ?? '',
					living_status: row?.livingStatus ?? row?.status ?? '',
				},
			},
		],
	},
];

const getNoVocationalListSectionData = (row: NoviciateInstitutionProps) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					place: row.place || '',
					parish: row.parish || '',
					vicariate: row.vicariate || '',
					land_ownership: row.landOwnership || '',
				},
			},
		],
	},
	{
		col: 2,
		sections: [
			{
				heading: '',
				data: {
					belongs_to: row.institutionCategory || '',
					name_of_the_congregation: row.institutionType || '',
					seminary: '',
				},
			},
		],
	},
	{
		col: 3,
		sections: [
			{
				heading: '',
				data: {
					contact_number: row.contactNumber || '',
					email: row.mailId || '',
					address: row.place || '',
				},
			},
		],
	},
];

const getInstitutionDetailsSectionData = (row: InstitutionDetailsProps) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					category: row.category || '',
					institution_category: row.institutionCategory || '',
					institution_type: row.institutionType || '',
					place: row.place || '',
					parish: row.parish || '',
					vicariate: row.vicariate || '',
					land_ownership: row.landOwnership || '',
				},
			},
		],
	},
	{
		col: 2,
		sections: [
			{
				heading: '',
				data: {
					established_year: row.establishedYear || '',
					classes_from: row.classesFrom || '',
					gender: row.gender || '',
					classes_from_to: `${row.classesFrom} to ${row.classesUpto}`,
					run_by: row.runBy || '',
					name_of_diocese: '',
					medium: row.medium || '',
				},
			},
		],
	},
	{
		col: 3,
		sections: [
			{
				heading: '',
				data: {
					management: row.management || '',
					partially_aided_classes_from_to: '6th-8th',
					self_finance_classes_from_to: '9th-10th',
					contact_number: row.contactNumber || '',
					email: row.mailId || '',
					address: row.place || '',
				},
			},
		],
	},
];

const getPropertiesSectionData = (row: PropertiesProps) => [
	{
		col: 1,
		sections: [
			{
				heading: 'Land Details',
				data: {
					document: row.documentNumber || '',
					parish_name: row.parishName || '',
					purchaser_name: row.purchaserName || '',
					vender_name: row.vendorName || '',
					purchasing_amount: row.purchasingAmount || '',
				},
			},
		],
	},
	{
		col: 2,
		sections: [
			{
				heading: '',
				data: {
					date_of_registration: row.dateOfRegistration || '',
				},
			},
			{
				heading: 'SURVEY NO DETAILS',
				data: {
					old_survey_number: row.oldSurvey || '',
					new_survey_number: row.newSurvey || '',
					patta_no: '',
					document_availability: row.availabilityOfDocument || '',
				},
			},
		],
	},
	{
		col: 3,
		sections: [
			{
				heading: '',
				data: {
					document: 'view',
					extent: row.extent || '',
					usage_of_land: row.landUsage || '',
					type_of_land: row.landType || '',
				},
			},
			{
				heading: 'REMARKS ABOUT PROPERTY',
				data: {
					remark: row.remark || '',
				},
			},
		],
	},
];

const getVssSectionData = (row: DioceseVSSSMemberProps) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					designation: row.designation || '',
					from_the_year: row.fromYear || '',
					to_the_year: row.toYear || '',
				},
			},
		],
	},
	{
		col: 2,
		sections: [
			{
				heading: '',
				data: {
					address: row.presentPosition || '',
					mobile_number: row.mobileNumber || '',
				},
			},
		],
	},
];

const getSenateMembersSectionData = (row: DioceseSenateMemberProps) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					designation: row.designation || '',
					from_the_year: row.fromYear || '',
					to_the_year: row.toYear || '',
				},
			},
		],
	},
	{
		col: 2,
		sections: [
			{
				heading: '',
				data: {
					address: row.presentPosition || '',
					mobile_number: row.mobileNumber || '',
				},
			},
		],
	},
];

const getVicariateForaneMemberData = (row: VicariateForaneMemberProps) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					designation: row.presentPosition || '',
					vicariate: row.vicariateName || '',
				},
			},
		],
	},
	{
		col: 2,
		sections: [
			{
				heading: '',
				data: {
					from_to: row.fromYear + ' to ' + row.toYear || '',
					address: row.residentAt || '',
					mobile_number: row.mobileNumber || '',
				},
			},
		],
	},
];

const getParishesMemberData = (row: ParishTableDataProps) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					vicariate_name: row.vicariateName || '',
					church_name: row.churchName || '',
					run_by: row.type || '',
					parish_contact: row.mobile1 || '',
					parish_mail_id: row.email1 || '',
					parish_address: row.address || '',
				},
			},
		],
	},
	{
		col: 2,
		sections: [
			{
				heading: '',
				data: {
					does_it_have_sub_station: row.hasAssistant || '',
					does_it_have_mission_statement: row.parishCouncil || '',
					priest_name: row.priestName || '',
					contact: row.mobile1 || '',
					email: row.email1 || '',
				},
			},
		],
	},
];
export {
	getPriestsSectionData,
	getNoVocationalListSectionData,
	getInstitutionDetailsSectionData,
	getPropertiesSectionData,
	getVssSectionData,
	getSenateMembersSectionData,
	getVicariateForaneMemberData,
	getParishesMemberData,
};
