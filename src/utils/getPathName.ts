import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export function usePathName(): string {
	const location = useLocation();
	return useMemo(() => location.pathname, [location.pathname]);
}
