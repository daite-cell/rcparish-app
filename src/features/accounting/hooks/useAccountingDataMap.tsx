import { workers_dummy_data } from '../data';

const useAccountingDataMap = (): Record<
	string,
	Record<string, { heading?: string; data: object[]; enable_date_sorting?: boolean }>
> => ({
	donations: {
		table_1: {
			heading: 'ACTIVE MEMBERS',
			data: [],
			enable_date_sorting: false,
		},
		table_2: {
			heading: 'INACTIVE MEMBERS',
			data: [],
			enable_date_sorting: false,
		},
	},
	rent_shop: {
		table_1: {
			heading: 'Rent',
			data: [],
			enable_date_sorting: false,
		},
		table_2: {
			heading: 'Advance',
			data: [],
			enable_date_sorting: false,
		},
	},
	church_collections: { main: { data: [], enable_date_sorting: false } },
	workers: { main: { data: workers_dummy_data, enable_date_sorting: false } },
	employers_salary: { main: { data: [], enable_date_sorting: false } },
});

export default useAccountingDataMap;
