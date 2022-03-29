import {styled} from '@mui/material';

export const useLoginFormStyle = () => {


	const LoginFormWrapperBox = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'column',

		padding: '20px 0px 0px',
	}));

	const LoginFormFooterInfoBox = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'column',
		marginBottom: '15px',

		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '12px',
		lineHeight: '14px',
		color: '#000000',
	}));

	const LoginFormLink = styled('div')(() => ({
		fontWeight: '300',
		fontSize: '12px',
		lineHeight: '14px',
		color: '#234A82',

		display: 'inline-block',
	}));

	const LoginFormInput = styled('div')(() => ({
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

	const LoginFormButton = styled('div')(() => ({
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

	return {
		LoginFormWrapperBox,
		LoginFormFooterInfoBox,
		LoginFormLink,
		LoginFormInput,
		LoginFormButton
	};
};
