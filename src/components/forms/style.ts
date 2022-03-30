import {styled, FormHelperText} from '@mui/material';

export const useFormsStyle = () => {

	const FormsWrapperBox = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'column',

		padding: '20px 0px 0px',

		[theme.breakpoints.down(500)]: {
			padding: '15px 0px 0px',
		}
	}));

	const FormsFooterInfoBox = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'column',
		marginBottom: '15px',

		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '12px',
		lineHeight: '14px',
		color: '#000000',
	}));

	const FormsLink = styled('div')(() => ({
		fontWeight: '300',
		fontSize: '12px',
		lineHeight: '14px',
		color: '#234A82',
		textDecoration: 'underline',

		display: 'inline-block',
		cursor: 'pointer',
	}));

	const FormsInput = styled('div')(({theme}) => ({
		marginBottom: '20px',

		[theme.breakpoints.down(500)]: {
			marginBottom: '15px',
		}
	}));

	const FormsButton = styled('div')(() => ({
		// marginBottom: '15px',

		'& .Mui-disabled': {
			opacity: '0.8',
		}
	}));

	const FormsDescription = styled('div')(() => ({
		marginBottom: '15px',

		'& p': {
			fontStyle: 'normal',
			fontWeight: '300',
			fontSize: '14px',
			lineHeight: '16px',
			color: '#000000',
		},
	}));

	const FormsCheckBoxWrapper = styled('div')(({theme}) => ({
		display: 'flex',
		alignItems: 'center',
		marginBottom: '21px',
		position: 'relative',

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
			padding: '0',
			margin: '0 15px 0 0',
		},

		[theme.breakpoints.down(500)]: {
			marginBottom: '15px',
		}

	}));

	const FormHelperErrorUI = styled(FormHelperText)(() => ({
		position: 'absolute',
		top: '22px',
		right: '0',

		'& span': {
			fontFamily: 'Roboto',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '10px',
			lineHeight: '12px',
			color: 'red !important',
		}
	}));

	return {
		FormsWrapperBox,
		FormsFooterInfoBox,
		FormsLink,
		FormsInput,
		FormsButton,
		FormsCheckBoxWrapper,
		FormsDescription,
		FormHelperErrorUI
	};
};
