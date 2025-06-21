import { formatPathToTitle } from '@/utils/formatPathToTitle';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useAutoDocumentTitle = (): void => {
	const location = useLocation();

	useEffect(() => {
		const title = formatPathToTitle(location.pathname, {
			separator: ' - ',
			defaultTitle: 'Home',
		});
		document.title = title;
	}, [location.pathname]);
};
