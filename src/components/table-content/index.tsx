import { flexRender, type Table as ReactTableType } from '@tanstack/react-table';
import { ChevronDown, ChevronUp, ChevronsUpDown } from 'lucide-react';

interface TableContentProps<T> {
	table: ReactTableType<T>;
	wrapText: boolean;
	tableId?: string;
	isDynamic: boolean;
	columnsLength: number;
}

const TableContent = <T extends object>({
	table,
	wrapText,
	tableId,
	isDynamic,
	columnsLength,
}: TableContentProps<T>) => {
	return (
		<div className="overflow-x-auto">
			<table id={tableId} className="w-full mt-3 text-sm border border-black table-auto">
				<thead className="text-white bg-[#343148ff]">
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id} className="border border-black">
							{headerGroup.headers.map((header) => (
								<th
									key={header.id}
									className="px-4 py-2 border border-black text-start"
									style={{ whiteSpace: wrapText ? 'normal' : 'nowrap' }}
								>
									{header.isPlaceholder ? null : (
										<div
											{...{
												className: isDynamic ? 'cursor-pointer select-none flex items-center gap-1' : '',
												onClick: isDynamic ? header.column.getToggleSortingHandler() : undefined,
											}}
										>
											{flexRender(header.column.columnDef.header, header.getContext())}
											{{
												asc: <ChevronUp size={14} />,
												desc: <ChevronDown size={14} />,
											}[header.column.getIsSorted() as string] ?? <ChevronsUpDown size={14} className="text-muted" />}
										</div>
									)}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id} className="border border-black even:bg-[#f1f1f1] odd:bg-[#ffffff]">
							{row.getVisibleCells().map((cell) => (
								<td
									key={cell.id}
									className="px-4 py-2 border border-black"
									style={{ whiteSpace: wrapText ? 'normal' : 'nowrap' }}
								>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
					{table.getRowModel().rows.length === 0 && (
						<tr>
							<td colSpan={columnsLength} className="py-8 text-center text-muted-foreground">
								No data found
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default TableContent;
