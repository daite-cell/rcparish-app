import type { ParishCouncilMemberDetailsProps, FamilyDataProps } from '@/types';
import type { CellContext, ColumnDef } from '@tanstack/react-table';
import { Edit, Eye, Folder, Settings, SquarePen, Trash, IdCard } from 'lucide-react';
import { useStore } from '@/store/store';

const useParishCouncilColumns = (): ColumnDef<ParishCouncilMemberDetailsProps>[] => {
	const { handleSelectRow } = useStore();

	return [
		{
			id: 'select',
			header: () => <SquarePen className="w-4 h-4 text-center" />,
			cell: ({ row }: CellContext<ParishCouncilMemberDetailsProps, unknown>) => (
				<input
					title="select"
					type="checkbox"
					onChange={(e) => console.warn('Selected:', row.original, e.target.checked)}
				/>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},
		{
			id: 'edit',
			header: () => <Settings className="w-4 h-4 text-center" />,
			cell: () => (
				<button type="button" title="edit">
					<Edit className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			meta: { isExportable: false },
			enableSorting: false,
			enableHiding: true,
		},
		{
			id: 'view',
			header: 'Details',
			cell: ({ row }: CellContext<ParishCouncilMemberDetailsProps, unknown>) => (
				<button type="button" onClick={() => handleSelectRow(row.original)} title="View">
					<Eye className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			meta: { isExportable: false },
			enableSorting: false,
			enableHiding: true,
		},
		{
			id: 'prior dignitaries',
			header: 'Prior Dignitaries',
			cell: ({ row }: CellContext<ParishCouncilMemberDetailsProps, unknown>) => (
				<button type="button" onClick={() => handleSelectRow(row.original)} title="View Prior Dignitaries">
					<Folder className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			meta: { isExportable: false },
			enableSorting: false,
			enableHiding: true,
		},
		{ accessorKey: 'mainStation', header: 'Main-Station / Sub-Station' },
		{ accessorKey: 'position', header: 'Position' },
		{ accessorKey: 'name', header: 'Name' },
		{ accessorKey: 'mobile', header: 'Mobile' },
		{ accessorKey: 'memberId', header: 'Member ID' },
		{ accessorKey: 'electedStatus', header: 'Elected Status' },
		{
			accessorKey: 'electedDate',
			header: 'Elected Date',
			cell: ({ getValue }) => {
				try {
					const dateValue = getValue() as string;
					if (!dateValue) return '';
					const date = new Date(dateValue);
					return isNaN(date.getTime()) ? dateValue : date.toLocaleDateString('en-GB');
				} catch {
					return getValue() as string;
				}
			},
		},
		{ accessorKey: 'electedFrom', header: 'Elected From' },
		{ accessorKey: 'nameOfRespectives', header: 'Name of Respectives' },
		{ accessorKey: 'positionInDiscipline', header: 'Position in Discipline' },
	];
};

const useFamilyOverviewColumns = (): ColumnDef<FamilyDataProps>[] => {
	const { handleSelectRow } = useStore();

	return [
		{
			id: 'select',
			header: () => <SquarePen className="w-4 h-4 text-center" />,
			cell: ({ row }: CellContext<FamilyDataProps, unknown>) => (
				<input
					title="select"
					type="checkbox"
					onChange={(e) => console.warn('Selected:', row.original, e.target.checked)}
				/>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},

		{
			id: 'edit',
			header: () => <Settings className="w-4 h-4 text-center" />,
			cell: () => (
				<button type="button" title="edit">
					<Edit className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},

		{
			id: 'view',
			header: 'Details',
			cell: ({ row }: CellContext<FamilyDataProps, unknown>) => (
				<button type="button" onClick={() => handleSelectRow(row.original)} title="View">
					<Eye className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},
		{
			id: 'delete',
			header: 'Delete',
			cell: ({ row }: CellContext<FamilyDataProps, unknown>) => (
				<button type="button" onClick={() => handleSelectRow(row.original)} title="View">
					<Trash className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},
		{
			id: 'fc',
			header: 'FC',
			cell: ({ row }: CellContext<FamilyDataProps, unknown>) => (
				<button type="button" onClick={() => handleSelectRow(row.original)} title="FC Action">
					<IdCard className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},

		{ accessorKey: 'mainStation', header: 'Main-Station / Sub-Station' },
		{ accessorKey: 'anbiam', header: 'Anbiam' },
		{ accessorKey: 'familyNumber', header: 'Family Number' },
		{ accessorKey: 'familyName', header: 'Family Name' },
		{ accessorKey: 'marriageDate1', header: 'Marriage Date' },
		{ accessorKey: 'marriageDate2', header: 'Marriage Date (Full)' },
		{ accessorKey: 'oldFamilyNumber', header: 'Old Family Number' },
		{ accessorKey: 'familyHead', header: 'Family Head' },
		{ accessorKey: 'membersInFamily', header: 'Members in Family' },
		{ accessorKey: 'familyType', header: 'Family Type' },
		{ accessorKey: 'monthlySubscription', header: 'Monthly Subscription' },
		{ accessorKey: 'subscriptionFrom', header: 'Subscription From' },
		{ accessorKey: 'houseType', header: 'House Type' },
		{ accessorKey: 'community', header: 'Community' },
		{ accessorKey: 'ownership', header: 'Ownership' },
		{ accessorKey: 'livingStatus', header: 'Living Status' },
		{ accessorKey: 'settledAs', header: 'Settled As' },
		{ accessorKey: 'mobile', header: 'Mobile' },
		{ accessorKey: 'permanentAddress', header: 'Permanent Address' },
		{ accessorKey: 'temporaryAddress', header: 'Temporary Address' },
		{ accessorKey: 'remarks', header: 'Remarks' },
		{ accessorKey: 'position', header: 'Position' },
		{ accessorKey: 'name', header: 'Member Name' },
		{ accessorKey: 'memberId', header: 'Member ID' },
		{ accessorKey: 'electedStatus', header: 'Elected Status' },
		{ accessorKey: 'electedDate', header: 'Elected Date' },
		{ accessorKey: 'electedFrom', header: 'Elected From' },
		{ accessorKey: 'nameOfRespectives', header: 'Name of Respectives' },
		{ accessorKey: 'positionInDiscipline', header: 'Position in Discipline' },
	];
};

export { useParishCouncilColumns, useFamilyOverviewColumns };
