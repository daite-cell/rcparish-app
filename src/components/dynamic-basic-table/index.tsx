import React from 'react';
import { useReactTable, getCoreRowModel, type ColumnDef, flexRender, type RowData } from '@tanstack/react-table';

export interface TableRow {
	[key: string]: string | number;
}

interface DynamicBasicProps<TData extends RowData = TableRow> {
	columns: ColumnDef<TData>[];
	data: TData[];
}

const DynamicBasicTable: React.FC<DynamicBasicProps> = ({ columns, data }) => {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className="overflow-x-auto">
			<table className="min-w-full mt-4 text-sm text-left border border-gray-400 text-[#36334b]">
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id} className="bg-[#d7c49e] text-[#343148ff]">
							{headerGroup.headers.map((header) => (
								<th key={header.id} className="p-1 border text-[13px] font-bold select-none" colSpan={header.colSpan}>
									{flexRender(header.column.columnDef.header, header.getContext())}
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
									<td key={cell.id} className="p-1 text-xs border border-[#e8e8e8]">
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
						))
					) : (
						<tr>
							<td colSpan={columns.length} className="py-4 text-center text-gray-500 border">
								No data available
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default DynamicBasicTable;
