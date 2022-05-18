import {Button, Menu, MenuItem, styled} from '@mui/material';
import AddPayIcon from '@/UIIcon/AddPayIcon.svg';


export const useHeaderPaymentStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		marginLeft: '21px',
		display: 'flex',
		alignItems: 'center',
		position: 'relative',
	}));

	const ContainerMobileMUI = styled('div')(() => ({
		marginTop: '58px',
		marginBottom: '23px',
		padding: '0 15px',
	}));

	const BalanceTextMUI = styled('div')(({theme}) => ({
		fontSize: '18px',
		lineHeight: '21px',
		fontWeight: 400,
		color: '#000000',
		[theme.breakpoints.down(969)]: {
			fontSize: '16px',
			lineHeight: '19px',
			height: '19px',
			margin: '10px 0 17px',
			cursor: 'pointer',
		}
	}));

	const BalanceTextButtonMUI = styled(Button)(({theme}) => ({
		minWidth: 'auto',
		width: '100% !important',
		border: 0,
		backgroundColor: 'transparent',
		[theme.breakpoints.down(969)]: {
			display: 'none',
		}
	}));

	const MenuListMUI = styled(Menu)(({theme}) => ({
		maxWidth: '1440px',
		margin: '0 auto',
		'& .MuiPaper-root': {
			transition: 'none !important',
			width: '514px',
			borderRadius: '8px',
			boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.15)',
			top: '61px !important',
			right: '80px !important',
			left: 'auto !important',
			[theme.breakpoints.down(1025)]: {
				right: '15px !important',
			},
			[theme.breakpoints.down(969)]: {
				backgroundColor: 'rgba(0, 0, 0, 0)',
				boxShadow: 'none',
				width: '100%',
				maxWidth: 'none',
				margin: 'auto',
				top: '0px !important',
				right: '0px !important',
				paddingTop: '63px',
			},
			[theme.breakpoints.down(551)]: {
				paddingTop: '0px',
			}
		},
		[theme.breakpoints.down(969)]: {
			maxWidth: '345px',
			margin: '0 auto',
			'& .MuiBackdrop-root': {
				backgroundColor: 'rgba(255, 255, 255, 0.5)',
			}
		},
		[theme.breakpoints.down(601)]: {
			maxWidth: 'none',
			margin: 0,
		}
	}));

	const ButtonSendMUI = styled(MenuItem)(({theme}) => ({
		fontSize: '20px',
		lineHeight: '23px',
		fontWeight: 300,
		color: '#000000',
		textAlign: 'center',
		height: '30px',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down(969)]: {
			fontSize: '14px',
			lineHeight: '16px',
			height: '32px',
			padding: 0,
			minHeight: 'auto',
		}
	}));

	const PayIconMUI = styled(AddPayIcon)(() => ({
		marginRight: '10px',
		width: '22px',
		height: '22px',
	}));

	const CloseModalButtonMUI = styled(Button)(() => ({
		position: 'absolute',
		cursor: 'pointer',
		right: '10px',
		top: '15px',
		minWidth: 'auto',
		padding: '5px',
	}));

	const ContainerAddPaymentMobileMUI = styled('a')(() => ({
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
	}));

	const AddPaymentMobileMUI = styled('a')(() => ({
		fontSize: '16px',
		lineHeight: '18px',
		fontWeight: 300,
		textDecoration: 'underline',
		color: '#274D82',
		margin: '10px 0 17px 10px',
	}));

	return {
		PayIconMUI,
		MenuListMUI,
		ContainerMUI,
		ButtonSendMUI,
		BalanceTextMUI,
		CloseModalButtonMUI,
		ContainerMobileMUI,
		AddPaymentMobileMUI,
		BalanceTextButtonMUI,
		ContainerAddPaymentMobileMUI,
	};
};
