import {styled} from '@mui/material';

export const useCategorySwiperItem = () => {

	const SwiperArrowButtonMUI = styled('button')(() => ({
		border: 0,
		backgroundColor: '#FFFFFF',
		width: 24,
		height: 24,
		cursor: 'pointer',
		display: 'flex',
		'&.nextArrow': {
			marginRight: '5px'
		},
		'&.prevArrow': {
			marginLeft: '5px'
		}
	}));

	return {
		SwiperArrowButtonMUI,
	};
};
