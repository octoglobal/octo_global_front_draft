import {styled, Button} from '@mui/material';

export const useButtonUIStyle = () => {

	const CustonButtonUI = styled(Button)(() => ({
		color: '#FFFFFF',

		'&: hover': {
			background: '#274D82',
		},

		'& .Mui-disabled': {
			color: '#FFFFFF',
			background: '#274D82',
			opacity: '0.8'
		}
	}));

	const ButtonStyle = {
		background: '#274D82',
		opacity: '1',
		borderRadius: '3px',
		marginBottom: '15px',
		height: '40px',
		display: 'flex',

		width: '100%',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '14px',
		lineHeight: '16px',
		color: '#FFFFFF',
		textAlign: 'center',

		textTransform: 'none',
	};

	const ButtonMobileStyle = {
		...ButtonStyle,
		height: '32px',
	};

	return {
		CustonButtonUI,
		ButtonStyle,
		ButtonMobileStyle
	};
};
