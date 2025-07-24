import { PriorDignitariesContainer, TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import type { NavLinkProps } from '@/types';
import { getSectionByPathName } from '@/utils/getSectionByPathName';
import { useRouteName } from '@/utils/getRouteName';
import { useMemo, useState } from 'react';
import { useStore } from '@/store/store';
import { FormsContainer, RenderPiousGroupOverviewContainer, RenderPiousGroupTables } from '../../components';
import { usePathName } from '@/utils/getPathName';

const PiousGroupGenericPage = () => {
	const type = useRouteName('type');
	const pathName = usePathName();

	const { selectRow, selectFamilyCardRow, selectPriorRow } = useStore();
	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	const linksData = getSectionByPathName(side_nav_links, pathName);
	const tabsData = linksData?.page_nav_links.find((link: NavLinkProps) => link.path_url === pathName)?.tabs;
	const defaultTabIndex = useMemo(() => {
		if (!tabsData) return 0;
		const viewIndex = tabsData.findIndex((tab) => tab.label.toLowerCase() === 'view');
		return viewIndex !== -1 ? viewIndex : 0;
	}, [tabsData]);

	const [activeIndex, setActiveIndex] = useState(defaultTabIndex);

	if (selectPriorRow) {
		return <PriorDignitariesContainer />;
	}

	if (selectRow || selectFamilyCardRow) {
		return <RenderPiousGroupOverviewContainer pathName={type} />;
	}

	return (
		<TabsLayout tabs={tabsData || []} onTabChange={handleToggleTab} activeTabId={activeIndex}>
			{tabsData?.[activeIndex]?.label === 'view' ? (
				<RenderPiousGroupTables />
			) : tabsData?.[activeIndex]?.label.toLowerCase() === 'add' ? (
				<FormsContainer />
			) : (
				<h1>charge</h1>
			)}
		</TabsLayout>
	);
};

export default PiousGroupGenericPage;
