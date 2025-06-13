import { TabsLayout } from '@/components';
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
				<h1>data will be added</h1>
			</TabsLayout>
		</div>
	);
};

export default QueriesFormPage;
