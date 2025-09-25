import type { ColumnDef } from '@tanstack/react-table';
import {
	useCemeteryColumns,
	useChurchInventoryColumns,
	useLandRegistrationColumns,
	useOtherInventorColumns,
	useRentPropertyColumns,
} from '../columns';

const usePropertiesColumnsMap = (): Record<string, ColumnDef<object>[]> => ({
	rent_details: useRentPropertyColumns() as ColumnDef<object>[],
	land_properties: useLandRegistrationColumns() as ColumnDef<object>[],
	cemetery: useCemeteryColumns() as ColumnDef<object>[],
	church_inventory: useChurchInventoryColumns() as ColumnDef<object>[],
	other_inventory: useOtherInventorColumns() as ColumnDef<object>[],
});

export default usePropertiesColumnsMap;
