import type { PriestDetailsProps } from '@/types';

export const getPriestsSectionData = (row: PriestDetailsProps) => [
	{
		col: 1,
		sections: [
			{
				heading: '',
				data: {
					priest_permanent_Id: row.uniqueId || '',
					priest_from: row.type || '',
					date_of_priestly_ordination: row.ordinationDate,
					place_of_priestly_ordination: '',
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
					birth_of_date: row.dob || '',
					place_of_birth: '',
					native_place: row.nativePlace || '',
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
				heading: '',
				data: {
					date_of_diaconate: '',
					place_of_diaconate: '',
					adhaar_no: row.aadhaar || '',
					contact: row.mobile1 || '',
					email: row.email || '',
					address: row.residence || '',
					living_status: row.livingStatus || '',
				},
			},
		],
	},
];
