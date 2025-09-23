import { DynamicDataTable, PageSectionHeading } from '@/components';
import { usePaymentColumns, useRentPaymentColumns } from '../../columns';
import type { ColumnDef } from '@tanstack/react-table';
import type { PaymentDetailsProps, RentPropertyPaymentProps } from '@/types';

const PaymentDetailsTable = ({ label }: { label: string }) => {
	const paymentColumns = usePaymentColumns() as ColumnDef<PaymentDetailsProps> | [];
	const rentPaymentColumns = useRentPaymentColumns() as ColumnDef<RentPropertyPaymentProps> | [];
	const columns = label !== 'payment details' ? rentPaymentColumns : paymentColumns;

	if (!columns) {
		return <h1 className="text-center mt-10 text-gray-500">No payment details available</h1>;
	}
	return (
		<div>
			<PageSectionHeading title={label} />

			{label === 'payment details' ? (
				<DynamicDataTable
					enableDropdownFilters={false}
					enableDateSorting={true}
					customColumns={paymentColumns as ColumnDef<PaymentDetailsProps>[]}
					data={[]}
					showFooter={true}
				/>
			) : (
				<DynamicDataTable
					enableDropdownFilters={false}
					enableDateSorting={true}
					customColumns={rentPaymentColumns as ColumnDef<RentPropertyPaymentProps>[]}
					data={[]}
					showFooter={true}
				/>
			)}
		</div>
	);
};

export default PaymentDetailsTable;
