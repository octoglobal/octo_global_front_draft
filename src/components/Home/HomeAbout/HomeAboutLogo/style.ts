import { styled } from '@mui/material';

export const useHomeAboutLogoStyles = () => {

	const ContainerMUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	}));

	const TextMUI = styled('h3')(({theme}) => ({
		fontSize: '48px',
		lineHeight: '64px',
		fontWeight: 600,
		color: '#274D82',
		fontFamily: 'Playfair Display',
	}));

	const logoSx = {
		width: '393px',
		height: '278px',
	};

	return {
		logoSx,
		TextMUI,
		ContainerMUI
	};
};
