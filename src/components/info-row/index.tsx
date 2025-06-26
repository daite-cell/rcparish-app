import { memo } from 'react';

interface InfoRowProps {
	label: string;
	value?: string | number;
}

const InfoRow = memo(({ label, value }: InfoRowProps) => {
	return (
		<div className="mb-4">
			<p className="text-xs  font-bold text-gray-700 my-2">{label}</p>
			<p className="text-xs text-gray-900 min-h-[20px]">{value || '-'}</p>
		</div>
	);
});

export default InfoRow;
