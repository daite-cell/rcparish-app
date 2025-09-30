import type { ColumnDef } from '@tanstack/react-table';
import {
	useAnbiamScheduleTableColumns,
	useFestivalDetailsTableColumns,
	useFormerParishPriestColumns,
	useFormsNotificationsTableColumns,
	useMassTimingsColumns,
	useMonthlyMeetingTableColumns,
	useSubStationColumns,
} from '../columns';

const useParishColumnsMap = (): Record<string, Record<string, ColumnDef<object>[]>> => ({
	former_parish_priest: {
		main: useFormerParishPriestColumns() as ColumnDef<object>[],
	},
	sub_stations: {
		main: useSubStationColumns() as ColumnDef<object>[],
	},

	parish_activities: {
		table_1: useMassTimingsColumns() as ColumnDef<object>[],
		table_2: useFestivalDetailsTableColumns() as ColumnDef<object>[],
		table_3: useFestivalDetailsTableColumns() as ColumnDef<object>[],
		table_4: useMonthlyMeetingTableColumns() as ColumnDef<object>[],
		table_5: useAnbiamScheduleTableColumns() as ColumnDef<object>[],
	},

	forms_notifications: { main: useFormsNotificationsTableColumns() as ColumnDef<object>[] },
});

export default useParishColumnsMap;
