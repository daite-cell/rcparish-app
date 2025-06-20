import React, { Suspense } from 'react';
import { Input } from '@/components/ui/input';
import { ColumnVisibilityDropdown } from '@/components';
import type { Table as ReactTableType } from '@tanstack/react-table';

const ExportButton = React.lazy(() => import('@/components/export-button'));

interface TableHeaderControlsProps<T> {
	table: ReactTableType<T>;
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
	globalFilter,
	setGlobalFilter,
	isDynamic,
	tableId,
}: TableHeaderControlsProps<T>) => {
	return (
		<div className="flex flex-col items-center gap-2 md:flex-row">
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
		</div>
	);
};

export default TableHeaderControls;
