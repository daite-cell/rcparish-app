import { flexRender, type Table as ReactTableType, type ColumnDef } from '@tanstack/react-table';
import { ChevronDown, ChevronUp, ChevronsUpDown } from 'lucide-react';
import { Fragment } from 'react';

interface TableDisplayProps<T> {
	table: ReactTableType<T>;
	wrapText?: boolean;
	columns: ColumnDef<T, unknown>[];
	tableId: string;
	isDynamic: boolean;
	data: T[];
	showFooter?: boolean;
	enableRowFilters?: boolean;
	filterableKeys?: string[];
}

const TableDisplay = <T extends object>({
	table,
	wrapText = true,
	columns,
	tableId,
	isDynamic,
	showFooter = false,
	enableRowFilters = false,
	filterableKeys = [],
}: TableDisplayProps<T>) => {
	return (
		<div className="overflow-x-auto hide-scrollbar">
			<table
				id={tableId}
				className={`min-w-full mt-4 text-sm text-left border border-gray-400 ${
					wrapText ? 'whitespace-normal' : 'whitespace-nowrap'
				}`}
			>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<Fragment key={headerGroup.id}>
							<tr className="bg-[#d7c49e] text-[#343148ff]">
								{headerGroup.headers.map((header) => (
									<th
										key={header.id}
										onClick={isDynamic ? header.column.getToggleSortingHandler() : undefined}
										className={`px-2 py-2 border text-[13px] font-bold select-none ${
											isDynamic ? 'cursor-pointer' : ''
										}`}
										colSpan={header.colSpan}
									>
										{!header.isPlaceholder && (
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
										)}
									</th>
								))}
							</tr>

							{enableRowFilters && (
								<tr className="bg-[#e8e8e8]">
									{headerGroup.headers.map((header) => (
										<th key={header.id} className="px-2 py-3 border-0">
											{filterableKeys?.includes(header.column.id) && header.column.getCanFilter() ? (
												<input
													type="text"
													value={(header.column.getFilterValue() ?? '') as string}
													onChange={(e) => header.column.setFilterValue(e.target.value)}
													placeholder={`search ${String(header.column.columnDef.header)}`}
													className="w-full border bg-white border-gray-300 font-normal px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-black"
												/>
											) : null}
										</th>
									))}
								</tr>
							)}
						</Fragment>
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

				{showFooter && (
					<tfoot className="font-semibold border border-[#d7c49e] ">
						{table.getFooterGroups().map((footerGroup) => (
							<tr key={footerGroup.id}>
								{footerGroup.headers.map((footer) => (
									<td key={footer.id} colSpan={footer.colSpan} className="px-3 py-2 text-xs ">
										{footer.isPlaceholder ? null : flexRender(footer.column.columnDef.footer, footer.getContext())}
									</td>
								))}
							</tr>
						))}
					</tfoot>
				)}
			</table>
		</div>
	);
};

export default TableDisplay;
