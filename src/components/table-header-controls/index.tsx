import React, { Suspense } from 'react';
import { Input } from '@/components/ui/input';
import { ColumnVisibilityDropdown } from '@/components';
import type { Table as ReactTableType } from '@tanstack/react-table';
import { ChevronsUpDown } from 'lucide-react';

const ExportButton = React.lazy(() => import('@/components/export-button'));

interface TableHeaderControlsProps<T> {
	table: ReactTableType<T>;
	data: T[];
	globalFilter: string;
	setGlobalFilter: (value: string) => void;
	isDynamic: boolean;
	tableId: string;
	pageSize: number;
	setPageSize: (size: number) => void;
	pageSizeOptions: number[];
}

const TableHeaderControls = <T extends object>({
	table,
	data,
	globalFilter,
	setGlobalFilter,
	isDynamic,
	tableId,
	pageSize,
	setPageSize,
	pageSizeOptions,
}: TableHeaderControlsProps<T>) => {
	return (
		<>
			<div className="flex flex-col  justify-between items-center gap-2 md:flex-row">
				<>
					<div className="flex items-center gap-3">
						<span>Search</span>
						<Input
							className="max-w-sm h-7 rounded-[3px] focus:border-[#80bdff]"
							value={globalFilter}
							onChange={(e) => setGlobalFilter(e.target.value)}
						/>
					</div>

					{isDynamic && (
						<div className="flex ml-4">
							<Suspense fallback={<div>Loading...</div>}>
								<ExportButton
									data={table.getSortedRowModel().rows.map((row) => row.original)}
									columns={table
										.getAllLeafColumns()
										.filter((col) => col.getIsVisible())
										.map((col) => ({
											header: String(col.columnDef.header),
											accessorKey: col.id,
										}))}
									tableId={tableId}
								/>
							</Suspense>

							<ColumnVisibilityDropdown table={table} />
						</div>
					)}
				</>
				<div className="flex justify-end items-center flex-1 space-x-2">
					<span>Show</span>
					<div className="relative">
						<select
							title="page"
							className="block w-full px-3 py-1 pr-8 text-sm border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none"
							value={pageSize}
							onChange={(e) => {
								const newPageSize = Number(e.target.value);
								if (!Number.isNaN(newPageSize)) {
									setPageSize(newPageSize);
									table.setPageSize(newPageSize);
								}
							}}
						>
							{pageSizeOptions.map((size) => (
								<option key={size} value={size}>
									{size === data?.length ? 'All' : size}
								</option>
							))}
						</select>
						<div className="absolute inset-y-0 flex items-center text-gray-500 pointer-events-none right-2">
							<ChevronsUpDown className="w-3 h-3" />
						</div>
					</div>
					<span>entries</span>
				</div>
			</div>
			<div className="text-xs text-black ml-auto mt-5">
				{(() => {
					const pageIndex = table.getState().pagination.pageIndex;
					const start = pageIndex * pageSize + 1;
					const end = Math.min((pageIndex + 1) * pageSize, data.length);
					return `Showing ${start} to ${end} of ${data.length} entries`;
				})()}
			</div>
		</>
	);
};

export default TableHeaderControls;
