import { GenericFamilesDetailsOverview, GenericPeopleDetailsOverview } from '@/components';
import { parish_council_pages } from '@/features/pious-group/data';
import OverviewTabsLayout from '@/layouts/overview-tabs-layout';
import CouncilMemberDetailsContainer from '../generic-religious-people-details-container';
import GenericMembersInFamilesOverviewContainer from '../generic-members-in-familes-overview-container';
import { memo } from 'react';
import { useStore } from '@/store/store';
import type { ReligiousPersonProps } from '@/types';
import { getReligiousPeopleSectionData } from '../../columns-sections';

const RenderPiousGroupOverviewContainer = memo(({ pathName }: { pathName: string | number | undefined }) => {
	const { selectRow } = useStore();
	const componentMap = {
		families: {
			view: <GenericFamilesDetailsOverview />,
			form: <h1>Families Form</h1>,
		},
		family_members: {
			view: <GenericMembersInFamilesOverviewContainer />,
			form: <h1>Family Members Form</h1>,
		},
		priest_nun_parish: {
			view: <GenericMembersInFamilesOverviewContainer />,
			form: <h1>Priest Nun Form</h1>,
		},
		religious_people_parish: {
			view: (
				<GenericPeopleDetailsOverview
					userName={(selectRow as { name?: string })?.name || ''}
					sectionData={getReligiousPeopleSectionData(selectRow as ReligiousPersonProps)}
				/>
			),
			form: <h1>Religious Form</h1>,
		},

		...Object.fromEntries(
			parish_council_pages.map((p) => [
				p,
				{
					view: <CouncilMemberDetailsContainer />,
					form: <h1 className="text-red-600">Parish Council Forms will be added soon .........</h1>,
				},
			])
		),
	};
	return <OverviewTabsLayout tabs={[]} pathName={pathName} componentMap={componentMap} />;
});

export default RenderPiousGroupOverviewContainer;
