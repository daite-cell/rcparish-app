import { DynamicDataTable } from '@/components';
import { bishopPositionData } from '../../data';
import type { ColumnDef } from '@tanstack/react-table';
import { Upload } from 'lucide-react';
import { useStore } from '@/store/store';
import type { BishopPositionTableProps } from '@/types';
import UploadFileComponent from '../upload-file-component';
import { PriorityDignitariesTableLayout } from '@/layouts';

const TableWithFileUpload = () => {
	const { handleSelectRow, selectRow } = useStore();
	const bishopPositionColumns: ColumnDef<BishopPositionTableProps>[] = [
		{
			accessorKey: 'position',
			header: 'Position',
			cell: (info) => info.getValue(),
			meta: { isExportable: true },
		},
		{
			accessorKey: 'name',
			header: 'Name',
			cell: (info) => info.getValue(),
			meta: { isExportable: true },
		},
		{
			accessorKey: 'from',
			header: 'From',
			cell: (info) => info.getValue(),
			meta: { isExportable: true },
		},
		{
			accessorKey: 'to',
			header: 'To',
			cell: (info) => info.getValue(),
			meta: { isExportable: true },
		},
		{
			accessorKey: 'mobile',
			header: 'Mobile',
			cell: (info) => info.getValue() || '',
			meta: { isExportable: true },
		},
		{
			accessorKey: 'briefHistory',
			header: 'Brief History',
			cell: (info) => info.getValue() || '',
			meta: { isExportable: false },
		},
		{
			accessorKey: 'upload',
			header: 'Upload',
			cell: ({ row }) => (
				<button onClick={() => handleSelectRow(row.original)} type="button" title="Upload">
					<Upload className="w-4 h-4 text-center" />
				</button>
			),
			meta: { isExportable: false },
		},
	];

	return (
		<>
			{selectRow ? (
				<UploadFileComponent />
			) : (
				<PriorityDignitariesTableLayout heading="Diocese - Emeritus / Retired Bishops" enableClose={false}>
					<DynamicDataTable isDynamic={false} data={bishopPositionData} customColumns={bishopPositionColumns} />
				</PriorityDignitariesTableLayout>
			)}
		</>
	);
};

export default TableWithFileUpload;
