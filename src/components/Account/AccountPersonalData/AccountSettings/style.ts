import {styled} from '@mui/material';

export const useAccountSettingsStyle = () => {

	const SettingsWrapperUI = styled('div')(({theme}) => ({
		width: '100%',
		height: '100%',
		// padding: '5px',

		'& form': {
			display: 'flex',
			justifyContent: 'center',
			// marginRight: '145px',
		},

		[theme.breakpoints.down(1390)]: {
			display: 'flex',
			justifyContent: 'center',
			marginTop: '40px',
		},

		[theme.breakpoints.down(800)]: {
			'& form': {
				marginRight: '0',
			}
		},

		[theme.breakpoints.down(500)]: {
			marginTop: '10px',
			'& form': {
				marginRight: '0'
			}
		},

	}));

	const FormsWrapperBoxUI = styled('div')(({theme}) => ({
		maxWidth: '458px',

		[theme.breakpoints.down(500)]: {
			width: '100%',
		},

		[theme.breakpoints.down(320)]: {
			'& form': {
				marginTop: '10px',
			},
		}
	}));

	const FormTableUI = styled('div')(({theme}) => ({
		width: '100%',

		display: 'grid',
		gridTemplateColumns: '150px auto',
		gridTemplateRows: 'auto auto auto auto',
		gridColumnGap: '20px',
		gridRowGap: '20px',
		// marginBottom: '15px',

		[theme.breakpoints.down(500)]: {
			gridTemplateColumns: 'auto auto',
			gridColumnGap: '10px',

			width: '100%',
		},

		[theme.breakpoints.down(320)]: {
			gridTemplateColumns: 'auto',
			gridColumnGap: '10px',
			gridRowGap: '10px',

			width: '100%',
		}
	}));

	const FormTableUserUI = styled('div')(() => ({
		marginBottom: '26px',
	}));

	const UserAvatarUI = styled('div')(() => ({
		width: '39px',
		height: '39px',
		marginRight: '9px',
	}));

	const UserFIOUI = styled('div')(() => ({
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '18px',
		lineHeight: '21px',
		textAlign: 'center',
		color: '#000000',
	}));

	const FormTableTextUI = styled('div')(() => ({
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '18px',
		lineHeight: '21px',
		textAlign: 'start',
		color: '#000000',

		width: '50%',
	}));

	const FormTableRowUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: '26px',

		'& p': {
			fontFamily: 'Roboto',
			fontStyle: 'normal',
			fontWeight: '500',
			fontSize: '18px',
			lineHeight: '21px',
			color: '#000000',
		},
	}));

	const FormTableRowLabelUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',

		width: 'auto',

		'& p': {
			fontFamily: 'Roboto',
			fontStyle: 'normal',
			fontWeight: '500',
			fontSize: '18px',
			lineHeight: '21px',
			textAlign: 'start',
			color: '#000000',
		},

		'& svg': {
			marginLeft: '9px',
		}
	}));

	const FormTableEndUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		// marginBottom: '26px',
	}));

	const FormButtonUI = {
		width: '135px',
		height: '32px',
	};

	const FormTextFieldWrapperUI = styled('div')(() => ({
		'& .MuiFormControl-root': {
			border: 'none',
			boxShadow: 'none',

			height: 'auto',
		},

		'& .Mui-disabled': {
			color: '#000000 !important',
			WebkitTextFillColor: '#000000 !important',
		},

		'& .MuiFormControl-root input:focus ': {

			border: '1px solid #DFE4EC',
			boxSizing: 'border-box',
			boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)',
		}
	}));


	const FormTextFieldPasswordWrapperUI = styled('div')(() => ({
		'& .MuiFormControl-root': {
			// border: 'none',
			// boxShadow: 'none',

			border: '1px solid #DFE4EC',
			boxSizing: 'border-box',
			boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)',

			height: 'auto',
		},

		'& .MuiFormControl-root input:focus ': {
			// border: '1px solid #DFE4EC',
			// boxSizing: 'border-box',
			// boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)',
		}
	}));

	const FormTextFieldBorderUI = styled('div', {
		shouldForwardProp: (prop) => prop !== 'selection',
	})<{selection?: boolean}>(({selection = true, theme}) => ({
		'& .MuiFormControl-root': {
			// border: 'none',
			// boxShadow: 'none',

			border: selection ? '1px solid #DFE4EC' : '',
			// border: selection ? '5px solid red' : '',
			boxSizing: 'border-box',
			boxShadow: selection ? '0px 4px 4px rgba(0, 0, 0, 0.03)' : 'none',

			height: 'auto',
			width: '287px',
		},

		'& .Mui-disabled': {
			color: '#000000 !important',
			WebkitTextFillColor: '#000000 !important',
		},

		'& .MuiFormControl-root input:focus ': {
			// border: '1px solid #DFE4EC',
			// boxSizing: 'border-box',
			// boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)',
		},

		[theme.breakpoints.down(320)]: {
			'& .MuiFormControl-root': {
				// border: 'none',
				// boxShadow: 'none',

				// border: selection ? '1px solid #DFE4EC' : '',
				// // border: selection ? '5px solid red' : '',
				// boxSizing: 'border-box',
				// boxShadow: selection ? '0px 4px 4px rgba(0, 0, 0, 0.03)' : 'none',
				//
				// height: 'auto',
				width: 'auto',
			},
		}
	}));

	const HelperBoxUI = styled('div')(() => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '10px',
		lineHeight: '12px',
		textDecorationLine: 'underline',
		color: '#274D82',
		textAlign: 'right',

		cursor: 'pointer',
	}));

	const FormTextFieldUI = {
		width: '50%',
		height: '32px !important',
		textAlign: 'start',

		'& label': {
			transform: 'translate(14px, 2px) scale(1)',
		},

		'& .MuiOutlinedInput-root': {
			'& input': {
				padding: '0px 14px',
				height: '32px !important',
			},

			'& fieldset': {
				border: 'none !important',
				boxShadow: 'none !important',
			},
			'&:hover fieldset': {
				border: 'none !important',
				boxShadow: 'none !important',
			},
			'&.Mui-focused fieldset': {
				border: 'none !important',
				boxShadow: 'none !important',
			},
		}
	};

	return {
		UserFIOUI,
		FormTableUI,
		UserAvatarUI,
		FormButtonUI,
		FormTextFieldUI,
		FormTextFieldWrapperUI,
		FormTextFieldPasswordWrapperUI,
		FormTextFieldBorderUI,
		FormTableRowUI,
		FormTableEndUI,
		SettingsWrapperUI,
		FormTableUserUI,
		FormTableTextUI,
		FormsWrapperBoxUI,
		FormTableRowLabelUI,
		HelperBoxUI,
	};
};
