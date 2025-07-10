import { AdminDefaultImage, DynamicDataTable } from '@/components';
import { Eye, SquarePen } from 'lucide-react';
import type { CellContext } from '@tanstack/react-table';
import { useStore } from '@/store/store';
import { Link } from 'react-router-dom';
import type { PriestPersonalDetailsProps } from '@/types';
import { priestPersonalDummyData } from '../../data';

const RenderReligiousPeopleTablesContainer = () => {
	const { handleSelectRow } = useStore();

	const priestColumns = [
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
				<button type="button" onClick={() => handleSelectRow(row.original)} title="View">
					<Eye className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			meta: { isExportable: false },
			enableSorting: false,
			enableHiding: true,
		},
		{
			accessorKey: 'nameOfThePriests',
			header: 'Name of the Priests',
			cell: ({ row }: CellContext<PriestPersonalDetailsProps, unknown>) => (
				<Link className="underline text-[#0d73c4]" to="#">
					{row.original.nameOfThePriests || 'N/A'}
				</Link>
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

	return (
		<div>
			<DynamicDataTable
				wrapText={false}
				data={priestPersonalDummyData ?? []}
				customColumns={priestColumns}
				enableDateSorting={true}
				enableLetterSorting={true}
			/>
		</div>
	);
};

export default RenderReligiousPeopleTablesContainer;
