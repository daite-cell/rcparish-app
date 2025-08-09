import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GenericMembersInFamilesOverview, PriorDignitariesContainer, TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import type { NavLinkProps, PriestDetailsProps } from '@/types';
import { getSectionByPathName } from '@/utils/getSectionByPathName';
import { FormsContainer, RenderDioceseOverviewContainer, RenderDioceseTablesContainer } from '../../components';
import { useStore } from '@/store/store';
import { useRouteName } from '@/utils/getRouteName';
import { getPriestsSectionData } from '../../columns-section';

const priestData = {
	id: 'VDP0001',
	type: 'Diocese',
	image: '/images/admin.png',
	name: 'Most Rev Fr. Ambrose Picharmuthu',
	position: "Bishop ( Bishop's House )",
	ordinationDate: '1993-03-25',
	dob: '1966-05-03',
	mobile1: '9486424008',
	mobile2: '',
	email: 'rcbishopvellore@gmail.com',
	aadhaar: '',
	village: '',
	address: '',
	status: 'Alive',
	uniqueId: '',
	details: '',
};

const DioceseGenericPage = () => {
	const location = useLocation();
	const { selectRow, selectPriorRow, editRow } = useStore();

	const type = useRouteName('type');
	const [activeIndex, setActiveIndex] = useState(0);

	const linksData = getSectionByPathName(side_nav_links, location.pathname);
	const tabsData = linksData?.page_nav_links.find((link: NavLinkProps) => link.path_url === location.pathname)?.tabs;

	useMemo(() => {
		if (!tabsData) return;
		const viewIndex = tabsData.findIndex((tab) => tab.label.toLowerCase() === 'view');
		setActiveIndex(viewIndex !== -1 ? viewIndex : 0);
	}, [tabsData]);

	if (selectPriorRow) return <PriorDignitariesContainer />;
	if (selectRow || editRow) return <RenderDioceseOverviewContainer />;

	const priestsSectionData = getPriestsSectionData(priestData as PriestDetailsProps);

	const renderTabContent = (label: string | undefined) => {
		switch (label?.toLowerCase()) {
			case 'view':
			case 'print':
				return type === 'bishop' ? (
					<GenericMembersInFamilesOverview
						isFamilyType={false}
						showImage={true}
						userName={(priestData as { name?: string })?.name || ''}
						sectionData={priestsSectionData}
					/>
				) : (
					<RenderDioceseTablesContainer />
				);
			case 'add':
				return <FormsContainer />;
			default:
				return null;
		}
	};

	return (
		<TabsLayout
			hasPageHeading={activeIndex === 0}
			tabs={tabsData || [{ label: 'view' }, { label: 'add' }]}
			onTabChange={setActiveIndex}
			activeTabId={activeIndex}
		>
			{renderTabContent(tabsData?.[activeIndex]?.label)}
		</TabsLayout>
	);
};

export default DioceseGenericPage;
