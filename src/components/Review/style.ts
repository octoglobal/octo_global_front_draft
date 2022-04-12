import {styled} from '@mui/material';

export const useReviewStyle = () => {

	const ReviewContentMUI = styled('div')(() => ({
		marginTop: '120px',

		// border: '1px solid black',
	}));

	const ReviewBottomMUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

		// border: '1px solid purple',

		'& > div:first-child': {
			alignSelf: 'flex-start',
			maxWidth: '546px',
			// padding: '0',
			padding: '25px 0px',
			// border: '1px solid green',
		}
	}));

	const PaginationWrappMUI = styled('div')(() => ({
		marginRight: '112px',
	}));

	return {
		ReviewContentMUI,
		ReviewBottomMUI,
		PaginationWrappMUI
	};
};
