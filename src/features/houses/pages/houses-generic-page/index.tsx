import { TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import type { NavLinkProps } from '@/types';
import { getSectionByPathName } from '@/utils/getSectionByPathName';
import { useMemo, useState } from 'react';
import {
	HousesInstitutionsListTablesContainer,
	RenderFormsContainer,
	RenderHouseMemberOverviewContainer,
	RenderHousesTableContainer,
} from '../../components';
import { useStore } from '@/store/store';
import { useRouteName } from '@/utils/getRouteName';

import { usePathName } from '@/utils/getPathName';

const HousesGenericPage = () => {
	const location = usePathName();
	const type = useRouteName('type');
	const [activeIndex, setActiveIndex] = useState(0);
	const { selectRow, editRow } = useStore();

	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	const linksData = getSectionByPathName(side_nav_links, location);
	const tabsData = linksData?.page_nav_links.find((link: NavLinkProps) => link.path_url === location)?.tabs;

	useMemo(() => {
		if (!tabsData) return;
		const viewIndex = tabsData.findIndex((tab) => tab.label.toLowerCase() === 'view');
		setActiveIndex(viewIndex !== -1 ? viewIndex : 0);
	}, [tabsData]);

	if (selectRow || editRow) return <RenderHouseMemberOverviewContainer />;

	const renderTabContent = (label: string | undefined) => {
		if (label === 'view') return <RenderHousesTableContainer />;
		if (label === 'add') return <RenderFormsContainer />;
	};
	if (type === 'institutions') {
		return (
			<TabsLayout
				hasPageHeading={tabsData?.[activeIndex]?.label?.toLowerCase() === 'view'}
				tabs={tabsData || [{ label: 'view' }, { label: 'add' }]}
				onTabChange={setActiveIndex}
				activeTabId={activeIndex}
			>
				{activeIndex === 0 ? <HousesInstitutionsListTablesContainer /> : <RenderFormsContainer />}
			</TabsLayout>
		);
	}

	return (
		<TabsLayout
			hasPageHeading={activeIndex === 0}
			onTabChange={handleToggleTab}
			activeTabId={activeIndex}
			tabs={tabsData || [{ label: 'view' }, { label: 'add' }]}
		>
			{renderTabContent(tabsData?.[activeIndex]?.label)}
		</TabsLayout>
	);
};

export default HousesGenericPage;
