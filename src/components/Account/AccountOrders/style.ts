import { styled } from '@mui/material';

export const useAccountOrdersStyles = () => {

	const ContainerMUI = styled('section')(() => ({
		marginTop: '53px',
		display: 'flex',
		justifyContent: 'flex-start',
	}));

	const WrapperOrdersMUI = styled('div')(() => ({
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
	}));

	const ListMUI = styled('div')(() => ({
		marginLeft: '206px',
	}));

	return {
		ListMUI,
		ContainerMUI,
		WrapperOrdersMUI,
	};
};
