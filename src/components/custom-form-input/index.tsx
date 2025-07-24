import React from 'react';
import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { CustomInput, CustomTextarea } from '../index';

type InputType = 'text' | 'number' | 'email' | 'textarea';

interface CustomFormInputProps<T extends FieldValues> {
	control: Control<T>;
	name: Path<T>;
	label?: string;
	type?: InputType;
	className?: string;
	labelClassName?: string;
	disabled?: boolean;
	error?: string;
	placeholder?: string;
}

function CustomFormInputInner<T extends FieldValues>({
	control,
	name,
	label,
	type = 'text',
	className,
	labelClassName,
	disabled = false,
	error,
	placeholder,
}: CustomFormInputProps<T>) {
	const isTextarea = type === 'textarea';

	return (
		<div className="grid w-full items-center gap-2 text-[12px]">
			<Label htmlFor={name} className={cn('text-[12px] font-normal', labelClassName)}>
				{label}
			</Label>

			<Controller
				control={control}
				name={name}
				render={({ field }) =>
					isTextarea ? (
						<CustomTextarea
							id={name}
							placeholder={placeholder}
							disabled={disabled}
							className={cn(className, error && 'border-red-500')}
							{...field}
						/>
					) : (
						<CustomInput
							id={name}
							type={type}
							placeholder={placeholder}
							disabled={disabled}
							aria-label={label}
							className={cn(className, error && 'border-red-500')}
							{...field}
						/>
					)
				}
			/>

			{error && <p className="text-xs text-red-500">{error}</p>}
		</div>
	);
}

const CustomFormInput = React.memo(CustomFormInputInner) as typeof CustomFormInputInner;
export default CustomFormInput;
