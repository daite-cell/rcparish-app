import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GenericMembersInFamilesOverview, PriorDignitariesContainer, TabsLayout } from '@/components';
import { side_nav_links } from '@/data/side-navbar-content';
import type { NavLinkProps, PriestDetailsProps } from '@/types';
import { getSectionByPathName } from '@/utils/getSectionByPathName';
import {
	FormsContainer,
	RenderDioceseOverviewContainer,
	RenderDioceseTablesContainer,
	RenderMainFormContainer,
} from '../../components';
import { useStore } from '@/store/store';
import { useRouteName } from '@/utils/getRouteName';
import { getPriestsSectionData } from '../../columns-section';
import { diocesePriorColumns } from '../../columns';
import get_college_consulters_total_dignitaries from '../../data/get_college_consulters_total_dignitaries.json';
import get_committees_dignitaries from '../../data/get_committees_dignitaries.json';
import get_priest_list from '../../data/get_priest_list.json';

const priestData = {
	id: 'VDP0001',
	type: 'Diocese',
	imageUrl: '/images/admin.png',
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

	if (selectPriorRow)
		return (
			<PriorDignitariesContainer
				customColumns={diocesePriorColumns}
				enableHeading={true}
				data={get_committees_dignitaries.committees_dignitaries}
			/>
		);
	if (selectRow || editRow) return <RenderDioceseOverviewContainer />;

	const priestsSectionData = getPriestsSectionData(priestData as PriestDetailsProps);

	const renderTabContent = (label: string | undefined) => {
		switch (label?.toLowerCase()) {
			case 'view':
			case 'print':
				return type === 'bishop' ? (
					<>
						<GenericMembersInFamilesOverview
							isFamilyType={false}
							showImage={true}
							userName={(priestData as { name?: string })?.name || ''}
							sectionData={priestsSectionData}
							enableRecordTable={true}
							recordsData={get_priest_list}
							visibleSections={['SERVICE RECORD', 'SACRED STUDIES']}
						/>
					</>
				) : (
					<RenderDioceseTablesContainer />
				);
			case 'add':
				return <FormsContainer />;
			case 'edit':
				return <RenderMainFormContainer />;
			case 'retired / emeritus bishops':
				return (
					<PriorDignitariesContainer
						enableCloseButton={false}
						useTabsLayout={false}
						customColumns={diocesePriorColumns}
						enableHeading={true}
						data={get_college_consulters_total_dignitaries.college_consultors_dignitaries}
					/>
				);
			case 'prior dignitaries':
				return (
					<PriorDignitariesContainer
						enableCloseButton={false}
						useTabsLayout={false}
						customColumns={diocesePriorColumns}
						enableHeading={true}
						data={get_college_consulters_total_dignitaries.college_consultors_dignitaries}
					/>
				);
			default:
				return null;
		}
	};

	return (
		<TabsLayout
			hasPageHeading={tabsData?.[activeIndex]?.label?.toLowerCase() === 'view'}
			tabs={tabsData || [{ label: 'view' }, { label: 'add' }]}
			onTabChange={setActiveIndex}
			activeTabId={activeIndex}
		>
			{renderTabContent(tabsData?.[activeIndex]?.label)}
		</TabsLayout>
	);
};

export default DioceseGenericPage;
