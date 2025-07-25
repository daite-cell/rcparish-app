import { cn } from '@/lib/utils';

const CustomTextarea = ({
	id,
	name,
	className,
	rows = 4,
	...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
	<textarea
		id={id}
		name={name}
		className={cn(
			'w-full mt-3 rounded-[2px] border border-input bg-background px-3 py-2 text-[12px] ring-offset-background placeholder:text-muted-foreground placeholder:text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
			className
		)}
		rows={rows}
		{...props}
	/>
);

export default CustomTextarea;
