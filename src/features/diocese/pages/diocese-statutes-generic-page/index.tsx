import { TabsLayout } from '@/components';
import { useRouteName } from '@/utils/useRouteName';
import { useState } from 'react';
import { diocese_rules_heading } from '../../data';

const DioceseStatutesGenericPage = () => {
	const rule = useRouteName('rule');
	console.warn(rule);
	const [activeIndex, setActiveIndex] = useState(0);
	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	const sectionHeading = diocese_rules_heading[rule as keyof typeof diocese_rules_heading];
	return (
		<TabsLayout onTabChange={handleToggleTab} activeTabId={activeIndex} tabs={[{ label: 'view' }]}>
			<div>
				<h1 className="font-bold">{sectionHeading}</h1>
			</div>
		</TabsLayout>
	);
};

export default DioceseStatutesGenericPage;
