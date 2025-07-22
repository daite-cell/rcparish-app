import { DateInputField, FormButton } from '@/components';

interface TableFiltersProps {
	fromDate: Date | undefined;
	toDate: Date | undefined;
	setFromDate: (date: Date | undefined) => void;
	setToDate: (date: Date | undefined) => void;
	alphaFilter: string;
	setAlphaFilter: (val: string) => void;
	enableDateSorting?: boolean;
	enableLetterSorting?: boolean;
}

const TableFilters = ({
	fromDate,
	toDate,
	setFromDate,
	setToDate,
	alphaFilter,
	setAlphaFilter,
	enableDateSorting = false,
	enableLetterSorting = false,
}: TableFiltersProps) => {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

	return (
		<div className="mb-5">
			{enableDateSorting && (
				<div className="flex flex-col items-center gap-4 md:flex-row">
					<DateInputField label="From" value={fromDate} onChange={setFromDate} placeholder="Select from date" />
					<DateInputField label="To" value={toDate} onChange={setToDate} placeholder="Select to date" />
					<FormButton
						label="Clear"
						onClick={() => {
							setFromDate(undefined);
							setToDate(undefined);
						}}
					/>
				</div>
			)}

			{enableLetterSorting && (
				<div className="flex items-center my-4 overflow-x-auto border border-black rounded-md hide-scrollbar">
					{['All', ...alphabet].map((char) => (
						<button
							type="button"
							key={char}
							onClick={() => setAlphaFilter(char)}
							className={`px-3 py-[6px] flex-1 text-xs transition-colors ${
								alphaFilter === char ? 'bg-[#343148ff] text-white' : 'bg-[#d7c49e] text-black'
							}`}
						>
							{char}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default TableFilters;
