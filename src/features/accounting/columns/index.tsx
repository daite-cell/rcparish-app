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
} from '@/types';
import { SquarePen, Trash2 } from 'lucide-react';
import type { CellContext } from '@tanstack/react-table';
import { CustomFormInput, SingleSelectDropdown, TableDetailsViewButton, TextLink } from '@/components';
import { getCommonActionColumns } from '@/utils/commonActionColumns';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { collectionTypeOptions, occasionOptions, weekOptions } from '@/forms-options-data';

const useActiveDonationColumns = (): ColumnDef<ActiveDonationTableProps>[] => {
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
				<TableDetailsViewButton onClick={() => handleSelectRow(row.original)} />
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
const useInActiveDonationColumns = (): ColumnDef<InActiveDonationTableProps>[] => {
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
				<TableDetailsViewButton onClick={() => handleSelectRow(row.original)} />
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},

		{
			accessorKey: 'name',
			header: 'Name of the Person',
		},
		{
			accessorKey: 'city',
			header: 'City',
		},
		{
			accessorKey: 'donationFor',
			header: 'Donation For',
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
		},
		{
			accessorKey: 'voucherNumber',
			header: 'Voucher Number',
		},
		{
			accessorKey: 'date',
			header: 'Date',
		},
		{
			accessorKey: 'mobile',
			header: 'Mobile',
		},
		{
			accessorKey: 'address',
			header: 'Address',
		},
	];
};

const useRentPropertyColumns = (): ColumnDef<RentPropertyProps>[] => {
	const { handleSelectRow } = useStore();

	return [
		...getCommonActionColumns<RentPropertyProps>(handleSelectRow),
		{ accessorKey: 'type', header: 'Type' },
		{ accessorKey: 'propertyName', header: 'Property Name' },
		{ accessorKey: 'propertyId', header: 'Property Id' },
		{
			accessorKey: 'paymentHistory',
			header: 'Payment History',
		},
		{ accessorKey: 'renderName', header: 'Render Name' },
		{ accessorKey: 'mobileNumber', header: 'Mobile Number' },
		{ accessorKey: 'nowRentFor', header: 'Now Rent For' },
		{
			accessorKey: 'fixedAmountMonthly',
			header: 'Fixed Amount (monthly)',
			cell: ({ getValue }) => `₹${getValue()}`,
		},
		{ accessorKey: 'fixedAmountOn', header: 'Fixed Amount on' },
		{
			accessorKey: 'grandPaidAmount',
			header: 'Grand Paid Amount',
			cell: ({ getValue }) => `₹${getValue()}`,
		},
		{ accessorKey: 'paidUpto', header: 'Paid upto' },
		{
			accessorKey: 'remainingUnpaidAmount',
			header: 'Remaining Balance UnPaid Amount',
			cell: ({ getValue }) => `₹${getValue()}`,
		},
		{
			accessorKey: 'lastPaidAmount',
			header: 'Last Paid Amount',
			cell: ({ getValue }) => `₹${getValue()}`,
		},
		{ accessorKey: 'lastPaidDate', header: 'Last Paid Date' },
	];
};
const useAdvanceRentPropertyColumns = (): ColumnDef<AdvanceRentPropertyProps>[] => {
	const { handleSelectRow } = useStore();

	return [
		...getCommonActionColumns<AdvanceRentPropertyProps>(handleSelectRow),
		{ accessorKey: 'type', header: 'Type' },
		{ accessorKey: 'propertyName', header: 'Property Name' },
		{ accessorKey: 'propertyId', header: 'Property Id' },
		{
			accessorKey: 'paymentHistory',
			header: 'Payment History',
		},
		{ accessorKey: 'renderName', header: 'Render Name' },
		{ accessorKey: 'mobileNumber', header: 'Mobile Number' },
		{ accessorKey: 'nowRentFor', header: 'Now Rent For' },
		{
			accessorKey: 'fixedAdvanceAmount',
			header: 'Fixed Advance Amount',
			cell: ({ getValue }) => `₹${getValue()}`,
		},
		{
			accessorKey: 'paidAdvanceAmount',
			header: 'Paid Advance Amount',
			cell: ({ getValue }) => `₹${getValue()}`,
		},
		{
			accessorKey: 'balanceAmount',
			header: 'After Paid a due (Still Balance Amount)',
			cell: ({ getValue }) => `₹${getValue()}`,
		},
		{
			accessorKey: 'lastPaidDate',
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
		{ accessorKey: 'name', header: 'Name of the Priest' },
		{ accessorKey: 'priestId', header: 'Priest Id' },
		{ accessorKey: 'monthYear', header: 'Month & Year' },
		{
			id: 'delete1',
			header: 'Delete',
			cell: ({ row }: CellContext<ChurchCollectionsProps, unknown>) => (
				<button title="Delete" onClick={() => handleSelectRow(row.original)}>
					<Trash2 className="w-4 h-4 text-red-500 cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
		},
		{
			accessorKey: 'monthly',
			header: 'Monthly',
			cell: ({ getValue }) => `₹${getValue()}`,
		},
		{
			id: 'delete2',
			header: 'Delete',
			cell: ({ row }: CellContext<ChurchCollectionsProps, unknown>) => (
				<button title="Delete" onClick={() => handleSelectRow(row.original)}>
					<Trash2 className="w-4 h-4 text-red-500 cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
		},
		{
			accessorKey: 'special',
			header: 'Special',
			cell: ({ getValue }) => `₹${getValue()}`,
		},
		{
			id: 'delete3',
			header: 'Delete',
			cell: ({ row }: CellContext<ChurchCollectionsProps, unknown>) => (
				<button title="Delete" onClick={() => handleSelectRow(row.original)}>
					<Trash2 className="w-4 h-4 text-red-500 cursor-pointer" />
				</button>
			),
			enableSorting: false,
			meta: { isExportable: false },
		},
		{
			accessorKey: 'other',
			header: 'Other',
			cell: ({ getValue }) => `₹${getValue()}`,
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
			cell: ({ getValue }) => `₹${getValue()}`,
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
	const { handleSelectRow, handleEditRow, handleSelectAccountingNameRow, handleEditAccountingName } = useStore();

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
								handleSelectAccountingNameRow(row.original);
								handleEditAccountingName(row.original);
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
				{ accessorKey: 'now_amount', header: 'Amount' },
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

		{
			accessorKey: 'date',
			header: 'Date',
		},
		{
			accessorKey: 'name',
			header: 'Name',
		},
		{
			accessorKey: 'voucherNumber',
			header: 'Voucher Number',
		},
		{
			accessorKey: 'purpose',
			header: 'Purpose',
		},
		{
			accessorKey: 'description',
			header: 'Description',
		},
		{
			accessorKey: 'details',
			header: 'Details',
		},
		{
			accessorKey: 'incomeAmount',
			header: 'Income Amount',
			footer: (info) => {
				const total = info.table
					.getFilteredRowModel()
					.rows.reduce((sum, row) => sum + ((row.getValue('incomeAmount') as number) || 0), 0);

				return `Total: ₹${total.toLocaleString('en-IN')}`;
			},
		},
		{
			accessorKey: 'expenseAmount',
			header: 'Expense Amount',
			footer: (info) => {
				const total = info.table
					.getFilteredRowModel()
					.rows.reduce((sum, row) => sum + ((row.getValue('expenseAmount') as number) || 0), 0);

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
				name={`specialValues.${row.index}.name` as Path<TForm>}
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
				name={`specialValues.${row.index}.name` as Path<TForm>}
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
};
