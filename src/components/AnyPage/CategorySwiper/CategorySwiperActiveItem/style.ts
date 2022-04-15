import { styled } from '@mui/material';

export const useCategorySwiperActiveItemStyles = () => {

	const ItemMUI = styled('li')(() => ({
		listStyle: 'none',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: '19px',
		// marginBottom: '5px',
	}));

	const ItemTitleMUI = styled('p')(() => ({
		fontSize: '14px',
		lineHeight: '19px',
		fontWeight: 400,
		color: '#274D82',
		marginRight: '3px',
	}));

	const ItemDeleteMUI = styled('button')(() => ({
		height: '16px',
		cursor: 'pointer',
		border: 0,
		backgroundColor: 'transparent',
	}));

	return {
		ItemMUI,
		ItemTitleMUI,
		ItemDeleteMUI,
	};
};
