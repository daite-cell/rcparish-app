import { DynamicDataTable, TabsLayout } from '@/components';
import { useState } from 'react';

const ReligiousPeopleGenericPage = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};
	return (
		<>
			<TabsLayout onTabChange={handleToggleTab} activeTabId={activeIndex} tabs={[{ label: 'view' }]}>
				<DynamicDataTable enableDateAndLetterSorting={true} />
			</TabsLayout>
		</>
	);
};

export default ReligiousPeopleGenericPage;
