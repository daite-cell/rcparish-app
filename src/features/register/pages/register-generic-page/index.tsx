import { DynamicDataTable, TabsLayout } from '@/components';
import { useState } from 'react';

const RegisterGenericPage = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};
	return (
		<>
			<TabsLayout onTabChange={handleToggleTab} activeTabId={activeIndex} tabs={[{ label: 'view' }, { label: 'add' }]}>
				{activeIndex === 0 && <DynamicDataTable tableId="register" />}
			</TabsLayout>
		</>
	);
};

export default RegisterGenericPage;
