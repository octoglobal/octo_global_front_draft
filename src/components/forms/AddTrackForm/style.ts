import {styled} from '@mui/material';

export const useAddTrackFormStyle = () => {
	const TrackFormWrapperUI = styled('div')(({theme}) => ({
		width: '100%',
		height: '100%',
		marginTop: '25px',

		display: 'flex',
		justifyContent: 'center',

		[theme.breakpoints.down(500)]: {
			'& form': {
				width: '100%',
			}
		}
	}));

	const FormWrapperUI = styled('div')(({theme}) => ({
		width: '562px',
		height: '310px',

		display: 'flex',
		flexDirection: 'column',

		'& > *': {
			marginBottom: '20px',
		},

		[theme.breakpoints.down(500)]: {
			width: '100%',
			height: 'auto',
		}
	}));

	const HelperBoxMUI = styled('div')(() => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '10px',
		lineHeight: '12px',
		textDecorationLine: 'none',
		color: '#274D82',
		textAlign: 'right',

		cursor: 'pointer',
	}));

	const BottomHelperBoxMUI = styled('div')(() => ({
		// border: '1px solid red',
	}));

	const TextFieldMobileStyleUI = {
		height: '39px',
		marginBottom: '20px',
	};

	const TextAreaUI = {
		// height: '183px',
		maxHeight: '183px',
		// minHeight: '183px',

		'& .MuiOutlinedInput-root, .MuiFormControl-root, .MuiOutlinedInput-input': {
			// minHeight: '183px',
			maxHeight: '183px !important',
		},

		'& textarea::placeholder': {
			color: '#C4C4C4',
		}
	};

	const ButtonAddTrackUI = {
		width: '165px',
		height: '32px',

		alignSelf: 'flex-end',
	};

	return {
		TrackFormWrapperUI,
		HelperBoxMUI,
		FormWrapperUI,
		ButtonAddTrackUI,
		TextAreaUI,
		TextFieldMobileStyleUI,
		BottomHelperBoxMUI
	};
};
