import type { CongregationInstitutionType, ConventDetailsTypeProps } from '@/types';

export const getInstitutionSectionData = (row: CongregationInstitutionType) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					category: row.category,
					institution_category: row.institutionCategory,
					institution_type: row.institutionType,
					institution_id: '',
					place: row.place,
					recognition_date: row.recognitionDate,
					recognition_number: row.recognitionNumber,
					land_ownership: row.landOwnership,
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
					established_year: row.establishedYear,
					classes_from: row.classesFrom,
					gender: row.gender,
					classes_from_to: `${row.classesFrom} to ${row.classesUpto}`,
					run_by: row.runBy,
					name_of_the_diocese: row.landOwnership,
					medium: row.medium,
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
					management: row.management,
					classes_from_to: `${row.classesFrom} to ${row.classesUpto}`,
					contact_number: row.contactNumber,
					mail_id: row.mailId,
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
					main_station: row.stationType,
					type_of_convent: row.conventType,
					convent_Id: '',
					place: row.conventPlace,
					belongs_to: row.belongsTo,
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
					name_of_the_congregation: '',
					abbreviation: 'SD',
					established_year: row.establishedYear,
					established_by: row.establishedBy,
					land_ownership: row.landOwnership,
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

					contact_number: row.mobileNumber,
					mail_id: row.email,
				},
			},
		],
	},
];
