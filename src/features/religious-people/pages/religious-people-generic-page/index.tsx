import { DynamicDataTable, TabsLayout } from '@/components';
import { useState } from 'react';
import { useAutoDocumentTitle } from '@/hooks/useAutoDocumentTitle';
import { useStore } from '@/store/store';
import { RenderReligiousPeopleOverviewContainer } from '../../components';
import { useRouteName } from '@/utils/getRouteName';

const ReligiousPeopleGenericPage = () => {
	const type = useRouteName('type');
	console.warn(type);
	useAutoDocumentTitle();
	const [activeIndex, setActiveIndex] = useState(0);
	const { selectRow, handleCloseRow } = useStore();

	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
		if (index === 1) {
			handleCloseRow();
		}
	};

	return selectRow ? (
		<RenderReligiousPeopleOverviewContainer pathName={type} />
	) : (
		<TabsLayout onTabChange={handleToggleTab} activeTabId={activeIndex} tabs={[{ label: 'View' }]}>
			{activeIndex === 0 && <DynamicDataTable enableDateAndLetterSorting={true} />}
		</TabsLayout>
	);
};

export default ReligiousPeopleGenericPage;
