import { DynamicDataTable, RequestForm, TabsLayout } from '@/components';
import { useState } from 'react';
import { useClosedRequestColumns, useOpenedRequestColumns } from '../../columns';
const tabs = [{ label: 'CLOSED REQUEST' }, { label: 'OPEN REQUEST' }, { label: 'CREATE REQUEST' }];

const RequestToBishop = () => {
	const [activeTab, setActiveTab] = useState(1);

	const handleToggleTab = (index: number) => {
		setActiveTab(index);
	};

	const closedRequestColumns = useClosedRequestColumns();
	const openRequestColumns = useOpenedRequestColumns();

	return (
		<div>
			<TabsLayout onTabChange={handleToggleTab} hasPageHeading={false} tabs={tabs} activeTabId={activeTab}>
				{activeTab === 0 && (
					<div>
						<DynamicDataTable
							customColumns={closedRequestColumns}
							data={[]}
							tableId="closed-queries"
							title="CLOSED QUERIES"
							enableExport={false}
						/>
					</div>
				)}
				{activeTab === 1 && (
					<div>
						<DynamicDataTable
							customColumns={openRequestColumns}
							data={[]}
							tableId="closed-queries"
							title="OPEN QUERIES"
							enableExport={false}
						/>
					</div>
				)}
				{activeTab === 2 && <RequestForm />}
			</TabsLayout>
		</div>
	);
};

export default RequestToBishop;
