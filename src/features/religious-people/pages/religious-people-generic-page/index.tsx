import { TabsLayout } from '@/components';
import { useState } from 'react';

const ReligiousPeopleGenericPage = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};
	return (
		<>
			<TabsLayout onTabChange={handleToggleTab} activeTabId={activeIndex} tabs={[{ label: 'view' }]}>
				<h1 className="text-center text-red-600">dynamic table will be added ...</h1>
			</TabsLayout>
		</>
	);
};

export default ReligiousPeopleGenericPage;
