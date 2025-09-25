import { TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import { useStore } from '@/store/store';
import type { NavLinkProps } from '@/types';
import { getSectionByPathName } from '@/utils/getSectionByPathName';
import { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { RenderFormsContainer, RenderPrePropertiesTables, RenderPropertiesOverviewContainer } from '../../components';

const PropertiesGenericPage = () => {
	const location = useLocation();
	const { selectRow, editRow } = useStore();
	const [activeIndex, setActiveIndex] = useState(0);

	const linksData = getSectionByPathName(side_nav_links, location.pathname);
	const tabsData = linksData?.page_nav_links.find((link: NavLinkProps) => link.path_url === location.pathname)?.tabs;

	useMemo(() => {
		if (!tabsData) return;
		const viewIndex = tabsData.findIndex((tab) => tab.label.toLowerCase() === 'view');
		setActiveIndex(viewIndex !== -1 ? viewIndex : 0);
	}, [tabsData]);

	if (selectRow || editRow) {
		return <RenderPropertiesOverviewContainer />;
	}

	const renderTabContent = (label: string | undefined) => {
		switch (label?.toLowerCase()) {
			case 'view':
			case 'print':
				return <RenderPrePropertiesTables />;
			case 'add':
				return <RenderFormsContainer />;
			case 'edit':
				return <RenderFormsContainer />;
			default:
				return null;
		}
	};

	return (
		<TabsLayout
			hasPageHeading={tabsData?.[activeIndex]?.label?.toLowerCase() === 'view'}
			tabs={tabsData || [{ label: 'view' }, { label: 'add' }]}
			onTabChange={setActiveIndex}
			activeTabId={activeIndex}
		>
			{renderTabContent(tabsData?.[activeIndex]?.label)}
		</TabsLayout>
	);
};

export default PropertiesGenericPage;
