import { useRouteName } from '@/utils/getRouteName';
import { useDioceseColumnsMap, useDioceseDataMap } from '../../hooks';
import { DynamicDataTable, FormButton } from '@/components';
import { lazy, Suspense, useRef } from 'react';
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
	const printRef = useRef<HTMLDivElement>(null);

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
	const handlePrint = () => window.print();

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
					<div className="flex flex-col" key={tableKey}>
						{type === 'college_consulters' || type === 'curia_members' ? (
							<FormButton label="print" onClick={handlePrint} className="no-print self-end" />
						) : (
							<Suspense fallback={<div>Loading export options...</div>}>
								<ExportButton data={tableData.data} columns={exportableColumns} tableId={tableTitle} />
							</Suspense>
						)}
						<h1 className="hidden  print:block text-5xl">Pious Group - Families</h1>

						{tableData.heading && <h2 className="text-sm font-bold my-2 uppercase  ">{tableData.heading}</h2>}
						<div className="print-area" ref={printRef}>
							<h1 className="hidden print:block text-4xl">Diocese {toTitleCaseFromSnake(type as string)}</h1>

							<DynamicDataTable
								tableId={`diocese-${tableKey}`}
								enableDateSorting={tableData.enable_date_sorting ?? false}
								wrapText={false}
								data={tableData.data}
								isDynamic={false}
								customColumns={columns}
								enableSearch={false}
								enablePagination={false}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default RenderTableWithExport;
