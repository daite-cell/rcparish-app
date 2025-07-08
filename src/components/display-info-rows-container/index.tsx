import { toTitleCaseFromSnake } from '@/utils/toTitleCaseFromSnake';
import InfoRow from '../info-row';
import InfoSectionRowHeading from '../info-section-row-heading';

interface DisplayInfoRowContainerProps {
	data: Record<string, string | number | undefined | null>;
	heading?: string;
}

const DisplayInfoRowContainer = ({ data, heading }: DisplayInfoRowContainerProps) => {
	return (
		<>
			{heading && <InfoSectionRowHeading className="uppercase" title={heading} />}
			{Object.entries(data).map(([label, value], index) => (
				<InfoRow key={index} label={toTitleCaseFromSnake(label)} value={value ?? ''} />
			))}
		</>
	);
};

export default DisplayInfoRowContainer;
