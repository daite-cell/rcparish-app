import { GenericCouncilMemberDetails } from '@/components';
import { useStore } from '@/store/store';
import { useRouteName } from '@/utils/getRouteName';
import { useCallback } from 'react';
import {
	getInstitutionDetailsSectionData,
	getNoVocationalListSectionData,
	getPropertiesSectionData,
} from '../../columns-section';
import type { NoviciateInstitutionProps, InstitutionDetailsProps, PropertiesProps } from '@/types';
import { extractUserName } from '@/utils/extractUserName';

const GenericDiocesePeopleDetailsContainer = () => {
	const type = useRouteName('type');
	const { selectRow } = useStore();
	console.warn(selectRow);

	const getSectionData = useCallback(() => {
		switch (type) {
			case 'vocational_list':
				return getNoVocationalListSectionData(selectRow as NoviciateInstitutionProps);
			case 'institutions_list':
				return getInstitutionDetailsSectionData(selectRow as InstitutionDetailsProps);
			case 'properties':
				return getPropertiesSectionData(selectRow as PropertiesProps);

			default:
				return [];
		}
	}, [selectRow, type]);

	const userName = extractUserName(selectRow as Record<string, unknown>);

	return <GenericCouncilMemberDetails userName={userName} sectionData={getSectionData()} />;
};

export default GenericDiocesePeopleDetailsContainer;
