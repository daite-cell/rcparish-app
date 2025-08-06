import { useStore } from '@/store/store';
import ButtonActions from '../button-actions';
import DynamicDataTable from '../dynamic-table';
import HeadingWithUnderline from '../heading-with-underline';
import TabsLayout from '../../layouts/tabs-layout';
import { electedMembersColumns } from '@/table-columns';
import { useRef } from 'react';

const PriorDignitariesContainer = () => {
	const { handleClosePriorRow } = useStore();
	const printRef = useRef<HTMLDivElement>(null);
	const handlePrint = () => window.print();

	return (
		<TabsLayout hasPageHeading={false} tabs={[]}>
			<HeadingWithUnderline text="Prior Dignitaries " />
			<ButtonActions onPrint={handlePrint} onClose={handleClosePriorRow} />
			<div className="print-area" ref={printRef}>
				<h1 className="hidden font-bold print:block">Pious Group - Parish Council Members</h1>
				<DynamicDataTable
					isDynamic={false}
					data={[]}
					tableId="prior-dignitaries"
					customColumns={electedMembersColumns}
				/>
			</div>
		</TabsLayout>
	);
};

export default PriorDignitariesContainer;
