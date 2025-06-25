import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

type FormButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	label: string;
};

const FormButton: React.FC<FormButtonProps> = ({ label, className, ...rest }) => {
	return (
		<Button
			className={cn(
				'text-[#d7c49e] bg-[#343148] text-[12px] border-none h-7 w-[90px] mt-5 mr-2 px-4 text-center transition duration-500 rounded-none font-normal hover:text-[#343148] hover:bg-[#d7c49e] hover:cursor-pointer',
				className
			)}
			{...rest}
		>
			{label}
		</Button>
	);
};

export default FormButton;
