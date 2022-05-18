import { styled } from '@mui/material';

export const useHomeAboutStyles = () => {

	const WrapperMUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: '30px',
		height: '95vh',
		position: 'relative',
		[theme.breakpoints.down(1321)]: {
			justifyContent: 'space-between',
		},
		[theme.breakpoints.down(778)]: {
			flexDirection: 'column-reverse',
			justifyContent: 'center',
			alignItems: 'center',
		},
		[theme.breakpoints.down(501)]: {
			marginBottom: '10px',
			// height: 'calc(100vh + 40px)',
		}
	}));

	const HeaderMarginMUI = styled('div')(({theme}) => ({
		height: '61px',
		width: '100%',
		backgroundColor: '#FFFFFF',
		visibility: 'hidden',
		[theme.breakpoints.down(1181)]: {
			height: '71px'
		},
		[theme.breakpoints.down(1025)]: {
			height: '65px'
		},
		[theme.breakpoints.down(501)]: {
			height: '70px'
		}
	}));

	return {
		WrapperMUI,
		HeaderMarginMUI
	};
};
