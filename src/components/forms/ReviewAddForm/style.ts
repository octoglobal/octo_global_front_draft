import {styled} from '@mui/material';

export const useReviewAddFormStyle = () => {


	const ReviewAddFormWrapperMUI = styled('div')(({theme}) => ({
		// border: '1px solid red',
		maxWidth: '546px',
		width: '546px',

		[theme.breakpoints.down(769)]: {
			'& form > div:first-child': {
				padding: '0px',
			},
			'& button': {
				marginTop: '12px !important',
			}
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

	const ButtonSubmitMUI = {
		width: '140px',
		height: '40px',

		alignSelf: 'flex-end',
		background: '#274D82',
		opacity: '0.8',
		borderRadius: '5px',

		marginTop: '30px',
	};

	const TextAreaReviewMUI = {
		// height: '183px',
		maxHeight: '183px',
		// minHeight: '183px',

		'& .MuiOutlinedInput-root, .MuiFormControl-root, .MuiOutlinedInput-input': {
			// minHeight: '183px',
			maxHeight: '183px !important',
			paddingRight: '7.5px',
			borderRadius: '5px',
		},

		'& .MuiOutlinedInput-root': {
			boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.08)',
		},

		'& textarea.MuiOutlinedInput-input': {
			height: '64px !important',
		},

		'& textarea::placeholder': {
			color: '#C4C4C4',
			fontFamily: 'Roboto',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '20px',
			lineHeight: '23px',
		},
	};

	const TextAreaReviewAdaptiveMUI = {
		maxHeight: '183px',

		'& .MuiOutlinedInput-root, .MuiFormControl-root, .MuiOutlinedInput-input': {
			maxHeight: '183px !important',
			paddingRight: '7.5px',
			borderRadius: '5px',
		},

		'& .MuiOutlinedInput-root ': {
			padding: '15px',
			boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.08)',
		},

		'& textarea::placeholder': {
			color: '#C4C4C4',
			fontWeight: '300',
			fontSize: '16px',
			lineHeight: '18.75px',
			height: '19px',
			paddingTop: '3.5px',
		},
	};

	return {
		ReviewAddFormWrapperMUI,
		ButtonSubmitMUI,
		HelperBoxMUI,
		TextAreaReviewMUI,
		TextAreaReviewAdaptiveMUI
	};
};
