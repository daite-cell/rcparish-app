import { DynamicDataTable, TabsLayout } from '@/components';
import { useState } from 'react';
const QueriesFormPage = () => {
	const [activeTab, setActiveTab] = useState(0);
	const handleToggleTab = (index: number) => {
		setActiveTab(index);
	};
	const tabs = [
		{ label: 'CLOSED QUERIES', content: '' },
		{ label: 'OPEN QUERIES', content: '' },
	];
	return (
		<div>
			<TabsLayout onTabChange={handleToggleTab} tabs={tabs} activeTabId={activeTab}>
				{activeTab === 1 && <DynamicDataTable />}
			</TabsLayout>
		</div>
	);
};

export default QueriesFormPage;
