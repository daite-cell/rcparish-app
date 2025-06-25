import { LawsAndRulesContainer, TabsLayout } from '@/components';
import { useAutoDocumentTitle } from '@/hooks/useAutoDocumentTitle';

import { useRouteName } from '@/utils/getRouteName';
import { useState } from 'react';

const DioceseStatutesGenericPage = () => {
	useAutoDocumentTitle();
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
