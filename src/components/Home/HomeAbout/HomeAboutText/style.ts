import { styled } from '@mui/material';

export const useHomeAboutTextStyles = () => {

	const ContainerMUI = styled('div')(({theme}) => ({
		marginRight: '76px'
	}));

	const ParagraphMUI = styled('p')(({theme}) => ({
		fontSize: '24px',
		lineHeight: '28px',
		marginBottom: '50px',
		fontWeight: 300,
		maxWidth: '759px'
	}));

	const ButtonWrapperMUI = styled('div')(({theme}) => ({
		maxWidth: '254px',
	}));

	const buttonSx = {
		height: '58px',
		fontSize: '24px',
		lineHeight: '28px',
		fontWeight: 400,
		marginBottom: 0,
		padding: '15px 55px',
	};

	return {
		buttonSx,
		ParagraphMUI,
		ContainerMUI,
		ButtonWrapperMUI
	};
};
