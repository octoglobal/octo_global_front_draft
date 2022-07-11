import { styled, Typography, Link } from '@mui/material';

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
		marginBottom: '30px',
		maxWidth: '1190px',
		marginLeft: '15px',

		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '20px',
		lineHeight: '23.44px',
		color: '#000000',

		[theme.breakpoints.down(501)]: {
			fontWeight: '300',
			fontSize: '16px',
			lineHeight: '19px',
			color: '#000000',
			marginLeft: '20px',
			marginBottom: '12px',
			// marginBottom: '32px',
		}
	}));

	const LIMUI = styled('li')(() => ({
		// listStyleType: 'decimal',
	}));

	const TextMUI = styled(Typography)(() => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '20px',
		lineHeight: '23.44px',
		color: '#000000',
	}));

	const FooterButtonMUI = styled('div')(({theme}) => ({
		marginTop: '27px',
		display: 'flex',
		alignItems:'center',

		[theme.breakpoints.down(501)]: {
			display: 'flex',
			justifyContent: 'flex-end',
			marginTop: '20px',
		}
	}));

	const ButtonToShopMUI = {
		width: '161px',
		height: '40px',
		background: '#274D82',
		opacity: '0.8',
		borderRadius: '3px',
	};


	const LinkMUI = styled(Link)(({theme}) => ({
		fontSize: '20px',
		cursor: 'pointer',
		marginRight: '12px',

		[theme.breakpoints.down(501)]: {
			fontSize: '16px'
		}
	}));

	return {
		WrapperMUI,
		HeaderMUI,
		FooterMUI,
		ButtonToShopMUI,
		FooterButtonMUI,
		ULMUI,
		LIMUI,
		TextMUI,
		LinkMUI
	};
};
