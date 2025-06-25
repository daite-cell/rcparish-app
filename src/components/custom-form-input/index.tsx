import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import React from 'react';

import { CustomInput, CustomTextarea } from '../index';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	name?: string;
	className?: string;
	labelClassName?: string;
	type?: string;
	disabled?: boolean;
}

export const CustomFormInput = React.memo(
	({ label, name, type = 'text', className, labelClassName, disabled = false, ...props }: FormInputProps) => {
		const isTextarea = type === 'textarea';

		return (
			<div className="grid w-full items-center gap-2 font-[12px]">
				<Label htmlFor={name} className={cn('text-[12px] font-normal ', labelClassName)}>
					{label}
				</Label>

				{isTextarea ? (
					<CustomTextarea
						id={name}
						name={name}
						className={className}
						{...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
					/>
				) : (
					<CustomInput
						disabled={disabled}
						id={name}
						name={name}
						type={type}
						aria-label={label}
						className={className}
						{...props}
					/>
				)}
			</div>
		);
	}
);

export default CustomFormInput;
