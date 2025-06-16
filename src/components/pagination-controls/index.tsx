import React from 'react';
import type { Table as ReactTableType } from '@tanstack/react-table';

interface PaginationControlsProps {
	table: ReactTableType<unknown>;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({ table }) => {
	const pageCount = table.getPageCount();
	const currentPage = table.getState().pagination.pageIndex;
	const visiblePages = 3;
	const startPage = Math.max(0, Math.min(currentPage - Math.floor(visiblePages / 2), pageCount - visiblePages));
	const endPage = Math.min(startPage + visiblePages, pageCount);

	return (
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
				{Array.from({ length: endPage - startPage }, (_, i) => {
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
				})}
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
	);
};

export default PaginationControls;
