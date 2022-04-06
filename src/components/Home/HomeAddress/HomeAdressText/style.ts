import { styled } from '@mui/material';

export const useHomeAddressTextStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	}));

	const ParagraphMUI = styled('p')(() => ({
		fontSize: '24px',
		lineHeight: '28px',
		color: '#000000',
		maxWidth: '559px',
		marginBottom: '33px',
	}));

	const ButtonWrapperMUI = styled('div')(() => ({
		width: '193px'
	}));

	const buttonSx = {
		fontSize: '18px',
		lineHeight: '21px',
		fontWeight: 400,
		padding: '11px 10px'
	};

	return {
		buttonSx,
		ParagraphMUI,
		ContainerMUI,
		ButtonWrapperMUI,
	};
};
