import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const formatPathToTitle = (url: string): string => {
	const parts = url.split('/').filter(Boolean);

	if (parts.length === 0) return 'Home';

	const main = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
	const sub = parts[1]
		?.split('_')
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ');

	return sub ? `${main} - ${sub}` : main;
};

export const useAutoDocumentTitle = (): void => {
	const location = useLocation();

	useEffect(() => {
		const title = formatPathToTitle(location.pathname);
		document.title = title;
	}, [location.pathname]);
};
