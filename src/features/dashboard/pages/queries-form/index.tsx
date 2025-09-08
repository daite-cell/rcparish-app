import { TabsLayout } from '@/components';
import { useState } from 'react';
import {
	useQueryFromBishopClosedColumns,
	useQueryFromBishopOpenedColumns,
	useQueryFromPeopleClosedColumns,
	useQueryFromPeopleOpenedColumns,
} from '../../columns';
import { usePathName } from '@/utils/getPathName';
import { RenderQueryTableContainer } from '../../components';
import type { ColumnDef } from '@tanstack/react-table';

const QueriesFormPage = () => {
	const pathName = usePathName();
	const [activeTab, setActiveTab] = useState(0);

	const closedBishopRequestColumns = useQueryFromBishopClosedColumns();
	const openBishopRequestColumns = useQueryFromBishopOpenedColumns();
	const closedPeopleRequestColumns = useQueryFromPeopleClosedColumns();
	const openPeopleRequestColumns = useQueryFromPeopleOpenedColumns();

	const isBishop = pathName === '/query_from_bishop';

	const tabs = [
		{ label: 'CLOSED QUERIES', content: '' },
		{ label: 'OPEN QUERIES', content: '' },
	];

	const getColumns = (isClosed: boolean) =>
		isClosed
			? isBishop
				? (closedBishopRequestColumns as ColumnDef<object>[])
				: (closedPeopleRequestColumns as ColumnDef<object>[])
			: isBishop
				? (openBishopRequestColumns as ColumnDef<object>[])
				: (openPeopleRequestColumns as ColumnDef<object>[]);

	return (
		<TabsLayout onTabChange={setActiveTab} hasPageHeading={false} tabs={tabs} activeTabId={activeTab}>
			{activeTab === 0 && <RenderQueryTableContainer isClosed={true} isBishop={isBishop} columns={getColumns(true)} />}
			{activeTab === 1 && (
				<RenderQueryTableContainer isClosed={false} isBishop={isBishop} columns={getColumns(false)} />
			)}
		</TabsLayout>
	);
};

export default QueriesFormPage;
