import type { InfoParagraphProps } from '@/types';
import { memo } from 'react';

const InfoParagraph = memo<InfoParagraphProps>(({ children, style }) => (
	<p className={`mt-5 mb-2 text-[16px] leading-relaxed text-justify indent-0 ${style}`}>{children}</p>
));

export default InfoParagraph;
