import { PriorDignitariesContainer, TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import type { NavLinkProps } from '@/types';
import { getSectionByPathName } from '@/utils/getSectionByPathName';
import { useState } from 'react';
import { useStore } from '@/store/store';
import { RenderPiousGroupOverviewContainer, RenderPiousGroupTables } from '../../components';
import { usePathName } from '@/utils/getPathName';

const PiousGroupGenericPage = () => {
	const [activeIndex, setActiveIndex] = useState(1);

	const pathName = usePathName();
	const { selectRow, selectFamilyCardRow, selectPriorRow } = useStore();
	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	const linksData = getSectionByPathName(side_nav_links, pathName);
	const tabsData = linksData?.page_nav_links.find((link: NavLinkProps) => link.path_url === pathName)?.tabs;

	if (selectPriorRow) {
		return <PriorDignitariesContainer />;
	}

	if (selectRow || selectFamilyCardRow) {
		return <RenderPiousGroupOverviewContainer pathName={pathName} />;
	}

	return (
		<TabsLayout
			tabs={tabsData || [{ label: 'view' }, { label: 'add' }]}
			onTabChange={handleToggleTab}
			activeTabId={activeIndex}
		>
			{activeIndex === 1 && <RenderPiousGroupTables />}
		</TabsLayout>
	);
};

export default PiousGroupGenericPage;
