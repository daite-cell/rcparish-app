import { memo, useState } from 'react';

interface PDFViewerProps {
	pdfUrl: string;
}

const PDFViewer = memo(({ pdfUrl }: PDFViewerProps) => {
	const [error, setError] = useState(false);

	return (
		<div className="w-full h-screen py-5">
			{error ? (
				<div className="text-center text-red-500">Failed to load PDF. Please try again later.</div>
			) : (
				<embed
					src={`${pdfUrl}#toolbar=0`}
					type="application/pdf"
					className="w-full h-full"
					onError={() => setError(true)}
				/>
			)}
		</div>
	);
});

export default PDFViewer;
