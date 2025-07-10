import type { RegisterSectionOverviewProps } from '@/types';

export const getRegisterSectionData = (row: RegisterSectionOverviewProps) => [
	{
		col: 1,
		sections: [
			{ heading: '', data: { active_ness: 'Active' } },
			{
				heading: 'Family details',
				data: {
					family_name: row.familyName || '',
					unique_anbiam_family_number: row.uniqueAnbiamFamilyNumber || '',
					main_station: row.mainStation || '',
					anbiam: row.anbiam || '',
					name_of_head: row.nameOfHead || '',
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
					date_of_baptism: row.baptistDate || '',
					father_name: row.fatherName || '',
					mother_name: row.motherName || '',
					god_father_name: row.godFatherName || '',
					god_mother_name: row.godMotherName || '',
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
					fhc_date: row.baptistDate || '',
					fhc_at: row.baptistAt || '',
					fhc_in: row.baptistIn || '',
					minister: row.minister || '',
					registration_number: row.registrationNumber || '',
					remarks: row.remarks || '',
				},
			},
		],
	},
];
