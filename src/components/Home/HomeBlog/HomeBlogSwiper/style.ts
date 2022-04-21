import {Button, styled} from '@mui/material';

export const useHomeBlogSwiperStyles = () => {

	const ButtonArrowMUI = styled(Button)(() => ({
		minWidth: 'auto',
		marginBottom: '80px',
	}));

	return {
		ButtonArrowMUI
	};
};
