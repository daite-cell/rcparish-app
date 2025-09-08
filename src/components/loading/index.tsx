import { memo } from 'react';
import LoadingGIF from '/loader.gif';

const Loading = memo(({ withText }: { withText?: string }) => (
	<div className="h-screen  bg-secondary flex flex-col justify-center items-center">
		{withText && <p className="text-primary font-bold text-xl">{withText}</p>}
		<img className="h-10 w-10" src={LoadingGIF} alt="Loading..." />
	</div>
));

export default Loading;
