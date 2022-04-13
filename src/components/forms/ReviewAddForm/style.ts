import {styled} from '@mui/material';

export const useReviewAddFormStyle = () => {


	const ReviewAddFormWrapperMUI = styled('div')(({theme}) => ({
		// border: '1px solid red',
		maxWidth: '546px',
		width: '546px',

		[theme.breakpoints.down(501)]: {
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
		borderRadius: '3px',

		marginTop: '30px',
	};

	return {
		ReviewAddFormWrapperMUI,
		ButtonSubmitMUI,
		HelperBoxMUI
	};
};
