import { Dialog, styled } from '@mui/material';
import ButtonUI from '../ButtonUI/ButtonUI';

export const useModalUIStyles = () => {

	const DialogMUI = styled(Dialog)(() => ({
		'& .MuiDialog-container': {
			'& .MuiPaper-root': {
				backgroundColor: '#F1F4F9',
				boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.15)',
				padding: '115px 10px',
				borderRadius: 0,
				minWidth: '704px',
				minHeight: '353px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}
		},
	}));

	const DialogTitleMUI = styled('h5')(() => ({
		fontSize: '20px',
		lineHeight: '23px',
		fontWeight: 400,
		whiteSpace: 'pre-line',
		textAlign: 'center',
		color: '#000000',
	}));

	const DialogBodyMUI = styled('div')(() => ({
		width: '100%',
	}));

	const ButtonContainerMUI = styled('div')(() => ({
		maxWidth: '135px',
		margin: '68px auto 0',
	}));

	const ButtonMUI = styled(ButtonUI)(() => ({
		opacity: 0.8,
		fontWeight: 400,
		minWidth: '135px',
		maxWidth: '135px',
		height: '32px',
		marginBottom: 0,
	}));

	return {
		DialogMUI,
		ButtonMUI,
		DialogBodyMUI,
		DialogTitleMUI,
		ButtonContainerMUI
	};
};
