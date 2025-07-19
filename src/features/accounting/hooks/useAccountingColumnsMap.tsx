import type { ColumnDef } from '@tanstack/react-table';
import {
	useActiveDonationColumns,
	useAdvanceRentPropertyColumns,
	useInActiveDonationColumns,
	useRentPropertyColumns,
	useChurchCollectionsColumns,
	useWorkersColumns,
	useEmployersSalaryColumns,
} from '../columns';
const useAccountingColumnsMap = (): Record<string, Record<string, ColumnDef<object>[]>> => ({
	donations: {
		table_1: useActiveDonationColumns() as ColumnDef<object>[],
		table_2: useInActiveDonationColumns() as ColumnDef<object>[],
	},
	rent_shop: {
		table_1: useRentPropertyColumns() as ColumnDef<object>[],
		table_2: useAdvanceRentPropertyColumns() as ColumnDef<object>[],
	},
	church_collections: { main: useChurchCollectionsColumns() as ColumnDef<object>[] },
	workers: { main: useWorkersColumns() as ColumnDef<object>[] },
	employers_salary: { main: useEmployersSalaryColumns() as ColumnDef<object>[] },
});

export default useAccountingColumnsMap;
