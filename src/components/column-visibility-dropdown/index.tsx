import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import type { Table } from '@tanstack/react-table';

interface ColumnVisibilityDropdownProps<TData> {
	table: Table<TData>;
}

const ColumnVisibilityDropdown = <TData,>({ table }: ColumnVisibilityDropdownProps<TData>) => {
	const columns = table
		.getAllColumns()
		.filter((col) => col.getCanHide() && col.columnDef?.meta?.isExportable !== false);
	const handleRemoveAll = () => {
		table.getAllColumns().forEach((col) => {
			if (col.getCanHide()) {
				col.toggleVisibility(false);
			}

			if (['edit', 'delete', 'view', 'select', 'Prior Dignitaries'].includes(col.id)) {
				col.toggleVisibility(false);
			}
		});
	};

	const handleRestoreAll = () => {
		table.getAllColumns().forEach((col) => {
			col.toggleVisibility(true);
		});
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className="text-[#d7c49e] h-8 bg-[#343148] text-[12px] border-none min-w-[90px]  px-4 py-1 text-center transition duration-500 rounded-none float-left hover:text-[#343148] hover:bg-[#d7c49e] hover:cursor-pointer">
					Select Columns <ChevronDown className="w-4 h-4" />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end" className="w-56 max-h-[300px] overflow-y-auto">
				<DropdownMenuItem onClick={handleRemoveAll} className="cursor-pointer ml-3">
					Remove all
				</DropdownMenuItem>
				<DropdownMenuItem onClick={handleRestoreAll} className="cursor-pointer ml-3">
					Restore visibility
				</DropdownMenuItem>

				<div className="border-t my-1" />

				{columns.map((column) => (
					<label key={column.id} className="flex items-center gap-2 px-2 py-1 cursor-pointer">
						<input
							type="checkbox"
							className="accent-gray-600 focus:outline-none"
							checked={column.getIsVisible()}
							onChange={(e) => column.toggleVisibility(e.target.checked)}
						/>
						{typeof column.columnDef.header === 'string' ? column.columnDef.header : String(column.id)}
					</label>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ColumnVisibilityDropdown;
