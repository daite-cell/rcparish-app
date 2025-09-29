import {
	AdminDefaultImage,
	ControlledDateInputField,
	ControlledTimeInputField,
	CustomFormInput,
	DayCell,
	MonthCell,
	SingleSelectDropdown,
	TextLink,
} from '@/components';
import { anbiamOptions, associationOptions, weekDayOptions, weekOrderOptions } from '@/forms-options-data';
import { useStore } from '@/store/store';
import type {
	AnbiamScheduleTableProps,
	FestivalDetailsTableProps,
	FormerParishPriestTableProps,
	FormsNotificationsTableProps,
	MassTimingsTableProps,
	MonthlyMeetingTableProps,
	ParishActivitiesProps,
	PriestServiceRecord,
	SubStationType,
} from '@/types';
import { getCommonActionColumns } from '@/utils/commonActionColumns';
import type { CellContext, ColumnDef } from '@tanstack/react-table';
import { Trash } from 'lucide-react';
import { type Control, type FieldValues, type Path } from 'react-hook-form';

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
	return [
		...getCommonActionColumns<MassTimingsTableProps>(),
		{
			id: 'delete',
			header: 'Delete',
			cell: () => (
				<button type="button" onClick={() => {}} title="delete">
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

const getMassTimingsColumns = <TForm extends FieldValues>(
	control: Control<TForm>
): ColumnDef<ParishActivitiesProps>[] => [
	{
		accessorKey: 'day',
		header: 'Day',
		cell: ({ row }) => (
			<SingleSelectDropdown
				control={control}
				name={`massTimings.${row.index}.day` as Path<TForm>}
				options={weekDayOptions}
			/>
		),
	},
	{
		accessorKey: 'time',
		header: 'Time',
		cell: ({ row }) => (
			<ControlledTimeInputField control={control} name={`massTimings.${row.index}.time` as Path<TForm>} />
		),
	},
	{
		accessorKey: 'title',
		header: 'Title',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`massTimings.${row.index}.title` as Path<TForm>}
				placeholder="Enter title"
			/>
		),
	},
	{
		accessorKey: 'remarks',
		header: 'Remarks',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`massTimings.${row.index}.remarks` as Path<TForm>}
				placeholder="Enter remarks"
			/>
		),
	},
];
const getFestivalsDetailsColumns = <TForm extends FieldValues>(
	control: Control<TForm>
): ColumnDef<ParishActivitiesProps>[] => [
	{
		accessorKey: 'event_type',
		header: 'Event Type',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`festivalsDetails.${row.index}.eventType` as Path<TForm>}
				placeholder="Enter Event"
			/>
		),
	},
	{
		accessorKey: 'date',
		header: 'Date',
		cell: ({ row }) => (
			<ControlledDateInputField
				control={control}
				name={`festivalsDetails.${row.index}.date` as Path<TForm>}
				placeholder="Enter date"
			/>
		),
	},
	{
		accessorKey: 'day',
		header: 'Day',
		cell: ({ row }) => <DayCell control={control} name={`festivalsDetails.${row.index}.date` as Path<TForm>} />,
	},
	{
		accessorKey: 'month',
		header: 'Month',
		cell: ({ row }) => <MonthCell control={control} name={`festivalsDetails.${row.index}.date` as Path<TForm>} />,
	},
	{
		accessorKey: 'time',
		header: 'Time',
		cell: ({ row }) => (
			<ControlledTimeInputField control={control} name={`festivalsDetails.${row.index}.time` as Path<TForm>} />
		),
	},
	{
		accessorKey: 'organized_by',
		header: 'Organized By',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`festivalsDetails.${row.index}.organized_by` as Path<TForm>}
				placeholder="Enter Name"
			/>
		),
	},
	{
		accessorKey: 'remarks',
		header: 'Remarks',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`festivalsDetails.${row.index}.remarks` as Path<TForm>}
				placeholder="Enter remarks"
			/>
		),
	},
];

const getYearPlansColumns = <TForm extends FieldValues>(
	control: Control<TForm>
): ColumnDef<ParishActivitiesProps>[] => [
	{
		accessorKey: 'date',
		header: 'Date',
		cell: ({ row }) => (
			<ControlledDateInputField
				control={control}
				name={`yearPlans.${row.index}.date` as Path<TForm>}
				placeholder="Enter date"
			/>
		),
	},
	{
		accessorKey: 'event_name',
		header: 'Event ',

		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`yearPlans.${row.index}.event_name` as Path<TForm>}
				placeholder="Enter Name"
			/>
		),
	},
	{
		accessorKey: 'day',
		header: 'Day',
		cell: ({ row }) => <DayCell control={control} name={`yearPlans.${row.index}.date` as Path<TForm>} />,
	},
	{
		accessorKey: 'month',
		header: 'Month',
		cell: ({ row }) => <MonthCell control={control} name={`yearPlans.${row.index}.date` as Path<TForm>} />,
	},
	{
		accessorKey: 'time',
		header: 'Time',
		cell: ({ row }) => (
			<ControlledTimeInputField control={control} name={`yearPlans.${row.index}.time` as Path<TForm>} />
		),
	},
	{
		accessorKey: 'organized_by',
		header: 'Organized By',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`yearPlans.${row.index}.organized_by` as Path<TForm>}
				placeholder="Enter Name"
			/>
		),
	},
	{
		accessorKey: 'remarks',
		header: 'Remarks',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`yearPlans.${row.index}.remarks` as Path<TForm>}
				placeholder="Enter remarks"
			/>
		),
	},
];

const getMonthlyMeetingsColumns = <TForm extends FieldValues>(
	control: Control<TForm>
): ColumnDef<ParishActivitiesProps>[] => [
	{
		accessorKey: 'association_name',
		header: 'Select the Association',
		cell: ({ row }) => (
			<SingleSelectDropdown
				control={control}
				name={`monthlyMeetings.${row.index}.association_name` as Path<TForm>}
				options={associationOptions}
			/>
		),
	},
	{
		accessorKey: 'week',
		header: 'Week',
		cell: ({ row }) => (
			<SingleSelectDropdown
				control={control}
				name={`monthlyMeetings.${row.index}.week` as Path<TForm>}
				options={weekOrderOptions}
			/>
		),
	},
	{
		accessorKey: 'date',
		header: 'Date',
		cell: ({ row }) => (
			<ControlledDateInputField
				control={control}
				name={`monthlyMeetings.${row.index}.date` as Path<TForm>}
				placeholder="Enter date"
			/>
		),
	},

	{
		accessorKey: 'day',
		header: 'Day',
		cell: ({ row }) => <DayCell control={control} name={`monthlyMeetings.${row.index}.date` as Path<TForm>} />,
	},
	{
		accessorKey: 'month',
		header: 'Month',
		cell: ({ row }) => <MonthCell control={control} name={`monthlyMeetings.${row.index}.date` as Path<TForm>} />,
	},
	{
		accessorKey: 'time',
		header: 'Time',
		cell: ({ row }) => (
			<ControlledTimeInputField control={control} name={`monthlyMeetings.${row.index}.time` as Path<TForm>} />
		),
	},
	{
		accessorKey: 'organized_by',
		header: 'Organized By',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`monthlyMeetings.${row.index}.organized_by` as Path<TForm>}
				placeholder="Enter Name"
			/>
		),
	},
	{
		accessorKey: 'remarks',
		header: 'Remarks',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`monthlyMeetings.${row.index}.remarks` as Path<TForm>}
				placeholder="Enter remarks"
			/>
		),
	},
];

const getAnbiamMeetingsColumns = <TForm extends FieldValues>(
	control: Control<TForm>
): ColumnDef<ParishActivitiesProps>[] => [
	{
		accessorKey: 'abiam_name',
		header: 'Select the Abiam',
		cell: ({ row }) => (
			<SingleSelectDropdown
				control={control}
				name={`anbiamMeetings.${row.index}.abiam_name` as Path<TForm>}
				options={anbiamOptions}
			/>
		),
	},
	{
		accessorKey: 'week',
		header: 'Week',
		cell: ({ row }) => (
			<SingleSelectDropdown
				control={control}
				name={`anbiamMeetings.${row.index}.week` as Path<TForm>}
				options={weekOrderOptions}
			/>
		),
	},
	{
		accessorKey: 'date',
		header: 'Date',
		cell: ({ row }) => (
			<ControlledDateInputField
				control={control}
				name={`anbiamMeetings.${row.index}.date` as Path<TForm>}
				placeholder="Enter date"
			/>
		),
	},

	{
		accessorKey: 'day',
		header: 'Day',
		cell: ({ row }) => <DayCell control={control} name={`anbiamMeetings.${row.index}.date` as Path<TForm>} />,
	},
	{
		accessorKey: 'month',
		header: 'Month',
		cell: ({ row }) => <MonthCell control={control} name={`anbiamMeetings.${row.index}.date` as Path<TForm>} />,
	},
	{
		accessorKey: 'time',
		header: 'Time',
		cell: ({ row }) => (
			<ControlledTimeInputField control={control} name={`anbiamMeetings.${row.index}.time` as Path<TForm>} />
		),
	},
	{
		accessorKey: 'organized_by',
		header: 'Organized By',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`anbiamMeetings.${row.index}.organized_by` as Path<TForm>}
				placeholder="Enter Name"
			/>
		),
	},
	{
		accessorKey: 'remarks',
		header: 'Remarks',
		cell: ({ row }) => (
			<CustomFormInput
				control={control}
				name={`anbiamMeetings.${row.index}.remarks` as Path<TForm>}
				placeholder="Enter remarks"
			/>
		),
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
	getMassTimingsColumns,
	getFestivalsDetailsColumns,
	getYearPlansColumns,
	getMonthlyMeetingsColumns,
	getAnbiamMeetingsColumns,
};
