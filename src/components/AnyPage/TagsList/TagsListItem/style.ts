import {Button, styled} from '@mui/material';

export const useTagListItemStyles = () => {

	const ItemMUI = styled('li')(() => ({
		listStyle: 'none',
		margin: '0 15px 20px 0'
	}));

	const ItemButton = styled(Button)(() => ({
		minWidth: 'auto',
		padding: '0 5px',
		textTransform: 'none',
	}));

	const ItemTextMUI = styled('span')(() => ({
		fontSize: '20px',
		lineHeight: '21px',
		fontWeight: 400,
		color: '#274D82',
	}));

	return {
		ItemMUI,
		ItemButton,
		ItemTextMUI,
	};
};
