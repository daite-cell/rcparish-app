import React from 'react';

interface AlphaFilterProps {
	selected: string;
	// eslint-disable-next-line no-unused-vars
	onChange: (char: string) => void;
}

const AlphaFilter: React.FC<AlphaFilterProps> = ({ selected, onChange }) => {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

	return (
		<div className="flex items-center my-4 overflow-x-auto border border-black hide-scrollbar">
			{['All', ...alphabet].map((char) => (
				<button
					key={char}
					onClick={() => onChange(char)}
					className={`px-3 py-[6px] flex-1 text-xs ${
						selected === char ? 'bg-[#343148ff] text-white' : 'bg-[#d7c49e] text-black'
					}`}
				>
					{char}
				</button>
			))}
		</div>
	);
};

export default AlphaFilter;
