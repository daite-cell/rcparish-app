import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form';

interface Option {
	label: string;
	value: string;
}

interface SingleSelectDropdownProps<TFieldValues extends FieldValues> {
	label?: string;
	name: Path<TFieldValues>;
	control: Control<TFieldValues>;
	options: Option[];
	placeholder?: string;
	className?: string;
	disabled?: boolean;
	error?: string;
}

function SingleSelectDropdown<TFieldValues extends FieldValues>({
	label,
	name,
	control,
	options = [],
	placeholder = 'Select an option',
	className = '',
	disabled = false,
	error,
}: SingleSelectDropdownProps<TFieldValues>) {
	return (
		<div className="grid w-full gap-2">
			<label className="text-[12px] font-sm">{label}</label>
			<Controller
				name={name}
				control={control}
				render={({ field }) => {
					const selectedOption = options.find((o) => o.value === field.value);

					return (
						<>
							<Popover>
								<PopoverTrigger asChild>
									<Button
										variant="outline"
										role="combobox"
										className={`w-full h-8 justify-between rounded-[2px] text-[12px] font-sm ${className} ${
											error ? 'border-red-500' : ''
										}`}
										disabled={disabled}
									>
										{selectedOption?.label || <span className="text-muted-foreground">{placeholder}</span>}
										<ChevronDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
									</Button>
								</PopoverTrigger>
								<PopoverContent className="w-[350px] max-h-[300px] overflow-y-auto p-2">
									<Command>
										<CommandEmpty>No results found.</CommandEmpty>
										<CommandGroup>
											{options.map((option) => (
												<CommandItem
													key={option.value}
													value={option.value}
													onSelect={() => field.onChange(option.value)}
													className="flex items-center gap-2 cursor-pointer"
												>
													<input
														type="checkbox"
														title="option"
														checked={field.value === option.value}
														readOnly
														className="w-4 h-4"
													/>
													<span className="text-[12px]">{option.label}</span>
												</CommandItem>
											))}
										</CommandGroup>
									</Command>
								</PopoverContent>
							</Popover>
							{error && <p className="text-[11px] text-red-500 font-medium -mt-1">{error}</p>}
						</>
					);
				}}
			/>
		</div>
	);
}

export default SingleSelectDropdown;
