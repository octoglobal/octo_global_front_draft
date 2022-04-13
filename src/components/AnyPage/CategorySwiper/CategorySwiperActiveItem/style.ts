import { styled } from '@mui/material';

export const useCategorySwiperActiveItemStyles = () => {

	const ItemMUI = styled('li')(({theme}) => ({
		listStyle: 'none',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: '19px',
	}));

	const ItemTitleMUI = styled('p')(({theme}) => ({
		fontSize: '16px',
		lineHeight: '19px',
		fontWeight: 400,
		color: '#274D82',
		marginRight: '3px',
	}));

	const ItemDeleteMUI = styled('div')(({theme}) => ({
		height: '16px',
		cursor: 'pointer',
	}));

	return {
		ItemMUI,
		ItemTitleMUI,
		ItemDeleteMUI,
	};
};
