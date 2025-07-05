import type { ColumnDef, CellContext } from '@tanstack/react-table';
import { Plus, Settings, SquarePen } from 'lucide-react';

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
			id: 'settings',
			header: () => <Settings className="w-4 h-4 text-center" />,
			cell: ({ row }: CellContext<T, unknown>) => (
				<button type="button" title="View" onClick={() => handleSelectRow(row.original)}>
					<Plus className="w-4 h-4 text-center" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},
	];
}
