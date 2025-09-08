import { GenericCouncilMemberDetails } from '@/components';
import { useStore } from '@/store/store';
import { useRouteName } from '@/utils/getRouteName';
import {
	getParishCouncilSectionData,
	getAnbiamSectionData,
	getAnbiamInchargeSectionData,
	getAssociationInchargeSectionData,
	getAssociationClubSectionData,
} from '@/features/pious-group/columns-sections';
import {
	type ParishCouncilMemberDetailsProps,
	type AnbiamCouncilDataProps,
	type AnbiamInchargeDataProps,
	type AssociationCouncilMemberProps,
	type ParishAssociationClubProps,
} from '@/types';
import React from 'react';
import { extractUserName } from '@/utils/extractUserName';

const CouncilMemberDetailsContainer = () => {
	const type = useRouteName('type');
	const { selectRow } = useStore();

	const getSectionData = React.useCallback(() => {
		switch (type) {
			case 'parish_council_members':
				return getParishCouncilSectionData(selectRow as ParishCouncilMemberDetailsProps);
			case 'anbiams':
				return getAnbiamSectionData(selectRow as AnbiamCouncilDataProps);
			case 'associations_club':
				return getAssociationClubSectionData(selectRow as ParishAssociationClubProps);
			case 'anbiam_incharge':
				return getAnbiamInchargeSectionData(selectRow as AnbiamInchargeDataProps);
			case 'associations_incharge':
				return getAssociationInchargeSectionData(selectRow as AssociationCouncilMemberProps);
			default:
				return [];
		}
	}, [selectRow, type]);
	const userName = extractUserName(selectRow as Record<string, unknown>);

	return <GenericCouncilMemberDetails userName={userName} sectionData={getSectionData()} />;
};

export default CouncilMemberDetailsContainer;
