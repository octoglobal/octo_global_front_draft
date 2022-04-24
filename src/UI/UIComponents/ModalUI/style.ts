import { Dialog, styled } from '@mui/material';

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
		color: '#000000',
	}));

	const DialogBodyMUI = styled('div')(() => ({

	}));

	return {
		DialogMUI,
		DialogBodyMUI,
		DialogTitleMUI
	};
};
