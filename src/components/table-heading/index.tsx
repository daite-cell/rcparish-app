import { memo } from 'react';

interface TableHeadingProps {
	text: string;
	className?: string;
}

const TableHeading = memo<TableHeadingProps>(({ text, className }) => {
	return <h2 className={`text-xs font-semibold my-2 uppercase  ml-8 ${className}`}>{text}</h2>;
});

export default TableHeading;
