import React from 'react';
import AdminImage from '/admin.png';
interface AdminDefaultImageProps {
	height?: number;
	width?: number;
	src?: string;
	className?: string;
}

const AdminDefaultImage = React.memo(({ height = 70, width = 70, src, className }: AdminDefaultImageProps) => {
	return (
		<img
			height={height}
			width={width}
			src={src || AdminImage}
			className={className}
			loading="lazy"
			alt={src ? `Image for ${src}` : 'Admin'}
		/>
	);
});

export default AdminDefaultImage;
