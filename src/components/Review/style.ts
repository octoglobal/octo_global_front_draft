import {styled} from '@mui/material';

export const useReviewStyle = () => {

	const ReviewContentMUI = styled('div')(() => ({
		marginTop: '120px',

		border: '1px solid red',
	}));

	const ReviewBottomMUI = styled('div')(() => ({
		marginTop: '120px',

		border: '1px solid green',
	}));

	return {
		ReviewContentMUI,
		ReviewBottomMUI
	};
};
