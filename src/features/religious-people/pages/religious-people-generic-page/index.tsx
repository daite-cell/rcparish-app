import { DynamicDataTable, TabsLayout } from '@/components';
import { useState } from 'react';
import { priests, type PriestProps } from '../../data';
import { useAutoDocumentTitle } from '@/hooks/useAutoDocumentTitle';

const ReligiousPeopleGenericPage = () => {
	useAutoDocumentTitle();
	const [activeIndex, setActiveIndex] = useState(0);
	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	const handleView = (row: PriestProps): void => {
		console.warn('View clicked:', row);
	};

	return (
		<>
			<TabsLayout onTabChange={handleToggleTab} activeTabId={activeIndex} tabs={[{ label: 'view' }]}>
				<DynamicDataTable
					wrapText={false}
					data={priests}
					enableDateAndLetterSorting={true}
					includeCheckbox
					onView={handleView}
					tableId="religious-people"
					filterKey="name"
				/>
			</TabsLayout>
		</>
	);
};

export default ReligiousPeopleGenericPage;
