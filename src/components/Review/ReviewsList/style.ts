import {styled} from '@mui/material';

export const useReviewListStyle = () => {

	const ReviewsContentMUI = styled('div')(({theme}) => ({
		// marginTop: '120px',
		// border: '1px solid blue',

		minHeight: '305px',

		display: 'flex',
		// justifyContent: 'space-between',
		flexWrap: 'wrap',

		[theme.breakpoints.down(501)]: {
			marginBottom: '30px',

			'& div:last-child': {
				marginBottom: '0',
			}
		}
	}));

	return {
		ReviewsContentMUI,
	};
};
