import { TabsLayout } from '@/components';
import { useRouteName } from '@/utils/useRouteName';
import { useState } from 'react';
import { parish_rules_generic_content } from '../../data';
import { RulesEditForm } from '../../components';

interface MyTab {
	label: string;
}

const tabs: MyTab[] = [{ label: 'VIEW' }, { label: 'EDIT' }];

const RuleInParishPage = () => {
	const routeName = useRouteName('rule');
	const [activeTab, setActiveTab] = useState(0);

	const handleToggleTab = (index: number) => {
		setActiveTab(index);
	};

	return (
		<>
			<TabsLayout
				tabs={tabs}
				activeTabId={activeTab}
				onTabChange={handleToggleTab}
				pageHeading={parish_rules_generic_content[routeName as keyof typeof parish_rules_generic_content]}
			>
				{activeTab === 1 && <RulesEditForm />}
			</TabsLayout>
		</>
	);
};

export default RuleInParishPage;
