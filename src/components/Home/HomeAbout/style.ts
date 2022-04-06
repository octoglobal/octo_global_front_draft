import { styled } from '@mui/material';

export const useHomeAboutStyles = () => {

	const WrapperMUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: '30px',
		height: 'calc(100vh - 61px)',
		[theme.breakpoints.down(1321)]: {
			justifyContent: 'space-between',
		},
		[theme.breakpoints.down(778)]: {
			flexDirection: 'column-reverse',
			justifyContent: 'center',
			alignItems: 'flex-start',
		},
		[theme.breakpoints.down(501)]: {
			height: 'calc(100vh - 70px)',
		}
	}));

	return {
		WrapperMUI
	};
};
