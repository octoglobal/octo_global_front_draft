import {Button, styled} from '@mui/material';

export const useBlogNewPostStyles = () => {

	const AddButtonMUI = styled(Button)(() => ({
		textTransform: 'none',
	}));

	const AddButtonWrapperMUI = styled('div')(() => ({
		display: 'flex',
		alignItems: 'center',
	}));

	const AddButtonTextMUI = styled('div')(({theme}) => ({
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 400,
		color: '#000000',
		marginLeft: '14px',
		[theme.breakpoints.down(769)]: {
			fontSize: '16px',
			lineHeight: '18px',
			marginLeft: '14px',
		}
	}));

	return {
		AddButtonMUI,
		AddButtonTextMUI,
		AddButtonWrapperMUI
	};
};
