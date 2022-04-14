import {styled, Typography} from '@mui/material';

export const useAccountInstructionStyle = () => {
	const WrapperMUI = styled('div')(() => ({
		// border: '1px solid red',
	}));

	const FooterMUI = styled('div')(({theme}) => ({
		marginBottom: '15px',

		[theme.breakpoints.down(501)]: {
			marginBottom: '0',
			'& p': {
				fontWeight: '500',
				fontSize: '16px',
				lineHeight: '19px',
				color: '#000000',
			}
		}
	}));

	const HeaderMUI = styled('div')(({theme}) => ({
		margin: '15px 0',

		[theme.breakpoints.down(501)]: {
			margin: '15px 0 20px',
			'& p': {
				fontWeight: '500',
				fontSize: '18px',
				lineHeight: '21px',
				color: '#000000',
			}
		}
	}));

	const ULMUI = styled('ul')(({theme}) => ({
		listStyleType: 'decimal',
		marginBottom: '54px',
		maxWidth: '1190px',
		marginLeft: '15px',

		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '24px',
		lineHeight: '28px',
		color: '#000000',

		[theme.breakpoints.down(501)]: {
			fontWeight: '300',
			fontSize: '16px',
			lineHeight: '19px',
			color: '#000000',
			marginLeft: '20px',
			marginBottom: '32px',
		}
	}));

	const LIMUI = styled('li')(() => ({
		// listStyleType: 'decimal',
	}));

	const TextMUI = styled(Typography)(() => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '24px',
		lineHeight: '28px',
		color: '#000000',
	}));

	const FooterButtonMUI = styled('div')(({theme}) => ({
		marginTop: '71px',

		[theme.breakpoints.down(501)]: {
			display: 'flex',
			justifyContent: 'flex-end',
			margin: '50px 0px',
		}
	}));

	const ButtonToShopMUI = {
		width: '161px',
		height: '40px',
		background: '#274D82',
		opacity: '0.8',
		borderRadius: '3px',
	};

	return {
		WrapperMUI,
		HeaderMUI,
		FooterMUI,
		ButtonToShopMUI,
		FooterButtonMUI,
		ULMUI,
		LIMUI,
		TextMUI
	};
};
