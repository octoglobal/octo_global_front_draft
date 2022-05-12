import { styled } from '@mui/material';

export const useAboutUsStyle = () => {

	const ParagraphMUI = styled('p')(({theme}) => ({
		fontSize: '18px',
		fontWeight: 300,
		marginBottom: 20
	}));

	return {
		ParagraphMUI
	};
};
