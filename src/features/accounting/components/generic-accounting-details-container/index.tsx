import { GenericCouncilMemberDetails } from '@/components';
import { useStore } from '@/store/store';
import { useRouteName } from '@/utils/getRouteName';
import { useCallback } from 'react';
import {
	getEmployersSalarySectionData,
	getSubscriptionSectionData,
	getWorkersSectionData,
} from '../../columns-section';
import type { EmployersSalaryProps, SubscriptionProps, WorkerProps } from '@/types';
import { extractUserName } from '@/utils/extractUserName';

const GenericAccountingDetailsContainer = () => {
	const type = useRouteName('type');
	const { selectRow } = useStore();

	const getSectionData = useCallback(() => {
		switch (type) {
			case 'workers':
				return getWorkersSectionData(selectRow as WorkerProps);
			case 'subscription':
				return getSubscriptionSectionData(selectRow as SubscriptionProps);
			case 'employers_salary':
				return getEmployersSalarySectionData(selectRow as EmployersSalaryProps);
			default:
				return [];
		}
	}, [selectRow, type]);

	const userName = extractUserName(selectRow as Record<string, unknown>);

	return <GenericCouncilMemberDetails userName={userName} sectionData={getSectionData()} />;
};

export default GenericAccountingDetailsContainer;
