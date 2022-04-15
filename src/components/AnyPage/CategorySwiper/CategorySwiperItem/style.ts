import { styled } from '@mui/material';

export const useCategorySwiperItemStyles = () => {

	const ItemMUI = styled('button')(() => ({
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'row',
		backgroundColor: 'transparent',
		border: 0,
		cursor: 'pointer',
	}));

	const ItemTextMUI = styled('div')(() => ({
		fontSize: '20px',
		lineHeight: '21px',
		color: '#274D82',
		fontWeight: 400,
	}));


	return {
		ItemMUI,
		ItemTextMUI
	};
};
