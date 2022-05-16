import { styled } from '@mui/material';
import ButtonUI from '../../../../../UI/UIComponents/ButtonUI/ButtonUI';

export const usePaymentFormStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		padding: '0 7px',
	}));

	const FormContainerMUI = styled('form')(() => ({
		display: 'flex',
	}));

	const TextFieldMUI = styled('div', {
		shouldForwardProp: (prop) => prop !== 'success',
	})<{color?: string, maxWidth?: boolean}>(({color, maxWidth, theme}) => ({
		maxWidth: maxWidth ? '92px' : 'auto',
		'& > div': {
			'& .MuiFormControl-root': {
				height: '39px',
				'& .MuiOutlinedInput-root': {
					'& > input': {
						'&::placeholder': {
							color: color,
							fontSize: '16px',
							lineHeight: '19px'
						},
					},
					'& > fieldset': {
						border: `1px solid ${color}`,
					}
				}
			}
		},
	}));

	const TextFieldCommentContainerMUI = styled('div')(() => ({
		minWidth: '275px',
		margin: '0 10px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end'
	}));

	const StatusMessageMUI = styled('p')(() => ({
		fontSize: '14px',
		lineHeight: '16px',
		marginTop: '3px',
		minHeight: '16px',
	}));


	const SubmitButtonMUI = styled(ButtonUI)(() => ({
		marginTop: '4px',
		maxWidth: '135px',
		fontWeight: 400,
		fontSize: '14px',
		lineHeight: '16px',
		height: '32px',
		marginBottom: 0,
	}));


	return {
		ContainerMUI,
		SubmitButtonMUI,
		TextFieldMUI,
		FormContainerMUI,
		StatusMessageMUI,
		TextFieldCommentContainerMUI,
	};
};
