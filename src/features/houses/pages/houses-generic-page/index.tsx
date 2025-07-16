import { TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import type { NavLinkProps } from '@/types';
import { getSectionByPathName } from '@/utils/getSectionByPathName';
import { useState } from 'react';
import { RenderHouseMemberOverviewContainer, RenderHousesTableContainer } from '../../components';
import { useStore } from '@/store/store';
import { useRouteName } from '@/utils/getRouteName';

const HousesGenericPage = () => {
	const type = useRouteName('type');
	const [activeIndex, setActiveIndex] = useState(0);
	const { selectRow } = useStore();

	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	const linksData = getSectionByPathName(side_nav_links, type as string);
	const tabsData = linksData?.page_nav_links.find((link: NavLinkProps) => link.path_url === type)?.tabs;

	return selectRow ? (
		<RenderHouseMemberOverviewContainer />
	) : (
		<TabsLayout
			onTabChange={handleToggleTab}
			activeTabId={activeIndex}
			tabs={tabsData || [{ label: 'view' }, { label: 'add' }]}
		>
			{activeIndex === 0 ? <RenderHousesTableContainer /> : <h1>form will be added</h1>}
		</TabsLayout>
	);
};

export default HousesGenericPage;
