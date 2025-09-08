import { memo } from 'react';

interface InfoRowProps {
	label: string;
	value?: string | number;
}

const InfoRow = memo(({ label, value }: InfoRowProps) => {
	return (
		<div className="mb-4">
			<p className="my-2 text-xs font-bold text-gray-700">{label}</p>
			{value !== '' && (
				<p className="text-xs text-gray-900 min-h-[20px]">
					{typeof value === 'string' || typeof value === 'number' ? value : ''}
				</p>
			)}
		</div>
	);
});

export default InfoRow;
