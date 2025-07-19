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
	useVicariateColumns,
	useHouseListColumns,
	useInstitutionDetailsColumns,
	useNoviciateInstitutionColumns,
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
	vicariates: {
		main: useVicariateColumns() as ColumnDef<object>[],
	},
	houses_list: {
		main: useHouseListColumns() as ColumnDef<object>[],
	},
	institutions_list: {
		main: useInstitutionDetailsColumns() as ColumnDef<object>[],
	},
	vocational_list: {
		main: useNoviciateInstitutionColumns() as ColumnDef<object>[],
	},
});

export default useDioceseColumnsMap;
