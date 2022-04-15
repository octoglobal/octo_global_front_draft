import {Button, styled} from '@mui/material';

export const useTagListItemStyles = () => {

	const ItemMUI = styled('li')(({theme}) => ({
		listStyle: 'none',
		margin: '0 15px 20px 0',
		[theme.breakpoints.down(1025)]: {
			marginBottom: '10px'
		}
	}));

	const ItemButton = styled(Button)(() => ({
		minWidth: 'auto',
		padding: '0 5px',
		textTransform: 'none',
	}));

	const ItemTextMUI = styled('span')(({theme}) => ({
		fontSize: '20px',
		lineHeight: '21px',
		fontWeight: 400,
		color: '#274D82',
		[theme.breakpoints.down(1025)]: {
			fontSize: '16px',
			lineHeight: '19px',
		}
	}));

	return {
		ItemMUI,
		ItemButton,
		ItemTextMUI,
	};
};
