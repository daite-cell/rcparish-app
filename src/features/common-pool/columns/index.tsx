import type { ColumnDef } from '@tanstack/react-table';
import { useStore } from '@/store/store';
import { Edit } from 'lucide-react';
import type {
	CommonPoolFamilyAdmittedListType,
	CommonPoolMemberAdmittedMemberType,
	CommonPoolSearchDataType,
} from '@/types';

const useCommonPoolSearchColumns = (): ColumnDef<CommonPoolSearchDataType>[] => {
	const { handleSelectRow } = useStore();

	return [
		{
			id: 'select',
			header: () => <Edit className="w-4 h-4 text-center cursor-pointer" />,
			cell: ({ row }) => (
				<label>
					<input type="checkbox" onChange={() => handleSelectRow(row.original)} className="cursor-pointer" />
					Select row
				</label>
			),
		},
		{
			accessorKey: 'activeness',
			header: 'Activeness',
		},
		{
			accessorKey: 'action',
			header: 'Action',
		},
		{
			accessorKey: 'parishName',
			header: 'Parish Name',
		},
		{
			accessorKey: 'familyName',
			header: 'Family Name',
		},
		{
			accessorKey: 'transferReason',
			header: 'Transfer Reason',
		},
		{
			accessorKey: 'transferDate',
			header: 'Transfer Date',
		},
		{
			accessorKey: 'subStation',
			header: 'Sub-Station',
		},
		{
			accessorKey: 'anbiam',
			header: 'Anbiam',
		},
	];
};

const useCommonPoolFamilyAdmittedListColumns = (): ColumnDef<CommonPoolFamilyAdmittedListType>[] => {
	return [
		{
			accessorKey: 'familyName',
			header: 'Family Name',
		},
		{
			accessorKey: 'admittedDate',
			header: 'Admitted Date',
		},
		{
			accessorKey: 'admittedBy',
			header: 'Admitted By',
		},
		{
			accessorKey: 'parishFromTo',
			header: 'Parish From - To',
		},
		{
			accessorKey: 'subStationFromTo',
			header: 'Sub-Station From - To',
		},
		{
			accessorKey: 'anbiamFromTo',
			header: 'Anbiam From - To',
		},
		{
			accessorKey: 'transferReason',
			header: 'Transfer Reason',
		},
	];
};
const useCommonPoolMemberAdmittedMemberColumns = (): ColumnDef<CommonPoolMemberAdmittedMemberType>[] => {
	return [
		{ accessorKey: 'memberName', header: 'Member Name' },
		{ accessorKey: 'admittedDate', header: 'Admitted Date' },
		{ accessorKey: 'admittedBy', header: 'Admitted By' },
		{ accessorKey: 'familyFromTo', header: 'Family From - To' },
		{ accessorKey: 'parishFromTo', header: 'Parish From - To' },
		{ accessorKey: 'subStationFromTo', header: 'Sub-Station From - To' },
		{ accessorKey: 'anbiamFromTo', header: 'Anbiam From - To' },
		{ accessorKey: 'transferReason', header: 'Transfer Reason' },
	];
};

export { useCommonPoolSearchColumns, useCommonPoolFamilyAdmittedListColumns, useCommonPoolMemberAdmittedMemberColumns };
