import { GenericCouncilMemberDetails } from '@/components';
import { useStore } from '@/store/store';
import type { CongregationInstitutionType, ConventDetailsTypeProps } from '@/types';
import { useRouteName } from '@/utils/getRouteName';
import { useCallback } from 'react';
import { getCommunitiesSectionData, getInstitutionSectionData } from '../../columns-section';

const RenderHouseOverview = () => {
	const type = useRouteName('type');
	const { selectRow } = useStore();
	const getSectionData = useCallback(() => {
		switch (type) {
			case 'institutions':
				return getInstitutionSectionData(selectRow as CongregationInstitutionType);
			case 'communities':
				return getCommunitiesSectionData(selectRow as ConventDetailsTypeProps);
			default:
				return [];
		}
	}, [selectRow, type]);
	return (
		<GenericCouncilMemberDetails
			userName={(selectRow as { name?: string })?.name || (selectRow as { conventName?: string })?.conventName || ''}
			sectionData={getSectionData()}
		/>
	);
};

export default RenderHouseOverview;
