import {Button, keyframes, styled} from '@mui/material';

export const useAdminBottomMenuStyles = () => {

	const visible = keyframes`
      from {
		bottom: -50px;
      }
      to {
		bottom: 10px;
      }
	`;

	const firstVisible = keyframes`
      from {
		bottom: 50px;
      }
      to {
		bottom: 0px;
      }
	`;

	const animationSx = {
		animation: `${visible} .1s linear`,
		bottom: '10px',
	};

	const ContainerMUI = styled('div')(({theme}) => ({
		maxWidth: '1103px',
		position: 'sticky',
		bottom: '0px',
		marginLeft: '23px',
		marginBottom: '51px',
		animation: `${firstVisible} .2s linear`,
		[theme.breakpoints.down(1025)]: {
			marginLeft: 0,
		}
	}));

	const TextWrapperMUI = styled('div')(({theme}) => ({
		textAlign: 'center',
		padding: '10px',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#DFE4EC',
		marginBottom: '15px',
		borderRadius: '5px',
		[theme.breakpoints.down(769)]: {
			textAlign: 'left',
			position: 'relative',
		}
	}));

	const TextMUI = styled('p')(({theme}) => ({
		fontSize: '20px',
		lineHeight: '23px',
		fontWeight: 300,
		width: '100%',
		[theme.breakpoints.down(769)]: {
			fontSize: '14px',
			lineHeight: '16px',
		}
	}));

	const TextIconMUI = styled(Button)(({theme}) => ({
		width: '30px',
		height: '24px',
		minWidth: 'auto',
		padding: 0,
		'&:hover': {
			backgroundColor: '#DFE4EC',
		},
		[theme.breakpoints.down(769)]: {
			width: '22px',
			height: '22px',
			position: 'absolute',
			top: 3,
			right: 5
		}
	}));

	const WrapperMUI = styled('div')(({theme}) => ({
		margin: '0 auto',
		height: '54px',
		borderRadius: '5px',
		backgroundColor: '#274D82',
		padding: '11px 15px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		[theme.breakpoints.down(1025)]: {
			padding: '14px 5px 14px 0',
			height: '45px',
		}
	}));

	const ButtonWrapperMUI = styled('div')(() => ({
		'& > *:last-child': {
			marginRight: 0,
		}
	}));

	const ButtonMUI = styled(Button)(({theme}) => ({
		backgroundColor: 'rgba(223, 228, 236, 0.8)',
		minWidth: '180px',
		height: '32px',
		color: '#FFFFFF',
		marginRight: '20px',
		textTransform: 'none',
		fontSize: '14px',
		lineHeight: '16px',
		fontWeight: 500,
		'&:hover': {
			backgroundColor: 'rgba(223, 228, 236, 0.6)',
		},
		[theme.breakpoints.down(1025)]: {
			minWidth: 'auto',
			width: 'auto',
			padding: '5px 8px',
			marginRight: '10px',
		}
	}));

	return {
		TextMUI,
		ButtonMUI,
		WrapperMUI,
		animationSx,
		TextIconMUI,
		ContainerMUI,
		TextWrapperMUI,
		ButtonWrapperMUI,
	};
};
