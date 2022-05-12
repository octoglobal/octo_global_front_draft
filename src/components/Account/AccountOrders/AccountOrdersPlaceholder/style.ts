import { styled } from '@mui/material';


export const useAccountOrdersPlaceholderStyles = () => {

	const ContainerMUI = styled('section')(({theme}) => ({
		textAlign: 'center',
		maxWidth: '681px',
		[theme.breakpoints.down(710)]: {
			width: '100%',
		}
	}));

	const BackgroundImageMUI = styled('div')(({theme}) => ({
		background: 'url("../../image/OctoConfidence.png") no-repeat',
		backgroundPosition: 'center center',
		minWidth: '681px',
		minHeight: '482px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		[theme.breakpoints.down(710)]: {
			minWidth: 'auto',
			minHeight: 'auto',
			maxWidth: '310px',
			width: '100%',
			height: '205px',
			backgroundSize: '290px 205px',
			margin: '0 auto',
		}
	}));

	const BackgroundTextContainerMUI = styled('div')(({theme}) => ({
		marginBottom: '100px',
		[theme.breakpoints.down(710)]: {
			marginBottom: '10px',
		}
	}));

	const BackgroundTextMUI = styled('span')(({theme}) => ({
		fontSize: '96px',
		lineHeight: '127px',
		fontWeight: 900,
		fontFamily: 'Playfair Display',
		color: '#274D82',
		opacity: 0.03,
		userSelect: 'none',
		[theme.breakpoints.down(710)]: {
			fontSize: '32px',
			lineHeight: '43px',
		}
	}));

	const TextMUI = styled('span')(({theme}) => ({
		fontSize: '24px',
		lineHeight: '28px',
		fontWeight: 400,
		color: '#000000',
		[theme.breakpoints.down(710)]: {
			fontSize: '16px',
			lineHeight: '18px',
		},
	}));

	return {
		TextMUI,
		ContainerMUI,
		BackgroundTextMUI,
		BackgroundImageMUI,
		BackgroundTextContainerMUI
	};
};
