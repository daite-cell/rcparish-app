import { TabsLayout } from '@/components';
import { useState } from 'react';
const tabs = [{ label: 'CLOSED REQUEST' }, { label: 'OPEN REQUEST' }, { label: 'CREATE REQUEST' }];

const RequestToBishop = () => {
	const [activeTab, setActiveTab] = useState(1);

	const handleToggleTab = (index: number) => {
		setActiveTab(index);
	};

	return (
		<div>
			<TabsLayout onTabChange={handleToggleTab} tabs={tabs} activeTabId={activeTab}>
				<h1 className="text-red-600">data will be added</h1>
			</TabsLayout>
		</div>
	);
};

export default RequestToBishop;
