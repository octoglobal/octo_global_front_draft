import {useMediaQuery} from '@mui/material';

export const useDesktop = () => {
	const isDesktop = useMediaQuery('(max-width: 1400px) and (min-width: 1200px)');
	return {isDesktop};
};

export const useTouchDevice = () => {
	const isTouchDevice = useMediaQuery('(max-width: 1024px)');
	return {isTouchDevice};
};

export const useTablet = () => {
	const isTablet = useMediaQuery('(max-width: 1024px) and (min-width: 500px)');
	return {isTablet};
};

export const useCustom800 = () => {
	const isCustom800= useMediaQuery('(max-width: 800px)');
	return {isCustom800};
};
export const useCustom960 = () => {
	const isCustom960= useMediaQuery('(max-width: 960px)');
	return {isCustom960};
};

export const useMobile = () => {
	const isMobile = useMediaQuery('(max-width: 600px)');
	return {isMobile};
};

export const useCustomSize = (maxWidth : number | null = 0, minWidth : number | null = 0) => {
	if(!minWidth) return {
		isCustomSize: useMediaQuery(`(max-width: ${maxWidth}px)`)
	};
	if(!maxWidth) return {
		isCustomSize: useMediaQuery(`(min-width: ${minWidth}px)`)
	};

	const isCustomSize = useMediaQuery(`(max-width: ${maxWidth}px) and (min-width: ${minWidth}px)`);
	return {isCustomSize};
};
