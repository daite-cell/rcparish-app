import { DateInputField, FormButton } from '@/components';
import { Label } from '../ui/label';

interface TableFiltersProps {
	fromDate: Date | undefined;
	toDate: Date | undefined;
	setFromDate: (date: Date | undefined) => void;
	setToDate: (date: Date | undefined) => void;
	alphaFilter: string;
	setAlphaFilter: (val: string) => void;
	enableDateSorting?: boolean;
	enableLetterSorting?: boolean;
	dateFilterKey: 'birth_date' | 'ordination_date' | null;
	setDateFilterKey: (key: 'birth_date' | 'ordination_date' | null) => void;
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
	dateFilterKey,
	setDateFilterKey,
}: TableFiltersProps) => {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

	return (
		<div className="mb-5">
			{enableDateSorting && (
				<div className="flex flex-col items-center gap-4 md:flex-row">
					<div className="flex flex-col gap-1 flex-1">
						<Label className="text-xs font-normal">Select the Date</Label>
						<select
							title="Filter by status"
							value={dateFilterKey ?? ''}
							onChange={(e) =>
								setDateFilterKey(e.target.value ? (e.target.value as 'birth_date' | 'ordination_date') : null)
							}
							className="w-full mt-1 h-8 border border-gray-300 bg-white px-3 py-2 hover:bg-gray-50 text-xs  outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-50"
						>
							<option value="">Select Date Type</option>
							<option value="birth_date">Birth Date</option>
							<option value="ordination_date">Ordination Date</option>
						</select>
					</div>

					<div className="flex-1">
						<DateInputField label="From" value={fromDate} onChange={setFromDate} placeholder="Select from date" />
					</div>
					<div className="flex-1">
						<DateInputField label="To" value={toDate} onChange={setToDate} placeholder="Select to date" />
					</div>

					<div className="flex-1">
						<FormButton
							label="Clear"
							onClick={() => {
								setFromDate(undefined);
								setToDate(undefined);
							}}
						/>
					</div>
				</div>
			)}

			{enableLetterSorting && (
				<div className="flex items-center my-4 overflow-x-auto border border-black hide-scrollbar">
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
