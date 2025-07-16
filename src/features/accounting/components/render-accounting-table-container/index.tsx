import { useRouteName } from '@/utils/getRouteName';
import { useAccountingColumnsMap, useAccountingDataMap } from '../../hooks';
import { DynamicDataTable, TableHeading } from '@/components';

const RenderAccountingTableContainer = () => {
	const type = useRouteName('type');
	const columnsMap = useAccountingColumnsMap();
	const dataMap = useAccountingDataMap();
	if (!type || !columnsMap[type] || !dataMap[type]) {
		return <h1 className="text-center mt-10 text-gray-500">Table will be added</h1>;
	}
	return (
		<div className="space-y-10">
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
						/>
					</div>
				);
			})}
		</div>
	);
};

export default RenderAccountingTableContainer;
