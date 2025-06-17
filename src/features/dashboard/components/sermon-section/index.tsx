import { DynamicDataTable, TabsLayout } from '@/components';
import { useState } from 'react';
import SermonFormSection from '../sermon-form-section';
const tabs = [{ label: 'view' }, { label: 'add' }];

const SermonSection = () => {
	const [activeTab, setActiveTab] = useState(1);

	const handleToggleTab = (index: number) => {
		setActiveTab(index);
	};

	return (
		<TabsLayout onTabChange={handleToggleTab} hasPageHeading={false} tabs={tabs} activeTabId={activeTab}>
			{activeTab === 0 && <DynamicDataTable isDynamic={false} tableId="closed-queries" title="Sermon" />}
			{activeTab === 1 && <SermonFormSection />}
		</TabsLayout>
	);
};

export default SermonSection;
