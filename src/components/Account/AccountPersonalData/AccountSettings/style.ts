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
		maxWidth: '453px',

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

		// display: 'grid',
		// gridTemplateColumns: '150px auto',
		// gridTemplateRows: 'auto auto auto auto',
		// gridColumnGap: '20px',
		// gridRowGap: '20px',
		// marginBottom: '15px',

		[theme.breakpoints.down(500)]: {
			gridTemplateColumns: 'auto auto',
			gridColumnGap: '10px',
		},

		[theme.breakpoints.down(320)]: {
			gridTemplateColumns: 'auto',
			gridColumnGap: '10px',
			// gridRowGap: '10px',
		}
	}));

	const FormTableSectionMUI = styled('div')(() => ({
		display: 'flex',
		// justifyContent: 'space-between',
		// textAlign: 'left',
		'& > :nth-child(1n)':{
			width: '180px'
		}
	}));


	const FormTableSectionInputsMUI = styled('div')(() => ({
		alignItems: 'flex-start',
		marginBottom: '15px',
	}));


	const FormTableUserUI = styled('div')(({theme}) => ({
		marginBottom: '12px',
		
		[theme.breakpoints.down(600)]: {
			marginBottom: '6px',
		},
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

	const FormTableTextUI = styled('div')(({theme}) => ({
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '20px',
		lineHeight: '24px',
		// textAlign: 'start',
		color: '#000000',

		// width: '50%',
		[theme.breakpoints.down(600)]: {
			fontSize: '16px'	
		},

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
			fontWeight: '400',
			fontSize: '20px',
			lineHeight: '23px',
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
		// height: '50px',
		// marginRight: '5px',
		marginTop: '5px'
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
		shouldForwardProp: (prop) => prop !== 'selection' && prop !== 'focusBorder',
	})<{selection?: boolean, focusBorder?: boolean}>(({selection = true, focusBorder = false, theme}) => ({
		'& .MuiFormControl-root': {
			// border: 'none',
			// boxShadow: 'none',

			border: selection ? '1px solid #DFE4EC' : '',
			// border: selection ? '5px solid red' : '',
			boxSizing: 'border-box',
			boxShadow: selection ? '0px 4px 4px rgba(0, 0, 0, 0.03)' : 'none',

			height: 'auto',
			width: '287px',

			[theme.breakpoints.down(500)]: {
				width: 'auto',
			}
		},

		'& .MuiFormControl-root:focus-within': {
			border: !selection && focusBorder ? '1px solid #DFE4EC' : ''
		},

		'& .Mui-disabled': {
			color: '#000000 !important',
			WebkitTextFillColor: '#000000 !important',
		},

		'& .MuiFormControl-root input:focus ': {
			// border: !selection && focusBorder ? '1px solid #DFE4EC' : '',
			// boxSizing: 'border-box',
			// boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)',
		},

		[theme.breakpoints.down(500)]: {
			'& .MuiFormControl-root': {
				// border: 'none',
				// boxShadow: 'none',

				// border: selection ? '1px solid #DFE4EC' : '',
				// // border: selection ? '5px solid red' : '',
				// boxSizing: 'border-box',
				// boxShadow: selection ? '0px 4px 4px rgba(0, 0, 0, 0.03)' : 'none',
				//
				// height: 'auto',
				width: '100%',
			},
		}
	}));

	const FormTextFieldFocusBorder = styled('div',{
		shouldForwardProp: (prop) => prop !== 'selection',
	})<{selection?: boolean}>(({selection = false}) => ({

		// border: selection ? '1px solid #DFE4EC' : '',

		'& .MuiFormControl-root input:focus ': {
			border: selection ? '1px solid #DFE4EC' : '',
			boxSizing: 'border-box',
			boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)',
		},
	}));

	const HelperBoxUI = styled('div')(({theme}) => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '12px',
		textDecorationLine: 'underline',
		color: '#274D82',
		textAlign: 'right',
		cursor: 'pointer',

		[theme.breakpoints.down(600)]: {
			fontSize: '12px',
		},
	}));

	const FormTextFieldUI = {
		width: '50%',
		// height: '49px !important',
		// textAlign: 'center',
		borderRadius: '5px',
		maxHeight: '49px',
		'& label': {
			transform: 'translate(14px, 2px) scale(1)',
		},

		'& .MuiOutlinedInput-root': {
		
			'& input': {
				padding: '9px 14px 11px 14px',
				fontStyle: 'normal',
				fontWeight: '300',
				// fontSize: '20px',
				lineHeight: '24px',
				// textAlign: 'start',
				// color: '#000000',
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

	// New Styles
	const FormContainerTopMUI = styled('div')(({theme}) => ({
		marginBottom: '7px',

		[theme.breakpoints.down(600)]: {
			marginBottom: '0px',

		},
	}));
	
	const FormContainerBottomMUI = styled('div')(({theme}) => ({
		marginBottom: '0px',

		[theme.breakpoints.down(600)]: {
			marginBottom: '20px',

		},
	}));
	const FormTableTopSectionMUI = styled('div')(({theme}) => ({
		height: '65px',
		display: 'flex',
		alignItems: 'center',

		[theme.breakpoints.down(600)]: {
			height: '40px',	
			justifyContent: 'space-between',

		},
	}));
	const FormTableSectionLeftMUI  = styled('div')(({theme}) => ({
		// width: '40%',
		width: '167px',
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '20px',
		lineHeight: '23px',
		color: '#000000',

		[theme.breakpoints.down(600)]: {
			fontSize: '16px',
		},
	}));
	const FormTableSectionRightMUI  = styled('div')(({theme}) => ({
		// width: '60%',
		width: '287px',
		textAlign: 'left',
		
		[theme.breakpoints.down(600)]: {
			textAlign: 'right',
		
			'& > * .MuiOutlinedInput-root': {
			
				'& input': {
					padding: '5px 5px 3px 5px',
					fontSize: '16px'
				},
			}
		},
		[theme.breakpoints.down(500)]: {
			textAlign: 'right',
			maxWidth: '227px',
		},
		
		
	}));
	
	const FormSectionMUI = styled('div')(({theme}) => ({
		height: '50px',
		display: 'flex',
		alignItems: 'center',

		[theme.breakpoints.down(600)]: {
			height: '40px',
			justifyContent: 'space-between',
		},
	}));
	const FormTableSectionTopLeftMUI  = styled('div')(({theme}) => ({
		width: '177px',
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '20px',
		lineHeight: '23px',
		color: '#000000',

		[theme.breakpoints.down(600)]: {
			fontSize: '16px',
			width: '166px',
		},
	}));
	const FormTableSectionTopRightMUI  = styled('div')(({theme}) => ({
		width: '277px',
		textAlign: 'left',

		[theme.breakpoints.down(600)]: {
			textAlign: 'right',
			width: '287px',
		},
		[theme.breakpoints.down(600)]: {
			textAlign: 'right',
			maxWidth: '227px',
		},
		
	}));
	

	const TextFieldEmailMUI = styled('div')(({theme}) => ({
		alignItems: 'center',
		
		'& * .MuiOutlinedInput-root': {
			
			'& input': {
				padding: '0px !important',
				fontSize: '20px',
			
			},
		},
		[theme.breakpoints.down(600)]: {
		
			'& * .MuiOutlinedInput-root': {
			
				'& input': {
					fontSize: '16px !important',
					textAlign: 'right'
				},
			},
		},
		
	}));

	const FormTextFieldContainerMUI = styled('div')(({theme}) => ({

		'& > * .MuiOutlinedInput-root': {
			
			'& input': {
				fontSize: '20px',
			},
		},
		[theme.breakpoints.down(600)]: {
			'& > * .MuiOutlinedInput-root': {
			
				'& input': {
					fontSize: '16px !important',
					padding: '5px 5px 3px 5px',
				},
			}
		},
	}));

	return {
		UserFIOUI,
		FormTableUI,
		UserAvatarUI,
		FormButtonUI,
		FormTextFieldUI,
		FormTextFieldWrapperUI,
		FormTextFieldPasswordWrapperUI,
		FormTextFieldBorderUI,
		FormTextFieldFocusBorder,
		FormTableRowUI,
		FormTableEndUI,
		SettingsWrapperUI,
		FormTableUserUI,
		FormTableTextUI,
		FormsWrapperBoxUI,
		FormTableSectionMUI,
		FormTableRowLabelUI,
		FormTableSectionInputsMUI,
		HelperBoxUI,
		FormTableSectionLeftMUI,
		FormTableSectionRightMUI,
		FormTableTopSectionMUI,
		TextFieldEmailMUI,
		FormTableSectionTopLeftMUI,
		FormTableSectionTopRightMUI,
		FormSectionMUI,
		FormContainerTopMUI,
		FormTextFieldContainerMUI,
		FormContainerBottomMUI
	};
};
