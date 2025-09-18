import type { ColumnDef } from '@tanstack/react-table';
import { useCommunitiesDetailsColumns, useVocationalInstitutionColumns } from '../columns';

const usePiousGroupColumnsMap = (): Record<string, ColumnDef<object>[]> => ({
	vocational_institutions: useVocationalInstitutionColumns() as ColumnDef<object>[],
	communities: useCommunitiesDetailsColumns() as ColumnDef<object>[],
});

export default usePiousGroupColumnsMap;
