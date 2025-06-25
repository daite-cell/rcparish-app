import { memo } from 'react';
import type { BulletPointListProps } from '@/types';

const BulletPointList = memo(({ items, style, ordered = false }: BulletPointListProps) => {
	const ListTag = ordered ? 'ol' : 'ul';

	return (
		<ListTag className={`${ordered ? 'list-decimal' : 'list-disc'} ml-10 space-y-2`}>
			{items?.map((item, index) => (
				<li key={index} className={`text-[16px] text-justify ${style}`}>
					{item}
				</li>
			))}
		</ListTag>
	);
});

export default BulletPointList;
