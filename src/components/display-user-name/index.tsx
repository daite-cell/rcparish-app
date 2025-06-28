interface DisplayUserNameProps {
	userName: string;
	as?: 'h1' | 'h2' | 'h3';
	className?: string;
}

const DisplayUserName = ({ userName, as: Tag = 'h1', className = '' }: DisplayUserNameProps) => {
	return <Tag className={`font-bold text-2xl text-[#998c70] mb-4 ${className}`}>{userName}</Tag>;
};

export default DisplayUserName;
