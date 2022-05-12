import { styled } from '@mui/material';

export const useAboutUsStyle = () => {

	const ParagraphMUI = styled('p')(() => ({
		fontSize: '18px',
		fontWeight: 300,
		marginBottom: 20
	}));
	const ContainerMUI = styled('div')(() => ({
		maxWidth: '650px',
		margin: '15px auto 0'
	}));
	return {
		ContainerMUI,
		ParagraphMUI
	};
};
