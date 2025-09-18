import type { ColumnDef } from '@tanstack/react-table';

import get_school_list from '../data/get_school_list.json';
import get_health_institute_list from '../data/get_health_institute_list.json';
import {
	useCollegeInstitutionsColumns,
	useHomeInstitutionsColumns,
	useSchoolsListColumns,
	useTechnicalInstitutionsColumns,
	useHealthInstituteListColumns,
	useHostelListColumns,
} from '../columns';
interface InstitutionsListColumns {
	columns: ColumnDef<object>[];
	data: object[];
}

const useHousesInstitutionsListColumns = (): Record<string, InstitutionsListColumns> => ({
	schools: {
		columns: useSchoolsListColumns() as ColumnDef<object>[],
		data: get_school_list.school_list,
	},
	technical_institute: {
		columns: useTechnicalInstitutionsColumns() as ColumnDef<object>[],
		data: [],
	},
	college: {
		columns: useCollegeInstitutionsColumns() as ColumnDef<object>[],
		data: [],
	},
	homage: {
		columns: useHomeInstitutionsColumns() as ColumnDef<object>[],
		data: [],
	},
	health_institute: {
		columns: useHealthInstituteListColumns() as ColumnDef<object>[],
		data: get_health_institute_list.health_institute_list,
	},
	hostels: {
		columns: useHostelListColumns() as ColumnDef<object>[],
		data: [],
	},
});

export default useHousesInstitutionsListColumns;
