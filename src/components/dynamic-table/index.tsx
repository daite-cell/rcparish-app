import {
	useReactTable,
	getCoreRowModel,
	getSortedRowModel,
	getPaginationRowModel,
	getFilteredRowModel,
	flexRender,
	type ColumnDef,
	type SortingState,
	type Table as ReactTableType,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { ChevronDown, ChevronUp, ChevronsUpDown } from 'lucide-react';
import mockData from '@/data/mock-data/mock-data.json';
import { Input } from '../ui/input';
import {
	ExportButton,
	ColumnVisibilityDropdown,
	SingleSelectDropdown,
	DateInputFelid,
	PaginationControls,
} from '../index';

interface DynamicDataTableProps<T extends object> {
	data?: T[];
	defaultPageSize?: number;
	title?: string;
	isDynamic?: boolean;
	wrapText?: boolean;
	tableId?: string;
	filterKey?: string;
	enableDateAndLetterSorting?: boolean;
}

const DynamicDataTable = <T extends object>({
	data = mockData as T[],
	defaultPageSize = 10,
	title,
	isDynamic = true,
	wrapText = true,
	enableDateAndLetterSorting = false,
	tableId,
	filterKey = 'sub_station',
}: DynamicDataTableProps<T>) => {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [pageSize, setPageSize] = useState(defaultPageSize);
	const [globalFilter, setGlobalFilter] = useState('');
	const [alphaFilter, setAlphaFilter] = useState<string>('All');
	const [fromDate, setFromDate] = useState<Date | undefined>(undefined);
	const [toDate, setToDate] = useState<Date | undefined>(undefined);

	const filteredData = useMemo(() => {
		let result = data;
		if (alphaFilter !== 'All') {
			const key = filterKey ?? Object.keys(data[0] || {}).find((k) => typeof (data[0] as Record<string, unknown>)[k]);
			if (key) {
				result = result.filter((item) =>
					String((item as Record<string, unknown>)[key])
						.toLowerCase()
						.startsWith(alphaFilter.toLowerCase())
				);
			}
		}

		const dateKey = Object.keys(data[0] || {}).find((key) => /date/i.test(key));
		if (dateKey && (fromDate || toDate)) {
			result = result.filter((item) => {
				const itemDateValue = (item as Record<string, unknown>)[dateKey];
				let itemDate: Date | null = null;

				if (typeof itemDateValue === 'string' || typeof itemDateValue === 'number') {
					itemDate = new Date(itemDateValue);
				} else if (itemDateValue instanceof Date) {
					itemDate = itemDateValue;
				}

				if (itemDate === null) {
					return false;
				}

				if (fromDate && itemDate < fromDate) return false;
				if (toDate && itemDate > toDate) return false;
				return true;
			});
		}

		return result;
	}, [alphaFilter, data, filterKey, fromDate, toDate]);

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
		data: filteredData,
		columns,
		state: { sorting, globalFilter },
		onSortingChange: isDynamic ? setSorting : undefined,
		onGlobalFilterChange: setGlobalFilter,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});

	const pageSizeOptions = useMemo(() => {
		const baseSizes = [10, 25, 50, 100];
		const uniqueSizes = [...new Set([...baseSizes.filter((size) => size < data.length), data.length])];
		return uniqueSizes;
	}, [data.length]);

	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="w-full ">
				<div className="min-w-full py-2 sm:px-6 lg:px-8">
					<h1 className="mb-8 font-bold underline uppercase text-start">{title}</h1>

					{enableDateAndLetterSorting && (
						<>
							<div className="flex flex-col items-center gap-4 md:flex-row ">
								<SingleSelectDropdown label="select the date" />

								<DateInputFelid label="From" date={fromDate} setDate={setFromDate} />
								<DateInputFelid label="To" date={toDate} setDate={setToDate} />
							</div>
							<div className="flex items-center my-4 overflow-x-auto border border-black hide-scrollbar ">
								{['All', ...alphabet].map((char) => (
									<button
										type="button"
										key={char}
										onClick={() => setAlphaFilter(char)}
										className={`px-3 py-[6px] flex-1 text-xs  ${
											alphaFilter === char ? 'bg-[#343148ff] text-white' : 'bg-[#d7c49e] text-black'
										}`}
									>
										{char}
									</button>
								))}
							</div>
						</>
					)}

					<div className="flex flex-col  md:flex-row justify-between items-center text-[13px] my-3  ">
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
								<div className="flex ml-4 ">
									<ExportButton />
									<ColumnVisibilityDropdown table={table} />
								</div>
							)}
						</div>

						<div className="flex items-center space-x-2 ">
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
					<div className="overflow-x-auto">
						<table
							id={tableId}
							className={` min-w-full mt-4 text-sm text-left border border-gray-400 ${
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
								{table.getRowModel().rows.length > 0 ? (
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
										<td colSpan={columns.length} className="py-4 text-center text-gray-500 border">
											No data available in table
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>

					{isDynamic && data.length > 0 && <PaginationControls table={table as unknown as ReactTableType<unknown>} />}
				</div>
			</div>
		</div>
	);
};

export default DynamicDataTable;
