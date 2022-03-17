import {useMediaQuery} from '@mui/material';

export const useDesktop = () => {
	const isDesktop = useMediaQuery('(max-width: 1400px) and (min-width: 1200px)');
	return {isDesktop};
};

export const useTablet = () => {
	const isTablet = useMediaQuery('(max-width: 1024px) and (min-width: 500px)');
	return {isTablet};
};

export const useMobile = () => {
	const isMobile = useMediaQuery('(max-width: 500px)');
	return {isMobile};
};
