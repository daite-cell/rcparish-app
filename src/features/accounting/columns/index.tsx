import type { ColumnDef, CellContext } from '@tanstack/react-table';
import { Eye, Plus, Settings, SquarePen } from 'lucide-react';

export type Bishop = {
	name: string;
	present_position: string;
	ordination_date: string;
	birth_date: string;
	living_status: string;
	mobile_number: string;
	email: string;
};

export const bishopColumns: ColumnDef<Bishop, unknown>[] = [
	{
		id: 'select',
		header: () => <SquarePen className="w-4 h-4 text-center" />,
		cell: () => <input title="select" type="checkbox" />,
		enableSorting: false,
		meta: { isExportable: false },
		enableHiding: true,
	},
	{
		id: 'settings',
		header: () => <Settings className="w-4 h-4 text-center" />,
		cell: () => <Plus className="w-4 h-4 text-center" />,
		enableSorting: false,
		meta: { isExportable: false },
		enableHiding: true,
	},
	{
		id: 'view',
		header: 'Details',
		cell: () => (
			<button type="button" title="View">
				<Eye className="w-4 h-4 text-center" />
			</button>
		),
		meta: { isExportable: false },
		enableSorting: false,
		enableHiding: true,
	},

	{
		accessorKey: 'name',
		header: 'Name',
		cell: (info: CellContext<Bishop, unknown>) => info.getValue(),
	},
	{
		accessorKey: 'present_position',
		header: 'Present Position',
		cell: (info: CellContext<Bishop, unknown>) => info.getValue(),
	},
	{
		accessorKey: 'ordination_date',
		header: 'Ordination Date',
		cell: (info: CellContext<Bishop, unknown>) => {
			const date = new Date(info.getValue() as string);
			return date.toLocaleDateString('en-IN');
		},
	},
	{
		accessorKey: 'birth_date',
		header: 'Birth Date',
		cell: (info: CellContext<Bishop, unknown>) => {
			const date = new Date(info.getValue() as string);
			return date.toLocaleDateString('en-IN');
		},
	},
	{
		accessorKey: 'living_status',
		header: 'Living Status',
		cell: (info: CellContext<Bishop, unknown>) => info.getValue(),
	},
	{
		accessorKey: 'mobile_number',
		header: 'Mobile Number',
		cell: (info: CellContext<Bishop, unknown>) => info.getValue(),
	},
	{
		accessorKey: 'email',
		header: 'Email',
		cell: (info: CellContext<Bishop, unknown>) => info.getValue(),
	},
];
