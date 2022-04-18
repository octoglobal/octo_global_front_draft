import { styled } from '@mui/material';

export const useCategorySearchHintsItemStyles = () => {

	const ItemMUI = styled('li')(() => ({
		listStyle: 'none',
		width: '100%',
	}));

	const ButtonMUI = styled('button')(() => ({
		width: '100%',
		padding: '11px 0px 11px 25px',
		cursor: 'pointer',
		border: 0,
		backgroundColor: 'transparent',
		textAlign: 'left',
	}));

	const ItemTextMUI = styled('div')(() => ({
		fontSize: '14px',
		lineHeight: '21px',
		fontWeight: 400,
		color: '#000000',
	}));

	return {
		ItemMUI,
		ButtonMUI,
		ItemTextMUI,
	};
};
