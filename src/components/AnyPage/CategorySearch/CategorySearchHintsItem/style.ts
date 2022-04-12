import { styled } from '@mui/material';

export const useCategorySearchHintsItemStyles = () => {

	const ItemMUI = styled('li')(({theme}) => ({
		listStyle: 'none',
		width: '100%',
		padding: '15px 0px 15px 25px',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: '#e7e7e7',
		}
	}));

	const ItemTextMUI = styled('div')(({theme}) => ({
		fontSize: '18px',
		lineHeight: '21px',
		fontWeight: 400,
	}));

	return {
		ItemTextMUI,
		ItemMUI
	};
};
