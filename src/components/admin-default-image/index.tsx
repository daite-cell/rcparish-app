import AdminImage from '/admin.png';
const AdminDefaultImage = ({
	height = 70,
	width = 70,
	src,
	className,
}: {
	height?: number;
	width?: number;
	src?: string;
	className?: string;
}) => {
	return <img height={height} width={width} src={src || AdminImage} className={className} alt="Admin" />;
};

export default AdminDefaultImage;
