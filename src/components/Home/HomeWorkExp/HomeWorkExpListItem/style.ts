import { styled } from '@mui/material';

export const useHomeWorkExpListItemStyles = () => {

	const ItemMUI = styled('li')(() => ({
		display: 'flex',
		alignItems: 'center',
		marginBottom: '25px',
	}));

	const ItemTextMUI = styled('p')(() => ({
		fontSize: '24px',
		lineHeight: '28px',
		fontWeight: 300,
		color: '#000000',
		maxWidth: '420px',
	}));

	const ItemIconMUI = styled('div')(() => ({
		marginRight: '25px',
		width: '125px',
		height: '101px',
		minWidth: '125px',
	}));

	return {
		ItemMUI,
		ItemTextMUI,
		ItemIconMUI,
	};
};
