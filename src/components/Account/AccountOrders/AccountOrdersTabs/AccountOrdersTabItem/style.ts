import {styled} from '@mui/material';

export const useAccountOrdersTabItemStyles = () => {

	const ItemMUI = styled('li')(() => ({
		listStyle: 'none',
		fontSize: '20px',
		lineHeight: '24px',
		marginBottom: '22px',
		fontWeight: 300,
	}));

	const itemActive = {
		fontWeight: 400,
	};

	return {
		ItemMUI,
		itemActive,
	};
};
