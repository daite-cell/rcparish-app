import { DynamicDataTable, RequestForm, TabsLayout } from '@/components';
import { useState } from 'react';
const tabs = [{ label: 'CLOSED REQUEST' }, { label: 'OPEN REQUEST' }, { label: 'CREATE REQUEST' }];

const RequestToBishop = () => {
	const [activeTab, setActiveTab] = useState(1);

	const handleToggleTab = (index: number) => {
		setActiveTab(index);
	};

	return (
		<div>
			<TabsLayout onTabChange={handleToggleTab} hasPageHeading={false} tabs={tabs} activeTabId={activeTab}>
				{activeTab === 0 && (
					<div>
						<DynamicDataTable tableId="closed-queries" title="CLOSED QUERIES" />
					</div>
				)}
				{activeTab === 1 && (
					<div>
						<DynamicDataTable tableId="closed-queries" title="OPEN QUERIES" />
					</div>
				)}
				{activeTab === 2 && <RequestForm />}
			</TabsLayout>
		</div>
	);
};

export default RequestToBishop;
