import { DynamicDataTable, TabsLayout } from '@/components';
import { useState } from 'react';
import SermonFormSection from '../forms/sermon-form-section';
import { useDioceseSermonColumns } from '../../columns';
const tabs = [{ label: 'view' }, { label: 'add' }];

const SermonSection = () => {
	const [activeTab, setActiveTab] = useState(1);

	const handleToggleTab = (index: number) => {
		setActiveTab(index);
	};

	const columns = useDioceseSermonColumns();

	return (
		<TabsLayout onTabChange={handleToggleTab} hasPageHeading={false} tabs={tabs} activeTabId={activeTab}>
			{activeTab === 0 && (
				<DynamicDataTable
					enableExport={false}
					isDynamic={true}
					data={[]}
					customColumns={columns}
					tableId="closed-queries"
					title="Sermon"
				/>
			)}
			{activeTab === 1 && <SermonFormSection />}
		</TabsLayout>
	);
};

export default SermonSection;
