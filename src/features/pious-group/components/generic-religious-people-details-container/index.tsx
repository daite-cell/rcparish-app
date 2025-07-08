import { GenericCouncilMemberDetails } from '@/components';
import { useStore } from '@/store/store';
import { useRouteName } from '@/utils/getRouteName';
import {
	getParishCouncilSectionData,
	getAnbiamSectionData,
	getAnbiamInchargeSectionData,
	getAssociationInchargeSectionData,
} from '@/features/pious-group/columns-sections';
import type {
	ParishCouncilMemberDetailsProps,
	AnbiamCouncilDataProps,
	AnbiamInchargeDataProps,
	AssociationCouncilMemberProps,
} from '@/types';

const CouncilMemberDetailsContainer = () => {
	const type = useRouteName('type');

	const parishCouncilSelectRow = useStore((state) => state.selectRow) as ParishCouncilMemberDetailsProps;
	const anbiamSelectRow = useStore((state) => state.selectRow) as AnbiamCouncilDataProps;
	const anbiamInchargeSelectRow = useStore((state) => state.selectRow) as AnbiamInchargeDataProps;
	const associationInchargeSelectRow = useStore((state) => state.selectRow) as AssociationCouncilMemberProps;

	return (
		<>
			{type === 'parish_council_members' && (
				<GenericCouncilMemberDetails
					userName={parishCouncilSelectRow.name || ''}
					sectionData={getParishCouncilSectionData(parishCouncilSelectRow)}
				/>
			)}

			{(type === 'anbiams' || type === 'associations_club') && (
				<GenericCouncilMemberDetails
					userName={anbiamSelectRow.anbiamName || ''}
					sectionData={getAnbiamSectionData(anbiamSelectRow)}
				/>
			)}

			{type === 'anbiam_incharge' && (
				<GenericCouncilMemberDetails
					userName={anbiamInchargeSelectRow.name || ''}
					sectionData={getAnbiamInchargeSectionData(anbiamInchargeSelectRow)}
				/>
			)}

			{type === 'associations_incharge' && (
				<GenericCouncilMemberDetails
					userName={associationInchargeSelectRow.name || ''}
					sectionData={getAssociationInchargeSectionData(associationInchargeSelectRow)}
				/>
			)}
		</>
	);
};

export default CouncilMemberDetailsContainer;
