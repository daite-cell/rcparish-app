import { DynamicDataTable } from '@/components';
import { usePaymentColumns, useRentPaymentColumns } from '../../columns';
import type { ColumnDef } from '@tanstack/react-table';
import type { PaymentDetailsProps, RentPropertyPaymentProps } from '@/types';

const PaymentDetailsTable = ({ label }: { label: string }) => {
	const paymentColumns = usePaymentColumns() as ColumnDef<PaymentDetailsProps>[];
	const rentPaymentColumns = useRentPaymentColumns() as ColumnDef<RentPropertyPaymentProps>[];
	const columns = label !== 'payment details' ? rentPaymentColumns : paymentColumns;

	if (!columns || columns.length === 0) {
		return <h1 className="text-center mt-10 text-gray-500">No payment details available</h1>;
	}
	return (
		<div>
			<h1 className="text-[16px] font-bold uppercase">{label}</h1>

			{label === 'payment details' ? (
				<DynamicDataTable enableDateSorting={true} customColumns={paymentColumns} data={[]} showFooter={true} />
			) : (
				<DynamicDataTable enableDateSorting={true} customColumns={rentPaymentColumns} data={[]} showFooter={true} />
			)}
		</div>
	);
};

export default PaymentDetailsTable;
