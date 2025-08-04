import { useState, type JSX } from 'react';
import { useStore } from '@/store/store';
import { TabsLayout } from '@/components';

type Tab = { label: string };

type OverviewEntry = {
	view: JSX.Element;
	form?: JSX.Element;
};

interface OverviewTabsProps {
	pathName: string | number | undefined;
	componentMap: Record<string, OverviewEntry>;
	tabs?: Tab[];
	defaultTabLabel?: string;
}

const defaultTabs: Tab[] = [{ label: 'profile' }, { label: 'edit' }, { label: 'back' }];

const OverviewTabsLayout = ({
	pathName,
	componentMap,
	tabs = defaultTabs,
	defaultTabLabel = 'profile',
}: OverviewTabsProps) => {
	const {
		handleCloseRow,
		handleCloseFamilyCardRow,
		handleCloseEditRow,
		handleCloseEditPriestsRow,
		handleClosePriestsRow,
	} = useStore();
	const page = String(pathName);

	const getTabIndexByLabel = (label: string) =>
		tabs.findIndex((tab) => tab.label.toLowerCase() === label.toLowerCase());

	const [activeTabIndex, setActiveTabIndex] = useState(() => getTabIndexByLabel(defaultTabLabel));

	const handleTabChange = (index: number) => {
		const label = tabs[index].label.toLowerCase();

		if (label === 'back') {
			handleCloseRow();
			handleCloseFamilyCardRow();
			handleCloseEditRow();
			handleCloseEditPriestsRow();
			handleClosePriestsRow();
			setActiveTabIndex(getTabIndexByLabel('profile'));
		} else {
			setActiveTabIndex(index);
		}
	};

	const componentEntry = componentMap[page];

	const content: JSX.Element = componentEntry ? (
		activeTabIndex === getTabIndexByLabel('profile') ? (
			componentEntry.view
		) : (
			(componentEntry.form ?? <h1 className="text-gray-500">Form not implemented</h1>)
		)
	) : (
		<h1 className="text-red-600">Details page coming soon...</h1>
	);

	return (
		<TabsLayout tabs={tabs} activeTabId={activeTabIndex} onTabChange={handleTabChange}>
			{content}
		</TabsLayout>
	);
};

export default OverviewTabsLayout;
