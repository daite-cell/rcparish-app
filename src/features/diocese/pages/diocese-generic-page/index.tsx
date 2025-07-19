import { PriorDignitariesContainer, TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import type { NavLinkProps } from '@/types';
import { getSectionByPathName } from '@/utils/getSectionByPathName';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RenderDioceseOverviewContainer, RenderDioceseTablesContainer } from '../../components';
import { useStore } from '@/store/store';

const DioceseGenericPage = () => {
	const location = useLocation();
	const [activeIndex, setActiveIndex] = useState(0);
	const { selectRow, selectPriorRow } = useStore();

	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	const linksData = getSectionByPathName(side_nav_links, location.pathname);
	const tabsData = linksData?.page_nav_links.find((link: NavLinkProps) => link.path_url === location.pathname)?.tabs;

	if (selectPriorRow) {
		return <PriorDignitariesContainer />;
	}
	if (selectRow) {
		return <RenderDioceseOverviewContainer />;
	}
	return (
		<TabsLayout
			tabs={tabsData || [{ label: 'view' }, { label: 'add' }]}
			onTabChange={handleToggleTab}
			activeTabId={activeIndex}
		>
			{(tabsData?.[activeIndex]?.label === 'view' || tabsData?.[activeIndex]?.label === 'print') && (
				<RenderDioceseTablesContainer />
			)}
		</TabsLayout>
	);
};

export default DioceseGenericPage;
