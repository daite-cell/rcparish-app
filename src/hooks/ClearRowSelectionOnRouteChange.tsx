import { useStore } from '@/store/store';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ClearRowSelectionOnRouteChange = () => {
	const location = useLocation();
	const { handleCloseRow } = useStore();

	useEffect(() => {
		handleCloseRow();
	}, [location.pathname, handleCloseRow]);

	return null;
};

export default ClearRowSelectionOnRouteChange;
