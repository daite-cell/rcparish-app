import type { ColumnDef, CellContext } from '@tanstack/react-table';
import { Settings, SquarePen } from 'lucide-react';
import { TableDetailsEditButton, TableDetailsViewButton } from '@/components';

export const getCommonActionColumns = <T,>(
	handleSelectRow: (row: T) => void,
	handleEditRow?: (row: T) => void
): ColumnDef<T>[] => [
	{
		id: 'select',
		header: () => <SquarePen className="w-4 h-4 text-center" />,
		cell: ({ row }) => (
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
		cell: ({ row }: CellContext<T, unknown>) =>
			handleEditRow ? (
				<TableDetailsEditButton
					onClick={() => {
						handleSelectRow(row.original);
						handleEditRow(row.original);
					}}
				/>
			) : (
				<TableDetailsEditButton />
			),
		enableSorting: false,
		meta: { isExportable: false },
		enableHiding: true,
	},
	{
		id: 'view',
		header: 'Details',
		cell: ({ row }: CellContext<T, unknown>) => (
			<TableDetailsViewButton onClick={() => handleSelectRow(row.original)} />
		),
		enableSorting: false,
		meta: { isExportable: false },
		enableHiding: true,
	},
];
