import { ButtonActions, DynamicDataTable, PageSectionHeading } from '@/components';
import { TabsLayout } from '@/layouts';
import { useStore } from '@/store/store';
import type { ColumnDef } from '@tanstack/react-table';
import { useRef } from 'react';

interface PropertyRentHistoryTableProps<TData extends object> {
	data?: TData[];
	customColumns?: ColumnDef<TData, string | number | boolean>[];
	headingText?: string;
}

const PropertyRentHistoryTable = <TData extends object>({
	data = [],
	customColumns,
	headingText = 'Accounting - Rent & Shop',
}: PropertyRentHistoryTableProps<TData>) => {
	const { handleClosePriorRow } = useStore();
	const printRef = useRef<HTMLDivElement>(null);
	const handlePrint = () => window.print();
	return (
		<TabsLayout hasPageHeading={false} tabs={[]}>
			<PageSectionHeading title="Property Rent History" />

			<ButtonActions onPrint={handlePrint} onClose={handleClosePriorRow} />
			<div className="print-area" ref={printRef}>
				<h1 className="hidden text-4xl font-bold print:block">{headingText}</h1>
				<DynamicDataTable
					data={data}
					tableId="property-rent-history"
					customColumns={customColumns || []}
					enablePagination={false}
					enableSearch={false}
					enableExport={false}
					isDynamic={false}
				/>
			</div>
		</TabsLayout>
	);
};

export default PropertyRentHistoryTable;
