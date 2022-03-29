import {styled} from '@mui/material';

export const useAddTrackFormStyle = () => {
	const TrackFormWrapperUI = styled('div')(() => ({
		width: '100%',
		height: '100%',
		marginTop: '25px',

		display: 'flex',
		justifyContent: 'center',
	}));

	const FormWrapperUI = styled('div')(() => ({
		width: '562px',
		height: '310px',

		display: 'flex',
		flexDirection: 'column',

		'& > *': {
			marginBottom: '20px',
		}
	}));

	const TextAreaUI = {
		// height: '183px',
		maxHeight: '183px',
		// minHeight: '183px',

		'& .MuiOutlinedInput-root, .MuiFormControl-root, .MuiOutlinedInput-input': {
			// minHeight: '183px',
			maxHeight: '183px !important',
		}
	};

	const ButtonAddTrackUI = {

		width: '165px',
		height: '32px',

		alignSelf: 'flex-end',
	};

	return {
		TrackFormWrapperUI,
		FormWrapperUI,
		ButtonAddTrackUI,
		TextAreaUI
	};
};
