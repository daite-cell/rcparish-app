import { GenericPeopleDetailsOverview } from '@/components';
import { useStore } from '@/store/store';
import { useRouteName } from '@/utils/getRouteName';
import { useCallback } from 'react';

import { extractUserName } from '@/utils/extractUserName';
import { getFormerParishPriestSectionData, getSubStationsSectionData } from '../../columns-section';
import type { FormerParishPriestTableProps, SubStationType } from '@/types';

const GenericParishPeopleDetailsContainer = () => {
	const type = useRouteName('type');
	const { selectRow } = useStore();
	console.warn(selectRow);

	const getSectionData = useCallback(() => {
		switch (type) {
			case 'former_parish_priest':
				return getFormerParishPriestSectionData(selectRow as FormerParishPriestTableProps);

			case 'sub_stations':
				return getSubStationsSectionData(selectRow as SubStationType);

			default:
				return [];
		}
	}, [selectRow, type]);

	const userName = extractUserName(selectRow as Record<string, unknown>);

	return <GenericPeopleDetailsOverview userName={userName} sectionData={getSectionData()} />;
};

export default GenericParishPeopleDetailsContainer;
