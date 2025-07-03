import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface Column {
	header: string;
	accessorKey: string;
	meta?: {
		isExportable?: boolean;
	};
}

interface PDFExporterProps<T> {
	data: T[];
	columns: Column[];
	tableId: string;
	onComplete?: () => void;
	className?: string;
	label?: string;
}

export default function PDFExporter<T>({
	data,
	columns,
	tableId,
	onComplete,
	className,
	label = 'PDF',
}: PDFExporterProps<T>) {
	const generatePDF = () => {
		if (!data.length) {
			alert('No data to export!');
			return;
		}

		const exportableColumns = columns.filter((col) => col.meta?.isExportable !== false);

		const tableColumn = exportableColumns.map((col) => col.header);
		const tableRows = data.map((row) =>
			exportableColumns.map((col) => {
				const val = (row as Record<string, unknown>)[col.accessorKey];
				return typeof val === 'string' || typeof val === 'number' ? val : JSON.stringify(val);
			})
		);

		const doc = new jsPDF();

		autoTable(doc, {
			head: [tableColumn],
			body: tableRows,
			styles: { fontSize: 8 },
			headStyles: {
				fillColor: [52, 49, 72],
				textColor: [215, 196, 158],
			},
		});

		doc.save(`${tableId}.pdf`);
		onComplete?.();
	};

	return (
		<button type="button" onClick={generatePDF} className={`w-full text-left ${className}`}>
			{label}
		</button>
	);
}
