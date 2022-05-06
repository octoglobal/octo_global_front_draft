import {styled} from '@mui/material';

export const useTextFieldUIStyle = () => {

	const TextFieldUI = styled('div')(({theme}) => ({
		width: '100%',
		position: 'relative',

		zIndex: '1',

		'& .MuiFormControl-root': {
			width: '100%',
			'& .MuiInputBase-root': {
				fontSize: '20px',
			}
		},

		'& .MuiFormHelperText-root': {
			fontFamily: 'Roboto',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '14px !important',
			lineHeight: '16px',
			color: '#F35151',
			textAlign: 'end',

			// marginTop: '5px',
			marginRight: '0px',
		},

		'& .MuiOutlinedInput-root': {
			paddingRight: '0px',
		},

		'& .MuiIconButton:hover': {
			backgroundColor: 'transparent !important',
		},
		'& .MuiButtonBase:hover': {
			backgroundColor: 'transparent !important',
		},

		[theme.breakpoints.down(500)]: {
			'& .MuiFormHelperText-root': {
				fontSize: '12px !important',
				lineHeight: '14px',
			},
		}

	}));

	const TextFieldStyle = {
		width: '100%',
		height: '49px',
		background: '#FFFFFF',
		border: '0',
		boxSizing: 'border-box',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)',

		'& .MuiOutlinedInput-root, .MuiFormControl-root': {
			width: '100%',
			height: '49px',
			borderRadius: '5px',
			paddingRight: '0px',
		},
		'& .MuiInputLabel-root': {
			top: '-8px',
		},
		'& input': {
			width: '100%',
			boxSizing: 'border-box',
			height: '39px',

			'&::placeholder': {
				fontStyle: 'normal',
				fontWeight: '300',
				fontSize: '20px',
				lineHeight: '23px',
				color: '#C4C4C4',
			}
		},
	};

	const TextFieldMobileStyle = {
		width: '100%',
		height: '49px',

		background: '#FFFFFF',
		border: '0',
		boxSizing: 'border-box',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)',

		'& .MuiOutlinedInput-root, .MuiFormControl-root': {
			width: '100%',
			height: '49px',
			borderRadius: '5px',
			paddingRight: '0px',
		},
		'& .MuiInputLabel-root': {
			top: '-8px',
		},
		'& input': {
			width: '100%',
			boxSizing: 'border-box',

			'&::placeholder': {
				fontStyle: 'normal',
				fontWeight: '300',
				fontSize: '16px',
				lineHeight: '40px',
				color: '#C4C4C4',
			}
		},
	};

	const IconUI = styled('span')(() => ({
		width: '25px',
		height: '25px',

		'& svg': {
			width: 'auto',
			height: 'auto',
		},

		position: 'absolute',
		top: '22%',
		right: '7px',
		zIndex: '2',
	}));

	return {
		TextFieldUI,
		TextFieldStyle,
		TextFieldMobileStyle,
		IconUI
	};
};
