import { useStore } from '@/store/store';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ClearRowSelectionOnRouteChange = () => {
	const location = useLocation();
	const { handleCloseRow, handleCloseEditRow } = useStore();

	useEffect(() => {
		handleCloseRow();
		handleCloseEditRow();
	}, [location.pathname, handleCloseRow, handleCloseEditRow]);

	return null;
};

export default ClearRowSelectionOnRouteChange;
