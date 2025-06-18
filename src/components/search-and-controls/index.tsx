import React from 'react';
import { Input } from '@/components/ui/input';
import { ColumnVisibilityDropdown } from '@/components';
import type { Table as ReactTableType } from '@tanstack/react-table';

interface SearchAndControlsProps {
	globalFilter: string;
	setGlobalFilter: (value: string) => void;
	isDynamic: boolean;
	table: ReactTableType<unknown>;
	pageSize: number;
	setPageSize: (size: number) => void;
	pageSizeOptions: number[];
}

const SearchAndControls: React.FC<SearchAndControlsProps> = ({
	globalFilter,
	setGlobalFilter,
	isDynamic,
	table,
	pageSize,
	setPageSize,
	pageSizeOptions,
}) => {
	return (
		<div className="flex flex-col md:flex-row justify-between items-center text-[13px] my-3">
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
						<ColumnVisibilityDropdown table={table} />
					</div>
				)}
			</div>

			<div className="flex items-center space-x-2">
				<span>Show</span>
				<div className="relative">
					<select
						title="select"
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
								{size === table.getRowModel().rows.length ? 'All' : size}
							</option>
						))}
					</select>
					<div className="absolute inset-y-0 flex items-center text-gray-500 pointer-events-none right-2">▼</div>
				</div>
				<span>entries</span>
			</div>
		</div>
	);
};

export default SearchAndControls;
