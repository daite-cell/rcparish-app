import { DisplayImage, TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import { getSectionByPathName } from '@/utils/getSectionByPathName';
import { useRouteName } from '@/utils/getRouteName';
import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import type { NavLinkProps } from '@/types';
import {
	FormsContainer,
	PresentParishDetails,
	RenderParishMemberOverviewContainer,
	RenderParishTablesContainer,
} from '../../components';
import { useStore } from '@/store/store';

const ParishGenericPage = () => {
	const location = useLocation();
	const pathName = useRouteName('type');
	const [activeIndex, setActiveIndex] = useState(0);
	const { selectRow, editRow } = useStore();

	const linksData = getSectionByPathName(side_nav_links, location.pathname);
	const tabsData = linksData?.page_nav_links.find((link: NavLinkProps) => link.path_url === location.pathname)?.tabs;

	const defaultTabs = useMemo(() => [{ label: 'view' }, { label: 'add' }], []);
	const tabs = tabsData ?? defaultTabs;

	useEffect(() => {
		if (!tabsData) {
			setActiveIndex(0);
			return;
		}
		const viewIndex = tabsData.findIndex((tab) => tab.label?.toLowerCase() === 'view');
		setActiveIndex(viewIndex !== -1 ? viewIndex : 0);
	}, [tabsData]);

	if (pathName === 'present_parish_priest') return <PresentParishDetails />;

	if (selectRow || editRow) return <RenderParishMemberOverviewContainer />;

	const renderTabContent = (label: string | undefined) => {
		switch (label?.toLowerCase()) {
			case 'view':
				if (pathName === 'parish_history' || pathName === 'patron_saint') {
					return <DisplayImage image="" />;
				}
				return <RenderParishTablesContainer />;

			case 'add':
				return <FormsContainer />;

			default:
				return null;
		}
	};

	return (
		<TabsLayout
			hasPageHeading={tabs[activeIndex]?.label?.toLowerCase() === 'view'}
			tabs={tabs}
			onTabChange={setActiveIndex}
			activeTabId={activeIndex}
		>
			{renderTabContent(tabs[activeIndex]?.label)}
		</TabsLayout>
	);
};

export default ParishGenericPage;
