import { SingleSelectDropdown, DateInputFelid } from '@/components';
import { Button } from '@/components/ui/button';

interface TableFiltersProps {
	fromDate: Date | undefined;
	toDate: Date | undefined;
	setFromDate: (date: Date | undefined) => void;
	setToDate: (date: Date | undefined) => void;
	alphaFilter: string;
	setAlphaFilter: (val: string) => void;
}

const TableFilters = ({ fromDate, toDate, setFromDate, setToDate, alphaFilter, setAlphaFilter }: TableFiltersProps) => {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	return (
		<>
			<div className="flex flex-col items-center gap-4 md:flex-row">
				<SingleSelectDropdown label="select the date" />
				<DateInputFelid label="From" value={fromDate} onChange={setFromDate} />
				<DateInputFelid label="To" value={toDate} onChange={setToDate} />
				<Button
					className="text-[#d7c49e] bg-[#343148] text-[12px] border-none min-w-[90px] mt-6 h-7 px-4 py-1"
					onClick={() => {
						setFromDate(undefined);
						setToDate(undefined);
					}}
				>
					Clear
				</Button>
			</div>
			<div className="flex items-center my-4 overflow-x-auto border border-black hide-scrollbar">
				{['All', ...alphabet].map((char) => (
					<button
						type="button"
						key={char}
						onClick={() => setAlphaFilter(char)}
						className={`px-3 py-[6px] flex-1 text-xs ${
							alphaFilter === char ? 'bg-[#343148ff] text-white' : 'bg-[#d7c49e] text-black'
						}`}
					>
						{char}
					</button>
				))}
			</div>
		</>
	);
};

export default TableFilters;
