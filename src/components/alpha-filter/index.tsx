import React from 'react';

interface AlphaFilterProps {
	selected: string;
	onChange: (char: string) => void;
}

const AlphaFilter: React.FC<AlphaFilterProps> = React.memo(({ selected, onChange }) => {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	const handleClick = React.useCallback(
		(char: string) => {
			onChange(char);
		},
		[onChange]
	);

	return (
		<div className="flex items-center my-4 overflow-x-auto border border-black hide-scrollbar">
			{['All', ...alphabet].map((char, index) => (
				<button
					type="button"
					key={index}
					onClick={() => handleClick(char)}
					className={`px-3 py-[6px] flex-1 text-xs ${
						char === selected ? 'bg-[#343148ff] text-white' : 'bg-[#d7c49e] text-black'
					}`}
				>
					{char}
				</button>
			))}
		</div>
	);
});

export default AlphaFilter;
