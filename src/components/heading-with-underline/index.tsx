import { memo } from 'react';

const HeadingWithUnderline = memo(({ text, className }: { text: string; className?: string }) => (
	<h1 className={`uppercase text-xl font-bold text-center underline mt-4 ${className}`}>{text}</h1>
));

export default HeadingWithUnderline;
