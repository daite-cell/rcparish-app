import { Link } from 'react-router-dom';
import React from 'react';

interface TextLinkProps {
	to: string;
	children: React.ReactNode;
	className?: string;
}

const TextLink: React.FC<TextLinkProps> = ({ to, children, className }) => {
	return (
		<Link to={to} className={`hover:underline text-[#0d73c4] hover:text-blue-800 ${className ?? ''}`}>
			{children}
		</Link>
	);
};

export default TextLink;
