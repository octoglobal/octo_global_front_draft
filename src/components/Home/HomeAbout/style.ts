import { styled } from '@mui/material';

export const useHomeAboutStyles = () => {

	const WrapperMUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: '30px',
		height: '100vh',
		position: 'relative',
		[theme.breakpoints.down(1321)]: {
			justifyContent: 'space-between',
		},
		[theme.breakpoints.down(778)]: {
			flexDirection: 'column-reverse',
			justifyContent: 'center',
			alignItems: 'center',
		},
	}));

	return {
		WrapperMUI
	};
};
