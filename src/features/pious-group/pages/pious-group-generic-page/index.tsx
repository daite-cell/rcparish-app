import { useState, useMemo } from 'react';
import { DynamicDataTable, TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import type { NavLinkProps } from '@/types';
import { getSectionByPathName } from '@/utils/getSectionByPathName';
import { useLocation } from 'react-router-dom';
import { PriorityDignitariesTable } from '../../components';
import { useStore } from '@/store/store';
import { parishCouncilMembers } from '../../data';

const PiousGroupGenericPage = () => {
	const location = useLocation();
	const [activeIndex, setActiveIndex] = useState(0);

	const rowId = useStore((state) => state.rowId);
	console.warn(rowId);

	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	const linksData = useMemo(() => getSectionByPathName(side_nav_links, location.pathname), [location.pathname]);
	const tabsData = useMemo(
		() => linksData?.page_nav_links.find((link: NavLinkProps) => link.path_url === location.pathname)?.tabs || [],
		[linksData, location.pathname]
	);

	return (
		<>
			<TabsLayout
				hasPageHeading={rowId ? false : true}
				onTabChange={handleToggleTab}
				activeTabId={activeIndex}
				tabs={rowId ? [] : tabsData || [{ label: 'view' }, { label: 'add' }]}
			>
				{rowId ? <PriorityDignitariesTable data={parishCouncilMembers} /> : activeIndex === 1 && <DynamicDataTable />}
			</TabsLayout>
		</>
	);
};

export default PiousGroupGenericPage;
