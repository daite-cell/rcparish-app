import type { ColumnDef } from '@tanstack/react-table';
import { useStore } from '@/store/store';
import type {
	InActiveDonationTableProps,
	RentPropertyProps,
	AdvanceRentPropertyProps,
	ChurchCollectionsProps,
	WorkerProps,
	EmployersSalaryProps,
	ActiveDonationTableProps,
	SubscriptionProps,
	PaymentDetailsProps,
	RentPropertyPaymentProps,
	DayBookEntry,
	AuditingProps,
	MonthlyCollectionProps,
	SpecialCollectionProps,
	OtherCollectionProps,
	DonationMember,
	ChurchCollectionTableProps,
	DayBookCollectionTableProps,
	BalancePaidTableProps,
	LastTableTableProps,
	AdvanceTableBalanceProps,
	ToBePaidTableProps,
	PaymentHistoryTableProps,
} from '@/types';
import { Folder, SquarePen, Trash2 } from 'lucide-react';
import type { CellContext } from '@tanstack/react-table';
import { CustomFormInput, SingleSelectDropdown, TableDetailsViewButton, TextLink } from '@/components';
import { getCommonActionColumns } from '@/utils/commonActionColumns';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { collectionTypeOptions, occasionOptions, weekOptions } from '@/forms-options-data';

const useActiveDonationColumns = (tableKey: string): ColumnDef<ActiveDonationTableProps>[] => {
	const { handleSelectRow } = useStore();

	return [
		{
			id: 'select',
			header: () => <SquarePen className="w-4 h-4 text-center" />,
			cell: ({ row }) => (
				<input
					title="select"
					type="checkbox"
					onChange={(e) => console.warn('Selected:', row.original, e.target.checked)}
				/>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},

		{
			id: 'view',
			header: 'Details',
			cell: ({ row }: CellContext<ActiveDonationTableProps, unknown>) => (
				<TableDetailsViewButton
					onClick={() =>
						handleSelectRow({
							...row.original,
							table_key: tableKey,
						})
					}
				/>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},

		{
			accessorKey: 'activeness_content',
			header: 'Family Status',
		},
		{
			accessorKey: 'family_name',
			header: 'Family Name',
		},
		{
			accessorKey: 'unique_family_id',
			header: 'Unique Family ID',
		},
		{
			accessorKey: 'sub_station_name',
			header: 'Main-Station / Sub-Station',
		},
		{
			accessorKey: 'sub_station_id',
			header: 'Sub-Station ID',
		},
		{
			accessorKey: 'anbiam_name',
			header: 'Anbiam',
		},
		{
			accessorKey: 'anbiam_id',
			header: 'Anbiam ID',
		},
		{
			accessorKey: 'amount',
			header: 'Total Amount',
		},
	];
};
const useInActiveDonationColumns = (tableKey: string): ColumnDef<InActiveDonationTableProps>[] => {
	const { handleSelectRow } = useStore();

	return [
		{
			id: 'select',
			header: () => <SquarePen className="w-4 h-4 text-center" />,
			cell: ({ row }) => (
				<input
					title="select"
					type="checkbox"
					onChange={(e) => console.warn('Selected:', row.original, e.target.checked)}
				/>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},

		{
			id: 'view',
			header: 'Details',
			cell: ({ row }: CellContext<InActiveDonationTableProps, unknown>) => (
				<TableDetailsViewButton
					onClick={() =>
						handleSelectRow({
							...row.original,
							table_key: tableKey,
						})
					}
				/>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},

		{
			accessorKey: 'member_name',
			header: 'Name of the Person',
		},
		{
			accessorKey: 'place',
			header: 'Place / City',
		},
		{
			accessorKey: 'donation_for_content',
			header: 'Donation For',
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
		},
		{
			accessorKey: 'receipt_no',
			header: 'Receipt Number',
		},
		{
			accessorKey: 'date',
			header: 'Date',
		},
		{
			accessorKey: 'mobile_no',
			header: 'Mobile',
		},
		{
			accessorKey: 'address',
			header: 'Address',
		},
		{
			accessorKey: 'parish_content',
			header: 'Parish',
		},
		{
			accessorKey: 'vicariate_content',
			header: 'Vicariate',
		},
		{
			accessorKey: 'registered_date',
			header: 'Registered Date',
		},
		{
			accessorKey: 'updated_date',
			header: 'Updated Date',
		},
	];
};

const useRentPropertyColumns = (tableKey: string): ColumnDef<RentPropertyProps>[] => {
	const { handleSelectRow, handleEditRow, handleSelectPriorRow } = useStore();
	console.warn('useRentPropertyColumns', tableKey);

	return [
		...getCommonActionColumns<RentPropertyProps>(handleSelectRow, handleEditRow, tableKey),

		{ accessorKey: 'property_type_content', header: 'Type' },
		{ accessorKey: 'property_name', header: 'Property Name' },
		{ accessorKey: 'property_id', header: 'Property Id' },
		{
			header: 'Payment History',
			cell: ({ row }: CellContext<RentPropertyProps, unknown>) => (
				<Folder className="w-4 h-4" onClick={() => handleSelectPriorRow(row.original)} />
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},

		{ accessorKey: 'render_name', header: 'Render Name' },
		{ accessorKey: 'mobile_no', header: 'Mobile Number' },

		{
			accessorKey: 'now_amount',
			header: 'Now Rent For',
			cell: ({ getValue }) => (getValue() ? `₹${getValue()}` : '-'),
		},
		{
			accessorKey: 'type_data_2',
			header: 'Fixed Amount (monthly)',
			cell: ({ getValue }) => (getValue() ? `₹${getValue()}` : '-'),
		},
		{
			accessorKey: 'type_data_3',
			header: 'Fixed Amount on',
		},
		{
			accessorKey: 'grand_amount',
			header: 'Grand Paid Amount',
			cell: ({ getValue }) => (getValue() ? `₹${getValue()}` : '-'),
		},
		{
			accessorKey: 'month',
			header: 'Paid Upto',
		},
		{
			accessorKey: 'balance_amount',
			header: 'Remaining Balance Unpaid Amount',
			cell: ({ getValue }) => (getValue() ? `₹${getValue()}` : '-'),
		},
		{
			accessorKey: 'last_amount',
			header: 'Last Paid Amount',
			cell: ({ getValue }) => (getValue() ? `₹${getValue()}` : '-'),
		},
		{
			accessorKey: 'date',
			header: 'Last Paid Date',
		},
	];
};

const useAdvanceRentPropertyColumns = (tableKey: string): ColumnDef<AdvanceRentPropertyProps>[] => {
	const { handleSelectRow, handleEditRow, handleSelectPriorRow } = useStore();

	return [
		...getCommonActionColumns<AdvanceRentPropertyProps>(handleSelectRow, handleEditRow, tableKey),

		{ accessorKey: 'property_type_content', header: 'Type' },
		{ accessorKey: 'property_name', header: 'Property Name' },
		{ accessorKey: 'property_id', header: 'Property Id' },
		{
			header: 'Payment History',
			cell: ({ row }: CellContext<AdvanceRentPropertyProps, unknown>) => (
				<Folder className="w-4 h-4" onClick={() => handleSelectPriorRow(row.original)} />
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},
		{ accessorKey: 'render_name', header: 'Render Name' },
		{ accessorKey: 'mobile_no', header: 'Mobile Number' },

		{
			accessorKey: 'now_amount',
			header: 'Now Rent For',
			cell: ({ getValue }) => (getValue() !== null ? `₹${getValue()}` : '0'),
		},
		{
			accessorKey: 'type_data_2',
			header: 'Fixed Advance Amount',
			cell: ({ getValue }) => (getValue() !== null ? `₹${getValue()}` : '0'),
		},
		{
			accessorKey: 'grand_amount',
			header: 'Paid Advance Amount',
			cell: ({ getValue }) => (getValue() !== null ? `₹${getValue()}` : '0'),
		},
		{
			accessorKey: 'balance_amount',
			header: 'After Paid a Due (Still Balance Amount)',
			cell: ({ getValue }) => (getValue() !== null ? `₹${getValue()}` : '0'),
		},
		{
			accessorKey: 'date',
			header: 'Last Paid Date',
		},
	];
};

const useChurchCollectionsColumns = (): ColumnDef<ChurchCollectionsProps>[] => {
	const { handleSelectRow } = useStore();

	return [
		{
			id: 'select',
			header: () => <SquarePen className="w-4 h-4 text-center" />,
			cell: ({ row }) => (
				<input
					title="select"
					type="checkbox"
					onChange={(e) => console.warn('Selected:', row.original, e.target.checked)}
				/>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},

		{
			id: 'view',
			header: 'Details',
			cell: ({ row }: CellContext<ChurchCollectionsProps, unknown>) => (
				<TableDetailsViewButton onClick={() => handleSelectRow(row.original)} />
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},
		{ accessorKey: 'priest_name', header: 'Name of the Priest' },
		{ accessorKey: 'priest_id', header: 'Priest ID' },
		{ accessorKey: 'month', header: 'Month & Year' },

		{
			id: 'delete1',
			header: 'Delete',
			cell: ({ row }: CellContext<ChurchCollectionsProps, unknown>) => (
				<button title="Delete" onClick={() => handleSelectRow(row.original)}>
					<Trash2 className="w-4 h-4  cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
		},
		{
			accessorKey: 'monthly_total',
			header: 'Monthly',
			cell: ({ getValue }) => {
				const value = getValue<number | null>();
				return value !== null ? `₹${value}` : '-';
			},
		},
		{
			id: 'delete2',
			header: 'Delete',
			cell: ({ row }: CellContext<ChurchCollectionsProps, unknown>) => (
				<button title="Delete" onClick={() => handleSelectRow(row.original)}>
					<Trash2 className="w-4 h-4  cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
		},
		{
			accessorKey: 'special_total',
			header: 'Special',
			cell: ({ getValue }) => {
				const value = getValue<number | null>();
				return value !== null ? `₹${value}` : '0';
			},
		},
		{
			id: 'delete3',
			header: 'Delete',
			cell: ({ row }: CellContext<ChurchCollectionsProps, unknown>) => (
				<button title="Delete" onClick={() => handleSelectRow(row.original)}>
					<Trash2 className="w-4 h-4  cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
		},
		{
			accessorKey: 'other_total',
			header: 'Other',
			cell: ({ getValue }) => {
				const value = getValue<number | null>();
				return value !== null ? `₹${value}` : '0';
			},
		},
		{
			id: 'amount',
			header: 'Total Amount',
			cell: ({ row }) => {
				const monthly = row.original.monthly_total ?? 0;
				const special = row.original.special_total ?? 0;
				const other = row.original.other_total ?? 0;

				const total = monthly + special + other;
				return `₹${total}`;
			},
		},
	];
};

const useWorkersColumns = (): ColumnDef<WorkerProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<WorkerProps>(handleSelectRow, handleEditRow),
		{ accessorKey: 'working_as_content', header: 'Working As' },
		{ accessorKey: 'worker_name', header: 'Name of the Worker' },
		{ accessorKey: 'worker_id', header: 'Worker Id' },
		{ accessorKey: 'joining_date', header: 'Date of Joining' },
		{
			accessorKey: 'salary',
			header: 'Salary Per Month',
			cell: ({ getValue }) => `₹${getValue()}`,
		},
		{ accessorKey: 'salary_from', header: 'Salary Fixed From On' },
		{ accessorKey: 'religion_content', header: 'Religion' },
		{ accessorKey: 'mobile_no', header: 'Mobile Number' },
		{ accessorKey: 'adhaar_no', header: 'Aadhaar Number' },
		{ accessorKey: 'permanent_address', header: 'Permanent Address' },
		{ accessorKey: 'temporary_address', header: 'Temporary Address' },
	];
};

const useEmployersSalaryColumns = (): ColumnDef<EmployersSalaryProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<EmployersSalaryProps>(handleSelectRow, handleEditRow),

		{ accessorKey: 'working_as_content', header: 'Working As' },
		{ accessorKey: 'worker_name', header: 'Worker Name' },
		{ accessorKey: 'worker_id', header: 'Worker Id' },
		{
			accessorKey: 'mobile_no',
			header: 'Mobile Number',
		},
		{
			accessorKey: 'salary',
			header: 'Fixed Salary Amount',
			cell: ({ getValue }) => `₹${getValue()}`,
		},
		{ accessorKey: 'salary_from', header: 'Fixed Salary From' },
		{
			accessorKey: 'advance_total_paid',
			header: 'Grand Paid Amount',
			cell: ({ getValue }) => `₹${getValue()}`,
		},
		{
			header: 'Last Salary Details',
			columns: [
				{ accessorKey: 'salary_for', header: 'Paid Upto' },
				{
					accessorKey: 'advance_salary',
					header: 'Advance from Salary',
					cell: ({ getValue }) => `₹${getValue()}`,
				},
				{ accessorKey: 'advance_on', header: 'Advance from Salary On' },
				{
					accessorKey: 'now_salary',
					header: 'Paid Amount',
					cell: ({ getValue }) => `₹${getValue()}`,
				},
				{
					accessorKey: 'balance_salary',
					header: 'Balance Salary Amount',
					cell: ({ getValue }) => `₹${getValue()}`,
				},
				{ accessorKey: 'date', header: 'Date' },
				{ accessorKey: 'receipt_no', header: 'Voucher Number' },
			],
		},
	];
};

const useSubscriptionColumns = (): ColumnDef<SubscriptionProps>[] => {
	const { handleSelectRow, handleEditRow, handleSelectAccountingNameRow } = useStore();

	return [
		...getCommonActionColumns<SubscriptionProps>(handleSelectRow, handleEditRow),
		{
			id: 'familyInfo',
			header: '',
			columns: [
				{ accessorKey: 'activeness_content', header: 'Family Status' },
				{
					accessorKey: 'family_name',
					header: 'Family Name',
					cell: ({ row }) => (
						<TextLink
							onClick={() => {
								handleSelectRow(row.original);
								handleSelectAccountingNameRow(row.original);
							}}
							to={`/pious_group/families/${row.original.sub_station_id}/${row.original.anbiam_id}/${row.original.unique_family_id}`}
						>
							{row.original.family_name}
						</TextLink>
					),
				},
				{ accessorKey: 'unique_family_id', header: 'Unique Family Number' },
				{ accessorKey: 'old_family_id', header: 'Old Family Number' },
				{ accessorKey: 'family_head', header: 'Family Head Name' },
				{ accessorKey: 'mobile_no', header: 'Family Head Mobile Number' },
				{ accessorKey: 'sub_station_name', header: 'Main-Station / Sub-Station' },
				{ accessorKey: 'sub_station_id', header: 'Sub-Station Id' },
				{ accessorKey: 'anbiam_name', header: 'Anbiam' },
				{ accessorKey: 'anbiam_id', header: 'Anbiam Id' },
				{ accessorKey: 'family_income', header: 'Family Monthly Income' },
			],
		},
		{
			id: 'subscriptionDetails',
			header: 'Subscription Details',
			columns: [
				{ accessorKey: 'monthly_subscription', header: 'Fixed Amount' },
				{ accessorKey: 'subscription_from', header: 'Fixed From' },
			],
		},
		{
			id: 'paymentInfo',
			header: '',
			columns: [
				{ accessorKey: 'grand_amount', header: 'Grand Paid Amount' },
				{ accessorKey: 'month', header: 'Paid upto' },
				{ accessorKey: 'prior_total_amount', header: 'Prior Due Amount' },
				{ accessorKey: 'balance_amount', header: 'Remaining Balance UnPaid Amount' },
			],
		},
		{
			id: 'lastPaidDetails',
			header: 'Last Paid Details',
			columns: [
				{ accessorKey: 'last_amount', header: 'Amount' },
				{ accessorKey: 'date', header: 'Date' },
				{ accessorKey: 'receipt_no', header: 'Voucher Number' },
			],
		},
	];
};

const usePaymentColumns = (): ColumnDef<PaymentDetailsProps>[] => {
	return [
		{
			id: 'select',
			header: () => <SquarePen className="w-4 h-4 text-center" />,
			cell: ({ row }) => (
				<input
					title="select"
					type="checkbox"
					onChange={(e) => console.warn('Selected:', row.original, e.target.checked)}
				/>
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
			accessorKey: 'familyName',
			header: 'Family Name',
		},
		{
			accessorKey: 'uniqueFamilyNumber',
			header: 'Unique Family Number',
		},
		{
			accessorKey: 'mainStation',
			header: 'Main-Station / Sub-Station',
		},
		{
			accessorKey: 'anbiam',
			header: 'Anbiam',
		},
		{
			accessorKey: 'paidAmount',
			header: 'Paid Amount',
			cell: ({ getValue }) => {
				const value = getValue<number>();
				return value.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
			},
			footer: (info) => {
				const total = info.table
					.getFilteredRowModel()
					.rows.reduce((sum, row) => sum + ((row.getValue('paidAmount') as number) || 0), 0);

				return `Total: ₹${total.toLocaleString('en-IN')}`;
			},
		},
		{
			accessorKey: 'paidDate',
			header: 'Paid Date',
		},
		{
			accessorKey: 'receiptNo',
			header: 'Receipt No',
		},
	];
};

const useRentPaymentColumns = (): ColumnDef<RentPropertyPaymentProps>[] => {
	return [
		{
			id: 'select',
			header: () => <SquarePen className="w-4 h-4 text-center" />,
			cell: ({ row }) => (
				<input
					title="select"
					type="checkbox"
					onChange={(e) => console.warn('Selected:', row.original, e.target.checked)}
				/>
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},

		{
			header: 'Property',
			accessorKey: 'property',
		},
		{
			header: 'Property Name',
			accessorKey: 'propertyName',
		},
		{
			header: 'Render Name',
			accessorKey: 'renderName',
		},
		{
			header: 'Mobile No',
			accessorKey: 'mobileNumber',
		},
		{
			accessorKey: 'paidAmount',
			header: 'Paid Amount',
			cell: ({ getValue }) => {
				const value = getValue<number>();
				return value.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
			},
			footer: (info) => {
				const total = info.table
					.getFilteredRowModel()
					.rows.reduce((sum, row) => sum + ((row.getValue('paidAmount') as number) || 0), 0);

				return `Total: ₹${total.toLocaleString('en-IN')}`;
			},
		},
		{
			header: 'Paid Date',
			accessorKey: 'paidDate',
		},
		{
			header: 'Receipt No',
			accessorKey: 'receiptNumber',
		},
	];
};

const useDayBookColumns = (): ColumnDef<DayBookEntry>[] => {
	const { handleSelectRow } = useStore();

	return [
		...getCommonActionColumns<DayBookEntry>(handleSelectRow),

		{ accessorKey: 'date', header: 'Date' },
		{ accessorKey: 'name', header: 'Name' },
		{ accessorKey: 'unique_id', header: 'Voucher Number' },
		{ accessorKey: 't_data_2', header: 'Purpose' },
		{ accessorKey: 't_data_3', header: 'Description' },
		{ accessorKey: 't_data_1', header: 'Details' },

		{
			id: 'incomeAmount',
			header: 'Income Amount',
			cell: ({ row }) => {
				const amount = row.original.category === 'Income' ? Number(row.original.amount ?? 0) : 0;
				return `₹${amount.toLocaleString('en-IN')}`;
			},
			footer: (info) => {
				const total = info.table
					.getFilteredRowModel()
					.rows.reduce(
						(sum, row) => sum + (row.original.category === 'Income' ? Number(row.original.amount ?? 0) : 0),
						0
					);
				return `Total: ₹${total.toLocaleString('en-IN')}`;
			},
		},

		{
			id: 'expenseAmount',
			header: 'Expense Amount',
			cell: ({ row }) =>
				row.original.category === 'Expense' ? `₹${row.original.amount?.toLocaleString('en-IN') ?? 0}` : '',
			footer: (info) => {
				const total = info.table
					.getFilteredRowModel()
					.rows.reduce((sum, row) => sum + (row.original.category === 'Expense' ? row.original.amount || 0 : 0), 0);
				return `Total: ₹${total.toLocaleString('en-IN')}`;
			},
		},
	];
};

const useAuditingColumns = (): ColumnDef<AuditingProps>[] => {
	return [
		{
			accessorKey: 'description',
			header: 'DESCRIPTION',
		},
		{
			accessorKey: 'amount',
			header: 'AMOUNT',
			cell: (info) => `₹ ${info.getValue<number>().toLocaleString()}`,

			footer: (info) => {
				const total = info.table
					.getFilteredRowModel()
					.rows.reduce((sum, row) => sum + ((row.getValue('amount') as number) || 0), 0);

				return `Total: ₹${total.toLocaleString('en-IN')}`;
			},
		},
	];
};

const getMonthlyCollectionsColumns = <TForm extends FieldValues>(
	control: Control<TForm>
): ColumnDef<MonthlyCollectionProps>[] => [
	{
		accessorKey: 'name',
		header: 'Name',
		cell: ({ row }) => (
			<SingleSelectDropdown
				control={control}
				name={`monthlyValues.${row.index}.name` as Path<TForm>}
				options={weekOptions}
			/>
		),
	},
	{
		header: 'Details',
		cell: () => null,
	},

	{
		accessorKey: 'sundayCollection',
		header: 'Sunday Collection',
		cell: ({ row }) => (
			<CustomFormInput control={control} name={`monthlyValues.${row.index}.sundayCollection` as Path<TForm>} />
		),
	},
	{
		accessorKey: 'massIndention',
		header: 'Mass Indention',
		cell: ({ row }) => (
			<CustomFormInput control={control} name={`monthlyValues.${row.index}.massIndention` as Path<TForm>} />
		),
	},
	{
		accessorKey: 'boxCollection',
		header: 'Box Collection',
		cell: ({ row }) => (
			<CustomFormInput control={control} name={`monthlyValues.${row.index}.boxCollection` as Path<TForm>} />
		),
	},
	{
		accessorKey: 'total',
		header: 'Total',
		cell: ({ row }) => {
			const values = row.original;

			const rowTotal =
				(Number(values.sundayCollection) || 0) +
				(Number(values.massIndention) || 0) +
				(Number(values.boxCollection) || 0);

			return (
				<CustomFormInput
					control={control}
					name={`monthlyValues.${row.index}.total` as Path<TForm>}
					defaultValue={rowTotal}
					disabled
					className="font-semibold text-right bg-gray-100"
				/>
			);
		},
	},
];

const getSpecialCollectionsColumns = <TForm extends FieldValues>(
	control: Control<TForm>
): ColumnDef<SpecialCollectionProps>[] => [
	{
		accessorKey: 'occasion',
		header: 'Occasion',
		cell: ({ row }) => (
			<SingleSelectDropdown
				control={control}
				name={`specialValues.${row.index}.occasion` as Path<TForm>}
				options={occasionOptions}
			/>
		),
	},
	{
		header: 'Details',
		cell: () => null,
	},

	{
		accessorKey: 'collection',
		header: 'Collection',
		cell: ({ row }) => (
			<SingleSelectDropdown
				control={control}
				name={`specialValues.${row.index}.collection` as Path<TForm>}
				options={collectionTypeOptions}
			/>
		),
	},

	{
		accessorKey: 'amount',
		header: 'Amount',
		cell: ({ row }) => <CustomFormInput control={control} name={`specialValues.${row.index}.amount` as Path<TForm>} />,
	},
];

const getOtherCollectionColumns = <TForm extends FieldValues>(
	control: Control<TForm>
): ColumnDef<OtherCollectionProps>[] => [
	{
		accessorKey: 'occasion',
		header: 'Occasion',
		cell: ({ row }) => <CustomFormInput control={control} name={`otherValues.${row.index}.occasion` as Path<TForm>} />,
	},
	{
		accessorKey: 'collection',
		header: 'Collection',
		cell: ({ row }) => (
			<CustomFormInput control={control} name={`otherValues.${row.index}.collection` as Path<TForm>} />
		),
	},
	{
		accessorKey: 'amount',
		header: 'Amount',
		cell: ({ row }) => <CustomFormInput control={control} name={`otherValues.${row.index}.amount` as Path<TForm>} />,
	},
];

const getDonationsMembersDataColumns: ColumnDef<DonationMember>[] = [
	{
		accessorKey: 'member',
		header: 'Member',
	},
	{
		accessorKey: 'donation',
		header: 'Donation For',
	},
	{
		accessorKey: 'amount',
		header: 'Amount',
	},
	{
		accessorKey: 'date',
		header: 'Date',
	},
	{
		accessorKey: 'voucher_number',
		header: 'Voucher Number',
	},
];

const getMonthlyCollectionTableColumns: ColumnDef<ChurchCollectionTableProps>[] = [
	{
		accessorKey: 'date',
		header: 'Month & Year',
	},
	{
		accessorKey: 'occasion',
		header: 'Occasion',
	},
	{
		accessorKey: 'collection',
		header: 'Sunday Collection',
	},
	{
		accessorKey: 'indention',
		header: 'Mass Indention',
	},
	{
		accessorKey: 'box_collection',
		header: 'Dump Box Collection',
	},
	{
		accessorKey: 'total',
		header: 'Total',
	},
];

const getSpecialCollectionTableColumns: ColumnDef<ChurchCollectionTableProps>[] = [
	{
		accessorKey: 'date',
		header: 'Month & Year',
	},
	{
		accessorKey: 'occasion',
		header: 'Occasion',
	},
	{
		accessorKey: 'collection',
		header: 'Sunday Collection',
	},

	{
		accessorKey: 'total',
		header: 'Total',
	},
];

const getDayBookTableColumns: ColumnDef<DayBookCollectionTableProps>[] = [
	{
		accessorKey: 'cheque_amount',
		header: 'Cheque Amount',
	},
	{
		accessorKey: 'cheque_number',
		header: 'Cheque Number',
	},
	{
		accessorKey: 'cheque_on',
		header: 'Cheque On',
	},
	{
		accessorKey: 'cheque_given_by',
		header: 'Cheque Given By',
	},
	{
		accessorKey: 'cheque_to',
		header: 'Cheque To',
	},
	{
		accessorKey: 'withdraw_method',
		header: 'Withdraw Method',
	},
];
const getBalancePaidTableColumns: ColumnDef<BalancePaidTableProps>[] = [
	{
		accessorKey: 'current_month_year',
		header: 'Current Month & Year',
	},
	{
		accessorKey: 'total_amount',
		header: 'Total Amount',
		cell: ({ getValue }) => (getValue() ? `₹${getValue()}` : '-'),
	},
	{
		accessorKey: 'grand_paid_amount',
		header: 'Grand Paid Amount',
		cell: ({ getValue }) => (getValue() ? `₹${getValue()}` : '-'),
	},
	{
		accessorKey: 'balance_amount',
		header: 'Balance Amount',
		cell: ({ getValue }) => (getValue() ? `₹${getValue()}` : '-'),
	},
	{
		accessorKey: 'paid_upto',
		header: 'Paid Upto',
	},
];

const getLastPaidDetailsTableColumns: ColumnDef<LastTableTableProps>[] = [
	{
		accessorKey: 'date',
		header: 'Date',
	},
	{
		accessorKey: 'amount',
		header: 'Amount',
		cell: ({ getValue }) => (getValue() ? `₹${getValue()}` : '-'),
	},
	{
		accessorKey: 'monthly_rent_for',
		header: 'Monthly Rent For',
	},
	{
		accessorKey: 'voucher_number',
		header: 'Voucher Number',
	},
];

const getAdvanceTableBalanceColumns: ColumnDef<AdvanceTableBalanceProps>[] = [
	{
		accessorKey: 'total_amount',
		header: 'Total Amount',
		cell: ({ getValue }) => (getValue() ? `₹${getValue()}` : '-'),
	},
	{
		accessorKey: 'paid_amount',
		header: 'Paid Amount',
		cell: ({ getValue }) => (getValue() ? `₹${getValue()}` : '-'),
	},
	{
		accessorKey: 'balance_amount',
		header: 'Balance Amount',
		cell: ({ getValue }) => (getValue() ? `₹${getValue()}` : '-'),
	},
	{
		accessorKey: 'paid_upto',
		header: 'Paid Upto',
	},
];

const getAdvanceTableLastPaidDetailsColumns: ColumnDef<LastTableTableProps>[] = [
	{
		accessorKey: 'date',
		header: 'Date',
	},
	{
		accessorKey: 'amount',
		header: 'Amount',
		cell: ({ getValue }) => (getValue() ? `₹${getValue()}` : '-'),
	},

	{
		accessorKey: 'voucher_number',
		header: 'Voucher Number',
	},
];

const getToBePaidTableColumns: ColumnDef<ToBePaidTableProps>[] = [
	{
		accessorKey: 'current_month_year',
		header: 'Current Month & Year',
	},
	{
		header: 'To be Paid Amount',
		columns: [
			{
				accessorKey: 'total_amount',
				header: 'Total Amount',
				cell: ({ getValue }) => (getValue() ? `₹${getValue()}` : '-'),
			},
			{
				accessorKey: 'total_due_amount',
				header: 'Total Due Amount',
				cell: ({ getValue }) => (getValue() ? `₹${getValue()}` : '-'),
			},
			{
				accessorKey: 'grand_amount',
				header: 'Grand Amount',
				cell: ({ getValue }) => (getValue() ? `₹${getValue()}` : '-'),
			},
		],
	},
	{
		accessorKey: 'total_paid_amount',
		header: 'Total Paid Amount',
		cell: ({ getValue }) => (getValue() ? `₹${getValue()}` : '-'),
	},
	{
		accessorKey: 'balance_amount',
		header: 'Balance Amount',
		cell: ({ getValue }) => (getValue() ? `₹${getValue()}` : '-'),
	},
	{
		accessorKey: 'paid_upto',
		header: 'Paid Upto',
	},
];

const getPaymentHistoryTableColumns: ColumnDef<PaymentHistoryTableProps>[] = [
	{
		accessorKey: 'date',
		header: 'Date',
	},
	{
		accessorKey: 'amount',
		header: 'Amount',
		cell: ({ getValue }) => (getValue() ? `₹${getValue()}` : '-'),
	},
	{
		accessorKey: 'prior_due_amount',
		header: 'Prior Due Amount (If Any)',
		cell: ({ getValue }) => (getValue() ? `₹${getValue()}` : '-'),
	},
	{
		accessorKey: 'paid_for',
		header: 'Paid For',
	},
	{
		accessorKey: 'voucher_number',
		header: 'Voucher Number',
	},
];

const getPropertyRentHistoryColumns = [
	{
		header: 'Property Name',
		accessorKey: 'property_name',
	},
	{
		header: 'Render Name',
		accessorKey: 'render_name',
	},
	{
		header: 'Mobile No',
		accessorKey: 'mobile_no',
	},
	{
		header: 'Agreement',
		accessorKey: 'agreement',
	},
	{
		header: 'Fixed Monthly Amount',
		accessorKey: 'fixed_monthly_amount',
	},
	{
		header: 'Amount Paid',
		accessorKey: 'amount_paid',
	},
	{
		header: 'Monthly Rent For',
		accessorKey: 'monthly_rent_for',
	},
	{
		header: 'Date',
		accessorKey: 'date',
	},
	{
		header: 'Receipt',
		accessorKey: 'receipt',
	},
];

export {
	useActiveDonationColumns,
	useInActiveDonationColumns,
	useRentPropertyColumns,
	useAdvanceRentPropertyColumns,
	useChurchCollectionsColumns,
	useWorkersColumns,
	useEmployersSalaryColumns,
	useSubscriptionColumns,
	usePaymentColumns,
	useRentPaymentColumns,
	useDayBookColumns,
	useAuditingColumns,
	getMonthlyCollectionsColumns,
	getSpecialCollectionsColumns,
	getOtherCollectionColumns,
	getDonationsMembersDataColumns,
	getMonthlyCollectionTableColumns,
	getSpecialCollectionTableColumns,
	getDayBookTableColumns,
	getBalancePaidTableColumns,
	getLastPaidDetailsTableColumns,
	getAdvanceTableBalanceColumns,
	getAdvanceTableLastPaidDetailsColumns,
	getToBePaidTableColumns,
	getPaymentHistoryTableColumns,
	getPropertyRentHistoryColumns,
};
