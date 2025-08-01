import { TabsLayout } from '@/components';
import { useEffect, useState } from 'react';
import { RenderRegisterPeopleTables, RenderRegisterPeopleOverview, RenderFormsContainer } from '../../components';
import { useStore } from '@/store/store';
import { useRouteName } from '@/utils/getRouteName';

const RegisterGenericPage = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const { selectRow, editRow } = useStore();
	const type = useRouteName('type');

	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	useEffect(() => {
		if (!selectRow) {
			setActiveIndex(0);
		}
	}, [selectRow]);

	return selectRow || editRow ? (
		<RenderRegisterPeopleOverview pathName={type} />
	) : (
		<TabsLayout onTabChange={handleToggleTab} activeTabId={activeIndex} tabs={[{ label: 'view' }, { label: 'add' }]}>
			{activeIndex === 0 ? <RenderRegisterPeopleTables /> : <RenderFormsContainer />}
		</TabsLayout>
	);
};

export default RegisterGenericPage;
