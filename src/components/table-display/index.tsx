import { flexRender, type Table as ReactTableType, type ColumnDef } from '@tanstack/react-table';
import { ChevronDown, ChevronUp, ChevronsUpDown } from 'lucide-react';

interface TableDisplayProps<T> {
	table: ReactTableType<T>;
	wrapText?: boolean;
	columns: ColumnDef<T, unknown>[];
	tableId: string;
	isDynamic: boolean;
	data: T[];
}

const TableDisplay = <T extends object>({
	table,
	wrapText = true,
	columns,
	tableId,
	isDynamic,
}: TableDisplayProps<T>) => {
	return (
		<div className="overflow-x-auto hide-scrollbar">
			<table
				id={tableId}
				className={`min-w-full mt-4 text-sm text-left border border-gray-400 ${
					wrapText ? 'whitespace-normal' : 'whitespace-nowrap'
				}`}
			>
				<thead className="bg-[#d7c49e] text-[#343148ff]">
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th
									key={header.id}
									onClick={isDynamic ? header.column.getToggleSortingHandler() : undefined}
									className={`px-2 py-2 border text-[13px] font-bold select-none ${isDynamic ? 'cursor-pointer' : ''}`}
								>
									<div className="flex justify-between items-center">
										<span>{flexRender(header.column.columnDef.header, header.getContext())}</span>
										{isDynamic && header.column.getCanSort() && (
											<span className="ml-1">
												{header.column.getIsSorted() === 'asc' ? (
													<ChevronUp className="w-3 h-3 text-gray-700" />
												) : header.column.getIsSorted() === 'desc' ? (
													<ChevronDown className="w-3 h-3 text-gray-700" />
												) : (
													<ChevronsUpDown className="w-3 h-3 text-gray-400" />
												)}
											</span>
										)}
									</div>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.length > 0 ? (
						table.getRowModel().rows.map((row) => (
							<tr key={row.id} className="bg-white border-b border-gray-300">
								{row.getVisibleCells().map((cell) => (
									<td key={cell.id} className="px-3 py-2 text-xs border border-[#d7c49e]">
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
						))
					) : (
						<tr>
							<td colSpan={columns.length} className="py-4 text-center text-gray-500 border">
								No data available in table
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default TableDisplay;
