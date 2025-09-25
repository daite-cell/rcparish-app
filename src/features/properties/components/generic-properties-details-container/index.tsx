import { GenericCouncilMemberDetails } from '@/components';
import { useStore } from '@/store/store';
import { useRouteName } from '@/utils/getRouteName';
import { useCallback } from 'react';
import {
	getChurchInventorySectionData,
	getLandPropertiesSectionData,
	getOtherInventorySectionData,
	getRentDetailsSectionData,
} from '../../columns-section';
import type { ChurchInventoryEntry, LandRegistrationEntry, OtherInventoryEntry, RentPropertyEntry } from '@/types';
import { extractUserName } from '@/utils/extractUserName';
const GenericPropertiesDetailsContainer = () => {
	const type = useRouteName('type');
	const { selectRow } = useStore();

	const userName = extractUserName(selectRow as Record<string, unknown>);

	const getSectionData = useCallback(() => {
		switch (type) {
			case 'rent_details':
				return getRentDetailsSectionData(selectRow as RentPropertyEntry);

			case 'land_properties':
				return getLandPropertiesSectionData(selectRow as LandRegistrationEntry);
			case 'church_inventory':
				return getChurchInventorySectionData(selectRow as ChurchInventoryEntry);
			case 'other_inventory':
				return getOtherInventorySectionData(selectRow as OtherInventoryEntry);
			default:
				return [];
		}
	}, [selectRow, type]);
	return <GenericCouncilMemberDetails userName={userName} sectionData={getSectionData()} />;
};

export default GenericPropertiesDetailsContainer;
