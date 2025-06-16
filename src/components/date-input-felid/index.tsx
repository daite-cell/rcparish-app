import * as React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface DateInputFieldProps {
	label: string;
	placeHolder?: string;
	date?: Date;
	// eslint-disable-next-line no-unused-vars
	setDate?: (date: Date | undefined) => void;
	hasDate?: boolean;
}
const DateInputField = React.memo(({ label, placeHolder = 'dd-mm-yy', date, setDate }: DateInputFieldProps) => {
	const [open, setOpen] = React.useState(false);

	return (
		<div className="w-full">
			<Label htmlFor="date" className="px-1 text-[12px] font-normal">
				{label}
			</Label>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button variant="outline" id="date" className="w-full mt-2 !h-8 justify-between rounded-[2px] font-normal ">
						{date ? date.toLocaleDateString() : placeHolder}
						<CalendarIcon />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto overflow-hidden " align="start">
					<Calendar
						mode="single"
						selected={date}
						captionLayout="dropdown"
						onSelect={(selected) => {
							setDate?.(selected);
							setOpen(false);
						}}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
});

export default DateInputField;
