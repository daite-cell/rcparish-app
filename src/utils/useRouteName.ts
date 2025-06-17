import { useParams } from 'react-router-dom';

export const useRouteName = (key: string): string | number | undefined => {
	const params = useParams();
	return params[key];
};
