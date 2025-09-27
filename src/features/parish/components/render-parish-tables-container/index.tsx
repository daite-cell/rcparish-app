import { DynamicDataTable } from '@/components';
import { useRouteName } from '@/utils/getRouteName';
import { useParishColumnsMap, useParishDataMap } from '../../hooks';

const RenderParishTablesContainer = () => {
	const type = useRouteName('type');
	const columnsMap = useParishColumnsMap();
	const dataMap = useParishDataMap();

	if (!type) {
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
						{tableData.heading && <h2 className="text-md font-bold my-2 ">{tableData.heading}</h2>}
						<DynamicDataTable
							enableDateSorting={tableData.enable_date_sorting ?? false}
							wrapText={false}
							data={tableData.data}
							customColumns={columns}
							tableId={`${type}-${tableKey}`}
							enableRowFilters={tableData.enable_row_filters ?? false}
							filterableKeys={tableData.filter_able_keys ?? []}
							enableMonthFilter={tableData.enable_month_filter ?? false}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default RenderParishTablesContainer;
