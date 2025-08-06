import { subscription_dummy_data, worker_salary_dummy_data, workers_dummy_data } from '../data';

const useAccountingDataMap = (): Record<
	string,
	Record<string, { heading?: string; data: object[]; enable_date_sorting?: boolean; enable_footer?: boolean }>
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
		table_3: {
			heading: 'LEASE',
			data: [],
			enable_date_sorting: false,
		},
	},
	church_collections: { main: { data: [], enable_date_sorting: false } },
	workers: { main: { data: workers_dummy_data, enable_date_sorting: false } },
	employers_salary: { main: { data: worker_salary_dummy_data, enable_date_sorting: false } },
	subscription: { main: { data: subscription_dummy_data, enable_date_sorting: false } },
	day_book: { main: { data: [], enable_date_sorting: true, enable_footer: true } },
});

export default useAccountingDataMap;
