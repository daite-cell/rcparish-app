import {
	useReactTable,
	getCoreRowModel,
	getSortedRowModel,
	getPaginationRowModel,
	flexRender,
	type ColumnDef,
	type SortingState,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { ChevronDown, ChevronUp, ChevronsUpDown } from 'lucide-react';
import mockData from '@/data/mock-data/mock-data.json';
import { Input } from '../ui/input';
import { ExportButton, ColumnVisibilityDropdown } from '../index';

interface DynamicDataTableProps<T extends object> {
	data?: T[];
	defaultPageSize?: number;
	title?: string;
	isDynamic?: boolean;
	wrapText?: boolean;
	tableId?: string;
}

const DynamicDataTable = <T extends object>({
	data = mockData as T[],
	defaultPageSize = 10,
	title,
	isDynamic = true,
	wrapText = true,
	tableId,
}: DynamicDataTableProps<T>) => {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [pageSize, setPageSize] = useState(defaultPageSize);

	const columns: ColumnDef<T>[] = useMemo(() => {
		if (!data || data.length === 0) return [];

		const formatHeader = (key: string) =>
			key.replace(/_/g, ' ').replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1));

		return Object.keys(data[0]).map((key) => ({
			accessorKey: key,
			header: formatHeader(key),
			cell: (info) => info.getValue(),
		}));
	}, [data]);

	const table = useReactTable({
		data,
		columns,
		state: { sorting },
		onSortingChange: isDynamic ? setSorting : undefined,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});

	const pageSizeOptions = useMemo(() => {
		const baseSizes = [10, 25, 50, 100];
		const uniqueSizes = [...new Set([...baseSizes.filter((size) => size < data.length), data.length])];
		return uniqueSizes;
	}, [data.length]);

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="w-full overflow-x-auto">
				<div className="min-w-full py-2 sm:px-6 lg:px-8">
					<h1 className="my-3 font-bold uppercase text-start">{title}</h1>
					<div className="flex justify-between items-center text-[13px] my-3">
						<div className="flex items-center gap-2  ">
							<span>Search </span>
							<Input className="max-w-sm  rounded-[5px] focus:border-[#80bdff]" />
							<div className="flex">
								<ExportButton />
								<ColumnVisibilityDropdown table={table} />
							</div>
						</div>

						<div className="flex items-center space-x-2">
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
											{size === data.length ? 'All' : size}
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

					{isDynamic && data.length > 0 && (
						<div className="flex justify-between items-center text-[13px]">
							<h1>
								Showing {table.getRowModel().rows.length} of {data.length} entries
							</h1>
						</div>
					)}
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
											className={`px-3 py-2 border text-[13px] font-bold select-none ${
												isDynamic ? 'cursor-pointer' : ''
											}`}
										>
											<div className="flex items-center space-x-1">
												<span>{flexRender(header.column.columnDef.header, header.getContext())}</span>
												{isDynamic &&
													(header.column.getIsSorted() === 'asc' ? (
														<ChevronUp className="w-3 h-3 text-gray-700" />
													) : header.column.getIsSorted() === 'desc' ? (
														<ChevronDown className="w-3 h-3 text-gray-700" />
													) : (
														<ChevronsUpDown className="w-3 h-3 text-gray-400" />
													))}
											</div>
										</th>
									))}
								</tr>
							))}
						</thead>
						<tbody>
							{table.getRowModel().rows.length > 0 &&
							table.getRowModel().rows.some((row) => row.getVisibleCells().some((cell) => cell.getValue())) ? (
								table.getRowModel().rows.map((row) => (
									<tr key={row.id} className="bg-white border-b border-gray-300">
										{row.getVisibleCells().map((cell) => (
											<td key={cell.id} className="px-3 py-2 border border-[#d7c49e]">
												{flexRender(cell.column.columnDef.cell, cell.getContext())}
											</td>
										))}
									</tr>
								))
							) : (
								<tr>
									<td colSpan={table.getAllColumns().length} className="py-4 text-center text-gray-500 border">
										No data available in table
									</td>
								</tr>
							)}
						</tbody>
					</table>
					{isDynamic && data.length > 0 && (
						<div className="flex justify-end mt-4">
							<ul className="inline-flex items-center text-sm">
								<li>
									<button
										onClick={() => table.previousPage()}
										disabled={!table.getCanPreviousPage()}
										className="px-3 py-1 text-black bg-white border border-gray-300 disabled:opacity-50"
									>
										Previous
									</button>
								</li>

								{(() => {
									const pageCount = table.getPageCount();
									const currentPage = table.getState().pagination.pageIndex;
									const visiblePages = 3;
									const startPage = Math.max(
										0,
										Math.min(currentPage - Math.floor(visiblePages / 2), pageCount - visiblePages)
									);
									const endPage = Math.min(startPage + visiblePages, pageCount);

									return Array.from({ length: endPage - startPage }, (_, i) => {
										const pageIndex = startPage + i;
										return (
											<li key={pageIndex}>
												<button
													onClick={() => table.setPageIndex(pageIndex)}
													className={`px-3 py-1 border border-gray-300 ${
														currentPage === pageIndex ? 'bg-[#d7c49e] text-black font-bold' : 'text-gray-600'
													}`}
												>
													{pageIndex + 1}
												</button>
											</li>
										);
									});
								})()}

								<li>
									<button
										onClick={() => table.nextPage()}
										disabled={!table.getCanNextPage()}
										className="px-3 py-1 text-black bg-white border border-gray-300 disabled:opacity-50"
									>
										Next
									</button>
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default DynamicDataTable;
