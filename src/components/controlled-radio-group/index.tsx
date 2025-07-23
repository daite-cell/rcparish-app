import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';

interface Option {
	value: string;
	label: string;
}

interface ControlledRadioGroupProps<T extends FieldValues> {
	name: Path<T>;
	control: Control<T>;
	label?: string;
	options: Option[];
	error?: string;
	className?: string;
	itemClassName?: string;
	labelClassName?: string;
	orientation?: 'horizontal' | 'vertical';
	onChange?: (value: string) => void;
}

function ControlledRadioGroup<T extends FieldValues>({
	name,
	control,
	label,
	options,
	error,
	className,
	itemClassName,
	labelClassName,
	orientation = 'horizontal',
	onChange,
}: ControlledRadioGroupProps<T>) {
	return (
		<div className={cn('w-full', className)}>
			{label && (
				<Label htmlFor={name} className="text-xs font-normal mb-2 block">
					{label}
				</Label>
			)}

			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<RadioGroup
						className={cn('gap-4', orientation === 'horizontal' ? 'flex' : 'flex flex-col')}
						value={field.value}
						onValueChange={(val) => {
							field.onChange(val);
							onChange?.(val);
						}}
					>
						{options.map((option) => (
							<div key={option.value} className="flex items-center space-x-2">
								<RadioGroupItem
									value={option.value}
									id={`${name}-${option.value}`}
									className={cn(
										'border-2 border-gray-300',
										'data-[state=checked]:border-blue-600',
										'data-[state=checked]:bg-blue-600',
										'focus-visible:ring-2 focus-visible:ring-blue-400',
										itemClassName
									)}
								/>
								<Label
									htmlFor={`${name}-${option.value}`}
									className={cn(
										'flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 px-1 text-[12px] font-normal',
										labelClassName
									)}
								>
									{option.label}
								</Label>
							</div>
						))}
					</RadioGroup>
				)}
			/>

			{error && <p className="text-red-500 text-xs mt-1">{error}</p>}
		</div>
	);
}

export default ControlledRadioGroup;
