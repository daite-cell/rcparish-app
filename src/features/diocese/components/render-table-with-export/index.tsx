import { useRouteName } from '@/utils/getRouteName';
import { useDioceseColumnsMap, useDioceseDataMap } from '../../hooks';
import { DynamicDataTable } from '@/components';
import { lazy, Suspense } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import { toTitleCaseFromSnake } from '@/utils/toTitleCaseFromSnake';

const ExportButton = lazy(() => import('@/components/export-button'));
type CustomColumnDef<T> = ColumnDef<T> & {
	accessorKey: string;
};

const RenderTableWithExport = () => {
	const type = useRouteName('type');
	const columnsMap = useDioceseColumnsMap();
	const dataMap = useDioceseDataMap();

	if (!type) {
		return <h1 className="text-center mt-10 text-gray-500">Missing type in route.</h1>;
	}

	if (!columnsMap[type]) {
		return <h1 className="text-center mt-10 text-gray-500">No column configuration found for "{type}".</h1>;
	}

	if (!dataMap[type]) {
		return <h1 className="text-center mt-10 text-gray-500">No data available for "{type}".</h1>;
	}
	const tableTitle = `Diocese ${toTitleCaseFromSnake(type as string)}`;

	return (
		<div className="space-y-10">
			{Object.entries(columnsMap[type]).map(([tableKey, columns]) => {
				const tableData = dataMap[type][tableKey];
				if (!tableData) return null;

				const exportableColumns = (columns as CustomColumnDef<object>[])
					.filter((col) => col.accessorKey)
					.map((col) => ({
						header: typeof col.header === 'string' ? col.header : '',
						accessorKey: col.accessorKey!,
						meta: col.meta,
					}));

				return (
					<div key={tableKey}>
						<Suspense fallback={<div>Loading export options...</div>}>
							<ExportButton data={tableData.data} columns={exportableColumns} tableId={tableTitle} />
						</Suspense>

						{tableData.heading && (
							<h2 className="text-xs font-semibold my-2 uppercase underline ml-8">{tableData.heading}</h2>
						)}

						<DynamicDataTable
							tableId={tableKey}
							enableDateSorting={tableData.enable_date_sorting ?? false}
							wrapText={false}
							data={tableData.data}
							isDynamic={false}
							customColumns={columns}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default RenderTableWithExport;
