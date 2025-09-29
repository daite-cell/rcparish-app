import { GenericCouncilMemberDetails } from '@/components';
import { useRouteName } from '@/utils/getRouteName';
import { useStore } from '@/store/store';
import { useMemo } from 'react';
import {
	getBaptismSectionData,
	getChroniclesSectionData,
	getConfirmationsData,
	getDeathRegisterInParishSectionData,
	getHolyCommunionData,
	getMarriageProposalTableTwoSectionData,
	getMarriageRegistrationInDetailsSectionData,
	getMarriageRegistrationSectionData,
} from '../../columns-section';
import type {
	BaptismMemberType,
	ChronicleMemberProps,
	ConfirmationRegisteredMemberType,
	DeathRegisterMemberAsParishType,
	HolyCommunionMemberType,
	MarriageProposalMemberType,
	MarriageProposalTableTwoRecordProps,
	MarriageRegisterMemberAsParishType,
	MarriageRegisterRecordProps,
	MarriageRegistrationInDetails,
} from '@/types';
import { extractUserName } from '@/utils/extractUserName';

const GenericRegisterPeopleDetailsContainer = () => {
	const type = useRouteName('type');
	const { selectRow } = useStore();
	const userName = selectRow ? extractUserName(selectRow as Record<string, unknown>) : '';
	const table_key = (selectRow as { table_key?: string } | undefined)?.table_key;

	const sectionData = useMemo(() => {
		switch (type) {
			case 'chronicles':
				return getChroniclesSectionData(selectRow as ChronicleMemberProps);
			case 'baptism':
				return getBaptismSectionData(selectRow as BaptismMemberType);
			case 'holy_communion':
				return getHolyCommunionData(selectRow as HolyCommunionMemberType);
			case 'confirmations':
				return getConfirmationsData(selectRow as ConfirmationRegisteredMemberType);
			case 'marriage_registration':
				if (table_key === 'table_1')
					return getMarriageRegistrationSectionData(
						selectRow as MarriageRegisterRecordProps | MarriageRegisterRecordProps
					);
				return getMarriageRegistrationInDetailsSectionData(
					selectRow as MarriageRegisterMemberAsParishType | MarriageRegistrationInDetails
				);

			case 'marriage_proposal':
				if (table_key === 'table_1') return [];

				return getMarriageProposalTableTwoSectionData(
					selectRow as MarriageProposalMemberType | MarriageProposalTableTwoRecordProps
				);

			case 'death_register':
				if (table_key === 'table_1') return [];

				return getDeathRegisterInParishSectionData(selectRow as DeathRegisterMemberAsParishType);

			default:
				return [];
		}
	}, [selectRow, type, table_key]);

	return <GenericCouncilMemberDetails userName={userName} sectionData={sectionData} />;
};

export default GenericRegisterPeopleDetailsContainer;
