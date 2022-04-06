import { styled } from '@mui/material';

export const useHomeAboutLogoStyles = () => {

	const ContainerMUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		[theme.breakpoints.down(1025)]: {
			marginBottom: '33px',
			alignSelf: 'center',
		},
		[theme.breakpoints.down(501)]: {
			marginBottom: '10px',
		},
		[theme.breakpoints.down(350)]: {
			marginBottom: '0px',
		},
	}));

	const TextMUI = styled('h3')(({theme}) => ({
		fontSize: '48px',
		lineHeight: '64px',
		fontWeight: 600,
		color: '#274D82',
		fontFamily: 'Playfair Display',
		[theme.breakpoints.down(1025)]: {
			// marginTop: '32px',
			fontSize: '32px',
			lineHeight: '48px'
		},
		[theme.breakpoints.down(351)]: {
			fontSize: '23px',
			lineHeight: '39px'
		},

	}));

	const LogoMUI = styled('div')(({theme}) => ({
		width: '393px',
		height: '278px',
		[theme.breakpoints.down(1221)]: {
			width: '343px',
			height: '228px',
		},
		[theme.breakpoints.down(1131)]: {
			width: '303px',
			height: '214px',
		},
		[theme.breakpoints.down(1025)]: {
			width: '303px',
			height: '214px',
		},
		[theme.breakpoints.down(501)]: {
			width: '291px',
			height: '206px',
		},
		[theme.breakpoints.down(401)]: {
			width: '221px',
			height: '156px',
		},
		[theme.breakpoints.down(351)]: {
			width: '200px',
			height: '141px',
		},
	}));

	return {
		LogoMUI,
		TextMUI,
		ContainerMUI
	};
};
