import { TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import type { NavLinkProps } from '@/types';

import { useRouteName } from '@/utils/getRouteName';
import { getSectionByPathName } from '@/utils/getSectionByPathName';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TableWithFileUpload } from '../../components';

const DioceseGenericPage = () => {
	const location = useLocation();
	const [activeIndex, setActiveIndex] = useState(0);
	const type = useRouteName('type');
	console.warn(type);
	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	const linksData = getSectionByPathName(side_nav_links, location.pathname);
	const tabsData = linksData?.page_nav_links.find((link: NavLinkProps) => link.path_url === location.pathname)?.tabs;

	return (
		<>
			<TabsLayout
				onTabChange={handleToggleTab}
				activeTabId={activeIndex}
				tabs={tabsData || [{ label: 'view' }, { label: 'add' }]}
			>
				{type === 'retired_bishops' ? (
					<TableWithFileUpload />
				) : (
					<h1 className="text-center text-red-600">dynamic table will be added ...</h1>
				)}
			</TabsLayout>
		</>
	);
};

export default DioceseGenericPage;
