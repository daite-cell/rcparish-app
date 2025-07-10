import { GenericCouncilMemberDetails } from '@/components';
import { useRouteName } from '@/utils/getRouteName';
import { useStore } from '@/store/store';
import { useCallback } from 'react';
import { getRegisterSectionData } from '../../columns-section';
import { member_overview_pages_with_tables } from '@/features/register/data';
import type { RegisterSectionOverviewProps } from '@/types';

const GenericRegisterPeopleDetailsContainer = () => {
	const type = useRouteName('type');
	const { selectRow } = useStore();

	const getSectionData = useCallback(() => {
		if (member_overview_pages_with_tables.includes(type as string)) {
			return getRegisterSectionData(selectRow as RegisterSectionOverviewProps);
		}
		return [];
	}, [selectRow, type]);

	return (
		<GenericCouncilMemberDetails
			userName={(selectRow as { name?: string })?.name || ''}
			sectionData={getSectionData()}
		/>
	);
};

export default GenericRegisterPeopleDetailsContainer;
