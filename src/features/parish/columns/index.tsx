import { AdminDefaultImage, TextLink } from '@/components';
import { useStore } from '@/store/store';
import type {
	AnbiamScheduleTableProps,
	FestivalDetailsTableProps,
	FormerParishPriestTableProps,
	FormsNotificationsTableProps,
	MassTimingsTableProps,
	MonthlyMeetingTableProps,
	PriestServiceRecord,
	SubStationType,
} from '@/types';
import { getCommonActionColumns } from '@/utils/commonActionColumns';
import type { CellContext, ColumnDef } from '@tanstack/react-table';
import { Trash } from 'lucide-react';

const useFormerParishPriestColumns = (): ColumnDef<FormerParishPriestTableProps>[] => {
	const { handleSelectRow, handleEditRow, handleSelectPriestsRow } = useStore();

	return [
		...getCommonActionColumns<FormerParishPriestTableProps>(handleSelectRow, handleEditRow),

		{
			accessorKey: 'priest_name',
			header: 'Priest Name',
			cell: ({ row }) => (
				<TextLink
					onClick={() => {
						handleSelectPriestsRow(row.original);
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
			cell: ({ row }) => <AdminDefaultImage src={row.original.image} height={50} width={50} className="rounded-full" />,
		},
		{ accessorKey: 'from_date', header: 'From' },
		{ accessorKey: 'to_date', header: 'To' },
		{ accessorKey: 'mobile_no_1', header: 'Mobile' },
		{ accessorKey: 'living_status_content', header: 'Living Status' },
		{ accessorKey: 'type', header: 'In Diocese' },
	];
};

const useSubStationColumns = (): ColumnDef<SubStationType>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<SubStationType>(handleSelectRow, handleEditRow),

		{
			accessorKey: 'image',
			header: 'Image',
			cell: ({ row }) => <AdminDefaultImage src={row.original.image} height={50} width={50} className="rounded-full" />,
		},
		{
			accessorKey: 'sub_station_name',
			header: 'Main Station / Sub-Station',
		},
		{ accessorKey: 'sub_station_id', header: 'Station ID' },
		{ accessorKey: 'church_availability', header: 'Church Availability' },
		{ accessorKey: 'church_name', header: 'Church Name' },
		{ accessorKey: 'catist_name', header: 'Catechist Name' },
		{ accessorKey: 'catist_mobile_no', header: 'Catechist Mobile Number' },
	];
};

const useMassTimingsColumns = (): ColumnDef<MassTimingsTableProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<MassTimingsTableProps>(handleSelectRow, handleEditRow),
		{
			id: 'delete',
			header: 'Delete',
			cell: ({ row }: CellContext<MassTimingsTableProps, unknown>) => (
				<button type="button" onClick={() => handleSelectRow(row.original)} title="delete">
					<Trash className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},

		{
			accessorKey: 'sub_station_name',
			header: 'Sub-Station / Main-Station',
		},
		{ accessorKey: 'sub_station_id', header: 'Sub-Station Id' },
		{ accessorKey: 'day', header: 'Day' },
		{ accessorKey: 'timing', header: 'Timing' },
		{ accessorKey: 'title', header: 'Title' },
		{ accessorKey: 'remarks', header: 'Remarks' },
	];
};

const useFestivalDetailsTableColumns = (): ColumnDef<FestivalDetailsTableProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<FestivalDetailsTableProps>(handleSelectRow, handleEditRow),
		{
			id: 'delete',
			header: 'Delete',
			cell: ({ row }: CellContext<FestivalDetailsTableProps, unknown>) => (
				<button type="button" onClick={() => handleSelectRow(row.original)} title="delete">
					<Trash className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},
		{
			accessorKey: 'sub_station_name',
			header: 'Sub-Station / Main-Station',
		},
		{ accessorKey: 'sub_station_id', header: 'Sub-Station Id' },
		{ accessorKey: 'event', header: 'Event' },
		{ accessorKey: 'date', header: 'Date' },
		{ accessorKey: 'day', header: 'Day' },
		{ accessorKey: 'month', header: 'Month' },
		{ accessorKey: 'timing', header: 'Timing' },
		{ accessorKey: 'organised_by', header: 'Organised By' },
		{ accessorKey: 'remarks', header: 'Remarks' },
	];
};

const useMonthlyMeetingTableColumns = (): ColumnDef<MonthlyMeetingTableProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<MonthlyMeetingTableProps>(handleSelectRow, handleEditRow),
		{
			id: 'delete',
			header: 'Delete',
			cell: ({ row }: CellContext<MonthlyMeetingTableProps, unknown>) => (
				<button type="button" onClick={() => handleSelectRow(row.original)} title="delete">
					<Trash className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},
		{
			accessorKey: 'sub_station_name',
			header: 'Sub-Station / Main-Station',
		},
		{ accessorKey: 'sub_station_id', header: 'Sub-Station Id' },
		{ accessorKey: 'association_name', header: 'Association Name' },
		{ accessorKey: 'association_id', header: 'Association Id' },
		{ accessorKey: 'week', header: 'Week' },
		{ accessorKey: 'date', header: 'Date' },
		{ accessorKey: 'day', header: 'Day' },
		{ accessorKey: 'month', header: 'Month' },
		{ accessorKey: 'organised_by', header: 'Organised by' },
		{ accessorKey: 'remarks', header: 'Remarks' },
	];
};

const useAnbiamScheduleTableColumns = (): ColumnDef<AnbiamScheduleTableProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<AnbiamScheduleTableProps>(handleSelectRow, handleEditRow),
		{
			id: 'delete',
			header: 'Delete',
			cell: ({ row }: CellContext<AnbiamScheduleTableProps, unknown>) => (
				<button type="button" onClick={() => handleSelectRow(row.original)} title="delete">
					<Trash className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},
		{
			accessorKey: 'sub_station_name',
			header: 'Sub-Station / Main-Station',
		},
		{ accessorKey: 'sub_station_id', header: 'Sub-Station Id' },
		{ accessorKey: 'anbiam_name', header: 'Anbiam Name' },
		{ accessorKey: 'anbiam_id', header: 'Anbiam Id' },
		{ accessorKey: 'week', header: 'Week' },
		{ accessorKey: 'date', header: 'Date' },
		{ accessorKey: 'day', header: 'Day' },
		{ accessorKey: 'month', header: 'Month' },
		{ accessorKey: 'organised_by', header: 'Organised by' },
		{ accessorKey: 'remarks', header: 'Remarks' },
	];
};

const useFormsNotificationsTableColumns = (): ColumnDef<FormsNotificationsTableProps>[] => {
	const { handleSelectRow } = useStore();

	return [
		{
			id: 'delete',
			header: 'Delete',
			cell: ({ row }: CellContext<FormsNotificationsTableProps, unknown>) => (
				<button type="button" onClick={() => handleSelectRow(row.original)} title="delete">
					<Trash className="w-4 h-4 text-center cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},
		{ accessorKey: 'title', header: 'Title' },
		{ accessorKey: 'pdf', header: 'PDF Link' },
	];
};

const getPriestServiceColumns: ColumnDef<PriestServiceRecord>[] = [
	{
		header: 'Service as',
		accessorKey: 'service_as_content',
	},
	{
		header: 'Service at',
		accessorKey: 'parish_place_name',
	},
	{
		header: 'Service in',
		accessorKey: 'church_name',
	},
	{
		header: 'Service from',
		accessorKey: 'from_date',
	},
	{
		header: 'Service to',
		accessorKey: 'to_date',
	},
];

export {
	useFormerParishPriestColumns,
	useSubStationColumns,
	useMassTimingsColumns,
	useFestivalDetailsTableColumns,
	useMonthlyMeetingTableColumns,
	useAnbiamScheduleTableColumns,
	useFormsNotificationsTableColumns,
	getPriestServiceColumns,
};
