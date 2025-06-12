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
		<div className="px-5">
			<TabsLayout tabs={tabs} activeTabId={activeTab} onTabChange={handleToggleTab} />
			<div className="p-4 border border-gray-300 rounded min-h-[300px]">
				<h1 className="text-[16px] font-semibold">
					{parish_rules_generic_content[routeName as keyof typeof parish_rules_generic_content]}
				</h1>
				{activeTab === 1 && <RulesEditForm />}
			</div>
		</div>
	);
};

export default RuleInParishPage;
