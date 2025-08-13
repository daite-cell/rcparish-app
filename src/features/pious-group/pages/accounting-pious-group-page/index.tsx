import { DynamicDataTable } from '@/components';
import { TabsLayout } from '@/layouts';
import { useState } from 'react';
import { useFamilyOverviewColumns } from '../../columns';
import get_families from '../../data/get_families.json';
import { RenderAccountingPiousOverView } from '../../components';
import { useStore } from '@/store/store';
import { FamiliesForm } from '../../forms';

const AccountingPiousGroupPage = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const { selectRow, editRow, selectFamilyCardRow, selectAccountingNameRow } = useStore();
	const tabs = [{ label: 'view' }, { label: 'add' }];
	const activeLabel = tabs[activeIndex].label.toLowerCase();
	const columns = useFamilyOverviewColumns();

	if (selectAccountingNameRow || editRow || selectFamilyCardRow || selectRow) {
		return <RenderAccountingPiousOverView />;
	}
	return (
		<TabsLayout tabs={tabs} onTabChange={setActiveIndex} activeTabId={activeIndex}>
			{activeLabel === 'view' ? (
				<DynamicDataTable data={get_families.families_list} wrapText={false} customColumns={columns} />
			) : (
				<FamiliesForm />
			)}
		</TabsLayout>
	);
};

export default AccountingPiousGroupPage;
