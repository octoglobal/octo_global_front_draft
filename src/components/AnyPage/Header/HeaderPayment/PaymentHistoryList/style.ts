import {CircularProgress, styled} from '@mui/material';

export const usePaymentHistoryListStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '0px 15px',
	}));

	const ListMUI = styled(ContainerMUI)(() => ({
		marginTop: '25px',
		width: '100%',
		padding: 0,
		maxHeight: '45vh',
		'& > *:last-child': {
			marginBottom: '0',
		}
	}));

	const CircularProgressMUI = styled(CircularProgress)(() => ({
		color: '#274D82',
		marginBottom: '18px',
		marginTop: '25px',
	}));

	return {
		ListMUI,
		ContainerMUI,
		CircularProgressMUI,
	};
};
