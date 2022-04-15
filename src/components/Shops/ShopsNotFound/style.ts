import { styled } from '@mui/material';

export const useShopsNotFoundStyles = () => {

	const WrapperMUI = styled('div')(() => ({
		margin: '23px auto 0',
		width: '100%',
		maxWidth: '976px',
		backgroundColor: '#DFE4EC',
		borderRadius: '5px',
		textAlign: 'center',
		padding: '18px 10px',
	}));

	const TextMUI = styled('p')(() => ({
		fontSize: '24px',
		lineHeight: '28px',
		fontWeight: 300,
		color: '#000000',
	}));

	return {
		TextMUI,
		WrapperMUI
	};
};
