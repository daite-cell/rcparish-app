import get_former_parish_priest from '../data/get_former_parish_priest.json';
import get_sub_stations_list from '../data/get_sub_stations_list.json';
import get_parish_activities from '../data/get_parish_activities.json';
const useParishDataMap = (): Record<
	string,
	Record<
		string,
		{
			heading?: string;
			data: object[];
			enable_date_sorting?: boolean;
			enable_row_filters?: boolean;
			filter_able_keys?: string[];
			enable_month_filter?: boolean;
		}
	>
> => ({
	former_parish_priest: {
		main: {
			data: get_former_parish_priest.former_parish_priest_list,
			enable_date_sorting: false,
		},
	},
	sub_stations: {
		main: {
			data: get_sub_stations_list.sub_stations_list,
			enable_date_sorting: false,
		},
	},

	parish_activities: {
		table_1: {
			heading: 'MASS TIMINGS',
			data: get_parish_activities.mass_timings_list,
			enable_date_sorting: false,
		},
		table_2: {
			heading: 'FESTIVAL DETAILS',
			data: get_parish_activities.festival_details_list,
			enable_date_sorting: false,
		},
		table_3: {
			heading: 'YEARLY PLAN',
			data: get_parish_activities.year_plan_list,
			enable_date_sorting: false,
		},
		table_4: {
			heading: 'MONTHLY MEETINGS',
			data: get_parish_activities.monthly_meetings_list,
			enable_date_sorting: false,
		},
		table_5: {
			heading: 'ANBIAM MEETINGS',
			data: get_parish_activities.anbiam_meetings_list,
			enable_date_sorting: false,
		},
	},

	forms_notifications: {
		main: {
			data: [],
			enable_date_sorting: false,
		},
	},
});

export default useParishDataMap;
