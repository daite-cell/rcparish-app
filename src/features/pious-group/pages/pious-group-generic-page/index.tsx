import { DynamicDataTable, TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import { getSectionByPathname } from '@/utils/getSectionByPathName';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PiousGroupGenericPage = () => {
	const location = useLocation();
	const [activeIndex, setActiveIndex] = useState(1);
	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};
	const linksData = getSectionByPathname(side_nav_links, location.pathname);
	const tabsData = linksData?.page_nav_links.find((link) => link.path_url === location.pathname)?.tabs;
	type TableRowData = {
		sub_station: string;
		date: string;
		timing: string;
		title: string;
		country: string;
	};
	const handleEdit = (row: TableRowData): void => {
		console.warn('Edit clicked:', row);
	};

	const handleDelete = (row: TableRowData): void => {
		console.warn('Delete clicked:', row);
	};

	const handleView = (row: TableRowData): void => {
		console.warn('View clicked:', row);
	};

	return (
		<TabsLayout
			onTabChange={handleToggleTab}
			activeTabId={activeIndex}
			tabs={tabsData || [{ label: 'view' }, { label: 'add' }]}
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
