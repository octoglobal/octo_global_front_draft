import { styled } from '@mui/material';

export const useAccountSearchListTitleStyles = () => {

	const ContainerMUI = styled('div')(({theme}) => ({
		padding: '15px 25px 0',
		marginBottom: '13px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	}));

	const ItemMUI = styled('div')(({theme}) => ({
		fontWeight: 400,
		fontSize: '20px',
		lineHeight: '24px',
		color: '#C4C4C4',
		marginRight: '5px',
	}));

	return {
		ItemMUI,
		ContainerMUI
	};
};
