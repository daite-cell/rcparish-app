import { useStore } from '@/store/store';
import ButtonActions from '../button-actions';
import DynamicDataTable from '../dynamic-table';
import HeadingWithUnderline from '../heading-with-underline';
import TabsLayout from '../../layouts/tabs-layout';
import { useRef } from 'react';
import { electedMembersColumns } from '@/table-columns';
import type { ColumnDef } from '@tanstack/react-table';

interface PriorDignitariesContainerProps<TData extends object> {
	data?: TData[];
	customColumns?: ColumnDef<TData, string | number | boolean>[];
	enableHeading?: boolean;
	enableCloseButton?: boolean;
	useTabsLayout?: boolean;
	headingText?: string;
}

const PriorDignitariesContainer = <TData extends object>({
	data = [],
	customColumns,
	enableHeading = true,
	enableCloseButton = true,
	useTabsLayout = true,
	headingText = 'Prior Dignitaries',
}: PriorDignitariesContainerProps<TData>) => {
	const { handleClosePriorRow } = useStore();
	const printRef = useRef<HTMLDivElement>(null);

	const handlePrint = () => window.print();

	const content = (
		<>
			{enableHeading && <HeadingWithUnderline className="text-start !text-sm" text={headingText} />}
			<ButtonActions onPrint={handlePrint} onClose={handleClosePriorRow} enableClose={enableCloseButton} />
			<div className="print-area" ref={printRef}>
				<h1 className="hidden font-bold print:block">{headingText}</h1>
				<DynamicDataTable
					data={data}
					tableId="prior-dignitaries"
					customColumns={customColumns ?? electedMembersColumns}
					enablePagination={false}
					enableSearch={false}
					enableExport={false}
				/>
			</div>
		</>
	);

	return useTabsLayout ? (
		<TabsLayout hasPageHeading={false} tabs={[]}>
			{content}
		</TabsLayout>
	) : (
		<>{content}</>
	);
};

export default PriorDignitariesContainer;
