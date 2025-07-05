import { TabsLayout } from '@/components';
import { useState } from 'react';
import { useAutoDocumentTitle } from '@/hooks/useAutoDocumentTitle';
import { RenderReligiousPeopleOverviewContainer, RenderReligiousPeopleTablesContainer } from '../../components';
import { useRouteName } from '@/utils/getRouteName';
import { useStore } from '@/store/store';

const ReligiousPeopleGenericPage = () => {
	useAutoDocumentTitle();
	const [activeIndex, setActiveIndex] = useState(0);
	const { selectRow } = useStore();
	const type = useRouteName('type');

	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	return selectRow ? (
		<RenderReligiousPeopleOverviewContainer pathName={type} />
	) : (
		<TabsLayout onTabChange={handleToggleTab} activeTabId={activeIndex} tabs={[{ label: 'View' }]}>
			{activeIndex === 0 && <RenderReligiousPeopleTablesContainer />}
		</TabsLayout>
	);
};

export default ReligiousPeopleGenericPage;
