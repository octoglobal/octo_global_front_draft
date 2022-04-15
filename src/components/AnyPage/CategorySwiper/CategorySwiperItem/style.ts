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

	const ItemTextMUI = styled('div')(({theme}) => ({
		fontSize: '20px',
		lineHeight: '21px',
		color: '#274D82',
		fontWeight: 400,
		[theme.breakpoints.down(1025)]: {
			fontSize: '16px',
			lineHeight: '19px'
		}
	}));


	return {
		ItemMUI,
		ItemTextMUI
	};
};
