import { memo } from 'react';

const DisplayImage = memo(({ image }: { image: string | undefined }) => {
	const imageElement = image ? (
		<img src={image} alt="Parish church" loading="lazy" className="max-h-full object-contain" />
	) : null;
	return (
		<div className="flex justify-center items-center h-[200px] w-full flex-1">
			{imageElement || <span className="text-sm text-gray-500">No image uploaded yet</span>}
		</div>
	);
});

DisplayImage.displayName = 'DisplayImage';

export default DisplayImage;
