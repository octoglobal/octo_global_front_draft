import {styled} from '@mui/material';

export const useFormComponentStyle = () => {

	const FormComponentContent = styled('div', {
		shouldForwardProp: (prop) => prop !== 'background',
	})<{background?: boolean}>(({background, theme}) => ({
		maxWidth: '426px',
		width: 'auto',

		height: 'auto',

		padding: '25px 50px',
		// background: background ? 'rgba(223, 228, 236, 0.5)' : 'inherit',

		background: 'inherit',
		border: background ? '1px solid #AABCBF' : 'none',
		borderRadius: '8px',

		[theme.breakpoints.down(500)]: {
			padding: '0',
		}
	}));

	const FormComponentTitle = styled('h4')(({theme}) => ({
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '36px',
		lineHeight: '42px',

		color: '#000000',

		[theme.breakpoints.down(500)]: {
			fontWeight: '500',
			fontSize: '20px',
			lineHeight: '23px',
		}
	}));

	return {
		FormComponentContent,
		FormComponentTitle
	};
};
