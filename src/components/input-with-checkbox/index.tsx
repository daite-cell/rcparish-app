import React from 'react';
import { Controller, useWatch, type Control, type FieldValues, type Path } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import CustomFormInput from '../custom-form-input';

interface InputWithCheckBoxProps<T extends FieldValues> {
	control: Control<T>;
	name: Path<T>;
	checkboxName: Path<T>;
	label?: string;
	placeholder?: string;
	error?: string;
	checkboxLabel?: string;
	labelClassName?: string;
}

function InputWithCheckboxInner<T extends FieldValues>({
	control,
	name,
	checkboxName,
	label = 'Native Place',
	placeholder = 'Enter Native Place',
	error,
	checkboxLabel = 'Same as Birth Place',
	labelClassName,
}: InputWithCheckBoxProps<T>) {
	// Proper way to track checkbox value
	const isCheckboxChecked = useWatch({
		control,
		name: checkboxName,
	});

	return (
		<div className="space-y-2">
			<Label className={cn('text-xs font-normal', labelClassName)}>{label}</Label>

			<div className="flex gap-2 items-center">
				<Label className="text-[10px] font-normal">{checkboxLabel}</Label>
				<Controller
					control={control}
					name={checkboxName}
					render={({ field }) => (
						<input
							title="select"
							type="checkbox"
							checked={field.value}
							onChange={(e) => field.onChange(e.target.checked)}
						/>
					)}
				/>
			</div>

			<Controller
				control={control}
				name={name}
				render={({ field }) => (
					<CustomFormInput
						{...field}
						control={control}
						name={name}
						placeholder={placeholder}
						disabled={!!isCheckboxChecked}
						error={error}
					/>
				)}
			/>
		</div>
	);
}

const InputWithCheckbox = React.memo(InputWithCheckboxInner) as typeof InputWithCheckboxInner;
export default InputWithCheckbox;
