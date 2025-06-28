import type { InfoHeadingTitleProps } from '@/types';

const InfoHeadingTitle = ({ title, style }: InfoHeadingTitleProps) => {
	return (
		<p className={`mt-5 mb-2 text-justify text-[15px] leading-[150%]`}>
			<strong>
				<span className={`text-[16px] ${style ?? ''} leading-[150%] font-arial font-bold`}>{title}</span>
			</strong>
		</p>
	);
};

export default InfoHeadingTitle;
