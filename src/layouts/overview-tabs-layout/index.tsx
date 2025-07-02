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
}

const defaultTabs: Tab[] = [{ label: 'profile' }, { label: 'edit' }, { label: 'back' }];

const OverviewTabsLayout = ({ pathName, componentMap, tabs = defaultTabs }: OverviewTabsProps) => {
	const [activeTabIndex, setActiveTabIndex] = useState(0);
	const { selectRow, handleCloseRow } = useStore();
	const page = String(pathName);

	const handleTabChange = (index: number) => {
		if (tabs[index].label.toLowerCase() === 'back') {
			handleCloseRow();
			setActiveTabIndex(0);
			console.warn(selectRow);
		} else {
			setActiveTabIndex(index);
		}
	};

	const componentEntry = componentMap[page];

	const content: JSX.Element = componentEntry ? (
		activeTabIndex === 0 ? (
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
