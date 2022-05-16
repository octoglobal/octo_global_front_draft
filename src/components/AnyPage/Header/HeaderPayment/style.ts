import {Button, Menu, MenuItem, styled} from '@mui/material';
import AddPayIcon from '@/UIIcon/AddPayIcon.svg';


export const useHeaderPaymentStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		marginLeft: '41px',
		display: 'flex',
		alignItems: 'center',
		position: 'relative',
	}));

	const BalanceTextMUI = styled('div')(() => ({
		fontSize: '18px',
		lineHeight: '21px',
		fontWeight: 400,
		color: '#000000',
	}));

	const BalanceTextButtonMUI = styled(Button)(() => ({
		minWidth: 'auto',
		width: '100% !important',
		border: 0,
		backgroundColor: 'transparent',
	}));

	const MenuListMUI = styled(Menu)(() => ({
		'& .MuiPaper-root': {
			transition: 'none !important',
			right: '64px !important',
			width: '514px',
			borderRadius: '8px',
			boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.15)',
			top: '61px !important',
			left: 'auto !important',
		}
	}));

	const ButtonSendMUI = styled(MenuItem)(() => ({
		fontSize: '20px',
		lineHeight: '23px',
		fontWeight: 300,
		color: '#000000',
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
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
