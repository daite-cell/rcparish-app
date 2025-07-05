import { LawsAndRulesContainer, TabsLayout } from '@/components';
import { useAutoDocumentTitle } from '@/hooks/useAutoDocumentTitle';
import { useState } from 'react';

const DioceseStatutesGenericPage = () => {
	useAutoDocumentTitle();

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
