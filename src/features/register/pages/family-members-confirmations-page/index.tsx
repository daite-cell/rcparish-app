import { DynamicDataTable } from '@/components';
import { TabsLayout } from '@/layouts';
import { useState } from 'react';
import { useConfirmationRegisterColumns, useMemberFromFamiliesColumns } from '../../columns';
import get_confirmation_list from '../../data/get_confirmation_list.json';

import { useStore } from '@/store/store';
import { RenderRegisterConfirmationsOverview } from '../../components';
import { HolyCommunionForm } from '../../forms';

const FamilyMembersConfirmationsPage = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const tabs = [{ label: 'view' }, { label: 'add' }];
	const activeLabel = tabs[activeIndex].label.toLowerCase();
	const confirmation_families = useMemberFromFamiliesColumns();
	const baptism_register = useConfirmationRegisterColumns();
	const { selectRow, editRow, selectAccountingNameRow, editAccountingNameRow } = useStore();

	if (selectAccountingNameRow || editRow || selectRow || editAccountingNameRow) {
		return <RenderRegisterConfirmationsOverview />;
	}
	return (
		<TabsLayout tabs={tabs} onTabChange={setActiveIndex} activeTabId={activeIndex}>
			{activeLabel === 'view' ? (
				<>
					<DynamicDataTable
						data={get_confirmation_list.confirmation_list}
						wrapText={false}
						customColumns={confirmation_families}
						enableDateSorting={true}
					/>
					<DynamicDataTable
						data={get_confirmation_list.in_active_list}
						wrapText={false}
						customColumns={baptism_register}
						enableDateSorting={true}
					/>
				</>
			) : (
				<HolyCommunionForm />
			)}
		</TabsLayout>
	);
};

export default FamilyMembersConfirmationsPage;
