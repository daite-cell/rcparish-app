import { GenericCouncilMemberDetails } from '@/components';
import { useStore } from '@/store/store';
import type { CongregationInstitutionType, ConventDetailsTypeProps, VocationalInstitutionType } from '@/types';
import { useRouteName } from '@/utils/getRouteName';
import { useCallback } from 'react';
import { getCommunitiesSectionData, getInstitutionSectionData, getVocationalSectionData } from '../../columns-section';
import { getWorkingMembersDataColumns } from '../../columns';

const RenderHouseOverview = () => {
	const type = useRouteName('type');
	const { selectRow } = useStore();

	const membersTable = [
		{
			title: 'Working Members',
			columns: getWorkingMembersDataColumns(),
			data: [{ name: 'Peter', designation: 'Treasurer' }],
		},
	];

	const getSectionData = useCallback(() => {
		switch (type) {
			case 'institutions':
				return getInstitutionSectionData(selectRow as CongregationInstitutionType);
			case 'communities':
				return getCommunitiesSectionData(selectRow as ConventDetailsTypeProps);
			default:
				return getVocationalSectionData(selectRow as VocationalInstitutionType);
		}
	}, [selectRow, type]);

	return (
		<GenericCouncilMemberDetails
			userName={(selectRow as { name?: string })?.name || (selectRow as { conventName?: string })?.conventName || ''}
			sectionData={getSectionData()}
			enableMembersTable={true}
			membersTables={membersTable}
		/>
	);
};

export default RenderHouseOverview;
