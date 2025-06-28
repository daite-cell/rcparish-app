import { TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import type { NavLinkProps } from '@/types';
import { getSectionByPathName } from '@/utils/getSectionByPathName';

import { useState } from 'react';
import { AdmittedList, RenderForms } from '../../components';
import { usePathName } from '@/utils/getPathName';
import { useRouteName } from '@/utils/getRouteName';

const CommonPoolGenericPage = () => {
	const pathName = usePathName();
	const type = useRouteName('type');
	const [activeIndex, setActiveIndex] = useState(0);

	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	const linksData = getSectionByPathName(side_nav_links, pathName);
	const tabsData = linksData?.page_nav_links.find((link: NavLinkProps) => link.path_url === pathName)?.tabs;

	return (
		<>
			<TabsLayout hasPageHeading={false} onTabChange={handleToggleTab} activeTabId={activeIndex} tabs={tabsData || []}>
				{type === 'admitted_list' ? (
					<AdmittedList />
				) : (
					activeIndex === 0 && type !== 'admitted_list' && <RenderForms pageName={type as string} />
				)}
				{}
			</TabsLayout>
		</>
	);
};

export default CommonPoolGenericPage;
