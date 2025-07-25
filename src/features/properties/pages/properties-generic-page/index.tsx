import { TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import { useStore } from '@/store/store';
import type { NavLinkProps } from '@/types';
import { useRouteName } from '@/utils/getRouteName';
import { getSectionByPathName } from '@/utils/getSectionByPathName';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RenderFormsContainer, RenderPrePropertiesTables, RenderPropertiesOverviewContainer } from '../../components';

const PropertiesGenericPage = () => {
	const location = useLocation();
	const [activeIndex, setActiveIndex] = useState(0);
	const { selectRow } = useStore();

	const type = useRouteName('type');
	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	const linksData = getSectionByPathName(side_nav_links, location.pathname);
	const tabsData = linksData?.page_nav_links.find((link: NavLinkProps) => link.path_url === location.pathname)?.tabs;

	return selectRow ? (
		<RenderPropertiesOverviewContainer pathName={type} />
	) : (
		<TabsLayout
			onTabChange={handleToggleTab}
			activeTabId={activeIndex}
			tabs={tabsData || [{ label: 'view' }, { label: 'add' }]}
		>
			{activeIndex === 0 ? <RenderPrePropertiesTables /> : <RenderFormsContainer />}
		</TabsLayout>
	);
};

export default PropertiesGenericPage;
