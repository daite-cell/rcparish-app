import {
	priests_dummy_data,
	priest_calendar_dummy_data,
	diocese_vsss_dummy_data,
	priest_senate_members_dummy_data,
	vicariate_forane_dummy_data,
	parish_members_dummy_data,
	land_properties_dummy_data,
} from '../data';

const useDioceseDataMap = (): Record<
	string,
	Record<string, { heading?: string; data: object[]; enable_date_sorting?: boolean }>
> => ({
	priests: {
		main: {
			data: priests_dummy_data,
			enable_date_sorting: true,
		},
	},

	calender_dates: {
		main: {
			data: priest_calendar_dummy_data,
			enable_date_sorting: false,
		},
	},
	commissions: {
		main: {
			data: [],
			enable_date_sorting: false,
		},
	},

	vsss: {
		table_1: {
			heading: 'VSSS',
			data: diocese_vsss_dummy_data,
			enable_date_sorting: false,
		},
		table_2: {
			heading: 'TVMSSS',
			data: [],
			enable_date_sorting: false,
		},
	},
	senate_members: {
		main: {
			data: priest_senate_members_dummy_data,
			enable_date_sorting: false,
		},
	},
	vf: {
		main: {
			data: vicariate_forane_dummy_data,
			enable_date_sorting: false,
		},
	},
	parishes: {
		main: {
			data: parish_members_dummy_data,
			enable_date_sorting: false,
		},
	},
	properties: {
		main: {
			data: land_properties_dummy_data,
			enable_date_sorting: false,
		},
	},
});

export default useDioceseDataMap;
