import { useEffect, useRef, type RefObject } from 'react';

type Callback = () => void;

const useOutsideClick = (callback: Callback): RefObject<HTMLElement | null> => {
	const ref = useRef<HTMLElement>(null);

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
