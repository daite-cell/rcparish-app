import { useEffect, useRef, type RefObject } from 'react';

type Callback = () => void;

const useOutsideClick = <T extends HTMLElement = HTMLElement>(callback: Callback): RefObject<T | null> => {
	const ref = useRef<T>(null);
	const latestCb = useRef(callback);

	useEffect(() => {
		latestCb.current = callback;
	}, [callback]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent | TouchEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				latestCb.current();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('touchstart', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('touchstart', handleClickOutside);
		};
	}, []);

	return ref;
};

export default useOutsideClick;
