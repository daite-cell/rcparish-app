import AdminImage from '/admin.png';
const AdminDefaultImage = ({ height = 70, width = 70, src }: { height?: number; width?: number; src?: string }) => {
	return <img height={height} width={width} src={src || AdminImage} alt="Admin" />;
};

export default AdminDefaultImage;
