import {Link, styled} from '@mui/material';

export const useHomeShopSwiperItem = () => {

	const LinkMUI = styled(Link)(() => ({
		display: 'flex',
		flexDirection: 'column'
	}));

	return {
		LinkMUI
	};
};
