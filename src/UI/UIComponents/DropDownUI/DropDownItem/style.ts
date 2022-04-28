import {Button, styled} from '@mui/material';

export const useDropDownItemStyles = () => {

	const ButtonMUI = styled(Button)(() => ({
		minWidth: 'auto',
		width: '100%',
		textTransform: 'none',
		fontSize: '18px',
		lineHeight: '24px',
		fontWeight: 300,
		color: '#000000',
		justifyContent: 'flex-start',
	}));

	return {
		ButtonMUI
	};
};
