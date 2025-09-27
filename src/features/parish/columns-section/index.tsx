import type { FormerParishPriestTableProps, PresentParishPriest, SubStationType } from '@/types';

export const getFormerParishPriestSectionData = (row: FormerParishPriestTableProps) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					in_diocese_priest: 'yes',
					from_the_date: row?.from_date ?? '',
					diocese: '',
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
					till_the_date: row?.to_date ?? '',
					no_of_dates: '',
					mobile_no: row.mobile_no_1,
					living_status: row.living_status_content,
				},
			},
		],
	},
];

export const getSubStationsSectionData = (row: SubStationType) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					parish_name: row?.sub_station_name ?? '',
					sub_station_id: row?.sub_station_id ?? '',
					church_availability: row?.church_availability ?? '',
					sub_station_church_name: row?.church_name ?? '',
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
					sub_station_history: '',
					catist_name: row?.catist_name ?? '',
					catist_number: row?.catist_mobile_no ?? '',
				},
			},
		],
	},
];

export const getPresentParishPriestSectionData = (row: PresentParishPriest) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					birth_date: row?.birth_date ?? '',
					ordination_date: row?.ordination_date ?? '',
					in_charge_taken_from: row?.in_charge_taken_from ?? '',
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
					contact: row?.mobile_no_1 ?? '',
					email: row?.mail_id ?? '',
					address: row?.address ?? '',
				},
			},
		],
	},
];
