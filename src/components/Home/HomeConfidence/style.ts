import { styled } from '@mui/material';

export const useHomeConfidenceStyles = () => {

	const WrapperMUI = styled('div')(({theme}) => ({
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '100px',
		[theme.breakpoints.down(1113)]: {
			alignItems: 'center',
		},
		[theme.breakpoints.down(1025)]: {
			alignItems: 'center',
			marginBottom: '30px'
		},
		[theme.breakpoints.down(769)]: {
			flexDirection: 'column',
			alignItems: 'flex-end',
			position: 'relative',
		},
	}));

	const ConfidenceTextMUI = styled('div')(() => ({
		maxWidth: '829px',
		marginRight: '10px'
	}));

	return {
		WrapperMUI,
		ConfidenceTextMUI
	};
};
