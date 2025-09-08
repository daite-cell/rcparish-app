import { RenderPriestOverviewContainer } from '../../components';
import { DynamicDataTable, TabsLayout } from '@/components';
import { useState } from 'react';
import { useStore } from '@/store/store';
import { PriestsForm } from '../../forms';
import { priests_dummy_data } from '../../data';
import { usePriestColumns } from '../../columns';
import type { ColumnDef } from '@tanstack/react-table';

const PriestsGenericPage = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const { selectPriestsRow, selectRow, editRow } = useStore();
	const columns = usePriestColumns() as ColumnDef<object>[];

	const tabs = [{ label: 'view' }, { label: 'add' }];
	const activeLabel = tabs[activeIndex].label.toLowerCase();

	if (selectPriestsRow || selectRow || editRow) return <RenderPriestOverviewContainer />;

	return (
		<TabsLayout tabs={tabs} onTabChange={setActiveIndex} activeTabId={activeIndex}>
			{activeLabel === 'view' ? (
				<DynamicDataTable wrapText={false} customColumns={columns} data={priests_dummy_data} />
			) : (
				<PriestsForm />
			)}
		</TabsLayout>
	);
};

export default PriestsGenericPage;
