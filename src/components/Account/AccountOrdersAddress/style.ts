import { styled } from '@mui/material';
import ButtonUI from '../../../UI/UIComponents/ButtonUI/ButtonUI';

export const useAccountOrdersAddressStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
	}));

	const WrapperMUI = styled('div')(({theme}) => ({
		maxWidth: '998px',
		marginLeft: '250px',

		[theme.breakpoints.down(1411)]: {
			width: '100%',
			marginLeft: 'auto',
		},
		[theme.breakpoints.down(800)]: {
			width: '100%',
		},
		[theme.breakpoints.down(501)]: {
			width: '100%',
			maxWidth: 'none',
			marginLeft: '0px',
		},
	}));

	const AddressMUI = styled('div')(() => ({
	}));

	const FormMUI = styled('form')(() => ({
	}));

	const TitleMUI = styled('h3')(({theme}) => ({
		fontSize: '24px',
		lineHeight: '28px',
		fontWeight: 400,
		color: '#274D82',
		marginBottom: '25px',
		marginLeft: '48px',

		[theme.breakpoints.down(1025)]: {
			marginLeft: '0px',
		},

		[theme.breakpoints.down(501)]: {
			fontWeight: '400',
			fontSize: '20px',
			lineHeight: '23px',
			color: '#274D82',
			marginBottom: '15px',
			marginLeft: '0px',
		}
	}));

	const ActionsMUI = styled('div')(({theme}) => ({
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',

		maxWidth: '757px',

		'& button:first-child': {
			marginRight: '25px',
		},

		[theme.breakpoints.down(501)]: {
			'& button:first-child': {
				marginRight: '15px',
			},
		}
	}));

	const ButtonMUI = styled(ButtonUI)(({theme}) => ({
		maxWidth: '112px',
		height: '32px',
		fontSize: '14px',
		lineHeight: '16px',
		fontWeight: 300,
		color: '#FFFFFF',
		backgroundColor: 'rgba(39,77,130,0.8)',

		[theme.breakpoints.down(501)]: {
			maxWidth: '135px',
			marginTop: '15px',
		}
	}));

	const ButtonOutfilledMUI = styled(ButtonUI)(({theme}) => ({
		maxWidth: '130px',
		height: '16px',
		fontSize: '14px',
		lineHeight: '16px',
		fontWeight: 400,
		color: '#274D82',
		backgroundColor: 'inherit',

		'&:hover': {
			backgroundColor: 'inherit',
		},

		[theme.breakpoints.down(501)]: {
			maxWidth: '135px',
			marginTop: '15px',
		}
	}));

	const ButtonAddAddressSX = {
		width: '233px',
		maxWidth: '233px',
		height: '32px',
		background: '#274D82',
		borderRadius: '3px',
	};

	return {
		WrapperMUI,
		FormMUI,
		TitleMUI,
		ButtonOutfilledMUI,
		ButtonMUI,
		AddressMUI,
		ContainerMUI,
		ActionsMUI,
		ButtonAddAddressSX
	};
};
