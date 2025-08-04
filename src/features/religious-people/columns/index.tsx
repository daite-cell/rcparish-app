import { AdminDefaultImage, TableDetailsViewButton, TextLink } from '@/components';
import { useStore } from '@/store/store';
import type { PriestPersonalDetailsProps } from '@/types';
import type { CellContext, ColumnDef } from '@tanstack/react-table';
import { SquarePen } from 'lucide-react';

const usePriestColumns = (): ColumnDef<PriestPersonalDetailsProps>[] => {
	const { handleSelectRow, handleSelectPriestsRow, handleEditPriestsRow } = useStore();

	return [
		{
			id: 'select',
			header: () => <SquarePen className="w-4 h-4 text-center" />,
			cell: ({ row }: CellContext<PriestPersonalDetailsProps, unknown>) => (
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
			cell: ({ row }: CellContext<PriestPersonalDetailsProps, unknown>) => (
				<TableDetailsViewButton onClick={() => handleSelectRow(row.original)} />
			),
			meta: { isExportable: false },
			enableSorting: false,
			enableHiding: true,
		},
		{
			accessorKey: 'nameOfThePriests',
			header: 'Name of the Priests',
			cell: ({ row }) => (
				<TextLink
					onClick={() => {
						handleSelectPriestsRow(row.original);
						handleEditPriestsRow(row.original);
					}}
					to={`/diocese/priests/${row.original.id}`}
				>
					{row.original.nameOfThePriests ?? ''}
				</TextLink>
			),
		},
		{
			accessorKey: 'image',
			header: 'Image',
			cell: () => <AdminDefaultImage />,
			meta: { isExportable: false },
		},
		{ accessorKey: 'presentPosition', header: 'Present Position' },
		{ accessorKey: 'ordinationDate', header: 'Ordination Date' },
		{ accessorKey: 'birthDate', header: 'Birth Date' },
		{ accessorKey: 'livingStatus', header: 'Living Status' },
		{ accessorKey: 'mobileNumber', header: 'Mobile Number' },
		{ accessorKey: 'optionalMobileNumber', header: 'Optional Mobile Number' },
		{ accessorKey: 'mailId', header: 'Mail Id' },
		{ accessorKey: 'nativePlace', header: 'Native Place' },
		{ accessorKey: 'adhaarNumber', header: 'Adhaar Number' },
		{ accessorKey: 'presentResidential', header: 'Present Residential' },
	];
};

export { usePriestColumns };
