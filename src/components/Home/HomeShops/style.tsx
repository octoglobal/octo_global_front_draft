import { styled } from '@mui/material';

export const useHomeShopStyles = () => {

	const WrapperMUI = styled('div')(() => ({
		marginBottom: '90px',
	}));

	const LinkWrapperMUI = styled('a')(() => ({
		borderRadius: '4px',
		backgroundColor: '#274D82',
		padding: '9px 0',
		maxWidth: '169px',
		color: '#FFFFFF',
		fontWeight: 400,
		fontSize: '18px',
		lineHeight: '21px',
		margin: '0 auto',
		textAlign: 'center',
		display: 'block',
		width: '100%',
		'&:hover': {
			backgroundColor: '#203f69'
		},
	}));

	const TitleMUI = styled('div')(() => ({
		'& > h1': {
			maxWidth: 'none',
			marginBottom: '50px',
		}
	}));

	const containerStyle = {
		padding: '0 10px',
		maxWidth: '1300px',
		width: '100%'
	};

	return {
		TitleMUI,
		WrapperMUI,
		containerStyle,
		LinkWrapperMUI,
	};
};
