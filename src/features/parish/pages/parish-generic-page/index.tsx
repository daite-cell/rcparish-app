import { DisplayImage, DynamicDataTable, HistoryForm, TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import { getSectionByPathName } from '@/utils/getSectionByPathName';
import { useRouteName } from '@/utils/getRouteName';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import type { NavLinkProps } from '@/types';

const ParishGenericPage = () => {
	const location = useLocation();
	const pathName = useRouteName('type');
	const [activeIndex, setActiveIndex] = useState(0);
	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	const linksData = getSectionByPathName(side_nav_links, location.pathname);
	const tabsData = linksData?.page_nav_links.find((link: NavLinkProps) => link.path_url === location.pathname)?.tabs;

	return (
		<>
			<TabsLayout
				onTabChange={handleToggleTab}
				activeTabId={activeIndex}
				tabs={tabsData || [{ label: 'view' }, { label: 'add' }]}
			>
				<div className="">
					{['parish_history', 'patron_saint'].includes(pathName as string) && (
						<>{activeIndex == 0 ? <DisplayImage image="" /> : <HistoryForm />} </>
					)}
				</div>
				<div className="">
					{['former_parish_priest', 'sub_stations'].includes(pathName as string) && (
						<>
							{activeIndex == 0 ? (
								<DynamicDataTable
									tableId={pathName === 'former_parish_priest' ? 'former_parish_priest' : 'sub_stations'}
								/>
							) : (
								<h1>table</h1>
							)}
						</>
					)}
				</div>
			</TabsLayout>
		</>
	);
};

export default ParishGenericPage;
