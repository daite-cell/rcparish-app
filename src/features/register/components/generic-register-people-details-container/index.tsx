import { GenericCouncilMemberDetails } from '@/components';
import { useRouteName } from '@/utils/getRouteName';
import { useStore } from '@/store/store';
import { useMemo } from 'react';
import {
	getBaptismSectionData,
	getChroniclesSectionData,
	getConfirmationsData,
	getHolyCommunionData,
} from '../../columns-section';
import type {
	BaptismMemberType,
	ChronicleMemberProps,
	ConfirmationRegisteredMemberType,
	HolyCommunionMemberType,
} from '@/types';
import { extractUserName } from '@/utils/extractUserName';

const GenericRegisterPeopleDetailsContainer = () => {
	const type = useRouteName('type');
	const { selectRow } = useStore();
	const userName = selectRow ? extractUserName(selectRow as Record<string, unknown>) : '';

	const sectionData = useMemo(() => {
		switch (type) {
			case 'baptism':
			case 'marriage_registration':
			case 'marriage_proposal':
			case 'chronicles':
				return getChroniclesSectionData(selectRow as ChronicleMemberProps);
			case 'death_register':
				return getBaptismSectionData(selectRow as BaptismMemberType);
			case 'holy_communion':
				return getHolyCommunionData(selectRow as HolyCommunionMemberType);
			case 'confirmations':
				return getConfirmationsData(selectRow as ConfirmationRegisteredMemberType);

			default:
				return [];
		}
	}, [selectRow, type]);

	return <GenericCouncilMemberDetails userName={userName} sectionData={sectionData} />;
};

export default GenericRegisterPeopleDetailsContainer;
