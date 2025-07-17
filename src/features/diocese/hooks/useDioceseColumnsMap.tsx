import type { ColumnDef } from '@tanstack/react-table';
import {
	usePriestColumns,
	usePriestCalendarColumns,
	useCommissionColumns,
	useDioceseVSSSColumns,
	useDioceseSenateColumns,
	useVicariateForaneColumns,
	useParishColumns,
	useLandDocumentColumns,
} from '../columns';

const useDioceseColumnsMap = (): Record<string, Record<string, ColumnDef<object>[]>> => ({
	priests: {
		main: usePriestColumns() as ColumnDef<object>[],
	},
	calender_dates: {
		main: usePriestCalendarColumns() as ColumnDef<object>[],
	},
	commissions: {
		main: useCommissionColumns() as ColumnDef<object>[],
	},
	vsss: {
		table_1: useDioceseVSSSColumns() as ColumnDef<object>[],
		table_2: useDioceseVSSSColumns() as ColumnDef<object>[],
	},
	senate_members: {
		main: useDioceseSenateColumns() as ColumnDef<object>[],
	},
	vf: {
		main: useVicariateForaneColumns() as ColumnDef<object>[],
	},
	parishes: {
		main: useParishColumns() as ColumnDef<object>[],
	},
	properties: {
		main: useLandDocumentColumns() as ColumnDef<object>[],
	},
});

export default useDioceseColumnsMap;
