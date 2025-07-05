import { TabsLayout } from '@/components';
import { useState } from 'react';
import { RenderRegisterPeopleTables, RenderRegisterPeopleOverview } from '../../components';
import { useStore } from '@/store/store';
import { useRouteName } from '@/utils/getRouteName';

const RegisterGenericPage = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const { selectRow } = useStore();
	const type = useRouteName('type');
	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	return selectRow ? (
		<RenderRegisterPeopleOverview pathName={type} />
	) : (
		<TabsLayout onTabChange={handleToggleTab} activeTabId={activeIndex} tabs={[{ label: 'view' }, { label: 'add' }]}>
			{activeIndex === 0 && <RenderRegisterPeopleTables />}
		</TabsLayout>
	);
};

export default RegisterGenericPage;
