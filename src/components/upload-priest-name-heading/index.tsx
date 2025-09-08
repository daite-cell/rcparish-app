import React from 'react';

interface UploadPriestNameProps {
	name: string;
	className?: string;
}

const UploadPriestNameHeading: React.FC<UploadPriestNameProps> = ({ name, className }) => {
	return (
		<p className={`font-semibold text-[18px] ${className ?? ''}`} id="upload_priest_name">
			{name}
		</p>
	);
};

export default UploadPriestNameHeading;
