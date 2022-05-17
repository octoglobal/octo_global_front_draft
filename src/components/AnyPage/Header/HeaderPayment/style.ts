import {Button, Menu, MenuItem, styled} from '@mui/material';
import AddPayIcon from '@/UIIcon/AddPayIcon.svg';


export const useHeaderPaymentStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		marginLeft: '21px',
		display: 'flex',
		alignItems: 'center',
		position: 'relative',
	}));

	const BalanceTextMUI = styled('div')(({theme}) => ({
		fontSize: '18px',
		lineHeight: '21px',
		fontWeight: 400,
		color: '#000000',
		[theme.breakpoints.down(769)]: {
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
		[theme.breakpoints.down(769)]: {
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
			[theme.breakpoints.down(769)]: {
				width: '100%',
				maxWidth: 'none',
				margin: 'auto',
				top: '58 !important',
				right: '0px !important',
			}
		},
		[theme.breakpoints.down(769)]: {
			backgroundColor: 'rgba(0, 0, 0, 0.1)'
		}
	}));

	const ButtonSendMUI = styled(MenuItem)(({theme}) => ({
		fontSize: '20px',
		lineHeight: '23px',
		fontWeight: 300,
		color: '#000000',
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down(769)]: {
			fontSize: '14px',
			lineHeight: '16px',
			height: '30px',
			padding: 0,
			minHeight: 'auto',
		}
	}));

	const PayIconMUI = styled(AddPayIcon)(() => ({
		marginRight: '10px',
		width: '22px',
		height: '22px',
	}));

	return {
		PayIconMUI,
		MenuListMUI,
		ContainerMUI,
		ButtonSendMUI,
		BalanceTextMUI,
		BalanceTextButtonMUI,
	};
};
