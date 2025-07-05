import type { ColumnDef, CellContext } from '@tanstack/react-table';
import type { MemberType } from '@/types';
import { Eye, SquarePen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '@/store/store';

const useMemberColumns = (): ColumnDef<MemberType>[] => {
	const { handleSelectRow } = useStore();

	return [
		{
			id: 'select',
			header: () => <SquarePen className="w-4 h-4 text-center" />,
			cell: ({ row }: CellContext<MemberType, unknown>) => (
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
			cell: ({ row }: CellContext<MemberType, unknown>) => (
				<button type="button" onClick={() => handleSelectRow(row.original)} title="View">
					<Eye className="w-4 h-4 text-center" />
				</button>
			),
			meta: { isExportable: false },
			enableSorting: false,
			enableHiding: true,
		},
		{
			header: 'Member Name',
			accessorKey: 'memberName',
			cell: ({ row }: CellContext<MemberType, unknown>) => (
				<Link className="underline text-[#0d73c4]" to="">
					{(row.original as MemberType).memberName}
				</Link>
			),
		},
		{ accessorKey: 'memberId', header: 'Unique Member ID' },
		{ accessorKey: 'familyName', header: 'Family Name' },
		{ accessorKey: 'familyId', header: 'Unique Family ID' },
		{ accessorKey: 'mainStation', header: 'Main-Station / Sub-Station' },
		{ accessorKey: 'subStationId', header: 'Sub-Station ID' },
		{ accessorKey: 'anbiam', header: 'Anbiam' },
		{ accessorKey: 'anbiamId', header: 'Anbiam ID' },
		{ accessorKey: 'gender', header: 'Gender' },
		{ accessorKey: 'familyHead', header: 'Family Head' },
		{ accessorKey: 'fatherName', header: 'Father Name' },
		{ accessorKey: 'motherName', header: 'Mother Name' },
		{ accessorKey: 'godFatherName', header: 'God Father Name' },
		{ accessorKey: 'godMotherName', header: 'God Mother Name' },
		{ accessorKey: 'baptismDate', header: 'Date of Baptism' },
		{ accessorKey: 'fhcDate', header: 'FHC Date' },
		{ accessorKey: 'fhcReceived', header: 'FHC Received' },
		{ accessorKey: 'fhcAt', header: 'FHC At' },
		{ accessorKey: 'fhcIn', header: 'FHC In' },
		{ accessorKey: 'minister', header: 'Minister' },
		{ accessorKey: 'registrationNumber', header: 'Registration Number' },
		{ accessorKey: 'remarks', header: 'Remarks' },
	];
};

export { useMemberColumns };
