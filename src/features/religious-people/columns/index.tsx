import { AdminDefaultImage, TableDetailsViewButton, TextLink } from '@/components';
import { useStore } from '@/store/store';
import type { PriestDetails } from '@/types';
import type { CellContext, ColumnDef } from '@tanstack/react-table';
import { SquarePen } from 'lucide-react';

const usePriestColumns = (): ColumnDef<PriestDetails>[] => {
	const { handleSelectRow, handleSelectPriestsRow, handleEditPriestsRow } = useStore();

	return [
		{
			id: 'select',
			header: () => <SquarePen className="w-4 h-4 text-center" />,
			cell: ({ row }: CellContext<PriestDetails, unknown>) => (
				<input
					title="select"
					type="checkbox"
					onChange={(e) => {
						console.warn('Selected:', row.original, e.target.checked);
					}}
				/>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},
		{
			id: 'view',
			header: 'Details',
			cell: ({ row }: CellContext<PriestDetails, unknown>) => (
				<TableDetailsViewButton onClick={() => handleSelectRow(row.original)} />
			),
			meta: { isExportable: false },
			enableSorting: false,
			enableHiding: true,
		},
		{
			accessorKey: 'priest_name',
			header: 'Name of the Priests',
			cell: ({ row }) => (
				<TextLink
					onClick={() => {
						handleSelectPriestsRow(row.original);
						handleEditPriestsRow(row.original);
					}}
					to={`/diocese/priests/${row.original.priest_id}`}
				>
					{row.original.priest_name ?? ''}
				</TextLink>
			),
		},
		{
			accessorKey: 'image',
			header: 'Image',
			cell: () => <AdminDefaultImage />,
			meta: { isExportable: false },
		},
		{ accessorKey: 'present_position', header: 'Present Position' },
		{ accessorKey: 'ordination_date', header: 'Ordination Date' },
		{ accessorKey: 'birth_date', header: 'Birth Date' },
		{ accessorKey: 'living_status_content', header: 'Living Status' },
		{ accessorKey: 'mobile_no_1', header: 'Mobile Number' },
		{ accessorKey: 'mobile_no_2', header: 'Optional Mobile Number' },
		{ accessorKey: 'mail_id', header: 'Mail Id' },
		{ accessorKey: 'native_place', header: 'Native Place' },
		{ accessorKey: 'adhaar_no', header: 'Adhaar Number' },
		{ accessorKey: 'address', header: 'Present Residential' },
	];
};

export { usePriestColumns };
