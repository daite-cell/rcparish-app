import { TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import type { NavLinkProps } from '@/types';
import { getSectionByPathName } from '@/utils/getSectionByPathName';
import { useLocation } from 'react-router-dom';
import { useRouteName } from '@/utils/getRouteName';
import { useState } from 'react';
import { useStore } from '@/store/store';
import { RenderPiousGroupOverviewContainer, RenderPiousGroupTables } from '../../components';

const PiousGroupGenericPage = () => {
	const location = useLocation();
	const [activeIndex, setActiveIndex] = useState(1);
	const type = useRouteName('type');
	const { selectRow } = useStore();
	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	const linksData = getSectionByPathName(side_nav_links, location.pathname);
	const tabsData = linksData?.page_nav_links.find((link: NavLinkProps) => link.path_url === location.pathname)?.tabs;

	return selectRow ? (
		<RenderPiousGroupOverviewContainer pathName={type} />
	) : (
		<TabsLayout
			tabs={tabsData || [{ label: 'view' }, { label: 'add' }]}
			onTabChange={handleToggleTab}
			activeTabId={activeIndex}
		>
			{activeIndex === 1 && <RenderPiousGroupTables />}
		</TabsLayout>
	);
};

export default PiousGroupGenericPage;
