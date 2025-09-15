import type { ColumnDef } from '@tanstack/react-table';
import {
	useCollegeListColumns,
	useHealthInstituteListColumns,
	useHomageListColumns,
	useHostelListColumns,
	useSchoolsListColumns,
	useTechnicalInstitutionListColumns,
} from '../columns';
import {
	college_list_dummy_data,
	health_Institutes_dummy_data,
	homage_list_dummy_data,
	hostels_list_dummy_dataData,
	institution_details_dummy_data,
	technical_institute_dummy_data,
} from '../data';
interface InstitutionsListColumns {
	columns: ColumnDef<object>[];
	data: object[];
}

const useInstitutionsListColumns = (): Record<string, InstitutionsListColumns> => ({
	schools: {
		columns: useSchoolsListColumns() as ColumnDef<object>[],
		data: institution_details_dummy_data,
	},
	technical_institute: {
		columns: useTechnicalInstitutionListColumns() as ColumnDef<object>[],
		data: technical_institute_dummy_data,
	},
	college: {
		columns: useCollegeListColumns() as ColumnDef<object>[],
		data: college_list_dummy_data,
	},
	homage: {
		columns: useHomageListColumns() as ColumnDef<object>[],
		data: homage_list_dummy_data,
	},
	health_institute: {
		columns: useHealthInstituteListColumns() as ColumnDef<object>[],
		data: health_Institutes_dummy_data,
	},
	hostels: {
		columns: useHostelListColumns() as ColumnDef<object>[],
		data: hostels_list_dummy_dataData,
	},
});

export default useInstitutionsListColumns;
