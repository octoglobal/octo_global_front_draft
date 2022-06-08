import { styled } from '@mui/material';

export const useAccountOrdersAddStyles = () => {

	const ContainerMUI = styled('div')(({theme}) => ({
		width: '562px',
		marginLeft: '206px',
		[theme.breakpoints.down(1380)]: {
			marginLeft: '106px'
		},
		[theme.breakpoints.down(1255)]: {
			marginLeft: '56px'
		},
		[theme.breakpoints.down(1255)]: {
			marginLeft: '56px'
		},
		[theme.breakpoints.down(1025)]: {
			marginLeft: '0px',
			width: '100%',
		}
	}));

	const InfoContainerMUI = styled('div')(({theme}) => ({
		display: 'none',
		[theme.breakpoints.down(1025)]: {
			display: 'block',
			width: '100%',
			marginBottom: '20px',
		}
	}));

	const FormMUI = styled('form')(({theme}) => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		marginBottom: '25px',
		[theme.breakpoints.down(1025)]: {
			marginBottom: '17px',
			// alignItems: 'flex-start',
		}
	}));

	const TextFieldContainerMUI = styled('div')(() => ({
		marginBottom: '20px',
		width: '100%',
	}));

	const TextAreaContainerMUI = styled('div')(({theme}) => ({
		width: '100%',
		[theme.breakpoints.up(1025)]: {
			'& > div': {
				'& > .MuiFormControl-root': {
					height: '183px !important',
					'& > .MuiOutlinedInput-root': {
						height: '100% !important',
						padding: '13px 16px',
						'& > textArea': {
							height: '100% !important',
							'&::placeholder': {
								fontWeight: 300,
								color: '#C4C4C4',
							},
						}
					}
				},
			},
		},
		[theme.breakpoints.down(1025)]: {
			'& > div': {
				marginBottom: 0,
				'& > .MuiFormControl-root': {
					height: 'auto',
					'& > .MuiOutlinedInput-root': {
						height: 'auto',
						padding: '15px',
						'& > textArea': {
							fontSize: '16px',
							lineHeight: '18px',
							'&::placeholder': {
								fontSize: '16px',
								fontWeight: 300,
								color: '#C4C4C4',
							},
						}
					}
				},
			},
		}
	}));

	const inputContainerSX = {
		height: '49px',
		'& > div': {
			height: '100%',
			'& > .MuiOutlinedInput-input': {
				height: '49px !important',
				padding: '0 15px',
				'&::placeholder': {
					fontWeight: 300,
					color: '#C4C4C4',
				},
			}
		}
	};

	const inputContainerAdaptiveSX = {
		height: '49px',
		'& > div': {
			height: '100%',
			'& > .MuiOutlinedInput-input': {
				height: '49px !important',
				padding: '0 15px',
				fontSize: '16px',
				'&::placeholder': {
					fontWeight: 300,
					color: '#C4C4C4',
				},
			}
		}
	};

	const ButtonContainerMUI = styled('div')(() => ({
		width: '135px',
		'& > button': {
			backgroundColor: 'rgba(39,77,130,0.8)',
			height: '32px',
			marginBottom: '0',
		}
	}));

	return {
		FormMUI,
		ContainerMUI,
		inputContainerSX,
		ButtonContainerMUI,
		TextFieldContainerMUI,
		TextAreaContainerMUI,
		InfoContainerMUI,
		inputContainerAdaptiveSX
	};
};
