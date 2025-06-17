const DisplayImage = ({ image }: { image: string | undefined }) => {
	return (
		<div className="flex justify-center items-center h-[200px] w-full flex-1">
			<img src={image} alt="Upload the parish church image / description to view" />
		</div>
	);
};

export default DisplayImage;
