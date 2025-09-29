import { useState, useRef, useEffect } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface Option {
	label: string;
	value: string;
}

interface UncontrolledSingleSelectDropdownProps {
	label?: string;
	options: Option[];
	value?: string;
	onChange?: (value: string) => void;
	placeholder?: string;
	className?: string;
	disabled?: boolean;
	error?: string;
}

const UncontrolledSingleSelectDropdown = ({
	label,
	options = [],
	value,
	onChange,
	placeholder = 'Select an option',
	className = '',
	disabled = false,
	error,
}: UncontrolledSingleSelectDropdownProps) => {
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (open && inputRef.current) {
			inputRef.current.focus();
		}
	}, [open]);

	const selectedOption = options.find((o) => o.value === value);
	const filteredOptions = options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase()));

	return (
		<div className="grid w-full gap-2">
			{label && <label className="text-[12px]">{label}</label>}

			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						className={`w-full h-8 justify-between rounded-[2px] text-[12px] ${className} ${
							error ? 'border-primary' : ''
						}`}
						disabled={disabled}
					>
						{selectedOption?.label || <span className="text-muted-foreground">{placeholder}</span>}
						<ChevronDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
					</Button>
				</PopoverTrigger>

				<PopoverContent
					className="w-[var(--radix-popover-trigger-width)] max-h-[300px] overflow-y-auto p-2"
					align="start"
				>
					<input
						ref={inputRef}
						title="search"
						type="text"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="w-full mb-2 px-2 py-1 text-[12px] border focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
					/>

					<Command>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup>
							{filteredOptions.map((option) => (
								<CommandItem
									key={option.value}
									value={option.value}
									onSelect={() => {
										onChange?.(option.value);
										setOpen(false);
										setSearch('');
									}}
									className={`
										flex items-center gap-2 cursor-pointer px-1 py-2 !rounded-none
										${value === option.value ? 'bg-primary text-white' : 'text-black'}
										data-[highlighted]:bg-primary data-[highlighted]:text-white`}
								>
									<input
										title="select"
										type="checkbox"
										checked={value === option.value}
										readOnly
										className="w-3 h-3 accent-transparent"
									/>
									<span className="text-[12px]">{option.label}</span>
								</CommandItem>
							))}
						</CommandGroup>
					</Command>
				</PopoverContent>
			</Popover>

			{error && <p className="text-[11px] text-red-500 font-medium -mt-1">{error}</p>}
		</div>
	);
};

export default UncontrolledSingleSelectDropdown;
