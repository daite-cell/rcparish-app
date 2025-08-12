import { useStore } from '@/store/store';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ClearRowSelectionOnRouteChange = () => {
	const location = useLocation();
	const { handleCloseRow, handleCloseEditRow, handleCloseFamilyMembersRow } = useStore();

	useEffect(() => {
		handleCloseRow();
		handleCloseEditRow();
		handleCloseFamilyMembersRow();
	}, [location.pathname, handleCloseRow, handleCloseEditRow, handleCloseFamilyMembersRow]);

	return null;
};

export default ClearRowSelectionOnRouteChange;
