import { memo } from 'react';

const SectionHeading = memo(({ title }: { title: string }) => (
	<h4 className="my-5 mt-5 py-2 text-xs font-semibold text-center uppercase ">{title}</h4>
));

export default SectionHeading;
