import { ButtonActions, DynamicDataTable, HeadingWithUnderline } from '@/components';
import { TabsLayout } from '@/layouts';
import { useStore } from '@/store/store';
import { useRef } from 'react';
import get_total_members from '../../data/get_total_members.json';
import { useAssociationInchargeDetailsColumns } from '../../columns';

const AssociationInchargeDetails = () => {
	const { handleClosePriorRow } = useStore();
	const printRef = useRef<HTMLDivElement>(null);
	const handlePrint = () => window.print();

	return (
		<TabsLayout hasPageHeading={false} tabs={[]}>
			<HeadingWithUnderline className="text-start !text-sm" text="St Vincent de Paul - Association Incharge Details" />
			<ButtonActions onPrint={handlePrint} onClose={handleClosePriorRow} />
			<div className="print-area" ref={printRef}>
				<h1 className="hidden font-bold print:block">Christ the King Church - Perumanam Parish</h1>
				<DynamicDataTable
					isDynamic={false}
					data={get_total_members.total_members}
					tableId="association-incharge-details"
					customColumns={useAssociationInchargeDetailsColumns()}
				/>
			</div>
		</TabsLayout>
	);
};

export default AssociationInchargeDetails;
