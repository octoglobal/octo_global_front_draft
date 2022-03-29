import {styled} from '@mui/material';

export const useFormComponentStyle = () => {

	const FormComponentContent = styled('div', {
		shouldForwardProp: (prop) => prop !== 'background',
	})<{background?: boolean}>(({background, theme}) => ({
		maxWidth: '426px',
		width: 'auto',

		height: 'auto',

		padding: '25px 50px',
		background: background ? 'rgba(223, 228, 236, 0.5)' : 'inherit',

		[theme.breakpoints.down(500)]: {
			padding: '0',
		}
	}));

	const FormComponentTitle = styled('h4')(() => ({
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '36px',
		lineHeight: '42px',

		color: '#000000',
	}));

	return {
		FormComponentContent,
		FormComponentTitle
	};
};
