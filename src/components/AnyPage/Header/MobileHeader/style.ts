import {styled, SwipeableDrawer} from '@mui/material';

export const useHeaderMobileStyle = () => {
	const HeaderMobileWrapperUI = styled('header')(() => ({
		padding: '15px',
		position: 'fixed',
		width: '100%',
		zIndex: 3,
		backgroundColor: '#FFFFFF',
	}));

	const NavMenuUI = styled('nav')(() => ({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

		'& div:last-child': {
			marginRight: '0px',
		},
	}));

	const NavItemUI = styled('div')(() => ({
		cursor: 'pointer',
		marginRight: '35px',

		'& span': {
			width: 'auto',
		},
	}));

	const SwipeableDrawerUI = styled(SwipeableDrawer)(() => ({
		'& .MuiPaper-root': {
			width: '90%',
			height: '93%',
			// padding: '1.5em 1em',
			marginTop: '15%',

			background: '#FFFFFF',
			// boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
			borderRadius: '0px 8px',
		},

		'& .MuiBackdrop-root': {
			// background: 'inherit',
		},
	}));

	const MenuLinksUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'column',

		'& a': {
			fontFamily: 'Roboto',
			fontStyle: 'normal',
			fontWeight: '500',
			fontSize: '16px',
			lineHeight: '19px',
			color: '#000000',

			marginBottom: '25px',
		},

		'& a:last-child': {
			marginBottom: '30px',
		}
	}));

	const ButtonsAuthUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	}));

	const ButtonLogin = {
		width: '111px',
		height: '32px',
		background: '#274D82',
		opacity: '0.8',
		borderRadius: '3px',
	};

	const ButtonSignUp = {
		width: '96px',
		height: '19px',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '19px',
		color: '#274D82',
		background: 'inherit',
	};

	return {
		HeaderMobileWrapperUI,
		NavMenuUI,
		NavItemUI,
		SwipeableDrawerUI,
		MenuLinksUI,

		ButtonsAuthUI,
		ButtonLogin,
		ButtonSignUp
	};
};
