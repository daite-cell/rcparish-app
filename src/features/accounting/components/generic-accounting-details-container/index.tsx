import { GenericCouncilMemberDetails } from '@/components';
import { useStore } from '@/store/store';
import { useRouteName } from '@/utils/getRouteName';
import { useCallback } from 'react';
import { getWorkersSectionData } from '../../columns-section';
import type { WorkerProps } from '@/types';
import { accounting_pages } from '../../data';

const GenericAccountingDetailsContainer = () => {
	const type = useRouteName('type');
	const { selectRow } = useStore();
	const getSectionData = useCallback(() => {
		if (accounting_pages.includes(type as string)) {
			return getWorkersSectionData(selectRow as WorkerProps);
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

export default GenericAccountingDetailsContainer;
