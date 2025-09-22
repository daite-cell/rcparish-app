import { GenericCouncilMemberDetails } from '@/components';
import { useStore } from '@/store/store';
import { useRouteName } from '@/utils/getRouteName';
import { useCallback } from 'react';
import {
	getActiveDonationsSectionData,
	getChurchCollectionsSectionData,
	getDayBookSectionData,
	getEmployersSalarySectionData,
	getInActiveDonationsSectionData,
	getRentSectionData,
	getSubscriptionSectionData,
	getWorkersSectionData,
} from '../../columns-section';
import type {
	ActiveDonationTableProps,
	ChurchCollectionsProps,
	DayBookEntry,
	EmployersSalaryProps,
	InActiveDonationTableProps,
	RentShopInfoProps,
	SubscriptionProps,
	WorkerProps,
} from '@/types';
import { extractUserName } from '@/utils/extractUserName';

const GenericAccountingDetailsContainer = () => {
	const type = useRouteName('type');
	const { selectRow } = useStore();
	const table_key = (selectRow as { table_key?: string } | undefined)?.table_key;

	const getSectionData = useCallback(() => {
		switch (type) {
			case 'workers':
				return getWorkersSectionData(selectRow as WorkerProps);
			case 'subscription':
				return getSubscriptionSectionData(selectRow as SubscriptionProps);
			case 'employers_salary':
				return getEmployersSalarySectionData(selectRow as EmployersSalaryProps);
			case 'donations':
				if (table_key === 'table_1') return getActiveDonationsSectionData(selectRow as ActiveDonationTableProps);
				return getInActiveDonationsSectionData(selectRow as InActiveDonationTableProps);
			case 'church_collections':
				return getChurchCollectionsSectionData(selectRow as ChurchCollectionsProps);
			case 'rent_shop':
				return getRentSectionData(selectRow as RentShopInfoProps);
			case 'day_book':
				return getDayBookSectionData(selectRow as DayBookEntry);
			default:
				return [];
		}
	}, [selectRow, type, table_key]);

	const userName = extractUserName(selectRow as Record<string, unknown>);

	return <GenericCouncilMemberDetails userName={userName} sectionData={getSectionData()} />;
};

export default GenericAccountingDetailsContainer;
