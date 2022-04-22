import { styled } from '@mui/material';

export const useAccountOrdersAddStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		width: '562px'
	}));

	const FormMUI = styled('form')(() => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		marginBottom: '25px',
	}));

	const TextFieldContainerMUI = styled('div')(() => ({
		marginBottom: '10px',
		width: '100%',
	}));

	const TextAreaContainerMUI = styled('div')(() => ({
		width: '100%',
		'& > div': {
			marginBottom: '5px',
			'& > .MuiFormControl-root': {
				height: '183px !important',
				'& > .MuiOutlinedInput-root': {
					height: '100% !important',
					padding: '13px 16px',
					'& > textArea': {
						height: '147px !important',
						'&::placeholder': {
							fontWeight: 300,
							color: '#C4C4C4',
						},
					}
				}
			},
		}
	}));

	const ButtonContainerMUI = styled('div')(() => ({
		width: '135px',
		'& > button': {
			height: '32px',
			marginBottom: '0',
		}
	}));

	return {
		FormMUI,
		ContainerMUI,
		ButtonContainerMUI,
		TextFieldContainerMUI,
		TextAreaContainerMUI
	};
};
