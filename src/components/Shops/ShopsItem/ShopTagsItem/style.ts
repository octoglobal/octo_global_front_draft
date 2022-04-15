import { styled } from '@mui/material';

export const useShopTagsItemStyles = () => {

	const ItemMUI = styled('li')(() => ({
		listStyle: 'none',
		marginRight: '15px',
		marginBottom: '14px'
	}));

	const ItemTextButtonMUI = styled('button')(() => ({
		color: '#274D82',
		fontSize: '20px',
		lineHeight: '21px',
		fontWeight: 300,
		border: 0,
		backgroundColor: 'transparent',
		cursor: 'pointer',
	}));

	return {
		ItemMUI,
		ItemTextButtonMUI
	};
};
