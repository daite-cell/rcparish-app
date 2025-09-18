import {
	useReactTable,
	getCoreRowModel,
	getSortedRowModel,
	getPaginationRowModel,
	getFilteredRowModel,
	type SortingState,
	type Table as ReactTableType,
	type ColumnDef,
	type ColumnMeta,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { PaginationControls, TableFilters, TableHeaderControls, TableDisplay } from '../index';

interface CustomColumnMeta<T> extends ColumnMeta<T, unknown> {
	isExportable?: boolean;
}

interface DynamicDataTableProps<T extends object, U> {
	data?: T[];
	defaultPageSize?: number;
	title?: string;
	isDynamic?: boolean;
	wrapText?: boolean;
	tableId?: string;
	filterKey?: string;
	customColumns?: ColumnDef<T, U>[];
	includeCheckbox?: boolean;
	includePriorDignitaries?: boolean;
	columns?: CustomColumnMeta<T>[];
	enableDateSorting?: boolean;
	enableLetterSorting?: boolean;
	enableExport?: boolean;
	showFooter?: boolean;
	enablePagination?: boolean;
	enableSearch?: boolean;
	enableRowFilters?: boolean;
	filterableKeys?: string[];
	enableDropdownFilters?: boolean;
}

const DynamicDataTable = <T extends object, U>({
	data = [],
	defaultPageSize = 10,
	title,
	isDynamic = true,
	wrapText = true,
	enableDateSorting = false,
	enableLetterSorting = false,
	tableId,
	filterKey = 'sub_station',
	customColumns = [],
	enableExport = true,
	showFooter = false,
	enablePagination = true,
	enableSearch = true,
	enableRowFilters = false,
	filterableKeys,
	enableDropdownFilters = true,
}: DynamicDataTableProps<T, U>) => {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [pageSize, setPageSize] = useState(defaultPageSize);
	const [globalFilter, setGlobalFilter] = useState('');
	const [alphaFilter, setAlphaFilter] = useState<string>('All');
	const [monthFilter, setMonthFilter] = useState<string | number>('');
	const [fromDate, setFromDate] = useState<Date | undefined>(undefined);
	const [toDate, setToDate] = useState<Date | undefined>(undefined);
	const [dateFilterKey, setDateFilterKey] = useState<string | null>(null);
	const [monthFilterKey, setMonthFilterKey] = useState<string | null>(null);

	const generatedTableId = tableId ?? 'dynamic-data-table';
	const fromDateTime = fromDate?.getTime() ?? null;
	const toDateTime = toDate?.getTime() ?? null;

	function parseDate(value: unknown): Date | null {
		if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
			const [year, month, day] = value.split('-').map(Number);
			return new Date(year, month - 1, day);
		}
		if (typeof value === 'string' || typeof value === 'number') {
			const d = new Date(value);
			return isNaN(d.getTime()) ? null : d;
		}
		if (value instanceof Date) return value;
		return null;
	}

	const filteredData = useMemo(() => {
		let result = [...data];

		if (alphaFilter !== 'All') {
			const hasFilterKey = !!(filterKey && data.length && filterKey in (data[0] as Record<string, unknown>));

			const key = hasFilterKey
				? (filterKey as string)
				: (Object.keys(data[0] || {}).find((k) => typeof (data[0] as Record<string, unknown>)[k] === 'string') as
						| string
						| undefined);

			if (key) {
				result = result.filter((item) => {
					const v = (item as Record<string, unknown>)[key];
					if (typeof v === 'string') {
						const nameWithoutPrefix = v.replace(/^fr\.?\s*/i, '');
						return nameWithoutPrefix.toLowerCase().startsWith(alphaFilter.toLowerCase());
					}
					return String(v).toLowerCase().startsWith(alphaFilter.toLowerCase());
				});
			}
		}

		if ((dateFilterKey || fromDateTime !== null || toDateTime !== null) && data.length > 0) {
			let keysToCheck: string[] = [];

			if (dateFilterKey) {
				keysToCheck = [dateFilterKey];
			} else {
				keysToCheck = Object.keys(data[0]).filter((key) => {
					const value = (data[0] as Record<string, unknown>)[key];
					const parsed = parseDate(value);
					return parsed !== null;
				});
			}

			if (keysToCheck.length > 0) {
				result = result.filter((item) => {
					return keysToCheck.some((key) => {
						const rawValue = (item as Record<string, unknown>)[key];
						const itemDate = parseDate(rawValue);
						if (!itemDate) return false;

						const from = fromDateTime !== null ? new Date(fromDateTime).setHours(0, 0, 0, 0) : null;
						const to = toDateTime !== null ? new Date(toDateTime).setHours(23, 59, 59, 999) : null;
						const itemTime = itemDate.getTime();

						if (from !== null && itemTime < from) return false;
						if (to !== null && itemTime > to) return false;
						return true;
					});
				});
			}
		}

		if (monthFilterKey && monthFilter !== '') {
			const resolveKey = (key: string | null): string | null => {
				if (!key) return null;
				if (!data || data.length === 0) return key;
				if (key in (data[0] as Record<string, unknown>)) return key;
				const normalize = (s: string) =>
					String(s)
						.toLowerCase()
						.replace(/[^a-z0-9]/g, '');
				const target = normalize(key);
				const found = Object.keys(data[0]).find((k) => {
					const nk = normalize(k);
					return nk.includes(target) || target.includes(nk);
				});
				return found ?? null;
			};

			const actualKey = resolveKey(monthFilterKey);
			if (!actualKey) {
				console.warn('Month filter key not found on row keys.', {
					monthFilterKey,
					sampleRowKeys: data[0] ? Object.keys(data[0]) : [],
				});
			} else {
				result = result.filter((item) => {
					const raw = (item as Record<string, unknown>)[actualKey];
					const itemDate = parseDate(raw);
					if (!itemDate) return false;
					return itemDate.getMonth() + 1 === Number(monthFilter);
				});
			}
		}

		if (globalFilter.trim() !== '') {
			const searchTerm = globalFilter.toLowerCase();
			result = result.filter((item) =>
				Object.values(item).some((val) =>
					typeof val === 'string'
						? val.toLowerCase().includes(searchTerm)
						: String(val).toLowerCase().includes(searchTerm)
				)
			);
		}

		return result;
	}, [
		data,
		alphaFilter,
		filterKey,
		fromDateTime,
		toDateTime,
		globalFilter,
		dateFilterKey,
		monthFilter,
		monthFilterKey,
	]);

	const table = useReactTable({
		data: filteredData,
		columns: customColumns?.length ? customColumns : ([] as ColumnDef<T, U>[]),
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

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="w-full">
				<div className="min-w-full py-2">
					{title && <h1 className="mb-8 font-bold underline uppercase text-start">{title}</h1>}

					<TableFilters
						fromDate={fromDate}
						toDate={toDate}
						setFromDate={setFromDate}
						setToDate={setToDate}
						alphaFilter={alphaFilter}
						setAlphaFilter={setAlphaFilter}
						enableDateSorting={enableDateSorting}
						enableLetterSorting={enableLetterSorting}
						dateFilterKey={dateFilterKey}
						setDateFilterKey={setDateFilterKey}
						monthFilter={monthFilter}
						setMonthFilter={setMonthFilter}
						monthFilterKey={monthFilterKey}
						setMonthFilterKey={setMonthFilterKey}
						enableDropdownFilters={enableDropdownFilters}
					/>

					<TableHeaderControls<T>
						isDynamic={isDynamic}
						globalFilter={globalFilter}
						setGlobalFilter={setGlobalFilter}
						table={table}
						pageSize={pageSize}
						setPageSize={setPageSize}
						pageSizeOptions={pageSizeOptions}
						tableId={generatedTableId}
						data={data}
						enableExport={enableExport}
						enableSearch={enableSearch}
					/>

					<TableDisplay
						table={table}
						wrapText={wrapText}
						columns={customColumns as unknown as ColumnDef<T, unknown>[]}
						isDynamic={isDynamic}
						data={data}
						tableId={generatedTableId}
						showFooter={showFooter}
						enableRowFilters={enableRowFilters}
						filterableKeys={filterableKeys}
					/>

					{enablePagination && <PaginationControls table={table as unknown as ReactTableType<unknown>} />}
				</div>
			</div>
		</div>
	);
};

export default DynamicDataTable;
