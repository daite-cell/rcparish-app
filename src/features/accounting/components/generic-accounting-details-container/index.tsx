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
	const isValidType = (type: unknown): type is string => {
		return typeof type === 'string' && accounting_pages.includes(type);
	};

	const isWorkerProps = (obj: unknown): obj is WorkerProps => {
		return obj !== null && typeof obj === 'object';
	};

	const getSectionData = useCallback(() => {
		if (isValidType(type) && isWorkerProps(selectRow)) {
			return getWorkersSectionData(selectRow);
		}
		return [];
	}, [selectRow, type]);
	return (
		<GenericCouncilMemberDetails
			userName={isWorkerProps(selectRow) && 'name' in selectRow ? selectRow.name || '' : ''}
			sectionData={getSectionData()}
		/>
	);
};

export default GenericAccountingDetailsContainer;
