import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GenericMembersInFamilesOverview, PriorDignitariesContainer, TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import type { NavLinkProps, PriestDetailsProps } from '@/types';
import { getSectionByPathName } from '@/utils/getSectionByPathName';
import { RenderDioceseOverviewContainer, RenderDioceseTablesContainer } from '../../components';
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
	const { selectRow, selectPriorRow } = useStore();

	const type = useRouteName('type');

	const priestsSectionData = getPriestsSectionData(priestData as PriestDetailsProps);

	const linksData = getSectionByPathName(side_nav_links, location.pathname);
	const tabsData = linksData?.page_nav_links.find((link: NavLinkProps) => link.path_url === location.pathname)?.tabs;

	const defaultTabIndex = useMemo(() => {
		if (!tabsData) return 0;
		const viewIndex = tabsData.findIndex((tab) => tab.label === 'view');
		return viewIndex !== -1 ? viewIndex : 0;
	}, [tabsData]);

	const [activeIndex, setActiveIndex] = useState(defaultTabIndex);

	const handleToggleTab = (index: number) => {
		setActiveIndex(index);
	};

	if (selectPriorRow) {
		return <PriorDignitariesContainer />;
	}
	if (selectRow) {
		return <RenderDioceseOverviewContainer />;
	}

	return (
		<TabsLayout
			tabs={tabsData || [{ label: 'view' }, { label: 'add' }]}
			onTabChange={handleToggleTab}
			activeTabId={activeIndex}
		>
			{type === 'bishop' ? (
				<GenericMembersInFamilesOverview
					isFamilyType={false}
					showImage={true}
					userName={(priestData as { name?: string })?.name || ''}
					sectionData={priestsSectionData}
				/>
			) : (
				(tabsData?.[activeIndex]?.label === 'view' || tabsData?.[activeIndex]?.label === 'print') && (
					<RenderDioceseTablesContainer />
				)
			)}
		</TabsLayout>
	);
};

export default DioceseGenericPage;
