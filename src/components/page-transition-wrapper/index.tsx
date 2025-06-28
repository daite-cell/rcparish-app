import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from '../loading';

const PageTransitionWrapper = ({ children, withText }: { children: React.ReactNode; withText?: string }) => {
	const location = useLocation();
	const [showContent, setShowContent] = useState(false);

	useEffect(() => {
		setShowContent(false);
		const timeout = setTimeout(() => {
			setShowContent(true);
		}, 300);

		return () => clearTimeout(timeout);
	}, [location.pathname]);

	return showContent ? <>{children}</> : <Loading withText={withText} />;
};

export default PageTransitionWrapper;
