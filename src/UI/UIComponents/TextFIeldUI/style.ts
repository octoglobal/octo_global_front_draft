import {styled} from '@mui/material';

export const useTextFieldUIStyle = () => {

	const TextFieldUI = styled('div')(() => ({
		width: '100%',
		position: 'relative',

		zIndex: '1',

		'& .MuiFormControl-root': {
			width: '100%',
		},

		'& .MuiFormHelperText-root': {
			fontFamily: 'Roboto',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '10px !important',
			lineHeight: '12px',
			color: '#F35151',
			textAlign: 'end',

			marginTop: '0px',
		},

		'& .MuiOutlinedInput-root': {
			paddingRight: '0px',
		},

		'& .MuiIconButton': {
			backgroundColor: 'none',
		}
	}));

	const TextFieldStyle = {
		width: '100%',
		height: '40px',

		background: '#FFFFFF',
		border: '1px solid #DFE4EC',
		boxSizing: 'border-box',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)',

		'& .MuiOutlinedInput-root, .MuiFormControl-root': {
			width: '100%',
			height: '40px',
			borderRadius: '0px',
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
				fontSize: '14px',
				lineHeight: '16px',
				color: '#C4C4C4',
			}
		},
	};

	const TextFieldMobileStyle = {
		width: '100%',
		height: '37px',

		background: '#FFFFFF',
		border: '1px solid #DFE4EC',
		boxSizing: 'border-box',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)',

		'& .MuiOutlinedInput-root, .MuiFormControl-root': {
			width: '100%',
			height: '37px',
			borderRadius: '0px',
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
				fontSize: '14px',
				lineHeight: '16px',
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
