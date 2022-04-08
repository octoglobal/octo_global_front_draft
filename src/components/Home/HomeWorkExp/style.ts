import { styled } from '@mui/material';

export const useHomeWorkExpStyles = () => {

	const InnerContainerMUI = styled('div')(({theme}) => ({
		[theme.breakpoints.down(501)]: {
			height: 'auto',
			marginBottom: '50px'
		}
	}));

	const WrapperMUI = styled('div')(({theme}) => ({
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row',
		margin: '61px 0 134px',
		[theme.breakpoints.down(769)]: {
			flexDirection: 'column'
		},
		[theme.breakpoints.down(1025)]: {
			marginBottom: '50px',
		},
		[theme.breakpoints.down(601)]: {
			margin: '30px 0 50px',
		},
	}));

	return {
		WrapperMUI,
		InnerContainerMUI
	};
};
