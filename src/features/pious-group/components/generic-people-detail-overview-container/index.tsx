import { GenericPeopleDetailsOverview } from '@/components';
import { getReligiousPeopleSectionData } from '../../columns-sections';
import type { ReligiousPersonProps } from '@/types';
import { useStore } from '@/store/store';
import { extractUserName } from '@/utils/extractUserName';

const GenericPeopleDetailOverviewContainer = () => {
	const selectRow = useStore((state) => state.selectRow);
	const userName = extractUserName(selectRow as Record<string, unknown>);
	return (
		<GenericPeopleDetailsOverview
			userName={userName}
			sectionData={getReligiousPeopleSectionData(selectRow as ReligiousPersonProps)}
		/>
	);
};

export default GenericPeopleDetailOverviewContainer;
