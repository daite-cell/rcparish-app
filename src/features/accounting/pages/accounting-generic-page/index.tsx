import { useState } from 'react';
import { TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import type { NavLinkProps } from '@/types';
import { getSectionByPathName } from '@/utils/getSectionByPathName';
import { useStore } from '@/store/store';
import {
	PaymentDetailsTable,
	RenderAccountingMemberOverviewContainer,
	RenderAccountingTableContainer,
	RenderFormsContainer,
} from '../../components';
import { usePathName } from '@/utils/getPathName';

const AccountingGenericPage = () => {
	const pathName = usePathName();
	const { selectRow, editRow } = useStore();

	const linksData = getSectionByPathName(side_nav_links, pathName);
	const tabsData = linksData?.page_nav_links.find((link: NavLinkProps) => link.path_url === pathName)?.tabs || [
		{ label: 'View' },
		{ label: 'Add' },
	];

	const [activeIndex, setActiveIndex] = useState(() => {
		const viewIndex = tabsData.findIndex((tab) => tab.label.toLowerCase() === 'view');
		return viewIndex !== -1 ? viewIndex : 0;
	});

	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	if (selectRow || editRow) {
		return <RenderAccountingMemberOverviewContainer />;
	}

	const activeTabLabel = tabsData[activeIndex]?.label.toLowerCase();

	let tabContent: React.ReactNode;
	if (activeTabLabel === 'view') {
		tabContent = <RenderAccountingTableContainer />;
	} else if (activeTabLabel === 'payment details') {
		tabContent = <PaymentDetailsTable label="payment details" />;
	} else if (activeTabLabel === 'rent payment details') {
		tabContent = <PaymentDetailsTable label="rent payment details" />;
	} else if (['add', 'form'].includes(activeTabLabel)) {
		tabContent = <RenderFormsContainer />;
	} else {
		tabContent = <h1>No tab content available</h1>;
	}

	return (
		<TabsLayout
			hasPageHeading={
				activeTabLabel === 'payment details' || activeTabLabel === 'rent payment details' || activeTabLabel === 'add'
					? false
					: true
			}
			onTabChange={handleToggleTab}
			activeTabId={activeIndex}
			tabs={tabsData}
		>
			{tabContent}
		</TabsLayout>
	);
};

export default AccountingGenericPage;
