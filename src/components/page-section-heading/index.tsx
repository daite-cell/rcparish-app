const PageSectionHeading = ({ title, className }: { title: string; className?: string }) => {
	return <h1 className={`text-[16px] font-bold uppercase ${className}`}>{title}</h1>;
};

export default PageSectionHeading;
