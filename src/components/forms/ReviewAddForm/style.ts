import {styled} from '@mui/material';

export const useReviewAddFormStyle = () => {


	const ReviewAddFormWrapperMUI = styled('div')(() => ({
		// border: '1px solid red',
		maxWidth: '546px',
		width: '546px',
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
