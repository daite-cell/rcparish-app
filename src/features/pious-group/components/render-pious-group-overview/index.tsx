import { GenericFamilesDetailsOverview } from '@/components';
import OverviewTabsLayout from '@/layouts/overview-tabs-layout';
import CouncilMemberDetailsContainer from '../generic-religious-people-details-container';
import GenericMembersInFamilesOverviewContainer from '../generic-members-in-familes-overview-container';
import { memo } from 'react';
import { useStore } from '@/store/store';
import {
	AnbiamInchargeForm,
	AnbiamsForm,
	AssociationsClubForm,
	AssociationsInchargeForm,
	FamiliesForm,
	FamilyMembersForm,
	ParishCouncilMembersForm,
	PriestNunParishEditForm,
	ReligiousParishCouncilMembersForm,
} from '../../forms';
import GenericPeopleDetailOverviewContainer from '../generic-people-detail-overview-container';
import { getFamilesMembersSectionData } from '../../columns-sections';
import type { FamilyDataProps } from '@/types';
import { extractUserName } from '@/utils/extractUserName';

const RenderPiousGroupOverviewContainer = memo(({ pathName }: { pathName: string | number | undefined }) => {
	const { selectRow, selectFamilyCardRow, editRow } = useStore();

	const familyRow: FamilyDataProps | undefined =
		(selectFamilyCardRow as FamilyDataProps | undefined) ?? (selectRow as FamilyDataProps | undefined);

	const tabs = [{ label: 'profile' }, { label: 'edit' }, { label: 'back' }];
	const rowData = selectFamilyCardRow || selectRow;
	const componentMap = {
		families: {
			view: familyRow ? (
				<GenericFamilesDetailsOverview
					userName={extractUserName(rowData as Record<string, unknown>)}
					sectionData={getFamilesMembersSectionData(familyRow)}
				/>
			) : (
				<div className="p-4 text-gray-500">Select a family to view details</div>
			),
			form: <FamiliesForm />,
		},
		family_members: {
			view: <GenericMembersInFamilesOverviewContainer />,
			form: <FamilyMembersForm />,
		},
		priest_nun_parish: {
			view: <GenericMembersInFamilesOverviewContainer />,
			form: <PriestNunParishEditForm />,
		},
		religious_people_parish: {
			view: <GenericPeopleDetailOverviewContainer />,
			form: <ReligiousParishCouncilMembersForm />,
		},
		parish_council_members: {
			view: <CouncilMemberDetailsContainer />,
			form: <ParishCouncilMembersForm />,
		},
		anbiams: {
			view: <CouncilMemberDetailsContainer />,
			form: <AnbiamsForm />,
		},
		associations_club: {
			view: <CouncilMemberDetailsContainer />,
			form: <AssociationsClubForm />,
		},
		anbiam_incharge: {
			view: <CouncilMemberDetailsContainer />,
			form: <AnbiamInchargeForm />,
		},
		associations_incharge: {
			view: <CouncilMemberDetailsContainer />,
			form: <AssociationsInchargeForm />,
		},
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
