import { styled } from '@mui/material';
import ButtonUI from '../../../../../UI/UIComponents/ButtonUI/ButtonUI';

export const usePaymentFormStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		padding: '0 15px',
	}));

	const FormContainerMUI = styled('form')(({theme}) => ({
		display: 'flex',
		[theme.breakpoints.down(969)]: {
			flexWrap: 'wrap',
		}
	}));

	const TextFieldMUI = styled('div', {
		shouldForwardProp: (prop) => prop !== 'success',
	})<{color?: string, maxWidth?: boolean}>(({color, maxWidth, theme}) => ({
		maxWidth: maxWidth ? '92px' : 'none',
		width: '100%',
		'& > div': {
			'& .MuiFormControl-root': {
				height: '39px',
				'& .MuiOutlinedInput-root': {
					'& > input': {
						fontSize: '16px',
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
		[theme.breakpoints.down(969)]: {
			order: color == '#23D16A' ? 1 : color === '#F35151' ? 2 : 3,
			width: color == '#23D16A' ? '47.5%' : color === '#F35151' ? '47.7%' : '100%',
			marginRight: color == '#23D16A' ? '15px' : 0,
			'& > div': {
				'& .MuiFormControl-root': {
					borderRadius: '10px',
					backgroundColor: 'rgba(0, 0, 0, 0.0)',
				}
			},
		}
	}));

	const TextFieldCommentContainerMUI = styled('div')(({theme}) => ({
		minWidth: '275px',
		margin: '0 10px',
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		alignItems: 'flex-end',
		[theme.breakpoints.down(969)]: {
			margin: '0',
			width:' 100%',
			order: 3,
			marginTop: '15px',
		}
	}));

	const StatusMessageMUI = styled('p')(({theme}) => ({
		fontSize: '14px',
		lineHeight: '16px',
		marginTop: '3px',
		minHeight: '16px',
		[theme.breakpoints.down(969)]: {
			order: 4,
			fontSize: '12px',
			lineHeight: '12px',
			minHeight: '12px',
		}
	}));


	const SubmitButtonMUI = styled(ButtonUI)(({theme}) => ({
		marginTop: '4px',
		maxWidth: '135px',
		fontWeight: 400,
		fontSize: '14px',
		lineHeight: '16px',
		height: '32px',
		marginBottom: 0,
		[theme.breakpoints.down(969)]: {
			order: 5,
		}
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
