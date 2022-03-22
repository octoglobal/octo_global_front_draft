import {styled} from '@mui/material';

export const useFormComponentStyle = () => {

	const FormComponentContent = styled('div')(({theme}) => ({
		width: '426px',
		height: 'auto',

		padding: '25px 50px',
		background: 'rgba(223, 228, 236, 0.5)',
	}));

	const FormComponentTitle = styled('h4')(({theme}) => ({
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
