import { LawsAndRulesContainer, TabsLayout } from '@/components';
import { useRouteName } from '@/utils/useRouteName';
import { useState } from 'react';

const DioceseStatutesGenericPage = () => {
	const rule = useRouteName('rule');
	console.warn(rule);
	const [activeIndex, setActiveIndex] = useState(0);
	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	return (
		<TabsLayout onTabChange={handleToggleTab} activeTabId={activeIndex} tabs={[{ label: 'view' }]}>
			<div>
				<LawsAndRulesContainer />
			</div>
		</TabsLayout>
	);
};

export default DioceseStatutesGenericPage;
