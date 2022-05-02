import { styled } from '@mui/material';

export const useAddressItemStyles = () => {

	const ContainerMUI = styled('button')(() => ({
		border: 0,
		cursor: 'pointer',
		backgroundColor: 'transparent',
		marginBottom: '25px',
		'& > *:last-child': {
			marginRight: '0'
		}
	}));

	const ItemMUI = styled('span')(() => ({
		fontSize: '20px',
		lineHeight: '23px',
		color: '#000000',
		fontWeight: 300,
		marginRight: '15px',
	}));

	return {
		ItemMUI,
		ContainerMUI
	};
};
