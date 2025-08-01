import { useStore } from '@/store/store';
import { useRouteName } from '@/utils/getRouteName';
import { getFamilesSectionData, getSonsAndDaughtersSectionData } from '../../columns-sections';
import { GenericMembersInFamilesOverview } from '@/components';
import type { MembersInParishFamilyProps, ParishSonsAndDaughtersProps } from '@/types';
import { useMemo } from 'react';
import { extractUserName } from '@/utils/extractUserName';

const GenericMembersInFamilesOverviewContainer = () => {
	const type = useRouteName('type');
	const selectRow = useStore((state) => state.selectRow);

	const userName = extractUserName(selectRow as Record<string, unknown>);
	const sectionData = useMemo(() => {
		if (type === 'family_members') {
			return getFamilesSectionData(selectRow as MembersInParishFamilyProps);
		}

		if (type === 'priest_nun_parish') {
			return getSonsAndDaughtersSectionData(selectRow as ParishSonsAndDaughtersProps);
		}

		return [];
	}, [selectRow, type]);

	return <GenericMembersInFamilesOverview userName={userName} sectionData={sectionData} />;
};

export default GenericMembersInFamilesOverviewContainer;
