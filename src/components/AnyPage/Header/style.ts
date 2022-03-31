import {styled} from '@mui/material';

export const useHeaderStyle = () => {

	const HeaderWrapperUI = styled('header')(({theme}) => ({
		height: '61px',
		width: '100%',
		padding: '12px 80px',

		background: '#FFFFFF',
		// opacity: '0.1',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',

		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

		'& #demo-positioned-menu': {
			// right: '0',
		},

		[theme.breakpoints.down(1024)]: {
			padding: '12px 60px',
		},

		[theme.breakpoints.down(800)]: {
			padding: '12px 10px',
		}
	}));

	const HeaderNavUI = styled('nav')(({theme}) => ({
		width: '70%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

		[theme.breakpoints.down(1024)]: {
			width: '80%',
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

		// color: '#234A82',
		// fill: '#234A82',
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
		HeaderNavUI,
		OctoIconsUI,
		UserWrapperUI,
		ButtonLoginUI,
		ArrowUI
	};
};
