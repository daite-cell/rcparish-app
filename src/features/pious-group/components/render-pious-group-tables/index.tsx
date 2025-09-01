import { DynamicDataTable, TableHeading } from '@/components';
import { useRouteName } from '@/utils/getRouteName';
import { usePiousGroupColumnsMap, usePiousGroupDataMap } from '../../hooks';

const RenderPiousGroupTables = () => {
	const type = useRouteName('type');
	const columnsMap = usePiousGroupColumnsMap();
	const dataMap = usePiousGroupDataMap();

	if (!type || !columnsMap[type] || !dataMap[type]) {
		return <h1 className="text-center mt-10 text-gray-500">No data available</h1>;
	}

	return (
		<div className="space-y-10">
			{Object.entries(columnsMap[type]).map(([tableKey, columns]) => {
				const tableData = dataMap[type][tableKey];
				if (!tableData) return null;

				return (
					<div key={tableKey}>
						{tableData.heading && <TableHeading text={tableData.heading} className="!font-bold" />}

						<DynamicDataTable wrapText={false} data={tableData.data || []} customColumns={columns} />
					</div>
				);
			})}
		</div>
	);
};

export default RenderPiousGroupTables;
