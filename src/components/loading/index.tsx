import LoadingGIF from '/loader.gif';

const Loading = ({ withText }: { withText?: string }) => {
	return (
		<div className="h-screen  bg-secondary flex flex-col justify-center items-center">
			{withText && <p className="text-primary font-bold text-xl">{withText}</p>}
			<img height={50} width={60} src={LoadingGIF} alt="Loading..." />
		</div>
	);
};

export default Loading;
