import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { memo, useState } from 'react';

interface SingleSelectDropdownProps {
	label: string;
	options?: { label: string; value: string }[];
	value?: string;
	placeholder?: string;
}

const SingleSelectDropdown = memo(
	({
		label,
		options = [
			{ label: 'option1', value: 'option1' },
			{ label: 'option2', value: 'option2' },
		],
		value,

		placeholder = 'Select an option',
	}: SingleSelectDropdownProps) => {
		const [open, setOpen] = useState(false);
		const [selected, setSelected] = useState<string>(options[0].value);
		const onChange = (value: string) => {
			setSelected(value);
			setOpen(false);
		};
		const selectedLabel = options.find((o) => o.value === value)?.label;

		return (
			<div className="grid w-full gap-2">
				<label className="text-[12px] font-sm">{label}</label>
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							role="combobox"
							aria-expanded={open}
							className="w-full h-8 justify-between rounded-[2px] text-[12px] font-sm "
						>
							{selectedLabel || <span className="text-muted-foreground">{placeholder}</span>}
							<ChevronDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-[380px] px-2">
						<Command>
							<input
								title="search"
								onChange={(e) => setSelected(e.target.value)}
								className="px-3 mx-2 placeholder:font-normal "
							/>
							<CommandEmpty>No results found.</CommandEmpty>
							<CommandGroup>
								{options.map((option) => (
									<CommandItem
										key={option.value}
										value={selected}
										onSelect={() => {
											onChange?.(option.value);
											setOpen(false);
										}}
										className="flex items-center hover:!bg-primary  "
									>
										<input
											title="select option"
											checked={selected === option.value}
											value={option.value}
											type="checkbox"
											className="w-4 h-4 text-primary text-normal"
										/>
										<span className="text-[12px] font-sm">{option.label}</span>
									</CommandItem>
								))}
							</CommandGroup>
						</Command>
					</PopoverContent>
				</Popover>
			</div>
		);
	}
);

export default SingleSelectDropdown;
