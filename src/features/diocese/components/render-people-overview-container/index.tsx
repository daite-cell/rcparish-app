import { GenericPeopleDetailsOverview } from '@/components';
import { useStore } from '@/store/store';
import { useRouteName } from '@/utils/getRouteName';
import { useCallback } from 'react';
import {
	getInstitutionDetailsSectionData,
	getSenateMembersSectionData,
	getVicariateForaneMemberData,
	getVssSectionData,
	getParishesMemberData,
} from '../../columns-section';
import type {
	InstitutionDetailsProps,
	DioceseVSSSMemberProps,
	DioceseSenateMemberProps,
	VicariateForaneMemberProps,
	ParishTableDataProps,
} from '@/types';
import { extractUserName } from '@/utils/extractUserName';

const RenderDiocesePeopleDetailsContainer = () => {
	const type = useRouteName('type');
	const { selectRow } = useStore();
	console.warn(selectRow);

	const getSectionData = useCallback(() => {
		switch (type) {
			case 'vsss':
				return getVssSectionData(selectRow as DioceseVSSSMemberProps);
			case 'senate_members':
				return getSenateMembersSectionData(selectRow as DioceseSenateMemberProps);
			case 'institutions_list':
				return getInstitutionDetailsSectionData(selectRow as InstitutionDetailsProps);
			case 'vf':
				return getVicariateForaneMemberData(selectRow as VicariateForaneMemberProps);
			case 'parishes':
				return getParishesMemberData(selectRow as ParishTableDataProps);

			default:
				return [];
		}
	}, [selectRow, type]);

	const userName = extractUserName(selectRow as Record<string, unknown>);

	return <GenericPeopleDetailsOverview userName={userName} sectionData={getSectionData()} />;
};

export default RenderDiocesePeopleDetailsContainer;
