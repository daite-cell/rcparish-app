import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface Column {
	header: string;
	accessorKey: string;
}

interface PDFExporterProps<T> {
	data: T[];
	columns: Column[];
	tableId: string;
	onComplete?: () => void;
}

export default function PDFExporter<T>({ data, columns, tableId, onComplete }: PDFExporterProps<T>) {
	const generatePDF = () => {
		if (!data.length) {
			alert('No data to export!');
			return;
		}

		const doc = new jsPDF();
		const tableColumn = columns.map((col) => col.header);
		const tableRows = data.map((row) =>
			columns.map((col) => {
				const val = (row as Record<string, unknown>)[col.accessorKey];
				return typeof val === 'string' || typeof val === 'number' ? val : JSON.stringify(val);
			})
		);

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
		<button onClick={generatePDF} className="w-full text-left">
			PDF
		</button>
	);
}
