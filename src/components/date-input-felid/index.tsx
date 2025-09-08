import * as React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface DateInputFieldProps {
	label: string;
	placeholder?: string;
	value?: Date | undefined;
	onChange?: (date: Date | undefined) => void;
	error?: string;
}

const DateInputField = React.memo(
	({ label, placeholder = 'dd-mm-yyyy', value, onChange, error }: DateInputFieldProps) => {
		const [open, setOpen] = React.useState(false);

		return (
			<div className="w-full">
				<Label htmlFor="date" className="px-1 text-[12px] font-normal">
					{label}
				</Label>

				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							id="date"
							type="button"
							className="w-full mt-2 !h-8 justify-between rounded-[2px] font-normal"
						>
							{value ? value?.toLocaleDateString() : placeholder}
							<CalendarIcon className="w-4 h-4 opacity-50" />
						</Button>
					</PopoverTrigger>

					<PopoverContent className="w-auto overflow-hidden" align="start">
						<Calendar
							mode="single"
							selected={value}
							captionLayout="dropdown"
							onSelect={(selectedDate) => {
								onChange?.(selectedDate);
								setOpen(false);
							}}
						/>
					</PopoverContent>
				</Popover>

				{error && <p className="text-xs text-red-500 mt-1">{error}</p>}
			</div>
		);
	}
);

export default DateInputField;
