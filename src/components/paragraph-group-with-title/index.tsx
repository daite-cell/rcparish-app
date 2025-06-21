import type { ParagraphGroupWithTitleProps } from '@/types';
import { InfoHeadingTitle, InfoParagraph } from '../index';

const ParagraphGroupWithTitle = ({ title, paragraphs, style }: ParagraphGroupWithTitleProps) => {
	return (
		<>
			<InfoHeadingTitle style="!text-[14px]  " title={title} />
			{paragraphs?.map((paragraph, index) => (
				<InfoParagraph style={style} key={index}>
					{paragraph}
				</InfoParagraph>
			))}
		</>
	);
};

export default ParagraphGroupWithTitle;
