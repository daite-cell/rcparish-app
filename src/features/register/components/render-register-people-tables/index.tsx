import { DynamicDataTable } from '@/components';
import { useRouteName } from '@/utils/getRouteName';
import { useColumnsMap, useDataMap } from '../../hooks';

const RenderRegisterPeopleTables = () => {
	const type = useRouteName('type');
	const columnsMap = useColumnsMap();
	const dataMap = useDataMap();

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
						{tableData.heading && (
							<h2 className="text-xs font-semibold my-2 uppercase underline ml-8">{tableData.heading}</h2>
						)}
						<DynamicDataTable
							enableDateSorting={tableData.enable_date_sorting ?? false}
							wrapText={false}
							data={tableData.data}
							customColumns={columns}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default RenderRegisterPeopleTables;
