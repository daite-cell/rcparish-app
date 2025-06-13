import { TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import { getSectionByPathname } from '@/utils/getSectionByPathname';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ParishGenericPage = () => {
	const location = useLocation();
	const [activeIndex, setActiveIndex] = useState(0);
	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	const linksData = getSectionByPathname(side_nav_links, location.pathname);
	const tabsData = linksData?.page_nav_links.find((link) => link.path_url === location.pathname)?.tabs;

	return (
		<>
			<TabsLayout
				onTabChange={handleToggleTab}
				activeTabId={activeIndex}
				tabs={tabsData || [{ label: 'view' }, { label: 'add' }]}
			>
				<h1 className="text-center text-red-600">dynamic table will be added ...</h1>
			</TabsLayout>
		</>
	);
};

export default ParishGenericPage;
