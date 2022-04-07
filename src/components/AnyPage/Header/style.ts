import {styled} from '@mui/material';

export const useHeaderStyle = () => {

	const HeaderMarginMUI = styled('div')(() => ({
		// marginBottom: '62px',
		// [theme.breakpoints.down(1181)]: {
		// 	marginBottom: '71px'
		// },
		// [theme.breakpoints.down(1023)]: {
		// 	marginBottom: '65px',
		// },
		// [theme.breakpoints.down(501)]: {
		// 	marginBottom: '69px'
		// },
	}));

	const HeaderWrapperUI = styled('header')(({theme}) => ({
		height: '61px',
		width: '100%',
		position: 'fixed',
		zIndex: 1,

		background: '#FFFFFF',
		// opacity: '0.1',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
		//
		// [theme.breakpoints.down(1181)]: {
		// 	height: '71px',
		// },
		[theme.breakpoints.down(1025)]: {
			height: '65px',
		},
		[theme.breakpoints.down(1023)]: {
			height: '65px',
		},
		[theme.breakpoints.down(501)]: {
			height: '69px'
		},

		[theme.breakpoints.down(800)]: {
			// padding: '12px 10px',
		}
	}));

	const HeaderContentMUI = styled('nav')(({theme}) => ({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

		padding: '12px 80px 12px 80px',

		margin: '0 auto',
		maxWidth: '1440px',

		[theme.breakpoints.down(1025)]: {
			padding: '15px',
		},
	}));

	const HeaderBurgerButtonMUI = styled('span')(() => ({
		'& button': {
			display: 'flex',
			justifyContent: 'flex-start',

			margin: '0px',
			padding: '0px',
		},
	}));

	const HeaderNavUI = styled('ul')(({theme}) => ({
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

		'& #long-menu .MuiPaper-root ': {
			transform: 'none !important',
			top: '35px !important',
			left: '0px !important',
			width: '239px !important',
		},

		[theme.breakpoints.down(1241)]: {
			width: 'auto',
			justifyContent: 'flex-end',
		},

		[theme.breakpoints.down(1024)]: {
			// width: '80%',
		}
	}));

	const LogoMUI = styled('div')(({theme}) => ({
		marginRight: '180px',

		[theme.breakpoints.down(1241)]: {
			marginRight: '0px',
		}
	}));

	const OctoIconsUI = styled('span')(() => ({
		width: '20%',

		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',

		'& svg': {
			cursor: 'pointer',
		},

		'& svg:first-child': {
			marginRight: '6px',
		}
	}));

	const UserWrapperUI = styled('div')(() => ({
		// height: '28px',
		// width: '28px',

		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		position: 'relative',

		'& button': {
			width: '20px',
			minWidth: '20px',
			height: '28px',

			padding: '0',

			'& span': {
				width: '20px',
				height: '20px',
			},

			'&:hover': {
				backgroundColor: 'inherit',
			}
		},

		'& #popper': {
			transform: 'none !important',
			top: '35px !important',
			width: '239px !important',
		},

		'& div:first-child': {
			marginRight: '10px',
		},

		'& span, .MuiAvatar-root': {
			height: '28px',
			width: '28px',
		}
	}));

	const ArrowUI = styled('span')(() => ({
		width: '24px',
		height: '10px',
		position: 'relative',
		transition: '.2s all linear',
		'&::after': {
			content: '""',
			borderRadius: '10px',
			position: 'absolute',
			left: '0',
			top: '45%',
			width: '12px',
			height: '2px',
			backgroundColor: '#C7C7C7',
			transform: 'rotate(48deg) translateY(-45%)'
		},
		'&::before': {
			content: '""',
			borderRadius: '10px',
			position: 'absolute',
			left: '8px',
			top: '45%',
			width: '12px',
			height: '2px',
			backgroundColor: '#C7C7C7',
			transform: 'rotate(-48deg) translateY(-45%)'
		},

		'&:focus': {
			'&::after': {
				transform: 'rotate(130deg) translateY(-45%)'
			},
			'&::before': {
				transform: 'rotate(-130deg) translateY(-45%)'
			}
		}
	}));

	const ButtonLoginUI = {
		width: '95px',
		height: '38px',

		padding: '0',
		margin: '0',
	};

	return {
		HeaderMarginMUI,
		HeaderBurgerButtonMUI,
		HeaderWrapperUI,
		HeaderContentMUI,
		HeaderNavUI,
		OctoIconsUI,
		UserWrapperUI,
		ButtonLoginUI,
		ArrowUI,
		LogoMUI
	};
};
