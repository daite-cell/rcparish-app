import { memo } from 'react';
import { Link } from 'react-router-dom';

interface TextLinkProps {
	to: string;
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
}

const TextLink = memo(({ to, children, className, onClick }: TextLinkProps) => {
	return (
		<Link onClick={onClick} to={to} className={`${className ?? ''} hover:underline text-[#0d73c4] hover:text-blue-800`}>
			{children}
		</Link>
	);
});

export default TextLink;
