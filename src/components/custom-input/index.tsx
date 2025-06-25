import { cn } from '@/lib/utils';
import { Input } from '../ui/input';

const CustomInput = ({
	disabled,
	id,
	name,
	type,
	className,
	...props
}: React.InputHTMLAttributes<HTMLInputElement>) => (
	<Input
		disabled={disabled}
		id={id}
		name={name}
		type={type}
		className={cn('w-full !h-8 justify-between text-[12px] font-sm placeholder:text-xs ', className)}
		{...props}
	/>
);

export default CustomInput;
