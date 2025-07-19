import type { ColumnDef } from '@tanstack/react-table';
import { useStore } from '@/store/store';
import type {
	ActiveDonationTableProps,
	InActiveDonationTableProps,
	RentPropertyProps,
	AdvanceRentPropertyProps,
	ChurchCollectionsProps,
	WorkerProps,
	EmployersSalaryProps,
} from '@/types';
import { SquarePen, Trash2 } from 'lucide-react';
import type { CellContext } from '@tanstack/react-table';
import { TableDetailsViewButton } from '@/components';
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
	const { handleSelectRow } = useStore();

	return [
		...getCommonActionColumns<WorkerProps>(handleSelectRow),
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
			cell: ({ row }: CellContext<EmployersSalaryProps, unknown>) => (
				<TableDetailsViewButton onClick={() => handleSelectRow(row.original)} />
			),
			enableSorting: false,
			meta: { isExportable: false },
			enableHiding: true,
		},
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

export {
	useActiveDonationColumns,
	useInActiveDonationColumns,
	useRentPropertyColumns,
	useAdvanceRentPropertyColumns,
	useChurchCollectionsColumns,
	useWorkersColumns,
	useEmployersSalaryColumns,
};
