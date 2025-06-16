import { useLocation } from 'react-router-dom';
import { RequestToBishop, SermonSection } from '../../components/index';

const DashboardGenericPage = () => {
	const location = useLocation();
	return <> {location.pathname === '/request_to_bishop' ? <RequestToBishop /> : <SermonSection />}</>;
};

export default DashboardGenericPage;
