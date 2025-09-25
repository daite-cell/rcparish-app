import { TableDetailsViewButton } from '@/components';
import type { ColumnDef, CellContext } from '@tanstack/react-table';
import { SquarePen } from 'lucide-react';

export function getCommonColumns<T>(handleSelectRow: (row: T) => void): ColumnDef<T, unknown>[] {
	return [
		{
			id: 'select',
			header: () => <SquarePen className="w-4 h-4 text-center" />,
			cell: ({ row }: CellContext<T, unknown>) => (
				<input
					type="checkbox"
					title="select"
					onChange={(e) => console.warn('Selected:', row.original, e.target.checked)}
				/>
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
}
