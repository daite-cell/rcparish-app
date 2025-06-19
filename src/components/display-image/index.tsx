const DisplayImage = ({ image }: { image: string | undefined }) => {
	return (
		<div className="flex justify-center items-center h-[200px] w-full flex-1">
			{image ? (
				<img src={image} alt="Parish church" loading="lazy" className="max-h-full object-contain" />
			) : (
				<span className="text-sm text-gray-500">No image uploaded yet</span>
			)}
		</div>
	);
};

export default DisplayImage;
