import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import React from 'react';
import { CustomInput, CustomTextarea } from '../index';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	name?: string;
	type?: string;
	className?: string;
	labelClassName?: string;
	disabled?: boolean;
	error?: string;
	placeholder?: string;
	register?: UseFormRegisterReturn;
	[key: string]: unknown;
}

export const CustomFormInput = React.memo(
	({
		label,
		name,
		type = 'text',
		className,
		labelClassName,
		disabled = false,
		error,
		register,
		...props
	}: FormInputProps) => {
		const isTextarea = type === 'textarea';

		return (
			<div className="grid w-full items-center gap-2 text-[12px]">
				<Label htmlFor={name} className={cn('text-[12px] font-normal', labelClassName)}>
					{label}
				</Label>

				{isTextarea ? (
					<CustomTextarea
						id={name}
						disabled={disabled}
						className={className}
						{...(register || {})}
						{...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
					/>
				) : (
					<CustomInput
						id={name}
						type={type}
						disabled={disabled}
						aria-label={label}
						className={className}
						{...(register || {})}
						{...props}
					/>
				)}

				{error && <p className="text-xs text-red-500">{error}</p>}
			</div>
		);
	}
);

export default CustomFormInput;
