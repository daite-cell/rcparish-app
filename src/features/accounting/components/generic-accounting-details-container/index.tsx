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
import {
	getAdvanceTableBalanceColumns,
	getAdvanceTableLastPaidDetailsColumns,
	getBalancePaidTableColumns,
	getDayBookTableColumns,
	getDonationsMembersDataColumns,
	getLastPaidDetailsTableColumns,
	getMonthlyCollectionTableColumns,
	getPaymentHistoryTableColumns,
	getSpecialCollectionTableColumns,
	getToBePaidTableColumns,
} from '../../columns';
import type { ColumnDef } from '@tanstack/react-table';
import type { TableSection } from '@/components/generic-council-member-details';

const GenericAccountingDetailsContainer = () => {
	const type = useRouteName('type');
	const { selectRow } = useStore();
	const table_key = (selectRow as { table_key?: string } | undefined)?.table_key;
	console.warn(table_key);

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

	const overview_tables = {
		donations: [
			{
				title: 'DONATION DETAILS',
				columns: getDonationsMembersDataColumns as ColumnDef<object>[],
				data: [],
			},
		],
		church_collections: [
			{
				title: 'MONTHLY COLLECTION',
				columns: getMonthlyCollectionTableColumns as ColumnDef<object>[],
				data: [],
			},
			{
				title: 'SPECIAL COLLECTION',
				columns: getSpecialCollectionTableColumns as ColumnDef<object>[],
				data: [],
			},
			{
				title: 'OTHER COLLECTION',
				columns: getSpecialCollectionTableColumns as ColumnDef<object>[],
				data: [],
			},
		],
		day_book: [
			{
				title: 'DAY BOOK',
				columns: getDayBookTableColumns as ColumnDef<object>[],
				data: [],
			},
		],
		rent_shop:
			table_key === 'table_1'
				? [
						{
							title: 'BALANCE PAID DETAILS',
							columns: getBalancePaidTableColumns as ColumnDef<object>[],
							data: [],
						},
						{
							title: 'LAST PAID DETAILS',
							columns: getLastPaidDetailsTableColumns as ColumnDef<object>[],
							data: [],
						},
					]
				: [
						{
							title: 'BALANCE PAID DETAILS',
							columns: getAdvanceTableBalanceColumns as ColumnDef<object>[],
							data: [],
						},
						{
							title: 'LAST PAID DETAILS',
							columns: getAdvanceTableLastPaidDetailsColumns as ColumnDef<object>[],
							data: [],
						},
					],
		subscription: [
			{
				title: 'BALANCE PAID DETAILS',
				columns: getToBePaidTableColumns as ColumnDef<object>[],
				data: [],
			},
			{
				title: 'LAST PAID DETAILS',
				columns: getPaymentHistoryTableColumns as ColumnDef<object>[],
				data: [],
			},
		],
	};

	return (
		<GenericCouncilMemberDetails
			enableMembersTable={true}
			userName={userName}
			sectionData={getSectionData()}
			membersTables={
				overview_tables[type as keyof typeof overview_tables] as TableSection<Record<string, string | number>>[]
			}
		/>
	);
};

export default GenericAccountingDetailsContainer;
