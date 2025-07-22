import * as React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form';
import { format } from 'date-fns';

interface ControlledDateInputFieldProps<T extends FieldValues> {
	label: string;
	name: Path<T>;
	control: Control<T>;
	placeholder?: string;
	disabled?: boolean;
	error?: string;
	type?: 'date' | 'month';
}

function ControlledDateInputField<T extends FieldValues>({
	label,
	name,
	control,
	placeholder = 'dd-mm-yyyy',
	disabled = false,
	error,
	type = 'date',
}: ControlledDateInputFieldProps<T>) {
	const [open, setOpen] = React.useState(false);

	return (
		<div className="w-full">
			<Label htmlFor={name} className="px-1 text-[12px] font-normal">
				{label}
			</Label>

			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								id={name}
								type="button"
								className="w-full mt-2 !h-8 justify-between rounded-[2px] font-normal text-[12px]"
								disabled={disabled}
							>
								{field.value
									? type === 'month'
										? format(new Date(field.value), 'yyyy-MM')
										: format(new Date(field.value), 'dd-MM-yyyy')
									: placeholder}
								<CalendarIcon className="w-4 h-4 opacity-50" />
							</Button>
						</PopoverTrigger>

						<PopoverContent className="w-auto overflow-hidden" align="start">
							<Calendar
								mode="single"
								selected={field.value ? new Date(field.value) : undefined}
								captionLayout="dropdown"
								onSelect={(selectedDate) => {
									if (!selectedDate) return;

									if (type === 'month') {
										const year = selectedDate.getFullYear();
										const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
										field.onChange(`${year}-${month}`);
									} else {
										field.onChange(selectedDate.toISOString());
									}

									setOpen(false);
								}}
							/>
						</PopoverContent>
					</Popover>
				)}
			/>

			{error && <p className="text-xs text-red-500 mt-1">{error}</p>}
		</div>
	);
}

export default ControlledDateInputField;
