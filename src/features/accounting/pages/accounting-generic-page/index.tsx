import { TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import type { NavLinkProps } from '@/types';
import { getSectionByPathName } from '@/utils/getSectionByPathName';
import { useState } from 'react';
import { useStore } from '@/store/store';
import { RenderAccountingMemberOverviewContainer, RenderAccountingTableContainer } from '../../components';
import { usePathName } from '@/utils/getPathName';

const AccountingGenericPage = () => {
	const pathName = usePathName();
	const [activeIndex, setActiveIndex] = useState(0);
	const { selectRow } = useStore();

	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	const linksData = getSectionByPathName(side_nav_links, pathName);
	const tabsData = linksData?.page_nav_links.find((link: NavLinkProps) => link.path_url === pathName)?.tabs;

	if (selectRow) {
		return <RenderAccountingMemberOverviewContainer />;
	}
	return (
		<TabsLayout
			onTabChange={handleToggleTab}
			activeTabId={activeIndex}
			tabs={tabsData || [{ label: 'view' }, { label: 'add' }]}
		>
			{activeIndex === 0 ? <RenderAccountingTableContainer /> : <h1>form will be added</h1>}
		</TabsLayout>
	);
};

export default AccountingGenericPage;
