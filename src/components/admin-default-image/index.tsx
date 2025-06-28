import AdminImage from '/admin.png';
const AdminDefaultImage = ({ height = 70, width = 70 }: { height?: number; width?: number }) => {
	return <img height={height} width={width} src={AdminImage} alt="Admin" />;
};

export default AdminDefaultImage;
