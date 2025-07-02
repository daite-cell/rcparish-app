import {
	useReactTable,
	getCoreRowModel,
	getSortedRowModel,
	getPaginationRowModel,
	getFilteredRowModel,
	type SortingState,
	type Table as ReactTableType,
	type ColumnDef,
	type CellContext,
	type Row,
	type ColumnMeta,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { Eye, Folder, Pencil, Settings, SquarePen, Trash } from 'lucide-react';
import mockData from '@/data/mock-data/mock-data.json';
import { PaginationControls, TableFilters, TableHeaderControls, TableDisplay } from '../index';
import { useStore } from '@/store/store';

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
	enableDateAndLetterSorting?: boolean;
	customColumns?: ColumnDef<T, U>[];
	includeCheckbox?: boolean;
	includePriorDignitaries?: boolean;
	onEdit?: (row: T) => void;
	onDelete?: (row: T) => void;
	onView?: (row: T) => void;
	columns?: CustomColumnMeta<T>[];
}

const DynamicDataTable = <T extends object, U>({
	data = mockData as T[],
	defaultPageSize = 10,
	title,
	isDynamic = true,
	wrapText = true,
	enableDateAndLetterSorting = false,
	tableId,
	filterKey = 'sub_station',
	customColumns = [],
	includeCheckbox = false,
	includePriorDignitaries = false,
	onEdit,
	onDelete,
	onView,
}: DynamicDataTableProps<T, U>) => {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [pageSize, setPageSize] = useState(defaultPageSize);
	const [globalFilter, setGlobalFilter] = useState('');
	const [alphaFilter, setAlphaFilter] = useState<string>('All');
	const [fromDate, setFromDate] = useState<Date | undefined>(undefined);
	const [toDate, setToDate] = useState<Date | undefined>(undefined);
	const generatedTableId = tableId ?? 'dynamic-data-table';
	const fromDateTime = fromDate?.getTime() ?? null;
	const toDateTime = toDate?.getTime() ?? null;
	const { handleSelectRow } = useStore();

	const filteredData = useMemo(() => {
		let result = [...data];

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
		if (dateKey && (fromDateTime || toDateTime)) {
			result = result.filter((item) => {
				const itemDateValue = (item as Record<string, unknown>)[dateKey];
				let itemDate: Date | null = null;

				if (typeof itemDateValue === 'string' || typeof itemDateValue === 'number') {
					itemDate = new Date(itemDateValue);
				} else if (itemDateValue instanceof Date) {
					itemDate = itemDateValue;
				}

				if (!itemDate || isNaN(itemDate.getTime())) return false;
				if (fromDateTime && itemDate.getTime() < fromDateTime) return false;
				if (toDateTime && itemDate.getTime() > toDateTime) return false;

				return true;
			});
		}

		return result;
	}, [data, alphaFilter, filterKey, fromDateTime, toDateTime]);

	const columns: ColumnDef<T, U>[] = useMemo(() => {
		if (customColumns?.length) return customColumns;

		if (!data || data.length === 0) return [];

		const formatHeader = (key: string) =>
			key.replace(/_/g, ' ').replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1));

		const uniqueKeys = Array.from(new Set(data.flatMap((item) => Object.keys(item as Record<string, unknown>))));

		const baseColumns: ColumnDef<T, U>[] = uniqueKeys.map((key) => ({
			accessorKey: key,
			header: formatHeader(key),
			cell: (info: CellContext<T, U>) => {
				const value = info.getValue();
				return value !== undefined && value !== null ? value.toString() : '';
			},
		}));

		const columnStart: ColumnDef<T, U>[] = [];

		if (includeCheckbox) {
			columnStart.push({
				id: 'select',
				header: () => <SquarePen className="w-4 h-4 text-center" />,
				cell: () => <input title="select" type="checkbox" />,
				enableSorting: false,
				meta: { isExportable: false },
				enableHiding: true,
			});
		}
		if (onEdit) {
			columnStart.push({
				id: 'edit',
				header: () => <Settings className="w-4 h-4 text-center" />,
				cell: ({ row }: CellContext<T, U>) => (
					<button title="Edit" onClick={() => onEdit(row.original)} className="hover:underline text-xs">
						<Pencil className="w-4 h-4 text-center" />
					</button>
				),
				meta: { isExportable: false },
				enableSorting: false,
				enableHiding: true,
			});
		}

		if (onView) {
			columnStart.push({
				id: 'view',
				header: 'Details',
				cell: ({ row }: CellContext<T, U>) => (
					<button
						type="button"
						onClick={() => {
							handleSelectRow(row.original);
							onView(row.original);
						}}
						title="View"
					>
						<Eye className="w-4 h-4 text-center" />
					</button>
				),
				meta: { isExportable: false },
				enableSorting: false,
				enableHiding: true,
			});
		}

		if (onDelete) {
			columnStart.push({
				id: 'delete',
				header: 'Delete',
				cell: ({ row }: { row: Row<T> }) => (
					<button
						type="button"
						title="Delete"
						onClick={() => onDelete(row.original)}
						className=" hover:underline text-xs"
					>
						<Trash className="w-4 h-4 text-center" />
					</button>
				),
				meta: { isExportable: false },
				enableSorting: false,
				enableHiding: true,
			});
		}

		if (includePriorDignitaries) {
			columnStart.push({
				id: 'Prior Dignitaries',
				header: 'Prior Dignitaries',
				cell: () => <Folder className="w-4 h-4 text-center" />,
				meta: { isExportable: false },
				enableHiding: true,
			});
		}

		return [...columnStart, ...baseColumns, ...customColumns];
	}, [data, includeCheckbox, includePriorDignitaries, onEdit, onDelete, onView, handleSelectRow, customColumns]);
	const table = useReactTable({
		data: filteredData,
		columns: columns,
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
				<div className="min-w-full py-2 sm:px-6 lg:px-8">
					{title && <h1 className="mb-8 font-bold underline uppercase text-start">{title}</h1>}

					{enableDateAndLetterSorting && (
						<TableFilters
							fromDate={fromDate}
							toDate={toDate}
							setFromDate={setFromDate}
							setToDate={setToDate}
							alphaFilter={alphaFilter}
							setAlphaFilter={setAlphaFilter}
						/>
					)}

					{isDynamic && (
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
						/>
					)}

					<TableDisplay
						table={table}
						wrapText={wrapText}
						columns={columns as unknown as ColumnDef<T, unknown>[]}
						isDynamic={isDynamic}
						data={data}
						tableId={generatedTableId}
					/>

					{isDynamic && data.length > 0 && <PaginationControls table={table as unknown as ReactTableType<unknown>} />}
				</div>
			</div>
		</div>
	);
};

export default DynamicDataTable;
