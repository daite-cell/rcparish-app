import type { ColumnDef } from '@tanstack/react-table';
import { useStore } from '@/store/store';
import { getCommonActionColumns } from '@/utils/commonActionColumns';
import type { CongregationInstitutionType, ConventDetailsTypeProps, VocationalInstitutionType } from '@/types';

const useInstitutionColumns = (): ColumnDef<CongregationInstitutionType>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<CongregationInstitutionType>(handleSelectRow, handleEditRow),

		{ accessorKey: 'category_content', header: 'Category' },
		{ accessorKey: 'religious_content', header: 'Institution Category' },
		{ accessorKey: 'type_content', header: 'Institution Type' },
		{ accessorKey: 'name', header: 'Name' },
		{ accessorKey: 'place', header: 'Place' },
		{ accessorKey: 'land_ownership_content', header: 'Land Ownership' },
		{ accessorKey: 'established_year_content', header: 'Established Year' },
		{ accessorKey: 'recognition_date', header: 'Recognition Date' },
		{ accessorKey: 'recognition_no', header: 'Recognition Number' },
		{ accessorKey: 'class_from', header: 'Classes From' },
		{ accessorKey: 'class_to', header: 'Classes Upto' },
		{ accessorKey: 'gender_content', header: 'Gender' },
		{ accessorKey: 'run_by_content', header: 'Run By' },
		{ accessorKey: 'medium_content', header: 'Medium' },
		{ accessorKey: 'management_content', header: 'Management' },
		{ accessorKey: 'mobile_no', header: 'Contact Number (LL)' },
		{ accessorKey: 'mail_id', header: 'Mail ID' },
		{ accessorKey: 'address', header: 'Address' },
	];
};

const useVocationalInstitutionColumns = (): ColumnDef<VocationalInstitutionType>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<VocationalInstitutionType>(handleSelectRow, handleEditRow),

		{
			accessorKey: 'noviciateName',
			header: 'Noviciate Name',
		},
		{ accessorKey: 'place', header: 'Place' },
		{ accessorKey: 'landOwnership', header: 'Land Ownership' },
		{ accessorKey: 'belongsTo', header: 'Belongs to' },
		{ accessorKey: 'seminary', header: 'Seminary' },
		{ accessorKey: 'contactNumberLL', header: 'Contact Number (LL)' },
		{ accessorKey: 'mailId', header: 'Mail ID' },
		{ accessorKey: 'address', header: 'Address' },
	];
};

const useCommunitiesDetailsColumns = (): ColumnDef<ConventDetailsTypeProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<ConventDetailsTypeProps>(handleSelectRow, handleEditRow),

		{
			accessorKey: 'sub_station_name',
			header: 'Main-Station / Sub-Station',
		},
		{
			accessorKey: 'type_content',
			header: 'Type of Convent',
		},
		{
			accessorKey: 'name',
			header: 'Name of the Convent',
		},
		{ accessorKey: 'place', header: 'Place of the Convent' },
		{ accessorKey: 'belongs_to', header: 'Belongs To' },
		{ accessorKey: 'established_year_content', header: 'Established Year' },
		{ accessorKey: 'established_by', header: 'Established by' },
		{ accessorKey: 'land_ownership_content', header: 'Land Ownership' },
		{ accessorKey: 'address', header: 'Contact Address' },
		{ accessorKey: 'mobile_no', header: 'Mobile No' },
		{ accessorKey: 'mail_id', header: 'Email' },
	];
};

export { useInstitutionColumns, useVocationalInstitutionColumns, useCommunitiesDetailsColumns };
