import get_subscription_list from '../data/get_subscription_list.json';
import get_workers_list from '../data/get_workers_list.json';
import get_employer_salary_list from '../data/get_employer_salary_list.json';

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
	workers: { main: { data: get_workers_list.workers_list, enable_date_sorting: false } },
	employers_salary: { main: { data: get_employer_salary_list.employer_salary_list, enable_date_sorting: false } },
	subscription: { main: { data: get_subscription_list.subscription_list, enable_date_sorting: false } },
	day_book: { main: { data: [], enable_date_sorting: true, enable_footer: true } },
});

export default useAccountingDataMap;
