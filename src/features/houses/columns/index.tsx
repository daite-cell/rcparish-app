import type { ColumnDef } from '@tanstack/react-table';
import { useStore } from '@/store/store';
import { getCommonActionColumns } from '@/utils/commonActionColumns';
import type { CongregationInstitutionType, ConventDetailsTypeProps, VocationalInstitutionType } from '@/types';

const useInstitutionColumns = (): ColumnDef<CongregationInstitutionType>[] => {
	const { handleSelectRow } = useStore();

	return [
		...getCommonActionColumns<CongregationInstitutionType>(handleSelectRow),

		{
			accessorKey: 'category',
			header: 'Category',
		},
		{
			accessorKey: 'institutionCategory',
			header: 'Institution Category',
		},
		{
			accessorKey: 'institutionType',
			header: 'Institution Type',
		},
		{
			accessorKey: 'name',
			header: 'Name',
		},
		{ accessorKey: 'place', header: 'Place' },
		{ accessorKey: 'landOwnership', header: 'Land Ownership' },
		{ accessorKey: 'establishedYear', header: 'Established year' },
		{ accessorKey: 'recognitionDate', header: 'Recognition Date' },
		{ accessorKey: 'recognitionNumber', header: 'Recognition Number' },
		{ accessorKey: 'classesFrom', header: 'Classes from' },
		{ accessorKey: 'classesUpto', header: 'Classes upto' },
		{ accessorKey: 'gender', header: 'Gender' },
		{ accessorKey: 'runBy', header: 'Run by' },
		{ accessorKey: 'medium', header: 'Medium' },
		{ accessorKey: 'management', header: 'Management' },
		{ accessorKey: 'contactNumberLL', header: 'Contact Number (LL)' },
		{ accessorKey: 'mailId', header: 'Mail ID' },
		{ accessorKey: 'address', header: 'Address' },
	];
};

const useVocationalInstitutionColumns = (): ColumnDef<VocationalInstitutionType>[] => {
	const { handleSelectRow } = useStore();

	return [
		...getCommonActionColumns<VocationalInstitutionType>(handleSelectRow),

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
	const { handleSelectRow } = useStore();

	return [
		...getCommonActionColumns<ConventDetailsTypeProps>(handleSelectRow),

		{
			accessorKey: 'stationType',
			header: 'Main-Station / Sub-Station',
		},
		{
			accessorKey: 'conventType',
			header: 'Type of Convent',
		},
		{
			accessorKey: 'conventName',
			header: 'Name of the Convent',
		},
		{ accessorKey: 'conventPlace', header: 'Place of the Convent' },
		{ accessorKey: 'belongsTo', header: 'Belongs To' },
		{ accessorKey: 'establishedYear', header: 'Established Year' },
		{ accessorKey: 'establishedBy', header: 'Established by' },
		{ accessorKey: 'landOwnership', header: 'Land Ownership' },
		{ accessorKey: 'contactAddress', header: 'Contact Address' },
		{ accessorKey: 'mobileNumber', header: 'Mobile No' },
		{ accessorKey: 'email', header: 'Email' },
	];
};

export { useInstitutionColumns, useVocationalInstitutionColumns, useCommunitiesDetailsColumns };
