import type { BaptismMemberType, ConfirmationRegisteredMemberType, HolyCommunionMemberType } from '@/types';

export const getHolyCommunionData = (row: HolyCommunionMemberType) => [
	{
		col: 1,
		sections: [
			{ heading: '', data: { active_ness: 'Active' } },
			{
				heading: 'Family details',
				data: {
					family_name: row.family_name || '',
					unique_anbiam_family_number: row.anbiam_id || '',
					main_station: row.sub_station_name || '',
					anbiam: row.anbiam_name || '',
					name_of_head: row.family_head || '',
				},
			},
		],
	},
	{
		col: 2,
		sections: [
			{
				heading: 'Personal Details',
				data: {
					gender: row.gender || '',
					date_of_baptism: row.baptism_date || '',
					father_name: row.father_name || '',
					mother_name: row.mother_name || '',
					god_father_name: row.god_father_name || '',
					god_mother_name: row.god_mother_name || '',
				},
			},
		],
	},
	{
		col: 3,
		sections: [
			{
				heading: 'First holy communion details',
				data: {
					fhc_date: row.holy_communion_date || '',
					fhc_at: row.holy_communion_at || '',
					fhc_in: row.holy_communion_in || '',
					minister: row.minister || '',
					registration_number: '',
					remarks: row.remarks || '',
				},
			},
		],
	},
];

export const getBaptismSectionData = (row: BaptismMemberType) => [
	{
		col: 1,
		sections: [
			{ heading: '', data: { active_ness: 'Active' } },
			{
				heading: 'Family details',
				data: {
					family_name: row.family_name || '',
					unique_anbiam_family_number: row.unique_family_id || '',
					main_station: row.sub_station_name || '',
					anbiam: row.anbiam_name || '',
					name_of_head: row.member_name || '',
				},
			},
		],
	},
	{
		col: 2,
		sections: [
			{
				heading: 'Personal Details',
				data: {
					gender: row.gender || '',
					date_of_baptism: row.birth_date || '',
					father_name: row.father_name || '',
					mother_name: row.mother_name || '',
					god_father_name: row.god_father_name || '',
					god_mother_name: row.god_mother_name || '',
				},
			},
		],
	},
	{
		col: 3,
		sections: [
			{
				heading: 'First holy communion details',
				data: {
					bapitism_date: row.baptism_date || '',

					bapitism_at: row.baptism_at || '',
					bapitism_in: row.baptism_in || '',
					minister: row.minister || '',
					registration_number: '',
					remarks: row.remarks || '',
				},
			},
		],
	},
];

export const getConfirmationsData = (row: ConfirmationRegisteredMemberType) => [
	{
		col: 1,
		sections: [
			{ heading: '', data: { active_ness: 'Active' } },
			{
				heading: 'Family details',
				data: {
					family_name: row.family_name || '',
					unique_anbiam_family_number: row.anbiam_id || '',
					main_station: row.sub_station_name || '',
					anbiam: row.anbiam_name || '',
					name_of_head: row.family_head || '',
				},
			},
		],
	},
	{
		col: 2,
		sections: [
			{
				heading: 'Personal Details',
				data: {
					gender: row.gender || '',
					date_of_baptism: row.baptism_date || '',
					father_name: row.father_name || '',
					mother_name: row.mother_name || '',
					god_father_name: row.god_father_name || '',
					god_mother_name: row.god_mother_name || '',
				},
			},
		],
	},
	{
		col: 3,
		sections: [
			{
				heading: 'CONFIRMATION DETAILS',
				data: {
					confirmation_date: row.holy_communion_date || '',
					confirmation_at: row.holy_communion_at || '',
					confirmation_in: row.holy_communion_in || '',
					minister: row.minister || '',
					registration_number: '',
					remarks: row.remarks || '',
				},
			},
		],
	},
];
