import { GenericFamilesDetailsOverview } from '@/components';
import { parish_council_pages } from '@/features/pious-group/data';
import OverviewTabsLayout from '@/layouts/overview-tabs-layout';
import CouncilMemberDetailsContainer from '../generic-religious-people-details-container';
import GenericMembersInFamilesOverviewContainer from '../generic-members-in-familes-overview-container';
import { memo } from 'react';
import { useStore } from '@/store/store';
import { FamiliesForm, ParishCouncilMembersForm, ReligiousParishCouncilMembersForm } from '../../forms';
import GenericPeopleDetailOverviewContainer from '../generic-people-detail-overview-container';
import { getFamilesMembersSectionData } from '../../columns-sections';
import type { FamilyDataProps } from '@/types';
import { extractUserName } from '@/utils/extractUserName';

const RenderPiousGroupOverviewContainer = memo(({ pathName }: { pathName: string | number | undefined }) => {
	const { selectRow, selectFamilyCardRow, editRow } = useStore();

	const tabs = [{ label: 'profile' }, { label: 'edit' }, { label: 'back' }];
	const componentMap = {
		families: {
			view: (
				<GenericFamilesDetailsOverview
					userName={
						selectFamilyCardRow
							? extractUserName(selectFamilyCardRow as Record<string, unknown>)
							: extractUserName(selectRow as Record<string, unknown>)
					}
					sectionData={getFamilesMembersSectionData(
						(selectFamilyCardRow as FamilyDataProps) || (selectFamilyCardRow as FamilyDataProps)
					)}
				/>
			),

			form: <FamiliesForm />,
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
			view: <GenericPeopleDetailOverviewContainer />,
			form: <ReligiousParishCouncilMembersForm />,
		},
		parish_council_members: {
			view: <CouncilMemberDetailsContainer />,
			form: <ParishCouncilMembersForm />,
		},
		...Object.fromEntries(
			parish_council_pages.map((p) => [
				p,
				{
					view: <CouncilMemberDetailsContainer />,
					form: <h1>Parish Council Forms will be added soon .........</h1>,
				},
			])
		),
	};

	return (
		<OverviewTabsLayout
			tabs={tabs}
			pathName={pathName}
			componentMap={componentMap}
			defaultTabLabel={editRow ? 'edit' : 'profile'}
		/>
	);
});

export default RenderPiousGroupOverviewContainer;
