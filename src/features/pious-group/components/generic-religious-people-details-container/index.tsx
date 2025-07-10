import { GenericCouncilMemberDetails } from '@/components';
import { useStore } from '@/store/store';
import { useRouteName } from '@/utils/getRouteName';
import {
	getParishCouncilSectionData,
	getAnbiamSectionData,
	getAnbiamInchargeSectionData,
	getAssociationInchargeSectionData,
} from '@/features/pious-group/columns-sections';
import {
	type ParishCouncilMemberDetailsProps,
	type AnbiamCouncilDataProps,
	type AnbiamInchargeDataProps,
	type AssociationCouncilMemberProps,
} from '@/types';
import React from 'react';

const CouncilMemberDetailsContainer = () => {
	const type = useRouteName('type');
	const { selectRow } = useStore();

	const getSectionData = React.useCallback(() => {
		switch (type) {
			case 'parish_council_members':
				return getParishCouncilSectionData(selectRow as ParishCouncilMemberDetailsProps);
			case 'anbiams':
			case 'associations_club':
				return getAnbiamSectionData(selectRow as AnbiamCouncilDataProps);
			case 'anbiam_incharge':
				return getAnbiamInchargeSectionData(selectRow as AnbiamInchargeDataProps);
			case 'associations_incharge':
				return getAssociationInchargeSectionData(selectRow as AssociationCouncilMemberProps);
			default:
				return [];
		}
	}, [selectRow, type]);

	return (
		<GenericCouncilMemberDetails
			userName={(selectRow as { name?: string })?.name || ''}
			sectionData={getSectionData()}
		/>
	);
};

export default CouncilMemberDetailsContainer;
