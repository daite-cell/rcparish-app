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
			<TabsLayout onTabChange={handleToggleTab} hasPageHeading={false} tabs={tabs} activeTabId={activeTab}>
				{activeTab === 1 && (
					<div>
						<DynamicDataTable isDynamic={false} tableId="closed-queries" title="OPEN QUERIES" />
					</div>
				)}
				{activeTab === 0 && (
					<div>
						<DynamicDataTable isDynamic={false} tableId="closed-queries" title="CLOSED QUERIES" />
					</div>
				)}
			</TabsLayout>
		</div>
	);
};

export default QueriesFormPage;
