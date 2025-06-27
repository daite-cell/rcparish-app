interface InfoSectionRowHeading {
	title: string;
	as?: 'h1' | 'h2' | 'h3';
	className?: string;
}

const InfoSectionRowHeading = ({ title, as: Tag = 'h1', className = '' }: InfoSectionRowHeading) => {
	return (
		<Tag className={`mt-[5px] text-[12px] font-bold text-[#998c70] underline pb-[10px] ${className}`}>{title}</Tag>
	);
};

export default InfoSectionRowHeading;
