import { PriorDignitariesContainer, TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import type { NavLinkProps } from '@/types';
import { getSectionByPathName } from '@/utils/getSectionByPathName';
import { useRouteName } from '@/utils/getRouteName';
import { useState } from 'react';
import { useStore } from '@/store/store';
import { RenderPiousGroupOverviewContainer, RenderPiousGroupTables } from '../../components';

const PiousGroupGenericPage = () => {
	const [activeIndex, setActiveIndex] = useState(1);
	const type = useRouteName('type');
	const { selectRow, selectFamilyCardRow, selectPriorRow } = useStore();
	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	const linksData = getSectionByPathName(side_nav_links, type as string);
	const tabsData = linksData?.page_nav_links.find((link: NavLinkProps) => link.path_url === type)?.tabs;

	if (selectPriorRow) {
		return <PriorDignitariesContainer />;
	}

	if (selectRow || selectFamilyCardRow) {
		return <RenderPiousGroupOverviewContainer pathName={type} />;
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
