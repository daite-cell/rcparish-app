import { CSVLink } from 'react-csv';

interface Column {
	header: string;
	accessorKey: string;
}

interface CSVExporterProps<T> {
	data: T[];
	columns: Column[];
	fileName: string;
	onComplete?: () => void;
}

export default function CSVExporter<T>({ data, columns, fileName, onComplete }: CSVExporterProps<T>) {
	const headers = columns.map((col) => ({
		label: col.header,
		key: col.accessorKey,
	}));

	const csvData = data.map((item) => {
		const row: Record<string, unknown> = {};
		columns.forEach((col) => {
			row[col.accessorKey] = (item as Record<string, unknown>)[col.accessorKey];
		});
		return row;
	});

	return (
		<CSVLink
			data={csvData}
			headers={headers}
			filename={fileName}
			className="inline-block w-full"
			onClick={() => onComplete?.()}
		>
			Excel
		</CSVLink>
	);
}
