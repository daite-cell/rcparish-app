import type { InfoHeadingTitleProps } from '@/types';
import { memo } from 'react';

const InfoHeadingTitle = memo(({ title, style }: InfoHeadingTitleProps) => (
	<p className="mt-5 mb-2 text-justify text-[15px] leading-[150%]">
		<strong>
			<span className={`text-[16px] ${style ?? ''} leading-[150%] font-arial font-bold`}>{title}</span>
		</strong>
	</p>
));

export default InfoHeadingTitle;
