import type { CongregationInstitutionType, ConventDetailsTypeProps, VocationalInstitutionType } from '@/types';

export const getInstitutionSectionData = (row: CongregationInstitutionType) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					category: row.category_content,
					institution_category: row.religious_content,
					institution_type: row.type_content,
					institution_id: row.institute_id,
					place: row.place,
					recognition_date: row.recognition_date,
					recognition_number: row.recognition_no,
					land_ownership: row.land_ownership_content,
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
					established_year: row.established_year_content,
					classes_from: row.class_to,
					gender: row.gender_content,
					classes_from_to: `${row.class_from} to ${row.class_to}`,
					run_by: row.run_by_content,
					name_of_diocese: 'Diocese',
					medium: row.medium_content,
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
					management: row.management_content,

					contact_number: row.mobile_no,
					mail_id: row.mail_id,
					address: row.address,
				},
			},
		],
	},
];

export const getCommunitiesSectionData = (row: ConventDetailsTypeProps) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					main_station: row.sub_station_name,
					type_of_convent: row.type_content,
					convent_Id: row.convent_id,
					place: row.place,
					belongs_to: row.belongs_to,
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
					name_of_the_congregation: 'Sisters of the Destitute (SD)',
					abbreviation: 'SD',
					established_year: row.established_year_content,
					established_by: row.established_by,
					land_ownership: row.land_ownership_content,
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
					address: '',

					contact_number: row.mobile_no,
					mail_id: row.mail_id,
				},
			},
		],
	},
];

export const getVocationalSectionData = (row: VocationalInstitutionType) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					place: row.place || '',
					vocational_id: row.vocational_id || '',
					parish: row.parish || '',
					vicariate: '',
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
					land_ownership: row.land_ownership_content,
					belongs_to: row.belong_to_content,
					name_of_the_congregation: row.name,
					seminary: row.seminary_content,
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
					contact_number: row.mobile_no,
					convert_mail_id: row.mail_id,
					address: row.address,
				},
			},
		],
	},
];
