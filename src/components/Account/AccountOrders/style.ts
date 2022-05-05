import { styled } from '@mui/material';

export const useAccountOrdersStyles = () => {

	const ContainerMUI = styled('section')(({theme}) => ({
		marginTop: '53px',
		display: 'flex',
		justifyContent: 'flex-start',
		[theme.breakpoints.down(1025)]: {
			marginTop: '15px',
		}
	}));

	const WrapperOrdersMUI = styled('div')(() => ({
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
	}));

	const ListMUI = styled('div')(({theme}) => ({
		marginLeft: '206px',
		[theme.breakpoints.down(1025)]: {
			marginLeft: '0px',
		}
	}));

	return {
		ListMUI,
		ContainerMUI,
		WrapperOrdersMUI,
	};
};
