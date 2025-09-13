import { DateInputField, FormButton } from '@/components';
import { Label } from '../ui/label';
import { useRouteName } from '@/utils/getRouteName';
import { alphabet, dateOptions, months } from '@/data/tables-content';

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
	monthFilter?: string | number;
	setMonthFilter?: (val: string | number) => void;
	monthFilterKey?: string | null;
	setMonthFilterKey?: (val: string | null) => void;
	enableDropdownFilters?: boolean;
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
	monthFilter,
	setMonthFilter,
	monthFilterKey,
	setMonthFilterKey,
	enableDropdownFilters,
}: TableFiltersProps) => {
	const type = useRouteName('type');

	return (
		<div className="mb-5">
			{enableDateSorting && (
				<div className="flex flex-col items-center gap-4 md:flex-row">
					{enableDropdownFilters && (
						<div className="flex flex-col gap-1 flex-1">
							<Label className="text-xs font-normal">Select the Date</Label>
							<select
								title="Select the Date"
								value={dateFilterKey ?? ''}
								onChange={(e) =>
									setDateFilterKey(e.target.value ? (e.target.value as 'birth_date' | 'ordination_date') : null)
								}
								className="w-full flex-1 mt-1 h-8 border px-3 py-[6px] text-xs outline-none"
							>
								<option value="">Select Date Type</option>
								<option value="birth_date">Birth Date</option>
								<option value="ordination_date">Ordination Date</option>
							</select>
						</div>
					)}

					<div className="flex-1">
						<DateInputField label="From" value={fromDate} onChange={setFromDate} placeholder="Select from date" />
					</div>

					<div className="flex-1">
						<DateInputField label="To" value={toDate} onChange={setToDate} placeholder="Select to date" />
					</div>

					<div className="flex-1">
						<FormButton label="Clear" onClick={() => (setFromDate(undefined), setToDate(undefined))} />
					</div>
				</div>
			)}

			{['calender_dates', 'family_members', 'families'].includes(type as string) && (
				<>
					<select
						title="Select the Month"
						value={monthFilterKey ?? ''}
						onChange={(e) => setMonthFilterKey?.(e.target.value || null)}
						className="w-full mt-1 h-8 border px-3 py-2 text-xs outline-none"
					>
						{dateOptions[type as string]?.map((opt) => (
							<option key={opt.value} value={opt.value}>
								{opt.label}
							</option>
						))}
					</select>

					<div className="flex items-center gap-2 my-4 overflow-x-auto hide-scrollbar">
						{months.map((m) => (
							<button
								key={m.name}
								onClick={() => setMonthFilter?.(m.value)}
								className={`px-3 py-[6px] flex-1 text-xs ${
									monthFilter === m.value ? 'bg-[#343148ff] text-white' : 'bg-[#d7c49e] text-black'
								}`}
							>
								{m.name}
							</button>
						))}
					</div>
				</>
			)}

			{enableLetterSorting && (
				<div className="flex items-center my-4 overflow-x-auto border border-black hide-scrollbar">
					{alphabet.map((char) => (
						<button
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
			)}
		</div>
	);
};

export default TableFilters;
