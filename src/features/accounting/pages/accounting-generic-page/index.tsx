import { DynamicDataTable, TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import { priests, type PriestProps } from '@/features/religious-people/data';
import type { NavLinkProps } from '@/types';
import { getSectionByPathName } from '@/utils/getSectionByPathName';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { bishopColumns } from '../../columns';

const AccountingGenericPage = () => {
	const location = useLocation();
	const [activeIndex, setActiveIndex] = useState(0);
	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	const linksData = getSectionByPathName(side_nav_links, location.pathname);
	const tabsData = linksData?.page_nav_links.find((link: NavLinkProps) => link.path_url === location.pathname)?.tabs;
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
					customColumns={bishopColumns}
					wrapText={false}
					data={priests}
					enableDateSorting={true}
					enableLetterSorting={true}
					includeCheckbox
					onView={handleView}
					filterKey="name"
				/>
			</TabsLayout>
		</>
	);
};

export default AccountingGenericPage;
