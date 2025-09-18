import { useEffect, useState } from 'react';
import { useStore } from '@/store/store';
import { useParams } from 'react-router-dom';
import { RenderPriestOverviewContainer } from '../../components';
import { DynamicDataTable, TabsLayout } from '@/components';
import { PriestsForm } from '../../forms';
import { priests_dummy_data } from '../../data';
import { usePriestColumns } from '../../columns';
import type { ColumnDef } from '@tanstack/react-table';

const PriestsGenericPage = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const { selectPriestsRow, selectRow, editRow, selectPathId, handleSelectPathId } = useStore();

	const columns = usePriestColumns() as ColumnDef<object>[];
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			handleSelectPathId(id);
		} else {
			handleSelectPathId('');
		}
	}, [id, handleSelectPathId]);

	const tabs = [{ label: 'view' }, { label: 'add' }];
	const activeLabel = tabs[activeIndex].label.toLowerCase();

	if (selectPriestsRow || selectRow || editRow || selectPathId) {
		return <RenderPriestOverviewContainer />;
	}

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
