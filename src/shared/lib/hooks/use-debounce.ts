import { useState } from 'react';

export const useDebounce = <T extends (...args: any[]) => any>(func: T, ms: number): ((...args: Parameters<T>) => void) => {
	const [timerId, setTimerId] = useState<number | null>(null);

	const newFunc = (...args: Parameters<T>): void => {
		if (timerId) {
			window.clearTimeout(timerId);
		}
		setTimerId(
			window.setTimeout(() => {
				setTimerId(null);
				func.apply(this, args);
			}, ms)
		);
	};

	return newFunc as T;
};
