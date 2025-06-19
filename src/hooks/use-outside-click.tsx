import { useEffect, useRef, type RefObject } from 'react';

type Callback = () => void;

const useOutsideClick = <T extends HTMLElement = HTMLElement>(callback: Callback): RefObject<T | null> => {
	const ref = useRef<T>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [callback]);

	return ref;
};

export default useOutsideClick;
