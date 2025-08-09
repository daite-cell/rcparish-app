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
} from '@/types';
import { SquarePen, Trash2 } from 'lucide-react';
import type { CellContext } from '@tanstack/react-table';
import { TableDetailsViewButton, TextLink } from '@/components';
import { getCommonActionColumns } from '@/utils/commonActionColumns';

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
		{ accessorKey: 'workingAs', header: 'Working As' },
		{ accessorKey: 'name', header: 'Name of the Worker' },
		{ accessorKey: 'workerId', header: 'Worker Id' },
		{ accessorKey: 'dateOfJoining', header: 'Date of Joining' },
		{
			accessorKey: 'salaryPerMonth',
			header: 'Salary Per Month',
			cell: ({ getValue }) => `₹${getValue()}`,
		},
		{ accessorKey: 'salaryFixedFromOn', header: 'Salary Fixed From On' },
		{ accessorKey: 'religion', header: 'Religion' },
		{
			accessorKey: 'mobileNumber',
			header: 'Mobile Number',
		},
		{ accessorKey: 'aadhaarNumber', header: 'Adhaar Number' },
		{ accessorKey: 'permanentAddress', header: 'Permanent Address' },
		{ accessorKey: 'temporaryAddress', header: 'Temporary Address' },
	];
};

const useEmployersSalaryColumns = (): ColumnDef<EmployersSalaryProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<EmployersSalaryProps>(handleSelectRow, handleEditRow),

		{ accessorKey: 'workingStatus', header: 'Working Status' },
		{ accessorKey: 'workerName', header: 'Worker Name' },
		{ accessorKey: 'workerId', header: 'Worker Id' },
		{
			accessorKey: 'mobileNumber',
			header: 'Mobile Number',
		},
		{
			accessorKey: 'fixedSalaryAmount',
			header: 'Fixed Salary Amount',
			cell: ({ getValue }) => `₹${getValue()}`,
		},
		{ accessorKey: 'fixedSalaryFrom', header: 'Fixed Salary From' },
		{
			accessorKey: 'grandPaidAmount',
			header: 'Grand Paid Amount',
			cell: ({ getValue }) => `₹${getValue()}`,
		},
		{
			header: 'Last Salary Details',
			columns: [
				{ accessorKey: 'paidUpto', header: 'Paid upto' },
				{
					accessorKey: 'advanceFromSalary',
					header: 'Advance from Salary',
					cell: ({ getValue }) => `₹${getValue()}`,
				},
				{ accessorKey: 'advanceFromSalaryOn', header: 'Advance from Salary on' },
				{
					accessorKey: 'paidAmount',
					header: 'Paid Amount',
					cell: ({ getValue }) => `₹${getValue()}`,
				},
				{
					accessorKey: 'balanceSalaryAmount',
					header: 'Balance Salary Amount',
					cell: ({ getValue }) => `₹${getValue()}`,
				},
				{ accessorKey: 'lastPaidDate', header: 'Date' },
				{ accessorKey: 'voucherNumber', header: 'Voucher Number' },
			],
		},
	];
};

const useSubscriptionColumns = (): ColumnDef<SubscriptionProps>[] => {
	const { handleSelectRow, handleEditRow } = useStore();

	return [
		...getCommonActionColumns<SubscriptionProps>(handleSelectRow, handleEditRow),
		{
			id: 'familyInfo',
			header: '',
			columns: [
				{ accessorKey: 'familyStatus', header: 'Family Status' },

				{
					accessorKey: 'familyName',
					header: 'Family Name',
					cell: ({ row }) => <TextLink to="">{row.original.familyName}</TextLink>,
				},
				{ accessorKey: 'uniqueFamilyNumber', header: 'Unique Family Number' },
				{ accessorKey: 'oldFamilyNumber', header: 'Old Family Number' },
				{ accessorKey: 'familyHeadName', header: 'Family Head Name' },
				{ accessorKey: 'familyHeadMobileNumber', header: 'Family Head Mobile Number' },
				{ accessorKey: 'mainStation', header: 'Main-Station / Sub-Station' },
				{ accessorKey: 'subStationId', header: 'Sub-Station Id' },
				{ accessorKey: 'anbiam', header: 'Anbiam' },
				{ accessorKey: 'anbiamId', header: 'Anbiam Id' },
				{ accessorKey: 'familyMonthlyIncome', header: 'Family Monthly Income' },
			],
		},
		{
			id: 'subscriptionDetails',
			header: 'Subscription Details',
			columns: [
				{ accessorKey: 'fixedAmount', header: 'Fixed Amount' },
				{ accessorKey: 'fixedFrom', header: 'Fixed From' },
			],
		},
		{
			id: 'paymentInfo',
			header: '',
			columns: [
				{ accessorKey: 'grandPaidAmount', header: 'Grand Paid Amount' },
				{ accessorKey: 'paidUpto', header: 'Paid upto' },
				{ accessorKey: 'priorDueAmount', header: 'Prior Due Amount' },
				{ accessorKey: 'unpaidAmount', header: 'Remaining Balance UnPaid Amount' },
			],
		},
		{
			id: 'lastPaidDetails',
			header: 'Last Paid Details',
			columns: [
				{ accessorKey: 'paidAmount', header: 'Amount' },
				{ accessorKey: 'date', header: 'Date' },
				{ accessorKey: 'voucherNumber', header: 'Voucher Number' },
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
};
