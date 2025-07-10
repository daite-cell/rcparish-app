import {
	holy_communion_dummy_members_data,
	baptism_member_dummy_data,
	confirmation_dummy_data,
	confirmation_register_dummy_data,
} from '../data';

const useDataMap = (): Record<
	string,
	Record<string, { heading?: string; data: object[]; enable_date_sorting?: boolean }>
> => ({
	holy_communion: {
		main: {
			data: holy_communion_dummy_members_data,
			enable_date_sorting: true,
		},
	},
	chronicles: {
		main: {
			data: [],
			enable_date_sorting: false,
		},
	},
	baptism: {
		table_1: {
			heading: 'Member From Families',
			data: baptism_member_dummy_data,
			enable_date_sorting: true,
		},
		table_2: {
			heading: 'Baptism Register as in Parish',
			data: [],
			enable_date_sorting: false,
		},
	},
	confirmations: {
		table_1: {
			heading: 'Member From Families',
			data: confirmation_dummy_data,
			enable_date_sorting: true,
		},
		table_2: {
			heading: 'Confirmations Register as in Parish',
			data: confirmation_register_dummy_data,
			enable_date_sorting: false,
		},
	},
	marriage_registration: {
		table_1: {
			heading: 'Member From Families',
			data: [],
			enable_date_sorting: false,
		},
		table_2: {
			heading: 'Marriage Register as in Parish',
			data: [],
			enable_date_sorting: false,
		},
	},
	marriage_proposal: {
		table_1: {
			heading: 'Member From Families',
			data: [],
			enable_date_sorting: false,
		},
		table_2: {
			heading: 'Marriage Proposal as in Parish',
			data: [],
			enable_date_sorting: false,
		},
	},
	death_register: {
		table_1: {
			heading: 'Member From Families',
			data: [],
			enable_date_sorting: false,
		},
		table_2: {
			heading: 'Death Register as in Parish',
			data: [],
			enable_date_sorting: false,
		},
	},
});

export default useDataMap;
