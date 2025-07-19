import { useStore } from '@/store/store';
import type {
	DioceseClosedRTB,
	DioceseOpenedRTB,
	QueryFromBishopClosedProps,
	QueryFromBishopOpenedProps,
	QueryFromPeopleClosedProps,
	QueryFromPeopleOpenedProps,
} from '@/types';
import type { CellContext, ColumnDef } from '@tanstack/react-table';
import { Trash } from 'lucide-react';

const useClosedRequestColumns = (): ColumnDef<DioceseClosedRTB>[] => {
	const { handleSelectRow } = useStore();

	return [
		{
			id: 'delete',
			header: 'Delete',
			cell: ({ row }: CellContext<DioceseClosedRTB, unknown>) => (
				<button type="button" onClick={() => handleSelectRow(row.original)} title="Delete">
					<Trash className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},
		{
			accessorKey: 'familyStatus',
			header: 'Family Status',
		},
		{
			accessorKey: 'familyNumber',
			header: 'Family Number',
		},
		{
			accessorKey: 'uniqueFamilyId',
			header: 'Unique Family Id',
		},
		{
			accessorKey: 'mainStation',
			header: 'Main-Station / Sub-Station',
		},
		{
			accessorKey: 'subStationId',
			header: 'Sub-Station Id',
		},
		{
			accessorKey: 'anbiam',
			header: 'Anbiam',
		},
		{
			accessorKey: 'anbiamId',
			header: 'Anbiam Id',
		},
		{
			accessorKey: 'totalAmount',
			header: 'Total Amount',
		},
	];
};
const useOpenedRequestColumns = (): ColumnDef<DioceseOpenedRTB>[] => {
	const { handleSelectRow } = useStore();

	return [
		{
			id: 'delete',
			header: 'Delete',
			cell: ({ row }: CellContext<DioceseOpenedRTB, unknown>) => (
				<button type="button" onClick={() => handleSelectRow(row.original)} title="delete">
					<Trash className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},
		{
			accessorKey: 'requestNo',
			header: 'Request No',
		},
		{
			accessorKey: 'priestName',
			header: 'Priest Name',
		},
		{
			accessorKey: 'requestFor',
			header: 'Request For',
		},
		{
			accessorKey: 'reason',
			header: 'Reason',
			sortDescFirst: true,
		},
		{
			accessorKey: 'raisedOn',
			header: 'Raised On',
		},
		{
			accessorKey: 'status',
			header: 'Status',
		},
		{
			accessorKey: 'lastReceived',
			header: 'Last Received',
		},
		{
			accessorKey: 'lastSent',
			header: 'Last Sent',
		},
		{
			accessorKey: 'respond',
			header: 'Respond',
		},
		{
			accessorKey: 'writeComment',
			header: 'Write Comment',
		},
		{
			accessorKey: 'action',
			header: 'Action',
		},
	];
};
const useQueryFromBishopClosedColumns = (): ColumnDef<QueryFromBishopClosedProps>[] => [
	{
		accessorKey: 'queryNo',
		header: 'Query No',
	},
	{
		accessorKey: 'priestName',
		header: 'Priest Name',
	},
	{
		accessorKey: 'requestFor',
		header: 'Request For',
	},
	{
		accessorKey: 'reason',
		header: 'Reason',
	},
	{
		accessorKey: 'raisedOn',
		header: 'Raised On',
		sortDescFirst: true,
	},
	{
		accessorKey: 'lastReceived',
		header: 'Last Received',
	},
	{
		accessorKey: 'lastSent',
		header: 'Last Sent',
	},
	{
		accessorKey: 'status',
		header: 'Status',
	},
	{
		accessorKey: 'lastUpdatedOn',
		header: 'Last Updated On',
	},
];

const useQueryFromBishopOpenedColumns = (): ColumnDef<QueryFromBishopOpenedProps>[] => [
	{
		accessorKey: 'queryNo',
		header: 'Query No',
	},
	{
		accessorKey: 'priestName',
		header: 'Priest Name',
	},
	{
		accessorKey: 'requestFor',
		header: 'Request For',
	},
	{
		accessorKey: 'reason',
		header: 'Reason',
	},
	{
		accessorKey: 'raisedOn',
		header: 'Raised On',
		sortDescFirst: true,
	},
	{
		accessorKey: 'status',
		header: 'Status',
	},
	{
		accessorKey: 'lastReceived',
		header: 'Last Received',
	},
	{
		accessorKey: 'lastSent',
		header: 'Last Sent',
	},
	{
		accessorKey: 'writeComment',
		header: 'Write Comment',
	},
	{
		accessorKey: 'action',
		header: 'Action',
	},
];

const useQueryFromPeopleClosedColumns = (): ColumnDef<QueryFromPeopleClosedProps>[] => [
	{
		accessorKey: 'queryNo',
		header: 'Query No',
	},
	{
		accessorKey: 'requestFor',
		header: 'Request For',
	},
	{
		accessorKey: 'reason',
		header: 'Reason',
	},
	{
		accessorKey: 'raisedOn',
		header: 'Raised On',
	},
	{
		accessorKey: 'lastReceived',
		header: 'Last Received',
		sortDescFirst: true,
	},
	{
		accessorKey: 'lastSent',
		header: 'Last Sent',
	},
	{
		accessorKey: 'status',
		header: 'Status',
	},
	{
		accessorKey: 'lastUpdatedOn',
		header: 'Last Updated On',
	},
];

const useQueryFromPeopleOpenedColumns = (): ColumnDef<QueryFromPeopleOpenedProps>[] => [
	{
		accessorKey: 'queryNo',
		header: 'Query No',
	},
	{
		accessorKey: 'familyName',
		header: 'Family Name',
	},
	{
		accessorKey: 'subStationName',
		header: 'Sub Station Name',
	},
	{
		accessorKey: 'anbiamName',
		header: 'Anbiam Name',
	},
	{
		accessorKey: 'requestFor',
		header: 'Request For',
		sortDescFirst: true,
	},
	{
		accessorKey: 'reason',
		header: 'Reason',
	},
	{
		accessorKey: 'raisedOn',
		header: 'Raised On',
	},
	{
		accessorKey: 'status',
		header: 'Status',
	},
	{
		accessorKey: 'lastReceived',
		header: 'Last Received',
	},
	{
		accessorKey: 'lastSent',
		header: 'Last Sent',
	},
	{
		accessorKey: 'writeComment',
		header: 'Write Comment',
	},
	{
		accessorKey: 'action',
		header: 'Action',
	},
];
export {
	useClosedRequestColumns,
	useOpenedRequestColumns,
	useQueryFromBishopClosedColumns,
	useQueryFromBishopOpenedColumns,
	useQueryFromPeopleClosedColumns,
	useQueryFromPeopleOpenedColumns,
};
