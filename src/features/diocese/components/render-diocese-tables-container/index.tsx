import { DynamicDataTable } from '@/components';
import { useRouteName } from '@/utils/getRouteName';
import { useDioceseColumnsMap, useDioceseDataMap } from '../../hooks';

const RenderDioceseTablesContainer = () => {
	const type = useRouteName('type');

	const columnsMap = useDioceseColumnsMap();
	const dataMap = useDioceseDataMap();

	if (!type || !columnsMap[type]) {
		return <h1 className="text-center mt-10 text-gray-500">Invalid route: No type specified</h1>;
	}

	if (!columnsMap[type]) {
		return <h1 className="text-center mt-10 text-gray-500">Configuration error: No columns defined for {type}</h1>;
	}

	if (!dataMap[type]) {
		return <h1 className="text-center mt-10 text-gray-500">No data available for {type}</h1>;
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

export default RenderDioceseTablesContainer;
