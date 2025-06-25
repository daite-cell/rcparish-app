import { memo, useEffect, useState } from 'react';

interface PDFViewerProps {
	pdfUrl: string;
}

const PDFViewer = memo(({ pdfUrl }: PDFViewerProps) => {
	const [error, setError] = useState(false);
	const [isValidUrl, setIsValidUrl] = useState(true);

	useEffect(() => {
		setError(false);

		try {
			const url = new URL(pdfUrl);
			const isPDF = url.pathname.endsWith('.pdf');
			const isHttp = url.protocol === 'http:' || url.protocol === 'https:';

			setIsValidUrl(isPDF && isHttp);
		} catch {
			setIsValidUrl(false);
		}
	}, [pdfUrl]);

	if (!isValidUrl) {
		return (
			<div className="w-full h-screen flex items-center justify-center text-red-500 text-sm">
				Invalid or unsupported PDF URL provided.
			</div>
		);
	}

	return (
		<div className="w-full h-screen py-5">
			{error ? (
				<div className="flex items-center justify-center h-full text-red-500 text-sm">
					Failed to load PDF. Please try again later.
				</div>
			) : (
				<div className="w-full h-full relative">
					<embed
						src={`${pdfUrl}#toolbar=0`}
						type="application/pdf"
						className="w-full h-full"
						onError={() => setError(true)}
					/>

					<object data={pdfUrl} type="application/pdf" className={`w-full h-full ${error ? 'hidden' : 'block'}`}>
						<iframe
							src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
							className="w-full h-full"
							title="PDF Viewer"
							onError={() => setError(true)}
						/>
					</object>
				</div>
			)}
		</div>
	);
});

export default PDFViewer;
