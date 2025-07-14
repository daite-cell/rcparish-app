import type { ColumnDef } from '@tanstack/react-table';
import { useCommunitiesDetailsColumns, useInstitutionColumns, useVocationalInstitutionColumns } from '../columns';

const usePiousGroupColumnsMap = (): Record<string, ColumnDef<object>[]> => ({
	institutions: useInstitutionColumns() as ColumnDef<object>[],
	vocational_institutions: useVocationalInstitutionColumns() as ColumnDef<object>[],
	communities: useCommunitiesDetailsColumns() as ColumnDef<object>[],
});

export default usePiousGroupColumnsMap;
