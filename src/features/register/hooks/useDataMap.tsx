import get_baptism_list from '../data/get_baptism_list.json';
import get_holy_communion_list from '../data/get_holy_communion_list.json';
import get_confirmation_list from '../data/get_confirmation_list.json';

const useDataMap = (): Record<
	string,
	Record<string, { heading?: string; data: object[]; enable_date_sorting?: boolean; enableDropdownFilters?: boolean }>
> => ({
	holy_communion: {
		table_1: {
			heading: 'Member From Families',
			data: get_holy_communion_list.holy_communion_list,
			enable_date_sorting: true,
			enableDropdownFilters: true,
		},
		table_2: {
			heading: 'Baptism Register as in Parish',
			data: get_holy_communion_list.in_active_list,
			enable_date_sorting: true,
			enableDropdownFilters: true,
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
			data: get_baptism_list.baptism_list,
			enable_date_sorting: true,
			enableDropdownFilters: true,
		},
		table_2: {
			heading: 'Baptism Register as in Parish',
			data: [],
			enable_date_sorting: true,
			enableDropdownFilters: true,
		},
	},
	confirmations: {
		table_1: {
			heading: 'Member From Families',
			data: get_confirmation_list.confirmation_list,
			enable_date_sorting: true,
			enableDropdownFilters: true,
		},
		table_2: {
			heading: 'Confirmations Register as in Parish',
			data: get_confirmation_list.in_active_list,
			enable_date_sorting: false,
			enableDropdownFilters: true,
		},
	},
	marriage_registration: {
		table_1: {
			heading: 'Member From Families',
			data: [],
			enable_date_sorting: true,
			enableDropdownFilters: false,
		},
		table_2: {
			heading: 'Marriage Register as in Parish',
			data: [],
			enable_date_sorting: true,
			enableDropdownFilters: false,
		},
	},
	marriage_proposal: {
		table_1: {
			heading: 'Member From Families',
			data: [],
			enable_date_sorting: true,
			enableDropdownFilters: false,
		},
		table_2: {
			heading: 'Marriage Proposal as in Parish',
			data: [],
			enable_date_sorting: true,
			enableDropdownFilters: false,
		},
	},
	death_register: {
		table_1: {
			heading: 'Member From Families',
			data: [],
			enable_date_sorting: true,
			enableDropdownFilters: false,
		},
		table_2: {
			heading: 'Death Register as in Parish',
			data: [],
			enable_date_sorting: true,
			enableDropdownFilters: false,
		},
	},
});

export default useDataMap;
