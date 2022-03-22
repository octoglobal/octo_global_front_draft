import {styled} from '@mui/material';

export const useFormsStyle = () => {

	const FormsWrapperBox = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'column',

		padding: '20px 0px 0px',
	}));

	const FormsFooterInfoBox = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'column',
		marginBottom: '15px',

		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '12px',
		lineHeight: '14px',
		color: '#000000',
	}));

	const FormsLink = styled('div')(({theme}) => ({
		fontWeight: '300',
		fontSize: '12px',
		lineHeight: '14px',
		color: '#234A82',

		display: 'inline-block',
	}));

	const FormsInput = styled('div')(({theme}) => ({
		marginBottom: '20px',
	}));

	const FormsButton = styled('div')(({theme}) => ({
		marginBottom: '15px',
	}));

	const FormsDescription = styled('div')(({theme}) => ({
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
		}

	}));

	return {
		FormsWrapperBox,
		FormsFooterInfoBox,
		FormsLink,
		FormsInput,
		FormsButton,
		FormsCheckBoxWrapper,
		FormsDescription
	};
};
