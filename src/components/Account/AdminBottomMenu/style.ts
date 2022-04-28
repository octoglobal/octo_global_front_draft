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
		bottom: -100px;
      }
      to {
		bottom: 0px;
      }
	`;

	const animationSx = {
		animation: `${visible} .1s linear`,
		bottom: '10px',
	};

	const ContainerMUI = styled('div')(() => ({
		maxWidth: '1103px',
		position: 'sticky',
		bottom: '0px',
		marginLeft: '23px',
		marginBottom: '51px',
		animation: `${firstVisible} .2s linear`,
	}));

	const TextWrapperMUI = styled('div')(() => ({
		textAlign: 'center',
		padding: '10px',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#DFE4EC',
		marginBottom: '15px',
		borderRadius: '5px',
	}));

	const TextMUI = styled('p')(() => ({
		fontSize: '20px',
		lineHeight: '23px',
		fontWeight: 300,
		width: '100%',
	}));

	const TextIconMUI = styled(Button)(() => ({
		width: '30px',
		height: '24px',
		minWidth: 'auto',
		padding: 0,
		'&:hover': {
			backgroundColor: '#DFE4EC',
		}
	}));

	const WrapperMUI = styled('div')(() => ({
		margin: '0 auto',
		height: '54px',
		borderRadius: '5px',
		backgroundColor: '#274D82',
		padding: '11px 15px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	}));

	const ButtonWrapperMUI = styled('div')(() => ({
		'& > *:last-child': {
			marginRight: 0,
		}
	}));

	const ButtonMUI = styled(Button)(() => ({
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
