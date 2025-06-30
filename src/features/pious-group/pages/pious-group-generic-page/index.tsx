import { DynamicDataTable, RenderOverViewComponent, TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import type { NavLinkProps, TableRowData } from '@/types';
import { getSectionByPathName } from '@/utils/getSectionByPathName';
import { useLocation } from 'react-router-dom';
import { useRouteName } from '@/utils/getRouteName';
import { useState } from 'react';
import { useStore } from '@/store/store';

const PiousGroupGenericPage = () => {
	const location = useLocation();
	const [activeIndex, setActiveIndex] = useState(1);
	const type = useRouteName('type');
	const { selectRow } = useStore();
	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	const linksData = getSectionByPathName(side_nav_links, location.pathname);
	const tabsData = linksData?.page_nav_links.find((link: NavLinkProps) => link.path_url === location.pathname)?.tabs;

	const handleEdit = (row: TableRowData): void => {
		console.warn('Edit clicked:', row);
	};

	const handleDelete = (row: TableRowData): void => {
		console.warn('Delete clicked:', row);
	};

	const handleView = (row: TableRowData): void => {
		console.warn('View clicked:', row);
	};

	return selectRow ? (
		<RenderOverViewComponent pathName={type} />
	) : (
		<TabsLayout
			tabs={tabsData || [{ label: 'view' }, { label: 'add' }]}
			onTabChange={handleToggleTab}
			activeTabId={activeIndex}
		>
			{activeIndex === 1 && (
				<DynamicDataTable
					includeCheckbox
					includePriorDignitaries
					isDynamic
					enableDateAndLetterSorting
					onEdit={handleEdit}
					onDelete={handleDelete}
					onView={handleView}
					tableId="pious_group"
				/>
			)}
		</TabsLayout>
	);
};

export default PiousGroupGenericPage;
