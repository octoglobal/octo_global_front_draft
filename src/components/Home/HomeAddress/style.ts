import { styled } from '@mui/material';

export const useHomeAddressStyles = () => {

	const AddressContainerMUI = styled('section')(({theme}) => ({
		backgroundColor: '#DFE4EC',
		padding: '56px 0 135px'
	}));

	const TitleMUI = styled('h2')(({theme}) => ({
		fontSize: '48px',
		textAlign: 'center',
		lineHeight: '56px',
		color: '#000000',
		marginBottom: '11px',
		fontWeight: 400,
	}));

	const AddressWrapperMUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingLeft: '70px',
	}));

	return {
		TitleMUI,
		AddressWrapperMUI,
		AddressContainerMUI,
	};
};