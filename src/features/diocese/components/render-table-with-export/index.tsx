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

	if (!type || !columnsMap[type] || !dataMap[type]) {
		return <h1 className="text-center mt-10 text-gray-500">No data available</h1>;
	}
	const tableTitle = `Diocese ${toTitleCaseFromSnake(type as string)}`;

	return (
		<div className="space-y-10">
			{Object.entries(columnsMap[type]).map(([tableKey, columns]) => {
				const tableData = dataMap[type][tableKey];
				if (!tableData) return null;

				const exportableColumns = (columns as CustomColumnDef<object>[])
					.filter((col) => !col.meta || col.meta.isExportable !== false)
					.map((col) => ({
						header: typeof col.header === 'string' ? col.header : '',
						accessorKey: col.accessorKey as string,
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
