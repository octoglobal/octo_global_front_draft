import {styled} from '@mui/material';

export const useReviewListStyle = () => {

	const ReviewsContentMUI = styled('div')(() => ({
		// marginTop: '120px',
		// border: '1px solid blue',

		display: 'flex',
		// justifyContent: 'space-between',
		flexWrap: 'wrap',
	}));

	return {
		ReviewsContentMUI,
	};
};
