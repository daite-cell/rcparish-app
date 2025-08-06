import { useRouteName } from '@/utils/getRouteName';
import { useAccountingColumnsMap, useAccountingDataMap } from '../../hooks';
import { DynamicDataTable, TableHeading } from '@/components';
import AuditingContainer from '../auditing-container';

const RenderAccountingTableContainer = () => {
	const type = useRouteName('type');
	const columnsMap = useAccountingColumnsMap();
	const dataMap = useAccountingDataMap();

	if (type === 'auditing_income' || type === 'auditing_expense') {
		return <AuditingContainer />;
	}

	if (!type || !columnsMap[type] || !dataMap[type]) {
		return <h1 className="text-center mt-10 text-gray-500">Table will be added</h1>;
	}
	return (
		<div className="space-y-10">
			{type === 'auditing_income' && <AuditingContainer />}
			{Object.entries(columnsMap[type]).map(([tableKey, columns]) => {
				const tableData = dataMap[type][tableKey];
				if (!tableData) return null;

				return (
					<div key={tableKey}>
						{tableData.heading && <TableHeading text={tableData.heading} className="!font-bold" />}

						<DynamicDataTable
							enableDateSorting={tableData.enable_date_sorting ?? false}
							wrapText={false}
							data={tableData.data || []}
							customColumns={columns}
							showFooter={tableData.enable_footer ?? false}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default RenderAccountingTableContainer;
