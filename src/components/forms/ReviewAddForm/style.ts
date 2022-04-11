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
		ButtonSubmitMUI
	};
};
