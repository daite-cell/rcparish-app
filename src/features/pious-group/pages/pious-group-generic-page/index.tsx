import { lazy, Suspense, useMemo, useState } from 'react';
import { PriorDignitariesContainer, TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import type { NavLinkProps } from '@/types';
import { getSectionByPathName } from '@/utils/getSectionByPathName';
import { useRouteName } from '@/utils/getRouteName';
import { useStore } from '@/store/store';
import {
	AssociationDetailsTable,
	AssociationInchargeDetails,
	FormsContainer,
	RenderPiousGroupOverviewContainer,
} from '../../components';
import { usePathName } from '@/utils/getPathName';
import { CouncilDetailsForm } from '../../forms';

const RenderPiousGroupTables = lazy(() => import('../../components/render-pious-group-tables'));

const PiousGroupGenericPage = () => {
	const type = useRouteName('type');
	const pathName = usePathName();
	const { selectRow, selectFamilyCardRow, selectPriorRow, editRow, selectAssociationRow } = useStore();

	const [activeIndex, setActiveIndex] = useState(0);

	const linksData = getSectionByPathName(side_nav_links, pathName);
	const tabsData = linksData?.page_nav_links.find((link: NavLinkProps) => link.path_url === pathName)?.tabs;

	useMemo(() => {
		if (!tabsData) return;
		const viewIndex = tabsData.findIndex((tab) => tab.label.toLowerCase() === 'view');
		setActiveIndex(viewIndex !== -1 ? viewIndex : 0);
	}, [tabsData]);

	if (selectPriorRow) {
		return <PriorDignitariesContainer />;
	}

	if (selectAssociationRow) {
		return <AssociationInchargeDetails />;
	}
	if (selectRow || selectFamilyCardRow || editRow) {
		return <RenderPiousGroupOverviewContainer pathName={type} />;
	}

	const renderTabContent = (label: string | undefined) => {
		switch (label?.toLowerCase()) {
			case 'view':
				return (
					<Suspense fallback={<div>Loading...</div>}>
						<RenderPiousGroupTables />
					</Suspense>
				);
			case 'add':
				return <FormsContainer />;
			case 'council details':
				return <CouncilDetailsForm />;
			case 'association details':
				return <AssociationDetailsTable />;
			default:
				return null;
		}
	};

	return (
		<TabsLayout tabs={tabsData || []} onTabChange={setActiveIndex} activeTabId={activeIndex}>
			{renderTabContent(tabsData?.[activeIndex]?.label)}
		</TabsLayout>
	);
};

export default PiousGroupGenericPage;
