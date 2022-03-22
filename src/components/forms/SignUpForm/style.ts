import {styled} from '@mui/material';

export const useSignUpFormStyle = () => {


	const SignUpFormWrapperBox = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'column',

		padding: '20px 0px 0px',
	}));

	const SignUpFormFooterInfoBox = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'column',
		marginBottom: '15px',

		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '12px',
		lineHeight: '14px',
		color: '#000000',

		textAlign: 'center',
	}));

	const SignUpFormLink = styled('div')(({theme}) => ({
		// fontWeight: '300',
		// fontSize: '12px',
		// lineHeight: '14px',
		color: '#234A82',
		textDecoration: 'underline',

		display: 'inline-block',
	}));

	const SignUpFormInput = styled('div')(({theme}) => ({
		width: '100%',
		marginBottom: '20px',
		height: '40px',

		background: '#FFFFFF',
		border: '1px solid #DFE4EC',
		boxSizing: 'border-box',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)',

		'& .MuiOutlinedInput-root, .MuiFormControl-root': {
			width: '100%',
			height: '40px',
			borderRadius: '0px'
		},
		'& .MuiInputLabel-root': {
			top: '-8px',
		},
		'& input': {
			width: '100%',
		}
	}));

	const SignUpFormButton = styled('div')(({theme}) => ({
		background: '#234A82',
		opacity: '0.8',
		borderRadius: '3px',
		marginBottom: '15px',
		height: '40px',
		display: 'flex',

		'& button': {
			width: '100%',
			fontStyle: 'normal',
			fontWeight: '300',
			fontSize: '14px',
			lineHeight: '16px',
			color: '#FFFFFF',
			textAlign: 'center'
		}
	}));

	const SignUpFormCheckBox = styled('div')(({theme}) => ({
		'& input': {
			width: '20px',
			height: '20px',

			background: '#FFFFFF',
			border: '1px solid #DFE4EC',
			boxSizing: 'border-box',
		},
		'& span': {
			margin: '0 15px 0 0',
			padding: '0',
		}
	}));

	const SignUpFormCheckBoxWrapper = styled('div')(({theme}) => ({
		display: 'flex',
		alignItems: 'center',
		marginBottom: '21px',

		'& p': {
			fontStyle: 'normal',
			fontWeight: '300',
			fontSize: '12px',
			lineHeight: '14px',
			color: '#C4C4C4',
		},

		'& span': {
			width: '20px',
			height: '20px',
		}

	}));

	return {
		SignUpFormWrapperBox,
		SignUpFormFooterInfoBox,
		SignUpFormLink,
		SignUpFormInput,
		SignUpFormButton,
		SignUpFormCheckBox,
		SignUpFormCheckBoxWrapper
	};
};
