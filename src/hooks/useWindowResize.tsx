import { useState, useLayoutEffect } from 'react'

const WindowResize = () => {
	const [size, setSize] = useState<number>();

	useLayoutEffect((): any => {
		function setScreenSize() {
			setSize(window.innerWidth);
		}

		window.addEventListener('resize', setScreenSize);
		setScreenSize();

		return (_: any) => window.removeEventListener('resize', setScreenSize);
	}, [])

	return size;
}

const useWindowResize = typeof window !== undefined ? WindowResize : () => window.innerWidth;

export default useWindowResize;