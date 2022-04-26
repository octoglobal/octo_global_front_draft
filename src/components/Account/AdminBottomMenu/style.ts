import {Button, keyframes, styled} from '@mui/material';

export const useAdminBottomMenuStyles = () => {

	const visible = keyframes`
      from {
		bottom: -100px;
      }
      to {
		bottom: 51px;
      }
	`;

	const ContainerMUI = styled('div')(() => ({
		position: 'sticky',
		bottom: '51px',
		marginBottom: '51px',
		animation: `${visible} .1s linear`,
	}));

	const WrapperMUI = styled('div')(() => ({
		maxWidth: '1103px',
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
		ButtonMUI,
		WrapperMUI,
		ContainerMUI,
		ButtonWrapperMUI
	};
};
