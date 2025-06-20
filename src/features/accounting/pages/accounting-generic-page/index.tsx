import { DynamicDataTable, TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import { priests, type PriestProps } from '@/features/religious-people/data';
import { getSectionByPathname } from '@/utils/getSectionByPathName';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const AccountingGenericPage = () => {
	const location = useLocation();
	const [activeIndex, setActiveIndex] = useState(0);
	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	const linksData = getSectionByPathname(side_nav_links, location.pathname);
	const tabsData = linksData?.page_nav_links.find((link) => link.path_url === location.pathname)?.tabs;
	const handleView = (row: PriestProps): void => {
		console.warn('View clicked:', row);
	};

	return (
		<>
			<TabsLayout
				onTabChange={handleToggleTab}
				activeTabId={activeIndex}
				tabs={tabsData || [{ label: 'view' }, { label: 'add' }]}
			>
				<DynamicDataTable
					wrapText={false}
					data={priests}
					enableDateAndLetterSorting={true}
					includeCheckbox
					onView={handleView}
				/>
			</TabsLayout>
		</>
	);
};

export default AccountingGenericPage;
