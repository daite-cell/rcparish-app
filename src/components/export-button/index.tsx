import { ChevronDown } from 'lucide-react';
import { useState, useRef, Suspense, lazy, type Ref } from 'react';
import { createPortal } from 'react-dom';
import useOutsideClick from '@/hooks/use-outside-click';
import { Button } from '../ui/button';

const PDFExporter = lazy(() => import('../pdf-exporter'));
const CSVExporter = lazy(() => import('../csv-exporter'));

export interface ExportDropdownModalProps<T> {
	data: T[];
	columns: { header: string; accessorKey: string }[];
	tableId: string;
}

function ExportDropdownModal<T>({ data, columns, tableId }: ExportDropdownModalProps<T>) {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const menuRef = useOutsideClick(() => setIsOpen(false)) as Ref<HTMLDivElement | null>;

	const printTable = () => {
		const tableElement = document.getElementById(tableId);
		if (!tableElement) return alert('Table not found!');

		const newWin = window.open('', '_blank', 'width=900,height=600');
		if (!newWin) return;

		newWin.document.write(`
      <html>
        <head><title>Print Table</title></head>
        <body>${tableElement.outerHTML}</body>
      </html>
    `);

		newWin.document.close();
		newWin.focus();
		newWin.print();
		setTimeout(() => newWin.close(), 500);
	};

	return (
		<div className="relative flex justify-end w-full" ref={dropdownRef}>
			<Button
				onClick={() => setIsOpen(!isOpen)}
				className="text-[#d7c49e] bg-[#343148] text-[12px] border-none min-w-[90px] h-8  mr-2 px-4 py-1 text-center transition duration-500 rounded-none  hover:text-[#343148] hover:bg-[#d7c49e] hover:cursor-pointer"
			>
				Export <ChevronDown className="w-4 h-4" />
			</Button>

			{isOpen && (
				<div ref={menuRef} className="absolute right-0 z-50 w-48 mt-2 bg-white rounded-md shadow-lg top-full">
					<ul className="flex flex-col py-1 text-sm text-gray-700">
						<li className="px-4 py-2">
							<Suspense fallback={<span>Loading PDF...</span>}>
								<PDFExporter data={data} columns={columns} tableId={tableId} onComplete={() => setIsOpen(false)} />
							</Suspense>
						</li>
						<li className="px-4 py-2">
							<Suspense fallback={<span>Loading Excel...</span>}>
								<CSVExporter
									data={data}
									columns={columns}
									fileName={`${tableId}.csv`}
									onComplete={() => setIsOpen(false)}
								/>
							</Suspense>
						</li>
						<li className="px-4 py-2">
							<button
								onClick={() => {
									printTable();
									setIsOpen(false);
								}}
								className="w-full text-left"
							>
								Print
							</button>
						</li>
					</ul>
				</div>
			)}

			{isOpen && createPortal(<div className="fixed inset-0 z-40 bg-black/40" />, document.body)}
		</div>
	);
}

export default ExportDropdownModal;
