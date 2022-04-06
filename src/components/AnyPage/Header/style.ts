import {styled} from '@mui/material';

export const useHeaderStyle = () => {

	const HeaderWrapperUI = styled('header')(({theme}) => ({
		height: '61px',
		width: '100%',

		background: '#FFFFFF',
		// opacity: '0.1',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',

		// border: '1px solid red',

		[theme.breakpoints.down(1024)]: {
			// padding: '12px 60px',
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

		[theme.breakpoints.down(1024)]: {
			padding: '6px 80px 12px 80px',
		},

		[theme.breakpoints.down(690)]: {
			padding: '0 15px',
		}
	}));

	const HeaderNavUI = styled('nav')(({theme}) => ({
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

		[theme.breakpoints.down(1180)]: {
			width: 'auto',
			justifyContent: 'flex-end',
		},

		[theme.breakpoints.down(1024)]: {
			// width: '80%',
		}
	}));

	const LogoMUI = styled('nav')(({theme}) => ({
		marginRight: '180px',

		[theme.breakpoints.down(1180)]: {
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
