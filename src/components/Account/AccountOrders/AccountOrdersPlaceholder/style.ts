import { styled } from '@mui/material';


export const useAccountOrdersPlaceholderStyles = () => {

	const ContainerMUI = styled('section')(() => ({
		textAlign: 'center',
		maxWidth: '681px',
	}));

	const BackgroundImageMUI = styled('div')(() => ({
		background: 'url("../../image/OctoConfidence.png") no-repeat',
		backgroundPosition: 'center center',
		minWidth: '681px',
		minHeight: '482px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}));

	const BackgroundTextContainerMUI = styled('div')(() => ({
		marginBottom: '100px',
	}));

	const BackgroundTextMUI = styled('span')(() => ({
		fontSize: '96px',
		lineHeight: '127px',
		fontWeight: 900,
		fontFamily: 'Playfair Display',
		color: '#274D82',
		opacity: 0.03,
		userSelect: 'none',
	}));

	const TextMUI = styled('span')(() => ({
		fontSize: '24px',
		lineHeight: '28px',
		fontWeight: 400,
		color: '#000000',
	}));

	return {
		TextMUI,
		ContainerMUI,
		BackgroundTextMUI,
		BackgroundImageMUI,
		BackgroundTextContainerMUI
	};
};
